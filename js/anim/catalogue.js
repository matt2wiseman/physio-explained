/**
 * ANIMATION CATALOGUE — the single source of truth shared by:
 *   - the animation engine team (must implement EVERY id listed here),
 *   - the content teams (may ONLY reference ids listed here),
 *   - scripts/build.mjs (validates every injury animation against this file).
 * OWNER: head of QC. Do not rename/remove ids. If you need something new, write it in
 * docs/REQUESTS.md; QC will add it here. Engine files may add *decorative, unnamed* parts freely.
 * Format notes: structures are  id: [type, "Label"].  anchors are  id: "description".
 */

export const VIEWS = ["lateral", "anterior"];

/* ---------------- MOI phase: figure rig ---------------- */
/** Joint angle semantics (degrees). Figure faces +x (screen right) in lateral view and faces the viewer in anterior view.
 *  "R" limbs are the NEAR side in lateral view and the viewer's LEFT in anterior view (patient's right). */
export const JOINTS = {
  lateral: {
    neck: "flexion + (chin to chest) / extension -",
    trunk: "flexion + (lean forward relative to pelvis) / extension -",
    pelvis: "anterior tilt + / posterior tilt -",
    shoulderL: "flexion + (arm forward/up; 180 = overhead) / extension - (arm behind)", shoulderR: "same as shoulderL",
    elbowL: "flexion + (0 = straight, max 150)", elbowR: "same",
    wristL: "extension + (back of hand toward forearm) / flexion -", wristR: "same",
    hipL: "flexion + (thigh forward) / extension -", hipR: "same",
    kneeL: "flexion + (0 = straight, max 150)", kneeR: "same",
    ankleL: "dorsiflexion + / plantarflexion -", ankleR: "same",
    toeL: "MTP extension + (toes bent up)", toeR: "same"
  },
  anterior: {
    neck: "lateral flexion + toward patient's right",
    trunk: "lateral flexion + toward patient's right",
    pelvis: "pelvic obliquity + = right side hikes up (left side drops)",
    shoulderL: "abduction + (0 = arm at side, 180 = overhead)", shoulderR: "same",
    elbowL: "flexion + (forearm swings toward midline in this view)", elbowR: "same",
    wristL: "radial deviation + / ulnar deviation -", wristR: "same",
    hipL: "abduction + / adduction -", hipR: "same",
    kneeL: "valgus + (knee drops toward midline) / varus -", kneeR: "same",
    ankleL: "inversion + (sole turns inward) / eversion -", ankleR: "same",
    toeL: "unused in anterior view", toeR: "unused in anterior view"
  }
};
export const JOINT_NAMES = ["neck", "trunk", "pelvis", "shoulderL", "shoulderR", "elbowL", "elbowR", "wristL", "wristR", "hipL", "hipR", "kneeL", "kneeR", "ankleL", "ankleR", "toeL", "toeR"];

/** Points the camera can zoom to / forces & highlights can attach to (resolved on the actor's skeleton). */
export const BODY_TARGETS = [
  "head", "neck", "upperBack", "lowBack", "pelvis", "chest", "abdomen",
  "shoulderL", "shoulderR", "armL", "armR", "elbowL", "elbowR", "forearmL", "forearmR", "wristL", "wristR", "handL", "handR",
  "hipL", "hipR", "groinL", "groinR", "thighL", "thighR", "kneeL", "kneeR", "shinL", "shinR", "calfL", "calfR",
  "ankleL", "ankleR", "heelL", "heelR", "footL", "footR", "toeL", "toeR"
];

/** Pose presets. MOI presets must exist in BOTH views; exercise presets (ex-*) must exist in lateral view (anterior optional, falls back to lateral). */
export const POSE_PRESETS = {
  // — locomotion —
  "stand": "Relaxed upright standing", "walk-heel-strike": "Walking, right heel strike", "walk-push-off": "Walking, right push-off",
  "run-contact": "Running, right foot initial contact", "run-midstance": "Running, right midstance", "run-toe-off": "Running, right toe-off",
  "run-swing-late": "Running/sprinting, right leg late swing (hip flexed ~70°, knee extending) — hamstring strain position",
  "sprint-drive": "Acceleration drive phase, trunk inclined forward", "push-off": "Explosive right push-off: knee extending, ankle forcefully plantarflexing (Achilles rupture)",
  "sudden-dorsiflexion": "Right foot forced into dorsiflexion with knee extended (step into hole / lunge recovery)",
  // — jumping / landing / change of direction —
  "jump-takeoff": "Two-foot jump take-off", "jump-flight": "Airborne, legs tucked", "jump-land": "Soft two-foot landing, hips & knees flexed",
  "landing-stiff": "Stiff landing: knees near-straight, trunk upright, weight on heels (ACL risk)",
  "cut-plant": "Deceleration plant of right foot ahead of body before side-step cut", "pivot": "Planted right foot with trunk rotating over it",
  "valgus-collapse": "Dynamic valgus: right knee collapsing medially, hip adducted/IR, trunk leaning (anterior view key pose)",
  "ankle-inversion": "Right ankle rolling into plantarflexion + inversion on landing/uneven ground",
  "heel-strike-hard": "Heavy right heel strike on hard ground",
  // — squat / lunge / kneel —
  "squat": "Parallel squat", "deep-squat": "Deep squat", "lunge": "Forward lunge, right leg front", "kneel": "Kneeling on both knees",
  // — kicking / throwing / overhead —
  "kick-backswing": "Kicking, right leg back-swing (hip extended, knee flexed)", "kick-contact": "Kicking, right foot ball contact", "kick-follow-through": "Kicking follow-through",
  "throw-cocking": "Overhead throw late cocking: right shoulder abducted ~90° and maximally externally rotated", "throw-acceleration": "Throw acceleration", "throw-follow-through": "Throw deceleration/follow-through",
  "serve-trophy": "Tennis serve trophy position", "overhead-reach": "Reaching overhead with right arm", "bowling-delivery": "Cricket fast-bowling front-foot contact with lateral trunk flexion",
  "swing-golf-top": "Golf swing top of backswing", "swing-golf-impact": "Golf swing impact", "punch": "Straight punch with right fist", "reach-catch": "Fingers extended reaching to catch/block a ball",
  "climb-crimp": "Climbing: hanging from a small hold with crimped fingers", "grip-tool": "Forceful gripping/hammering with right hand", "typing": "Seated at keyboard, wrists slightly extended",
  // — falls & collisions —
  "foosh": "Falling forward onto right outstretched hand, wrist extended", "fall-sideways": "Falling sideways onto right shoulder/hip", "fall-backward": "Falling backward onto buttocks/coccyx",
  "slip": "Right foot slipping forward, centre of mass falling back", "trip": "Tripping forward, arms reaching", "tackle-low": "Being tackled at the legs (pair with opponent actor)", "tackle-high": "Collision at upper body/head height",
  "ski-crouch": "Skiing crouch", "ski-fall-back": "Skiing 'phantom foot' fall: hips below knees, weight back, knee flexed & internally rotated",
  "ballet-releve": "Dance relevé/en pointe: maximal plantarflexion",
  // — lifting / sitting / lying —
  "lift-stoop": "Stoop lift: spine flexed, knees straight", "lift-squat": "Squat lift, neutral spine", "carry": "Carrying a load in front", "sit": "Sitting on a chair", "sit-car": "Seated in a car seat (whiplash setup)", "sit-desk": "Sitting at desk, slouched",
  "lie-supine": "Lying on back", "lie-prone": "Lying face down", "lie-side": "Side-lying on left side",
  // — exercise presets (lateral view required) —
  "ex-quad-set": "Supine isometric quadriceps set", "ex-straight-leg-raise": "Supine straight leg raise (right)", "ex-heel-slide": "Supine heel slide (right knee flexing)",
  "ex-bridge": "Double-leg glute bridge", "ex-single-leg-bridge": "Single-leg bridge (right stance)", "ex-hamstring-bridge": "Long-lever bridge, heels on box", "ex-hip-thrust": "Hip thrust, shoulders on bench",
  "ex-clamshell": "Side-lying clamshell", "ex-side-plank": "Side plank on forearm", "ex-plank": "Forearm plank", "ex-bird-dog": "Quadruped bird-dog", "ex-dead-bug": "Dead bug",
  "ex-copenhagen": "Copenhagen adductor side plank", "ex-squat": "Bodyweight squat", "ex-split-squat": "Split squat", "ex-lunge": "Forward lunge", "ex-step-up": "Step-up onto box",
  "ex-step-down": "Lateral/forward step-down from step", "ex-single-leg-squat": "Single-leg squat", "ex-single-leg-balance": "Single-leg balance", "ex-wall-sit": "Wall sit",
  "ex-calf-raise": "Double-leg calf raise", "ex-single-leg-calf-raise": "Single-leg calf raise", "ex-seated-calf-raise": "Seated (bent-knee) calf raise",
  "ex-nordic": "Nordic hamstring lowering", "ex-rdl": "Romanian deadlift", "ex-knee-extension": "Seated knee extension", "ex-hip-abduction-standing": "Standing hip abduction",
  "ex-hop": "Single-leg hop", "ex-jump-squat": "Jump squat", "ex-ankle-alphabet": "Seated ankle range-of-motion",
  "ex-shoulder-er-side-lying": "Side-lying shoulder external rotation", "ex-shoulder-er-band": "Standing band external rotation, elbow at side", "ex-shoulder-flexion": "Shoulder flexion raise",
  "ex-scaption": "Scaption raise (plane of scapula)", "ex-pendulum": "Pendulum exercise (trunk flexed, arm hanging)", "ex-wall-slide": "Wall slide", "ex-row": "Band/dumbbell row",
  "ex-press-up": "Push-up", "ex-overhead-press": "Overhead press", "ex-prone-y": "Prone Y raise", "ex-wrist-extension": "Seated wrist extension with dumbbell (forearm supported)",
  "ex-wrist-flexion": "Seated wrist flexion with dumbbell", "ex-grip": "Grip squeeze", "ex-chin-tuck": "Supine cranio-cervical flexion (chin nod)", "ex-neck-isometric": "Seated neck isometric",
  "ex-thoracic-extension": "Thoracic extension over foam roller", "ex-cat-camel": "Quadruped cat–camel", "ex-prone-press-up": "Prone press-up (lumbar extension)",
  "ex-knee-to-chest": "Supine knee to chest", "ex-slump-glide": "Seated slump sciatic nerve glide", "ex-median-nerve-glide": "Median nerve glide", "ex-farmer-carry": "Farmer carry"
};

