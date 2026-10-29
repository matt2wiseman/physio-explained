export default {
  id: "hip-fracture",
  name: "Hip (proximal femoral) fracture in older adults",
  shortName: "Hip fracture",
  aka: ["fractured neck of femur", "NOF fracture", "proximal femoral fracture", "fragility hip fracture", "intertrochanteric fracture", "subcapital fracture", "broken hip"],
  region: "hip-groin",
  tissues: ["bone"],
  onset: "acute",
  mechanismType: ["fall"],
  populations: ["older adults (mostly over 80)", "women with osteoporosis", "people with frailty, dementia or falls history", "residential aged-care residents"],
  sports: [],
  urgency: "emergency",
  summary: "A fracture of the femoral neck or trochanteric region, usually from a sideways fall onto the hip in an older adult with fragile bone. Treated with early surgery, mobilisation within 36 h and multidisciplinary rehab.",
  keyFacts: [
    { label: "Typical recovery", value: "Most mobility gains in 3–6 months; many never regain pre-fracture mobility" },
    { label: "Key priority", value: "Surgery within 24–48 h and mobilisation within 36 h of surgery" },
    { label: "Imaging", value: "AP pelvis and lateral hip radiograph; MRI if clinical suspicion persists despite normal films" },
    { label: "Peak age", value: "Mean about 85 years; about 75% women" },
    { label: "Mortality", value: "Roughly 1 in 5 die within a year; 5–8× higher risk of death in the first 3 months" },
    { label: "Mechanism", value: "Sideways fall with impact on the greater trochanter" }
  ],
  overview: "Hip fracture is a fracture of the proximal femur, either inside the joint capsule (femoral neck) or outside it (intertrochanteric and subtrochanteric). It is the archetypal fragility fracture: most occur when an older person with osteoporosis falls sideways onto the greater trochanter [r1,r3]. Hip fracture causes a sudden loss of mobility and independence, and older adults have a 5–8-fold higher risk of death in the first 3 months afterwards [r2].\n\nNearly all patients are treated surgically, ideally within 24–48 hours [r4]. The physiotherapist's role starts on the day after surgery: mobilisation within 36 hours roughly doubles the odds of discharge within 30 days [r6], and weight-bearing restrictions should be avoided [r7]. Multidisciplinary, orthogeriatric rehabilitation reduces death or loss of independence [r8], and structured gait, balance, functional and progressive resistance training improve mobility in hospital and after discharge [r9,r10]. Secondary prevention of falls and fractures is part of every plan [r11].",

  epidemiology: {
    text: "An international study of over 4.1 million hip fractures in people aged 50 years and older found age- and sex-standardised incidence rates from 95.1 per 100,000 in Brazil to 315.9 per 100,000 in Denmark. Rates are falling in most countries, but the annual number of hip fractures is projected to nearly double from 2018 to 2050 as populations age; 1-year all-cause mortality ranged from 14.4% to 28.3% [r1]. A meta-analysis of Spanish registries (55,680 patients) reported a mean age of 84.6 years, 75% women, 58% extracapsular fractures, delirium in 42% and 1-year mortality of 18% [r5]. Ninety-eight per cent of hip fractures result from a fall [r3].",
    riskFactors: {
      intrinsic: [
        "Older age and female sex [r4]",
        "Osteoporosis or other metabolic bone disease (modifiable with treatment) [r4,r11]",
        "Previous fragility fracture [r4]",
        "Low body mass index and reduced trochanteric soft tissue (modifiable) [r4]",
        "Falls risk: sarcopenia, impaired balance, slow protective responses, cognitive impairment, visual impairment (partly modifiable) [r3,r4]"
      ],
      extrinsic: [
        "Medications that increase falls risk (sedatives, antihypertensives) or reduce bone density (corticosteroids) (modifiable) [r4]",
        "Home hazards and poor lighting",
        "Living in residential aged care",
        "Alcohol and smoking (modifiable) [r4]"
      ]
    }
  },

  mechanism: {
    summary: "The typical hip fracture results from a fall directly sideways from standing height, with impact on the greater trochanter. In a prospective study of 206 consecutive hip fractures, 76% of patients fell directly to the side, 56% had a fresh haematoma over the greater trochanter, and most did not break the fall with an outstretched arm [r3]. The impact load through the trochanter bends and shears the femoral neck or trochanteric region, and osteoporotic bone fails at a load it would once have tolerated.",
    sequence: [
      "An older adult loses balance while walking, turning or getting up, often at home.",
      "Slowed protective reactions mean the arm does not break the fall and the body drops sideways [r3].",
      "The greater trochanter strikes the floor with little soft-tissue padding to absorb the energy [r3].",
      "Impact force passes medially through the trochanter into the femoral neck and intertrochanteric region.",
      "Osteoporotic cortical and trabecular bone fails: an intracapsular (neck) or extracapsular (trochanteric) fracture results.",
      "The patient is usually unable to stand; the leg lies shortened and externally rotated as muscle pull displaces the fragments [r4].",
      "If the person cannot get up, a 'long lie' adds risks of dehydration, pressure injury, hypothermia and rhabdomyolysis."
    ],
    variants: [
      { name: "Intracapsular (femoral neck) fracture", description: "Subcapital or transcervical neck fractures. Displacement can disrupt the retinacular blood supply to the femoral head, causing nonunion or avascular necrosis; displaced fractures are usually treated with arthroplasty." },
      { name: "Extracapsular (intertrochanteric/pertrochanteric) fracture", description: "Through the well-vascularised trochanteric region. More common in registries (58%) [r5]; treated with a sliding hip screw or intramedullary nail." },
      { name: "Subtrochanteric fracture", description: "Below the lesser trochanter, under high bending loads. Usually fixed with an intramedullary nail. Atypical femoral fractures on long-term bisphosphonates occur here." },
      { name: "Low-energy fracture without a fall", description: "Spontaneous or occult fractures through very osteoporotic or pathological bone; MRI is needed if radiographs are normal [r4]." }
    ]
  },

  anatomy: {
    text: "The proximal femur consists of the head, neck, greater and lesser trochanters, and the subtrochanteric shaft. The joint capsule attaches to the intertrochanteric line anteriorly, so neck fractures are intracapsular and trochanteric fractures are extracapsular. The femoral head is supplied mainly by retinacular branches of the medial circumflex femoral artery running along the neck under the synovium; these are vulnerable in displaced intracapsular fractures. With ageing and osteoporosis, cortical thinning and loss of trabeculae reduce the load the neck can tolerate, especially for an impact from the side, a direction in which the neck is not habitually loaded.",
    structures: [
      { name: "Femoral neck", role: "Transfers load from head to shaft; intracapsular fractures occur here" },
      { name: "Greater trochanter", role: "Attachment of gluteus medius and minimus; the impact point in a sideways fall [r3]" },
      { name: "Intertrochanteric region", role: "Well-vascularised cancellous bone; site of extracapsular fractures" },
      { name: "Retinacular vessels (medial circumflex femoral artery)", role: "Main blood supply to the femoral head; disrupted by displaced neck fractures" },
      { name: "Hip abductors (gluteus medius/minimus)", role: "Stabilise the pelvis in stance; weakness after fracture drives a Trendelenburg gait" },
      { name: "Hip capsule", role: "Encloses the neck; intracapsular bleeding stays within it" }
    ]
  },

  pathophysiology: {
    tissueDamage: "Osteoporosis reduces bone mass and disrupts microarchitecture: the cortex of the femoral neck thins, especially superolaterally, and trabeculae become fewer and more widely spaced. A sideways fall loads the neck in a direction it is poorly adapted to resist, and the energy from a fall from standing height easily exceeds the strength of fragile bone [r3]. Intracapsular fractures can tear the retinacular vessels, threatening the femoral head; extracapsular fractures bleed more but have a good blood supply for union.\n\nThe fracture triggers the standard healing cascade of haematoma, inflammation, soft callus, hard callus and remodelling, although surgery often replaces the femoral head (arthroplasty) in displaced neck fractures. Beyond the bone, the injury unleashes a systemic stress response, blood loss, pain and immobility in a frail person. Delirium is the most common post-operative complication (42% in pooled registries) [r5], and the risk of death is 5–8 times higher than in age-matched peers in the first 3 months [r2].",
    structures: [
      { name: "Femoral neck or trochanteric region", effect: "Fracture through osteoporotic bone; displacement and comminution vary by fracture type" },
      { name: "Retinacular vessels", effect: "Disrupted in displaced intracapsular fractures, leading to nonunion or avascular necrosis" },
      { name: "Soft tissues over the greater trochanter", effect: "Haematoma from the direct impact (56% in one series) [r3]" },
      { name: "Hip joint", effect: "Haemarthrosis in intracapsular fractures; arthroplasty changes joint mechanics" }
    ],
    muscles: [
      { name: "Hip abductors", effect: "Pain inhibition, surgical trauma (lateral approaches, nail insertion) and disuse cause weakness and a Trendelenburg gait" },
      { name: "Quadriceps and hip extensors", effect: "Rapid disuse atrophy in already sarcopenic muscle reduces sit-to-stand and stair ability" },
      { name: "Iliopsoas and adductors", effect: "Spasm and muscle pull shorten and externally rotate the limb before fixation [r4]" }
    ],
    cellular: [
      { phase: "Haematoma and inflammation", timing: "0–7 days", description: "Bleeding forms a fracture haematoma; platelets, neutrophils and macrophages release cytokines and growth factors." },
      { phase: "Soft callus", timing: "1–4 weeks", description: "Mesenchymal cells form fibrocartilaginous callus that bridges the fracture (where fixed rather than replaced)." },
      { phase: "Hard callus", timing: "4–12 weeks", description: "Endochondral ossification converts soft callus to woven bone; union is slower in osteoporotic bone." },
      { phase: "Remodelling", timing: "3–12+ months", description: "Woven bone is remodelled to lamellar bone along load lines. Systemic bone loss continues unless osteoporosis is treated [r11]." }
    ],
    systems: [
      { system: "Nervous system", effect: "Pain, anaesthesia, opioids, infection and dehydration precipitate delirium (42% of patients) [r5]; pre-existing dementia worsens outcomes." },
      { system: "Cardiovascular / haematological", effect: "Blood loss, anaemia and immobility increase risks of myocardial injury and venous thromboembolism; prophylaxis is standard [r4]." },
      { system: "Respiratory", effect: "Immobility and reduced lung volumes increase the risk of hospital-acquired pneumonia; early mobilisation helps." },
      { system: "Musculoskeletal", effect: "Sarcopenia accelerates with bed rest; each day of immobility costs strength and function." },
      { system: "Psychological / social", effect: "Fear of falling, low mood and loss of confidence restrict activity; many patients do not return to their previous residence or mobility [r8]." },
      { system: "Mortality", effect: "Relative hazard of death in the first 3 months is 5.75 in women and 7.95 in men; excess mortality persists for years [r2]." }
    ]
  },

  grading: {
    system: "Anatomical classification (intracapsular vs extracapsular, displacement)",
    grades: [
      { grade: "Intracapsular, undisplaced", description: "Femoral neck fracture with preserved alignment (including impacted valgus fractures).", prognosis: "Usually internal fixation with screws; risk of later displacement, nonunion or AVN" },
      { grade: "Intracapsular, displaced", description: "Femoral neck fracture with displacement; head blood supply likely disrupted.", prognosis: "Usually hemiarthroplasty or total hip arthroplasty" },
      { grade: "Extracapsular, trochanteric", description: "Intertrochanteric or pertrochanteric fracture, stable or unstable depending on comminution [r5].", prognosis: "Sliding hip screw or intramedullary nail; union usual" },
      { grade: "Extracapsular, subtrochanteric", description: "Fracture just below the lesser trochanter.", prognosis: "Intramedullary nail; higher implant stresses and slower recovery" }
    ]
  },

  timeframes: {
    summary: "Bone union in fixed fractures follows normal phases but is slower in osteoporotic bone. Functional recovery is the main concern: most mobility gains occur in the first 3–6 months, and many people do not regain their pre-fracture level [r8,r9].",
    healing: [
      { phase: "Haematoma and inflammation", startDay: 0, endDay: 7, description: "Post-operative pain, swelling and systemic stress response; delirium risk highest" },
      { phase: "Soft callus", startDay: 7, endDay: 28, description: "Early repair; walking with a frame, increasing independence" },
      { phase: "Hard callus", startDay: 28, endDay: 90, description: "Bony bridging; progressive resistance and balance training" },
      { phase: "Remodelling", startDay: 90, endDay: 365, description: "Bone remodels; functional recovery plateaus over 6–12 months" }
    ],
    milestones: [
      { label: "Surgery", day: 1, note: "Within 24–48 h of admission [r4]" },
      { label: "First mobilisation out of bed", day: 2, note: "Within 36 h of surgery [r6]" },
      { label: "Hospital discharge or transfer to rehabilitation", day: 11, note: "Mean stay about 10.7 days in one registry meta-analysis [r5]" },
      { label: "Walking indoors with a stick or without an aid", day: 56, note: "Typical clinical range 6–12 weeks if previously independent" },
      { label: "Functional recovery plateau", day: 270, note: "Typical clinical range 6–12 months" }
    ],
    returnToSport: "Not a sport injury. The aim is return to pre-fracture mobility, home and activities; many older adults resume walking groups, bowls or golf at 4–12 months, guided by strength, balance and falls risk."
  },

  clinicalPresentation: {
    symptoms: [
      "Fall from standing height, often sideways, followed by groin, hip or thigh pain [r3,r4]",
      "Inability to stand or bear weight on the affected leg [r4]",
      "Occasionally able to walk with pain (impacted or undisplaced fractures), so ambulation does not exclude fracture",
      "Pain referred to the knee in some patients",
      "Confusion or reduced conscious level (delirium, or the cause of the fall)"
    ],
    signs: [
      "Shortened and externally rotated leg (displaced fractures) [r4]",
      "Pain on any hip movement, especially log roll and axial loading",
      "Bruising or haematoma over the greater trochanter [r3]",
      "Unable to perform an active straight-leg raise",
      "Signs of a long lie: pressure areas, dehydration, hypothermia"
    ]
  },

  assessment: {
    subjective: [
      "Fall details: direction, cause (trip, dizziness, syncope, chest pain, weakness), witnessed or not, time on the floor",
      "Pre-fracture mobility, aids, falls history, home set-up, stairs and support [r9]",
      "Cognition and delirium screen (e.g. 4AT); history of dementia [r5]",
      "Medications affecting falls and bone (sedatives, antihypertensives, corticosteroids, osteoporosis treatment) [r4]",
      "Comorbidities: cardiac, respiratory, renal, diabetes, malignancy (pathological fracture)",
      "Patient and family goals, including discharge destination"
    ],
    observation: ["Pre-operatively: shortened, externally rotated limb [r4]", "Post-operatively: wound, drain, swelling, skin integrity and pressure areas", "Gait with an aid: weight-bearing pattern, Trendelenburg sign, step length"],
    palpation: ["Greater trochanter haematoma and tenderness [r3]", "Calf tenderness and swelling (DVT screen)", "Pressure areas over heels and sacrum"],
    rangeOfMotion: ["Do not test passive hip range before surgery", "Post-operatively: active-assisted hip flexion, abduction and extension within comfort and any surgeon restrictions", "Knee and ankle range to prevent contractures"],
    strength: ["Ability to perform active straight-leg raise and bridge", "Sit-to-stand capacity (arms or no arms)", "Hip abductor strength in standing (Trendelenburg) once mobile"],
    neuro: ["Screen femoral and sciatic nerve function after surgery and regional blocks", "Sensation and proprioception (peripheral neuropathy increases falls risk)"],
    functional: [
      "Cumulated Ambulation Score: getting in and out of bed, sit-to-stand, walking (daily in the first 3 days)",
      "Timed Up and Go and gait speed",
      "Short Physical Performance Battery or 30 s sit-to-stand",
      "Stair assessment before discharge"
    ],
    specialTests: [
      { name: "Active straight-leg raise", purpose: "Screen for hip fracture when radiographs are pending or equivocal", procedure: "Patient supine. Ask them to lift the straight leg off the bed.", positive: "Inability to lift the leg or severe groin pain suggests fracture; image before mobilising.", refs: [] },
      { name: "Log roll", purpose: "Low-load test for intra-articular or femoral neck pathology", procedure: "Gently roll the extended leg into internal and external rotation.", positive: "Groin pain or guarding.", refs: [] },
      { name: "4AT delirium screen", purpose: "Rapid screen for delirium, the commonest post-operative complication [r5]", procedure: "Assess alertness, orientation (AMT4), attention (months backwards) and acute change or fluctuating course.", positive: "Score ≥4 suggests possible delirium; inform the medical team.", refs: [] }
    ],
    clinicalRules: [],
    outcomeMeasures: [
      { name: "Cumulated Ambulation Score (CAS)", use: "Basic mobility in the first post-operative days" },
      { name: "New Mobility Score / Parker Mobility Score", use: "Pre-fracture and post-fracture mobility; reduced by weight-bearing restrictions [r7]" },
      { name: "Timed Up and Go and gait speed", use: "Mobility and falls risk during rehabilitation [r9]" },
      { name: "Six-minute walk test", use: "Walking endurance; improved by resistance training after discharge [r9]" },
      { name: "Short Physical Performance Battery", use: "Lower-limb function (balance, gait speed, chair stands)" }
    ],
    imaging: [
      { modality: "Plain radiographs (AP pelvis and lateral hip)", indication: "All suspected hip fractures [r4]", findings: "Fracture location (intracapsular vs extracapsular), displacement and comminution" },
      { modality: "MRI", indication: "Persisting clinical suspicion with normal radiographs [r4]", findings: "Occult femoral neck or trochanteric fracture, pubic rami or sacral insufficiency fractures" },
      { modality: "CT", indication: "When MRI is unavailable or contraindicated, or for pre-operative planning", findings: "Fracture detail and comminution" }
    ]
  },

  differentials: [
    { name: "Pubic ramus fracture", id: "pubic-ramus-stress-fracture", distinguishing: "Groin pain after a fall but usually able to bear some weight; tenderness over the pubic ramus; radiographs or MRI show a ramus fracture." },
    { name: "Sacral insufficiency fracture", id: "sacral-stress-fracture", distinguishing: "Low back or buttock pain in an osteoporotic adult, often without major trauma; MRI or CT confirms." },
    { name: "Greater trochanter contusion / gluteal tendinopathy", id: "gluteal-tendinopathy", distinguishing: "Lateral hip pain and trochanteric tenderness with preserved ability to bear weight and pain-free log roll. Image if in doubt." },
    { name: "Femoral neck stress or insufficiency fracture", id: "femoral-neck-stress-fracture", distinguishing: "Gradual groin pain without a significant fall; MRI shows an incomplete fracture line." },
    { name: "Osteoporotic vertebral fracture with referred pain", id: "osteoporotic-vertebral-fracture", distinguishing: "Back pain dominant, spinal tenderness; hip examination is pain-free." },
    { name: "Acetabular fracture or flare of hip osteoarthritis", distinguishing: "Acetabular fractures appear on pelvic imaging; an osteoarthritis flare has a chronic history and no fracture on imaging." }
  ],
  redFlags: [
    "An older adult who cannot bear weight after a fall: treat as a hip fracture until imaging excludes it. Arrange emergency transfer; MRI if radiographs are normal and suspicion persists [r4].",
    "A fall caused by syncope, chest pain, new weakness or confusion: the cause (arrhythmia, myocardial infarction, stroke, infection) needs urgent medical assessment.",
    "New or fluctuating confusion after surgery: suspect delirium. Inform the medical team, look for causes (infection, pain, retention, drugs, dehydration).",
    "Calf swelling, chest pain, breathlessness or tachycardia after surgery: suspect DVT or PE and escalate immediately.",
    "Sudden severe hip pain with shortening and rotation after arthroplasty: suspect prosthetic dislocation. Stop mobilising and arrange urgent review.",
    "A long lie on the floor: check for pressure injuries, dehydration, hypothermia and rhabdomyolysis (dark urine)."
  ],

  management: {
    principles: "Hip fracture care is multidisciplinary and time-critical. Patients should have surgery within 24–48 hours, with analgesia (including regional nerve blocks), fluid and delirium management, VTE prophylaxis and antibiotic prophylaxis [r4]. Orthogeriatric, multidisciplinary rehabilitation reduces the combined risk of death or deterioration in residential status (RR 0.88; 25 patients treated to avoid one poor outcome) [r8].\n\nThe physiotherapist mobilises the patient as soon as possible, ideally the day of or day after surgery and within 36 hours [r6], with weight-bearing as tolerated because restrictions reduce mobility without reducing load through the limb [r7]. In hospital and after discharge, structured programs of gait, balance and functional training, with progressive resistance training, improve mobility [r9,r10]. Every patient needs secondary prevention: osteoporosis treatment, a falls risk assessment and exercise [r11]. Discuss goals early and honestly with patients and families; recovery is often incomplete.",
    medical: [
      { name: "Early surgery (within 24–48 h)", description: "Internal fixation for undisplaced intracapsular fractures; hemiarthroplasty or total hip arthroplasty for displaced intracapsular fractures; sliding hip screw or intramedullary nail for extracapsular fractures [r4].", evidence: "moderate", recommendation: "recommended", refs: ["r4"] },
      { name: "Analgesia including regional nerve block", description: "Fascia iliaca or femoral nerve block plus multimodal analgesia limits opioid use and helps prevent delirium [r4].", evidence: "moderate", recommendation: "recommended", refs: ["r4"] },
      { name: "VTE and antibiotic prophylaxis; delirium prevention", description: "Standard peri-operative bundle: thromboprophylaxis, antistaphylococcal antibiotics, and multicomponent delirium prevention [r4].", evidence: "moderate", recommendation: "recommended", refs: ["r4"] },
      { name: "Orthogeriatric multidisciplinary care", description: "Rehabilitation led by a geriatrician or rehabilitation physician with a multidisciplinary team reduced death or deterioration in residential status at 6–12 months (RR 0.88, 95% CI 0.80–0.98) [r8].", evidence: "moderate", recommendation: "recommended", refs: ["r8"] },
      { name: "Osteoporosis treatment after hip fracture", description: "Annual intravenous zoledronic acid started within 90 days of surgery reduced new clinical fractures by 35% and all-cause deaths by 28% [r11]. Treatment rates vary widely internationally [r1].", evidence: "strong", recommendation: "recommended", refs: ["r11", "r1"] },
      { name: "Non-operative management", description: "Reserved for patients too unwell for anaesthesia or at the end of life; associated with worse pain and mobility [r4].", evidence: "limited", recommendation: "consider", refs: ["r4"] }
    ],
    physio: [
      { name: "Mobilisation within 36 h of surgery", description: "Sit out of bed and stand or walk with an aid on the day of or day after surgery. Early mobilisation was associated with twice the adjusted odds of discharge by 30 days (OR 2.08, 95% CI 2.00–2.16) in 135,105 patients [r6].", evidence: "moderate", recommendation: "recommended", refs: ["r6"] },
      { name: "Weight-bearing as tolerated", description: "Older adults cannot reliably limit load: patients told to partial weight-bear walked more slowly and had lower mobility scores without any difference in actual limb load [r7].", evidence: "limited", recommendation: "recommended", refs: ["r7"] },
      { name: "In-hospital gait, balance and functional training", description: "Mobility strategies in hospital may moderately improve mobility (SMD 0.53); gait, balance and functional training probably improve mobility (SMD 0.57) [r9].", evidence: "moderate", recommendation: "recommended", refs: ["r9"] },
      { name: "Post-hospital structured exercise with progressive resistance training", description: "After discharge, mobility programs improve mobility (SMD 0.32) and walking speed with high-certainty evidence; resistance training increased 6-minute walk distance by about 56 m, and multicomponent programs had the largest effect [r9]. Programs including progressive resistance exercise were more effective in meta-regression [r10].", evidence: "strong", recommendation: "recommended", refs: ["r9", "r10"] },
      { name: "Hip protectors in residential care", description: "Reduce hip fracture risk slightly in nursing or residential care (RR 0.82, 95% CI 0.67–1.00), but not in community-dwelling people; adherence is poor [r12].", evidence: "moderate", recommendation: "consider", refs: ["r12"] },
      { name: "Restricted weight-bearing or delayed mobilisation", description: "Bed rest and weight-bearing restrictions reduce mobility and delay discharge in older adults [r6,r7].", evidence: "moderate", recommendation: "not-recommended", refs: ["r6", "r7"] },
      { name: "Hip protectors for community-dwelling older adults", description: "Little or no effect on hip fracture risk in the community (RR 1.15, 95% CI 0.84–1.58) [r12].", evidence: "moderate", recommendation: "not-recommended", refs: ["r12"] }
    ],
    education: [
      "Getting up and walking soon after surgery is safe and speeds recovery. The repair or new joint is designed to take your weight.",
      "Recovery takes months. Most improvement happens in the first 3–6 months, and continuing exercise after you go home makes a real difference.",
      "Strength and balance exercises reduce the chance of another fall. Keep doing them long term.",
      "Bone-strengthening medicine after a hip fracture reduces the risk of another fracture; ask your doctor about it.",
      "Tell staff or family if you feel muddled, very drowsy or unusually confused, or notice calf swelling or breathlessness."
    ]
  },

  rehab: {
    overview: "Start on day 0–1 after surgery, with weight-bearing as tolerated unless the surgeon specifies otherwise [r6,r7]. Progression depends on medical stability, cognition, pain and mobility milestones rather than time. Combine gait, balance and functional training in hospital with progressive resistance training after discharge [r9,r10]. Follow any approach-specific arthroplasty precautions set by the surgeon. Involve family and carers, and plan secondary falls and fracture prevention from the start.",
    stages: [
      {
        name: "Get up & moving",
        timeframe: "Days 0–5 (acute ward)",
        goals: ["Sit out of bed and stand within 36 h of surgery [r6]", "Walk short distances with a frame", "Independent bed mobility and transfers where possible", "Prevent delirium, pressure injury and chest infection"],
        precautions: ["Check observations, haemoglobin and delirium status before each session", "Respect arthroplasty precautions if the surgeon specifies them", "Watch for orthostatic hypotension on first standing"],
        exercises: [
          { name: "Ankle pumps and quadriceps sets", dosage: "10 reps each, hourly while awake", cues: "Push the knee down and pull the toes up", figure: { pose: "ex-quad-set", view: "lateral", props: ["mat"] } },
          { name: "Supine heel slides", dosage: "2 × 10, 3×/day", figure: { pose: "ex-heel-slide", view: "lateral", props: ["mat"] } },
          { name: "Sit-to-stand from a raised chair", dosage: "3–5 reps, 3×/day, with assistance as needed", cues: "Nose over toes, push through both legs", figure: { pose: "sit", view: "lateral", props: ["chair"] } },
          { name: "Walking with a frame", dosage: "Short walks 3–4×/day, increasing distance", cues: "Frame, operated leg, then the other leg", figure: { pose: "walk-heel-strike", view: "lateral" } },
          { name: "Deep breathing and supported coughing", dosage: "5 breaths, hourly" }
        ],
        progressionCriteria: ["Transfers with supervision or independently", "Walks 10–20 m with a frame", "Medically stable and delirium settling", "Pain controlled enough to exercise"]
      },
      {
        name: "Restore walking & independence",
        timeframe: "Weeks 1–6 (ward, rehab unit or home)",
        goals: ["Walk household distances with the least restrictive aid", "Independent sit-to-stand and toileting", "Safe stairs if needed at home", "Begin standing balance work"],
        precautions: ["Supervise balance work closely", "Monitor wound, swelling and pain"],
        exercises: [
          { name: "Repeated sit-to-stand (lowering chair height over time)", dosage: "3 × 5–10, daily", figure: { pose: "ex-squat", view: "lateral", props: ["chair"] } },
          { name: "Standing hip abduction with support", dosage: "2–3 × 10 each side", cues: "Hold the bench or frame; keep the trunk upright", figure: { pose: "ex-hip-abduction-standing", view: "anterior", props: ["bench"] } },
          { name: "Standing calf raises with support", dosage: "2–3 × 10–15", figure: { pose: "ex-calf-raise", view: "lateral" } },
          { name: "Step-ups onto a low step", dosage: "2–3 × 8–10 each leg", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Supported standing balance (narrowing base, head turns)", dosage: "3 × 30 s", figure: { pose: "ex-single-leg-balance", view: "anterior" } },
          { name: "Walking program", dosage: "Progress time and distance daily", cues: "Progress frame → stick as safe" }
        ],
        progressionCriteria: ["Independent household walking with an aid", "Independent sit-to-stand", "Timed Up and Go improving week to week", "Safe on stairs if needed"]
      },
      {
        name: "Strength & balance training",
        timeframe: "Weeks 6–16",
        goals: ["Progressive resistance training of hip and knee extensors and abductors [r10]", "Challenging balance training", "Community walking and outdoor confidence"],
        precautions: ["Progress load gradually (moderate to high intensity as tolerated)", "Adapt for cognitive impairment with simple, supervised routines"],
        exercises: [
          { name: "Loaded sit-to-stand or squat", dosage: "3 × 8–12 at a weight that is hard by the last reps, 2–3×/week", figure: { pose: "ex-squat", view: "lateral", props: ["dumbbell"] } },
          { name: "Bridging", dosage: "3 × 10–12", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Step-ups with load", dosage: "3 × 8–10 each leg", figure: { pose: "ex-step-up", view: "lateral", props: ["step", "dumbbell"] } },
          { name: "Seated knee extension with ankle weight", dosage: "3 × 10–12", figure: { pose: "ex-knee-extension", view: "lateral", props: ["chair"] } },
          { name: "Dynamic balance (tandem walking, stepping, turning)", dosage: "10–15 min, 3×/week" }
        ],
        progressionCriteria: ["Walks outdoors with or without a stick", "Rises from a standard chair without using arms", "Gait speed and SPPB improving", "Confidence to resume community activities"]
      },
      {
        name: "Long-term strength, activity & falls prevention",
        timeframe: "Months 4–12 and beyond",
        goals: ["Maintain strength and balance gains", "Return to valued community activities", "Prevent further falls and fractures [r11]"],
        precautions: ["Review home hazards, footwear, vision and medications", "Ensure osteoporosis treatment is in place"],
        exercises: [
          { name: "Ongoing strength and balance program (home, group or community)", dosage: "2–3×/week, progressing challenge" },
          { name: "Farmer carry or shopping-bag carry", dosage: "3 × 20–30 m", figure: { pose: "ex-farmer-carry", view: "lateral", props: ["kettlebell"] } },
          { name: "Regular walking", dosage: "Most days, building to 30 min" }
        ],
        progressionCriteria: ["Back to pre-fracture mobility where possible", "No further falls or a falls plan in place", "Independent with a long-term exercise routine"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Walking at or near pre-fracture level, indoors and outdoors",
      "Rising from a chair without arms and managing stairs safely",
      "Falls risk assessed and addressed (exercise, home hazards, medications, vision)",
      "Osteoporosis treatment reviewed or started [r11]",
      "Confidence and goals agreed with the patient and family"
    ],
    tests: ["Timed Up and Go", "Gait speed", "Short Physical Performance Battery", "Six-minute walk test"]
  },
  prognosis: "Hip fracture carries high mortality: older adults have a 5–8-fold higher risk of death in the first 3 months, and excess mortality persists for years [r2]. One-year mortality ranges from about 14% to 28% internationally [r1] and was 18% in pooled Spanish registries [r5]. Many survivors lose mobility or move to higher-level care; multidisciplinary rehabilitation reduces this risk [r8], and structured exercise improves mobility after discharge [r9,r10]. A first hip fracture signals high risk of further fractures; zoledronic acid after hip fracture reduced new clinical fractures by 35% and deaths by 28% [r11].",
  prevention: [
    "Strength and balance exercise programs reduce falls in older adults; continue them after a fracture [r9,r10].",
    "Treat osteoporosis after any fragility fracture; bisphosphonates reduce further fractures and mortality after hip fracture [r11].",
    "Hip protectors reduce hip fractures in residential care but not in community-dwelling people, and adherence is poor [r12].",
    "Review medications that increase falls risk, correct vision, and address home hazards and footwear [r4].",
    "Most hip fractures follow a sideways fall onto the trochanter, so falls prevention is fracture prevention [r3]."
  ],
  clinicalPearls: [
    "Get them up. Mobilisation within 36 h is one of the most powerful things a physio can do after hip fracture [r6].",
    "Do not prescribe partial weight-bearing for older adults; they cannot comply and it only slows them down [r7].",
    "Screen for delirium every session. A suddenly 'uncooperative' patient may be delirious, not unmotivated [r5].",
    "Ask why they fell. Treat the cause (dizziness, syncope, weakness, medications), not just the fracture.",
    "Rehabilitation does not end at discharge. Progressive resistance training in the community produces some of the largest gains [r9,r10].",
    "Check that bone health medication has been started before the patient leaves your care [r11]."
  ],
  related: ["femoral-neck-stress-fracture", "osteoporotic-vertebral-fracture", "pubic-ramus-stress-fracture", "traumatic-hip-dislocation", "sacral-stress-fracture"],

  references: [
    { id: "r1", citation: "Sing CW, Lin TC, Bartholomew S, et al. Global epidemiology of hip fractures: secular trends in incidence rate, post-fracture treatment, and all-cause mortality. J Bone Miner Res. 2023;38(8):1064-75.", pmid: "37118993", doi: "10.1002/jbmr.4821", type: "cohort", year: 2023 },
    { id: "r2", citation: "Haentjens P, Magaziner J, Colón-Emeric CS, et al. Meta-analysis: excess mortality after hip fracture among older women and men. Ann Intern Med. 2010;152(6):380-90.", pmid: "20231569", doi: "10.7326/0003-4819-152-6-201003160-00008", type: "meta-analysis", year: 2010 },
    { id: "r3", citation: "Parkkari J, Kannus P, Palvanen M, et al. Majority of hip fractures occur as a result of a fall and impact on the greater trochanter of the femur: a prospective controlled hip fracture study with 206 consecutive patients. Calcif Tissue Int. 1999;65(3):183-7.", pmid: "10441647", doi: "10.1007/s002239900679", type: "case-control", year: 1999 },
    { id: "r4", citation: "Schroeder JD, Turner SP, Buck E. Hip fractures: diagnosis and management. Am Fam Physician. 2022;106(6):675-83.", pmid: "36521464", type: "narrative-review", year: 2022 },
    { id: "r5", citation: "Núñez JH, Moreira F, Surroca M, et al. Hip fractures in Spain. How are we? Systematic review and meta-analysis of the published registries. Rev Esp Cir Ortop Traumatol. 2025;69(3):303-17.", pmid: "39419269", doi: "10.1016/j.recot.2024.09.010", type: "meta-analysis", year: 2025 },
    { id: "r6", citation: "Sheehan KJ, Goubar A, Almilaji O, et al. Discharge after hip fracture surgery by mobilisation timing: secondary analysis of the UK National Hip Fracture Database. Age Ageing. 2021;50(2):415-22.", pmid: "33098414", doi: "10.1093/ageing/afaa204", type: "cohort", year: 2021 },
    { id: "r7", citation: "Pfeufer D, Zeller A, Mehaffey S, et al. Weight-bearing restrictions reduce postoperative mobility in elderly hip fracture patients. Arch Orthop Trauma Surg. 2019;139(9):1253-9.", pmid: "31053870", doi: "10.1007/s00402-019-03193-9", type: "cohort", year: 2019 },
    { id: "r8", citation: "Handoll HH, Cameron ID, Mak JC, et al. Multidisciplinary rehabilitation for older people with hip fractures. Cochrane Database Syst Rev. 2021;11(11):CD007125.", pmid: "34766330", doi: "10.1002/14651858.CD007125.pub3", type: "systematic-review", year: 2021 },
    { id: "r9", citation: "Fairhall NJ, Dyer SM, Mak JC, et al. Interventions for improving mobility after hip fracture surgery in adults. Cochrane Database Syst Rev. 2022;9(9):CD001704.", pmid: "36070134", doi: "10.1002/14651858.CD001704.pub5", type: "systematic-review", year: 2022 },
    { id: "r10", citation: "Diong J, Allen N, Sherrington C. Structured exercise improves mobility after hip fracture: a meta-analysis with meta-regression. Br J Sports Med. 2016;50(6):346-55.", pmid: "26036676", doi: "10.1136/bjsports-2014-094465", type: "meta-analysis", year: 2016 },
    { id: "r11", citation: "Lyles KW, Colón-Emeric CS, Magaziner JS, et al. Zoledronic acid and clinical fractures and mortality after hip fracture. N Engl J Med. 2007;357(18):1799-809.", pmid: "17878149", doi: "10.1056/NEJMoa074941", type: "rct", year: 2007 },
    { id: "r12", citation: "Santesso N, Carrasco-Labra A, Brignardello-Petersen R. Hip protectors for preventing hip fractures in older people. Cochrane Database Syst Rev. 2014;(3):CD001255.", pmid: "24687239", doi: "10.1002/14651858.CD001255.pub5", type: "systematic-review", year: 2014 }
  ],

  animation: {
    title: "How a fragility hip fracture happens",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "anterior", environment: "home",
        actors: [{ id: "patient", kit: "older-adult" }],
        keyframes: [
          { t: 0, pose: "stand", root: { x: 0 } },
          { t: 1.2, pose: "stand", joints: { trunk: 8, hipR: 4, shoulderL: 30 }, root: { x: -4, roll: 6 } },
          { t: 2.2, pose: "fall-sideways", root: { x: -20, roll: 40, lift: -30, grounded: false }, ease: "in" },
          { t: 2.9, pose: "fall-sideways", root: { x: -40, roll: 85, lift: -78, grounded: false }, ease: "in" },
          { t: 4.2, pose: "fall-sideways", root: { x: -42, roll: 88, lift: -80, grounded: false } },
          { t: 5.8, pose: "fall-sideways", joints: { hipR: -6 }, root: { x: -42, roll: 88, lift: -80, grounded: false } }
        ],
        forces: [
          { t: [2.6, 4.2], at: "hipR", dir: "medial", label: "Impact on greater trochanter" }
        ],
        highlights: [{ t: [2.8, 6], at: "hipR" }],
        impacts: [{ t: 2.9, at: "hipR" }],
        slowmo: [{ t: [2.0, 3.4], rate: 0.35 }],
        captions: [
          { t: 0, text: "An 84-year-old woman with osteoporosis turns quickly in her kitchen." },
          { t: 1.2, text: "She loses balance; slowed protective reactions mean she cannot step to recover." },
          { t: 2.2, text: "She falls directly sideways and does not break the fall with her hand." },
          { t: 2.9, text: "The greater trochanter strikes the floor with little padding to absorb the impact." },
          { t: 4.2, text: "She cannot get up. The right leg lies shortened and turned outwards." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "hipR",
        captions: [{ t: 0, text: "Zooming into the right proximal femur." }]
      },
      {
        type: "closeup", label: "Proximal femur", duration: 10, scene: "hip-anterior",
        actions: [
          { t: 0, do: "highlight", target: "femur" },
          { t: 0.2, do: "fade", target: "iliopsoas", to: 0.3 },
          { t: 0.2, do: "fade", target: "rectusFemoris", to: 0.2 },
          { t: 0.2, do: "fade", target: "sartorius", to: 0.2 },
          { t: 0.4, do: "label", target: "femur", text: "Osteoporotic proximal femur" },
          { t: 1.0, do: "arrow", at: "greaterTrochanter", dir: "medial", label: "Sideways impact", size: "l" },
          { t: 1.8, do: "impact", at: "greaterTrochanter" },
          { t: 2.2, do: "fracture", target: "femur", pattern: "oblique", at: "subcapital", displaced: true },
          { t: 2.2, do: "impact", at: "subcapital" },
          { t: 2.8, do: "label", target: "femoralHead", text: "Displaced intracapsular fracture" },
          { t: 3.8, do: "spasm", target: "iliopsoas" },
          { t: 4.0, do: "move", target: "femur", dir: "superior", amount: 0.12 },
          { t: 4.4, do: "label", target: "iliopsoas", text: "Muscle pull shortens the limb" },
          { t: 5.4, do: "bleed", target: "jointSpace" },
          { t: 6.2, do: "pain", at: "subcapital" },
          { t: 7.0, do: "camera", at: "subcapital", zoom: 1.6, dur: 1 },
          { t: 9.2, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "Thin cortex and sparse trabeculae make the ageing femoral neck fragile." },
          { t: 1.0, text: "In a sideways fall, impact on the greater trochanter drives force into the neck." },
          { t: 2.2, text: "The neck fails just below the head: a displaced intracapsular fracture." },
          { t: 3.8, text: "Muscle spasm pulls the shaft upwards, so the leg shortens and rotates outwards." },
          { t: 5.4, text: "Bleeding fills the capsule; the vessels to the femoral head may be torn." },
          { t: 7.0, text: "Displaced neck fractures are usually replaced (hemiarthroplasty); trochanteric ones are fixed." }
        ]
      },
      {
        type: "micro", label: "Bone healing", duration: 9, tissue: "bone-fracture",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.2, stage: "fracture" }, { t: 2.4, stage: "haematoma" },
          { t: 3.6, stage: "inflammation" }, { t: 5.0, stage: "soft-callus" }, { t: 6.4, stage: "hard-callus" }, { t: 7.8, stage: "remodelling" }
        ],
        timeLabels: [{ t: 2.4, text: "Hours" }, { t: 3.6, text: "Days 0–7" }, { t: 5.0, text: "Weeks 1–4" }, { t: 6.4, text: "Weeks 4–12" }, { t: 7.8, text: "Months 3–12+" }],
        captions: [
          { t: 0, text: "Osteoporotic bone: thinner cortex and fewer, more widely spaced trabeculae." },
          { t: 1.2, text: "The trabecular network fails under the impact load." },
          { t: 2.4, text: "A fracture haematoma forms around the broken ends." },
          { t: 3.6, text: "Inflammatory cells clear debris and release growth factors." },
          { t: 5.0, text: "In fixed fractures, soft callus bridges the gap." },
          { t: 6.4, text: "Callus mineralises into woven bone; union is slower in osteoporotic bone." },
          { t: 7.8, text: "Remodelling restores lamellar bone. Treating osteoporosis protects the rest of the skeleton." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL1" }
};
