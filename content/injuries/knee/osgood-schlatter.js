export default {
  id: "osgood-schlatter",
  name: "Osgood–Schlatter disease",
  shortName: "Osgood-Schlatter",
  aka: ["Osgood-Schlatter syndrome", "OSD", "tibial tubercle apophysitis", "tibial tuberosity apophysitis", "traction apophysitis of the tibial tubercle", "growing pains (knee)", "adolescent knee pain"],
  region: "knee",
  tissues: ["physis", "tendon", "bone"],
  onset: "gradual",
  mechanismType: ["traction", "overuse"],
  populations: ["adolescents in a growth spurt", "boys 12–15 years", "girls 8–12 years", "young jumping and running athletes"],
  sports: ["soccer", "basketball", "volleyball", "gymnastics", "running", "australian football", "netball", "dance"],
  urgency: "routine",
  summary: "A traction apophysitis of the tibial tuberosity in growing adolescents. Repeated quadriceps pull through the patellar tendon causes activity-related pain below the knee. Usually self-limiting, but it can persist.",
  keyFacts: [
    { label: "Incidence", value: "Up to about 10% of adolescents; higher in sports-active adolescents" },
    { label: "Peak age", value: "Boys 12–15 years, girls 8–12 years (older estimates); sex difference may be shrinking" },
    { label: "Key test", value: "Tenderness and a prominence over the tibial tuberosity; pain on resisted knee extension and kneeling. Clinical diagnosis" },
    { label: "Imaging", value: "Not usually needed; lateral radiograph or ultrasound if atypical" },
    { label: "Typical recovery", value: "Self-limiting with physeal closure, but adolescents in one cohort had pain for a mean of 21 months before enrolling" },
    { label: "Management", value: "Education, load management and progressive strengthening. 80% reported success at 12 weeks in a case series" }
  ],
  overview: "Osgood–Schlatter disease (OSD) is a traction apophysitis of the tibial tuberosity in growing children, caused by repetitive strain on the secondary ossification centre where the patellar tendon attaches [r1]. It presents with pain, swelling and tenderness over the tuberosity that is worse with sport involving jumping, running and direct contact such as kneeling [r1]. It is one of the commonest causes of anterior knee pain in children and adolescents [r2].\n\nThe most accepted theory is repetitive contraction of the knee extensor mechanism acting on a growth centre that is relatively weak during rapid growth [r3,r4]. Most cases are reported to settle with skeletal maturity, and about 90% respond to non-operative care [r1,r2]. This reassurance needs care, however. In a retrospective cohort, 60.5% of the 43 responding patients still had knee pain at a median of 3.75 years after diagnosis [r5], and adolescents with OSD have lower knee function and quality of life than their peers [r6].\n\nTreatment evidence is weak. A systematic review found only 13 studies, two of them RCTs, of poor to moderate quality [r7]. Current practice favours education, load management with pain monitoring and progressive strengthening rather than passive rest, based mainly on a small case series [r8]."
  ,

  epidemiology: {
    text: "OSD affects up to about 10% of adolescents [r7,r8]. In a Finnish retrospective survey of 389 students, 12.9% had had OSD. The rate was 21.2% in those who were active in sport at age 13 versus 4.5% in those who were not (P < 0.001). Among athletes attending a sports clinic, symptoms began at an average age of 13.1 years [r9]. In Russian soccer academies, 10% of 280 players aged 11–15 were diagnosed with OSD, and 42.9% of these had bilateral symptoms [r10]. Older reports place the peak at 12–15 years in boys and 8–12 years in girls [r1]. A 2020 review notes no sex difference nowadays, possibly because more girls play high-impact sport [r2]. On MRI in a population-based cohort of 1910 adolescents aged 12–15, 2.3% had features of OSD, and these were more often present in boys (OR 4.21) [r11].",
    riskFactors: {
      intrinsic: [
        "Skeletal immaturity and the adolescent growth spurt, when the apophysis is a relatively weak growth centre [r1,r4]",
        "Quadriceps tightness (especially rectus femoris) and reduced hamstring flexibility [r2]",
        "Knee extensor weakness and higher body weight [r2]; adolescents with OSD had lower knee extension strength than controls (effect size 1.25) [r6]",
        "Greater posterior tibial slope (association in a retrospective comparison; cause and effect not established) [r12]",
        "Previous calcaneal apophysitis (Sever's disease) and affected siblings, in one older retrospective study [r9]"
      ],
      extrinsic: [
        "Participation in jumping, running and kicking sports [r9,r1]",
        "High training volume and intensity during rapid growth (common clinical observation; not quantified in the sources reviewed)",
        "Direct pressure on the tuberosity, such as repeated kneeling, aggravates symptoms [r1]"
      ]
    }
  },

  mechanism: {
    summary: "OSD has no single injury moment. Jumping, sprinting, kicking and landing load the quadriceps repeatedly, and each contraction pulls through the patella and patellar tendon onto the tibial tuberosity. During growth that attachment is on a secondary ossification centre rather than mature bone, so it is the weak link [r1,r4]. Repetitive traction produces microtrauma and irritation at the apophysis. Radiographs show irregularity and separation of the apophysis early on, and fragmentation later [r1]. The apophysis fuses as growth finishes, and most symptoms settle [r1,r3].",
    sequence: [
      "The adolescent grows rapidly. The long bones lengthen faster than the muscle–tendon units, and the tibial tuberosity is still a growth centre [r1,r2].",
      "Sport adds repetitive jumping, sprinting, kicking and landing. The quadriceps contracts hard and often, including eccentrically on landing.",
      "Each contraction transmits tension through the patella and patellar tendon to the tibial tuberosity apophysis. This is a traction rather than a compression force [r1].",
      "Loading exceeds the capacity of the apophysis, and microdamage and irritation develop at the tendon–apophysis junction [r3]. This pattern is described as load exceeding capacity; no OSD-specific tissue study was identified.",
      "The apophysis may separate partially and fragment, and a bony ossicle may form in the distal patellar tendon [r1,r3].",
      "Pain appears with jumping, running, stairs and kneeling. The tuberosity is tender and may become prominent [r1].",
      "As the physis closes, most symptoms settle. Some people keep pain or an ossicle into adulthood [r3,r5]."
    ],
    variants: [
      { name: "Chronic traction apophysitis (typical)", description: "Gradual onset activity-related pain with a tender, sometimes prominent tuberosity [r1]. Bilateral symptoms occurred in 42.9% of a soccer-academy cohort [r10]." },
      { name: "Acute on chronic tibial tubercle avulsion", description: "A sudden pop and inability to straighten the knee after a jump or sprint, typically in older adolescents near physeal closure. The tuberosity is avulsed. This is an emergency and not OSD [r12,r13]." },
      { name: "Adult or persistent OSD", description: "Some patients keep symptoms after physeal closure, often with a painful ossicle in the patellar tendon. Surgical excision is reserved for the skeletally mature who stay symptomatic despite conservative care [r1,r3]." },
      { name: "Direct trauma or kneeling", description: "Direct pressure on a prominent tuberosity provokes pain and can aggravate a settled apophysitis [r1]." }
    ]
  },

  anatomy: {
    text: "The quadriceps tendon, patella and patellar tendon form the extensor mechanism. The patellar tendon runs from the inferior pole of the patella to the tibial tuberosity. In children and adolescents the tuberosity ossifies from a secondary ossification centre (the apophysis) that sits anterior to the proximal tibial physis and is separated from the tibial shaft by growth cartilage until it fuses in late adolescence. The apophysis is a traction centre, which means that it is loaded by tendon pull rather than by joint compression. The infrapatellar fat pad and the deep infrapatellar bursa lie behind the distal tendon.",
    structures: [
      { name: "Tibial tuberosity apophysis", role: "Secondary ossification centre where the patellar tendon attaches. It is relatively weak during growth, and it is the site of the traction injury [r1,r4]." },
      { name: "Proximal tibial physis", role: "Growth plate that is responsible for longitudinal growth of the tibia and is located behind the apophysis" },
      { name: "Patellar tendon", role: "Transmits quadriceps force from the patella to the tibial tuberosity. A superficial ossicle may be seen in the tendon in OSD [r3]." },
      { name: "Quadriceps and rectus femoris", role: "Knee extensors. Tightness and weakness are associated with OSD [r2,r6]." },
      { name: "Hamstrings", role: "Antagonists. Reduced flexibility is a proposed risk factor [r2]." },
      { name: "Infrapatellar fat pad and deep infrapatellar bursa", role: "Cushion the distal tendon and may be irritated in the same region" }
    ]
  },

  pathophysiology: {
    tissueDamage: "OSD is a traction apophysitis of the tibial tubercle due to repetitive strain on the secondary ossification centre [r1]. Repetitive knee extensor contraction is the most accepted pathogenic theory [r3]. Radiographic change progresses from irregularity of the apophysis, with separation from the tibial tuberosity in early stages, to fragmentation in later stages [r1]. A superficial ossicle within the patellar tendon may remain [r3].\n\nThe injury is best understood as load exceeding the capacity of a developing structure. Growth cartilage is the weakest part of the growing skeleton under tensile load, and most youth overuse injuries occur at epiphyses and apophyses [r4]. Quadriceps tightness or weakness, higher body weight and greater posterior tibial slope have been linked to OSD, but the evidence consists of associations rather than proof of cause [r2,r12]. The sources reviewed contained no OSD-specific histology or cellular studies, so the cellular timeline below is a schematic model.",
    structures: [
      { name: "Tibial tuberosity apophysis", effect: "Repetitive tensile strain produces irregularity, partial separation and later fragmentation [r1]." },
      { name: "Distal patellar tendon", effect: "Overloaded at its attachment. A superficial ossicle may form in the tendon [r3]." },
      { name: "Overlying soft tissue and bursa", effect: "Local swelling and tenderness over the tuberosity [r1]" },
      { name: "Proximal tibial physis", effect: "Remains the growth plate. The condition is not a physeal fracture, but an acute tubercle avulsion is a related injury at the same site [r12,r13]." }
    ],
    muscles: [
      { name: "Quadriceps (rectus femoris)", effect: "Tightness may increase tension at the tuberosity [r2]. Adolescents with OSD had lower knee extension strength than controls (effect size 1.25) [r6]." },
      { name: "Hamstrings", effect: "Reduced flexibility is reported as a risk factor [r2]" },
      { name: "Hip abductors", effect: "Hip abduction strength improved by 24% after a 12-week exercise program in a case series, which suggests a deficit or a trainable capacity [r8]" }
    ],
    cellular: [
      { phase: "Traction and repetitive microdamage", timing: "Weeks to months of repeated loading", description: "Repeated tensile loading of the apophyseal cartilage and its tendon attachment causes microdamage. This is inferred from the traction theory [r1,r3]." },
      { phase: "Irritation and inflammation", timing: "Weeks to months", description: "Local irritation, swelling and pain develop over the tuberosity [r1]. The degree of true inflammation has not been established." },
      { phase: "Separation and fragmentation", timing: "Months", description: "Radiographs show separation and then fragmentation of the apophysis. An ossicle may form in the tendon [r1,r3]." },
      { phase: "Resolution with physeal closure", timing: "Months to years", description: "Symptoms resolve in most patients as the growth plate closes [r1,r3]. Retrospective data suggest that pain persists in many [r5]." }
    ],
    systems: [
      { system: "Skeletal growth", effect: "The growth spurt increases mechanical demand on the extensor mechanism while the apophysis is still a growth centre [r1,r2]." },
      { system: "Nervous system and pain", effect: "Pain is mechanical and load-related at first. Many adolescents have long-standing pain (mean 21 months at enrolment in one cohort) [r8]." },
      { system: "Musculoskeletal chain", effect: "Quadriceps and hamstring tightness, knee extension and hip abduction weakness and proximal tibial slope are linked with OSD [r2,r6,r12]." },
      { system: "Psychological and social", effect: "Adolescents with OSD or patellofemoral pain scored 22–56 points lower than pain-free controls on KOOS subscales, with the lowest scores on sport and quality of life, despite high physical activity levels [r6]." },
      { system: "Long-term function", effect: "In a retrospective follow-up, 60.5% of responders had OSD-related pain at a median of 3.75 years, 42.9% of them daily, and those with pain had lower sport function and quality of life [r5]." }
    ]
  },

  grading: {
    system: "Radiographic progression (descriptive; no validated clinical grading)",
    grades: [
      { grade: "Early", description: "Irregularity of the apophysis with separation from the tibial tuberosity and soft-tissue swelling over the tuberosity [r1].", prognosis: "Usually responds to load management and exercise [r1,r8]" },
      { grade: "Later", description: "Fragmentation of the apophysis, and a superficial ossicle may form in the distal patellar tendon [r1,r3].", prognosis: "Most settle with physeal closure; some stay symptomatic [r1,r5]" },
      { grade: "Persistent or adult", description: "Ossicle or tuberosity prominence with pain that continues after skeletal maturity [r1,r3].", prognosis: "Surgical excision is considered only if conservative care fails in the skeletally mature [r1,r3]" }
    ]
  },

  timeframes: {
    summary: "OSD is described as self-limiting, with recovery expected at closure of the tibial growth plate [r1,r3]. In practice, symptom duration varies widely: a mean of 21 months of pain at enrolment in a trial cohort [r8], fully effective training impaired for an average of 7.3 months in one 1985 series [r9], and 60.5% of responders with pain at a median of 3.75 years in a retrospective follow-up [r5]. Structured exercise programs report improvement within 12 weeks [r8].",
    healing: [
      { phase: "Settle symptoms and educate", startDay: 0, endDay: 42, description: "Load management with pain monitoring, a start on strengthening, and an explanation of the condition" },
      { phase: "Build capacity", startDay: 14, endDay: 84, description: "Progressive knee and hip strengthening over about 12 weeks [r8]" },
      { phase: "Graded return to sport", startDay: 42, endDay: 365, description: "Sport is reintroduced in steps. In one case series, 16% were playing sport at 12 weeks and 69% at 12 months [r8]." },
      { phase: "Resolution with physeal closure", startDay: 90, endDay: 1095, description: "Natural history: most symptoms settle as the growth plate closes, although some pain may persist [r1,r5]" }
    ],
    milestones: [
      { label: "Pain monitoring and activity plan agreed", day: 7, note: "Clinical convention" },
      { label: "Successful outcome reported (80% of case series)", day: 84, note: "12 weeks of activity modification and strengthening [r8]" },
      { label: "Playing sport: 16% at 12 weeks", day: 84, note: "Return is gradual [r8]" },
      { label: "Playing sport: 69% at 12 months", day: 365, note: "[r8]" }
    ],
    returnToSport: "Pain-guided and graded, not date-based. In a 51-patient case series, 16% were playing sport at 12 weeks and 69% at 12 months despite 80% reporting a successful outcome at 12 weeks [r8]. In a retrospective soccer-academy cohort, mean treatment duration was 27.3 days with gradual return to activity, but 35.7% reported discomfort on resuming training [r10]. These figures use different definitions and cannot be compared directly."
  },

  clinicalPresentation: {
    symptoms: [
      "Activity-related pain over the tibial tuberosity, worse with jumping, running, kicking and stairs [r1]",
      "Pain on kneeling or direct pressure over the tuberosity [r1]",
      "Swelling or a bony lump below the knee",
      "Pain that settles with rest and recurs when activity resumes",
      "Often bilateral (42.9% in a soccer-academy cohort) [r10]"
    ],
    signs: [
      "Tenderness and sometimes prominence of the tibial tuberosity [r1]",
      "Pain on resisted knee extension or a single-leg squat or hop",
      "Pain with passive full knee flexion in some patients",
      "Tight rectus femoris or hamstrings [r2]",
      "No effusion and a stable knee with full range"
    ]
  },

  assessment: {
    subjective: [
      "Age, stage of growth (recent growth spurt) and sport load: sessions per week, jumping or kicking volume, and recent increases",
      "Pain location (tuberosity), behaviour with sport, stairs and kneeling, and night pain (should be absent)",
      "Duration of symptoms and previous treatment such as rest",
      "Bilateral symptoms, siblings with OSD, and previous apophysitis such as Sever's disease [r9]",
      "Impact on sport participation, school and mood",
      "Features of other conditions: acute pop and inability to extend the knee (tubercle avulsion), hip pain or limp, fever"
    ],
    observation: [
      "Prominence or swelling over the tibial tuberosity, compared with the other knee",
      "Gait and single-leg squat quality, and pelvic and knee control",
      "Lower-limb alignment and foot posture",
      "Growth markers such as recent height gain, where known"
    ],
    palpation: [
      "Tibial tuberosity and distal patellar tendon: tenderness and thickening [r1]",
      "Inferior pole of the patella (to separate from Sinding-Larsen-Johansson syndrome) [r14]",
      "Joint line and fat pad (to exclude intra-articular pathology)"
    ],
    rangeOfMotion: [
      "Knee flexion and extension are usually full",
      "Rectus femoris length by the Ely or prone knee bend test and the modified Thomas test [r2]",
      "Hamstring length by the straight-leg raise or popliteal angle [r2]",
      "Hip range, especially internal rotation, to screen hip pathology"
    ],
    strength: [
      "Knee extension strength by hand-held dynamometry, compared with the other side. Deficits are common in OSD [r6].",
      "Hip abduction and extension strength [r8,r6]",
      "Calf and hamstring strength"
    ],
    neuro: [],
    functional: [
      "Single-leg squat and step-down with pain recorded",
      "Jump tests: jump for distance and height were used as outcomes [r8]",
      "Sport-specific jumping and landing once pain allows"
    ],
    specialTests: [
      { name: "Resisted knee extension", purpose: "Reproduce traction pain at the tibial tuberosity", procedure: "Patient seated with the knee flexed to about 90°. The patient extends the knee against the examiner's resistance while the examiner palpates the tuberosity.", positive: "The familiar pain over the tuberosity is reproduced. No diagnostic accuracy data were identified; diagnosis is clinical [r1].", refs: [] },
      { name: "Kneeling or direct pressure over the tuberosity", purpose: "Reproduce pain from pressure on a prominent tuberosity", procedure: "Apply firm pressure over the tuberosity or ask the patient to kneel on a pad.", positive: "Local pain, which is typical of OSD [r1]. No accuracy data were identified.", refs: [] },
      { name: "Ely (prone knee bend) test", purpose: "Rectus femoris length", procedure: "Patient prone. Passively flex the knee and observe the hip and pelvis.", positive: "The hip flexes or the pelvis rises early, or the knee is limited in flexion by anterior thigh tightness. Tightness is associated with OSD, but this test has no accuracy data here [r2].", refs: [] },
      { name: "Single-leg squat or hop", purpose: "Load the extensor mechanism functionally", procedure: "Single-leg squat to about 45–60° or a single-leg hop. Record pain and control.", positive: "Pain at the tuberosity or poor control. No accuracy data were identified.", refs: [] }
    ],
    clinicalRules: [],
    outcomeMeasures: [
      { name: "Knee injury and Osteoarthritis Outcome Score (KOOS) subscales", use: "Pain, ADL, sport and recreation and quality of life; used as a secondary outcome in the OSD case series and cross-sectional study [r8,r6]" },
      { name: "Global rating of change (7-point scale)", use: "Primary outcome in the 12-week case series; successful outcome was 'much improved' or 'improved' [r8]" },
      { name: "Pain intensity (numeric rating scale) during and 24 hours after activity", use: "Guides activity modification (clinical convention)" },
      { name: "Hand-held dynamometry and jump tests", use: "Knee extension and hip abduction strength, and jump distance and height [r8]" }
    ],
    imaging: [
      { modality: "Not routinely required", indication: "Typical presentation with tuberosity tenderness in an adolescent athlete. The diagnosis is clinical [r1].", findings: "Not applicable" },
      { modality: "Lateral knee radiograph", indication: "Atypical features, unilateral severe pain, trauma, or suspected avulsion or tumour", findings: "Soft-tissue swelling, apophyseal irregularity, separation and fragmentation, and a superficial ossicle in the patellar tendon [r1,r3]" },
      { modality: "Ultrasound or MRI", indication: "Diagnostic doubt, for example to separate OSD from Sinding-Larsen-Johansson syndrome or another cause", findings: "Imaging helps to separate OSD from Sinding-Larsen-Johansson disease, which has a similar presentation [r14]. Imaging features of OSD are common in the general adolescent population (2.3% of 12–15-year-olds on MRI), so results must be matched to symptoms [r11]." }
    ]
  },

  differentials: [
    { name: "Sinding-Larsen-Johansson syndrome", id: "sinding-larsen-johansson", distinguishing: "Tenderness at the inferior pole of the patella rather than the tuberosity. Both are traction apophysitis conditions with a similar presentation [r14,r4]." },
    { name: "Patellar tendinopathy", id: "patellar-tendinopathy", distinguishing: "Pain at the proximal tendon, below the inferior pole of the patella, in a skeletally mature jumping athlete" },
    { name: "Tibial tubercle avulsion fracture", id: "physeal-fracture", distinguishing: "Acute pop, inability to straighten the knee or walk, effusion and a high-riding patella, often in an older adolescent near physeal closure [r12,r13]. Obtain radiographs and refer." },
    { name: "Patellofemoral pain", id: "patellofemoral-pain", distinguishing: "Peripatellar pain with stairs, squatting and sitting, and no tuberosity tenderness. Adolescents with either condition had impaired knee function compared with pain-free controls [r6]." },
    { name: "Hoffa fat pad impingement", id: "hoffa-fat-pad-impingement", distinguishing: "Pain beside the patellar tendon, worse with knee extension and standing, with a tender fat pad rather than tuberosity" },
    { name: "Osteochondritis dissecans of the knee", id: "osteochondritis-dissecans-knee", distinguishing: "Deep, poorly localised pain, effusion or mechanical symptoms, and a lesion on imaging" },
    { name: "Hip pathology referring to the knee (for example slipped capital femoral epiphysis)", distinguishing: "Limp, reduced hip internal rotation and pain on hip movement. Always examine the hip in an adolescent with knee pain." }
  ],
  redFlags: [
    "Sudden pain with a pop, inability to extend the knee, a high-riding patella or inability to bear weight after a jump or sprint: suspect a tibial tubercle avulsion fracture. Arrange urgent radiographs and orthopaedic review [r12,r13].",
    "Knee pain with a limp, pain on hip movement or reduced hip internal rotation: examine the hip for slipped capital femoral epiphysis or other hip pathology, and refer urgently.",
    "Night pain, constant pain unrelated to activity, fever, weight loss or a firm enlarging mass: suspect infection or a bone tumour. Arrange blood tests and imaging, and refer.",
    "A hot, red, swollen knee with fever or the patient unwell: suspect septic arthritis. Refer to the emergency department.",
    "Locking, a persistent effusion or giving way: suspect intra-articular pathology and arrange MRI and orthopaedic review.",
    "Failure to improve after 12 weeks of well-delivered care, or pain that persists after physeal closure: arrange review for imaging and consideration of other causes or surgical opinion [r1,r3]."
  ],

  management: {
    principles: "Explain what OSD is, reassure that it is not dangerous, and set up a load-management plan with pain monitoring that keeps the adolescent active. There is a lack of evidence-based interventions, and passive approaches such as rest and avoidance of painful activities are often prescribed [r8]. A 2021 systematic review found only 13 studies (two RCTs) of poor to moderate quality. It reported that stretching had apparent efficacy, but that no RCT had compared specific exercises with sham or usual care [r7]. The best available data for an active approach are a 12-week case series of 51 adolescents aged 10–14. An activity ladder to manage patellar tendon loading, knee-strengthening exercises and a gradual return to sport led to a successful outcome in 80% at 12 weeks, rising to 90% at 12 months [r8]. This is uncontrolled, level 4 evidence. Surgery is a last resort for the skeletally mature [r1,r3]. Be honest with families that symptoms can last months to years, and that some adolescents still have pain years later [r5].",
    medical: [
      { name: "Short-term analgesia (paracetamol or a brief NSAID course)", description: "For pain flare-ups to allow activity modification. No OSD-specific trials were identified, and treatment is described as mainly symptomatic [r3].", evidence: "expert-opinion", recommendation: "consider", refs: ["r3"] },
      { name: "Surgical excision of the ossicle or tuberosity prominence (open or arthroscopic)", description: "For rare cases in the skeletally mature who remain symptomatic despite conservative care. Surgical excision of the ossicle and cartilaginous material may give good results [r1]. Arthroscopic techniques were considered the best surgical choice by the authors of one review [r3].", evidence: "limited", recommendation: "consider", refs: ["r1", "r3"] },
      { name: "Prolonged immobilisation, complete rest from sport, or rest as the only treatment", description: "Passive approaches are often prescribed despite the lack of evidence-based interventions [r8]. Rest alone does not address the knee extensor strength deficit seen in adolescents with OSD [r6], and no study in the sources reviewed showed that rest alone is effective. A retrospective soccer-academy cohort was managed without immobilisation, with a mean treatment duration of 27.3 days [r10]. This is not proof of harm, and short relative rest during a severe flare is reasonable, but prolonged rest should not be the main treatment.", evidence: "very-limited", recommendation: "not-recommended", refs: ["r8", "r10"] }
    ],
    physio: [
      { name: "Education and activity modification with pain monitoring (activity ladder)", description: "Explain the condition, agree a pain limit for activity, and adjust jumping, sprinting and kicking volume to keep pain within it instead of stopping sport. A 12-week program with this structure led to 80% reporting success [r8].", evidence: "limited", recommendation: "recommended", refs: ["r8"] },
      { name: "Progressive knee and hip strengthening", description: "Strengthening within the pain limit. In the case series, knee extension strength rose by 32%, hip abduction by 24% and jump performance by 14–19% after 12 weeks [r8]. Adolescents with OSD have lower knee extension strength than controls [r6].", evidence: "limited", recommendation: "recommended", refs: ["r8", "r6"] },
      { name: "Quadriceps and hamstring stretching", description: "The systematic review found apparent efficacy for stretching, but no RCT of specific exercises against sham or usual care [r7]. Stretching is suggested as prevention in a 2020 review [r2].", evidence: "limited", recommendation: "consider", refs: ["r7", "r2"] },
      { name: "Ice and local symptom relief", description: "Ice after activity is among the commonly recommended measures [r1]. It relieves symptoms but does not change the course.", evidence: "expert-opinion", recommendation: "consider", refs: ["r1"] },
      { name: "Padding or a strap for kneeling and contact", description: "Reduces pain from direct pressure on the tuberosity in contact sports. No trials were identified in the sources reviewed.", evidence: "expert-opinion", recommendation: "consider", refs: [] },
    ],
    education: [
      "OSD is an overuse problem of the growth area just below the knee. It is not a problem of the knee joint itself, and most cases settle once growth finishes [r1,r3].",
      "You usually do not have to stop sport. Keep pain within an agreed limit during and after activity, and adjust training when it goes beyond that.",
      "Strong thighs, hips and calves help the knee cope with the pulling forces of sport, so the exercises are an important part of recovery.",
      "Recovery can be slow. Some young people still have knee pain years later, so stay in touch if it does not settle [r5].",
      "A lump below the knee may remain after the pain settles. See a doctor urgently if you have sudden severe pain and cannot straighten the knee, or if there is a limp, night pain or fever."
    ]
  },

  rehab: {
    overview: "Progression follows load versus capacity. First settle symptoms by reducing the load that exceeds what the tuberosity can currently tolerate, without stopping sport entirely. Then build knee extensor and hip capacity, add power and jumping gradually, and return to sport in graded steps [r8]. Move on when objective criteria are met, not by the calendar. Dosages are typical clinical ranges, because the exact protocol of the 12-week case series was not available in the abstract reviewed [r8]. As a working rule, activity pain should stay at or below about 3/10 and settle within 24 hours (clinical convention). Check for tibial tubercle avulsion fracture symptoms at every review.",
    stages: [
      {
        name: "Settle & plan the load",
        timeframe: "Weeks 0–2",
        goals: ["Explain OSD and agree a pain limit", "Reduce load that provokes pain above the limit", "Maintain sport participation where pain allows", "Start gentle strengthening"],
        precautions: ["Avoid repeated jumping and sprinting that provoke pain above the limit (clinical convention)", "Protect the tuberosity from direct pressure", "Refer if there is a pop, inability to extend or a limp"],
        exercises: [
          { name: "Isometric wall sit", dosage: "5 × 30–45 s, daily, at a pain-free depth (about 60° of knee flexion)", cues: "Weight through the heels; knees over the toes", figure: { pose: "ex-wall-sit", view: "lateral", props: ["wall"] } },
          { name: "Glute bridge", dosage: "3 × 10–12, daily", cues: "Drive through the heels; keep the pelvis level", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Side-lying clamshell or hip abduction", dosage: "3 × 12–15 each side", cues: "Keep the pelvis stacked", figure: { pose: "ex-clamshell", view: "lateral", props: ["mat"] } },
          { name: "Calf raise", dosage: "3 × 15", cues: "Slow lowering", figure: { pose: "ex-calf-raise", view: "lateral" } },
          { name: "Quadriceps and hamstring stretching", dosage: "2–3 × 30 s each, daily", cues: "Gentle; stop at a stretch, not pain" }
        ],
        progressionCriteria: ["Pain with daily activity at or below 3/10", "Understanding of the pain limit and load plan", "Able to hold the wall sit for 5 × 30 s without increased pain next day"]
      },
      {
        name: "Build capacity",
        timeframe: "Weeks 2–6",
        goals: ["Increase knee extensor and hip strength", "Improve single-leg control", "Keep activity pain within the limit"],
        precautions: ["Keep pain at or below about 3/10 and settled within 24 hours (clinical convention)", "Increase load before volume", "Avoid heavy open-chain knee extension if it provokes tuberosity pain"],
        exercises: [
          { name: "Squat to a box", dosage: "3 × 8–12, 3 s lowering, 3 times a week", cues: "Knees over toes; weight through the whole foot", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Step-up", dosage: "3 × 10 each side", cues: "Pelvis level; knee tracks over the second toe", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Split squat", dosage: "3 × 8–10 each side", cues: "Upright trunk; front knee over the foot", figure: { pose: "ex-split-squat", view: "lateral" } },
          { name: "Romanian deadlift", dosage: "3 × 8–10", cues: "Hinge at the hip with a long spine", figure: { pose: "ex-rdl", view: "lateral", props: ["dumbbell"] } },
          { name: "Single-leg bridge", dosage: "3 × 10 each side", cues: "Keep the pelvis level", figure: { pose: "ex-single-leg-bridge", view: "lateral", props: ["mat"] } },
          { name: "Single-leg balance", dosage: "3 × 30 s each side", cues: "Level pelvis; soft knee", figure: { pose: "ex-single-leg-balance", view: "anterior" } }
        ],
        progressionCriteria: ["Pain at or below 3/10 with squats and step-ups", "Single-leg squat to 45–60° with good control", "No increase in tuberosity pain the next morning"]
      },
      {
        name: "Power & jump readiness",
        timeframe: "Weeks 6–12",
        goals: ["Restore knee extension and hip strength symmetry", "Reintroduce jumping and landing in small doses", "Run at low intensity if not already"],
        precautions: ["Increase jumping and sprint volume in small steps", "Stop the session if pain exceeds the limit", "Avoid training on consecutive days during flare-ups"],
        exercises: [
          { name: "Single-leg squat", dosage: "3 × 8 each side", cues: "Hip back; knee over foot", figure: { pose: "ex-single-leg-squat", view: "anterior" } },
          { name: "Step-down (forward)", dosage: "3 × 8–12, 3 s lowering", cues: "Pelvis level", figure: { pose: "ex-step-down", view: "anterior", props: ["step"] } },
          { name: "Jump-squat and soft landing", dosage: "3 × 5 with full recovery; start with low height", cues: "Land quietly on bent hips and knees", figure: { pose: "ex-jump-squat", view: "lateral" } },
          { name: "Single-leg hop (in place, then forward)", dosage: "3 × 5 each side", cues: "Stick the landing for 2 s", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Single-leg calf raise", dosage: "3 × 10–15", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } }
        ],
        progressionCriteria: ["Pain at or below 3/10 during jumping and settled within 24 hours", "Knee extension strength close to the other side (about 90%, clinical convention)", "Controlled landing without knee collapse"]
      },
      {
        name: "Graded return to sport",
        timeframe: "Weeks 12–52 (individual)",
        goals: ["Return to full training and match play", "Keep strength and flexibility work in the weekly routine", "Plan load around the growth spurt"],
        precautions: ["Expect a gradual return: 16% were playing sport at 12 weeks and 69% at 12 months in one case series [r8]", "Re-check for pain after higher-load weeks", "Review the plan if symptoms rise with a growth spurt"],
        exercises: [
          { name: "Sport-specific drills at progressive volume", dosage: "Increase jumping, sprinting or kicking volume in steps, for example 10–20% a week (clinical convention)", cues: "Keep activity pain at or below the agreed limit" },
          { name: "Planned then unplanned cutting and landing drills", dosage: "2–3 sessions per week", cues: "Soft landing; knee over foot", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Heavy strength maintenance (squat, split squat, hamstrings)", dosage: "2 times a week, 3 × 6–10" },
          { name: "Stretching and mobility routine", dosage: "2–3 times a week, 30 s per stretch" }
        ],
        progressionCriteria: ["Full training with pain at or below 3/10 and settling within 24 hours", "No tuberosity pain after matches", "Strength and jump performance close to the other side and age-matched expectations"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated OSD-specific return-to-sport (RTS) criteria were identified in the sources reviewed. The criteria below reflect clinical convention and the case-series design [r8].",
      "Pain during and after sport at or below the agreed limit (about 3/10) and settling within 24 hours",
      "Full pain-free range and no swelling at the tuberosity after loading",
      "Knee extension and hip abduction strength close to the other side (about 90%)",
      "Jump and landing tasks without pain or knee collapse",
      "A graded plan for training and match volume, with a review point after each increase"
    ],
    tests: [
      "Hand-held dynamometry of knee extension and hip abduction",
      "Jump for distance and height, and single-leg hop tests [r8]",
      "Single-leg squat quality",
      "Pain monitoring (numeric rating scale) during and 24 hours after sport"
    ]
  },
  prognosis: "OSD is described as self-limiting, with recovery expected at closure of the tibial growth plate, and an overall good prognosis apart from some discomfort on kneeling and activity restriction in a few people [r1,r3]. Non-operative care is successful in about 90% of patients according to reviews [r1,r2]. Studies of long-term outcome are less reassuring. In a retrospective cohort, 60.5% of 43 responders (of 84 patients contacted) had OSD-related knee pain at a median of 3.75 years. The median symptom duration of those still in pain was 90 months, 42.9% had daily pain, and their KOOS sport and recreation scores were lower (53 versus 85) [r5]. The low response rate and retrospective design mean that the true proportion with persistent pain is uncertain. A case series of 51 adolescents reported a mean pain duration of 21 months before enrolment, with 80% successful outcomes at 12 weeks and 90% at 12 months [r8]. A small proportion of skeletally mature patients need ossicle excision [r1,r3].",
  prevention: [
    "Quadriceps and hamstring stretching is suggested as prevention in a 2020 review, but trial evidence is lacking [r2,r7].",
    "Match training load to growth stage. Monitor jumping, running and kicking volume during growth spurts (clinical opinion; no trial data identified).",
    "Keep strength training for the knee extensors, hips and calves as part of youth sport programs [r6].",
    "Act early on tuberosity pain by modifying load, because OSD is common in sport-active adolescents [r9]."
  ],
  clinicalPearls: [
    "OSD is a clinical diagnosis: a tender tuberosity in an adolescent athlete that is reproduced by resisted extension or kneeling. Imaging features are common in the general adolescent population and do not confirm that the tuberosity is the pain source [r1,r11].",
    "Avoid telling families that OSD will settle quickly. Median pain duration was 90 months in those with ongoing pain in one follow-up, and pain persisted for months before treatment in trial cohorts [r5,r8].",
    "Rest alone is the traditional advice, but the active approach (pain-monitored activity, strengthening and graded return) is better documented, and the strength deficit is real [r8,r6,r7].",
    "Use pain during and 24 hours after sport to set the load. Then increase gradually, so that the adolescent keeps playing [r8].",
    "Always screen the hip in a limping adolescent with knee pain, and think of tubercle avulsion if the pain is sudden and severe after a jump [r12,r13].",
    "Confirm whether the pain is at the tuberosity or at the inferior pole of the patella. The two conditions look alike and need different imaging attention [r14]."
  ],
  related: ["sinding-larsen-johansson", "patellar-tendinopathy", "patellofemoral-pain", "hoffa-fat-pad-impingement", "physeal-fracture", "calcaneal-apophysitis"],

  references: [
    { id: "r1", citation: "Gholve PA, Scher DM, Khakharia S, et al. Osgood Schlatter syndrome. Curr Opin Pediatr. 2007;19(1):44-50.", pmid: "17224661", doi: "10.1097/MOP.0b013e328013dbea", type: "narrative-review", year: 2007 },
    { id: "r2", citation: "Ladenhauf HN, Seitlinger G, Green DW. Osgood-Schlatter disease: a 2020 update of a common knee condition in children. Curr Opin Pediatr. 2020;32(1):107-12.", pmid: "31714260", doi: "10.1097/MOP.0000000000000842", type: "narrative-review", year: 2020 },
    { id: "r3", citation: "Circi E, Atalay Y, Beyzadeoglu T. Treatment of Osgood-Schlatter disease: review of the literature. Musculoskelet Surg. 2017;101(3):195-200.", pmid: "28593576", doi: "10.1007/s12306-017-0479-7", type: "narrative-review", year: 2017 },
    { id: "r4", citation: "Lintner LJ, Swisher J, Sitton ZE. Childhood and adolescent sports-related overuse injuries. Am Fam Physician. 2023;108(6):544-53.", pmid: "38215415", type: "narrative-review", year: 2023 },
    { id: "r5", citation: "Guldhammer C, Rathleff MS, Jensen HP, et al. Long-term prognosis and impact of Osgood-Schlatter disease 4 years after diagnosis: a retrospective study. Orthop J Sports Med. 2019;7(10):2325967119878136.", pmid: "31700938", doi: "10.1177/2325967119878136", type: "cohort", year: 2019 },
    { id: "r6", citation: "Rathleff MS, Winiarski L, Krommes K, et al. Pain, sports participation, and physical function in adolescents with patellofemoral pain and Osgood-Schlatter disease: a matched cross-sectional study. J Orthop Sports Phys Ther. 2020;50(3):149-57.", pmid: "31905093", doi: "10.2519/jospt.2020.8770", type: "cross-sectional", year: 2020 },
    { id: "r7", citation: "Neuhaus C, Appenzeller-Herzog C, Faude O. A systematic review on conservative treatment options for Osgood-Schlatter disease. Phys Ther Sport. 2021;49:178-87.", pmid: "33744766", doi: "10.1016/j.ptsp.2021.03.002", type: "systematic-review", year: 2021 },
    { id: "r8", citation: "Rathleff MS, Winiarski L, Krommes K, et al. Activity modification and knee strengthening for Osgood-Schlatter disease: a prospective cohort study. Orthop J Sports Med. 2020;8(4):2325967120911106.", pmid: "32284945", doi: "10.1177/2325967120911106", type: "cohort", year: 2020 },
    { id: "r9", citation: "Kujala UM, Kvist M, Heinonen O. Osgood-Schlatter's disease in adolescent athletes. Retrospective study of incidence and duration. Am J Sports Med. 1985;13(4):236-41.", pmid: "4025675", doi: "10.1177/036354658501300404", type: "cross-sectional", year: 1985 },
    { id: "r10", citation: "Bezuglov EN, Tikhonova AA, Chubarovskiy PV, et al. Conservative treatment of Osgood-Schlatter disease among young professional soccer players. Int Orthop. 2020;44(9):1737-43.", pmid: "32346752", doi: "10.1007/s00264-020-04572-3", type: "cohort", year: 2020 },
    { id: "r11", citation: "Kemmeren LAM, Oei EHG, van Middelkoop M, et al. Prevalence of abnormalities and normal variants in the adolescent knee on MRI in a population-based cohort of 3800 knees. Am J Sports Med. 2024;52(12):3039-45.", pmid: "39279277", doi: "10.1177/03635465241277162", type: "cross-sectional", year: 2024 },
    { id: "r12", citation: "Sheppard ED, Ramamurti P, Stake S, et al. Posterior tibial slope is increased in patients with tibial tubercle fractures and Osgood-Schlatter disease. J Pediatr Orthop. 2021;41(6):e411-6.", pmid: "33782370", doi: "10.1097/BPO.0000000000001818", type: "case-control", year: 2021 },
    { id: "r13", citation: "Duri ZAA, Patel DV, Aichroth PM. The immature athlete. Clin Sports Med. 2002;21(3):461-82.", pmid: "12365238", doi: "10.1016/s0278-5919(01)00008-4", type: "narrative-review", year: 2002 },
    { id: "r14", citation: "Ziskin EK, Carter KK, Diaz-Parker S, et al. Anterior knee pain in young athletes: Osgood Schlatter or Sinding-Larsen-Johansson disease? JAAPA. 2023;36(10):1-3.", pmid: "37751269", doi: "10.1097/01.JAA.0000977724.84515.ff", type: "narrative-review", year: 2023 }
  ],

  animation: {
    title: "How Osgood–Schlatter disease develops",
    phases: [
      {
        type: "moi", label: "Repeated loading", duration: 7, view: "lateral", environment: "court",
        actors: [{ id: "athlete", kit: "child" }],
        keyframes: [
          { t: 0, pose: "stand", root: { x: 0 } },
          { t: 0.8, pose: "squat", root: { x: 0 } },
          { t: 1.4, pose: "jump-takeoff", root: { x: 0 }, ease: "out" },
          { t: 2.0, pose: "jump-flight", root: { x: 0, lift: 40 } },
          { t: 2.8, pose: "jump-land", root: { x: 0, lift: 0 }, ease: "in" },
          { t: 3.5, pose: "squat", root: { x: 0 } },
          { t: 4.1, pose: "jump-takeoff", root: { x: 0 }, ease: "out" },
          { t: 4.7, pose: "jump-flight", root: { x: 0, lift: 45 } },
          { t: 5.5, pose: "jump-land", root: { x: 0, lift: 0 }, ease: "in" },
          { t: 6.3, pose: "squat", root: { x: 0 } }
        ],
        props: [{ id: "ball", type: "ball-basketball", attach: "handL" }],
        forces: [
          { t: [1.4, 2.0], at: "footR", dir: "down", label: "Push-off" },
          { t: [2.8, 3.7], at: "kneeR", dir: "up", label: "Quadriceps pulls through the tendon" },
          { t: [2.8, 3.7], at: "shinR", dir: "down", label: "Pull on the growing tibia" },
          { t: [5.5, 6.6], at: "kneeR", dir: "up", label: "Repeated, jump after jump" }
        ],
        highlights: [{ t: [2.6, 7], at: "shinR" }],
        slowmo: [{ t: [2.7, 3.7], rate: 0.4 }],
        captions: [
          { t: 0, text: "A young basketball player in a growth spurt trains and jumps many times a week." },
          { t: 1.3, text: "Each jump loads the quadriceps. Its pull passes through the patella and patellar tendon." },
          { t: 2.9, text: "On landing the quadriceps brakes the fall, and the tendon pulls on the top of the shin bone." },
          { t: 4.0, text: "In the growth spurt that attachment is still growth cartilage, the weakest part of the bone." },
          { t: 5.2, text: "When load builds faster than the growing attachment can adapt, the load exceeds its capacity." },
          { t: 6.2, text: "There is no single injury: pain builds up below the knee over weeks of repeated pulling." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "kneeR",
        captions: [{ t: 0, text: "Zooming into the right knee from the side." }]
      },
      {
        type: "closeup", label: "Inside the knee", duration: 10, scene: "knee-sagittal",
        actions: [
          { t: 0, do: "highlight", target: "tibialApophysis" },
          { t: 0.3, do: "label", target: "tibialApophysis", text: "Tibial tuberosity apophysis (growth cartilage)" },
          { t: 1.0, do: "arrow", at: "quadricepsTendonInsertion", dir: "superior", label: "Quadriceps pull" },
          { t: 1.0, do: "arrow", at: "tibialTuberosity", dir: "superior", label: "Tendon pulls on the tuberosity" },
          { t: 1.2, do: "stretch", target: "patellarTendon", amount: 0.3, dur: 1.0 },
          { t: 2.5, do: "reset", target: "patellarTendon" },
          { t: 3.2, do: "stretch", target: "patellarTendon", amount: 0.35, dur: 0.9 },
          { t: 3.8, do: "stress", target: "tibialApophysis", at: "tibialTuberosity" },
          { t: 5.0, do: "inflame", target: "tibialApophysis", amount: 0.5, dur: 1.2 },
          { t: 5.4, do: "pain", at: "tibialTuberosity", hold: 3 },
          { t: 6.2, do: "separate", target: "tibialApophysis", grade: "I" },
          { t: 6.6, do: "label", target: "tibialApophysis", text: "Partial separation and fragmentation" },
          { t: 7.8, do: "camera", at: "tibialTuberosity", zoom: 1.7, dur: 1.0 },
          { t: 9.3, do: "camera", zoom: 1, dur: 0.6 }
        ],
        captions: [
          { t: 0, text: "The patellar tendon attaches to the tibial tuberosity, a growth centre (apophysis) in adolescents." },
          { t: 1.0, text: "The quadriceps pulls on the patella, and the tendon pulls on the tuberosity: this is traction, not compression." },
          { t: 2.5, text: "At rest the tendon relaxes. With each jump, sprint or kick it is loaded again." },
          { t: 3.8, text: "Repeated pulling stresses the apophysis, the weak link in a growing skeleton." },
          { t: 5.0, text: "The area becomes irritated and painful, with local tenderness and sometimes swelling." },
          { t: 6.2, text: "On radiographs the apophysis may separate and fragment, and an ossicle can form in the tendon." },
          { t: 7.9, text: "As growth finishes, the apophysis fuses and most symptoms settle, although pain can persist for years." }
        ]
      },
      {
        type: "micro", label: "Growth plate", duration: 10, tissue: "physis",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.4, stage: "traction" }, { t: 3.2, stage: "microdamage" },
          { t: 5.0, stage: "inflammation" }, { t: 6.6, stage: "separation" }, { t: 8.2, stage: "healing" }
        ],
        timeLabels: [{ t: 1.4, text: "Weeks of loading" }, { t: 3.2, text: "Weeks" }, { t: 5.0, text: "Weeks to months" }, { t: 6.6, text: "Months" }, { t: 8.2, text: "Months to years" }],
        captions: [
          { t: 0, text: "Healthy growth cartilage: orderly columns of cells that lay down new bone." },
          { t: 1.4, text: "Repeated tendon pull loads the cartilage in tension, which it is poor at resisting." },
          { t: 3.2, text: "Load exceeds capacity: microdamage appears at the cartilage–bone junction." },
          { t: 5.0, text: "Local irritation and swelling develop, and the area becomes sensitive and painful." },
          { t: 6.6, text: "The apophysis partially separates and fragments. Drawn as a schematic growth-plate model." },
          { t: 8.2, text: "With load management and strength, the area settles and the apophysis fuses as growth ends." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL6" }
};
