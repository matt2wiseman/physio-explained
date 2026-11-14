export default {
  id: "posterior-tibial-tendon-dysfunction",
  name: "Tibialis posterior tendon dysfunction",
  shortName: "Tib posterior dysfunction",
  aka: ["PTTD", "posterior tibial tendon dysfunction", "tibialis posterior tendinopathy", "progressive collapsing foot deformity", "PCFD", "adult acquired flatfoot", "AAFD", "posterior tibial tendon insufficiency"],
  region: "ankle",
  tissues: ["tendon"],
  onset: "gradual",
  mechanismType: ["overuse", "degenerative", "insidious"],
  populations: ["middle-aged and older adults, mostly women", "people with a flat or valgus foot", "runners and walkers with new medial ankle pain", "people with calf tightness"],
  sports: ["running", "walking", "hiking", "dance", "court sports"],
  urgency: "routine",
  summary: "Progressive overload and degeneration of the tibialis posterior tendon behind the medial malleolus. Without support it can lead to medial arch collapse, now called progressive collapsing foot deformity.",
  keyFacts: [
    { label: "Typical recovery", value: "Early stages improve over about 10–12 weeks of exercise with orthoses in small trials; flexible stage II is often managed with long-term bracing" },
    { label: "Return to sport", value: "Criteria-based; no validated criteria. Return to running needs pain-free single-leg heel rise and arch control (clinical convention)" },
    { label: "Key test", value: "Single heel-rise test, plus palpation behind the medial malleolus and resisted inversion. These signs were negative in 20–35% of confirmed cases in one series" },
    { label: "Imaging", value: "Weight-bearing radiographs for alignment; ultrasound or MRI for the tendon" },
    { label: "Peak age", value: "Treated series are mostly women, mean age about 58–64 years" },
    { label: "Incidence", value: "No population incidence found in the sources read" }
  ],
  overview: "Tibialis posterior tendon dysfunction (PTTD) is a progressive overload and degeneration of the tendon that runs behind the medial malleolus and under the navicular. It is the best-known cause of a collapsing medial arch in adults. In 2020 a consensus group proposed renaming the condition progressive collapsing foot deformity (PCFD), because older terms such as adult acquired flatfoot and PTTD are confusing and many, but not all, deformities are associated with a rupture of the tibialis posterior tendon. PCFD is described as a complex three-dimensional deformity with varying degrees of hindfoot valgus, forefoot abduction and midfoot varus [r1].\n\nPhysiotherapists see the early, flexible stages, when the tendon is painful but the foot can still be corrected. The evidence for conservative care is small. The three randomised trials in a systematic review included 93 participants and combined exercise with orthoses and stretching, so the treatment effect of each part is hard to separate [r2]. Surgery is reserved for failed conservative care, and correcting the hindfoot valgus is thought to matter more than repairing the tendon alone [r3].",

  epidemiology: {
    text: "No population incidence or prevalence figures were found in the sources read, so the true frequency is unknown. Clinical and surgical series are mostly women of middle age or older: 29 of 32 patients with stage II disease were women with an average age of 58 years [r4], 28 of 32 were women in another series [r5], and the mean age was 64.2 years with 14 of 18 female in a brace series [r6]. Because the tendon is often only part of a three-dimensional deformity, a retrospective study of 25 patients found that tibialis posterior dysfunction was associated only with a worse medial arch collapse, and concluded that the tendon is probably not the main contributor to PCFD [r7]. Risk factors for tendon degeneration are discussed in the sections below; many commonly quoted risks (obesity, diabetes, hypertension, steroid exposure) could not be traced to a source on this page.",
    riskFactors: {
      intrinsic: [
        "A congenital valgus calcaneus, the most common cause of tibialis posterior degeneration in one review [r3]",
        "Forefoot supination or abduction and a short gastrocnemius muscle [r3]",
        "Female sex and middle or older age: treated series are mostly women [r4,r5,r6]",
        "Pes planus: a flat foot reduces selective tibialis posterior activation unless supported by shoes and orthoses [r8]",
        "Obesity, diabetes, hypertension and previous steroid exposure are commonly cited risks (clinical teaching; not traced to a source here)"
      ],
      extrinsic: [
        "Repetitive weight-bearing, for example high walking or running volumes on an unsupported flat foot (clinical reasoning)",
        "Unsupportive footwear and long periods standing or on hard surfaces (clinical reasoning)",
        "A medial ankle sprain or direct trauma to the medial ankle (clinical observation)",
        "Rapid increases in training load that exceed the tendon's capacity, as in other tendinopathies [r9]"
      ]
    }
  },

  mechanism: {
    summary: "PTTD has no single injury moment. Repetitive load on the tibialis posterior tendon, which is the main dynamic supporter of the medial arch and hindfoot, gradually outstrips its capacity. In the continuum model of tendinopathy, a tendon passes from a reactive stage to disrepair and then degeneration, and the later stages have limited capacity to reverse [r9,r10]. As the tendon thickens, elongates or tears, the foot loses support: in PCFD the result is a variable combination of hindfoot valgus, forefoot abduction and midfoot varus [r1]. A congenital valgus calcaneus, forefoot supination or abduction and a short gastrocnemius add to the load [r3].",
    sequence: [
      "Repeated weight-bearing loads the tendon with each step, most of all in single-leg stance and push-off. The tendon runs behind the medial malleolus and under the navicular.",
      "A valgus heel, a flat or supinated forefoot and a tight calf raise the demand on the tendon [r3].",
      "The tendon becomes reactive and painful, then thickens and disorganises (the continuum model) [r9,r10].",
      "As the tendon degenerates, it elongates or tears, partly or completely, and can no longer lock the foot for push-off.",
      "Passive supports on the medial side (such as the spring ligament and deltoid ligament) are stretched as the arch collapses, and the deformity may involve the midfoot or ankle [r1].",
      "The heel drifts into valgus, the forefoot abducts and the arch lowers. Patients may see 'too many toes' from the front [r11].",
      "In a flexible foot the position can still be corrected and load-bearing is symptomatic; later the foot becomes fixed, and the deformity can progress [r6]."
    ],
    variants: [
      { name: "Early tendinopathy (stage I)", description: "Medial ankle pain and swelling behind the malleolus with a normal or near-normal foot shape. The target of most exercise trials [r2,r12]." },
      { name: "Flexible deformity (stage II)", description: "The arch is lowered and the heel is valgus, but both can still be corrected passively. Trials and bracing series focus here [r13,r6,r5]." },
      { name: "Rigid deformity (stage III)", description: "The hindfoot is fixed in valgus. In one brace series 3 of 18 patients (16%) progressed from flexible to fixed deformity [r6]." },
      { name: "Acute rupture or tear", description: "A sudden pain and collapse after a trip or fall, or an apparent rupture. This needs prompt specialist review (clinical reasoning)." },
      { name: "Part of a multi-level deformity", description: "The deformity may start in the midfoot or ankle, so the tendon is not always the primary problem [r1,r7]." }
    ]
  },

  anatomy: {
    text: "The tibialis posterior muscle lies deep in the posterior compartment of the calf. Its tendon passes behind the medial malleolus in a groove under the flexor retinaculum, in front of the flexor digitorum longus (FDL) and flexor hallucis longus (FHL) tendons, then fans out to insert mainly on the navicular tuberosity, with slips to the cuneiforms, cuboid and metatarsal bases (standard anatomy). It inverts the foot, locks the midfoot for push-off and supports the medial longitudinal arch. The spring (calcaneonavicular) ligament and the deltoid ligament give static support on the medial side. The tibial nerve and the posterior tibial artery lie close behind the tendons in the tarsal tunnel. Heel valgus can also trap the peroneal tendons between the fibular tip and the calcaneus when the heel collapses [r14].",
    structures: [
      { name: "Tibialis posterior tendon", role: "Inverts the foot, locks the midfoot and is the main dynamic support of the medial arch. The retromalleolar region is the usual site of degeneration." },
      { name: "Spring (calcaneonavicular) ligament", role: "Supports the head of the talus and the medial arch. Stretched or torn in the later stages of deformity [r1]." },
      { name: "Deltoid ligament", role: "Medial stabiliser of the ankle that can be stretched as the heel drifts into valgus; deltoid insufficiency is part of the later pattern (clinical teaching)." },
      { name: "Flexor retinaculum", role: "Holds the tendons behind the medial malleolus and forms the roof of the tarsal tunnel." },
      { name: "FDL and FHL tendons", role: "Neighbouring tendons in the tarsal tunnel; FDL is used for tendon transfer in surgery [r4]." },
      { name: "Navicular and sustentaculum tali", role: "The navicular is the main insertion of tibialis posterior; the sustentaculum tali supports the talar head." }
    ]
  },

  pathophysiology: {
    tissueDamage: "In PTTD the tendon fails to adapt to repeated load. In the continuum model, a tendon moves from a reactive stage to disrepair and degeneration, and early stages can reverse while late stages have limited capacity to do so. The model is itself debated, since classifying a mainly painful condition by structure has been challenged and the relationship between structure, pain and function is not fully understood [r9,r10]. A 10-week eccentric exercise programme in 10 people with early tibialis posterior tendinopathy improved symptoms and function but did not change tendon morphology or neovascularisation on ultrasound, so pain relief may not mean a structurally normal tendon [r15].\n\nThe tendon is not the whole story. A retrospective study of 25 patients found that a deficient tibialis posterior (positive single heel-rise or reduced inversion strength) was associated only with a worse medial arch collapse, not with the three-dimensional deformity as a whole, and concluded that the tendon is probably not the main contributor to PCFD [r7]. Treatment of the tendon alone has not been proven to succeed in surgery [r3].",
    structures: [
      { name: "Tibialis posterior tendon", effect: "Reactive swelling, thickening and degeneration with sheath irritation, and partial or complete tears in late disease [r3,r9]." },
      { name: "Spring ligament and deltoid ligament", effect: "Stretching or tearing allows the head of the talus to drop and the heel to move into valgus [r1]." },
      { name: "Medial longitudinal arch (talonavicular and naviculocuneiform joints)", effect: "The arch collapses and the midfoot supinates relative to the hindfoot [r1,r7]." },
      { name: "Subtalar joint and lateral structures", effect: "Heel valgus can lead to lateral impingement of the peroneal tendons against the fibular tip [r14]." },
      { name: "Gastrocnemius and Achilles", effect: "A short gastrocnemius is associated with the deformity [r3]." },
      { name: "Tarsal tunnel contents", effect: "Swelling can crowd the tibial nerve and posterior tibial artery (clinical reasoning)." }
    ],
    muscles: [
      { name: "Tibialis posterior (muscle)", effect: "Pain and tendon elongation reduce inversion strength and the ability to rise onto the toes on one leg [r7,r12]." },
      { name: "Gastrocnemius and soleus", effect: "Tightness (and in some cases a short gastrocnemius) increases midfoot load and is a recognised associated finding [r3]." },
      { name: "Peroneus brevis and longus", effect: "Can overwork or become tight as the heel moves into valgus, and can be impinged in the later stages [r14]." },
      { name: "Intrinsic foot muscles and abductor hallucis", effect: "Support the arch and may weaken as the foot flattens (clinical reasoning)." }
    ],
    cellular: [
      { phase: "Reactive", timing: "Days to weeks", description: "After increased load the tenocytes activate and the matrix swells. This stage can reverse [r9]." },
      { phase: "Disrepair", timing: "Weeks to months", description: "The collagen becomes disorganised and new vessels appear, with more matrix breakdown [r9]." },
      { phase: "Degenerative", timing: "Months to years", description: "Areas of cell death and disorganised matrix remain, with limited capacity to reverse; the tendon may elongate or tear [r9,r10]." },
      { phase: "Load adaptation", timing: "Progressive loading over about 10–12 weeks in trials", description: "Eccentric and concentric loading with orthoses reduced pain and disability in trials of early disease; tendon structure on ultrasound did not normalise [r2,r12,r15]." }
    ],
    systems: [
      { system: "Nervous system", effect: "Pain and altered proprioception change gait and standing posture. Some people also develop pain-related avoidance of weight-bearing (clinical reasoning)." },
      { system: "Musculoskeletal chain", effect: "A collapsing foot changes tibial rotation and loads the knee and hip. Related heel valgus can also load the lateral ankle and peroneals [r14]." },
      { system: "Vascular", effect: "Neovascularisation occurs in tendinopathy and persisted after an exercise programme in one small study [r15]." },
      { system: "Metabolic and systemic", effect: "Obesity and diabetes are often cited in tendon degeneration (clinical teaching; not traced to a source here)." },
      { system: "Psychological and social", effect: "Medial foot pain and a visibly collapsing arch limit activity and affect confidence (clinical reasoning)." }
    ]
  },

  grading: {
    system: "Johnson–Strom stages as modified by Myerson (new PCFD classification proposed but not validated)",
    grades: [
      { grade: "Stage I", description: "Tendon pain, swelling and weakness behind the medial malleolus with a normal or near-normal foot alignment (conventional description). The orthosis and exercise trial included stage I and II patients [r12].", prognosis: "Best response to non-operative care in the available trials, which combined exercise, stretching and orthoses [r2,r12]." },
      { grade: "Stage II (flexible)", description: "The arch is lowered and the heel is in valgus but the deformity corrects passively. Bracing series focus here [r13,r6,r5].", prognosis: "In a 7–10 year follow-up of 33 feet in a double upright brace, 69.7% were brace-free and had avoided surgery [r13]. In a shell-brace series, 3 of 18 (16%) progressed to fixed deformity [r6]." },
      { grade: "Stage III (rigid)", description: "The hindfoot deformity becomes fixed and cannot be corrected passively [r6].", prognosis: "Exercise alone cannot correct a fixed deformity. Management is orthotic or surgical, under specialist care [r3]." },
      { grade: "Stage IV (ankle involvement)", description: "Valgus tilting of the talus in the ankle mortise from deltoid insufficiency (conventional description; not traced to a source here).", prognosis: "Needs specialist surgical review." },
      { grade: "PCFD classification (2020)", description: "The consensus group proposed a new classification to stage the deformity and guide treatment. The older systems were not validated, and the new one is intended to standardise reporting [r1].", prognosis: "Not yet established in the sources read." }
    ]
  },

  timeframes: {
    summary: "Trials of early disease used 10–12 week programmes of exercise, stretching and orthoses [r12,r15]. Longer follow-up of brace-treated stage II disease shows that many people stay brace-free and avoid surgery over 7–10 years, but a minority progress [r13,r6]. There is no validated time to return to impact activity; criteria decide.",
    healing: [
      { phase: "Reactive and symptom settling", startDay: 0, endDay: 28, description: "Reduce load, support the arch with footwear or orthoses, and begin isometric and low-load exercise." },
      { phase: "Progressive strengthening", startDay: 14, endDay: 84, description: "Eccentric and concentric loading with orthoses and calf stretching, as in the Kulig trials [r12,r15]." },
      { phase: "Capacity and single-leg strength", startDay: 56, endDay: 140, description: "Single-leg heel rise, step-downs and graded walking and running volume" },
      { phase: "Long-term maintenance", startDay: 112, endDay: 365, description: "Continuing orthoses or bracing as needed and maintenance strength; deformity may progress if support is withdrawn [r13,r6]." }
    ],
    milestones: [
      { label: "Pain-free walking 20 minutes in supportive footwear", day: 28, note: "Typical goal in the first stage (clinical convention)" },
      { label: "End of the 10–12 week programme in the trials", day: 84, note: "Pain and Foot Function Index scores improved in all groups [r12,r15]" },
      { label: "Single-leg heel rise ≥ 10 repetitions", day: 112, note: "A common clinical target (clinical convention)" },
      { label: "Return to running programme", day: 140, note: "When pain-free and heel-rise criteria are met (clinical convention)" },
      { label: "Review for progression of deformity", day: 180, note: "In a brace series, 3 of 18 progressed to a fixed deformity over a mean of 61 months [r6]" }
    ],
    returnToSport: "Criteria-based; no validated criteria. Most people with PTTD are not athletes, and the aim is pain-free walking, work and chosen activity with the arch supported. A clinical convention for returning to running is pain at the tendon 2/10 or less, 10–15 single-leg heel rises with the heel inverting, and a controlled step-down without arch collapse. Many people continue to use orthoses long term [r13,r6]."
  },

  clinicalPresentation: {
    symptoms: [
      "Pain and swelling along the inside of the ankle, behind and below the medial malleolus, worse with walking, standing and stairs",
      "Pain that eases with rest early on, and later becomes more constant",
      "A lowering arch or the foot feeling 'flatter' or turning outward, noticed by the patient or by others",
      "Difficulty rising onto the toes on one leg and fatigue when walking long distances",
      "Pain at the outside of the ankle in later stages, from impingement under the fibula [r14]"
    ],
    signs: [
      "Swelling and tenderness along the tendon behind and below the medial malleolus to the navicular",
      "Reduced inversion strength and pain on resisted inversion in plantarflexion",
      "On standing, a valgus heel and a lowered medial arch, with 'too many toes' seen from behind [r11]",
      "An inability to perform a single heel rise, or heel rise without the heel inverting [r11]",
      "Passive correction of the heel and arch in stage II; a fixed deformity in stage III [r6]"
    ]
  },

  assessment: {
    subjective: [
      "Onset and course: gradual medial ankle pain with load, or a sudden pain and collapse after a trip",
      "Location: behind the medial malleolus, along the arch, at the navicular or on the lateral ankle (impingement) [r14]",
      "Walking and standing tolerance, stairs, and work or sport demands",
      "Change in foot shape, shoe wear or the need for support",
      "Previous ankle sprains, foot surgery or tendon problems",
      "Medical history relevant to tendon health and healing (diabetes, inflammatory arthritis, steroid use; clinical reasoning)",
      "Footwear and orthosis history, and goals"
    ],
    observation: ["Standing from behind: heel valgus and the 'too many toes' sign compared with the other side [r11]", "Medial arch height and talonavicular prominence", "Swelling behind the medial malleolus", "Gait: pronated foot position in stance and an abducted forefoot", "Footwear wear pattern (medial heel and sole)"],
    palpation: [
      "Tibialis posterior tendon behind the medial malleolus, along the arch and at the navicular, for tenderness and thickening",
      "Spring ligament region between the sustentaculum tali and the navicular, and the deltoid ligament",
      "Lateral ankle below the fibula for impingement in later stages [r14]",
      "Tarsal tunnel region for neural tenderness or Tinel's sign (clinical reasoning)"
    ],
    rangeOfMotion: [
      "Passive heel correction: is the valgus heel correctable (flexible) or fixed? [r6]",
      "Ankle dorsiflexion with the knee straight and bent, to look for calf or gastrocnemius tightness [r3]",
      "Subtalar and midfoot mobility"
    ],
    strength: [
      "Resisted inversion in plantarflexion, with the tendon palpated [r11]",
      "Single heel-rise endurance and quality (does the heel invert?) [r7,r15]",
      "Calf, hip abductor and extensor strength (clinical reasoning)"
    ],
    neuro: [
      "Sensation over the medial and plantar foot (tibial nerve and plantar branches)",
      "Pulses and capillary refill, particularly with marked swelling or diabetes"
    ],
    functional: [
      "Single heel-rise test, counting repetitions and noting heel inversion and pain [r7,r15]",
      "Single-leg stance and single-leg squat, watching for arch collapse and knee valgus",
      "Step-down test",
      "Walking gait and, where relevant, running gait"
    ],
    specialTests: [
      {
        name: "Single heel-rise test",
        purpose: "Test tibialis posterior function and the ability to invert the heel and lock the foot",
        procedure: "Standing on one leg with light hand support, the patient rises onto the toes of the test leg. Watch whether the heel lifts, whether it inverts, and how many repetitions are possible. Compare with the other side.",
        positive: "Inability to rise, a heel that stays in valgus, or pain and early fatigue. Used as one marker of a deficient tendon in a retrospective study [r7].",
        refs: ["r7", "r11"]
      },
      {
        name: "Palpation and resisted inversion in plantarflexion",
        purpose: "Localise pain to the tendon and test its strength",
        procedure: "Palpate the tendon behind the medial malleolus and along the arch while the patient resists inversion with the foot plantarflexed and slightly inverted.",
        positive: "Pain, swelling or weakness compared with the other side. Reduced inversion strength was used with single heel-rise to define a deficient tendon [r7].",
        refs: ["r7"]
      },
      {
        name: "'Too many toes' sign",
        purpose: "Observe forefoot abduction and heel valgus from behind",
        procedure: "View the standing patient from behind and count the lateral toes visible beyond the heel. Compare the sides.",
        positive: "More toes visible laterally on the affected side",
        refs: ["r11"]
      },
      {
        name: "First metatarsal rise sign",
        purpose: "Detect tibialis posterior dysfunction by a change in the first metatarsal when the heel is rotated into varus",
        procedure: "With the patient standing and fully weight-bearing, externally rotate the shank or passively bring the heel into varus.",
        positive: "The head of the first metatarsal lifts off the ground in tibialis posterior dysfunction and stays down in normal function",
        sensitivity: "Positive in all 21 feet with surgically explored dysfunction; no data in healthy controls",
        refs: ["r11"]
      },
      {
        name: "Flexibility of the hindfoot (passive heel correction)",
        purpose: "Separate flexible (stage II) from fixed (stage III) deformity, which changes management",
        procedure: "Passively move the valgus heel to neutral or varus with the patient seated or standing, and assess whether the arch can be restored.",
        positive: "A heel that corrects is flexible. A heel that does not correct is fixed and suggests stage III disease.",
        refs: ["r6"]
      }
    ],
    clinicalRules: [
      {
        name: "No validated clinical rule found",
        description: "No sensitivity or specificity figures were found for the heel-rise test or the other clinical tests. In a series of 21 feet with tibialis posterior dysfunction confirmed at surgical exploration, 'too many toes', the single heel-rise and the double heel-rise were negative in 20% to 35%, whereas the first metatarsal rise sign was positive in all, so a normal test does not exclude the problem [r11]."
      }
    ],
    outcomeMeasures: [
      { name: "Foot Function Index (FFI)", use: "Primary outcome in the trials of orthoses and exercise; pain and disability subscales [r12,r15]" },
      { name: "Single heel-rise repetitions", use: "Performance measure; the number increased after a 10-week eccentric programme in a small study [r15]" },
      { name: "Five-minute walk test with pain rating", use: "Walking tolerance and pain after walking, used in the trials [r12,r15]" },
      { name: "AOFAS ankle-hindfoot score", use: "Clinician-reported outcome used in brace and surgical series [r13,r6,r4]" },
      { name: "Foot and Ankle Ability Measure (FAAM)", use: "Self-reported function in daily living and sport" }
    ],
    imaging: [
      { modality: "Weight-bearing radiographs of the foot and ankle (including a hindfoot alignment view)", indication: "To assess the foot under load and stage the deformity", findings: "Hindfoot valgus, talonavicular uncoverage, arch collapse and lateral impingement [r3,r7]" },
      { modality: "Ultrasound", indication: "Tendon thickening, sheath fluid and tears at the bedside", findings: "Thickened, hypoechoic tendon with fluid in the sheath; neovascularisation on Doppler [r3,r15]" },
      { modality: "MRI", indication: "Persisting pain, suspected tear or surgical planning", findings: "Tendon degeneration or tear, spring ligament injury, fatty degeneration of the muscle [r3]. Radiographs and MRI were unreliable for diagnosing tibialis posterior dysfunction in one small surgical series [r11]." },
      { modality: "Weight-bearing CT", indication: "Specialist assessment of complex deformity", findings: "Three-dimensional alignment. In the 2020 consensus vote, including weight-bearing CT in a classification gained only weak consensus (5 of 9) [r1]." }
    ]
  },

  differentials: [
    { name: "Medial ankle (deltoid) sprain", id: "medial-ankle-sprain", distinguishing: "Eversion mechanism with a clear injury moment, medial swelling and deltoid tenderness, normal single heel-rise" },
    { name: "Tarsal tunnel syndrome", id: "tarsal-tunnel-syndrome", distinguishing: "Burning or tingling in the sole, positive Tinel's sign at the tarsal tunnel and neural symptoms, with a normal tendon on resisted inversion" },
    { name: "Plantar heel pain", id: "plantar-heel-pain", distinguishing: "Pain at the medial calcaneal tubercle that is worst with the first steps, with preserved heel-rise and inversion strength" },
    { name: "Navicular stress fracture", id: "navicular-stress-fracture", distinguishing: "Vague medial midfoot pain in a runner or jumper with tenderness on the navicular 'N spot' and normal heel-rise" },
    { name: "Peroneal tendinopathy", id: "peroneal-tendinopathy", distinguishing: "Pain behind and below the lateral malleolus. It can coexist when the heel collapses into valgus [r14]." },
    { name: "Medial tibial stress syndrome", id: "medial-tibial-stress-syndrome", distinguishing: "Diffuse pain along the posteromedial tibial border after running; the tendon behind the malleolus is not tender" },
    { name: "Midportion Achilles tendinopathy", id: "midportion-achilles-tendinopathy", distinguishing: "Posterior pain 2–6 cm above the heel; can coexist with a tight calf and flatfoot posture" },
    { name: "Inflammatory arthritis or subtalar and talonavicular arthritis", distinguishing: "Morning stiffness, multiple joints or rigid pain on subtalar and midfoot movement, rather than tendon pain (clinical reasoning)" }
  ],
  redFlags: [
    "A sudden pop or pain with immediate collapse of the arch, loss of inversion strength or a visible gap: suspect acute rupture and arrange urgent specialist review.",
    "A rigid, painful hindfoot deformity that does not correct: suspect stage III–IV disease or arthritic change and refer for orthopaedic assessment [r3,r6].",
    "Swelling with warmth and redness, fever or diabetes with a red, swollen foot: exclude infection or a Charcot foot the same day (clinical reasoning).",
    "Numbness or burning in the sole, or an asymmetric neurological deficit: assess for tarsal tunnel syndrome or neuropathy.",
    "Absent pulses or a cold, pale foot: send to emergency for vascular assessment.",
    "No improvement after about 3 months of supervised care with orthoses (a clinical convention), or a progressing deformity: refer for MRI and specialist review, since surgery is for failed conservative care [r3,r4]."
  ],

  management: {
    principles: "Management depends on the stage and on whether the deformity is flexible. For early disease, the best available evidence is a combination of orthoses, calf stretching and progressive tendon loading, with more benefit from eccentric loading in small trials [r2,r12,r15]. Flexible stage II disease is commonly supported with a custom orthosis or brace over the longer term [r13,r6]. Surgery is reserved for failed conservative care, and correction of hindfoot valgus is thought to be the key element, while treatment of the tendon alone has not been proven to succeed [r3]. Evidence overall is small and low quality. The systematic review found only three trials (93 participants), minimal reporting of exercise prescription and no high-quality research [r2].",
    medical: [
      {
        name: "Foot orthoses with medial support, or an ankle–foot brace for stage II",
        description: "In a prospective series of 18 patients with flexible stage II disease, a custom-moulded shell brace improved the AOFAS score from 56 to 82 over a mean of 61.4 months, but 3 of 18 (16%) progressed to a fixed deformity and 3 (16%) developed calluses [r6]. In a retrospective 7–10 year follow-up of 33 feet in a double upright ankle–foot orthosis, 69.7% were brace-free and had avoided surgery, 15.2% could not wean from the brace and 5 had surgery [r13]. A review says that orthotics with medial support or braces unload the tendon [r3]. Evidence is from uncontrolled series.",
        evidence: "limited", recommendation: "recommended", refs: ["r6", "r13", "r3"]
      },
      {
        name: "Corticosteroid injection of the tendon sheath",
        description: "A systematic review of tendon sheath injections (including tibialis posterior and peroneal) found low-quality studies with no placebo comparisons, and short-term pain improvement [r16]. Rupture is a recognised concern with injections into a degenerating tendon (clinical reasoning), so any use is a specialist decision.",
        evidence: "very-limited", recommendation: "consider", refs: ["r16"]
      },
      {
        name: "Platelet-rich plasma and other biologics",
        description: "A review notes that first results of platelet-rich plasma have been published [r3]. There are no controlled data, so it cannot be recommended outside research.",
        evidence: "very-limited", recommendation: "not-recommended", refs: ["r3"]
      },
      {
        name: "Surgery for failed conservative care (flexor digitorum longus transfer with calcaneal osteotomy; other reconstruction)",
        description: "In a series of 32 patients with stage II disease refractory to shoewear, orthoses and bracing, FDL transfer with medial translational calcaneal osteotomy raised the AOFAS score from 48 to 84, and 30 of 32 were satisfied [r4]. In another series of 32 patients with early flexible deformity after failed conservative care, 29 of 32 could perform a single heel rise at 12 months, with a mean AOFAS of 89 [r5]. A review says surgery on the tendon alone has not been proven, and that medialising calcaneal osteotomy is the key element [r3]. All the evidence is from case series.",
        evidence: "limited", recommendation: "consider", refs: ["r4", "r5", "r3"]
      }
    ],
    physio: [
      {
        name: "Progressive tendon loading (eccentric emphasis) with calf stretching and orthoses",
        description: "In a randomised trial of 36 adults with stage I or II disease, a 12-week programme of orthoses and stretching, with or without concentric or eccentric progressive resistive exercise, improved Foot Function Index scores in all groups, with the most improvement in the eccentric group and the least in orthoses and stretching alone [r12]. A systematic review of three trials (93 participants) found moderate effects (SMD 0.6–1.2) for reducing pain and disability with eccentric strengthening plus stretching and orthoses [r2]. In a small uncontrolled study, a 10-week twice-daily eccentric programme improved symptoms and single heel-rise numbers without changing tendon morphology [r15].",
        evidence: "limited", recommendation: "recommended", refs: ["r12", "r2", "r15"]
      },
      {
        name: "Orthoses and supportive footwear as the base of the programme",
        description: "All groups in the trial wore orthoses [r12]. In six asymptomatic adults with flat feet, exercising in shoes with foot orthoses selectively activated tibialis posterior, while barefoot exercise recruited other calf muscles (p = 0.019 for higher activation with orthoses) [r8]. This is a mechanistic study and does not show clinical benefit.",
        evidence: "limited", recommendation: "recommended", refs: ["r12", "r8"]
      },
      {
        name: "Calf and gastrocnemius stretching",
        description: "Calf stretching was part of every trial programme [r12,r15], and a short gastrocnemius is associated with the deformity [r3]. The independent effect of stretching has not been tested.",
        evidence: "expert-opinion", recommendation: "consider", refs: ["r12", "r15", "r3"]
      },
      {
        name: "Load management, gait and activity modification",
        description: "Reduce high-volume standing, walking or running early, then build load by pain response, as in other tendinopathies [r9,r17]. No PTTD-specific load studies were found.",
        evidence: "expert-opinion", recommendation: "recommended", refs: ["r9", "r17"]
      },
      {
        name: "Exercise alone to correct a rigid (stage III–IV) deformity",
        description: "The trials included stage I and II only [r12]. A fixed hindfoot deformity does not correct with exercise, so refer for orthotic or surgical review [r3,r6].",
        evidence: "very-limited", recommendation: "not-recommended", refs: ["r12", "r3", "r6"]
      }
    ],
    education: [
      "The main tendon that holds up the arch is overloaded. It usually improves with support, graded strengthening and sensible activity, but it needs weeks to months.",
      "Orthoses and good footwear are often part of long-term care. In one long follow-up about 7 in 10 people with flexible stage II disease stayed brace-free and avoided surgery [r13].",
      "Strengthening works best together with support. Doing the exercises without supportive footwear is less likely to settle the pain (clinical reasoning).",
      "A sudden pop or collapse of the arch needs prompt review.",
      "Tell your physio if the foot is getting flatter or stiffer, because a flexible foot is easier to manage than a fixed one."
    ]
  },

  rehab: {
    overview: "This programme is for early, flexible disease (stages I and II). It combines orthoses and supportive footwear, calf stretching and progressive loading, as in the Kulig trials, which used 10–12 week programmes in early disease [r12,r15]. The trials report few dosing parameters, and a systematic review notes minimal reporting of exercise prescription [r2], so the sets, repetitions and times below are common clinical conventions and not trial doses. Progression is criteria-based and driven by the tendon's response over 24 hours. A rigid deformity or suspected tear needs specialist review before loading.",
    stages: [
      {
        name: "Calm, support and begin",
        timeframe: "Weeks 0–4 (typical)",
        goals: ["Settle pain and swelling", "Support the arch with footwear and orthoses", "Maintain ankle and calf range", "Begin low-load tibialis posterior activation"],
        precautions: ["Exclude acute rupture and a rigid deformity first (red flags)", "Avoid barefoot walking on hard floors and long periods of standing", "Keep pain at the tendon at 3/10 or less during exercise"],
        exercises: [
          { name: "Gastrocnemius and soleus stretching (wall or step)", dosage: "3 × 30 s each leg, twice daily", cues: "Keep the heel down and the foot pointing straight ahead" },
          { name: "Isometric inversion hold in plantarflexion (band or hand resistance)", dosage: "5 × 30 s at low effort, 2 times daily", cues: "Turn the sole inward, keep the knee still", figure: { pose: "ex-ankle-alphabet", view: "lateral", props: ["resistance-band"] } },
          { name: "Ankle alphabet (pain-free)", dosage: "2 sets, 3–4 times daily", cues: "Move from the ankle, small and smooth", figure: { pose: "ex-ankle-alphabet", view: "lateral", props: ["chair"] } },
          { name: "Supported walking in orthoses and firm shoes", dosage: "10–20 minutes, building daily as comfortable", cues: "Heel strike, roll through, keep the arch lifted", figure: { pose: "walk-heel-strike", view: "lateral" } },
          { name: "Single-leg balance in shoes with orthoses", dosage: "3 × 20–30 s, near a support", cues: "Soft knee, keep the arch up, pelvis level", figure: { pose: "ex-single-leg-balance", view: "anterior" } }
        ],
        progressionCriteria: ["Walking 20 minutes in supportive footwear with pain 3/10 or less", "Pain at rest 2/10 or less", "Swelling reducing", "Isometric inversion tolerated with mild or no pain"]
      },
      {
        name: "Progressive tendon loading",
        timeframe: "Weeks 2–12 (typical; the trials ran 10–12 weeks) [r12,r15]",
        goals: ["Build tibialis posterior and calf strength with an eccentric emphasis", "Continue calf stretching and orthoses", "Improve single-leg control", "Reduce pain and the Foot Function Index"],
        precautions: ["Increase load only if the 24-hour response is acceptable", "Avoid heel rises that let the heel collapse into valgus", "Keep orthoses on for exercises and walking"],
        exercises: [
          { name: "Band-resisted inversion, slow eccentric return", dosage: "3 × 10–15, 3 s lowering, daily", cues: "Turn the sole inward with the band, control the return slowly", figure: { pose: "ex-ankle-alphabet", view: "lateral", props: ["resistance-band"] } },
          { name: "Double-leg heel raise with heels drawn together", dosage: "3 × 10–12, 3 s lowering, daily", cues: "Rise evenly, squeeze the heels together, keep the heel straight", figure: { pose: "ex-calf-raise", view: "lateral" } },
          { name: "Eccentric single-leg heel lowering (two up, one down)", dosage: "3 × 8–10, 3 s lowering, 3 times per week", cues: "Rise on two legs, lower on one, keep the heel inverted", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Calf stretching (gastrocnemius and soleus)", dosage: "3 × 30 s each leg, daily", cues: "Keep the arch from collapsing during the stretch" },
          { name: "Single-leg balance on a softer surface", dosage: "3 × 30–45 s, eyes open then closed", cues: "Quiet foot, arch lifted", figure: { pose: "ex-single-leg-balance", view: "anterior" } }
        ],
        progressionCriteria: ["Single-leg heel rise 5 or more repetitions without heel collapse", "Pain after a 5-minute walk 2/10 or less", "Foot Function Index improving", "No swelling after loading sessions"]
      },
      {
        name: "Capacity and single-leg strength",
        timeframe: "Weeks 8–20 (typical)",
        goals: ["Single-leg heel rise 10–15 repetitions or more", "Controlled step-down and single-leg squat", "Build walking volume and prepare for impact", "Reduce reliance on pain-guided limits"],
        precautions: ["Progress load gradually and re-assess after each increase", "Stop and review if pain stays above 4/10 or does not settle in 24 hours", "Continue orthoses and calf stretching"],
        exercises: [
          { name: "Single-leg heel rise (concentric and eccentric)", dosage: "3 × 8–12, 3 s up and 3 s down, 3 times per week, add load when 12 is easy", cues: "Rise straight up over the big toe, heel turned inward", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Weighted single-leg heel raise", dosage: "4 × 6–10 with a dumbbell, 2–3 times per week", cues: "Slow lowering, keep the arch lifted", figure: { pose: "ex-single-leg-calf-raise", view: "lateral", props: ["dumbbell"] } },
          { name: "Step-down with arch control", dosage: "3 × 10 each leg, 3 times per week", cues: "Knee over the second toe, do not let the arch collapse", figure: { pose: "ex-step-down", view: "anterior", props: ["step"] } },
          { name: "Single-leg squat to a chair", dosage: "3 × 8 each leg", cues: "Level pelvis, knee over the second toe, arch lifted", figure: { pose: "ex-single-leg-squat", view: "anterior" } },
          { name: "Graded walking program", dosage: "Build to 30–45 minutes, increasing by about 10% per week (clinical convention)", cues: "Supportive shoes, upright posture" }
        ],
        progressionCriteria: ["Single-leg heel rise 10–15 repetitions with heel inversion, close to the other side (clinical convention)", "Step-down and single-leg squat without arch collapse", "Walking 30 minutes pain-free", "Pain at the tendon 2/10 or less in daily life"]
      },
      {
        name: "Return to impact and long-term maintenance",
        timeframe: "Weeks 16–30+ (typical)",
        goals: ["Return to running, hopping and sport if desired", "Maintain strength and flexibility", "Continue long-term foot support", "Monitor for progression"],
        precautions: ["Introduce running gradually and review footwear", "Keep orthoses for running and sport if prescribed", "Re-assess if the arch lowers, swelling returns or pain rises"],
        exercises: [
          { name: "Walk–jog progression", dosage: "1 min jog, 1 min walk, 8–10 rounds, building jog time every 2–3 sessions", cues: "Short, quiet steps under the body", figure: { pose: "run-midstance", view: "lateral" } },
          { name: "Double-leg landing, then single-leg hop and stick", dosage: "3 × 8 double-leg landings, then 3 × 5 single-leg hops with a 2 s stick", cues: "Soft landing, ankle, knee and hip bend together, arch lifted", figure: { pose: "jump-land", view: "lateral" } },
          { name: "Single-leg hopping", dosage: "3 × 5 each leg, 2 times per week", cues: "Land under the body and keep the heel straight", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Weighted single-leg heel raise (maintenance)", dosage: "3 × 8–10 with a dumbbell, 1–2 times per week long term", cues: "Slow lowering, keep the arch lifted", figure: { pose: "ex-single-leg-calf-raise", view: "lateral", props: ["dumbbell"] } },
          { name: "Calf stretching and foot-support routine", dosage: "3 × 30 s, daily or alternate days long term", cues: "Keep the arch from collapsing" }
        ],
        progressionCriteria: ["Pain-free jogging for 20 minutes", "Hop tests without pain or arch collapse", "Single-leg heel rise within about 90% of the other side (clinical convention)", "No progression of deformity on clinical re-check"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated return-to-sport criteria exist for PTTD. These are common clinical conventions.",
      "Pain at the tendon 2/10 or less at rest and with loading, and no swelling or next-day flare",
      "Single-leg heel rise 10–15 repetitions or more with the heel inverting, close to the other side",
      "Step-down and single-leg squat with the arch held, without knee valgus or heel collapse",
      "Hop and landing tests without pain or arch collapse",
      "Orthoses or bracing in place where needed, and footwear reviewed",
      "Running or sport volume rebuilt gradually with a plan for monitoring the foot"
    ],
    tests: ["Single heel-rise test (repetitions and heel inversion)", "Step-down test", "Single-leg squat", "Single and triple hop tests", "Foot Function Index or FAAM", "Passive heel correction check (flexible versus fixed)"]
  },
  prognosis: "Prognosis depends on the stage. In trials of early disease, pain and Foot Function Index scores improved with orthoses, stretching and exercise, with the most improvement with eccentric loading, but trials were small and short [r2,r12]. A 10-week eccentric programme improved symptoms and function, but tendon morphology and neovascularisation remained abnormal [r15]. For flexible stage II disease, 69.7% of 33 feet in a double upright brace were brace-free and had avoided surgery at a mean of 8.6 years, and 5 had surgery [r13]. In a shell-brace series, 3 of 18 (16%) progressed to a fixed deformity over a mean of 61.4 months [r6]. After surgery for failed conservative care, case series report good AOFAS outcomes (48 to 84 after FDL transfer with calcaneal osteotomy; mean 89 after a modified Cobb procedure with osteotomy) [r4,r5]. All of these studies are uncontrolled or small.",
  prevention: [
    "There is no proven prevention for PTTD. Reasonable steps (clinical reasoning) include supportive footwear for people with a flat foot, gradual increases in walking and running load, and early assessment of medial ankle pain.",
    "Early treatment of tendon pain with load management, orthoses and exercise may reduce the chance of progression, but progression rates are unknown [r13,r6].",
    "Maintain calf flexibility, because a short gastrocnemius is associated with the deformity [r3].",
    "Review the foot after any medial ankle sprain or persistent medial pain (clinical reasoning)."
  ],
  clinicalPearls: [
    "New medial ankle pain in a middle-aged person is PTTD until proven otherwise. Look at the heel and arch from behind, palpate behind the medial malleolus and do a single heel rise [r11].",
    "A normal heel-rise does not exclude PTTD: in 21 surgically explored feet, the single and double heel-rise and 'too many toes' were negative in 20–35% [r11].",
    "Always check whether the heel corrects passively. A flexible deformity is manageable with conservative care, but a fixed one needs specialist review [r6].",
    "Orthoses are the foundation, and exercise improves on them: all groups in the trial wore orthoses, and the eccentric group improved most [r12].",
    "Pain relief does not mean the tendon looks normal. After a 10-week eccentric programme, tendon structure remained abnormal on ultrasound [r15].",
    "Be honest with patients about the evidence. It is small and uncontrolled, and the treatment 'package' is not separable into its parts [r2]."
  ],
  related: ["peroneal-tendinopathy", "medial-ankle-sprain", "tarsal-tunnel-syndrome", "plantar-heel-pain", "navicular-stress-fracture", "midportion-achilles-tendinopathy"],

  references: [
    { id: "r1", citation: "Myerson MS, Thordarson DB, Johnson JE, et al. Classification and nomenclature: progressive collapsing foot deformity. Foot Ankle Int. 2020;41(10):1271-6.", pmid: "32856474", doi: "10.1177/1071100720950722", type: "consensus-statement", year: 2020 },
    { id: "r2", citation: "Ross MH, Smith MD, Mellor R, et al. Exercise for posterior tibial tendon dysfunction: a systematic review of randomised clinical trials and clinical guidelines. BMJ Open Sport Exerc Med. 2018;4(1):e000430.", pmid: "30271611", doi: "10.1136/bmjsem-2018-000430", type: "systematic-review", year: 2018 },
    { id: "r3", citation: "Walther M. Degeneration of the posterior tibial tendon: established and new concepts. Unfallchirurg. 2017;120(12):1031-7.", pmid: "28755303", doi: "10.1007/s00113-017-0390-6", type: "narrative-review", year: 2017 },
    { id: "r4", citation: "Myerson M, Corrigan J. Treatment of posterior tibial tendon dysfunction with flexor digitorum longus tendon transfer and calcaneal osteotomy. Orthopedics. 1996;19(5):383-8.", pmid: "8727331", doi: "10.3928/0147-7447-19960501-07", type: "cohort", year: 1996 },
    { id: "r5", citation: "Parsons S, Naim S, Richards PJ, et al. Correction and prevention of deformity in type II tibialis posterior dysfunction. Clin Orthop Relat Res. 2010;468(4):1025-32.", pmid: "19847582", doi: "10.1007/s11999-009-1122-1", type: "cohort", year: 2010 },
    { id: "r6", citation: "Krause F, Bosshard A, Lehmann O, et al. Shell brace for stage II posterior tibial tendon insufficiency. Foot Ankle Int. 2008;29(11):1095-100.", pmid: "19026202", doi: "10.3113/FAI.2008.1095", type: "cohort", year: 2008 },
    { id: "r7", citation: "Lalevée M, Barbachan Mansur NS, Schmidt E, et al. Does tibialis posterior dysfunction correlate with a worse radiographic overall alignment in progressive collapsing foot deformity? A retrospective study. Foot Ankle Surg. 2022;28(7):995-1001.", pmid: "35177330", doi: "10.1016/j.fas.2022.02.004", type: "cohort", year: 2022 },
    { id: "r8", citation: "Kulig K, Burnfield JM, Reischl S, et al. Effect of foot orthoses on tibialis posterior activation in persons with pes planus. Med Sci Sports Exerc. 2005;37(1):24-9.", pmid: "15632663", doi: "10.1249/01.mss.0000150073.30017.46", type: "cross-sectional", year: 2005 },
    { id: "r9", citation: "Cook JL, Purdam CR. Is tendon pathology a continuum? A pathology model to explain the clinical presentation of load-induced tendinopathy. Br J Sports Med. 2009;43(6):409-16.", pmid: "18812414", doi: "10.1136/bjsm.2008.051193", type: "narrative-review", year: 2009 },
    { id: "r10", citation: "Cook JL, Rio E, Purdam CR, et al. Revisiting the continuum model of tendon pathology: what is its merit in clinical practice and research? Br J Sports Med. 2016;50(19):1187-91.", pmid: "27127294", doi: "10.1136/bjsports-2015-095422", type: "narrative-review", year: 2016 },
    { id: "r11", citation: "Hintermann B, Gächter A. The first metatarsal rise sign: a simple, sensitive sign of tibialis posterior tendon dysfunction. Foot Ankle Int. 1996;17(4):236-41.", pmid: "8696502", doi: "10.1177/107110079601700410", type: "diagnostic-accuracy", year: 1996 },
    { id: "r12", citation: "Kulig K, Reischl SF, Pomrantz AB, et al. Nonsurgical management of posterior tibial tendon dysfunction with orthoses and resistive exercise: a randomized controlled trial. Phys Ther. 2009;89(1):26-37.", pmid: "19022863", doi: "10.2522/ptj.20070242", type: "rct", year: 2009 },
    { id: "r13", citation: "Lin JL, Balbas J, Richardson EG. Results of non-surgical treatment of stage II posterior tibial tendon dysfunction: a 7- to 10-year followup. Foot Ankle Int. 2008;29(8):781-6.", pmid: "18752775", doi: "10.3113/FAI.2008.0781", type: "cohort", year: 2008 },
    { id: "r14", citation: "Davda K, Malhotra K, O'Donnell P, et al. Peroneal tendon disorders. EFORT Open Rev. 2017;2(6):281-92.", pmid: "28736620", doi: "10.1302/2058-5241.2.160047", type: "narrative-review", year: 2017 },
    { id: "r15", citation: "Kulig K, Lederhaus ES, Reischl S, et al. Effect of eccentric exercise program for early tibialis posterior tendinopathy. Foot Ankle Int. 2009;30(9):877-85.", pmid: "19755073", doi: "10.3113/FAI.2009.0877", type: "cohort", year: 2009 },
    { id: "r16", citation: "Cushman DM, Carefoot A, Lisenby S, et al. A systematic review of the efficacy of corticosteroid injections of tendon sheaths, excluding stenosing tenosynovitis of the wrist and hand. Am J Phys Med Rehabil. 2021;100(7):683-8.", pmid: "33017344", doi: "10.1097/PHM.0000000000001609", type: "systematic-review", year: 2021 },
    { id: "r17", citation: "Malliaras P, Barton CJ, Reeves ND, et al. Achilles and patellar tendinopathy loading programmes: a systematic review comparing clinical outcomes and identifying potential mechanisms for effectiveness. Sports Med. 2013;43(4):267-86.", pmid: "23494258", doi: "10.1007/s40279-013-0019-z", type: "systematic-review", year: 2013 }
  ],

  animation: {
    title: "How tibialis posterior dysfunction develops",
    phases: [
      {
        type: "moi", label: "Repeated loading", duration: 7, view: "lateral", environment: "road",
        actors: [{ id: "athlete", kit: "older-adult" }],
        keyframes: [
          { t: 0, pose: "walk-heel-strike", root: { x: -50 } },
          { t: 0.9, pose: "walk-push-off", root: { x: -35 } },
          { t: 1.8, pose: "walk-heel-strike", root: { x: -20 } },
          { t: 2.7, pose: "walk-push-off", root: { x: -5 } },
          { t: 3.6, pose: "walk-heel-strike", root: { x: 10 } },
          { t: 4.5, pose: "walk-push-off", root: { x: 25 } },
          { t: 5.4, pose: "walk-heel-strike", root: { x: 40 } },
          { t: 6.4, pose: "ex-single-leg-calf-raise", root: { x: 45 } }
        ],
        forces: [
          { t: [0.2, 1.4], at: "footR", dir: "up", label: "Ground force with every step", size: "m" },
          { t: [2.6, 4.2], at: "ankleR", dir: "toward-viewer", label: "Tendon holds the arch up", size: "m" },
          { t: [5.4, 6.8], at: "footR", dir: "up", label: "Load outstrips capacity", size: "l" }
        ],
        highlights: [{ t: [1.5, 7], at: "ankleR" }],
        slowmo: [{ t: [2.6, 4.0], rate: 0.5 }],
        captions: [
          { t: 0, text: "A person with a flat, valgus foot walks and stands for long hours every day." },
          { t: 1.4, text: "At every step the tibialis posterior tendon holds the heel and arch as the foot pushes off." },
          { t: 2.8, text: "A valgus heel and a tight calf raise the demand on the tendon." },
          { t: 4.2, text: "Over months and years, the load can exceed the tendon's capacity to adapt." },
          { t: 5.4, text: "The tendon becomes painful behind the medial ankle bone." },
          { t: 6.4, text: "Rising on one foot gets harder, and the heel no longer turns inward as it should." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "ankleR",
        captions: [{ t: 0, text: "Zooming into the inner side of the ankle." }]
      },
      {
        type: "closeup", label: "Inside the ankle", duration: 10, scene: "ankle-medial",
        actions: [
          { t: 0, do: "highlight", target: "tibialisPosteriorTendon" },
          { t: 0.3, do: "label", target: "tibialisPosteriorTendon", text: "Tibialis posterior tendon" },
          { t: 1.2, do: "arrow", at: "medialArchApex", dir: "up", label: "Holds the arch up", size: "m" },
          { t: 1.8, do: "stretch", target: "tibialisPosteriorTendon", amount: 0.3, dur: 1.0 },
          { t: 3.2, do: "reset", target: "tibialisPosteriorTendon" },
          { t: 3.6, do: "inflame", target: "tibialisPosteriorTendon", amount: 0.5 },
          { t: 3.8, do: "swell", target: "tibialisPosteriorTendon", amount: 0.5 },
          { t: 4.2, do: "pain", at: "tibialisPosteriorRetromalleolar", hold: 3 },
          { t: 5.0, do: "thicken", target: "tibialisPosteriorTendon", amount: 0.6, dur: 1.4 },
          { t: 5.2, do: "label", target: "tibialisPosteriorTendon", text: "Thickened, irritated tendon" },
          { t: 6.2, do: "degenerate", target: "tibialisPosteriorTendon", dur: 1.4 },
          { t: 7.2, do: "tear", target: "tibialisPosteriorTendon", grade: 2, at: 0.3 },
          { t: 7.3, do: "stretch", target: "springLigament", amount: 0.4, dur: 1.0 },
          { t: 8.2, do: "move", target: "navicular", dir: "down", amount: 0.25, dur: 1.2 },
          { t: 8.4, do: "label", target: "springLigament", text: "Arch support fails: the arch lowers" },
          { t: 9.2, do: "camera", at: "medialArchApex", zoom: 1.4, dur: 0.7 }
        ],
        captions: [
          { t: 0, text: "The tibialis posterior tendon passes behind the medial malleolus and under the navicular." },
          { t: 1.2, text: "It is the main dynamic support of the medial arch and the hindfoot." },
          { t: 3.6, text: "With repeated overload, the tendon and its sheath become irritated and swollen." },
          { t: 4.2, text: "Pain sits behind and below the inner ankle bone, and is worse with walking." },
          { t: 5.0, text: "The tendon thickens and degenerates. It may tear partly or completely." },
          { t: 7.3, text: "As the tendon fails, the spring ligament stretches and the arch lowers." },
          { t: 8.4, text: "The heel drifts into valgus and the forefoot turns out. This is progressive collapsing foot deformity." }
        ]
      },
      {
        type: "micro", label: "Tendon continuum", duration: 10, tissue: "tendon-continuum",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.6, stage: "reactive" }, { t: 3.4, stage: "disrepair" },
          { t: 5.2, stage: "degenerative" }, { t: 7.2, stage: "load-adaptation" }
        ],
        timeLabels: [{ t: 1.6, text: "Days to weeks" }, { t: 3.4, text: "Weeks to months" }, { t: 5.2, text: "Months to years" }, { t: 7.2, text: "Progressive loading" }],
        captions: [
          { t: 0, text: "Healthy tendon: tightly packed, aligned type I collagen with a few resident tenocytes." },
          { t: 1.6, text: "Reactive: after a load spike, tenocytes activate and the matrix swells. This can reverse." },
          { t: 3.4, text: "Disrepair: cells try to repair the tendon, the collagen becomes disorganised and new vessels appear." },
          { t: 5.2, text: "Degenerative: areas of cell death and disorganised matrix remain, with less capacity to reverse." },
          { t: 7.2, text: "Progressive loading builds capacity. Tendon pain can settle even if the structure stays abnormal." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL10" }
};
