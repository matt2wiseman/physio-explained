export default {
  id: "prepatellar-bursitis",
  name: "Prepatellar bursitis",
  shortName: "Prepatellar bursitis",
  aka: ["housemaid's knee", "carpet layer's knee", "septic prepatellar bursitis", "knee bursitis", "beat knee", "fluid on the kneecap"],
  region: "knee",
  tissues: ["bursa"],
  onset: "acute-or-gradual",
  mechanismType: ["compression", "overuse", "contact", "fall"],
  populations: ["tradespeople who kneel (tilers, carpet and floor layers, plumbers)", "men aged 40–60", "wrestlers and contact-sport athletes", "gardeners and cleaners"],
  sports: ["wrestling", "rugby", "american football", "volleyball", "martial arts"],
  urgency: "urgent",
  summary: "Inflammation and swelling of the bursa in front of the kneecap from repeated kneeling, a blow or infection. About a third of cases are septic and need aspiration-guided antibiotic treatment.",
  keyFacts: [
    { label: "Incidence", value: "At least 10 per 100,000 per year (with olecranon bursitis); 80% male, aged 40–60" },
    { label: "Mechanism", value: "Repetitive kneeling, a direct blow or fall onto the patella, or skin breach" },
    { label: "Septic", value: "About one-third of cases; Staphylococcus aureus causes about 80%" },
    { label: "Key test", value: "Bursal aspirate (cell count, Gram stain, culture, crystals) separates septic from non-septic" },
    { label: "Imaging", value: "Ultrasound confirms a bursal collection and helps distinguish cellulitis" },
    { label: "Typical recovery", value: "Non-septic: 2–6 weeks with protection from kneeling" }
  ],
  overview: "The prepatellar bursa is a thin synovial sac between the skin and the front of the patella that lets the skin glide over the kneecap. It becomes inflamed and fills with fluid after repetitive kneeling (chronic microtrauma, the most common cause), after a direct blow or fall that bleeds into the bursa, with crystal or inflammatory disease, or when bacteria enter through a skin breach [r1,r2]. Olecranon and prepatellar bursitis have a minimum combined annual incidence of 10 per 100,000, mostly in men aged 40–60, and about a third of cases are septic [r3].\n\nThe key clinical task is to tell septic from non-septic bursitis. Fever, a warm, red bursa with a skin lesion and a temperature difference over 2.2 °C suggest infection, which is confirmed by bursal aspiration [r3]. Non-septic bursitis is managed with protection from kneeling, compression, ice and analgesia; septic bursitis needs antibiotics active against Staphylococcus aureus, with surgery reserved for refractory or recurrent cases [r2,r3]. The physiotherapist often sees the patient first, so recognising infection and referring promptly is the most important role, followed by restoring motion and planning a safe return to kneeling work or sport.",

  epidemiology: {
    text: "A literature review reported a minimum annual incidence of 10 per 100,000 for olecranon and prepatellar bursitis combined, with 80% of patients male and most aged 40–60 years; about one-third were septic and two-thirds non-septic [r3]. Occupational kneeling is the main risk factor: ultrasound showed thickening of the prepatellar or superficial infrapatellar bursa in 49% of carpet and floor layers compared with 7% of house painters, and fluid in the bursa was associated with knee pain when kneeling [r4]. In a 6-year study of collegiate wrestlers, prepatellar bursitis was among the most frequent knee injuries [r5].",
    riskFactors: {
      intrinsic: [
        "Male sex and age 40–60 years [r3]",
        "Gout, rheumatoid arthritis and other inflammatory or crystal disease [r1]",
        "Immunosuppression, diabetes, alcohol excess and skin disease (risk of septic bursitis)",
        "Previous prepatellar bursitis (recurrence)"
      ],
      extrinsic: [
        "Occupational kneeling, e.g. carpet and floor laying, tiling, plumbing (modifiable with knee pads and job rotation) [r4]",
        "Wrestling and contact sports with falls onto the knee [r5]",
        "Direct blow or fall onto the patella",
        "Abrasions, cuts or puncture wounds over the patella (route for infection)"
      ]
    }
  },

  mechanism: {
    summary: "The bursa is compressed between the floor and the patella with every kneel, and shear between skin and bone irritates its synovial lining. Repeated microtrauma (chronic kneeling) provokes inflammation and fluid production. A direct blow causes bleeding into the bursa (haemorrhagic bursitis). Because the bursa lies just under the skin, an abrasion or puncture can introduce bacteria, usually Staphylococcus aureus, causing septic bursitis [r1,r6].",
    sequence: [
      "A worker kneels for long periods on a hard floor, shuffling forward on the knees.",
      "Body weight compresses the prepatellar bursa between the skin and the patella.",
      "Shear as the skin moves over the patella irritates the bursal synovium.",
      "The synovial lining becomes inflamed and secretes excess fluid, forming a soft, fluctuant swelling over the kneecap.",
      "The swelling makes kneeling painful; with continued kneeling the bursal wall thickens.",
      "If the skin is broken, bacteria can enter the bursa, causing a hot, red, painful septic bursitis."
    ],
    variants: [
      { name: "Acute traumatic (haemorrhagic) bursitis", description: "A fall or blow onto the patella bleeds into the bursa, producing rapid swelling and bruising [r1]." },
      { name: "Septic bursitis", description: "Bacteria (Staphylococcus aureus in about 80%) enter through a skin breach; presents with warmth, redness, pain and sometimes fever [r6]." },
      { name: "Inflammatory or crystal bursitis", description: "Gout, pseudogout or rheumatoid arthritis can cause bursitis without trauma [r1]." },
      { name: "Chronic bursitis", description: "Repeated episodes thicken the bursal wall, producing a persistent boggy swelling that may recur." }
    ]
  },

  anatomy: {
    text: "The prepatellar bursa lies in the subcutaneous tissue in front of the lower half of the patella and the upper patellar tendon. It is a potential space lined by synovium that reduces friction as the skin moves over the patella during knee flexion and kneeling. It does not communicate with the knee joint, so prepatellar bursitis causes swelling in front of the patella rather than a joint effusion. Nearby bursae include the superficial infrapatellar bursa (in front of the tibial tuberosity and patellar tendon, 'clergyman's knee') and the deep infrapatellar bursa behind the patellar tendon.",
    structures: [
      { name: "Prepatellar bursa", role: "Synovial-lined space that lets the skin glide over the patella" },
      { name: "Patella", role: "Bony surface under the bursa; compressed against the floor when kneeling" },
      { name: "Skin and subcutaneous tissue", role: "Thin covering over the bursa; a breach allows infection" },
      { name: "Superficial infrapatellar bursa", role: "Lies over the tibial tuberosity; affected by upright kneeling" },
      { name: "Knee joint (suprapatellar pouch)", role: "Separate from the bursa; an intra-articular effusion suggests a different diagnosis" },
      { name: "Quadriceps", role: "Inhibited by pain and swelling; key to restoring function" }
    ]
  },

  pathophysiology: {
    tissueDamage: "Repeated compression and shear injure the synovial cells lining the bursa, which respond with inflammation, vasodilation and increased production of synovial fluid. The bursa fills and distends, and the inflamed wall becomes thickened and vascular. With a single blow, small vessels tear and blood fills the bursa; this can organise into a thickened, fibrotic sac if it does not resolve [r1].\n\nIn septic bursitis, bacteria entering through a skin breach multiply in the bursal fluid, attracting neutrophils and producing purulent fluid. Typical aspirate findings are a white cell count over 3,000 cells/µL, more than 50% polymorphonuclear cells, a fluid-to-serum glucose ratio under 50%, and a positive Gram stain or culture [r3]. Untreated infection can spread as cellulitis and, rarely, cause systemic sepsis.",
    structures: [
      { name: "Prepatellar bursa", effect: "Synovitis, effusion, wall thickening; haemorrhage after trauma; pus in septic bursitis [r1,r3]" },
      { name: "Overlying skin", effect: "Erythema, warmth and abrasions; cellulitis in septic cases [r6]" },
      { name: "Patella", effect: "Contusion or fracture after a fall should be excluded" },
      { name: "Knee joint", effect: "Usually not involved; a true effusion suggests septic arthritis or intra-articular injury" }
    ],
    muscles: [
      { name: "Quadriceps", effect: "Pain and swelling over the patella inhibit the quadriceps and limit full flexion" },
      { name: "Hamstrings and calf", effect: "Mild disuse weakness if activity is restricted for several weeks" }
    ],
    cellular: [
      { phase: "Irritation & inflammation", timing: "0–3 days", description: "Synovial cells release inflammatory mediators; vessels dilate and fluid production rises." },
      { phase: "Effusion", timing: "Days to weeks", description: "The bursa distends with fluid (or blood after trauma); continued kneeling sustains the effusion." },
      { phase: "Septic (if bacteria enter)", timing: "Hours to days", description: "Neutrophil-rich purulent fluid; Staphylococcus aureus in about 80% [r6]." },
      { phase: "Resolution or chronic thickening", timing: "2–6 weeks or longer", description: "With protection, fluid is resorbed and the lining settles; repeated insults cause a thickened, fibrotic bursal wall." }
    ],
    systems: [
      { system: "Immune / inflammatory", effect: "Local synovial inflammation; septic bursitis can cause fever and raised inflammatory markers, and occasionally systemic sepsis [r2]." },
      { system: "Integumentary", effect: "Skin breaches over the patella are the usual entry point for infection; cellulitis can coexist [r2,r6]." },
      { system: "Nervous system", effect: "Pain from the distended, inflamed bursa and skin limits kneeling and full flexion." },
      { system: "Occupational / psychosocial", effect: "Time off work for tradespeople; recurrence is common if kneeling exposure is not changed [r4]." }
    ]
  },

  grading: {
    system: "Aetiological classification",
    grades: [
      { grade: "Chronic microtraumatic", description: "Repetitive kneeling; soft, minimally tender, non-erythematous swelling [r1].", prognosis: "Usually resolves with protection; recurs if exposure continues" },
      { grade: "Acute traumatic (haemorrhagic)", description: "After a blow or fall; rapid swelling, bruising [r1].", prognosis: "Usually resolves over weeks; exclude patellar fracture" },
      { grade: "Septic", description: "Warm, red, tender, often with a skin lesion and sometimes fever; confirmed by aspirate [r3].", prognosis: "Responds to antibiotics in most cases; surgery for refractory or recurrent infection [r3]" },
      { grade: "Inflammatory / crystal", description: "Gout, pseudogout or rheumatoid arthritis without trauma [r1].", prognosis: "Treat the underlying disease" }
    ]
  },

  timeframes: {
    summary: "Non-septic bursitis usually settles over 2–6 weeks if kneeling is avoided; septic bursitis improves within days of starting antibiotics, but full resolution takes longer. These are typical clinical ranges.",
    healing: [
      { phase: "Acute inflammation", startDay: 0, endDay: 7, description: "Swelling, warmth and pain; avoid kneeling; aspirate if infection suspected" },
      { phase: "Resolution of effusion", startDay: 7, endDay: 42, description: "Fluid is resorbed with protection and compression" },
      { phase: "Return to kneeling & remodelling", startDay: 28, endDay: 90, description: "Gradual return to kneeling with padding; bursal wall settles" }
    ],
    milestones: [
      { label: "Septic bursitis: clinical improvement on antibiotics", day: 3, note: "Lack of improvement needs medical review" },
      { label: "Full knee range of motion", day: 14 },
      { label: "Return to kneeling work with knee pads", day: 28 },
      { label: "Return to contact sport", day: 21, note: "Once swelling has settled and the skin is intact; use padding" }
    ],
    returnToSport: "Non-septic: usually within 1–4 weeks with padding once swelling and pain allow full kneeling. Septic or post-bursectomy: when infection has resolved and the wound has healed, typically 3–6 weeks."
  },

  clinicalPresentation: {
    symptoms: [
      "Swelling over the front of the kneecap, often egg-shaped",
      "Pain or discomfort when kneeling",
      "Tightness or pain at end-range knee flexion",
      "Warmth, redness and increasing pain if infected; sometimes fever and malaise",
      "History of kneeling work, a fall on the knee or a graze over the patella"
    ],
    signs: [
      "Fluctuant, well-circumscribed swelling anterior to the patella",
      "No intra-articular effusion (negative patellar tap and stroke test)",
      "Full or near-full knee range, limited at end flexion by skin tension",
      "Septic signs: erythema, marked tenderness, warmth with a prebursal temperature difference >2.2 °C, skin abrasion or puncture, fever >37.8 °C [r3]",
      "Thickened, nodular bursal wall in chronic cases"
    ]
  },

  assessment: {
    subjective: [
      "Kneeling exposure: occupation, hours per day, use of knee pads",
      "Trauma: fall or blow onto the knee (haemorrhage, patellar fracture)",
      "Skin breach: grazes, cuts, insect bites, eczema over the patella",
      "Systemic symptoms: fever, chills, malaise (septic bursitis)",
      "History of gout, rheumatoid arthritis, diabetes or immunosuppression",
      "Previous episodes and treatment (aspiration, injection, surgery)"
    ],
    observation: ["Localised swelling in front of the patella (not filling the suprapatellar pouch)", "Erythema, skin lesions, tracking redness (cellulitis)", "Gait and ability to flex the knee"],
    palpation: ["Fluctuance and size of the bursal swelling", "Warmth compared with the other knee (temperature difference)", "Tenderness: severe in septic bursitis, mild in microtraumatic bursitis", "Patella and tibial tuberosity for fracture or apophysitis", "Inguinal lymph nodes in suspected infection"],
    rangeOfMotion: ["Knee flexion may be limited at end range by tension over the bursa", "Extension usually full", "Pain on full flexion more marked in septic bursitis"],
    strength: ["Quadriceps activation and straight-leg raise (also screens the extensor mechanism after a fall)"],
    neuro: [],
    functional: ["Kneeling tolerance (on a padded surface)", "Squat and stairs", "Return-to-work task simulation"],
    specialTests: [
      { name: "Prebursal temperature difference", purpose: "Screen for septic bursitis", procedure: "Compare skin temperature over the affected bursa with the same site on the other knee, by touch or skin thermometer.", positive: "A difference greater than 2.2 °C suggests septic bursitis [r3]. Refer for aspiration.", refs: ["r3"] },
      { name: "Stroke test / patellar tap", purpose: "Distinguish a bursal swelling from an intra-articular effusion", procedure: "Milk fluid from the suprapatellar pouch and observe for a fluid wave (stroke test) or ballottement of the patella (tap).", positive: "A positive test indicates a joint effusion, which points away from isolated prepatellar bursitis toward intra-articular pathology or septic arthritis.", refs: [] },
      { name: "Fluctuance", purpose: "Confirm a fluid-filled bursa", procedure: "Palpate the swelling with two fingers, pressing alternately.", positive: "A fluid wave within a well-circumscribed swelling in front of the patella.", refs: [] }
    ],
    clinicalRules: [
      { name: "Septic bursitis indicators [r3]", description: "Clinical: fever >37.8 °C, prebursal temperature difference >2.2 °C, skin lesion. Aspirate: purulent fluid, white cell count >3,000 cells/µL, >50% polymorphonuclear cells, fluid-to-serum glucose ratio <50%, positive Gram stain or culture." }
    ],
    outcomeMeasures: [
      { name: "Numeric pain rating during kneeling", use: "Track symptom resolution and kneeling tolerance" },
      { name: "KOOS (Knee injury and Osteoarthritis Outcome Score)", use: "Includes kneeling and squatting items in the function subscales" },
      { name: "Return-to-work status", use: "Key functional outcome for tradespeople" }
    ],
    imaging: [
      { modality: "Ultrasound", indication: "Confirm a bursal collection, distinguish bursitis from cellulitis and guide aspiration [r2,r6]", findings: "Anechoic or complex fluid collection anterior to the patella; synovial thickening; hyperaemia; debris in septic or haemorrhagic bursitis" },
      { modality: "Plain radiographs", indication: "After a fall, or if a fracture or foreign body is suspected", findings: "Patellar fracture, foreign body, soft-tissue swelling; calcification in chronic bursitis" },
      { modality: "MRI", indication: "Rarely; atypical or deep infection, suspected osteomyelitis or failure to respond [r2]", findings: "Bursal fluid and wall enhancement; adjacent soft-tissue or bone involvement" }
    ]
  },

  differentials: [
    { name: "Septic arthritis of the knee", distinguishing: "Joint effusion with severe pain on any movement and inability to weight-bear; needs emergency joint aspiration." },
    { name: "Cellulitis", distinguishing: "Diffuse skin erythema without a fluctuant bursal collection; ultrasound helps distinguish the two [r2]." },
    { name: "Morel-Lavallée lesion", distinguishing: "Closed degloving from a shearing blow, typically a larger suprapatellar fluctuant collection; distinct from prepatellar bursitis [r7]." },
    { name: "Patella fracture", id: "patella-fracture", distinguishing: "Fall onto the knee with bony tenderness, haemarthrosis and inability to straight-leg raise." },
    { name: "Gout or pseudogout", distinguishing: "Rapid onset without trauma, often with a history of gout; crystals in the aspirate [r1]." },
    { name: "Osgood–Schlatter disease / superficial infrapatellar bursitis", id: "osgood-schlatter", distinguishing: "Swelling over the tibial tuberosity rather than the patella; adolescents with Osgood–Schlatter disease." }
  ],
  redFlags: [
    "Warm, red, very tender bursa, a skin breach or a prebursal temperature difference >2.2 °C: suspect septic bursitis. Refer the same day for aspiration and antibiotics [r3].",
    "Fever, rigors, spreading redness or feeling unwell: suspect septic bursitis with cellulitis or systemic infection. Refer to the emergency department; intravenous antibiotics may be needed [r2].",
    "Joint effusion with pain on all movement or inability to weight-bear: suspect septic arthritis and refer to the emergency department.",
    "Fall onto the knee with bony tenderness or inability to straight-leg raise: arrange radiographs to exclude patellar fracture or extensor mechanism injury.",
    "Immunosuppression or diabetes with any warm bursal swelling: lower the threshold for urgent medical review."
  ],

  management: {
    principles: "First decide whether the bursitis is septic. Clinical features suggest it, and bursal aspirate analysis confirms it [r3]. Non-septic bursitis is managed conservatively: stop or modify kneeling, protect the knee with padding, use compression, ice and analgesia, and maintain range and strength. Septic bursitis needs antibiotics active against Staphylococcus aureus; well patients can usually be treated as outpatients with oral antibiotics, while acutely unwell patients need admission and intravenous therapy [r2]. Surgery (bursectomy) is reserved for severe, refractory or recurrent cases; immediate bursectomy for septic bursitis is not supported by the evidence [r3]. Address occupational exposure to prevent recurrence [r4].",
    medical: [
      { name: "Antibiotics for septic bursitis", description: "Empirical cover for Staphylococcus aureus, adjusted to culture; oral for well patients, intravenous if systemically unwell [r2,r6]. In one review, courses shorter than 8 days were not associated with more recurrence [r8].", evidence: "limited", recommendation: "recommended", refs: ["r2", "r6", "r8"] },
      { name: "Diagnostic bursal aspiration", description: "Recommended whenever infection is suspected, with cell count, Gram stain, culture, glucose and crystal analysis [r3,r2]. Aspiration of clearly microtraumatic, non-infected bursitis is generally not recommended because of the risk of introducing infection [r2].", evidence: "limited", recommendation: "recommended", refs: ["r3", "r2"] },
      { name: "Intrabursal corticosteroid injection (non-septic only)", description: "May be considered for confirmed non-septic bursitis in people with high occupational or athletic demands [r3]; high-quality evidence of benefit is lacking and it carries a risk of infection and skin atrophy [r2].", evidence: "very-limited", recommendation: "consider", refs: ["r3", "r2"] },
      { name: "NSAIDs and analgesia", description: "Part of conservative management for pain and inflammation [r3,r1].", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Bursectomy (open or endoscopic)", description: "For severe, refractory or recurrent bursitis [r3]. Endoscopic bursectomy had similar 1-year recurrence and complications to open surgery, with a shorter hospital stay [r8].", evidence: "limited", recommendation: "consider", refs: ["r3", "r8"] },
      { name: "Immediate bursectomy for septic bursitis", description: "The available evidence does not support routine immediate surgery; start with aspiration and antibiotics [r3].", evidence: "limited", recommendation: "not-recommended", refs: ["r3"] }
    ],
    physio: [
      { name: "Activity modification and protection from kneeling", description: "Avoid kneeling until swelling settles, then kneel only on padding; use half-kneeling on the other knee or a kneeling stool; rotate tasks [r1,r2].", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Compression, ice and elevation (PRICE)", description: "Compression bandage or sleeve, ice and elevation in the acute phase to reduce swelling [r3].", evidence: "very-limited", recommendation: "recommended", refs: ["r3"] },
      { name: "Range of motion and quadriceps exercises", description: "Maintain knee flexion and quadriceps strength while the bursa settles, avoiding direct pressure on the patella.", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Occupational knee protection and ergonomics", description: "Well-cushioned knee pads, kneeling mats and job rotation to reduce cumulative pressure [r4].", evidence: "very-limited", recommendation: "recommended", refs: ["r4"] },
      { name: "Screening for infection", description: "Check temperature, skin and systemic features at every visit and refer promptly if septic features develop [r3].", evidence: "limited", recommendation: "recommended", refs: ["r3"] }
    ],
    education: [
      "The swelling is a fluid-filled sac in front of the kneecap; it is separate from the knee joint itself.",
      "Seek help the same day if the swelling becomes hot, red, very painful, or you feel feverish or unwell.",
      "Keep any grazes over the knee clean and covered.",
      "Avoid kneeling until it settles, then always kneel on good padding or use a kneeling stool.",
      "Bursitis often comes back if kneeling habits do not change, so plan how you will protect your knees at work."
    ]
  },

  rehab: {
    overview: "Rehabilitation is short and symptom-led for most non-septic cases; the main goals are protection from pressure, keeping the knee moving and strong, and a graded, padded return to kneeling. After septic bursitis or bursectomy, wait for infection control and wound healing, and follow the surgeon's advice on kneeling (commonly avoided for 4–6 weeks after bursectomy). Review for signs of infection at every stage [r3].",
    stages: [
      {
        name: "Protect & settle",
        timeframe: "Days 0–7",
        goals: ["Reduce swelling and pain", "Exclude or treat infection", "Maintain knee range"],
        precautions: ["No kneeling or direct pressure on the patella", "Refer the same day if septic features appear", "After surgery: keep the wound clean and dry; follow surgeon's instructions"],
        exercises: [
          { name: "Compression sleeve and ice", dosage: "Ice 15–20 min, 3–4 times daily; compression during the day", cues: "Elevate the leg when resting" },
          { name: "Quadriceps sets", dosage: "10 × 10 s, 3 times daily", figure: { pose: "ex-quad-set", view: "lateral", props: ["mat"] } },
          { name: "Heel slides", dosage: "2 × 15, twice daily", cues: "Bend as far as comfortable without forcing", figure: { pose: "ex-heel-slide", view: "lateral", props: ["mat"] } },
          { name: "Straight-leg raise", dosage: "3 × 10", figure: { pose: "ex-straight-leg-raise", view: "lateral", props: ["mat"] } }
        ],
        progressionCriteria: ["Swelling and warmth reducing", "No signs of infection (or improving on antibiotics)", "Pain ≤3/10 with walking"]
      },
      {
        name: "Restore motion & strength",
        timeframe: "Weeks 1–3",
        goals: ["Full knee flexion", "Normal quadriceps strength", "Pain-free stairs and squatting"],
        precautions: ["Still avoid kneeling directly on the patella"],
        exercises: [
          { name: "Squat to box", dosage: "3 × 12", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Step-up", dosage: "3 × 10 each side", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Bridge", dosage: "3 × 12", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Stationary bike", dosage: "15–20 min daily" }
        ],
        progressionCriteria: ["Full, pain-free knee flexion", "Swelling minimal or resolved", "Squat and stairs pain-free"]
      },
      {
        name: "Graded return to kneeling",
        timeframe: "Weeks 2–6",
        goals: ["Tolerate kneeling on padding", "Return to work tasks", "Plan long-term protection"],
        precautions: ["Always use knee pads or a cushioned mat", "Build kneeling time gradually; stop if swelling returns"],
        exercises: [
          { name: "Half-kneeling on a cushion", dosage: "Build from 1 to 5 min, 2–3 times daily", cues: "Weight through the shin rather than the kneecap", figure: { pose: "lunge", view: "lateral", props: ["mat"] } },
          { name: "Supported tall kneeling on a mat", dosage: "Build from 1 to 10 min", figure: { pose: "kneel", view: "lateral", props: ["mat"] } },
          { name: "Split squat", dosage: "3 × 10", figure: { pose: "ex-split-squat", view: "lateral" } },
          { name: "Work-task simulation", dosage: "Progress duration over 1–2 weeks with pads and breaks" }
        ],
        progressionCriteria: ["Kneeling on padding for the required work or sport duration without swelling", "No recurrence of warmth or redness", "Patient has a protection plan"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Swelling resolved or minimal, with no warmth or redness",
      "Skin intact and any infection fully treated",
      "Full, pain-free knee range of motion",
      "Kneeling and falling drills tolerated with padding (contact sports)"
    ],
    tests: ["Kneeling tolerance on a padded surface", "Sport-specific falls or takedown drills (wrestling)"]
  },
  prognosis: "Most non-septic bursitis resolves with conservative care over a few weeks, although recurrence is common if kneeling exposure continues [r1,r4]. Septic bursitis usually responds to antibiotics; surgery is needed only for severe, refractory or recurrent cases [r3]. After bursectomy, open and endoscopic techniques had similar recurrence at 1 year, and 80% of endoscopically treated patients were pain-free [r8].",
  prevention: [
    "Use well-cushioned knee pads or kneeling mats and take regular breaks from kneeling [r4].",
    "Rotate tasks to reduce cumulative kneeling time in trades.",
    "Clean and cover grazes over the knee promptly to reduce infection risk.",
    "Wear knee padding in wrestling and other sports with frequent knee contact [r5]."
  ],
  clinicalPearls: [
    "Ask 'Is the knee joint swollen or just the front of the kneecap?' Prepatellar bursitis does not produce a positive patellar tap.",
    "Every warm prepatellar swelling is septic until proven otherwise; look for a graze, compare skin temperature and refer for aspiration [r3].",
    "Do not aspirate or inject an obviously microtraumatic, non-infected bursa in clinic; iatrogenic infection is a real risk [r2].",
    "A large fluctuant collection after a shearing fall in a contact athlete may be a Morel-Lavallée lesion rather than bursitis [r7].",
    "Prevention is occupational: the best treatment for a tiler's knee is a better knee pad and fewer hours kneeling [r4]."
  ],
  related: ["patella-fracture", "hoffa-fat-pad-impingement", "pes-anserine-pain", "osgood-schlatter"],

  references: [
    { id: "r1", citation: "Khodaee M. Common superficial bursitis. Am Fam Physician. 2017;95(4):224-31.", pmid: "28290630", type: "narrative-review", year: 2017 },
    { id: "r2", citation: "Lormeau C, Cormier G, Sigaux J, et al. Management of septic bursitis. Joint Bone Spine. 2019;86(5):583-8.", pmid: "31615686", doi: "10.1016/j.jbspin.2018.10.006", type: "narrative-review", year: 2019 },
    { id: "r3", citation: "Baumbach SF, Lobo CM, Badyine I, et al. Prepatellar and olecranon bursitis: literature review and development of a treatment algorithm. Arch Orthop Trauma Surg. 2014;134(3):359-70.", pmid: "24305696", doi: "10.1007/s00402-013-1882-7", type: "systematic-review", year: 2014 },
    { id: "r4", citation: "Kivimäki J. Occupationally related ultrasonic findings in carpet and floor layers' knees. Scand J Work Environ Health. 1992;18(6):400-2.", pmid: "1485165", type: "cross-sectional", year: 1992 },
    { id: "r5", citation: "Wroble RR, Mysnyk MC, Foster DT, et al. Patterns of knee injuries in wrestling: a six year study. Am J Sports Med. 1986;14(1):55-66.", pmid: "3752347", doi: "10.1177/036354658601400110", type: "cohort", year: 1986 },
    { id: "r6", citation: "Lormeau C, Cormier G, Sigaux J, et al. Management of septic bursitis. Joint Bone Spine. 2019;86(5):583-8.", pmid: "31615686", doi: "10.1016/j.jbspin.2018.10.006", type: "narrative-review", year: 2019 },
    { id: "r7", citation: "Tejwani SG, Cohen SB, Bradley JP. Management of Morel-Lavallee lesion of the knee: twenty-seven cases in the National Football League. Am J Sports Med. 2007;35(7):1162-7.", pmid: "17351119", doi: "10.1177/0363546507299448", type: "cohort", year: 2007 },
    { id: "r8", citation: "Brown OS, Smith TO, Parsons T, et al. Management of septic and aseptic prepatellar bursitis: a systematic review. Arch Orthop Trauma Surg. 2022;142(10):2445-57.", pmid: "33721054", doi: "10.1007/s00402-021-03853-9", type: "systematic-review", year: 2022 }
  ],

  animation: {
    title: "How prepatellar bursitis develops",
    phases: [
      {
        type: "moi", label: "Repeated kneeling", duration: 6, view: "lateral", environment: "home",
        actors: [{ id: "worker", kit: "worker" }],
        keyframes: [
          { t: 0, pose: "stand", root: { x: -30 } },
          { t: 1.1, pose: "lunge", root: { x: -20 } },
          { t: 2.0, pose: "kneel", root: { x: -10 } },
          { t: 3.0, pose: "kneel", joints: { trunk: 45, shoulderR: 70, shoulderL: 60 }, root: { x: -8 } },
          { t: 4.2, pose: "kneel", joints: { trunk: 50, shoulderR: 80, shoulderL: 70 }, root: { x: -2 } },
          { t: 5.4, pose: "kneel", joints: { trunk: 45, shoulderR: 70, shoulderL: 60 }, root: { x: 4 } }
        ],
        forces: [
          { t: [2.0, 6.0], at: "kneeR", dir: "down", label: "Body weight on the front of the kneecap" },
          { t: [3.6, 5.6], at: "kneeR", dir: "forward", label: "Shear as the worker shuffles" }
        ],
        highlights: [{ t: [2.2, 6], at: "kneeR" }],
        captions: [
          { t: 0, text: "A floor layer kneels for hours each day on a hard surface." },
          { t: 2.0, text: "Each kneel presses the bursa between the floor and the kneecap." },
          { t: 3.4, text: "Shuffling forward adds shear between skin and bone." },
          { t: 4.6, text: "Repeated pressure exceeds what the bursal lining tolerates, and it becomes inflamed." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "kneeR",
        captions: [{ t: 0, text: "Zooming into the right knee, seen from the side as a sagittal slice." }]
      },
      {
        type: "closeup", label: "In front of the knee", duration: 9, scene: "knee-sagittal",
        actions: [
          { t: 0, do: "highlight", target: "prepatellarBursa" },
          { t: 0.3, do: "label", target: "prepatellarBursa", text: "Prepatellar bursa: between skin and kneecap" },
          { t: 1.2, do: "arrow", at: "prepatellar", dir: "posterior", label: "Kneeling pressure", size: "l" },
          { t: 1.5, do: "compress", target: "prepatellarBursa", dur: 0.8 },
          { t: 3.0, do: "inflame", target: "prepatellarBursa", amount: 0.5 },
          { t: 3.8, do: "swell", target: "prepatellarBursa", amount: 0.85, dur: 1.2 },
          { t: 4.4, do: "label", target: "prepatellarBursa", text: "Inflamed, fluid-filled bursa" },
          { t: 5.6, do: "label", target: "suprapatellarPouch", text: "Knee joint itself is not swollen" },
          { t: 6.6, do: "inflame", target: "prepatellarBursa", amount: 1 },
          { t: 6.8, do: "label", target: "prepatellarBursa", text: "Skin breach → bacteria → septic bursitis" },
          { t: 7.4, do: "pain", at: "prepatellar" }
        ],
        captions: [
          { t: 0, text: "The prepatellar bursa lets the skin glide over the kneecap." },
          { t: 1.2, text: "Kneeling squeezes it against the patella thousands of times." },
          { t: 3.0, text: "The lining becomes inflamed and overproduces fluid, forming a soft, egg-shaped swelling." },
          { t: 5.6, text: "The swelling sits in front of the kneecap; the joint behind it is usually dry." },
          { t: 6.6, text: "If a graze lets bacteria in, the bursa becomes hot, red and septic and needs urgent care." }
        ]
      },
      {
        type: "micro", label: "Bursal lining", duration: 8, tissue: "bursa",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.4, stage: "friction" }, { t: 3.0, stage: "inflammation" }, { t: 4.8, stage: "effusion" }, { t: 6.4, stage: "resolution" }
        ],
        timeLabels: [{ t: 3.0, text: "Days" }, { t: 4.8, text: "Days to weeks" }, { t: 6.4, text: "2–6 weeks without kneeling" }],
        captions: [
          { t: 0, text: "A thin synovial lining encloses a film of lubricating fluid." },
          { t: 1.4, text: "Repeated compression and shear irritate the lining cells." },
          { t: 3.0, text: "Inflammatory cells arrive and vessels dilate; the wall thickens." },
          { t: 4.8, text: "Excess fluid distends the bursa into a visible swelling." },
          { t: 6.4, text: "Protected from kneeling, the fluid is resorbed and the lining settles." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL5" }
};