export const KITS = ["athlete", "opponent", "older-adult", "child", "worker"];
export const ENVIRONMENTS = ["plain", "pitch", "court", "track", "gym", "road", "home", "stairs", "snow", "office", "car", "climbing-wall", "dance-studio", "pool"];
export const PROPS = [
  "ball-soccer", "ball-basketball", "ball-rugby", "ball-cricket", "ball-tennis", "ball-volleyball", "racquet", "cricket-bat", "golf-club",
  "barbell", "dumbbell", "kettlebell", "box", "plyo-box", "step", "kerb", "hurdle", "skis", "bike", "car-seat", "chair", "desk", "bench",
  "resistance-band", "mat", "foam-roller", "wall", "climbing-hold", "stairs", "ice-patch", "hammer", "keyboard"
];
export const FORCE_DIRS = ["up", "down", "forward", "backward", "medial", "lateral", "toward-viewer", "away-from-viewer"];

/* ---------------- Close-up phase ---------------- */
/** Structure types and the actions each supports. GENERIC_ACTIONS work on every type. */
export const GENERIC_ACTIONS = ["highlight", "unhighlight", "pulse", "label", "fade", "show", "hide", "swell", "inflame", "move", "rotate", "reset"];
export const SCENE_ACTIONS = ["arrow", "impact", "camera", "pain"]; // no target; use `at`
export const STRUCTURE_TYPES = {
  bone:      ["fracture", "bruise", "stress"],
  ligament:  ["stretch", "tear", "avulse", "degenerate", "thicken"],
  tendon:    ["stretch", "tear", "avulse", "degenerate", "thicken", "calcify"],
  muscle:    ["contract", "stretch", "strain", "haematoma", "ossify", "atrophy", "spasm"],
  cartilage: ["tear", "compress", "lesion", "degenerate"],
  nerve:     ["compress", "stretch", "irritate", "entrap"],
  vessel:    ["compress", "tear", "occlude"],
  bursa:     ["compress"],
  disc:      ["herniate", "degenerate", "fissure", "compress"],
  capsule:   ["tighten", "stretch", "tear"],
  fatpad:    ["impinge"],
  fascia:    ["tear", "thicken", "degenerate"],
  space:     ["bleed", "effuse", "pressure"],
  physis:    ["separate", "fracture", "stress"],
  brain:     ["accelerate", "shear", "bruise"],
  particles: ["scatter"]
};
export const FRACTURE_PATTERNS = ["transverse", "oblique", "spiral", "comminuted", "avulsion", "stress", "compression", "greenstick", "buckle", "physeal", "impaction", "wedge"];
export const CARTILAGE_TEARS = ["longitudinal", "bucket-handle", "radial", "horizontal", "flap", "complex", "degenerative", "detachment"];
export const HERNIATION_GRADES = ["bulge", "protrusion", "extrusion", "sequestration"];
export const SALTER_HARRIS = ["I", "II", "III", "IV", "V"];

/**
 * SCENES — each must be implemented as js/anim/scenes/<id>.js (see docs/ANIMATION_DSL.md §4).
 * `side` is the limb drawn. `view` is the anatomical view. Directions (medial, anterior, ...) are declared by the scene file.
 */
