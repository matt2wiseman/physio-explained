// Healing science primer (#healing, #healing.<tissue>[.<variant>]). OWNER: P2.
//
// Tissue-by-tissue primer: phases and typical timeframes, key cells, what loading does (mechanotransduction) and rehab
// implications, with the matching micro animation mounted lazily, one tissue at a time, from a synthetic single-phase
// spec built from js/anim/catalogue.js MICRO_TISSUES stages. Citations are the 15 PubMed-verified reviews in REFS
// (metadata copied from PubMed records; PMIDs/DOIs checked with the PubMed tools).
//
// Routes: #healing | #healing.ligament | #healing.tendon.tendinopathy | aliases such as #healing.meniscus, #healing.stress.

import { h, icon } from "../util/dom.js";

export const title = () => "Tissue healing science";

/* ================================================================== references (verified in PubMed) */
const REFS = [
  { id: "r1", pmid: "19244270", doi: "10.1136/bjsm.2008.054239", year: 2009, type: "narrative-review", cites: "Khan KM, Scott A. Mechanotherapy: how physical therapists' prescription of exercise promotes tissue repair. Br J Sports Med. 2009;43(4):247-52." },
  { id: "r2", pmid: "31529731", doi: "10.1002/jor.24475", year: 2020, type: "narrative-review", cites: "Leong NL, Kator JL, Clemens TL, James A, Enamoto-Iwamoto M, Jiang J. Tendon and ligament healing and current approaches to tendon and ligament regeneration. J Orthop Res. 2020;38(1):7-12." },
  { id: "r3", pmid: "9854530", year: 1998, type: "narrative-review", cites: "Hildebrand KA, Frank CB. Scar formation and ligament healing. Can J Surg. 1998;41(6):425-9." },
  { id: "r4", pmid: "18812414", doi: "10.1136/bjsm.2008.051193", year: 2009, type: "narrative-review", cites: "Cook JL, Purdam CR. Is tendon pathology a continuum? A pathology model to explain the clinical presentation of load-induced tendinopathy. Br J Sports Med. 2009;43(6):409-16." },
  { id: "r5", pmid: "27127294", doi: "10.1136/bjsports-2015-095422", year: 2016, type: "narrative-review", cites: "Cook JL, Rio E, Purdam CR, Docking SI. Revisiting the continuum model of tendon pathology: what is its merit in clinical practice and research? Br J Sports Med. 2016;50(19):1187-91." },
  { id: "r6", pmid: "23733696", doi: "10.1002/cphy.c100092", year: 2011, type: "narrative-review", cites: "Tidball JG. Mechanisms of muscle injury, repair, and regeneration. Compr Physiol. 2011;1(4):2029-62." },
  { id: "r7", pmid: "25266456", doi: "10.1038/nrrheum.2014.164", year: 2015, type: "narrative-review", cites: "Einhorn TA, Gerstenfeld LC. Fracture healing: mechanisms and interventions. Nat Rev Rheumatol. 2015;11(1):45-54." },
  { id: "r8", pmid: "35484131", doi: "10.1038/s41572-022-00352-y", year: 2022, type: "narrative-review", cites: "Hoenig T, Ackerman KE, Beck BR, Bouxsein ML, Burr DB, Hollander K, et al. Bone stress injuries. Nat Rev Dis Primers. 2022;8(1):26." },
  { id: "r9", pmid: "23015907", doi: "10.1177/1941738109350438", year: 2009, type: "basic-science", cites: "Sophia Fox AJ, Bedi A, Rodeo SA. The basic science of articular cartilage: structure, composition, and function. Sports Health. 2009;1(6):461-8." },
  { id: "r10", pmid: "12056848", doi: "10.1053/joca.2002.0801", year: 2002, type: "narrative-review", cites: "Hunziker EB. Articular cartilage repair: basic science and clinical progress. A review of the current status and prospects. Osteoarthritis Cartilage. 2002;10(6):432-63." },
  { id: "r11", pmid: "21764438", doi: "10.1016/j.biomaterials.2011.06.037", year: 2011, type: "narrative-review", cites: "Makris EA, Hadidi P, Athanasiou KA. The knee meniscus: structure-function, pathophysiology, current repair techniques, and prospects for regeneration. Biomaterials. 2011;32(30):7411-31." },
  { id: "r12", pmid: "23895713", doi: "10.1016/j.hcl.2013.04.002", year: 2013, type: "narrative-review", cites: "Menorca RMG, Fussell TS, Elfar JC. Nerve physiology: mechanisms of injury and recovery. Hand Clin. 2013;29(3):317-30." },
  { id: "r13", pmid: "16915105", doi: "10.1097/01.brs.0000231761.73859.2c", year: 2006, type: "narrative-review", cites: "Adams MA, Roughley PJ. What is intervertebral disc degeneration, and what causes it? Spine (Phila Pa 1976). 2006;31(18):2151-61." },
  { id: "r14", pmid: "25009200", doi: "10.1177/0269215514540919", year: 2015, type: "systematic-review", cites: "Chiu CC, Chuang TY, Chang KH, Wu CH, Lin PW, Hsu WY. The probability of spontaneous regression of lumbar herniated disc: a systematic review. Clin Rehabil. 2015;29(2):184-95." },
  { id: "r15", pmid: "18825364", doi: "10.1007/s00132-008-1305-6", year: 2008, type: "narrative-review", cites: "Schultheis A, Reichwein F, Nebelung W. [Frozen shoulder. Diagnosis and therapy]. Orthopade. 2008;37(11):1065-6, 1068-72. (German; English abstract.)" }
].map((r) => ({ ...r, citation: r.cites }));
const REF_BY_ID = new Map(REFS.map((r) => [r.id, r]));

/* ================================================================== content */
const P = (name, when, kind, text, cells) => ({ name, when, kind, text, cells });
const KIND_LABEL = { i: "Inflammatory or injury response", p: "Proliferative or repair", r: "Remodelling or maturation", o: "Other (not time-linked)" };

