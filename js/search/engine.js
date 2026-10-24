// Search engine for Physio Explained. OWNER: P5.
//
// Pure ES module (browser + Node, no imports). Build once, query many times:
//
//   const engine = createSearch(entries, { glossary });         // entries = data/index.json, glossary = data/glossary.json
//   engine.search("shin splints", { limit: 20, filters: { bodyArea: "lower-limb" } })
//        → [{ kind:"injury", entry, score, coverage, partial, matches:[{ field, label, text, ranges }], nameRanges, why }]
//   engine.searchGlossary("enthesis", { limit })  → [{ kind:"term", term, id, score, coverage, matches }]
//   engine.suggest("lachm", { limit: 6 })          → mixed injury/term hits for a typeahead (each has .href)
//   engine.didYouMean("achilis tendon")            → "achiles tendon" | null
//   engine.popular(6)                              → entries for the empty-state "popular searches"
//
// Ranking: fielded weights (name/shortName/aka » special tests » structures » region/tissue » sport/population » summary »
// differentials » mechanism), IDF, prefix + typo tolerance (Damerau–Levenshtein ≤1 for terms ≥4 chars, ≤2 for ≥8), British/
// American spelling folding, light stemming, multi-word AND with partial credit, exact/starts-with/phrase boosts, and a
// hand-written clinical synonym map (colloquial names → catalogue ids). `matches[].ranges` are [start, end) offsets into
// `matches[].text` for highlighting.

/* ================================================================== labels (kept local so the engine runs in Node) */
export const REGION_LABELS = {
  "hip-groin": "Hip & groin", thigh: "Thigh", knee: "Knee", "lower-leg": "Lower leg", ankle: "Ankle", foot: "Foot",
  shoulder: "Shoulder", arm: "Arm", elbow: "Elbow", "wrist-hand": "Wrist & hand", cervical: "Cervical spine",
  thoracic: "Thoracic spine", lumbar: "Lumbar spine", pelvis: "Pelvis", "chest-abdomen": "Chest & abdomen",
  "head-face": "Head & face", general: "General"
};
export const BODY_AREA_LABELS = { "lower-limb": "Lower limb", "upper-limb": "Upper limb", spine: "Spine", trunk: "Trunk", head: "Head", general: "General" };
export const BODY_AREA_ORDER = ["lower-limb", "upper-limb", "spine", "trunk", "head", "general"];
export const TISSUE_LABELS = {
  ligament: "Ligament", tendon: "Tendon", muscle: "Muscle", bone: "Bone", cartilage: "Cartilage", meniscus: "Meniscus",
  labrum: "Labrum", "joint-capsule": "Joint capsule", nerve: "Nerve", bursa: "Bursa", disc: "Disc", fascia: "Fascia",
  "fat-pad": "Fat pad", physis: "Growth plate", vascular: "Vascular", brain: "Brain", vestibular: "Vestibular", multiple: "Multiple tissues"
};
const BODY_AREA_OF = {
  "hip-groin": "lower-limb", thigh: "lower-limb", knee: "lower-limb", "lower-leg": "lower-limb", ankle: "lower-limb", foot: "lower-limb",
  shoulder: "upper-limb", arm: "upper-limb", elbow: "upper-limb", "wrist-hand": "upper-limb", cervical: "spine", thoracic: "spine",
  lumbar: "spine", pelvis: "trunk", "chest-abdomen": "trunk", "head-face": "head", general: "general"
};
export const areaOf = (e) => e.bodyArea || BODY_AREA_OF[e.region] || "general";
const humanize = (k) => String(k ?? "").replace(/[-_]+/g, " ").trim();

export const FIELD_LABELS = {
  name: "Name", shortName: "Name", aka: "Also known as", tests: "Special test", structures: "Structure", differentials: "Differential",
  region: "Region", bodyArea: "Body area", tissues: "Tissue", sports: "Sport", populations: "Population", summary: "Summary",
  keyFacts: "Key fact", mechanism: "Mechanism", grading: "Grading", mechanismType: "Mechanism type", onset: "Onset", urgency: "Urgency",
  synonym: "Also called", term: "Term", definition: "Definition", category: "Category"
};
const WEIGHTS = {
  name: 10, shortName: 10, aka: 9, tests: 6.5, structures: 4.5, region: 3.5, tissues: 3.5, sports: 3, populations: 2.5,
  bodyArea: 2, summary: 2, differentials: 2.2, keyFacts: 1.8, grading: 1.5, mechanismType: 1.5, mechanism: 1.2, onset: 1, urgency: 1
};

/* ================================================================== text normalisation */
const STOP = new Set(["a", "an", "the", "of", "in", "on", "at", "for", "to", "and", "or", "with", "from", "by", "my", "is", "are", "i", "me", "after", "around", "about", "have", "has", "got", "been", "do", "does", "can", "how"]);
const IRREGULAR = {
  menisci: "meniscus", bursae: "bursa", vertebrae: "vertebra", phalanges: "phalanx", fasciae: "fascia", femora: "femur", feet: "foot",
  teeth: "tooth", calves: "calf", criteria: "criterion", analyses: "analysis", diagnoses: "diagnosis", prognoses: "prognosis",
  matrices: "matrix", indices: "index", appendices: "appendix", men: "man", women: "woman", children: "child", torn: "tear", broken: "break"
};
const VARIANT = {
  tendinitis: "tendinopathy", tendonitis: "tendinopathy", tendinosis: "tendinopathy", tendonosis: "tendinopathy",
  tendinopathies: "tendinopathy", programme: "program", grey: "gray", sulphate: "sulfate", jewellery: "jewelry", aluminium: "aluminum",
  kneecap: "patella", ageing: "aging", whilst: "while"
};
const NOSTEM = new Set(["achilles", "diabetes", "herpes", "series", "species", "news", "lens"]);

const fold = (s) => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

function spellFold(w) {
  return w
    .replace(/aem/g, "em").replace(/oed/g, "ed").replace(/aed/g, "ed").replace(/aes/g, "es").replace(/aet/g, "et")
    .replace(/aec/g, "ec").replace(/oea/g, "ea").replace(/oeso/g, "eso")
    .replace(/(?<=\w{2})our(?=$|s$|ed$|ing$)/, "or")
    .replace(/(?<=\w)tre$/, "ter").replace(/(?<=\w)bre$/, "ber")
    .replace(/is(e|ed|es|ing|ation|ations)$/, "iz$1").replace(/ys(e|ed|es|ing)$/, "yz$1")
    .replace(/fence$/, "fense");
}
function stem(w) {
  if (w.length < 4 || /\d/.test(w) || NOSTEM.has(w)) return w;
  if (/(ches|shes|sses|xes|zes)$/.test(w)) w = w.slice(0, -2);
  else if (/ies$/.test(w) && w.length > 4) w = w.slice(0, -3) + "y";
  else if (/s$/.test(w) && !/(ss|us|is)$/.test(w)) w = w.slice(0, -1);
  if (w.length > 5 && /ing$/.test(w)) {
    const b = w.slice(0, -3);
    if (b.length >= 3 && /[aeiouy]/.test(b)) w = /([^aeiouy])\1$/.test(b) && !/(ll|ss|zz)$/.test(b) ? b.slice(0, -1) : b;
  } else if (w.length > 4 && /[^e]ed$/.test(w)) {
    const b = w.slice(0, -2);
    if (b.length >= 3 && /[aeiouy]/.test(b)) w = /([^aeiouy])\1$/.test(b) && !/(ll|ss|zz)$/.test(b) ? b.slice(0, -1) : b;
  }
  if (w.length >= 4 && /[^aeiouy]e$/.test(w)) w = w.slice(0, -1);
  return w;
}
const collapse = (w) => w.replace(/([bcdfghjklmnpqrstvwxz])\1+/g, "$1");

