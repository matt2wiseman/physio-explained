export default {
  id: "persisting-post-concussion-symptoms",
  name: "Persisting post-concussion symptoms",
  shortName: "Persisting post-concussion",
  aka: ["PPCS", "persistent post-concussive symptoms", "post-concussion syndrome", "PCS", "prolonged concussion", "persistent concussion symptoms", "delayed concussion recovery"],
  region: "head-face",
  tissues: ["brain", "multiple"],
  onset: "acute",
  mechanismType: ["contact", "collision", "fall"],
  populations: ["adolescents and young adults after concussion", "females", "people with a history of migraine", "people with anxiety or depression", "contact and collision sport participants"],
  sports: ["rugby union", "rugby league", "australian football", "american football", "soccer", "ice hockey", "netball", "basketball"],
  urgency: "routine",
  summary: "Concussion symptoms that outlast the expected window (beyond 10–14 days in adults, 4 weeks in children). Causes are multifactorial: neck, vestibular, eye movement, exertion and mood. Treat the drivers.",
  keyFacts: [
    { label: "Typical recovery", value: "Variable and not well defined. Most people improve with targeted rehabilitation, but trial evidence is low to moderate quality" },
    { label: "Incidence", value: "About one-third of children (35.1%, 95% CI 26.3–45.0%, in 13 studies); 31.0% at 28 days in one large paediatric cohort" },
    { label: "Key test", value: "No test is diagnostic. Diagnosis relies on symptom report with standardised scales, plus a multimodal examination of neck, vestibular, eye-movement, exertion and mood" },
    { label: "Imaging", value: "Usually normal. Use it for red flags or atypical features, not to confirm persisting symptoms" },
    { label: "Key treatments", value: "Subsymptom-threshold aerobic exercise (commonly 20 minutes at 80% of the symptom-threshold heart rate), cervicovestibular rehabilitation, and collaborative care with CBT" }
  ],
  overview: "Most people recover from concussion within weeks, but some do not. Persisting post-concussion symptoms (PPCS) are defined as clinical recovery that falls outside the expected time frame: beyond 10–14 days in adults and beyond 4 weeks in children. The label does not describe a single pathophysiological entity. It describes a constellation of non-specific post-traumatic symptoms that may be linked to coexisting or confounding conditions, so a detailed multimodal assessment is needed to find the specific primary and secondary processes and treat each one [r1]. Definitions in studies vary, most often at 28 days or 4 weeks [r2,r3].\n\nThe drivers are multifactorial. Cervical spine dysfunction, vestibular and oculomotor impairment, exercise intolerance, headache, sleep disturbance and psychological factors such as depression and anxiety can each contribute [r1,r4,r5]. No test accurately diagnoses PPCS: diagnosis relies on symptom report, preferably on a standardised symptom scale [r6]. Red flags and other diagnoses are excluded first.\n\nTreatment targets the identified drivers. The evidence is real but modest. Subsymptom-threshold aerobic exercise, cervicovestibular rehabilitation and collaborative care with cognitive behavioural therapy (CBT) each improved outcomes in small or moderate trials, while guideline panels judged the overall evidence for non-pharmacological treatments in adults to be very low to low certainty [r7,r4,r8,r9]. Treatment is best delivered by a multidisciplinary team experienced in concussion [r1].",

  epidemiology: {
    text: "In a meta-analysis of 13 studies with 5307 children, the weighted proportion with PPCS at 4 weeks or more was 35.1% (95% CI 26.3–45.0%). It was higher in older and female children and in those seen in concussion clinics [r3]. In the largest prospective cohort, 3063 children and adolescents seen in emergency departments were followed to 28 days, and 31.0% (801/2584) had persistent post-concussion symptoms, defined as three or more new or worsening symptoms [r2]. Across ages, a meta-analysis reports that approximately 15% to 30% of people with a history of concussion present with PPCS, and people with PPCS had much higher odds of depressive symptoms (OR 4.56, 95% CI 2.82–7.37; 18 studies, 9101 participants, mostly adults) [r5]. These figures depend on the definition used and on the care setting.",
    riskFactors: {
      intrinsic: [
        "Female sex, age 13 years or older, a physician-diagnosed migraine history and a previous concussion with symptoms lasting more than a week (paediatric 12-point risk score) [r2]",
        "Higher initial symptom burden and early symptoms of headache, noise sensitivity, fatigue and slowed answers [r2,r10]",
        "Four or more errors on the tandem stance of the Balance Error Scoring System at the first visit [r2]",
        "Premorbid or coexisting depression or anxiety, which may modify recovery time. The paediatric score has only modest discrimination (AUC 0.68–0.71) [r10,r2]"
      ],
      extrinsic: [
        "Continuing to play and delayed access to healthcare after the injury were associated with longer recovery (modifiable) [r10]",
        "Complete inactivity: children who did no physical activity within 7 days had a higher risk of PPCS at 28 days than those who did (43.5% versus 24.6% unadjusted; observational) [r11]",
        "Presentation to a specialist concussion clinic, which reflects case selection rather than cause [r3]"
      ]
    }
  },

  mechanism: {
    summary: "PPCS begins with an ordinary concussion: an impulsive force to the head produces a neurometabolic disturbance with rotational strain of the brain. In most people the brain recovers within weeks [r10]. In others, symptoms persist because the injury also involved or unmasked other systems: the neck, the vestibular and oculomotor systems, autonomic control of exercise, sleep and mood. These processes can sustain each other, so symptoms continue even after the initial disturbance has settled [r1]. The sequence below is a clinical model, and the links are plausible but not all proven.",
    sequence: [
      "An impulsive force is transmitted to the head, causing a concussion (see the concussion page for the biomechanics).",
      "The brain is disturbed functionally, with a symptom burden that settles within weeks in most people [r10].",
      "The same impact can strain the neck, so cervical dysfunction adds headache, neck pain and dizziness [r4,r1].",
      "Vestibular and oculomotor impairments cause dizziness, imbalance and visual strain, especially during head movement or reading [r12].",
      "Early rest or fear of symptoms leads to deconditioning, and exercise is stopped by symptoms at a low heart rate (exercise intolerance) [r13,r14].",
      "Poor sleep, headache, low mood and anxiety develop, and they amplify symptom reports and reduce function [r5,r15].",
      "Time away from school, work or sport increases stress and reinforces the cycle, until the drivers are identified and treated [r16]."
    ],
    variants: [
      { name: "Cervical-driven pattern", description: "Neck pain, headache and dizziness related to neck posture or movement, with abnormal cervical findings. A cervical and vestibular programme shortened time to medical clearance in one trial [r4]." },
      { name: "Vestibular and oculomotor pattern", description: "Dizziness, imbalance, motion sensitivity and visual strain with abnormal vestibular or eye-movement screening. Vestibular rehabilitation reduced dizziness handicap in a systematic review of seven RCTs [r17]." },
      { name: "Exertional (physiological) pattern", description: "Symptoms increase at a low heart rate on a graded treadmill test. People with PCS reached a shorter test duration than controls (8.5 versus 17.9 minutes) and a lower heart rate [r13]." },
      { name: "Psychological and mood pattern", description: "Anxiety, depression, fear of symptoms and sleep disturbance dominate. PPCS is associated with a higher risk of depressive symptoms (OR 4.56), and collaborative care with CBT improved symptoms in adolescents [r5,r8]." },
      { name: "Mixed pattern", description: "Most people have more than one driver. Assess every system and prioritise the one that limits function most, then add others [r1,r18]." }
    ]
  },

  anatomy: {
    text: "Symptom generators sit in several systems that share the same neural pathways. The brain and brainstem integrate vestibular, visual and neck proprioceptive input and also regulate autonomic function and cerebral blood flow. The cervical spine and its muscles provide proprioception and can refer pain to the head. The vestibular labyrinth and the extraocular muscles drive gaze stability. Mood and sleep circuits influence how symptoms are felt [r1]. An injury to any of these systems can produce symptoms that look like a brain problem.",
    structures: [
      { name: "Cerebral cortex and white matter", role: "Cognition, attention and fatigue. Not the only source of persisting symptoms [r1]" },
      { name: "Brainstem and cerebellum", role: "Vestibular, oculomotor and autonomic control that links head, eyes and neck" },
      { name: "Upper cervical spine and neck muscles", role: "Proprioceptive input for balance and a source of headache and dizziness [r4]" },
      { name: "Vestibular labyrinth and vestibulo-ocular reflex", role: "Gaze stability and balance during head movement [r17]" },
      { name: "Oculomotor system", role: "Convergence, saccades and smooth pursuit for reading and screen use" },
      { name: "Autonomic nervous system and cerebral blood flow regulation", role: "Heart-rate and blood-pressure response to exercise, which appears impaired in PCS [r13]" },
      { name: "Limbic and sleep circuits", role: "Mood, anxiety, arousal and sleep, which interact with symptom burden [r5]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "PPCS does not have a single pathology. It describes a group of non-specific symptoms that may be linked to coexisting or confounding conditions [r1]. Standard imaging is normally normal, and no specific test or measure has satisfactory diagnostic accuracy: a systematic review of 26 studies found no studies of diagnostic accuracy, and diagnosis continues to rely on symptom report [r6].\n\nSeveral processes are proposed to maintain symptoms. Cervical dysfunction after a concomitant whiplash-type injury and vestibular dysfunction contribute to dizziness, headache and imbalance [r4,r17]. Exercise intolerance is measurable: in 34 people with PCS, treadmill test duration was shorter than in controls (8.5 versus 17.9 minutes) and the odds of a shorter test were nearly eight times higher (hazard ratio 7.93, 95% CI 3.39–18.56) [r13]. Mood disorders are strongly associated with PPCS [r5]. These are associations and the direction of causality is not established.",
    structures: [
      { name: "Cervical spine", effect: "Segmental dysfunction, tender muscles and abnormal neck findings in a subgroup, which can drive headache and dizziness [r4,r19]" },
      { name: "Vestibular system", effect: "Impaired gaze stability and balance during head movement, treatable with vestibular rehabilitation [r17]" },
      { name: "Oculomotor system", effect: "Convergence and eye-movement impairment that provokes visual strain; no trial evidence for oculomotor vision therapy was identified by the guideline panel [r9]" },
      { name: "Brain function", effect: "Normal on routine imaging and no validated biomarker for diagnosis [r6]" }
    ],
    muscles: [
      { name: "Deep neck flexors and suboccipital muscles", effect: "Tenderness, reduced endurance and guarding contribute to headache and altered proprioception [r4]" },
      { name: "Oculomotor muscles", effect: "Impaired convergence and saccades; screen and treat as part of multimodal assessment [r1]" },
      { name: "Whole-body deconditioning", effect: "Prolonged inactivity reduces exercise capacity. After subsymptom exercise training, treadmill test time rose from 9.75 to 18.67 minutes in 12 refractory patients [r14]." }
    ],
    cellular: [
      { phase: "Acute concussion cascade", timing: "First days", description: "Ionic, metabolic and axonal disturbance, the same as in acute concussion (see the concussion page). Most people settle within weeks [r10]." },
      { phase: "Expected recovery window", timing: "Up to 10–14 days (adults) or 4 weeks (children)", description: "Time within which most people recover. Outside it, symptoms are classed as persisting [r1]." },
      { phase: "Persisting phase", timing: "Beyond the expected window", description: "Cellular and tissue-level correlates are not well established. The symptom set is non-specific and may reflect coexisting conditions [r1,r6]." },
      { phase: "Physiological adaptation to training", timing: "Over about 3 weeks or more", description: "Controlled subsymptom exercise retested every 3 weeks improved treadmill time, with no adverse events in 12 patients. This is a small case series [r14]." }
    ],
    systems: [
      { system: "Autonomic and cardiovascular", effect: "Exercise intolerance with a lower peak heart rate and blood pressure at symptom onset in PCS [r13,r14]." },
      { system: "Vestibular and oculomotor", effect: "Dizziness, balance and visual symptoms with head movement, targeted by cervicovestibular and vestibular rehabilitation [r12,r17]." },
      { system: "Musculoskeletal (cervical)", effect: "Neck dysfunction contributes to headache, dizziness and symptom recurrence after neck treatment in a small series [r4,r19]." },
      { system: "Psychological", effect: "PPCS is associated with depressive symptoms (OR 4.56), and children with concussion have more internalising and externalising difficulties than controls, with effects decreasing over time [r5,r15]." },
      { system: "Educational and social", effect: "In 200 youth with PPCS, new or worsening academic problems occurred in half at 12 months [r16]." }
    ]
  },

  grading: null,

  timeframes: {
    summary: "PPCS is defined by time: beyond 10–14 days in adults and 4 weeks in children [r1]. Treatment trials run from about 6 weeks to 6 months, with improvement over weeks [r20,r4,r8].",
    healing: [
      { phase: "Expected recovery window (adults)", startDay: 0, endDay: 14, description: "Most adults recover within 10–14 days; later is classed as persisting [r1]" },
      { phase: "Expected recovery window (children)", startDay: 0, endDay: 28, description: "Most children recover within 4 weeks; the paediatric studies use 28 days as the threshold [r1,r2]" },
      { phase: "Persisting symptoms assessed and treated", startDay: 14, endDay: 180, description: "Multimodal assessment then targeted rehabilitation; trial intervention periods of 6 weeks to 6 months [r20,r4,r8]" },
      { phase: "Longer-term recovery and relapse risk", startDay: 90, endDay: 365, description: "Half of youth with PPCS had new or worsening academic problems at 12 months, and neck-treated adults often had symptom recurrence [r16,r19]" }
    ],
    milestones: [
      { label: "Adult persisting-symptom threshold", day: 14, note: "Recovery outside 10–14 days in adults [r1]" },
      { label: "Child persisting-symptom threshold", day: 28, note: "More than 4 weeks in children; 31.0% of children at 28 days in one cohort [r1,r2]" },
      { label: "Exercise trial intervention period", day: 42, note: "At least 6 weeks of aerobic training in the adolescent trial [r20]" },
      { label: "Cervicovestibular trial primary endpoint", day: 56, note: "73% (11/15) were cleared within 8 weeks versus 7% (1/14) [r4]" },
      { label: "Collaborative-care treatment period", day: 180, note: "6 months of CBT and care management by telehealth [r8]" }
    ],
    returnToSport: "Criteria-based and individual. Return only when symptom-free at rest and on exertion, with a normal examination, a return to learn or work, and a completed staged return. Timelines are not well defined and often take weeks to months [r1,r4]."
  },

  clinicalPresentation: {
    symptoms: [
      "Headache, including migrainous headache and neck-related headache",
      "Dizziness, imbalance, and sensitivity to head movement or busy visual scenes",
      "Fatigue, poor stamina and exercise intolerance, with symptoms rising at a low exercise intensity",
      "Cognitive difficulty: poor concentration, slowed thinking and memory problems",
      "Sleep disturbance, irritability, low mood and anxiety",
      "Sensitivity to light and noise, and visual strain with reading or screens"
    ],
    signs: [
      "Reproduction of symptoms on a graded exercise test, at a lower heart rate than expected [r13]",
      "Abnormal eye-movement or vestibular screening, such as symptom provocation with convergence, saccades or head movement",
      "Neck tenderness, reduced range of motion or provoked dizziness or headache on neck movement [r4]",
      "Impaired balance on tandem or single-leg stance",
      "Flat or anxious affect and a high symptom report, which may point to mood contributions [r5]"
    ]
  },

  assessment: {
    subjective: [
      "Original injury: mechanism, severity, initial management, and time since injury relative to the 10–14 day and 4 week thresholds [r1]",
      "Symptom profile by system: headache, dizziness, visual, fatigue, cognitive, sleep, mood; use a standardised symptom scale, which is the basis of diagnosis [r6]",
      "Aggravating factors: neck posture, head movement, exercise, screens, busy environments, stress",
      "History: previous concussions, migraine, anxiety or depression, sleep problems, learning difficulty, medications [r2,r5]",
      "Activity level since injury: prolonged rest, avoidance and fear of exercise [r7]",
      "School, work, sport and family circumstances; supports in place [r16]",
      "Red-flag review: worsening headache, neurological change, vomiting, seizures, suicidal thoughts [r18]"
    ],
    observation: [
      "General appearance, affect and engagement; how the person reports symptoms",
      "Posture and neck position in sitting and standing",
      "Gait and balance in standing, tandem walk and single-leg stance",
      "Eye movements: smooth pursuit, saccades and convergence"
    ],
    palpation: [
      "Cervical spine: segmental tenderness, suboccipital and upper trapezius tone, and referral of headache on palpation [r4]",
      "Temporomandibular and scalp tenderness when headache is prominent"
    ],
    rangeOfMotion: [
      "Active cervical flexion, extension, rotation and side flexion: range, pain and provocation of dizziness or headache [r4]",
      "Upper cervical segmental mobility testing once cervical artery red flags are excluded"
    ],
    strength: [
      "Deep neck flexor endurance (craniocervical flexion test) and neck extensor endurance",
      "General lower limb and trunk strength where deconditioning is suspected"
    ],
    neuro: [
      "Cranial nerves and a full neurological examination to exclude a structural cause",
      "Oculomotor screen: smooth pursuit, saccades, near point of convergence and vestibulo-ocular reflex. No single tool has satisfactory diagnostic accuracy, so interpret clinically [r6]",
      "Vestibular assessment: head-impulse and positional tests (Dix-Hallpike if brief positional vertigo)",
      "Autonomic screen: resting and orthostatic heart rate and blood pressure when dizziness is postural"
    ],
    functional: [
      "Graded exercise test (for example the Buffalo Concussion Treadmill Test): heart rate and time at symptom exacerbation, which sets the exercise prescription [r14,r13]",
      "Balance tests: tandem stance, single-leg stance and dynamic gait tasks",
      "Reading, screen and school-day tolerance tests, to reflect return to learn [r16]"
    ],
    specialTests: [
      {
        name: "Graded exercise test (Buffalo Concussion Treadmill Test)",
        purpose: "Identify exercise intolerance and set a subsymptom heart-rate threshold for treatment",
        procedure: "Graded treadmill walk with a stepped increase in incline, recording heart rate, blood pressure and symptom rating each minute. Stop at symptom exacerbation or voluntary maximal exertion. Retest every few weeks.",
        positive: "Symptom exacerbation at a low heart rate and a short test duration. People with PCS lasted a mean 8.5 minutes versus 17.9 minutes in controls, and stopped at a lower heart rate (142.8 versus 175.2 beats per minute).",
        refs: ["r13", "r14"]
      },
      {
        name: "Standardised symptom scale",
        purpose: "Diagnose and track PPCS, since no other measure is accurate enough",
        procedure: "Complete a validated post-concussion symptom inventory, comparing current symptoms with the person's recalled pre-injury state, and repeat at each review.",
        positive: "In the paediatric cohorts, three or more new or worsening symptoms at 28 days defined PPCS [r2]. Systematic review found no other tool with satisfactory diagnostic accuracy.",
        refs: ["r6", "r2"]
      },
      {
        name: "Cervical spine and cervicovestibular examination",
        purpose: "Identify a cervical or vestibular contribution to dizziness and headache that can be treated",
        procedure: "Assess neck range, segmental tenderness, deep neck flexor endurance, movement-provoked dizziness or headache, and gaze stability and balance during head movement.",
        positive: "Reproduction of dizziness or headache with neck movement, or abnormal gaze or balance tests. In the randomised trial, people with persisting dizziness, neck pain or headaches were treated with combined cervical and vestibular therapy.",
        refs: ["r4", "r12"]
      },
      {
        name: "Oculomotor and vestibular screen (VOMS-type tests)",
        purpose: "Screen for convergence, pursuit, saccade and vestibulo-ocular reflex problems",
        procedure: "Test smooth pursuit, saccades, near point of convergence, vestibulo-ocular reflex and visual motion sensitivity, noting symptom provocation.",
        positive: "Symptom provocation or an abnormal near point of convergence; no tool had satisfactory accuracy for diagnosing PPCS itself, so findings guide treatment, not diagnosis.",
        refs: ["r6"]
      }
    ],
    clinicalRules: [
      { name: "Definition of persisting symptoms", description: "Clinical recovery outside the expected time frame: more than 10–14 days in adults and more than 4 weeks in children [r1]. Some studies use 28 days or at least 3 new or worsening symptoms [r2,r3]." },
      { name: "Paediatric persistent-symptom risk score (5P)", description: "12-point score from emergency department assessment. AUC 0.71 in derivation and 0.68 in validation (modest), so it should prompt closer follow-up, not drive treatment [r2]." },
      { name: "Adult outpatient TBI guideline priorities", description: "Assess risk of persistent symptoms, prioritise which symptoms to target first, treat post-traumatic headache, screen and treat mental health, and decide if and when to refer to specialty care [r18]." }
    ],
    outcomeMeasures: [
      { name: "Post-concussion symptom inventory (for example the Post-Concussion Symptom Inventory or Health Behavior Inventory)", use: "Track symptom burden. The Health Behavior Inventory fell by 3.4 points at 3 months and 4.1 points at 12 months with collaborative care [r8]." },
      { name: "Treadmill test duration and heart-rate threshold", use: "Exercise tolerance: 9.75 to 18.67 minutes after subsymptom exercise training in 12 patients [r14]" },
      { name: "Dizziness Handicap Inventory", use: "Vestibular symptoms. A meta-analysis of vestibular rehabilitation found a mean difference of −6.91 points (95% CI −9.11 to −4.72) [r17]." },
      { name: "Neck Disability Index and Rivermead Post-Concussion Symptoms Questionnaire", use: "Used with the Dizziness Handicap Inventory in a case series of neck treatment [r19]" },
      { name: "Quality of life and school days missed", use: "Pediatric Quality of Life Inventory improved by 4.7 points at 12 months with collaborative care, and days of school missed were lower [r8,r16]" }
    ],
    imaging: [
      { modality: "CT or MRI brain", indication: "Only for red flags, new neurological signs, worsening headache or an atypical course", findings: "Usually normal. A normal scan does not exclude PPCS and an abnormal one points to another diagnosis [r6]." },
      { modality: "Cervical spine imaging", indication: "Neck trauma with neurological signs or suspected instability, not for routine PPCS", findings: "Excludes fracture or instability before manual treatment" },
      { modality: "Specialist testing (vestibular function, neuropsychology, sleep)", indication: "When the multimodal assessment suggests a specific problem or the person is not progressing", findings: "Guides targeted treatment and referral [r18]" }
    ]
  },

  differentials: [
    { name: "Acute concussion within the expected recovery window", id: "concussion", distinguishing: "Symptoms have not yet exceeded 10–14 days in adults or 4 weeks in children; use the acute concussion pathway." },
    { name: "Cervicogenic dizziness", id: "cervicogenic-dizziness", distinguishing: "Dizziness tightly linked to neck movement or posture with neck findings; a diagnosis of exclusion that can coexist with PPCS." },
    { name: "Cervicogenic headache", id: "cervicogenic-headache", distinguishing: "Unilateral headache reproduced by neck movement or palpation of upper cervical segments." },
    { name: "Benign paroxysmal positional vertigo", id: "bppv", distinguishing: "Brief spinning vertigo triggered by lying down, rolling or looking up; positive Dix-Hallpike test; treated by repositioning." },
    { name: "Whiplash-associated disorder", id: "whiplash-associated-disorder", distinguishing: "Neck pain and stiffness dominate after an acceleration-deceleration injury; often coexists." },
    { name: "Cervical artery dysfunction or dissection", id: "cervical-arterial-dysfunction", distinguishing: "Neck pain or headache with vertigo, visual disturbance or focal signs after trauma; urgent medical review." },
    { name: "Migraine or post-traumatic headache disorder", distinguishing: "Recurrent headache with nausea, photophobia and phonophobia; may need medical treatment." },
    { name: "Depression, anxiety, PTSD or sleep disorder", distinguishing: "Mood, worry or sleep dominate the picture. PPCS is associated with depression (OR 4.56), and the conditions often coexist [r5]." },
    { name: "Intracranial pathology (for example subdural haematoma, hydrocephalus)", distinguishing: "Progressive headache, drowsiness, new neurological signs or vomiting; imaging shows the cause." }
  ],
  redFlags: [
    "New or worsening severe headache, especially a sudden thunderclap headache, or headache with vomiting, drowsiness or neck stiffness and fever: emergency assessment, because haemorrhage, infection or another intracranial cause is possible.",
    "New focal neurological signs (limb weakness or numbness, speech or swallowing difficulty, facial droop, double vision, loss of vision, loss of coordination) or a seizure: emergency department the same day.",
    "Progressive deterioration in cognition, personality or consciousness, or symptoms that are worsening rather than slowly improving: urgent medical review and imaging.",
    "Neck pain or headache with vertigo, visual disturbance, dysarthria or drop attacks, especially after trauma: suspect cervical artery dissection. Stop neck manipulation and arrange urgent medical review.",
    "Clear fluid from the nose or ear, or a headache that is worse on standing and better lying down: suspect a CSF leak and refer urgently.",
    "Suicidal thoughts, self-harm or severe depression or anxiety: assess risk the same day and arrange urgent mental health support. PPCS is associated with a high risk of depressive symptoms [r5].",
    "Exertional chest pain, palpitations, fainting or severe breathlessness during exercise testing: stop and refer for cardiac assessment.",
    "Symptoms that start well after the injury, or a history inconsistent with concussion: re-evaluate for other diagnoses before attributing symptoms to PPCS [r1]."
  ],

  management: {
    principles: "Management starts with a detailed multimodal assessment to find which systems are driving symptoms: cervical, vestibular, oculomotor, exertional, headache, sleep and mood [r1]. Treatment then targets the specific processes found, ideally within a multidisciplinary team with concussion experience [r1]. Education, reassurance and an early return to graded activity are the foundation. Beyond this, evidence is promising but modest: subsymptom-threshold aerobic exercise, cervicovestibular rehabilitation and collaborative care with CBT each improved outcomes in small trials, while guideline panels rated the evidence for non-pharmacological treatments in adults as very low to low certainty and made weak recommendations [r7,r4,r8,r9]. Agree goals and the plan with the person, set expectations that improvement is gradual, and review progress at each visit. Return to learn or work is addressed alongside treatment [r16].",
    medical: [
      {
        name: "Medical review, red-flag screen and treatment of headache, sleep and mood",
        description: "A doctor confirms the diagnosis, excludes other causes, assesses risk, treats post-traumatic headache, and screens for and treats depression, anxiety and sleep problems. Referral to specialty care is decided when progress stalls [r18,r1].",
        evidence: "expert-opinion",
        recommendation: "recommended",
        refs: ["r18", "r1"]
      },
      {
        name: "Collaborative care with CBT and care management",
        description: "In a trial of 200 adolescents with symptoms for at least 1 month, 6 months of CBT and care management, mostly by telehealth, reduced symptoms (Health Behavior Inventory −3.4 points at 3 months and −4.1 at 12 months) and improved quality of life at 12 months (+4.7 points), with no difference in depression or anxiety scores [r8]. Days of school missed were lower, but grades did not differ [r16].",
        evidence: "moderate",
        recommendation: "consider",
        refs: ["r8", "r16", "r12"]
      },
      {
        name: "Psychological therapy in adults (including CBT)",
        description: "The adult guideline panel made a weak recommendation for psychological treatment based on very low to low certainty evidence [r9]. Effects of CBT on physical symptoms such as headache were inconsistent in a later systematic review [r21].",
        evidence: "limited",
        recommendation: "consider",
        refs: ["r9", "r21"]
      },
      {
        name: "Melatonin for physical symptoms in children",
        description: "In the paediatric trial reviewed, melatonin did not change physical persisting symptoms compared with placebo [r21].",
        evidence: "limited",
        recommendation: "not-recommended",
        refs: ["r21"]
      }
    ],
    physio: [
      {
        name: "Education, reassurance and early advice",
        description: "Explain that PPCS is common, multifactorial and usually improves, and give advice on pacing, sleep and a gradual return to activity. The adult guideline panel made a weak recommendation for early information and advice [r9].",
        evidence: "limited",
        recommendation: "recommended",
        refs: ["r9", "r1"]
      },
      {
        name: "Subsymptom-threshold aerobic exercise",
        description: "Controlled aerobic exercise below the symptom-exacerbation heart rate. The most common protocol was 20 minutes at 80% of the symptom-provoking heart rate, 5–6 days a week, with no adverse events in a systematic review of 12 studies of low to moderate quality [r7]. In a pilot randomised trial of 30 adolescents with 4–16 weeks of symptoms, symptoms improved faster than with stretching (group-by-time P = .044), although adherence was lower [r20]. In 12 refractory patients, treadmill time rose from 9.75 to 18.67 minutes [r14].",
        evidence: "limited",
        recommendation: "consider",
        refs: ["r7", "r20", "r14", "r9"]
      },
      {
        name: "Cervicovestibular rehabilitation",
        description: "Combined cervical spine physiotherapy and vestibular rehabilitation for dizziness, neck pain or headaches. In 31 people, 73% were medically cleared within 8 weeks versus 7% of controls (HR 3.91, 95% CI 1.34–11.34) [r4]. A systematic review recommended it for adolescents and adults with these symptoms beyond 10 days [r12]. In adults, a later review found no further reduction in physical symptoms when it was added to a symptom-limited exercise programme compared with exercise alone [r21].",
        evidence: "limited",
        recommendation: "recommended",
        refs: ["r4", "r12", "r21"]
      },
      {
        name: "Vestibular rehabilitation",
        description: "Gaze stabilisation, habituation and balance training for dizziness and imbalance. A systematic review of seven RCTs found a mean difference of −6.91 on the Dizziness Handicap Inventory (95% CI −9.11 to −4.72) favouring vestibular rehabilitation, with high heterogeneity and mixed results for balance and symptom scores [r17]. In adolescents, vestibular rehabilitation may shorten time to clearance [r12].",
        evidence: "limited",
        recommendation: "consider",
        refs: ["r17", "r12"]
      },
      {
        name: "Cervical manual therapy and neck exercise",
        description: "Used as part of a multimodal plan when cervical findings are present. Cervical manual therapy lowered physical symptoms in young adults in one review [r21]. In an 11-person series, 10 reported neck treatment as helpful but 7 had recurrent headache, neck pain or dizziness at 6 or 12 months [r19]. Screen for cervical artery dysfunction first.",
        evidence: "very-limited",
        recommendation: "consider",
        refs: ["r21", "r19", "r9"]
      },
      {
        name: "Oculomotor (vision) therapy",
        description: "The adult guideline panel found no trials meeting its criteria for oculomotor vision treatment and gave a good clinical practice recommendation based on consensus [r9].",
        evidence: "expert-opinion",
        recommendation: "consider",
        refs: ["r9"]
      },
      {
        name: "Interdisciplinary, multimodal rehabilitation",
        description: "Coordinated care that combines the components above. The review recommended management in a multidisciplinary collaborative setting [r1]. In adults, multimodal therapy produced a significant change in physical symptoms compared with usual care [r21].",
        evidence: "limited",
        recommendation: "recommended",
        refs: ["r1", "r21", "r9"]
      },
      {
        name: "Prolonged rest until all symptoms resolve",
        description: "The field has moved away from rest until total symptom resolution because of the adverse consequences of inactivity [r7].",
        evidence: "limited",
        recommendation: "not-recommended",
        refs: ["r7"]
      }
    ],
    education: [
      "Persisting symptoms are common and treatable. Most people improve, but it can take weeks to months.",
      "Symptoms have more than one cause, such as the neck, the balance system, fitness, sleep and mood, and each can be treated.",
      "Rest alone does not help. Gradual, planned exercise below your symptom threshold helps recovery.",
      "A normal scan does not mean the symptoms are not real. Scans are usually normal in concussion.",
      "Mood, stress and sleep affect symptoms. Support for these is a normal part of treatment.",
      "Seek urgent help if headache worsens, you have weakness, vomiting, a seizure, or thoughts of self-harm."
    ]
  },

  rehab: {
    overview: "The programme is built around the drivers found at assessment, not a fixed sequence, and it progresses on criteria. Stage 1 assesses, educates and sets the exercise threshold. Stage 2 builds aerobic tolerance below the symptom threshold. Stage 3 adds targeted cervical, vestibular and oculomotor work where indicated. Stage 4 restores full activity, learn, work and sport. The aerobic dose is typically 20 minutes at 80% of the symptom-provoking heart rate, 5–6 days a week, retested every few weeks [r7,r14]. Other dosages are typical clinical ranges, not trial protocols. Evidence for each component is low to moderate [r9].",
    stages: [
      {
        name: "Assess, educate and set the threshold",
        timeframe: "Weeks 0–2",
        goals: ["Identify the systems driving symptoms and rule out red flags", "Explain the condition and agree goals", "Set the heart-rate threshold with a graded exercise test", "Protect sleep and start gentle daily activity"],
        precautions: ["Exclude red flags and cervical artery dysfunction before neck treatment", "Keep symptoms at or near the resting level during testing", "Stop the test for exertional chest pain, fainting or palpitations"],
        exercises: [
          { name: "Graded treadmill test to symptom exacerbation", dosage: "One test, then repeat every 3 weeks [r14]", cues: "Record the heart rate at which symptoms rise", figure: { pose: "run-midstance", view: "lateral" } },
          { name: "Easy walking", dosage: "10–20 minutes daily, below the symptom threshold", cues: "Even pace; symptoms stay at or near baseline", figure: { pose: "walk-heel-strike", view: "lateral" } },
          { name: "Sleep and routine plan", dosage: "Regular sleep and wake times; scheduled breaks from screens", cues: "Pace tasks rather than push through and crash" },
          { name: "Craniocervical flexion (chin nod)", dosage: "10 × 10-second holds, once a day, if neck findings", cues: "Gentle nod, no chin poke, normal breathing", figure: { pose: "ex-chin-tuck", view: "lateral", props: ["mat"] } }
        ],
        progressionCriteria: ["Red flags excluded and drivers identified", "Threshold heart rate recorded and exercise plan agreed", "Able to complete daily walking without a symptom flare"]
      },
      {
        name: "Subsymptom aerobic exercise",
        timeframe: "Weeks 2–8 (criteria-based)",
        goals: ["Raise exercise tolerance", "Reduce exercise-provoked symptoms", "Build confidence that exercise is safe"],
        precautions: ["Keep heart rate below the symptom threshold", "Stop if symptoms rise clearly above baseline", "No contact or head-impact risk", "Check adherence: it was lower in the exercise group in the adolescent trial [r20]"],
        exercises: [
          { name: "Stationary cycling or treadmill at 80% of the threshold heart rate", dosage: "20 minutes, 5–6 days a week, retested every 3 weeks [r7,r14]", cues: "Heart-rate monitor on; progress the target as the threshold rises", figure: { pose: "run-midstance", view: "lateral" } },
          { name: "Brisk walking or light jogging outdoors", dosage: "20–30 minutes, 3–4 times a week, below the threshold", cues: "Smooth, relaxed pace", figure: { pose: "run-contact", view: "lateral" } },
          { name: "Light resistance circuit", dosage: "2 × 8–10 of squat, bridge, row, 2–3 times a week", cues: "No breath-holding; stop if symptoms rise", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } }
        ],
        progressionCriteria: ["Completes 20 minutes at target heart rate without symptom increase", "Threshold heart rate or test time rising on retest", "Symptom score trending down"]
      },
      {
        name: "Targeted cervical, vestibular and oculomotor work",
        timeframe: "Weeks 2–10 (alongside stage 2)",
        goals: ["Treat cervical, vestibular and oculomotor impairments found at assessment", "Reduce dizziness, headache and visual strain", "Improve balance and gaze stability"],
        precautions: ["Screen for cervical artery dysfunction before neck manual therapy", "Mild, short-lived symptom provocation is acceptable; stop if it lingers", "Progress only one variable at a time"],
        exercises: [
          { name: "Deep neck flexor endurance", dosage: "10 × 10-second holds, 1–2 times a day, progressing to a longer hold", cues: "Gentle chin nod, no jaw clench", figure: { pose: "ex-chin-tuck", view: "lateral", props: ["mat"] } },
          { name: "Neck isometrics", dosage: "3 × 10-second holds in four directions, once a day", cues: "Light effort, no pain or dizziness", figure: { pose: "ex-neck-isometric", view: "lateral", props: ["chair"] } },
          { name: "Gaze stabilisation (vestibulo-ocular reflex)", dosage: "Fix gaze on a target, turn the head side to side, 3 × 30 seconds, 2–3 times a day", cues: "Mild dizziness settling in a minute is acceptable" },
          { name: "Balance progression", dosage: "Single-leg stance 3 × 30 seconds each side, eyes open then closed, then with head turns", cues: "Stand near a wall for safety", figure: { pose: "ex-single-leg-balance", view: "lateral" } },
          { name: "Convergence and saccade exercises", dosage: "5 minutes, 2 times a day if oculomotor impairment", cues: "Stop if headache or nausea builds" }
        ],
        progressionCriteria: ["Neck pain, dizziness or headache lower on key tasks", "Balance and gaze tasks completed with mild or no symptoms", "Dizziness Handicap Inventory or Neck Disability Index improved [r17,r19]"]
      },
      {
        name: "Return to full activity",
        timeframe: "Weeks 6–16+ (criteria-based)",
        goals: ["Restore school, work and sport", "Raise exercise intensity toward normal", "Maintain gains and prevent relapse"],
        precautions: ["Increase one variable at a time", "Step back one level for a symptom flare", "Plan a staged return to sport once symptom-free at rest and on exertion"],
        exercises: [
          { name: "Higher-intensity aerobic intervals", dosage: "20–30 minutes, 3–4 sessions a week, progressing the intensity as symptoms allow", cues: "Stay symptom-free during and for 24 hours after", figure: { pose: "run-contact", view: "lateral" } },
          { name: "Resistance training", dosage: "3 × 8–12, 2–3 times a week, increasing load", cues: "Avoid breath-holding at heavy loads", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Sport-specific non-contact drills", dosage: "20–30 minutes, 3–4 times a week, adding decision making and speed", cues: "Add complexity gradually" },
          { name: "School or work load plan", dosage: "Increase hours stepwise with agreed adjustments and breaks", cues: "Share the plan with school or employer [r16]" }
        ],
        progressionCriteria: ["Symptom-free at rest and with full-intensity exercise", "Normal examination, with cervical, vestibular and oculomotor screens at baseline", "Back to school or work at full hours; then follow a staged return to sport"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Symptom-free at rest and on full-intensity exercise, for example a normal result on a symptom-limited treadmill test (a common clinical convention) [r14]",
      "Back to full school or work, with no ongoing academic adjustment needed",
      "Normal neurological, cervical, vestibular and oculomotor examination, or back to baseline",
      "Mood, sleep and fatigue under control, with any mental health condition treated",
      "Staged return to sport completed without symptom return, with at least 24 hours at each step (clinical convention)",
      "Cleared by a medical practitioner experienced in concussion [r1]"
    ],
    tests: [
      "Graded exercise test (for example the Buffalo Concussion Treadmill Test) [r13]",
      "Standardised symptom scale and the examination of neck, vestibular and eye movements [r6]",
      "Balance and dynamic gait tests",
      "Symptom checks 24 hours after each stage of the return to sport"
    ]
  },
  prognosis: "Recovery from PPCS is variable and poorly characterised. About one-third of children have PPCS at 4 weeks or more (35.1%) [r3], and 15–30% of people with a history of concussion present with PPCS [r5]. With targeted rehabilitation many improve: in the cervicovestibular trial, 73% were cleared within 8 weeks versus 7% of controls [r4]. In a small case series, athletes recovered faster than non-athletes (mean 25 versus 75 days) with controlled exercise [r14]. However, half of 200 youth with PPCS had new or worsening academic problems at 12 months [r16], and neck-treated adults often had symptom recurrence at 6 or 12 months [r19]. Long-term outcomes are not well defined in the sources reviewed.",
  prevention: [
    "Recognise concussion early and remove the athlete from play. Continuing to play and delayed access to care were associated with longer recovery [r10].",
    "Avoid prolonged strict rest. Early subsymptom-threshold aerobic exercise reduced the risk of persistent post-concussive symptoms by 48% in adolescents (hazard ratio 0.52 for stretching versus aerobic exercise) [r22].",
    "Identify children at higher risk with the 5P risk score or clinical features, and arrange early follow-up. The score has modest accuracy [r2].",
    "Screen for anxiety, depression and sleep problems early, and treat them. PPCS is strongly associated with depressive symptoms [r5].",
    "Start cervicovestibular assessment if dizziness, neck pain or headache last beyond 10 days [r12]."
  ],
  clinicalPearls: [
    "PPCS is a description, not a diagnosis. Look for the drivers: neck, vestibular, eye movement, exertion, headache, sleep and mood, and treat each [r1].",
    "No test diagnoses PPCS. A normal scan or examination does not mean the symptoms are not real; diagnosis relies on a standardised symptom scale [r6].",
    "Test exercise tolerance. The treadmill threshold gives both a diagnosis of exertional intolerance and a safe dose for aerobic treatment (usually 80% of the threshold heart rate for 20 minutes) [r13,r7].",
    "Be honest about the evidence. The best trials are small, and guideline panels rate the non-pharmacological evidence as very low to low certainty; use treatments with low risk and measure the response [r9,r21].",
    "Treat mood early. PPCS is associated with depression (OR 4.56), and collaborative care with CBT improved symptoms and quality of life in adolescents [r5,r8].",
    "Screen the neck for cervical artery dysfunction before manual therapy, and expect recurrence after neck treatment, so teach self-management [r19]."
  ],
  related: ["concussion", "cervicogenic-dizziness", "bppv", "cervicogenic-headache", "whiplash-associated-disorder", "cervical-arterial-dysfunction"],

  references: [
    { id: "r1", citation: "Makdissi M, Schneider KJ, Feddermann-Demont N, et al. Approach to investigation and treatment of persistent symptoms following sport-related concussion: a systematic review. Br J Sports Med. 2017;51(12):958-68.", pmid: "28483928", doi: "10.1136/bjsports-2016-097470", type: "systematic-review", year: 2017 },
    { id: "r2", citation: "Zemek R, Barrowman N, Freedman SB, et al. Clinical risk score for persistent postconcussion symptoms among children with acute concussion in the ED. JAMA. 2016;315(10):1014-25.", pmid: "26954410", doi: "10.1001/jama.2016.1203", type: "cohort", year: 2016 },
    { id: "r3", citation: "Chadwick L, Sharma MJ, Madigan S, et al. Classification criteria and rates of persistent postconcussive symptoms in children: a systematic review and meta-analysis. J Pediatr. 2022;246:131-7.e2.", pmid: "35358589", doi: "10.1016/j.jpeds.2022.03.039", type: "meta-analysis", year: 2022 },
    { id: "r4", citation: "Schneider KJ, Meeuwisse WH, Nettel-Aguirre A, et al. Cervicovestibular rehabilitation in sport-related concussion: a randomised controlled trial. Br J Sports Med. 2014;48(17):1294-8.", pmid: "24855132", doi: "10.1136/bjsports-2013-093267", type: "rct", year: 2014 },
    { id: "r5", citation: "Lambert M, Sheldrake E, Deneault AA, et al. Depressive symptoms in individuals with persistent postconcussion symptoms: a systematic review and meta-analysis. JAMA Netw Open. 2022;5(12):e2248453.", pmid: "36574246", doi: "10.1001/jamanetworkopen.2022.48453", type: "meta-analysis", year: 2022 },
    { id: "r6", citation: "Yeates KO, Räisänen AM, Premji Z, et al. What tests and measures accurately diagnose persisting post-concussive symptoms in children, adolescents and adults following sport-related concussion? A systematic review. Br J Sports Med. 2023;57(12):780-8.", pmid: "37316186", doi: "10.1136/bjsports-2022-106657", type: "systematic-review", year: 2023 },
    { id: "r7", citation: "McIntyre M, Kempenaar A, Amiri M, et al. The role of subsymptom threshold aerobic exercise for persistent concussion symptoms in patients with postconcussion syndrome: a systematic review. Am J Phys Med Rehabil. 2020;99(3):257-64.", pmid: "32079897", doi: "10.1097/PHM.0000000000001340", type: "systematic-review", year: 2020 },
    { id: "r8", citation: "McCarty CA, Zatzick DF, Marcynyszyn LA, et al. Effect of collaborative care on persistent postconcussive symptoms in adolescents: a randomized clinical trial. JAMA Netw Open. 2021;4(2):e210207.", pmid: "33635325", doi: "10.1001/jamanetworkopen.2021.0207", type: "rct", year: 2021 },
    { id: "r9", citation: "Rytter HM, Graff HJ, Henriksen HK, et al. Nonpharmacological treatment of persistent postconcussion symptoms in adults: a systematic review and meta-analysis and guideline recommendation. JAMA Netw Open. 2021;4(11):e2132221.", pmid: "34751759", doi: "10.1001/jamanetworkopen.2021.32221", type: "systematic-review", year: 2021 },
    { id: "r10", citation: "Putukian M, Purcell L, Schneider KJ, et al. Clinical recovery from concussion-return to school and sport: a systematic review and meta-analysis. Br J Sports Med. 2023;57(12):798-809.", pmid: "37316183", doi: "10.1136/bjsports-2022-106682", type: "meta-analysis", year: 2023 },
    { id: "r11", citation: "Grool AM, Aglipay M, Momoli F, et al. Association between early participation in physical activity following acute concussion and persistent postconcussive symptoms in children and adolescents. JAMA. 2016;316(23):2504-14.", pmid: "27997652", doi: "10.1001/jama.2016.17396", type: "cohort", year: 2016 },
    { id: "r12", citation: "Schneider KJ, Critchley ML, Anderson V, et al. Targeted interventions and their effect on recovery in children, adolescents and adults who have sustained a sport-related concussion: a systematic review. Br J Sports Med. 2023;57(12):771-9.", pmid: "37316188", doi: "10.1136/bjsports-2022-106685", type: "systematic-review", year: 2023 },
    { id: "r13", citation: "Kozlowski KF, Graham J, Leddy JJ, et al. Exercise intolerance in individuals with postconcussion syndrome. J Athl Train. 2013;48(5):627-35.", pmid: "23952041", doi: "10.4085/1062-6050-48.5.02", type: "cross-sectional", year: 2013 },
    { id: "r14", citation: "Leddy JJ, Kozlowski K, Donnelly JP, et al. A preliminary study of subsymptom threshold exercise training for refractory post-concussion syndrome. Clin J Sport Med. 2010;20(1):21-7.", pmid: "20051730", doi: "10.1097/JSM.0b013e3181c6c22c", type: "cohort", year: 2010 },
    { id: "r15", citation: "Gornall A, Takagi M, Morawakage T, et al. Mental health after paediatric concussion: a systematic review and meta-analysis. Br J Sports Med. 2021;55(18):1048-58.", pmid: "33926965", doi: "10.1136/bjsports-2020-103548", type: "meta-analysis", year: 2021 },
    { id: "r16", citation: "Rivara FP, Marcynyszyn LA, Wang J, et al. Effect of collaborative care for persistent postconcussive symptoms on academic function: a randomized clinical trial. J Sch Health. 2022;92(3):261-9.", pmid: "34904238", doi: "10.1111/josh.13123", type: "rct", year: 2022 },
    { id: "r17", citation: "Galeno E, Pullano E, Mourad F, et al. Effectiveness of vestibular rehabilitation after concussion: a systematic review of randomised controlled trial. Healthcare (Basel). 2023;11(1):90.", pmid: "36611549", doi: "10.3390/healthcare11010090", type: "systematic-review", year: 2023 },
    { id: "r18", citation: "Silverberg ND, Lee K, Mikolić A, et al. Action Collaborative on Traumatic Brain Injury Care: adapted clinical practice guideline. J Neurotrauma. 2026;43(1-2):89-108.", pmid: "40966132", doi: "10.1177/08977151251378894", type: "clinical-practice-guideline", year: 2026 },
    { id: "r19", citation: "Kennedy E, Chapple C, Quinn D, et al. Can the neck contribute to persistent symptoms post concussion? Long-term follow up from a prospective descriptive case series. J Man Manip Ther. 2021;29(5):318-31.", pmid: "34279185", doi: "10.1080/10669817.2021.1920276", type: "cohort", year: 2021 },
    { id: "r20", citation: "Kurowski BG, Hugentobler J, Quatman-Yates C, et al. Aerobic exercise for adolescents with prolonged symptoms after mild traumatic brain injury: an exploratory randomized clinical trial. J Head Trauma Rehabil. 2017;32(2):79-89.", pmid: "27120294", doi: "10.1097/HTR.0000000000000238", type: "rct", year: 2017 },
    { id: "r21", citation: "Moser N, Gargoum S, Popovic MR, et al. Effectiveness of non-pharmacological therapy on physical symptoms in patients with persistent concussion symptoms: a systematic review. J Neurotrauma. 2024;41(13-14):1473-93.", pmid: "38149605", doi: "10.1089/neu.2023.0474", type: "systematic-review", year: 2024 },
    { id: "r22", citation: "Leddy JJ, Master CL, Mannix R, et al. Early targeted heart rate aerobic exercise versus placebo stretching for sport-related concussion in adolescents: a randomised controlled trial. Lancet Child Adolesc Health. 2021;5(11):792-9.", pmid: "34600629", doi: "10.1016/S2352-4642(21)00267-4", type: "rct", year: 2021 }
  ],

  animation: {
    title: "Why some concussion symptoms persist",
    phases: [
      {
        type: "moi", label: "The injury", duration: 6, view: "lateral", environment: "plain",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "stand", root: { x: 0 } },
          { t: 1.2, pose: "slip", root: { x: 0 }, ease: "in" },
          { t: 2.4, pose: "fall-backward", joints: { neck: 22 }, root: { x: -12 }, ease: "in" },
          { t: 3.2, pose: "lie-supine", joints: { neck: -20 }, root: { x: -30 }, ease: "in" },
          { t: 4.8, pose: "lie-supine", joints: { neck: -4 }, root: { x: -30 } }
        ],
        forces: [
          { t: [3.0, 3.9], at: "head", dir: "down", label: "Head strikes the ground", size: "l" }
        ],
        highlights: [{ t: [2.6, 6], at: "head" }],
        impacts: [{ t: 3.2, at: "head" }],
        slowmo: [{ t: [2.6, 3.6], rate: 0.3 }],
        captions: [
          { t: 0, text: "A player slips and falls backwards, striking the head on the ground." },
          { t: 2.6, text: "The head whips back and strikes the ground, and a concussion follows." },
          { t: 4.0, text: "Most people recover within weeks. Some still have symptoms after 10–14 days (adults) or 4 weeks (children)." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "head",
        captions: [{ t: 0, text: "Zooming into the head and neck." }]
      },
      {
        type: "closeup", label: "Inside the head", duration: 10, scene: "head-brain",
        actions: [
          { t: 0, do: "highlight", target: "brain" },
          { t: 0.3, do: "label", target: "brain", text: "No lesion on CT or MRI" },
          { t: 1.4, do: "shear", target: "corpusCallosum" },
          { t: 1.6, do: "label", target: "corpusCallosum", text: "Original white-matter strain" },
          { t: 3.4, do: "unhighlight", target: "brain" },
          { t: 3.6, do: "highlight", target: "brainstem" },
          { t: 3.6, do: "pulse", target: "brainstem" },
          { t: 3.8, do: "label", target: "brainstem", text: "Balance, eye and autonomic pathways" },
          { t: 5.4, do: "highlight", target: "cervicalSpine" },
          { t: 5.6, do: "label", target: "cervicalSpine", text: "Neck: a common co-contributor" },
          { t: 5.8, do: "pain", at: "occiputImpact", hold: 3 },
          { t: 8.0, do: "camera", at: "brainstemUpper", zoom: 1.5, dur: 1.0 }
        ],
        captions: [
          { t: 0, text: "The scan is usually normal, because the injury is functional." },
          { t: 1.4, text: "The original impact strained the white matter, and most people recover from it." },
          { t: 3.6, text: "Persisting symptoms often involve the balance, eye-movement and autonomic pathways." },
          { t: 5.4, text: "The neck can add headache and dizziness, because it was loaded in the same impact." },
          { t: 7.2, text: "Several systems can drive symptoms at once, so each is assessed and treated." }
        ]
      },
      {
        type: "micro", label: "Cell recovery", duration: 10, tissue: "brain",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.6, stage: "ionic-flux" }, { t: 3.6, stage: "energy-crisis" }, { t: 6.4, stage: "recovery" }
        ],
        timeLabels: [{ t: 1.6, text: "Seconds to minutes" }, { t: 3.6, text: "Hours to days" }, { t: 6.4, text: "Weeks (varies)" }],
        captions: [
          { t: 0, text: "Healthy neurons keep ions in balance across the membrane." },
          { t: 1.6, text: "After concussion, ions flood across the membrane and glutamate is released." },
          { t: 3.6, text: "Energy demand rises and the cell is under metabolic stress." },
          { t: 6.4, text: "In most people the cells recover within weeks." },
          { t: 8.2, text: "When symptoms persist, other drivers such as the neck, balance system, fitness and mood are often involved." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "SP5" }
};
