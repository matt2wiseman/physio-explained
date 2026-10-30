// Iliopsoas strain and iliopsoas-related groin pain — LL2
export default {
  id: "iliopsoas-related-groin-pain",
  name: "Iliopsoas strain and iliopsoas-related groin pain",
  shortName: "Iliopsoas-related groin pain",
  aka: ["iliopsoas strain", "hip flexor strain", "iliacus strain", "psoas strain", "iliopsoas tendinopathy", "iliopsoas bursitis", "hip flexor tendinopathy"],
  region: "hip-groin",
  tissues: ["muscle", "tendon", "bursa"],
  onset: "acute-or-gradual",
  mechanismType: ["non-contact", "overuse"],
  populations: ["football players", "sprinters", "kicking and change-of-direction sport athletes", "dancers", "young adult athletes"],
  sports: ["soccer", "australian football", "rugby", "sprinting", "ballet", "martial arts", "rowing"],
  urgency: "routine",
  summary: "Anterior groin pain from the iliacus, psoas or their common tendon and bursa: an acute strain at the MTJ during sprinting or change of direction, or longstanding overload with pain on resisted hip flexion and stretch.",
  keyFacts: [
    { label: "Typical recovery", value: "Acute MTJ strain ~1–4 weeks; longstanding tendon or bursal pain 6–12 weeks" },
    { label: "Return to sport", value: "Criteria-based: pain-free resisted hip flexion, stretch, sprinting and kicking" },
    { label: "Key test", value: "Iliopsoas tenderness + pain on resisted hip flexion and/or hip flexor stretch (modified Thomas)" },
    { label: "Imaging", value: "Usually not needed. MRI/US for persisting or atypical pain" },
    { label: "Incidence", value: "Hip flexors account for about a third of acute groin injuries" },
    { label: "Mechanism", value: "Change of direction, sprinting and kicking: rapid hip flexion from an extended hip" }
  ],
  overview: "Iliopsoas-related groin pain is a defined Doha entity: iliopsoas tenderness, made more likely by pain on resisted hip flexion and/or on stretching the hip flexors [r1]. It covers acute strains of the iliacus and psoas major and longstanding overload of the iliopsoas muscle–tendon unit and bursa. Hip flexor injuries make up about a third of acute groin injuries in athletes. On MRI the iliacus and psoas are usually injured at the musculotendinous junction (MTJ), and the iliacus is injured particularly during change of direction [r3]. In elite football, iliopsoas-related injuries are the second most common hip and groin diagnosis after adductor injuries [r2].\n\nAcute iliopsoas strains are usually low-grade and recover within a few weeks. Longstanding iliopsoas pain often coexists with adductor- or hip-related groin pain and needs those to be identified and managed [r4]. Pain from the iliopsoas tends to be felt more medially than expected [r7]. The physiotherapist leads diagnosis, progressive hip flexor loading through range and the return of sprinting and kicking. Persistent anterior hip pain prompts screening for intra-articular hip pathology [r8].",

  epidemiology: {
    text: "In seven seasons of UEFA elite football, 52 of 628 hip and groin injuries were iliopsoas-related, making it the second most common diagnosis after adductor injuries [r2]. In a prospective MRI study of male athletes with acute groin pain, 33 of 156 had an acute hip flexor injury (median age 26 years). There were 16 rectus femoris, 12 iliacus, 7 psoas major, 4 sartorius and 1 tensor fasciae latae injuries [r3]. Iliopsoas-related groin pain is one of the more reliably classified Doha entities (inter-examiner κ 0.57) [r5]. General risk factors for groin injury include previous groin injury, a higher level of play, reduced adductor strength and less sport-specific training [r10].",
    riskFactors: {
      intrinsic: [
        "Previous groin injury [r10]",
        "Reduced hip flexor or adductor strength and endurance (modifiable)",
        "Reduced hip extension range or hip flexor flexibility (modifiable; limited evidence)",
        "Coexisting hip-related groin pain (FAI morphology, labral pathology) [r8]"
      ],
      extrinsic: [
        "Sprinting, change-of-direction and kicking sports [r3]",
        "Higher level of play [r10]",
        "Rapid increases in sprinting or kicking volume, for example in preseason",
        "Repetitive end-range hip flexion activities (dance, martial arts, hurdling, rowing) [r8]"
      ]
    }
  },

  mechanism: {
    summary: "Acute iliopsoas strains occur when the muscle is loaded quickly at long length. This happens at the end of hip extension in sprinting or as the athlete brakes and pushes off to change direction, when the iliopsoas is activated eccentrically to stop extension and then concentrically to drive the thigh forward. Iliacus injuries occurred mostly during change of direction, and iliacus and psoas injuries clustered at the MTJ [r3]. Longstanding iliopsoas-related pain develops from repetitive hip flexion under load (kicking, sprinting, sit-ups, dance), which irritates the tendon and the iliopsoas bursa where they glide over the iliopectineal eminence and anterior hip capsule [r8].",
    sequence: [
      "The athlete sprints, or decelerates and pushes off to change direction, with the stance or trailing hip extended.",
      "At end-range hip extension the iliopsoas is lengthened and activates eccentrically to stop the extension.",
      "It then contracts forcefully to swing the thigh forward into flexion, the fastest change in demand.",
      "Force concentrates at the MTJ, where the iliacus and psoas fibres join their common tendon near the pelvic brim [r3].",
      "Fibres fail at the MTJ, usually as a low-grade (partial) strain with intramuscular bleeding.",
      "The athlete feels sharp, deep anterior groin or lower abdominal pain on the next stride or kick.",
      "Pain follows when lifting the knee, sprinting, kicking and going up stairs."
    ],
    variants: [
      { name: "Acute strain in change of direction", description: "Iliacus injuries were mostly sustained during change of direction [r3]." },
      { name: "Kicking and sprinting (rectus femoris vs iliopsoas)", description: "Kicking and sprinting more often injure the proximal rectus femoris tendon, which is the main differential for an acute hip flexor injury [r3]." },
      { name: "Longstanding overload (tendinopathy or bursitis)", description: "Repetitive loaded hip flexion causes gradual-onset deep anterior groin pain, sometimes with painful snapping as the tendon flicks over the iliopectineal eminence [r8]." },
      { name: "Lesser trochanter avulsion (adolescents)", description: "In skeletally immature athletes a forceful contraction can avulse the lesser trochanter apophysis instead of straining the muscle." }
    ]
  },

  anatomy: {
    text: "Psoas major arises from the T12–L5 vertebral bodies, discs and transverse processes. Iliacus arises from the iliac fossa. They converge into a common tendon that passes beneath the inguinal ligament, over the iliopectineal eminence and anterior hip capsule, to insert on the lesser trochanter. The iliopsoas bursa, the largest bursa around the hip, lies between the tendon and the capsule and may communicate with the hip joint. The femoral nerve lies in the groove between psoas and iliacus, lateral to the femoral artery. The iliopsoas is the most powerful hip flexor and swings the thigh forward in running and kicking. It also stabilises the femoral head anteriorly and contributes to lumbar stability [r8].",
    structures: [
      { name: "Iliacus and psoas major", role: "Primary hip flexors. They decelerate hip extension and accelerate the swing limb. Acute strains occur mainly at their MTJ [r3]." },
      { name: "Iliopsoas tendon", role: "Common tendon gliding over the iliopectineal eminence and anterior capsule to the lesser trochanter. It is the site of tendinopathy and snapping [r8]." },
      { name: "Iliopsoas bursa", role: "Reduces friction between tendon and capsule. It can become inflamed and may communicate with the hip joint [r8]." },
      { name: "Anterior hip capsule and labrum", role: "Lie directly deep to the iliopsoas. Intra-articular pathology often coexists with iliopsoas pain [r8]." },
      { name: "Femoral nerve", role: "Runs between psoas and iliacus. It can be irritated by a large haematoma or abscess." },
      { name: "Rectus femoris (direct and indirect heads)", role: "Two-joint hip flexor and the main differential for an acute anterior hip flexor injury [r3]." }
    ]
  },

  pathophysiology: {
    tissueDamage: "Acute iliopsoas strain is a strain-type muscle injury. Rapid lengthening of an activated muscle overstretches sarcomeres near the MTJ, the stiffness transition between muscle fibres and the common tendon. Partial fibre rupture follows, with intramuscular bleeding [r3,r9]. Most iliacus and psoas strains on MRI are at the MTJ, with only occasional tendon involvement. Tendinous injury is much more typical of rectus femoris [r3]. Healing follows the muscle sequence: inflammation and debris removal, satellite-cell regeneration with scar formation, then remodelling under progressive load [r9].\n\nLongstanding iliopsoas-related pain is a different process. Repetitive loaded hip flexion and the tendon's glide over the iliopectineal eminence produce tendinopathy-like changes and/or bursal irritation, sometimes with painful snapping [r8]. Because the iliopsoas lies directly over the anterior capsule and labrum, it may also be secondarily overloaded or reflexly guarded in hip-related groin pain. Persistent iliopsoas pain should therefore prompt a hip examination [r8].",
    structures: [
      { name: "Iliacus / psoas MTJ", effect: "Partial fibre disruption and intramuscular haemorrhage. This is the typical acute lesion [r3]." },
      { name: "Iliopsoas tendon", effect: "Tendinous injury is uncommon acutely. Tendinopathy-like change occurs in longstanding overload [r3,r8]." },
      { name: "Iliopsoas bursa", effect: "Inflammation and effusion (bursitis) with repetitive friction. It may communicate with a hip effusion [r8]." },
      { name: "Hip joint (capsule and labrum)", effect: "Frequently co-involved. Hip-related pathology can cause or maintain iliopsoas irritation [r8]." }
    ],
    muscles: [
      { name: "Iliopsoas", effect: "Pain inhibition reduces hip flexion strength and endurance. Protective guarding limits hip extension range on the modified Thomas test." },
      { name: "Rectus femoris and tensor fasciae latae", effect: "Compensatory hip flexors that may become overloaded during the recovery period." },
      { name: "Adductors and abdominals", effect: "Often co-involved in athletes with longstanding groin pain. Reduced squeeze-test strength is common in hip and groin pain [r11]." }
    ],
    cellular: [
      { phase: "Destruction & inflammation", timing: "0–3 days", description: "Fibre rupture at the MTJ and haematoma, followed by neutrophil then macrophage influx to clear necrotic tissue [r9]." },
      { phase: "Repair", timing: "3 days – 3 weeks", description: "Satellite cells regenerate myofibres while fibroblasts lay down a type III collagen scar and capillaries grow in [r9]." },
      { phase: "Remodelling", timing: "2–6+ weeks", description: "Scar matures and aligns, and regenerated fibres attach to it, guided by progressive loading [r9]." },
      { phase: "Tendon/bursal adaptation (longstanding)", timing: "6–12+ weeks", description: "Reactive tendon and bursal irritation settle with load modification, then capacity is rebuilt with progressive loading [r8]." }
    ],
    systems: [
      { system: "Nervous system", effect: "Deep, poorly localised anterior groin pain that often extends more medially than expected, which overlaps with other entities [r7]. A large haematoma can irritate the femoral nerve." },
      { system: "Musculoskeletal chain", effect: "Reduced hip extension alters running mechanics (shorter stride, increased lumbar extension). Hip joint pathology and lumbar spine dysfunction may feed into iliopsoas overload [r8]." },
      { system: "Vascular / inflammatory", effect: "Intramuscular bleeding in acute strains. Bursal effusion in longstanding cases, which may communicate with the hip joint [r8]." },
      { system: "Psychological / performance", effect: "Loss of sprint speed and kicking power. Uncertainty when the pain is deep and hard to localise." }
    ]
  },

  grading: null,

  timeframes: {
    summary: "Most acute iliacus and psoas MTJ strains are low grade and recover within 1–4 weeks, following muscle healing biology [r3,r9]. Longstanding iliopsoas tendon or bursal pain usually needs 6–12 weeks of load modification and progressive strengthening, and longer if hip pathology coexists [r8].",
    healing: [
      { phase: "Inflammation", startDay: 0, endDay: 3, description: "Fibre rupture, haematoma and inflammatory cell influx" },
      { phase: "Repair", startDay: 3, endDay: 21, description: "Satellite-cell regeneration and scar formation" },
      { phase: "Remodelling", startDay: 14, endDay: 60, description: "Scar alignment and fibre maturation under load" },
      { phase: "Longstanding tendon/bursal recovery", startDay: 0, endDay: 84, description: "Load modification, then progressive capacity building" }
    ],
    milestones: [
      { label: "Pain-free walking and stairs", day: 5 },
      { label: "Pain-free resisted hip flexion and jogging", day: 10, note: "Typical for a low-grade acute strain" },
      { label: "Full-speed sprinting and kicking", day: 21 },
      { label: "Return to sport (acute strain, typical)", day: 21, note: "Criteria-based" },
      { label: "Return to sport (longstanding pain, typical)", day: 70, note: "6–12 weeks" }
    ],
    returnToSport: "About 1–4 weeks for acute low-grade iliacus or psoas strains, and 6–12 weeks for longstanding tendon or bursal pain. These are typical clinical ranges. Progression is criteria-based (pain-free resisted hip flexion, stretch, sprinting and kicking)."
  },

  clinicalPresentation: {
    symptoms: [
      "Deep anterior groin or lower abdominal pain, sometimes felt more medially toward the adductors [r7]",
      "Acute: sudden pain during a sprint, change of direction or kick",
      "Pain lifting the knee (stairs, getting into a car, putting on socks)",
      "Pain with sprinting, kicking and sit-ups",
      "Longstanding: aching after activity, sometimes with a painful clunk or snap at the front of the hip"
    ],
    signs: [
      "Tenderness of the iliopsoas below the inguinal ligament lateral to the femoral artery, and/or through the lower abdominal wall [r1,r6]",
      "Pain on resisted hip flexion, often at 90° in sitting or with the hip in the last degrees of flexion [r1]",
      "Pain and/or reduced hip extension on the modified Thomas test [r1]",
      "Reduced hip flexion strength (hand-held dynamometry), interpreted with caution [r6]",
      "Possible palpable or audible snapping on moving the hip from flexion-abduction-external rotation to extension"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism: sudden onset during a sprint, change of direction or kick versus gradual onset with repetitive hip flexion [r3,r8]",
      "Location: anterior hip and groin, possibly medial [r7]; compare with adductor origin, inguinal canal and deep hip",
      "Mechanical hip symptoms (clicking, catching, locking), pain with sitting and deep flexion (hip-related groin pain) [r8]",
      "Lumbar pain or stiffness, and neurological symptoms in the anterior thigh (L1–L3, femoral nerve)",
      "Systemic features: fever, malaise, anticoagulant use, cancer history (psoas abscess, haematoma, pathological fracture)",
      "Training load, sprint and kick volume, and previous groin injuries [r10]"
    ],
    observation: ["Gait with reduced hip extension or an antalgic swing", "Standing posture: lumbar lordosis or hip held in slight flexion", "Swelling is rarely visible because the muscle lies deep"],
    palpation: [
      "Iliopsoas below the inguinal ligament, just lateral to the femoral artery pulse (avoid the neurovascular bundle) [r6]",
      "Iliacus and psoas through the relaxed lower abdominal wall with the hip flexed",
      "Lesser trochanter region (difficult to access; consider avulsion in adolescents)",
      "Adductor origin, inguinal canal and pubic symphysis to identify coexisting entities [r4]"
    ],
    rangeOfMotion: ["Modified Thomas test: hip extension range and pain [r1]", "Hip flexion, internal rotation, FADIR and FABER (hip-related screen)", "Lumbar spine range"],
    strength: [
      "Resisted hip flexion at 90° (sitting) and in supine: pain and force. Inter-examiner reliability of the iliopsoas strength test is poor, so rely on pain provocation and standardised dynamometry [r6]",
      "Adductor squeeze test and abdominal resistance (coexisting entities) [r11]",
      "Hip extension and abduction strength"
    ],
    neuro: ["Femoral nerve: knee extension strength, patellar reflex, anterior thigh sensation (if haematoma or abscess is suspected, or symptoms are neurogenic)"],
    functional: ["Straight-leg raise and supine 'hip flexion march' tolerance", "Running, sprinting and kicking with pain rating", "Lunge (rear-leg hip extension) for stretch-provoked pain"],
    specialTests: [
      {
        name: "Iliopsoas palpation",
        purpose: "Defining Doha criterion: iliopsoas tenderness",
        procedure: "Supine. Palpate just below the inguinal ligament, lateral to the femoral artery, and through the lower abdominal wall with the hip passively flexed to relax the abdominals.",
        positive: "Recognisable groin pain. In a reliability study, inter-observer agreement for the groin pain provocation tests (including iliopsoas pain tests) exceeded κ 0.60 in 8 of 10 tests [r6].",
        refs: ["r6"]
      },
      {
        name: "Resisted hip flexion",
        purpose: "Provoke iliopsoas pain (supports the diagnosis)",
        procedure: "Sitting with the hip at 90° (or supine with the hip flexed beyond 90°). The patient lifts the knee against the examiner's resistance.",
        positive: "Recognisable anterior groin pain [r1]. The iliopsoas strength test was the only examination test without acceptable inter-observer reliability, so record pain rather than estimated strength [r6].",
        refs: ["r6"]
      },
      {
        name: "Modified Thomas test (hip flexor stretch)",
        purpose: "Provoke iliopsoas pain on stretch and measure hip extension range",
        procedure: "The patient sits at the end of the couch, rolls back hugging the opposite knee to the chest, and lets the test leg hang. Measure the thigh angle and ask about pain.",
        positive: "Recognisable groin pain with stretch and/or reduced hip extension (thigh above horizontal) compared with the other side [r1].",
        refs: []
      }
    ],
    clinicalRules: [
      { name: "Doha agreement definition", description: "Iliopsoas-related groin pain = iliopsoas tenderness. More likely if there is pain on resisted hip flexion and/or pain on stretching the hip flexors [r1]. Classify and treat any coexisting entities." }
    ],
    outcomeMeasures: [
      { name: "Copenhagen Hip and Groin Outcome Score (HAGOS)", use: "Function and symptoms in active people with hip and groin pain [r12]" },
      { name: "Pain (NRS) on resisted hip flexion and modified Thomas test", use: "Repeated irritability measures" },
      { name: "Hand-held dynamometry of hip flexion (standardised set-up)", use: "Track strength recovery; use a fixed protocol given its limited reliability [r6]" }
    ],
    imaging: [
      { modality: "Ultrasound", indication: "Suspected bursitis, tendinopathy or snapping; to guide an injection", findings: "Bursal distension, tendon thickening, dynamic snapping of the tendon over the iliopectineal eminence [r8]" },
      { modality: "MRI (pelvis/hip)", indication: "Persisting or atypical pain, suspected intra-articular pathology, or elite athletes needing a precise diagnosis", findings: "MTJ oedema or haemorrhage in acute strain [r3]; bursal effusion; labral or chondral pathology; psoas abscess" },
      { modality: "Plain radiograph", indication: "Adolescents (lesser trochanter avulsion) or adults with suspected pathological fracture", findings: "Avulsed lesser trochanter apophysis, or an adult lesser trochanter avulsion suggesting underlying malignancy" }
    ]
  },

  differentials: [
    { name: "Quadriceps (rectus femoris) strain", id: "quadriceps-strain", distinguishing: "Kicking or sprinting injury with tenderness at the AIIS or proximal rectus femoris. Pain with resisted knee extension in hip extension [r3]." },
    { name: "Snapping hip syndrome (internal)", id: "snapping-hip-syndrome", distinguishing: "Audible or palpable clunk of the iliopsoas tendon moving from flexion-abduction-external rotation into extension [r8]." },
    { name: "Hip-related groin pain (FAI syndrome / labral tear)", id: "fai-syndrome", distinguishing: "Deep hip pain with clicking or catching, positive FADIR and reduced internal rotation [r8]." },
    { name: "Adductor-related groin pain", id: "adductor-related-groin-pain", distinguishing: "Adductor longus origin tenderness and pain on resisted adduction [r1]." },
    { name: "Inguinal-related groin pain", id: "inguinal-related-groin-pain", distinguishing: "Inguinal canal tenderness and pain with cough or resisted sit-up [r1]." },
    { name: "Pelvic apophyseal avulsion (adolescent)", id: "pelvic-apophyseal-avulsion", distinguishing: "Skeletally immature athlete with sudden pain and bony tenderness (lesser trochanter or AIIS). Seen on radiograph." },
    { name: "Femoral neck stress fracture", id: "femoral-neck-stress-fracture", distinguishing: "Insidious load-related groin pain, pain on hopping and end-range rotation, in endurance athletes. Needs MRI." },
    { name: "Upper lumbar referred pain (L1–L3)", distinguishing: "Pain reproduced by lumbar movement or testing, with dermatomal symptoms and no iliopsoas tenderness." }
  ],
  redFlags: [
    "Fever, malaise, a flexed hip held in guarding, pain on hip extension and/or back pain: suspect a psoas abscess. Arrange same-day medical review with bloods and imaging.",
    "An adult with an atraumatic lesser trochanter avulsion, or night pain with a cancer history: suspect a pathological fracture from metastasis. Arrange urgent imaging and medical referral.",
    "Groin pain with femoral nerve signs (quadriceps weakness, absent knee reflex, anterior thigh numbness) after trauma or on anticoagulants: suspect a retroperitoneal or iliacus haematoma. Send for urgent medical assessment.",
    "Right lower abdominal pain with fever, nausea or a positive psoas sign: exclude appendicitis urgently.",
    "Pain on hopping with deep groin pain in an endurance athlete: exclude femoral neck stress fracture with urgent MRI."
  ],

  management: {
    principles: "Management is exercise-based. For acute strains, a short period of relative rest is followed by early, pain-guided loading of the hip flexors, progressing from isometric to dynamic, end-range and high-velocity work, then sprinting and kicking [r9]. For longstanding pain, reduce the provocative load (sprint and kick volume, repetitive end-range flexion), then rebuild hip flexor capacity through range while treating coexisting adductor, abdominal and hip-joint components [r4,r8]. Rehabilitation that targets trunk–pelvis–hip control during running and change of direction has produced high rates of pain-free return across groin entities [r13]. Injections and surgery are for refractory tendinopathy, bursitis or snapping [r8].",
    medical: [
      { name: "Short-course analgesia / NSAIDs", description: "To control pain in the first days after an acute strain or during a flare of bursitis, so that loading can continue [r8,r9].", evidence: "limited", recommendation: "consider", refs: ["r8", "r9"] },
      { name: "Image-guided corticosteroid injection into the iliopsoas bursa or tendon sheath", description: "For persistent iliopsoas bursitis or tendinopathy despite rehabilitation. Used as an adjunct to enable loading [r8].", evidence: "limited", recommendation: "consider", refs: ["r8"] },
      { name: "Arthroscopic iliopsoas lengthening or release", description: "For refractory painful snapping or tendinopathy, usually with treatment of coexisting intra-articular pathology. Outcomes are similar across release sites, but there is a risk of hip flexor weakness [r8].", evidence: "limited", recommendation: "consider", refs: ["r8"] }
    ],
    physio: [
      { name: "Progressive hip flexor loading", description: "Isometric hip flexion (supine or sitting), then standing cable or band hip flexion and supine marching, then loaded end-range hip flexion and lunge-position eccentric control, then high-velocity hip flexion in sprinting and kicking. Progress by pain (≤3/10, settling within 24 hours).", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Early pain-guided loading after acute strain", description: "Short relative rest (1–3 days) followed by early loading promotes aligned muscle regeneration and limits dense scar formation [r9].", evidence: "limited", recommendation: "recommended", refs: ["r9"] },
      { name: "Intersegmental control, running and change-of-direction rehabilitation", description: "Trunk–pelvis–hip control during linear running and cutting. Associated with improved HAGOS and pain-free return in 73% of athletes with groin pain (mixed entities) [r13].", evidence: "limited", recommendation: "recommended", refs: ["r13"] },
      { name: "Address coexisting entities", description: "Assess and treat adductor-, inguinal- and hip-related contributors, which commonly coexist with iliopsoas-related pain [r4,r8].", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Aggressive hip flexor stretching in the acute phase", description: "Forceful end-range stretching (deep lunge stretches) can aggravate a fresh MTJ strain or an irritable tendon and bursa. Restore range gradually through loaded movement.", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] },
      { name: "Passive treatment or rest alone", description: "Rest settles symptoms but does not restore hip flexor capacity for sprinting and kicking. Symptoms tend to recur on return.", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] }
    ],
    education: [
      "The iliopsoas is the main muscle that lifts your knee. Sprinting, kicking and changing direction load it hardest.",
      "Most acute hip flexor strains settle within a few weeks with gradual loading.",
      "Longstanding pain is a load problem. Reduce sprinting and kicking volume for a period, then build strength back through the whole range.",
      "Groin problems often come in pairs. We will check your adductors, abdominals and hip joint too.",
      "See a doctor promptly if you develop fever, night pain or leg weakness."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based using pain on resisted hip flexion and the modified Thomas test, hip flexor strength (standardised dynamometry) and functional tolerance. Pain during exercise should stay ≤3/10 and settle within 24 hours. Acute strains usually move through stages 1–3 within 2–4 weeks [r9]. Longstanding tendon or bursal pain spends longer in stages 1–2 and needs attention to coexisting entities [r8]. Change-of-direction and sprint mechanics are integrated in the later stages [r13].",
    stages: [
      {
        name: "Settle & isometric loading",
        timeframe: "Days 0–7 (longstanding: weeks 0–3)",
        goals: ["Pain-free walking and stairs", "Pain-free isometric hip flexion", "Maintain fitness"],
        precautions: ["No sprinting, kicking or deep hip flexor stretching", "Reduce repetitive end-range flexion (sit-ups, deep squats) if irritable"],
        exercises: [
          { name: "Supine isometric hip flexion (knee into hand)", dosage: "5 × 10–30 s, 60–70% effort, daily", cues: "Push the knee into your hand without lifting the back" },
          { name: "Glute bridge", dosage: "3 × 12", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Dead bug (bent-knee hold)", dosage: "3 × 8 each side", figure: { pose: "ex-dead-bug", view: "lateral", props: ["mat"] } },
          { name: "Isometric adductor squeeze", dosage: "5 × 10–20 s" },
          { name: "Stationary bike (low resistance)", dosage: "15–30 min" }
        ],
        progressionCriteria: ["Pain-free resisted hip flexion at 90° sitting", "Pain ≤2/10 on modified Thomas test", "Normal gait"]
      },
      {
        name: "Dynamic strength through range",
        timeframe: "Weeks 1–3 (longstanding: weeks 2–6)",
        goals: ["Restore hip flexor strength through range", "Restore hip extension range", "Pain-free jogging"],
        precautions: ["Introduce end-range flexion and long-lever loading gradually"],
        exercises: [
          { name: "Straight-leg raise (progress with ankle weight)", dosage: "3 × 10–15", figure: { pose: "ex-straight-leg-raise", view: "lateral", props: ["mat"] } },
          { name: "Standing band or cable hip flexion", dosage: "3 × 10–12, slow return", cues: "Tall posture, no lumbar arching", figure: { pose: "ex-hip-abduction-standing", view: "lateral", props: ["resistance-band"] } },
          { name: "Split squat (rear-leg hip extension control)", dosage: "3 × 8–10", figure: { pose: "ex-split-squat", view: "lateral" } },
          { name: "Hip thrust", dosage: "3 × 8–12", figure: { pose: "ex-hip-thrust", view: "lateral", props: ["bench"] } },
          { name: "Jogging", dosage: "10–20 min, 60–70% effort" }
        ],
        progressionCriteria: ["Hip flexor strength ≥80% of the other side (same standardised test)", "Modified Thomas test symmetrical and pain-free", "Pain-free jogging for 20 minutes"]
      },
      {
        name: "Speed, change of direction & kicking",
        timeframe: "Weeks 2–4 (longstanding: weeks 5–10)",
        goals: ["High-velocity hip flexion", "Full-speed sprinting and change of direction", "Progressive kicking"],
        precautions: ["Increase sprint speed and kick distance stepwise"],
        exercises: [
          { name: "Loaded end-range hip flexion (seated knee lift above 90°)", dosage: "3 × 8–10 with an ankle weight", cues: "Hold 2 s at the top" },
          { name: "Lunge with lean (eccentric hip flexor control)", dosage: "3 × 8 each side", figure: { pose: "ex-lunge", view: "lateral" } },
          { name: "A-skips → acceleration → sprint progressions", dosage: "6–10 × 20–40 m at 70 → 90 → 100%", figure: { pose: "sprint-drive", view: "lateral" } },
          { name: "Change-of-direction drills (45° → 90°+, planned → reactive)", dosage: "2–3 sessions/week", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Graded kicking program", dosage: "Short passes → long kicks → shooting" }
        ],
        progressionCriteria: ["Pain-free maximal sprinting and change of direction", "Pain-free maximal kicking", "Hip flexor strength ≥90% of the other side"]
      },
      {
        name: "Return to sport",
        timeframe: "Weeks 3–4+ (longstanding: weeks 8–12)",
        goals: ["Full training, then match play", "Maintain hip flexor and adductor strength"],
        precautions: ["Monitor next-day symptoms after high sprint or kick loads"],
        exercises: [
          { name: "Full team training", dosage: "≥1 week before selection" },
          { name: "Hip flexor and adductor maintenance (end-range hip flexion, Copenhagen)", dosage: "1–2×/week", figure: { pose: "ex-copenhagen", view: "anterior", props: ["bench"] } },
          { name: "Sprint exposure", dosage: "Weekly high-speed running to maintain tolerance" }
        ],
        progressionCriteria: ["Full training without symptoms", "Athlete confident in sprinting and kicking"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No iliopsoas tenderness on palpation",
      "Pain-free resisted hip flexion and modified Thomas test [r1]",
      "Hip flexor strength ≥90% of the uninjured side (same standardised test) [r6]",
      "Pain-free maximal sprinting, change of direction and kicking",
      "Completion of full team training without next-day flare"
    ],
    tests: ["Resisted hip flexion (pain)", "Modified Thomas test", "Hand-held dynamometry hip flexion", "Sport-specific sprint, cutting and kicking tasks", "HAGOS"]
  },
  prognosis: "Acute iliacus and psoas strains are usually MTJ injuries with little tendon involvement and generally carry a good prognosis with return within a few weeks [r3]. Proximal rectus femoris injuries, which present similarly, more often involve tendon and may take longer, so differentiating them matters [r3]. Longstanding iliopsoas-related pain usually responds to load modification and progressive strengthening. Persistence suggests unrecognised hip-related pathology or other coexisting entities, which may need specialist assessment [r4,r8].",
  prevention: [
    "Build sprinting and kicking volume gradually, especially in preseason.",
    "Include hip flexor strength through range (including end-range hip flexion) and adductor strengthening in team programs.",
    "Address previous groin injury fully before return, because it is a risk factor for further groin injury [r10]."
  ],
  clinicalPearls: [
    "Use the Doha definition: iliopsoas tenderness plus pain on resisted hip flexion and/or stretch [r1].",
    "Iliopsoas pain often spreads medially, so do not mistake it for adductor pain without palpating both [r7].",
    "Differentiate it from proximal rectus femoris. Kicking and sprinting injuries are more often rectus femoris, change-of-direction injuries more often iliacus [r3].",
    "Record pain, not 'strength feel', on resisted hip flexion. Manual iliopsoas strength testing is unreliable [r6].",
    "Persistent iliopsoas irritation is a clue to look inside the hip: check FADIR, internal rotation and mechanical symptoms [r8].",
    "An adult lesser trochanter avulsion without major trauma is a pathological fracture until proven otherwise."
  ],
  related: ["adductor-related-groin-pain", "snapping-hip-syndrome", "quadriceps-strain", "fai-syndrome", "pelvic-apophyseal-avulsion", "adductor-longus-strain"],

  references: [
    { id: "r1", citation: "Weir A, Brukner P, Delahunt E, et al. Doha agreement meeting on terminology and definitions in groin pain in athletes. Br J Sports Med. 2015;49(12):768-74.", pmid: "26031643", doi: "10.1136/bjsports-2015-094869", type: "consensus-statement", year: 2015 },
    { id: "r2", citation: "Werner J, Hägglund M, Waldén M, et al. UEFA injury study: a prospective study of hip and groin injuries in professional football over seven consecutive seasons. Br J Sports Med. 2009;43(13):1036-40.", pmid: "19945984", doi: "10.1136/bjsm.2009.066944", type: "cohort", year: 2009 },
    { id: "r3", citation: "Serner A, Weir A, Tol JL, et al. Characteristics of acute groin injuries in the hip flexor muscles - a detailed MRI study in athletes. Scand J Med Sci Sports. 2018;28(2):677-85.", pmid: "28649793", doi: "10.1111/sms.12939", type: "cross-sectional", year: 2018 },
    { id: "r4", citation: "Taylor R, Vuckovic Z, Mosler A, et al. Multidisciplinary assessment of 100 athletes with groin pain using the Doha agreement: high prevalence of adductor-related groin pain in conjunction with multiple causes. Clin J Sport Med. 2018;28(4):364-9.", pmid: "28654441", doi: "10.1097/JSM.0000000000000469", type: "cross-sectional", year: 2018 },
    { id: "r5", citation: "Heijboer WMP, Weir A, Vuckovic Z, et al. Inter-examiner reliability of the Doha agreement meeting classification system of groin pain in male athletes. Scand J Med Sci Sports. 2023;33(2):189-96.", pmid: "36259124", doi: "10.1111/sms.14248", type: "diagnostic-accuracy", year: 2023 },
    { id: "r6", citation: "Hölmich P, Hölmich LR, Bjerg AM. Clinical examination of athletes with groin pain: an intraobserver and interobserver reliability study. Br J Sports Med. 2004;38(4):446-51.", pmid: "15273182", doi: "10.1136/bjsm.2003.004754", type: "diagnostic-accuracy", year: 2004 },
    { id: "r7", citation: "Serner A, Reboul G, Lichau O, et al. Digital body mapping of pain quality and distribution in athletes with longstanding groin pain. Sci Rep. 2022;12(1):9789.", pmid: "35697738", doi: "10.1038/s41598-022-13847-1", type: "cross-sectional", year: 2022 },
    { id: "r8", citation: "Anderson CN. Iliopsoas: pathology, diagnosis, and treatment. Clin Sports Med. 2016;35(3):419-33.", pmid: "27343394", doi: "10.1016/j.csm.2016.02.009", type: "narrative-review", year: 2016 },
    { id: "r9", citation: "Järvinen TA, Järvinen TL, Kääriäinen M, et al. Muscle injuries: biology and treatment. Am J Sports Med. 2005;33(5):745-64.", pmid: "15851777", doi: "10.1177/0363546505274714", type: "narrative-review", year: 2005 },
    { id: "r10", citation: "Whittaker JL, Small C, Maffey L, et al. Risk factors for groin injury in sport: an updated systematic review. Br J Sports Med. 2015;49(12):803-9.", pmid: "25833903", doi: "10.1136/bjsports-2014-094287", type: "systematic-review", year: 2015 },
    { id: "r11", citation: "Mosler AB, Agricola R, Weir A, et al. Which factors differentiate athletes with hip/groin pain from those without? A systematic review with meta-analysis. Br J Sports Med. 2015;49(12):810.", pmid: "26031646", doi: "10.1136/bjsports-2015-094602", type: "meta-analysis", year: 2015 },
    { id: "r12", citation: "Thorborg K, Hölmich P, Christensen R, et al. The Copenhagen Hip and Groin Outcome Score (HAGOS): development and validation according to the COSMIN checklist. Br J Sports Med. 2011;45(6):478-91.", pmid: "21478502", doi: "10.1136/bjsm.2010.080937", type: "cohort", year: 2011 },
    { id: "r13", citation: "King E, Franklyn-Miller A, Richter C, et al. Clinical and biomechanical outcomes of rehabilitation targeting intersegmental control in athletic groin pain: prospective cohort of 205 patients. Br J Sports Med. 2018;52(16):1054-62.", pmid: "29550754", doi: "10.1136/bjsports-2016-097089", type: "cohort", year: 2018 }
  ],

  animation: {
    title: "How an iliopsoas strain happens",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "lateral", environment: "pitch",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "sprint-drive", root: { x: -150 } },
          { t: 0.9, pose: "run-midstance", root: { x: -100 } },
          { t: 1.7, pose: "run-toe-off", joints: { hipR: -28, trunk: 4 }, root: { x: -60 } },
          { t: 2.4, pose: "run-toe-off", joints: { hipR: -12, kneeR: 80 }, root: { x: -45 }, ease: "in" },
          { t: 3.0, pose: "run-swing-late", joints: { hipR: 40, kneeR: 70 }, root: { x: -30 } },
          { t: 4.2, pose: "walk-heel-strike", joints: { hipR: 10, trunk: 10 }, root: { x: -15 } },
          { t: 5.4, pose: "stand", joints: { hipR: 10, kneeR: 10, trunk: 8, shoulderR: 20, elbowR: 80 }, root: { x: -5 } }
        ],
        forces: [
          { t: [1.4, 2.4], at: "thighR", dir: "backward", label: "Hip driven into extension", size: "m" },
          { t: [2.2, 3.1], at: "groinR", dir: "forward", label: "Iliopsoas brakes, then drives the swing", size: "l" }
        ],
        highlights: [{ t: [2.3, 6], at: "groinR" }],
        impacts: [{ t: 2.5, at: "groinR" }],
        slowmo: [{ t: [1.9, 2.9], rate: 0.3 }],
        captions: [
          { t: 0, text: "A player accelerates hard, then pushes off to change direction." },
          { t: 1.6, text: "At toe-off the hip is fully extended, so the iliopsoas is long and braking that extension." },
          { t: 2.3, text: "It must then fire explosively to swing the thigh forward, the fastest switch in demand." },
          { t: 3.0, text: "Fibres fail where the iliacus and psoas join their common tendon, causing deep anterior groin pain." },
          { t: 4.3, text: "Lifting the knee now hurts: stairs, sprinting and kicking are painful." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "groinR",
        captions: [{ t: 0, text: "Zooming into the front of the right hip." }]
      },
      {
        type: "closeup", label: "Iliopsoas", duration: 10, scene: "hip-anterior",
        actions: [
          { t: 0, do: "highlight", target: "iliopsoas" },
          { t: 0.3, do: "label", target: "iliopsoas", text: "Iliopsoas (iliacus + psoas)" },
          { t: 1.0, do: "arrow", at: "iliopectinealEminence", dir: "inferior", label: "Rapid lengthening", size: "m" },
          { t: 1.2, do: "stretch", target: "iliopsoas", amount: 0.25, dur: 1.0 },
          { t: 2.4, do: "contract", target: "iliopsoas", amount: 0.3, dur: 0.4 },
          { t: 2.7, do: "strain", target: "iliopsoas", grade: 1, at: 0.6 },
          { t: 2.7, do: "impact", at: "iliopectinealEminence" },
          { t: 3.2, do: "label", target: "iliopsoasTendon", text: "Strain at the musculotendinous junction" },
          { t: 4.2, do: "haematoma", target: "iliopsoas", at: 0.6 },
          { t: 5.0, do: "pain", at: "iliopectinealEminence" },
          { t: 6.0, do: "highlight", target: "iliopsoasBursa" },
          { t: 6.2, do: "compress", target: "iliopsoasBursa", amount: 0.4 },
          { t: 6.4, do: "inflame", target: "iliopsoasBursa", amount: 0.5 },
          { t: 6.6, do: "label", target: "iliopsoasBursa", text: "Longstanding: tendon and bursal irritation" },
          { t: 7.6, do: "camera", at: "iliopectinealEminence", zoom: 1.6, dur: 1 },
          { t: 9.2, do: "camera", zoom: 1, dur: 0.7 }
        ],
        captions: [
          { t: 0, text: "Iliacus and psoas join into one tendon that crosses the front of the hip to the lesser trochanter." },
          { t: 1.1, text: "In hip extension the muscle is stretched just as it starts to contract hard." },
          { t: 2.6, text: "Fibres tear where muscle joins tendon, the typical acute iliacus and psoas injury on MRI." },
          { t: 4.2, text: "Bleeding and guarding cause deep, sometimes medial, groin pain." },
          { t: 6.0, text: "With repetitive load, the tendon and the bursa beneath it can become irritated instead." },
          { t: 7.8, text: "Diagnosis: iliopsoas tenderness, pain on resisted hip flexion and pain on the stretch test." }
        ]
      },
      {
        type: "micro", label: "Muscle healing", duration: 9, tissue: "muscle",
        stages: [
          { t: 0, stage: "healthy" }, { t: 0.9, stage: "eccentric-overstretch" }, { t: 2.0, stage: "sarcomere-disruption" },
          { t: 3.2, stage: "haematoma" }, { t: 4.4, stage: "inflammation" }, { t: 5.6, stage: "satellite-activation" },
          { t: 6.8, stage: "regeneration" }, { t: 8.0, stage: "scar" }
        ],
        timeLabels: [{ t: 4.4, text: "Days 0–3" }, { t: 5.6, text: "Days 3–10" }, { t: 6.8, text: "Weeks 1–3" }, { t: 8.0, text: "Weeks 3+" }],
        captions: [
          { t: 0, text: "Healthy iliopsoas fibres: sarcomeres in series near the junction with the tendon." },
          { t: 0.9, text: "Stretched while contracting, the weakest sarcomeres overstretch." },
          { t: 2.0, text: "Overstretched sarcomeres and fibres rupture near the tendon junction." },
          { t: 3.2, text: "Small vessels bleed into the gap." },
          { t: 4.4, text: "Inflammatory cells clear damaged fibre ends." },
          { t: 5.6, text: "Satellite cells activate to rebuild the fibres." },
          { t: 6.8, text: "New fibres regenerate, guided by early, progressive loading." },
          { t: 8.0, text: "A small scar remains. Strength through full range helps it align with the load." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL2" }
};