const TISSUES = [
  {
    id: "ligament", label: "Ligament", icon: "ligament", def: "sprain",
    variants: [{
      id: "sprain", label: "Ligament sprain", micro: "ligament", keys: ["ligament"],
      animTitle: "Ligament collagen: from overload to remodelling",
      lead: "Extra-articular ligaments such as the MCL and the lateral ankle ligaments usually heal by scar, and the scar never fully matches the original: it is larger, weaker and creeps more under load [r3]. Intra-articular ligaments such as the ACL have little spontaneous healing response, which is why stability often depends on muscle control or reconstruction.",
      chart: { label: "Ligament sprain", segs: [[1, 5, "i", "Inflammation"], [5, 42, "p", "Proliferation"], [42, 365, "r", "Remodelling", true]] },
      phases: [
        P("Inflammatory", "Days 0–5", "i", "Bleeding forms a haematoma and fibrin clot. Platelets release growth factors, neutrophils then macrophages clear debris and new vessels begin to form. Swelling and pain peak [r2].", "Platelets, neutrophils, macrophages"),
        P("Proliferative", "Day 5 to week 6", "p", "Fibroblasts and new capillaries fill the gap with a bulky, disorganised matrix rich in type III collagen and glycosaminoglycans, with few cross-links [r2,r3].", "Fibroblasts, endothelial cells"),
        P("Remodelling", "Week 6 to 12+ months", "r", "Collagen is replaced, realigned along the line of load and cross-linked, and cellularity and vascularity fall. The scar stays weaker, larger and more prone to creep than normal ligament [r3].", "Fibroblasts remodelling matrix")
      ],
      loading: [
        "Fibroblasts sense strain and adjust collagen synthesis and alignment [r1]. Early, controlled motion in a stable joint is one of the variables that alters how a ligament heals. So are the size of the gap and the presence of other ligament injuries [r3].",
        "Protect against forces that would open the injured ends, but avoid prolonged unloading once the joint is stable enough to move."
      ],
      rehab: [
        "Early: control swelling, restore pain-free range and activate muscle while protecting the ligament from the stress that injured it.",
        "Settled pain does not mean mature tissue. The scar keeps remodelling for months, so progress high-risk loading (cutting, landing, contact) on criteria such as strength, control and function, not on date.",
        "Where scar laxity persists, dynamic stability depends on neuromuscular control: train strength, proprioception and movement quality."
      ],
      watch: "Grade III, multi-ligament and intra-articular injuries can follow a different pathway. Use the injury page for specifics.",
      stages: [
        ["healthy", "Healthy ligament: crimped type I collagen fibres aligned along the line of load."],
        ["loaded", "Under load the crimp straightens and the fibres stretch elastically."],
        ["overload", "Beyond the elastic range, fibrils slide and start to fail."],
        ["failure", "Fibres fail one after another until the ligament loses continuity."],
        ["haemorrhage", "Torn capillaries bleed into the gap and a fibrin clot forms."],
        ["inflammation", "Inflammation: neutrophils, then macrophages, clear debris.", "Days 0–5"],
        ["proliferation", "Fibroblasts and new capillaries lay down disorganised type III collagen.", "Day 5 – week 6"],
        ["remodelling", "Collagen realigns along the line of load and cross-links mature.", "Week 6 – 12+ months"]
      ]
    }]
  },
  {
    id: "tendon", label: "Tendon", icon: "tendon", def: "acute",
    variants: [
      {
        id: "acute", label: "Acute tendon injury", micro: "tendon", keys: ["tendon"],
        animTitle: "Tendon collagen: from overload to remodelling",
        lead: "A torn or surgically repaired tendon heals through the same overlapping phases as ligament, but regaining organised, load-bearing collagen is slow [r2]. Resident tendon cells drive the repair [r2].",
        chart: { label: "Acute tendon injury", segs: [[1, 7, "i", "Inflammation"], [7, 42, "p", "Proliferation"], [42, 365, "r", "Remodelling", true]] },
        phases: [
          P("Inflammatory", "Days 0–7", "i", "A haematoma forms, then neutrophils and macrophages remove damaged tissue. Cytokines and growth factors recruit and activate repair cells [r2].", "Neutrophils, macrophages, resident tendon cells"),
          P("Proliferative", "Week 1 to week 6", "p", "Tenocytes and fibroblasts multiply and lay down a disorganised, type III-rich matrix while capillaries grow in [r2].", "Tenocytes, fibroblasts"),
          P("Remodelling", "Week 6 to 12+ months", "r", "Type I collagen replaces type III, and fibres align along the tendon axis and cross-link. Tensile strength rises over months [r2].", "Tenocytes remodelling matrix")
        ],
        loading: [
          "Tenocytes convert strain into signals that regulate collagen synthesis and turnover [r1]. Well-dosed loading drives alignment, whereas unloading and overload both impair it.",
          "After surgical repair or complete rupture the protocol (tendon, repair type, surgeon) sets how early and how much load is safe. Too much, too soon risks gapping or re-rupture."
        ],
        rehab: [
          "A usual sequence is protected motion, isometrics, isotonic and heavy slow resistance, energy-storage work (hopping, plyometrics), then sport-specific load.",
          "Progress on criteria (pain response, strength and endurance symmetry, function) rather than the calendar. Remodelling lasts many months.",
          "Leave high-speed, high-force tasks until last."
        ],
        watch: "Ruptures and large tears need an early diagnosis and a clear decision between non-operative care and repair. The injury page covers the pathway.",
        stages: [
          ["healthy", "Healthy tendon: dense, parallel type I collagen with rows of tenocytes."],
          ["loaded", "Load straightens the crimp and fibres slide; tenocytes sense the strain."],
          ["overload", "Beyond the elastic range, fibres begin to fail."],
          ["failure", "Fibres rupture and the tendon loses continuity."],
          ["haemorrhage", "Bleeding fills the gap and a fibrin clot forms."],
          ["inflammation", "Inflammatory cells clear debris.", "Days 0–7"],
          ["proliferation", "Tenocytes lay down disorganised collagen as new vessels grow in.", "Week 1 – 6"],
          ["remodelling", "Collagen realigns along the line of pull and cross-links over months.", "Week 6 – 12+ months"]
        ]
      },
      {
        id: "tendinopathy", label: "Tendinopathy continuum", micro: "tendon-continuum", keys: ["tendon"],
        animTitle: "The tendinopathy continuum",
        lead: "Overuse tendinopathy is better explained as a load-related continuum than as simple inflammation or failed healing [r4]. The model describes reactive, disrepair and degenerative states to guide treatment choices. Structure and pain do not map neatly, so treat it as a reasoning aid, not a staging system [r5].",
        chart: null,
        note: "Time frames below are indicative only. Tendons do not move along the continuum on a fixed schedule, and the states can coexist in one tendon.",
        phases: [
          P("Reactive", "Days to weeks", "o", "A short-term adaptive response to a load spike. The tendon thickens as proteoglycans draw in water, with collagen largely intact. It is usually reversible when load is managed [r4].", "Tenocytes, proteoglycans"),
          P("Disrepair", "Weeks to months", "o", "Attempted healing: more cells, matrix breakdown and rebuilding, and growth of new vessels and nerves. Some capacity for reversal remains [r4].", "Tenocytes, new vessels"),
          P("Degenerative", "Months to years", "o", "Cell death, disorganised matrix and areas of little cellular activity. There is little capacity for structural reversal, although function and load capacity can still improve [r4].", "Few viable cells")
        ],
        loading: [
          "Treatment is matched to where the tendon sits on the continuum, alongside pain, irritability and load capacity [r4,r5].",
          "Reactive: reduce the load spike, especially compressive and energy-storage tasks, and keep the tendon moving within tolerance. Disrepair and early degenerative: progressive loading to stimulate matrix remodelling and rebuild capacity [r4].",
          "Cells turn mechanical load into repair signals [r1], but the matrix adapts slowly, so programs usually run for months."
        ],
        rehab: [
          "Identify the load that tipped the tendon (a spike in volume, intensity or reduced recovery) and modify it first.",
          "Build capacity progressively: isometric, then isotonic or heavy slow resistance, then energy storage, then sport. Let the symptom response over the next 24 hours guide the dose.",
          "Set expectations of weeks to months at the start. Re-test capacity (for example hop or calf-raise endurance) rather than relying on pain alone."
        ],
        watch: "A sudden pop, loss of function or palpable gap points to rupture, not tendinopathy. Classifying by structure alone in what is primarily a pain condition has been challenged [r5].",
        stages: [
          ["healthy", "Healthy tendon: tightly packed, aligned collagen with few tenocytes."],
          ["reactive", "Reactive: a load spike thickens the tendon as proteoglycans draw in water."],
          ["disrepair", "Disrepair: cell numbers rise, matrix is broken down and rebuilt, new vessels grow in."],
          ["degenerative", "Degenerative: cell death and disorganised matrix leave areas with little capacity to reverse."],
          ["load-adaptation", "Well-dosed, progressive loading drives adaptation and rebuilds capacity."]
        ]
      }
    ]
  },
  {
    id: "muscle", label: "Muscle", icon: "muscle", def: "strain",
    variants: [{
      id: "strain", label: "Muscle strain", micro: "muscle", keys: ["muscle"],
      animTitle: "Muscle fibres: injury, regeneration and scar",
      lead: "Skeletal muscle can regenerate. Satellite cells, supported by a tightly sequenced immune response, rebuild damaged fibres [r6]. Severe injuries also lay down connective-tissue scar, and how the balance falls depends on the injury and on loading.",
      chart: { label: "Muscle strain", segs: [[1, 5, "i", "Inflammation"], [5, 21, "p", "Regeneration"], [21, 90, "r", "Remodelling", true]] },
      note: "Phases overlap. Regeneration begins while inflammation is still resolving.",
      phases: [
        P("Destruction and inflammation", "Days 0–5", "i", "Damaged fibres necrose and a haematoma forms. Eccentric contractions damage myofibrils directly, whereas other injuries mainly breach the cell membrane and let calcium in. Neutrophils, then pro-inflammatory (M1) macrophages, clear debris and signal satellite cells [r6].", "Neutrophils, M1 macrophages"),
        P("Repair and regeneration", "Days 5–21", "p", "Anti-inflammatory (M2) macrophages promote repair as satellite cells activate, multiply and fuse into new myotubes. Capillaries regrow and fibroblasts lay down connective tissue [r6].", "Satellite cells, M2 macrophages, fibroblasts"),
        P("Remodelling", "Week 3 to months", "r", "New fibres mature and align, and the scar matures and contracts. Strength and architecture keep improving with progressive loading.", "Myofibres, fibroblasts")
      ],
      loading: [
        "Mechanical load stimulates repair and remodelling in muscle [r1]. Dose matters: too little delays recovery and too much, too early, risks re-injury.",
        "The immune and regenerative sequence is time-dependent and tightly coordinated [r6], so rest and loading should both be matched to the stage rather than to pain alone."
      ],
      rehab: [
        "Brief protection, then early pain-guided mobilisation and isometrics. Avoid prolonged immobilisation.",
        "Progress through eccentric and lengthened-range strengthening to high-speed and sport-specific work, on criteria. Regeneration and scar maturation take weeks to months.",
        "Re-injury risk is highest when pain has settled but remodelling is incomplete. Test strength, flexibility and sprint capacity before full return."
      ],
      watch: "A palpable defect, severe loss of strength or a large haematoma suggests a high-grade tear. Consider imaging and specialist review.",
      stages: [
        ["healthy", "Healthy muscle: sarcomeres in register, with satellite cells resting beside each fibre."],
        ["contracting", "During contraction, actin and myosin slide within each sarcomere."],
        ["eccentric-overstretch", "Lengthening under load overstretches the weakest sarcomeres."],
        ["sarcomere-disruption", "Sarcomeres tear and the membrane leaks; calcium floods in."],
        ["haematoma", "Bleeding from torn vessels forms a haematoma within the injured fibres."],
        ["inflammation", "Neutrophils, then macrophages, invade and clear debris.", "Days 0–5"],
        ["satellite-activation", "Satellite cells wake, divide and migrate to the injury.", "Overlaps inflammation"],
        ["regeneration", "Satellite cells fuse into new myotubes that mature into fibres.", "Days 5–21"],
        ["scar", "Fibroblasts deposit collagen as regenerated fibres align and the scar matures.", "Week 3 onward"]
      ]
    }]
  },
  {
    id: "bone", label: "Bone", icon: "bone", def: "fracture",
    variants: [
      {
        id: "fracture", label: "Fracture healing", micro: "bone-fracture", keys: ["bone"],
        animTitle: "Fracture healing: haematoma to remodelling",
        lead: "Bone is one of the few tissues that heals by regeneration rather than scar, recapitulating events of skeletal development. About 10% of fractures do not heal normally [r7].",
        chart: { label: "Fracture", segs: [[1, 7, "i", "Haematoma"], [7, 21, "p", "Soft callus"], [21, 84, "p", "Hard callus"], [84, 730, "r", "Remodelling", true]] },
        note: "Union time depends on the bone, site, age, fracture pattern, fixation, blood supply and systemic health. Union is judged clinically and on imaging, not by a date.",
        phases: [
          P("Haematoma and inflammation", "Days 0–7", "i", "A haematoma forms and innate and adaptive immune cells and cytokines recruit progenitor cells [r7]. Pain, swelling and loss of function are greatest.", "Platelets, neutrophils, macrophages, progenitors"),
          P("Soft callus", "Weeks 1–3", "p", "A cartilaginous callus bridges the gap while periosteal bone forms at the margins. The fracture becomes more stable but is not yet rigid [r7].", "Chondrocytes, osteoprogenitors"),
          P("Hard callus", "Weeks 3–12", "p", "Woven bone replaces cartilage and is vascularised, so the callus stiffens and bridges on imaging. Clinical union is judged by pain on loading and radiographs.", "Osteoblasts, endothelial cells"),
          P("Remodelling", "Month 3 to years", "r", "Osteoclasts and osteoblasts replace woven bone with lamellar bone and restore cortex and medullary canal, following the mechanical load [r7].", "Osteoclasts, osteoblasts")
        ],
        loading: [
          "Fixation and the mechanical environment influence healing [r7]. Stable fixation with controlled micro-movement favours callus, whereas excessive movement can lead to delayed or non-union.",
          "Bone cells respond to strain. Controlled loading after fracture stimulates repair and later remodelling [r1]."
        ],
        rehab: [
          "Follow the surgeon's weight-bearing and range limits. Keep adjacent joints moving and muscles active (isometrics) inside the immobiliser.",
          "Progress load as union is confirmed clinically and on imaging: range first, then strength, then impact.",
          "Increasing pain, deformity, infection signs or no progress by the expected milestones warrant review for delayed or non-union."
        ],
        watch: "Fixation, soft-tissue injury and blood supply all affect the risk of non-union [r7].",
        stages: [
          ["healthy", "Healthy bone: cortical rim, trabeculae and marrow, supplied by periosteal and medullary vessels."],
          ["fracture", "A fracture breaks the cortex and tears local vessels."],
          ["haematoma", "A haematoma fills the gap and provides a scaffold for repair cells."],
          ["inflammation", "Inflammatory cells and cytokines recruit progenitor cells.", "Days 0–7"],
          ["soft-callus", "A cartilaginous soft callus bridges the fragments.", "Weeks 1–3"],
          ["hard-callus", "Woven bone replaces cartilage and the callus stiffens.", "Weeks 3–12"],
          ["remodelling", "Lamellar bone replaces woven bone and the cortex is restored.", "Months to years"]
        ]
      },
      {
        id: "stress", label: "Bone stress injury", micro: "bone-stress", keys: ["bone"],
        animTitle: "Bone stress injury: from microdamage to healing",
        lead: "Bone stress injuries are overuse injuries in which repetitive load outpaces repair. The prevailing theory is a metabolic imbalance that favours accumulating microdamage over its removal and replacement by targeted remodelling [r8].",
        chart: { label: "Bone stress injury (low-risk site)", segs: [[1, 14, "o", "Offload"], [14, 84, "p", "Healing"], [84, 365, "r", "Remodelling", true]] },
        note: "The chart shows a low-risk site. High-risk sites heal more slowly and may need stricter offloading, medication or surgery [r8].",
        phases: [
          P("Adaptation and microdamage", "Weeks of repetitive load", "o", "Normal loading causes microdamage that targeted remodelling repairs. Resorption comes first, so bone is temporarily more porous, and damage accumulates if load rises faster than repair [r8].", "Osteoclasts, osteoblasts"),
          P("Stress reaction to stress fracture", "Symptomatic phase", "o", "Pain with loading. Imaging confirms the diagnosis: marrow oedema (stress reaction) and, if damage progresses, a cortical break (stress fracture). Site determines risk of healing complications [r8].", "Osteocytes, remodelling units"),
          P("Healing", "About 6–12 weeks at low-risk sites", "p", "Low-risk sites typically heal with activity modification followed by progressive loading. High-risk sites may need non-weight-bearing immobilisation, medication or surgery [r8].", "Osteoblasts forming new bone"),
          P("Remodelling", "Months", "r", "New bone matures and remodels and capacity returns gradually. Return to running or jumping is graded, not abrupt.", "Osteoclasts, osteoblasts")
        ],
        loading: [
          "Bone adapts to load only when increases are graded and recovery is adequate. A comprehensive strategy considers anatomical, biomechanical and biological risk factors [r8].",
          "Bone cells convert strain into formation and resorption signals [r1], which is why load has to be reduced to let repair catch up and then rebuilt progressively."
        ],
        rehab: [
          "Risk-stratify by site first. Low-risk sites can usually be managed with load modification then graded loading, while high-risk sites need stricter offloading and specialist input [r8].",
          "Replace the provoking load with pain-free alternatives (cross-training) to maintain fitness while the bone heals.",
          "Return to impact with a graded program, for example walk–run intervals, once bony tenderness settles and loading tests are pain-free. Address training load, biomechanics and nutrition or energy availability."
        ],
        watch: "High-risk sites need earlier imaging and more cautious loading [r8].",
        stages: [
          ["healthy", "Healthy bone continually remodels: osteoclasts resorb and osteoblasts replace."],
          ["loading", "Repetitive loading creates microscopic damage within the cortex."],
          ["microdamage", "Microcracks accumulate as load continues."],
          ["resorption-exceeds-formation", "Resorption outpaces new bone formation, leaving a weaker, more porous area."],
          ["stress-reaction", "Stress reaction: marrow oedema and a periosteal response, often with pain."],
          ["stress-fracture", "If loading continues, the cortex cracks: a stress fracture."],
          ["healing", "With relative rest and graded loading, bone formation catches up and the cortex heals.", "About 6–12 weeks"]
        ]
      }
    ]
  },
  {
    id: "cartilage", label: "Cartilage and meniscus", icon: "cartilage", def: "articular",
    variants: [
      {
        id: "articular", label: "Articular cartilage", micro: "cartilage", keys: ["cartilage"],
        animTitle: "Articular cartilage: impact, loss and repair",
        lead: "Articular cartilage is avascular and sparsely populated by chondrocytes within a collagen and proteoglycan matrix [r9]. Its capacity for spontaneous repair is limited, and most strategies to improve it remain experimental [r10].",
        chart: { label: "Articular cartilage", segs: [[1, 14, "i", "Injury"], [14, 180, "p", "Fibrocartilage fill"], [180, 730, "r", "Maturation", true]] },
        note: "Timings are approximate and depend on the lesion and on any surgical technique used.",
        phases: [
          P("Injury response", "Hours to weeks", "i", "Impact kills chondrocytes and disrupts the matrix, which loses proteoglycan and swells. A lesion confined to cartilage has no blood supply to start a repair response [r10].", "Chondrocytes (lost)"),
          P("Repair attempt", "Weeks to months", "p", "If the lesion reaches subchondral bone, bleeding and a fibrin clot bring in marrow cells that form fibrocartilage. Its structure and mechanical properties differ from hyaline cartilage [r10].", "Marrow-derived cells"),
          P("Maturation and long term", "About 6–24 months", "r", "Repair tissue matures slowly. Fibrocartilage is mechanically inferior and may degrade, so these lesions carry a long-term risk of osteoarthritis [r10].", "Fibrochondrocytes")
        ],
        loading: [
          "Chondrocytes respond to mechanical load [r1]. Moderate, cyclic loading supports the matrix, whereas high impact or shear damages it and prolonged unloading weakens it.",
          "Joint motion also helps nourish cartilage by moving synovial fluid through the matrix."
        ],
        rehab: [
          "Protect the repair site after cartilage procedures. Weight-bearing and range restrictions vary widely with technique and lesion site. Restore range and muscle function early.",
          "Progress load in graded steps and defer impact and pivoting until the repair tissue has matured, commonly many months.",
          "Long term, manage load and keep the muscles around the joint strong."
        ],
        watch: "Locking, catching or a persistent effusion can mean an unstable chondral flap or a loose body. Refer for imaging.",
        stages: [
          ["healthy", "Healthy cartilage: chondrocytes in a collagen and proteoglycan matrix, with a smooth surface."],
          ["impact", "A high-energy impact compresses the matrix and fissures the surface."],
          ["chondrocyte-death", "Chondrocytes die at and around the impact site."],
          ["matrix-loss", "The matrix loses proteoglycan and water-binding, softening the tissue."],
          ["fibrocartilage-fill", "Where the lesion reaches bone, marrow cells fill it with fibrocartilage.", "Weeks to months"],
          ["degeneration", "Repair tissue is mechanically inferior and may wear and degenerate over time."]
        ]
      },
      {
        id: "meniscus", label: "Meniscus", micro: "meniscus", keys: ["meniscus"],
        animTitle: "Meniscus: tear and zone-dependent healing",
        lead: "The meniscus heals only where it has a blood supply. Repair works in the peripheral, vascular region. Lesions in the inner, avascular region are a significant challenge, and the usual treatment, partial meniscectomy, commonly leads to progressive osteoarthritis [r11].",
        chart: { label: "Meniscus (repaired red zone)", segs: [[1, 14, "i", "Clot"], [14, 84, "p", "Vascular repair"], [84, 365, "r", "Remodelling", true]] },
        note: "Timings apply to a repaired tear in the vascular outer zone and vary with tear pattern and protocol.",
        phases: [
          P("Injury and clot", "Days 0–14", "i", "In the vascular outer zone a fibrin clot forms and inflammatory cells arrive. The avascular inner zone has no equivalent response [r11].", "Platelets, inflammatory cells"),
          P("Vascular repair", "Weeks 2–12", "p", "Vessels grow in from the perimeniscal capillary plexus, fibrochondrocytes multiply and a fibrovascular scar bridges the tear.", "Fibrochondrocytes, endothelial cells"),
          P("Remodelling", "Months 3–12", "r", "The scar remodels toward fibrocartilage. A repaired meniscus stays vulnerable to loaded deep flexion and rotation while it matures.", "Fibrochondrocytes")
        ],
        loading: [
          "The meniscus turns compression into circumferential (hoop) tension. A repaired tear is stressed by loaded deep flexion and rotation, so protocols limit them for weeks. Details vary by tear type and surgeon.",
          "Controlled motion and graded loading then support remodelling and restore the meniscus's load-sharing role."
        ],
        rehab: [
          "Non-operative care or after partial meniscectomy: symptom-guided loading with range, quadriceps and hip strength restored.",
          "After repair: follow the protocol's weight-bearing, flexion and rotation limits, then progress strength, running and pivoting.",
          "Inner-zone tears are not expected to heal, so treatment targets symptoms and mechanics rather than tissue repair [r11]."
        ],
        watch: "A true block to full extension suggests a displaced fragment and may need surgical review.",
        stages: [
          ["healthy", "Healthy meniscus: circumferential collagen fibres, a vascular outer rim and an avascular inner zone."],
          ["loaded", "Compression pushes the meniscus outward and its circumferential fibres resist the hoop tension."],
          ["tear", "Excess compression and rotation tears the fibrocartilage."],
          ["red-zone-healing", "In the vascular outer zone, a clot and new vessels let a fibrovascular scar bridge the tear."],
          ["white-zone-no-healing", "In the avascular inner zone there is no blood supply, so the tear does not heal."]
        ]
      }
    ]
  },
  {
    id: "nerve", label: "Nerve", icon: "nerve", def: "injury",
    variants: [{
      id: "injury", label: "Peripheral nerve injury", micro: "nerve", keys: ["nerve"],
      animTitle: "Peripheral nerve: compression to regeneration",
      lead: "Peripheral nerves can regenerate, but how well depends on the severity of the injury (the Seddon and Sunderland classifications), the distance to the target and time [r12]. The phases below follow an axonal injury; a conduction block recovers sooner and a complete transection does not recover without surgery.",
      chart: { label: "Nerve (axonal injury)", segs: [[1, 7, "i", "Conduction block"], [7, 28, "p", "Degeneration"], [28, 730, "r", "Regrowth", true]] },
      note: "Regrowth continues for months to years, depending on the distance to the target. Times are typical clinical ranges.",
      phases: [
        P("Conduction block", "Hours to weeks", "i", "Compression or traction causes ischaemia and then focal demyelination. Conduction slows or blocks while the axon stays intact (neurapraxia), and recovery follows remyelination, often within weeks [r12].", "Schwann cells"),
        P("Wallerian degeneration", "Days to weeks", "p", "When axons are disrupted (axonotmesis), the segment beyond the injury degenerates. Schwann cells and macrophages clear debris, and Schwann cells form guiding columns [r12].", "Schwann cells, macrophages"),
        P("Regeneration", "Weeks to years", "r", "Axons sprout from the proximal stump and grow along the Schwann-cell columns at roughly 1 mm per day (a typical clinical figure), so recovery time scales with the distance to the target. Denervated muscle and Schwann cells deteriorate over a long period, so late reinnervation is less effective.", "Growth cones, Schwann cells"),
        P("Complete transection", "No spontaneous recovery", "o", "When the whole nerve is divided (neurotmesis), regeneration cannot bridge the gap without surgical repair or grafting [r12].", "")
      ],
      loading: [
        "Nerves tolerate limited tension and compression. Sustained compression reduces blood flow to the nerve, and excessive traction stretches its fascicles. Normal movement lets the nerve glide against its surroundings.",
        "Early on, remove or reduce the mechanical insult (posture, compression, traction). Later, graded movement restores gliding and tolerance, and aggressive stretching of an irritable nerve can aggravate it.",
        "The tissues a nerve supplies still need load while they wait for reinnervation."
      ],
      rehab: [
        "Establish severity and mechanism: sensory and motor deficits, how they change over time and, when needed, electrodiagnostic testing.",
        "Maintain range in denervated segments, protect insensate skin and avoid overstretching weak muscle. Strengthen as reinnervation returns, building gradually to avoid fatigue.",
        "Refer early if a deficit is complete, progressive or fails to show the expected advance. Nerve repair is time-critical."
      ],
      watch: "A complete or worsening motor and sensory loss after laceration or high-energy trauma is not a routine physiotherapy problem. Arrange urgent surgical review.",
      stages: [
        ["healthy", "Healthy nerve: myelinated axons wrapped in endoneurium, perineurium and epineurium."],
        ["compression", "Sustained compression squeezes the nerve against a rigid tunnel."],
        ["ischaemia", "Compression reduces intraneural blood flow and the nerve becomes ischaemic."],
        ["demyelination", "Myelin thins locally, slowing or blocking conduction (neurapraxia)."],
        ["axonal-injury", "With greater force the axons themselves are disrupted (axonotmesis)."],
        ["wallerian-degeneration", "Beyond the injury the axon breaks down; Schwann cells and macrophages clear debris."],
        ["regeneration", "Axons sprout along Schwann-cell guides, advancing about 1 mm per day.", "Months to years"]
      ]
    }]
  },
  {
    id: "disc", label: "Disc and capsule", icon: "joint", def: "disc",
    variants: [
      {
        id: "disc", label: "Intervertebral disc", micro: "disc", keys: ["disc"],
        animTitle: "Intervertebral disc: fissure to resorption",
        lead: "Adult discs have limited healing potential. Structural failure (endplate fracture, radial fissure or herniation) is largely irreversible and can drive a cell-mediated cascade that extends the damage [r13]. Even so, herniated disc tissue often regresses with conservative care [r14].",
        chart: { label: "Disc herniation", segs: [[1, 42, "i", "Inflammation"], [42, 365, "r", "Resorption", true]] },
        note: "Timings are typical clinical ranges for a symptomatic herniation. Individual courses vary widely.",
        phases: [
          P("Structural failure", "Moment of injury or accumulated", "o", "Annular fissures, endplate fracture or herniation of nucleus material through the annulus disrupt the disc's structure [r13].", "Annulus and nucleus cells"),
          P("Inflammatory response", "Weeks 0–6", "i", "Extruded nucleus provokes inflammation and new vessel growth around the herniation, which contributes to radicular pain.", "Immune cells"),
          P("Resorption and adaptation", "Weeks to months", "r", "Herniated tissue is often resorbed. In a systematic review, spontaneous regression was found in 96% of sequestrated, 70% of extruded, 41% of protruded and 13% of bulging discs [r14]. Inner annular fissures are unlikely to repair [r13].", "")
        ],
        loading: [
          "Excessive mechanical loading can disrupt disc structure and set off cell-mediated responses that extend the damage [r13]. Once structure fails, disc cells no longer sense the load of the whole disc, so their responses can be inappropriate [r13].",
          "Fear-avoidance and prolonged rest are unhelpful. Graded, symptom-guided loading is the usual approach."
        ],
        rehab: [
          "Explain the natural history: pain and radicular symptoms commonly settle and disc tissue often regresses [r14].",
          "Progress from symptom-guided movement to graded loading of the trunk and lower limb, with activity pacing.",
          "Monitor neurological status. Progressive deficit, saddle anaesthesia or bladder or bowel change needs emergency review."
        ],
        watch: "Cauda equina features (saddle anaesthesia, retention or incontinence, bilateral or progressive leg weakness) are an emergency.",
        stages: [
          ["healthy", "Healthy disc: a gel-like nucleus held within concentric annular lamellae between endplates."],
          ["loaded", "Compression raises nucleus pressure and the annulus resists with fibre tension."],
          ["annular-fissure", "Repetitive or excessive load opens fissures in the annulus."],
          ["nucleus-migration", "Nucleus material tracks along the fissure toward the outer annulus."],
          ["herniation", "The nucleus bulges or extrudes through the annulus, sometimes contacting a nerve root."],
          ["inflammation", "The extruded material provokes inflammation and local vessel growth.", "Weeks 0–6"],
          ["resorption", "Over weeks to months, herniated material is often resorbed and symptoms ease.", "Weeks to months"]
        ]
      },
      {
        id: "capsule", label: "Joint capsule (frozen shoulder)", micro: "capsule", keys: ["joint-capsule"],
        animTitle: "Joint capsule: inflammation to contracture and recovery",
        lead: "After injury, surgery or immobilisation a joint capsule can become inflamed, fibrotic and contracted. Frozen shoulder (adhesive capsulitis) is the best-described example, with a self-limiting course through freezing, frozen and thawing stages, each lasting about 4–6 months in one review [r15].",
        chart: { label: "Frozen shoulder", segs: [[1, 150, "i", "Freezing"], [150, 300, "p", "Frozen"], [300, 450, "r", "Thawing", true]] },
        note: "Stage lengths are averages from one review [r15]. The course varies widely between people.",
        phases: [
          P("Freezing (painful)", "About months 0–5", "i", "Synovitis and capsular inflammation. Pain is worst and passive range falls progressively [r15].", "Synoviocytes, immune cells"),
          P("Frozen (stiff)", "About months 5–10", "p", "Fibrosis and contracture dominate. Stiffness persists while pain and inflammation improve [r15].", "Fibroblasts"),
          P("Thawing", "About months 10–15", "r", "Capsular remodelling gradually restores range [r15].", "Fibroblasts remodelling collagen")
        ],
        loading: [
          "Capsular collagen remodels in response to sustained tension, but in the irritable, inflammatory stage forceful stretching tends to increase pain.",
          "Treatment is commonly matched to stage: analgesia and injection for the painful stage, and physiotherapy with manual therapy emphasised in the later stages [r15]."
        ],
        rehab: [
          "Match intensity to irritability: low-load, pain-limited movement and education early, then stretching and strengthening as pain eases.",
          "Reassure that the condition is self-limiting [r15], while being honest that recovery is slow.",
          "Look for contributors when the pattern is atypical. Metabolic disorders are over-represented, and secondary forms follow injury or surgery [r15]."
        ],
        watch: "Night pain unrelated to movement, systemic features or a trauma history should prompt a broader differential.",
        stages: [
          ["healthy", "Healthy capsule: a flexible collagen sheet lined by synovium, with room for the joint to move."],
          ["inflammation", "Synovitis: the lining thickens, becomes inflamed and painful.", "About months 0–5"],
          ["fibrosis", "Fibroblasts lay down dense collagen and the capsule thickens.", "About months 5–10"],
          ["contracture", "The capsule shortens and stiffens, restricting range in all planes."],
          ["remodelling", "Over months the collagen remodels and range slowly returns.", "About months 10–15"]
        ]
      }
    ]
  }
];

