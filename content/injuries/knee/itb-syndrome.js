export default {
  id: "itb-syndrome",
  name: "Iliotibial band syndrome",
  shortName: "ITB syndrome",
  aka: ["ITBS", "iliotibial band friction syndrome", "ITB friction syndrome", "runner's knee (lateral)", "lateral knee pain in runners", "ITB pain", "iliotibial tract syndrome"],
  region: "knee",
  tissues: ["fascia", "fat-pad"],
  onset: "gradual",
  mechanismType: ["overuse", "compression"],
  populations: ["recreational and distance runners", "female runners", "cyclists", "endurance athletes"],
  sports: ["running", "cycling", "triathlon", "hiking", "football codes"],
  urgency: "routine",
  summary: "Lateral knee pain from repetitive loading of the iliotibial band over the lateral femoral epicondyle, typically in runners. It is thought to reflect compression of the tissue under the band rather than simple friction.",
  keyFacts: [
    { label: "Incidence", value: "Roughly 5–14% of running injuries; the most common lateral knee injury in runners" },
    { label: "Typical recovery", value: "Improvement over about 2–8 weeks of treatment in published studies; longer if long-standing" },
    { label: "Key test", value: "Pain at the lateral epicondyle at ~30° knee flexion (Noble compression, single-leg squat); no validated accuracy data" },
    { label: "Imaging", value: "Usually not needed; MRI or ultrasound excludes other causes of lateral knee pain" },
    { label: "Return to sport", value: "Graded return to running once pain-free with hip strength restored; no validated criteria" },
    { label: "Mechanism", value: "Repetitive stance-phase loading with the knee near 20–30° flexion" }
  ],
  overview: "Iliotibial band syndrome (ITBS) is a gradual-onset overuse condition that causes sharp pain at the lateral femoral epicondyle during running or cycling. It is the most common injury on the lateral side of the knee in runners, with incidence estimated at 5–14% [r1,r2]. Pain typically starts after a predictable amount of running and settles with rest.\n\nThe traditional explanation is that the band 'rolls' or rubs over the lateral epicondyle as the knee flexes and extends. Anatomical work challenges this. The band is part of the fascia lata and is anchored to the femur, so it cannot slide back and forth over the epicondyle. Pain is more likely to arise from compression of the richly innervated fat and loose connective tissue beneath the band [r3,r4]. Both models agree that the loading problem happens when the knee is flexed about 20–30° in early stance [r5,r3]. The cause is still debated, and the evidence for hip weakness, running mechanics and treatment is limited and often conflicting [r1,r6].\n\nManagement is conservative and physiotherapist-led. It combines education and load modification, progressive hip and lower limb strengthening, and graded return to running, with running retraining as an emerging adjunct [r2,r7,r8]. Surgery is rarely needed."
  ,

  epidemiology: {
    text: "ITBS is regarded as the most common injury on the lateral side of the knee in runners, with incidence estimates of 5–14% of running injuries [r1]. A later review put it at about 10% of running-related injuries [r2]. It also occurs in cyclists [r3]. Several of the key biomechanical studies recruited female recreational runners, so sex-specific conclusions should be treated with caution [r9,r10,r11]. Reliable population incidence by age and sex was not identified in the sources reviewed.",
    riskFactors: {
      intrinsic: [
        "Greater peak hip adduction during running stance (limited and inconsistent evidence, mostly in female runners) [r9,r11,r12]",
        "Greater peak knee internal rotation during stance [r9,r11]",
        "Greater rearfoot invertor moment in female runners with a history of ITBS (retrospective comparison) [r10]",
        "Hip abductor weakness: found in one case series [r13] but not in a controlled strength comparison [r14]. Its overall role is unclear [r1,r6]",
        "Anatomical variation, such as differences in ITB width between individuals (cadaver study) [r5]"
      ],
      extrinsic: [
        "Distance running, which repeats stance-phase loading with the knee near 20–30° flexion; also cycling [r5,r3]",
        "Downhill running, because the knee is less flexed at footstrike [r5]",
        "Training load errors such as a sudden rise in volume or hills (common clinical observation; not quantified in the sources reviewed)",
        "Footwear and running surface are often considered, but the evidence is poor [r1]"
      ]
    }
  },

  mechanism: {
    summary: "ITBS has no single injury moment. It develops from thousands of repeated stance phases in which the knee is only slightly flexed. In nine runners with ITBS the knee was flexed about 21° at footstrike, and the band was thought to impinge at or just below the 30° of flexion traditionally described [r5]. In MRI of volunteers the band was compressed against the lateral epicondyle at about 30° of flexion, as a result of internal rotation of the tibia, and moved laterally off the epicondyle in extension [r3]. Greater peak hip adduction and knee internal rotation preceded ITBS in a prospective study of female runners and may increase strain in the band [r9].",
    sequence: [
      "The runner repeats the same stride many thousand times, so the lateral knee is loaded cyclically on every stance phase.",
      "The foot lands with the knee only slightly flexed (mean about 21° in nine runners with ITBS) [r5].",
      "In early stance the knee flexes through about 30° while the tibia rotates internally [r3].",
      "At about 30° the posterior part of the iliotibial band lies against the lateral femoral epicondyle and compresses the fat and loose connective tissue beneath it [r3].",
      "Greater hip adduction and knee internal rotation may add strain to the band and raise this compression [r9].",
      "With repetition beyond what the tissue tolerates, the sensitive layer under the band becomes painful, and pain begins at a repeatable point in the run.",
      "Runners may then change their gait. Symptomatic female runners reduced peak hip adduction as they fatigued, possibly because of pain [r15]."
    ],
    variants: [
      { name: "Friction model (traditional)", description: "The posterior edge of the band impinges on or rubs over the lateral epicondyle near footstrike, mainly in the foot-contact phase [r5]. This model gave the condition its older name, 'iliotibial band friction syndrome'." },
      { name: "Compression model", description: "The band is anchored to the femur and cannot roll over the epicondyle. Pain arises from compression of the highly innervated and vascularised fat under the band, and MRI signal change in two athletes with acute ITBS lay in that fat [r3,r4]. A true bursa was not seen in any cadaver, volunteer or patient in the anatomical study [r3]." },
      { name: "Hip-driven (proximal) model", description: "Impaired hip muscle function may allow more hip adduction and knee internal rotation, which loads the band [r4,r9]. Evidence for hip abductor weakness is conflicting [r13,r14,r1]. Strengthening could correct excessive hip adduction but may also increase band tension, so the mechanism is not settled [r7]." },
      { name: "Downhill and low-flexion running", description: "Downhill running reduces knee flexion at footstrike, which brings the knee closer to the 30° zone. Sprinting and faster running are less likely to provoke symptoms because the knee is more flexed at footstrike [r5]." }
    ]
  },

  anatomy: {
    text: "The iliotibial band (ITB) is not a discrete structure. It is a thickened part of the fascia lata that envelops the thigh. It is connected to the linea aspera by an intermuscular septum and to the supracondylar region of the femur, including the epicondyle, by coarse fibrous bands [r4]. Distally it inserts on Gerdy's tubercle of the lateral tibia. Tensor fasciae latae and gluteus maximus tension it proximally. A layer of richly innervated and vascularised fat and loose connective tissue lies between the band and the lateral epicondyle [r3,r4]. The lateral recess of the knee can be mistaken for a bursa [r4].",
    structures: [
      { name: "Iliotibial band (thickened fascia lata)", role: "Transmits tension from tensor fasciae latae and gluteus maximus to the lateral tibia. Contributes to lateral knee stability. Anchored to the distal femur by fibrous strands [r4]." },
      { name: "Lateral femoral epicondyle", role: "Bony prominence under the band. The band is compressed against it at about 30° of knee flexion [r3]." },
      { name: "Fat and loose connective tissue deep to the band", role: "Richly innervated and vascularised cushion between band and epicondyle. Proposed source of pain in ITBS [r3,r4]." },
      { name: "Tensor fasciae latae and gluteus maximus", role: "Proximal muscles that tension the band and help control hip position" },
      { name: "Gluteus medius and minimus", role: "Hip abductors. They control pelvic drop and femoral adduction in single-leg stance, which affects strain in the band." },
      { name: "Gerdy's tubercle", role: "Distal tibial insertion of the band; tibial internal rotation changes tension in its fibres [r3]." }
    ]
  },

  pathophysiology: {
    tissueDamage: "ITBS is a load-related irritation, not a tear. Repeated compression of the fat and loose connective tissue between the band and the lateral epicondyle is the leading explanation. MRI in two athletes with acute ITBS showed signal change in the fat deep to the band, with no bursa seen [r3]. The fibrous anchorage of the band to the femur argues against simple back-and-forth friction [r4]. Because the layer under the band is richly innervated, it is a plausible pain source [r3].\n\nThe contributors are multifactorial. Greater hip adduction and knee internal rotation, anatomical predisposition, aberrant activation of muscles inserting into the band and excessive band stiffness have all been proposed [r7]. The evidence for each is limited and conflicting [r1,r6]. No ITBS-specific histology in humans was identified in the sources reviewed, so the cellular events below are inferred from general soft-tissue irritation biology rather than shown for this condition.",
    structures: [
      { name: "Iliotibial band", effect: "Not torn. Under tension and compression near the epicondyle. Strain may rise with greater hip adduction and knee internal rotation [r9]." },
      { name: "Fat and loose connective tissue deep to the band", effect: "Compressed repeatedly. MRI signal change was seen here in two athletes with acute ITBS [r3]." },
      { name: "Lateral femoral epicondyle", effect: "Hard surface against which the band is compressed. Not damaged in ITBS." },
      { name: "Bursa", effect: "A true bursa was not found in the anatomical study, although one is often assumed [r3,r4]." }
    ],
    muscles: [
      { name: "Gluteus medius and minimus", effect: "Reduced abductor torque on the affected side was reported in a case series of 24 runners [r13]. A controlled comparison of 10 runners per group found no strength difference [r14]. The role of weakness is unresolved [r1,r6]." },
      { name: "Tensor fasciae latae and gluteus maximus", effect: "Aberrant or excessive activation may raise tension in the band [r7]." },
      { name: "Quadriceps and hamstrings", effect: "Control knee flexion in early stance. Altered control may change the angle at which the band loads the epicondyle." }
    ],
    cellular: [
      { phase: "Repetitive loading and compression", timing: "Days to weeks of running", description: "Cyclic compression of the fat and loose connective tissue deep to the band. This is inferred, as no ITBS-specific tissue study was identified." },
      { phase: "Irritation and sensitisation", timing: "Days to weeks", description: "Local tissue irritation and sensitisation of nerve endings in the richly innervated layer produce pain at a repeatable point in the run [r3]." },
      { phase: "Settling with load modification", timing: "Weeks", description: "With reduced provocative load and progressive strengthening, symptoms improved over about 2–8 weeks across treatment studies [r2]. The tissue-level mechanism of recovery is not documented." }
    ],
    systems: [
      { system: "Nervous system", effect: "The tissue beneath the band is richly innervated and is the proposed source of the sharp lateral pain [r3]. Pain onset at a consistent point in a run suggests a load-dependent threshold." },
      { system: "Musculoskeletal chain", effect: "Hip, knee and foot kinematics differ in runners with ITBS: greater hip adduction, knee internal rotation and rearfoot invertor moment in several studies, but with small samples and inconsistent findings [r10,r11,r6,r12]." },
      { system: "Motor control and gait adaptation", effect: "Symptomatic female runners reduced peak hip adduction after a run to fatigue, possibly as a pain response. Laboratory data collected after symptoms start may therefore understate the mechanics that caused the problem [r15]." },
      { system: "Inflammatory", effect: "The older name 'friction syndrome' implies inflammation. MRI signal change in the fat suggests tissue reaction, but the degree of true inflammation is not established [r3]." },
      { system: "Training behaviour", effect: "High symptom recurrence rates have been described, which suggests that load and mechanical contributors need ongoing management after pain settles [r7]." }
    ]
  },

  grading: null,

  timeframes: {
    summary: "Studies of conservative treatment report improvement in pain and function over about 2–8 weeks [r2]. ITBS-specific tissue healing times were not identified, so the phases below are typical clinical ranges for settling and rebuilding capacity, not tissue-healing dates.",
    healing: [
      { phase: "Irritable phase: settle and modify load", startDay: 0, endDay: 14, description: "Reduce provocative running, restore pain-free walking and stairs, start pain-free hip activation" },
      { phase: "Capacity building", startDay: 7, endDay: 56, description: "Progressive hip abductor and single-leg strengthening, with improved pelvic and knee control" },
      { phase: "Graded return to running", startDay: 28, endDay: 98, description: "Walk–run progression, then continuous running; hills and speed are added last" },
      { phase: "Consolidation and prevention", startDay: 56, endDay: 150, description: "Maintain strength, monitor weekly load and manage recurrence risk" }
    ],
    milestones: [
      { label: "Pain-free walking and stairs", day: 10, note: "Typical clinical target; individual variation is wide" },
      { label: "Start walk–run intervals", day: 28, note: "When single-leg squat and step-down are pain-free (clinical convention)" },
      { label: "Continuous 30 min running on flat ground", day: 63, note: "Clinical convention" },
      { label: "Hills and full training volume", day: 98, note: "Downhill running is reintroduced last [r5]" }
    ],
    returnToSport: "Criteria-based, usually within about 6–12 weeks of starting a structured program for first-episode cases, and longer if long-standing. In one uncontrolled case series, 22 of 24 runners were pain-free and running after a 6-week strengthening-based program [r13]."
  },

  clinicalPresentation: {
    symptoms: [
      "Sharp or stinging pain on the lateral side of the knee, over or just above the lateral femoral epicondyle",
      "Pain that begins after a fairly consistent time or distance into a run and eases with rest",
      "Pain that is worse running downhill, and sometimes with stairs or cycling",
      "Occasional radiation up or down the lateral thigh or leg, with a snapping or tightness sensation in some runners",
      "No history of a specific injury event, locking or giving way"
    ],
    signs: [
      "Tenderness over the lateral femoral epicondyle, just above the lateral joint line",
      "Pain reproduced at about 30° knee flexion on Noble compression, single-leg squat or step-down",
      "Little or no effusion",
      "Hip abductor weakness or poor pelvic control in some patients, though not in all [r13,r14]",
      "Full knee range of motion and a stable knee on ligament testing"
    ]
  },

  assessment: {
    subjective: [
      "Pain location and quality: lateral knee, sharp, localised to the epicondyle",
      "Onset behaviour: time or distance into the run when pain starts, and whether it forces a stop",
      "Aggravating terrain and speed: downhill, track direction, stairs, cycling [r5]",
      "Training history: weekly volume, recent change in volume, hills, speed or surface, and footwear",
      "Previous knee, hip or lumbar problems, and any trauma",
      "Features suggesting other conditions: locking, giving way, effusion, night pain, numbness"
    ],
    observation: [
      "Standing and single-leg posture: pelvic drop, femoral adduction and knee position",
      "Running gait on treadmill or video: hip adduction, knee rotation, crossover width, trunk lean [r9,r11]",
      "Foot posture and foot strike as part of the whole-chain picture [r10]"
    ],
    palpation: [
      "Lateral femoral epicondyle and the band just proximal to the joint line",
      "Gerdy's tubercle and the distal band",
      "Lateral joint line (to separate from lateral meniscal pathology)",
      "Proximal band, tensor fasciae latae and gluteal muscles for tenderness or trigger points"
    ],
    rangeOfMotion: [
      "Knee flexion and extension are normally full and painless",
      "Hip adduction range with the Ober position: measures a complex of tensor fasciae latae, band and hip structures, and is not a direct measure of band length [r4]",
      "Hip and ankle range to explain limited stride or compensations"
    ],
    strength: [
      "Hip abduction and external rotation strength by hand-held dynamometry, compared with the other side. Deficits were reported in one case series [r13] but not another study [r14], so a normal result does not exclude ITBS.",
      "Quadriceps, hamstring and calf strength",
      "Endurance of side plank and single-leg bridge"
    ],
    neuro: [
      "Screen for lumbar and common peroneal nerve contribution if numbness, tingling or radiating symptoms are reported"
    ],
    functional: [
      "Single-leg squat or step-down to about 30–45°: look for pelvic drop, femoral adduction and internal rotation and for pain reproduction",
      "Single-leg stance and Trendelenburg control",
      "Treadmill or overground running assessment, with pain recorded against time or distance",
      "Hop tests once irritability allows"
    ],
    specialTests: [
      { name: "Noble compression test", purpose: "Reproduce lateral knee pain with compression over the epicondyle at about 30° knee flexion", procedure: "Patient supine with the knee flexed to about 90°. Apply thumb pressure over the lateral femoral epicondyle while the patient actively extends the knee.", positive: "The patient's familiar lateral knee pain appears at about 30° of flexion. No diagnostic accuracy data were identified in the sources reviewed.", refs: [] },
      { name: "Single-leg squat or step-down with pain provocation", purpose: "Load the band and lateral knee near 30° flexion and check pelvic control", procedure: "Single-leg squat to about 30–45° knee flexion, 5–10 repetitions, on the symptomatic side.", positive: "Familiar lateral knee pain with or without pelvic drop or femoral adduction. No accuracy data were identified.", refs: [] },
      { name: "Ober test (modified)", purpose: "Assess hip adduction range in side-lying as a measure of the tensor fasciae latae and band complex", procedure: "Patient side-lying with the symptomatic leg uppermost. The examiner extends and abducts the hip, then lowers the thigh towards the couch with the knee flexed or extended.", positive: "Limited adduction compared with the other side. This is not specific to ITBS. Treat it as a finding, not as a diagnostic test. No validity data were identified, and the clinical tests used to monitor ITBS management have not been validated in this population [r1].", refs: [] }
    ],
    clinicalRules: [],
    outcomeMeasures: [
      { name: "Numeric Pain Rating Scale (NPRS) during running and daily activity", use: "Track pain at the usual onset point in the run [r16]" },
      { name: "Lower Extremity Functional Scale (LEFS)", use: "Patient-reported function; used in an ITBS rehabilitation trial [r16]" },
      { name: "Time or distance to symptom onset when running", use: "Simple, patient-specific marker of progress (clinical convention)" },
      { name: "Single-leg squat quality and hip abduction strength (hand-held dynamometer)", use: "Objective control and strength measures [r16,r13]" }
    ],
    imaging: [
      { modality: "Not routinely required", indication: "Typical presentation in a runner with clear load-related lateral pain and a normal knee examination", findings: "Not applicable. The diagnosis is clinical." },
      { modality: "MRI", indication: "Atypical features, failure of rehabilitation, or suspicion of meniscal, bone or other pathology", findings: "In two athletes with acute ITBS, signal change was seen in the fat deep to the band, and no bursa was visible [r3]. MRI also excludes lateral meniscal tear, stress injury and osteochondral lesions." },
      { modality: "Ultrasound", indication: "Optional, to exclude other soft-tissue causes or guide an injection", findings: "Findings were not characterised in the sources reviewed." },
      { modality: "Plain radiograph", indication: "Bony tenderness, trauma or suspected stress fracture", findings: "Usually normal in ITBS." }
    ]
  },

  differentials: [
    { name: "Lateral meniscal tear", id: "meniscal-tear", distinguishing: "Joint-line tenderness rather than epicondylar tenderness, locking or catching, pain with twisting, and positive meniscal tests." },
    { name: "Posterolateral corner or lateral collateral ligament injury", id: "posterolateral-corner-injury", distinguishing: "Traumatic or hyperextension mechanism, varus laxity at 30° and a positive dial test." },
    { name: "Patellofemoral pain", id: "patellofemoral-pain", distinguishing: "Anterior or peripatellar pain with stairs, squatting and prolonged sitting. Lateral epicondylar tenderness is absent." },
    { name: "Popliteus or biceps femoris tendinopathy", distinguishing: "Pain just posterior or distal to the epicondyle (popliteus), or at the fibular head with resisted knee flexion (biceps femoris). The band itself is not tender." },
    { name: "Osteochondritis dissecans or lateral femoral condyle bone stress injury", id: "osteochondritis-dissecans-knee", distinguishing: "Deep, poorly localised pain, effusion, mechanical symptoms or night pain. More likely in adolescents or in athletes with low energy availability. MRI is diagnostic." },
    { name: "Common peroneal nerve irritation", id: "common-peroneal-nerve-injury", distinguishing: "Paraesthesia or weakness in the lateral leg or foot, and a positive Tinel sign at the fibular neck." },
    { name: "Gluteal tendinopathy or lateral hip pain", id: "gluteal-tendinopathy", distinguishing: "Pain over the greater trochanter and lateral thigh, worse lying on the side and with single-leg stance. Knee examination is normal." }
  ],
  redFlags: [
    "Constant or night pain not related to load, with bony tenderness, in a runner with high mileage or low energy availability: suspect a distal femoral or tibial stress injury. Stop running and arrange imaging.",
    "Locking, giving way, a persistent effusion or a positive meniscal test: suspect intra-articular pathology (meniscal tear, osteochondral lesion). Arrange MRI and orthopaedic review.",
    "A hot, red, swollen knee with fever or the patient unwell: suspect septic arthritis. Arrange emergency assessment.",
    "Varus laxity or a traumatic or hyperextension mechanism: suspect lateral collateral ligament or posterolateral corner injury. Arrange orthopaedic review.",
    "Numbness, foot drop or lateral leg weakness: suspect common peroneal nerve or lumbar radiculopathy. Perform a neurological examination and refer.",
    "Unexplained weight loss, a history of cancer, or pain that is progressive despite rest: arrange medical review."
  ],

  management: {
    principles: "Management is conservative. Use shared decision-making and explain why the lateral knee hurts. The most defensible first-line approach is load modification (reducing but not abandoning running, and avoiding provocative terrain), progressive hip and lower limb strengthening, and graded return to running [r2,r7]. The overall evidence is of low quality. A 2012 systematic review concluded that the research on ITBS management is of poor methodological quality and highly conflicting [r1], and a 2024 review found only 13 studies and 201 participants, with large heterogeneity that prevented meta-analysis [r2]. Treatment decisions should therefore be individualised and reviewed against objective change in pain and function. Do not promise that stretching, foam rolling or strengthening will fix a 'tight band'.",
    medical: [
      { name: "Local corticosteroid injection (methylprednisolone with local anaesthetic)", description: "In a small RCT of 18 runners with ITBS of less than 2 weeks' duration, a single injection of 40 mg methylprednisolone acetate where the band crosses the lateral femoral condyle reduced pain during treadmill running between day 7 and day 14 compared with anaesthetic alone. The difference at day 7 was not significant (p = 0.07) and follow-up ended at 14 days [r17]. Consider only for recent, severe pain that prevents rehabilitation, together with an exercise program.", evidence: "limited", recommendation: "consider", refs: ["r17"] },
      { name: "Analgesia and short-course NSAIDs", description: "Simple analgesia or a short NSAID course for pain relief while loading is modified. No ITBS-specific trials were identified in the sources reviewed.", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Surgical release or excision of the posterior band or underlying tissue", description: "Reserved for recalcitrant cases after an adequate period of well-delivered rehabilitation has failed and other diagnoses have been excluded. Outcomes were not examined in the sources reviewed.", evidence: "expert-opinion", recommendation: "consider", refs: [] }
    ],
    physio: [
      { name: "Education and load modification", description: "Explain the compression model. Reduce running to below the point where pain starts, avoid downhill running while irritable, and substitute non-provocative aerobic work, then progress load in steps [r5,r2].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r5", "r2"] },
      { name: "Hip abductor and lateral chain strengthening", description: "The most common component of effective programs: pain fell by 27–100% and function improved by 10–57% over 2–8 weeks in a review of 13 mostly small or uncontrolled studies [r2]. In a pilot RCT of 24 female runners, hip strengthening, stretching and a conventional program did not differ significantly, although the strengthening group improved most consistently [r16]. A case series of 24 runners showed abductor torque rose by about 35–51% over 6 weeks as symptoms resolved [r13]. Strengthening may also raise band tension [r7].", evidence: "limited", recommendation: "recommended", refs: ["r2", "r16", "r13", "r7"] },
      { name: "Running gait retraining", description: "Real-time feedback to cue reduced hip adduction, a wider step width or a higher step rate. A mixed-methods review found little clinical evidence overall, but the experts interviewed recommended running retraining for ITBS [r8]. Gait retraining is described as promising but understudied [r7,r2].", evidence: "expert-opinion", recommendation: "consider", refs: ["r8", "r7", "r2"] },
      { name: "Manual therapy and soft-tissue work", description: "The 2024 review suggested that hip strengthening may be augmented by manual therapy or shockwave, but the supporting studies were small and mixed [r2].", evidence: "very-limited", recommendation: "consider", refs: ["r2"] },
      { name: "Extracorporeal shockwave therapy", description: "The 2024 review suggested that hip strengthening may be augmented by shockwave therapy. Evidence of a specific benefit is very limited [r2].", evidence: "very-limited", recommendation: "consider", refs: ["r2"] },
      { name: "ITB stretching or foam rolling aimed at 'lengthening' the band", description: "Very limited evidence of benefit. A single session of stretching or foam rolling did not change ITB stiffness in 30 healthy adults [r18], and intermittent stretching is unlikely to change band length or mechanical properties [r7]. In the pilot RCT, the stretching group did not differ significantly from the other groups [r16]. This is not proof of harm, and patients may use it for comfort, but it should not be the main treatment.", evidence: "very-limited", recommendation: "not-recommended", refs: ["r18", "r7", "r16"] }
    ],
    education: [
      "The band is not a loose rope rubbing on bone. Pain probably comes from compression of sensitive tissue under it, and it is load-related and usually settles with the right plan.",
      "You do not have to stop all running. Run to just below the point where pain starts, then build slowly. Downhill running is the first thing to cut back.",
      "Strength and control at the hip, thigh and pelvis are central to the program. Doing the exercises 2–3 times a week matters more than stretching the band.",
      "Return to running in steps, with pain at or below 2/10 settling by the next morning (a common clinical convention).",
      "Symptoms can come back if training load rises quickly, so keep the strength program going and increase mileage gradually."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and moves from settling irritation to building hip and single-leg capacity, then a graded return to running, then terrain and speed. Move on when objective criteria are met, not on a fixed number of weeks [r2,r7]. Timeframes are typical only. Dosages are common clinical ranges rather than prescriptions from a single trial: published programs differ, and the exact protocols were not fully reported in the abstracts reviewed. As a working rule, exercise or running pain should stay at or below about 2/10 and settle by the next morning (clinical convention). Hip strengthening was the common thread in effective programs, with special attention to gluteus medius in one case series [r2,r13].",
    stages: [
      {
        name: "Settle & activate",
        timeframe: "Weeks 0–2",
        goals: ["Pain at rest and in walking ≤ 2/10", "Maintain fitness with non-provocative aerobic work", "Identify the running triggers: distance at onset, downhill, speed", "Begin pain-free hip activation"],
        precautions: ["Stop running at the point pain starts rather than running through it (clinical convention)", "Avoid downhill running while irritable [r5]", "Limit repeated loaded knee flexion through about 30° (long cycling, repeated stair descent) if it provokes symptoms"],
        exercises: [
          { name: "Side-lying hip abduction or clamshell", dosage: "3 × 12–15 each side, daily", cues: "Keep the pelvis stacked; feel the work at the side of the hip", figure: { pose: "ex-clamshell", view: "lateral", props: ["mat"] } },
          { name: "Glute bridge", dosage: "3 × 10–12, last 3 reps with a 5 s hold, daily", cues: "Drive through the heels; keep the pelvis level", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Side plank (knees bent progressing to straight)", dosage: "3 × 20–30 s each side", cues: "Hips lifted in a straight line", figure: { pose: "ex-side-plank", view: "lateral", props: ["mat"] } },
          { name: "Standing hip abduction against wall or band", dosage: "3 × 12 each side", cues: "Stand tall; lead with the heel, no trunk lean", figure: { pose: "ex-hip-abduction-standing", view: "lateral" } },
          { name: "Single-leg balance", dosage: "3 × 30 s each side", cues: "Keep the pelvis level and the knee over the second toe", figure: { pose: "ex-single-leg-balance", view: "anterior" } },
          { name: "Non-provocative aerobic work (pool running, flat walking or cross-trainer)", dosage: "20–30 min, 3–5 times a week", cues: "Stay below the pain threshold" }
        ],
        progressionCriteria: ["Walking and stairs pain-free (≤ 2/10)", "Side plank 30 s each side with the pelvis level", "Single-leg balance 30 s without pelvic drop", "Tenderness over the epicondyle reduced"]
      },
      {
        name: "Strength & pelvic control",
        timeframe: "Weeks 2–6",
        goals: ["Increase hip abductor and single-leg strength", "Control pelvis, femur and knee in single-leg loading", "Pain-free single-leg squat and step-down"],
        precautions: ["Keep exercise pain at or below 2/10 and settled by the next morning (clinical convention)", "Progress load before volume"],
        exercises: [
          { name: "Single-leg bridge", dosage: "3 × 10–12 each side", cues: "Keep the pelvis level; no rotation", figure: { pose: "ex-single-leg-bridge", view: "lateral", props: ["mat"] } },
          { name: "Step-down (forward or lateral)", dosage: "3 × 8–12, 3 s lowering, each side", cues: "Pelvis level; knee tracks over the second toe", figure: { pose: "ex-step-down", view: "anterior", props: ["step"] } },
          { name: "Single-leg squat to 45–60°", dosage: "3 × 8 each side, progress depth", cues: "Hip back, no pelvic drop", figure: { pose: "ex-single-leg-squat", view: "anterior" } },
          { name: "Split squat with load", dosage: "3 × 8–10 each side, 2–3 times a week", cues: "Upright trunk; front knee tracks over the foot", figure: { pose: "ex-split-squat", view: "lateral", props: ["dumbbell"] } },
          { name: "Single-leg Romanian deadlift", dosage: "3 × 8–10 each side", cues: "Hinge at the hip; keep the pelvis square", figure: { pose: "ex-rdl", view: "lateral", props: ["dumbbell"] } },
          { name: "Side plank with top-leg abduction", dosage: "3 × 30–45 s each side", cues: "Hips high; leg lifts without rotation", figure: { pose: "ex-side-plank", view: "lateral", props: ["mat"] } }
        ],
        progressionCriteria: ["Single-leg squat 10 reps without pelvic drop or knee collapse and with pain ≤ 2/10", "Hip abduction strength about 90% of the other side by hand-held dynamometer (clinical convention)", "Step-down pain-free for 10 reps", "No increase in symptoms the next morning"]
      },
      {
        name: "Return to running",
        timeframe: "Weeks 4–10 (overlaps stage 2)",
        goals: ["Return to continuous running on flat ground", "Learn a running pattern that avoids excessive hip adduction", "Build running tolerance in steps"],
        precautions: ["Increase only one of distance, frequency or speed at a time", "Avoid downhill and cambered surfaces at first [r5]", "Stop the session if pain rises above 2/10 or lasts into the next day (clinical convention)"],
        exercises: [
          { name: "Walk–run intervals", dosage: "e.g. 1 min run / 2 min walk × 8, every second day; add 1 min of running per session as symptoms allow (clinical convention)", cues: "Short, quiet steps; stop before pain starts" },
          { name: "Running form cueing (cadence, step width, pelvis level)", dosage: "2–3 sessions per week with a metronome or video feedback", cues: "Land under the body, with the knees tracking forward and the pelvis level [r8]" },
          { name: "Single-leg hop (in place, then forward)", dosage: "3 × 5 each side", cues: "Stick the landing; knee over the foot", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Single-leg calf raise", dosage: "3 × 10–15 each side", cues: "Slow lowering", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Lateral step-down with band around the knees", dosage: "3 × 8–10 each side", cues: "Pelvis level; resist the band", figure: { pose: "ex-step-down", view: "anterior", props: ["step", "resistance-band"] } }
        ],
        progressionCriteria: ["30 min continuous flat running with pain ≤ 2/10 and no next-morning increase (clinical convention)", "Single-leg squat and step-down remain pain-free after running", "Hop series without pain or pelvic drop"]
      },
      {
        name: "Terrain, speed & maintenance",
        timeframe: "Weeks 8–16",
        goals: ["Reintroduce hills and speed work", "Return to pre-injury weekly volume", "Maintain strength and monitor load"],
        precautions: ["Add downhill running last and in small doses [r5]", "Increase weekly volume gradually, for example by about 10% a week (clinical convention)", "Review load after any symptom flare-up before changing the program"],
        exercises: [
          { name: "Gentle rolling hills, then downhill repeats", dosage: "Start with 2–4 short repeats once per week, then build", cues: "Keep a quick cadence and an upright trunk" },
          { name: "Tempo and interval running", dosage: "1 session per week, add after continuous running is pain-free", cues: "Hold form as speed rises" },
          { name: "Heavy single-leg strength (split squat, step-up)", dosage: "2 times a week, 3–4 × 6–8", cues: "Control the pelvis and knee", figure: { pose: "ex-step-up", view: "lateral", props: ["box"] } },
          { name: "Hip abductor maintenance (side plank, band work)", dosage: "2 times a week, ongoing", figure: { pose: "ex-side-plank", view: "lateral", props: ["mat"] } }
        ],
        progressionCriteria: ["Full training volume for 2–4 weeks without pain above 2/10", "Hills and speed tolerated without a next-day flare", "Hip strength and single-leg control maintained"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated ITBS-specific return-to-sport (RTS) criteria were identified in the sources reviewed. The criteria below reflect clinical convention.",
      "No lateral knee pain at rest or in daily activities, and tenderness at the epicondyle resolved or minimal",
      "Pain-free single-leg squat and step-down, with level pelvis, for 10 repetitions",
      "Hip abduction strength about 90% of the other side, or at least symmetrical (clinical convention)",
      "Continuous running at target pace and distance with pain ≤ 2/10 and no next-morning flare",
      "Downhill, speed and surface exposures reintroduced without symptoms",
      "Sport-specific load built in steps, with a plan to monitor weekly volume"
    ],
    tests: [
      "Hand-held dynamometry of hip abduction strength compared with the other side",
      "Single-leg squat and step-down quality with video, if available",
      "Treadmill or field running trial with pain recorded against time or distance",
      "Hop tests as a general control of single-leg landing"
    ]
  },
  prognosis: "Many treated runners improve within weeks. Published studies of conservative treatment reported improvements in pain and function over about 2–8 weeks [r2], and in one uncontrolled case series 22 of 24 runners were pain-free and running after 6 weeks, with no recurrence reported at 6 months [r13]. These data come from small, mostly uncontrolled studies and should not be read as typical outcomes. High symptom recurrence rates have also been described, and long-term controlled follow-up was not identified [r7,r1]. Long-standing cases and runners who cannot reduce training load recover more slowly. Surgery is rarely required.",
  prevention: [
    "No intervention has been shown in a trial to prevent ITBS, and hip strengthening was questioned as a preventive measure in one study [r14].",
    "Increase running volume, intensity and hills gradually, and keep downhill running to small doses [r5].",
    "Maintain hip and single-leg strength and pelvic control as part of a general running program.",
    "Consider running retraining if hip adduction and knee rotation look excessive on video [r8]; evidence for this is limited.",
    "Address early lateral knee pain promptly by modifying load. No study in the sources reviewed compared early with late intervention."
  ],
  clinicalPearls: [
    "Reproduce the pain at about 30° of knee flexion with a single-leg squat or Noble test. Pain at 30° of flexion on a loaded knee is the signature, so look for it before reaching for imaging [r5,r3].",
    "Avoid telling patients their band is 'tight' and needs to be stretched. The band is anchored to the femur, and a single session of stretching or foam rolling did not change its stiffness in healthy adults in one RCT [r4,r18].",
    "Hip weakness is common clinically but not universal in studies. Measure it and treat it if present, and look for pelvic control and rotation too [r13,r14].",
    "Downhill running is the classic aggravator because the knee is less flexed at footstrike. Faster running often hurts less [r5].",
    "Gait changes in symptomatic runners can be a pain response. A runner who already looks 'good' on video may have started to compensate [r15].",
    "Plan for recurrence. Keep the strength program in place and review weekly load, as recurrence is described as high [r7]."
  ],
  related: ["patellofemoral-pain", "meniscal-tear", "posterolateral-corner-injury", "gluteal-tendinopathy", "osteochondritis-dissecans-knee", "pes-anserine-pain"],

  references: [
    { id: "r1", citation: "van der Worp MP, van der Horst N, de Wijer A, et al. Iliotibial band syndrome in runners: a systematic review. Sports Med. 2012;42(11):969-92.", pmid: "22994651", doi: "10.2165/11635400-000000000-00000", type: "systematic-review", year: 2012 },
    { id: "r2", citation: "Sanchez-Alvarado A, Bokil C, Cassel M, et al. Effects of conservative treatment strategies for iliotibial band syndrome on pain and function in runners: a systematic review. Front Sports Act Living. 2024;6:1386456.", pmid: "39247485", doi: "10.3389/fspor.2024.1386456", type: "systematic-review", year: 2024 },
    { id: "r3", citation: "Fairclough J, Hayashi K, Toumi H, et al. The functional anatomy of the iliotibial band during flexion and extension of the knee: implications for understanding iliotibial band syndrome. J Anat. 2006;208(3):309-16.", pmid: "16533314", doi: "10.1111/j.1469-7580.2006.00531.x", type: "basic-science", year: 2006 },
    { id: "r4", citation: "Fairclough J, Hayashi K, Toumi H, et al. Is iliotibial band syndrome really a friction syndrome? J Sci Med Sport. 2007;10(2):74-6.", pmid: "16996312", doi: "10.1016/j.jsams.2006.05.017", type: "narrative-review", year: 2007 },
    { id: "r5", citation: "Orchard JW, Fricker PA, Abud AT, et al. Biomechanics of iliotibial band friction syndrome in runners. Am J Sports Med. 1996;24(3):375-9.", pmid: "8734891", doi: "10.1177/036354659602400321", type: "biomechanical", year: 1996 },
    { id: "r6", citation: "Louw M, Deary C. The biomechanical variables involved in the aetiology of iliotibial band syndrome in distance runners - a systematic review of the literature. Phys Ther Sport. 2014;15(1):64-75.", pmid: "23954385", doi: "10.1016/j.ptsp.2013.07.002", type: "systematic-review", year: 2014 },
    { id: "r7", citation: "Friede MC, Innerhofer G, Fink C, et al. Conservative treatment of iliotibial band syndrome in runners: are we targeting the right goals? Phys Ther Sport. 2022;54:44-52.", pmid: "35007886", doi: "10.1016/j.ptsp.2021.12.006", type: "narrative-review", year: 2022 },
    { id: "r8", citation: "Barton CJ, Bonanno DR, Carr J, et al. Running retraining to treat lower limb injuries: a mixed-methods study of current evidence synthesised with expert opinion. Br J Sports Med. 2016;50(9):513-26.", pmid: "26884223", doi: "10.1136/bjsports-2015-095278", type: "systematic-review", year: 2016 },
    { id: "r9", citation: "Noehren B, Davis I, Hamill J. ASB clinical biomechanics award winner 2006 prospective study of the biomechanical factors associated with iliotibial band syndrome. Clin Biomech (Bristol). 2007;22(9):951-6.", pmid: "17728030", doi: "10.1016/j.clinbiomech.2007.07.001", type: "cohort", year: 2007 },
    { id: "r10", citation: "Ferber R, Noehren B, Hamill J, et al. Competitive female runners with a history of iliotibial band syndrome demonstrate atypical hip and knee kinematics. J Orthop Sports Phys Ther. 2010;40(2):52-8.", pmid: "20118523", doi: "10.2519/jospt.2010.3028", type: "case-control", year: 2010 },
    { id: "r11", citation: "Aderem J, Louw QA. Biomechanical risk factors associated with iliotibial band syndrome in runners: a systematic review. BMC Musculoskelet Disord. 2015;16:356.", pmid: "26573859", doi: "10.1186/s12891-015-0808-7", type: "systematic-review", year: 2015 },
    { id: "r12", citation: "Ceyssens L, Vanelderen R, Barton C, et al. Biomechanical risk factors associated with running-related injuries: a systematic review. Sports Med. 2019;49(7):1095-115.", pmid: "31028658", doi: "10.1007/s40279-019-01110-z", type: "systematic-review", year: 2019 },
    { id: "r13", citation: "Fredericson M, Cookingham CL, Chaudhari AM, et al. Hip abductor weakness in distance runners with iliotibial band syndrome. Clin J Sport Med. 2000;10(3):169-75.", pmid: "10959926", doi: "10.1097/00042752-200007000-00004", type: "case-control", year: 2000 },
    { id: "r14", citation: "Grau S, Krauss I, Maiwald C, et al. Hip abductor weakness is not the cause for iliotibial band syndrome. Int J Sports Med. 2008;29(7):579-83.", pmid: "18050060", doi: "10.1055/s-2007-989323", type: "case-control", year: 2008 },
    { id: "r15", citation: "Brown AM, Zifchock RA, Hillstrom HJ, et al. The effects of fatigue on lower extremity kinematics, kinetics and joint coupling in symptomatic female runners with iliotibial band syndrome. Clin Biomech (Bristol). 2016;39:84-90.", pmid: "27718393", doi: "10.1016/j.clinbiomech.2016.09.012", type: "case-control", year: 2016 },
    { id: "r16", citation: "McKay J, Maffulli N, Aicale R, et al. Iliotibial band syndrome rehabilitation in female runners: a pilot randomized study. J Orthop Surg Res. 2020;15(1):188.", pmid: "32448384", doi: "10.1186/s13018-020-01713-7", type: "rct", year: 2020 },
    { id: "r17", citation: "Gunter P, Schwellnus MP. Local corticosteroid injection in iliotibial band friction syndrome in runners: a randomised controlled trial. Br J Sports Med. 2004;38(3):269-72.", pmid: "15155424", doi: "10.1136/bjsm.2003.000283", type: "rct", year: 2004 },
    { id: "r18", citation: "Pepper TM, Brismée JM, Sizer PS, et al. The immediate effects of foam rolling and stretching on iliotibial band stiffness: a randomized controlled trial. Int J Sports Phys Ther. 2021;16(3):651-61.", pmid: "34123517", doi: "10.26603/001c.23606", type: "rct", year: 2021 }
  ],

  animation: {
    title: "How iliotibial band syndrome develops",
    phases: [
      {
        type: "moi", label: "Repetitive running", duration: 7, view: "lateral", environment: "road",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "run-toe-off", root: { x: -30 } },
          { t: 0.9, pose: "run-contact", joints: { kneeR: 22 }, root: { x: -20 } },
          { t: 1.5, pose: "run-midstance", joints: { kneeR: 30 }, root: { x: -10 } },
          { t: 2.1, pose: "run-toe-off", root: { x: 0 } },
          { t: 3.0, pose: "run-contact", joints: { kneeR: 22 }, root: { x: 10 } },
          { t: 3.6, pose: "run-midstance", joints: { kneeR: 30 }, root: { x: 18 } },
          { t: 4.3, pose: "run-toe-off", root: { x: 26 } },
          { t: 5.2, pose: "run-contact", joints: { kneeR: 22 }, root: { x: 32 } },
          { t: 5.8, pose: "run-midstance", joints: { kneeR: 30 }, root: { x: 38 } },
          { t: 6.6, pose: "run-toe-off", root: { x: 44 } }
        ],
        forces: [
          { t: [0.9, 1.7], at: "footR", dir: "up", label: "Ground force at footstrike" },
          { t: [1.0, 2.0], at: "kneeR", dir: "toward-viewer", label: "Band loads the lateral knee near 30° flexion" },
          { t: [3.0, 3.9], at: "kneeR", dir: "toward-viewer", label: "Repeated every stride" },
          { t: [5.2, 6.1], at: "kneeR", dir: "toward-viewer", label: "Load repeats, stride after stride" }
        ],
        highlights: [{ t: [1.0, 7], at: "kneeR" }],
        slowmo: [{ t: [0.8, 1.8], rate: 0.4 }],
        captions: [
          { t: 0, text: "A runner repeats the same stride many thousands of times." },
          { t: 1.0, text: "At footstrike the knee is only slightly flexed, about 20°." },
          { t: 2.0, text: "Through about 30° of flexion in early stance, the band lies against the lateral femoral epicondyle." },
          { t: 3.3, text: "Hip adduction and knee internal rotation can add to the load on the band." },
          { t: 4.6, text: "Downhill running reduces knee flexion at footstrike and often aggravates symptoms." },
          { t: 5.8, text: "There is no single injury moment: pain builds when load repeats faster than the tissue tolerates." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "kneeR",
        captions: [{ t: 0, text: "Zooming into the right knee, viewed from the front." }]
      },
      {
        type: "closeup", label: "Inside the knee", duration: 10, scene: "knee-anterior",
        actions: [
          { t: 0, do: "highlight", target: "itBand" },
          { t: 0.3, do: "label", target: "itBand", text: "Iliotibial band (thickened fascia lata)" },
          { t: 1.2, do: "arrow", at: "lateralEpicondyle", dir: "medial", label: "Band pressed on epicondyle near 30° flexion" },
          { t: 1.4, do: "stretch", target: "itBand", amount: 0.25, dur: 1.0 },
          { t: 2.6, do: "reset", target: "itBand" },
          { t: 3.3, do: "stretch", target: "itBand", amount: 0.3, dur: 0.9 },
          { t: 4.2, do: "inflame", target: "itBand", amount: 0.5, dur: 1.4 },
          { t: 4.4, do: "label", target: "itBand", text: "Tissue beneath the band becomes irritated" },
          { t: 5.4, do: "pain", at: "lateralEpicondyle", hold: 3 },
          { t: 6.6, do: "camera", at: "lateralEpicondyle", zoom: 1.7, dur: 1.0 },
          { t: 9.0, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "The iliotibial band is thickened fascia lata, running down the lateral thigh to Gerdy's tubercle." },
          { t: 1.2, text: "Fibrous strands anchor it to the femur, so it does not roll back and forth over the epicondyle." },
          { t: 2.0, text: "Near 30° of flexion, with the tibia rotating inwards, the band is pressed against the epicondyle." },
          { t: 3.3, text: "More hip adduction and knee internal rotation may raise the strain in the band." },
          { t: 4.3, text: "The richly innervated fat under the band is compressed again and again, and becomes irritated." },
          { t: 5.5, text: "Pain at the epicondyle starts after a repeatable running time and eases with rest." },
          { t: 6.8, text: "Whether this is friction, compression or both is debated. A true bursa is rarely seen." }
        ]
      },
      {
        type: "micro", label: "Tissue response", duration: 9, tissue: "bursa",
        stages: [{ t: 0, stage: "healthy" }, { t: 2.0, stage: "friction" }, { t: 4.2, stage: "inflammation" }, { t: 6.6, stage: "resolution" }],
        timeLabels: [{ t: 2.0, text: "Weeks of running" }, { t: 4.2, text: "Days to weeks" }, { t: 6.6, text: "Weeks with load management" }],
        captions: [
          { t: 0, text: "Healthy cushioning layer under the band: loose tissue and fat let structures glide with little irritation." },
          { t: 2.0, text: "Repeated compression at about 30° of flexion loads the layer on every stride." },
          { t: 4.2, text: "Beyond its tolerance, the layer becomes irritated and sensitive. Pain starts at a repeatable point." },
          { t: 6.6, text: "With load modification and graded strengthening, irritation settles and tolerance returns." },
          { t: 8.0, text: "Drawn as a bursa-like layer. In ITBS this cushion is fat and loose tissue, as a true bursa is rarely seen." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL6" }
};
