export default {
  id: "patella-fracture",
  name: "Patella fracture",
  shortName: "Patella fracture",
  aka: ["patellar fracture", "kneecap fracture", "broken kneecap", "transverse patella fracture", "comminuted patella fracture", "patellar sleeve fracture"],
  region: "knee",
  tissues: ["bone", "cartilage", "tendon"],
  onset: "acute",
  mechanismType: ["fall", "contact", "traction"],
  populations: ["women aged 60–80", "adolescent and young adult males", "older adults with falls risk", "vehicle occupants (dashboard injury)"],
  sports: [],
  urgency: "urgent",
  summary: "A fracture of the kneecap from a direct blow (fall onto the knee, dashboard) or a sudden eccentric quadriceps contraction. Displaced fractures disrupt the extensor mechanism and usually need fixation.",
  keyFacts: [
    { label: "Incidence", value: "About 13 per 100,000 per year; highest in women aged 60–80" },
    { label: "Key test", value: "Active straight-leg raise: inability suggests extensor mechanism disruption" },
    { label: "Imaging", value: "AP, lateral and skyline radiographs; Ottawa rules include isolated patellar tenderness" },
    { label: "Typical recovery", value: "Bone union ~6–8 weeks; strength and function 6–12 months" },
    { label: "Surgery threshold", value: "Extensor mechanism disrupted, or >2–3 mm step-off / >1–4 mm displacement" },
    { label: "Common complication", value: "Symptomatic implant removal in about 30% after fixation" }
  ],
  overview: "The patella is a sesamoid bone within the quadriceps tendon. It lengthens the lever arm of the extensor mechanism and articulates with the femoral trochlea. Fractures result either from a direct blow, such as a fall onto the front of the knee or a dashboard impact, or from excessive tension when the quadriceps contracts eccentrically against a flexed knee [r2]. The incidence is about 13 per 100,000 per year, rising with age and highest in women aged 60–80 [r1].\n\nManagement depends on whether the extensor mechanism is intact and on displacement. Undisplaced fractures with a preserved straight-leg raise are treated non-operatively; fractures that disrupt the extensor mechanism or show more than 2–3 mm articular step-off or 1–4 mm displacement are fixed, most often with a tension-band construct [r2]. Even after good fixation, long-term quadriceps weakness, anterior knee pain and implant problems are common, and the risk of later knee arthroplasty is increased [r6,r7,r8]. The physiotherapist's role is to protect the repair while restoring range of motion and, above all, quadriceps strength.",

  epidemiology: {
    text: "In a Danish population study of 756 patellar fractures, the incidence was 13.1 per 100,000 per year. Mean age was 54 years (46 in males and 61 in females) and 56% were female. Incidence rose with age: males peaked at 10–19 years (about 15.4/100,000/year) and females aged 60–80 had the highest rates (about 36/100,000/year). Multifragmentary articular fractures (AO 34-C3, 25%) and simple transverse fractures (34-C1, 23%) were the most common types [r1].",
    riskFactors: {
      intrinsic: [
        "Female sex and older age (falls and osteoporosis; potentially modifiable) [r1]",
        "Male sex in adolescence and early adulthood (high-energy and sporting injuries) [r1]",
        "Previous knee surgery through the patella (e.g. ACL graft harvest) or arthroplasty (expert opinion)"
      ],
      extrinsic: [
        "Falls onto the knee from standing height",
        "Dashboard impacts in vehicle crashes",
        "Direct blows in contact activities"
      ]
    }
  },

  mechanism: {
    summary: "Two mechanisms dominate [r2]. A direct blow to the front of the flexed knee, typically a fall onto a hard surface or a dashboard impact, compresses the patella against the femoral trochlea and tends to produce comminuted (stellate) fractures, often with the retinacula intact. An indirect mechanism, a sudden eccentric quadriceps contraction while the knee is flexed (for example, stumbling and trying to stop a fall), loads the patella in tension like a beam over the trochlea and produces a transverse fracture whose fragments are pulled apart when the medial and lateral retinacula also tear. Many falls combine both.",
    sequence: [
      "The person trips or stumbles and the knee bends under body weight.",
      "The quadriceps fires hard eccentrically to stop the fall, putting the extensor mechanism under high tension.",
      "With the knee flexed, the patella is bent like a beam over the femoral trochlea.",
      "The front of the knee then strikes the ground, adding a direct compressive blow.",
      "The patella fails: transversely in tension, or into several fragments with a direct blow.",
      "If the medial and lateral retinacula tear, quadriceps pull separates the fragments and active knee extension is lost.",
      "Bleeding into the joint produces a tense haemarthrosis; a palpable gap may be felt between fragments."
    ],
    variants: [
      { name: "Direct blow", description: "Fall onto the knee or dashboard impact; comminuted or stellate patterns, often with intact retinacula and preserved extension [r2]." },
      { name: "Indirect (eccentric quadriceps) mechanism", description: "Sudden quadriceps contraction against a flexing knee; transverse fractures that often displace [r2]." },
      { name: "Patellar sleeve fracture (children)", description: "In children, a sleeve of cartilage and periosteum avulses from the inferior pole; easily underestimated on radiographs [r10]." },
      { name: "Osteochondral fracture", description: "A fragment of patellar or trochlear cartilage and bone shears off during lateral patellar dislocation or relocation." }
    ]
  },

  anatomy: {
    text: "The patella is the largest sesamoid bone, embedded in the quadriceps tendon and continuing distally as the patellar tendon to the tibial tuberosity. Its posterior surface carries the thickest articular cartilage in the body, with medial and lateral facets that glide in the femoral trochlea. By displacing the line of pull of the quadriceps away from the knee's centre of rotation, it increases the extensor moment arm [r2]. Medial and lateral retinacular expansions of the vasti run alongside the patella; when they are intact, a person may still lift the straight leg despite a fracture.",
    structures: [
      { name: "Patella", role: "Increases the leverage and efficiency of the quadriceps and articulates with the trochlea [r2]" },
      { name: "Quadriceps tendon", role: "Transmits quadriceps force to the superior pole of the patella" },
      { name: "Patellar tendon", role: "Transmits force from the inferior pole to the tibial tuberosity" },
      { name: "Medial and lateral retinacula", role: "Accessory extensor pathway; intact retinacula preserve straight-leg raise in some fractures" },
      { name: "Patellar articular cartilage", role: "Load-bearing surface of the patellofemoral joint; steps after fracture predispose to arthritis [r2]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "In tension (indirect) injuries, the patella fails transversely across its waist and the fragments are separated by quadriceps pull once the retinacula tear. In compression (direct) injuries, the patella shatters against the trochlea into several fragments, and the articular cartilage of both the patella and the trochlea may be contused. Any step in the articular surface concentrates patellofemoral contact stress [r2]. Bleeding from cancellous bone and torn retinacula fills the joint. Fracture healing follows the usual sequence of haematoma, inflammation, callus and remodelling; with tension-band fixation, the construct is designed to convert quadriceps tension into compression at the articular surface during knee flexion [r2].\n\nThe consequences extend beyond the bone. Quadriceps strength remains reduced years after fixation: in one cohort, isometric extension torque was 26% lower than the uninjured side at a mean of 6.5 years, and KOOS sport and quality-of-life scores were markedly reduced [r7]. Patellar fracture is also associated with an increased lifelong risk of knee arthroplasty and arthroscopy [r8].",
    structures: [
      { name: "Patella", effect: "Transverse, comminuted, vertical, polar or osteochondral fracture; displacement depends on retinacular integrity [r2]" },
      { name: "Medial and lateral retinacula", effect: "Torn in displaced fractures, causing loss of active extension" },
      { name: "Patellofemoral articular cartilage", effect: "Impact damage and steps; risk of patellofemoral osteoarthritis [r2,r8]" },
      { name: "Prepatellar soft tissues", effect: "Abrasion, contusion or open wound over the anterior knee; open fractures have more complications [r2]" }
    ],
    muscles: [
      { name: "Quadriceps", effect: "Severe arthrogenic muscle inhibition from haemarthrosis and pain [r5], followed by atrophy during immobilisation; persistent weakness of about 25–30% years later [r7]." },
      { name: "Hamstrings and calf", effect: "Disuse weakness during bracing in extension." },
      { name: "Hip musculature", effect: "Compensatory hip strategies during gait in an extension brace; weakness of the hip abductors and extensors." }
    ],
    cellular: [
      { phase: "Haematoma & inflammation", timing: "0–7 days", description: "Fracture haematoma forms; inflammatory cells and growth factors recruit mesenchymal cells; haemarthrosis inhibits the quadriceps [r5]." },
      { phase: "Repair (callus)", timing: "1–8 weeks", description: "Soft then hard callus bridges the fragments; with stable fixation healing is largely direct. Most fractures unite within about 6–8 weeks; nonunion is uncommon after fixation [r6]." },
      { phase: "Remodelling", timing: "2 months – 2 years", description: "Woven bone remodels to lamellar bone; damaged cartilage does not regenerate, leaving a long-term risk of patellofemoral degeneration [r8]." }
    ],
    systems: [
      { system: "Nervous system", effect: "Effusion and pain inhibit quadriceps activation via spinal reflex pathways (arthrogenic muscle inhibition) [r5]." },
      { system: "Musculoskeletal chain", effect: "Weeks in an extension brace produce a stiff-knee gait, hip hitching and generalised lower-limb deconditioning." },
      { system: "Endocrine / bone health", effect: "In older women, the fracture often follows a simple fall and should prompt falls and osteoporosis assessment [r1]." },
      { system: "Psychological", effect: "Persistent pain, kneeling difficulty and fear of falling reduce quality of life years after injury [r7]." }
    ]
  },

  grading: {
    system: "Descriptive classification by pattern and displacement (AO/OTA 34)",
    grades: [
      { grade: "Undisplaced, extensor mechanism intact", description: "Fracture line with <2–3 mm step-off and <1–4 mm gap; active straight-leg raise preserved.", prognosis: "Non-operative treatment in an extension brace; good results expected [r2]" },
      { grade: "Transverse (AO 34-C1), displaced", description: "Simple fracture across the waist, separated by quadriceps pull; extensor mechanism disrupted.", prognosis: "Tension-band or screw fixation [r2]" },
      { grade: "Comminuted / stellate (AO 34-C3)", description: "Multifragmentary articular fracture, usually from a direct blow; the most common type [r1].", prognosis: "Fixation where possible; higher risk of articular incongruity" },
      { grade: "Polar (pole) fracture", description: "Fragment at the inferior or superior pole; inferior-pole fractures are extra-articular.", prognosis: "Fixation or partial patellectomy with tendon reattachment when displaced" },
      { grade: "Vertical / osteochondral / sleeve", description: "Vertical fractures often keep extension intact; osteochondral fractures follow dislocation; sleeve fractures occur in children [r10].", prognosis: "Depends on displacement; sleeve fractures are easily missed" }
    ]
  },

  timeframes: {
    summary: "Bone typically unites in 6–8 weeks, but recovery of range, quadriceps strength and function takes 6–12 months, and some deficits persist long term [r7].",
    healing: [
      { phase: "Haematoma & inflammation", startDay: 0, endDay: 7, description: "Haemarthrosis, pain and quadriceps inhibition" },
      { phase: "Repair (callus)", startDay: 7, endDay: 56, description: "Protected loading in an extension brace; progressive range of motion" },
      { phase: "Remodelling", startDay: 56, endDay: 540, description: "Strength and function rebuilt; cartilage changes persist" }
    ],
    milestones: [
      { label: "Weight-bearing as tolerated in extension brace (typical)", day: 1 },
      { label: "Flexion to 90° (typical protocol)", day: 42 },
      { label: "Brace discontinued (typical)", day: 56 },
      { label: "Return to sport, children treated non-operatively (median)", day: 84, note: "2.8 months in a paediatric series [r10]" },
      { label: "Return to sport after fixation (typical)", day: 180, note: "5.9 months in operatively treated children [r10]; adults often longer" }
    ],
    returnToSport: "Return to sport is usually 3–6 months after non-operative or operative management in young people (median 2.8 and 5.9 months respectively in a paediatric series) [r10]; adults often take longer and many have persistent deficits in sport and kneeling [r7]. Progression is criteria-based."
  },

  clinicalPresentation: {
    symptoms: [
      "Sudden pain at the front of the knee after a fall onto the knee or a stumble",
      "Rapid swelling of the knee",
      "Inability to straighten the knee actively or to lift the straight leg",
      "Difficulty or inability to walk"
    ],
    signs: [
      "Tenderness and swelling over the patella; possible abrasion or wound",
      "Palpable gap between fragments in displaced fractures",
      "Inability to perform an active straight-leg raise or extensor lag",
      "Tense haemarthrosis",
      "Pain on resisted knee extension"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism: fall onto the knee, dashboard impact, or stumble with sudden quadriceps contraction",
      "Ability to lift the straight leg or walk since the injury",
      "Wound over the knee (open fracture)",
      "Falls history, osteoporosis risk and previous knee surgery",
      "After fixation: surgeon's range-of-motion limits, brace and weight-bearing instructions"
    ],
    observation: ["Swelling, bruising, abrasion or open wound", "Patellar height and contour (high-riding fragment, gap)", "After fixation: wound and gait in brace"],
    palpation: ["Tenderness over the patella and poles", "Gap between fragments", "Quadriceps and patellar tendon continuity (exclude tendon rupture)"],
    rangeOfMotion: ["Do not force flexion acutely", "After fixation: record flexion against the protocol limit at each visit; extensor lag"],
    strength: ["Active straight-leg raise (extensor mechanism integrity)", "Quadriceps activation and lag; later limb symmetry", "Hip and calf strength"],
    neuro: [],
    functional: ["Gait in the brace", "Sit-to-stand, stairs", "Later: squat, step-down, kneeling tolerance"],
    specialTests: [
      { name: "Active straight-leg raise / extensor lag test", purpose: "Test the integrity of the extensor mechanism", procedure: "Patient supine (or seated). Ask them to lift the straight leg off the couch, or to extend the knee fully from slight flexion against gravity.", positive: "Inability to lift the straight leg or a marked extensor lag indicates extensor mechanism disruption, a main indication for surgery [r2].", refs: [] },
      { name: "Ottawa knee rules", purpose: "Decide who needs radiographs", procedure: "Radiograph if age ≥ 55, isolated patellar tenderness, fibular head tenderness, inability to flex to 90°, or inability to bear weight for four steps.", positive: "Any criterion present. Validation sensitivity 100% for clinically important knee fractures [r3]; pooled sensitivity 0.99 and specificity 0.49 [r4].", sensitivity: "0.99 (95% CI 0.97–1.00)", specificity: "0.49 (95% CI 0.47–0.51)", refs: ["r3", "r4"] },
      { name: "Palpation for a gap", purpose: "Detect fragment separation", procedure: "Palpate along the patella from superior to inferior pole.", positive: "A palpable defect suggests a displaced fracture (or a tendon rupture if above or below the patella).", refs: [] }
    ],
    clinicalRules: [{ name: "Ottawa knee rules", description: "Isolated patellar tenderness and age ≥ 55 are both criteria for knee radiographs [r3,r4]." }],
    outcomeMeasures: [
      { name: "KOOS", use: "Pain, symptoms, function, sport and quality of life; sport and QoL subscales remain low years after fixation [r7]" },
      { name: "Lower Extremity Functional Scale", use: "General lower-limb function during rehabilitation" },
      { name: "Extensor lag and range of motion", use: "Simple, objective markers of extensor recovery [r7]" },
      { name: "Quadriceps strength (dynamometry)", use: "Persistent deficits are common and should be measured [r7]" }
    ],
    imaging: [
      { modality: "Plain radiographs (AP, lateral, skyline)", indication: "Ottawa rules positive or suspected fracture", findings: "Fracture pattern, displacement and articular step-off on the lateral view; bipartite patella (smooth, usually superolateral, often bilateral) is a normal variant" },
      { modality: "CT", indication: "Comminuted fractures for surgical planning", findings: "Fragment number and articular involvement" },
      { modality: "MRI", indication: "Suspected sleeve fracture in children, osteochondral fracture or tendon injury", findings: "Cartilage sleeve avulsion, osteochondral fragment, tendon integrity [r10]" }
    ]
  },

  differentials: [
    { name: "Quadriceps tendon rupture", id: "quadriceps-tendon-rupture", distinguishing: "Older patient with a suprapatellar gap, low-riding patella and no fracture on radiographs." },
    { name: "Patellar tendon rupture", id: "patellar-tendon-rupture", distinguishing: "Younger patient with an infrapatellar gap and high-riding patella; radiographs show patella alta rather than a fracture." },
    { name: "Lateral patellar dislocation", id: "patellar-dislocation", distinguishing: "Twisting injury with the patella displaced laterally; may cause an osteochondral fracture rather than a fracture through the body." },
    { name: "Prepatellar bursitis", id: "prepatellar-bursitis", distinguishing: "Fluctuant swelling in front of the patella without a haemarthrosis, gap or extensor lag." },
    { name: "Sinding-Larsen–Johansson syndrome", id: "sinding-larsen-johansson", distinguishing: "Gradual inferior-pole pain in a young athlete without acute trauma or extensor loss; differs from an acute sleeve fracture." },
    { name: "Tibial plateau fracture", id: "tibial-plateau-fracture", distinguishing: "Tenderness below the joint line and inability to bear weight, with a plateau fracture on imaging." }
  ],
  redFlags: [
    "Wound over the patella communicating with the fracture: open fracture. Emergency antibiotics and surgical debridement [r2].",
    "Inability to straight-leg raise after a knee injury: extensor mechanism disruption (fracture or tendon rupture). Same-week orthopaedic review.",
    "After fixation: wound redness, discharge, fever or increasing pain (infection, about 3% after surgery); new loss of extension or a palpable gap (fixation failure, about 5%) [r6]. Urgent surgical review.",
    "Calf pain or swelling, or breathlessness, during bracing: assess for DVT or PE.",
    "A simple fall in an older adult: screen falls risk and bone health."
  ],

  management: {
    principles: "Non-operative management is indicated for undisplaced fractures with an intact extensor mechanism; surgical fixation is recommended when the extensor mechanism is disrupted or displacement exceeds about 2–3 mm of articular step-off or 1–4 mm of separation [r2]. Anatomical reduction with tension-band fixation is associated with the best outcomes, but symptomatic implants are frequent [r2,r6]. Partial patellectomy is reserved for unreconstructable pole fragments. Rehabilitation in both pathways protects the healing patella from high tensile loads (usually an extension brace with progressive range-of-motion limits), restores range and builds quadriceps strength, which is the main long-term deficit [r7].",
    medical: [
      { name: "Open reduction and internal fixation (tension band, screws, plates)", description: "For displaced fractures or a disrupted extensor mechanism; restores the articular surface and extensor continuity [r2].", evidence: "limited", recommendation: "recommended", refs: ["r2"] },
      { name: "Non-operative management in an extension brace or cylinder cast", description: "For undisplaced fractures with intact straight-leg raise; weight-bearing as tolerated in extension for about 4–6 weeks with progressive range [r2].", evidence: "limited", recommendation: "recommended", refs: ["r2"] },
      { name: "Implant removal", description: "Symptomatic implants are the most common complication after fixation, leading to removal in about 30% [r6].", evidence: "moderate", recommendation: "consider", refs: ["r6"] },
      { name: "Partial patellectomy", description: "Excision of a small unreconstructable pole fragment with tendon reattachment; also an option in some nonunions [r9].", evidence: "very-limited", recommendation: "consider", refs: ["r9"] },
      { name: "Non-operative treatment of displaced fractures in active patients", description: "Displaced fractures with extensor disruption managed non-operatively risk nonunion and extensor weakness; reserved for frail, low-demand patients [r9].", evidence: "very-limited", recommendation: "not-recommended", refs: ["r9"] }
    ],
    physio: [
      { name: "Early quadriceps activation and effusion control", description: "Isometric quadriceps sets from day 1, with cryotherapy, compression and NMES to reduce arthrogenic inhibition [r5].", evidence: "limited", recommendation: "recommended", refs: ["r5"] },
      { name: "Graded range of motion within protocol limits", description: "Progressive flexion limits (for example, about 0–30° early, increasing to 90° by about 6 weeks) set by the surgeon according to fixation stability (expert opinion).", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Progressive quadriceps strengthening", description: "Long-term quadriceps deficits of about 26–31% are common after fixation, so strengthening should continue well beyond fracture union and be measured objectively [r7].", evidence: "limited", recommendation: "recommended", refs: ["r7"] },
      { name: "Early resisted knee extension or forced flexion", description: "High tensile loads on the extensor mechanism before union risk fixation failure (about 5%) [r6]. Avoid resisted extension and aggressive flexion stretching until the surgeon allows.", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] },
      { name: "Gait training and falls prevention", description: "Safe walking with aids in the brace; balance and falls-prevention work in older adults (expert opinion).", evidence: "expert-opinion", recommendation: "recommended", refs: [] }
    ],
    education: [
      "The kneecap is a lever for your thigh muscle. Protecting it while it heals means keeping the knee mostly straight in a brace for the first weeks.",
      "Bone usually heals in about 6–8 weeks, but strengthening the thigh muscle takes months and is the key to a good result.",
      "Metal used to fix the kneecap sometimes becomes irritating and may be removed later.",
      "Kneeling may be uncomfortable for a long time; tell us if pain is limiting you.",
      "Report a red, hot or leaking wound, fever, or new inability to straighten the knee."
    ]
  },

  rehab: {
    overview: "Follow the surgeon's protocol for brace use and range of motion; the principles below apply to both fixed and non-operatively managed fractures. Early stages protect the healing patella from high quadriceps tension while preventing stiffness and inhibition. After union, progressive heavy quadriceps strengthening is essential because strength deficits persist for years in many patients [r7].",
    stages: [
      {
        name: "Protect & activate",
        timeframe: "Weeks 0–6",
        goals: ["Control pain and swelling", "Quadriceps activation", "Range of motion within protocol limits", "Safe gait in an extension brace"],
        precautions: ["Brace locked in extension for walking", "Flexion limited per surgeon (often 0–30° early, progressing to 90° by ~6 weeks)", "No resisted knee extension", "Monitor wound and calf"],
        exercises: [
          { name: "Quadriceps sets", dosage: "10 × 10 s, 3–4 times daily", cues: "Tighten the thigh; the kneecap should glide upward", figure: { pose: "ex-quad-set", view: "lateral", props: ["mat"] } },
          { name: "Heel slides within the allowed range", dosage: "2 × 15, 2–3 times daily", figure: { pose: "ex-heel-slide", view: "lateral", props: ["mat"] } },
          { name: "Straight-leg raise in brace (if cleared)", dosage: "3 × 10", figure: { pose: "ex-straight-leg-raise", view: "lateral", props: ["mat"] } },
          { name: "Standing hip abduction and extension", dosage: "3 × 12 each", figure: { pose: "ex-hip-abduction-standing", view: "anterior" } },
          { name: "Calf raises", dosage: "3 × 15", figure: { pose: "ex-calf-raise", view: "lateral" } }
        ],
        progressionCriteria: ["Flexion ≥ 90° by about 6 weeks", "Active straight-leg raise without lag", "Radiographic healing progressing", "Surgeon clearance to remove the brace"]
      },
      {
        name: "Restore range & gait",
        timeframe: "Weeks 6–12",
        goals: ["Full range of motion", "Normal gait without brace or aids", "Early closed-chain strength"],
        precautions: ["Progress resisted extension gradually", "Avoid kneeling directly on the patella"],
        exercises: [
          { name: "Stationary bike", dosage: "10–20 min daily" },
          { name: "Mini squat / wall sit", dosage: "3 × 12 or 3 × 30 s", figure: { pose: "ex-wall-sit", view: "lateral", props: ["wall"] } },
          { name: "Step-ups", dosage: "3 × 10", figure: { pose: "ex-step-up", view: "lateral", props: ["box"] } },
          { name: "Bridge", dosage: "3 × 12", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } }
        ],
        progressionCriteria: ["Flexion ≥ 120° and full extension", "Normal gait", "Quadriceps LSI ≥ 60%"]
      },
      {
        name: "Strength & function",
        timeframe: "Months 3–6",
        goals: ["Progressive heavy quadriceps strengthening", "Stairs, squatting and work tasks", "Kneeling tolerance"],
        precautions: ["Monitor anterior knee pain and implant irritation"],
        exercises: [
          { name: "Seated knee extension", dosage: "3 × 10–12, progress load", figure: { pose: "ex-knee-extension", view: "lateral", props: ["chair"] } },
          { name: "Squat with load", dosage: "3–4 × 8", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Split squat", dosage: "3 × 8 each side", figure: { pose: "ex-split-squat", view: "lateral", props: ["dumbbell"] } },
          { name: "Step-downs", dosage: "3 × 10", figure: { pose: "ex-step-down", view: "anterior", props: ["step"] } }
        ],
        progressionCriteria: ["Quadriceps LSI ≥ 80%", "Pain-free stairs and squat"]
      },
      {
        name: "Return to sport & high-level activity",
        timeframe: "Months 4–12",
        goals: ["Running, jumping and sport-specific tasks", "Quadriceps symmetry"],
        precautions: ["Return to contact and kneeling-intensive activity only after union and adequate strength"],
        exercises: [
          { name: "Walk–run progression", dosage: "Every second day, building to 20–30 min" },
          { name: "Jump and hop landings", dosage: "3 × 5", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Single-leg squat", dosage: "3 × 8", figure: { pose: "ex-single-leg-squat", view: "anterior" } }
        ],
        progressionCriteria: ["Quadriceps LSI ≥ 90%", "Hop test LSI ≥ 90%", "No effusion after loading"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Radiographic union and surgeon clearance",
      "Full range of motion and no extensor lag",
      "Quadriceps strength ≥ 90% of the other side",
      "Hop tests ≥ 90% symmetry",
      "Tolerance of kneeling and contact demands of the sport"
    ],
    tests: ["Quadriceps dynamometry LSI", "Hop test battery", "KOOS sport/recreation subscale"]
  },
  prognosis: "Most fractures unite, but full recovery is uncommon. In a pooled analysis of 5659 operatively treated patients, symptomatic implant removal occurred in 29.6%, fixation failure in 5.2%, infection in 3.1% and nonunion in 1.7% [r6]. At a mean of 6.5 years after fixation, patients had a 26% isometric quadriceps deficit, extensor lag > 5° in 20% and markedly reduced KOOS sport (45.2) and quality-of-life (49.6) scores [r7]. In a national cohort, patellar fracture increased the risk of later knee arthroplasty (HR 1.83) and arthroscopy (HR 3.94) [r8]. Children generally do well, with patient-reported outcomes close to normal values [r10].",
  prevention: [
    "Falls prevention, strength and balance training, and osteoporosis management in older adults [r1].",
    "Seat belts and correct seating to reduce dashboard impacts (general advice)."
  ],
  clinicalPearls: [
    "Always ask the patient to lift the straight leg. Loss of active extension, not the fracture line, usually decides surgery [r2].",
    "A preserved straight-leg raise does not exclude a fracture; intact retinacula can keep extension going. Radiograph if the Ottawa rules apply [r3].",
    "A smooth superolateral 'fracture' line seen in both knees is likely a bipartite patella, not an injury.",
    "In children, a small inferior-pole fleck on X-ray may be a large cartilage sleeve fracture; consider MRI [r10].",
    "Quadriceps weakness is the long-term story. Measure it and keep strengthening well after union [r7]."
  ],
  related: ["quadriceps-tendon-rupture", "patellar-tendon-rupture", "patellar-dislocation", "tibial-plateau-fracture", "prepatellar-bursitis", "patellofemoral-pain"],

  references: [
    { id: "r1", citation: "Larsen P, Court-Brown CM, Vedel JO, et al. Incidence and epidemiology of patellar fractures. Orthopedics. 2016;39(6):e1154-e1158.", pmid: "27536953", doi: "10.3928/01477447-20160811-01", type: "cohort", year: 2016 },
    { id: "r2", citation: "Melvin JS, Mehta S. Patellar fractures in adults. J Am Acad Orthop Surg. 2011;19(4):198-207.", pmid: "21464213", doi: "10.5435/00124635-201104000-00004", type: "narrative-review", year: 2011 },
    { id: "r3", citation: "Stiell IG, Greenberg GH, Wells GA, et al. Prospective validation of a decision rule for the use of radiography in acute knee injuries. JAMA. 1996;275(8):611-5.", pmid: "8594242", type: "diagnostic-accuracy", year: 1996 },
    { id: "r4", citation: "Sims JI, Chau MT, Davies JR. Diagnostic accuracy of the Ottawa Knee Rule in adult acute knee injuries: a systematic review and meta-analysis. Eur Radiol. 2020;30(8):4438-46.", pmid: "32222797", doi: "10.1007/s00330-020-06804-x", type: "meta-analysis", year: 2020 },
    { id: "r5", citation: "Rice DA, McNair PJ. Quadriceps arthrogenic muscle inhibition: neural mechanisms and treatment perspectives. Semin Arthritis Rheum. 2010;40(3):250-66.", pmid: "19954822", doi: "10.1016/j.semarthrit.2009.10.001", type: "narrative-review", year: 2010 },
    { id: "r6", citation: "Vesterager JD, Torngren H, Elsoe R, et al. Complications following surgical treatment of patella fractures: a systematic review and proportional meta-analysis. Eur J Trauma Emerg Surg. 2024;50(5):1985-94.", pmid: "38980395", doi: "10.1007/s00068-024-02592-x", type: "meta-analysis", year: 2024 },
    { id: "r7", citation: "LeBrun CT, Langford JR, Sagi HC. Functional outcomes after operatively treated patella fractures. J Orthop Trauma. 2012;26(7):422-6.", pmid: "22183197", doi: "10.1097/BOT.0b013e318228c1a1", type: "cohort", year: 2012 },
    { id: "r8", citation: "Larsen P, Rathleff MS, Østgaard SE, et al. Patellar fractures are associated with an increased risk of total knee arthroplasty: a matched cohort study of 6096 patellar fractures with a mean follow-up of 14.3 years. Bone Joint J. 2018;100-B(11):1477-81.", pmid: "30418070", doi: "10.1302/0301-620X.100B11.BJJ-2018-0312.R2", type: "cohort", year: 2018 },
    { id: "r9", citation: "Nathan ST, Fisher BE, Roberts CS, et al. The management of nonunion and delayed union of patella fractures: a systematic review of the literature. Int Orthop. 2011;35(6):791-5.", pmid: "20680273", doi: "10.1007/s00264-010-1105-6", type: "systematic-review", year: 2011 },
    { id: "r10", citation: "Beatty EW, Hupin M, Kramer DE, et al. Outcomes of treatment of patella fractures in children and adolescents. J Child Orthop. 2024;18(3):258-65.", pmid: "38831855", doi: "10.1177/18632521241232301", type: "cohort", year: 2024 }
  ],

  animation: {
    title: "How a patella fracture happens",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "lateral", environment: "road",
        actors: [{ id: "person", kit: "older-adult" }],
        keyframes: [
          { t: 0, pose: "walk-heel-strike", root: { x: -110 } },
          { t: 1.0, pose: "walk-push-off", root: { x: -70 } },
          { t: 1.8, pose: "trip", root: { x: -35 } },
          { t: 2.6, pose: "kneel", joints: { kneeR: 100, ankleR: 10, hipR: 15, trunk: 30 }, root: { x: -10 }, ease: "in" },
          { t: 3.6, pose: "kneel", joints: { kneeR: 105, trunk: 15 }, root: { x: -8 } },
          { t: 5.2, pose: "kneel", joints: { kneeR: 110, trunk: 5 }, root: { x: -8 } }
        ],
        props: [{ id: "kerb", type: "kerb", keyframes: [{ t: 0, x: -20, y: 0 }] }],
        forces: [
          { t: [1.8, 2.8], at: "thighR", dir: "up", label: "Quadriceps contracts hard to stop the fall" },
          { t: [2.4, 3.8], at: "kneeR", dir: "backward", label: "Kneecap strikes the ground", size: "l" }
        ],
        highlights: [{ t: [2.6, 6], at: "kneeR" }],
        impacts: [{ t: 2.7, at: "kneeR" }],
        slowmo: [{ t: [2.2, 3.3], rate: 0.3 }],
        captions: [
          { t: 0, text: "An older woman is walking along the footpath." },
          { t: 1.2, text: "She catches her foot on the kerb and stumbles forward." },
          { t: 1.9, text: "The quadriceps fires hard to stop the knee buckling, pulling on the patella." },
          { t: 2.7, text: "She lands with her weight on the front of the bent knee: a direct blow to the kneecap." },
          { t: 4.2, text: "Immediate pain and swelling, and she cannot lift her straight leg." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "kneeR",
        captions: [{ t: 0, text: "Zooming into the right knee from the side; the patella sits in the quadriceps tendon." }]
      },
      {
        type: "closeup", label: "Inside the knee", duration: 10, scene: "knee-sagittal",
        actions: [
          { t: 0, do: "highlight", target: "patella" },
          { t: 0.3, do: "label", target: "patella", text: "Patella: lever of the extensor mechanism" },
          { t: 1.0, do: "contract", target: "quadriceps", amount: 0.5, dur: 0.8 },
          { t: 1.2, do: "arrow", at: "quadricepsTendonInsertion", dir: "superior", label: "Quadriceps tension", size: "m" },
          { t: 1.6, do: "arrow", at: "prepatellar", dir: "posterior", label: "Direct blow", size: "l" },
          { t: 2.4, do: "impact", at: "patellaCentre" },
          { t: 2.4, do: "fracture", target: "patella", pattern: "transverse", at: "patellaCentre", displaced: true },
          { t: 3.0, do: "label", target: "patella", text: "Transverse fracture: fragments pulled apart" },
          { t: 3.8, do: "lesion", target: "patellarCartilage", at: 0.5, depth: "full" },
          { t: 4.0, do: "label", target: "patellarCartilage", text: "Step in the joint surface" },
          { t: 5.0, do: "bleed", target: "jointSpace" },
          { t: 5.2, do: "label", target: "jointSpace", text: "Haemarthrosis" },
          { t: 6.2, do: "atrophy", target: "quadriceps", amount: 0.3 },
          { t: 6.4, do: "label", target: "quadriceps", text: "Quadriceps inhibited, then weak for months" },
          { t: 7.6, do: "camera", at: "patellaCentre", zoom: 1.7, dur: 1 },
          { t: 9.2, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "The patella sits within the extensor mechanism, between the quadriceps and patellar tendons." },
          { t: 1.0, text: "The quadriceps pulls hard on the patella while the bent knee bends it over the femur." },
          { t: 1.6, text: "The impact on the front of the knee adds a compressive blow." },
          { t: 2.4, text: "The patella cracks across its waist, and quadriceps pull separates the fragments." },
          { t: 3.8, text: "The joint surface behind the patella is stepped and bruised: a later arthritis risk." },
          { t: 5.0, text: "Blood fills the joint, and without the lever the knee cannot be actively straightened." },
          { t: 7.6, text: "Displaced fractures are usually fixed so the patella can transmit quadriceps force again." }
        ]
      },
      {
        type: "micro", label: "Bone healing", duration: 10, tissue: "bone-fracture",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.2, stage: "fracture" }, { t: 2.6, stage: "haematoma" }, { t: 4.0, stage: "inflammation" },
          { t: 5.5, stage: "soft-callus" }, { t: 7.0, stage: "hard-callus" }, { t: 8.5, stage: "remodelling" }
        ],
        timeLabels: [{ t: 2.6, text: "Hours" }, { t: 4.0, text: "Days 0–7" }, { t: 5.5, text: "Weeks 1–4" }, { t: 7.0, text: "Weeks 4–8" }, { t: 8.5, text: "Months – years" }],
        captions: [
          { t: 0, text: "Healthy bone: a dense cortical shell around cancellous bone." },
          { t: 1.2, text: "Tension and impact break the cortex and trabeculae." },
          { t: 2.6, text: "Bleeding fills the fracture gap with haematoma." },
          { t: 4.0, text: "Inflammatory cells release signals that recruit bone-forming stem cells." },
          { t: 5.5, text: "Soft callus bridges the gap; fixation keeps the fragments compressed together." },
          { t: 7.0, text: "Callus mineralises; most patellar fractures unite within about 6–8 weeks." },
          { t: 8.5, text: "Bone remodels over months, but quadriceps strength takes far longer to return." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL4" }
};