const GROUP_BY_ID = new Map(TISSUES.map((g) => [g.id, g]));
const ALIAS = {
  tendinopathy: ["tendon", "tendinopathy"], fracture: ["bone", "fracture"], stress: ["bone", "stress"], "bone-stress": ["bone", "stress"],
  "stress-fracture": ["bone", "stress"], meniscus: ["cartilage", "meniscus"], capsule: ["disc", "capsule"], "joint-capsule": ["disc", "capsule"],
  sprain: ["ligament", "sprain"], strain: ["muscle", "strain"], articular: ["cartilage", "articular"], labrum: ["cartilage", "meniscus"]
};

function resolve(params) {
  const a = String(params[0] || "").toLowerCase();
  const b = String(params[1] || "").toLowerCase();
  let g = GROUP_BY_ID.get(a), vid = null;
  if (g) vid = b;
  else if (ALIAS[a]) { g = GROUP_BY_ID.get(ALIAS[a][0]); vid = ALIAS[a][1]; }
  const known = !!g;
  g = g || TISSUES[0];
  const v = g.variants.find((x) => x.id === vid) || g.variants.find((x) => x.id === g.def) || g.variants[0];
  return { group: g, variant: v, known };
}
const tokenFor = (g, v) => (v.id === g.def ? g.id : `${g.id}.${v.id}`);

