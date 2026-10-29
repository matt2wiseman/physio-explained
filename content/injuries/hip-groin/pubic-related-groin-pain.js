// Pubic-related groin pain (osteitis pubis) — LL2
export default {
  id: "pubic-related-groin-pain",
  name: "Pubic-related groin pain (osteitis pubis)",
  shortName: "Pubic-related groin pain",
  aka: ["osteitis pubis", "pubic bone stress injury", "pubic bone marrow oedema", "pubic symphysis pain", "symphysitis", "pubalgia"],
  region: "hip-groin",
  tissues: ["bone", "cartilage"],
  onset: "gradual",
  mechanismType: ["overuse"],
  populations: ["male football players", "Australian football players", "kicking and running athletes", "athletes with longstanding groin pain"],
  sports: ["australian football", "soccer", "rugby", "gaelic football", "distance running", "ice hockey"],
  urgency: "routine",
  summary: "Longstanding groin pain from the pubic symphysis and adjacent pubic bone, best understood as a bone stress response to repetitive shear, with local symphyseal tenderness and often pubic bone marrow oedema on MRI.",
  keyFacts: [
    { label: "Typical recovery", value: "Often 3–6 months; slower than other groin entities" },
    { label: "Return to sport", value: "89% returned the next season after 12 weeks' unloading, but only 41% were symptom-free" },
    { label: "Key test", value: "Local tenderness of the pubic symphysis and immediately adjacent bone" },
    { label: "Imaging", value: "MRI: pubic bone marrow oedema (also common in pain-free footballers)" },
    { label: "Incidence", value: "Least common Doha entity in a groin clinic (4%)" },
    { label: "Mechanism", value: "Repetitive shear across the symphysis from kicking, running and cutting" }
  ],
  overview: "Pubic-related groin pain is the Doha agreement term for pain arising from the pubic symphysis and the immediately adjacent bone, traditionally called osteitis pubis. It is defined by local tenderness of the pubic symphysis and adjacent bone. There is no specific resistance test for it [r1]. It was the least prevalent defined entity (4%) in a multidisciplinary groin clinic, where it usually coexisted with other entities [r2]. In Australian footballers with symphyseal or superior ramus tenderness, 77% had pubic bone marrow oedema on MRI, which supports a bone stress injury model [r3].\n\nPubic-related groin pain is slow to settle. After 12 weeks of unloading followed by graded return, 89% of professional footballers returned to sport the next season, but only 41% were symptom-free at its start [r9]. Evidence for any specific treatment is limited to case series [r10]. The physiotherapist's roles are to confirm the entity, screen for serious pathology (osteomyelitis, stress fracture), manage bone load and progressively rebuild the capacity of the muscles that act across the pubis.",

  epidemiology: {
    text: "Exact incidence is unknown, partly because of historical inconsistency in terminology and because inter-examiner agreement for classifying pubic-related groin pain is only slight (κ 0.12) [r6]. Pubic bone marrow oedema is common in football codes. It was present in 37% of elite Australian footballers in preseason MRI, and preseason pain and parasymphyseal T2 hyperintensity predicted restricted training during the season [r4]. In professional footballers, up to 71% of asymptomatic players have positive pubic-region MRI findings, although higher grades of bone marrow oedema are more common in symptomatic players [r5]. General groin-injury risk factors include previous groin injury, a higher level of play, reduced adductor strength and less sport-specific training [r16].",
    riskFactors: {
      intrinsic: [
        "Previous groin injury and coexisting adductor- or inguinal-related groin pain [r16,r2]",
        "Reduced hip adductor strength (modifiable) [r16]",
        "Male sex and young adult age (football codes)",
        "Possibly reduced hip rotation range, which increases symphyseal shear (expert opinion)"
      ],
      extrinsic: [
        "Kicking- and running-dominant football codes (Australian football, soccer, rugby) [r3,r4]",
        "Sudden increases in running or kicking volume, especially in preseason [r4]",
        "Higher level of play [r16]",
        "Hard training surfaces and high training density"
      ]
    }
  },

  mechanism: {
    summary: "The pubic symphysis transmits load between the two halves of the pelvis. In single-leg stance during running and kicking, the stance-side pubis is driven upward by ground-reaction force while the swing side drops, creating vertical shear and rotation across the symphysis. At the same time the adductors pull the pubic bodies downward and laterally, and the rectus abdominis pulls them upward [r8]. Repetitive cyclical load without adequate recovery produces a bone stress response in the subchondral pubic bone (marrow oedema) and degeneration of the symphyseal disc and margins [r3,r9].",
    sequence: [
      "Running and kicking volume rises, often in preseason or when returning from a break [r4].",
      "In each single-leg stance, ground-reaction force pushes the stance-side pubis up while the other side drops: vertical shear across the symphysis.",
      "Adductor and abdominal attachments on the pubic bodies add opposing tensile and rotational loads [r8].",
      "The subchondral pubic bone accumulates microdamage faster than it can remodel. Resorption temporarily exceeds formation.",
      "Bone marrow oedema develops on both sides of the joint, sometimes with a parasymphyseal hyperintense line [r3,r4].",
      "The athlete develops central pubic or bilateral groin pain with running, kicking and changing direction, often with morning stiffness.",
      "With continued loading, symphyseal margin irregularity, sclerosis and subchondral cysts may develop [r3]."
    ],
    variants: [
      { name: "Combined with adductor- or inguinal-related pain", description: "Most athletes with pubic-related pain have another entity, because adductor and abdominal attachments share the pubic aponeurosis [r2,r8]." },
      { name: "Endurance runners", description: "Repetitive running load without kicking can produce a similar pubic bone stress picture. Distinguish it from pubic ramus stress fracture." },
      { name: "Non-athletic causes", description: "Pregnancy and childbirth, pelvic surgery, inflammatory arthropathy and infection (osteomyelitis pubis) can cause symphyseal pain and must be excluded [r10]." }
    ]
  },

  anatomy: {
    text: "The pubic symphysis is a secondary cartilaginous joint. The hyaline-covered pubic bodies are united by a fibrocartilaginous interpubic disc and reinforced by the superior and inferior (arcuate) pubic ligaments and a thick anterior ligament. Normally it allows only about 2 mm of translation and a few degrees of rotation. The anterior capsule blends with the aponeuroses of rectus abdominis and adductor longus, and with the contralateral rectus sheath, forming a continuous aponeurotic plate across the front of the pubis [r8]. Forces from the trunk and both lower limbs therefore converge on the symphysis.",
    structures: [
      { name: "Pubic symphysis (interpubic disc)", role: "Fibrocartilaginous joint transmitting load between the hemipelves and absorbing shear and rotation" },
      { name: "Pubic bodies (subchondral bone)", role: "Bear repetitive shear. Bone marrow oedema reflects their stress response [r3]." },
      { name: "Superior and inferior (arcuate) pubic ligaments", role: "Primary stabilisers resisting vertical shear and distraction" },
      { name: "Rectus abdominis–adductor aponeurotic plate", role: "Continuous with the anterior symphyseal capsule. It transmits muscle force across the pubis [r8]." },
      { name: "Adductor longus and rectus abdominis", role: "Opposing muscular pulls on the pubic bodies. Often co-involved [r2]." }
    ]
  },

  pathophysiology: {
    tissueDamage: "The best-supported model is a bone stress injury of the pubic bodies. In Australian footballers with clinical osteitis pubis, increased marrow signal (bone marrow oedema) was present in 77% and was associated with symphyseal and superior ramus tenderness. Degenerative findings such as subchondral cysts were associated with a past history of groin pain [r3]. Repetitive shear causes microdamage. Osteoclastic resorption then temporarily outpaces osteoblastic formation, so the bone is weakest during the early repair phase. This is why continued loading during that phase can prolong symptoms [r9].\n\nMRI findings must be interpreted with care. Pubic bone marrow oedema and parasymphyseal T2 hyperintensity are common in pain-free football players, and footballers have far more such changes than non-footballers regardless of symptoms [r4,r5]. Higher grades of oedema and a linear parasymphyseal hyperintensity relate more closely to symptoms and to restricted training [r4,r5]. Diagnosis therefore remains clinical (symphyseal tenderness), with imaging used to support it and to exclude other causes [r1,r17].",
    structures: [
      { name: "Pubic bodies (subchondral bone)", effect: "Bone marrow oedema, a stress reaction from accumulated microdamage. Sclerosis, erosions and subchondral cysts in chronic cases [r3]." },
      { name: "Interpubic disc and symphyseal margins", effect: "Degeneration, fluid signal or disc protrusion, and margin irregularity [r3,r5]" },
      { name: "Adductor longus and rectus abdominis entheses", effect: "Frequently co-involved through the shared aponeurotic plate [r2,r8]" },
      { name: "Pubic ligaments", effect: "Possible microinstability with increased symphyseal shear in chronic cases (limited evidence)" }
    ],
    muscles: [
      { name: "Hip adductors", effect: "Pain and reduced squeeze-test strength are common in hip and groin pain, and adductor attachments add tensile load to the stressed pubis [r17]." },
      { name: "Abdominal and trunk muscles", effect: "Altered trunk-muscle function is associated with hip and groin pain and may reduce pelvic control in single-leg tasks [r17]." },
      { name: "Hip rotators and abductors", effect: "Reduced hip internal rotation range in athletes with hip and groin pain may increase load transferred to the symphysis [r17]." }
    ],
    cellular: [
      { phase: "Microdamage", timing: "Weeks of repetitive load", description: "Cyclic shear creates microcracks in the subchondral trabecular bone of the pubic bodies." },
      { phase: "Resorption exceeds formation", timing: "Weeks 1–6 of repair", description: "Osteoclasts remove damaged bone before osteoblasts lay down new bone, which temporarily weakens it. Marrow oedema and hyperaemia appear on MRI [r3]." },
      { phase: "Stress reaction", timing: "Weeks–months", description: "Persisting oedema with periosteal and subchondral reaction. Symptoms limit running and kicking [r4]." },
      { phase: "Healing & remodelling", timing: "3–12+ months", description: "New bone consolidates and oedema slowly resolves. Imaging changes can lag behind clinical recovery and may persist in asymptomatic athletes [r5,r9]." }
    ],
    systems: [
      { system: "Musculoskeletal (bone metabolism)", effect: "Bone remodelling is slow, so recovery takes months. Energy availability and vitamin D status affect bone health and should be screened in recurrent or slow cases." },
      { system: "Nervous system", effect: "Persistent central pubic pain often becomes bilateral or diffuse, with sensitisation and an overlap of pain qualities across groin entities." },
      { system: "Musculoskeletal chain", effect: "Coexisting adductor-, inguinal- and hip-related problems alter load across the pubis and need to be addressed together [r2]." },
      { system: "Psychological / career", effect: "Long, uncertain recovery, often spanning a season, leads to frustration and pressure to return early. Ongoing symptoms after return are common [r9]." }
    ]
  },

  grading: null,

  timeframes: {
    summary: "Pubic-related groin pain is the slowest Doha entity to settle because recovery depends on bone remodelling. In professional footballers, 12 weeks of unloading followed by graded return allowed 89% to return the next season, but symptoms often persisted for months after return [r9].",
    healing: [
      { phase: "Unload & settle", startDay: 0, endDay: 42, description: "Reduce running and kicking to pain-free levels while the bone stress response settles" },
      { phase: "Progressive reloading", startDay: 28, endDay: 112, description: "Graded strength, then running and change of direction" },
      { phase: "Return to sport", startDay: 84, endDay: 180, description: "Graded kicking and full training" },
      { phase: "Bone remodelling", startDay: 0, endDay: 365, description: "Oedema resolves slowly. Imaging lags behind clinical recovery [r5,r9]." }
    ],
    milestones: [
      { label: "Pain-free walking and daily activities", day: 21 },
      { label: "Pain-free single-leg hop and jogging", day: 56, note: "Typical" },
      { label: "End of 12-week unloading phase (published protocol)", day: 84, note: "[r9]" },
      { label: "Return to full sport (typical)", day: 140, note: "Often 3–6 months; criteria-based" },
      { label: "Symptom-free (67% by end of following season)", day: 365, note: "[r9]" }
    ],
    returnToSport: "Typically 3–6 months, but variable. After 12 weeks of unloading, 89% of professional footballers returned to sport the next season and 100% by the second season, yet only 41% were symptom-free at the start of the next season (67% by its end) [r9]."
  },

  clinicalPresentation: {
    symptoms: [
      "Central pain over the pubis, often spreading to one or both groins, the lower abdomen or the medial thigh",
      "Pain with running, kicking, changing direction and sit-ups, gradually worsening over weeks",
      "Morning stiffness and pain getting out of bed or a car, or rolling over in bed",
      "Pain with single-leg activities such as stairs or putting on trousers",
      "Sometimes a clicking or grinding sensation at the pubis"
    ],
    signs: [
      "Local tenderness over the pubic symphysis and immediately adjacent pubic bone [r1]",
      "Pain and often reduced force on the adductor squeeze test (non-specific) [r17]",
      "Reduced hip internal rotation and bent-knee fall-out range [r17]",
      "Pain with single-leg hop or single-leg stance in irritable cases",
      "Frequent coexisting adductor origin or inguinal canal tenderness [r2]"
    ]
  },

  assessment: {
    subjective: [
      "Location: central pubic pain versus adductor origin, inguinal canal or deep hip [r1]",
      "Onset, duration and load history: preseason, increased running or kicking volume [r4]",
      "Morning stiffness, night pain or rest pain; systemic symptoms (fever, sweats, weight loss)",
      "Recent pelvic or urological surgery, catheterisation, pregnancy or childbirth (osteomyelitis, pregnancy-related pelvic girdle pain) [r10]",
      "Other joint pain, enthesitis, back stiffness, psoriasis or inflammatory bowel disease (spondyloarthritis)",
      "Diet, energy availability and menstrual history in female athletes, and previous bone stress injuries"
    ],
    observation: ["Antalgic gait or reduced stride length in irritable cases", "Pelvic asymmetry in single-leg stance (Trendelenburg)"],
    palpation: [
      "Pubic symphysis and immediately adjacent pubic bone: the defining sign. Reliability is fair to moderate (κ 0.37–0.45) [r7,r1]",
      "Superior pubic ramus and pubic tubercles",
      "Adductor longus origin and inguinal canal to identify coexisting entities [r2]",
      "Inferior pubic ramus (tenderness suggests a stress fracture)"
    ],
    rangeOfMotion: ["Hip internal rotation and bent-knee fall-out (often reduced) [r17]", "FADIR and FABER for hip-related groin pain", "Lumbar spine and SIJ screen"],
    strength: ["Adductor squeeze test at 0° and 45° (pain and force) [r17]", "Resisted sit-up", "Hip abduction and extension strength"],
    neuro: [],
    functional: ["Single-leg stance and single-leg hop for pain (screen for bone stress injury)", "Single-leg squat and lunge quality", "Running and kicking tolerance with pain rating"],
    specialTests: [
      {
        name: "Pubic symphysis palpation",
        purpose: "Defining Doha criterion for pubic-related groin pain",
        procedure: "Supine. Palpate the pubic symphysis and 1–2 cm either side over the pubic bodies and superior rami, comparing sides.",
        positive: "Recognisable pain on palpation of the symphysis or the immediately adjacent bone. Inter-examiner reliability of pubic palpation is fair to moderate (κ 0.37–0.45) [r7].",
        refs: ["r7"]
      },
      {
        name: "Adductor squeeze test",
        purpose: "Provoke groin pain and quantify adductor force",
        procedure: "Supine, hips flexed 45°. The patient squeezes maximally against a ball, fist or dynamometer between the knees.",
        positive: "Recognisable pain and/or reduced force. This is not specific to pubic-related pain (there is no specific resistance test), but it is a useful repeated measure of capacity [r1,r17].",
        refs: ["r17"]
      },
      {
        name: "Single-leg hop / single-leg stance pain test",
        purpose: "Screen for a bone stress injury (pubic bone, ramus or femoral neck)",
        procedure: "Ask the patient to stand on one leg and then hop repeatedly on the symptomatic side.",
        positive: "Recognisable pubic or groin pain on hopping. A positive test in an endurance athlete, or ramus or femoral neck pain, warrants MRI to exclude stress fracture.",
        refs: []
      }
    ],
    clinicalRules: [
      { name: "Doha agreement definition", description: "Pubic-related groin pain = local tenderness of the pubic symphysis and the immediately adjacent bone. No particular resistance tests are specific to it [r1]. Classify and treat any coexisting entities." }
    ],
    outcomeMeasures: [
      { name: "Copenhagen Hip and Groin Outcome Score (HAGOS)", use: "Function, symptoms and quality of life over the long recovery [r15]" },
      { name: "Squeeze-test pain (NRS) and force", use: "Repeated measure of irritability and capacity [r17]" },
      { name: "Single-leg hop pain and running tolerance (minutes pain-free)", use: "Practical bone-load tolerance markers to guide progression" }
    ],
    imaging: [
      { modality: "MRI pelvis", indication: "To confirm a pubic bone stress response, exclude stress fracture, osteomyelitis or tumour, and identify coexisting entities", findings: "Parasymphyseal bone marrow oedema (77% of clinical cases), linear parasymphyseal T2 hyperintensity, disc degeneration or protrusion, subchondral cysts. Also common in asymptomatic footballers [r3,r4,r5]." },
      { modality: "Plain radiograph (AP pelvis ± flamingo views)", indication: "Chronic cases; suspected instability", findings: "Symphyseal sclerosis, erosions, widening or irregularity. Vertical step >2 mm on flamingo views suggests instability." },
      { modality: "Blood tests (via medical team)", indication: "Fever, severe pain, recent pelvic procedures, or rest and night pain", findings: "Raised inflammatory markers and white cell count suggest osteomyelitis pubis [r10]" }
    ]
  },

  differentials: [
    { name: "Adductor-related groin pain", id: "adductor-related-groin-pain", distinguishing: "Tenderness at the adductor longus origin plus pain on resisted adduction, rather than over the symphysis itself [r1]." },
    { name: "Inguinal-related groin pain", id: "inguinal-related-groin-pain", distinguishing: "Pain and tenderness at the inguinal canal, worse with cough or sneeze and resisted sit-up [r1]." },
    { name: "Pubic ramus stress fracture", id: "pubic-ramus-stress-fracture", distinguishing: "Endurance runners, often female, with inferior ramus tenderness and pain on hopping. MRI shows a fracture line." },
    { name: "Pregnancy-related pelvic girdle pain", id: "pregnancy-pelvic-girdle-pain", distinguishing: "Symphyseal pain in pregnancy or post-partum, with pain on single-leg stance and turning in bed." },
    { name: "Osteomyelitis pubis", distinguishing: "Severe pain, fever, raised inflammatory markers, and often recent pelvic surgery, catheterisation or IV drug use. Needs antibiotics [r10]." },
    { name: "Sacroiliac joint pain", id: "sacroiliac-joint-pain", distinguishing: "Posterior pelvic pain below L5 and positive SIJ provocation cluster." },
    { name: "Hip-related groin pain (FAI syndrome)", id: "fai-syndrome", distinguishing: "Deep anterior hip pain, positive FADIR, mechanical symptoms." }
  ],
  redFlags: [
    "Fever, rigors, severe constant pain, inability to weight-bear or raised inflammatory markers, especially after pelvic or urological surgery or in IV drug users: suspect osteomyelitis or septic arthritis of the pubic symphysis. Arrange same-day medical review.",
    "Pain on hopping with ramus or femoral neck tenderness, or night pain in an endurance athlete: suspect stress fracture. Stop impact loading and arrange urgent MRI. Screen for low energy availability.",
    "Unexplained weight loss, night pain or a history of cancer: refer to exclude malignancy.",
    "Multiple joint pain, inflammatory back pain, psoriasis, uveitis or inflammatory bowel disease: refer to exclude spondyloarthritis.",
    "Haematuria, urinary symptoms or testicular pain: refer for urological assessment."
  ],

  management: {
    principles: "Management is load-based and conservative. Evidence is limited to case series, and no treatment has been compared directly in an RCT [r10]. Unload the pubis enough to settle the bone stress response, by reducing or temporarily stopping running and kicking, while keeping non-provocative conditioning and strength work. Then reintroduce load progressively using pain on palpation, squeeze testing and hopping as guides. Treat coexisting adductor and inguinal components in parallel [r2]. Prepare the athlete for a long course: in the best-documented cohort, 12 weeks of rest from weight-bearing sport allowed most to return, but symptoms often persisted [r9]. Surgery is reserved for rare refractory cases after at least 6 months [r11,r12].",
    medical: [
      { name: "Corticosteroid injection into the symphysis", description: "Image-guided injection for pain relief, to allow rehabilitation in irritable cases. Supported only by small case series [r10].", evidence: "very-limited", recommendation: "consider", refs: ["r10"] },
      { name: "Extracorporeal shock wave therapy (ESWT)", description: "May reduce pain in conditions involving bone marrow oedema, including osteitis pubis, but the pooled studies are small and heterogeneous [r13].", evidence: "limited", recommendation: "consider", refs: ["r13"] },
      { name: "Surgery (symphyseal curettage, arthrodesis, retropubic mesh)", description: "For refractory pain lasting more than 6 months despite good rehabilitation. Return to play after symphyseal surgery was 84% (95% CI 47–100%), but the data come from a few low-quality studies [r11,r12].", evidence: "very-limited", recommendation: "consider", refs: ["r11", "r12"] },
      { name: "Investigation and antibiotics for osteomyelitis pubis", description: "If infection is suspected, the medical team arranges blood tests, MRI and sometimes aspiration, followed by prolonged antibiotics [r10].", evidence: "limited", recommendation: "recommended", refs: ["r10"] }
    ],
    physio: [
      { name: "Relative rest and load modification (unloading phase)", description: "Reduce running, kicking and change of direction to pain-free levels (often 6–12 weeks), while maintaining fitness through cycling, swimming or upper-body work. In professional footballers a 12-week unloading program achieved high return-to-sport rates [r9].", evidence: "limited", recommendation: "recommended", refs: ["r9", "r10"] },
      { name: "Progressive strengthening of the adductors, abdominals and hip muscles", description: "Isometric, then dynamic, then heavy loading of the muscles that act across the pubis to restore capacity and pelvic control. Supported by expert consensus and by evidence from other groin entities [r14].", evidence: "limited", recommendation: "recommended", refs: ["r14"] },
      { name: "Graded return to running, change of direction and kicking", description: "Criteria-based reintroduction of impact and kicking load once palpation and hopping are pain-free or minimally painful [r9,r14].", evidence: "limited", recommendation: "recommended", refs: ["r9", "r14"] },
      { name: "Bone health screening", description: "Screen energy availability, vitamin D and menstrual history, and refer to a dietitian or sports physician if bone stress recurs.", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Playing through pain without load modification", description: "Continued full running and kicking loads during the early bone-stress phase prolong symptoms and time out of sport.", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] }
    ],
    education: [
      "This is a bone stress problem at the front of the pelvis. Bone heals more slowly than muscle, so expect months rather than weeks.",
      "Pain on pressing the pubic bone, hopping and the squeeze test are the best guides for when to add more load.",
      "Many pain-free footballers have 'bone bruising' on MRI. The scan does not need to be clear before you return.",
      "Staying fit by cycling, swimming and strength work is encouraged while running and kicking are reduced.",
      "Eating enough to fuel training supports bone healing and lowers the risk of recurrence."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and paced by bone tolerance. Use pain on symphyseal palpation, the adductor squeeze test and single-leg hopping as gates, together with next-morning symptoms (≤2–3/10 and settling within 24 hours). Expect longer stages than for other groin entities [r9]. Treat coexisting adductor and inguinal components in parallel, and continue strength work throughout.",
    stages: [
      {
        name: "Unload & maintain",
        timeframe: "Weeks 0–6",
        goals: ["Pain-free daily activities and walking", "Settle symphyseal tenderness", "Maintain cardiovascular fitness and strength away from the pubis"],
        precautions: ["No running, kicking or change of direction while hopping is painful", "Avoid wide-stance and end-range adductor stretching", "Screen for red flags if pain is not settling"],
        exercises: [
          { name: "Isometric adductor squeeze (ball between knees)", dosage: "5 × 10–20 s at pain ≤2/10, daily", cues: "Steady squeeze, no breath holding" },
          { name: "Glute bridge", dosage: "3 × 12", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Dead bug", dosage: "3 × 8 each side", figure: { pose: "ex-dead-bug", view: "lateral", props: ["mat"] } },
          { name: "Clamshell / side-lying abduction", dosage: "3 × 12–15", figure: { pose: "ex-clamshell", view: "lateral", props: ["mat"] } },
          { name: "Stationary bike, swimming (pull buoy) or upper-body conditioning", dosage: "30–45 min, 3–5×/week", cues: "Pain-free only" }
        ],
        progressionCriteria: ["Pain-free walking and stairs", "Symphyseal palpation pain markedly reduced", "Squeeze test pain ≤2/10", "Pain-free single-leg stance for 30 s"]
      },
      {
        name: "Strength & pelvic control",
        timeframe: "Weeks 4–10",
        goals: ["Restore adductor, abdominal and hip strength", "Pain-free single-leg tasks and low-level hopping", "Begin a walk–run program"],
        precautions: ["Introduce impact only when single-leg hops are pain-free", "Progress one variable at a time"],
        exercises: [
          { name: "Copenhagen adduction, short lever", dosage: "2–3 × 6–10 each side, 3×/week", figure: { pose: "ex-copenhagen", view: "anterior", props: ["bench"] } },
          { name: "Side plank", dosage: "3 × 20–45 s each side", figure: { pose: "ex-side-plank", view: "anterior", props: ["mat"] } },
          { name: "Split squat", dosage: "3 × 8–10", figure: { pose: "ex-split-squat", view: "lateral" } },
          { name: "Single-leg balance and single-leg squat", dosage: "3 × 8 each side", figure: { pose: "ex-single-leg-squat", view: "anterior" } },
          { name: "Walk–run program", dosage: "Alternate days, e.g. 1 min run / 1 min walk × 10, building over 3–4 weeks" }
        ],
        progressionCriteria: ["Pain-free 10 single-leg hops", "Continuous running for 20 min without next-day pain", "Squeeze force ≥90% of baseline or the other side and pain-free"]
      },
      {
        name: "Running, change of direction & kicking",
        timeframe: "Weeks 8–16",
        goals: ["High-speed running", "Pain-free planned then reactive change of direction", "Progressive kicking"],
        precautions: ["Alternate high and low load days", "Monitor morning symptoms and symphyseal tenderness"],
        exercises: [
          { name: "Copenhagen adduction, long lever", dosage: "2–3 × 6–12 each side, 2–3×/week", figure: { pose: "ex-copenhagen", view: "anterior", props: ["bench"] } },
          { name: "Hip thrust", dosage: "3–4 × 6–10", figure: { pose: "ex-hip-thrust", view: "lateral", props: ["bench", "barbell"] } },
          { name: "Change-of-direction drills (45° → 90°, planned → reactive)", dosage: "2–3 sessions/week", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Graded kicking program", dosage: "Short passes → long kicks → shooting over 3–4 weeks" },
          { name: "Plyometric progression (bilateral → unilateral hops)", dosage: "2 × 8–10 contacts building to 60–80 contacts/session", figure: { pose: "ex-hop", view: "lateral" } }
        ],
        progressionCriteria: ["Pain-free sprinting and change of direction", "Pain-free maximal kicking", "No increase in symphyseal tenderness after a week of training"]
      },
      {
        name: "Return to sport & maintenance",
        timeframe: "Weeks 12–24",
        goals: ["Full training, then matches", "Maintain adductor and trunk capacity", "Prevent recurrence"],
        precautions: ["Build match minutes gradually", "Manage preseason load spikes in future seasons [r4]"],
        exercises: [
          { name: "Full team training", dosage: "≥2 weeks before match selection" },
          { name: "Adductor and trunk maintenance (Copenhagen, side plank)", dosage: "2×/week in season", figure: { pose: "ex-copenhagen", view: "anterior", props: ["bench"] } },
          { name: "Monitored running and kicking volumes", dosage: "Weekly load monitoring" }
        ],
        progressionCriteria: ["Full training without symptom flare", "Squeeze test and hop test pain-free", "Athlete confident in kicking and contact"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Minimal or no symphyseal tenderness on palpation",
      "Pain-free single-leg hopping and maximal squeeze test",
      "Pain-free sprinting, change of direction and maximal kicking",
      "Completion of full team training without next-day flare",
      "HAGOS Sport subscale recovered [r15]. Imaging resolution is not required [r5]."
    ],
    tests: ["Symphyseal palpation", "Adductor squeeze test (dynamometer)", "Single-leg hop test (pain)", "Sport-specific sprint, cutting and kicking tasks", "HAGOS"]
  },
  prognosis: "Pubic-related groin pain usually resolves, but slowly. In professional Australian footballers treated with 12 weeks of rest from weight-bearing sport and graded return, 89% returned the following season and 100% by the second. However, only 41% were symptom-free at the start of the next season, rising to 67% by its end [r9]. Preseason groin pain and parasymphyseal MRI changes predict restricted training during the season [r4]. Treatment evidence is limited to level 4 case series [r10], so expectations should be set early and progress judged clinically rather than by imaging [r5].",
  prevention: [
    "Avoid sudden spikes in running and kicking volume, especially in preseason [r4].",
    "Maintain adductor strength. Copenhagen adduction programs reduce overall groin problems in footballers [r18].",
    "Screen and manage preseason groin pain early, because it predicts training restriction and missed games [r4].",
    "Ensure adequate energy availability to support bone health."
  ],
  clinicalPearls: [
    "The Doha diagnosis rests on one sign: tenderness of the symphysis and immediately adjacent bone. There is no specific resistance test [r1].",
    "Think 'bone stress injury'. Pace progression on bone tolerance (hopping, palpation) rather than muscle pain [r3,r9].",
    "Pubic bone marrow oedema on MRI is common in pain-free footballers, so do not wait for a clean scan [r5].",
    "Always screen for osteomyelitis pubis (fever, severe pain, recent pelvic procedures) and for stress fracture [r10].",
    "It rarely occurs alone. Find and treat the adductor and inguinal components as well [r2]."
  ],
  related: ["adductor-related-groin-pain", "inguinal-related-groin-pain", "pubic-ramus-stress-fracture", "bone-stress-injury", "sacroiliac-joint-pain", "pregnancy-pelvic-girdle-pain"],

  references: [
    { id: "r1", citation: "Weir A, Brukner P, Delahunt E, et al. Doha agreement meeting on terminology and definitions in groin pain in athletes. Br J Sports Med. 2015;49(12):768-74.", pmid: "26031643", doi: "10.1136/bjsports-2015-094869", type: "consensus-statement", year: 2015 },
    { id: "r2", citation: "Taylor R, Vuckovic Z, Mosler A, et al. Multidisciplinary assessment of 100 athletes with groin pain using the Doha agreement: high prevalence of adductor-related groin pain in conjunction with multiple causes. Clin J Sport Med. 2018;28(4):364-9.", pmid: "28654441", doi: "10.1097/JSM.0000000000000469", type: "cross-sectional", year: 2018 },
    { id: "r3", citation: "Verrall GM, Slavotinek JP, Fon GT. Incidence of pubic bone marrow oedema in Australian rules football players: relation to groin pain. Br J Sports Med. 2001;35(1):28-33.", pmid: "11157458", doi: "10.1136/bjsm.35.1.28", type: "cross-sectional", year: 2001 },
    { id: "r4", citation: "Slavotinek JP, Verrall GM, Fon GT, et al. Groin pain in footballers: the association between preseason clinical and pubic bone magnetic resonance imaging findings and athlete outcome. Am J Sports Med. 2005;33(6):894-9.", pmid: "15827362", doi: "10.1177/0363546504271206", type: "cohort", year: 2005 },
    { id: "r5", citation: "Branci S, Thorborg K, Bech BH, et al. MRI findings in soccer players with long-standing adductor-related groin pain and asymptomatic controls. Br J Sports Med. 2015;49(10):681-91.", pmid: "25512059", doi: "10.1136/bjsports-2014-093710", type: "case-control", year: 2015 },
    { id: "r6", citation: "Heijboer WMP, Weir A, Vuckovic Z, et al. Inter-examiner reliability of the Doha agreement meeting classification system of groin pain in male athletes. Scand J Med Sci Sports. 2023;33(2):189-96.", pmid: "36259124", doi: "10.1111/sms.14248", type: "diagnostic-accuracy", year: 2023 },
    { id: "r7", citation: "Heijboer WMP, Weir A, Vuckovic Z, et al. Clinical examination tests for adductor- and pubic-related groin pain in athletes with longstanding groin pain: inter-examiner reliability and prevalence of positive tests. Phys Ther Sport. 2024;66:9-16.", pmid: "38219694", doi: "10.1016/j.ptsp.2023.12.008", type: "diagnostic-accuracy", year: 2024 },
    { id: "r8", citation: "Norton-Old KJ, Schache AG, Barker PJ, et al. Anatomical and mechanical relationship between the proximal attachment of adductor longus and the distal rectus sheath. Clin Anat. 2013;26(4):522-30.", pmid: "23553712", doi: "10.1002/ca.22116", type: "basic-science", year: 2013 },
    { id: "r9", citation: "Verrall GM, Slavotinek JP, Fon GT, et al. Outcome of conservative management of athletic chronic groin injury diagnosed as pubic bone stress injury. Am J Sports Med. 2007;35(3):467-74.", pmid: "17267768", doi: "10.1177/0363546506295180", type: "cohort", year: 2007 },
    { id: "r10", citation: "Choi H, McCartney M, Best TM. Treatment of osteitis pubis and osteomyelitis of the pubic symphysis in athletes: a systematic review. Br J Sports Med. 2011;45(1):57-64.", pmid: "18812419", doi: "10.1136/bjsm.2008.050989", type: "systematic-review", year: 2011 },
    { id: "r11", citation: "Hatem M, Martin RL, Bharam S. Surgical outcomes of inguinal-, pubic-, and adductor-related chronic pain in athletes: a systematic review based on surgical technique. Orthop J Sports Med. 2021;9(9):23259671211023116.", pmid: "34541009", doi: "10.1177/23259671211023116", type: "systematic-review", year: 2021 },
    { id: "r12", citation: "Athanasiou V, Ampariotou A, Lianou I, et al. Osteitis pubis in athletes: a literature review of current surgical treatment. Cureus. 2022;14(3):e22976.", pmid: "35464551", doi: "10.7759/cureus.22976", type: "systematic-review", year: 2022 },
    { id: "r13", citation: "Häußer J, Wieber J, Catalá-Lehnen P. The use of extracorporeal shock wave therapy for the treatment of bone marrow oedema - a systematic review and meta-analysis. J Orthop Surg Res. 2021;16(1):369.", pmid: "34107978", doi: "10.1186/s13018-021-02484-5", type: "meta-analysis", year: 2021 },
    { id: "r14", citation: "King E, Franklyn-Miller A, Richter C, et al. Clinical and biomechanical outcomes of rehabilitation targeting intersegmental control in athletic groin pain: prospective cohort of 205 patients. Br J Sports Med. 2018;52(16):1054-62.", pmid: "29550754", doi: "10.1136/bjsports-2016-097089", type: "cohort", year: 2018 },
    { id: "r15", citation: "Thorborg K, Hölmich P, Christensen R, et al. The Copenhagen Hip and Groin Outcome Score (HAGOS): development and validation according to the COSMIN checklist. Br J Sports Med. 2011;45(6):478-91.", pmid: "21478502", doi: "10.1136/bjsm.2010.080937", type: "cohort", year: 2011 },
    { id: "r16", citation: "Whittaker JL, Small C, Maffey L, et al. Risk factors for groin injury in sport: an updated systematic review. Br J Sports Med. 2015;49(12):803-9.", pmid: "25833903", doi: "10.1136/bjsports-2014-094287", type: "systematic-review", year: 2015 },
    { id: "r17", citation: "Mosler AB, Agricola R, Weir A, et al. Which factors differentiate athletes with hip/groin pain from those without? A systematic review with meta-analysis. Br J Sports Med. 2015;49(12):810.", pmid: "26031646", doi: "10.1136/bjsports-2015-094602", type: "meta-analysis", year: 2015 },
    { id: "r18", citation: "Harøy J, Clarsen B, Wiger EG, et al. The Adductor Strengthening Programme prevents groin problems among male football players: a cluster-randomised controlled trial. Br J Sports Med. 2019;53(3):150-7.", pmid: "29891614", doi: "10.1136/bjsports-2017-098937", type: "rct", year: 2019 }
  ],

  animation: {
    title: "How pubic-related groin pain develops",
    phases: [
      {
        type: "moi", label: "Load vs capacity", duration: 7, view: "anterior", environment: "pitch",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "run-contact", root: { x: -40 } },
          { t: 0.8, pose: "run-midstance", joints: { pelvis: 6, trunk: -4 }, root: { x: -20 } },
          { t: 1.6, pose: "run-toe-off", root: { x: 0 } },
          { t: 2.4, pose: "run-midstance", joints: { pelvis: 8, trunk: -5 }, root: { x: 20 } },
          { t: 3.4, pose: "kick-backswing", joints: { pelvis: 8, hipR: 20 }, root: { x: 35 }, ease: "in" },
          { t: 4.2, pose: "kick-contact", root: { x: 40 } },
          { t: 5.6, pose: "stand", joints: { trunk: 8, elbowL: 80, shoulderL: 15, elbowR: 80, shoulderR: 15 }, root: { x: 45 } }
        ],
        props: [{ id: "ball", type: "ball-soccer", keyframes: [{ t: 0, x: 80, y: 11 }, { t: 4.2, x: 80, y: 11 }, { t: 5.0, x: 320, y: 80 }, { t: 6, x: 520, y: 40 }] }],
        forces: [
          { t: [0.6, 1.4], at: "hipR", dir: "up", label: "Stance side pushed up", size: "m" },
          { t: [0.6, 1.4], at: "hipL", dir: "down", label: "Swing side drops", size: "m" },
          { t: [2.2, 4.4], at: "pelvis", dir: "up", label: "Shear across the symphysis", size: "l" }
        ],
        highlights: [{ t: [2.0, 7], at: "pelvis" }],
        captions: [
          { t: 0, text: "Each running stride loads one leg at a time, shearing the two pubic bones against each other." },
          { t: 1.6, text: "Thousands of strides and kicks a week. Bone adapts if load rises gradually and recovery is adequate." },
          { t: 3.2, text: "Kicking adds adductor and abdominal pulls on the pubic bodies at the same time." },
          { t: 4.4, text: "When load outpaces bone remodelling, microdamage builds up in the pubic bone." },
          { t: 5.6, text: "Central pubic pain develops over weeks: worse with running, kicking and getting out of bed." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "groinR",
        captions: [{ t: 0, text: "Zooming into the pubic symphysis, viewed from the front." }]
      },
      {
        type: "closeup", label: "Pubic symphysis", duration: 10, scene: "hip-anterior",
        actions: [
          { t: 0, do: "highlight", target: "pubicSymphysis" },
          { t: 0.3, do: "label", target: "pubicSymphysis", text: "Pubic symphysis" },
          { t: 1.2, do: "arrow", at: "pubicBody", dir: "superior", label: "Vertical shear", size: "m" },
          { t: 1.4, do: "arrow", at: "adductorLongusMTJ", dir: "inferior", label: "Adductor pull", size: "s" },
          { t: 1.6, do: "compress", target: "pubicSymphysis", amount: 0.3, dur: 0.8 },
          { t: 2.8, do: "stress", target: "pelvis", at: "pubicBody" },
          { t: 3.2, do: "label", target: "pelvis", text: "Bone stress reaction" },
          { t: 4.4, do: "bruise", target: "pelvis", at: "pubicBody" },
          { t: 4.7, do: "label", target: "pelvis", text: "Pubic bone marrow oedema on MRI" },
          { t: 5.8, do: "degenerate", target: "pubicSymphysis" },
          { t: 6.0, do: "label", target: "pubicSymphysis", text: "Disc degeneration, irregular margins (chronic)" },
          { t: 7.0, do: "pain", at: "pubicBody" },
          { t: 7.2, do: "camera", at: "pubicBody", zoom: 1.7, dur: 1 },
          { t: 9.2, do: "camera", zoom: 1, dur: 0.7 }
        ],
        captions: [
          { t: 0, text: "The two pubic bones meet at the symphysis, a fibrocartilage disc reinforced by strong ligaments." },
          { t: 1.2, text: "Single-leg loading shears the joint, and the adductors and abdominals pull on the pubic bodies." },
          { t: 2.8, text: "Repeated shear causes microdamage in the bone beside the joint: a bone stress reaction." },
          { t: 4.4, text: "MRI shows marrow oedema on both sides of the joint, though many pain-free footballers have some." },
          { t: 5.8, text: "In chronic cases the disc degenerates and the joint margins become irregular." },
          { t: 7.0, text: "The defining sign: tenderness directly over the symphysis and the adjacent pubic bone." }
        ]
      },
      {
        type: "micro", label: "Bone stress", duration: 9, tissue: "bone-stress",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.3, stage: "loading" }, { t: 2.6, stage: "microdamage" },
          { t: 4.0, stage: "resorption-exceeds-formation" }, { t: 5.6, stage: "stress-reaction" }, { t: 7.2, stage: "healing" }
        ],
        timeLabels: [{ t: 2.6, text: "Weeks of overload" }, { t: 4.0, text: "Weeks 1–6 of repair" }, { t: 7.2, text: "3–12 months" }],
        captions: [
          { t: 0, text: "Healthy pubic bone: trabeculae continuously remodelled by osteoclasts and osteoblasts." },
          { t: 1.3, text: "Cyclic shear from running and kicking strains the trabeculae." },
          { t: 2.6, text: "Microcracks accumulate faster than they can be repaired." },
          { t: 4.0, text: "Osteoclasts resorb damaged bone before new bone is laid down, so the bone is temporarily weaker." },
          { t: 5.6, text: "Marrow oedema and periosteal reaction: the stress reaction seen on MRI." },
          { t: 7.2, text: "With reduced load, then graded reloading, new bone consolidates over months." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL2" }
};