/** Folded raw token (no stemming): used for prefix lookups while a word is still being typed. */
function rawFold(raw) {
  return fold(raw).replace(/\./g, "").replace(/['’‘`]s$/, "").replace(/['’‘`]/g, "");
}
/** Canonical form of one token (what the index and queries are compared in). */
export function canon(raw) {
  let w = rawFold(raw);
  if (IRREGULAR[w]) w = IRREGULAR[w];
  if (VARIANT[w]) w = VARIANT[w];
  w = spellFold(w);
  w = stem(w);
  return collapse(w);
}

const TOKEN_RE = /(?:\p{L}\.){2,}|[\p{L}\p{N}]+(?:['’‘`][\p{L}\p{N}]+)*/gu;
function tokenize(text) {
  const out = [];
  TOKEN_RE.lastIndex = 0;
  let m;
  const s = String(text ?? "");
  while ((m = TOKEN_RE.exec(s))) {
    const raw = m[0];
    out.push({ raw, s: m.index, e: m.index + raw.length, f: rawFold(raw), c: canon(raw) });
  }
  return out;
}

/** "Golfer's elbow" → "golfers-elbow" (for #search.<slug>); slugToQuery reverses it loosely. */
export function queryToSlug(q) {
  return fold(q).replace(/['’‘`]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
export const slugToQuery = (s) => String(s ?? "").replace(/-+/g, " ").trim();
/** Stable id for a glossary term (used for #glossary.<id> and element ids). */
export const termSlug = queryToSlug;

/* ================================================================== Damerau–Levenshtein (optimal string alignment) */
const _a = new Int16Array(64), _b = new Int16Array(64), _c = new Int16Array(64);
function dl(a, b, max) {
  const la = a.length, lb = b.length;
  if (Math.abs(la - lb) > max) return max + 1;
  if (la > 60 || lb > 60) return max + 1;
  let p2 = _a, p1 = _b, cur = _c;
  for (let j = 0; j <= lb; j++) p1[j] = j;
  for (let i = 1; i <= la; i++) {
    cur[0] = i;
    let rowMin = i;
    const ca = a.charCodeAt(i - 1);
    for (let j = 1; j <= lb; j++) {
      const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
      let v = Math.min(p1[j] + 1, cur[j - 1] + 1, p1[j - 1] + cost);
      if (i > 1 && j > 1 && ca === b.charCodeAt(j - 2) && a.charCodeAt(i - 2) === b.charCodeAt(j - 1)) v = Math.min(v, p2[j - 2] + 1);
      cur[j] = v;
      if (v < rowMin) rowMin = v;
    }
    if (rowMin > max) return max + 1;
    const t = p2; p2 = p1; p1 = cur; cur = t;
  }
  return p1[lb];
}
const maxTypos = (len) => (len >= 8 ? 2 : len >= 4 ? 1 : 0);

/* ================================================================== clinical synonym map (phrases → catalogue ids, best first) */
const SYNONYMS = [
  // ankle & foot
  [["rolled ankle", "twisted ankle", "sprained ankle", "ankle sprain", "ankle roll", "inversion sprain", "turned ankle"], ["lateral-ankle-sprain"]],
  [["high ankle sprain", "syndesmosis", "syndesmotic injury", "squeeze test"], ["high-ankle-sprain"]],
  [["deltoid ligament"], ["medial-ankle-sprain"]],
  [["ankle giving way", "ankle instability", "weak ankle", "recurrent ankle sprain"], ["chronic-ankle-instability"]],
  [["broken ankle", "fractured ankle", "ottawa", "ottawa ankle rules", "malleolus", "weber classification"], ["ankle-fracture", "lateral-ankle-sprain"]],
  [["talus ocd", "talar dome", "osteochondral talus"], ["osteochondral-lesion-talus"]],
  [["footballers ankle", "anterior ankle pain", "ankle impingement"], ["anterior-ankle-impingement", "posterior-ankle-impingement"]],
  [["os trigonum", "dancers heel", "posterior ankle pain", "dancer impingement"], ["posterior-ankle-impingement"]],
  [["peroneal tendonitis", "peroneal snapping", "peroneal tendon"], ["peroneal-tendinopathy", "peroneal-tendon-subluxation"]],
  [["flat foot adult", "adult acquired flatfoot", "pttd", "tibialis posterior", "posterior tibial tendon"], ["posterior-tibial-tendon-dysfunction"]],
  [["heel spur", "plantar fasciitis", "plantar fasciopathy", "policemans heel", "heel pain", "painful heel"], ["plantar-heel-pain", "calcaneal-apophysitis"]],
  [["severs disease", "sever disease", "growing heel", "heel pain child"], ["calcaneal-apophysitis"]],
  [["march fracture", "metatarsal fracture", "forefoot stress"], ["metatarsal-stress-fracture"]],
  [["jones fracture", "avulsion fifth metatarsal", "dancers fracture"], ["fifth-metatarsal-fracture"]],
  [["midfoot sprain", "midfoot injury", "tarsometatarsal"], ["lisfranc-injury"]],
  [["big toe sprain", "hallux sprain", "first mtp", "plantar plate"], ["turf-toe"]],
  [["mortons neuroma", "intermetatarsal neuroma", "forefoot nerve pain", "burning forefoot"], ["mortons-neuroma"]],
  [["sesamoiditis", "ball of foot pain", "big toe pain"], ["sesamoid-injury", "turf-toe"]],
  [["tarsal tunnel", "medial ankle nerve"], ["tarsal-tunnel-syndrome"]],
  // lower leg
  [["shin splints", "shin splint", "mtss", "shin pain", "runners shin"], ["medial-tibial-stress-syndrome", "tibial-stress-fracture"]],
  [["tennis leg", "calf tear", "pulled calf", "calf pull", "torn calf", "gastroc strain"], ["calf-strain", "soleus-strain"]],
  [["achilles pain", "heel cord", "achilles tendonitis", "sore achilles"], ["midportion-achilles-tendinopathy", "insertional-achilles-tendinopathy"]],
  [["snapped achilles", "achilles tear", "thompson test", "calf squeeze test", "achilles rupture"], ["achilles-rupture"]],
  [["compartment syndrome", "exertional leg pain", "tight calves exercise"], ["chronic-exertional-compartment-syndrome", "acute-compartment-syndrome"]],
  [["foot drop", "drop foot", "peroneal nerve", "fibular nerve"], ["common-peroneal-nerve-injury", "lumbar-disc-herniation"]],
  [["broken leg", "tib fib fracture", "broken shin", "tibia fracture"], ["tibia-fibula-shaft-fracture"]],
  // knee
  [["lachman", "pivot shift", "anterior drawer", "torn acl", "acl tear", "cruciate", "unhappy triad", "o donoghue triad"], ["acl-rupture"]],
  [["posterior drawer", "sag sign", "dashboard injury", "posterior sag"], ["pcl-injury"]],
  [["mcl", "valgus stress test", "medial knee ligament"], ["mcl-sprain"]],
  [["lcl", "plc", "varus stress test", "dial test", "posterolateral knee"], ["posterolateral-corner-injury"]],
  [["thessaly", "mcmurray", "joint line tenderness", "torn meniscus", "torn cartilage knee", "locked knee", "knee locking", "bucket handle"], ["meniscal-tear", "degenerative-meniscal-tear"]],
  [["knee dislocation", "multiligament knee"], ["knee-dislocation"]],
  [["tibial plateau", "plateau fracture"], ["tibial-plateau-fracture"]],
  [["broken kneecap", "kneecap fracture"], ["patella-fracture"]],
  [["kneecap", "knee cap", "patella tracking", "anterior knee pain", "runners knee", "pfps", "patellofemoral"], ["patellofemoral-pain", "itb-syndrome"]],
  [["dislocated kneecap", "patellar instability", "patella apprehension", "kneecap dislocation"], ["patellar-dislocation"]],
  [["jumpers knee", "jumper knee", "patella tendonitis", "patellar tendonitis"], ["patellar-tendinopathy"]],
  [["housemaids knee", "housemaid knee", "kneeling bursitis", "water on the knee"], ["prepatellar-bursitis"]],
  [["goose foot", "goosefoot", "inner knee pain"], ["pes-anserine-pain"]],
  [["hoffa", "fat pad", "fat pad syndrome"], ["hoffa-fat-pad-impingement"]],
  [["osteochondritis dissecans", "knee ocd", "loose body knee"], ["osteochondritis-dissecans-knee", "capitellar-ocd", "osteochondral-lesion-talus"]],
  [["cartilage defect", "chondral injury", "chondral lesion", "microfracture", "acl cartilage"], ["articular-cartilage-defect-knee"]],
  [["it band", "itb", "iliotibial band", "itbs", "lateral knee pain runner"], ["itb-syndrome"]],
  [["osgood", "osgood schlatters", "tibial tubercle", "growing pains knee"], ["osgood-schlatter"]],
  [["sinding larsen", "slj", "inferior pole patella"], ["sinding-larsen-johansson"]],
  [["quad rupture", "quadriceps tendon tear", "quad tendon"], ["quadriceps-tendon-rupture"]],
  [["patellar tendon tear", "patella tendon rupture"], ["patellar-tendon-rupture"]],
  // hip, groin & thigh
  [["hip impingement", "fai", "cam", "pincer", "cam impingement", "pincer impingement", "flexion adduction internal rotation", "fadir"], ["fai-syndrome", "hip-labral-tear"]],
  [["labral tear hip", "labrum hip", "hip clicking", "hip catching"], ["hip-labral-tear", "fai-syndrome"]],
  [["broken hip", "fractured hip", "neck of femur", "fractured neck of femur", "nof", "hip fracture elderly"], ["hip-fracture", "femoral-neck-stress-fracture"]],
  [["hip dislocation", "dislocated hip", "dashboard hip"], ["traumatic-hip-dislocation"]],
  [["slipped upper femoral epiphysis", "supe", "slipped capital", "limping adolescent", "adolescent hip pain"], ["scfe"]],
  [["snapping hip", "coxa saltans", "dancers hip", "clicking hip"], ["snapping-hip-syndrome"]],
  [["groin strain", "groin pull", "pulled groin", "torn groin", "adductor strain", "adductor tear", "groin pain"], ["adductor-longus-strain", "adductor-related-groin-pain", "inguinal-related-groin-pain"]],
  [["sports hernia", "athletic pubalgia", "gilmore groin", "gilmores groin", "inguinal pain"], ["inguinal-related-groin-pain"]],
  [["osteitis pubis", "pubic symphysis", "pubalgia"], ["pubic-related-groin-pain"]],
  [["hip flexor", "hip flexor strain", "psoas", "iliopsoas", "snapping psoas"], ["iliopsoas-related-groin-pain", "quadriceps-strain"]],
  [["trochanteric bursitis", "hip bursitis", "greater trochanter", "gtps", "lateral hip pain", "side of hip pain", "gluteal tendinopathy"], ["gluteal-tendinopathy"]],
  [["hip pointer", "iliac crest bruise"], ["hip-pointer"]],
  [["apophyseal avulsion", "avulsion fracture pelvis", "ischial avulsion", "asis avulsion"], ["pelvic-apophyseal-avulsion", "proximal-hamstring-avulsion"]],
  [["piriformis", "piriformis syndrome", "deep gluteal", "sciatic nerve entrapment", "pain in the butt"], ["deep-gluteal-syndrome"]],
  [["pulled hamstring", "hamstring pull", "torn hamstring", "hammy", "hamstring tear", "hamstring injury", "nordic"], ["hamstring-strain", "proximal-hamstring-avulsion"]],
  [["sitting pain hamstring", "high hamstring tendinopathy", "ischial tuberosity pain", "sit bone pain"], ["proximal-hamstring-tendinopathy"]],
  [["quad strain", "rectus femoris", "pulled quad", "quad tear"], ["quadriceps-strain"]],
  [["dead leg", "cork thigh", "corky", "charley horse", "charlie horse", "thigh bruise", "myositis ossificans", "thigh contusion"], ["quadriceps-contusion"]],
  [["meralgia", "burning thigh", "lateral thigh numbness", "tight jeans"], ["meralgia-paraesthetica"]],
  // shoulder
  [["frozen shoulder", "adhesive capsulitis", "stiff shoulder", "freezing shoulder"], ["frozen-shoulder"]],
  [["rotator cuff", "cuff tear", "supraspinatus", "empty can", "jobe test", "painful arc", "subacromial", "subacromial impingement", "shoulder impingement", "bursitis shoulder"], ["rotator-cuff-related-shoulder-pain", "traumatic-rotator-cuff-tear", "degenerative-rotator-cuff-tear"]],
  [["calcific shoulder", "calcium deposit", "calcific tendonitis"], ["calcific-tendinopathy"]],
  [["dislocated shoulder", "shoulder dislocation", "bankart", "hill sachs", "shoulder apprehension", "shoulder popped out"], ["anterior-shoulder-dislocation", "posterior-shoulder-instability"]],
  [["loose shoulder", "multidirectional", "sulcus sign", "hypermobile shoulder"], ["multidirectional-instability"]],
  [["slap tear", "slap", "labrum shoulder", "superior labrum", "obriens test", "dead arm"], ["slap-lesion", "internal-impingement"]],
  [["internal impingement", "thrower shoulder", "overhead athlete shoulder", "posterosuperior"], ["internal-impingement"]],
  [["little league shoulder", "proximal humeral epiphysiolysis"], ["little-league-shoulder"]],
  [["biceps tendonitis", "long head of biceps", "biceps groove"], ["long-head-biceps-tendinopathy"]],
  [["popeye", "popeye sign", "biceps rupture", "biceps tear"], ["proximal-biceps-rupture", "distal-biceps-rupture"]],
  [["ac separation", "separated shoulder", "shoulder separation", "ac joint sprain", "ac joint", "acromioclavicular", "rockwood"], ["ac-joint-injury"]],
  [["broken collarbone", "broken collar bone", "collarbone", "collar bone", "clavicle"], ["clavicle-fracture", "ac-joint-injury"]],
  [["sc joint", "sternoclavicular"], ["sc-joint-injury"]],
  [["pec tear", "pec rupture", "bench press injury", "pectoralis"], ["pectoralis-major-rupture"]],
  [["broken shoulder", "humeral head fracture", "proximal humerus"], ["proximal-humerus-fracture"]],
  [["winged scapula", "scapular winging", "long thoracic"], ["long-thoracic-nerve-palsy"]],
  [["broken arm", "humerus fracture", "radial nerve palsy", "wrist drop", "holstein lewis"], ["humeral-shaft-fracture", "supracondylar-fracture"]],
  // elbow & forearm
  [["tennis elbow", "lateral epicondylitis", "lateral epicondylalgia", "cozen test", "lateral elbow pain"], ["lateral-elbow-tendinopathy", "radial-tunnel-syndrome"]],
  [["golfers elbow", "golfer elbow", "medial epicondylitis", "medial epicondylalgia", "medial elbow pain"], ["medial-elbow-tendinopathy", "little-league-elbow"]],
  [["distal biceps", "biceps tendon elbow", "hook test"], ["distal-biceps-rupture"]],
  [["triceps rupture", "triceps tear", "triceps tendon"], ["triceps-tendon-rupture"]],
  [["funny bone", "ulnar nerve", "ulnar neuropathy", "cubital tunnel", "ring finger tingling"], ["cubital-tunnel-syndrome", "ulnar-tunnel-syndrome"]],
  [["students elbow", "miners elbow", "olecranon bursitis", "elbow bursitis", "popeye elbow"], ["olecranon-bursitis"]],
  [["radial tunnel", "pin syndrome", "posterior interosseous", "resistant tennis elbow"], ["radial-tunnel-syndrome"]],
  [["thrower elbow", "throwers elbow", "tommy john", "elbow ucl", "valgus extension overload", "moving valgus stress"], ["elbow-ucl-injury"]],
  [["dislocated elbow", "elbow popped out"], ["elbow-dislocation"]],
  [["radial head", "broken elbow", "elbow fracture"], ["radial-head-fracture", "supracondylar-fracture"]],
  [["little league elbow", "medial epicondyle apophysitis"], ["little-league-elbow"]],
  [["capitellum", "capitellar", "panner disease", "gymnast elbow"], ["capitellar-ocd"]],
  [["supracondylar", "childs elbow fracture", "child broken elbow"], ["supracondylar-fracture"]],
  [["nursemaids elbow", "nursemaid elbow", "pulled elbow", "radial head subluxation", "toddler arm", "toddler elbow"], ["pulled-elbow"]],
  // wrist & hand
  [["broken wrist", "colles", "colles fracture", "smith fracture", "fall on outstretched hand", "foosh", "wrist fracture"], ["distal-radius-fracture", "scaphoid-fracture"]],
  [["scaphoid", "snuffbox", "anatomical snuffbox", "scaphoid fracture", "navicular wrist"], ["scaphoid-fracture", "scapholunate-ligament-injury"]],
  [["tfcc", "ulnar sided wrist pain", "triangular fibrocartilage", "ulnar wrist pain", "ulnar impaction"], ["tfcc-injury", "ecu-tendinopathy"]],
  [["scapholunate", "watson test", "scaphoid shift"], ["scapholunate-ligament-injury"]],
  [["hook of hamate", "golf club fracture", "hamate"], ["hook-of-hamate-fracture"]],
  [["ecu", "ecu snap", "ulnar wrist tendon"], ["ecu-tendinopathy"]],
  [["intersection syndrome", "oarsmans wrist", "oarsman wrist", "crepitus forearm"], ["intersection-syndrome"]],
  [["carpal tunnel", "cts", "phalen", "tinel wrist", "median nerve", "night hand numbness"], ["carpal-tunnel-syndrome"]],
  [["de quervain", "dequervain", "mommy thumb", "mommys thumb", "texting thumb", "gamers thumb", "finkelstein", "radial wrist pain"], ["de-quervain-tenosynovitis", "intersection-syndrome"]],
  [["trigger finger", "snapping finger", "locked finger", "trigger thumb", "stenosing tenosynovitis"], ["trigger-finger"]],
  [["guyons canal", "guyon canal", "handlebar palsy", "cyclists palsy", "cyclist palsy", "ulnar tunnel"], ["ulnar-tunnel-syndrome"]],
  [["gamekeepers thumb", "gamekeeper thumb", "skiers thumb", "skier thumb", "thumb ucl", "thumb sprain"], ["skiers-thumb"]],
  [["bennett fracture", "thumb base fracture", "thumb metacarpal"], ["bennett-fracture"]],
  [["mallet finger", "baseball finger", "dropped fingertip"], ["mallet-finger"]],
  [["boutonniere", "central slip", "button hole deformity"], ["boutonniere-deformity"]],
  [["jersey finger", "fdp avulsion", "rugby finger"], ["jersey-finger"]],
  [["pip dislocation", "pip sprain", "jammed finger", "finger dislocation", "volar plate", "coaches finger"], ["pip-volar-plate-injury"]],
  [["boxers fracture", "boxer fracture", "punching injury", "fight bite", "fifth metacarpal", "knuckle fracture"], ["boxers-fracture"]],
  [["climbers finger", "pulley injury", "a2 pulley", "finger pulley", "bowstringing"], ["a2-pulley-rupture"]],
  // spine & trunk
  [["sciatica", "sciatic pain", "leg pain from back", "radicular pain leg", "slump test", "straight leg raise", "slr"], ["lumbar-disc-herniation", "deep-gluteal-syndrome", "lumbar-spinal-stenosis"]],
  [["slipped disc", "slip disc", "herniated disc", "prolapsed disc", "disc bulge", "bulging disc", "disc prolapse", "ruptured disc", "pinched nerve back"], ["lumbar-disc-herniation", "cervical-radiculopathy"]],
  [["lbp", "back pain", "low back pain", "lower back pain", "lumbago", "back strain", "pulled back", "back spasm", "locked back", "acute back"], ["acute-low-back-pain", "lumbar-facet-joint-pain", "lumbar-disc-herniation"]],
  [["pars defect", "pars stress", "spondy", "gymnasts back", "cricket fast bowler back", "fast bowler back", "scotty dog"], ["spondylolysis", "spondylolisthesis"]],
  [["slipped vertebra", "vertebral slip", "olisthesis"], ["spondylolisthesis"]],
  [["saddle numbness", "saddle anaesthesia", "bladder dysfunction back", "cauda equina", "bowel bladder"], ["cauda-equina-syndrome"]],
  [["facet joint", "facet pain", "facet sprain", "extension pain back"], ["lumbar-facet-joint-pain", "thoracic-costovertebral-sprain"]],
  [["claudication", "spinal stenosis", "neurogenic claudication", "shopping trolley sign"], ["lumbar-spinal-stenosis"]],
  [["si joint", "sij", "sacroiliac", "sacroiliac joint", "posterior pelvic pain"], ["sacroiliac-joint-pain", "pregnancy-pelvic-girdle-pain"]],
  [["pelvic girdle pain", "pregnancy back pain", "pregnancy pelvic pain", "pgp", "pregnancy hip pain"], ["pregnancy-pelvic-girdle-pain"]],
  [["tailbone", "tail bone", "coccyx", "tailbone pain", "sitting pain tailbone"], ["coccydynia"]],
  [["sacral fracture", "sacral stress", "sacrum fracture"], ["sacral-stress-fracture"]],
  [["pubic ramus", "ramus fracture"], ["pubic-ramus-stress-fracture"]],
  [["wry neck", "stiff neck", "torticollis", "crick in neck", "cricked neck", "neck locked", "woke up with stiff neck"], ["acute-wry-neck"]],
  [["whiplash", "whiplash injury", "car accident neck", "rear end collision", "wad", "canadian c spine"], ["whiplash-associated-disorder", "cervical-spine-fracture"]],
  [["pinched nerve neck", "neck radiculopathy", "arm pain from neck", "spurling", "spurlings test"], ["cervical-radiculopathy"]],
  [["broken neck", "cervical fracture", "c spine fracture", "c spine injury", "spinal cord injury"], ["cervical-spine-fracture"]],
  [["neck headache", "cervicogenic", "headache from neck", "flexion rotation test"], ["cervicogenic-headache", "cervicogenic-dizziness"]],
  [["myelopathy", "dcm", "hoffmann sign", "clumsy hands", "cervical myelopathy"], ["degenerative-cervical-myelopathy"]],
  [["vertebral artery", "cervical artery dissection", "cad", "dissection", "neck artery", "5 ds and 3 ns", "carotid dissection"], ["cervical-arterial-dysfunction"]],
  [["burner", "stinger", "brachial plexus", "football neck", "shoulder burning contact"], ["stinger-burner"]],
  [["thoracic outlet", "tos", "cervical rib", "scalene", "roos test"], ["thoracic-outlet-syndrome"]],
  [["rib out", "thoracic facet", "costovertebral", "mid back pain", "thoracic pain", "middle back pain"], ["thoracic-costovertebral-sprain"]],
  [["compression fracture", "vertebral compression fracture", "osteoporotic fracture", "spinal fracture elderly", "fragility fracture"], ["osteoporotic-vertebral-fracture"]],
  [["broken rib", "cracked rib", "bruised rib", "rib pain", "fractured rib"], ["rib-fracture", "costochondritis", "intercostal-muscle-strain"]],
  [["rowers rib", "rower rib", "rowing rib pain"], ["rib-stress-fracture"]],
  [["tietze", "chest wall pain", "sternum pain", "costosternal"], ["costochondritis"]],
  [["oblique strain", "internal oblique", "side strain", "cricket side strain", "bowlers side strain"], ["side-strain"]],
  [["six pack strain", "abdominal strain", "rectus abdominis", "abs strain"], ["rectus-abdominis-strain"]],
  [["intercostal", "muscle between ribs", "rib muscle strain"], ["intercostal-muscle-strain"]],
  // head, nerve & general
  [["head injury", "concussion", "mild tbi", "mtbi", "knocked out", "scat6", "sport concussion", "head knock"], ["concussion", "persisting-post-concussion-symptoms"]],
  [["post concussion", "ppcs", "persistent concussion", "long concussion", "slow concussion recovery"], ["persisting-post-concussion-symptoms"]],
  [["vertigo", "dizzy", "dizziness", "spinning", "crystals in ear", "dix hallpike", "epley", "bppv"], ["bppv", "cervicogenic-dizziness", "concussion"]],
  [["jaw pain", "tmj", "tmd", "temporomandibular", "clicking jaw", "jaw clicking", "locked jaw"], ["tmj-disc-displacement"]],
  [["rsd", "crps", "complex regional", "reflex sympathetic", "budapest criteria"], ["complex-regional-pain-syndrome"]],
  [["rhabdo", "rhabdomyolysis", "dark urine exercise", "crossfit injury"], ["exertional-rhabdomyolysis"]],
  [["doms", "muscle soreness", "sore after exercise", "delayed onset", "sore muscles"], ["delayed-onset-muscle-soreness"]],
  [["red s", "reds", "relative energy deficiency", "female athlete triad", "low energy availability", "stress fracture", "stress reaction", "bone stress"], ["bone-stress-injury"]],
  [["growth plate", "salter harris", "physeal", "physis fracture", "child fracture"], ["physeal-fracture", "supracondylar-fracture"]],
  [["nerve injury", "nerve damage", "neurapraxia", "axonotmesis", "neurotmesis", "seddon", "sunderland", "wallerian", "pins and needles", "numbness"], ["peripheral-nerve-injury"]],
  [["red flags", "emergency", "serious pathology", "urgent referral"], ["cauda-equina-syndrome", "cervical-arterial-dysfunction", "acute-compartment-syndrome"]]
];
export const POPULAR = ["ACL", "Shin splints", "Tennis elbow", "Rotator cuff", "Hamstring strain", "Ankle sprain", "Concussion", "Plantar heel pain", "Frozen shoulder", "Low back pain"];

/* ================================================================== indexing */
const lowerBound = (arr, key) => { let lo = 0, hi = arr.length; while (lo < hi) { const mid = (lo + hi) >> 1; if (arr[mid] < key) lo = mid + 1; else hi = mid; } return lo; };

function parenMask(text) {
  const spans = [];
  let depth = 0, start = -1;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === "(" ) { if (depth === 0) start = i; depth++; }
    else if (ch === ")" && depth > 0) { depth--; if (depth === 0) spans.push([start, i]); }
  }
  return (pos) => spans.some(([a, b]) => pos >= a && pos <= b);
}

/** One searchable string. `pos` numbers real words; stop words and bracketed words sit "between" words (x.5) so phrases stay contiguous. */
function makeItem(field, text, weight, { paren = false, label } = {}) {
  const toks = tokenize(text);
  const inParen = paren ? parenMask(text) : null;
  let p = -1, n = 0, tr = 0;
  for (const t of toks) {
    if (STOP.has(t.f) || (inParen && inParen(t.s))) { t.skip = STOP.has(t.f); t.pos = p + 0.5 + 0.001 * tr++; t.paren = !t.skip; continue; }
    p += 1; n += 1; tr = 0; t.pos = p;
  }
  n = Math.max(1, n);
  return { field, label: label || FIELD_LABELS[field] || field, weight, text, toks, n, lenNorm: 1 / (1 + 0.03 * Math.max(0, n - 3)) };
}

function buildIndex(docs) {
  const postings = new Map(), df = new Map(), raws = new Map();
  docs.forEach((doc, d) => {
    const seen = new Set();
    doc.items.forEach((item, it) => {
      item.toks.forEach((t, ti) => {
        if (t.skip || !t.c) return;
        let arr = postings.get(t.c);
        if (!arr) postings.set(t.c, (arr = []));
        arr.push(d, it, ti);
        if (!seen.has(t.c)) { seen.add(t.c); df.set(t.c, (df.get(t.c) || 0) + 1); }
        if (!raws.has(t.f)) raws.set(t.f, t.c);
      });
    });
  });
  const N = docs.length;
  const vocab = [...df.keys()].sort();
  const byLen = new Map();
  for (const w of vocab) { const l = w.length; (byLen.get(l) || byLen.set(l, []).get(l)).push(w); }
  const rawList = [...raws.keys()].sort();
  const idf = new Map();
  for (const [w, c] of df) idf.set(w, Math.log(1 + N / c));
  return { docs, N, postings, df, idf, vocab, byLen, rawList, rawCanon: raws, cache: new Map() };
}

/* ---------- candidate expansion for one query token ---------- */
function candidates(idx, qt, isLast) {
  const key = (isLast ? "1" : "0") + qt.c + "|" + qt.f;
  const hit = idx.cache.get(key);
  if (hit) return hit;
  const out = new Map();
  const add = (term, q, type, plen) => { const cur = out.get(term); if (!cur || cur.q < q) out.set(term, { term, q, type, plen }); };
  const L = qt.c.length;
  const exact = idx.df.has(qt.c);
  if (exact) add(qt.c, 1, "exact");
  let prefixHits = 0;
  if ((isLast && L >= 2) || (!isLast && L >= 3 && !exact)) {
    const pq = (tl) => 0.52 + 0.3 * Math.min(1, L / tl);
    let i = lowerBound(idx.vocab, qt.c), seen = 0;
    while (i < idx.vocab.length && idx.vocab[i].startsWith(qt.c) && seen < 60) {
      const w = idx.vocab[i++];
      if (w !== qt.c) { add(w, pq(w.length), "prefix", qt.f.length); prefixHits++; seen++; }
    }
    if (isLast && qt.f.length >= 2) {
      i = lowerBound(idx.rawList, qt.f); seen = 0;
      while (i < idx.rawList.length && idx.rawList[i].startsWith(qt.f) && seen < 60) {
        const raw = idx.rawList[i++];
        const term = idx.rawCanon.get(raw);
        if (term !== qt.c) { add(term, pq(raw.length), "prefix", qt.f.length); prefixHits++; seen++; }
      }
    }
  }
  if (!exact && prefixHits === 0 && L >= 4) {
    const maxD = maxTypos(L);
    const found = [];
    for (let l = L - maxD; l <= L + maxD; l++) {
      const bucket = idx.byLen.get(l);
      if (!bucket) continue;
      for (const w of bucket) {
        const d = dl(qt.c, w, maxD);
        if (d <= maxD) found.push([d, w]);
      }
    }
    if (isLast && L >= 5) {
      const seenW = new Set(found.map((f) => f[1]));
      for (let l = L; l <= L + 6; l++) {
        const bucket = idx.byLen.get(l);
        if (!bucket) continue;
        for (const w of bucket) {
          if (seenW.has(w)) continue;
          const head = w.slice(0, L);
          if (dl(qt.c, head, 1) <= 1) found.push([1.5, w]);
        }
      }
    }
    found.sort((a, b) => a[0] - b[0] || (idx.df.get(b[1]) || 0) - (idx.df.get(a[1]) || 0));
    for (const [d, w] of found.slice(0, 8)) add(w, d <= 1 ? 0.62 : d < 2 ? 0.5 : 0.48, "fuzzy", qt.f.length);
  }
  const arr = [...out.values()];
  if (idx.cache.size > 400) idx.cache.clear();
  idx.cache.set(key, arr);
  return arr;
}

/* ---------- highlight helpers ---------- */
function mergeRanges(r) {
  r.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const out = [];
  for (const x of r) {
    const last = out[out.length - 1];
    if (last && x[0] <= last[1]) last[1] = Math.max(last[1], x[1]);
    else out.push([x[0], x[1]]);
  }
  return out;
}
/** Shorten long text around the first highlighted range; ranges are re-based onto the returned text. */
function snippet(text, ranges, max = 130) {
  if (text.length <= max) return { text, ranges };
  const first = ranges.length ? ranges[0][0] : 0;
  let start = Math.max(0, first - 40);
  if (start > 0) { const sp = text.indexOf(" ", start); if (sp > -1 && sp < first) start = sp + 1; }
  let end = Math.min(text.length, start + max);
  if (end < text.length) { const sp = text.lastIndexOf(" ", end); if (sp > start + max * 0.6) end = sp; }
  const pre = start > 0 ? "…" : "", post = end < text.length ? "…" : "";
  const shift = pre.length - start;
  const rs = ranges.filter(([a, b]) => a >= start && b <= end).map(([a, b]) => [a + shift, b + shift]);
  return { text: pre + text.slice(start, end) + post, ranges: rs };
}

/* ---------- synonym phrases ---------- */
function prepareSynonyms() {
  const list = [];
  for (const [phrases, ids] of SYNONYMS) {
    for (const phrase of phrases) {
      const toks = tokenize(phrase).filter((t) => !STOP.has(t.f)).map((t) => t.c);
      if (toks.length) list.push({ phrase, toks, ids });
    }
  }
  return list;
}
const SYN_LIST = prepareSynonyms();
const SYN_TOKENS = new Set(SYN_LIST.flatMap((s) => s.toks));

function tokenEq(qt, kt, isLast, partialOk) {
  if (qt.c === kt) return 1;
  if (isLast && partialOk && qt.c.length >= 3 && kt.startsWith(qt.c)) return 0.8;
  const l = qt.c.length;
  if (l >= 5 && dl(qt.c, kt, maxTypos(l)) <= maxTypos(l)) return 0.8;
  return 0;
}
/** Which synonym phrases does the query contain (or partially type)? → Map(entryId → { score, covered:Set<qi>, phrase }) */
function matchSynonyms(qTokens, isGeneric) {
  const res = new Map();
  const n = qTokens.length;
  if (!n) return res;
  for (const syn of SYN_LIST) {
    const k = syn.toks.length;
    let best = null;
    // (a) the whole synonym phrase appears as a contiguous run of query tokens
    for (let s = 0; s + k <= n && k <= n; s++) {
      let q = 1, ok = true;
      for (let j = 0; j < k; j++) {
        const e = tokenEq(qTokens[s + j], syn.toks[j], s + j === n - 1, j === k - 1);
        if (!e) { ok = false; break; }
        q = Math.min(q, e);
      }
      if (ok && (!best || q * k > best.q * best.len)) best = { q, start: s, len: k };
    }
    // (b) the query's tail is a typed-so-far prefix of the phrase ("shin spl")
    if (!best) {
      for (let m = Math.min(n, k - 1); m >= 1; m--) {
        let q = 1, ok = true;
        for (let j = 0; j < m; j++) {
          const e = tokenEq(qTokens[n - m + j], syn.toks[j], n - m + j === n - 1, j === m - 1);
          if (!e) { ok = false; break; }
          q = Math.min(q, e);
        }
        if (ok && (m > 1 || (qTokens[n - 1].c.length >= 3 && !isGeneric(qTokens[n - 1].c)))) { best = { q: q * 0.7, start: n - m, len: m }; break; }
      }
    }
    if (!best) continue;
    syn.ids.forEach((id, rank) => {
      const covered = best.len / n;
      const score = best.q * (0.55 + 0.45 * covered) * Math.pow(0.82, rank);
      const cur = res.get(id);
      if (!cur || cur.score < score) {
        const set = new Set(); for (let j = 0; j < best.len; j++) set.add(best.start + j);
        res.set(id, { score, covered: set, phrase: syn.phrase });
      }
    });
  }
  return res;
}

/* ================================================================== core scoring (shared by injuries and glossary) */
function analyseQuery(text) {
  const all = tokenize(text);
  let tokens = all.filter((t) => !STOP.has(t.f));
  if (!tokens.length) tokens = all;
  return { raw: text, tokens: tokens.slice(0, 8), all };
}

function scoreIndex(idx, q, { synonyms = null, synBoost = 40 } = {}) {
  const n = q.tokens.length;
  const accs = new Map();
  const getAcc = (d) => {
    let a = accs.get(d);
    if (!a) accs.set(d, (a = { tokBest: new Float64Array(n), items: new Map(), syn: null }));
    return a;
  };
  for (let qi = 0; qi < n; qi++) {
    const qt = q.tokens[qi];
    const cands = candidates(idx, qt, qi === n - 1);
    for (const c of cands) {
      const post = idx.postings.get(c.term);
      const idf = idx.idf.get(c.term);
      for (let k = 0; k < post.length; k += 3) {
        const d = post[k], it = post[k + 1], ti = post[k + 2];
        const item = idx.docs[d].items[it];
        const contrib = item.weight * c.q * idf * item.lenNorm;
        const a = getAcc(d);
        if (contrib > a.tokBest[qi]) a.tokBest[qi] = contrib;
        let list = a.items.get(it);
        if (!list) a.items.set(it, (list = []));
        list.push({ qi, ti, q: c.q, idf, type: c.type, plen: c.plen });
      }
    }
  }
  if (synonyms) {
    for (const [id, s] of synonyms) {
      const d = idx.idOf.get(id);
      if (d === undefined) continue;
      getAcc(d).syn = s;
    }
  }
  const results = [];
  for (const [d, a] of accs) {
    let base = 0, covered = 0;
    const coveredSet = new Set();
    for (let qi = 0; qi < n; qi++) if (a.tokBest[qi] > 0) { base += a.tokBest[qi]; coveredSet.add(qi); }
    if (a.syn) for (const qi of a.syn.covered) coveredSet.add(qi);
    covered = coveredSet.size;
    const coverage = covered / n;

    // item-level boosts and the per-item evidence used for highlighting
    let bonus = 0;
    const itemInfo = [];
    for (const [it, hitsAll] of a.items) {
      const item = idx.docs[d].items[it];
      const bestByQ = new Map();
      for (const h of hitsAll) { const cur = bestByQ.get(h.qi); if (!cur || h.q > cur.q) bestByQ.set(h.qi, h); }
      const hits = [...bestByQ.values()].sort((x, y) => x.qi - y.qi);
      const m = hits.length;
      let itemScore = 0;
      for (const h of hits) itemScore += item.weight * h.q * h.idf * item.lenNorm;
      const pos = hits.map((h) => item.toks[h.ti].pos);
      let contiguous = true, inOrder = true;
      for (let i = 1; i < m; i++) {
        const gap = pos[i] - pos[i - 1];
        if (gap <= 0 || gap > 1.0001) contiguous = false;
        if (gap <= 0) inOrder = false;
      }
      const span = pos[m - 1] - pos[0];
      const avgQ = hits.reduce((s, h) => s + h.q, 0) / m;
      const W = item.weight;
      let b = 0;
      if (m === n && m >= 2 && contiguous) b = item.n === m ? W * 2.2 : pos[0] <= 0.5 ? W * 1.4 : W * 1.0;
      else if (m >= 2 && inOrder && span <= m) b = W * 0.6 * (m / n);
      else if (m >= 2) b = W * 0.25 * (m / n);
      else if (n === 1) b = item.n === 1 ? W * 1.2 : pos[0] <= 0.5 ? W * 0.4 : 0;
      b *= avgQ;
      if (b > bonus) bonus = b;
      itemInfo.push({ item, hits, itemScore: itemScore + b });
    }
    let score = base + bonus;
    if (a.syn) score += synBoost * a.syn.score;
    const covFactor = coverage >= 1 ? 1 : 0.55 * coverage * coverage;
    score *= covFactor;
    results.push({ d, score, coverage, itemInfo, syn: a.syn });
  }
  return results;
}

/** Turn per-item evidence into display matches (best item per field, best fields first). */
function toMatches(doc, r, q, { max = 3, snippets = true } = {}) {
  const perField = new Map();
  for (const info of r.itemInfo) {
    const f = info.item.field;
    const cur = perField.get(f);
    if (!cur || info.itemScore > cur.itemScore) perField.set(f, info);
  }
  const arr = [...perField.values()].sort((a, b) => b.itemScore - a.itemScore);
  const matches = [];
  for (const info of arr) {
    const { item, hits } = info;
    let ranges = [];
    for (const h of hits) {
      const t = item.toks[h.ti];
      const end = h.type === "prefix" ? Math.min(t.e, t.s + Math.max(h.plen, 1)) : t.e;
      ranges.push([t.s, end]);
    }
    ranges = mergeRanges(ranges);
    let text = item.text;
    if (snippets && text.length > 130) ({ text, ranges } = snippet(text, ranges));
    matches.push({ field: item.field, label: item.label, text, ranges });
  }
  if (r.syn) matches.push({ field: "synonym", label: FIELD_LABELS.synonym, text: r.syn.phrase, ranges: [[0, r.syn.phrase.length]] });
  // keep the name match first, drop redundant aka matches already visible inside the name
  matches.sort((a, b) => (b.field === "name") - (a.field === "name"));
  const nameText = fold(doc.label || "");
  const keep = matches.filter((m) => !(m.field === "aka" && nameText && nameText.includes(fold(m.text))));
  return keep.slice(0, max);
}

/* ================================================================== public API */
export function createSearch(entriesIn, { glossary = [] } = {}) {
  const entries = Array.isArray(entriesIn) ? entriesIn : [];
  const terms = (Array.isArray(glossary) ? glossary : glossary?.terms || []).map((t) => ({ ...t, id: t.id || termSlug(t.term) }));

  /* ---- injuries ---- */
  const injDocs = entries.map((e) => {
    const items = [];
    const push = (field, text, opts) => { if (text != null && String(text).trim()) items.push(makeItem(field, String(text), WEIGHTS[field], opts)); };
    push("name", e.name, { paren: true });
    push("shortName", e.shortName);
    for (const m of String(e.name || "").matchAll(/\(([^)]+)\)/g)) push("aka", m[1]);
    for (const a of e.aka || []) push("aka", a);
    for (const t of e.keywords?.tests || []) push("tests", t);
    for (const s of e.keywords?.structures || []) push("structures", s);
    for (const dd of e.keywords?.differentials || []) push("differentials", dd);
    push("region", REGION_LABELS[e.region] || humanize(e.region));
    push("bodyArea", BODY_AREA_LABELS[areaOf(e)] || humanize(areaOf(e)));
    for (const t of e.tissues || []) push("tissues", TISSUE_LABELS[t] || humanize(t));
    for (const s of e.sports || []) push("sports", s);
    for (const p of e.populations || []) push("populations", p);
    push("summary", e.summary);
    for (const k of e.keyFacts || []) push("keyFacts", `${k.label}: ${k.value}`);
    push("mechanism", String(e.keywords?.mechanism || "").replace(/\[(?:r\d+(?:\s*,\s*r\d+)*)\]/g, ""));
    push("grading", e.grading);
    for (const m of e.mechanismType || []) push("mechanismType", m);
    push("onset", humanize(e.onset));
    push("urgency", e.urgency);
    return { ref: e, label: e.name, items };
  });
  const inj = buildIndex(injDocs);
  inj.idOf = new Map(entries.map((e, i) => [e.id, i]));

  /* ---- glossary ---- */
  const termDocs = terms.map((t) => {
    const items = [];
    items.push(makeItem("term", t.term, 10, { paren: true }));
    for (const m of String(t.term).matchAll(/\(([^)]+)\)/g)) items.push(makeItem("aka", m[1], 9));
    for (const a of [].concat(t.aka || [])) items.push(makeItem("aka", a, 9));
    items.push(makeItem("definition", t.definition, 1.6));
    if (t.category) items.push(makeItem("category", humanize(t.category), 1.5));
    return { ref: t, label: t.term, items };
  });
  const gl = buildIndex(termDocs);
  gl.idOf = new Map();

  // vocabulary offered for "did you mean" (index words + synonym words)
  const dymVocab = new Set([...inj.vocab, ...gl.vocab, ...SYN_TOKENS]);
  const dymByLen = new Map();
  for (const w of dymVocab) { const l = w.length; (dymByLen.get(l) || dymByLen.set(l, []).get(l)).push(w); }
  const dfAll = (w) => (inj.df.get(w) || 0) + (gl.df.get(w) || 0) + (SYN_TOKENS.has(w) ? 1 : 0);
  const display = new Map(); // canonical → a readable raw form
  for (const idx of [inj, gl]) for (const [raw, c] of idx.rawCanon) { const cur = display.get(c); if (!cur || raw.length < cur.length) display.set(c, raw); }

  const passFilters = (e, f) => {
    if (!f) return true;
    const any = (v) => (Array.isArray(v) ? v : v == null || v === "" ? null : [v]);
    const area = any(f.bodyArea), region = any(f.region), tissue = any(f.tissue), urg = any(f.urgency), onset = any(f.onset), mech = any(f.mechanismType), sport = any(f.sport);
    if (area && !area.includes(areaOf(e))) return false;
    if (region && !region.includes(e.region)) return false;
    if (tissue && !(e.tissues || []).some((t) => tissue.includes(t))) return false;
    if (urg && !urg.includes(e.urgency)) return false;
    if (onset && !onset.includes(e.onset)) return false;
    if (mech && !(e.mechanismType || []).some((m) => mech.includes(m))) return false;
    if (sport && !(e.sports || []).some((s) => sport.some((x) => fold(s).includes(fold(x))))) return false;
    return true;
  };

  const byName = (a, b) => a.entry.name.length - b.entry.name.length || a.entry.name.localeCompare(b.entry.name);

  function search(query, { limit = 50, filters = null, snippets = true } = {}) {
    const q = analyseQuery(String(query ?? ""));
    if (!q.tokens.length) {
      // browse mode: everything that passes the filters, A–Z
      return entries.filter((e) => passFilters(e, filters)).sort((a, b) => a.name.localeCompare(b.name)).slice(0, limit)
        .map((entry) => ({ kind: "injury", entry, score: 0, coverage: 1, partial: false, matches: [], nameRanges: [], why: null }));
    }
    const syn = matchSynonyms(q.tokens, (c) => (inj.df.get(c) || 0) >= 6);
    const raw = scoreIndex(inj, q, { synonyms: syn });
    const rows = [];
    for (const r of raw) {
      const entry = injDocs[r.d].ref;
      if (!passFilters(entry, filters) || r.score <= 0) continue;
      rows.push({ r, entry });
    }
    if (!rows.length) return [];
    let top = 0;
    for (const x of rows) if (x.r.score > top) top = x.r.score;
    const floor = top * 0.07;
    const kept = rows.filter((x) => x.r.score >= floor);
    const out = kept.map(({ r, entry }) => {
      const matches = toMatches(injDocs[r.d], r, q, { snippets });
      const nm = matches.find((m) => m.field === "name");
      const why = matches.find((m) => m.field !== "name" && m.field !== "shortName") || null;
      return { kind: "injury", entry, score: r.score, coverage: r.coverage, partial: r.coverage < 1, matches, nameRanges: nm ? nm.ranges : [], why };
    });
    out.sort((a, b) => b.score - a.score || byName(a, b));
    return out.slice(0, limit);
  }

  function searchGlossary(query, { limit = 20 } = {}) {
    const q = analyseQuery(String(query ?? ""));
    if (!q.tokens.length || !terms.length) return [];
    const raw = scoreIndex(gl, q);
    let top = 0;
    for (const r of raw) if (r.score > top) top = r.score;
    return raw.filter((r) => r.score > 0 && r.score >= top * 0.1)
      .map((r) => {
        const term = termDocs[r.d].ref;
        const matches = toMatches(termDocs[r.d], r, q);
        const nm = matches.find((m) => m.field === "term");
        return { kind: "term", term, id: term.id, href: `#glossary.${term.id}`, score: r.score, coverage: r.coverage, partial: r.coverage < 1, matches, nameRanges: nm ? nm.ranges : [] };
      })
      .sort((a, b) => b.score - a.score || a.term.term.localeCompare(b.term.term))
      .slice(0, limit);
  }

  function suggest(query, { limit = 6, maxTerms = 2 } = {}) {
    const q = String(query ?? "").trim();
    if (q.length < 2) return [];
    const injHits = search(q, { limit: limit + 2 }).map((h) => ({ ...h, href: `#injury.${h.entry.id}` }));
    const termHits = searchGlossary(q, { limit: maxTerms + 1 }).map((h) => ({ ...h, score: h.score * 0.6 }));
    const merged = [...injHits, ...termHits.slice(0, maxTerms)].sort((a, b) => b.score - a.score);
    // never let definitions crowd out every injury
    return merged.slice(0, limit);
  }

  function didYouMean(query) {
    const q = analyseQuery(String(query ?? ""));
    if (!q.tokens.length) return null;
    let changed = false;
    const parts = q.tokens.map((qt, i) => {
      const isLast = i === q.tokens.length - 1;
      const L = qt.c.length;
      if (L < 4 || dfAll(qt.c) > 0 || /\d/.test(qt.c)) return qt.raw;
      if (isLast) {
        let k = lowerBound(inj.vocab, qt.c);
        if (k < inj.vocab.length && inj.vocab[k].startsWith(qt.c)) return qt.raw;
        k = lowerBound(gl.vocab, qt.c);
        if (k < gl.vocab.length && gl.vocab[k].startsWith(qt.c)) return qt.raw;
      }
      const maxD = Math.min(2, Math.max(1, Math.floor(L / 3)));
      let best = null;
      for (let l = L - maxD; l <= L + maxD; l++) {
        for (const w of dymByLen.get(l) || []) {
          const d = dl(qt.c, w, maxD);
          if (d > maxD) continue;
          const f = dfAll(w);
          if (!best || d < best.d || (d === best.d && f > best.f)) best = { w, d, f };
        }
      }
      if (!best) return qt.raw;
      changed = true;
      return display.get(best.w) || best.w;
    });
    return changed ? parts.join(" ") : null;
  }

  function popular(n = 6) {
    const out = [];
    for (const label of POPULAR) {
      const hit = search(label, { limit: 1 })[0];
      if (hit && hit.coverage >= 1) out.push({ label, entry: hit.entry });
      if (out.length >= n) break;
    }
    return out;
  }

  return {
    search, searchGlossary, suggest, didYouMean, popular,
    entries, terms, byId: new Map(entries.map((e) => [e.id, e])),
    stats: { entries: entries.length, terms: terms.length, vocabulary: inj.vocab.length }
  };
}

/* ================================================================== shared, cached engine for the search box and views */
let enginePromise = null;
/** getEngine(store) → Promise<engine>. Pass the app store (or anything with index()/glossary()); falls back to fetch(). */
export function getEngine(store) {
  if (!enginePromise) {
    const getJSON = async (p) => { const r = await fetch(p); if (!r.ok) throw new Error(`${r.status} ${p}`); return r.json(); };
    enginePromise = Promise.all([
      store?.index ? store.index() : getJSON("data/index.json"),
      store?.glossary ? store.glossary().catch(() => []) : getJSON("data/glossary.json").catch(() => [])
    ]).then(([entries, glossary]) => createSearch(entries, { glossary }));
    enginePromise.catch(() => { enginePromise = null; });
  }
  return enginePromise;
}
export const resetEngine = () => { enginePromise = null; };