/* ================================================================== helpers */
function fmt(text) {
  const frag = document.createDocumentFragment();
  const re = /\*\*(.+?)\*\*|\[(r\d+(?:\s*,\s*r\d+)*)\]/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) frag.append(text.slice(last, m.index));
    if (m[1] !== undefined) frag.append(h("strong", null, m[1]));
    else {
      const prev = frag.lastChild;
      if (prev && prev.nodeType === 3) prev.nodeValue = prev.nodeValue.replace(/\s+$/, "");
      const sup = h("sup", { class: "cite" });
      m[2].split(/\s*,\s*/).forEach((id, i) => {
        if (i) sup.append(",");
        const r = REF_BY_ID.get(id), n = id.slice(1);
        sup.append(h("a", { class: "cite__ref", href: `#hl-ref-${id}`, title: r ? `[${n}] ${r.citation}` : null, "aria-label": `Reference ${n}${r ? ": " + r.citation : ""}` }, n));
      });
      frag.append(sup);
    }
    last = re.lastIndex;
  }
  if (last < text.length) frag.append(text.slice(last));
  return frag;
}

function citedIds(v) {
  const all = [v.lead, v.note, v.watch, ...v.loading, ...v.rehab, ...v.phases.map((p) => p.text)].filter(Boolean).join(" ");
  return [...new Set([...all.matchAll(/\[(r\d+(?:\s*,\s*r\d+)*)\]/g)].flatMap((m) => m[1].split(/\s*,\s*/)))].sort((a, b) => +a.slice(1) - +b.slice(1));
}