export const SCENES = {
  /* ===== LOWER LIMB — knee, thigh, hip (engine agent A3) ===== */
  "knee-anterior": {
    title: "Knee — anterior view (patella reflected)", view: "anterior", side: "R",
    structures: {
      femur: ["bone", "Femur"], tibia: ["bone", "Tibia"], fibula: ["bone", "Fibula"], patella: ["bone", "Patella (reflected)"],
      acl: ["ligament", "Anterior cruciate ligament"], pcl: ["ligament", "Posterior cruciate ligament"],
      mcl: ["ligament", "Medial collateral ligament"], lcl: ["ligament", "Lateral collateral ligament"],
      medialMeniscus: ["cartilage", "Medial meniscus"], lateralMeniscus: ["cartilage", "Lateral meniscus"],
      femoralCartilage: ["cartilage", "Femoral articular cartilage"], tibialCartilage: ["cartilage", "Tibial articular cartilage"],
      itBand: ["tendon", "Iliotibial band"], pesAnserine: ["tendon", "Pes anserinus"], popliteusTendon: ["tendon", "Popliteus tendon"],
      capsule: ["capsule", "Joint capsule"], jointSpace: ["space", "Joint cavity"], distalFemoralPhysis: ["physis", "Distal femoral physis"], proximalTibialPhysis: ["physis", "Proximal tibial physis"]
    },
    anchors: {
      medialFemoralCondyle: "medial femoral condyle", lateralFemoralCondyle: "lateral femoral condyle", medialTibialPlateau: "medial tibial plateau",
      lateralTibialPlateau: "lateral tibial plateau", posterolateralTibialPlateau: "posterolateral tibial plateau (bone-bruise site)", tibialSpine: "tibial spines",
      intercondylarNotch: "intercondylar notch", lateralEpicondyle: "lateral femoral epicondyle (ITB friction site)", medialEpicondyle: "medial femoral epicondyle",
      gerdysTubercle: "Gerdy's tubercle", fibularHead: "fibular head", pesAnserineInsertion: "pes anserinus insertion / bursa",
      aclFemoralAttachment: "ACL femoral footprint", aclTibialAttachment: "ACL tibial footprint", jointLineMedial: "medial joint line", jointLineLateral: "lateral joint line",
      mclFemoralAttachment: "MCL femoral origin", mclMid: "MCL mid-substance", jointCentre: "centre of the joint", medialFemoralCondyleLateralAspect: "lateral aspect of MFC (classic OCD site)"
    }
  },
  "knee-sagittal": {
    title: "Knee — lateral (sagittal) view", view: "lateral", side: "R",
    structures: {
      femur: ["bone", "Femur"], tibia: ["bone", "Tibia"], fibula: ["bone", "Fibula"], patella: ["bone", "Patella"],
      quadricepsTendon: ["tendon", "Quadriceps tendon"], patellarTendon: ["tendon", "Patellar tendon"],
      quadriceps: ["muscle", "Quadriceps"], hamstrings: ["muscle", "Hamstrings"], gastrocnemius: ["muscle", "Gastrocnemius"],
      acl: ["ligament", "ACL"], pcl: ["ligament", "PCL"], meniscus: ["cartilage", "Meniscus (sagittal profile)"],
      femoralCartilage: ["cartilage", "Femoral cartilage"], patellarCartilage: ["cartilage", "Patellar cartilage"], tibialCartilage: ["cartilage", "Tibial cartilage"],
      infrapatellarFatPad: ["fatpad", "Infrapatellar (Hoffa's) fat pad"], prepatellarBursa: ["bursa", "Prepatellar bursa"], infrapatellarBursa: ["bursa", "Deep infrapatellar bursa"],
      suprapatellarPouch: ["space", "Suprapatellar pouch"], jointSpace: ["space", "Joint cavity"], capsule: ["capsule", "Posterior capsule"],
      tibialApophysis: ["physis", "Tibial tuberosity apophysis"], proximalTibialPhysis: ["physis", "Proximal tibial physis"], distalFemoralPhysis: ["physis", "Distal femoral physis"]
    },
    anchors: {
      tibialTuberosity: "tibial tuberosity", inferiorPolePatella: "inferior pole of patella", superiorPolePatella: "superior pole of patella",
      patellarTendonProximal: "proximal patellar tendon (classic tendinopathy site)", patellarTendonMid: "patellar tendon mid-substance", quadricepsTendonInsertion: "quadriceps tendon insertion",
      trochlea: "femoral trochlea", anteriorHornMeniscus: "anterior horn of meniscus", posteriorHornMeniscus: "posterior horn of meniscus",
      femoralCondyleWeightBearing: "weight-bearing femoral condyle", poplitealFossa: "popliteal fossa", tibialPlateauPosterior: "posterior tibial plateau",
      tibialPlateauAnterior: "anterior tibial plateau", jointCentre: "joint centre", patellaCentre: "centre of patella", prepatellar: "front of the patella"
    }
  },
  "patellofemoral-axial": {
    title: "Patellofemoral joint — axial view", view: "axial", side: "R",
    structures: {
      femur: ["bone", "Femoral trochlea"], patella: ["bone", "Patella"], mpfl: ["ligament", "Medial patellofemoral ligament"], lateralRetinaculum: ["ligament", "Lateral retinaculum"],
      vmo: ["muscle", "Vastus medialis obliquus"], vastusLateralis: ["muscle", "Vastus lateralis"], patellarCartilage: ["cartilage", "Patellar cartilage"], trochlearCartilage: ["cartilage", "Trochlear cartilage"],
      jointSpace: ["space", "Patellofemoral joint space"]
    },
    anchors: {
      medialFacet: "medial patellar facet", lateralFacet: "lateral patellar facet", trochlearGroove: "trochlear groove", lateralTrochlearRidge: "lateral trochlear ridge",
      lateralFemoralCondyle: "lateral femoral condyle (impaction site on relocation)", mpflFemoralAttachment: "MPFL femoral attachment", mpflPatellarAttachment: "MPFL patellar attachment",
      dislocatedPosition: "position of a laterally dislocated patella", medialPatellarBorder: "medial patellar border (avulsion/impaction site)", patellaCentre: "centre of patella"
    }
  },
  "thigh-posterior": {
    title: "Posterior thigh — hamstrings", view: "posterior", side: "R",
    structures: {
      pelvis: ["bone", "Pelvis (ischium)"], femur: ["bone", "Femur"], tibia: ["bone", "Tibia"], fibula: ["bone", "Fibula"],
      bicepsFemorisLong: ["muscle", "Biceps femoris (long head)"], bicepsFemorisShort: ["muscle", "Biceps femoris (short head)"], semitendinosus: ["muscle", "Semitendinosus"], semimembranosus: ["muscle", "Semimembranosus"],
      proximalHamstringTendon: ["tendon", "Proximal (conjoint) hamstring tendon"], bflhCentralTendon: ["tendon", "BFlh intramuscular (central) tendon"], bicepsFemorisTendon: ["tendon", "Distal biceps femoris tendon"],
      adductorMagnus: ["muscle", "Adductor magnus"], gluteusMaximus: ["muscle", "Gluteus maximus"], sciaticNerve: ["nerve", "Sciatic nerve"], ischialBursa: ["bursa", "Ischial bursa"]
    },
    anchors: {
      ischialTuberosity: "ischial tuberosity", bflhProximalMTJ: "BFlh proximal musculotendinous junction (most common strain site)", bflhDistalMTJ: "BFlh distal MTJ",
      semitendinosusMid: "semitendinosus mid-belly", semimembranosusProximal: "proximal semimembranosus (stretch-type strain site)", fibularHead: "fibular head",
      poplitealFossa: "popliteal fossa", midThighPosterior: "mid posterior thigh", proximalTendonInsertion: "tendon footprint on ischium"
    }
  },
  "thigh-anterior": {
    title: "Anterior thigh — quadriceps", view: "anterior", side: "R",
    structures: {
      pelvis: ["bone", "Pelvis"], femur: ["bone", "Femur"], patella: ["bone", "Patella"],
      rectusFemoris: ["muscle", "Rectus femoris"], vastusLateralis: ["muscle", "Vastus lateralis"], vastusMedialis: ["muscle", "Vastus medialis"], vastusIntermedius: ["muscle", "Vastus intermedius"],
      sartorius: ["muscle", "Sartorius"], adductorLongus: ["muscle", "Adductor longus"], tensorFasciaeLatae: ["muscle", "Tensor fasciae latae"],
      rectusFemorisProximalTendon: ["tendon", "Rectus femoris proximal tendons"], rfCentralTendon: ["tendon", "Rectus femoris central aponeurosis"], quadricepsTendon: ["tendon", "Quadriceps tendon"],
      itBand: ["tendon", "Iliotibial band"], femoralNerve: ["nerve", "Femoral nerve"], femoralArtery: ["vessel", "Femoral artery"]
    },
    anchors: {
      asis: "anterior superior iliac spine", aiis: "anterior inferior iliac spine", midThighAnterior: "mid anterior thigh", anterolateralThigh: "anterolateral thigh (common contusion site)",
      femurShaftMid: "femoral shaft mid-third", quadricepsTendonInsertion: "quadriceps insertion at patella", superiorPolePatella: "superior pole of patella", rfMTJ: "rectus femoris MTJ"
    }
  },
  "hip-anterior": {
    title: "Hip & groin — anterior view", view: "anterior", side: "R",
    structures: {
      pelvis: ["bone", "Pelvis"], femur: ["bone", "Femur"], femoralHead: ["bone", "Femoral head"], labrum: ["cartilage", "Acetabular labrum"], hipCartilage: ["cartilage", "Articular cartilage"],
      capsule: ["capsule", "Hip capsule"], iliopsoas: ["muscle", "Iliopsoas"], iliopsoasTendon: ["tendon", "Iliopsoas tendon"], rectusFemoris: ["muscle", "Rectus femoris"], sartorius: ["muscle", "Sartorius"],
      adductorLongus: ["muscle", "Adductor longus"], adductorLongusTendon: ["tendon", "Adductor longus tendon"], gracilis: ["muscle", "Gracilis"], pectineus: ["muscle", "Pectineus"],
      rectusAbdominis: ["muscle", "Rectus abdominis"], inguinalLigament: ["ligament", "Inguinal ligament"], pubicSymphysis: ["cartilage", "Pubic symphysis"],
      femoralNerve: ["nerve", "Femoral nerve"], obturatorNerve: ["nerve", "Obturator nerve"], iliopsoasBursa: ["bursa", "Iliopsoas bursa"], inguinalCanal: ["space", "Inguinal canal"],
      jointSpace: ["space", "Hip joint cavity"], proximalFemoralPhysis: ["physis", "Proximal femoral physis"]
    },
    anchors: {
      asis: "ASIS", aiis: "AIIS", anterosuperiorLabrum: "anterosuperior labrum (common tear site)", headNeckJunction: "femoral head–neck junction (cam site)", acetabularRim: "acetabular rim (pincer site)",
      femoralNeckSuperior: "superior (tension-side) femoral neck", femoralNeckInferior: "inferior (compression-side) femoral neck", subcapital: "subcapital femoral neck",
      pubicTubercle: "pubic tubercle", adductorLongusOrigin: "adductor longus enthesis", adductorLongusMTJ: "adductor longus MTJ", superficialInguinalRing: "superficial inguinal ring",
      pubicBody: "pubic body", lesserTrochanter: "lesser trochanter", greaterTrochanter: "greater trochanter", iliopectinealEminence: "iliopectineal eminence (snapping site)",
      intertrochanteric: "intertrochanteric line", posteriorDislocationPosition: "femoral head position after posterior dislocation"
    }
  },
  "hip-lateral": {
    title: "Hip — lateral view (gluteal tendons)", view: "lateral", side: "R",
    structures: {
      pelvis: ["bone", "Pelvis"], femur: ["bone", "Femur"], gluteusMedius: ["muscle", "Gluteus medius"], gluteusMinimus: ["muscle", "Gluteus minimus"], gluteusMaximus: ["muscle", "Gluteus maximus"],
      gluteusMediusTendon: ["tendon", "Gluteus medius tendon"], gluteusMinimusTendon: ["tendon", "Gluteus minimus tendon"], tensorFasciaeLatae: ["muscle", "Tensor fasciae latae"],
      itBand: ["tendon", "Iliotibial band"], trochantericBursa: ["bursa", "Subgluteus maximus (trochanteric) bursa"], subgluteusMediusBursa: ["bursa", "Subgluteus medius bursa"]
    },
    anchors: {
      greaterTrochanter: "greater trochanter", iliacCrest: "iliac crest", iliacCrestLateral: "lateral iliac crest (hip pointer site)", asis: "ASIS",
      anteriorFacet: "anterior facet (minimus)", lateralFacet: "lateral facet (medius)", superoposteriorFacet: "superoposterior facet", itbOverTrochanter: "ITB over trochanter (compression site)"
    }
  },
  "hip-posterior": {
    title: "Buttock — deep gluteal space", view: "posterior", side: "R",
    structures: {
      pelvis: ["bone", "Pelvis"], sacrum: ["bone", "Sacrum"], femur: ["bone", "Femur"], gluteusMaximus: ["muscle", "Gluteus maximus"], piriformis: ["muscle", "Piriformis"],
      obturatorInternus: ["muscle", "Obturator internus"], gemelli: ["muscle", "Gemelli"], quadratusFemoris: ["muscle", "Quadratus femoris"], sciaticNerve: ["nerve", "Sciatic nerve"],
      sacrotuberousLigament: ["ligament", "Sacrotuberous ligament"], sacrospinousLigament: ["ligament", "Sacrospinous ligament"], proximalHamstringTendon: ["tendon", "Proximal hamstring tendon"],
      posteriorSIJLigaments: ["ligament", "Posterior sacroiliac ligaments"], sacroiliacJoint: ["capsule", "Sacroiliac joint"]
    },
    anchors: {
      ischialTuberosity: "ischial tuberosity", greaterTrochanter: "greater trochanter", greaterSciaticNotch: "greater sciatic notch", piriformisSciaticCrossing: "where sciatic nerve passes piriformis",
      ischiofemoralSpace: "ischiofemoral space", psis: "posterior superior iliac spine", sijLine: "sacroiliac joint line"
    }
  },

  /* ===== LOWER LIMB — leg, ankle, foot (engine agent A4) ===== */
  "lower-leg-posterior": {
    title: "Calf & Achilles — posterior view", view: "posterior", side: "R",
    structures: {
      femur: ["bone", "Femur (distal)"], tibia: ["bone", "Tibia"], fibula: ["bone", "Fibula"], calcaneus: ["bone", "Calcaneus"],
      gastrocMedial: ["muscle", "Medial gastrocnemius"], gastrocLateral: ["muscle", "Lateral gastrocnemius"], soleus: ["muscle", "Soleus"], plantaris: ["tendon", "Plantaris"],
      achillesTendon: ["tendon", "Achilles tendon"], retrocalcanealBursa: ["bursa", "Retrocalcaneal bursa"], kagersFatPad: ["fatpad", "Kager's fat pad"],
      tibialNerve: ["nerve", "Tibial nerve"], poplitealArtery: ["vessel", "Popliteal artery"], calcanealApophysis: ["physis", "Calcaneal apophysis"], superficialPosteriorCompartment: ["space", "Superficial posterior compartment"]
    },
    anchors: {
      medialGastrocMTJ: "medial gastrocnemius distal MTJ ('tennis leg')", soleusAponeurosis: "soleus central aponeurosis", achillesMidportion: "Achilles mid-portion (2–6 cm above insertion)",
      achillesInsertion: "Achilles insertion", achillesMTJ: "Achilles MTJ", calcanealTuberosity: "calcaneal tuberosity", posterosuperiorCalcaneus: "posterosuperior calcaneus (Haglund)",
      poplitealFossa: "popliteal fossa", achillesRuptureZone: "watershed rupture zone (~4–6 cm proximal to insertion)"
    }
  },
  "lower-leg-anterior": {
    title: "Shin — anterior view & compartments", view: "anterior", side: "R",
    structures: {
      tibia: ["bone", "Tibia"], fibula: ["bone", "Fibula"], tibialisAnterior: ["muscle", "Tibialis anterior"], extensorDigitorumLongus: ["muscle", "Extensor digitorum longus"],
      extensorHallucisLongus: ["muscle", "Extensor hallucis longus"], peroneusLongus: ["muscle", "Peroneus (fibularis) longus"], peroneusBrevis: ["muscle", "Peroneus (fibularis) brevis"],
      soleusMedial: ["muscle", "Soleus (medial border)"], flexorDigitorumLongus: ["muscle", "Flexor digitorum longus"], interosseousMembrane: ["ligament", "Interosseous membrane"],
      tibialPeriosteum: ["fascia", "Tibial periosteum"], deepCruralFascia: ["fascia", "Deep crural fascia"], anteriorCompartment: ["space", "Anterior compartment"],
      lateralCompartment: ["space", "Lateral compartment"], deepPosteriorCompartment: ["space", "Deep posterior compartment"], deepPeronealNerve: ["nerve", "Deep peroneal nerve"],
      superficialPeronealNerve: ["nerve", "Superficial peroneal nerve"], commonPeronealNerve: ["nerve", "Common peroneal nerve"], anteriorTibialArtery: ["vessel", "Anterior tibial artery"]
    },
    anchors: {
      posteromedialTibiaDistalThird: "posteromedial border, distal third (MTSS site)", anteriorTibialCortexMid: "anterior tibial cortex mid-shaft (high-risk stress fracture)",
      fibularHead: "fibular head", fibularNeck: "fibular neck (common peroneal nerve)", distalFibula: "distal fibula", midShaftTibia: "tibial mid-shaft", midShaftFibula: "fibular mid-shaft"
    }
  },
  "ankle-lateral": {
    title: "Ankle — lateral view", view: "lateral", side: "R",
    structures: {
      tibia: ["bone", "Tibia"], fibula: ["bone", "Fibula"], talus: ["bone", "Talus"], calcaneus: ["bone", "Calcaneus"], navicular: ["bone", "Navicular"], cuboid: ["bone", "Cuboid"],
      fifthMetatarsal: ["bone", "5th metatarsal"], osTrigonum: ["bone", "Os trigonum / posterior talar process"],
      atfl: ["ligament", "Anterior talofibular ligament"], cfl: ["ligament", "Calcaneofibular ligament"], ptfl: ["ligament", "Posterior talofibular ligament"], aitfl: ["ligament", "Anterior inferior tibiofibular ligament"],
      superiorPeronealRetinaculum: ["ligament", "Superior peroneal retinaculum"], peronealLongusTendon: ["tendon", "Peroneus longus tendon"], peronealBrevisTendon: ["tendon", "Peroneus brevis tendon"],
      achillesTendon: ["tendon", "Achilles tendon"], tibiotalarCartilage: ["cartilage", "Talar dome cartilage"], sinusTarsi: ["space", "Sinus tarsi"], anteriorJointRecess: ["space", "Anterior ankle joint recess"],
      jointSpace: ["space", "Ankle joint cavity"], distalFibularPhysis: ["physis", "Distal fibular physis"]
    },
    anchors: {
      lateralMalleolus: "lateral malleolus", lateralMalleolusTip: "tip of lateral malleolus", fibularGroove: "retromalleolar groove", baseFifthMetatarsal: "base of 5th metatarsal (avulsion site)",
      jonesZone: "5th MT metaphyseal–diaphyseal junction (Jones zone)", talarDome: "talar dome", anteriorTibialLip: "anterior tibial lip (spur site)", anteriorTalarNeck: "anterior talar neck",
      posteriorTalarProcess: "posterior talar process", sinusTarsiOpening: "sinus tarsi", ankleJointLine: "anterior ankle joint line", atflMid: "ATFL mid-substance", fibulaWeberB: "fibula at syndesmosis level (Weber B)",
      fibulaWeberA: "fibula below syndesmosis (Weber A)", fibulaWeberC: "fibula above syndesmosis (Weber C)"
    }
  },
  "ankle-anterior": {
    title: "Ankle mortise — anterior (coronal) view", view: "anterior", side: "R",
    structures: {
      tibia: ["bone", "Tibia"], fibula: ["bone", "Fibula"], talus: ["bone", "Talus"], calcaneus: ["bone", "Calcaneus"],
      aitfl: ["ligament", "Anterior inferior tibiofibular ligament"], interosseousLigament: ["ligament", "Interosseous ligament"], interosseousMembrane: ["ligament", "Interosseous membrane"],
      deltoidLigament: ["ligament", "Deltoid ligament"], lateralLigaments: ["ligament", "Lateral ligament complex"], talarDomeCartilage: ["cartilage", "Talar dome cartilage"],
      plafondCartilage: ["cartilage", "Tibial plafond cartilage"], tibiofibularClearSpace: ["space", "Tibiofibular clear space"], jointSpace: ["space", "Ankle joint cavity"]
    },
    anchors: {
      medialMalleolus: "medial malleolus", lateralMalleolus: "lateral malleolus", medialClearSpace: "medial clear space", syndesmosisLevel: "syndesmosis",
      talarDomeMedial: "posteromedial talar dome (common OCL site)", talarDomeLateral: "anterolateral talar dome", proximalFibula: "proximal fibula (Maisonneuve)", plafond: "tibial plafond"
    }
  },
  "ankle-medial": {
    title: "Ankle — medial view & tarsal tunnel", view: "medial", side: "R",
    structures: {
      tibia: ["bone", "Tibia"], talus: ["bone", "Talus"], calcaneus: ["bone", "Calcaneus"], navicular: ["bone", "Navicular"], medialCuneiform: ["bone", "Medial cuneiform"], firstMetatarsal: ["bone", "1st metatarsal"],
      deltoidLigament: ["ligament", "Deltoid ligament"], springLigament: ["ligament", "Spring (calcaneonavicular) ligament"], flexorRetinaculum: ["ligament", "Flexor retinaculum"],
      tibialisPosteriorTendon: ["tendon", "Tibialis posterior tendon"], flexorDigitorumLongusTendon: ["tendon", "FDL tendon"], flexorHallucisLongusTendon: ["tendon", "FHL tendon"],
      tibialNerve: ["nerve", "Tibial nerve"], medialPlantarNerve: ["nerve", "Medial plantar nerve"], lateralPlantarNerve: ["nerve", "Lateral plantar nerve"], posteriorTibialArtery: ["vessel", "Posterior tibial artery"],
      plantarFascia: ["fascia", "Plantar fascia"], abductorHallucis: ["muscle", "Abductor hallucis"], tarsalTunnel: ["space", "Tarsal tunnel"]
    },
    anchors: {
      medialMalleolus: "medial malleolus", navicularTuberosity: "navicular tuberosity", sustentaculumTali: "sustentaculum tali", tarsalTunnelEntry: "tarsal tunnel",
      tibialisPosteriorRetromalleolar: "tibialis posterior behind medial malleolus", medialCalcanealTubercle: "medial calcaneal tubercle", medialArchApex: "apex of medial arch"
    }
  },
  "foot-dorsal": {
    title: "Foot — dorsal view", view: "dorsal", side: "R",
    structures: {
      talus: ["bone", "Talus"], calcaneus: ["bone", "Calcaneus"], navicular: ["bone", "Navicular"], cuboid: ["bone", "Cuboid"], medialCuneiform: ["bone", "Medial cuneiform"],
      intermediateCuneiform: ["bone", "Intermediate cuneiform"], lateralCuneiform: ["bone", "Lateral cuneiform"], metatarsal1: ["bone", "1st metatarsal"], metatarsal2: ["bone", "2nd metatarsal"],
      metatarsal3: ["bone", "3rd metatarsal"], metatarsal4: ["bone", "4th metatarsal"], metatarsal5: ["bone", "5th metatarsal"], proximalPhalanx1: ["bone", "Hallux proximal phalanx"],
      distalPhalanx1: ["bone", "Hallux distal phalanx"], lesserToes: ["bone", "Lesser toe phalanges"], sesamoidMedial: ["bone", "Medial (tibial) sesamoid"], sesamoidLateral: ["bone", "Lateral (fibular) sesamoid"],
      lisfrancLigament: ["ligament", "Lisfranc ligament"], dorsalTMTLigaments: ["ligament", "Dorsal tarsometatarsal ligaments"], intermetatarsalLigament: ["ligament", "Deep transverse metatarsal ligament"],
      interdigitalNerve3: ["nerve", "3rd common plantar digital nerve"], interdigitalNerve2: ["nerve", "2nd common plantar digital nerve"], extensorTendons: ["tendon", "Extensor tendons"],
      plantarPlate2: ["ligament", "2nd MTP plantar plate"]
    },
    anchors: {
      lisfrancJoint: "tarsometatarsal (Lisfranc) joint", secondMetatarsalBase: "2nd metatarsal base", secondMetatarsalNeck: "2nd metatarsal neck (stress fracture site)",
      thirdMetatarsalNeck: "3rd metatarsal neck", fifthMetatarsalBase: "5th metatarsal base", jonesZone: "Jones zone", navicularDorsalCentral: "dorsal central navicular ('N-spot')",
      thirdWebSpace: "3rd intermetatarsal space", firstMTPJoint: "1st MTP joint", secondMTPJoint: "2nd MTP joint", medialCuneiformM2Base: "between medial cuneiform and 2nd MT base"
    }
  },
  "foot-sagittal": {
    title: "Foot — medial sagittal view (arch)", view: "medial", side: "R",
    structures: {
      tibia: ["bone", "Tibia (distal)"], talus: ["bone", "Talus"], calcaneus: ["bone", "Calcaneus"], navicular: ["bone", "Navicular"], medialCuneiform: ["bone", "Medial cuneiform"],
      firstMetatarsal: ["bone", "1st metatarsal"], proximalPhalanx1: ["bone", "Hallux proximal phalanx"], distalPhalanx1: ["bone", "Hallux distal phalanx"], sesamoid: ["bone", "Sesamoid"],
      plantarFascia: ["fascia", "Plantar fascia"], plantarPlate: ["ligament", "1st MTP plantar plate"], springLigament: ["ligament", "Spring ligament"],
      flexorHallucisLongusTendon: ["tendon", "FHL tendon"], tibialisPosteriorTendon: ["tendon", "Tibialis posterior tendon"], achillesTendon: ["tendon", "Achilles tendon"],
      flexorHallucisBrevis: ["muscle", "Flexor hallucis brevis"], abductorHallucis: ["muscle", "Abductor hallucis"], flexorDigitorumBrevis: ["muscle", "Flexor digitorum brevis"],
      heelFatPad: ["fatpad", "Heel fat pad"], calcanealApophysis: ["physis", "Calcaneal apophysis"], inferiorCalcanealNerve: ["nerve", "Inferior calcaneal (Baxter's) nerve"], firstMTPJointSpace: ["space", "1st MTP joint"]
    },
    anchors: {
      plantarFasciaOrigin: "plantar fascia origin (medial calcaneal tubercle)", plantarFasciaMid: "mid plantar fascia", calcanealBodyPosterior: "posterior calcaneal body (stress fracture site)",
      firstMTPJoint: "1st MTP joint", sesamoidRegion: "sesamoids under 1st MT head", medialArchApex: "arch apex", heelPadCentre: "centre of heel pad", navicularTuberosity: "navicular tuberosity",
      calcanealTuberosity: "calcaneal tuberosity", achillesInsertion: "Achilles insertion", navicularBody: "navicular body"
    }
  },

  /* ===== UPPER LIMB (engine agent A5) ===== */
  "shoulder-anterior": {
    title: "Shoulder — anterior view (glenohumeral joint)", view: "anterior", side: "R",
    structures: {
      humerus: ["bone", "Humerus"], scapula: ["bone", "Scapula (glenoid, coracoid, acromion)"], clavicle: ["bone", "Clavicle"],
      supraspinatus: ["muscle", "Supraspinatus"], supraspinatusTendon: ["tendon", "Supraspinatus tendon"], infraspinatus: ["muscle", "Infraspinatus"], subscapularis: ["muscle", "Subscapularis"],
      subscapularisTendon: ["tendon", "Subscapularis tendon"], longHeadBicepsTendon: ["tendon", "Long head of biceps tendon"], biceps: ["muscle", "Biceps brachii"], deltoid: ["muscle", "Deltoid"],
      pectoralisMajor: ["muscle", "Pectoralis major"], pectoralisMajorTendon: ["tendon", "Pectoralis major tendon"], labrum: ["cartilage", "Glenoid labrum"], glenoidCartilage: ["cartilage", "Glenoid cartilage"],
      humeralCartilage: ["cartilage", "Humeral head cartilage"], capsule: ["capsule", "Glenohumeral capsule"], ighl: ["ligament", "Inferior glenohumeral ligament"],
      coracoacromialLigament: ["ligament", "Coracoacromial ligament"], subacromialBursa: ["bursa", "Subacromial–subdeltoid bursa"], axillaryNerve: ["nerve", "Axillary nerve"], radialNerve: ["nerve", "Radial nerve"],
      jointSpace: ["space", "Glenohumeral joint cavity"], proximalHumeralPhysis: ["physis", "Proximal humeral physis"]
    },
    anchors: {
      greaterTuberosity: "greater tuberosity", lesserTuberosity: "lesser tuberosity", bicipitalGroove: "bicipital groove", superiorLabrum: "superior labrum / biceps anchor (SLAP)",
      anteroinferiorLabrum: "anteroinferior labrum (Bankart)", posteriorLabrum: "posterior labrum (reverse Bankart)", posterolateralHumeralHead: "posterolateral humeral head (Hill–Sachs)",
      anteromedialHumeralHead: "anteromedial humeral head (reverse Hill–Sachs)", subcoracoidPosition: "humeral head position in anterior (subcoracoid) dislocation",
      posteriorDislocationPosition: "humeral head position in posterior dislocation", acromionUndersurface: "acromion undersurface", coracoid: "coracoid process", supraspinatusFootprint: "supraspinatus footprint",
      criticalZone: "supraspinatus 'critical zone'", surgicalNeck: "surgical neck of humerus", humeralShaftMid: "humeral mid-shaft", spiralGroove: "spiral groove (radial nerve)",
      quadrilateralSpace: "quadrilateral space", pecMajorInsertion: "pec major humeral insertion", pecMajorMTJ: "pec major MTJ", glenohumeralJointCentre: "joint centre", rotatorInterval: "rotator interval"
    }
  },
  "shoulder-girdle": {
    title: "Shoulder girdle — clavicle, AC & SC joints", view: "anterior", side: "R",
    structures: {
      sternum: ["bone", "Sternum (manubrium)"], clavicle: ["bone", "Clavicle"], firstRib: ["bone", "1st rib"], scapula: ["bone", "Scapula (acromion & coracoid)"], humerus: ["bone", "Humeral head"],
      acJointCapsule: ["capsule", "AC joint capsule"], acLigament: ["ligament", "Acromioclavicular ligaments"], conoidLigament: ["ligament", "Conoid ligament"], trapezoidLigament: ["ligament", "Trapezoid ligament"],
      scjLigaments: ["ligament", "Sternoclavicular ligaments"], costoclavicularLigament: ["ligament", "Costoclavicular ligament"], deltoid: ["muscle", "Deltoid"], trapezius: ["muscle", "Upper trapezius"],
      sternocleidomastoid: ["muscle", "Sternocleidomastoid"], subclavianVessels: ["vessel", "Subclavian vessels"], brachialPlexus: ["nerve", "Brachial plexus"], medialClavicularPhysis: ["physis", "Medial clavicular physis"]
    },
    anchors: {
      acJoint: "AC joint", scJoint: "SC joint", distalClavicle: "distal clavicle", midshaftClavicle: "clavicle middle third (most common fracture)", medialClavicle: "medial clavicle",
      coracoid: "coracoid", acromion: "acromion", shoulderTip: "point of shoulder (impact site)", retrosternal: "behind the SC joint (posterior dislocation danger zone)"
    }
  },
  "elbow-lateral": {
    title: "Elbow — lateral view", view: "lateral", side: "R",
    structures: {
      humerus: ["bone", "Humerus"], radius: ["bone", "Radius"], ulna: ["bone", "Ulna"], commonExtensorTendon: ["tendon", "Common extensor tendon"], ecrb: ["muscle", "ECRB"], ecrl: ["muscle", "ECRL"],
      extensorDigitorum: ["muscle", "Extensor digitorum"], anconeus: ["muscle", "Anconeus"], supinator: ["muscle", "Supinator"], brachioradialis: ["muscle", "Brachioradialis"], triceps: ["muscle", "Triceps"],
      tricepsTendon: ["tendon", "Triceps tendon"], radialCollateralLigament: ["ligament", "Radial collateral ligament"], lucl: ["ligament", "Lateral ulnar collateral ligament"], annularLigament: ["ligament", "Annular ligament"],
      radialNerve: ["nerve", "Radial nerve"], posteriorInterosseousNerve: ["nerve", "Posterior interosseous nerve"], olecranonBursa: ["bursa", "Olecranon bursa"], capitellarCartilage: ["cartilage", "Capitellar cartilage"],
      jointSpace: ["space", "Elbow joint cavity"], distalHumeralPhysis: ["physis", "Distal humeral physis"]
    },
    anchors: {
      lateralEpicondyle: "lateral epicondyle", ecrbOrigin: "ECRB origin (tendinopathy site)", capitellum: "capitellum", radialHead: "radial head", radialNeck: "radial neck", olecranon: "olecranon",
      olecranonTip: "olecranon tip", tricepsInsertion: "triceps insertion", arcadeOfFrohse: "arcade of Frohse", radiocapitellarJoint: "radiocapitellar joint", supracondylarRegion: "supracondylar humerus",
      olecranonFossa: "olecranon fossa (posterior fat pad)", radialHeadDislocatedPosition: "subluxed radial head position (pulled elbow)"
    }
  },
  "elbow-medial": {
    title: "Elbow — medial view", view: "medial", side: "R",
    structures: {
      humerus: ["bone", "Humerus"], ulna: ["bone", "Ulna"], radius: ["bone", "Radius"], uclAnterior: ["ligament", "UCL anterior bundle"], uclPosterior: ["ligament", "UCL posterior bundle"],
      commonFlexorTendon: ["tendon", "Common flexor–pronator tendon"], flexorPronatorMass: ["muscle", "Flexor–pronator mass"], pronatorTeres: ["muscle", "Pronator teres"], flexorCarpiUlnaris: ["muscle", "Flexor carpi ulnaris"],
      ulnarNerve: ["nerve", "Ulnar nerve"], medianNerve: ["nerve", "Median nerve"], brachialis: ["muscle", "Brachialis"], biceps: ["muscle", "Biceps brachii"], distalBicepsTendon: ["tendon", "Distal biceps tendon"],
      bicipitalAponeurosis: ["fascia", "Bicipital aponeurosis (lacertus)"], osborneLigament: ["ligament", "Cubital tunnel retinaculum (Osborne)"], triceps: ["muscle", "Triceps"],
      medialEpicondyleApophysis: ["physis", "Medial epicondyle apophysis"], jointSpace: ["space", "Elbow joint cavity"]
    },
    anchors: {
      medialEpicondyle: "medial epicondyle", sublimeTubercle: "sublime tubercle (UCL insertion)", coronoid: "coronoid process", olecranon: "olecranon",
      olecranonPosteromedial: "posteromedial olecranon (valgus extension overload)", cubitalTunnel: "cubital tunnel", radialTuberosity: "radial tuberosity (distal biceps insertion)",
      commonFlexorOrigin: "common flexor origin", medialJointLine: "medial joint line", uclMid: "UCL mid-substance", posteriorDislocationPosition: "forearm position after posterior elbow dislocation"
    }
  },
  "wrist-hand": {
    title: "Wrist & hand — palmar view", view: "palmar", side: "R",
    structures: {
      radius: ["bone", "Radius"], ulna: ["bone", "Ulna"], scaphoid: ["bone", "Scaphoid"], lunate: ["bone", "Lunate"], triquetrum: ["bone", "Triquetrum"], pisiform: ["bone", "Pisiform"],
      trapezium: ["bone", "Trapezium"], trapezoid: ["bone", "Trapezoid"], capitate: ["bone", "Capitate"], hamate: ["bone", "Hamate"],
      metacarpal1: ["bone", "1st metacarpal"], metacarpal2: ["bone", "2nd metacarpal"], metacarpal3: ["bone", "3rd metacarpal"], metacarpal4: ["bone", "4th metacarpal"], metacarpal5: ["bone", "5th metacarpal"],
      phalanges: ["bone", "Phalanges"], tfcc: ["cartilage", "Triangular fibrocartilage complex"], scapholunateLigament: ["ligament", "Scapholunate ligament"], lunotriquetralLigament: ["ligament", "Lunotriquetral ligament"],
      flexorRetinaculum: ["ligament", "Flexor retinaculum (transverse carpal ligament)"], medianNerve: ["nerve", "Median nerve"], ulnarNerve: ["nerve", "Ulnar nerve"], radialArtery: ["vessel", "Radial artery"],
      ulnarArtery: ["vessel", "Ulnar artery"], flexorTendons: ["tendon", "Digital flexor tendons"], aplTendon: ["tendon", "Abductor pollicis longus"], epbTendon: ["tendon", "Extensor pollicis brevis"],
      firstDorsalCompartment: ["fascia", "1st dorsal compartment sheath"], ecuTendon: ["tendon", "Extensor carpi ulnaris"], ecuSubsheath: ["fascia", "ECU subsheath"], fcrTendon: ["tendon", "Flexor carpi radialis"],
      thenarMuscles: ["muscle", "Thenar muscles"], hypothenarMuscles: ["muscle", "Hypothenar muscles"], carpalTunnel: ["space", "Carpal tunnel"], guyonsCanal: ["space", "Guyon's canal"],
      distalRadialPhysis: ["physis", "Distal radial physis"]
    },
    anchors: {
      distalRadiusMetaphysis: "distal radius metaphysis (~2 cm from joint)", radialStyloid: "radial styloid", ulnarStyloid: "ulnar styloid", scaphoidWaist: "scaphoid waist",
      scaphoidProximalPole: "scaphoid proximal pole", scaphoidDistalPole: "scaphoid distal pole", anatomicalSnuffbox: "anatomical snuffbox", scapholunateInterval: "scapholunate interval",
      hookOfHamate: "hook of hamate", fifthMetacarpalNeck: "5th metacarpal neck", firstMetacarpalBase: "1st metacarpal base", carpalTunnelEntrance: "carpal tunnel", lunate: "lunate",
      foveaUlnar: "ulnar fovea (TFCC)", dorsalRadiusTilt: "dorsal displacement direction (Colles)", firstDorsalCompartmentRegion: "over radial styloid (de Quervain)"
    }
  },
  "finger-lateral": {
    title: "Finger — lateral view", view: "lateral", side: "R",
    structures: {
      metacarpal: ["bone", "Metacarpal"], proximalPhalanx: ["bone", "Proximal phalanx"], middlePhalanx: ["bone", "Middle phalanx"], distalPhalanx: ["bone", "Distal phalanx"],
      terminalExtensorTendon: ["tendon", "Terminal extensor tendon"], centralSlip: ["tendon", "Central slip"], lateralBands: ["tendon", "Lateral bands"], extensorHood: ["fascia", "Extensor hood"],
      fdpTendon: ["tendon", "FDP tendon"], fdsTendon: ["tendon", "FDS tendon"], volarPlate: ["ligament", "PIP volar plate"], collateralLigament: ["ligament", "PIP collateral ligament"],
      a1Pulley: ["ligament", "A1 pulley"], a2Pulley: ["ligament", "A2 pulley"], a4Pulley: ["ligament", "A4 pulley"], flexorSheath: ["fascia", "Flexor tendon sheath"], digitalNerve: ["nerve", "Digital nerve"]
    },
    anchors: {
      dipJoint: "DIP joint", pipJoint: "PIP joint", mcpJoint: "MCP joint", distalPhalanxBaseDorsal: "dorsal base of distal phalanx (mallet)", distalPhalanxBaseVolar: "volar base of distal phalanx (FDP insertion)",
      middlePhalanxBaseDorsal: "dorsal base of middle phalanx (central slip)", middlePhalanxBaseVolar: "volar base of middle phalanx (volar plate)", a2PulleyRegion: "A2 pulley", a1PulleyRegion: "A1 pulley (trigger finger)",
      proximalPhalanxShaft: "proximal phalanx shaft", fdpRetractedPosition: "retracted FDP stump position (palm)"
    }
  },
  "thumb": {
    title: "Thumb — MCP & CMC joints", view: "dorsoradial", side: "R",
    structures: {
      trapezium: ["bone", "Trapezium"], metacarpal1: ["bone", "1st metacarpal"], proximalPhalanx1: ["bone", "Proximal phalanx"], distalPhalanx1: ["bone", "Distal phalanx"],
      uclThumb: ["ligament", "Thumb MCP ulnar collateral ligament"], rclThumb: ["ligament", "Thumb MCP radial collateral ligament"], adductorAponeurosis: ["fascia", "Adductor aponeurosis"],
      volarPlateThumb: ["ligament", "Thumb MCP volar plate"], anteriorObliqueLigament: ["ligament", "Anterior oblique ('beak') ligament"], cmcCapsule: ["capsule", "CMC joint capsule"],
      aplTendon: ["tendon", "APL tendon"], eplTendon: ["tendon", "EPL tendon"], epbTendon: ["tendon", "EPB tendon"]
    },
    anchors: {
      mcpJointUlnar: "ulnar side of MCP joint", proximalPhalanxBaseUlnar: "ulnar base of proximal phalanx (UCL insertion)", metacarpalHeadUlnar: "ulnar metacarpal head",
      cmcJoint: "CMC joint", firstMetacarpalBaseVolarUlnar: "volar-ulnar base of 1st MC (Bennett fragment)", stenerPosition: "UCL displaced superficial to aponeurosis (Stener lesion)"
    }
  },

  /* ===== SPINE, TRUNK, HEAD (engine agent A6) ===== */
  "lumbar-sagittal": {
    title: "Lumbar spine — sagittal view", view: "lateral", side: "midline",
    structures: {
      vertebraL3: ["bone", "L3"], vertebraL4: ["bone", "L4"], vertebraL5: ["bone", "L5"], sacrum: ["bone", "Sacrum"],
      discL3L4: ["disc", "L3–4 disc"], discL4L5: ["disc", "L4–5 disc"], discL5S1: ["disc", "L5–S1 disc"], facetL4L5: ["capsule", "L4–5 facet joint"], facetL5S1: ["capsule", "L5–S1 facet joint"],
      anteriorLongitudinalLigament: ["ligament", "Anterior longitudinal ligament"], posteriorLongitudinalLigament: ["ligament", "Posterior longitudinal ligament"], ligamentumFlavum: ["ligament", "Ligamentum flavum"],
      interspinousLigament: ["ligament", "Interspinous ligament"], supraspinousLigament: ["ligament", "Supraspinous ligament"], caudaEquina: ["nerve", "Cauda equina"], nerveRootL4: ["nerve", "L4 nerve root"],
      nerveRootL5: ["nerve", "L5 nerve root"], nerveRootS1: ["nerve", "S1 nerve root"], multifidus: ["muscle", "Multifidus"], erectorSpinae: ["muscle", "Erector spinae"],
      thoracolumbarFascia: ["fascia", "Thoracolumbar fascia"], spinalCanal: ["space", "Spinal canal"]
    },
    anchors: {
      parsL5: "L5 pars interarticularis", parsL4: "L4 pars interarticularis", l3BodyAnterior: "anterior L3 body (wedge compression site)", l4SuperiorEndplate: "L4 superior endplate",
      l4L5Foramen: "L4–5 foramen", l5S1Foramen: "L5–S1 foramen", posteriorDiscL4L5: "posterior L4–5 disc", posteriorDiscL5S1: "posterior L5–S1 disc", spinousProcessL4: "L4 spinous process",
      sacralPromontory: "sacral promontory", conusLevel: "cauda equina within canal", canalL4L5: "spinal canal at L4–5 (stenosis site)"
    }
  },
  "lumbar-axial": {
    title: "Lumbar spine — axial view (L4–5)", view: "axial", side: "midline",
    structures: {
      vertebralBody: ["bone", "Vertebral body"], posteriorElements: ["bone", "Lamina, pedicles & spinous process"], disc: ["disc", "Intervertebral disc"],
      facetJointLeft: ["capsule", "Left facet joint"], facetJointRight: ["capsule", "Right facet joint"], ligamentumFlavum: ["ligament", "Ligamentum flavum"], posteriorLongitudinalLigament: ["ligament", "Posterior longitudinal ligament"],
      thecalSac: ["space", "Thecal sac"], caudaEquina: ["nerve", "Cauda equina"], nerveRootLeft: ["nerve", "Left L5 nerve root"], nerveRootRight: ["nerve", "Right L5 nerve root"],
      multifidusLeft: ["muscle", "Left multifidus"], multifidusRight: ["muscle", "Right multifidus"], erectorSpinaeLeft: ["muscle", "Left erector spinae"], erectorSpinaeRight: ["muscle", "Right erector spinae"],
      psoasLeft: ["muscle", "Left psoas"], psoasRight: ["muscle", "Right psoas"]
    },
    anchors: {
      posterolateralLeft: "posterolateral disc, left", posterolateralRight: "posterolateral disc, right", central: "central posterior disc", foraminalLeft: "left foramen", foraminalRight: "right foramen",
      lateralRecessLeft: "left lateral recess", lateralRecessRight: "right lateral recess", parsLeft: "left pars", parsRight: "right pars", nucleusCentre: "nucleus pulposus", annulusPosterior: "posterior annulus"
    }
  },
  "cervical-sagittal": {
    title: "Cervical spine — sagittal view", view: "lateral", side: "midline",
    structures: {
      occiput: ["bone", "Occiput"], atlas: ["bone", "C1 (atlas)"], axis: ["bone", "C2 (axis)"], vertebraC3: ["bone", "C3"], vertebraC4: ["bone", "C4"], vertebraC5: ["bone", "C5"], vertebraC6: ["bone", "C6"],
      vertebraC7: ["bone", "C7"], vertebraT1: ["bone", "T1"], discC4C5: ["disc", "C4–5 disc"], discC5C6: ["disc", "C5–6 disc"], discC6C7: ["disc", "C6–7 disc"], facetC2C3: ["capsule", "C2–3 facet joint"],
      facetC5C6: ["capsule", "C5–6 facet joint"], spinalCord: ["nerve", "Spinal cord"], nerveRootC6: ["nerve", "C6 nerve root"], nerveRootC7: ["nerve", "C7 nerve root"],
      anteriorLongitudinalLigament: ["ligament", "Anterior longitudinal ligament"], posteriorLongitudinalLigament: ["ligament", "Posterior longitudinal ligament"], ligamentumNuchae: ["ligament", "Ligamentum nuchae"],
      transverseLigament: ["ligament", "Transverse ligament of atlas"], longusColli: ["muscle", "Longus colli (deep neck flexors)"], semispinalis: ["muscle", "Semispinalis cervicis"], splenius: ["muscle", "Splenius capitis"],
      upperTrapezius: ["muscle", "Upper trapezius"], suboccipitals: ["muscle", "Suboccipital muscles"], vertebralArtery: ["vessel", "Vertebral artery"], carotidArtery: ["vessel", "Internal carotid artery"],
      greaterOccipitalNerve: ["nerve", "Greater occipital nerve"]
    },
    anchors: {
      dens: "dens", c1c2: "C1–2 joint", c2c3Facet: "C2–3 facet", c5c6Facet: "C5–6 facet", c5c6Foramen: "C5–6 foramen", c6c7Foramen: "C6–7 foramen",
      posteriorDiscC5C6: "posterior C5–6 disc", posteriorDiscC6C7: "posterior C6–7 disc", c7SpinousProcess: "C7 spinous process", cervicothoracicJunction: "cervicothoracic junction",
      cordC5C6: "spinal cord at C5–6 (myelopathy site)", anteriorC5C6: "anterior C5–6 (ALL strain in hyperextension)", occiputBase: "base of skull"
    }
  },
  "neck-plexus": {
    title: "Neck & thoracic outlet — brachial plexus", view: "anterior", side: "R",
    structures: {
      cervicalSpine: ["bone", "Cervical spine"], clavicle: ["bone", "Clavicle"], firstRib: ["bone", "1st rib"], scapula: ["bone", "Scapula (coracoid)"],
      anteriorScalene: ["muscle", "Anterior scalene"], middleScalene: ["muscle", "Middle scalene"], pectoralisMinor: ["muscle", "Pectoralis minor"], sternocleidomastoid: ["muscle", "Sternocleidomastoid"], upperTrapezius: ["muscle", "Upper trapezius"],
      upperTrunk: ["nerve", "Upper trunk (C5–6)"], middleTrunk: ["nerve", "Middle trunk (C7)"], lowerTrunk: ["nerve", "Lower trunk (C8–T1)"], cords: ["nerve", "Cords & terminal branches"],
      longThoracicNerve: ["nerve", "Long thoracic nerve"], suprascapularNerve: ["nerve", "Suprascapular nerve"], subclavianArtery: ["vessel", "Subclavian artery"], subclavianVein: ["vessel", "Subclavian vein"]
    },
    anchors: {
      interscaleneTriangle: "interscalene triangle", costoclavicularSpace: "costoclavicular space", subpectoralSpace: "subpectoral space", erbsPoint: "Erb's point",
      shoulderTip: "point of shoulder (depression force)", headSide: "side of head (lateral flexion force)", suprascapularNotch: "suprascapular notch", coracoid: "coracoid"
    }
  },
  "thorax-ribs": {
    title: "Chest wall — ribs (lateral view)", view: "lateral", side: "R",
    structures: {
      vertebraT6: ["bone", "T6"], vertebraT7: ["bone", "T7"], vertebraT8: ["bone", "T8"], sternum: ["bone", "Sternum"], rib5: ["bone", "Rib 5"], rib6: ["bone", "Rib 6"], rib7: ["bone", "Rib 7"],
      rib8: ["bone", "Rib 8"], rib9: ["bone", "Rib 9"], rib10: ["bone", "Rib 10"], rib11: ["bone", "Rib 11"], costalCartilage: ["cartilage", "Costal cartilages"],
      costovertebralJoint: ["capsule", "Costovertebral/costotransverse joints"], intercostals: ["muscle", "Intercostal muscles"], externalOblique: ["muscle", "External oblique"], internalOblique: ["muscle", "Internal oblique"],
      serratusAnterior: ["muscle", "Serratus anterior"], latissimusDorsi: ["muscle", "Latissimus dorsi"], intercostalNerve: ["nerve", "Intercostal nerve"], pleura: ["space", "Pleural space"]
    },
    anchors: {
      rib7Angle: "posterior angle of rib 7", rib7Lateral: "lateral rib 7", rib7Anterior: "anterior rib 7", costochondralJunctions: "costochondral junctions", costovertebralJunction: "costovertebral junction",
      rib10Inferior: "inferior border ribs 9–11 (side strain site)", rowerSite: "posterolateral ribs 5–9 (rower stress fracture site)", sternalBorder: "sternal border"
    }
  },
  "pelvis-anterior": {
    title: "Pelvis & lower abdominal wall — anterior view", view: "anterior", side: "midline",
    structures: {
      iliumLeft: ["bone", "Left ilium"], iliumRight: ["bone", "Right ilium"], sacrum: ["bone", "Sacrum"], coccyx: ["bone", "Coccyx"], pubicRamusRight: ["bone", "Right pubic rami"], pubicRamusLeft: ["bone", "Left pubic rami"],
      pubicSymphysis: ["cartilage", "Pubic symphysis"], sijLeft: ["capsule", "Left sacroiliac joint"], sijRight: ["capsule", "Right sacroiliac joint"], anteriorSIJLigaments: ["ligament", "Anterior SIJ ligaments"],
      iliolumbarLigament: ["ligament", "Iliolumbar ligament"], inguinalLigament: ["ligament", "Inguinal ligament"], rectusAbdominis: ["muscle", "Rectus abdominis"], externalOblique: ["muscle", "External oblique"],
      internalOblique: ["muscle", "Internal oblique"], transversusAbdominis: ["muscle", "Transversus abdominis"], conjointTendon: ["tendon", "Conjoint tendon"], adductorLongus: ["muscle", "Adductor longus (right)"],
      rectusAdductorAponeurosis: ["fascia", "Rectus–adductor aponeurosis"], pelvicFloor: ["muscle", "Pelvic floor"], inguinalCanal: ["space", "Inguinal canal"], ilioinguinalNerve: ["nerve", "Ilioinguinal nerve"],
      genitofemoralNerve: ["nerve", "Genitofemoral nerve"], lateralFemoralCutaneousNerve: ["nerve", "Lateral femoral cutaneous nerve"], iliacApophysis: ["physis", "Iliac crest apophysis"]
    },
    anchors: {
      asisRight: "right ASIS", aiisRight: "right AIIS", asisLeft: "left ASIS", iliacCrestRight: "right iliac crest", pubicTubercleRight: "right pubic tubercle", pubicSymphysisCentre: "pubic symphysis",
      superiorPubicRamus: "superior pubic ramus", inferiorPubicRamus: "inferior pubic ramus (stress fracture site)", sijRightLine: "right SIJ line", sacralAla: "sacral ala (stress fracture site)",
      deepInguinalRing: "deep inguinal ring", superficialInguinalRing: "superficial inguinal ring", lfcnExit: "LFCN exit medial to ASIS", ischialTuberosityRight: "right ischial tuberosity",
      coccyxTip: "coccyx tip", rectusInsertion: "rectus abdominis insertion on pubis"
    }
  },
  "head-brain": {
    title: "Head & brain — sagittal view", view: "lateral", side: "midline",
    structures: {
      skull: ["bone", "Skull"], brain: ["brain", "Cerebrum"], cerebellum: ["brain", "Cerebellum"], brainstem: ["brain", "Brainstem"], corpusCallosum: ["brain", "Corpus callosum"],
      csf: ["space", "Cerebrospinal fluid space"], cervicalSpine: ["bone", "Upper cervical spine"]
    },
    anchors: {
      frontalPole: "frontal lobe", occipitalPole: "occipital lobe", coupSite: "coup site (under impact)", contrecoupSite: "contrecoup site (opposite pole)", brainstemUpper: "upper brainstem",
      corpusCallosumMid: "corpus callosum", foreheadImpact: "forehead impact point", chinImpact: "chin impact point", occiputImpact: "back-of-head impact point", templeImpact: "temple impact point", centreOfMass: "brain centre"
    }
  },
  "inner-ear": {
    title: "Inner ear — vestibular labyrinth", view: "lateral", side: "R",
    structures: {
      posteriorCanal: ["space", "Posterior semicircular canal"], anteriorCanal: ["space", "Anterior semicircular canal"], lateralCanal: ["space", "Lateral semicircular canal"], utricle: ["space", "Utricle"],
      saccule: ["space", "Saccule"], cochlea: ["space", "Cochlea"], otoconia: ["particles", "Otoconia (crystals)"], vestibularNerve: ["nerve", "Vestibular nerve"]
    },
    anchors: {
      utricleMacula: "utricular macula (normal otoconia home)", posteriorCanalAmpulla: "posterior canal ampulla", posteriorCanalLongArm: "posterior canal long arm", commonCrus: "common crus", lateralCanalArm: "lateral canal arm"
    }
  },
  "tmj": {
    title: "Temporomandibular joint — lateral view", view: "lateral", side: "R",
    structures: {
      temporalBone: ["bone", "Temporal bone"], mandible: ["bone", "Mandible"], articularDisc: ["cartilage", "Articular disc"], retrodiscalTissue: ["capsule", "Retrodiscal tissue"], capsule: ["capsule", "TMJ capsule"],
      masseter: ["muscle", "Masseter"], lateralPterygoid: ["muscle", "Lateral pterygoid"], temporalis: ["muscle", "Temporalis"]
    },
    anchors: {
      articularEminence: "articular eminence", glenoidFossa: "mandibular (glenoid) fossa", condyleHead: "mandibular condyle", anteriorDiscPosition: "anteriorly displaced disc position", anteriorToEminence: "condyle position when dislocated"
    }
  },

  /* ===== GENERIC (engine agent A8) ===== */
  "long-bone": {
    title: "Long bone — growth plates & cortex", view: "anterior", side: "R",
    structures: {
      diaphysis: ["bone", "Diaphysis (shaft)"], proximalEpiphysis: ["bone", "Proximal epiphysis"], distalEpiphysis: ["bone", "Distal epiphysis"], proximalPhysis: ["physis", "Proximal physis"],
      distalPhysis: ["physis", "Distal physis"], periosteum: ["fascia", "Periosteum"], medullaryCavity: ["space", "Medullary cavity"], nutrientArtery: ["vessel", "Nutrient artery"],
      articularCartilageDistal: ["cartilage", "Articular cartilage"], articularCartilageProximal: ["cartilage", "Articular cartilage (proximal)"]
    },
    anchors: {
      midshaft: "mid-shaft", distalMetaphysis: "distal metaphysis", proximalMetaphysis: "proximal metaphysis", distalPhysisCentre: "distal physis", distalEpiphysisCentre: "distal epiphysis",
      corticalStressSite: "cortex (stress site)", proximalPhysisCentre: "proximal physis"
    }
  },
  "muscle-tendon-unit": {
    title: "Muscle–tendon unit", view: "lateral", side: "R",
    structures: {
      originBone: ["bone", "Origin bone"], insertionBone: ["bone", "Insertion bone"], muscleBelly: ["muscle", "Muscle belly"], proximalTendon: ["tendon", "Proximal tendon"], distalTendon: ["tendon", "Distal tendon"],
      aponeurosis: ["fascia", "Aponeurosis"], epimysium: ["fascia", "Epimysium/fascia"], bloodVessel: ["vessel", "Intramuscular vessel"], compartment: ["space", "Muscle compartment"]
    },
    anchors: { proximalMTJ: "proximal MTJ", distalMTJ: "distal MTJ", muscleBellyCentre: "muscle belly", enthesis: "distal enthesis", tendonMid: "tendon mid-substance", proximalEnthesis: "proximal enthesis" }
  },
  "peripheral-nerve": {
    title: "Peripheral nerve in a tunnel", view: "lateral", side: "R",
    structures: {
      nerve: ["nerve", "Peripheral nerve"], tunnel: ["space", "Fibro-osseous tunnel"], retinaculum: ["ligament", "Retinaculum / roof"], surroundingMuscle: ["muscle", "Adjacent muscle"], bone: ["bone", "Tunnel floor (bone)"],
      vasaNervorum: ["vessel", "Vasa nervorum"]
    },
    anchors: { tunnelEntry: "tunnel entry", tunnelCentre: "tunnel centre", tunnelExit: "tunnel exit", proximalNerve: "proximal nerve", distalNerve: "distal nerve" }
  }
};

