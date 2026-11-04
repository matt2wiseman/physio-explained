export default {
  id: "rotator-cuff-related-shoulder-pain",
  name: "Rotator cuff related shoulder pain (subacromial pain)",
  shortName: "Rotator cuff shoulder pain",
  aka: ["RCRSP", "subacromial pain syndrome", "SAPS", "shoulder impingement", "subacromial impingement syndrome", "rotator cuff tendinopathy", "painful arc syndrome", "subacromial bursitis", "swimmer's shoulder"],
  region: "shoulder",
  tissues: ["tendon", "bursa"],
  onset: "gradual",
  mechanismType: ["overuse", "insidious"],
  populations: ["adults aged 40–60 years", "overhead manual workers", "overhead athletes", "people returning to activity after a lay-off"],
  sports: ["swimming", "tennis", "baseball", "cricket", "volleyball", "badminton", "weightlifting", "rock climbing"],
  urgency: "routine",
  summary: "Activity-related shoulder pain with a painful arc, from load exceeding the capacity of the rotator cuff tendons. 'Impingement' as a purely mechanical explanation is contested.",
  keyFacts: [
    { label: "Typical recovery", value: "Usually months of progressive loading; symptoms can persist or recur" },
    { label: "Return to sport", value: "Criteria-based, commonly about 3–6 months for overhead athletes (clinical convention)" },
    { label: "Key test", value: "Cluster of findings: painful arc, pain on resisted tests, Hawkins–Kennedy and Neer (no single test is diagnostic)" },
    { label: "Imaging", value: "Not routine; ultrasound if no improvement after about 6 weeks or a full-thickness tear is suspected" },
    { label: "Peak age", value: "About 50 years (peak consultation incidence for shoulder conditions)" },
    { label: "Incidence", value: "1.47% of UK adults consult yearly for any shoulder condition" }
  ],
  overview: "Rotator cuff related shoulder pain (RCRSP) is an umbrella term for subacromial pain (impingement) syndrome, rotator cuff tendinopathy and symptomatic partial or full-thickness rotator cuff tears [r1]. It presents as activity-related pain around the deltoid region that is worse with overhead and loaded movements and is often painful at night. Shoulder conditions as a whole prompt about 1.5% of UK adults to consult a primary care doctor each year [r2].\n\nThe older label 'impingement' implies that the cuff tendons are mechanically pinched beneath the acromion. The Dutch guideline concluded that this anatomical explanation is not sufficient to cover the pathology and preferred the term subacromial pain syndrome [r3], and the cause and source of symptoms remain uncertain [r1]. A practical working model is that pain arises when the load placed on the cuff tendons, bursa and surrounding tissues exceeds their current capacity, with age, activity, sleep, mood and beliefs all modifying the response. This is a clinical model, not a proven mechanism.\n\nMost people can be managed without surgery. A clinical practice guideline recommends an active, task-oriented program of exercise and education and recommends against subacromial decompression for cuff tendinopathy [r4]. Two placebo-controlled trials found no clinically important benefit of decompression over placebo surgery [r5,r6]. Exercise carries a strong recommendation as first-line physiotherapy [r7], although in a large pragmatic trial progressive exercise was not superior to a single session of best-practice advice over 12 months [r8].",

  epidemiology: {
    text: "In UK primary care, the annual incidence of adults consulting for any shoulder condition was 1.47% and the annual prevalence was 2.36%; incidence peaked at about 50 years and then stayed at about 2% [r2]. These figures cover all shoulder diagnoses, not RCRSP alone, because general practitioners used a small number of generalised diagnostic codes [r2]. About half of new consulters attended only once, but 13.6% were still consulting for a shoulder problem in the third year of follow-up [r2]. Structural cuff abnormality on imaging rises with age, from 9.7% in people aged 20 years or younger to 62% in those aged 80 or older, and the rise is similar whether or not people have symptoms [r9]. An abnormal scan therefore does not by itself explain a person's pain [r9].",
    riskFactors: {
      intrinsic: [
        "Age around 40–60 years, when consultation incidence for shoulder conditions peaks [r2]",
        "Age-related tendon change: structural cuff abnormality is common in people without symptoms, so it indicates susceptibility rather than a cause on its own [r9]",
        "Low cuff and scapular-muscle capacity relative to task demands (proposed contributor; prospective evidence is limited)",
        "Poor sleep, high stress, low mood and unhelpful beliefs about the shoulder (proposed modifiers of pain and recovery; modifiable)",
        "Thoracic stiffness or altered scapular motion are often seen, but their causal role is uncertain"
      ],
      extrinsic: [
        "Repetitive or sustained overhead work (painting, electrical or ceiling work, warehouse shelving)",
        "Overhead sport with high volume (swimming, throwing, racquet sports, volleyball, climbing)",
        "A sudden increase in load or return to activity after a lay-off (a 'load spike')",
        "Heavy lifting with the arm away from the body (modifiable through task and load design)"
      ]
    }
  },

  mechanism: {
    summary: "RCRSP usually develops gradually when the demands placed on the cuff tendons and subacromial tissues exceed their capacity, often after a change in overhead activity, a period of inactivity or a minor strain. Pain is typically provoked during loaded elevation, classically between about 60° and 120° of abduction (the painful arc, a clinical convention). The idea that the tendon is squeezed beneath the acromion is contested [r3,r1].",
    sequence: [
      "A person repeats loaded overhead movement or restarts overhead activity after a lay-off.",
      "Demand on the supraspinatus and infraspinatus tendons rises above what the tendon and its muscle can currently tolerate.",
      "The tendon responds with reactive cell and matrix changes, and with repeated overload it can move along the continuum toward disrepair and degeneration [r10].",
      "The subacromial bursa becomes irritated and swollen and may contribute to pain, although the exact source of symptoms is uncertain [r1].",
      "Pain during elevation inhibits the cuff and scapular stabilisers and changes movement, which can further reduce capacity.",
      "Avoidance of the arm and fear of movement reduce tendon capacity further, and the cycle continues unless load is managed and capacity rebuilt."
    ],
    variants: [
      { name: "Acute-on-chronic flare", description: "A load spike such as painting a ceiling or a first heavy session after months off provokes a sudden flare in a shoulder that was mildly symptomatic or structurally abnormal but quiet." },
      { name: "Occupational overhead work", description: "Sustained or repeated elevation over a working week, often with little recovery time. Return-to-work planning and task modification are part of management [r4]." },
      { name: "Overhead athlete", description: "High-volume throwing, swimming or serving gradually exceeds cuff capacity. Posterosuperior (internal) impingement is a separate presentation and is covered on its own page." },
      { name: "Symptomatic partial or full-thickness tear", description: "RCRSP includes symptomatic partial and full-thickness cuff tears [r1]. A traumatic tear with sudden weakness needs a different pathway (see traumatic rotator cuff tear)." }
    ]
  },

  anatomy: {
    text: "The rotator cuff is formed by supraspinatus, infraspinatus, teres minor and subscapularis. Their tendons blend into a continuous sleeve around the humeral head and insert on the greater and lesser tuberosities. The cuff compresses and centres the humeral head in the shallow glenoid while the deltoid and scapular muscles move the arm. The supraspinatus tendon passes below the acromion and coracoacromial ligament, separated from them by the subacromial–subdeltoid bursa. The long head of biceps tendon runs through the rotator interval and bicipital groove and is closely related to the cuff.",
    structures: [
      { name: "Supraspinatus and its tendon", role: "Initiates and assists abduction and compresses the humeral head into the glenoid; the most commonly affected cuff tendon" },
      { name: "Infraspinatus and teres minor", role: "External rotation and posterior stability; resist anterior translation of the head during elevation" },
      { name: "Subscapularis", role: "Internal rotation and anterior stability; the largest cuff muscle" },
      { name: "Subacromial–subdeltoid bursa", role: "A lubricating sac between the cuff and the acromion and deltoid; often swollen and irritated in RCRSP" },
      { name: "Coracoacromial arch", role: "Acromion, coracoacromial ligament and coracoid form a roof over the cuff; its role as the cause of pain is contested [r3]" },
      { name: "Scapular stabilisers", role: "Serratus anterior, lower and middle trapezius rotate and position the scapula so the glenoid supports the arm during elevation" }
    ]
  },

  pathophysiology: {
    tissueDamage: "Tendon pathology is often described along a continuum (reactive, disrepair, degenerative) that stages the tendon by the extent and distribution of matrix disorganisation [r10]. This model has been challenged because it classifies by structure what is primarily a pain condition, and the relationship between structure, pain and function is not fully understood [r10]. In the cuff, structural abnormality is common in people without symptoms and increases steadily with age, so imaging findings are an unreliable explanation for an individual's pain [r9].\n\nThe subacromial–subdeltoid bursa lies between the cuff and the acromion and is often swollen and irritated alongside cuff overload. Whether the tendon, the bursa or altered central pain processing is the main source of pain in a given person is not established [r1]. Because structure explains pain poorly, management aims at building tendon and muscle capacity, restoring load tolerance and changing beliefs, rather than at removing a single 'lesion'.",
    structures: [
      { name: "Supraspinatus tendon (critical zone near the footprint)", effect: "Matrix disorganisation and thickening under overload; the commonest site of tendinopathy and of partial or full-thickness tears" },
      { name: "Subacromial–subdeltoid bursa", effect: "Thickened, vascular and inflamed, with effusion in some people; may contribute to pain on elevation" },
      { name: "Infraspinatus and subscapularis tendons", effect: "Can be involved with overload, particularly in overhead athletes and in larger tears" },
      { name: "Long head of biceps tendon", effect: "Often irritated in parallel; contributes to anterior shoulder pain" },
      { name: "Coracoacromial ligament and acromion", effect: "May show morphological change, but the guideline judged the anatomical 'impingement' explanation insufficient to cover the pathology [r3]" }
    ],
    muscles: [
      { name: "Rotator cuff", effect: "Pain inhibition and reduced force output, especially in external rotation and abduction; endurance often reduced" },
      { name: "Scapular stabilisers (serratus anterior, lower and middle trapezius)", effect: "Altered recruitment and scapular movement are commonly observed, but whether they cause or result from pain is uncertain" },
      { name: "Deltoid and upper trapezius", effect: "Compensatory overactivity and guarding during elevation, often with local tenderness" },
      { name: "Posterior capsule and pectoralis minor", effect: "Tightness may limit posterior glide and scapular position in some people (proposed contributor)" }
    ],
    cellular: [
      { phase: "Reactive tendon", timing: "Days to weeks after a load spike", description: "Tenocytes activate and produce proteoglycans, water binds to the matrix and the tendon thickens, with little collagen disruption. In the continuum model this stage is considered adaptable if load is modified." },
      { phase: "Tendon disrepair", timing: "Weeks to months of continued overload", description: "Cell numbers and matrix production rise, collagen becomes disorganised and new vessels and nerve fibres appear, which may contribute to pain." },
      { phase: "Degenerative tendon", timing: "Months to years", description: "Areas of cell death and disorganised matrix remain with limited capacity to revert, and the risk of partial or full-thickness tearing rises." },
      { phase: "Bursal response", timing: "Concurrent", description: "The bursa becomes inflamed and thickened, with increased fluid, as a response to irritation and tendon overload." },
      { phase: "Load adaptation", timing: "From about 6–12 weeks of progressive loading (typical, proposed)", description: "Progressive loading builds muscle strength and may improve tendon organisation. Pain often settles before structure changes, so symptoms are not a reliable guide to tendon structure." }
    ],
    systems: [
      { system: "Nervous system (pain processing)", effect: "Persistent pain can involve peripheral and central sensitisation, so pain may not match tissue load or imaging (proposed mechanism)" },
      { system: "Psychological", effect: "Fear of movement, catastrophising, low mood and poor sleep amplify pain and slow recovery; education and graded exposure address them" },
      { system: "Musculoskeletal chain", effect: "Thoracic stiffness, scapular control and lower-limb or trunk drive during overhead tasks change the load reaching the cuff" },
      { system: "Inflammatory and vascular", effect: "Bursal inflammation and tendon neovascularisation are proposed contributors, and the cause and source of symptoms remain uncertain [r1]" },
      { system: "Ageing and metabolic", effect: "Cuff degeneration is part of normal ageing, and many structural abnormalities are asymptomatic [r9]" }
    ]
  },

  grading: null,

  timeframes: {
    summary: "Natural history is variable. Exercise-based recovery is usually measured in months, and outcomes may be incomplete, with persisting or recurring symptoms [r1]. The phases below are typical clinical ranges, not an evidence-based timeline.",
    healing: [
      { phase: "Irritable phase: settle pain and modify load", startDay: 0, endDay: 28, description: "Pain, night pain and sensitivity to overhead tasks dominate. Reduce provocative load without complete rest." },
      { phase: "Capacity building", startDay: 14, endDay: 112, description: "Progressive strengthening of cuff and scapular muscles with graded return to daily and work tasks." },
      { phase: "Heavy loading and overhead control", startDay: 56, endDay: 168, description: "Heavier resistance, overhead strength and endurance, and work- or sport-specific tasks." },
      { phase: "Return to full load and maintenance", startDay: 112, endDay: 365, description: "Return to full work or sport with an ongoing strength maintenance routine to reduce recurrence." }
    ],
    milestones: [
      { label: "Sleeping without regular waking from pain", day: 28, note: "Typical; varies widely" },
      { label: "Full pain-tolerable elevation", day: 56 },
      { label: "Heavy strengthening phase begins", day: 56 },
      { label: "Return to overhead work or sport", day: 120, note: "Criteria-based, commonly about 3–6 months" }
    ],
    returnToSport: "Criteria-based rather than time-based; commonly about 3–6 months of progressive loading for overhead athletes (a clinical convention), and earlier for people with low overhead demands."
  },

  clinicalPresentation: {
    symptoms: [
      "Gradual onset of aching around the lateral or anterolateral upper arm, sometimes spreading to the deltoid insertion",
      "Pain with reaching overhead, behind the back and across the body, and with lifting away from the body",
      "Night pain, especially when lying on the affected side",
      "Weakness that is mainly pain-limited rather than a true loss of strength",
      "Catching or clicking with elevation, without true locking",
      "Reduced participation in work, sport and sleep"
    ],
    signs: [
      "Painful arc during active elevation, classically about 60–120°",
      "Pain on resisted abduction and external rotation",
      "Full or near-full passive range of motion (a key difference from frozen shoulder)",
      "Tenderness over the greater tuberosity, supraspinatus footprint or anterolateral acromion",
      "Scapular dyskinesis or altered scapulothoracic rhythm on elevation",
      "Positive Hawkins–Kennedy and Neer tests (low specificity)"
    ]
  },

  assessment: {
    subjective: [
      "Onset: gradual or after a load spike, and any trauma (a traumatic tear needs a different pathway)",
      "Pain location, 24-hour behaviour, night pain, aggravating movements and irritability",
      "Work, sport and training load, recent change in volume or technique",
      "Neck symptoms, arm paraesthesia and other joints",
      "Red-flag screen: chest symptoms, unexplained weight loss, fever, past malignancy, and recent trauma",
      "Sleep, mood, stress, beliefs about the shoulder, expectations and goals (psychosocial factors)",
      "Previous treatment, injections and imaging, and what has helped"
    ],
    observation: [
      "Resting scapular position, thoracic posture and symmetry",
      "Muscle bulk: wasting of supraspinatus or infraspinatus fossae suggests a larger tear or suprascapular neuropathy",
      "Scapulohumeral rhythm and scapular dyskinesis during active elevation and lowering",
      "Willingness to use the arm during dressing and reaching"
    ],
    palpation: [
      "Greater tuberosity and supraspinatus footprint tenderness",
      "Anterior acromion edge, subacromial space and the long head of biceps in the bicipital groove",
      "AC joint and upper trapezius and levator scapulae tenderness (to help distinguish other pain sources)"
    ],
    rangeOfMotion: [
      "Active elevation in the scapular plane with note of the painful arc and any scapular hitching",
      "Passive elevation and external rotation: should be near-full; marked loss of passive external rotation points to frozen shoulder or glenohumeral osteoarthritis",
      "Hand-behind-back and horizontal adduction, compared with the other side"
    ],
    strength: [
      "Isometric abduction at 0–30°, external rotation and internal rotation at the side, noting pain versus true weakness",
      "External rotation lag sign, drop-arm sign and belly-press or lift-off to screen for larger tears and subscapularis involvement",
      "Hand-held dynamometry for external rotation, internal rotation and abduction as a baseline",
      "Scapular strength and endurance (serratus anterior and lower trapezius)"
    ],
    neuro: [
      "Cervical screen: active neck movements, Spurling test and upper limb neurodynamic tests if neck or arm symptoms are present",
      "Myotomes, dermatomes and reflexes of C5–T1 if radicular features are suspected",
      "Suprascapular neuropathy if there is posterior shoulder pain or isolated infraspinatus or supraspinatus wasting"
    ],
    functional: [
      "Overhead reach and hand-behind-head and hand-behind-back function",
      "Closed-chain loading (wall or floor push-up plus) and scapular control under load",
      "Task or sport simulation: lifting overhead, throwing, serving or swimming strokes as relevant",
      "Patient-specific activities (for example putting on a coat, hanging washing)"
    ],
    specialTests: [
      { name: "Painful arc test", purpose: "Subacromial pain during elevation", procedure: "Patient actively elevates the arm through abduction or scaption while the examiner watches for pain and scapular behaviour.", positive: "Pain through the middle range of elevation (classically about 60–120°) that eases above and below it.", sensitivity: "53%", specificity: "76%", refs: ["r11"] },
      { name: "Neer test", purpose: "Provocation of subacromial pain", procedure: "With the scapula stabilised, the examiner passively elevates the arm in the scapular plane with the arm internally rotated.", positive: "Pain reproduced in the shoulder at end-range elevation.", sensitivity: "72%", specificity: "60%", refs: ["r11"] },
      { name: "Hawkins–Kennedy test", purpose: "Provocation of subacromial pain", procedure: "With the shoulder and elbow at 90° of flexion, the examiner passively internally rotates the shoulder.", positive: "Reproduction of the patient's pain.", sensitivity: "79%", specificity: "59%", refs: ["r11"] },
      { name: "Resisted external rotation and abduction (isometric)", purpose: "Identify a loaded, painful cuff tendon", procedure: "Resist isometric external rotation with the arm at the side and abduction at about 30–90° in the scapular plane, comparing with the other side.", positive: "Pain on loading, with or without weakness.", refs: [] },
      { name: "External rotation lag sign and drop-arm sign", purpose: "Screen for a full-thickness supraspinatus or infraspinatus tear", procedure: "Passively position the arm in external rotation (lag sign) or abduction to 90° and ask the patient to hold it or lower it slowly (drop-arm).", positive: "The arm drifts out of position or drops suddenly, rather than pain alone.", refs: [] }
    ],
    clinicalRules: [
      { name: "Combination of clinical tests", description: "The Dutch guideline states that subacromial pain syndrome can only be diagnosed using a combination of clinical tests [r3]. A meta-analysis found that no single shoulder test can be recommended as pathognomonic, and that combinations of tests are only marginally more accurate [r11]." },
      { name: "Imaging timing", description: "The Dutch guideline considers diagnostic imaging useful after 6 weeks of symptoms, with ultrasound recommended to exclude a cuff rupture [r3]. A clinical practice guideline considers imaging necessary only in select circumstances [r4]." }
    ],
    outcomeMeasures: [
      { name: "Shoulder Pain and Disability Index (SPADI)", use: "Primary outcome over 12 months in the GRASP trial [r8]; pain and disability subscales" },
      { name: "Oxford Shoulder Score", use: "Primary outcome in the CSAW surgical trial [r5]" },
      { name: "QuickDASH", use: "Upper limb function including work and sport modules" },
      { name: "Numeric pain rating scale (rest, night, activity)", use: "Track pain behaviour and guide load monitoring" },
      { name: "Patient-Specific Functional Scale", use: "Individualised functional goals such as overhead work tasks" }
    ],
    imaging: [
      { modality: "Ultrasound", indication: "Persistent symptoms after about 6 weeks, or a suspected full-thickness tear [r3]", findings: "Tendon thickening or hypoechoic change, bursal thickening or fluid, partial or full-thickness tear; abnormalities are common in people without symptoms [r9]" },
      { modality: "MRI", indication: "Suspected larger tear, other pathology, or when surgery is being considered", findings: "Tendinopathy, partial and full-thickness tears, tear size and retraction, muscle atrophy and fatty infiltration, labral and bony pathology" },
      { modality: "Plain radiograph", indication: "Trauma, suspected calcific tendinopathy, glenohumeral or AC joint osteoarthritis, or an unresolved diagnosis", findings: "Calcific deposit, acromial morphology, osteoarthritis, fracture" }
    ]
  },

  differentials: [
    { name: "Frozen shoulder (adhesive capsulitis)", id: "frozen-shoulder", distinguishing: "Marked loss of passive range, especially external rotation, in a capsular pattern; pain with night pain and stiffness out of proportion to the painful arc." },
    { name: "Degenerative (atraumatic) rotator cuff tear", id: "degenerative-rotator-cuff-tear", distinguishing: "Weakness and lag signs beyond what pain explains; older age; may be a symptomatic tear within the RCRSP spectrum." },
    { name: "Traumatic rotator cuff tear", id: "traumatic-rotator-cuff-tear", distinguishing: "Sudden injury such as a fall or forceful pull with immediate weakness and inability to elevate." },
    { name: "Calcific tendinopathy", id: "calcific-tendinopathy", distinguishing: "Severe acute pain in a resorptive phase, often marked night pain, calcific deposit on radiograph or ultrasound." },
    { name: "Long head of biceps tendinopathy", id: "long-head-biceps-tendinopathy", distinguishing: "Anterior shoulder pain localised to the bicipital groove with resisted biceps or speed tests." },
    { name: "Internal impingement in the overhead athlete", id: "internal-impingement", distinguishing: "Posterior shoulder pain in the late-cocking position in a thrower, often with posterior capsule tightness." },
    { name: "Acromioclavicular joint pain", id: "ac-joint-injury", distinguishing: "Pain localised to the AC joint, worse with cross-body adduction and with palpation of the joint." },
    { name: "Cervical radiculopathy", id: "cervical-radiculopathy", distinguishing: "Neck-related pain that moves with neck posture, with dermatomal symptoms and a positive Spurling or neurodynamic test." },
    { name: "Glenohumeral osteoarthritis", distinguishing: "Stiffness with crepitus and loss of passive external rotation; radiograph shows joint space narrowing and osteophytes." }
  ],

  redFlags: [
    "Chest pain or pressure, breathlessness, sweating, nausea or pain spreading to the jaw or arm, especially with exertion: possible cardiac cause (left shoulder pain can be referred). Call emergency services and do not continue the assessment.",
    "Fever, a hot red swollen joint, or recent injection or surgery with severe pain: septic arthritis or infection. Arrange same-day medical review.",
    "Unexplained weight loss, night sweats, past cancer, or constant pain unaffected by movement or position: refer urgently to exclude malignancy, including apical lung tumour and bone metastasis.",
    "Pain that is not related to shoulder movement and varies with breathing, eating or the abdomen: consider referred visceral pain (gallbladder, diaphragm, pulmonary embolus or pneumothorax) and refer for medical assessment.",
    "Sudden weakness or inability to lift the arm after a fall or forceful pull: possible full-thickness cuff tear or fracture, so arrange early imaging and an orthopaedic opinion.",
    "Progressive weakness, wasting, sensory loss or signs of myelopathy: cervical radiculopathy, brachial neuritis or suprascapular neuropathy. Refer urgently for neurological assessment."
  ],

  management: {
    principles: "Management is non-operative first. Guidelines recommend an active, task-oriented program of exercise and education, a return-to-work plan developed early for people who work, and imaging only in select circumstances [r4,r3]. Use shared decision-making and explain that cuff changes are common and that pain usually improves with load management and progressive strengthening. A Cochrane review found low-quality evidence that manual therapy plus exercise performs similarly to glucocorticoid injection and to decompression [r12], injection added no long-term benefit in GRASP [r8], and decompression offers no clinically important benefit over placebo surgery [r5,r6], so the choice should reflect the person's goals, work and preferences. Passive modalities have little support [r7].",
    medical: [
      {
        name: "Simple analgesia and short courses of NSAIDs",
        description: "Paracetamol (acetaminophen) and NSAIDs may reduce pain in the short term and help sleep and early participation in exercise. The Dutch guideline advises analgesia for acute pain if necessary [r3,r4].",
        evidence: "limited", recommendation: "consider", refs: ["r3", "r4"]
      },
      {
        name: "Subacromial corticosteroid injection",
        description: "A meta-analysis of 11 placebo-controlled trials found that corticosteroid injection did not reduce pain more than placebo at 3 months, with small transient relief at 4–8 weeks, and multiple injections were no better than one [r13]. In the GRASP trial injection gave no long-term benefit over no injection [r8]. The Dutch guideline lists injection for persistent or recurrent symptoms [r3]. Reserve it for short-term pain relief that enables exercise, and discuss the limited long-term benefit.",
        evidence: "conflicting", recommendation: "consider", refs: ["r13", "r8", "r3"]
      },
      {
        name: "Arthroscopic subacromial decompression",
        description: "Not recommended for cuff tendinopathy [r4]. In CSAW, decompression showed no benefit over arthroscopy only, and both surgical groups had only a small, not clinically important, benefit over no treatment [r5]. In a Finnish placebo-controlled trial it gave no benefit over diagnostic arthroscopy at 24 months [r6].",
        evidence: "strong", recommendation: "not-recommended", refs: ["r4", "r5", "r6"]
      },
      {
        name: "Surgical repair for a symptomatic full-thickness tear (selected patients)",
        description: "Considered for selected patients with a full-thickness tear, after specialist assessment [r4]. Very low quality evidence suggests exercise alone gives less pain improvement than repair, but no difference in function, for rotator cuff tear [r12].",
        evidence: "limited", recommendation: "consider", refs: ["r4", "r12"]
      },
      {
        name: "Occupational interventions and a return-to-work plan",
        description: "The Dutch guideline considers occupational interventions useful when complaints last more than 6 weeks [r3], and the clinical practice guideline recommends an early return-to-work plan developed with the worker and other stakeholders [r4].",
        evidence: "expert-opinion", recommendation: "recommended", refs: ["r3", "r4"]
      }
    ],
    physio: [
      {
        name: "Progressive exercise therapy",
        description: "An umbrella review of 16 systematic reviews made a strong recommendation for exercise therapy as first-line treatment to improve pain, mobility and function in subacromial shoulder pain [r7]. The clinical practice guideline recommends an active, task-oriented rehabilitation program [r4]. Honest caveat: in the GRASP trial (708 patients) progressive exercise was not superior to one session of best-practice advice over 12 months [r8], and exercise type, dose and duration remain unclear [r7].",
        evidence: "moderate", recommendation: "recommended", refs: ["r7", "r4", "r8"]
      },
      {
        name: "Education, reassurance and activity advice",
        description: "Explain that cuff changes are common, that pain does not equal damage, and how to modify and progress provocative tasks. Best-practice advice from a physiotherapist produced outcomes similar to a progressive exercise program in GRASP [r8], and the guideline pairs exercise with education [r4].",
        evidence: "moderate", recommendation: "recommended", refs: ["r8", "r4"]
      },
      {
        name: "Motor control or scapular-focused exercise",
        description: "A meta-analysis across upper- and lower-limb musculoskeletal disorders found motor control exercises produced slightly greater short-term pain and disability reductions than strengthening exercises. When osteoarthritis trials were excluded (leaving rotator cuff related shoulder pain, shoulder instability, hip-related groin pain and patellofemoral pain pooled together), the differences might be clinically important, and new trials may change this [r14]. Evidence specific to RCRSP is limited, so use as one component alongside progressive strengthening.",
        evidence: "limited", recommendation: "consider", refs: ["r14"]
      },
      {
        name: "Manual therapy as an adjunct",
        description: "An umbrella review made a strong recommendation to include manual therapy as additional therapy [r7], but a Cochrane review found manual therapy alone had little or no difference in patient-important outcomes compared with placebo or no treatment, based mostly on very low quality evidence [r12]. The Dutch guideline does not recommend strict immobilisation or mobilisation techniques [r3]. Use only as an adjunct to exercise for short-term pain relief.",
        evidence: "conflicting", recommendation: "consider", refs: ["r7", "r12", "r3"]
      },
      {
        name: "Therapeutic ultrasound, laser, shockwave and pulsed electromagnetic therapy",
        description: "An umbrella review found moderate evidence of no effect for laser therapy, extracorporeal shockwave therapy, pulsed electromagnetic energy and therapeutic ultrasound in subacromial shoulder pain [r7].",
        evidence: "moderate", recommendation: "not-recommended", refs: ["r7"]
      },
      {
        name: "Prolonged rest or strict immobilisation",
        description: "The Dutch guideline does not recommend strict immobilisation [r3]. Keep the arm moving within pain tolerance and modify, rather than stop, provocative tasks.",
        evidence: "limited", recommendation: "not-recommended", refs: ["r3"]
      }
    ],
    education: [
      "Rotator cuff changes on scans are very common, including in people with no pain, so a scan finding does not mean your shoulder is 'damaged' or 'worn out'.",
      "Pain usually reflects an irritable, overloaded shoulder, not a pinched tendon. Strengthening and gradual loading make the shoulder more tolerant, and they are safe even if they cause some discomfort.",
      "Keep using the arm. Adjust, rather than stop, the tasks that hurt and build back gradually.",
      "Recovery usually takes months, and good progress is not always a straight line. Flare-ups are common and do not mean you have re-injured it.",
      "Surgery to 'make more room' has not been shown to work better than placebo surgery, so it is usually not the first choice.",
      "Sleep position, stress and general fitness all affect shoulder pain, and improving them helps."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and driven by irritability and load tolerance, not by the calendar. Dosages below are common clinical conventions rather than trial-derived prescriptions, because the optimal exercise type, dose and duration remain unclear [r7]. A pain-monitoring approach is commonly used: pain up to about 4/10 during exercise is acceptable if it settles within 24 hours and does not escalate across sessions. Exercise is always paired with education [r4], and in GRASP up to six physiotherapy sessions of progressive exercise were used [r8].",
    stages: [
      {
        name: "Settle and keep moving",
        timeframe: "Weeks 0–3 (typical)",
        goals: ["Reduce pain to a level that allows sleep and daily tasks", "Maintain comfortable active movement", "Explain the problem and modify, not stop, provocative tasks", "Begin low-load cuff and scapular activation"],
        precautions: ["Avoid prolonged immobilisation or complete rest [r3]", "Avoid sustained end-range overhead loading and provocative sleeping postures", "Refer if red flags, new neurological signs or sudden weakness appear"],
        exercises: [
          { name: "Isometric external rotation (arm at side, towel roll)", dosage: "5 × 30–45 s holds at about 30–40% effort, 1–2 times daily (clinical convention; evidence for isometrics in shoulder pain is limited)", cues: "Press the back of the hand gently into the wall, shoulders relaxed", figure: { pose: "ex-shoulder-er-band", view: "lateral", props: ["wall"] } },
          { name: "Pendulum or table-slide elevation", dosage: "2 × 1 min pendulum or 2 × 10 supported slides, 2–3 times daily", cues: "Let the arm hang loose and swing from the trunk", figure: { pose: "ex-pendulum", view: "lateral" } },
          { name: "Thoracic extension over a foam roller", dosage: "2 × 10 with 5 s holds, daily", cues: "Keep the ribs down and extend through the upper back", figure: { pose: "ex-thoracic-extension", view: "lateral", props: ["foam-roller"] } },
          { name: "Low-range wall slide", dosage: "2 × 8–10, 1–2 times daily", cues: "Slide the forearms up the wall within comfort, keeping the shoulder blades moving", figure: { pose: "ex-wall-slide", view: "lateral", props: ["wall"] } }
        ],
        progressionCriteria: ["Night pain mild (≤ 3/10) and sleep no longer regularly disturbed", "Active elevation tolerated to about shoulder height with pain ≤ 4/10", "Isometric holds do not increase pain beyond 24 hours"]
      },
      {
        name: "Build capacity",
        timeframe: "Weeks 3–8 (typical)",
        goals: ["Restore cuff and scapular muscle strength and endurance", "Regain full pain-tolerable active elevation", "Resume most daily and work tasks"],
        precautions: ["Pain up to about 4/10 during exercise is acceptable if it settles by the next day (clinical convention)", "Avoid fast, heavy overhead loading until strength is restored"],
        exercises: [
          { name: "Side-lying external rotation", dosage: "3 × 10–15 with a light dumbbell (about 0.5–2 kg), 3–4 times per week", cues: "Elbow tucked to the ribs, slow 3 s lowering", figure: { pose: "ex-shoulder-er-side-lying", view: "lateral", props: ["dumbbell", "mat"] } },
          { name: "Standing band external rotation", dosage: "3 × 10–15 with a light to moderate band, 3 times per week", cues: "Elbow at the side, rotate without shrugging", figure: { pose: "ex-shoulder-er-band", view: "lateral", props: ["resistance-band"] } },
          { name: "Scaption raise to 90°", dosage: "3 × 10 with a light dumbbell, 3 times per week", cues: "Thumb up, raise in the scapular plane, lead with the elbow", figure: { pose: "ex-scaption", view: "lateral", props: ["dumbbell"] } },
          { name: "Band or dumbbell row", dosage: "3 × 10–12, 3 times per week", cues: "Squeeze the shoulder blades back and down", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } },
          { name: "Incline or wall push-up plus", dosage: "3 × 8–12, 3 times per week", cues: "Push through the hands and round the upper back slightly at the top", figure: { pose: "ex-press-up", view: "lateral", props: ["wall"] } }
        ],
        progressionCriteria: ["Full active elevation within about 10–15° of the other side without a painful arc", "3 × 12 side-lying external rotation with controlled tempo and no pain flare", "Resisted abduction and external rotation pain ≤ 2/10", "Able to do most daily and light work tasks with minimal pain"]
      },
      {
        name: "Heavy strength and overhead control",
        timeframe: "Weeks 8–16 (typical)",
        goals: ["Restore strength to near the uninjured side or a functional target", "Build overhead strength and endurance", "Improve scapular control under load"],
        precautions: ["Increase load by about 5–10% per week as tolerated (clinical convention)", "Back off if pain escalates across consecutive sessions"],
        exercises: [
          { name: "Overhead press (dumbbell or landmine)", dosage: "4 × 6–8 at 7–8/10 effort, 2–3 times per week", cues: "Brace the trunk, press in the scapular plane, full lockout without arching", figure: { pose: "ex-overhead-press", view: "lateral", props: ["dumbbell"] } },
          { name: "Prone Y raise", dosage: "3 × 10–12 with light weight, 2–3 times per week", cues: "Thumbs up, lift with the lower trapezius, not the neck", figure: { pose: "ex-prone-y", view: "lateral", props: ["bench"] } },
          { name: "Heavy row", dosage: "4 × 6–8, 2–3 times per week", cues: "Pull the elbow to the hip with a still trunk", figure: { pose: "ex-row", view: "lateral", props: ["dumbbell"] } },
          { name: "Loaded shoulder flexion or scaption to 120–150°", dosage: "3 × 8–10, 2–3 times per week", cues: "Smooth, controlled range with no shrug", figure: { pose: "ex-shoulder-flexion", view: "lateral", props: ["dumbbell"] } },
          { name: "Push-up progression", dosage: "3 × 8–15 on the floor, 2–3 times per week", cues: "Keep a straight line and protract at the top", figure: { pose: "ex-press-up", view: "lateral", props: ["mat"] } }
        ],
        progressionCriteria: ["Hand-held dynamometry for external rotation and abduction ≥ 90% of the uninjured side or a functional goal met", "Full pain-free overhead reach and active elevation", "No increase in symptoms beyond 24 hours across two consecutive heavy sessions"]
      },
      {
        name: "Return to work or sport",
        timeframe: "Months 3–6 (typical)",
        goals: ["Return to full work or sport tasks", "Build overhead and rotational power", "Establish a long-term strength maintenance plan"],
        precautions: ["Return to overhead volume gradually, with no more than about a 10–20% weekly increase (clinical convention)", "Keep recovery days between heavy overhead sessions"],
        exercises: [
          { name: "Medicine-ball chest pass and overhead throw", dosage: "3 × 8–10 with a 1–2 kg ball, 2 times per week", cues: "Fast, controlled release; absorb the catch softly", figure: { pose: "throw-acceleration", view: "anterior" } },
          { name: "Task or sport-specific overhead drills", dosage: "Start at about 25–30% of normal volume, build over 4–6 weeks (clinical convention)", cues: "Quality of movement first, then volume, then intensity", figure: { pose: "serve-trophy", view: "anterior" } },
          { name: "Cuff endurance circuit", dosage: "3 × 20–30 light-band external rotation, row and scaption, 2–3 times per week", cues: "Stop at technique failure, not just pain" },
          { name: "Overhead carry", dosage: "3 × 20–30 m with a light to moderate kettlebell, 2 times per week", cues: "Stack the wrist, elbow and shoulder; keep ribs down", figure: { pose: "ex-overhead-press", view: "lateral", props: ["kettlebell"] } }
        ],
        progressionCriteria: ["Completes sport or task simulation at full volume with pain ≤ 2/10", "Strength and endurance at or above the uninjured side or the pre-injury level", "Confident and willing to perform overhead tasks without apprehension"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Pain ≤ 2/10 with work-, sport- or task-specific overhead activity and no night pain",
      "Full or near-full active range of motion, equal to the uninjured side",
      "External rotation, internal rotation and abduction strength about 90% or more of the uninjured side, or at the person's goal level",
      "Good scapular control during loaded elevation, with no painful arc",
      "Tolerates the required volume of work or sport tasks across consecutive days without symptom flare",
      "Confident in overhead use, assessed with a patient-reported measure such as the SPADI or a patient-specific goal"
    ],
    tests: [
      "Hand-held dynamometry for external rotation, internal rotation and abduction compared with the uninjured side",
      "Closed Kinetic Chain Upper Extremity Stability Test",
      "Seated medicine-ball throw or similar unilateral upper-limb power test",
      "Overhead endurance and task simulation (sport or work specific)",
      "SPADI or Oxford Shoulder Score at baseline and at return"
    ]
  },

  prognosis: "Natural history is variable. Exercise therapy is associated with successful outcomes comparable to surgery, but outcomes may be incomplete and associated with persisting and recurring symptoms [r1]. In primary care, about half of people consulting for a shoulder condition attended only once, but 13.6% were still consulting in the third year of follow-up [r2]. In the CSAW placebo-controlled surgical trial, the group allocated to no treatment (specialist reassessment only) had a mean Oxford Shoulder Score of 29.4 at 6 months, compared with 32.7 after decompression and 34.2 after arthroscopy only [r5]. Recurrence rates and the proportion who progress to symptomatic tears are not established in the sources reviewed. Structural cuff abnormality increases with age even without symptoms [r9], so imaging at follow-up is not a reliable marker of recovery.",
  prevention: [
    "Increase overhead volume gradually (for example swim distance, throw counts, hours of overhead work) and avoid sudden load spikes (a reasonable principle; trial evidence for prevention is limited)",
    "Maintain cuff and scapular strength and endurance with a regular, brief maintenance routine",
    "Rotate tasks and take micro-breaks during sustained or repetitive overhead work",
    "Manage sleep, stress and general fitness, which influence shoulder pain",
    "Seek early advice for new shoulder pain rather than resting or ignoring it"
  ],
  clinicalPearls: [
    "Passive range should be near-full in RCRSP. If passive external rotation is clearly restricted, think frozen shoulder or glenohumeral osteoarthritis first.",
    "No single special test is diagnostic [r11]. Build your reasoning around the whole picture: history, irritability, loaded movements and what changes pain.",
    "Avoid 'pinched', 'worn out' or 'torn' language unless justified. Structural findings are common in people without pain [r9], and the words you use shape fear and behaviour.",
    "The GRASP trial found advice from a physiotherapist performed as well as a progressive exercise program [r8]. A clear explanation and plan for gradual loading is an active ingredient, not a preamble.",
    "Test for tolerable load, not for tissue damage: try modifying scapular position, trunk posture or the plane of elevation, and use what reduces pain as your exercise starting point.",
    "Over 50 with a traumatic onset and weakness that is more than pain-limited, think full-thickness tear before RCRSP and image early."
  ],
  related: ["degenerative-rotator-cuff-tear", "traumatic-rotator-cuff-tear", "calcific-tendinopathy", "frozen-shoulder", "long-head-biceps-tendinopathy", "internal-impingement"],

  references: [
    { id: "r1", citation: "Lewis J. Rotator cuff related shoulder pain: assessment, management and uncertainties. Man Ther. 2016;23:57-68.", pmid: "27083390", doi: "10.1016/j.math.2016.03.009", type: "narrative-review", year: 2016 },
    { id: "r2", citation: "Linsell L, Dawson J, Zondervan K, et al. Prevalence and incidence of adults consulting for shoulder conditions in UK primary care; patterns of diagnosis and referral. Rheumatology (Oxford). 2006;45(2):215-21.", pmid: "16263781", doi: "10.1093/rheumatology/kei139", type: "cohort", year: 2006 },
    { id: "r3", citation: "Diercks R, Bron C, Dorrestijn O, et al. Guideline for diagnosis and treatment of subacromial pain syndrome: a multidisciplinary review by the Dutch Orthopaedic Association. Acta Orthop. 2014;85(3):314-22.", pmid: "24847788", doi: "10.3109/17453674.2014.920991", type: "clinical-practice-guideline", year: 2014 },
    { id: "r4", citation: "Lafrance S, Charron M, Roy JS, et al. Diagnosing, managing, and supporting return to work of adults with rotator cuff disorders: a clinical practice guideline. J Orthop Sports Phys Ther. 2022;52(10):647-64.", pmid: "35881707", doi: "10.2519/jospt.2022.11306", type: "clinical-practice-guideline", year: 2022 },
    { id: "r5", citation: "Beard DJ, Rees JL, Cook JA, et al. Arthroscopic subacromial decompression for subacromial shoulder pain (CSAW): a multicentre, pragmatic, parallel group, placebo-controlled, three-group, randomised surgical trial. Lancet. 2018;391(10118):329-38.", pmid: "29169668", doi: "10.1016/S0140-6736(17)32457-1", type: "rct", year: 2018 },
    { id: "r6", citation: "Paavola M, Malmivaara A, Taimela S, et al. Subacromial decompression versus diagnostic arthroscopy for shoulder impingement: randomised, placebo surgery controlled clinical trial. BMJ. 2018;362:k2860.", pmid: "30026230", doi: "10.1136/bmj.k2860", type: "rct", year: 2018 },
    { id: "r7", citation: "Pieters L, Lewis J, Kuppens K, et al. An update of systematic reviews examining the effectiveness of conservative physical therapy interventions for subacromial shoulder pain. J Orthop Sports Phys Ther. 2020;50(3):131-41.", pmid: "31726927", doi: "10.2519/jospt.2020.8498", type: "systematic-review", year: 2020 },
    { id: "r8", citation: "Hopewell S, Keene DJ, Marian IR, et al. Progressive exercise compared with best practice advice, with or without corticosteroid injection, for the treatment of patients with rotator cuff disorders (GRASP): a multicentre, pragmatic, 2 x 2 factorial, randomised controlled trial. Lancet. 2021;398(10298):416-28.", pmid: "34265255", doi: "10.1016/S0140-6736(21)00846-1", type: "rct", year: 2021 },
    { id: "r9", citation: "Teunis T, Lubberts B, Reilly BT, et al. A systematic review and pooled analysis of the prevalence of rotator cuff disease with increasing age. J Shoulder Elbow Surg. 2014;23(12):1913-21.", pmid: "25441568", doi: "10.1016/j.jse.2014.08.001", type: "systematic-review", year: 2014 },
    { id: "r10", citation: "Cook JL, Rio E, Purdam CR, et al. Revisiting the continuum model of tendon pathology: what is its merit in clinical practice and research? Br J Sports Med. 2016;50(19):1187-91.", pmid: "27127294", doi: "10.1136/bjsports-2015-095422", type: "narrative-review", year: 2016 },
    { id: "r11", citation: "Hegedus EJ, Goode AP, Cook CE, et al. Which physical examination tests provide clinicians with the most value when examining the shoulder? Update of a systematic review with meta-analysis of individual tests. Br J Sports Med. 2012;46(14):964-78.", pmid: "22773322", doi: "10.1136/bjsports-2012-091066", type: "meta-analysis", year: 2012 },
    { id: "r12", citation: "Page MJ, Green S, McBain B, et al. Manual therapy and exercise for rotator cuff disease. Cochrane Database Syst Rev. 2016;(6):CD012224.", pmid: "27283590", doi: "10.1002/14651858.CD012224", type: "systematic-review", year: 2016 },
    { id: "r13", citation: "Mohamadi A, Chan JJ, Claessen FMAP, et al. Corticosteroid injections give small and transient pain relief in rotator cuff tendinosis: a meta-analysis. Clin Orthop Relat Res. 2017;475(1):232-43.", pmid: "27469590", doi: "10.1007/s11999-016-5002-1", type: "meta-analysis", year: 2017 },
    { id: "r14", citation: "Lafrance S, Ouellet P, Alaoui R, et al. Motor control exercises compared to strengthening exercises for upper- and lower-extremity musculoskeletal disorders: a systematic review with meta-analyses of randomized controlled trials. Phys Ther. 2021;101(7):pzab072.", pmid: "33609357", doi: "10.1093/ptj/pzab072", type: "meta-analysis", year: 2021 }
  ],

  animation: {
    title: "How rotator cuff related shoulder pain develops",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "anterior", environment: "gym",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "stand", root: { x: 0 } },
          { t: 1.6, pose: "overhead-reach", joints: { shoulderR: 90, elbowR: 20 }, root: { x: 0 } },
          { t: 3.0, pose: "overhead-reach", joints: { shoulderR: 120, elbowR: 10 }, root: { x: 0 } },
          { t: 4.4, pose: "overhead-reach", joints: { shoulderR: 150 }, root: { x: 0 } },
          { t: 5.6, pose: "overhead-reach", joints: { shoulderR: 100, elbowR: 25 }, root: { x: 0 } }
        ],
        props: [{ id: "weight", type: "dumbbell", attach: "handR" }],
        forces: [
          { t: [1.8, 5.2], at: "armR", dir: "down", label: "Repeated load on the cuff" }
        ],
        highlights: [{ t: [1.8, 6], at: "shoulderR" }],
        captions: [
          { t: 0, text: "Someone who has been off training returns to repeated overhead lifting." },
          { t: 1.6, text: "The arm rises through the painful arc, about 60–120°, under load." },
          { t: 3.0, text: "Demand on the cuff tendons now exceeds what they can currently tolerate." },
          { t: 4.4, text: "Over days and weeks, the tendon and bursa become irritated and painful." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "shoulderR",
        captions: [{ t: 0, text: "Zooming into the right shoulder, viewed from the front." }]
      },
      {
        type: "closeup", label: "In the shoulder", duration: 10, scene: "shoulder-anterior",
        actions: [
          { t: 0, do: "highlight", target: "supraspinatusTendon" },
          { t: 0.3, do: "label", target: "supraspinatusTendon", text: "Supraspinatus tendon" },
          { t: 0.9, do: "label", target: "subacromialBursa", text: "Subacromial bursa" },
          { t: 1.6, do: "arrow", at: "greaterTuberosity", dir: "superior", label: "Repeated loaded elevation", size: "m" },
          { t: 1.8, do: "stretch", target: "supraspinatusTendon", amount: 0.25, dur: 1.2 },
          { t: 3.2, do: "thicken", target: "supraspinatusTendon", amount: 0.5 },
          { t: 3.4, do: "inflame", target: "supraspinatusTendon", amount: 0.4 },
          { t: 4.2, do: "swell", target: "subacromialBursa", amount: 0.7 },
          { t: 4.4, do: "inflame", target: "subacromialBursa", amount: 0.6 },
          { t: 4.8, do: "label", target: "subacromialBursa", text: "Irritated, swollen bursa" },
          { t: 5.6, do: "pain", at: "criticalZone" },
          { t: 6.4, do: "degenerate", target: "supraspinatusTendon" },
          { t: 6.8, do: "label", target: "supraspinatusTendon", text: "Overload without recovery: disrepair" },
          { t: 8.0, do: "camera", at: "criticalZone", zoom: 1.6, dur: 1 },
          { t: 9.4, do: "camera", zoom: 1, dur: 0.6 }
        ],
        captions: [
          { t: 0, text: "The supraspinatus tendon passes under the acromion, cushioned by the subacromial bursa." },
          { t: 1.6, text: "Repeated loaded elevation overloads the tendon." },
          { t: 3.2, text: "The tendon thickens and becomes reactive, with a swollen, irritated bursa." },
          { t: 5.6, text: "The shoulder becomes painful in the arc, even without a visible tear." },
          { t: 6.6, text: "If overload continues, the tendon can progress toward disrepair." },
          { t: 8.2, text: "A purely mechanical 'pinch' under the acromion is contested. Load versus capacity is the better model." }
        ]
      },
      {
        type: "micro", label: "Tendon continuum", duration: 9, tissue: "tendon-continuum",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.6, stage: "reactive" }, { t: 3.4, stage: "disrepair" },
          { t: 5.2, stage: "degenerative" }, { t: 7.0, stage: "load-adaptation" }
        ],
        timeLabels: [{ t: 1.6, text: "Days to weeks" }, { t: 3.4, text: "Weeks to months" }, { t: 5.2, text: "Months to years" }, { t: 7.0, text: "Weeks of progressive loading" }],
        captions: [
          { t: 0, text: "Healthy cuff tendon: tightly packed, aligned type I collagen with a few resident tenocytes." },
          { t: 1.6, text: "Reactive: after a load spike, tenocytes activate and the matrix swells. This can adapt." },
          { t: 3.4, text: "Disrepair: collagen becomes disorganised and new vessels appear." },
          { t: 5.2, text: "Degenerative: areas of cell death and disorganised matrix remain." },
          { t: 7.0, text: "Progressive loading builds capacity, and pain usually settles as the shoulder adapts." }
        ]
      },
      {
        type: "micro", label: "Bursal response", duration: 7, tissue: "bursa",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.2, stage: "friction" }, { t: 2.6, stage: "inflammation" },
          { t: 4.0, stage: "effusion" }, { t: 5.4, stage: "resolution" }
        ],
        captions: [
          { t: 0, text: "A healthy bursa is a thin, lubricated sac that lets the cuff glide beneath the deltoid." },
          { t: 1.2, text: "With cuff overload and repeated loaded elevation, the bursal lining is irritated." },
          { t: 2.6, text: "The lining becomes inflamed and thickened and may contribute to pain." },
          { t: 4.0, text: "Fluid collects in the bursa, which can make elevation more uncomfortable." },
          { t: 5.4, text: "As load is managed and capacity rebuilt, the bursa settles." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "UL2" }
};