const LOG_MAX = Math.log(730);
const pos = (d) => Math.min(100, (Math.log(Math.max(1, d)) / LOG_MAX) * 100);
const reduced = () => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch { return false; } };

function buildSpec(v) {
  const n = v.stages.length;
  const per = n > 6 ? 1.5 : 1.7;
  const t = (i) => Math.round(i * per * 100) / 100;
  return {
    title: v.animTitle,
    phases: [{
      type: "micro", label: "Cellular response", duration: Math.round(n * per * 10) / 10, tissue: v.micro,
      stages: v.stages.map((s, i) => ({ t: t(i), stage: s[0] })),
      timeLabels: v.stages.map((s, i) => (s[2] ? { t: t(i), text: s[2] } : null)).filter(Boolean),
      captions: v.stages.map((s, i) => ({ t: t(i), text: s[1] }))
    }]
  };
}

const humanStage = (s) => { const t = s.replace(/-/g, " "); return t[0].toUpperCase() + t.slice(1); };

/* ================================================================== module state */
const S = { root: null, ctx: null, group: null, variant: null, player: null, io: null, token: 0, entries: [], parts: null };

export function destroy() {
  S.token++;
  try { S.player && S.player.destroy && S.player.destroy(); } catch { /* ignore */ }
  try { S.io && S.io.disconnect(); } catch { /* ignore */ }
  S.player = null; S.io = null; S.root = null; S.parts = null;
}