/* ---------------- Micro phase ---------------- */
/** Microscopic/cellular scenes. Each tissue lists its allowed stage ids, in their natural order. Implemented in js/anim/micro/<tissue>.js */
export const MICRO_TISSUES = {
  "ligament": { title: "Ligament collagen", stages: ["healthy", "loaded", "overload", "failure", "haemorrhage", "inflammation", "proliferation", "remodelling"] },
  "tendon": { title: "Tendon (acute injury)", stages: ["healthy", "loaded", "overload", "failure", "haemorrhage", "inflammation", "proliferation", "remodelling"] },
  "tendon-continuum": { title: "Tendinopathy continuum", stages: ["healthy", "reactive", "disrepair", "degenerative", "load-adaptation"] },
  "muscle": { title: "Muscle fibres & sarcomeres", stages: ["healthy", "contracting", "eccentric-overstretch", "sarcomere-disruption", "haematoma", "inflammation", "satellite-activation", "regeneration", "scar"] },
  "bone-fracture": { title: "Bone fracture healing", stages: ["healthy", "fracture", "haematoma", "inflammation", "soft-callus", "hard-callus", "remodelling"] },
  "bone-stress": { title: "Bone stress injury", stages: ["healthy", "loading", "microdamage", "resorption-exceeds-formation", "stress-reaction", "stress-fracture", "healing"] },
  "cartilage": { title: "Articular cartilage", stages: ["healthy", "impact", "chondrocyte-death", "matrix-loss", "fibrocartilage-fill", "degeneration"] },
  "meniscus": { title: "Meniscus (fibrocartilage)", stages: ["healthy", "loaded", "tear", "red-zone-healing", "white-zone-no-healing"] },
  "nerve": { title: "Peripheral nerve", stages: ["healthy", "compression", "ischaemia", "demyelination", "axonal-injury", "wallerian-degeneration", "regeneration"] },
  "disc": { title: "Intervertebral disc", stages: ["healthy", "loaded", "annular-fissure", "nucleus-migration", "herniation", "inflammation", "resorption"] },
  "bursa": { title: "Bursa", stages: ["healthy", "friction", "inflammation", "effusion", "resolution"] },
  "capsule": { title: "Joint capsule (synovium)", stages: ["healthy", "inflammation", "fibrosis", "contracture", "remodelling"] },
  "fascia": { title: "Fascia (e.g. plantar fascia)", stages: ["healthy", "microtears", "degeneration", "thickening", "remodelling"] },
  "brain": { title: "Brain — neurometabolic cascade", stages: ["healthy", "impact", "axonal-stretch", "ionic-flux", "energy-crisis", "recovery"] },
  "physis": { title: "Growth plate (physis)", stages: ["healthy", "traction", "microdamage", "inflammation", "separation", "healing"] },
  "compartment": { title: "Compartment pressure", stages: ["healthy", "swelling", "pressure-rise", "venous-occlusion", "ischaemia", "necrosis", "decompression"] },
  "vestibular": { title: "Otoconia in the semicircular canal", stages: ["healthy", "dislodged", "canal-migration", "head-movement", "endolymph-drag", "repositioned"] }
};

/** Optional micro-phase `variant` values per tissue (passed to the tissue module).
 *  "intra-articular" (ligament/tendon inside a synovial joint, e.g. ACL/PCL): synovial fluid dilutes the clot,
 *  a synovial layer caps each stump, NO bridging scar forms and the stumps retract. */
export const MICRO_VARIANTS = { ligament: ["intra-articular"], tendon: ["intra-articular"] };

/** Helper used by the validator and engine. */
export function listStructureActions(type) {
  return [...GENERIC_ACTIONS, ...(STRUCTURE_TYPES[type] || [])];
}
