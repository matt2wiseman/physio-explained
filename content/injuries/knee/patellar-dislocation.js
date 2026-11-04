export default {
  id: "patellar-dislocation",
  name: "Lateral patellar dislocation",
  shortName: "Patellar dislocation",
  aka: ["kneecap dislocation", "dislocated patella", "lateral patellar dislocation", "acute patellar dislocation", "patellofemoral dislocation", "MPFL tear", "patellar instability"],
  region: "knee",
  tissues: ["ligament", "cartilage", "bone"],
  onset: "acute",
  mechanismType: ["non-contact", "contact"],
  populations: ["adolescents", "young adults", "female adolescents", "field and court sport athletes", "dancers"],
  sports: ["soccer", "basketball", "netball", "volleyball", "rugby", "australian football", "gymnastics", "dance"],
  urgency: "urgent",
  summary: "The patella leaves the trochlear groove, almost always laterally, usually in a twisting knee injury. The medial patellofemoral ligament tears, and the patella often relocates on its own.",
  keyFacts: [
    { label: "Incidence", value: "About 23 per 100,000 person-years overall; about 148 per 100,000 at age 14–18" },
    { label: "Recurrence", value: "Roughly 17–40% after a first dislocation, depending on risk factors, population and follow-up" },
    { label: "Key test", value: "Medial patellar tenderness and patellar apprehension; no validated accuracy data identified" },
    { label: "Imaging", value: "Radiographs for fracture or loose body; MRI shows MPFL injury and bone bruises" },
    { label: "Typical recovery", value: "Rehabilitation over about 3–6 months; criteria-based, not time-based" },
    { label: "Management", value: "Most uncomplicated first dislocations are managed without surgery" }
  ],
  overview: "In a lateral patellar dislocation the patella disengages from the trochlear groove and moves lateral to the lateral femoral condyle. It is one of the commonest acute knee injuries in adolescents and young adults [r1]. The medial patellofemoral ligament (MPFL) is the main soft-tissue restraint to lateral patellar translation and is injured in most dislocations [r2,r3,r4]. The patella often relocates by itself when the knee straightens, so the patient may present with a swollen, painful knee and no visible deformity.\n\nMost people with an uncomplicated first dislocation are managed with rehabilitation. Expert consensus supports non-operative management unless an osteochondral fracture or loose body needs surgery [r5,r6]. Whether early surgery lowers the chance of another dislocation remains unclear: a 2023 Cochrane review rated all its evidence as very low certainty [r7]. A first dislocation is therefore a decision about risk. Anatomy (trochlear dysplasia, patella alta), skeletal immaturity, age and previous dislocation all raise the risk of recurrence [r8,r9].\n\nThe physiotherapist's roles are to screen for associated injury, manage the acute knee, lead a progressive strength and control program, counsel on recurrence risk and recognise the patient who should be referred for surgical review."
  ,

  epidemiology: {
    text: "In a 21-year population-based study of first-time lateral patellar dislocation, the age- and sex-adjusted incidence was 23.2 per 100,000 person-years. It was highest in adolescents aged 14–18 years (147.7 per 100,000 person-years). The mean age at dislocation was 21.4 years, and 54.4% of patients were female [r1]. A prospective cohort also found the risk highest in females aged 10–17 years [r9]. Recurrence is common but varies widely between studies. In that cohort, 17% of first-time dislocators had further instability episodes over 2–5 years compared with 49% of patients who already had a history of instability [r9]. The Cochrane review notes recurrence in up to 40% of people after a first dislocation [r7].",
    riskFactors: {
      intrinsic: [
        "Trochlear dysplasia (the strongest anatomical predictor of recurrence in a paediatric cohort; OR 3.56) [r8]",
        "Skeletal immaturity, with open or closing physes (OR 2.23), and age 14 years or younger [r8]",
        "Patella alta (Caton-Deschamps index above 1.45) [r8]",
        "Previous dislocation, including on the other side [r8,r9]",
        "Adolescence: incidence peaks at 14–18 years [r1]. Female sex raised risk in one cohort [r9], although a population study found similar incidence in males and females [r1]",
        "A 'WARPS' pattern (weak, atraumatic, risky anatomy, pain, subluxation) rather than a 'STAID' pattern (strong, traumatic, anatomy normal, instability, dislocation) [r10]"
      ],
      extrinsic: [
        "Sports with cutting, pivoting and sudden deceleration, such as soccer, basketball, netball and football codes",
        "Contact or direct blow to the medial knee in some cases",
        "Inadequate rehabilitation or early return to sport (clinical observation; no trial data identified in the sources reviewed)"
      ]
    }
  },

  mechanism: {
    summary: "The classic mechanism is a non-contact twisting injury. The foot is planted, the knee is flexed, and the femur rotates internally over the fixed tibia as the knee collapses into valgus. The quadriceps pull then drives the patella over the lateral trochlear ridge. A direct blow to the medial patella can also cause it. No mechanism-of-injury study was identified in the sources reviewed, so the sequence below is the standard clinical description. It fits the injury pattern on MRI: medial patellar restraint damage with bone bruises of the lateral femoral condyle and the medial patella [r4].",
    sequence: [
      "The athlete plants the foot to cut, pivot or decelerate, with the knee flexed.",
      "The body turns over the fixed foot, so the femur rotates internally on the tibia and the knee collapses into valgus.",
      "The line of quadriceps pull moves laterally relative to the trochlear groove, so the patella is pushed toward the lateral femoral condyle.",
      "The patella rides up over the lateral trochlear ridge and dislocates laterally.",
      "The MPFL and the medial retinaculum fail, at either attachment or in mid-substance, and the inferomedial patella may be avulsed or chipped [r2,r3,r4].",
      "As the knee extends or is reduced, the patella relocates. The medial patella strikes the lateral femoral condyle, and both bruise [r4].",
      "The knee swells with a haemarthrosis. The patient reports the knee 'went out' and may describe the patella being visibly displaced."
    ],
    variants: [
      { name: "Non-contact twisting (most common in sport)", description: "A planted foot with trunk rotation or sudden direction change in a flexed, valgus knee, as described above." },
      { name: "Direct blow", description: "A direct blow to the medial patella or medial knee displaces the patella laterally, or a fall onto the knee. The same medial restraint injuries follow." },
      { name: "Atraumatic or low-energy dislocation (WARPS pattern)", description: "In patients with risky anatomy, the patella can dislocate with little or no trauma, for example when turning, and may do so repeatedly [r10]." },
      { name: "Paediatric dislocation", description: "Open physes change the injury pattern and risk. Assessing physeal status is critical in children with patellar instability (unanimous expert consensus) [r11]." }
    ]
  },

  anatomy: {
    text: "The patella sits in the trochlear groove of the distal femur. The lateral trochlear ridge is higher than the medial, which helps resist lateral translation, and trochlear dysplasia reduces this bony restraint. Soft-tissue restraints add stability. In cadavers at 20° of knee flexion the MPFL contributed about 60% of the total restraining force to lateral translation, the medial patellomeniscal ligament about 13% and the lateral retinaculum about 10% [r2]. The MPFL runs from the femur, between the adductor tubercle and the medial epicondyle, to the superomedial patella. It lies extra-articular, deep to the vastus medialis obliquus (VMO), which provides dynamic medial support.",
    structures: [
      { name: "Medial patellofemoral ligament (MPFL)", role: "Primary soft-tissue restraint to lateral patellar translation, at 20° of knee flexion in cadavers [r2]" },
      { name: "Medial patellomeniscal ligament and medial retinaculum", role: "Secondary medial restraints; the patellomeniscal ligament contributed about 13% of the restraint in cadavers [r2]" },
      { name: "Lateral retinaculum", role: "Contributes about 10% of the restraint to lateral translation, so isolated lateral release is not an adequate treatment [r2,r5]" },
      { name: "Vastus medialis obliquus (VMO)", role: "Dynamic medial stabiliser inserting alongside the MPFL on the medial patella" },
      { name: "Trochlear groove and patellar facets", role: "Bony congruence that guides the patella; the lateral trochlear ridge blocks lateral displacement." },
      { name: "Patellar and trochlear cartilage", role: "Weight-bearing surfaces that are injured when the patella dislocates and relocates [r4]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "When the patella dislocates, the medial restraints are loaded far beyond their capacity. In a cadaver model of lateral dislocation, the MPFL was injured in 8 of 10 knees, with an avulsion fracture from the inferomedial patellar border in 8 of 10. Femoral-sided tears were most frequent (6 of 10), but tears varied in location [r3]. On MRI after acute dislocation, medial retinacular disruption at the patellar insertion was seen in 76% of knees and at mid-substance in 30%. The MPFL femoral origin was injured in 49% of the knees where it could be identified, and 48% showed more than one site of medial stabiliser injury [r4].\n\nOn relocation the medial patellar facet impacts the lateral femoral condyle. MRI showed bone contusions of the lateral femoral condyle in 80% of knees and of the medial patella in 61%. Osteochondral injury of the inferomedial patella was present in 70%, with a concave impaction deformity in 44% (and in none of 100 controls). Intra-articular bodies were seen in 15%, an effusion in 55%, MCL injury in 11% and meniscal tear in 11% [r4]. The osteochondral injuries matter because loose fragments can need surgery, and chondral damage may add to long-term patellofemoral symptoms. MPFL-specific histology after dislocation was not identified in the sources reviewed, so the cellular timeline below follows general ligament healing.",
    structures: [
      { name: "Medial patellofemoral ligament", effect: "Torn or stretched in most dislocations. Tears may be at the femoral origin, mid-substance or patellar attachment [r3,r4]." },
      { name: "Medial retinaculum and VMO", effect: "Retinacular disruption in about three-quarters of cases on MRI. VMO oedema or haemorrhage in 45% [r4]." },
      { name: "Inferomedial patella", effect: "Osteochondral injury or avulsion fracture. Concave impaction deformity is a specific sign of previous dislocation [r4,r3]." },
      { name: "Lateral femoral condyle", effect: "Bone contusion from the impact of the medial patella on relocation (80% of knees on MRI) [r4]" },
      { name: "Articular cartilage", effect: "Chondral flap, fracture or loose body in some knees; these can require early surgery [r5,r4]" }
    ],
    muscles: [
      { name: "Quadriceps (including VMO)", effect: "Swelling and pain inhibit quadriceps activation, causing quadriceps weakness and extensor lag early on. Atrophy follows if exercises are delayed." },
      { name: "Hip abductors and external rotators", effect: "Poor control of femoral adduction and internal rotation may contribute to dynamic valgus. Strengthening is a standard part of rehabilitation [r12]." },
      { name: "Hamstrings and gastrocnemius", effect: "Protective guarding and reduced knee range of motion in the acute phase" }
    ],
    cellular: [
      { phase: "Haemorrhage and inflammation", timing: "Day 0–5", description: "Torn vessels bleed into the joint and surrounding tissue. Platelets and inflammatory cells infiltrate the damaged ligament and retinaculum, as in other ligament injuries." },
      { phase: "Proliferation", timing: "Day 5–6 weeks", description: "Fibroblasts lay down disorganised collagen across the torn medial structures. The scar may heal longer than the original ligament." },
      { phase: "Remodelling", timing: "6 weeks to 12+ months", description: "Collagen realigns along the line of load. Whether the healed MPFL regains its original restraint is uncertain, and recurrence is common [r9,r7]." }
    ],
    systems: [
      { system: "Nervous system", effect: "Arthrogenic inhibition from the effusion limits voluntary quadriceps activation. Apprehension protects the knee from lateral patellar translation." },
      { system: "Inflammatory and joint", effect: "Haemarthrosis and synovitis follow, with the risk of cartilage damage and loose bodies [r4]." },
      { system: "Musculoskeletal chain", effect: "Hip, trunk and foot control influence femoral rotation and valgus. Anatomical risk factors such as trochlear dysplasia and patella alta are not changed by rehabilitation [r8]." },
      { system: "Psychological", effect: "Fear of the knee 'going out again' (apprehension) can limit participation and sport, even without a repeat dislocation." },
      { system: "Long-term joint health", effect: "Patellofemoral cartilage injury and repeated dislocations may lead to patellofemoral osteoarthritis. Long-term rates were not established in the sources reviewed." }
    ]
  },

  grading: {
    system: "Clinical pattern of patellar instability (WARPS versus STAID)",
    grades: [
      { grade: "STAID pattern", description: "Strong, traumatic, anatomy normal, instability and dislocation: a traumatic dislocation in a knee with otherwise normal anatomy [r10].", prognosis: "Managed non-operatively unless an osteochondral fragment needs surgery [r5]" },
      { grade: "WARPS pattern", description: "Weak, atraumatic, risky anatomy, pain and subluxation: instability that arises with little trauma in a knee with unfavourable anatomy [r10].", prognosis: "Anatomical risk factors such as trochlear dysplasia raise recurrence risk [r8]. Consensus agrees bony procedures should correct underlying bony deformity, but not on which procedure [r5]." },
      { grade: "First-time versus recurrent", description: "A first-time dislocation carries a lower risk of further instability than a history of previous dislocation (17% versus 49% in one cohort) [r9].", prognosis: "Recurrent instability is managed surgically in most consensus statements, usually with medial reconstruction [r5]" }
    ]
  },

  timeframes: {
    summary: "Pain and swelling settle over days to weeks, and the medial structures heal over about 6 weeks with remodelling for a year or more. Rehabilitation focuses on restoring strength and control. Time-based return-to-sport targets are widely used, but no consensus exists on timing after surgery, so progression should rest on objective criteria [r13].",
    healing: [
      { phase: "Haemarthrosis and inflammation", startDay: 0, endDay: 7, description: "Swelling, pain and quadriceps inhibition are at their worst; protect and settle the knee" },
      { phase: "Early proliferation and mobilisation", startDay: 5, endDay: 42, description: "Medial structures heal by scar; restore range, quadriceps activation and normal gait" },
      { phase: "Strengthening and neuromuscular control", startDay: 14, endDay: 90, description: "Progressive lower-limb strengthening and control; no apprehension" },
      { phase: "Remodelling and return to sport", startDay: 42, endDay: 270, description: "Collagen remodels; graded return to running, landing and sport" }
    ],
    milestones: [
      { label: "Walking without aids", day: 7, note: "Typical clinical expectation; varies with effusion" },
      { label: "Full knee extension and 120° of flexion without apprehension", day: 28, note: "Clinical convention" },
      { label: "Start running", day: 70, note: "When criteria are met (clinical convention)" },
      { label: "Cutting and landing drills", day: 112, note: "Clinical convention" },
      { label: "Earliest return to pivoting sport", day: 150, note: "Criteria-based, not time-based [r13]" }
    ],
    returnToSport: "Typically 3–6 months after a non-operative first dislocation, and about 4–6 months or more after surgery, but these ranges are clinical convention only. Return is criteria-based. No consensus on timing after surgery was found [r13], and experts did not agree on whether paediatric patients should avoid early return to sport [r14]."
  },

  clinicalPresentation: {
    symptoms: [
      "Sudden pain, a sensation of the kneecap 'popping out' and a feeling that the knee gave way during a twist",
      "A visible displacement of the patella to the lateral side in some patients, or a history that it 'went back in' by itself",
      "Rapid swelling over a few hours (haemarthrosis)",
      "Anterior and medial knee pain, worse with bending, stairs and weight-bearing",
      "Apprehension or a feeling the patella will move again when the knee is moved"
    ],
    signs: [
      "Effusion or haemarthrosis (often large)",
      "Tenderness over the medial patellar border and the MPFL's femoral origin; occasionally over the lateral femoral condyle",
      "Positive patellar apprehension with lateral glide (once pain allows)",
      "Reduced active knee flexion and extensor lag due to pain and effusion",
      "Antalgic gait; a persistently displaced patella if not relocated"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism: twisting with a planted foot, direct blow or minor movement (atraumatic suggests anatomical risk factors) [r10]",
      "Whether the patella relocated spontaneously, and whether the event is a first-time dislocation or recurrent",
      "Previous instability on either side, and family history of patellar instability or laxity",
      "Swelling onset, locking or catching (loose body or osteochondral fragment) [r5]",
      "Sport, level and position, season timing, and the patient's goals",
      "Apprehension, fear of re-dislocation and confidence in the knee"
    ],
    observation: [
      "Effusion, bruising and patellar position, in a persistently displaced patella",
      "Gait: antalgic, stiff-knee",
      "Lower-limb alignment: genu valgum, femoral anteversion, foot pronation, and generalised hypermobility",
      "Patellar tracking and the J-sign when the knee is actively extended (once settled)"
    ],
    palpation: [
      "Medial patellar border and adductor tubercle: tenderness suggests MPFL injury",
      "Lateral femoral condyle tenderness: bone contusion",
      "Joint lines and the patellar tendon and quadriceps tendon",
      "Effusion: stroke test or patellar tap"
    ],
    rangeOfMotion: [
      "Active and passive knee flexion and extension, recorded against the other knee. An inability to extend suggests a mechanical block such as a loose body.",
      "Hip internal and external rotation, tibial torsion and foot posture"
    ],
    strength: [
      "Quadriceps lag on straight-leg raise and activation without pain",
      "Hand-held dynamometry for quadriceps, hamstrings and hip abductors once pain allows",
      "Hip abductor and external rotator strength"
    ],
    neuro: [
      "Distal pulses and sensation (to exclude a spontaneously reduced knee dislocation)",
      "Screen for peroneal nerve symptoms if swelling is severe"
    ],
    functional: [
      "Single-leg squat and step-down quality (dynamic valgus, pelvic drop)",
      "Hop tests and landing assessment once criteria are met",
      "Running and cutting mechanics before return to sport"
    ],
    specialTests: [
      { name: "Patellar apprehension test (Fairbank)", purpose: "Detect instability with lateral patellar translation", procedure: "Patient supine with the knee flexed to about 20–30° and relaxed. Apply a gentle laterally directed force to the patella.", positive: "The patient shows apprehension, guards or contracts the quadriceps to resist further displacement. Interpret with caution in the acute phase due to pain. No accuracy data were identified in the sources reviewed.", refs: [] },
      { name: "Patellar glide (lateral translation) test", purpose: "Assess laxity of the medial restraints", procedure: "Patient supine with the knee flexed to about 20–30°. Translate the patella laterally and medially, comparing with the other side.", positive: "Excessive lateral translation compared with the other side, or a soft end-point. No accuracy data were identified.", refs: [] },
      { name: "J-sign", purpose: "Maltracking at terminal extension", procedure: "With the patient seated, the knee is actively extended from flexion. Watch the patella as it leaves the trochlea.", positive: "A sudden lateral shift in the patella at terminal extension, shaped like an inverted 'J'. No accuracy data were identified.", refs: [] }
    ],
    clinicalRules: [
      { name: "Ottawa knee rules", description: "Use to decide on radiographs after acute knee trauma. After a patellar dislocation, imaging also looks for an associated osteochondral fracture or loose body, which changes management [r5,r6]." }
    ],
    outcomeMeasures: [
      { name: "Kujala Patellofemoral Disorders Score (Anterior Knee Pain Scale)", use: "The most frequently reported function score in trials of patellar dislocation [r7]" },
      { name: "Norwich Patellar Instability Score", use: "Patient-reported instability symptoms (clinical use; no source reviewed)" },
      { name: "Tegner activity scale and KOOS", use: "Activity level and knee function [r7,r15]" },
      { name: "Hop tests and quadriceps limb symmetry index", use: "Objective strength and function before return to sport (clinical convention)" }
    ],
    imaging: [
      { modality: "Plain radiographs (AP, lateral, skyline)", indication: "All acute dislocations: to exclude fracture, osteochondral fragment or loose body", findings: "Patellar position, avulsion fragments from the medial patella, loose bodies, patella alta, and trochlear dysplasia on lateral view" },
      { modality: "MRI", indication: "Suspected osteochondral injury, a locked knee or planning surgery. Not mandatory for every first-time dislocation.", findings: "MPFL and medial retinacular injury (retinacular disruption at the patellar insertion in 76%), lateral femoral condyle bone contusion (80%), medial patellar contusion (61%), inferomedial patellar osteochondral injury (70%), concave impaction deformity (44%), effusion (55%) and loose bodies (15%) [r4]" },
      { modality: "CT or MRI measurements (TT–TG, trochlear dysplasia, patellar height)", indication: "Recurrent instability or surgical planning", findings: "Trochlear dysplasia and patella alta (Caton-Deschamps index above 1.45) predict recurrence in children [r8]" }
    ]
  },

  differentials: [
    { name: "ACL rupture", id: "acl-rupture", distinguishing: "Also causes a pop and haemarthrosis. Look for medial patellar tenderness, positive patellar apprehension and a negative Lachman in patellar dislocation." },
    { name: "Patellar fracture or osteochondral fracture", id: "patella-fracture", distinguishing: "Bony tenderness, inability to straight-leg raise, and a fragment on radiographs. Osteochondral fractures are common after patellar dislocation [r5,r4]." },
    { name: "Meniscal tear", id: "meniscal-tear", distinguishing: "Joint-line tenderness, locking or catching, and a positive McMurray test. Meniscal tears occurred in 11% of dislocations on MRI [r4]." },
    { name: "MCL sprain", id: "mcl-sprain", distinguishing: "Valgus stress laxity and tenderness along the MCL. MCL injury occurred in 11% of patellar dislocations on MRI [r4]." },
    { name: "Patellofemoral pain", id: "patellofemoral-pain", distinguishing: "Gradual onset anterior knee pain without a dislocation event or true instability." },
    { name: "Knee dislocation (tibiofemoral)", id: "knee-dislocation", distinguishing: "High-energy mechanism, gross instability and a risk of vascular injury. The patella remains aligned with the femur." },
    { name: "Osteochondritis dissecans or cartilage defect", id: "osteochondritis-dissecans-knee", distinguishing: "Mechanical symptoms and localised pain without an acute dislocation. A loose body may follow dislocation." }
  ],
  redFlags: [
    "A patella that remains dislocated, or a deformed knee that cannot be extended: refer to the emergency department for reduction.",
    "Absent or reduced distal pulses, a cold foot or a gross multi-ligament instability: suspect a spontaneously reduced knee dislocation with vascular injury. Refer to emergency immediately.",
    "A locked knee, a palpable loose body or an osteochondral fragment on radiographs: arrange urgent orthopaedic review, since fragment excision or fixation may be needed [r5].",
    "A tense, hot haemarthrosis with inability to bear weight: arrange radiographs and medical review (Ottawa knee rules).",
    "Inability to perform a straight-leg raise or a palpable gap above or below the patella: suspect extensor mechanism rupture or patellar sleeve fracture, especially in children.",
    "Open physes in a child or adolescent: assess physeal status and consider a physeal injury or sleeve fracture [r11].",
    "Numbness, foot drop or severe leg pain disproportionate to the injury: neurological and vascular assessment and urgent review."
  ],

  management: {
    principles: "Most uncomplicated first dislocations are managed non-operatively. The International Patellofemoral Study Group reached full agreement that non-operative management is the standard of care for a first-time dislocation without an osteochondral fragment or loose body requiring surgery. If such a fragment needs excision or repair, patellar instability should be addressed in the same operation [r5]. UK review guidance likewise recommends excluding associated injury, counselling on recurrence risk and referring for conservative treatment, with surgical stabilisation reserved for recurrent instability [r6]. The Cochrane review could not confirm that surgery reduces recurrence because the certainty of evidence was very low [r7]. Risk stratification helps. In children, trochlear dysplasia, skeletal immaturity, high patella and a previous contralateral dislocation each increased recurrence risk [r8,r16]. Rehabilitation should be progressive, with early mobilisation and resistance training once there is no apprehension (unanimous expert consensus) [r11]. There is no consensus on whether immobilisation matters [r11].",
    medical: [
      { name: "Reduction and initial care", description: "Gentle knee extension with a medially directed force on the patella, if the patella is still displaced. Analgesia and ice. Radiographs to exclude fracture or loose body, and assessment for other injury before conservative care [r6].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r6"] },
      { name: "Aspiration of a tense haemarthrosis", description: "Considered by a doctor when a tense effusion is limiting range and quadriceps activation. It may also show fat globules in an osteochondral fracture.", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Brace or short period of protected mobilisation", description: "A hinged or patellar-stabilising brace for comfort, or a short period of protected weight-bearing. There was no consensus on the importance of immobilisation [r11]. Bracing with limited range is a commonly recommended conservative method, although the trials were low quality [r12].", evidence: "limited", recommendation: "consider", refs: ["r11", "r12"] },
      { name: "Surgical fixation or excision of an osteochondral fragment", description: "For an osteochondral fracture or loose body, with consideration of stabilisation at the same procedure [r5].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r5"] },
      { name: "MPFL repair or reconstruction after a first dislocation", description: "Considered for selected patients with multiple risk factors or high demands. A meta-analysis of mainly observational studies pooled redislocation rates of 30% with rehabilitation and 7% after MPFL repair [r17]. The Cochrane review found very low certainty, with 157 fewer recurrences per 1000 after surgery in the illustrative estimate (95% CI 209 fewer to 87 fewer) and an uncertain risk of adverse events [r7]. An older RCT of 125 patients found no benefit at 2 years, with 4 serious complications in the surgical group [r18].", evidence: "very-limited", recommendation: "consider", refs: ["r7", "r17", "r18"] },
      { name: "MPFL reconstruction for recurrent instability", description: "Indicated for recurrent dislocation after adequate rehabilitation. Consensus favoured medial reconstruction (77–86% agreement) [r5]. In a meta-analysis of 14 studies, 84.1% of patients returned to sport and 1.2% had recurrent instability [r15]. Bony procedures are added for underlying deformity when needed. No sufficiently powered trial has examined surgery in recurrent dislocation [r7].", evidence: "limited", recommendation: "recommended", refs: ["r5", "r15", "r7"] },
      { name: "Isolated lateral release", description: "Consensus statement: lateral release should not be performed in isolation for patellar instability (89% agreement) [r5]. The lateral retinaculum contributes only about 10% of the restraint to lateral translation in cadavers [r2].", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r5", "r2"] }
    ],
    physio: [
      { name: "Progressive quadriceps, hip and lower-limb strengthening", description: "Start as soon as pain and apprehension allow, progressing from isometric and closed-chain work to single-leg and loaded exercise. A systematic review of 7 low-quality RCTs found that an unstructured lower-limb program gave similar outcomes to specific exercises, so there is no evidence that VMO-targeted exercise is needed [r12]. Consensus was unanimous on early mobilisation and resistance training once apprehension settles [r11].", evidence: "limited", recommendation: "recommended", refs: ["r12", "r11"] },
      { name: "Neuromuscular and balance training", description: "Stretching and neuromuscular exercises were among the most commonly recommended conservative methods in the review [r12].", evidence: "limited", recommendation: "recommended", refs: ["r12"] },
      { name: "Education and recurrence-risk counselling", description: "Explain the injury, the risk factors for recurrence (trochlear dysplasia, skeletal immaturity, previous dislocation) and the pathway to surgical review if instability recurs [r6,r8].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r6", "r8"] },
      { name: "Criteria-based return to sport", description: "Use objective strength, function and confidence criteria instead of fixed dates. A Delphi-based checklist with eight domains has been developed for use after stabilisation surgery [r13].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r13"] },
      { name: "Patellar taping or bracing for sport", description: "Taping or a patellar stabilising brace is sometimes used to reduce apprehension during return to sport. No high-quality evidence was identified in the sources reviewed.", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Prolonged immobilisation or avoiding weight-bearing", description: "No evidence supports prolonged immobilisation or avoiding weight-bearing. Expert consensus supported early mobilisation once apprehension settles, and there was no consensus on the value of immobilisation [r11].", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r11"] }
    ],
    education: [
      "The kneecap usually goes out to the outer side and often goes back by itself. The inner stabilising ligament (MPFL) is usually torn, and it needs time and strength work to recover.",
      "Most people do not need surgery after a first dislocation, but some will dislocate again. Your risk depends on age, your knee shape and whether you have dislocated before [r8,r9].",
      "Rebuilding the thigh, hip and trunk control is the main job of rehabilitation. Do the exercises even when the knee feels fine.",
      "Return to sport depends on strength, control and confidence rather than the calendar.",
      "See a doctor urgently if the knee locks, will not straighten, or the kneecap will not go back, and tell your physio if the kneecap moves again."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and follows the same logic for non-operative and post-operative care: settle the knee, restore range and quadriceps activation, build strength and control without apprehension, then return to running, landing and sport. Move on when criteria are met, not when a number of weeks has passed [r11,r13]. Consensus supports early mobilisation and resistance training once apprehension settles [r11]. The stages below are for a non-operative first-time dislocation. After MPFL surgery follow the surgeon's protocol, because there was no consensus on post-operative immobilisation or weight-bearing [r14]. Dosages are typical clinical ranges, not drawn from a single trial, because high-quality rehabilitation trials were not identified [r12].",
    stages: [
      {
        name: "Protect & settle",
        timeframe: "Weeks 0–2",
        goals: ["Control pain and effusion", "Quadriceps activation without lag", "Walk normally with or without crutches", "Regain extension and about 90° of flexion"],
        precautions: ["Avoid twisting on a planted foot", "Avoid forced flexion with valgus and a lateral force on the patella", "Stop and refer if the knee locks or the patella re-dislocates"],
        exercises: [
          { name: "Quadriceps sets", dosage: "10 × 10 s holds, 3–4 times daily", cues: "Push the back of the knee down; tighten the thigh", figure: { pose: "ex-quad-set", view: "lateral", props: ["mat"] } },
          { name: "Straight-leg raise", dosage: "3 × 10 once there is no lag", cues: "Lock the knee straight first, then lift", figure: { pose: "ex-straight-leg-raise", view: "lateral", props: ["mat"] } },
          { name: "Heel slides", dosage: "2–3 × 15, twice daily", cues: "Slide slowly within comfort", figure: { pose: "ex-heel-slide", view: "lateral", props: ["mat"] } },
          { name: "Side-lying clamshell", dosage: "3 × 12–15 each side", cues: "Keep the pelvis stacked", figure: { pose: "ex-clamshell", view: "lateral", props: ["mat"] } },
          { name: "Double-leg calf raise", dosage: "3 × 15", figure: { pose: "ex-calf-raise", view: "lateral" } }
        ],
        progressionCriteria: ["Effusion no more than trace on stroke test", "Straight-leg raise without lag", "Normal walking pattern", "No apprehension with gentle patellar glide"]
      },
      {
        name: "Restore strength & range",
        timeframe: "Weeks 2–6",
        goals: ["Full knee range of motion", "Symmetrical quadriceps activation", "Build hip and trunk control", "Pain-free stairs"],
        precautions: ["Keep the knee tracking over the second toe", "Avoid deep loaded flexion with valgus", "Monitor effusion after loading"],
        exercises: [
          { name: "Mini-squat to chair", dosage: "3 × 10–12, 3 times a week", cues: "Knees over toes; no inward collapse", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Glute bridge", dosage: "3 × 10–12 with a 3–5 s hold", cues: "Drive through the heels", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Step-up (low step)", dosage: "3 × 10 each side", cues: "Pelvis level; knee over the second toe", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Standing hip abduction", dosage: "3 × 12 each side", cues: "No trunk lean", figure: { pose: "ex-hip-abduction-standing", view: "lateral" } },
          { name: "Seated knee extension (short arc)", dosage: "3 × 10–15, slow tempo", cues: "Move through a pain-free range", figure: { pose: "ex-knee-extension", view: "lateral", props: ["chair"] } },
          { name: "Single-leg balance", dosage: "3 × 30–45 s", cues: "Soft knee, level pelvis", figure: { pose: "ex-single-leg-balance", view: "anterior" } }
        ],
        progressionCriteria: ["Full range of motion", "No effusion after loading", "Pain-free squat to 60°", "No apprehension during daily activity"]
      },
      {
        name: "Strength & neuromuscular control",
        timeframe: "Weeks 6–12",
        goals: ["Single-leg strength and control", "No dynamic valgus", "Quadriceps strength approaching the other side", "Prepare for running"],
        precautions: ["Add load before speed", "Stop if the patella feels unstable", "Avoid contact and pivoting sport"],
        exercises: [
          { name: "Step-down (forward)", dosage: "3 × 8–12, 3 s lowering", cues: "Knee tracks over the second toe; pelvis level", figure: { pose: "ex-step-down", view: "anterior", props: ["step"] } },
          { name: "Split squat", dosage: "3 × 8–10 each side with load", cues: "Upright trunk; front knee over the foot", figure: { pose: "ex-split-squat", view: "lateral", props: ["dumbbell"] } },
          { name: "Single-leg squat", dosage: "3 × 8 each side", cues: "Hip back; knee over foot", figure: { pose: "ex-single-leg-squat", view: "anterior" } },
          { name: "Romanian deadlift", dosage: "3 × 8–10", cues: "Hinge at the hip with a long spine", figure: { pose: "ex-rdl", view: "lateral", props: ["dumbbell"] } },
          { name: "Side plank", dosage: "3 × 30–45 s each side", figure: { pose: "ex-side-plank", view: "lateral", props: ["mat"] } },
          { name: "Single-leg balance with perturbation", dosage: "3 × 30–45 s", cues: "Quiet trunk; no knee collapse", figure: { pose: "ex-single-leg-balance", view: "anterior" } }
        ],
        progressionCriteria: ["Quadriceps limb symmetry about 80% or better (clinical convention)", "Single-leg squat to 60° without valgus", "No effusion or apprehension", "Pain-free jog on the spot"]
      },
      {
        name: "Running, landing & return to sport",
        timeframe: "Months 3–6",
        goals: ["Return to running", "Landing and cutting control", "Sport-specific agility", "Psychological readiness"],
        precautions: ["Introduce running gradually (walk–run)", "Practise planned before unplanned cutting", "Monitor effusion and apprehension", "Be cautious with early return to sport in children and adolescents with open physes [r11]"],
        exercises: [
          { name: "Walk–run program", dosage: "e.g. 1 min run / 1 min walk × 10, then progress as symptoms allow", cues: "Short, quiet steps" },
          { name: "Jump-squat and drop-landing drills", dosage: "3–4 × 5, with full recovery", cues: "Land quietly; knees over toes", figure: { pose: "ex-jump-squat", view: "lateral" } },
          { name: "Single-leg hop progressions", dosage: "3 × 5 each direction", cues: "Stick the landing for 2 s", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Planned then unplanned cutting drills", dosage: "2–3 sessions per week, progressing speed and angle", cues: "Lower the centre of mass; knee stays over the foot", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Heavy strength maintenance", dosage: "2 times a week, 3–5 × 3–6", cues: "Control the knee and pelvis" }
        ],
        progressionCriteria: ["Quadriceps and hop limb symmetry about 90% (clinical convention)", "No effusion or apprehension with sport movements", "Good landing and cutting mechanics on video", "Confident in the knee (patient-reported)"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No effusion and a full, pain-free range of motion",
      "No patellar apprehension on examination and with sport-specific movement",
      "Quadriceps and hip strength limb symmetry of about 90% (clinical convention)",
      "Hop test and landing performance within about 90% of the other side with good mechanics (clinical convention)",
      "Patient confidence in the knee and agreement on the plan with the treating team",
      "Progress through running, landing, planned and then reactive cutting without symptoms",
      "A Delphi-based checklist with eight domains of objective criteria exists after surgery; no consensus on timing was found [r13]"
    ],
    tests: [
      "Quadriceps, hamstring and hip abductor strength by dynamometry (limb symmetry index)",
      "Single, triple and crossover hop tests",
      "Drop-landing and single-leg squat video analysis",
      "Patient-reported measures such as the Kujala score and a confidence or instability scale"
    ]
  },
  prognosis: "Recurrence is the main concern. A prospective cohort reported further instability in 17% of first-time dislocators over 2–5 years, against 49% in patients with a prior history of instability [r9]. In children and adolescents managed non-operatively, 34.7% had a recurrence, and a model combining trochlear dysplasia, skeletal immaturity, patella alta and previous contralateral dislocation predicted recurrence risks of about 55% with any two, about 75% with three and 88% with all four risk factors [r8]. That model came from a single-centre retrospective series, and no external validation was identified in the sources reviewed. A systematic review in children and adolescents found 31% recurrence after conservative treatment versus 22% after surgery [r16], and a review of 2134 knees found redislocation in 36.4% managed conservatively versus 25% surgically, with similar long-term function scores [r19]. After isolated MPFL reconstruction for recurrent instability, short-term recurrence was 1.2% and 84.1% returned to sport [r15].",
  prevention: [
    "No intervention has been shown to prevent a first patellar dislocation. Neuromuscular training that improves landing and cutting control is reasonable but has not been tested for this outcome.",
    "After a first dislocation, finish rehabilitation and criteria-based return to sport, and keep ongoing hip and quadriceps strengthening.",
    "Counsel patients with several risk factors (trochlear dysplasia, skeletal immaturity, patella alta) that recurrence risk is higher and seek surgical review early if the patella moves again [r8].",
    "Bracing or taping for sport may reduce apprehension, although evidence is lacking."
  ],
  clinicalPearls: [
    "Always ask whether the patella 'went out'. Many first dislocations relocate on their own, so a swollen knee with medial patellar tenderness and apprehension may be a dislocation even when the patella is in place.",
    "Check for the injuries that change management. Osteochondral fragments and loose bodies are the clear exception to non-operative care in expert consensus, so exclude them with imaging after a dislocation [r5,r6].",
    "Medial patellar border tenderness and a lateral femoral condyle bruise on MRI are the signature. Concave impaction deformity of the inferomedial patella was present in 44% of dislocations and in no controls [r4].",
    "In children, check physeal status and ask about physeal injury. Trochlear dysplasia and skeletal immaturity are the strongest predictors of recurrence [r8].",
    "Do not rely on 'VMO exercises'. An unstructured lower-limb program gave outcomes similar to specific exercises in the review, so focus on progressive overall strength and control [r12].",
    "Be honest about the evidence. The surgical versus non-surgical question has very low certainty evidence, so the decision should reflect risk factors, goals and the patient's wishes [r7]."
  ],
  related: ["acl-rupture", "patellofemoral-pain", "patella-fracture", "knee-dislocation", "osteochondritis-dissecans-knee", "mcl-sprain"],

  references: [
    { id: "r1", citation: "Sanders TL, Pareek A, Hewett TE, et al. Incidence of first-time lateral patellar dislocation: a 21-year population-based study. Sports Health. 2018;10(2):146-51.", pmid: "28795924", doi: "10.1177/1941738117725055", type: "cohort", year: 2018 },
    { id: "r2", citation: "Desio SM, Burks RT, Bachus KN. Soft tissue restraints to lateral patellar translation in the human knee. Am J Sports Med. 1998;26(1):59-65.", pmid: "9474403", doi: "10.1177/03635465980260012701", type: "biomechanical", year: 1998 },
    { id: "r3", citation: "Burks RT, Desio SM, Bachus KN, et al. Biomechanical evaluation of lateral patellar dislocations. Am J Knee Surg. 1998;11(1):24-31.", pmid: "9533050", type: "biomechanical", year: 1998 },
    { id: "r4", citation: "Elias DA, White LM, Fithian DC. Acute lateral patellar dislocation at MR imaging: injury patterns of medial patellar soft-tissue restraints and osteochondral injuries of the inferomedial patella. Radiology. 2002;225(3):736-43.", pmid: "12461254", doi: "10.1148/radiol.2253011578", type: "cross-sectional", year: 2002 },
    { id: "r5", citation: "Liu JN, Steinhaus ME, Kalbian IL, et al. Patellar instability management: a survey of the International Patellofemoral Study Group. Am J Sports Med. 2018;46(13):3299-306.", pmid: "28985094", doi: "10.1177/0363546517732045", type: "consensus-statement", year: 2018 },
    { id: "r6", citation: "Johnson DS, Turner PG. Management of the first-time lateral patellar dislocation. Knee. 2019;26(6):1161-5.", pmid: "31727430", doi: "10.1016/j.knee.2019.10.015", type: "narrative-review", year: 2019 },
    { id: "r7", citation: "Smith TO, Gaukroger A, Metcalfe A, et al. Surgical versus non-surgical interventions for treating patellar dislocation. Cochrane Database Syst Rev. 2023;1(1):CD008106.", pmid: "36692346", doi: "10.1002/14651858.CD008106.pub4", type: "systematic-review", year: 2023 },
    { id: "r8", citation: "Jaquith BP, Parikh SN. Predictors of recurrent patellar instability in children and adolescents after first-time dislocation. J Pediatr Orthop. 2017;37(7):484-90.", pmid: "26491910", doi: "10.1097/BPO.0000000000000674", type: "cohort", year: 2017 },
    { id: "r9", citation: "Fithian DC, Paxton EW, Stone ML, et al. Epidemiology and natural history of acute patellar dislocation. Am J Sports Med. 2004;32(5):1114-21.", pmid: "15262631", doi: "10.1177/0363546503260788", type: "cohort", year: 2004 },
    { id: "r10", citation: "Bulgheroni E, Vasso M, Losco M, et al. Management of the first patellar dislocation: a narrative review. Joints. 2019;7(3):107-14.", pmid: "34195538", doi: "10.1055/s-0039-3401817", type: "narrative-review", year: 2019 },
    { id: "r11", citation: "Hurley ET, Hughes AJ, Savage-Elliott I, et al. A modified Delphi consensus statement on patellar instability: part I. Bone Joint J. 2023;105-B(12):1259-64.", pmid: "38037678", doi: "10.1302/0301-620X.105B12.BJJ-2023-0109.R1", type: "consensus-statement", year: 2023 },
    { id: "r12", citation: "Flores GW, de Oliveira DF, Ramos APS, et al. Conservative management following patellar dislocation: a level I systematic review. J Orthop Surg Res. 2023;18(1):393.", pmid: "37254200", doi: "10.1186/s13018-023-03867-6", type: "systematic-review", year: 2023 },
    { id: "r13", citation: "White AE, Chatterji R, Zaman SU, et al. Development of a return to play checklist following patellar instability surgery: a Delphi-based consensus. Knee Surg Sports Traumatol Arthrosc. 2020;28(3):806-15.", pmid: "31201442", doi: "10.1007/s00167-019-05510-6", type: "consensus-statement", year: 2020 },
    { id: "r14", citation: "Hurley ET, Sherman SL, Chahla J, et al. A modified Delphi consensus statement on patellar instability: part II. Bone Joint J. 2023;105-B(12):1265-70.", pmid: "38035602", doi: "10.1302/0301-620X.105B12.BJJ-2023-0110.R1", type: "consensus-statement", year: 2023 },
    { id: "r15", citation: "Schneider DK, Grawe B, Magnussen RA, et al. Outcomes after isolated medial patellofemoral ligament reconstruction for the treatment of recurrent lateral patellar dislocations: a systematic review and meta-analysis. Am J Sports Med. 2016;44(11):2993-3005.", pmid: "26872895", doi: "10.1177/0363546515624673", type: "meta-analysis", year: 2016 },
    { id: "r16", citation: "Nwachukwu BU, So C, Schairer WW, et al. Surgical versus conservative management of acute patellar dislocation in children and adolescents: a systematic review. Knee Surg Sports Traumatol Arthrosc. 2016;24(3):760-7.", pmid: "26704809", doi: "10.1007/s00167-015-3948-2", type: "systematic-review", year: 2016 },
    { id: "r17", citation: "Le N, Blackman B, Zakharia A, et al. MPFL repair after acute first-time patellar dislocation results in lower redislocation rates and less knee pain compared to rehabilitation: a systematic review and meta-analysis. Knee Surg Sports Traumatol Arthrosc. 2023;31(7):2772-83.", pmid: "36372845", doi: "10.1007/s00167-022-07222-w", type: "meta-analysis", year: 2023 },
    { id: "r18", citation: "Nikku R, Nietosvaara Y, Kallio PE, et al. Operative versus closed treatment of primary dislocation of the patella. Similar 2-year results in 125 randomized patients. Acta Orthop Scand. 1997;68(5):419-23.", pmid: "9385238", doi: "10.3109/17453679708996254", type: "rct", year: 1997 },
    { id: "r19", citation: "Longo UG, Ciuffreda M, Locher J, et al. Treatment of primary acute patellar dislocation: systematic review and quantitative synthesis of the literature. Clin J Sport Med. 2017;27(6):511-23.", pmid: "28107220", doi: "10.1097/JSM.0000000000000410", type: "systematic-review", year: 2017 }
  ],

  animation: {
    title: "How a lateral patellar dislocation happens",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "anterior", environment: "court",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "run-contact", root: { x: -80 } },
          { t: 1.2, pose: "cut-plant", root: { x: -10 } },
          { t: 2.0, pose: "pivot", root: { x: 0 } },
          { t: 2.9, pose: "valgus-collapse", joints: { kneeR: 16, hipR: -8, trunk: 8 }, root: { x: 2 }, ease: "in" },
          { t: 4.0, pose: "squat", joints: { kneeR: 18 }, root: { x: 6 } },
          { t: 5.3, pose: "fall-sideways", root: { x: 12 } }
        ],
        forces: [
          { t: [1.6, 3.4], at: "footR", dir: "up", label: "Foot planted" },
          { t: [2.3, 3.6], at: "kneeR", dir: "medial", label: "Valgus collapse" },
          { t: [2.4, 3.6], at: "thighR", dir: "medial", label: "Femur rotates inward over the foot" }
        ],
        highlights: [{ t: [2.4, 6], at: "kneeR" }],
        impacts: [{ t: 3.1, at: "kneeR" }],
        slowmo: [{ t: [2.0, 3.4], rate: 0.3 }],
        captions: [
          { t: 0, text: "A field-sport athlete runs in and plants the right foot to change direction." },
          { t: 1.3, text: "The foot stays planted while the body turns over it, so the femur rotates inward on the tibia." },
          { t: 2.3, text: "The flexed knee collapses into valgus, shifting the line of quadriceps pull to the lateral side." },
          { t: 3.1, text: "The patella is driven out over the lateral femoral condyle, and the knee gives way." },
          { t: 4.3, text: "The patella often relocates by itself as the knee straightens." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "kneeR",
        captions: [{ t: 0, text: "Looking down on the right patellofemoral joint, as in a skyline X-ray." }]
      },
      {
        type: "closeup", label: "Inside the knee", duration: 10, scene: "patellofemoral-axial",
        actions: [
          { t: 0, do: "highlight", target: "patella" },
          { t: 0.3, do: "label", target: "mpfl", text: "MPFL: main restraint to lateral glide" },
          { t: 1.0, do: "arrow", at: "medialPatellarBorder", dir: "lateral", label: "Lateral force on the patella", size: "m" },
          { t: 1.3, do: "stretch", target: "mpfl", amount: 0.35, dur: 1.0 },
          { t: 2.5, do: "move", target: "patella", to: "dislocatedPosition", dur: 0.9 },
          { t: 2.6, do: "tear", target: "mpfl", grade: 3, at: 0.2 },
          { t: 3.0, do: "impact", at: "dislocatedPosition" },
          { t: 3.5, do: "label", target: "mpfl", text: "MPFL torn" },
          { t: 4.6, do: "reset", target: "patella", dur: 1.0 },
          { t: 5.3, do: "bruise", target: "femur", at: "lateralFemoralCondyle" },
          { t: 5.4, do: "bruise", target: "patella", at: "medialPatellarBorder" },
          { t: 5.8, do: "label", target: "femur", text: "Lateral femoral condyle bone bruise" },
          { t: 6.6, do: "strain", target: "vmo", grade: 1, at: 0.9 },
          { t: 7.0, do: "bleed", target: "jointSpace" },
          { t: 7.4, do: "label", target: "jointSpace", text: "Haemarthrosis" },
          { t: 8.2, do: "pain", at: "medialPatellarBorder", hold: 2 }
        ],
        captions: [
          { t: 0, text: "Seen from below, the patella sits in the trochlear groove, held medially by the MPFL." },
          { t: 1.0, text: "In cadavers the MPFL gave about 60% of the restraint to lateral glide at 20° of flexion." },
          { t: 2.4, text: "A sudden lateral force drives the patella up and over the lateral trochlear ridge." },
          { t: 2.9, text: "The MPFL tears, most often near one of its attachments, and the medial retinaculum is disrupted." },
          { t: 4.6, text: "The patella relocates, often as the knee straightens." },
          { t: 5.3, text: "On relocation the medial patella strikes the lateral femoral condyle, bruising both and sometimes chipping cartilage." },
          { t: 6.6, text: "The VMO is often bruised, and bleeding into the joint causes swelling within hours." },
          { t: 8.2, text: "MRI after a first dislocation commonly shows all of these injuries." }
        ]
      },
      {
        type: "micro", label: "Ligament healing", duration: 10, tissue: "ligament",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.0, stage: "loaded" }, { t: 2.0, stage: "overload" }, { t: 3.0, stage: "failure" },
          { t: 4.0, stage: "haemorrhage" }, { t: 5.3, stage: "inflammation" }, { t: 6.8, stage: "proliferation" }, { t: 8.4, stage: "remodelling" }
        ],
        timeLabels: [{ t: 5.3, text: "Days 0–5" }, { t: 6.8, text: "Day 5 – 6 weeks" }, { t: 8.4, text: "Weeks 6–52+" }],
        captions: [
          { t: 0, text: "Healthy MPFL: crimped, aligned type I collagen along the line of load." },
          { t: 1.0, text: "As the patella is pushed laterally, the crimp straightens and the fibres stretch." },
          { t: 2.0, text: "Beyond the elastic range, fibrils slide and begin to fail." },
          { t: 3.0, text: "Fibres rupture, often near an attachment, and the ligament loses its restraint." },
          { t: 4.0, text: "Torn vessels bleed into the joint and surrounding tissue." },
          { t: 5.3, text: "Inflammatory cells clear debris over the first days." },
          { t: 6.8, text: "Fibroblasts lay down disorganised collagen. The healed ligament may be longer and lax." },
          { t: 8.4, text: "Collagen realigns with load over months, so strength and control must protect the patella meanwhile." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL6" }
};