/* ================================================================== sections */
function loadResponseFigure() {
  const t = (x, y, txt, o = {}) => h("text", { x, y, "text-anchor": o.anchor || "middle", style: `fill:var(${o.fill || "--ink-2"});font-size:${o.size || 10.5}px;font-family:var(--font-body);font-weight:${o.weight || 500}`, transform: o.rot }, txt);
  const svg = h("svg", { viewBox: "0 0 340 214", class: "hl-fig__svg", role: "img", "aria-labelledby": "hl-fig-t hl-fig-d" },
    h("svg:title", { id: "hl-fig-t" }, "Load and tissue response (schematic)"),
    h("svg:desc", { id: "hl-fig-d" }, "Tissue response rises from weakness with too little load, peaks in an adaptive range, and falls into damage with too much load."),
    h("rect", { x: 34, y: 28, width: 76, height: 138, style: "fill:var(--surface-2)" }),
    h("rect", { x: 110, y: 28, width: 120, height: 138, style: "fill:var(--accent-soft)" }),
    h("rect", { x: 230, y: 28, width: 82, height: 138, style: "fill:var(--tissue-soft)" }),
    h("line", { x1: 34, y1: 166, x2: 316, y2: 166, style: "stroke:var(--ink-3);stroke-width:1.5" }),
    h("line", { x1: 34, y1: 24, x2: 34, y2: 166, style: "stroke:var(--ink-3);stroke-width:1.5" }),
    h("path", { d: "M34 142 C 68 140 92 84 170 62 C 232 46 276 100 312 154", fill: "none", "stroke-linecap": "round", style: "stroke:var(--accent);stroke-width:3.2" }),
    h("circle", { cx: 170, cy: 62, r: 4.5, style: "fill:var(--accent)" }),
    t(72, 42, "Too little", { weight: 700 }), t(72, 55, "weak, disorganised", { size: 9.5, fill: "--ink-3" }),
    t(170, 42, "Adaptive range", { weight: 700, fill: "--accent" }), t(170, 55, "repair and remodelling", { size: 9.5, fill: "--ink-3" }),
    t(271, 42, "Too much", { weight: 700, fill: "--tissue" }), t(271, 55, "further damage", { size: 9.5, fill: "--ink-3" }),
    t(175, 190, "Mechanical load", { weight: 600 }),
    t(14, 100, "Tissue response", { weight: 600, rot: "rotate(-90 14 100)" }));
  return h("figure", { class: "hl-fig" }, svg,
    h("figcaption", { class: "small muted" }, "Schematic only. The width of the adaptive range differs by tissue, person and stage of healing."));
}

