// Proximal hamstring tendon avulsion — LL3 (Component 3, lower-limb content).
export default {
  id: "proximal-hamstring-avulsion",
  name: "Proximal hamstring tendon avulsion",
  shortName: "Proximal hamstring avulsion",
  aka: ["proximal hamstring rupture", "hamstring origin avulsion", "ischial hamstring avulsion", "torn hamstring off the bone", "complete hamstring tear", "conjoint tendon avulsion"],
  region: "thigh",
  tissues: ["tendon", "muscle", "nerve"],
  onset: "acute",
  mechanismType: ["non-contact", "fall", "traction"],
  populations: ["middle-aged recreational athletes", "middle-aged and older women injured during daily activities", "water-skiers", "football-code and sprint athletes"],
  sports: ["water skiing", "soccer", "rugby", "australian football", "sprinting", "dance", "skiing", "martial arts"],
  urgency: "urgent",
  summary: "Detachment of one or more hamstring tendons from the ischial tuberosity, usually from forced hip flexion with the knee extended, such as a slip into the splits or a water-skiing fall.",
  keyFacts: [
    { label: "Peak age", value: "Mean 49 years; 56% aged 45–59 in a surgical series" },
    { label: "Mechanism", value: "Forced hip flexion with the knee extended against an eccentric hamstring contraction" },
    { label: "Imaging", value: "MRI: number of tendons involved, retraction distance and sciatic nerve relationship" },
    { label: "Key test", value: "Ischial tenderness, palpable gap with the knee flexed, marked knee flexion weakness" },
    { label: "Return to sport", value: "93.8% after repair, mean 5.7 months" },
    { label: "Treatment", value: "Shared decision: repair or structured non-operative rehab (non-inferior in 30–70-year-olds)" }
  ],
  overview: "A proximal hamstring avulsion is a tear of the hamstring tendons from the ischial tuberosity rather than within the muscle. It is uncommon but often missed, and in one surgical series the mean time from injury to operation was 12 months [r1]. Most patients are middle-aged. Men are more often injured in sport and women in everyday activities [r2].\n\nDistinguishing avulsions from the far more common intramuscular strains matters because management differs [r1,r3]. Repair is indicated when there is tendon gapping or loss of tension, symptomatic bony displacement, or a free-tendon injury that fails non-operative care [r3]. A randomised trial in people aged 30–70 years, however, found non-operative treatment non-inferior to surgery for patient-reported function at 2 years [r4]. The physiotherapist identifies the injury early, supports shared decision-making and leads a staged, tendon-protective rehabilitation.",

  epidemiology: {
    text: "Proximal avulsions are rare compared with intramuscular hamstring strains. In 263 surgically treated complete avulsions, 53% of patients were male, the mean age was 49 ± 13 years and 56% were aged 45–59 years [r2]. Most injuries (52%) occurred during sport, and 66% were complete avulsions with more than 2 cm retraction (Wood type 5). Women were older and more often injured during activities of daily living, while men were younger and injured in sport [r2]. In an earlier series of 72 repairs, water-skiing was the most frequent cause (21 cases), complete avulsions had a mean retraction of 7 cm, and the mean time from injury to operation was 12 months [r1]. In a later series of 227 operations the mean time to surgery was 5.7 weeks [r5]. No prospective risk-factor studies for avulsion were identified, so the factors listed without a citation are clinical reasoning.",
    riskFactors: {
      intrinsic: [
        "Middle age (most injuries at 45–59 years) [r2]",
        "Age-related tendon degeneration at the ischial footprint (proposed)",
        "Previous hamstring strain or proximal hamstring tendinopathy (proposed)",
        "Low eccentric hamstring strength (proposed, modifiable)"
      ],
      extrinsic: [
        "Water-skiing, the most frequent cause in one surgical series [r1]",
        "Slips and falls during everyday activities, especially in women, who were more often injured during activities of daily living [r2]",
        "Activities that force the hip into flexion with the knee straight, such as dance and splits-type stretching, which produce stretch-type injuries of the proximal hamstring [r6]"
      ]
    }
  },

  mechanism: {
    summary: "The hamstrings are loaded eccentrically at their longest: the hip is forced into flexion while the knee stays extended. This happens when the leading foot slips forward, when a water-skier is pulled forward over straight legs (water-skiing was the most frequent cause in one series [r1]), or during an extreme splits-type stretch [r6]. Force concentrates at the tendon–bone junction and the conjoint tendon (biceps femoris long head and semitendinosus), often with semimembranosus, pulls off the ischial tuberosity. The tendons may then retract distally [r2].",
    sequence: [
      "The lead foot slips forward (on ice or a wet floor) or the trunk is pulled forward over straight legs, as in water-skiing.",
      "The hip is driven rapidly into flexion while the knee remains extended, placing all three biarticular hamstrings at maximal length.",
      "The hamstrings contract reflexively and eccentrically to resist the motion, so tension rises sharply.",
      "Load concentrates at the tendon–bone junction on the ischial tuberosity, the weakest point of the long, tensioned unit.",
      "One, two or all three tendons tear from the ischium, sometimes with a bony fragment in adolescents. The patient often feels a 'pop' or tearing sensation high in the buttock.",
      "The detached tendons retract distally (a mean of 7 cm in the complete avulsions of one series [r1]), and bleeding tracks down the posterior thigh over the following days.",
      "Haematoma and scar can tether or irritate the nearby sciatic nerve. In 263 surgically treated patients, 5% had sensory deficits referable to the nerve [r2]."
    ],
    variants: [
      { name: "Partial avulsion", description: "One or two tendons detach while the others remain attached. Non-operative care is tried first; surgery is considered if symptoms persist. In 64 repaired partial avulsions, all had failed non-operative care first [r7]." },
      { name: "Bony avulsion", description: "In skeletally immature athletes the ischial apophysis fails instead of the tendon (Wood type 1). Displaced fragments with symptoms may need fixation [r2,r3]." },
      { name: "Stretch-type free-tendon injury", description: "Slow extreme hip flexion (e.g. dance) injures the proximal semimembranosus free tendon without full avulsion. In 15 professional dancers the median time to pre-injury level was 50 weeks [r6]." }
    ]
  },

  anatomy: {
    text: "The hamstring footprint occupies the ischial tuberosity. The conjoint tendon of biceps femoris long head and semitendinosus arises from the inferomedial facet, and the broader semimembranosus tendon arises from a separate, more anterolateral footprint. The tendons run a few centimetres before the muscle bellies begin, so a complete avulsion lets the whole muscle group retract distally. The sciatic nerve lies only a short distance lateral to the tuberosity and runs alongside the proximal tendons, so haematoma, scar or surgery near the origin can irritate it. The sacrotuberous ligament blends with the conjoint tendon origin.",
    structures: [
      { name: "Conjoint tendon (BFlh and semitendinosus)", role: "Shared proximal attachment; usually avulses in complete injuries" },
      { name: "Semimembranosus tendon", role: "Separate, more lateral origin; may avulse alone (partial avulsion)" },
      { name: "Ischial tuberosity", role: "Bony footprint; avulsion fracture site in adolescents" },
      { name: "Sciatic nerve", role: "Runs lateral to the tuberosity; at risk from haematoma, scar and surgery" },
      { name: "Sacrotuberous ligament", role: "Blends with the conjoint tendon origin" },
      { name: "Gluteus maximus", role: "Covers the origin and shares hip extension; inferior border is the surgical landmark" }
    ]
  },

  pathophysiology: {
    tissueDamage: "Avulsion is a failure at the enthesis, where tendon collagen inserts into bone through a fibrocartilaginous transition zone. Under sudden eccentric overload this junction can fail, and one or more tendons peel off the ischial footprint (mechanistic reasoning). Once detached, the tendons lose tension and the muscle–tendon unit retracts distally. In 263 surgically treated cases, complete avulsion with retraction of more than 2 cm (Wood type 5) was the most common pattern, at 66% [r2].\n\nWithout reattachment the tendon end heals by scar to surrounding soft tissue at a lengthened position. This may explain the residual knee flexion weakness reported after non-operative treatment in some series (clinical reasoning; see the pooled strength data in [r8]). In one series, delay in repair made the operation more technically challenging and may have increased the likelihood of sciatic nerve involvement [r1]. After repair, tendon-to-bone healing proceeds through inflammation, fibrovascular proliferation and slow remodelling, so the repair site needs protection for several weeks.",
    structures: [
      { name: "Conjoint tendon and semimembranosus", effect: "Complete (all three tendons) or partial avulsion from the ischium; distal retraction [r2]" },
      { name: "Ischial tuberosity", effect: "Bony avulsion in younger patients (Wood type 1) [r2]" },
      { name: "Sciatic nerve", effect: "Irritation or tethering by haematoma and scar; sensory deficit in about 5% of surgically treated patients [r2]" },
      { name: "Hamstring muscle bellies", effect: "Haematoma along the posterior thigh; later atrophy and fatty change if retraction persists" },
    ],
    muscles: [
      { name: "Hamstrings", effect: "Large loss of knee flexion and hip extension strength. Strength recovered to a mean of 85% after repair versus 64% after non-operative care in pooled (low-quality) data [r8]." },
      { name: "Gluteus maximus", effect: "Compensates for lost hip extension; overload can cause buttock fatigue and pain" },
      { name: "Adductor magnus", effect: "Assists hip extension and may partly compensate" },
      { name: "Calf and quadriceps", effect: "Disuse during the protected phase, especially with bracing and crutches" }
    ],
    cellular: [
      { phase: "Haemorrhage & inflammation", timing: "0–7 days", description: "Bleeding from the torn enthesis and muscle; platelets, neutrophils and macrophages clear debris and release growth factors." },
      { phase: "Proliferation", timing: "1–6 weeks", description: "Fibroblasts lay down disorganised type III collagen and new vessels at the tendon–bone interface (or scar to surrounding tissue if not repaired). Repair strength is low." },
      { phase: "Early remodelling", timing: "6–12 weeks", description: "Collagen becomes more organised and shifts toward type I; progressive loading guides alignment." },
      { phase: "Maturation", timing: "3–12+ months", description: "Slow maturation of the tendon–bone junction; the fibrocartilage zones of the native enthesis are not fully restored (general tendon-bone healing principles). After repair, mean hamstring strength was 78–101% of the other side across studies [r9]." }
    ],
    systems: [
      { system: "Nervous system", effect: "Sciatic nerve irritation may cause buttock and posterior leg paraesthesia. Neural symptoms are similar after operative and non-operative care [r10]." },
      { system: "Vascular / haematological", effect: "Large haematoma tracks into the thigh. Reduced mobility and bracing raise the risk of venous thromboembolism." },
      { system: "Musculoskeletal chain", effect: "Loss of hamstring force changes gait, stair climbing and running; the gluteals and lumbopelvic muscles take on extra load." },
      { system: "Psychological", effect: "A long recovery and uncertainty about surgery affect mood and confidence. Shared decision-making and clear expectations are central." }
    ]
  },

  grading: {
    system: "Wood classification of proximal hamstring injuries",
    grades: [
      { grade: "Type 1", description: "Osseous (bony) avulsion of the ischial tuberosity [r2].", prognosis: "Younger patients; fixation if displaced and symptomatic [r3]" },
      { grade: "Type 2", description: "Tear at the musculotendinous junction [r2].", prognosis: "Usually managed without surgery" },
      { grade: "Type 3", description: "Incomplete (partial) avulsion from bone [r2].", prognosis: "Non-operative first; repair if symptoms persist [r7]" },
      { grade: "Type 4", description: "Complete avulsion with minimal retraction [r2].", prognosis: "Shared decision between repair and rehabilitation" },
      { grade: "Type 5", description: "Complete avulsion with retraction of more than 2 cm (the most common surgical pattern, 66%) [r2].", prognosis: "Repair often favoured in active patients; sciatic nerve involvement possible" }
    ]
  },

  timeframes: {
    summary: "Tendon-to-bone healing is slow. After repair, the repair is commonly protected for about 6 weeks (typical surgeon protocols; confirm locally), strength is rebuilt over months, and return to sport averaged 5.7 months in a systematic review [r11]. Non-operative recovery follows a similar staged approach without the post-operative restrictions.",
    healing: [
      { phase: "Haemorrhage & inflammation", startDay: 0, endDay: 7, description: "Bleeding, pain and inflammatory cell infiltrate" },
      { phase: "Proliferation (repair weak)", startDay: 7, endDay: 42, description: "Fibrovascular tissue at the tendon–bone interface; protect from combined hip flexion and knee extension" },
      { phase: "Early remodelling", startDay: 42, endDay: 90, description: "Collagen organisation; progressive loading begins" },
      { phase: "Maturation", startDay: 90, endDay: 365, description: "Slow strengthening of the enthesis; strength and endurance continue to improve" }
    ],
    milestones: [
      { label: "Full weight-bearing, normal gait", day: 42, note: "After repair, per surgeon protocol" },
      { label: "Progressive strengthening through range", day: 84 },
      { label: "Return to running", day: 120 },
      { label: "Return to sport after early repair (mean)", day: 146, note: "Mean 4.8 months when repaired within 1 month [r11]" },
      { label: "Return to sport after repair (overall mean)", day: 173, note: "Mean 5.7 months [r11]" }
    ],
    returnToSport: "After repair, 93.8% return to sport at a mean of 5.7 months, and 83.5% reach their pre-injury activity level [r11]. After partial avulsion repair, return averaged 11.1 months in one series [r7]. Return should be criteria-based on strength, running and sport-specific tolerance [r12]."
  },

  clinicalPresentation: {
    symptoms: [
      "Sudden sharp pain high in the buttock or posterior thigh, often with a 'pop' or tearing sensation, during a slip or forced hip flexion",
      "Difficulty walking and a feeling that the leg 'gives way' when the heel strikes",
      "Pain when sitting on the affected side",
      "Extensive bruising of the posterior thigh developing over 2–5 days",
      "Numbness or tingling down the back of the leg (sciatic irritation) in some patients"
    ],
    signs: [
      "Tenderness at the ischial tuberosity, sometimes with a palpable gap in prone with the knee flexed",
      "Large posterior thigh ecchymosis, often extending toward the knee",
      "Marked weakness of resisted knee flexion and hip extension",
      "Stiff-legged gait that avoids hip flexion with knee extension",
      "A palpable, retracted mass in the posterior thigh when the patient contracts the hamstrings"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism: forced hip flexion with the knee extended (slip, water-skiing, splits) suggests avulsion rather than strain [r1]",
      "'Pop' or tearing sensation at the ischial tuberosity and immediate loss of function",
      "Sitting pain and difficulty walking",
      "Neural symptoms: paraesthesia or weakness below the knee (sciatic involvement) [r2]",
      "Previous hamstring injury or tendinopathy; general health, anticoagulants and DVT risk",
      "Patient goals, activity level and preferences regarding surgery [r4]"
    ],
    observation: ["Extensive posterior thigh bruising", "Stiff-legged, short-stride gait", "Asymmetry of the gluteal fold or a distal bulge on contraction"],
    palpation: [
      "Ischial tuberosity and proximal tendons in prone, first with the knee extended and then flexed to 90°",
      "Feel for a gap or loss of tendon tension when the patient gently contracts the hamstrings",
      "Palpate along the posterior thigh for a retracted tendon end or haematoma"
    ],
    rangeOfMotion: [
      "Passive straight-leg raise (often painful and guarded; do not force)",
      "Hip and knee range compared with the other side"
    ],
    strength: [
      "Resisted knee flexion in prone at 15° and 90° (marked weakness and pain in complete avulsions)",
      "Resisted hip extension with the knee bent and straight",
      "Single-leg bridge on the heel (usually impossible early on)"
    ],
    neuro: [
      "Sensation, power and reflexes in the sciatic distribution (tibial and common peroneal divisions)",
      "Slump or SLR with neural sensitisers to identify sciatic mechanosensitivity"
    ],
    functional: ["Gait and stair negotiation", "Sit-to-stand and tolerance of sitting", "Later: single-leg bridge, running and hop tests"],
    specialTests: [
      { name: "Palpable gap / loss of tension test", purpose: "Detect tendon detachment", procedure: "Prone with the knee flexed to about 90°, palpate the ischial tuberosity and proximal tendons while the patient gently contracts the hamstrings, comparing sides.", positive: "Absent or reduced tendon tension, a palpable gap or a distally retracted tendon.", refs: [] },
      { name: "Bent-knee stretch test", purpose: "Provoke proximal hamstring pain", procedure: "Supine; flex the hip and knee maximally, then slowly extend the knee while keeping the hip flexed.", positive: "Reproduction of pain at the ischial tuberosity.", refs: [] },
      { name: "Resisted knee flexion (prone)", purpose: "Quantify weakness", procedure: "Prone, resist knee flexion at about 15° and 90° and compare sides, ideally with a dynamometer.", positive: "Marked weakness with pain at the ischium; a large deficit suggests multiple-tendon involvement.", refs: [] }
    ],
    clinicalRules: [
      { name: "Surgical indications (London consensus)", description: "Consensus supported surgery for gapping at the tendinous injury (87.2% agreement) or loss of tension (70.7%), symptomatic displaced bony avulsions (72.8%) and free-tendon injuries with functional compromise refractory to non-operative care (72.2%) [r3]." }
    ],
    outcomeMeasures: [
      { name: "Perth Hamstring Assessment Tool (PHAT)", use: "Hamstring-specific patient-reported function; primary outcome in the PHACT trial [r4]" },
      { name: "Lower Extremity Functional Scale (LEFS)", use: "General lower-limb function [r4,r8]" },
      { name: "Knee flexor strength limb symmetry (dynamometry)", use: "Recovery of strength after repair or rehab [r8]" }
    ],
    imaging: [
      { modality: "MRI", indication: "Any suspected avulsion: ischial tenderness, extensive bruising, weakness or a forced hip-flexion mechanism. Do not delay; early repair is technically easier [r1]", findings: "Number of tendons detached, retraction distance (more than 2 cm = Wood type 5), haematoma and the relationship of scar or haematoma to the sciatic nerve [r2]. MRI can overestimate retraction: in 81 surgically treated patients it averaged 10.05 cm on MRI versus 7.9 cm at surgery. A 'Cobra sign' (a wavy, curved T2-hypointense band with the free end folded distally) had sensitivity 51.5% and specificity 83.3% for isolated semimembranosus avulsion and flags overestimated retraction (about 21%) [r13]. Radiologists and surgeons use different landmarks to measure the gap, most often the conjoint tendon origin, and the broad ischial tuberosity adds variability [r14]." },
      { modality: "Plain radiograph", indication: "Adolescents and young adults, or suspected bony avulsion", findings: "Ischial tuberosity fragment and its displacement (Wood type 1)" },
      { modality: "Ultrasound", indication: "Rapid screening when MRI is delayed", findings: "Tendon discontinuity and haematoma; less reliable for retraction and partial tears" }
    ]
  },

  differentials: [
    { name: "Acute hamstring strain (intramuscular)", id: "hamstring-strain", distinguishing: "Sprint mechanism, tenderness in the muscle belly away from the ischium, no gap at the origin and less weakness." },
    { name: "Pelvic apophyseal avulsion (ischial tuberosity)", id: "pelvic-apophyseal-avulsion", distinguishing: "Adolescent with an open apophysis; bony fragment on radiograph rather than tendon detachment." },
    { name: "Proximal hamstring tendinopathy", id: "proximal-hamstring-tendinopathy", distinguishing: "Gradual onset of deep buttock pain with sitting, no acute event, no bruising and preserved strength." },
    { name: "Lumbar radiculopathy", id: "lumbar-disc-herniation", distinguishing: "Back pain, dermatomal symptoms below the knee and positive neural tests, without bruising or a palpable gap." },
    { name: "Deep gluteal syndrome", id: "deep-gluteal-syndrome", distinguishing: "Buttock and sciatic-type pain without trauma or tendon weakness; may follow scarring after an avulsion." },
    { name: "Ischial (ischiogluteal) bursitis or contusion", distinguishing: "Direct fall onto the buttock; local tenderness without a gap or major weakness." }
  ],
  redFlags: [
    "Suspected complete avulsion (forced hip flexion with knee extension, ischial pain, gap, extensive bruising, marked weakness): arrange MRI and orthopaedic review within days. Delayed repair is more difficult and outcomes may be poorer [r1,r8].",
    "New or progressive sciatic nerve deficit (foot drop, numbness below the knee): refer urgently for surgical review.",
    "Calf pain and swelling or breathlessness during the braced or non-weight-bearing period: suspect DVT/PE and arrange same-day medical review.",
    "After surgery: fever, wound discharge or increasing redness (infection), or sudden loss of strength with a new 'pop' (re-rupture): refer back to the surgeon promptly.",
    "Severe buttock or thigh swelling out of proportion to the injury, especially on anticoagulants: refer urgently to exclude major haematoma or compartment syndrome."
  ],

  management: {
    principles: "Management is a shared decision based on the number of tendons involved, retraction, bony involvement, nerve symptoms, age, activity demands and patient preference [r3]. Pooled observational data favoured repair for satisfaction and strength, but the studies were of low methodological quality and the non-operative groups were small [r8]. A 2025 meta-analysis found similar patient-reported outcomes after operative and non-operative care, with a higher rate of return to pre-injury sport after surgery (65.2% vs 50.7%) [r10]. The first RCT (PHACT, 119 patients aged 30–70 years) found non-operative treatment non-inferior to surgery for hamstring-specific function at 2 years (PHAT 79.9 vs 78.5; mean difference −1.2, 95% CI −8.6 to 6.2; 10-point margin) [r4]. PHACT excluded people under 30, so it does not settle the question for young high-demand athletes. Surgery remains reasonable for younger, high-demand athletes, displaced bony avulsions and symptomatic gapping [r3]. Make the decision early, because delayed repair is more challenging and later surgery was associated with lower scores in one large series [r1,r5]. Either pathway needs a staged rehabilitation that protects healing tissue and then rebuilds strength and running capacity [r12].",
    medical: [
      { name: "Surgical reattachment (suture anchors)", description: "Open reinsertion of the tendons to the ischial tuberosity. After repair, 76–100% returned to sport with a low re-rupture rate (3%), but residual pain was reported by 8–61% [r9]. Overall complications were 23% in pooled data [r8]. All studies in the systematic review were of low methodological quality [r9]. The consensus indications are gapping or loss of tension, symptomatic displaced bony avulsion, and free-tendon injury that fails non-operative care [r3].", evidence: "limited", recommendation: "consider", refs: ["r9", "r8", "r3", "r10"] },
      { name: "Early versus delayed repair", description: "Acute repairs had better satisfaction, pain and strength than chronic repairs in one meta-analysis [r8], whereas another found little difference [r9]. In 204 cases, later surgery correlated with lower PHAT scores (mean time to surgery 5.7 weeks), but MRI stump retraction did not [r5]. Decide early to keep both options open.", evidence: "conflicting", recommendation: "consider", refs: ["r8", "r9", "r5"] },
      { name: "Post-operative bracing", description: "Braced protocols had slightly fewer complications and re-operations than unbraced protocols in a systematic review of observational studies (complications 10.9% vs 12.7%; reoperation for retear 0.05% vs 3.1%) [r15]. Follow the surgeon's protocol.", evidence: "limited", recommendation: "consider", refs: ["r15"] },
      { name: "Analgesia and VTE prophylaxis", description: "Simple analgesia; thromboprophylaxis per medical assessment during immobilisation or after surgery.", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Corticosteroid injection", description: "Not supported for acute hamstring injury by consensus [r3].", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r3"] }
    ],
    physio: [
      { name: "Structured non-operative rehabilitation", description: "Staged, progressive loading from isometrics through heavy strength, running and sport-specific work. Non-inferior to surgery for PHAT at 2 years in 30–70-year-olds [r4]. In a case series of 14 recreational athletes with MRI-confirmed single-tendon retracted avulsions managed non-operatively, mean LEFS was 84%, and strength and hop distance did not differ between limbs in the five who completed testing [r16].", evidence: "moderate", recommendation: "recommended", refs: ["r4", "r16"] },
      { name: "Post-operative staged rehabilitation", description: "Protect the repair for about 6 weeks (avoid combined hip flexion and knee extension; weight-bearing as instructed), then progress strength and running by criteria. The consensus advises avoiding high strain loads and rates in early-stage hamstring rehabilitation [r12]; the 6-week figure and weight-bearing limits follow typical surgeon protocols (clinical convention).", evidence: "expert-opinion", recommendation: "recommended", refs: ["r12"] },
      { name: "Progressive strength training", description: "Isometric, then isotonic, then eccentric hamstring and gluteal strengthening, moving from short to long muscle lengths as healing allows [r12].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r12"] },
      { name: "Graded running and sprint exposure", description: "Return to running after strength criteria are met; sprinting should be pain-free before return [r12].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r12"] },
      { name: "Neural mobility and sciatic monitoring", description: "Gentle sciatic nerve sliders if mechanosensitivity develops, while monitoring for progressive deficits.", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Early aggressive stretching", description: "Stretching into combined hip flexion and knee extension stresses the healing enthesis or repair and should be avoided in the first weeks.", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] }
    ],
    education: [
      "This injury is a tear of the tendon off the bone, not a simple muscle strain, so it needs specific imaging and a treatment plan.",
      "Both surgery and structured rehabilitation can give good results. Your age, activity goals and the injury pattern guide the choice.",
      "If surgery is chosen, earlier is easier. Decide within the first few weeks.",
      "Avoid deep forward bending with straight knees and stretching the back of the thigh until your clinician advises.",
      "Recovery takes months; most people who have a repair return to sport at around 6 months."
    ]
  },

  rehab: {
    overview: "The stages below describe the post-repair pathway; non-operative rehabilitation follows the same sequence without the strict early restrictions and usually progresses faster through stage 1. Progression is criteria-based and individualised to the injury, the athlete and sporting demands [r12]. Dosages are typical clinical ranges, not trial-derived, and no validated rehabilitation protocol after avulsion repair was identified. Protocols traditionally brace the hip or knee, although some now omit bracing [r15]. Always confirm the surgeon's protocol (brace, weight-bearing and range limits).",
    stages: [
      {
        name: "Protect the repair",
        timeframe: "Weeks 0–6 (post-op); weeks 0–2 (non-operative)",
        goals: ["Protect the tendon–bone repair", "Control pain and swelling", "Safe mobility with crutches", "Maintain gluteal and trunk activation"],
        precautions: ["No combined hip flexion and knee extension; no hamstring stretching", "Brace and weight-bearing per surgeon", "Avoid sitting on hard surfaces directly on the ischium", "Monitor for DVT and sciatic symptoms"],
        exercises: [
          { name: "Gluteal and hamstring submaximal isometrics (knee bent)", dosage: "10 × 5 s holds at 20–30% effort, 2–3 times daily (from about week 2 post-op)", cues: "Gentle squeeze only, no pain at the buttock" },
          { name: "Ankle pumps", dosage: "20 reps every waking hour", cues: "Circulation and DVT prevention" },
          { name: "Abdominal bracing / dead bug (modified)", dosage: "3 × 8–10", cues: "Keep the operated hip in a shortened position", figure: { pose: "ex-dead-bug", view: "lateral", props: ["mat"] } },
          { name: "Upper-body and contralateral-leg conditioning", dosage: "2–3×/week", cues: "Maintain fitness without loading the repair" }
        ],
        progressionCriteria: ["Surgeon clearance to wean brace and crutches (about 6 weeks)", "Wound healed and pain ≤ 3/10 with daily activities", "Normal gait achievable without a limp"]
      },
      {
        name: "Restore gait & early strength",
        timeframe: "Weeks 6–12",
        goals: ["Normal gait without aids", "Restore hip and knee range gradually", "Begin isotonic hamstring and gluteal strengthening in mid-range"],
        precautions: ["Progress hip flexion range gradually; still no forced stretch", "Load in shortened to mid-range before long lengths"],
        exercises: [
          { name: "Double-leg glute bridge", dosage: "3 × 10–15, daily", cues: "Knees bent to 90°, lift slowly", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Prone or standing knee flexion with light resistance", dosage: "3 × 12–15", cues: "Slow and controlled" },
          { name: "Stationary bike", dosage: "15–30 min, low resistance", cues: "High seat to limit hip flexion at first" },
          { name: "Step-ups", dosage: "3 × 10 each side", cues: "Drive through the heel, pelvis level", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Single-leg balance", dosage: "3 × 30–45 s", figure: { pose: "ex-single-leg-balance", view: "anterior" } }
        ],
        progressionCriteria: ["Normal gait and stairs", "Pain-free double-leg bridge 3 × 15", "Knee flexor strength ≥ 60% of the other side"]
      },
      {
        name: "Strength at length",
        timeframe: "Months 3–5",
        goals: ["Progress to heavy and long-length hamstring loading", "Restore single-leg strength and control", "Return to jogging"],
        precautions: ["Introduce eccentric and long-length loading gradually", "Monitor next-day ischial pain"],
        exercises: [
          { name: "Single-leg bridge and long-lever bridge", dosage: "3 × 8–12", cues: "Progress from bent knee to heels on a box", figure: { pose: "ex-hamstring-bridge", view: "lateral", props: ["box"] } },
          { name: "Romanian deadlift", dosage: "3–4 × 6–10, 2–3×/week", cues: "Hinge with a long spine; increase range then load", figure: { pose: "ex-rdl", view: "lateral", props: ["barbell"] } },
          { name: "Hip thrust", dosage: "3–4 × 6–10", figure: { pose: "ex-hip-thrust", view: "lateral", props: ["bench"] } },
          { name: "Walk–jog progression", dosage: "Every other day, building to 20–30 min continuous", cues: "Pain-free, relaxed stride" }
        ],
        progressionCriteria: ["Knee flexor strength ≥ 80% of the other side", "Single-leg bridge endurance near symmetrical", "Pain-free jogging for 20 min"]
      },
      {
        name: "Return to sport",
        timeframe: "Months 4–9",
        goals: ["Eccentric strength and high-speed running", "Sport-specific drills", "Return to full training and competition"],
        precautions: ["Sprinting must be pain-free before return [r12]", "Progress Nordic exercise conservatively after repair"],
        exercises: [
          { name: "Nordic hamstring lowering (partial range first)", dosage: "2–3 × 4–6, twice a week", figure: { pose: "ex-nordic", view: "lateral", props: ["mat"] } },
          { name: "Progressive sprinting and acceleration", dosage: "2–3×/week from 70% to maximal speed", cues: "Smooth mechanics; stop if ischial pain develops" },
          { name: "Sport-specific drills (kicking, cutting, water-skiing starts)", dosage: "Within training, progressing intensity" },
          { name: "Heavy strength maintenance (RDL, hip thrust)", dosage: "1–2×/week, 3 × 5–6", figure: { pose: "ex-rdl", view: "lateral", props: ["barbell"] } }
        ],
        progressionCriteria: ["Knee flexor strength ≥ 90% of the other side", "Pain-free maximal sprinting and sport drills", "Psychological readiness and clearance by the treating team"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Healing time respected (return to sport averaged 5.7 months after repair in a systematic review) [r11]",
      "Knee flexor and hip extensor strength ≥ 90% of the other side (clinical convention)",
      "Pain-free maximal sprinting and sport-specific drills [r12]",
      "No sciatic nerve symptoms with sport",
      "Confidence and a shared decision with the athlete, surgeon and physiotherapist [r12]"
    ],
    tests: ["Isokinetic or hand-held dynamometry of knee flexors", "Single-leg bridge endurance", "Single-leg hop tests", "Maximal sprint test", "PHAT or LEFS questionnaire"]
  },
  prognosis: "After repair, 76–100% return to sport and 88–100% are satisfied, but some patients report residual pain (8–61%) and strength deficits (mean strength 78–101% of the other side) [r9]. Re-rupture is uncommon (about 3%) [r9]. Pooled data show better satisfaction and strength after repair than non-operative care, but non-operative groups were small [r8]. In patients aged 30–70 years, non-operative treatment gave non-inferior patient-reported function at 2 years [r4], although operative care may give a higher rate of return to pre-injury sport (65.2% vs 50.7%) [r10]. In a series of 204 repairs the mean PHAT score was 79.8; later surgery and female sex were associated with lower scores [r5]. Delay can make repair more complex and may increase the likelihood of sciatic nerve involvement [r1].",
  prevention: [
    "No avulsion-specific prevention trials were identified. The suggestions below are clinical reasoning.",
    "Maintain hamstring strength across the lifespan, especially in middle-aged recreational athletes.",
    "Use safe technique in water-skiing starts (the most frequent cause in one series [r1]) and avoid sudden forced splits positions when untrained.",
    "Treat proximal hamstring tendinopathy and strains fully before returning to high-load activities."
  ],
  clinicalPearls: [
    "A middle-aged person who slips into the splits, feels a 'pop' in the buttock and then bruises down the thigh has an avulsion until MRI proves otherwise [r2].",
    "Palpate the origin with the knee bent and ask for a gentle contraction; loss of tendon tension is easier to feel than a gap.",
    "Get the MRI early. Delay makes repair more technically challenging [r1]. Remember that MRI can overestimate retraction, particularly when a Cobra sign is present [r13].",
    "Surgery is not automatic: in 30–70-year-olds, good rehabilitation achieved non-inferior function to repair [r4].",
    "Always check and document sciatic nerve function at the first visit and after surgery."
  ],
  related: ["hamstring-strain", "proximal-hamstring-tendinopathy", "pelvic-apophyseal-avulsion", "deep-gluteal-syndrome", "quadriceps-tendon-rupture"],

  references: [
    { id: "r1", citation: "Wood DG, Packham I, Trikha SP, et al. Avulsion of the proximal hamstring origin. J Bone Joint Surg Am. 2008;90(11):2365-74.", pmid: "18978405", doi: "10.2106/JBJS.G.00685", type: "cohort", year: 2008 },
    { id: "r2", citation: "Irger M, Willinger L, Lacheta L, et al. Proximal hamstring tendon avulsion injuries occur predominately in middle-aged patients with distinct gender differences: epidemiologic analysis of 263 surgically treated cases. Knee Surg Sports Traumatol Arthrosc. 2020;28(4):1221-9.", pmid: "31541291", doi: "10.1007/s00167-019-05717-7", type: "cross-sectional", year: 2020 },
    { id: "r3", citation: "Plastow R, Kerkhoffs GMMJ, Wood D, et al. London International Consensus and Delphi study on hamstring injuries part 2: operative management. Br J Sports Med. 2023;57(5):266-77.", pmid: "36650033", doi: "10.1136/bjsports-2021-105383", type: "consensus-statement", year: 2023 },
    { id: "r4", citation: "Pihl E, Laszlo S, Rosenlund AM, et al. Operative versus nonoperative treatment of proximal hamstring avulsions. NEJM Evid. 2024;3(8):EVIDoa2400056.", pmid: "39023393", doi: "10.1056/EVIDoa2400056", type: "rct", year: 2024 },
    { id: "r5", citation: "Best R, Meister A, Meier M, et al. Predictive factors influencing functional results after proximal hamstring tendon avulsion surgery: a patient-reported outcome study after 227 operations from a single center. Orthop J Sports Med. 2021;9(10):23259671211043097.", pmid: "34734098", doi: "10.1177/23259671211043097", type: "cohort", year: 2021 },
    { id: "r6", citation: "Askling CM, Tengvar M, Saartok T, et al. Acute first-time hamstring strains during slow-speed stretching: clinical, magnetic resonance imaging, and recovery characteristics. Am J Sports Med. 2007;35(10):1716-24.", pmid: "17567821", doi: "10.1177/0363546507303563", type: "cohort", year: 2007 },
    { id: "r7", citation: "Arner JW, Freiman H, Mauro CS, et al. Functional results and outcomes after repair of partial proximal hamstring avulsions at midterm follow-up. Am J Sports Med. 2019;47(14):3436-43.", pmid: "31634433", doi: "10.1177/0363546519879117", type: "cohort", year: 2019 },
    { id: "r8", citation: "Bodendorfer BM, Curley AJ, Kotler JA, et al. Outcomes after operative and nonoperative treatment of proximal hamstring avulsions: a systematic review and meta-analysis. Am J Sports Med. 2018;46(11):2798-808.", pmid: "29016194", doi: "10.1177/0363546517732526", type: "meta-analysis", year: 2018 },
    { id: "r9", citation: "van der Made AD, Reurink G, Gouttebarge V, et al. Outcome after surgical repair of proximal hamstring avulsions: a systematic review. Am J Sports Med. 2015;43(11):2841-51.", pmid: "25384502", doi: "10.1177/0363546514555327", type: "systematic-review", year: 2015 },
    { id: "r10", citation: "Thamrongskulsiri N, Limskul D, Tanpowpong T, et al. No difference in patient-reported outcomes between operative and non-operative management of proximal hamstring injuries, but return to sports is higher in operative treatment: a systematic review and meta-analysis. J Exp Orthop. 2025;12(3):e70327.", pmid: "40655246", doi: "10.1002/jeo2.70327", type: "meta-analysis", year: 2025 },
    { id: "r11", citation: "Belk JW, Kraeutler MJ, Mei-Dan O, et al. Return to sport after proximal hamstring tendon repair: a systematic review. Orthop J Sports Med. 2019;7(6):2325967119853218.", pmid: "31259189", doi: "10.1177/2325967119853218", type: "systematic-review", year: 2019 },
    { id: "r12", citation: "Paton BM, Read P, van Dyk N, et al. London International Consensus and Delphi study on hamstring injuries part 3: rehabilitation, running and return to sport. Br J Sports Med. 2023;57(5):278-91.", pmid: "36650032", doi: "10.1136/bjsports-2021-105384", type: "consensus-statement", year: 2023 },
    { id: "r13", citation: "Lefèvre N, Moussa MK, Chahal A, et al. The Cobra sign: a marker for overestimation of tendon retraction in proximal semimembranosus tendon avulsion. Knee Surg Sports Traumatol Arthrosc. 2025;33(2):739-49.", pmid: "39171445", doi: "10.1002/ksa.12437", type: "cohort", year: 2025 },
    { id: "r14", citation: "Bloom DA, Gyftopoulos S, Alaia MJ, et al. Variability of MRI reporting in proximal hamstring avulsion injuries: are musculoskeletal radiologists and orthopedic surgeons utilizing similar landmarks? Clin Imaging. 2023;93:46-51.", pmid: "36375363", doi: "10.1016/j.clinimag.2022.09.001", type: "cross-sectional", year: 2023 },
    { id: "r15", citation: "Wyatt PB, Ho TD, Hopper HM, et al. Systematic review of bracing after proximal hamstring repair. Orthop J Sports Med. 2024;12(2):23259671241230045.", pmid: "38405008", doi: "10.1177/23259671241230045", type: "systematic-review", year: 2024 },
    { id: "r16", citation: "Bono OJ, Forlizzi J, Shah SS, et al. Nonoperative treatment of single-tendon proximal hamstring avulsions in recreational athletes. Sports Med Int Open. 2023;7(1):E9-14.", pmid: "38549733", doi: "10.1055/a-1991-3719", type: "cohort", year: 2023 }
  ],

  animation: {
    title: "How a proximal hamstring avulsion happens",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "lateral", environment: "road",
        actors: [{ id: "patient", kit: "worker" }],
        keyframes: [
          { t: 0, pose: "walk-heel-strike", root: { x: -110 } },
          { t: 0.8, pose: "walk-push-off", root: { x: -80 } },
          { t: 1.6, pose: "walk-heel-strike", root: { x: -50 } },
          { t: 2.5, pose: "slip", joints: { hipR: 95, kneeR: 0, ankleR: 10, hipL: -15, kneeL: 95, trunk: 25 }, root: { x: -35 }, ease: "in" },
          { t: 3.8, pose: "slip", joints: { hipR: 100, kneeR: 0, hipL: -20, kneeL: 110, trunk: 35, shoulderR: -40, elbowR: 60 }, root: { x: -30 } },
          { t: 5.4, pose: "slip", joints: { hipR: 85, kneeR: 15, hipL: -20, kneeL: 115, trunk: 30, shoulderR: -45, elbowR: 70 }, root: { x: -30 } }
        ],
        props: [{ id: "ice", type: "ice-patch", attach: "heelR" }],
        forces: [
          { t: [1.9, 3.2], at: "footR", dir: "forward", label: "Foot slides forward" },
          { t: [2.1, 3.4], at: "hipR", dir: "down", label: "Body weight forces hip flexion" },
          { t: [2.2, 3.4], at: "thighR", dir: "backward", label: "Reflex eccentric hamstring pull" }
        ],
        highlights: [{ t: [2.4, 6], at: "hipR" }],
        impacts: [{ t: 2.6, at: "hipR" }],
        slowmo: [{ t: [1.9, 3.1], rate: 0.3 }],
        captions: [
          { t: 0, text: "A middle-aged adult walks across an icy surface." },
          { t: 1.6, text: "The leading foot lands on ice and slides forward." },
          { t: 2.1, text: "The hip is forced into flexion with the knee straight, stretching all three hamstrings." },
          { t: 2.6, text: "A reflex eccentric contraction meets the stretch: the tendons tear off the ischium with a 'pop'." },
          { t: 3.9, text: "Sudden buttock pain and weakness; bruising will track down the thigh over days." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "hipR",
        captions: [{ t: 0, text: "Zooming into the hamstring origin at the right ischial tuberosity, viewed from behind." }]
      },
      {
        type: "closeup", label: "At the ischium", duration: 10, scene: "thigh-posterior",
        actions: [
          { t: 0, do: "highlight", target: "proximalHamstringTendon" },
          { t: 0.3, do: "label", target: "proximalHamstringTendon", text: "Proximal hamstring tendons" },
          { t: 1.0, do: "arrow", at: "proximalTendonInsertion", dir: "distal", label: "Sudden eccentric pull" },
          { t: 1.0, do: "stretch", target: "proximalHamstringTendon", amount: 0.35, dur: 1.4 },
          { t: 1.2, do: "stretch", target: "bicepsFemorisLong", amount: 0.2, dur: 1.2 },
          { t: 2.6, do: "avulse", target: "proximalHamstringTendon", end: "from" },
          { t: 2.6, do: "impact", at: "ischialTuberosity" },
          { t: 3.0, do: "label", target: "proximalHamstringTendon", text: "Avulsed from the ischial tuberosity" },
          { t: 3.6, do: "move", target: "bicepsFemorisLong", dir: "distal", amount: 0.12, dur: 1 },
          { t: 3.6, do: "move", target: "semitendinosus", dir: "distal", amount: 0.12, dur: 1 },
          { t: 3.8, do: "move", target: "semimembranosus", dir: "distal", amount: 0.1, dur: 1 },
          { t: 4.4, do: "haematoma", target: "bicepsFemorisLong", at: 0.1 },
          { t: 4.6, do: "label", target: "bicepsFemorisLong", text: "Retraction and haematoma" },
          { t: 5.8, do: "highlight", target: "sciaticNerve" },
          { t: 6.0, do: "irritate", target: "sciaticNerve" },
          { t: 6.2, do: "label", target: "sciaticNerve", text: "Sciatic nerve: irritation risk" },
          { t: 7.4, do: "camera", at: "ischialTuberosity", zoom: 1.6, dur: 1 },
          { t: 9.0, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "The hamstring tendons attach to the ischial tuberosity, the 'sitting bone'." },
          { t: 1.0, text: "Forced hip flexion with a straight knee loads the tendon–bone junction." },
          { t: 2.6, text: "The enthesis fails: the conjoint and semimembranosus tendons pull off the bone." },
          { t: 3.6, text: "Without their anchor, the hamstrings retract down the thigh." },
          { t: 4.4, text: "Bleeding from the torn enthesis forms a large haematoma." },
          { t: 5.8, text: "The sciatic nerve lies just lateral; haematoma or scar can irritate or tether it." },
          { t: 7.4, text: "Early MRI shows how many tendons are torn and how far they have retracted." }
        ]
      },
      {
        type: "micro", label: "Tendon healing", duration: 9, tissue: "tendon",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.0, stage: "loaded" }, { t: 2.0, stage: "overload" }, { t: 3.0, stage: "failure" },
          { t: 4.0, stage: "haemorrhage" }, { t: 5.0, stage: "inflammation" }, { t: 6.3, stage: "proliferation" }, { t: 7.6, stage: "remodelling" }
        ],
        timeLabels: [{ t: 5.0, text: "Days 0–7" }, { t: 6.3, text: "Weeks 1–6" }, { t: 7.6, text: "Months 2–12" }],
        captions: [
          { t: 0, text: "Healthy tendon: crimped, aligned type I collagen anchored to bone." },
          { t: 1.0, text: "Under tension the crimp straightens and the collagen stretches." },
          { t: 2.0, text: "Sudden eccentric overload exceeds what the enthesis can bear." },
          { t: 3.0, text: "Fibres fail at the tendon–bone junction and the tendon pulls away." },
          { t: 4.0, text: "Torn vessels bleed into the gap." },
          { t: 5.0, text: "Inflammatory cells clear debris and release growth factors." },
          { t: 6.3, text: "Fibroblasts lay down disorganised type III collagen: the repair is weak, so it is protected." },
          { t: 7.6, text: "Collagen slowly realigns and matures under graded load over many months." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL3" }
};
