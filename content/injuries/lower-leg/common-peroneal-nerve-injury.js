export default {
  id: "common-peroneal-nerve-injury",
  name: "Common peroneal (fibular) nerve injury",
  shortName: "Common peroneal nerve injury",
  aka: ["fibular nerve injury", "peroneal neuropathy", "peroneal nerve palsy", "foot drop", "drop foot", "fibular neck nerve compression", "CPN palsy", "crossed-leg palsy"],
  region: "lower-leg",
  tissues: ["nerve"],
  onset: "acute-or-gradual",
  mechanismType: ["contact", "traction", "compression"],
  populations: ["athletes with knee or ankle ligament injuries", "people with knee dislocation or multiligament knee injury", "people in casts, splints or tight bandages", "people with prolonged squatting, kneeling or leg crossing", "people after surgery or prolonged lying"],
  sports: ["football", "rugby", "skiing", "basketball", "martial arts"],
  urgency: "urgent",
  summary: "Injury to the common peroneal nerve at the fibular neck from a blow, stretch, tight cast or knee dislocation, causing foot drop and dorsal foot numbness. Prognosis varies and the evidence is mostly case series.",
  keyFacts: [
    { label: "Typical recovery", value: "Depends on the grade. Neurapraxia is presumed to recover in about 8–12 weeks (a rough guide from a facial nerve series); axonal injury regrows slowly and may need surgery. CPN injury has a poor prognosis compared with other peripheral nerve injuries after multiligament knee injury" },
    { label: "Return to sport", value: "Criteria-based: recovery of dorsiflexion strength and control, with an ankle-foot orthosis in the meantime; no validated criteria" },
    { label: "Key test", value: "Weak ankle dorsiflexion, toe extension and eversion with numbness over the dorsum of the foot and lateral leg; preserved inversion and hip abduction point away from an L5 radiculopathy" },
    { label: "Imaging", value: "Nerve conduction studies and EMG localise and grade the lesion; ultrasound or MRI for a compressive mass or surgical planning" },
    { label: "Incidence", value: "Peroneal nerve palsy is the most common entrapment neuropathy of the lower limb; the common peroneal nerve is injured in 16% to 40% of multiligament knee injuries" },
    { label: "Early referral", value: "Complete foot drop after knee dislocation, an open wound, a tense compartment or a progressive deficit; and no recovery after about 3 months" }
  ],
  overview: "The common peroneal nerve (CPN, also called the common fibular nerve) is injured most often by compression at the level of the fibular head, where it lies close to the bone; peroneal nerve palsy is the most common entrapment neuropathy of the lower extremity [r1]. The usual presentation is acute complete or partial foot drop, sometimes with numbness over the foot or leg [r1]. In sport it also follows stretch: the nerve is highly vulnerable to stretch during varus stress to the knee, particularly with posterolateral corner injury, and it is injured in 16% to 40% of multiligament knee injuries [r2]. Rarely it follows an inversion ankle sprain [r3].\n\nThe physiotherapist's role is to recognise the pattern, separate it from an L5 radiculopathy, record a careful baseline, protect the limb with an orthosis, and make sure that a nerve that is not recovering reaches a surgeon in time [r2,r4]. The evidence for management is mostly case series and expert review: limited evidence supports early one-stage nerve reconstruction combined with tendon transfer, and optimal management continues to change [r2,r5]. Management should be individualised.",

  epidemiology: {
    text: "Peroneal nerve palsy is the most common entrapment neuropathy of the lower extremity. Compression is the most common cause, and the most common site is the fibular head [r1]. Multiligament knee injuries account for under 0.02% of all orthopaedic injuries, and 16% to 40% of those patients have an associated CPN injury [r2]. The incidence of nerve injury after ankle sprain is not known; few cases have been reported, and delayed palsy is possible [r3]. In a surgical series of 318 operated knee-level CPN lesions (a referral population, not an incidence figure), 44% were stretch or contusion without fracture or dislocation, 12% lacerations, 13% tumours, 9% entrapments, 7% stretch or contusion with fracture or dislocation, 7% compressions, 4% iatrogenic injuries and 4% gunshot wounds [r6].",
    riskFactors: {
      intrinsic: [
        "A superficial course around the fibular neck, close to the proximal fibula, which predisposes the nerve to injury during local trauma and dislocation [r2,r1]",
        "Ligament laxity or severe posterolateral corner injury, which allows large varus stretch [r2]",
        "Conditions that reduce nerve resilience, such as diabetes or neuropathy (clinical reasoning; not quantified in the sources read)",
        "Marked weight loss and low body fat over the fibular neck, which reduce padding (clinical reasoning; not quantified in the sources read)"
      ],
      extrinsic: [
        "Knee dislocation and multiligament injury, particularly with varus stress [r2]",
        "Inversion ankle sprain, with traction on the nerve (rare) [r3]",
        "Direct blow to the fibular neck, and compression from a tight cast, splint or bandage (clinical convention) [r1]",
        "Prolonged squatting, kneeling, leg crossing or lying with the leg externally rotated (clinical convention)",
        "Laceration, surgery or other iatrogenic injury [r6]"
      ]
    }
  },

  mechanism: {
    summary: "The CPN winds around the fibular neck just under the skin, so it can be compressed against bone by a blow, cast or sustained position, or stretched when the knee or ankle is forced into varus or inversion [r2,r1,r3]. Mild compression blocks conduction without destroying the axon (neurapraxia); greater force or longer duration disrupts axons (axonotmesis), and complete division is neurotmesis [r7,r8].",
    sequence: [
      "A force acts at the fibular neck: a direct blow, sustained pressure from a cast or position, or a stretch from varus stress at the knee or inversion at the ankle [r2,r3].",
      "The nerve is squeezed against the fibula or stretched around it.",
      "Blood flow to the nerve falls and conduction fails at the injury site (mechanistic model).",
      "In neurapraxia the axon is intact and conduction below the lesion is preserved [r8].",
      "With greater force or time, axons are disrupted and the part of the nerve below the lesion degenerates (Wallerian degeneration) [r7,r8].",
      "The ankle dorsiflexors, toe extensors and evertors lose their input and weaken, and the dorsum of the foot goes numb, so the foot drops [r1].",
      "If the pathway is intact, axons regrow at about 1 mm a day (a figure measured in rat studies); a divided nerve or large gap needs surgery [r9,r7]."
    ],
    variants: [
      { name: "Compression at the fibular head", description: "From a blow, a tight cast, splint or bandage, or a sustained posture such as prolonged squatting or leg crossing; the commonest cause and site [r1]." },
      { name: "Stretch or traction (varus or inversion)", description: "The nerve is highly vulnerable to stretch during varus stress to the knee, particularly in posterolateral corner injuries, and rarely after inversion ankle sprain [r2,r3]." },
      { name: "Knee dislocation and multiligament injury", description: "The CPN is injured in 16% to 40% of these patients, and these injuries have a poor prognosis [r2]." },
      { name: "Laceration, iatrogenic, compressive mass and other", description: "Lacerations were 12%, tumours 13%, entrapments 9% and iatrogenic injury 4% of 318 operative lesions [r6]." }
    ]
  },

  anatomy: {
    text: "The CPN is a branch of the sciatic nerve that leaves the popliteal fossa, winds around the fibular neck under the skin and then passes through the proximal peroneus longus, where it divides into the superficial and deep peroneal nerves (standard anatomy). The superficial peroneal nerve supplies peroneus longus and brevis (eversion) and the skin of the lateral leg and dorsum of the foot. The deep peroneal nerve supplies tibialis anterior, extensor hallucis longus and extensor digitorum longus (dorsiflexion and toe extension) and the skin of the first web space (standard anatomy). Injury can occur anywhere from the sciatic origin to the terminal branches, but the most common site of compression is the fibular head [r1]. Tibialis posterior (inversion; tibial nerve, L5) and the hip abductors (superior gluteal nerve, L4–S1) are not supplied by the CPN, so they are normal in an isolated CPN lesion (standard anatomy).",
    structures: [
      { name: "Common peroneal nerve", role: "Winds around the fibular neck just under the skin and supplies the dorsiflexors and evertors; vulnerable to compression and stretch there [r1,r2]" },
      { name: "Fibular head and neck", role: "Bony landmark against which the nerve is compressed [r1]" },
      { name: "Deep peroneal nerve", role: "Motor to tibialis anterior, extensor hallucis longus and extensor digitorum longus; sensory to the first web space (standard anatomy)" },
      { name: "Superficial peroneal nerve", role: "Motor to peroneus longus and brevis; sensory to the lateral leg and dorsum of the foot (standard anatomy)" },
      { name: "Tibialis anterior and long toe extensors", role: "Dorsiflex the ankle and lift the toes in swing phase; weakness causes foot drop [r1]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "In neurapraxia there is a local conduction block with the axon intact, so conduction distal to the lesion is maintained and there is no Wallerian degeneration [r8]. In axonotmesis the axon is disrupted and the part beyond the lesion degenerates; in neurotmesis the nerve is divided, and these degrees are subdivided by Sunderland into five degrees (the Sunderland paper has no abstract in PubMed) [r7,r10]. Neurapraxia is presumed to recover within about 8 to 12 weeks, a figure given in a facial nerve series and used here as a rough guide only [r11].\n\nThe CPN is a vulnerable nerve: CPN injuries have a poor prognosis compared with other peripheral nerve injuries, and the nerve is highly vulnerable to stretch during varus stress [r2]. The severity of the injury determines the outcome after surgery: in a series of 318 operated lesions, longer grafts correlated with more severe injuries and poorer outcomes [r6]. Denervated muscle atrophies within weeks in rat studies [r9], so a lack of recovery should prompt reassessment and referral [r8].",
    structures: [
      { name: "Axon and myelin", effect: "Intact in neurapraxia with a local conduction block; disrupted in axonotmesis and neurotmesis, with Wallerian degeneration distally [r8,r7]" },
      { name: "Connective tissue layers", effect: "Preserved in lesser injuries, which supports regrowth; disrupted in the severe Sunderland degrees [r10,r7]" },
      { name: "Vasa nervorum", effect: "Compression and stretch reduce blood flow to the nerve (mechanistic model) [r8]" },
      { name: "Dorsiflexor and evertor muscles", effect: "Weakness, then atrophy if denervation persists [r1,r12]" }
    ],
    muscles: [
      { name: "Tibialis anterior, extensor hallucis longus and extensor digitorum longus", effect: "Weak dorsiflexion and toe extension cause foot drop and a high-stepping gait [r1]." },
      { name: "Peroneus longus and brevis", effect: "Weak eversion, with a tendency to an inverted, plantarflexed posture (clinical convention)." },
      { name: "Gastrocnemius-soleus and tibialis posterior", effect: "Preserved, so unopposed plantarflexion and inversion can lead to an equinus contracture if range is not maintained (clinical reasoning)." }
    ],
    cellular: [
      { phase: "Injury and conduction block", timing: "Immediate", description: "Focal conduction block in neurapraxia; axons disrupted in axonotmesis and neurotmesis [r8]." },
      { phase: "Wallerian degeneration", timing: "Days", description: "The axon beyond the lesion degenerates and the debris is cleared [r7]." },
      { phase: "Muscle denervation atrophy", timing: "Weeks", description: "Denervated muscle atrophies within weeks in rat studies [r9]." },
      { phase: "Axon regrowth", timing: "Months at about 1 mm per day", description: "Regrowing axons advance at about 1 mm a day in rat studies, so recovery of the dorsiflexors depends on the distance from the lesion [r9]." },
      { phase: "Reinnervation and remodelling", timing: "Months to years", description: "Muscle regains voluntary contraction in sequence; recovery is often incomplete after severe injury [r12,r6]." }
    ],
    systems: [
      { system: "Nervous system and pain", effect: "Sensory loss on the dorsum of the foot and lateral leg; neuropathic pain in some patients (clinical convention) [r1]." },
      { system: "Musculoskeletal and gait", effect: "Foot drop, steppage gait and risk of falls and ankle sprain; equinus contracture if range is lost (clinical reasoning) [r1]." },
      { system: "Associated knee and ankle injury", effect: "Multiligament knee injury, knee dislocation or inversion sprain often accompany the nerve injury [r2,r3]." },
      { system: "Vascular", effect: "Knee dislocation can also injure vessels, so check the circulation (clinical convention)." },
      { system: "Psychological and social", effect: "Loss of a normal gait, a brace and an uncertain prognosis affect work and sport (clinical convention)." }
    ]
  },

  grading: {
    system: "Seddon classification and Sunderland degrees, with surgical outcome graded by useful function",
    grades: [
      { grade: "Neurapraxia (Sunderland I)", description: "Focal conduction block with the axon intact; conduction distal to the lesion is preserved [r8,r7].", prognosis: "Presumed to recover completely, typically within about 8 to 12 weeks (a figure from a facial nerve series) [r11]" },
      { grade: "Axonotmesis (Sunderland II)", description: "Axon disrupted with Wallerian degeneration distally; the endoneurium is preserved (classical description) [r10,r7].", prognosis: "Regrowth along intact tubes, with a good prospect of recovery depending on distance [r9]" },
      { grade: "Axonotmesis (Sunderland III–IV)", description: "Intrafascicular scarring and loss of perineurium, with a neuroma-in-continuity in grade IV (classical description) [r10].", prognosis: "Variable and incomplete recovery; in a surgical series, 88% of 121 lesions with recordable nerve action potentials recovered useful function after neurolysis [r6]" },
      { grade: "Neurotmesis (Sunderland V)", description: "Complete transection of the nerve [r7].", prognosis: "No useful recovery without surgery. In a surgical series, 84% of 19 end-to-end repairs had good recovery by 24 months, and grafts under 6 cm achieved grade 3 or better function in 75%, falling to 38% for 6–12 cm grafts and 16% for 13–24 cm grafts [r6]" }
    ]
  },

  timeframes: {
    summary: "The time course depends on the grade and the distance from the lesion to the muscle. Neurapraxia is presumed to recover within about 8 to 12 weeks [r11]. After axonal injury, regrowth is about 1 mm a day, so reinnervation of tibialis anterior and the toe extensors takes months; the distance from the fibular neck to the muscle gives the arithmetic estimate, and function lags behind [r9]. Electrodiagnostic testing is conventionally done about 3 weeks after injury, although useful information can be obtained in the first week [r8].",
    healing: [
      { phase: "Injury and conduction block / Wallerian degeneration", startDay: 0, endDay: 14, description: "Wallerian degeneration beyond the lesion within days; early electrodiagnostic data can be informative in the first week [r8,r9]" },
      { phase: "Neurapraxia recovery", startDay: 0, endDay: 84, description: "Presumed recovery within about 8 to 12 weeks [r11]" },
      { phase: "Axon regrowth (about 1 mm a day)", startDay: 14, endDay: 540, description: "Rate-limited by distance; typical timing depends on the lesion and the target muscle (clinical convention) [r9]" },
      { phase: "Reinnervation and strengthening", startDay: 90, endDay: 730, description: "Dorsiflexors regain contraction in sequence; good recovery after end-to-end repair was assessed at 24 months [r6]" }
    ],
    milestones: [
      { label: "Baseline neurological examination", day: 1, note: "Test dorsiflexion, toe extension, eversion, inversion and sensation, and repeat serially [r2]" },
      { label: "Electrodiagnostic study informative", day: 7, note: "Useful information can be obtained in the first week; conventional timing is about 3 weeks [r8]" },
      { label: "Neurapraxia expected to recover", day: 84, note: "About 8 to 12 weeks, a figure from a facial nerve series [r11]" },
      { label: "Review for referral if no recovery", day: 90, note: "About 3 months: a common clinical convention; earlier for open wounds or progressive deficit [r8]" },
      { label: "Good recovery after end-to-end repair", day: 730, note: "Assessed at 24 months in an operative series [r6]" }
    ],
    returnToSport: "Criteria-based, not time-based. Return depends on the grade, recovery of dorsiflexion and eversion strength, and control in swing phase and landing. An ankle-foot orthosis can protect the foot while the nerve recovers. After tendon transfer or nerve repair, follow the surgeon's protocol [r2,r5]."
  },

  clinicalPresentation: {
    symptoms: [
      "Foot drop: tripping, catching the toes and a slapping or high-stepping gait [r1]",
      "Numbness or tingling over the dorsum of the foot and the lateral leg [r1]",
      "Pain or tenderness at the fibular neck after a blow, a tight cast or a sustained position (clinical convention)",
      "A recent knee dislocation, multiligament knee injury or inversion ankle sprain [r2,r3]",
      "Weakness that may progress after surgery or immobilisation (clinical convention)"
    ],
    signs: [
      "Weak ankle dorsiflexion and great toe extension, with weak eversion, graded on the MRC scale (clinical convention) [r1]",
      "Normal or near-normal inversion (tibialis posterior) and hip abduction, which separates the lesion from an L5 root problem (clinical convention) [r4]",
      "Sensory loss on the lateral leg and dorsum of the foot, including the first web space for the deep branch (standard anatomy)",
      "Steppage gait and inability to heel walk (clinical convention)",
      "Tinel sign or tenderness over the fibular neck, and tibialis anterior wasting with a longer course (clinical convention) [r8]"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism: blow to the outer knee, varus or inversion injury, knee dislocation, cast or bandage, prolonged position, surgery [r2,r3]",
      "Onset and course: immediate or delayed foot drop, and whether it is stable, improving or worsening [r3]",
      "Symptoms: numbness, tingling, pain, tripping, and function lost in sport and daily life",
      "Associated injuries and care: ligament or fracture injury, casts, wounds, surgery",
      "Back and leg pain history, to separate an L5 radiculopathy [r4]",
      "Medical history: diabetes, alcohol, previous neuropathy, anticoagulants (clinical reasoning)"
    ],
    observation: [
      "Gait: foot drop, steppage, foot slap; ability to heel walk and toe walk [r1]",
      "Swelling, bruising, wounds or cast pressure marks over the fibular neck and lateral knee",
      "Wasting of tibialis anterior compared with the other side (clinical convention)"
    ],
    palpation: [
      "Palpate the fibular neck for tenderness and Tinel sign; mark the most distal point and repeat over time (clinical convention) [r8]",
      "Check for a tense anterior or lateral compartment, a mass or a haematoma (clinical convention)",
      "Distal pulses and capillary refill, particularly after knee dislocation (clinical convention) [r2]"
    ],
    rangeOfMotion: [
      "Passive ankle dorsiflexion, to detect an equinus contracture (clinical convention)",
      "Active ankle, toe and knee range, and knee stability, to document associated ligament injury [r2]"
    ],
    strength: [
      "Grade ankle dorsiflexion, great toe extension, toe extension and eversion on the MRC 0–5 scale and record all muscles, because an incomplete pattern suggests a partial lesion (clinical convention) [r8]",
      "Test inversion (tibialis posterior), plantarflexion and hip abduction: if weak, suspect an L5 root or sciatic lesion, not an isolated CPN lesion [r4]",
      "Use hand-held dynamometry for serial tracking (clinical convention)"
    ],
    neuro: [
      "Map sensory loss with light touch and pinprick on the lateral leg, dorsum of the foot and first web space, and compare with a dermatome map [r1]",
      "Reflexes (knee and ankle jerk should be normal in an isolated CPN lesion) and a lumbar neurological screen (clinical convention) [r4]",
      "Test again after any inversion ankle sprain, because delayed palsy is possible [r3]"
    ],
    functional: [
      "Gait, heel walk, stairs, and the ability to clear the foot in swing phase",
      "Balance and single-leg stance with and without an orthosis",
      "Sport-specific tasks, noting compensation and fall risk (clinical convention)"
    ],
    specialTests: [
      { name: "Heel walking", purpose: "Screen for dorsiflexor weakness and foot drop", procedure: "Ask the patient to walk on the heels over 5–10 m with the toes lifted.", positive: "Inability to hold the forefoot off the floor on one side. No accuracy figures were identified in the sources read.", refs: [] },
      { name: "Resisted inversion and hip abduction", purpose: "Separate CPN palsy from L5 radiculopathy or sciatic lesion", procedure: "Test resisted ankle inversion (tibialis posterior) and resisted hip abduction (gluteus medius), comparing sides.", positive: "Preserved inversion and hip abduction with weak dorsiflexion and eversion fit a CPN lesion; weakness of inversion or hip abduction suggests an L5 root or more proximal lesion. A foot-drop evaluation algorithm exists for lumbar radiculopathy and peripheral nerve lesions, but no accuracy figures were identified [r4].", refs: ["r4"] },
      { name: "Tinel sign at the fibular neck", purpose: "Locate the lesion and track regrowth", procedure: "Tap over the nerve at the fibular neck and note tingling into the lateral leg or foot; map the most distal point over time.", positive: "Tingling in the nerve's territory on percussion; a point that moves distally suggests regrowth. No accuracy figures were identified in the sources read.", refs: [] },
      { name: "Sensory mapping of the first web space and lateral leg", purpose: "Distinguish deep from superficial peroneal involvement", procedure: "Test light touch and pinprick on the first web space (deep branch) and the lateral leg and dorsum of the foot (superficial branch).", positive: "Loss in the nerve's territory; sparing suggests a partial lesion. No accuracy figures were identified in the sources read.", refs: [] }
    ],
    clinicalRules: [
      { name: "Test peroneal nerve function after every inversion ankle sprain", description: "Peroneal nerve palsy is rare after ankle sprain but delayed palsy is possible, and the function of the nerve should be evaluated in all patients with an inversion sprain, even if the initial neurological status is normal [r3]." },
      { name: "Test dorsiflexion, toe extension and dorsal foot sensation after any severe knee injury", description: "The CPN is injured in 16% to 40% of multiligament knee injuries, and management depends on the severity and location of the lesion, the timing of presentation and serial clinical and electrodiagnostic results [r2]." },
      { name: "Establish the cause before considering surgery", description: "Not all causes of foot drop have surgical options, and the cause should be established first [r4]." }
    ],
    outcomeMeasures: [
      { name: "MRC grade of dorsiflexion, toe extension and eversion", use: "Tracks reinnervation and recovery (clinical convention)" },
      { name: "Sensory map and advancing Tinel sign", use: "Tracks sensory recovery and regrowth (clinical convention) [r8]" },
      { name: "Hand-held dynamometry of dorsiflexion", use: "Objective serial strength measurement (clinical convention)" },
      { name: "Gait assessment, 10 m walk and timed up-and-go", use: "Functional outcome with and without an orthosis (clinical convention)" },
      { name: "Electrodiagnostic findings", use: "Localise, grade and monitor the lesion [r8,r1]" },
      { name: "Surgical grade of peroneal function (grade 3 or better as useful function)", use: "Used in an operative series to define a good result [r6]" }
    ],
    imaging: [
      { modality: "Electrodiagnostic studies (nerve conduction and EMG)", indication: "Any suspected CPN injury, to localise the lesion, determine the severity and prognosis, and separate it from L5 radiculopathy", findings: "Neurodiagnostic studies may be helpful for identifying the site of a lesion and determining treatment and prognosis; timing is conventionally about 3 weeks, with useful information at 1 week [r1,r8]" },
      { modality: "Ultrasound", indication: "To show nerve continuity, a neuroma, a ganglion or an entrapment, and to guide surgery", findings: "Identifies compressive masses and nerve discontinuity (clinical convention) [r1]" },
      { modality: "MRI of the knee", indication: "Multiligament knee injury or posterolateral corner injury, and for a mass or surgical planning", findings: "Associated ligament injury, fracture or compressive lesion [r2]" },
      { modality: "Lumbar spine MRI", indication: "Suspected L5 radiculopathy as the cause of foot drop", findings: "Root compression that explains the foot drop [r4]" }
    ]
  },

  differentials: [
    { name: "L5 radiculopathy", id: "lumbar-disc-herniation", distinguishing: "Back or buttock pain, weak inversion and hip abduction, and a root pattern of sensory loss, rather than an isolated peroneal pattern; electrodiagnosis helps [r4]." },
    { name: "Sciatic neuropathy (peroneal division)", distinguishing: "Proximal injury, such as after hip surgery or a posterior hip dislocation, with weakness of other sciatic muscles and sensory loss in the sole or heel (clinical convention)." },
    { name: "Acute compartment syndrome", id: "acute-compartment-syndrome", distinguishing: "Pain out of proportion, a tense anterior or lateral compartment and pain on passive stretch; a surgical emergency that can itself cause foot drop (clinical convention)." },
    { name: "Peripheral nerve injury (general)", id: "peripheral-nerve-injury", distinguishing: "The general framework of grading and recovery for nerve injury, of which CPN injury is the commonest lower limb example [r2]." },
    { name: "Posterolateral corner or multiligament knee injury", id: "posterolateral-corner-injury", distinguishing: "Often the cause of the nerve injury: look for varus instability and a rotational laxity pattern [r2]." },
    { name: "Central causes of foot drop (stroke, multiple sclerosis)", distinguishing: "Upper motor neuron signs, spasticity or other central features; foot drop is common after stroke and in multiple sclerosis [r13]." },
    { name: "Tibialis anterior or extensor tendon rupture", distinguishing: "Sudden pain with a palpable defect and preserved sensation; a nerve conduction study is normal (clinical convention)." }
  ],
  redFlags: [
    "Acute foot drop after a knee dislocation or multiligament knee injury: arrange urgent medical review, check the circulation, and document the neurological status, because the CPN is involved in 16% to 40% and has a poor prognosis [r2].",
    "Open wound or penetrating injury over the nerve with new loss: suspect laceration or transection and arrange urgent surgical assessment [r6].",
    "Tense or painful anterior or lateral compartment with pain on passive stretch, or severe pain after a fracture or cast: suspect acute compartment syndrome and send to emergency (clinical convention).",
    "Progressive weakness, spreading numbness or no sign of recovery by about 3 months: refer to a peripheral nerve surgeon or neurologist without delay [r8,r2].",
    "Foot drop with back pain, bilateral symptoms, saddle numbness, or bladder or bowel change: suspect a spinal cause such as cauda equina syndrome and arrange emergency assessment (clinical convention).",
    "A painful, progressive foot drop with a palpable mass: suspect a compressive lesion; tumours were 13% of 318 operative CPN lesions in one series (a referral population) [r6]."
  ],

  management: {
    principles: "Management is determined by the severity and location of the nerve injury, the timing of presentation, associated injuries that need surgery, and serial clinical and electrodiagnostic evaluation [r2]. Many patients benefit from non-surgical measures, including activity modification, bracing, physical therapy and medication; surgical decompression should be considered for refractory cases and for those with compressive masses, acute lacerations or severe conduction changes, and tendon and nerve transfers can be used when decompression fails or the prognosis for nerve recovery is poor [r1]. The evidence for timing and technique is mostly retrospective case series, and optimal management of these rare injuries continues to change, so treatment should be individualised [r2,r6,r5].",
    medical: [
      { name: "Observation with serial clinical and electrodiagnostic review", description: "For suspected neurapraxia or incomplete lesions, serial examination and electrodiagnosis, with the timing of testing chosen for the clinical question; testing is conventionally done at about 3 weeks, although useful information can be obtained in the first week [r8,r2].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r8", "r2"] },
      { name: "Orthosis (ankle-foot orthosis) and medication", description: "Non-surgical options include orthosis wear and physical therapy [r2]; many patients benefit from activity modification, bracing, physical therapy and medication [r1].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r2", "r1"] },
      { name: "Surgical decompression or neurolysis", description: "Considered for refractory cases, compressive masses, acute lacerations or severe conduction changes, and results are typically favourable [r1]. In an operative series, 88% of 121 knee-level lesions with recordable intraoperative nerve action potentials recovered useful function after neurolysis (a selected surgical referral series) [r6].", evidence: "limited", recommendation: "consider", refs: ["r1", "r6"] },
      { name: "End-to-end repair or nerve grafting for a divided nerve or a lesion without conduction", description: "In the same series, 16 of 19 (84%) end-to-end repairs had good recovery by 24 months, and results of grafting fell as graft length rose: 75% for grafts under 6 cm, 38% for 6–12 cm and 16% for 13–24 cm; longer grafts reflected more severe injuries [r6].", evidence: "limited", recommendation: "consider", refs: ["r6"] },
      { name: "Tendon transfer (for example tibialis posterior) or nerve transfer", description: "Tendon and nerve transfers can be used when decompression fails or the prognosis for nerve recovery is poor [r1]. A 12-patient case series found that seven patients who also had nerve exploration and repair at the time of tendon transfer all achieved active dorsiflexion, compared with 40% of those with tendon transfer alone, and 57% versus 20% returned to running [r5]. Limited evidence supports early one-stage nerve reconstruction combined with tendon transfer [r2].", evidence: "very-limited", recommendation: "consider", refs: ["r1", "r5", "r2"] },
      { name: "Early surgical exploration after clear traumatic injury", description: "Peroneal nerve exploration was traditionally avoided except in known traumatic or iatrogenic injury, with tendon transfer delayed until conservative treatment was exhausted [r5]; timing is individualised and guided by serial examination and electrodiagnosis [r2].", evidence: "very-limited", recommendation: "consider", refs: ["r5", "r2"] }
    ],
    physio: [
      { name: "Education, baseline documentation and serial re-testing", description: "Explain the grades and the slow rate of regrowth; record MRC grades, sensory map and Tinel point at the baseline and at each visit to detect recovery or stalling [r8,r2].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r8", "r2"] },
      { name: "Ankle-foot orthosis and footwear", description: "An orthosis holds the foot clear in swing and protects against falls and equinus contracture; non-surgical options include orthosis wear and physical therapy [r2,r1].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r2", "r1"] },
      { name: "Maintain ankle range and prevent contracture", description: "Passive and active-assisted dorsiflexion and calf stretching within comfort to avoid an equinus contracture while the dorsiflexors are weak (clinical practice).", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Gait and balance training", description: "Task-specific gait training with the orthosis, and balance exercises to reduce falls (clinical practice).", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Functional electrical stimulation (FES) of the dorsiflexors", description: "A systematic review of AFO and FES for foot drop in multiple sclerosis found that study variability makes the effects of the two devices hard to compare [r13]. Evidence for FES in traumatic CPN injury was not identified in the sources read, so treat it as indirect evidence.", evidence: "very-limited", recommendation: "consider", refs: ["r13"] },
      { name: "Progressive strengthening as the dorsiflexors recover", description: "Low-load isometric then isotonic work as contraction returns, guided by pain and fatigue; heavy resistance too early after repair is not supported (clinical reasoning).", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Stretching or forcing the injured or recently repaired nerve", description: "Stretch is a mechanism of nerve injury, and the CPN is highly vulnerable to it [r2]; do not tension an injured or repaired nerve (clinical reasoning).", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r2"] },
      { name: "Prolonged watchful waiting without reassessment", description: "Foot drop was historically treated with extended bracing and waiting [r5]; a lack of recovery should prompt reassessment, electrodiagnosis and referral, not simply more time [r8].", evidence: "limited", recommendation: "not-recommended", refs: ["r5", "r8"] }
    ],
    education: [
      "The nerve that lifts your foot runs just under the skin at the outside of the knee, so a blow, a tight cast or a stretch can injure it.",
      "Mild injuries usually recover within weeks to a few months. More severe injuries need time, and some need surgery.",
      "Wear the brace for walking to protect against trips, and check the skin where it presses. Avoid crossing the legs, squatting or kneeling for long periods.",
      "Keep the ankle moving and the other muscles strong while the nerve recovers.",
      "Tell us if strength or feeling stops improving, because earlier referral gives surgery the best chance."
    ]
  },

  rehab: {
    overview: "Rehabilitation follows the medical plan and the grade of injury, and is criteria-based because reinnervation is slow and variable. The stages are: protect and maintain; support reinnervation; strengthen as the dorsiflexors recover; and return to function and sport. Time frames are guides only [r9]. There is no trial of a CPN rehabilitation programme, so the exercises are clinical conventions and are cleared with the treating surgeon after any repair or transfer [r2,r5]. Doses are conventions, not trial prescriptions.",
    stages: [
      {
        name: "Protect & maintain",
        timeframe: "Early weeks (until recovery signs or after surgery per the surgeon)",
        goals: ["Protect the foot and skin with an orthosis", "Maintain ankle range and prevent equinus", "Maintain strength and fitness elsewhere", "Document a baseline and educate"],
        precautions: ["Follow surgical restrictions after repair or transfer", "Do not stretch or tension the nerve", "Avoid pressure over the fibular neck from straps, casts or positions", "Check the skin where the orthosis presses"],
        exercises: [
          { name: "Ankle range of motion (alphabet or pumps)", dosage: "2 × 10 each direction, 2–3 times a day, within limits", cues: "Gentle, slow and comfortable; do not force dorsiflexion", figure: { pose: "ex-ankle-alphabet", view: "lateral" } },
          { name: "Heel slide (knee and hip range)", dosage: "2 × 10, daily", cues: "Smooth range", figure: { pose: "ex-heel-slide", view: "lateral", props: ["mat"] } },
          { name: "Glute bridge", dosage: "3 × 10, daily", cues: "Drive through the heels; keep the pelvis level", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Walking with the orthosis", dosage: "10–20 min, once or twice a day", cues: "Even steps, with the foot clearing in swing", figure: { pose: "walk-heel-strike", view: "lateral" } },
          { name: "Cardiovascular fitness that spares the injured limb", dosage: "20–30 min, 3–5 times a week", cues: "Choose exercise that avoids pressure at the fibular neck" }
        ],
        progressionCriteria: ["Wound healed and surgical restrictions lifted (if applicable)", "Passive dorsiflexion maintained with no equinus contracture", "Baseline MRC grades, sensory map and Tinel point documented"]
      },
      {
        name: "Support reinnervation",
        timeframe: "Months 1–6+ (depends on level and distance)",
        goals: ["Support the muscles while axons regrow", "Track the advancing Tinel sign and the first contraction", "Maintain proximal strength and balance", "Improve gait with the orthosis"],
        precautions: ["Keep loading low and pain-free", "Avoid over-stretching reinnervating muscle", "Refer if no clinical or electrical recovery by about 3 months, or sooner for open wounds or progressive deficit [r8]"],
        exercises: [
          { name: "Active dorsiflexion attempts or isometric contractions once a flicker appears", dosage: "5–10 contractions of 3–5 s, 2–3 times a day, stopping before fatigue", cues: "Think about lifting the foot; short, high-quality efforts" },
          { name: "Single-leg balance (with support if needed)", dosage: "3 × 20–30 s each side, daily", cues: "Level pelvis; use the orthosis as prescribed", figure: { pose: "ex-single-leg-balance", view: "anterior" } },
          { name: "Standing hip abduction", dosage: "3 × 10 each side, daily", cues: "Tall posture; no trunk lean", figure: { pose: "ex-hip-abduction-standing", view: "anterior" } },
          { name: "Bodyweight squat", dosage: "3 × 10, 3 times a week", cues: "Whole foot down; knees over toes", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Electrical stimulation or FES if available and cleared", dosage: "Per clinic protocol and surgeon approval", cues: "Evidence in this injury is limited [r13]" }
        ],
        progressionCriteria: ["Visible or palpable dorsiflexor contraction (MRC 1 or above)", "Tinel sign advancing distally at a steady pace", "No increase in pain after exercise"]
      },
      {
        name: "Strengthen as the dorsiflexors recover",
        timeframe: "Months 3–12+",
        goals: ["Progress dorsiflexor and evertor strength as the MRC grade rises", "Restore normal gait and wean the orthosis as strength allows", "Restore balance and control", "Prepare for return to work and sport"],
        precautions: ["Increase load only if there is no pain, swelling or loss of control the next day", "Protect numb skin during training", "Review with the surgeon or neurologist if recovery stalls [r8]"],
        exercises: [
          { name: "Resisted dorsiflexion with a band (seated)", dosage: "3 × 10, 3 times a week, light resistance", cues: "Lift the foot against the band; progress as MRC grade 3–4 appears" },
          { name: "Double-leg calf raise", dosage: "3 × 10–12, 3 times a week", cues: "Even weight through both feet", figure: { pose: "ex-calf-raise", view: "lateral" } },
          { name: "Step-up", dosage: "3 × 8–10 each leg, 3 times a week", cues: "Control the foot and pelvis", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Step-down", dosage: "3 × 8 each leg, 3 times a week", cues: "Slow lowering; keep the knee over the foot", figure: { pose: "ex-step-down", view: "lateral", props: ["step"] } },
          { name: "Heel-walk practice (short bouts)", dosage: "3 × 10 m, daily, once MRC 3 or more", cues: "Toes lifted off the floor; stop if the foot slaps" }
        ],
        progressionCriteria: ["MRC grade 4 or above in dorsiflexion (clinical convention)", "Normal gait without an orthosis, or with minimal support", "Sensation returning to protective level or better"]
      },
      {
        name: "Return to function & sport",
        timeframe: "Months 6–18+ (criteria-based)",
        goals: ["Return to work and sport-specific tasks", "Restore landing and cutting control", "Maintain strength and monitor recovery", "Protect against re-injury and skin damage"],
        precautions: ["Return only when strength, sensation and control support the sport, with surgeon approval", "Check ankle and knee stability before cutting and landing", "Accept that recovery may be incomplete and plan modifications [r2,r6]"],
        exercises: [
          { name: "Single-leg hop in place, then forward", dosage: "3 × 5–8 each leg, twice a week", cues: "Soft landing; hold 2 s", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Jump and soft landing", dosage: "3 × 5, twice a week", cues: "Hips and knees bent on landing", figure: { pose: "jump-land", view: "lateral" } },
          { name: "Change-of-direction drills", dosage: "2 sessions a week, planned then reactive", cues: "Land under control; knee over the foot", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Sport-specific skill and contact progression", dosage: "Graded exposure over 3–6 weeks", cues: "Monitor strength, sensation and fatigue" },
          { name: "Strength maintenance (calf, dorsiflexors, hip)", dosage: "2 times a week, 3 × 8–10", cues: "Controlled tempo; steady progression" }
        ],
        progressionCriteria: ["Dorsiflexor strength near the other side (about 90%) on dynamometry (clinical convention)", "Sport-specific tests completed without foot slap, tripping or loss of control", "Protective sensation adequate for the sport", "Surgeon, athlete and clinicians agree on return"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated return-to-sport (RTS) criteria exist for CPN injury; the criteria below are clinical conventions that depend on the grade and the sport",
      "Dorsiflexion and eversion strength at MRC grade 4 or above, near the other side (about 90%) on dynamometry, with a normal gait without an orthosis or with an orthosis suited to the sport",
      "Adequate sensation, including protective sensation on the dorsum of the foot",
      "No foot slap, tripping or loss of control on running, landing and cutting",
      "Completion of graded sport-specific loading with no pain, tingling or fatigue-related loss of control",
      "Surgeon or neurologist approval after nerve repair or tendon transfer [r2,r5]"
    ],
    tests: ["MRC testing of dorsiflexion, toe extension and eversion", "Dynamometry compared with the other side", "Sensory testing of the lateral leg, dorsum and first web space", "Gait, hop and sport-specific tests", "Repeat electrodiagnostic study if recovery is unclear [r8]"]
  },
  prognosis: "Prognosis depends on the grade of injury, the level and the time to repair. Neurapraxia is presumed to recover within about 8 to 12 weeks [r11]. CPN injuries have a poor prognosis compared with other peripheral nerve injuries in multiligament knee injury [r2]. In a series of 318 operated knee-level lesions, 88% of those with recordable nerve action potentials recovered useful function after neurolysis, 84% of end-to-end repairs had good recovery by 24 months, and the proportion with good function after grafting fell from 75% for grafts under 6 cm to 16% for 13–24 cm grafts; these were selected, referred patients [r6]. In a 12-patient case series, simultaneous nerve repair and tendon transfer gave active dorsiflexion in all seven patients, compared with 40% after tendon transfer alone [r5]. Surgical decompression in suitable cases has typically favourable results [r1]. The evidence is mostly retrospective and case series.",
  prevention: [
    "Pad casts, splints and straps over the fibular neck, and check them (clinical reasoning).",
    "Avoid sustained pressure and extreme positions over the fibular neck, such as prolonged squatting, kneeling and leg crossing (clinical reasoning).",
    "After any significant knee or ankle injury, record a baseline neurological examination, including dorsiflexion, toe extension and sensation [r2].",
    "Test peroneal nerve function after every inversion ankle sprain and retest if symptoms change, because delayed palsy is possible [r3].",
    "Protect against severe varus stress through conditioning and protective equipment in contact sport, and recognise multiligament knee injury early [r2].",
    "Refer early when the nerve does not recover [r8,r6]."
  ],
  clinicalPearls: [
    "Test inversion and hip abduction. A foot drop with strong inversion and hip abduction points to the peroneal nerve; weakness of either points to the L5 root or sciatic nerve [r4].",
    "After any severe knee injury, test dorsiflexion, great toe extension and dorsal foot sensation, and document it. The CPN is injured in 16% to 40% of multiligament knee injuries [r2].",
    "Test the nerve after every inversion ankle sprain, even if the first examination is normal; delayed palsy is possible [r3].",
    "Longer grafts mean poorer outcomes, partly because they reflect worse injuries: 75% had grade 3 or better function with grafts under 6 cm and 16% with 13–24 cm grafts. Do not delay referral when there is no recovery [r6].",
    "The evidence for early nerve exploration with tendon transfer is a 12-patient case series. Describe it as promising and limited, not established [r5,r2].",
    "Establish the cause of foot drop before discussing surgery, because not all causes have surgical options [r4]."
  ],
  related: ["peripheral-nerve-injury", "knee-dislocation", "posterolateral-corner-injury", "lateral-ankle-sprain", "acute-compartment-syndrome", "lumbar-disc-herniation"],

  references: [
    { id: "r1", citation: "Poage C, Roth C, Scott B. Peroneal nerve palsy: evaluation and management. J Am Acad Orthop Surg. 2016;24(1):1-10.", pmid: "26700629", doi: "10.5435/JAAOS-D-14-00420", type: "narrative-review", year: 2016 },
    { id: "r2", citation: "Mook WR, Ligh CA, Moorman CT, et al. Nerve injury complicating multiligament knee injury: current concepts and treatment algorithm. J Am Acad Orthop Surg. 2013;21(6):343-54.", pmid: "23728959", doi: "10.5435/JAAOS-21-06-343", type: "narrative-review", year: 2013 },
    { id: "r3", citation: "Mitsiokapa E, Mavrogenis AF, Drakopoulos D, et al. Peroneal nerve palsy after ankle sprain: an update. Eur J Orthop Surg Traumatol. 2017;27(1):53-60.", pmid: "27581424", doi: "10.1007/s00590-016-1845-0", type: "narrative-review", year: 2017 },
    { id: "r4", citation: "Khan AA, Rodriguez-Collazo ER, Lo E, et al. Evaluation and treatment of foot drop using nerve transfer techniques. Clin Podiatr Med Surg. 2021;38(1):83-98.", pmid: "33220746", doi: "10.1016/j.cpm.2020.09.004", type: "narrative-review", year: 2021 },
    { id: "r5", citation: "Ho B, Khan Z, Switaj PJ, et al. Treatment of peroneal nerve injuries with simultaneous tendon transfer and nerve exploration. J Orthop Surg Res. 2014;9:67.", pmid: "25099247", doi: "10.1186/s13018-014-0067-6", type: "other", year: 2014 },
    { id: "r6", citation: "Kim DH, Murovic JA, Tiel RL, et al. Management and outcomes in 318 operative common peroneal nerve lesions at the Louisiana State University Health Sciences Center. Neurosurgery. 2004;54(6):1421-8.", pmid: "15157299", doi: "10.1227/01.neu.0000124752.40412.03", type: "cohort", year: 2004 },
    { id: "r7", citation: "Yi S, Zhang Y, Gu X, et al. Application of stem cells in peripheral nerve regeneration. Burns Trauma. 2020;8:tkaa002.", pmid: "32346538", doi: "10.1093/burnst/tkaa002", type: "narrative-review", year: 2020 },
    { id: "r8", citation: "Campbell WW. Evaluation and management of peripheral nerve injury. Clin Neurophysiol. 2008;119(9):1951-65.", pmid: "18482862", doi: "10.1016/j.clinph.2008.03.018", type: "narrative-review", year: 2008 },
    { id: "r9", citation: "Mikesh M, Ghergherehchi CL, Hastings RL, et al. Polyethylene glycol solutions rapidly restore and maintain axonal continuity, neuromuscular structures, and behaviors lost after sciatic nerve transections in female rats. J Neurosci Res. 2018;96(7):1223-42.", pmid: "29659058", doi: "10.1002/jnr.24225", type: "basic-science", year: 2018 },
    { id: "r10", citation: "Sunderland S. A classification of peripheral nerve injuries producing loss of function. Brain. 1951;74(4):491-516.", pmid: "14895767", doi: "10.1093/brain/74.4.491", type: "other", year: 1951 },
    { id: "r11", citation: "Sittel C, Stennert E. Prognostic value of electromyography in acute peripheral facial nerve palsy. Otol Neurotol. 2001;22(1):100-4.", pmid: "11314702", doi: "10.1097/00129492-200101000-00019", type: "cohort", year: 2001 },
    { id: "r12", citation: "Menorca RM, Fussell TS, Elfar JC. Nerve physiology: mechanisms of injury and recovery. Hand Clin. 2013;29(3):317-30.", pmid: "23895713", doi: "10.1016/j.hcl.2013.04.002", type: "narrative-review", year: 2013 },
    { id: "r13", citation: "Byrnes-Blanco L, Reed K, Dubey R, et al. A systematic literature review of ankle-foot orthosis and functional electrical stimulation foot-drop treatments for persons with multiple sclerosis. Prosthet Orthot Int. 2023;47(4):358-67.", pmid: "36701192", doi: "10.1097/PXR.0000000000000190", type: "systematic-review", year: 2023 }
  ],

  animation: {
    title: "How the common peroneal nerve is injured",
    phases: [
      {
        type: "moi", label: "Inversion stretch", duration: 6, view: "anterior", environment: "pitch",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "run-midstance", root: { x: -50 } },
          { t: 1.5, pose: "ankle-inversion", root: { x: -20 }, ease: "in" },
          { t: 2.6, pose: "ankle-inversion", root: { x: -15 } },
          { t: 5.5, pose: "ankle-inversion", root: { x: -15 } }
        ],
        forces: [
          { t: [1.7, 3.4], at: "ankleR", dir: "medial", label: "Foot rolls inwards", size: "m" },
          { t: [2.0, 4.0], at: "kneeR", dir: "down", label: "Nerve stretched around the fibular neck", size: "m" }
        ],
        highlights: [{ t: [1.8, 6], at: "kneeR" }],
        impacts: [{ t: 1.8, at: "ankleR" }],
        slowmo: [{ t: [1.5, 2.6], rate: 0.3 }],
        captions: [
          { t: 0, text: "An athlete runs on uneven ground in a team sport." },
          { t: 1.6, text: "The foot rolls into inversion, or the knee takes a varus load." },
          { t: 2.6, text: "The common peroneal nerve runs just under the skin around the fibular neck." },
          { t: 3.6, text: "It can be stretched, or squeezed against the bone by a blow or a cast." },
          { t: 4.8, text: "The foot then drops, and the dorsum of the foot goes numb." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "kneeR",
        captions: [{ t: 0, text: "Zooming into the outside of the knee at the fibular neck." }]
      },
      {
        type: "closeup", label: "At fibular neck", duration: 11, scene: "lower-leg-anterior",
        actions: [
          { t: 0, do: "highlight", target: "commonPeronealNerve" },
          { t: 0.3, do: "label", target: "commonPeronealNerve", text: "Common peroneal nerve" },
          { t: 0.8, do: "label", target: "fibula", text: "Fibula: the nerve winds round its neck, high up" },
          { t: 1.6, do: "arrow", at: "fibularNeck", dir: "distal", label: "Stretch from inversion or varus", size: "m" },
          { t: 2.0, do: "stretch", target: "commonPeronealNerve", amount: 0.4, dur: 1.2 },
          { t: 3.2, do: "compress", target: "commonPeronealNerve", at: "fibularNeck", dur: 1.0 },
          { t: 3.6, do: "label", target: "commonPeronealNerve", text: "A blow or cast also squeezes it against bone" },
          { t: 4.4, do: "irritate", target: "commonPeronealNerve" },
          { t: 4.8, do: "pain", at: "fibularNeck", hold: 2.5 },
          { t: 5.6, do: "atrophy", target: "tibialisAnterior", amount: 0.4 },
          { t: 5.8, do: "label", target: "tibialisAnterior", text: "Dorsiflexors lose their input: foot drop" },
          { t: 7.4, do: "reset", target: "commonPeronealNerve", dur: 1.4 },
          { t: 7.8, do: "label", target: "commonPeronealNerve", text: "If axons are intact, regrowth is slow" },
          { t: 9.4, do: "camera", at: "fibularNeck", zoom: 1.4, dur: 1.0 }
        ],
        captions: [
          { t: 0, text: "The common peroneal nerve wraps around the neck of the fibula." },
          { t: 1.0, text: "There is little padding, so it is easily stretched or compressed." },
          { t: 2.1, text: "Inversion or varus stress stretches the nerve around the bone." },
          { t: 3.3, text: "A direct blow, a tight cast or a sustained position can squeeze it against the fibula." },
          { t: 4.5, text: "The nerve fires abnormally and then fails: tingling, numbness and pain." },
          { t: 5.7, text: "The dorsiflexors weaken and waste, so the foot drops." },
          { t: 7.5, text: "With intact axons the nerve regrows slowly. If it does not recover, surgery is considered." }
        ]
      },
      {
        type: "micro", label: "Nerve response", duration: 10, tissue: "nerve",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.0, stage: "compression" }, { t: 2.2, stage: "ischaemia" },
          { t: 3.4, stage: "demyelination" }, { t: 4.8, stage: "axonal-injury" },
          { t: 6.2, stage: "wallerian-degeneration" }, { t: 7.8, stage: "regeneration" }
        ],
        timeLabels: [{ t: 2.2, text: "Early" }, { t: 3.4, text: "Neurapraxia: weeks" }, { t: 4.8, text: "Severe or prolonged" }, { t: 6.2, text: "Days" }, { t: 7.8, text: "About 1 mm a day" }],
        captions: [
          { t: 0, text: "Healthy nerve: myelinated axons carry signals, fed by small blood vessels." },
          { t: 1.0, text: "Compression or stretch starts to block the signal." },
          { t: 2.2, text: "Ischaemia: the blood supply to the nerve falls, so conduction fails." },
          { t: 3.4, text: "Demyelination: the axon is intact, so recovery is expected." },
          { t: 4.8, text: "Axonal injury: with greater force, the axon itself is disrupted." },
          { t: 6.2, text: "Wallerian degeneration: the axon beyond the lesion breaks down and is cleared." },
          { t: 7.8, text: "Regeneration: axons regrow along the pathway at about 1 mm a day, so recovery takes months." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL8" }
};