function buildHead(meta) {
  return h("header", { class: "hl-head" },
    h("p", { class: "eyebrow" }, "Foundations"),
    h("h1", { tabindex: "-1" }, "Tissue healing science"),
    h("p", { class: "lead" }, "A primer for rehabilitation decisions: what each tissue does after injury, how long its biology takes, what loading does to it and what that means for progression. Every tissue has a matching cellular animation."),
    h("p", { class: "hl-head__meta small muted" },
      h("span", { class: "mono" }, `${REFS.length} PubMed-verified references`), " · typical ranges, not rules · ",
      h("a", { href: "#hl-references" }, "Jump to references")));
}

function buildPrinciples() {
  const items = [
    ["Biology sets the clock.", "Soft-tissue repair follows overlapping phases of inflammation, proliferation and remodelling [r2]. Timeframes here are typical ranges. They move with severity, site, age and health, so progress rehabilitation on criteria, not dates."],
    ["Load is a signal.", "Cells convert mechanical load into biochemical signals (mechanotransduction), so well-dosed loading drives repair and remodelling in tendon, muscle, cartilage and bone [r1]. Too little leaves weak, disorganised tissue and too much causes further damage."],
    ["Pain, structure and healing are different things.", "Pain often settles before tissue is mature, and in tendinopathy structural change does not map neatly onto pain [r5]. Judge readiness from function and load tolerance, not from pain alone."]
  ];
  return h("section", { class: "hl-principles", "aria-labelledby": "hl-prin-h" },
    h("h2", { id: "hl-prin-h", class: "visually-hidden" }, "Three principles"),
    h("div", { class: "hl-principles__grid" },
      h("ol", { class: "hl-prin" }, items.map(([t, p]) => h("li", null, h("h3", null, t), h("p", null, fmt(p))))),
      loadResponseFigure()));
}

function buildGlance(onPick) {
  const rows = [];
  for (const g of TISSUES) for (const v of g.variants) if (v.chart) rows.push([g, v]);
  const ticks = [[1, "1 d"], [7, "1 wk"], [42, "6 wk"], [90, "3 mo", "opt"], [180, "6 mo"], [365, "1 y", "opt"], [730, "2 y"]];
  const list = h("ul", { class: "hl-glance__rows", role: "list" }, rows.map(([g, v]) => {
    const summary = v.chart.segs.map(([a, b, , name, open]) => `${name} ${a <= 1 ? "from day 0" : "from day " + a} to day ${b}${open ? " and beyond" : ""}`).join("; ");
    return h("li", null, h("button", {
      type: "button", class: "hl-row", "data-group": g.id, "data-variant": v.id,
      "aria-label": `${v.chart.label}: ${summary}. Open this tissue.`,
      on: { click: () => onPick(g, v) }
    },
    h("span", { class: "hl-row__label" }, v.chart.label),
    h("span", { class: "hl-row__track", "aria-hidden": "true" }, v.chart.segs.map(([a, b, k, name, open]) =>
      h("span", { class: `hl-seg hl-seg--${k}${open ? " is-open" : ""}`, style: { left: `${pos(a)}%`, width: `${pos(b) - pos(a)}%` }, title: `${name}: day ${a <= 1 ? 0 : a} to ${b}${open ? "+" : ""}` }, h("span", { class: "hl-seg__t" }, name))))));
  }));
  return h("section", { class: "hl-glance", id: "glance", "aria-labelledby": "hl-glance-h" },
    h("div", { class: "hl-sec-head" },
      h("h2", { id: "hl-glance-h" }, "Typical timelines at a glance"),
      h("p", { class: "hl-sec-sub" }, "Days after injury on a log scale. Select a row to open that tissue. In life the phases overlap; bars show the usual sequence.")),
    h("div", { class: "hl-glance__chart" },
      list,
      h("div", { class: "hl-axis", "aria-hidden": "true" }, ticks.map(([d, txt, cls]) => h("span", { class: cls ? `hl-axis__t hl-axis__t--${cls}` : "hl-axis__t", style: { left: `${pos(d)}%` } }, txt)))),
    h("ul", { class: "hl-legend", role: "list" }, ["i", "p", "r", "o"].map((k) => h("li", null, h("span", { class: `hl-sw hl-seg--${k}`, "aria-hidden": "true" }), KIND_LABEL[k]))),
    h("p", { class: "small muted hl-glance__note" }, "The tendinopathy continuum is not a time course, so it is not drawn here."));
}

/* ------------------------------------------------------------------ explorer (tabs + panel) */
function buildExplorer(initial, ctx) {
  const tabs = h("div", { class: "hl-tabs", role: "tablist", "aria-label": "Tissue", "aria-orientation": "horizontal" },
    TISSUES.map((g) => h("button", {
      type: "button", role: "tab", class: "hl-tab", id: `hl-tab-${g.id}`, "aria-controls": "hl-panel", "data-group": g.id,
      "aria-selected": "false", tabindex: "-1",
      on: { click: () => select(g, g.variants.find((v) => v.id === g.def) || g.variants[0], { focus: false }) }
    }, icon(g.icon, { size: 18 }), h("span", null, g.label))));
  tabs.addEventListener("keydown", (e) => {
    const list = [...tabs.querySelectorAll("[role=tab]")];
    const i = list.indexOf(document.activeElement);
    if (i < 0) return;
    let n = null;
    if (e.key === "ArrowRight") n = (i + 1) % list.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + list.length) % list.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = list.length - 1;
    if (n == null) return;
    e.preventDefault();
    list[n].focus();
    list[n].click();
  });
  const panel = h("div", { class: "hl-panel", id: "hl-panel", role: "tabpanel", tabindex: "-1" });
  const section = h("section", { class: "hl-explorer", "aria-labelledby": "hl-explorer-h" },
    h("h2", { id: "hl-explorer-h" }, "Tissue by tissue"),
    h("div", { class: "hl-tabs-wrap" }, tabs), panel);
  return { section, tabs, panel };
}

function relatedInjuries(v) {
  const keys = new Set(v.keys);
  return S.entries.filter((e) => (e.tissues || []).some((t) => keys.has(t))).slice(0, 5);
}

