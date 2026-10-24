export default {
  id: "pcl-injury",
  name: "Posterior cruciate ligament (PCL) injury",
  shortName: "PCL injury",
  aka: ["PCL tear", "PCL sprain", "posterior cruciate ligament tear", "dashboard knee injury", "PCL-deficient knee", "posterior knee instability"],
  region: "knee",
  tissues: ["ligament", "cartilage", "bone"],
  onset: "acute",
  mechanismType: ["contact", "fall", "collision"],
  populations: ["young adult athletes", "motor vehicle and motorcycle trauma patients", "contact-sport athletes", "males more than females"],
  sports: ["soccer", "rugby", "australian football", "american football", "skiing", "motorcycling"],
  urgency: "urgent",
  summary: "A partial or complete tear of the PCL from a posteriorly directed force on the proximal tibia with the knee flexed, such as a dashboard impact or a fall onto a bent knee with the foot pointed.",
  keyFacts: [
    { label: "Typical recovery", value: "Isolated grade I–II: usually back to sport within 2–3 months; reconstruction 9–12 months" },
    { label: "Mechanism", value: "Dashboard impact (~35%) or fall on the flexed knee with foot plantarflexed (~24%)" },
    { label: "Key test", value: "Posterior drawer with tibial step-off (Sn 90%, Sp 99% in chronic isolated tears)" },
    { label: "Imaging", value: "MRI for acute injury; posterior stress radiographs quantify laxity (>8 mm suggests complete tear, >12 mm combined injury)" },
    { label: "Peak age", value: "Mid-20s to early 30s" },
    { label: "Incidence", value: "Up to 38% of acute knee haemarthroses in trauma centres; mostly combined injuries" }
  ],
  overview: "The posterior cruciate ligament (PCL) is the primary restraint to posterior translation of the tibia on the femur and a secondary restraint to external rotation, particularly with the posterolateral corner. Injury is usually caused by a posteriorly directed blow to the proximal tibia with the knee flexed, and it is frequently missed because the haemarthrosis is smaller than with an ACL rupture and the patient can often keep walking [r1,r2].\n\nIsolated PCL tears behave very differently from ACL tears. The ligament has a genuine capacity to heal in continuity, often with some residual elongation, and many athletes with isolated grade I–II injuries return to sport without surgery [r8,r13]. In contrast, PCL tears with posterior translation of more than about 12 mm are usually combined injuries involving the posterolateral or posteromedial corner and need surgical assessment [r3]. The physiotherapist's roles are to recognise the injury, screen for combined ligament, vascular and nerve injury, and lead a quadriceps-focused rehabilitation that protects the healing ligament from posterior tibial sag [r15,r17].",

  epidemiology: {
    text: "PCL injuries are less common than ACL injuries in sport but are much more frequent after high-energy trauma. In a regional trauma centre, PCL injury was found in 38% of acute knee haemarthroses, and 96.5% of these were combined with other ligament injuries [r2]. In a series of 494 patients with PCL insufficiency, traffic accidents (45%) and sport (40%) were the main causes, with motorcycle accidents (28%) and soccer (25%) the leading specific causes; mean age at injury was 27.5 years [r3]. Among 1287 reconstructions in Scandinavian ligament registries, 26–37% were isolated PCL injuries, two-thirds of patients were male, at least one other ligament was injured in 62.2%, and cartilage and meniscal lesions were present in 26.1% and 21.0% [r4].",
    riskFactors: {
      intrinsic: [
        "Male sex (about two-thirds of reconstructed PCL injuries) [r4]",
        "Young adult age (mean age 27–33 years at injury) [r3,r4]",
        "Previous knee ligament injury or residual laxity (expert opinion)"
      ],
      extrinsic: [
        "Motor vehicle and motorcycle accidents (dashboard mechanism) [r3]",
        "Contact and collision sports with falls onto a flexed knee, e.g. soccer, rugby, football codes [r3,r4]",
        "Hard playing surfaces and tackles that drive the tibia backward (expert opinion)"
      ]
    }
  },

  mechanism: {
    summary: "The classic mechanism is a posteriorly directed force on the anterior proximal tibia while the knee is flexed to about 90°. This happens when the tibia strikes the dashboard in a car crash, or when an athlete falls forward onto a flexed knee with the ankle plantarflexed so that the tibial tuberosity, rather than the patella, takes the impact [r3]. The tibia is driven backward in the sagittal plane and the PCL, which is tight in flexion, fails. Hyperflexion and hyperextension are less common mechanisms; hyperextension and varus-rotation mechanisms often injure the posterolateral corner as well [r1].",
    sequence: [
      "The knee is flexed to roughly 90° (seated in a car, or kneeling or falling forward onto the knee).",
      "With the ankle plantarflexed, the tibial tuberosity rather than the patella contacts the ground or dashboard first.",
      "The impact drives the proximal tibia posteriorly relative to the femur in the sagittal plane.",
      "The PCL, especially its anterolateral bundle, is taut in flexion and is the main structure resisting the posterior shear.",
      "Load exceeds the ligament's capacity, causing an interstitial (mid-substance) or femoral-sided tear, or a tibial bony avulsion.",
      "If the force continues or includes varus, rotation or hyperextension, the posterolateral or posteromedial corner fails next and the injury becomes combined.",
      "The athlete often feels pain at the back of the knee or shin bruising rather than a dramatic 'pop', and may keep playing."
    ],
    variants: [
      { name: "Dashboard injury", description: "In a vehicle crash the flexed knee strikes the dashboard. This high-energy mechanism is the most common single cause and is more likely to produce combined injuries [r3]." },
      { name: "Fall on the flexed knee, foot plantarflexed", description: "A fall or tackle onto a bent knee with the foot pointed loads the tibial tuberosity, the typical sporting mechanism [r3]." },
      { name: "Hyperflexion", description: "Forced deep flexion, e.g. landing heavily on the heels or kneeling under load, can stretch or tear the anterolateral bundle without a direct blow." },
      { name: "Hyperextension ± varus", description: "Forced hyperextension, often with varus and external rotation, injures the PCL together with the posterolateral corner and sometimes the ACL. Assess for knee dislocation." }
    ]
  },

  anatomy: {
    text: "The PCL arises from the lateral surface of the medial femoral condyle in the roof of the intercondylar notch and inserts into a depression on the posterior tibia about 1 cm below the joint line, between the posterior horns of the menisci. It is intra-articular but extrasynovial, covered by synovium posteriorly. It has two functional bundles: the larger anterolateral bundle is tight in flexion and the posteromedial bundle is tighter near extension. The anterior (Humphrey) and posterior (Wrisberg) meniscofemoral ligaments run alongside it and act as secondary restraints [r1]. Because the PCL is the dominant posterior restraint at 90° of flexion, sectioning it in cadavers increases posterior translation at that angle by about 11 mm [r5].",
    structures: [
      { name: "Posterior cruciate ligament (anterolateral and posteromedial bundles)", role: "Primary restraint to posterior tibial translation, especially at 70–90° of flexion; secondary restraint to external and internal rotation [r1]" },
      { name: "Meniscofemoral ligaments (Humphrey and Wrisberg)", role: "Secondary posterior restraints that may stay intact and limit laxity in partial tears [r1]" },
      { name: "Posterolateral corner (LCL, popliteus tendon, popliteofibular ligament)", role: "Resists varus and external rotation; with the PCL it controls posterior translation near extension" },
      { name: "Posteromedial corner and MCL", role: "Resist valgus and internal rotation; secondary posterior restraint in extension" },
      { name: "Quadriceps", role: "Pulls the tibia anteriorly at about 60–90° of flexion, the dynamic antagonist of posterior sag [r12]" },
      { name: "Hamstrings and gastrocnemius", role: "Flex the knee; their contraction at high flexion angles pulls the tibia posteriorly and increases PCL load" }
    ]
  },

  pathophysiology: {
    tissueDamage: "The PCL fails in tension when the posterior shear force on the flexed tibia exceeds the strength of its fibres. Most sporting injuries are interstitial (mid-substance) or femoral-sided partial tears; some are complete, and a minority avulse a fragment of bone from the posterior tibial insertion. Because the ligament is extrasynovial and has a richer blood supply than the ACL, a healing response bridges the gap in many cases. On follow-up MRI, 77% of PCL injuries had regained continuity, although they appeared abnormally curved and the knees remained clinically lax [r8]. The PCL therefore usually heals in an elongated position, and the final resting position of the tibia depends on how much posterior sag is allowed while the scar matures [r9].\n\nPersistent posterior laxity changes knee mechanics. In cadavers, sectioning the PCL raised medial compartment contact pressure, and combined PCL and posterolateral sectioning raised patellofemoral pressure and quadriceps load [r6]. This is a plausible mechanism for the medial and patellofemoral osteoarthritis seen in some people years after injury, although long-term studies of isolated injuries managed non-operatively report good function and moderate to severe osteoarthritis in only about 11% [r14].",
    structures: [
      { name: "PCL", effect: "Interstitial or femoral-sided partial (grade I–II) or complete (grade III) tear, or a tibial bony avulsion; tends to heal in continuity but elongated [r8]" },
      { name: "Posterolateral corner", effect: "The most important associated injury. Missed PLC injury is a common cause of failed PCL reconstruction [r1,r16]" },
      { name: "Anterior tibia", effect: "Bone bruise or skin abrasion over the tibial tuberosity from the impact, a useful clue to the mechanism" },
      { name: "Menisci and articular cartilage", effect: "Concomitant lesions in about one in five (menisci) and one in four (cartilage) reconstructed knees [r4]" },
      { name: "Medial and patellofemoral compartments", effect: "Raised contact pressures with chronic posterior laxity, a possible pathway to osteoarthritis [r6]" }
    ],
    muscles: [
      { name: "Quadriceps", effect: "Arthrogenic muscle inhibition from effusion and pain reduces activation and causes early atrophy [r7]. Restoring quadriceps strength is central because the quadriceps actively counteracts posterior sag." },
      { name: "Hamstrings and gastrocnemius", effect: "Protective co-contraction and guarding. Isolated hamstring contraction pulls the tibia backward, so early open-chain hamstring loading is avoided [r17]." },
      { name: "Popliteus", effect: "Reflex guarding; it is injured itself when the posterolateral corner is involved." }
    ],
    cellular: [
      { phase: "Haemorrhage & inflammation", timing: "0–5 days", description: "Torn vessels bleed into and around the ligament. Platelets release growth factors, and neutrophils then macrophages clear debris. The haemarthrosis is often smaller than with an ACL rupture." },
      { phase: "Proliferation", timing: "5 days – 6 weeks", description: "Fibroblasts and new capillaries fill the defect with disorganised type III collagen. The PCL can bridge the gap at this stage, but the scar lengthens if the tibia is allowed to sag posteriorly [r8,r9]." },
      { phase: "Remodelling", timing: "6 weeks – 12+ months", description: "Collagen gradually aligns along the line of load and shifts toward type I. Laxity tends to stay at the level established during healing rather than progressing [r13]." }
    ],
    systems: [
      { system: "Nervous system", effect: "Effusion and loss of ligament mechanoreceptor input reduce quadriceps voluntary activation through spinal reflex pathways (arthrogenic muscle inhibition) [r7]." },
      { system: "Musculoskeletal chain", effect: "Persistent posterior laxity increases medial tibiofemoral and patellofemoral loading and quadriceps demand, so patients often present later with anterior knee pain or difficulty on stairs and slopes [r6]." },
      { system: "Vascular", effect: "In high-energy and combined injuries, the popliteal artery is at risk because it is tethered behind the knee. Every PCL injury from a high-energy mechanism needs a vascular examination." },
      { system: "Psychological", effect: "Because symptoms are often mild, athletes may underestimate the injury. Those with combined injuries face long rehabilitation and uncertain return to sport [r16]." }
    ]
  },

  grading: {
    system: "Clinical grading of posterior laxity (posterior drawer at 90° flexion, tibial step-off)",
    grades: [
      { grade: "Grade I", description: "Posterior translation of roughly 0–5 mm. The medial tibial plateau stays in front of the femoral condyle (step-off reduced but present). Usually a partial tear.", prognosis: "Non-operative rehabilitation; good outcomes expected [r13]" },
      { grade: "Grade II", description: "Translation of roughly 5–10 mm. The tibial plateau is flush with the femoral condyle (step-off lost). Partial or complete isolated tear.", prognosis: "Usually non-operative; long-term function is independent of laxity grade in isolated injuries [r13,r14]" },
      { grade: "Grade III", description: "Translation of more than about 10 mm. The tibia falls behind the femoral condyle. On stress radiographs more than about 12 mm suggests a combined PCL and corner injury [r3].", prognosis: "Assess for combined injury. Combined grade III injuries are usually reconstructed; isolated grade III may be braced first [r15]" }
    ]
  },

  timeframes: {
    summary: "Isolated PCL injuries heal in continuity, so recovery is mainly about protecting the ligament from posterior sag while it heals and restoring quadriceps strength. Grade III and combined injuries take much longer, and reconstruction adds a 9–12 month program.",
    healing: [
      { phase: "Haemorrhage & inflammation", startDay: 0, endDay: 5, description: "Bleeding, effusion and inflammatory cell infiltrate; quadriceps inhibition greatest" },
      { phase: "Proliferation", startDay: 5, endDay: 42, description: "Fibroblast scar bridges the ligament; protect from posterior tibial sag" },
      { phase: "Remodelling", startDay: 42, endDay: 365, description: "Collagen realigns and matures; laxity stabilises at the healed length" }
    ],
    milestones: [
      { label: "Full weight-bearing (isolated grade I–II)", day: 14, note: "Grade III often braced with protected weight-bearing for longer" },
      { label: "Quiet knee, full range", day: 42 },
      { label: "Start running", day: 56, note: "When quadriceps strength and effusion criteria are met" },
      { label: "Return to sport (isolated grade I–II, typical)", day: 84 },
      { label: "Return to sport after reconstruction (earliest)", day: 270 }
    ],
    returnToSport: "Isolated grade I–II injuries typically return within about 4–12 weeks once criteria are met; in a natural history cohort half of athletes returned to the same sport at the same or higher level regardless of laxity [r13]. Reconstruction for combined or symptomatic grade III injuries usually requires 9–12 months. These are typical clinical ranges; progression is criteria-based."
  },

  clinicalPresentation: {
    symptoms: [
      "Pain at the back of the knee (posterior knee or calf) after a blow to the front of the shin",
      "Mild to moderate swelling that develops over hours; often less dramatic than an ACL injury",
      "Vague instability or a feeling that the knee 'shifts' going downhill, down stairs or when decelerating",
      "Pain kneeling or on deep flexion",
      "Later: anterior knee pain or medial knee pain with activity (chronic posterior laxity)"
    ],
    signs: [
      "Abrasion or bruising over the tibial tuberosity (dashboard or fall mechanism)",
      "Posterior sag of the proximal tibia at 90° hip and knee flexion",
      "Reduced or absent tibial step-off on the posterior drawer test",
      "Small to moderate effusion and loss of terminal flexion",
      "Quadriceps lag and atrophy"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism: dashboard impact, fall onto a bent knee with the foot pointed, hyperflexion, or hyperextension with varus (think combined injury)",
      "Energy of the injury: vehicle or motorcycle crash, or high-speed collision, raises suspicion of a multiligament injury or dislocation",
      "Posterior knee pain, swelling timeline and ability to continue",
      "Instability descending stairs or slopes, or with deceleration; pain with kneeling",
      "Numbness, tingling, foot drop or a cold foot (neurovascular injury)",
      "Sport, level, position and goals; previous knee injuries"
    ],
    observation: ["Gravity sag sign: posterior sag of the tibia with hips and knees at 90° in supine", "Abrasion over the tibial tuberosity", "Effusion and quadriceps atrophy", "Gait: may be near normal in isolated injuries; varus thrust suggests a posterolateral corner injury"],
    palpation: ["Tibial step-off: normally the medial tibial plateau sits about 1 cm anterior to the medial femoral condyle at 90° flexion", "Popliteal fossa tenderness or swelling", "Posterolateral corner and fibular head tenderness", "Distal pulses (dorsalis pedis, posterior tibial) and capillary refill"],
    rangeOfMotion: ["Flexion is often limited and painful at end range early", "Extension usually preserved; increased hyperextension compared with the other side suggests a posterolateral corner or combined injury"],
    strength: ["Quadriceps activation and lag (straight-leg raise)", "Quadriceps limb symmetry once the knee is calm", "Hamstring strength testing later, once the ligament has healed"],
    neuro: ["Common peroneal nerve screen: ankle dorsiflexion and great-toe extension strength, sensation on the dorsum of the foot (especially if the posterolateral corner is involved)"],
    functional: ["Squat depth and control", "Step-down and decline walking", "Hop test battery when criteria are met"],
    specialTests: [
      { name: "Posterior drawer test (with tibial step-off)", purpose: "Posterior tibial translation at 90° flexion", procedure: "Patient supine, hip at 45° and knee at 90°, foot stabilised in neutral rotation. Palpate the step-off of the medial tibial plateau, then push the proximal tibia posteriorly.", positive: "Increased posterior translation with a reduced or absent step-off compared with the other side. Grade by the position of the plateau relative to the femoral condyle.", sensitivity: "90% (overall examination led by posterior drawer, chronic isolated tears)", specificity: "99%", refs: ["r10"] },
      { name: "Posterior sag (gravity) sign", purpose: "Posterior tibial subluxation at rest", procedure: "Patient supine with hips and knees flexed to 90° and the heels supported. Look from the side at the profile of the tibial tuberosities.", positive: "The proximal tibia sags posteriorly compared with the other side.", refs: [] },
      { name: "Quadriceps active test", purpose: "Detect posterior subluxation that reduces with quadriceps contraction", procedure: "Patient supine with the knee at 90°, foot held on the couch. Ask the patient to slide the foot gently forward against your hand, contracting the quadriceps.", positive: "The tibia moves anteriorly from its sagged position as the quadriceps contracts.", sensitivity: "98% (anterior translation in 41 of 42 PCL-deficient knees)", specificity: "100% (no translation in normal or ACL-deficient knees in this sample)", refs: ["r12"] },
      { name: "Dial test (tibial external rotation) at 30° and 90°", purpose: "Screen for an associated posterolateral corner injury", procedure: "Patient prone. Externally rotate both feet at 30° and then 90° of knee flexion and compare the thigh–foot angles.", positive: "More than 10° extra external rotation at 30° only suggests an isolated posterolateral corner injury; at both 30° and 90° suggests combined PCL and posterolateral corner injury.", refs: [] }
    ],
    clinicalRules: [{ name: "Ottawa knee rules", description: "Use to decide on radiographs after acute knee trauma, e.g. a PCL tibial bony avulsion. Pooled sensitivity 0.99 and specificity 0.49 for fracture in adults [r20]." }],
    outcomeMeasures: [
      { name: "IKDC Subjective Knee Form", use: "Knee function; used in long-term PCL natural history studies [r14]" },
      { name: "Lysholm score and Tegner activity scale", use: "Symptoms, function and activity level [r13]" },
      { name: "KOOS", use: "Pain, symptoms, function and quality of life" },
      { name: "Posterior stress radiography", use: "Objective, repeatable side-to-side measure of posterior laxity to grade and monitor healing [r5]" }
    ],
    imaging: [
      { modality: "Plain radiograph", indication: "Ottawa rules positive or a bony avulsion suspected", findings: "Tibial avulsion fragment from the PCL insertion (often fixed surgically); posterior subluxation of the tibia on a true lateral view" },
      { modality: "MRI", indication: "Confirm the diagnosis and identify associated ligament, meniscal and cartilage injury", findings: "Thickened, discontinuous or high-signal PCL acutely; corner, meniscal and bone bruise injuries. In chronic cases MRI may show a continuous but lax ligament, so do not use it alone to judge function [r8]" },
      { modality: "Posterior stress radiographs (kneeling or Telos)", indication: "Quantify laxity and distinguish isolated from combined injury", findings: "Side-to-side posterior translation >8 mm is consistent with complete PCL insufficiency; >12 mm suggests combined PCL and corner injury [r3,r5]" }
    ]
  },

  differentials: [
    { name: "Posterolateral corner injury", id: "posterolateral-corner-injury", distinguishing: "Varus laxity at 30°, positive dial test at 30°, posterolateral tenderness and possible peroneal nerve symptoms. Frequently coexists with a PCL tear." },
    { name: "Knee dislocation (multiligament injury)", id: "knee-dislocation", distinguishing: "High energy, gross laxity in more than one plane, and a risk of popliteal artery and peroneal nerve injury. The knee may have spontaneously reduced." },
    { name: "ACL rupture", id: "acl-rupture", distinguishing: "Non-contact pivot mechanism, rapid large haemarthrosis and a positive Lachman. A sagged PCL-deficient tibia can give a false-positive anterior drawer, so always check the starting step-off." },
    { name: "Tibial plateau fracture", id: "tibial-plateau-fracture", distinguishing: "Older or higher-energy patient who cannot bear weight, with bony tenderness and positive Ottawa rules." },
    { name: "Meniscal tear", id: "meniscal-tear", distinguishing: "Twisting mechanism, joint-line tenderness, locking or catching, and a normal step-off." },
    { name: "Patellar tendon rupture", id: "patellar-tendon-rupture", distinguishing: "Fall onto a flexed knee with eccentric quadriceps load, a high-riding patella, a palpable gap and inability to straight-leg raise." }
  ],
  redFlags: [
    "Absent or weaker distal pulses, a cool pale foot, an expanding popliteal swelling or an ankle–brachial index below 0.9 after a high-energy injury: suspect knee dislocation with popliteal artery injury. Send to emergency immediately.",
    "Gross laxity in more than one plane (e.g. posterior plus varus or valgus) or a history of the knee 'coming out': treat as a knee dislocation even if it has reduced. Refer the same day.",
    "Foot drop or numbness over the dorsum of the foot: suspect common peroneal nerve injury with a posterolateral corner injury. Arrange urgent orthopaedic review.",
    "Severe pain out of proportion, a tense calf and pain on passive toe stretch after high-energy trauma: suspect compartment syndrome. Refer to emergency.",
    "Positive Ottawa knee rules or inability to weight-bear: arrange radiographs to exclude a bony avulsion or plateau fracture."
  ],

  management: {
    principles: "Management depends on whether the injury is isolated or combined and on the grade of laxity. Isolated grade I–II injuries, and grade III injuries in people with low demands or mild symptoms, are managed non-operatively [r15]. Long-term follow-up of non-operatively treated isolated injuries shows good strength, full range and good subjective scores, and outcomes do not depend on laxity grade [r13,r14]. Combined injuries (especially with the posterolateral corner), bony avulsions, and symptomatic grade III injuries that fail rehabilitation are considered for surgery [r15,r16]. There is no high-quality evidence for any specific immobilisation, weight-bearing, bracing or rehabilitation protocol, so programs rely on biomechanical principles: protect against posterior tibial sag while the ligament heals, avoid early isolated hamstring loading, and build quadriceps strength [r15,r17].",
    medical: [
      { name: "PCL reconstruction (single- or double-bundle; transtibial or inlay)", description: "Considered for combined injuries, high-demand athletes with symptomatic grade III laxity, and failed non-operative care. No technique has been shown to be clearly superior, and reconstruction does not reliably restore normal laxity or prevent osteoarthritis [r15,r16].", evidence: "limited", recommendation: "consider", refs: ["r15", "r16"] },
      { name: "Fixation of a tibial bony avulsion", description: "A displaced bony avulsion of the PCL insertion is usually reduced and fixed early by the surgeon, as the bone fragment heals reliably.", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Dynamic anterior-drawer (PCL) brace", description: "A brace that applies an anterior force to the proximal tibia for about 4 months to reduce sag while the ligament heals. A preliminary cohort showed reduced posterior sag at 1–2 years [r9], but protocols vary widely and no comparative trials exist [r18].", evidence: "very-limited", recommendation: "consider", refs: ["r9", "r18"] },
      { name: "Analgesia and short-term NSAIDs", description: "Simple analgesia and short NSAID courses for pain and effusion; reducing effusion may also reduce quadriceps inhibition [r7].", evidence: "limited", recommendation: "consider", refs: ["r7"] }
    ],
    physio: [
      { name: "Quadriceps-focused progressive exercise therapy", description: "Quadriceps strengthening is the core of non-operative and post-operative care because the quadriceps actively reduces posterior tibial translation [r12,r17]. Progress from isometrics and straight-leg raises to closed-chain work and, later, heavy strength and power training.", evidence: "limited", recommendation: "recommended", refs: ["r12", "r17"] },
      { name: "Protecting against posterior sag in early healing", description: "Prone passive flexion, a pillow or brace supporting the proximal tibia, and avoiding prolonged gravity-dependent knee flexion during the first 6 weeks, particularly in grade III injuries [r17].", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Closed-chain exercise in limited flexion early", description: "Squats and leg press produce posterior shear restrained by the PCL that increases with knee flexion, so keep early closed-chain work to about 0–60° and progress depth as the ligament heals [r19].", evidence: "limited", recommendation: "recommended", refs: ["r19"] },
      { name: "Early isolated open-chain hamstring curls", description: "Hamstring contraction pulls the tibia posteriorly and loads the healing PCL. Avoid resisted open-chain hamstring exercise for roughly the first 12 weeks of a significant tear or after reconstruction [r17].", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] },
      { name: "NMES and effusion control for quadriceps inhibition", description: "Neuromuscular electrical stimulation, cryotherapy and compression alongside exercise to reduce arthrogenic muscle inhibition early [r7].", evidence: "limited", recommendation: "consider", refs: ["r7"] },
      { name: "Education and graded return to sport", description: "Explain the healing potential of the PCL, the role of the quadriceps and why posterior sag is avoided. Use objective criteria to guide return to sport [r17].", evidence: "expert-opinion", recommendation: "recommended", refs: [] }
    ],
    education: [
      "The PCL can heal on its own, often a little longer than before, and most people with an isolated tear return to sport without surgery.",
      "Strong quadriceps are your 'dynamic PCL'. They hold the shin forward and protect the ligament.",
      "For the first few weeks, avoid letting the shin sag backward (no sitting with the knee bent and unsupported for long periods, no hamstring curls).",
      "If the injury involves other ligaments, or if the knee keeps feeling unstable after good rehab, surgery may be discussed.",
      "Long-term outcomes are generally good, but report any new numbness, coldness or calf swelling immediately."
    ]
  },

  rehab: {
    overview: "Rehabilitation is criteria-based and quadriceps-dominant. The first priority is protecting the healing PCL from posterior tibial sag (prone positioning, support behind the proximal tibia, no isolated hamstring loading) while restoring a quiet knee and quadriceps activation [r17]. Isolated grade I–II injuries move quickly through stages 1–2; grade III and post-reconstruction patients stay in each stage longer and follow the surgeon's brace and weight-bearing protocol. Monitor laxity clinically (step-off) as loading increases.",
    stages: [
      {
        name: "Protect & activate",
        timeframe: "Weeks 0–2 (grade III and post-op: 0–6)",
        goals: ["Control pain and effusion", "Quadriceps activation without lag", "Restore range of motion within protected limits", "Weight-bearing as tolerated (grade I–II) or per brace protocol (grade III / post-op)"],
        precautions: ["Support the proximal tibia when lying or resting with the knee bent", "Passive flexion in prone only for grade III and post-op knees", "No resisted hamstring exercise", "Screen pulses and peroneal nerve function in high-energy injuries"],
        exercises: [
          { name: "Quadriceps sets with towel under the knee", dosage: "10 × 10 s holds, 3–4 times daily", cues: "Tighten the thigh and push the knee gently down", figure: { pose: "ex-quad-set", view: "lateral", props: ["mat"] } },
          { name: "Straight-leg raise", dosage: "3 × 10 once there is no lag", cues: "Lock the knee straight, then lift to the height of the other knee", figure: { pose: "ex-straight-leg-raise", view: "lateral", props: ["mat"] } },
          { name: "Prone passive knee flexion", dosage: "2 × 10, twice daily, within the allowed range", cues: "Let the shin be lifted by your hand or a strap; gravity pulls the tibia forward in prone", figure: { pose: "lie-prone", view: "lateral", props: ["mat"] } },
          { name: "NMES-assisted quadriceps contraction", dosage: "10–15 contractions daily", cues: "Contract with the stimulation" },
          { name: "Double-leg calf raise", dosage: "3 × 15", figure: { pose: "ex-calf-raise", view: "lateral" } }
        ],
        progressionCriteria: ["Straight-leg raise without lag", "Effusion trace or less on the stroke test", "Normal gait (with brace if prescribed)", "Pain ≤ 3/10 with daily activities"]
      },
      {
        name: "Quadriceps strength & control",
        timeframe: "Weeks 2–8 (grade III / post-op: 6–12)",
        goals: ["Full range of motion", "Progressive quadriceps strength", "Single-leg balance and control", "Normal stairs"],
        precautions: ["Closed-chain exercise from about 0–60° flexion, progressing depth gradually [r19]", "Open-chain knee extension in the 60–0° range only (more flexed positions add posterior shear)", "Still no resisted hamstring curls"],
        exercises: [
          { name: "Wall sit / mini squat (0–60°)", dosage: "3–4 × 30–45 s or 3 × 12, daily to alternate days", cues: "Keep the shins near vertical; stay above 60° of knee bend", figure: { pose: "ex-wall-sit", view: "lateral", props: ["wall"] } },
          { name: "Leg press (0–60°)", dosage: "3 × 10–12, progress load", cues: "Slow lowering, push through the whole foot" },
          { name: "Seated knee extension (60–0°)", dosage: "3 × 10–15, slow tempo", cues: "Start from about 60° bend and straighten fully", figure: { pose: "ex-knee-extension", view: "lateral", props: ["chair"] } },
          { name: "Step-ups", dosage: "3 × 10 each side", cues: "Drive through the heel; knee over the second toe", figure: { pose: "ex-step-up", view: "lateral", props: ["box"] } },
          { name: "Single-leg balance with perturbations", dosage: "3 × 30–45 s", figure: { pose: "ex-single-leg-balance", view: "anterior" } }
        ],
        progressionCriteria: ["Full, pain-free range of motion", "Quadriceps LSI ≥ 70–80%", "No effusion after sessions", "Unchanged posterior step-off on examination"]
      },
      {
        name: "Strength, running & landing",
        timeframe: "Weeks 8–12 (grade III / post-op: months 3–6)",
        goals: ["Return to running", "Heavy quadriceps and hip strength", "Introduce hamstring strengthening", "Landing control"],
        precautions: ["Introduce hamstring loading progressively (bridges before curls)", "Progress running volume gradually"],
        exercises: [
          { name: "Squat with load, progressing depth", dosage: "4 × 6–8", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Split squat", dosage: "3–4 × 8 each side", figure: { pose: "ex-split-squat", view: "lateral", props: ["dumbbell"] } },
          { name: "Bridge progressing to single-leg bridge", dosage: "3 × 10–12", cues: "Introduces hamstrings in a closed-chain position", figure: { pose: "ex-single-leg-bridge", view: "lateral", props: ["mat"] } },
          { name: "Jump squat and drop landing drills", dosage: "3–4 × 5, full recovery", cues: "Land softly with hips and knees bent", figure: { pose: "ex-jump-squat", view: "lateral" } },
          { name: "Walk–run progression", dosage: "Every second day, building to 20–30 min continuous" }
        ],
        progressionCriteria: ["Quadriceps LSI ≥ 85–90%", "Pain-free running for 20–30 min", "Good landing mechanics", "No increase in posterior laxity"]
      },
      {
        name: "Return to sport",
        timeframe: "From ~week 12 (post-op: 9–12 months)",
        goals: ["Sport-specific speed, agility and contact", "Full training load", "Psychological readiness"],
        precautions: ["Graded return to contact and kneeling drills", "Monitor for anterior or medial knee pain as load rises"],
        exercises: [
          { name: "Single-leg hop progressions", dosage: "3 × 5 each direction", cues: "Stick the landing for 2 s", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Change-of-direction and deceleration drills", dosage: "2–3 sessions/week, progressing speed", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Nordic hamstring lowering", dosage: "2–3 × 5, twice weekly (late stage only)", figure: { pose: "ex-nordic", view: "lateral", props: ["mat"] } },
          { name: "Heavy strength maintenance", dosage: "2×/week, 3–5 × 3–6" }
        ],
        progressionCriteria: ["Quadriceps and hamstring LSI ≥ 90%", "Hop battery LSI ≥ 90%", "Full team training without symptoms", "Athlete reports confidence in the knee"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No effusion and full, pain-free range of motion",
      "Quadriceps strength limb symmetry ≥ 90%",
      "Hop test battery ≥ 90% symmetry with good landing quality",
      "Stable or improved posterior laxity on clinical or stress radiograph assessment [r5]",
      "Completion of full training, including contact and kneeling tasks",
      "Psychological readiness and a shared decision with the athlete, coach and surgeon"
    ],
    tests: ["Isokinetic or hand-held dynamometry quadriceps/hamstring LSI", "Single, triple, crossover and 6 m timed hop tests", "Posterior stress radiographs where available", "IKDC Subjective Knee Form"]
  },
  prognosis: "Isolated PCL injuries managed non-operatively have a favourable natural history. In a prospective cohort of 133 athletic patients, laxity did not change over time, subjective scores were independent of laxity grade, and half returned to the same sport at the same or higher level, one-third at a lower level and one-sixth did not return [r13]. At a mean of 14 years, quadriceps strength averaged 97% of the uninjured side, all had full range of motion, and 11% had moderate to severe osteoarthritis, again independent of laxity grade [r14]. Combined injuries do worse, and reconstruction reduces but rarely eliminates posterior laxity [r16]. Chronic posterior laxity may contribute to medial and patellofemoral degeneration in some patients [r6].",
  prevention: [
    "Wearing seat belts and correct seating position reduces dashboard impact (general road-safety advice; no PCL-specific trials).",
    "Technique coaching for falling and tackling in contact sports, and adequate knee protection for goalkeepers and on hard surfaces (expert opinion)."
  ],
  clinicalPearls: [
    "Check the step-off before any drawer test. A sagged PCL-deficient tibia gives a 'positive anterior drawer' that is really the tibia returning to neutral.",
    "An abrasion over the tibial tuberosity plus posterior knee pain after a fall onto a bent knee is a PCL injury until proven otherwise.",
    "Grade III laxity (tibia behind the condyles) is a combined injury until proven otherwise. Do a dial test and varus stress at 30° and check pulses.",
    "Prone positioning lets gravity pull the tibia forward; supine flexion lets it sag backward. Choose positions accordingly in early rehab.",
    "The quadriceps is the PCL's agonist. Quadriceps strength is the main modifiable determinant of function.",
    "Late anterior or medial knee pain years after a 'minor' knee knock may be chronic PCL laxity; test the step-off."
  ],
  related: ["posterolateral-corner-injury", "knee-dislocation", "acl-rupture", "mcl-sprain", "meniscal-tear", "articular-cartilage-defect-knee"],

  references: [
    { id: "r1", citation: "Winkler PW, Zsidai B, Wagala NN, et al. Evolving evidence in the treatment of primary and recurrent posterior cruciate ligament injuries, part 1: anatomy, biomechanics and diagnostics. Knee Surg Sports Traumatol Arthrosc. 2021;29(3):672-81.", pmid: "33201271", doi: "10.1007/s00167-020-06357-y", type: "narrative-review", year: 2021 },
    { id: "r2", citation: "Fanelli GC, Edson CJ. Posterior cruciate ligament injuries in trauma patients: Part II. Arthroscopy. 1995;11(5):526-9.", pmid: "8534292", doi: "10.1016/0749-8063(95)90127-2", type: "cohort", year: 1995 },
    { id: "r3", citation: "Schulz MS, Russe K, Weiler A, et al. Epidemiology of posterior cruciate ligament injuries. Arch Orthop Trauma Surg. 2003;123(4):186-91.", pmid: "12734718", doi: "10.1007/s00402-002-0471-y", type: "cross-sectional", year: 2003 },
    { id: "r4", citation: "Owesen C, Sandven-Thrane S, Lind M, et al. Epidemiology of surgically treated posterior cruciate ligament injuries in Scandinavia. Knee Surg Sports Traumatol Arthrosc. 2017;25(8):2384-91.", pmid: "26387121", doi: "10.1007/s00167-015-3786-2", type: "cross-sectional", year: 2017 },
    { id: "r5", citation: "Kowalczuk M, Leblanc MC, Rothrauff BB, et al. Posterior tibial translation resulting from the posterior drawer manoeuver in cadaveric knee specimens: a systematic review. Knee Surg Sports Traumatol Arthrosc. 2015;23(10):2974-82.", pmid: "25837228", doi: "10.1007/s00167-015-3584-x", type: "systematic-review", year: 2015 },
    { id: "r6", citation: "Skyhar MJ, Warren RF, Ortiz GJ, et al. The effects of sectioning of the posterior cruciate ligament and the posterolateral complex on the articular contact pressures within the knee. J Bone Joint Surg Am. 1993;75(5):694-9.", pmid: "8501084", doi: "10.2106/00004623-199305000-00008", type: "biomechanical", year: 1993 },
    { id: "r7", citation: "Rice DA, McNair PJ. Quadriceps arthrogenic muscle inhibition: neural mechanisms and treatment perspectives. Semin Arthritis Rheum. 2010;40(3):250-66.", pmid: "19954822", doi: "10.1016/j.semarthrit.2009.10.001", type: "narrative-review", year: 2010 },
    { id: "r8", citation: "Tewes DP, Fritts HM, Fields RD, et al. Chronically injured posterior cruciate ligament: magnetic resonance imaging. Clin Orthop Relat Res. 1997;(335):224-32.", pmid: "9020222", type: "cohort", year: 1997 },
    { id: "r9", citation: "Jacobi M, Reischl N, Wahl P, et al. Acute isolated injury of the posterior cruciate ligament treated by a dynamic anterior drawer brace: a preliminary report. J Bone Joint Surg Br. 2010;92(10):1381-4.", pmid: "20884975", doi: "10.1302/0301-620X.92B10.24807", type: "cohort", year: 2010 },
    { id: "r10", citation: "Rubinstein RA, Shelbourne KD, McCarroll JR, et al. The accuracy of the clinical examination in the setting of posterior cruciate ligament injuries. Am J Sports Med. 1994;22(4):550-7.", pmid: "7943523", doi: "10.1177/036354659402200419", type: "diagnostic-accuracy", year: 1994 },
    { id: "r11", citation: "Kopkow C, Freiberg A, Kirschner S, et al. Physical examination tests for the diagnosis of posterior cruciate ligament rupture: a systematic review. J Orthop Sports Phys Ther. 2013;43(11):804-13.", pmid: "24175598", doi: "10.2519/jospt.2013.4906", type: "systematic-review", year: 2013 },
    { id: "r12", citation: "Daniel DM, Stone ML, Barnett P, et al. Use of the quadriceps active test to diagnose posterior cruciate-ligament disruption and measure posterior laxity of the knee. J Bone Joint Surg Am. 1988;70(3):386-91.", pmid: "3346263", type: "diagnostic-accuracy", year: 1988 },
    { id: "r13", citation: "Shelbourne KD, Davis TJ, Patel DV. The natural history of acute, isolated, nonoperatively treated posterior cruciate ligament injuries. A prospective study. Am J Sports Med. 1999;27(3):276-83.", pmid: "10352760", doi: "10.1177/03635465990270030201", type: "cohort", year: 1999 },
    { id: "r14", citation: "Shelbourne KD, Clark M, Gray T. Minimum 10-year follow-up of patients after an acute, isolated posterior cruciate ligament injury treated nonoperatively. Am J Sports Med. 2013;41(7):1526-33.", pmid: "23652263", doi: "10.1177/0363546513486771", type: "cohort", year: 2013 },
    { id: "r15", citation: "Bedi A, Musahl V, Cowan JB. Management of posterior cruciate ligament injuries: an evidence-based review. J Am Acad Orthop Surg. 2016;24(5):277-89.", pmid: "27097125", doi: "10.5435/JAAOS-D-14-00326", type: "narrative-review", year: 2016 },
    { id: "r16", citation: "Winkler PW, Zsidai B, Wagala NN, et al. Evolving evidence in the treatment of primary and recurrent posterior cruciate ligament injuries, part 2: surgical techniques, outcomes and rehabilitation. Knee Surg Sports Traumatol Arthrosc. 2021;29(3):682-93.", pmid: "33125531", doi: "10.1007/s00167-020-06337-2", type: "narrative-review", year: 2021 },
    { id: "r17", citation: "Pierce CM, O'Brien L, Griffin LW, et al. Posterior cruciate ligament tears: functional and postoperative rehabilitation. Knee Surg Sports Traumatol Arthrosc. 2013;21(5):1071-84.", pmid: "22484415", doi: "10.1007/s00167-012-1970-1", type: "narrative-review", year: 2013 },
    { id: "r18", citation: "Sura WJ, Gill BS, Walker A. Exploring and comparing bracing protocols for acute isolated posterior cruciate ligament injuries: a scoping review of rationales and approaches. Musculoskelet Sci Pract. 2025;80:103412.", pmid: "40945097", doi: "10.1016/j.msksp.2025.103412", type: "systematic-review", year: 2025 },
    { id: "r19", citation: "Escamilla RF. Knee biomechanics of the dynamic squat exercise. Med Sci Sports Exerc. 2001;33(1):127-41.", pmid: "11194098", doi: "10.1097/00005768-200101000-00020", type: "narrative-review", year: 2001 },
    { id: "r20", citation: "Sims JI, Chau MT, Davies JR. Diagnostic accuracy of the Ottawa Knee Rule in adult acute knee injuries: a systematic review and meta-analysis. Eur Radiol. 2020;30(8):4438-46.", pmid: "32222797", doi: "10.1007/s00330-020-06804-x", type: "meta-analysis", year: 2020 }
  ],

  animation: {
    title: "How a PCL injury happens",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "lateral", environment: "pitch",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "run-midstance", root: { x: -110 } },
          { t: 1.2, pose: "trip", root: { x: -40 } },
          { t: 2.3, pose: "kneel", joints: { kneeR: 95, ankleR: -40, hipR: 10, trunk: 25 }, root: { x: 0 }, ease: "in" },
          { t: 3.2, pose: "kneel", joints: { kneeR: 100, ankleR: -45, hipR: 5, trunk: 15 }, root: { x: 2 } },
          { t: 4.6, pose: "kneel", joints: { kneeR: 110, ankleR: -45, trunk: 5 }, root: { x: 4 } },
          { t: 5.8, pose: "kneel", joints: { kneeR: 115, trunk: 0 }, root: { x: 4 } }
        ],
        props: [{ id: "ball", type: "ball-soccer", keyframes: [{ t: 0, x: -60, y: 10 }, { t: 1.2, x: 20, y: 0 }, { t: 3, x: 90, y: 0 }] }],
        forces: [
          { t: [2.1, 3.8], at: "shinR", dir: "backward", label: "Posterior force on proximal tibia" },
          { t: [2.1, 3.4], at: "kneeR", dir: "up", label: "Ground strikes tibial tuberosity" }
        ],
        highlights: [{ t: [2.3, 6], at: "kneeR" }],
        impacts: [{ t: 2.4, at: "kneeR" }],
        slowmo: [{ t: [1.9, 3.1], rate: 0.3 }],
        captions: [
          { t: 0, text: "A soccer player is tripped while running." },
          { t: 1.2, text: "They fall forward onto the right knee, bent to about 90°, with the foot pointed." },
          { t: 2.2, text: "With the ankle plantarflexed, the tibial tuberosity, not the patella, hits the ground first." },
          { t: 3.2, text: "The impact drives the tibia backward under the femur, loading the PCL." },
          { t: 4.4, text: "There is often no loud 'pop': just posterior knee pain and a bruise on the shin." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "kneeR",
        captions: [{ t: 0, text: "Zooming into the right knee, viewed from the side in a sagittal section." }]
      },
      {
        type: "closeup", label: "Inside the knee", duration: 10, scene: "knee-sagittal",
        actions: [
          { t: 0, do: "highlight", target: "pcl" },
          { t: 0.3, do: "label", target: "pcl", text: "PCL: stops the tibia sliding backward" },
          { t: 1.0, do: "arrow", at: "tibialTuberosity", dir: "posterior", label: "Posterior tibial force", size: "l" },
          { t: 1.0, do: "impact", at: "tibialTuberosity" },
          { t: 1.2, do: "stretch", target: "pcl", amount: 0.35, dur: 1.4 },
          { t: 1.4, do: "move", target: "tibia", dir: "posterior", amount: 0.15, dur: 1.2 },
          { t: 2.8, do: "tear", target: "pcl", grade: 2, at: 0.45 },
          { t: 2.8, do: "impact", at: "jointCentre" },
          { t: 3.4, do: "label", target: "pcl", text: "Mid-substance tear (grade II)" },
          { t: 4.0, do: "bruise", target: "tibia", at: "tibialTuberosity" },
          { t: 4.2, do: "label", target: "tibia", text: "Bruising over the tibial tuberosity" },
          { t: 5.2, do: "effuse", target: "jointSpace", amount: 0.5 },
          { t: 5.4, do: "label", target: "jointSpace", text: "Modest haemarthrosis" },
          { t: 6.4, do: "atrophy", target: "quadriceps", amount: 0.3 },
          { t: 6.6, do: "label", target: "quadriceps", text: "Quadriceps inhibition" },
          { t: 7.8, do: "camera", at: "tibialPlateauPosterior", zoom: 1.6, dur: 1 },
          { t: 9.2, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "The PCL runs from the medial femoral condyle, in the notch, to the back of the tibia." },
          { t: 1.0, text: "The blow to the front of the tibia pushes it backward while the knee is bent." },
          { t: 2.6, text: "The PCL fails in mid-substance; most sporting PCL injuries are partial tears." },
          { t: 4.0, text: "The impact also bruises the bone and skin over the tibial tuberosity." },
          { t: 5.2, text: "Bleeding into the joint is usually smaller than with an ACL rupture." },
          { t: 6.4, text: "Effusion and pain switch off the quadriceps, the PCL's main dynamic protector." },
          { t: 7.8, text: "The tibia now sags backward: the step-off at the front of the knee is lost." }
        ]
      },
      {
        type: "micro", label: "Healing", duration: 10, tissue: "ligament",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.0, stage: "loaded" }, { t: 2.0, stage: "overload" }, { t: 3.0, stage: "failure" },
          { t: 4.0, stage: "haemorrhage" }, { t: 5.2, stage: "inflammation" }, { t: 6.7, stage: "proliferation" }, { t: 8.3, stage: "remodelling" }
        ],
        timeLabels: [{ t: 5.2, text: "0–5 days" }, { t: 6.7, text: "5 days – 6 weeks" }, { t: 8.3, text: "6 weeks – 12+ months" }],
        captions: [
          { t: 0, text: "Healthy ligament: crimped type I collagen fibres aligned along the line of load." },
          { t: 1.0, text: "In flexion the PCL fibres straighten and take up the posterior shear." },
          { t: 2.0, text: "Beyond the elastic range, fibrils slide and begin to fail." },
          { t: 3.0, text: "Groups of fibres rupture: a partial, mid-substance tear." },
          { t: 4.0, text: "Torn vessels bleed into the ligament, forming a clot." },
          { t: 5.2, text: "Neutrophils, then macrophages, clear debris over the first days." },
          { t: 6.7, text: "Unlike the ACL, the PCL can bridge the gap with scar, often a little longer than before." },
          { t: 8.3, text: "The scar remodels along the line of load; strong quadriceps limit posterior sag meanwhile." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL4" }
};
