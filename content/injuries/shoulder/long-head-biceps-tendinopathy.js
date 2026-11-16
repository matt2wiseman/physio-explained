export default {
  id: "long-head-biceps-tendinopathy",
  name: "Long head of biceps tendinopathy",
  shortName: "Biceps tendinopathy (LHB)",
  aka: ["biceps tendinitis", "bicipital tendinitis", "biceps tendinosis", "LHB tendinopathy", "long head of biceps tenosynovitis", "bicipital groove pain", "proximal biceps tendinopathy"],
  region: "shoulder",
  tissues: ["tendon"],
  onset: "gradual",
  mechanismType: ["overuse", "degenerative"],
  populations: ["adults over 40 years", "people with rotator cuff tendinopathy or tears", "overhead athletes", "manual workers who lift and work overhead"],
  sports: ["tennis", "swimming", "baseball", "cricket", "weightlifting", "rock climbing"],
  urgency: "routine",
  summary: "Anterior shoulder pain attributed to the long head of biceps tendon, in the bicipital groove or inside the joint. It usually coexists with rotator cuff changes and is rarely an isolated pain source.",
  keyFacts: [
    { label: "Typical recovery", value: "Variable and poorly documented; a loading program is usually trialled for about 3 months before surgery is considered (clinical convention)" },
    { label: "Return to sport", value: "Criteria-based; commonly 3–6 months for overhead or heavy-lifting sport (clinical convention)" },
    { label: "Key test", value: "No clinical test is diagnostic: Yergason's test had LR+ 2.56 and LR− 0.70 in a systematic review of 30 studies; Speed's test sensitivity was 32% to 63% across studies" },
    { label: "Imaging", value: "Ultrasound is highly specific for complete rupture and dislocation of the tendon; MRI sensitivity for tendinosis or partial tear is 67.8% and specificity 75.9%" },
    { label: "Peak age", value: "Rises with age (about 4% per year in an MRI series); everyone aged 85 or over in that series had cuff and biceps tendinopathy" },
    { label: "Co-pathology", value: "In one ultrasound study 55.3% of people with biceps tendinitis also had a rotator cuff injury" }
  ],
  overview: "Long head of biceps (LHB) tendinopathy is pain at the front of the shoulder that is attributed to the biceps tendon, either in the bicipital groove or in its intra-articular portion. It is usually not a clean, isolated diagnosis. In 406 shoulder MRIs ordered for pain, biceps tendinopathy became more common with age (odds ratio 1.04 per year), any cuff pathology was strongly associated with biceps pathology (odds ratio 6.9), and only 5% of supraspinatus tendons were normal when the biceps tendon was affected [r1]. In an ultrasound study of 143 painful shoulders, biceps tendinitis was found in 39.1% and 55.3% of those also had a rotator cuff injury [r2]. In a surgical series, the only two cases of bicipital tendonitis both had significant cuff pathology [r3].\n\nThe clinical examination cannot reliably separate the biceps from its neighbours. Speed's and Yergason's tests are moderately specific but insensitive. In 50 surgical patients Yergason's test had sensitivity 43% and specificity 79%, and Speed's test 32% and 75% [r3]. Against ultrasound, Yergason's test had sensitivity 32% and specificity 78%, and Speed's test 63% and 58% [r2]. A systematic review of 30 studies found that only Yergason's test had any value for confirming proximal biceps pathology (LR+ 2.56, LR− 0.70) and concluded that there was insufficient evidence to recommend any individual special test [r4]. Imaging helps with complete tears but not with tendinopathy: MRI sensitivity and specificity for tendinosis or partial tears were 67.8% and 75.9% [r5].\n\nThe treatment evidence is thin. A scoping review of physiotherapy for biceps tendinopathy found only 14 relevant articles, largely testing therapeutic modalities, and described a dearth of evidence for conservative management [r6]. No randomised trial of biceps-specific injection was found in the sources reviewed here. For people who proceed to surgery, randomised trials show that tenotomy and tenodesis give similar pain and function, with a Popeye deformity more common after tenotomy (odds ratio 0.29 favouring tenodesis) [r7,r8]. Those trials were mostly in older patients having arthroscopic shoulder surgery, often with a concomitant cuff repair, so they say little about isolated biceps pain in a younger or physically active person. The practical approach is to assess the whole shoulder, load it progressively, and be honest with the patient that the biceps tendon is often one contributor among several.",

  epidemiology: {
    text: "No population incidence figure for LHB tendinopathy was found in the sources reviewed here. Imaging series show that biceps and cuff tendon changes accumulate together with age. In 406 MRIs obtained for shoulder pain (mean age 55 years, 49% men), biceps tendinopathy was more common with each year of age (odds ratio 1.04, 95% CI 1.02–1.06), any cuff pathology was associated with any biceps pathology (odds ratio 6.9, 95% CI 2.4–20), and everyone aged 85 or over had both [r1]. Among people with any supraspinatus tendinopathy, 49% of biceps tendons were still normal, while among people with any biceps tendinopathy only 5% (9 of 175) of supraspinatus tendons were normal [r1]. In a study of 125 patients with shoulder pain, ultrasound found biceps tendinitis in 39.1%, and 55.3% of those had a coexisting cuff injury [r2]. Biceps tendinopathy is also common in people with rotator cuff tears, and the biceps tendon can be a significant source of pain in them [r9]. Because these findings come from people attending for shoulder pain, they do not give a general-population rate, and they do not show that the biceps is the source of the pain.",
    riskFactors: {
      intrinsic: [
        "Advancing age: prevalence rose by about 4% per year in an MRI series of people with shoulder pain [r1]",
        "Concomitant rotator cuff tendinopathy or tear [r1,r2]",
        "Supraspinatus or subscapularis pathology that alters the load through the rotator interval (proposed)",
        "Reduced scapular and cuff control that increases demand on the tendon (proposed; not tested in the sources reviewed)"
      ],
      extrinsic: [
        "Repetitive overhead activity and throwing, serving or swimming volume (clinical observation)",
        "Heavy lifting and pulling with the arm in front of the body, including repeated heavy biceps curls (clinical observation)",
        "Sudden increases in training load or work demand (clinical observation)",
        "Manual work with sustained overhead or forward-reaching postures (clinical observation)"
      ]
    }
  },

  mechanism: {
    summary: "LHB tendinopathy usually develops gradually from repeated loading rather than from one injury. Each time the arm elevates and rotates, the tendon slides through the bicipital groove and rotator interval, and it works eccentrically to decelerate the arm in throwing and lowering tasks (clinical reasoning). When load repeatedly exceeds the capacity of a tendon that is ageing or already stressed by a rotator cuff problem, tendon structure and pain sensitivity change [r1]. Because the tendon, the cuff and the rotator interval share the same space, it is often not possible to say which structure is the source of pain.",
    sequence: [
      "Repeated overhead, pulling or lifting tasks load the biceps tendon, which glides through the bicipital groove and rotator interval with every elevation and rotation.",
      "The tendon works eccentrically to decelerate the arm in the follow-through of throwing or serving, and in controlled lowering of a load.",
      "If load rises faster than the tendon can adapt, or the tendon is already ageing or stressed by a cuff problem, the tendon becomes reactive and swollen (conceptual model).",
      "Surrounding tissue in the groove and the sheath becomes irritated, and the tendon becomes tender with resisted elbow flexion, supination or shoulder flexion.",
      "With continued load the tendon can thicken and disorganise (tendinosis) and, in some people, partially tear or become unstable in the groove (proposed sequence).",
      "A coexisting cuff tear, instability or labral problem changes shoulder mechanics and keeps the biceps overloaded, so the pain persists [r1,r2]."
    ],
    variants: [
      { name: "Groove (extra-articular) tendinopathy and tenosynovitis", description: "Pain localised to the bicipital groove, worse with overhead reach and lifting. Palpation tenderness is a common finding, but the accuracy of palpation was not stated in the sources reviewed [r2]." },
      { name: "Intra-articular (proximal) tendinopathy", description: "Deeper anterior pain near the tendon's entry into the joint, difficult to separate clinically from cuff, labral and capsular pain [r4]." },
      { name: "Biceps tendinopathy with rotator cuff disease", description: "The commonest picture: biceps changes accompany cuff tendinopathy or tears [r1,r2,r9]." },
      { name: "Biceps instability or subluxation", description: "The tendon displaces from the groove, often with subscapularis or rotator interval damage. Ultrasound identified subluxation or dislocation with specificity of 81% and sensitivity of 38% in one prospective study [r10]." },
      { name: "Partial tear or fraying of the tendon", description: "Partial tears and tendinosis are the hardest to image: MRI sensitivity was 67.8% and specificity 75.9% [r5]." }
    ]
  },

  anatomy: {
    text: "The long head of biceps arises from the supraglenoid tubercle and the superior labrum, runs through the rotator interval beneath the coracohumeral ligament and superior glenohumeral ligament, and turns down into the bicipital groove between the lesser and greater tuberosities, where the transverse humeral ligament and the tendon's synovial sheath hold it in place. It is intra-articular but extra-synovial. The tendon joins the short head in the muscle belly of biceps brachii, which flexes the elbow and supinates the forearm. Its role at the shoulder is debated: it has been described as a stabiliser of the glenohumeral joint, a depressor of the humeral head and a vestigial structure [r9]. The supraspinatus and subscapularis tendons form the borders of the rotator interval, so disease in either changes the mechanics around the biceps.",
    structures: [
      { name: "Long head of biceps tendon", role: "Intra-articular and groove segment; transmits biceps force to the supraglenoid tubercle and superior labrum" },
      { name: "Bicipital groove, transverse humeral ligament and tendon sheath", role: "Hold the tendon in the groove and allow it to glide; the sheath is a common site of tenderness and fluid" },
      { name: "Rotator interval, coracohumeral and superior glenohumeral ligaments (pulley)", role: "Stabilise the tendon at its entry to the groove; disruption allows subluxation (clinical anatomy)" },
      { name: "Supraspinatus and subscapularis tendons", role: "Border the interval; cuff pathology is strongly associated with biceps pathology [r1]" },
      { name: "Superior labrum and supraglenoid tubercle", role: "Origin of the tendon; SLAP lesions can mimic or coexist with biceps pain" },
      { name: "Biceps brachii muscle belly", role: "Elbow flexion and forearm supination; loaded in lifting and pulling" }
    ]
  },

  pathophysiology: {
    tissueDamage: "The tendon changes in LHB tendinopathy are not well characterised in the sources reviewed here, so this section describes a conceptual model rather than a demonstrated sequence. The tendon is thought to move through reactive swelling, to disrepair with disorganised collagen, and in some people to degenerative tendinosis in which thickening, fraying and partial tearing occur. These changes are common with age and often accompany cuff tendinopathy [r1]. Imaging can show them, but MRI is weak at doing so: sensitivity was 67.8% and specificity 75.9% for tendinosis and partial tears, compared with specificity of 93.0% to 99.0% for complete tears [r5].\n\nIt follows that structure and symptoms do not always match. Because so many tendon changes in the biceps and cuff appear together with age and some are present without pain, a tendon abnormality on a scan is not proof that it is the source of the patient's pain [r1]. The tendon, the sheath, the rotator interval and the cuff are likely to contribute together (proposed).",
    structures: [
      { name: "Long head of biceps tendon", effect: "Tendinosis, thickening and fraying; partial tear or subluxation in some people [r5,r10]" },
      { name: "Tendon sheath and synovium", effect: "Tenosynovitis with fluid and tenderness in the groove [r2]" },
      { name: "Rotator cuff tendons", effect: "Concomitant tendinopathy or tear in a majority of people with biceps tendinopathy [r1,r2]" },
      { name: "Rotator interval and pulley", effect: "Strain or damage allows the tendon to subluxate (proposed)" },
      { name: "Superior labrum", effect: "May coexist with biceps pathology and can be confused with it on testing [r3]" }
    ],
    muscles: [
      { name: "Biceps brachii", effect: "Pain on resisted elbow flexion and supination, with protective guarding and reduced tolerance to loaded lifting (clinical observation)" },
      { name: "Rotator cuff", effect: "Often concomitantly affected; pain-related inhibition of resisted external rotation and abduction [r1]" },
      { name: "Deltoid and upper trapezius", effect: "Compensatory overactivity and shoulder hitching on elevation (clinical observation)" },
      { name: "Scapular stabilisers", effect: "Altered recruitment and scapular position that changes cuff and biceps load (proposed)" }
    ],
    cellular: [
      { phase: "Reactive tendon response", timing: "Days to weeks (conceptual model)", description: "Acute overload makes tenocytes swell and produce proteoglycans, so the tendon thickens and becomes painful and tender without major collagen disruption." },
      { phase: "Tendon disrepair", timing: "Weeks to months (conceptual model)", description: "Matrix breakdown, more cells and some new small vessels with early collagen disorganisation." },
      { phase: "Degenerative tendinosis", timing: "Months to years (conceptual model)", description: "Disorganised collagen, cell loss in areas, and in some tendons partial tears. This stage is more common with age and cuff disease [r1]." },
      { phase: "Load adaptation", timing: "Weeks to months of progressive loading (clinical convention)", description: "With progressive loading, tissue capacity and pain tolerance can improve even where structural abnormality persists. The time course for the biceps specifically was not found in the sources reviewed." }
    ],
    systems: [
      { system: "Nervous system", effect: "Nociceptive pain from the tendon and sheath, with referred anterior shoulder and upper arm pain; central sensitisation is possible in long-standing pain (proposed)" },
      { system: "Musculoskeletal chain", effect: "Cuff, scapular and thoracic spine control influence the load through the biceps; ageing changes appear in biceps and cuff together [r1]" },
      { system: "Ageing and tendon biology", effect: "The prevalence of biceps tendinopathy rises with age and is near-universal with cuff tendinopathy by the ninth decade in people imaged for shoulder pain [r1]" },
      { system: "Inflammatory and synovial", effect: "Sheath irritation and effusion in the groove; the tendon sheath communicates with the joint, so glenohumeral synovitis can also present as biceps pain (clinical anatomy)" },
      { system: "Psychological", effect: "Persistent pain, fear of loading and uncertainty about scan findings can reduce activity and delay recovery; reassurance that the shoulder is a robust, age-adapting structure may help [r1]" }
    ]
  },

  grading: null,

  timeframes: {
    summary: "No trial in the sources reviewed here described the natural history of LHB tendinopathy, so the phases below are clinical conventions that follow the tendon continuum model. Progress is judged by pain, irritability and load tolerance rather than by the calendar [r6].",
    healing: [
      { phase: "Irritable phase: settle and educate", startDay: 0, endDay: 21, description: "Reduce the aggravating load, keep the arm moving within comfort, and begin isometric cuff and scapular work. Duration is a clinical convention." },
      { phase: "Adaptation: restore load tolerance", startDay: 14, endDay: 84, description: "Progressive loading of cuff, scapular stabilisers and biceps, with a pain-monitoring model." },
      { phase: "Capacity and return to function", startDay: 70, endDay: 180, description: "Heavy strengthening, overhead capacity and sport- or work-specific loading." }
    ],
    milestones: [
      { label: "Night and resting pain settling", day: 21, note: "Typical clinical expectation, not trial-derived" },
      { label: "Pain-free daily activities", day: 42, note: "Variable" },
      { label: "Review point if no clear improvement with good loading", day: 84, note: "Clinical convention before considering imaging review or injection or surgical opinion" },
      { label: "Overhead and heavy lifting restored", day: 120 },
      { label: "Return to full sport or heavy work", day: 150, note: "Criteria-based" }
    ],
    returnToSport: "Criteria-based. Commonly 3–6 months to return to full overhead or heavy-lifting sport and work with a loading program (clinical convention). After biceps tenotomy or tenodesis the timeline depends on the surgeon's protocol and on any concomitant cuff repair, and the sources reviewed here did not give standard return-to-sport times."
  },

  clinicalPresentation: {
    symptoms: [
      "Aching anterior shoulder pain, often localised to the front of the shoulder over the bicipital groove",
      "Pain with overhead reaching, lifting, pulling and carrying with the arm in front of the body",
      "Pain that may radiate down the front of the upper arm toward the elbow",
      "Night pain and discomfort lying on the affected side",
      "Catching, clicking or snapping at the front of the shoulder if the tendon is unstable (uncommon)",
      "Often accompanied by lateral shoulder pain and weakness from rotator cuff involvement [r1,r2]"
    ],
    signs: [
      "Tenderness over the bicipital groove, usually with the arm in slight internal rotation",
      "Pain on resisted elbow flexion with the forearm supinated, or on resisted shoulder flexion",
      "Variable response to Speed's and Yergason's tests, which are neither sensitive nor reliably specific [r3,r2,r4]",
      "Painful arc, weakness or positive cuff tests if there is concomitant cuff disease [r1]",
      "Normal passive range of motion in most people; stiffness suggests frozen shoulder",
      "Normal appearance of the biceps muscle belly; a Popeye deformity indicates rupture rather than tendinopathy"
    ]
  },

  assessment: {
    subjective: [
      "Location of pain: anterior shoulder and groove versus lateral, posterior or neck pain",
      "Aggravating activities: overhead work, throwing or serving, heavy lifting, curls, pulling and carrying",
      "Onset and load history: gradual versus sudden, recent increases in training or work load",
      "A single traumatic event with a pop and a new deformity of the arm suggests rupture rather than tendinopathy",
      "Previous cuff, labral or shoulder problems, injections, surgery and the effect of previous treatment",
      "Mechanical symptoms (catching or snapping), night pain, neck pain, neurological symptoms and general health"
    ],
    observation: [
      "Biceps muscle shape compared with the other side: a Popeye deformity indicates rupture",
      "Scapular position, resting posture and movement during elevation and lowering",
      "Swelling, bruising or wasting around the shoulder",
      "Arm posture and willingness to elevate"
    ],
    palpation: [
      "Bicipital groove: palpate with the arm in about 10° internal rotation, rolling the finger across the tendon; compare with the other side",
      "Anterior joint line, coracoid process and rotator interval region",
      "Greater tuberosity and supraspinatus footprint",
      "Biceps muscle belly and the pectoralis major insertion",
      "Cervical spine, AC joint and the posterior shoulder"
    ],
    rangeOfMotion: [
      "Active and passive elevation, external rotation and hand-behind-back, compared with the other side",
      "Painful arc through abduction or the scapular plane",
      "Passive range should be near normal; marked loss suggests frozen shoulder",
      "Cervical spine range to screen neck contribution"
    ],
    strength: [
      "Resisted elbow flexion with the forearm supinated and resisted supination",
      "Resisted shoulder flexion with the elbow extended and supinated",
      "Resisted external rotation, abduction and internal rotation for the cuff [r1]",
      "Compare with the other side and note pain versus true weakness"
    ],
    neuro: [
      "Upper limb neurological screen: myotomes, dermatomes and reflexes",
      "Cervical screen: neck movement, Spurling test and upper limb neurodynamic tests",
      "Suprascapular and axillary nerve function if weakness is out of proportion to pain"
    ],
    functional: [
      "Overhead reach, lifting and carrying tolerance",
      "Throwing, serving or swimming tolerance in athletes",
      "Pull-up, row or curl tolerance in gym users",
      "Sleep position and work tasks"
    ],
    specialTests: [
      { name: "Speed's test", purpose: "Biceps tendon pathology; also used for SLAP lesions", procedure: "The patient elevates the arm to about 90° with the elbow extended and the forearm supinated while the examiner resists shoulder flexion.", positive: "Pain in the bicipital groove or anterior shoulder. Positive tests do not localise the pain to the biceps.", sensitivity: "32% (arthroscopy, n = 50) [r3]; 63% (ultrasound reference, n = 125) [r2]", specificity: "75% [r3]; 58% [r2]; 0.81 in a surgical cohort [r11]", lrPositive: "1.28 [r3]", lrNegative: "0.91 [r3]", refs: ["r3", "r2", "r11"] },
      { name: "Yergason's test", purpose: "Biceps tendon pathology in the groove; also used for SLAP lesions", procedure: "With the elbow flexed to 90° and the forearm pronated, the examiner resists active forearm supination and external rotation.", positive: "Pain in the bicipital groove. The tendon may subluxate in unstable cases.", sensitivity: "43% (arthroscopy, n = 50) [r3]; 32% (ultrasound reference) [r2]", specificity: "79% [r3]; 78% [r2]", lrPositive: "2.05 [r3]; 2.56 pooled in a systematic review [r4]", lrNegative: "0.72 [r3]; 0.70 pooled [r4]", refs: ["r3", "r2", "r4"] },
      { name: "Upper cut test", purpose: "Biceps tendon injury (described in a single diagnostic cohort)", procedure: "The patient holds the arm at the side with the elbow flexed and the fist supinated, then makes an upward punching motion toward the chin while the examiner resists.", positive: "Pain or a painful pop in the anterior shoulder over the bicipital groove.", sensitivity: "0.73 [r11]", lrPositive: "3.38 [r11]", refs: ["r11"] },
      { name: "Bicipital groove palpation", purpose: "To localise tenderness to the groove", procedure: "Palpate the groove with the arm in about 10° internal rotation and compare with the other side; the tendon moves under the finger with arm rotation.", positive: "Reproduction of the patient's anterior shoulder pain. Accuracy figures for palpation alone were not found in the sources reviewed.", refs: [] }
    ],
    clinicalRules: [
      { name: "No single test is diagnostic", description: "The use of any single shoulder test to make a pathognomonic diagnosis cannot be unequivocally recommended, and combinations of tests are only marginally better [r12]. A Cochrane review of 33 studies found insufficient evidence on which to select physical tests for lesions of bursa, tendon or labrum [r13]. A systematic review of 30 studies concluded there was insufficient evidence to recommend individual special tests for biceps pathology [r4], and a 2026 prospective study of 71 surgical patients also found overall performance of orthopaedic special tests was low [r10]." },
      { name: "Why test accuracy varies", description: "The studies used different reference standards (arthroscopy, ultrasound, surgery) and different target conditions (biceps pathology with SLAP lesions, tendinitis, or tears), and the surgical series are highly selected [r3,r2,r11]. Speed's test sensitivity ranged from 32% to 63% between studies." },
      { name: "Combining tests", description: "In one cohort, the upper cut and Speed's tests together detected biceps lesions better than other tests [r11]; the likely clinical value is in building a pattern with history, groove tenderness, cuff testing and imaging rather than relying on one test." }
    ],
    outcomeMeasures: [
      { name: "Shoulder Pain and Disability Index (SPADI)", use: "Patient-reported pain and disability" },
      { name: "Oxford Shoulder Score or QuickDASH", use: "Patient-reported function and the effect on work or sport" },
      { name: "Numeric pain rating scale (0–10)", use: "Pain at rest, at night and with the key aggravating task" },
      { name: "Hand-held dynamometry or repetition maximum for elbow flexion and shoulder rotation", use: "Strength and limb symmetry" },
      { name: "Patient-specific functional scale", use: "Individual goals such as overhead lifting, swimming or serving" }
    ],
    imaging: [
      { modality: "Ultrasound (dynamic)", indication: "Persistent anterior shoulder pain; suspected rupture, subluxation or effusion in the groove", findings: "Highly specific for complete rupture (LR+ 35.50, LR− 0.30) and dislocation (LR+ 38.00, LR− 0.24) [r4]; one prospective study reported full-thickness tear sensitivity 63% and specificity 86%, and subluxation or dislocation sensitivity 38% and specificity 81% [r10]" },
      { modality: "MRI or MR arthrography", indication: "Planning surgery, suspected labral or cuff disease, or when ultrasound is inconclusive", findings: "Specificity 93.0%–99.0% for complete tears; for tendinosis or partial tears sensitivity 67.8% and specificity 75.9% (LR+ 2.64, LR− 0.44), so findings must be matched with the clinical picture [r5]" },
      { modality: "Plain radiographs", indication: "Exclude fracture, calcification and glenohumeral arthritis as other causes of anterior shoulder pain", findings: "Calcific deposit, arthritis, humeral head position (clinical convention)" }
    ]
  },

  differentials: [
    { name: "Rotator cuff related shoulder pain", id: "rotator-cuff-related-shoulder-pain", distinguishing: "Lateral shoulder pain with a painful arc and pain on resisted abduction or external rotation. It coexists with biceps tendinopathy in most cases [r1,r2]." },
    { name: "Degenerative rotator cuff tear", id: "degenerative-rotator-cuff-tear", distinguishing: "Weakness that is more than pain-limited, with lag signs and sometimes wasting; check the cuff in anyone with anterior shoulder pain." },
    { name: "SLAP lesion", id: "slap-lesion", distinguishing: "Deep pain with overhead or throwing mechanics, sometimes with clicking; Speed's and Yergason's tests cannot separate it from biceps tendon pain [r3]." },
    { name: "Proximal (long head) biceps rupture", id: "proximal-biceps-rupture", distinguishing: "A sudden pop, a visible Popeye deformity and bruising; pain often falls after rupture." },
    { name: "Frozen shoulder", id: "frozen-shoulder", distinguishing: "Marked loss of passive external rotation and elevation, rather than pain with loading alone." },
    { name: "Calcific tendinopathy", id: "calcific-tendinopathy", distinguishing: "Severe, often sudden pain with a visible calcific deposit on radiograph or ultrasound." },
    { name: "Anterior shoulder instability or subscapularis tear", id: "anterior-shoulder-dislocation", distinguishing: "Apprehension, a history of dislocation or forced external rotation; subscapularis tears also cause anterior pain and weak internal rotation." },
    { name: "Cervical radiculopathy", id: "cervical-radiculopathy", distinguishing: "Neck-related pain with dermatomal symptoms and a positive Spurling test rather than a loaded groove-based pain." }
  ],
  redFlags: [
    "A sudden pop with a new bulge in the arm after lifting: suggests biceps rupture rather than tendinopathy. Examine for the Popeye deformity and see the proximal biceps rupture page.",
    "Weakness that is more than pain-limited, a lag sign or a drop-arm sign: possible cuff tear. Arrange ultrasound or MRI and an orthopaedic opinion.",
    "Night or resting pain that is unrelenting, unexplained weight loss, a history of cancer or a systemic illness: consider a non-musculoskeletal cause such as malignancy or infection; refer for medical assessment.",
    "Chest pain, breathlessness, sweating or pain spreading to the jaw with shoulder or arm pain: possible cardiac cause. Emergency assessment.",
    "A hot, red, swollen shoulder or fever, especially after an injection or surgery: possible septic arthritis. Same-day medical review.",
    "Progressive neurological deficit, wasting or neck-related arm symptoms: assess for cervical radiculopathy or other neurological causes and refer.",
    "No meaningful improvement after about 3 months of well-delivered loading (a clinical convention): re-examine for cuff, labral or other pathology and consider imaging and a specialist opinion."
  ],

  management: {
    principles: "Treat the person and the whole shoulder, not just the biceps tendon. A tendon abnormality on a scan is common with age and often accompanies cuff changes, so it does not prove that the biceps is the source of pain [r1,r2]. A clinical practice guideline for rotator cuff disorders, in which biceps tendinopathy commonly coexists, recommends an active, task-oriented rehabilitation program of exercise and education, and notes that analgesia and injections may reduce pain in the short term [r14]. That guideline was not specific to the biceps, and a scoping review of physiotherapy for biceps tendinopathy found only 14 relevant articles, most of them testing therapeutic modalities, and described a dearth of evidence [r6]. Surgery is considered when a well-delivered loading program has failed. Trials of tenotomy versus tenodesis show similar pain and function and a higher rate of Popeye deformity after tenotomy [r7,r8], but there is no randomised trial against continued non-operative care in the sources reviewed. Make the decision together with the patient, and be open about the uncertainty.",
    medical: [
      {
        name: "Simple analgesia and NSAIDs",
        description: "Paracetamol or a short course of an oral NSAID can reduce pain in the short term and allow loading. The rotator cuff guideline states that acetaminophen, NSAIDs and injection therapies may be useful to reduce pain in the short term [r14]. No trial specific to biceps tendinopathy was found in the sources reviewed.",
        evidence: "limited", recommendation: "consider", refs: ["r14"]
      },
      {
        name: "Corticosteroid injection into the biceps sheath or around the tendon",
        description: "Ultrasound-guided sheath injection through the rotator interval was technically successful in all 26 patients in a retrospective series, with fluid seen in the sheath on post-injection ultrasound, but that study did not measure pain relief [r15]. The cuff guideline allows that injection therapies may reduce pain in the short term [r14]. No randomised trial of biceps-sheath injection for non-stroke LHB tendinopathy was found in the sources reviewed, so the size and duration of benefit are not known. Injection into the tendon substance is generally avoided (clinical reasoning).",
        evidence: "very-limited", recommendation: "consider", refs: ["r15", "r14"]
      },
      {
        name: "Biceps tenotomy or tenodesis after failed non-operative care",
        description: "Considered when a well-delivered program has failed. The trials compared the two operations in people having arthroscopic shoulder surgery (mean ages around 58–60 years, often with a concomitant cuff repair); none compared surgery with continued non-operative care [r8,r16,r17]. A meta-analysis of eight randomised trials of adults who had not responded to non-operative treatment found both techniques gave satisfactory results [r18]. Surgery treats a possible pain source but does not address coexisting cuff pathology.",
        evidence: "limited", recommendation: "consider", refs: ["r8", "r16", "r17", "r18"]
      },
      {
        name: "Choice of tenotomy versus tenodesis",
        description: "A meta-analysis of 11 randomised trials (860 patients) found comparable patient-reported function (standardised mean difference 0.14, 95% CI −0.04 to 0.32) and pain (mean difference −0.11 on a visual analogue scale), with a lower Popeye deformity rate after tenodesis (odds ratio 0.29, 95% CI 0.19–0.45) and a shorter operative time after tenotomy [r7]. In the largest double-blind trial (114 participants, mean age 57.7 years), ASES and WORC scores did not differ at 24 months, cosmetic deformity occurred in 33% after tenotomy and 10% after tenodesis, and elbow flexion and supination strength and cramping did not differ [r16]. Randomised trials pooled in another review found cosmetic deformity in 23.3% after tenotomy versus 6.8% after tenodesis, with no difference in Constant, pain or ASES scores [r17]. A further meta-analysis of 25 studies (eight randomised) found no evidence-based benefit of tenodesis in function, pain or strength, and it is unclear whether tenodesis helps specific groups such as younger people [r8]. Tenotomy suits lower-demand or older patients; tenodesis is commonly chosen for younger or cosmetically concerned patients (clinical practice, not randomised evidence).",
        evidence: "moderate", recommendation: "consider", refs: ["r7", "r16", "r17", "r8", "r18"]
      }
    ],
    physio: [
      {
        name: "Progressive, task-oriented exercise for the shoulder, including the biceps",
        description: "Education plus graduated loading of the cuff, scapular stabilisers and biceps, progressed by pain monitoring. This is extrapolated from the rotator cuff disorders guideline, which recommends active task-oriented rehabilitation (exercise and education) [r14]. A scoping review found that general exercise and eccentric training were among the interventions used for biceps tendinopathy, but it did not appraise their effectiveness and noted a dearth of evidence for conservative management [r6]. No randomised trial of a biceps-specific exercise program was found in the sources reviewed.",
        evidence: "limited", recommendation: "recommended", refs: ["r14", "r6"]
      },
      {
        name: "Education, reassurance and load management",
        description: "Explain that tendon changes are common with age and that many shoulders accommodate them [r1]. Modify, but do not simply stop, the aggravating activity, avoid sustained heavy loading in the painful range, and give a clear plan for returning to lifting or overhead work.",
        evidence: "expert-opinion", recommendation: "recommended", refs: []
      },
      {
        name: "Manual therapy, dry needling and thoracic or scapular mobilisation as adjuncts",
        description: "The scoping review found that manual therapy, dry needling and patient education were described in clinical commentaries and a Delphi study, and that joint mobilisation and dry needling appeared in the quantitative studies, but their effectiveness was not established [r6]. Use as a short-term adjunct to exercise, not as stand-alone treatment.",
        evidence: "very-limited", recommendation: "consider", refs: ["r6"]
      },
      {
        name: "Therapeutic modalities (shockwave, laser, therapeutic ultrasound, iontophoresis, polarised light)",
        description: "These were the interventions most often tested in the few quantitative studies of biceps tendinopathy that the scoping review identified, but the review did not appraise efficacy and concluded that evidence was scarce [r6]. They should not replace progressive loading.",
        evidence: "very-limited", recommendation: "consider", refs: ["r6"]
      },
      {
        name: "Treating the biceps as an isolated pain source on the basis of Speed's or Yergason's test alone",
        description: "Speed's and Yergason's tests are insensitive and only moderately specific, and biceps and cuff pathology coexist in most patients [r3,r2,r4,r1]. A rehabilitation or surgical plan that targets the biceps alone risks missing the cuff, labrum, neck or capsule.",
        evidence: "limited", recommendation: "not-recommended", refs: ["r3", "r2", "r4", "r1"]
      }
    ],
    education: [
      "The biceps tendon at the front of the shoulder is often one of several tissues that are sore. Tendon changes on a scan are common with age and do not always cause pain [r1].",
      "Most people are advised to try a structured exercise program first. The evidence for specific exercises or injections is limited, so progress is guided by how your shoulder responds.",
      "Keep using the arm. Reduce the heavy or repetitive tasks that flare the pain, then build back gradually.",
      "If surgery is needed, tenotomy and tenodesis give similar pain relief; tenotomy more often leaves a visible bulge in the upper arm, and tenodesis needs a longer recovery from the repair [r7,r16].",
      "See your physio or doctor promptly if you feel a sudden pop with a new bulge in the arm, or if the arm becomes weak or the pain is unrelenting."
    ]
  },

  rehab: {
    overview: "No randomised trial of a biceps-specific rehabilitation program was found in the sources reviewed, so the program below is an expert-opinion adaptation of the rotator cuff disorders guideline, which recommends active, task-oriented exercise and education [r14]. Progression is criteria-based, using pain, irritability and load tolerance rather than the calendar. A pain level of up to about 3 to 4 out of 10 that settles within 24 hours is a common clinical convention for loading [r6]. After biceps tenotomy or tenodesis, follow the surgeon's protocol, including any restriction on resisted elbow flexion after tenodesis. Doses are clinical conventions, not trial-derived prescriptions.",
    stages: [
      {
        name: "Settle and educate",
        timeframe: "Weeks 0–3 (clinical convention; criteria override time)",
        goals: ["Reduce pain and irritability", "Explain the problem and set expectations", "Maintain shoulder range and elbow function", "Begin isometric cuff and scapular activation"],
        precautions: ["Avoid heavy or repeated lifting, curls and pulling in the painful range", "Avoid passive stretching into the painful anterior stretch position", "Stop and reassess if there is a sudden pop, new bulge or loss of strength"],
        exercises: [
          { name: "Isometric external rotation at the side", dosage: "5 × 30–45 s at 20–30% effort, once or twice daily, pain ≤ 3/10", cues: "Elbow bent and tucked, press the back of the hand gently into a wall", figure: { pose: "ex-shoulder-er-band", view: "lateral", props: ["wall"] } },
          { name: "Pendulum swings", dosage: "3 × 30–60 s, 2–3 times daily", cues: "Let the arm hang and swing from the trunk", figure: { pose: "ex-pendulum", view: "lateral" } },
          { name: "Scapular setting and posture", dosage: "10 × 5 s, 3–4 times daily", cues: "Draw the shoulder blades gently back and down; avoid shrugging" },
          { name: "Pain-free active-assisted elevation", dosage: "2 × 10, 2 times daily, within comfort", cues: "Lead with the other hand; stop short of pain", figure: { pose: "ex-shoulder-flexion", view: "lateral" } }
        ],
        progressionCriteria: ["Resting and night pain settling", "Pain ≤ 3/10 with isometric holds", "Active elevation near full range without a pain flare"]
      },
      {
        name: "Restore range and cuff and scapular control",
        timeframe: "Weeks 2–8",
        goals: ["Full active range of motion", "Improve cuff and scapular endurance", "Introduce light biceps loading"],
        precautions: ["Keep pain ≤ 4/10 during exercise and settling within 24 hours", "Avoid sustained heavy loading with the arm behind the body and the elbow extended"],
        exercises: [
          { name: "Active elevation in the scapular plane", dosage: "2 × 10–12, once or twice daily, no load", cues: "Thumb up; avoid shrugging", figure: { pose: "ex-scaption", view: "lateral" } },
          { name: "Wall slide", dosage: "3 × 8–10, 2 times daily", cues: "Keep the forearms on the wall and the shoulder blade moving", figure: { pose: "ex-wall-slide", view: "lateral", props: ["wall"] } },
          { name: "Band external rotation at the side", dosage: "3 × 10–15, once daily", cues: "Keep the shoulder blade set; slow tempo", figure: { pose: "ex-shoulder-er-band", view: "lateral", props: ["resistance-band"] } },
          { name: "Isometric elbow flexion with the forearm supinated", dosage: "5 × 30–45 s at 30–50% effort, daily, pain ≤ 3/10", cues: "Elbow at the side; build gradually over days" },
          { name: "Thoracic extension over a foam roller", dosage: "2 × 10, daily", cues: "Extend through the upper back, not the neck", figure: { pose: "ex-thoracic-extension", view: "lateral", props: ["foam-roller"] } }
        ],
        progressionCriteria: ["Full or near-full active range without hitching", "Pain ≤ 3/10 with daily tasks", "Isometric biceps hold tolerated without flare over 24 hours"]
      },
      {
        name: "Progressive strengthening",
        timeframe: "Weeks 6–16",
        goals: ["Build strength and capacity in the cuff, scapular stabilisers and biceps", "Restore tolerance to lifting and pulling", "Normalise movement quality"],
        precautions: ["Increase load by about 5–10% per week and monitor pain over the next 24 hours (clinical convention)", "Avoid heavy overhead or end-range loaded stretch until strength and control are restored"],
        exercises: [
          { name: "Slow elbow flexion (curl) with a supinated grip", dosage: "3 × 8–12 with 3 s lowering, 2–3 times per week", cues: "Elbow at the side; control the lowering; stay within tolerable pain" },
          { name: "Row", dosage: "3 × 10–12, 3 times per week", cues: "Draw the shoulder blades back and down", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } },
          { name: "Side-lying external rotation", dosage: "3 × 10–15 with a light dumbbell, 3 times per week", cues: "Elbow tucked; slow tempo", figure: { pose: "ex-shoulder-er-side-lying", view: "lateral", props: ["dumbbell", "mat"] } },
          { name: "Scaption raise", dosage: "3 × 10–12 with a light dumbbell, 3 times per week", cues: "Raise in the scapular plane with no shrug", figure: { pose: "ex-scaption", view: "lateral", props: ["dumbbell"] } },
          { name: "Incline or wall push-up plus", dosage: "3 × 8–12, 3 times per week", cues: "Push through the hands and protract at the top", figure: { pose: "ex-press-up", view: "lateral", props: ["wall"] } }
        ],
        progressionCriteria: ["Strength about 80% or more of the other side for external rotation and elbow flexion", "Pain ≤ 2/10 with loaded exercise and daily tasks", "No flare of pain over 24 hours after heavier sessions"]
      },
      {
        name: "Return to overhead work and sport",
        timeframe: "Months 3–6",
        goals: ["Restore full strength and endurance", "Return to overhead, pulling and heavy lifting", "Establish a maintenance program"],
        precautions: ["Return to overhead and throwing only when criteria are met", "Build volume gradually (about 10–20% per week; clinical convention)"],
        exercises: [
          { name: "Overhead press", dosage: "3–4 × 6–10 at 7–8/10 effort, 2–3 times per week", cues: "Control the lowering; press in the scapular plane", figure: { pose: "ex-overhead-press", view: "lateral", props: ["dumbbell"] } },
          { name: "Prone Y raise", dosage: "3 × 10–12, 2–3 times per week", cues: "Lift with the lower trapezius, not the neck", figure: { pose: "ex-prone-y", view: "lateral", props: ["bench"] } },
          { name: "Farmer or suitcase carry", dosage: "3–4 × 20–40 m, 2 times per week", cues: "Tall posture with the shoulder blades set", figure: { pose: "ex-farmer-carry", view: "lateral", props: ["dumbbell"] } },
          { name: "Sport- or work-specific drills (throwing, serving, swimming, overhead lifting)", dosage: "Start at about 25–30% of normal volume and build over 4–8 weeks (clinical convention)", cues: "Quality first, then volume, then intensity", figure: { pose: "serve-trophy", view: "anterior" } }
        ],
        progressionCriteria: ["Passes strength, range and function criteria (see return to sport)", "Completes sport or work simulation at full volume with pain ≤ 2/10", "No night pain and no flare over 24 hours"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Pain ≤ 2/10 with work or sport tasks and no night pain",
      "Full pain-free active range of motion equal to the other side",
      "Strength about 90% or more of the other side for external rotation, elevation and elbow flexion (clinical convention)",
      "Tolerance of loaded elbow flexion and supination, and of overhead loading, without a flare over 24 hours",
      "Good scapular control during loaded elevation",
      "Completes progressive task- or sport-specific training without symptoms",
      "After tenotomy or tenodesis: surgeon clearance, with attention to any concomitant cuff repair"
    ],
    tests: [
      "Hand-held dynamometry for external rotation, internal rotation and elbow flexion compared with the other side",
      "Closed Kinetic Chain Upper Extremity Stability Test",
      "Overhead endurance test or repetition maximum for row and press",
      "Task or sport simulation (throw, serve, swim or lift)",
      "SPADI, Oxford Shoulder Score or QuickDASH at baseline and return"
    ]
  },

  prognosis: "The long-term natural history of LHB tendinopathy was not described in the sources reviewed here. Many cases are probably part of an age-related pattern of cuff and biceps tendon change that is often well accommodated [r1], and a scoping review found only a dearth of evidence about how conservative treatment changes the outcome [r6]. After surgery, randomised trials suggest that tenotomy and tenodesis give similar pain and function. In a meta-analysis of 11 randomised trials, function (standardised mean difference 0.14) and pain (mean difference −0.11) did not differ, and Popeye deformity was less likely after tenodesis (odds ratio 0.29) [r7]. In the trials pooled by one review, cosmetic deformity occurred in 23.3% after tenotomy and 6.8% after tenodesis [r17], and in a double-blind trial it occurred in 33% versus 10% at 24 months, while pain, strength and cramping did not differ [r16]. Those trials were in mostly older patients, often having concomitant cuff surgery [r8], so they cannot be assumed to apply to young athletes or heavy manual workers with an isolated biceps problem.",
  prevention: [
    "Build load gradually in overhead, throwing, swimming and lifting programs and avoid sudden spikes in volume (reasonable principle; trial evidence for prevention is limited)",
    "Maintain cuff, scapular and trunk strength and thoracic mobility (reasonable principle; not tested for biceps tendinopathy)",
    "Share load across the shoulder: avoid relying on repeated heavy biceps-dominant work in a painful shoulder (clinical reasoning)",
    "Address early cuff pain and weakness, because the biceps and cuff changes commonly coexist [r1,r2]",
    "Seek assessment for persistent anterior shoulder pain rather than loading through it for months"
  ],
  clinicalPearls: [
    "Anterior shoulder pain with a positive Speed's test is not 'biceps tendinitis' until the cuff has been tested. Speed's sensitivity was 32% in one surgical series and 63% in an ultrasound-referenced one, with specificity of only 58% to 75% [r3,r2].",
    "Do not rely on a single special test. In a systematic review of 30 studies, only Yergason's test had any value (LR+ 2.56, LR− 0.70), and the authors recommended no individual test [r4].",
    "Normal biceps imaging does not exclude a painful biceps, and an abnormal biceps does not prove it: MRI sensitivity and specificity for tendinosis or partial tear were 67.8% and 75.9% [r5], and only 5% of supraspinatus tendons were normal when the biceps tendon was affected [r1].",
    "Be honest about the evidence: no randomised trial was found for biceps-specific exercise or injection, and the surgical trials compare tenotomy with tenodesis, not surgery with continued rehabilitation [r6,r8].",
    "When surgery is considered, give the patient the cosmetic trade-off in numbers: Popeye deformity in 33% after tenotomy versus 10% after tenodesis at 24 months in one trial, with no difference in pain or strength [r16].",
    "A sudden pop and a new bulge in the arm in someone with long-standing anterior shoulder pain is a rupture. Pain often settles after it, and the biceps page for rupture covers what to expect."
  ],
  related: ["rotator-cuff-related-shoulder-pain", "degenerative-rotator-cuff-tear", "slap-lesion", "proximal-biceps-rupture", "calcific-tendinopathy", "frozen-shoulder"],

  references: [
    { id: "r1", citation: "Canavan K, Zai Q, Bruni D, et al. Long head of biceps tendinopathy is associated with age and cuff tendinopathy on MRI obtained for evaluation of shoulder pain. Clin Orthop Relat Res. 2025;483(5):869-77.", pmid: "39679662", doi: "10.1097/CORR.0000000000003342", type: "cross-sectional", year: 2025 },
    { id: "r2", citation: "Chen HS, Lin SH, Hsu YH, et al. A comparison of physical examinations with musculoskeletal ultrasound in the diagnosis of biceps long head tendinitis. Ultrasound Med Biol. 2011;37(9):1392-8.", pmid: "21767902", doi: "10.1016/j.ultrasmedbio.2011.05.842", type: "diagnostic-accuracy", year: 2011 },
    { id: "r3", citation: "Holtby R, Razmjou H. Accuracy of the Speed's and Yergason's tests in detecting biceps pathology and SLAP lesions: comparison with arthroscopic findings. Arthroscopy. 2004;20(3):231-6.", pmid: "15007311", doi: "10.1016/j.arthro.2004.01.008", type: "diagnostic-accuracy", year: 2004 },
    { id: "r4", citation: "Bélanger V, Dupuis F, Leblond J, et al. Accuracy of examination of the long head of the biceps tendon in the clinical setting: a systematic review. J Rehabil Med. 2019;51(7):479-91.", pmid: "31243466", doi: "10.2340/16501977-2563", type: "systematic-review", year: 2019 },
    { id: "r5", citation: "Almeida GG, Graf N, Wildermuth S, et al. Diagnostic performance of long head of biceps tendon tears on MRI: systematic review and meta-analysis. Eur Radiol. 2024;34(7):4309-20.", pmid: "38148406", doi: "10.1007/s00330-023-10521-6", type: "meta-analysis", year: 2024 },
    { id: "r6", citation: "McDevitt AW, Young JL, Cleland JA, et al. Physical therapy interventions used to treat individuals with biceps tendinopathy: a scoping review. Braz J Phys Ther. 2024;28(1):100586.", pmid: "38219522", doi: "10.1016/j.bjpt.2023.100586", type: "systematic-review", year: 2024 },
    { id: "r7", citation: "Hartland AW, Islam R, Teoh KH, et al. Clinical effectiveness of tenotomy versus tenodesis for long head of biceps pathology: a systematic review and meta-analysis. BMJ Open. 2022;12(10):e061954.", pmid: "36220319", doi: "10.1136/bmjopen-2022-061954", type: "meta-analysis", year: 2022 },
    { id: "r8", citation: "Kooistra B, Gurnani N, Weening A, et al. Tenotomy or tenodesis for tendinopathy of the long head of the biceps brachii: an updated systematic review and meta-analysis. Arthrosc Sports Med Rehabil. 2021;3(4):e1199-209.", pmid: "34430901", doi: "10.1016/j.asmr.2021.02.010", type: "meta-analysis", year: 2021 },
    { id: "r9", citation: "Pill SG, Walch G, Hawkins RJ, et al. The role of the biceps tendon in massive rotator cuff tears. Instr Course Lect. 2012;61:113-20.", pmid: "22301226", type: "narrative-review", year: 2012 },
    { id: "r10", citation: "Green B, Roy V, Boulila C, et al. Evaluation of clinical and ultrasound-based diagnosis of the long head of the biceps pathologies: a prospective study. Arch Phys Med Rehabil. 2026;107(11):3097-107.", pmid: "42586401", doi: "10.1016/j.apmr.2026.04.020", type: "diagnostic-accuracy", year: 2026 },
    { id: "r11", citation: "Kibler WB, Sciascia AD, Hester P, et al. Clinical utility of traditional and new tests in the diagnosis of biceps tendon injuries and superior labrum anterior and posterior lesions in the shoulder. Am J Sports Med. 2009;37(9):1840-7.", pmid: "19509414", doi: "10.1177/0363546509332505", type: "diagnostic-accuracy", year: 2009 },
    { id: "r12", citation: "Hegedus EJ, Goode AP, Cook CE, et al. Which physical examination tests provide clinicians with the most value when examining the shoulder? Update of a systematic review with meta-analysis of individual tests. Br J Sports Med. 2012;46(14):964-78.", pmid: "22773322", doi: "10.1136/bjsports-2012-091066", type: "meta-analysis", year: 2012 },
    { id: "r13", citation: "Hanchard NCA, Lenza M, Handoll HHG, et al. Physical tests for shoulder impingements and local lesions of bursa, tendon or labrum that may accompany impingement. Cochrane Database Syst Rev. 2013;(4):CD007427.", pmid: "23633343", doi: "10.1002/14651858.CD007427.pub2", type: "systematic-review", year: 2013 },
    { id: "r14", citation: "Lafrance S, Charron M, Roy JS, et al. Diagnosing, managing, and supporting return to work of adults with rotator cuff disorders: a clinical practice guideline. J Orthop Sports Phys Ther. 2022;52(10):647-64.", pmid: "35881707", doi: "10.2519/jospt.2022.11306", type: "clinical-practice-guideline", year: 2022 },
    { id: "r15", citation: "Stone TJ, Adler RS. Ultrasound-guided biceps peritendinous injections in the absence of a distended tendon sheath: a novel rotator interval approach. J Ultrasound Med. 2015;34(12):2287-92.", pmid: "26518277", doi: "10.7863/ultra.15.02017", type: "cohort", year: 2015 },
    { id: "r16", citation: "MacDonald P, Verhulst F, McRae S, et al. Biceps tenodesis versus tenotomy in the treatment of lesions of the long head of the biceps tendon in patients undergoing arthroscopic shoulder surgery: a prospective double-blinded randomized controlled trial. Am J Sports Med. 2020;48(6):1439-49.", pmid: "32223645", doi: "10.1177/0363546520912212", type: "rct", year: 2020 },
    { id: "r17", citation: "Belk JW, Kraeutler MJ, Houck DA, et al. Biceps tenodesis versus tenotomy: a systematic review and meta-analysis of level I randomized controlled trials. J Shoulder Elbow Surg. 2021;30(5):951-60.", pmid: "33373685", doi: "10.1016/j.jse.2020.11.012", type: "meta-analysis", year: 2021 },
    { id: "r18", citation: "Pozzetti Daou J, Nagaya DY, Matsunaga FT, et al. Does biceps tenotomy or tenodesis have better results after surgery? A systematic review and meta-analysis. Clin Orthop Relat Res. 2021;479(7):1561-73.", pmid: "33617158", doi: "10.1097/CORR.0000000000001672", type: "meta-analysis", year: 2021 }
  ],

  animation: {
    title: "How long head of biceps tendinopathy develops",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "lateral", environment: "court",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "stand", root: { x: 0 } },
          { t: 1.0, pose: "serve-trophy", root: { x: 0 } },
          { t: 2.0, pose: "throw-acceleration", root: { x: 0 }, ease: "in" },
          { t: 2.8, pose: "throw-follow-through", root: { x: 0 } },
          { t: 4.0, pose: "serve-trophy", root: { x: 0 } },
          { t: 5.0, pose: "throw-follow-through", root: { x: 0 } }
        ],
        props: [{ id: "racquet", type: "racquet", attach: "handR" }],
        forces: [
          { t: [2.2, 3.4], at: "shoulderR", dir: "down", label: "Eccentric load on the biceps tendon", size: "m" },
          { t: [4.8, 5.8], at: "shoulderR", dir: "down", label: "Repeated, serve after serve", size: "m" }
        ],
        highlights: [{ t: [1.0, 6], at: "shoulderR" }],
        slowmo: [{ t: [2.0, 3.0], rate: 0.4 }],
        captions: [
          { t: 0, text: "A tennis player serves repeatedly through a long training block." },
          { t: 1.0, text: "The arm is cocked overhead, and the biceps tendon glides through the groove." },
          { t: 2.2, text: "In follow-through, the biceps works eccentrically to slow the arm." },
          { t: 4.0, text: "Serve after serve, the load can outpace the tendon's capacity to adapt." },
          { t: 5.2, text: "Pain builds gradually at the front of the shoulder." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "shoulderR",
        captions: [{ t: 0, text: "Zooming into the right shoulder, viewed from the front." }]
      },
      {
        type: "closeup", label: "In the shoulder", duration: 10, scene: "shoulder-anterior",
        actions: [
          { t: 0, do: "highlight", target: "longHeadBicepsTendon" },
          { t: 0.3, do: "label", target: "longHeadBicepsTendon", text: "Long head of biceps tendon" },
          { t: 1.2, do: "arrow", at: "bicipitalGroove", dir: "distal", label: "Repeated gliding and traction", size: "s" },
          { t: 2.0, do: "stretch", target: "longHeadBicepsTendon", amount: 0.2, dur: 1.2 },
          { t: 3.4, do: "inflame", target: "longHeadBicepsTendon", amount: 0.5 },
          { t: 3.8, do: "label", target: "longHeadBicepsTendon", text: "Reactive, irritated tendon" },
          { t: 5.0, do: "thicken", target: "longHeadBicepsTendon", amount: 0.5 },
          { t: 5.0, do: "degenerate", target: "longHeadBicepsTendon" },
          { t: 5.6, do: "label", target: "longHeadBicepsTendon", text: "Thickened, degenerate tendon" },
          { t: 6.6, do: "degenerate", target: "supraspinatusTendon" },
          { t: 7.0, do: "label", target: "supraspinatusTendon", text: "Cuff changes often coexist" },
          { t: 7.8, do: "pain", at: "bicipitalGroove" },
          { t: 8.6, do: "camera", at: "bicipitalGroove", zoom: 1.7, dur: 1 }
        ],
        captions: [
          { t: 0, text: "The long head of biceps runs through the joint and down the bicipital groove." },
          { t: 1.2, text: "Every elevation and rotation makes the tendon glide and take load." },
          { t: 3.4, text: "When load outpaces adaptation, the tendon becomes irritated and swollen." },
          { t: 5.0, text: "With time the tendon can thicken and disorganise." },
          { t: 6.6, text: "Rotator cuff changes often coexist, so the biceps is rarely the only source of pain." },
          { t: 7.8, text: "Pain is felt over the front of the shoulder, in the groove." }
        ]
      },
      {
        type: "micro", label: "Tendon response", duration: 9, tissue: "tendon-continuum",
        stages: [
          { t: 0, stage: "healthy" }, { t: 2.0, stage: "reactive" }, { t: 4.0, stage: "disrepair" },
          { t: 6.0, stage: "degenerative" }, { t: 7.8, stage: "load-adaptation" }
        ],
        timeLabels: [{ t: 2.0, text: "Days to weeks" }, { t: 4.0, text: "Weeks to months" }, { t: 6.0, text: "Months to years" }, { t: 7.8, text: "Progressive loading" }],
        captions: [
          { t: 0, text: "Healthy tendon: aligned collagen with a few resident tenocytes." },
          { t: 2.0, text: "Reactive stage: cells swell and the tendon thickens in response to overload." },
          { t: 4.0, text: "Disrepair: the matrix breaks down and collagen becomes disorganised." },
          { t: 6.0, text: "Degenerative stage: areas of cell loss, more common with age and cuff disease." },
          { t: 7.8, text: "Progressive loading can build capacity, even where structural change remains." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "UL2" }
};