function renderPanel() {
  const { group: g, variant: v } = S;
  const { panel, tabs } = S.parts;
  tabs.querySelectorAll("[role=tab]").forEach((b) => {
    const on = b.dataset.group === g.id;
    b.setAttribute("aria-selected", String(on));
    b.tabIndex = on ? 0 : -1;
    if (on) panel.setAttribute("aria-labelledby", b.id);
  });

  const variantSwitch = g.variants.length > 1
    ? h("div", { class: "hl-variants cluster cluster--sm", role: "group", "aria-label": `${g.label}: condition` },
      g.variants.map((x) => h("button", { type: "button", class: "chip", "aria-pressed": String(x.id === v.id), on: { click: () => select(g, x, { focus: false }) } }, x.label)))
    : null;

  const phases = h("ol", { class: "hl-phases" }, v.phases.map((p) => h("li", { class: `hl-phase hl-phase--${p.kind}` },
    h("div", { class: "hl-phase__head" }, h("h5", { class: "hl-phase__name" }, p.name), h("span", { class: "hl-phase__when" }, p.when)),
    h("p", { class: "hl-phase__text" }, fmt(p.text)),
    p.cells ? h("p", { class: "hl-phase__cells" }, h("span", null, "Key cells: "), p.cells) : null)));

  const stageList = h("ol", { class: "hl-stages", "aria-label": "Animation stage guide" }, v.stages.map(([id, cap, time]) =>
    h("li", null, h("b", null, humanStage(id)), time ? h("span", { class: "hl-stages__t" }, time) : null, h("span", { class: "hl-stages__c" }, cap))));

  const stage = h("div", { class: "hl-stage" }, h("p", { class: "hl-stage__ph" }, "The cellular animation loads when this section scrolls into view."));
  const media = h("div", { class: "hl-media" },
    h("figure", { class: "hl-anim" }, stage,
      h("figcaption", { class: "small muted" }, "Schematic cellular view of this tissue. Stages are listed below for reading without motion.")),
    h("details", { class: "hl-guide", open: "" }, h("summary", null, "Stage guide"), stageList));

  const cites = citedIds(v);
  const related = relatedInjuries(v);

  const text = h("div", { class: "hl-text" },
    h("section", { "aria-labelledby": "hl-phases-h" }, h("h4", { id: "hl-phases-h" }, "Phases and key cells"), phases,
      v.note ? h("p", { class: "hl-note small muted" }, fmt(v.note)) : null),
    h("section", { "aria-labelledby": "hl-load-h" }, h("h4", { id: "hl-load-h" }, "What loading does"),
      h("ul", { class: "hl-list" }, v.loading.map((x) => h("li", null, fmt(x))))),
    h("section", { "aria-labelledby": "hl-rehab-h" }, h("h4", { id: "hl-rehab-h" }, "Rehab implications"),
      h("ul", { class: "hl-list" }, v.rehab.map((x) => h("li", null, fmt(x))))),
    h("div", { class: "callout callout--tissue hl-watch" }, h("p", { class: "callout__title" }, icon("flag", { size: "1.05em" }), "Watch for"), h("p", null, fmt(v.watch))),
    h("div", { class: "hl-foot small" },
      h("p", null, h("span", { class: "hl-foot__k" }, "In this library: "),
        related.length ? related.map((e, i) => [i ? ", " : "", h("a", { href: `#injury.${e.id}` }, e.shortName || e.name)]) : h("span", { class: "muted" }, "no published injuries involve this tissue yet.")),
      h("p", null, h("span", { class: "hl-foot__k" }, "Sources: "), cites.length ? cites.map((id, i) => [i ? ", " : "", h("a", { href: `#hl-ref-${id}` }, id.slice(1))]) : "see references")));

  panel.replaceChildren(
    h("div", { class: "hl-panel__head" },
      h("h3", { class: "hl-panel__title" }, v.label),
      variantSwitch),
    h("p", { class: "hl-lead" }, fmt(v.lead)),
    h("div", { class: "hl-body" }, media, text));

  mountPlayer(stage, v);
}

function mountPlayer(host, v) {
  const my = ++S.token;
  try { S.player && S.player.destroy && S.player.destroy(); } catch { /* ignore */ }
  S.player = null;
  try { S.io && S.io.disconnect(); } catch { /* ignore */ }
  S.io = null;

  const load = async () => {
    if (my !== S.token) return;
    try {
      const m = await import("../anim/index.js");
      if (my !== S.token) return;
      host.replaceChildren();
      host.classList.add("is-live");
      S.player = m.mountAnimation(host, buildSpec(v), { autoplay: false, loop: false, showTitle: true });
    } catch (e) {
      console.warn("[healing] animation unavailable", e);
      host.replaceChildren(h("p", { class: "hl-stage__ph" }, "The animation could not be loaded. The stage guide describes each step."));
    }
  };
  if (typeof IntersectionObserver === "undefined") { load(); return; }
  S.io = new IntersectionObserver((list) => { if (list.some((x) => x.isIntersecting)) { S.io.disconnect(); S.io = null; load(); } }, { rootMargin: "240px 0px" });
  S.io.observe(host);
}

function select(g, v, { focus = false, scroll = false, url = true } = {}) {
  if (!S.root) return;
  const same = S.group === g && S.variant === v;
  S.group = g; S.variant = v;
  if (!same) renderPanel();
  else S.parts.tabs.querySelectorAll("[role=tab]").forEach((b) => { b.tabIndex = b.dataset.group === g.id ? 0 : -1; });
  const tok = tokenFor(g, v);
  S.parts.section.id = tok.split(".").pop();
  if (url) { try { S.ctx.router.navigate(`#healing.${tok}`, { replace: true, silent: true }); } catch { /* ignore */ } }
  if (scroll) S.parts.section.scrollIntoView({ block: "start", behavior: reduced() ? "auto" : "smooth" });
  if (focus) S.parts.panel.focus({ preventScroll: true });
}

/* ------------------------------------------------------------------ references */
async function buildRefs() {
  let list = null;
  try {
    const m = await import("../components/references.js");
    const fn = m.referenceList || m.default;
    if (typeof fn === "function") list = fn(REFS, { idPrefix: "hl-ref-" });
  } catch { /* fallback below */ }
  if (!list) {
    list = h("ol", { class: "hl-refs__fallback" }, REFS.map((r) => h("li", { id: `hl-ref-${r.id}` }, r.citation, " ",
      r.pmid ? h("a", { href: `https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`, target: "_blank", rel: "noopener noreferrer" }, "PubMed") : null, " ",
      r.doi ? h("a", { href: `https://doi.org/${r.doi}`, target: "_blank", rel: "noopener noreferrer" }, "DOI") : null)));
  }
  return h("section", { class: "hl-refs", id: "hl-references", "aria-labelledby": "hl-refs-h" },
    h("h2", { id: "hl-refs-h" }, "References"),
    h("p", { class: "hl-refs__note small" }, "Fifteen key reviews, each retrieved from PubMed and checked against its record. Reference metadata retrieved from PubMed (NLM). Statements without a number are standard clinical reasoning or typical clinical ranges rather than findings of a single source. Timeframes are typical ranges and vary between people."),
    list);
}

/* ================================================================== render / update */
export async function render(main, params, ctx) {
  destroy();
  S.ctx = ctx;
  const { group, variant, known } = resolve(params);
  S.group = group; S.variant = variant;

  const glance = buildGlance((g, v) => select(g, v, { scroll: true }));
  const ex = buildExplorer(variant, ctx);
  S.parts = ex;
  const root = h("div", { class: "hl" }, buildHead(), buildPrinciples(), glance, ex.section);
  S.root = root;
  main.replaceChildren(root);

  // deep link: the router scrolls to an element whose id equals the last route token
  ex.section.id = known ? tokenFor(group, variant).split(".").pop() : "tissues";
  renderPanel();

  // data-dependent bits fill in without blocking the first paint
  try { S.entries = await ctx.store.index(); } catch { S.entries = []; }
  if (S.root === root && S.entries.length) renderPanel();

  const refs = await buildRefs();
  if (S.root === root) root.append(refs);
}

/** Lets the router switch tissue without re-rendering (e.g. a link to #healing.bone while already on this page). */
export function update(main, params) {
  if (!S.root || !S.root.isConnected) return false;
  const { group, variant } = resolve(params);
  select(group, variant, { scroll: true, url: false });
  return true;
}
