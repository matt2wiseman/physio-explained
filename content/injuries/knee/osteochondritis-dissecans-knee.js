export default {
  id: "osteochondritis-dissecans-knee",
  name: "Osteochondritis dissecans (OCD) of the knee",
  shortName: "Knee OCD",
  aka: ["OCD knee", "osteochondritis dissecans", "juvenile osteochondritis dissecans", "JOCD", "osteochondral lesion femoral condyle", "loose body knee"],
  region: "knee",
  tissues: ["bone", "cartilage"],
  onset: "gradual",
  mechanismType: ["overuse", "insidious"],
  populations: ["active children and adolescents (10–19 years)", "adolescent male athletes", "young adults (adult OCD)", "children with juvenile idiopathic arthritis"],
  sports: ["soccer", "basketball", "baseball", "gymnastics", "running", "american football", "australian football"],
  urgency: "urgent",
  summary: "A focal disorder of subchondral bone, usually on the lateral side of the medial femoral condyle in active adolescents, that can loosen the overlying cartilage and bone. Stable juvenile lesions often heal with offloading.",
  keyFacts: [
    { label: "Peak age", value: "12–19 years; about 4 times more common in males" },
    { label: "Incidence", value: "9.5 per 100,000 in 6–19-year-olds" },
    { label: "Typical site", value: "Medial femoral condyle (64%), classically its lateral aspect" },
    { label: "Imaging", value: "Radiographs including a notch (tunnel) view; MRI to assess size and stability" },
    { label: "Typical recovery", value: "Stable juvenile lesions: about two-thirds progress to healing in 6 months of offloading" },
    { label: "Key test", value: "No reliable clinical test; diagnosis is radiological" }
  ],
  overview: "Osteochondritis dissecans (OCD) is a focal, idiopathic lesion of subchondral bone that can progress to separation of the bone and overlying articular cartilage, producing a loose fragment [r1,r2]. It mostly affects active adolescents, in whom it is about four times more common in males, and most lesions are on the medial femoral condyle [r1]. The cause is uncertain; repetitive microtrauma to the subchondral bone in a growing skeleton is the leading theory, with ischaemic, genetic and alignment factors also proposed [r3].\n\nPrognosis depends on skeletal maturity and lesion stability. Stable lesions with open growth plates (juvenile OCD) often heal with activity modification: about two-thirds progress toward healing within 6 months [r4]. Adult lesions and unstable lesions rarely heal without surgery [r5]. Evidence is weak overall: none of the recommendations in the AAOS guideline was graded strong [r2]. The physiotherapist's roles are early recognition, activity modification, maintaining fitness, and graded return to impact once healing is confirmed.",

  epidemiology: {
    text: "In a population-based cohort of over 1 million children, the incidence of knee OCD in 6–19-year-olds was 9.5 per 100,000 (15.4 in males and 3.3 in females). Those aged 12–19 had 3.3 times the risk of those aged 6–11, males had 3.8 times the risk of females, and no lesions were found under 6 years. Of 206 lesions, 63.6% were on the medial and 32.5% on the lateral femoral condyle, and 7.3% of patients had bilateral lesions [r1]. Coronal malalignment toward the affected compartment is common: in one cohort nearly half of affected knees were malaligned, including two-thirds of lateral condyle lesions in valgus knees [r6]. In children with juvenile idiopathic arthritis, OCD was 50–500 times more prevalent than in the general population [r7].",
    riskFactors: {
      intrinsic: [
        "Age 12–19 years and male sex [r1]",
        "Open growth plates (juvenile OCD) during periods of rapid growth",
        "Coronal malalignment loading the affected compartment (varus for medial, valgus for lateral lesions) [r6]",
        "Juvenile idiopathic arthritis [r7]",
        "Discoid lateral meniscus (lateral condyle lesions)",
        "Family history (possible genetic predisposition)"
      ],
      extrinsic: [
        "High volumes of running, jumping and impact sport, often year-round [r3]",
        "Early sport specialisation with limited rest",
        "Training on hard surfaces"
      ]
    }
  },

  mechanism: {
    summary: "There is usually no single injury. Repetitive impact and shear load the subchondral bone of the femoral condyle faster than it can remodel, particularly in adolescents whose secondary ossification centre is still maturing. One theory is that the tibial spine impinges on the lateral aspect of the medial femoral condyle when the tibia rotates internally. The bone beneath the cartilage weakens, becomes ischaemic and separates from the parent bone, and the cartilage may then fissure and detach [r3].",
    sequence: [
      "An active adolescent trains and plays impact sport most days, often year-round.",
      "Repeated compression and shear load the subchondral bone of the femoral condyle, classically the lateral aspect of the medial condyle.",
      "Microdamage accumulates faster than bone can remodel; the area becomes ischaemic and resorption exceeds formation.",
      "A fragment of subchondral bone (the progeny) separates from the parent bone by a fibrous or fluid-filled interface, while the cartilage over it is still intact (stable lesion).",
      "Vague, activity-related knee pain develops; the child may limp after sport.",
      "With continued loading the cartilage fissures and the fragment becomes mobile (unstable lesion).",
      "The fragment may detach as a loose body, causing catching, locking and effusion."
    ],
    variants: [
      { name: "Juvenile OCD (open physes)", description: "Usually stable at diagnosis with good healing potential; managed initially with activity modification [r3,r4]." },
      { name: "Adult OCD (closed physes)", description: "Either a persisting juvenile lesion or new onset; more often unstable and rarely heals without surgery [r5]." },
      { name: "Lateral condyle lesions", description: "About a third of lesions; associated with valgus alignment and discoid lateral meniscus [r1,r6]." },
      { name: "Patellar and trochlear lesions", description: "Less common; present with anterior knee pain on stairs and squatting." }
    ]
  },

  anatomy: {
    text: "The distal femoral condyles are covered by hyaline cartilage supported by subchondral bone. In children the condyles ossify from a secondary ossification centre beneath a layer of growing cartilage, and the subchondral bone matures as the distal femoral physis approaches closure. The lateral aspect of the medial femoral condyle, next to the intercondylar notch and the PCL attachment, is the classic OCD site and lies close to the tibial spine in knee flexion with internal tibial rotation. Lesions on the weight-bearing condylar surface carry more load and a less favourable prognosis.",
    structures: [
      { name: "Medial femoral condyle", role: "Main weight-bearing condyle; site of about two-thirds of OCD lesions [r1]" },
      { name: "Subchondral bone", role: "Supports cartilage; the primary site of OCD pathology" },
      { name: "Articular cartilage", role: "Initially intact over the lesion; fissures and separates as the lesion becomes unstable" },
      { name: "Distal femoral physis", role: "Open physes define juvenile OCD and predict better healing [r3]" },
      { name: "Tibial spines", role: "May contact the lateral aspect of the medial condyle in flexion and internal rotation (impingement theory)" },
      { name: "Quadriceps", role: "Weakens with pain and activity restriction; key rehabilitation target" }
    ]
  },

  pathophysiology: {
    tissueDamage: "OCD begins in subchondral bone. Repetitive loading is thought to cause microdamage and an area of ischaemia; the affected bone (progeny) becomes separated from the surrounding parent bone by a zone of fibrous tissue, fluid or cyst-like change. While the overlying cartilage is intact the lesion is stable, and with offloading the interface can reossify from the periphery [r3,r4]. Larger lesions, cyst-like change at the interface and mechanical symptoms predict failure to heal [r4,r5].\n\nIf loading continues, the cartilage over the lesion fissures and the progeny fragment becomes hinged or detached (unstable). Synovial fluid then enters the interface and blocks healing, and a detached fragment becomes a loose body that can damage other cartilage surfaces. An empty crater on a weight-bearing condyle behaves like a large osteochondral defect and predisposes to early osteoarthritis [r3]. MRI signs of instability are reliable in adults but much less specific in juvenile lesions [r8].",
    structures: [
      { name: "Subchondral bone (progeny fragment)", effect: "Ischaemia, resorption and separation from parent bone; may reossify if offloaded" },
      { name: "Parent bone interface", effect: "Fibrous tissue, fluid or cyst-like change; cysts predict non-healing [r5]" },
      { name: "Articular cartilage", effect: "Softening, then fissuring and separation as the lesion becomes unstable" },
      { name: "Joint cavity", effect: "Loose body and effusion with unstable lesions" },
      { name: "Opposing tibial cartilage", effect: "Secondary damage from a loose or incongruent fragment" }
    ],
    muscles: [
      { name: "Quadriceps", effect: "Atrophy and inhibition with pain, effusion and activity restriction" },
      { name: "Hip abductors and extensors", effect: "Deconditioning during offloading; contribute to poor landing mechanics on return" },
      { name: "Calf", effect: "Disuse weakness if weight-bearing is restricted" }
    ],
    cellular: [
      { phase: "Microdamage & ischaemia", timing: "Months of loading", description: "Repetitive load causes subchondral microdamage and a zone of reduced perfusion; osteocytes die and remodelling lags [r3]." },
      { phase: "Separation of progeny bone", timing: "Weeks to months", description: "Osteoclastic resorption exceeds formation at the interface; fibrous tissue or fluid separates the fragment." },
      { phase: "Reossification (stable, offloaded)", timing: "3–12 months", description: "New bone bridges from the periphery of the lesion; about two-thirds of stable juvenile lesions progress toward healing within 6 months [r4]." },
      { phase: "Instability & detachment (if loading continues)", timing: "Variable", description: "Cartilage fissures, synovial fluid tracks into the interface and the fragment detaches; healing potential falls sharply." }
    ],
    systems: [
      { system: "Musculoskeletal (growth)", effect: "Skeletal immaturity is the strongest predictor of healing; lesions in growing children reossify far more readily than adult lesions [r3,r5]." },
      { system: "Nervous system", effect: "Pain arises from subchondral bone and synovitis; quadriceps inhibition develops with effusion." },
      { system: "Musculoskeletal chain", effect: "Limp, reduced knee flexion and offloading of the limb; possible external rotation of the tibia during gait to avoid spine contact (Wilson's sign gait)." },
      { system: "Psychological / social", effect: "Months away from sport affect identity, mood and peer connection in young athletes; involve families and coaches." },
      { system: "Long-term joint health", effect: "Unhealed or excised weight-bearing lesions predispose to early osteoarthritis [r3]." }
    ]
  },

  grading: {
    system: "Stability and skeletal maturity, with the ROCK arthroscopic classification",
    grades: [
      { grade: "Stable juvenile OCD", description: "Open physes; cartilage intact; no MRI or arthroscopic evidence of fragment motion.", prognosis: "About 50–67% heal with non-operative treatment [r9,r4]" },
      { grade: "Unstable juvenile OCD", description: "Open physes with cartilage breach, fluid behind the fragment or fragment motion.", prognosis: "Usually needs surgical fixation [r3]" },
      { grade: "Adult OCD", description: "Closed physes (persisting juvenile lesion or new onset).", prognosis: "Rarely heals without surgery [r5]" },
      { grade: "ROCK immobile types (cue ball, shadow, wrinkle in the rug)", description: "Arthroscopic lesions without fragment motion, from normal-appearing cartilage to a cartilage fold or buckle [r10].", prognosis: "Candidates for drilling or observation" },
      { grade: "ROCK mobile types (locked door, trap door, crater)", description: "Arthroscopic lesions with a fissured, hinged or fully detached fragment leaving a crater [r10].", prognosis: "Fixation, or cartilage restoration if the fragment is unsalvageable" }
    ]
  },

  timeframes: {
    summary: "Healing of stable juvenile lesions is slow, measured in months on serial imaging. Return to impact sport follows evidence of reossification, not just pain relief.",
    healing: [
      { phase: "Offloading & settling", startDay: 0, endDay: 42, description: "Activity restriction (no running or jumping); symptoms settle" },
      { phase: "Early reossification", startDay: 42, endDay: 180, description: "Peripheral new bone bridges the interface on serial radiographs or MRI" },
      { phase: "Consolidation", startDay: 180, endDay: 365, description: "Lesion fills in; graded return to impact as healing progresses" }
    ],
    milestones: [
      { label: "Pain-free walking and daily activity", day: 42 },
      { label: "Radiographic healing after drilling (mean)", day: 150, note: "4.5–5.6 months; 86–91% healed [r11]" },
      { label: "Healing progress in two-thirds of stable juvenile lesions", day: 180, note: "6 months of non-operative care [r4]" },
      { label: "MRI healing progress in about half (nonoperative)", day: 365, note: "49% at 12 months in a stricter MRI cohort [r5]" }
    ],
    returnToSport: "Typically 3–6 months after drilling or 6–12 months with non-operative care or fixation, once the patient is pain-free, has full function and imaging shows healing."
  },

  clinicalPresentation: {
    symptoms: [
      "Vague, poorly localised, activity-related knee pain in an active adolescent",
      "Limp or stiffness after sport",
      "Intermittent swelling",
      "Catching or locking with unstable lesions or loose bodies",
      "Often no specific injury, or a minor injury that drew attention to the knee"
    ],
    signs: [
      "Tenderness over the affected condyle with the knee flexed (medial condyle just medial to the patellar tendon)",
      "Effusion, particularly with unstable lesions",
      "Antalgic gait, sometimes with the tibia held externally rotated",
      "Quadriceps atrophy",
      "Pain or a block to motion with a loose body"
    ]
  },

  assessment: {
    subjective: [
      "Age, growth stage and sport volume (hours per week, specialisation, rest periods)",
      "Onset: insidious activity-related pain rather than a single injury",
      "Mechanical symptoms: catching, locking, giving way (instability, loose body)",
      "Swelling, night pain and systemic symptoms (exclude infection or tumour)",
      "Hip or thigh pain (referred hip pathology such as slipped capital femoral epiphysis)",
      "History of juvenile idiopathic arthritis or previous knee problems [r7]"
    ],
    observation: ["Alignment (varus or valgus) [r6]", "Gait: limp or external rotation of the tibia", "Effusion and quadriceps wasting"],
    palpation: ["Femoral condyle tenderness with the knee flexed", "Joint-line tenderness (meniscus, discoid meniscus)", "Effusion grading", "Tibial tuberosity and inferior pole of patella (apophysitis differentials)"],
    rangeOfMotion: ["Knee range usually full in stable lesions", "A block or locking suggests a loose body", "Hip range of motion, especially internal rotation (exclude hip pathology)"],
    strength: ["Quadriceps and hip strength compared with the other side", "Calf endurance"],
    neuro: [],
    functional: ["Gait and single-leg squat", "Step-down and hop only when appropriate and pain-free"],
    specialTests: [
      { name: "Wilson test", purpose: "Provoke pain from a classic lesion on the lateral aspect of the medial femoral condyle", procedure: "Patient sitting with the knee at 90°. Internally rotate the tibia and slowly extend the knee; pain at about 30° that is relieved by externally rotating the tibia is positive.", positive: "Pain at about 30° of flexion with internal rotation, relieved by external rotation. A negative test does not exclude OCD; use imaging.", refs: [] },
      { name: "Stroke test for effusion", purpose: "Detect effusion, which suggests instability or a loose body", procedure: "Stroke fluid up from the medial recess, then down the lateral side, and observe the medial recess refill.", positive: "Visible fluid wave.", refs: [] }
    ],
    clinicalRules: [],
    outcomeMeasures: [
      { name: "Pedi-IKDC (paediatric IKDC Subjective Knee Form)", use: "Knee function in children and adolescents" },
      { name: "KOOS-Child", use: "Paediatric knee symptoms, function and quality of life" },
      { name: "Lysholm score", use: "Knee function in adolescents and adults" },
      { name: "Serial imaging (radiographs/MRI)", use: "Objective measure of reossification and healing [r4,r5]" }
    ],
    imaging: [
      { modality: "Plain radiographs (AP, lateral, notch/tunnel and skyline views)", indication: "First-line for adolescents with persistent knee pain or effusion [r2]", findings: "Lucent lesion with a sclerotic rim, classically on the lateral aspect of the medial femoral condyle (best seen on the notch view); loose bodies; physeal status" },
      { modality: "MRI", indication: "To characterise size, location and stability and to detect other pathology once a lesion is seen [r2]", findings: "High-signal rim, cysts, cartilage fracture line or fluid behind the fragment. These criteria are highly specific for instability in adults but not in juvenile lesions [r8], and many MRI features have poor inter-rater reliability [r12]." },
      { modality: "Long-leg standing radiographs", indication: "Assess coronal alignment, especially for large or lateral lesions", findings: "Varus or valgus malalignment loading the affected compartment [r6]" }
    ]
  },

  differentials: [
    { name: "Normal ossification variant", distinguishing: "Irregular ossification of the posterior condyles in younger children; asymptomatic, no bone oedema, bilateral and resolves with growth." },
    { name: "Articular cartilage defect", id: "articular-cartilage-defect-knee", distinguishing: "Traumatic chondral lesion without the primary subchondral bone process; usually skeletally mature." },
    { name: "Meniscal tear (including discoid meniscus)", id: "meniscal-tear", distinguishing: "Joint-line tenderness, rotational provocation; discoid lateral meniscus causes snapping in younger children." },
    { name: "Osgood–Schlatter disease", id: "osgood-schlatter", distinguishing: "Pain and swelling localised to the tibial tuberosity; no effusion." },
    { name: "Patellofemoral pain", id: "patellofemoral-pain", distinguishing: "Anterior knee pain with squatting and stairs; no effusion; normal imaging." },
    { name: "Slipped capital femoral epiphysis", id: "scfe", distinguishing: "Knee or thigh pain referred from the hip; reduced hip internal rotation and obligatory external rotation in flexion. Always examine the hip." }
  ],
  redFlags: [
    "Locked knee or a loose body: arrange urgent orthopaedic review for possible fixation of the fragment.",
    "Adolescent with knee pain and restricted, painful hip internal rotation: suspect slipped capital femoral epiphysis and arrange same-day hip radiographs.",
    "Night pain, constant pain, fever, weight loss or a bony mass: investigate for osteomyelitis or bone tumour.",
    "Rapidly enlarging effusion with fever: suspect septic arthritis and refer for same-day assessment.",
    "A stable lesion that becomes more painful, with new effusion or mechanical symptoms: re-image for instability."
  ],

  management: {
    principles: "Management depends on skeletal maturity, lesion stability, size and symptoms, and the evidence base is weak: none of the 16 AAOS recommendations was graded strong, most were inconclusive, and the two weak recommendations concern imaging [r2]. For stable juvenile lesions, start with non-operative care: stop running, jumping and impact sport, maintain fitness with non-impact activity, and monitor healing with serial imaging every 6–12 weeks. About 50–67% of stable juvenile lesions heal this way [r9,r4]. Lesions that fail 3–6 months of non-operative care are considered for drilling. Unstable lesions, loose bodies and most adult lesions need surgical fixation or, if the fragment is unsalvageable, cartilage restoration [r3,r5]. Address coronal malalignment, particularly in growing children [r6].",
    medical: [
      { name: "Activity modification with serial imaging (stable juvenile OCD)", description: "Cessation of impact activity for about 6 weeks to 6 months with clinical and radiographic review; about two-thirds of stable lesions progress to healing at 6 months [r4,r9].", evidence: "limited", recommendation: "recommended", refs: ["r4", "r9", "r13"] },
      { name: "Immobilisation, protected weight-bearing or unloader bracing", description: "Sometimes added for painful lesions, but their value over activity restriction alone has not been established [r3].", evidence: "very-limited", recommendation: "consider", refs: ["r3"] },
      { name: "Arthroscopic drilling of stable lesions", description: "Retroarticular or transarticular drilling to stimulate revascularisation after failed non-operative care; radiographic healing in 86–91% of juvenile lesions at a mean of 4.5–5.6 months [r11].", evidence: "limited", recommendation: "consider", refs: ["r11"] },
      { name: "Fixation of unstable lesions", description: "Reduction and fixation with screws or bioabsorbable implants, with or without bone grafting, for unstable fragments and salvageable loose bodies [r3].", evidence: "limited", recommendation: "recommended", refs: ["r3"] },
      { name: "Fragment excision from a weight-bearing area", description: "Removing large fragments from weight-bearing zones gives poor results [r3]; restoration options are preferred.", evidence: "limited", recommendation: "not-recommended", refs: ["r3"] },
      { name: "Cartilage restoration (osteochondral autograft or allograft, ACI)", description: "For unsalvageable fragments or residual craters in older adolescents and adults [r14].", evidence: "limited", recommendation: "consider", refs: ["r14"] },
      { name: "Guided growth for coronal malalignment", description: "Hemiepiphysiodesis may be considered when malalignment loads the affected compartment in a growing child [r6].", evidence: "very-limited", recommendation: "consider", refs: ["r6"] }
    ],
    physio: [
      { name: "Education and activity modification", description: "Explain the condition, the need to pause impact sport even when pain settles, and that healing is confirmed by imaging. Agree substitute activities and a timeline with the family and coach [r9].", evidence: "limited", recommendation: "recommended", refs: ["r9"] },
      { name: "Maintenance of fitness and strength without impact", description: "Cycling, swimming (no breaststroke kick if painful), upper-body and core training; isometric and pain-free closed-chain quadriceps and hip strengthening.", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Individualised post-operative rehabilitation", description: "Protected weight-bearing after fixation or drilling as directed, early range of motion, then progressive strengthening; tailor to lesion stage and procedure [r9].", evidence: "limited", recommendation: "recommended", refs: ["r9"] },
      { name: "Graded return to running and impact after healing", description: "Walk–run progression, plyometrics and sport-specific drills once imaging shows healing and strength criteria are met.", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Load management for young athletes", description: "Review total sport volume, specialisation and rest periods to reduce the chance of recurrence or a contralateral lesion.", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Continuing impact sport through pain", description: "Ongoing impact loading risks progression from a stable to an unstable lesion.", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] }
    ],
    education: [
      "OCD is a problem in the bone just under the joint surface. In growing children it often heals if the knee is rested from running and jumping.",
      "Pain settling does not mean the bone has healed. Your doctor will use X-rays or MRI to decide when impact sport is safe.",
      "You can keep fit with cycling, swimming and strength work while the bone heals.",
      "If the knee locks, catches or swells, tell your physio or doctor promptly.",
      "Looking at total sport hours and rest days helps prevent this happening again."
    ]
  },

  rehab: {
    overview: "Rehabilitation is tailored to the lesion stage, skeletal maturity and any surgery [r9]. For stable juvenile lesions, the non-operative pathway pauses impact while maintaining fitness, then progresses by symptoms and imaging. After drilling or fixation, follow the surgeon's weight-bearing and range limits (timeframes in brackets). Progression to running requires both pain-free function and radiographic evidence of healing.",
    stages: [
      {
        name: "Offload & maintain",
        timeframe: "Weeks 0–6 (after fixation: weeks 0–6)",
        goals: ["Pain-free daily activity", "No effusion", "Maintain quadriceps, hip and cardiovascular fitness without impact"],
        precautions: ["No running, jumping or impact sport", "Protected weight-bearing if prescribed (common after fixation)", "Avoid painful deep loaded flexion"],
        exercises: [
          { name: "Quadriceps sets and straight-leg raise", dosage: "3 × 10 with 5–10 s holds, daily", figure: { pose: "ex-straight-leg-raise", view: "lateral", props: ["mat"] } },
          { name: "Side-lying hip abduction / clamshell", dosage: "3 × 15", figure: { pose: "ex-clamshell", view: "lateral", props: ["mat"] } },
          { name: "Bridge", dosage: "3 × 12", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Stationary bike (if pain-free)", dosage: "20–30 min, 3–5×/week" },
          { name: "Upper-body and core circuit", dosage: "2–3×/week", figure: { pose: "ex-plank", view: "lateral", props: ["mat"] } }
        ],
        progressionCriteria: ["Pain-free walking and stairs", "No effusion", "Full range of motion", "Clinical review supports progression"]
      },
      {
        name: "Progressive strength",
        timeframe: "Weeks 6–12 (after fixation: weeks 6–12)",
        goals: ["Restore quadriceps and hip strength", "Single-leg control", "Normal gait"],
        precautions: ["Still no running or jumping until imaging shows healing progress", "Keep loading pain-free (≤2/10) with no next-day effusion"],
        exercises: [
          { name: "Squat to box", dosage: "3 × 10–12, 3×/week", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Step-up", dosage: "3 × 10 each side", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Wall sit", dosage: "3 × 30–45 s", figure: { pose: "ex-wall-sit", view: "lateral", props: ["wall"] } },
          { name: "Single-leg balance", dosage: "3 × 30 s", figure: { pose: "ex-single-leg-balance", view: "anterior" } },
          { name: "Calf raises", dosage: "3 × 15", figure: { pose: "ex-calf-raise", view: "lateral" } }
        ],
        progressionCriteria: ["Quadriceps strength ≥80% of the other side", "Pain-free single-leg squat", "Imaging shows reossification or healing"]
      },
      {
        name: "Return to running & impact",
        timeframe: "Months 3–6 (non-operative: often 6+ months)",
        goals: ["Graded running program", "Introduce plyometrics", "Develop power and landing control"],
        precautions: ["Begin only with imaging evidence of healing and clinical clearance", "Increase volume gradually; monitor pain and effusion"],
        exercises: [
          { name: "Walk–run progression", dosage: "Every second day, building to 20–30 min continuous" },
          { name: "Split squat", dosage: "3 × 8–10", figure: { pose: "ex-split-squat", view: "lateral" } },
          { name: "Jump squat and landing drills", dosage: "3 × 6, focus on soft landings", figure: { pose: "ex-jump-squat", view: "lateral" } },
          { name: "Single-leg hop progressions", dosage: "3 × 5 each direction", figure: { pose: "ex-hop", view: "lateral" } }
        ],
        progressionCriteria: ["Pain-free running for 20–30 min", "Hop tests ≥90% of the other side", "No effusion after impact sessions"]
      },
      {
        name: "Return to sport",
        timeframe: "Months 4–12",
        goals: ["Sport-specific drills and full training", "Sustainable training load", "Confidence"],
        precautions: ["Plan rest days and avoid sudden increases in sport volume", "Ongoing monitoring with follow-up imaging as advised"],
        exercises: [
          { name: "Change-of-direction and agility drills", dosage: "2–3×/week", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Strength maintenance", dosage: "2×/week", figure: { pose: "ex-single-leg-squat", view: "anterior" } },
          { name: "Neuromuscular warm-up", dosage: "Before every session" }
        ],
        progressionCriteria: ["Full training without pain or effusion", "Strength and hop symmetry ≥90%", "Imaging confirms healing and surgeon or sports physician clearance"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Pain-free daily activity, running and sport-specific drills",
      "No effusion after training",
      "Quadriceps strength and hop tests ≥90% of the other side",
      "Radiographic or MRI evidence of healing, with medical clearance",
      "A training plan that limits total load and includes rest"
    ],
    tests: ["Serial radiographs or MRI", "Single-leg hop tests", "Hand-held dynamometry of quadriceps", "Pedi-IKDC"]
  },
  prognosis: "Stable juvenile lesions have the best outlook: about two-thirds progress to healing within 6 months of activity modification [r4], although a stricter MRI cohort found only half progressing by 12 months [r5]. Larger lesions, cyst-like change at the interface and swelling or mechanical symptoms predict failure [r4,r5]. Drilling of stable lesions that fail non-operative care achieves radiographic healing in about 90% [r11]. Adult and unstable lesions rarely heal without surgery [r5], and large untreated or excised weight-bearing lesions predispose to early osteoarthritis [r3].",
  prevention: [
    "Avoid excessive, year-round impact sport and early specialisation in young athletes; build in rest periods.",
    "Investigate persistent activity-related knee pain or effusion in adolescents early, including a notch-view radiograph."
  ],
  clinicalPearls: [
    "An adolescent with vague, activity-related knee pain and an effusion needs a radiograph that includes a notch (tunnel) view.",
    "Always examine the hip in a limping adolescent with knee pain; slipped capital femoral epiphysis can present this way.",
    "Pain relief is not healing. Use imaging to decide when to restart running and jumping.",
    "MRI 'instability' signs are much less specific in juvenile than adult lesions, so surgical decisions combine imaging, symptoms and arthroscopy [r8].",
    "Check for a lesion in the other knee; bilateral lesions occur in about 7% of patients [r1]."
  ],
  related: ["articular-cartilage-defect-knee", "osgood-schlatter", "sinding-larsen-johansson", "patellofemoral-pain", "meniscal-tear"],

  references: [
    { id: "r1", citation: "Kessler JI, Nikizad H, Shea KG, et al. The demographics and epidemiology of osteochondritis dissecans of the knee in children and adolescents. Am J Sports Med. 2014;42(2):320-6.", pmid: "24272456", doi: "10.1177/0363546513510390", type: "cohort", year: 2014 },
    { id: "r2", citation: "Chambers HG, Shea KG, Anderson AF, et al. Diagnosis and treatment of osteochondritis dissecans. J Am Acad Orthop Surg. 2011;19(5):297-306.", pmid: "21536629", doi: "10.5435/00124635-201105000-00007", type: "clinical-practice-guideline", year: 2011 },
    { id: "r3", citation: "Kocher MS, Tucker R, Ganley TJ, et al. Management of osteochondritis dissecans of the knee: current concepts review. Am J Sports Med. 2006;34(7):1181-91.", pmid: "16794036", doi: "10.1177/0363546506290127", type: "narrative-review", year: 2006 },
    { id: "r4", citation: "Wall EJ, Vourazeris J, Myer GD, et al. The healing potential of stable juvenile osteochondritis dissecans knee lesions. J Bone Joint Surg Am. 2008;90(12):2655-64.", pmid: "19047711", doi: "10.2106/JBJS.G.01103", type: "cohort", year: 2008 },
    { id: "r5", citation: "Krause M, Hapfelmeier A, Möller M, et al. Healing predictors of stable juvenile osteochondritis dissecans knee lesions after 6 and 12 months of nonoperative treatment. Am J Sports Med. 2013;41(10):2384-91.", pmid: "23876519", doi: "10.1177/0363546513496049", type: "cohort", year: 2013 },
    { id: "r6", citation: "Clark VC, Johnson BL, Wyatt CW, et al. Adolescents with osteochondritis dissecans of the femoral condyle present with high rates of corresponding coronal malalignment. J Bone Joint Surg Am. 2025;107(11):1188-99.", pmid: "40153481", doi: "10.2106/JBJS.24.00220", type: "cohort", year: 2025 },
    { id: "r7", citation: "Hinkle A, Dickason CQ, Jinguji T, et al. Prevalence and severity of juvenile osteochondritis dissecans in patients with juvenile idiopathic arthritis. Orthop J Sports Med. 2021;9(2):2325967120984139.", pmid: "33718500", doi: "10.1177/2325967120984139", type: "cohort", year: 2021 },
    { id: "r8", citation: "Kijowski R, Blankenbaker DG, Shinki K, et al. Juvenile versus adult osteochondritis dissecans of the knee: appropriate MR imaging criteria for instability. Radiology. 2008;248(2):571-8.", pmid: "18552309", doi: "10.1148/radiol.2482071234", type: "diagnostic-accuracy", year: 2008 },
    { id: "r9", citation: "Eismann EA, Pettit RJ, Wall EJ, et al. Management strategies for osteochondritis dissecans of the knee in the skeletally immature athlete. J Orthop Sports Phys Ther. 2014;44(9):665-79.", pmid: "25098196", doi: "10.2519/jospt.2014.5140", type: "narrative-review", year: 2014 },
    { id: "r10", citation: "Carey JL, Wall EJ, Grimm NL, et al. Novel arthroscopic classification of osteochondritis dissecans of the knee: a multicenter reliability study. Am J Sports Med. 2016;44(7):1694-8.", pmid: "27159302", doi: "10.1177/0363546516637175", type: "diagnostic-accuracy", year: 2016 },
    { id: "r11", citation: "Gunton MJ, Carey JL, Shaw CR, et al. Drilling juvenile osteochondritis dissecans: retro- or transarticular? Clin Orthop Relat Res. 2013;471(4):1144-51.", pmid: "22274726", doi: "10.1007/s11999-011-2237-8", type: "systematic-review", year: 2013 },
    { id: "r12", citation: "Fabricant PD, Milewski MD, Kostyun RO, et al. Osteochondritis dissecans of the knee: an interrater reliability study of magnetic resonance imaging characteristics. Am J Sports Med. 2020;48(9):2221-9.", pmid: "32584594", doi: "10.1177/0363546520930427", type: "diagnostic-accuracy", year: 2020 },
    { id: "r13", citation: "Yang JS, Bogunovic L, Wright RW. Nonoperative treatment of osteochondritis dissecans of the knee. Clin Sports Med. 2014;33(2):295-304.", pmid: "24698044", doi: "10.1016/j.csm.2013.11.003", type: "narrative-review", year: 2014 },
    { id: "r14", citation: "Zanon G, Di Vico G, Marullo M. Osteochondritis dissecans of the knee. Joints. 2014;2(1):29-36.", pmid: "25606539", type: "narrative-review", year: 2014 }
  ],

  animation: {
    title: "How osteochondritis dissecans develops",
    phases: [
      {
        type: "moi", label: "Repetitive load", duration: 6, view: "lateral", environment: "pitch",
        actors: [{ id: "player", kit: "child" }],
        keyframes: [
          { t: 0, pose: "run-contact", root: { x: -100 } },
          { t: 0.7, pose: "run-toe-off", root: { x: -75 } },
          { t: 1.4, pose: "run-contact", root: { x: -50 } },
          { t: 2.2, pose: "jump-takeoff", root: { x: -25 } },
          { t: 3.0, pose: "jump-flight", root: { x: -5, lift: 40 } },
          { t: 3.8, pose: "jump-land", root: { x: 10, lift: 0 }, ease: "in" },
          { t: 4.8, pose: "run-contact", root: { x: 40 } },
          { t: 5.8, pose: "run-midstance", root: { x: 65 } }
        ],
        props: [{ id: "ball", type: "ball-soccer", keyframes: [{ t: 0, x: -70, y: 0 }, { t: 2.2, x: -10, y: 30 }, { t: 3.0, x: 5, y: 110 }, { t: 4.2, x: 60, y: 10 }, { t: 6, x: 110, y: 0 }] }],
        forces: [
          { t: [0, 1.6], at: "kneeR", dir: "down", label: "Repetitive impact load" },
          { t: [3.6, 5.0], at: "footR", dir: "up", label: "Landing force" },
          { t: [3.7, 5.0], at: "kneeR", dir: "toward-viewer", label: "Shear with tibial rotation" }
        ],
        highlights: [{ t: [1.2, 6], at: "kneeR" }],
        impacts: [{ t: 3.9, at: "kneeR" }],
        slowmo: [{ t: [3.5, 4.4], rate: 0.4 }],
        captions: [
          { t: 0, text: "A 13-year-old plays football five or six days a week, all year round." },
          { t: 1.5, text: "Thousands of running and landing cycles load the femoral condyle." },
          { t: 3.0, text: "In a growing knee the bone under the cartilage is still maturing." },
          { t: 3.8, text: "Each landing adds compression and shear; microdamage outpaces repair." },
          { t: 4.8, text: "Vague knee pain and a limp after games are the first signs." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "kneeR",
        captions: [{ t: 0, text: "Zooming into the right knee, viewed from the front with the patella reflected." }]
      },
      {
        type: "closeup", label: "Inside the knee", duration: 10, scene: "knee-anterior",
        actions: [
          { t: 0, do: "highlight", target: "distalFemoralPhysis" },
          { t: 0.3, do: "label", target: "distalFemoralPhysis", text: "Open growth plate: juvenile OCD" },
          { t: 1.2, do: "camera", at: "medialFemoralCondyleLateralAspect", zoom: 1.5, dur: 1 },
          { t: 1.6, do: "arrow", at: "tibialSpine", dir: "superior", label: "Tibial spine contact (one theory)" },
          { t: 2.0, do: "stress", target: "femur", at: "medialFemoralCondyleLateralAspect" },
          { t: 2.6, do: "label", target: "femur", text: "Subchondral bone stress and ischaemia" },
          { t: 3.8, do: "lesion", target: "femoralCartilage", at: 0.62, depth: "partial" },
          { t: 4.1, do: "label", target: "femoralCartilage", text: "Stable: cartilage intact over the lesion" },
          { t: 5.8, do: "lesion", target: "femoralCartilage", at: 0.62, depth: "osteochondral" },
          { t: 6.1, do: "label", target: "femoralCartilage", text: "Unstable: fragment separates" },
          { t: 7.0, do: "tear", target: "femoralCartilage", pattern: "detachment", at: 0.62 },
          { t: 7.3, do: "effuse", target: "jointSpace", amount: 0.35, dur: 1 },
          { t: 7.6, do: "pain", at: "medialFemoralCondyleLateralAspect" },
          { t: 9.2, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "In adolescents the distal femur is still growing, with an open growth plate." },
          { t: 1.3, text: "The classic site is the lateral side of the medial femoral condyle, beside the notch." },
          { t: 2.2, text: "Repetitive load stresses the bone under the cartilage, which loses its blood supply." },
          { t: 3.8, text: "A stable lesion keeps intact cartilage; with rest from impact it can reossify." },
          { t: 5.8, text: "If loading continues, the cartilage cracks and the bone fragment becomes loose." },
          { t: 7.0, text: "A detached fragment becomes a loose body: catching, locking and swelling follow." }
        ]
      },
      {
        type: "micro", label: "Subchondral bone", duration: 9, tissue: "bone-stress",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.4, stage: "loading" }, { t: 2.8, stage: "microdamage" },
          { t: 4.2, stage: "resorption-exceeds-formation" }, { t: 5.8, stage: "stress-fracture" }, { t: 7.4, stage: "healing" }
        ],
        timeLabels: [{ t: 1.4, text: "Months of training" }, { t: 5.8, text: "Separation" }, { t: 7.4, text: "3–12 months of offloading" }],
        captions: [
          { t: 0, text: "Subchondral bone supports the cartilage and is constantly remodelled." },
          { t: 1.4, text: "Repetitive loading bends the trabeculae thousands of times." },
          { t: 2.8, text: "Microcracks build up; the cause is uncertain, but microtrauma is the leading theory." },
          { t: 4.2, text: "With poor blood flow, osteoclasts resorb bone faster than osteoblasts rebuild it." },
          { t: 5.8, text: "A line of separation forms between the fragment and the parent bone." },
          { t: 7.4, text: "If the lesion is stable and offloaded, new bone bridges the gap from its edges." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL5" }
};
