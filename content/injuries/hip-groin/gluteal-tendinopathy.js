// Gluteal tendinopathy (greater trochanteric pain syndrome) — LL2.
export default {
  id: "gluteal-tendinopathy",
  name: "Gluteal tendinopathy (greater trochanteric pain syndrome)",
  shortName: "Gluteal tendinopathy",
  aka: ["greater trochanteric pain syndrome", "GTPS", "gluteus medius tendinopathy", "gluteus medius and minimus tendinopathy", "lateral hip pain", "trochanteric bursitis", "lateral hip tendinopathy", "hip abductor tendinopathy"],
  region: "hip-groin",
  tissues: ["tendon", "bursa"],
  onset: "gradual",
  mechanismType: ["overuse", "compression"],
  populations: ["women in mid-life and after menopause", "adults aged 40–70 years", "runners and walkers", "people with knee osteoarthritis or low back pain"],
  sports: ["running", "walking", "hiking", "tennis", "dance", "australian football"],
  urgency: "routine",
  summary: "Persistent lateral hip pain from overload and compression of the gluteus medius and minimus tendons under the iliotibial band, usually in mid-life women, provoked by single-leg loading, hip adduction and side-lying.",
  keyFacts: [
    { label: "Typical recovery", value: "Months. In the LEAP trial, 8 weeks of education plus exercise gave success in 51 of 66 people, and 51 of 65 at 52 weeks" },
    { label: "Return to sport", value: "Criteria-based: pain-free single-leg stance and stairs, abductor strength, then graded walking, running or sport" },
    { label: "Key test", value: "30-s single-leg stance reproducing lateral hip pain (sensitivity 100%, specificity 97% in a small MRI-confirmed sample); FABER, palpation and resisted abduction also useful" },
    { label: "Imaging", value: "Not needed to diagnose. Tendon change on MRI is common in painless hips, and bursitis is present in only a minority" },
    { label: "Peak age", value: "Mid-life. Mean age 54.8 years in the LEAP trial (82% women)" },
    { label: "Incidence", value: "Prevalence in adults aged 50–79: unilateral GTPS 15.0% in women and 6.6% in men" }
  ],
  overview: "Gluteal tendinopathy, also called greater trochanteric pain syndrome (GTPS), is a persistent pain condition of the gluteus medius and minimus tendons where they attach to the greater trochanter. Tendinopathy of these tendons is now recognised as a primary local source of lateral hip pain. It mostly occurs in mid-life, in athletes and in people who do not exercise regularly, and it affects females more than males [r1]. It interferes with sleep (side-lying) and weight-bearing tasks [r1]. It is a tendinopathy, not a bursitis: bursitis was present in a minority of patients with GTPS on ultrasound, while gluteal tendinosis and a thickened iliotibial band (ITB) were more frequent [r2].\n\nThe combination of excessive compression and high tensile load is thought to be most damaging to the tendon, and excessive hip adduction is a key factor, because it presses the tendons against the greater trochanter beneath the ITB [r1]. In the LEAP randomised trial of 204 people, a physiotherapist-led programme of load management education plus exercise gave better global improvement than a single corticosteroid injection or a wait-and-see approach at 8 weeks, and better global improvement than injection at 52 weeks [r3]. Education that reduces tendon compression, with graded exercise, is the first-line approach [r4].",

  epidemiology: {
    text: "In a population-based study of 3026 community-dwelling adults aged 50–79 years, the prevalence of unilateral GTPS was 15.0% and of bilateral GTPS 8.5% in women, against 6.6% and 1.9% in men. The odds ratio for women was 3.37 (95% CI 2.67–4.25) [r5]. In US military servicemembers the overall incidence was 2.03 per 1000 person-years, with an adjusted incidence rate ratio of 5.03 for women and 2.81 for those aged 40 or older compared with those aged 25–29 [r6]. In the LEAP trial, participants were aged 35–70 years, 167 of 204 were women and the mean age was 54.8 years [r3]. The condition is described as most common in females aged 40–60 years [r7]. A population study cannot separate tendinopathy from other causes of lateral hip pain, because GTPS was defined by tenderness at the greater trochanter [r5].",
    riskFactors: {
      intrinsic: [
        "Female sex (OR 3.37 in a population study of adults aged 50–79) [r5,r6]",
        "Age in mid-life, from about 40 years [r6,r1]",
        "ITB tenderness (OR 1.72), ipsilateral knee osteoarthritis (OR 3.47), contralateral knee osteoarthritis (OR 1.74) and low back pain (OR 2.79) [r5]",
        "Excessive hip adduction, with a greater hip adduction moment and greater contralateral pelvic drop and trunk lean in walking and stair climbing (a biomechanical difference, not proven to be a cause) [r8,r9,r1]",
        "Body mass index was not associated with GTPS in the population study (OR 1.10, 95% CI 0.80–1.52 for BMI of 30 or more) [r5]"
      ],
      extrinsic: [
        "Postures and activities that press the tendon against the greater trochanter, such as standing with the weight on one hip, crossing the legs and lying on the painful side (commonly reported aggravating factors) [r1]",
        "Single-leg weight-bearing tasks such as walking and stair climbing [r8,r9]",
        "Sudden increases in walking, running or loaded hip-abductor work (load-capacity mismatch) [r10]",
        "Occupational and recreational tasks that involve repeated single-leg loading (clinical reasoning)"
      ]
    }
  },

  mechanism: {
    summary: "There is no single injury moment. The gluteus medius and minimus tendons run over the greater trochanter and are covered by the ITB. When the hip drifts into adduction, for example in single-leg stance with the pelvis dropping on the opposite side, the ITB presses the tendons against the trochanter. The tendons are then loaded by both compression and tension, which is thought to be most damaging [r1]. Individuals with gluteal tendinopathy have a greater hip adduction moment in walking and stair climbing and altered trunk and pelvic positions [r8,r9].",
    sequence: [
      "In single-leg stance, in walking and in stair climbing, the hip abductors must hold the pelvis level over the stance leg [r8].",
      "If the pelvis drops on the opposite side or the trunk leans, the hip moves into adduction and the external hip adduction moment increases [r8,r9].",
      "The ITB and gluteal aponeurosis tighten over the greater trochanter and press the gluteus medius and minimus tendons against the bone, adding compression to the tensile load [r1].",
      "The tendons do not adapt as fast as the repeated loading: tenocytes respond and the matrix swells, giving a reactive tendon [r10].",
      "With continued overload, the tendon becomes disorganised and painful where it attaches to the trochanter (disrepair, then degenerative change) [r10,r11].",
      "Compressive postures (crossing the legs, hanging on one hip, lying on the painful side) now provoke pain at lower thresholds, and sleep is disturbed [r1].",
      "Pain also appears with single-leg stance, stairs and walking, and the gluteal muscles can lose bulk, mainly gluteus minimus [r12]."
    ],
    variants: [
      { name: "Compression-dominant presentation", description: "Pain mainly with side-lying, crossed-leg sitting and hip-hanging postures. These press the ITB over the tendons [r1]." },
      { name: "Tension-dominant (loading) presentation", description: "Pain mainly with walking, stairs, running and single-leg loading, where the gluteal tendons carry high tensile load and the hip adduction moment is greater [r8,r9]." },
      { name: "Tendinopathy with partial or full-thickness tendon tear", description: "MRI in women with GTPS showed gluteal tendon change from mild tendinosis through partial tears to full-thickness tears [r13]. In 17 people with refractory GTPS and MRI-documented tendinopathy or bursitis, tearing was seen in 15 [r14]." },
      { name: "Secondary bursal irritation", description: "Bursitis was found on ultrasound in a minority of people with GTPS (20.2% of 877), so treat the bursa as a bystander and not as the primary problem [r2]." }
    ]
  },

  anatomy: {
    text: "The gluteus medius tendon inserts mainly on the lateral facet and the superoposterior facet of the greater trochanter, and the gluteus minimus tendon inserts on the anterior facet. The ITB, with the gluteal aponeurosis, and gluteus maximus lie superficial to the trochanter. The trochanteric (subgluteus maximus) bursa and the subgluteus medius bursa sit between the tendons and the overlying tissue. Gluteus medius and minimus abduct the hip and, in single-leg stance, stabilise the pelvis in the frontal plane. The greater trochanter acts as a lever, so hip adduction wraps the ITB over the tendons and increases compression. The tensor fasciae latae feeds the ITB.",
    structures: [
      { name: "Gluteus medius tendon", role: "Inserts on the lateral facet of the greater trochanter. The usual site of tendinopathy and tears, loaded in single-leg stance [r1,r7]" },
      { name: "Gluteus minimus tendon", role: "Inserts on the anterior facet. Often involved with the medius tendon, and its muscle belly is the one that atrophies most on MRI [r12]" },
      { name: "Iliotibial band and tensor fasciae latae", role: "Pass over the greater trochanter, press on the tendons with hip adduction, and are thickened in some patients (28.5% on ultrasound) [r2]" },
      { name: "Trochanteric and subgluteus medius bursae", role: "Cushion the tendons. Bursitis was found in a minority of GTPS patients (20.2%) [r2]" },
      { name: "Greater trochanter", role: "The bony lever and the tendon enthesis. Tenderness here defines GTPS clinically [r5]" },
      { name: "Gluteus maximus", role: "Overlies the area; its ITB insertion adds to the lateral tension" }
    ]
  },

  pathophysiology: {
    tissueDamage: "Gluteal tendinopathy is a failure of the tendon to adapt to load, not a rupture. In the continuum model, repeated overload of a tendon that lacks capacity produces a reactive response, then disrepair with disorganised collagen and matrix, and in some people degenerative change [r10]. Staging by structure alone is too simple for what is mainly a pain condition, so pain, function and structure should be read together [r11]. Mechanical loading drives the biological processes within a tendon, and excessive compression with high tensile load is thought to be the most damaging combination. The available evidence suggests that joint position (particularly excessive hip adduction), muscle and bone elements are the key factors [r1].\n\nStructure and symptoms are only loosely related. In 28 women with GTPS and 18 asymptomatic women, all symptomatic women and 88% of the asymptomatic women had gluteal tendon pathology on MRI, ranging from mild tendinosis to full-thickness tear [r13]. In 40 patients with lateral hip pain, MRI showed gluteus medius tendon pathology, bursitis, osteoarthritis and gluteal muscle atrophy (mainly gluteus minimus), and abnormalities were also found in asymptomatic hips [r12]. On ultrasound in 877 patients with GTPS, 49.9% had gluteal tendinosis, 0.5% had tendon tears, 28.5% had a thickened ITB and only 20.2% had bursitis [r2].",
    structures: [
      { name: "Gluteus medius tendon", effect: "Reactive swelling, then disorganised collagen and, in some people, partial tears at the lateral facet [r10,r13]" },
      { name: "Gluteus minimus tendon", effect: "Involved with the medius tendon in many patients, with atrophy of the muscle belly on MRI [r12]" },
      { name: "Iliotibial band", effect: "Thickened in 28.5% on ultrasound. Presses on the tendons in hip adduction [r2,r1]" },
      { name: "Trochanteric bursa", effect: "A secondary finding in a minority (20.2% on ultrasound), not the main lesion [r2]" },
      { name: "Hip joint and lumbar spine", effect: "Knee osteoarthritis and low back pain are associated with GTPS, which points to a whole-limb link [r5]" }
    ],
    muscles: [
      { name: "Gluteus medius and minimus", effect: "Atrophy, mainly of gluteus minimus, was seen on MRI in patients with lateral hip pain [r12]. The abductors may be unable to hold the pelvis level, which increases the adduction moment (clinical reasoning) [r8]." },
      { name: "Tensor fasciae latae and gluteus maximus", effect: "Increase tension in the ITB over the trochanter and so the compressive load on the tendons [r1]." },
      { name: "Trunk and lateral pelvic control", effect: "Greater contralateral trunk lean and pelvic drop in walking and stairs alter the frontal-plane moment at the hip [r8,r9]." }
    ],
    cellular: [
      { phase: "Reactive response", timing: "Days to weeks after overload", description: "Tenocytes activate and produce large proteoglycans. The tendon swells but its collagen stays intact [r10]." },
      { phase: "Tendon disrepair", timing: "Weeks to months", description: "Cell number and matrix production rise as the tendon attempts repair. The collagen and matrix become disorganised [r10]." },
      { phase: "Degenerative tendinopathy", timing: "Months to years", description: "Areas of disorganised matrix. MRI can show partial or full-thickness tears in some women with GTPS [r10,r13]." },
      { phase: "Load adaptation", timing: "Weeks to months of progressive loading", description: "Progressive loading and compression management allow the tendon to adapt. In the LEAP trial improvement continued to 52 weeks [r3]." }
    ],
    systems: [
      { system: "Musculoskeletal chain", effect: "Knee osteoarthritis (OR 3.47 ipsilateral) and low back pain (OR 2.79) were associated with GTPS, and the hip adduction moment is greater in walking and stairs [r5,r8]." },
      { system: "Sleep and daily function", effect: "Side-lying pain interferes with sleep. Bilateral GTPS was associated with slower 20-m walk and chair-stand times [r1,r5]." },
      { system: "Endocrine / ageing", effect: "The condition is more common in women in mid-life and later (OR 3.37 for women) [r5]. Whether hormonal change alters tendon capacity was not established in the sources reviewed, so do not explain it to patients as a proven hormonal effect." },
      { system: "Pain behaviour and psychological", effect: "The wait-and-see group also improved between 8 and 52 weeks in LEAP (global success 20/68 to 31/60), so some natural improvement occurs [r3]. In another trial, adding an exercise programme to comprehensive education gave no extra effect on intention-to-treat analysis, so education about compression and activity modification may carry much of the effect [r15]." }
    ]
  },

  grading: {
    system: "Tendinopathy continuum (Cook and Purdam) with the gluteal tendon MRI categories used in research [r10,r11,r13]",
    grades: [
      { grade: "Reactive tendinopathy", description: "Short-term adaptive response to acute overload: the tendon swells but its collagen structure is intact [r10].", prognosis: "Settles with load adjustment and compression management" },
      { grade: "Tendon disrepair", description: "Attempted repair with disorganised collagen and matrix if overload continues [r10].", prognosis: "Responds to progressive loading, and some change can partly reverse" },
      { grade: "Degenerative tendinopathy", description: "Disorganised matrix, which on MRI is seen as mild or moderate tendinosis [r10,r13].", prognosis: "Structure rarely normalises, but capacity can be rebuilt and pain reduced" },
      { grade: "Partial or full-thickness tear", description: "MRI categories of moderate tendinosis or partial tear, and full-thickness tear, used in a study of GTPS in women [r13].", prognosis: "Tears were seen in 15 of 17 people with refractory GTPS [r14]. A tear does not by itself predict symptoms, because MRI changes occur in painless hips [r13,r12]." }
    ]
  },

  timeframes: {
    summary: "The continuum describes load history, not a calendar, so the stage durations below are illustrative and overlap. In the LEAP trial, 14 sessions over 8 weeks produced better global improvement than injection or wait and see at 8 weeks, and the education-plus-exercise group remained better than injection at 52 weeks [r3]. Recovery is usually measured in months.",
    healing: [
      { phase: "Reactive response to overload", startDay: 0, endDay: 21, description: "Tenocyte activation and matrix swelling after a load spike; settles with load adjustment [r10]" },
      { phase: "Tendon disrepair", startDay: 14, endDay: 90, description: "Attempted repair with disorganised collagen and matrix if overload continues [r10]" },
      { phase: "Degenerative change", startDay: 60, endDay: 365, description: "Disorganised matrix in chronic overload; partial tears can be present [r10,r13]" },
      { phase: "Load adaptation with education and progressive exercise", startDay: 0, endDay: 365, description: "In LEAP, outcomes were measured at 8 and 52 weeks after a programme of 14 sessions over 8 weeks [r3]" }
    ],
    milestones: [
      { label: "Education and compression management started", day: 1, note: "Part of the LEAP programme and the Ganderton programme [r3,r15]" },
      { label: "Corticosteroid injection peak benefit", day: 28, note: "In Rompe's trial the injection group had 75% success at 1 month against 7% for home training and 13% for shockwave [r16]" },
      { label: "Primary outcome point of LEAP", day: 56, note: "Success in 51/66 education plus exercise, 38/65 injection and 20/68 wait and see; mean pain 1.5, 2.7 and 3.8 [r3]" },
      { label: "Radial shockwave and home training overtake injection", day: 120, note: "At 4 months success was 68% for shockwave, 41% for home training and 51% for injection [r16]" },
      { label: "One-year outcome", day: 364, note: "LEAP success at 52 weeks: 51/65 education plus exercise, 36/63 injection and 31/60 wait and see [r3]" }
    ],
    returnToSport: "Criteria-based. Many people with gluteal tendinopathy are not athletes, so the goal is often pain-free walking, stairs, sleep and recreational running. At 52 weeks, 51 of 65 participants in the LEAP education-plus-exercise group reported success [r3]. No validated return-to-sport criteria were identified."
  },

  clinicalPresentation: {
    symptoms: [
      "Pain over the lateral hip and greater trochanter, often for months, which can spread down the lateral thigh (clinical presentation) [r1,r3]",
      "Pain with weight-bearing tasks such as walking, stairs, getting out of a low chair and standing on one leg [r1,r9]",
      "Pain lying on the affected side, which disturbs sleep, and sometimes on the other side too [r1]",
      "Pain provoked by crossing the legs, standing with the weight on one hip, and sitting in a low chair (clinical presentation)",
      "Pain with running or hill walking in more active people"
    ],
    signs: [
      "Tenderness over the greater trochanter [r5]",
      "Pain on a 30-second single-leg stance [r14]",
      "Pain on resisted hip abduction and on the resisted external derotation test, and lateral pain on the FABER test [r13]",
      "Pelvic drop or trunk lean (Trendelenburg pattern) in single-leg stance or walking [r8]",
      "Normal hip joint range of motion without groin pain, which separates the condition from hip joint disease (clinical presentation)"
    ]
  },

  assessment: {
    subjective: [
      "Pain location, duration and aggravating tasks: single-leg stance, stairs, crossed legs, side-lying and sleep disturbance [r1]",
      "Age, sex and menopausal status. The condition is most common in women in mid-life [r5,r7]",
      "Comorbid knee osteoarthritis, low back pain and ITB pain, which are associated with GTPS [r5]",
      "Activity and load history, including walking and running volume and recent changes",
      "Previous treatment, including any corticosteroid injection and its effect, and the exercise actually done [r3]",
      "Red flags: night or constant pain, trauma or a fall, weight loss, fever (see below)"
    ],
    observation: [
      "Standing posture: habitual weight on one leg and the hip-hanging posture",
      "Gait: contralateral pelvic drop and trunk lean in stance [r8]",
      "Single-leg stance and single-leg squat: pelvic control and hip adduction [r9]",
      "Gluteal bulk: asymmetry of the buttock (gluteus minimus atrophy is seen on MRI) [r12]"
    ],
    palpation: [
      "Greater trochanter and its facets: tenderness reproducing the familiar pain [r13,r5]",
      "ITB tenderness over and below the trochanter, which is associated with GTPS [r5]",
      "Palpate the lateral iliac crest, the sacroiliac region and the lumbar spine to exclude other sources"
    ],
    rangeOfMotion: [
      "Hip flexion and internal and external rotation to exclude hip joint disease. In the population study, hip internal rotation did not differ between GTPS and non-GTPS hips [r5]",
      "Lumbar range of motion and a screen for referred pain"
    ],
    strength: [
      "Resisted hip abduction (side-lying or standing): pain and strength, which was one of the most accurate tests in women [r13]",
      "Isometric abductor strength by hand-held dynamometry compared with the other side (clinical convention)",
      "Hip extensor, quadriceps and trunk strength"
    ],
    neuro: [
      "Slump test and straight-leg raise if there is posterior or radiating leg pain",
      "Lower-limb neurological examination if lumbar referral is suspected"
    ],
    functional: [
      "30-second single-leg stance on the painful side: onset of pain and pelvic control [r14]",
      "Single-leg squat, step-down and stair climbing: pelvic control and pain [r9]",
      "20-m walk and chair-stand times, which were slower in bilateral GTPS [r5]",
      "Sleep position tolerance and side-lying pain"
    ],
    specialTests: [
      { name: "Single-leg stance test (30 seconds)", purpose: "Reproduce lateral hip pain with the tendon compressed and loaded", procedure: "The patient stands on the painful leg only, with the other foot just off the ground, for up to 30 seconds. Note the time to pain onset and pelvic control.", positive: "Reproduction of pain similar to the spontaneous lateral hip pain. The study sample was small (17 patients with refractory GTPS, mean age 68 years, MRI as the reference standard), so these figures are likely to be optimistic. In a study of women, the test was one of 10 tests, and it was not among those with the highest accuracy [r13].", sensitivity: "100% (17 patients with refractory GTPS)", specificity: "97.3% (matched controls without hip pain)", refs: ["r14", "r13"] },
      { name: "Resisted external derotation test", purpose: "Provoke the tendon in compression and tension", procedure: "Supine with the hip and knee flexed to 90°, the examiner holds the hip in external rotation and the patient resists as the examiner attempts to derotate the leg; the test is repeated prone with the hip extended [r14].", positive: "Reproduction of the familiar lateral hip pain. It was among the tests with the highest diagnostic accuracy in women [r13].", sensitivity: "88% (supine test, 17 patients with refractory GTPS)", specificity: "97.3%", refs: ["r14", "r13"] },
      { name: "FABER (Patrick) test", purpose: "Provoke the gluteal tendons in a flexed, abducted and externally rotated position", procedure: "Supine, the ankle of the painful leg rests on the opposite knee. The examiner gently presses the knee towards the couch.", positive: "Lateral hip pain. Groin pain points to a hip joint source. The FABER test had one of the highest diagnostic accuracies among 10 tests in women (sensitivity and specificity figures were not available in the abstract) [r13].", refs: ["r13"] },
      { name: "Palpation of the greater trochanter", purpose: "Find the point of tenderness that matches the patient's pain", procedure: "With the patient side-lying and the hip relaxed, palpate the trochanter and its facets with moderate pressure.", positive: "Tenderness that reproduces the familiar pain. Tenderness alone is not specific, because trochanteric tenderness defined GTPS in a population study [r5]. In women the test was one of the most accurate of 10 tests [r13].", refs: ["r13", "r5"] },
      { name: "Resisted hip abduction", purpose: "Load the gluteus medius and minimus tendons in tension", procedure: "Side-lying, the patient lifts the top leg into abduction against resistance, or presses isometrically against the examiner's hand.", positive: "Lateral hip pain or weakness. It was one of the most accurate tests of 10 in women [r13].", refs: ["r13"] }
    ],
    clinicalRules: [
      { name: "Test battery combining compressive and tensile loads", description: "There is no consensus on which test is best. Grimaldi and colleagues propose that a battery of provocative tests combining compressive and tensile loads is currently best practice [r1]." },
      { name: "Clinical diagnosis without imaging", description: "Tendinopathy is a clinical diagnosis that can most often be made from the interview and pain provocation tests, without the need for imaging [r4]. Clinical-test figures are imprecise, and a study of 40 patients found no firm conclusions about the diagnostic utility of clinical tests against MRI [r12]." },
      { name: "Inclusion criteria used in the LEAP trial", description: "Lateral hip pain for more than 3 months, pain of at least 4/10, aged 35–70 years, and gluteal tendinopathy confirmed by clinical diagnosis and MRI [r3]. This describes a trial population, not a diagnostic rule." }
    ],
    outcomeMeasures: [
      { name: "VISA-G (Victorian Institute of Sport Assessment, gluteal tendons)", use: "Symptoms, function and sport. A systematic review found moderate-quality evidence for sufficient VISA-G reliability, and high-quality evidence of sufficient construct validity for all VISA questionnaires [r17]. It was the primary outcome in the Ganderton RCT [r15]." },
      { name: "Global rating of change (11-point scale) and pain numerical rating scale", use: "Primary outcomes of the LEAP trial, at 8 and 52 weeks [r3]" },
      { name: "Lateral hip pain questionnaire, HOOS and Oxford Hip Score", use: "Secondary outcomes in the trial of gluteal loading versus sham exercise in postmenopausal women [r15]" },
      { name: "20-m walk and chair-stand times, single-leg stance time to pain", use: "Functional performance. Walk and chair-stand times were slower in bilateral GTPS [r5]" }
    ],
    imaging: [
      { modality: "Ultrasound", indication: "Uncertain diagnosis, suspected tear, or before an injection", findings: "In 877 patients with GTPS: gluteal tendinosis in 49.9%, tendon tears in 0.5%, thickened ITB in 28.5% and bursitis in 20.2% [r2]." },
      { modality: "MRI", indication: "Atypical presentation, suspected tear, suspected stress fracture or hip joint disease, or surgical planning", findings: "Tendinosis, partial or full-thickness tears, gluteal muscle atrophy and bursitis. Tendon pathology was seen in all symptomatic and 88% of asymptomatic women, so interpret with the clinical picture [r13,r12]." },
      { modality: "Plain radiograph", indication: "To exclude hip osteoarthritis or other bony pathology, especially if there is groin pain or reduced hip rotation", findings: "Usually normal in gluteal tendinopathy. A study of refractory GTPS required no hip joint arthropathy on radiograph [r14]." }
    ]
  },

  differentials: [
    { name: "Hip osteoarthritis or other hip joint pathology", distinguishing: "Groin pain, restricted and painful hip internal rotation, and radiographic change. Lateral pain with a normal hip examination suggests gluteal tendinopathy [r14,r5]." },
    { name: "Femoroacetabular impingement syndrome", id: "fai-syndrome", distinguishing: "Groin or anterolateral pain, pain with deep flexion and internal rotation, and a positive FADIR test; no focal tenderness at the greater trochanter." },
    { name: "Acetabular labral tear", id: "hip-labral-tear", distinguishing: "Catching, clicking or locking with groin pain and positive impingement tests; tenderness at the trochanter is not the main finding." },
    { name: "Iliotibial band syndrome and external snapping hip", id: "itb-syndrome", distinguishing: "ITB pain is usually at the lateral knee. External snapping hip causes a visible or audible snap over the trochanter on flexion and extension." },
    { name: "Deep gluteal syndrome", id: "deep-gluteal-syndrome", distinguishing: "Buttock pain with sciatic-type symptoms, worse with sitting; tenderness is in the sciatic notch region rather than at the trochanter." },
    { name: "Lumbar radicular or referred pain", id: "lumbar-disc-herniation", distinguishing: "Back pain, neural symptoms below the knee and positive slump or straight-leg raise; no focal trochanteric tenderness." },
    { name: "Femoral neck stress fracture", id: "femoral-neck-stress-fracture", distinguishing: "Groin or lateral hip pain with weight-bearing, night pain and hop-test pain, especially in runners and in people with low bone density. MRI shows bone oedema." },
    { name: "Isolated trochanteric bursitis or septic bursitis", distinguishing: "Primary bursitis is uncommon: only 20.2% of 877 GTPS patients had bursitis on ultrasound [r2]. Redness, warmth and fever suggest septic bursitis." }
  ],
  redFlags: [
    "A fall or injury with inability to weight-bear or severe hip pain in an older person, particularly a postmenopausal woman: suspect a hip or femoral neck fracture and arrange urgent imaging and medical review.",
    "Constant or night pain unrelated to load, with weight loss, fever, a history of cancer or being unwell: suspect bone tumour, infection or stress fracture. Arrange urgent imaging and medical review.",
    "A hot, red, swollen lateral hip with fever: suspect septic bursitis or septic arthritis and refer the same day.",
    "Groin pain with a loss of hip internal rotation, or a limp that is worsening: suspect hip osteoarthritis, avascular necrosis or a fracture and arrange radiographs.",
    "Saddle anaesthesia, bladder or bowel change or progressive neurological deficit: suspect cauda equina syndrome and refer to emergency immediately.",
    "A sudden loss of abduction power with a marked Trendelenburg gait and a gap on imaging: suspect a full-thickness gluteal tendon tear and arrange imaging and an orthopaedic opinion."
  ],

  management: {
    principles: "The best evidence supports education that reduces tendon compression, plus progressive exercise. In the LEAP trial (204 people aged 35–70 with gluteal tendinopathy confirmed by clinical diagnosis and MRI), 14 physiotherapy sessions over 8 weeks gave a success rate of 51/66 at 8 weeks against 38/65 after one corticosteroid injection and 20/68 with wait and see (risk difference 19.9% over injection, 95% CI 4.7–35.0). At 52 weeks, education plus exercise was still better than injection for global improvement (51/65 vs 36/63), with no difference in pain between the two (2.1 vs 2.3), and both beat wait and see for pain [r3]. A review of hip tendinopathies concludes that specific education and progressive exercise offer a low-risk and effective option with greater rates of treatment success than injection, at 8 weeks and at 1 year [r4]. Evidence is not uniform. In a trial of 94 postmenopausal women, adding a gluteal loading programme to comprehensive education on avoiding tendon compression gave no between-group effect against sham exercise on intention-to-treat analysis, and both groups improved [r15]. In an earlier trial with sequential allocation, injection gave the best result at 1 month, but home training and radial shockwave did better than injection at 15 months [r16]. Explain the diagnosis, reduce compression, load progressively, and discuss injection as a short-term option.",
    medical: [
      { name: "Corticosteroid injection (ultrasound-guided, around the tendons)", description: "Gives short-term relief. In LEAP it beat wait and see at 8 weeks (success 38/65 vs 20/68), but education plus exercise was better at 8 weeks and at 52 weeks for global improvement, and pain did not differ between the two at 52 weeks [r3]. In Rompe's trial, success was 75% at 1 month, but only 48% at 15 months, against 74% for shockwave and 80% for home training [r16]. A reasonable option when pain prevents loading, not a stand-alone cure.", evidence: "moderate", recommendation: "consider", refs: ["r3", "r16", "r4"] },
      { name: "Surgery (for example bursectomy, ITB release or gluteal tendon repair)", description: "Reserved for recalcitrant cases [r1]. No trial data on surgical outcomes were identified in the sources reviewed.", evidence: "expert-opinion", recommendation: "consider", refs: ["r1"] },
      { name: "Simple analgesia and short-term anti-inflammatory medication", description: "May ease pain enough to allow sleep and exercise. No GTPS-specific evidence that anti-inflammatory drugs change the course was identified in the sources reviewed.", evidence: "expert-opinion", recommendation: "consider", refs: [] }
    ],
    physio: [
      { name: "Education on load management and tendon compression, plus progressive exercise", description: "The LEAP programme was 14 sessions over 8 weeks with load-modification education and a home and supervised exercise programme [r3,r7]. Education covers avoiding compressive postures (crossing the legs, hanging on one hip, lying on the painful side) and pelvic control [r1,r15]. It gave more success than injection or wait and see, and the better global result was maintained at 52 weeks [r3].", evidence: "moderate", recommendation: "recommended", refs: ["r3", "r4", "r1"] },
      { name: "Education on avoiding tendon compression (activity and sleep modification)", description: "Teach the patient to avoid crossing the legs, standing on one hip and lying on the painful side, to use a pillow between the knees when lying on the other side, and to modify stairs and walking load. Both the loading and the sham exercise groups in one trial received this education and both improved [r15]. Its separate effect has not been isolated.", evidence: "limited", recommendation: "recommended", refs: ["r15", "r1"] },
      { name: "Progressive hip abductor and kinetic-chain loading (gluteal loading)", description: "Staged strengthening of the abductors, with the tendon kept out of end-range adduction, followed by functional and single-leg loading. In postmenopausal women a 12-week gluteal loading programme (GLoBE) did not beat sham exercise on intention-to-treat analysis, but responders in the loading group did better than responders in the sham group [r15]. A home training programme gave 80% success at 15 months in another trial [r16].", evidence: "conflicting", recommendation: "consider", refs: ["r15", "r16", "r3"] },
      { name: "Radial extracorporeal shockwave therapy", description: "In a trial of 229 patients with refractory unilateral GTPS (sequential allocation, so not truly randomised), repetitive low-energy radial shockwave gave 68% success at 4 months and 74% at 15 months [r16]. A review lists shockwave among the common options and notes a dearth of evidence for any treatment [r1].", evidence: "limited", recommendation: "consider", refs: ["r16", "r1"] },
      { name: "Pelvic control and gait retraining", description: "Gait and stair climbing show a greater hip adduction moment, contralateral trunk lean and pelvic drop, which supports training frontal-plane pelvic control [r8,r9]. Whether retraining changes outcomes has not been tested in the sources reviewed.", evidence: "expert-opinion", recommendation: "consider", refs: ["r8", "r9"] },
      { name: "Stretching the ITB or gluteals into adduction, and foam rolling over the trochanter", description: "Both place the hip in adduction or press on the lateral tendon, which adds compression [r1]. They are not advised in the early stage (clinical reasoning).", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r1"] },
      { name: "Wait and see with no treatment", description: "In LEAP, wait and see gave the lowest success at 8 weeks (20/68) and had less improvement than education plus exercise at 52 weeks (31/60 vs 51/65) [r3].", evidence: "moderate", recommendation: "not-recommended", refs: ["r3"] },
      { name: "Passive modalities alone (massage, ultrasound, electrotherapy)", description: "No evidence for gluteal tendinopathy was identified in the sources reviewed. Passive treatment does not build tendon capacity.", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] }
    ],
    education: [
      "This is a tendon problem where the gluteal muscles attach to the hip bone. It is not usually a bursitis, and it is not dangerous.",
      "Pressure from the band of tissue along the outside of the thigh makes it worse, so avoid crossing your legs, standing with your weight on one hip and lying on the sore side.",
      "Sleep on your back, or on the other side with a pillow between your knees, until it settles.",
      "A cortisone injection can help for a while, but education plus exercise gave better results at 8 weeks and at 1 year in the main trial.",
      "Improvement takes weeks to months. Keep walking and exercising, with pain that settles within 24 hours, and expect gradual progress."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based. It combines education that reduces tendon compression with graded loading of the hip abductors and kinetic chain, as in the LEAP programme of education and exercise over 8 weeks, which gave better global improvement than injection or wait and see [r3]. Stage timeframes are typical, and a long-standing or irritable tendon will take longer. Dosages below are typical clinical ranges drawn from tendinopathy principles, not the exact LEAP or GLoBE protocols, which were not available in the abstracts reviewed [r7,r15]. As a working rule, mild pain during exercise (3/10 or less) is acceptable if it settles within 24 hours (clinical convention). Keep the hip out of end-range adduction in the early stages, because compression is thought to be the most damaging load [r1]. Exercise both legs, and review adherence at every visit.",
    stages: [
      {
        name: "Settle & reduce compression",
        timeframe: "Weeks 0–2",
        goals: ["Explain the condition and the compression model", "Reduce night and side-lying pain", "Keep the hip out of adduction in daily life", "Keep the patient walking and active"],
        precautions: ["Avoid crossing the legs, hip-hanging and lying on the painful side [r1]", "Avoid stretching the ITB or hip into adduction and rolling over the trochanter", "Do not rest completely: keep other training going"],
        exercises: [
          { name: "Isometric hip abduction (standing against a wall or side-lying, hip near neutral)", dosage: "5 × 30–45 s holds, 2 minutes rest, once or twice daily (clinical convention)", cues: "Press out against the wall or band without letting the hip drift into adduction", figure: { pose: "ex-hip-abduction-standing", view: "anterior", props: ["resistance-band"] } },
          { name: "Double-leg glute bridge", dosage: "3 × 10–12, daily", cues: "Drive through the heels and keep the knees hip-width apart", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Sleep and sitting set-up", dosage: "Every day: pillow between the knees when side-lying on the pain-free side; avoid low chairs and crossed legs", cues: "Keep the knees apart and the pelvis level" },
          { name: "Easy walking on level ground", dosage: "10–30 minutes daily within symptom limits", cues: "Short strides and a level pelvis; avoid hanging on the hip" },
          { name: "Low-load aerobic conditioning (pool or cycling with a high saddle)", dosage: "20–30 minutes, 3 times a week, below the pain threshold", cues: "Keep the knees from crossing the midline" }
        ],
        progressionCriteria: ["Pain at or below 4/10 during isometric holds and settling within 24 hours", "Night and side-lying pain reducing", "Able to complete the full isometric set without a flare"]
      },
      {
        name: "Progressive abductor strengthening",
        timeframe: "Weeks 2–8",
        goals: ["Build hip abductor and extensor strength", "Improve pelvic control in single-leg stance", "Restore stair and walking tolerance"],
        precautions: ["Increase load only if the previous session settled within 24 hours", "Work in neutral or abduction, not end-range adduction", "Use a slow tempo and no ballistic work yet"],
        exercises: [
          { name: "Side-lying hip abduction", dosage: "3 × 8–12, 3 s up and 3 s down, 3 times a week", cues: "Lift the top leg slightly behind the body, with the toes pointing forward, and do not roll the pelvis back", figure: { pose: "ex-clamshell", view: "lateral", props: ["mat"] } },
          { name: "Side plank (knees, progressing to feet)", dosage: "3 × 20–30 s each side", cues: "Long line from head to knees; keep the bottom hip lifted", figure: { pose: "ex-side-plank", view: "lateral", props: ["mat"] } },
          { name: "Single-leg bridge", dosage: "3 × 8–10 each side", cues: "Keep the pelvis level", figure: { pose: "ex-single-leg-bridge", view: "lateral", props: ["mat"] } },
          { name: "Standing resistance-band hip abduction", dosage: "3 × 10–12 each side, slow tempo", cues: "Stand tall without leaning the trunk", figure: { pose: "ex-hip-abduction-standing", view: "anterior", props: ["resistance-band"] } },
          { name: "Step-up (low step)", dosage: "3 × 8–10 each leg", cues: "Keep the pelvis level and the knee over the second toe", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } }
        ],
        progressionCriteria: ["Pain at or below 3/10 on all exercises and no next-day flare", "30-second single-leg stance without pain and without pelvic drop (clinical convention)", "Stairs and walking pain reduced", "Side-lying abduction strength improving toward the other side"]
      },
      {
        name: "Functional loading & control",
        timeframe: "Weeks 6–12",
        goals: ["Single-leg strength and control under load", "Normalise walking and stair mechanics", "Tolerate longer walks and recreational activity"],
        precautions: ["Progress load in steps; stop progressing if pain is higher the next day", "Keep the pelvis level; avoid hip-hanging during exercise"],
        exercises: [
          { name: "Single-leg balance (progress to eyes closed or an unstable surface)", dosage: "3 × 30–45 s each leg", cues: "Level pelvis and soft knee", figure: { pose: "ex-single-leg-balance", view: "anterior" } },
          { name: "Single-leg squat to a box or step-down", dosage: "3 × 8 each leg", cues: "Hip back, with the knee over the second toe and the pelvis level", figure: { pose: "ex-single-leg-squat", view: "anterior" } },
          { name: "Split squat", dosage: "3 × 8–10 each leg", cues: "Torso upright; keep the hip from drifting inwards", figure: { pose: "ex-split-squat", view: "lateral", props: ["dumbbell"] } },
          { name: "Hip thrust or loaded bridge", dosage: "3 × 6–10, heavy", cues: "Drive to full hip extension", figure: { pose: "ex-hip-thrust", view: "lateral", props: ["bench"] } },
          { name: "Graded walking programme with stairs and slopes", dosage: "Build 10% a week on time or distance within symptom limits (clinical convention)", cues: "Check the latent pain response after 24 hours" }
        ],
        progressionCriteria: ["Single-leg squat to a step with a level pelvis and pain at or below 3/10", "Stairs and 30-minute walk without a flare", "Abductor strength near symmetrical (clinical convention)", "VISA-G or global rating of change clearly improved"]
      },
      {
        name: "Return to higher load",
        timeframe: "Weeks 10–16+ (individualised)",
        goals: ["Return to running, hiking or sport at the desired level", "Maintain strength long term", "Maintain compression management habits"],
        precautions: ["Increase running or sport load in steps and track next-day pain", "Avoid sudden spikes in volume or hill work", "Keep the pelvis level when fatigued"],
        exercises: [
          { name: "Walk–run progression", dosage: "Alternate 1–2 minutes of running with walking, 3 times a week, building by about 10% a week (clinical convention)", cues: "Relaxed running with a level pelvis and a short stride" },
          { name: "Single-leg hops (low, then higher)", dosage: "3 × 5–8 each leg, 2 times a week", cues: "Quiet landing and a level pelvis", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Sport-specific change-of-direction drills", dosage: "2 sessions a week, progressing speed and angle", cues: "Keep the knee over the foot and the pelvis level" },
          { name: "Maintenance strength (abduction, bridge, split squat)", dosage: "2 times a week, 3 × 6–10, long term", cues: "Keep the loads heavy and the tempo controlled" }
        ],
        progressionCriteria: ["Pain at or below 2/10 during running and no next-day flare", "Full training or planned activity for at least 2 weeks without a flare (clinical convention)", "Single-leg stance and squat with a level pelvis", "Confidence, and a maintenance plan agreed with the patient"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated return-to-sport criteria for gluteal tendinopathy were identified. The criteria below reflect tendinopathy principles and clinical convention",
      "Pain at or below 2/10 during running or sport and no latent pain increase beyond 24 hours (clinical convention)",
      "30-second single-leg stance, single-leg squat and stairs with no pain and a level pelvis [r14]",
      "Abductor strength close to the other side (clinical convention)",
      "Tolerance of graded walking, running or sport load for at least 2 weeks without a flare (clinical convention)",
      "Patient-reported improvement, for example a clearly better global rating of change or VISA-G, as used in the main trials [r3,r15]"
    ],
    tests: ["30-second single-leg stance (pain and pelvic control)", "Single-leg squat or step-down quality", "Isometric abductor strength limb symmetry", "VISA-G and global rating of change", "Graded running tolerance and next-day pain response"]
  },
  prognosis: "Gluteal tendinopathy is often persistent, but most people improve with treatment. In LEAP, 189 of 204 participants (92.6%) completed 52-week follow-up, and global success at 52 weeks was 51/65 with education plus exercise, 36/63 with injection and 31/60 with wait and see [r3]. The wait-and-see group also improved over time, so some natural improvement occurs [r3]. In Rompe's trial, success at 15 months was 80% with home training, 74% with shockwave and 48% with injection [r16]. In postmenopausal women, both a gluteal loading and a sham exercise programme gave significant VISA-G improvement at 12 and 52 weeks when both were combined with education [r15]. Long-term recurrence and outcomes beyond 15 months were not identified in the sources reviewed.",
  prevention: [
    "No GTPS prevention trials were identified. The suggestions below are clinical reasoning drawn from the compression model [r1].",
    "Reduce sustained compression: avoid habitually standing with the weight on one hip, avoid crossing the legs, and use a pillow between the knees when side-lying.",
    "Build walking, running and hill load gradually, and keep up strength of the hip abductors and extensors.",
    "Address pelvic control and single-leg mechanics when there is pelvic drop or a Trendelenburg pattern [r8,r9].",
    "Treat knee osteoarthritis and low back pain, which are associated with GTPS [r5]."
  ],
  clinicalPearls: [
    "Most lateral hip pain is gluteal tendinopathy, not bursitis. Bursitis was found in only 20.2% of 877 patients with GTPS on ultrasound, so do not label every case 'trochanteric bursitis' [r2].",
    "Think compression as well as tension. Excessive hip adduction presses the tendons against the trochanter under the ITB, so stretching into adduction and lying on the painful side can make symptoms worse [r1].",
    "The 30-second single-leg stance is simple and accurate in a small sample (sensitivity 100%, specificity 97.3%, n = 17), but other tests such as FABER, palpation and resisted abduction performed best in women, so use a battery [r14,r13,r1].",
    "Do not rely on MRI. Tendon pathology was present on MRI in all symptomatic and 88% of asymptomatic women [r13].",
    "Injection helps early but education plus exercise did better at 8 weeks and at 1 year in LEAP, and injection was less successful by 15 months in another trial [r3,r16].",
    "Education may be doing much of the work. In a trial of postmenopausal women both exercise groups improved with education on avoiding compression, so teach the compression rules properly [r15]."
  ],
  related: ["itb-syndrome", "deep-gluteal-syndrome", "hip-labral-tear", "fai-syndrome", "snapping-hip-syndrome", "hip-pointer"],

  references: [
    { id: "r1", citation: "Grimaldi A, Mellor R, Hodges P, et al. Gluteal tendinopathy: a review of mechanisms, assessment and management. Sports Med. 2015;45(8):1107-19.", pmid: "25969366", doi: "10.1007/s40279-015-0336-5", type: "narrative-review", year: 2015 },
    { id: "r2", citation: "Long SS, Surrey DE, Nazarian LN. Sonography of greater trochanteric pain syndrome and the rarity of primary bursitis. AJR Am J Roentgenol. 2013;201(5):1083-6.", pmid: "24147479", doi: "10.2214/AJR.12.10038", type: "cross-sectional", year: 2013 },
    { id: "r3", citation: "Mellor R, Bennell K, Grimaldi A, et al. Education plus exercise versus corticosteroid injection use versus a wait and see approach on global outcome and pain from gluteal tendinopathy: prospective, single blinded, randomised clinical trial. BMJ. 2018;361:k1662.", pmid: "29720374", doi: "10.1136/bmj.k1662", type: "rct", year: 2018 },
    { id: "r4", citation: "Grimaldi A, Mellor R, Nasser A, et al. Current and future advances in practice: tendinopathies of the hip. Rheumatol Adv Pract. 2024;8(2):rkae022.", pmid: "38601140", doi: "10.1093/rap/rkae022", type: "narrative-review", year: 2024 },
    { id: "r5", citation: "Segal NA, Felson DT, Torner JC, et al. Greater trochanteric pain syndrome: epidemiology and associated factors. Arch Phys Med Rehabil. 2007;88(8):988-92.", pmid: "17678660", doi: "10.1016/j.apmr.2007.04.014", type: "cross-sectional", year: 2007 },
    { id: "r6", citation: "Blank E, Owens BD, Burks R, et al. Incidence of greater trochanteric pain syndrome in active duty US military servicemembers. Orthopedics. 2012;35(7):e1022-7.", pmid: "22784894", doi: "10.3928/01477447-20120621-14", type: "cohort", year: 2012 },
    { id: "r7", citation: "Mellor R, Grimaldi A, Wajswelner H, et al. Exercise and load modification versus corticosteroid injection versus 'wait and see' for persistent gluteus medius/minimus tendinopathy (the LEAP trial): a protocol for a randomised clinical trial. BMC Musculoskelet Disord. 2016;17:196.", pmid: "27139495", doi: "10.1186/s12891-016-1043-6", type: "other", year: 2016 },
    { id: "r8", citation: "Allison K, Wrigley TV, Vicenzino B, et al. Kinematics and kinetics during walking in individuals with gluteal tendinopathy. Clin Biomech (Bristol). 2016;32:56-63.", pmid: "26827150", doi: "10.1016/j.clinbiomech.2016.01.003", type: "biomechanical", year: 2016 },
    { id: "r9", citation: "Allison K, Vicenzino B, Bennell KL, et al. Kinematics and kinetics during stair ascent in individuals with gluteal tendinopathy. Clin Biomech (Bristol). 2016;40:37-44.", pmid: "27816023", doi: "10.1016/j.clinbiomech.2016.10.003", type: "biomechanical", year: 2016 },
    { id: "r10", citation: "Cook JL, Purdam CR. Is tendon pathology a continuum? A pathology model to explain the clinical presentation of load-induced tendinopathy. Br J Sports Med. 2009;43(6):409-16.", pmid: "18812414", doi: "10.1136/bjsm.2008.051193", type: "narrative-review", year: 2009 },
    { id: "r11", citation: "Cook JL, Rio E, Purdam CR, et al. Revisiting the continuum model of tendon pathology: what is its merit in clinical practice and research? Br J Sports Med. 2016;50(19):1187-91.", pmid: "27127294", doi: "10.1136/bjsports-2015-095422", type: "narrative-review", year: 2016 },
    { id: "r12", citation: "Woodley SJ, Nicholson HD, Livingstone V, et al. Lateral hip pain: findings from magnetic resonance imaging and clinical examination. J Orthop Sports Phys Ther. 2008;38(6):313-28.", pmid: "18515960", doi: "10.2519/jospt.2008.2685", type: "diagnostic-accuracy", year: 2008 },
    { id: "r13", citation: "Ganderton C, Semciw A, Cook J, et al. Demystifying the clinical diagnosis of greater trochanteric pain syndrome in women. J Womens Health (Larchmt). 2017;26(6):633-43.", pmid: "28263673", doi: "10.1089/jwh.2016.5889", type: "diagnostic-accuracy", year: 2017 },
    { id: "r14", citation: "Lequesne M, Mathieu P, Vuillemin-Bodaghi V, et al. Gluteal tendinopathy in refractory greater trochanter pain syndrome: diagnostic value of two clinical tests. Arthritis Rheum. 2008;59(2):241-6.", pmid: "18240186", doi: "10.1002/art.23354", type: "diagnostic-accuracy", year: 2008 },
    { id: "r15", citation: "Ganderton C, Semciw A, Cook J, et al. Gluteal loading versus sham exercises to improve pain and dysfunction in postmenopausal women with greater trochanteric pain syndrome: a randomized controlled trial. J Womens Health (Larchmt). 2018;27(6):815-29.", pmid: "29715073", doi: "10.1089/jwh.2017.6729", type: "rct", year: 2018 },
    { id: "r16", citation: "Rompe JD, Segal NA, Cacchio A, et al. Home training, local corticosteroid injection, or radial shock wave therapy for greater trochanter pain syndrome. Am J Sports Med. 2009;37(10):1981-90.", pmid: "19439758", doi: "10.1177/0363546509334374", type: "rct", year: 2009 },
    { id: "r17", citation: "Korakakis V, Whiteley R, Kotsifaki A, et al. A systematic review evaluating the clinimetric properties of the Victorian Institute of Sport Assessment (VISA) questionnaires for lower limb tendinopathy shows moderate to high-quality evidence for sufficient reliability, validity and responsiveness-part II. Knee Surg Sports Traumatol Arthrosc. 2021;29(9):2765-88.", pmid: "33860806", doi: "10.1007/s00167-021-06557-0", type: "systematic-review", year: 2021 }
  ],

  animation: {
    title: "How gluteal tendinopathy develops",
    phases: [
      {
        type: "moi", label: "Repeated loading", duration: 6.5, view: "anterior", environment: "road",
        actors: [{ id: "patient", kit: "older-adult" }],
        keyframes: [
          { t: 0, pose: "walk-heel-strike", root: { x: -90 } },
          { t: 1.2, pose: "walk-push-off", root: { x: -60 } },
          { t: 2.4, pose: "stand", joints: { pelvis: 9, hipR: -12, hipL: 4, trunk: -5 }, root: { x: -40 }, ease: "in" },
          { t: 4.0, pose: "stand", joints: { pelvis: 9, hipR: -14, hipL: 4, trunk: -6 }, root: { x: -40 } },
          { t: 6.2, pose: "stand", joints: { pelvis: 9, hipR: -14, hipL: 4, trunk: -6 }, root: { x: -40 } }
        ],
        forces: [
          { t: [2.2, 6.0], at: "hipR", dir: "medial", label: "Adduction: ITB compression" },
          { t: [2.4, 6.0], at: "pelvis", dir: "down", label: "Pelvic drop" }
        ],
        highlights: [{ t: [2.2, 6.5], at: "hipR" }],
        captions: [
          { t: 0, text: "A woman in mid-life walks. Every step on the right leg loads the gluteal tendons." },
          { t: 1.3, text: "In single-leg stance the gluteus medius and minimus must hold the pelvis level." },
          { t: 2.4, text: "If the pelvis drops and the hip drifts into adduction, the ITB presses the tendons onto the greater trochanter." },
          { t: 4.2, text: "Walking, stairs, crossed legs, hip-hanging and side-lying all repeat this compression. There is no single injury moment." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "hipR",
        captions: [{ t: 0, text: "Zooming into the right hip, viewed from the side." }]
      },
      {
        type: "closeup", label: "Inside the hip", duration: 10, scene: "hip-lateral",
        actions: [
          { t: 0, do: "highlight", target: "gluteusMediusTendon" },
          { t: 0.3, do: "label", target: "gluteusMediusTendon", text: "Gluteus medius tendon: lateral facet of the trochanter" },
          { t: 1.0, do: "arrow", at: "itbOverTrochanter", dir: "medial", label: "ITB compression in hip adduction" },
          { t: 1.2, do: "stretch", target: "gluteusMediusTendon", amount: 0.2, dur: 1.0 },
          { t: 2.6, do: "reset", target: "gluteusMediusTendon" },
          { t: 3.2, do: "thicken", target: "gluteusMediusTendon", amount: 0.5, dur: 1.4 },
          { t: 3.8, do: "pain", at: "greaterTrochanter", hold: 3 },
          { t: 4.8, do: "degenerate", target: "gluteusMediusTendon", at: "lateralFacet", dur: 1.6 },
          { t: 5.2, do: "label", target: "gluteusMediusTendon", text: "Thickened, disorganised tendon (tendinopathy)" },
          { t: 6.4, do: "pulse", target: "trochantericBursa" },
          { t: 6.5, do: "label", target: "trochantericBursa", text: "Bursa: a bystander (bursitis in about 1 in 5)" },
          { t: 8.0, do: "camera", at: "greaterTrochanter", zoom: 1.6, dur: 1.0 },
          { t: 9.4, do: "camera", zoom: 1, dur: 0.6 }
        ],
        captions: [
          { t: 0, text: "The gluteus medius tendon attaches to the lateral facet of the greater trochanter, under the ITB." },
          { t: 1.0, text: "With the hip drifting into adduction, the ITB presses the tendons against the bone." },
          { t: 3.2, text: "Compression and tension together overload the tendon, which swells and becomes painful." },
          { t: 4.8, text: "With continued overload the collagen becomes disorganised. The tendon degenerates; it does not simply tear." },
          { t: 6.4, text: "The bursa sits nearby, but bursitis is found in only a minority of people with lateral hip pain." },
          { t: 8.0, text: "Scans show change in painless hips too, so the diagnosis is clinical." }
        ]
      },
      {
        type: "micro", label: "Tendon continuum", duration: 10, tissue: "tendon-continuum",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.6, stage: "reactive" }, { t: 3.4, stage: "disrepair" },
          { t: 5.2, stage: "degenerative" }, { t: 7.2, stage: "load-adaptation" }
        ],
        timeLabels: [{ t: 1.6, text: "Days to weeks" }, { t: 3.4, text: "Weeks to months" }, { t: 5.2, text: "Months to years" }, { t: 7.2, text: "Months of loading" }],
        captions: [
          { t: 0, text: "Healthy tendon: tightly packed, aligned type I collagen with a few resident tenocytes." },
          { t: 1.6, text: "Reactive: after overload and compression, tenocytes activate and the matrix swells." },
          { t: 3.4, text: "Disrepair: cells try to repair the tendon, and the collagen becomes disorganised." },
          { t: 5.2, text: "Degenerative: areas of disorganised matrix remain, with limited capacity to reverse." },
          { t: 7.2, text: "Progressive loading and less compression build capacity. Pain settles as the tendon adapts." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL2" }
};
