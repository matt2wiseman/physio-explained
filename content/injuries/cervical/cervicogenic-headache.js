export default {
  id: "cervicogenic-headache",
  name: "Cervicogenic headache",
  shortName: "Cervicogenic headache",
  aka: ["CGH", "neck headache", "headache from the neck", "cervical headache", "upper cervical headache", "third occipital nerve headache", "C2–3 headache", "occipital headache of cervical origin"],
  region: "cervical",
  tissues: ["joint-capsule", "muscle", "nerve"],
  onset: "acute-or-gradual",
  mechanismType: ["insidious", "overuse"],
  populations: ["adults with neck pain and headache", "people after whiplash or neck trauma", "people with sustained postures such as desk work"],
  sports: [],
  urgency: "routine",
  summary: "Headache referred from upper cervical structures (C1–C3) through trigeminocervical convergence. The clinical criteria are contested, and a definite diagnosis needs controlled nerve blocks.",
  keyFacts: [
    { label: "Typical recovery", value: "In trials of 4–6 weeks of manual therapy, exercise or a C1–2 self-mobilisation, benefit was maintained at 12 months; effect sizes vary and the overall evidence is low-grade" },
    { label: "Return to sport", value: "Criteria-based; no validated criteria. Needs a controlled headache frequency, normal upper cervical rotation and no neurological signs" },
    { label: "Key test", value: "Cervical flexion–rotation test: sensitivity 91%, specificity 90% for C1/2-related headache in one small study. A definite diagnosis needs controlled diagnostic blocks" },
    { label: "Imaging", value: "Not routine; used for red flags or atypical features. Controlled diagnostic nerve blocks, not imaging, establish a cervical source" },
    { label: "Peak age", value: "Adults; peak age not established in the sources reviewed (mean age 36 in one trial)" },
    { label: "Incidence", value: "Estimated at 14–18% of chronic headaches; third occipital nerve headache was found in 27% of 100 patients with chronic whiplash neck pain" }
  ],
  overview: "Cervicogenic headache (CGH) is headache referred to the head from the cervical spine. Laboratory and clinical studies have shown that pain from upper cervical joints and muscles can be referred to the head, and the International Headache Society recognises the condition as a distinct disorder, although some clinicians remain sceptical [r1,r2]. Its incidence is estimated at 14–18% of all chronic headaches [r3]. After whiplash it is common among people referred with chronic pain: third occipital nerve headache was found in 27% of 100 such patients, and in 53% of those with dominant headache [r4].\n\nDiagnosis is the hard part. Clinical diagnostic criteria have not proved valid, and a cervical source of pain can be established only with fluoroscopically guided, controlled diagnostic nerve blocks [r1]. Most physiotherapists therefore work with a probable CGH, based on neck-related provocation, restricted upper cervical movement and painful upper cervical joint dysfunction [r5,r3,r6]. Manual therapy, exercise and C1–2 self-mobilisation reduced headache in randomised trials, but systematic reviews rate the overall evidence as low [r7,r8,r9]. Screening for secondary headache and for cervical arterial dysfunction comes first [r10,r11].",

  epidemiology: {
    text: "The incidence of cervicogenic headache has been estimated at 14–18% of all chronic headaches, which highlights the need for clear criteria of cervical musculoskeletal impairment [r3]. These estimates depend on how the condition is defined. In 100 consecutive patients with chronic neck pain after whiplash (more than 3 months), 71 had headache, and double-blind controlled third occipital nerve blocks showed third occipital nerve headache in 27% overall and 53% of those with dominant headache. No feature of the history or examination allowed a definite diagnosis before the blocks, although tenderness over the C2–3 joint was more common in those with a positive block [r4]. In 68 patients with chronic pain after whiplash, C2–3 zygapophysial joint pain was found in 50% of those with dominant headache [r12]. These were selected, referred patients, so the figures do not apply to all people with headache.",
    riskFactors: {
      intrinsic: [
        "Previous whiplash or neck trauma: C2–3 and third occipital nerve sources were common in referred whiplash patients [r4,r12]",
        "Upper cervical joint dysfunction, reduced cervical flexion–extension range and muscle tightness distinguished a CGH group from migraine with aura and controls [r3]",
        "Restricted C1–2 rotation on the flexion–rotation test is a typical finding in C1/2-related CGH [r6,r8]"
      ],
      extrinsic: [
        "Sustained postures such as desk and screen work (clinical observation; not tested in the sources reviewed)",
        "Neck trauma, including motor vehicle collisions [r4]",
        "Stress and poor sleep (clinical observation)"
      ]
    }
  },

  mechanism: {
    summary: "Cervicogenic headache has no single injury moment. It arises when a painful upper cervical structure (a C1–2 or C2–3 joint, the C2–3 disc, the suboccipital muscles, or an irritated upper cervical nerve) sends nociceptive input that is felt in the head. Pain from upper cervical joints and muscles can be referred to the head [r1]. The proposed pathway is trigeminocervical convergence. In an animal model, neurones in the C2 dorsal horn received convergent input from the dura and the greater occipital nerve, with receptive fields in the first (ophthalmic) trigeminal division as well as C2 skin and muscle [r13].",
    sequence: [
      "An upper cervical structure (C1–2 or C2–3 joint, upper cervical muscles, or an upper cervical nerve) becomes painful after trauma, sustained posture or degenerative change [r1,r4].",
      "Nociceptive afferents from C1 to C3 synapse on second-order neurones in the upper cervical dorsal horn and caudal trigeminal nucleus [r13].",
      "These neurones also receive trigeminal input from the head, so the brain interprets the pain as coming from the occiput, forehead, temple or around the eye [r13].",
      "Neck movement, sustained postures or pressure on the sensitive upper cervical segments provoke the headache. Upper cervical rotation is often restricted [r6,r8].",
      "Stimulation of the greater occipital nerve or of suboccipital muscle afferents increased the excitability of dural afferent input in animal work, which may help explain a lasting, sensitised headache [r13].",
      "Without treatment, a cycle of pain, guarding and reduced movement can maintain the headache, and the source may be mixed."
    ],
    variants: [
      { name: "C2–3 joint and third occipital nerve headache", description: "Relief after controlled blocks of the third occipital nerve established this source in 27% of 100 chronic whiplash patients. C2–3 joint pain was found in 50% of whiplash patients with dominant headache [r4,r12]." },
      { name: "C1–2 (atlantoaxial) related CGH", description: "Restricted rotation of the C1–2 segment, shown on the flexion–rotation test, is a typical finding. The test discriminated C1/2-related CGH from controls and migraine with aura [r6,r8]." },
      { name: "Post-traumatic (whiplash) CGH", description: "Headache that follows a collision with neck pain and cervical findings, common in referred patients [r4,r12]." },
      { name: "Muscle-related and postural CGH", description: "Suboccipital and upper cervical muscle tightness and sustained postures. Muscle tightness was more frequent in a CGH group than in migraine with aura and controls [r3]." }
    ]
  },

  anatomy: {
    text: "The upper three cervical segments and their nerves supply pain-sensitive structures of the neck and refer to the head. The C2 spinal nerve gives rise to the greater occipital nerve, which supplies the back of the scalp. The C3 dorsal ramus gives the third occipital nerve, which supplies the C2–3 zygapophysial joint [r4]. The C1–2 joint provides about half of cervical axial rotation, which is why a rotation limitation on the flexion–rotation test implicates it [r6]. The suboccipital muscles and upper trapezius sit over these segments. Upper cervical afferents converge in the C2 dorsal horn and caudal trigeminal nucleus with trigeminal input from the dura and face, which is the basis of referral [r13].",
    structures: [
      { name: "C1–2 (atlantoaxial) joint", role: "Provides most upper cervical rotation. A source of CGH when restricted or painful, assessed by the flexion–rotation test [r6]." },
      { name: "C2–3 zygapophysial joint and third occipital nerve", role: "The joint is supplied by the third occipital nerve. It is a documented source of headache after whiplash [r4,r12]." },
      { name: "Greater occipital nerve (C2)", role: "Carries sensation from the back of the scalp and converges with trigeminal input in the C2 dorsal horn [r13]" },
      { name: "Suboccipital muscles and upper trapezius", role: "Control head position. Muscle tightness is more frequent in CGH, and suboccipital muscle afferents facilitate dural input in animal work [r3,r13]." },
      { name: "Trigeminocervical nucleus complex", role: "Where upper cervical and trigeminal afferents converge, explaining referral of neck pain to the head [r13]" },
      { name: "Deep neck flexors (longus colli, longus capitis)", role: "Stabilise the cervical spine. The craniocervical flexion test is used to assess them [r3]." },
      { name: "Vertebral and internal carotid arteries", role: "Dissection can cause neck pain and headache and must be excluded before manual therapy [r11]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "No single lesion explains cervicogenic headache, and imaging does not reliably find the source. A cervical source of pain is established only by controlled diagnostic nerve blocks [r1]. The best-documented sources are the C2–3 joint and the third occipital nerve (27% of 100 chronic whiplash patients, 53% of those with dominant headache) and the C2–3 joint more generally (50% of whiplash patients with dominant headache) [r4,r12]. C1–2 dysfunction is common in people with CGH, based on the flexion–rotation test [r8,r6].\n\nPain reaches the head through trigeminocervical convergence. In rats, 67 neurones in the C2 dorsal horn responded to both dural and greater occipital nerve stimulation. Greater occipital nerve stimulation enhanced dural afferent input in 8 of 20 neurones, and mustard oil applied to suboccipital muscles raised excitability in 9 of 10, with a longer effect than skin stimulation [r13]. This animal work suggests that upper cervical muscle and nerve input can facilitate head pain, but it has not been proven in people with CGH.",
    structures: [
      { name: "C2–3 zygapophysial joint and third occipital nerve", effect: "Relief of headache and upper neck pain after controlled third occipital nerve blocks in 27% of 100 chronic whiplash patients [r4]" },
      { name: "C1–2 joint", effect: "Restricted rotation on the flexion–rotation test in C1/2-related CGH; a C1–2 self-SNAG increased the range by 15° versus 5° with placebo [r6,r8]" },
      { name: "Suboccipital and upper cervical muscles", effect: "Muscle tightness and altered activity. In animal work, muscle afferents produced long-lasting facilitation of dural input [r3,r13]" },
      { name: "Upper cervical discs and ligaments (possible)", effect: "Possible sources, not separately established in the sources reviewed" }
    ],
    muscles: [
      { name: "Suboccipital muscles and upper trapezius", effect: "Muscle tightness was more frequent in a CGH group than in migraine with aura and controls (P < 0.05) [r3]" },
      { name: "Sternocleidomastoid and deep neck flexors", effect: "Sternocleidomastoid EMG was higher in the later stages of the craniocervical flexion test in CGH but did not reach significance [r3]. Altered deep neck flexor control is a target for exercise [r7]." },
      { name: "Cervical movers generally", effect: "The CGH group had less cervical flexion and extension range than controls (P = 0.048) [r3]" }
    ],
    cellular: [
      { phase: "Nociceptor activation", timing: "Minutes to days", description: "Irritation of an upper cervical joint, muscle or nerve activates nociceptors that project to the C1–C3 dorsal horn [r1,r13]." },
      { phase: "Convergence and referral", timing: "Immediately", description: "Upper cervical and trigeminal afferents converge on the same second-order neurones, so pain is felt in the head [r13]." },
      { phase: "Central facilitation", timing: "Days to months", description: "Greater occipital nerve and suboccipital muscle input enhanced dural afferent responses in animal work, which may sustain and amplify headache [r13]." },
      { phase: "Response to treatment", timing: "Weeks", description: "Manual therapy, exercise and C1–2 self-mobilisation reduced headache over 4–6 weeks of treatment, with effects maintained to 12 months in trials [r7,r8]." }
    ],
    systems: [
      { system: "Nervous system", effect: "Trigeminocervical convergence explains referral, and greater occipital nerve and muscle input can enhance dural afferent excitability [r13]." },
      { system: "Musculoskeletal chain", effect: "Restricted upper cervical rotation, reduced cervical flexion–extension range and muscle tightness are typical findings [r3,r6]." },
      { system: "Psychological and sleep", effect: "Stress, poor sleep and fear of provoking headache are common and modifiable (clinical observation)." },
      { system: "Vascular", effect: "Cervical arterial dissection can present with neck pain and headache and must be excluded before manual therapy [r11,r10]." },
      { system: "Medication use", effect: "Overuse of painkillers is a recognised secondary-headache flag and can keep headache going [r10]." }
    ]
  },

  grading: {
    system: "Diagnostic certainty (Bogduk and Govind): probable versus definite cervicogenic headache [r1]",
    grades: [
      { grade: "Probable cervicogenic headache", description: "Diagnosed on clinical features: neck-related provocation, painful and restricted upper cervical movement and upper cervical joint dysfunction on manual examination [r5,r3]. The review notes that clinical diagnostic criteria have not proved valid, so this is a pragmatic diagnosis [r1].", prognosis: "Treated with manual therapy and exercise; the response to treatment supports but does not prove the diagnosis" },
      { grade: "Definite cervical headache", description: "A cervical source is established by relief of pain after fluoroscopically guided, controlled diagnostic nerve blocks, for example of the third occipital nerve [r1,r4].", prognosis: "Specialist pain management can then be directed at the proven source" }
    ]
  },

  timeframes: {
    summary: "No natural-history data for untreated CGH were identified in the sources reviewed. In trials, treatment lasted 4–6 weeks and the benefit was maintained at 12 months [r7,r8]. The phases below follow trial timelines and typical clinical practice.",
    healing: [
      { phase: "Assessment and early response", startDay: 0, endDay: 14, description: "Confirm the picture, screen for red flags and start education and gentle mobility. A C1–2 self-SNAG increased flexion–rotation range by 15° immediately after the first visit in a trial [r8]." },
      { phase: "Active treatment", startDay: 14, endDay: 42, description: "Manual therapy, craniocervical flexion and scapular exercise, and self-mobilisation. Trial treatment periods were 4–6 weeks [r7,r8]." },
      { phase: "Consolidation", startDay: 42, endDay: 120, description: "Strength and endurance work, posture and workstation changes, and self-management." },
      { phase: "Maintenance and follow-up", startDay: 120, endDay: 365, description: "Benefits of exercise and manual therapy were maintained at 12 months in a 200-person trial [r7]." }
    ],
    milestones: [
      { label: "Flexion–rotation range increased after first session", day: 1, note: "C1–2 self-SNAG: +15° versus +5° with placebo [r8]" },
      { label: "Headache index lower at 4 weeks", day: 28, note: "Self-SNAG 31 versus placebo 51 [r8]" },
      { label: "End of 6-week treatment period", day: 42, note: "Manual therapy and exercise treatment period in the 200-person trial [r7]" },
      { label: "Benefit maintained at 12 months", day: 365, note: "Headache frequency and intensity significantly lower after manual therapy or exercise (P < 0.05); self-SNAG headache index 24 versus 44 [r7,r8]" }
    ],
    returnToSport: "Criteria-based, not time-based. No validated return-to-sport criteria exist for CGH. Return when headache is controlled during sport-specific loading, upper cervical rotation is symmetrical and pain-free, there are no neurological signs, and neck strength and endurance are adequate (clinical convention)."
  },

  clinicalPresentation: {
    symptoms: [
      "Headache that usually starts in the neck or back of the head and may spread to the forehead, temple or around the eye (via trigeminocervical convergence) [r13]",
      "Headache provoked by neck movement, sustained posture or pressure on the upper neck, with neck pain or stiffness [r5,r3]",
      "Suboccipital neck pain, dizziness and lightheadedness are the most common accompanying symptoms in one review [r14]",
      "Headache and neck pain following whiplash or other neck trauma [r4]",
      "Absence of the typical migraine features of aura (such features suggest another headache type) [r3]"
    ],
    signs: [
      "Restricted rotation on the cervical flexion–rotation test (C1–2 limitation) [r6,r8]",
      "Painful upper cervical joint dysfunction on manual examination [r3]",
      "Reduced cervical flexion–extension range of motion and muscle tightness [r3]",
      "Tenderness over the C2–3 joint, more likely in those with a positive third occipital nerve block [r4]",
      "Reproduction of the familiar headache by sustained pressure or end-range movement of the upper cervical segments"
    ]
  },

  assessment: {
    subjective: [
      "Headache pattern: side, location, onset in the neck, spread forward, frequency, duration and intensity [r5]",
      "Provocation by neck movement, posture or pressure, and the relationship of headache to neck pain",
      "History of whiplash or neck trauma, and the time course since [r4]",
      "Migraine or tension-type features (aura, photophobia, nausea, bilateral pressure), which suggest another primary headache [r3]",
      "Red flags from the SNNOOP10 list: fever, cancer history, neurological deficit, sudden onset, onset after 65 years, change in pattern, positional, Valsalva or exertion, pregnancy, post-traumatic onset, immune disease, painkiller overuse [r10]",
      "Medication use and overuse of painkillers [r10]",
      "Sleep, stress, work posture and screen use"
    ],
    observation: ["Head and neck posture (forward head posture)", "Neck movement quality and guarding", "Muscle bulk and symmetry of the upper trapezius and suboccipital region"],
    palpation: ["Upper cervical segments (C1–C3), especially C2–3, for tenderness and reproduction of headache [r4]", "Suboccipital muscles, upper trapezius and greater occipital nerve region", "Manual examination of upper cervical joints: passive segmental mobility and pain provocation [r3]"],
    rangeOfMotion: ["Cervical flexion–rotation test: rotation range in full flexion, side to side [r6]", "Cervical flexion and extension range, reduced in the CGH group [r3]", "Active cervical rotation, side-flexion and the effect of sustained end-range positions"],
    strength: ["Craniocervical flexion test: control of the deep neck flexors with pressure biofeedback; sternocleidomastoid activity rose in later stages in CGH but not significantly [r3]", "Neck flexor and extensor endurance (hold times)", "Scapular and shoulder girdle strength"],
    neuro: ["Cranial nerves, eye movements, facial sensation and gait", "Upper and lower limb reflexes, power and sensation; upper motor neuron signs", "Screen for cervical arterial dysfunction before manual therapy: new severe pain, dizziness, diplopia, dysarthria, dysphagia, drop attacks, facial numbness (IFOMPT Cervical Framework) [r11]"],
    functional: ["Sustained sitting, desk and screen work tolerance", "Driving and head-turning", "Sleep posture and pillow set-up"],
    specialTests: [
      { name: "Cervical flexion–rotation test (FRT)", purpose: "Identify C1–2 movement restriction in cervicogenic headache", procedure: "The supine patient's neck is passively flexed fully, then rotated to each side while the therapist notes the range and any headache reproduction, comparing sides. Therapists in the study judged each test positive or negative from their interpretation of the range of motion.", positive: "Restricted rotation to one or both sides relative to the other side, in the setting of C1/2-related CGH. Reference standard in the study was passive segmental mobility testing of C1/2, not a controlled nerve block.", sensitivity: "91% (23 CGH, 23 controls, 12 migraine with aura)", specificity: "90%", refs: ["r6"] },
      { name: "Manual examination of the upper cervical joints", purpose: "Detect painful upper cervical joint dysfunction", procedure: "Passive segmental mobility testing and pain provocation of C0–C3, noting restriction and reproduction of the familiar headache.", positive: "Painful upper cervical joint dysfunction. In 27 CGH, 25 migraine with aura and 25 control subjects, manual examination discriminated the CGH group with 80% sensitivity (specificity was not reported in the abstract).", sensitivity: "80% for discriminating CGH from migraine with aura and controls", refs: ["r3"] },
      { name: "Palpation of the C2–3 joint", purpose: "Identify C2–3 involvement in headache, especially after whiplash", procedure: "Palpate the C2–3 articular pillar posteriorly and compare sides.", positive: "Tenderness over the C2–3 joint was more frequent in patients with a positive third occipital nerve block (p = 0.01). No history or examination feature allowed a definite diagnosis without blocks.", refs: ["r4"] },
      { name: "Craniocervical flexion test", purpose: "Assess deep neck flexor control, a target for exercise", procedure: "Supine with the neck in neutral, the patient performs a gentle head nod while the therapist observes substitution by superficial flexors, or uses pressure biofeedback.", positive: "Poor control, with superficial flexor substitution. In one study, sternocleidomastoid EMG was higher in the later stages in CGH but the difference was not significant, so it should not be used alone to diagnose CGH.", refs: ["r3"] }
    ],
    clinicalRules: [
      { name: "Diagnostic criteria and their limits", description: "Cervicogenic headache is recognised in the International Classification of Headache Disorders [r2] and has diagnostic criteria from the Cervicogenic Headache International Study Group [r5]. However, a review concluded that clinical diagnostic criteria have not proved valid, and that a cervical source can be established only by fluoroscopically guided, controlled diagnostic nerve blocks. It recommends a pragmatic approach to probable CGH and a rigorous approach to definite cervical headache [r1]." },
      { name: "SNNOOP10 red and orange flags for secondary headache", description: "Systemic symptoms (fever), neoplasm history, neurological deficit, sudden onset, onset after 65 years, pattern change or recent onset, positional headache, precipitation by sneezing, coughing or exercise, papilloedema, progressive or atypical headache, pregnancy, painful red eye with autonomic features, post-traumatic onset, immune disease and painkiller overuse. Screening with the list is expected to increase detection of a secondary cause, but it has not been prospectively validated [r10]." },
      { name: "IFOMPT Cervical Framework", description: "A framework to guide assessment of the cervical region for vascular pathology before manual therapy. A flowchart translation supports clinical reasoning for safer manual therapy [r11]." }
    ],
    outcomeMeasures: [
      { name: "Headache diary (frequency, intensity, duration)", use: "Primary outcome in the exercise and manual therapy trial was headache frequency, with intensity and duration also recorded [r7]" },
      { name: "Headache index", use: "Used in the C1–2 self-SNAG trial at 4 weeks and 12 months [r8]" },
      { name: "Cervical flexion–rotation test range", use: "Track C1–2 rotation range; the self-SNAG group increased by 15° immediately [r8]" },
      { name: "Northwick Park Neck Pain Index and craniocervical flexion test", use: "Neck pain and deep neck flexor outcomes recorded in the exercise and manual therapy trial [r7]" },
      { name: "Neck Disability Index", use: "Self-reported neck-related disability (common clinical measure)" }
    ],
    imaging: [
      { modality: "None routinely", indication: "A typical picture with a normal neurological examination and no red flags", findings: "Imaging is not needed to diagnose probable CGH. Controlled diagnostic nerve blocks, not imaging, establish a cervical source [r1]." },
      { modality: "MRI or CT of the head and neck, or CT/MR angiography", indication: "SNNOOP10 red flags, new neurological signs, thunderclap onset, atypical features, or suspected cervical arterial dissection [r10,r11]", findings: "Findings depend on the cause. Degenerative cervical changes are common and non-specific (clinical convention)." },
      { modality: "Fluoroscopically guided controlled nerve blocks (specialist)", indication: "To establish a definite cervical source, usually before invasive treatment [r1]", findings: "Complete, reproducible relief of headache with the blocked nerve or joint, using controlled comparative blocks [r4,r1]." }
    ]
  },

  differentials: [
    { name: "Cervical arterial dysfunction (dissection)", id: "cervical-arterial-dysfunction", distinguishing: "Sudden severe, unfamiliar neck pain or headache with neurological signs such as dizziness, diplopia, dysarthria or Horner's syndrome. Emergency [r11]." },
    { name: "Whiplash-associated disorder", id: "whiplash-associated-disorder", distinguishing: "Follows a collision. Headache is one feature, and third occipital nerve headache is a documented cause after whiplash [r4]." },
    { name: "Acute wry neck", id: "acute-wry-neck", distinguishing: "Sudden painful loss of rotation with the head held to one side, and headache is not the main complaint." },
    { name: "Cervical radiculopathy", id: "cervical-radiculopathy", distinguishing: "Arm pain, paraesthesia or weakness in a root distribution, and headache is not the main complaint." },
    { name: "Persisting post-concussion symptoms", id: "persisting-post-concussion-symptoms", distinguishing: "Headache after head injury with cognitive, balance and visual symptoms. It can coexist with cervical headache." },
    { name: "TMJ disc displacement", id: "tmj-disc-displacement", distinguishing: "Temple and jaw pain with clicking or locking and jaw-movement provocation." },
    { name: "Migraine with or without aura", distinguishing: "Throbbing headache with nausea, photophobia or aura. Migraine with aura did not show the cervical impairments seen in CGH [r3]." },
    { name: "Tension-type headache", distinguishing: "Bilateral pressing headache without neck-movement provocation or restricted upper cervical rotation." },
    { name: "Occipital neuralgia", distinguishing: "Paroxysmal shooting pain in the greater occipital nerve territory, with tenderness over the nerve and relief with nerve block." },
    { name: "Secondary headache (intracranial pathology, giant cell arteritis, infection)", distinguishing: "Identified by red flags on the SNNOOP10 list, including fever, neurological deficit, sudden onset and onset after 65 years [r10]." }
  ],
  redFlags: [
    "Sudden, severe (thunderclap) headache, or the worst headache of the person's life: suspect subarachnoid haemorrhage or other serious cause. Call an ambulance [r10].",
    "New severe neck pain or headache with dizziness, double vision, slurred speech, difficulty swallowing, facial numbness, drop attacks or other neurological signs: suspect cervical artery dissection or stroke. Emergency referral, and do not manipulate the neck [r11].",
    "Neurological deficit, papilloedema, fever with neck stiffness, or decreased consciousness: suspect intracranial or infective pathology. Same-day emergency assessment [r10].",
    "Headache onset after 65 years, a history of cancer, immune disease (for example HIV), or a progressive, changing pattern: arrange urgent medical review and investigation [r10].",
    "Headache after head or neck trauma: assess for fracture and concussion before manual therapy, and apply the Canadian C-spine rule where relevant (see whiplash).",
    "Headache that is positional, or provoked by coughing, sneezing or exertion, or associated with a painful red eye with autonomic features: refer for medical review [r10].",
    "Frequent painkiller use (more than occasional): suspect medication overuse headache and refer for medical review [r10]."
  ],

  management: {
    principles: "Screen for secondary headache and for cervical arterial dysfunction first [r10,r11]. Be open with the patient that the diagnosis is probabilistic: clinical criteria have not proved valid, and a definite cervical source needs controlled diagnostic blocks [r1]. Treatment is conservative. In a 200-person randomised trial, both manipulative therapy and a low-load craniocervical exercise program reduced headache frequency and intensity at 12 months, and combining them was not significantly better than either alone [r7]. A C1–2 self-SNAG reduced headache in 32 people with CGH and flexion–rotation limitation [r8]. A systematic review of six randomised trials found that a combination of therapist-driven cervical manipulation or mobilisation and cervico-scapular strengthening was most effective for pain [r14]. Overall confidence is low: a meta-analysis found reductions in CGH pain intensity (−2.52 on a 0–10 scale), frequency and duration, but the pain and frequency reductions did not reach clinically relevant effect sizes, and the GRADE rating was low [r9]. Physiotherapy guidelines for neck pain exist [r15], but the specific recommendations below come from the CGH-specific studies read. Review response at 4–6 weeks, and refer for diagnostic blocks if the response is poor and the diagnosis matters.",
    medical: [
      { name: "Simple analgesia and short-term anti-inflammatory medication", description: "Paracetamol or NSAIDs, taken as directed by a doctor, to allow treatment and activity. Limit use, because overuse of painkillers is a recognised flag and can perpetuate headache [r10].", evidence: "expert-opinion", recommendation: "consider", refs: ["r10"] },
      { name: "Controlled diagnostic nerve blocks (third occipital nerve, C2–3 joint, greater occipital nerve)", description: "Specialist pain medicine procedures that establish a definite cervical source when relief is complete and reproducible with controlled comparative blocks. They are used to confirm the diagnosis before any invasive treatment [r1,r4].", evidence: "moderate", recommendation: "consider", refs: ["r1", "r4"] },
      { name: "Invasive treatment of a proven source (for example denervation or injection)", description: "Reserved for people with a definite cervical source confirmed by controlled blocks and a failure of conservative care. Efficacy data for these treatments were not available in the abstracts reviewed.", evidence: "expert-opinion", recommendation: "consider", refs: ["r1"] },
      { name: "Preventive or acute migraine drugs", description: "Not specific to CGH. Use only if the headache is shown to have migraine features, under medical direction (clinical convention).", evidence: "expert-opinion", recommendation: "consider", refs: [] }
    ],
    physio: [
      { name: "Education, headache diary and self-management", description: "Explain that headache can come from the neck, that movement is safe, and what triggers and eases the headache. Keep a diary of frequency, intensity and duration, which was the primary trial outcome [r7]. Address sleep, posture breaks and stress (clinical convention).", evidence: "expert-opinion", recommendation: "recommended", refs: ["r7"] },
      { name: "Cervical manipulation or mobilisation (therapist-delivered)", description: "In 200 people, manipulative therapy for 6 weeks reduced headache frequency and intensity at 12 months (P < 0.05), with moderate effect sizes [r7]. A review of six randomised trials found reduction in pain and disability in all but one [r14]. Overall evidence is low-grade, and pain and frequency reductions did not reach clinically relevant effect sizes in a meta-analysis [r9]. Screen first for cervical arterial dysfunction and avoid end-range rotation-extension techniques if there is any doubt [r11].", evidence: "limited", recommendation: "consider", refs: ["r7", "r14", "r9", "r11"] },
      { name: "Low-load craniocervical flexion and scapular exercise program", description: "A specific exercise program, reduced headache frequency and intensity at 12 months compared with a control group (P < 0.05) [r7]. A combination of manual therapy and cervico-scapular strengthening was the most effective regimen in a review [r14].", evidence: "limited", recommendation: "consider", refs: ["r7", "r14"] },
      { name: "C1–2 self-sustained natural apophyseal glide (self-SNAG)", description: "In a double-blind placebo-controlled trial of 32 people with CGH and flexion–rotation limitation, home self-SNAG twice daily increased flexion–rotation range by 15° (versus 5° with placebo) and lowered the headache index at 4 weeks (31 versus 51) and 12 months (24 versus 44). It is a small trial from one group, so replication is needed [r8].", evidence: "limited", recommendation: "consider", refs: ["r8"] },
      { name: "Combined manual therapy plus cervico-scapular strengthening", description: "The combination of therapist-driven manipulation or mobilisation with cervico-scapular strengthening was most effective for pain in a systematic review of six trials [r14]. In the 200-person trial the combination was not significantly superior to either alone, although 10% more patients gained relief [r7].", evidence: "limited", recommendation: "consider", refs: ["r14", "r7"] },
      { name: "Thoracic manipulation or mobilisation", description: "Therapist-driven cervical and thoracic manipulation was among the interventions in the reviewed trials. Evidence specific to the thoracic spine in CGH is thin [r14].", evidence: "very-limited", recommendation: "consider", refs: ["r14"] },
      { name: "Passive treatment alone without active components", description: "The reviewed effective regimens included active exercise or self-applied mobilisation alongside manual therapy [r14,r7]. Prolonged reliance on passive treatment is not supported.", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r14", "r7"] }
    ],
    education: [
      "Headaches can come from the upper neck. The nerves of the neck and face share pathways in the spinal cord, so a painful neck joint or muscle can be felt in the head.",
      "Doctors cannot confirm this with a scan. The diagnosis is made from your symptoms and how your neck moves, and can be confirmed with special nerve blocks if needed.",
      "Treatment with hands-on techniques, gentle exercises and a home program often reduces headache, and the benefit can last, but responses vary.",
      "Keep a diary of headache frequency and triggers. Limit pain-killers, because using them too often can make headaches worse.",
      "Take regular breaks from desk work, keep your neck moving, and aim for good sleep.",
      "Seek urgent help for a sudden severe headache, new weakness or numbness, double vision, trouble speaking or swallowing, dizziness with neck pain, or fever with a stiff neck."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and guided by headache frequency, intensity and the flexion–rotation range. Education and early self-mobilisation come first, then restoration of upper cervical mobility and deep neck flexor control, then strength and endurance of the neck and shoulder girdle, and finally self-management for the long term. Dosages are typical clinical ranges, not prescriptions from a single trial; the trials used 4–6 weeks of treatment with maintenance to 12 months [r7,r8]. Re-screen for red flags if the headache pattern changes.",
    stages: [
      {
        name: "Educate and start self-mobilisation",
        timeframe: "Weeks 0–2",
        goals: ["Confirm probable CGH and exclude red flags", "Reduce headache and neck pain", "Begin C1–2 self-mobilisation if the flexion–rotation test is limited", "Start a headache diary"],
        precautions: ["Screen for secondary headache and cervical arterial dysfunction first [r10,r11]", "Avoid end-range extension and rotation holds that provoke dizziness or neurological symptoms", "Stop and reassess if headache worsens or new neurological symptoms appear"],
        exercises: [
          { name: "C1–2 self-SNAG (seated, with a strap or towel)", dosage: "Two sets of 10 repetitions twice daily, as in the trial [r8]", cues: "Apply a gentle sustained glide while rotating the head to the restricted side, and keep it pain-free" },
          { name: "Craniocervical flexion (chin nod), supine", dosage: "10 repetitions with 5–10 s holds, 1–2 times daily", cues: "A small nod with the large neck muscles relaxed", figure: { pose: "ex-chin-tuck", view: "lateral", props: ["mat"] } },
          { name: "Gentle active neck range (rotation, side-flexion, flexion)", dosage: "10 slow repetitions each way, every 2 hours while awake", cues: "Stay below the point that provokes headache" },
          { name: "Posture breaks and shoulder rolls", dosage: "1–2 min every 30–60 min at a desk", cues: "Lengthen the neck, relax the shoulders" }
        ],
        progressionCriteria: ["Headache diary started and understood", "Flexion–rotation range improving, and no red flags", "Neck pain at or below 4/10 and headache not escalating", "Able to perform the self-mobilisation correctly"]
      },
      {
        name: "Restore upper cervical mobility and control",
        timeframe: "Weeks 2–6",
        goals: ["Symmetrical flexion–rotation range", "Deep neck flexor control on the craniocervical flexion test", "Reduce headache frequency and intensity", "Thoracic mobility"],
        precautions: ["Progress manual and exercise load only if headache does not flare for more than 24 hours", "Avoid forcing end-range upper cervical positions"],
        exercises: [
          { name: "Craniocervical flexion with progressive holds (low-load)", dosage: "10 repetitions with 10 s holds, once or twice daily; use pressure biofeedback if available", cues: "Smooth nod, without chin poking or jaw clenching", figure: { pose: "ex-chin-tuck", view: "lateral", props: ["mat"] } },
          { name: "Thoracic extension over a foam roller", dosage: "2 × 10, daily", cues: "Support the head; move through the upper back", figure: { pose: "ex-thoracic-extension", view: "lateral", props: ["foam-roller"] } },
          { name: "Seated neck isometrics, low effort", dosage: "5 holds of 5–10 s in each direction, 2 times daily", cues: "Press gently into the hand without moving the head", figure: { pose: "ex-neck-isometric", view: "lateral", props: ["chair"] } },
          { name: "Cat–camel", dosage: "2 × 10, daily", cues: "Smooth whole-spine movement; the head follows the spine", figure: { pose: "ex-cat-camel", view: "lateral", props: ["mat"] } },
          { name: "Therapist-delivered upper cervical mobilisation (clinic)", dosage: "As needed, 1–2 sessions per week, reviewed at each visit", cues: "Gentle, graded, with the flexion–rotation test as a reassessment" }
        ],
        progressionCriteria: ["Flexion–rotation range near symmetrical and pain-free", "Craniocervical flexion held for 10 s with minimal substitution", "Headache frequency reduced by about half or more (clinical convention)", "Neck pain at or below 3/10 with daily activity"]
      },
      {
        name: "Strength and endurance",
        timeframe: "Weeks 6–12",
        goals: ["Neck and scapular strength and endurance", "Tolerate sustained work postures", "Further reduce headache", "Self-manage flare-ups"],
        precautions: ["Increase load stepwise", "Return to the previous stage for a flare lasting more than 48 hours"],
        exercises: [
          { name: "Band row", dosage: "3 × 10–12, 3 times per week", cues: "Squeeze the shoulder blades back and down; keep the neck long", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } },
          { name: "Prone Y raise", dosage: "3 × 8–10, 3 times per week", cues: "Lift the arms with the neck neutral", figure: { pose: "ex-prone-y", view: "lateral", props: ["mat"] } },
          { name: "Wall slide", dosage: "3 × 10, 3 times per week", cues: "Ribs down; neck relaxed", figure: { pose: "ex-wall-slide", view: "lateral", props: ["wall"] } },
          { name: "Progressive neck isometrics (50–70% effort)", dosage: "3 × 10 s in each direction, 3 times per week", cues: "Smooth and controlled", figure: { pose: "ex-neck-isometric", view: "lateral", props: ["chair"] } },
          { name: "Aerobic exercise (walking, cycling, swimming)", dosage: "20–30 min, 3–5 times per week", cues: "Moderate effort; supports sleep and mood" }
        ],
        progressionCriteria: ["Headache frequency and intensity sustained at a low level on the diary", "Neck flexor endurance and scapular strength near normal", "Sustained desk or driving posture tolerated for 30–60 min without headache", "Neck Disability Index low and stable"]
      },
      {
        name: "Self-management and maintenance",
        timeframe: "Months 3–12",
        goals: ["Maintain gains to 12 months", "Prevent recurrence", "Flare-up plan", "Return to all activities"],
        precautions: ["Re-screen for red flags if the headache changes in pattern or severity [r10]", "Refer back for medical review if headache becomes progressive"],
        exercises: [
          { name: "Maintenance program (craniocervical flexion, row, wall slide)", dosage: "2–3 times per week, 15 min", cues: "Use as a flare-up plan", figure: { pose: "ex-chin-tuck", view: "lateral", props: ["mat"] } },
          { name: "C1–2 self-SNAG as needed", dosage: "10 repetitions, once or twice daily during a flare", cues: "Only if the flexion–rotation test remains limited [r8]" },
          { name: "Workstation and sleep review", dosage: "One session, then review", cues: "Screen at eye level, regular breaks, supportive pillow" },
          { name: "General strength and aerobic training", dosage: "2–3 sessions per week", cues: "Choose activities the person enjoys" }
        ],
        progressionCriteria: ["Headache days low and stable on the diary", "Symmetrical pain-free upper cervical rotation", "Confident self-management and a flare-up plan", "Return to full work, sport and recreation"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated return-to-sport criteria were identified in the sources reviewed; the criteria below are clinical convention",
      "No red flags, and a normal neurological examination",
      "Headache controlled (low and stable frequency and intensity on the diary), including during training",
      "Flexion–rotation range symmetrical and pain-free [r6]",
      "Neck flexor and extensor endurance and scapular strength adequate for the sport",
      "Tolerates sport-specific neck loading without headache provocation or next-day flare",
      "Agreement with coach and clinician; for contact sport, check for concussion and neck injury first"
    ],
    tests: ["Cervical flexion–rotation test range [r6]", "Craniocervical flexion test and neck endurance tests", "Headache diary review (frequency, intensity, duration)", "Sport-specific head and neck movement drills"]
  },
  prognosis: "No natural-history data for untreated CGH were identified in the sources reviewed. In a 200-person randomised trial, headache frequency and intensity were significantly reduced after manual therapy or exercise at 12 months, with moderate, clinically relevant effect sizes [r7]. In a placebo-controlled trial of C1–2 self-SNAG, the headache index was 24 versus 44 at 12 months, an overall reduction of 54% [r8]. Overall confidence is low: in a meta-analysis the pooled reduction in CGH pain intensity was 2.52 points on a 0–10 scale, but pain and frequency reductions did not reach clinically relevant effect sizes and the GRADE evidence level was low [r9]. Because the diagnosis is probabilistic, a poor response should prompt re-examination and consideration of other headache types or referral for diagnostic blocks [r1]. Recurrence rates were not identified in the sources reviewed.",
  prevention: [
    "No trials of CGH prevention were identified in the sources reviewed.",
    "Maintain regular neck, scapular and general strength and mobility, as in the exercise program that maintained benefit to 12 months [r7].",
    "Take regular breaks from sustained desk and screen postures, and keep the workstation set-up neutral (clinical convention).",
    "Use a supportive pillow that keeps the neck near neutral in sleep (clinical convention).",
    "Limit painkiller use to avoid medication overuse headache [r10]."
  ],
  clinicalPearls: [
    "Say 'probable'. Clinical criteria have not proved valid, and a definite cervical source needs controlled diagnostic blocks [r1].",
    "Use the flexion–rotation test, but know its limits. It had 91% sensitivity and 90% specificity for C1/2-related CGH in a small study that used therapist segmental testing as the reference, so it supports but does not prove the diagnosis [r6].",
    "Combine findings. Upper cervical joint dysfunction on manual examination, reduced flexion–extension range and muscle tightness together separated CGH from migraine with aura and controls, with 80% sensitivity for manual examination [r3].",
    "Whiplash patients with dominant headache deserve a cervical look: C2–3 joint pain was found in 50% of them, and third occipital nerve headache in 53%, in referred cohorts [r12,r4].",
    "Screen first, treat second. Use the SNNOOP10 list for secondary headache and the IFOMPT Cervical Framework before manual therapy [r10,r11].",
    "Set honest expectations. Trials show a sustained benefit, but a meta-analysis found pain and frequency reductions that did not reach clinically relevant effect sizes, with low-grade evidence [r7,r9]."
  ],
  related: ["whiplash-associated-disorder", "cervical-arterial-dysfunction", "acute-wry-neck", "cervical-radiculopathy", "persisting-post-concussion-symptoms", "tmj-disc-displacement"],

  references: [
    { id: "r1", citation: "Bogduk N, Govind J. Cervicogenic headache: an assessment of the evidence on clinical diagnosis, invasive tests, and treatment. Lancet Neurol. 2009;8(10):959-68.", pmid: "19747657", doi: "10.1016/S1474-4422(09)70209-1", type: "narrative-review", year: 2009 },
    { id: "r2", citation: "Headache Classification Committee of the International Headache Society (IHS). The International Classification of Headache Disorders, 3rd edition. Cephalalgia. 2018;38(1):1-211.", pmid: "29368949", doi: "10.1177/0333102417738202", type: "consensus-statement", year: 2018 },
    { id: "r3", citation: "Zito G, Jull G, Story I. Clinical tests of musculoskeletal dysfunction in the diagnosis of cervicogenic headache. Man Ther. 2006;11(2):118-29.", pmid: "16027027", doi: "10.1016/j.math.2005.04.007", type: "case-control", year: 2006 },
    { id: "r4", citation: "Lord SM, Barnsley L, Wallis BJ, et al. Third occipital nerve headache: a prevalence study. J Neurol Neurosurg Psychiatry. 1994;57(10):1187-90.", pmid: "7931379", doi: "10.1136/jnnp.57.10.1187", type: "cross-sectional", year: 1994 },
    { id: "r5", citation: "Sjaastad O, Fredriksen TA, Pfaffenrath V. Cervicogenic headache: diagnostic criteria. The Cervicogenic Headache International Study Group. Headache. 1998;38(6):442-5.", pmid: "9664748", doi: "10.1046/j.1526-4610.1998.3806442.x", type: "consensus-statement", year: 1998 },
    { id: "r6", citation: "Ogince M, Hall T, Robinson K, et al. The diagnostic validity of the cervical flexion-rotation test in C1/2-related cervicogenic headache. Man Ther. 2007;12(3):256-62.", pmid: "17112768", doi: "10.1016/j.math.2006.06.016", type: "diagnostic-accuracy", year: 2007 },
    { id: "r7", citation: "Jull G, Trott P, Potter H, et al. A randomized controlled trial of exercise and manipulative therapy for cervicogenic headache. Spine. 2002;27(17):1835-43.", pmid: "12221344", doi: "10.1097/00007632-200209010-00004", type: "rct", year: 2002 },
    { id: "r8", citation: "Hall T, Chan HT, Christensen L, et al. Efficacy of a C1-C2 self-sustained natural apophyseal glide (SNAG) in the management of cervicogenic headache. J Orthop Sports Phys Ther. 2007;37(3):100-7.", pmid: "17416124", doi: "10.2519/jospt.2007.2379", type: "rct", year: 2007 },
    { id: "r9", citation: "Luedtke K, Allers A, Schulte LH, et al. Efficacy of interventions used by physiotherapists for patients with headache and migraine: systematic review and meta-analysis. Cephalalgia. 2016;36(5):474-92.", pmid: "26229071", doi: "10.1177/0333102415597889", type: "meta-analysis", year: 2016 },
    { id: "r10", citation: "Do TP, Remmers A, Schytz HW, et al. Red and orange flags for secondary headaches in clinical practice: SNNOOP10 list. Neurology. 2019;92(3):134-44.", pmid: "30587518", doi: "10.1212/WNL.0000000000006697", type: "narrative-review", year: 2019 },
    { id: "r11", citation: "Cagnie B, Castien R, Scholten-Peeters GGM. Translating the new International IFOMPT Cervical Framework into a framework flowchart for clinical practice and education. J Back Musculoskelet Rehabil. 2023;36(2):331-6.", pmid: "36404531", doi: "10.3233/BMR-220155", type: "other", year: 2023 },
    { id: "r12", citation: "Lord SM, Barnsley L, Wallis BJ, et al. Chronic cervical zygapophysial joint pain after whiplash. A placebo-controlled prevalence study. Spine. 1996;21(15):1737-44.", pmid: "8855458", doi: "10.1097/00007632-199608010-00005", type: "cross-sectional", year: 1996 },
    { id: "r13", citation: "Bartsch T, Goadsby PJ. Stimulation of the greater occipital nerve induces increased central excitability of dural afferent input. Brain. 2002;125(Pt 7):1496-509.", pmid: "12077000", doi: "10.1093/brain/awf166", type: "basic-science", year: 2002 },
    { id: "r14", citation: "Racicki S, Gerwin S, Diclaudio S, et al. Conservative physical therapy management for the treatment of cervicogenic headache: a systematic review. J Man Manip Ther. 2013;21(2):113-24.", pmid: "24421621", doi: "10.1179/2042618612Y.0000000025", type: "systematic-review", year: 2013 },
    { id: "r15", citation: "Blanpied PR, Gross AR, Elliott JM, et al. Neck pain: revision 2017. J Orthop Sports Phys Ther. 2017;47(7):A1-A83.", pmid: "28666405", doi: "10.2519/jospt.2017.0302", type: "clinical-practice-guideline", year: 2017 }
  ],

  animation: {
    title: "How cervicogenic headache arises",
    phases: [
      {
        type: "moi", label: "Sustained posture", duration: 6, view: "lateral", environment: "office",
        actors: [{ id: "worker", kit: "worker" }],
        keyframes: [
          { t: 0, pose: "sit-desk", root: { x: 0 } },
          { t: 1.6, pose: "sit-desk", joints: { neck: 22 }, root: { x: 0 } },
          { t: 3.2, pose: "sit-desk", joints: { neck: 36, trunk: 18 }, root: { x: 0 } },
          { t: 4.6, pose: "sit-desk", joints: { neck: 40, trunk: 22 }, root: { x: 0 } },
          { t: 5.6, pose: "sit-desk", joints: { neck: 40, trunk: 22 }, root: { x: 0 } }
        ],
        forces: [
          { t: [1.8, 4.2], at: "neck", dir: "forward", label: "Sustained forward head posture" },
          { t: [4.0, 5.8], at: "head", dir: "up", label: "Pain felt in the head" }
        ],
        highlights: [{ t: [3.0, 6], at: "neck" }, { t: [4.2, 6], at: "head" }],
        captions: [
          { t: 0, text: "A person works at a screen for hours, with the head forward." },
          { t: 1.7, text: "Upper cervical joints and muscles are held under sustained load." },
          { t: 3.2, text: "The same can follow a whiplash injury or a stiff upper neck." },
          { t: 4.4, text: "The pain is felt in the head, often starting at the back and spreading forward." },
          { t: 5.3, text: "The headache comes from the neck, and neck movement can bring it on." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "neck",
        captions: [{ t: 0, text: "Zooming into the upper neck, viewed from the side." }]
      },
      {
        type: "closeup", label: "Upper neck", duration: 10, scene: "cervical-sagittal",
        actions: [
          { t: 0, do: "highlight", target: "facetC2C3" },
          { t: 0.3, do: "label", target: "facetC2C3", text: "C2–3 facet joint (third occipital nerve)" },
          { t: 1.4, do: "highlight", target: "suboccipitals" },
          { t: 1.7, do: "label", target: "suboccipitals", text: "Suboccipital muscles" },
          { t: 2.4, do: "inflame", target: "facetC2C3", amount: 0.4 },
          { t: 3.0, do: "spasm", target: "suboccipitals" },
          { t: 3.8, do: "irritate", target: "greaterOccipitalNerve" },
          { t: 4.0, do: "label", target: "greaterOccipitalNerve", text: "Greater occipital nerve (C2)" },
          { t: 4.8, do: "arrow", at: "occiputBase", dir: "up", label: "Pain referred to the head", size: "m" },
          { t: 5.2, do: "pain", at: "occiputBase", hold: 4 },
          { t: 6.6, do: "camera", at: "occiputBase", zoom: 1.5, dur: 1.0 },
          { t: 9.0, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "The C2–3 facet joint is supplied by the third occipital nerve, a documented source of headache." },
          { t: 1.4, text: "The suboccipital muscles and upper cervical joints lie close to the nerves that supply the scalp." },
          { t: 2.5, text: "An irritated joint or tight muscles send pain signals into the upper neck." },
          { t: 3.9, text: "Upper cervical nerves converge with trigeminal pathways in the spinal cord." },
          { t: 4.9, text: "So the brain feels the pain in the head, not the neck: trigeminocervical convergence." },
          { t: 6.8, text: "The exact source varies, and a definite diagnosis needs controlled nerve blocks." }
        ]
      },
      {
        type: "micro", label: "Joint response", duration: 9, tissue: "capsule",
        stages: [{ t: 0, stage: "healthy" }, { t: 2.2, stage: "inflammation" }, { t: 5.5, stage: "remodelling" }],
        timeLabels: [{ t: 2.2, text: "Days to weeks" }, { t: 5.5, text: "Weeks to months" }],
        captions: [
          { t: 0, text: "A healthy upper cervical facet joint capsule with smooth synovium." },
          { t: 2.2, text: "An irritated joint capsule becomes inflamed and sensitive, one possible source of the headache." },
          { t: 5.5, text: "With treatment and graded movement it settles and remodels. Schematic only." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "SP1" }
};
