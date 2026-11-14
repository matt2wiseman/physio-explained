export default {
  id: "calcific-tendinopathy",
  name: "Calcific tendinopathy of the rotator cuff",
  shortName: "Calcific tendinopathy",
  aka: ["calcific tendinitis of the shoulder", "calcifying tendinitis", "calcific rotator cuff tendinopathy", "tendinosis calcarea", "calcific periarthritis", "hydroxyapatite deposition disease", "calcium deposit in the shoulder"],
  region: "shoulder",
  tissues: ["tendon"],
  onset: "acute-or-gradual",
  mechanismType: ["insidious"],
  populations: ["adults aged about 30–60 years", "women (more often than men)", "people with diabetes or thyroid disease (associated)", "some people with no symptoms"],
  sports: [],
  urgency: "routine",
  summary: "Calcium deposition within a rotator cuff tendon, usually supraspinatus, mostly in people aged 30–60. Pain is worst when the deposit is resorbed. Many cases settle with time and conservative care.",
  keyFacts: [
    { label: "Typical recovery", value: "Often self-limiting over months, with spontaneous resorption of the deposit common; some people have persistent pain or stiffness (timing varies widely)" },
    { label: "Return to sport", value: "Criteria-based and pain-guided; usually after the painful phase has settled and range and strength are restored (clinical convention)" },
    { label: "Key test", value: "No validated bedside test for calcific tendinopathy: diagnose from the history plus a deposit on radiograph or ultrasound" },
    { label: "Imaging", value: "Radiograph shows the deposit; ultrasound adds morphology and bursitis. Deposits also occur in 7.8% of people with no symptoms" },
    { label: "Peak age", value: "Age 30–60 years (OR 8.0), more often women (OR 1.5)" },
    { label: "Incidence", value: "Deposits in 7.8% of 734 asymptomatic adults and 42.5% of 485 adults with subacromial pain in one series" }
  ],
  overview: "Calcific tendinopathy of the rotator cuff is the deposition of calcium (carbonate apatite) within a cuff tendon, most often supraspinatus. In a series of 1219 adults, calcific deposits were found in 7.8% of 734 asymptomatic adults and 42.5% of 485 adults with subacromial pain syndrome; age 30–60 years (odds ratio 8.0), subacromial pain (7.1) and female sex (1.5) were associated with deposits [r1]. A review reports a prevalence of 2.7% to 22% in Caucasian populations, mostly in women aged 30–50 years, with the supraspinatus most often involved and about 10% of patients affected on both sides [r2]. Because deposits are also seen in people with no pain, a deposit on imaging does not by itself explain a painful shoulder [r1].\n\nCalcification is thought to be an active, cell-mediated process rather than simple precipitation of calcium. Uhthoff and colleagues described precalcific, calcific (formative, resting and resorptive) and post-calcific stages; the resorptive phase, when new vessels, macrophages and multinucleated giant cells remove the deposit, is the most painful [r2]. The natural history is generally favourable: the deposit shows a tendency to spontaneous resorption and symptoms often resolve without intervention, although some people have persistent pain or reduced range at long follow-up [r2]. A review states that non-operative treatment is successful in up to 90% of patients and that recovery may take up to several months [r3].\n\nTreatment evidence is mixed. A meta-analysis of randomised trials reported that pooled mean differences in pain and function after shockwave therapy (ESWT), ultrasound-guided needling and surgery were all clinically significant, and judged it reasonable to trial ESWT and needling first [r4]. An earlier meta-analysis found moderate-quality GRADE evidence that high-energy ESWT improves pain and function, and found that needling had not been shown to be better than ultrasound-guided subacromial corticosteroid injection [r5]. In contrast, a sham-controlled randomised trial of 220 adults with symptoms for at least three months found no benefit of ultrasound-guided lavage with corticosteroid, or of corticosteroid injection alone, compared with sham, at four or 24 months [r6]. Arthroscopic removal can be effective but is more invasive and is a secondary option when other measures fail [r7].",

  epidemiology: {
    text: "In 1219 adults, calcific deposits were found in 57 of 734 asymptomatic adults (7.8%) and in 42.5% of 485 adults with subacromial pain syndrome. Age 30–60 years (OR 8.0, 95% CI 2.5–26.3), subacromial pain (OR 7.1) and female sex (OR 1.5) were associated with deposits, and women aged 30–60 years with subacromial pain and a deposit longer than 1.5 cm had the highest chance of symptomatic calcific tendinopathy [r1]. A review reports a prevalence of 2.7% to 22%, mostly in women aged 30–50 years, with supraspinatus most often affected and the condition bilateral in about 10% of patients [r2]. A meta-analysis of randomised trials states that 7% to 17% of people with shoulder pain have rotator cuff calcium deposits [r4]; the differences between these figures reflect different populations and definitions. A German-language review also describes a peak between 30 and 50 years [r3]. Calcification is associated with diabetes and thyroid disorders, and in a review more than 30% of people with insulin-dependent diabetes had tendon calcification; people with associated endocrine disorders had earlier onset, a longer natural history and more surgery [r2]. A familial predisposition has been proposed [r2].",
    riskFactors: {
      intrinsic: [
        "Age 30–60 years (OR 8.0) [r1]",
        "Female sex (OR 1.5) [r1]",
        "Diabetes and thyroid disorders (associated; mechanism unclear) [r2]",
        "Possible familial or genetic predisposition (proposed) [r2]"
      ],
      extrinsic: [
        "Coexisting subacromial pain (OR 7.1, an association, not proof of cause) [r1]",
        "Repetitive microtrauma and local tendon degeneration have been proposed as triggers, but the cause remains controversial [r2]",
        "No clearly modifiable extrinsic risk factor has been established in the sources reviewed here"
      ]
    }
  },

  mechanism: {
    summary: "There is usually no injury. Calcific tendinopathy is thought to be an active, cell-mediated process in which an environment that favours calcification develops within the tendon, followed by spontaneous phagocytic resorption of the deposit. The trigger is not known; theories include local tendon degeneration, repetitive microtrauma, fibrocartilaginous metaplasia and erroneous differentiation of tendon stem cells [r2].",
    sequence: [
      "Precalcific stage: fibrocartilaginous metaplasia of an area of tendon, with chondrocyte-like cells and calcium crystals gathered in matrix vesicles [r2].",
      "Formative phase: calcium is deposited in matrix vesicles that coalesce into foci of calcification separated by fibrocartilage; symptoms are often mild [r2].",
      "Resting phase: fibrocollagenous tissue borders the deposits, indicating that deposition has stopped [r2].",
      "Resorptive phase: thin-walled vascular channels appear at the edge of the deposit, and macrophages and multinucleated giant cells phagocytose it, leaving a thick, creamy, toothpaste-like material that is often under pressure. This is the most painful phase [r2].",
      "Post-calcific stage: fibroblasts, granulation tissue and type III collagen as the tendon attempts to heal and remodel [r2].",
      "All phases may coexist in the same tendon, and symptoms often settle as the deposit resolves [r2]."
    ],
    variants: [
      { name: "Acute painful resorptive episode", description: "Sudden severe pain, often at night, with marked loss of active movement, corresponding to the resorptive phase [r2]." },
      { name: "Chronic persistent calcific tendinopathy", description: "Symptoms lasting three months or more, the population in recent trials; many needed further treatment after four months [r6]." },
      { name: "Calcific tendinopathy with stiffness", description: "Can resemble adhesive capsulitis, with painful loss of movement [r9]." },
      { name: "Greater tuberosity osteolysis", description: "An uncommon, distinctive form associated with significantly poorer clinical and functional outcomes before and after surgery [r2]." },
      { name: "Asymptomatic deposit", description: "Deposits were present in 7.8% of asymptomatic adults [r1]; they do not need treatment." },
      { name: "Calcific deposit with associated cuff pathology", description: "Calcific deposits may worsen tendinopathy, with a higher rupture rate, slower recovery and more post-operative complications [r2]." }
    ]
  },

  anatomy: {
    text: "Most deposits form in the supraspinatus tendon within a few centimetres of its insertion on the greater tuberosity, beneath the acromion and coracoacromial ligament. The subacromial–subdeltoid bursa lies between the tendon and the acromion and deltoid, and can become inflamed when a deposit is resorbed or ruptures into the bursa. The infraspinatus and subscapularis tendons can also be involved. The rotator cuff centres the humeral head in the glenoid during elevation, so pain and reflex inhibition from a calcified tendon reduce active elevation more than passive range at first.",
    structures: [
      { name: "Supraspinatus tendon", role: "The most common site of deposition; abducts and compresses the humeral head [r2]" },
      { name: "Subacromial–subdeltoid bursa", role: "Gliding surface over the cuff; inflamed in painful phases" },
      { name: "Infraspinatus and subscapularis tendons", role: "Less commonly involved; external and internal rotation and stability" },
      { name: "Greater tuberosity and footprint", role: "Insertion of the cuff; uncommon osteolysis here predicts a poorer outcome [r2]" },
      { name: "Coracoacromial arch", role: "The roof over the tendon; relevant to pain on elevation and the rationale for (non-recommended) acromioplasty alone [r13]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "Calcification is not a passive precipitation of inorganic ions. The deposit is calcium carbonate apatite, deposited in matrix vesicles, and the process is an active, cell-mediated one in which resident progenitor cells may play a determining role [r2]. Proposed theories include degenerative calcification (local ischaemia, repetitive trauma, tenocyte necrosis), reactive calcification (an active, cell-mediated process described by Uhthoff), endochondral ossification and chondral metaplasia with erroneous differentiation of tendon-derived stem cells. Degenerative matrix change seems to play a role in the rotator cuff, but cannot alone explain calcification in children or in twins, and biopsies are only obtained late in the course when symptoms have developed [r2]. Ossification has been described as a localised attempt to compensate for the original decreased stiffness of a weak tendon [r2].\n\nThe phase of the process determines the symptoms. In an ultrasound–clinical correlation summarised in the review, arc-shaped or fragmented deposits (formative phase) were associated with mild pain, nodular deposits (resting phase) with moderate to severe pain, and cystic deposits (resorptive phase) with severe pain [r2]. In the resorptive phase the deposit is a thick, creamy or toothpaste-like material, often under pressure, surrounded by new vascular channels, macrophages and multinucleated giant cells with an osteoclast phenotype [r2]. The pain at this stage is probably due to the inflammatory and vascular response and the pressure within the deposit, which also irritates the adjacent subacromial bursa (proposed; not directly measured in the sources reviewed). Calcific deposits may also worsen tendinopathy, with an increased rupture rate, slower recovery and more post-operative complications [r2].",
    structures: [
      { name: "Supraspinatus tendon (near the footprint)", effect: "Fibrocartilaginous metaplasia, then deposition of calcium carbonate apatite in matrix vesicles, then cell-mediated resorption [r2]" },
      { name: "Subacromial–subdeltoid bursa", effect: "Inflammation and swelling during painful phases; deposits can rupture into the bursa (clinical observation)" },
      { name: "Rotator cuff tendon structure", effect: "Calcific deposits may worsen tendinopathy, with a higher rupture rate and more post-operative complications [r2]" },
      { name: "Greater tuberosity", effect: "Uncommon osteolysis is associated with poorer outcomes [r2]" },
      { name: "Glenohumeral capsule", effect: "Painful loss of movement can mimic adhesive capsulitis in some patients [r9]" }
    ],
    muscles: [
      { name: "Supraspinatus and other cuff muscles", effect: "Pain inhibition limits active elevation and external rotation, with a decrease in strength in painful phases [r5]" },
      { name: "Deltoid and upper trapezius", effect: "Compensatory overactivity and shoulder hitching when the cuff cannot elevate the arm (clinical observation)" },
      { name: "Scapular stabilisers", effect: "Altered recruitment while painful and with reduced use of the arm (clinical observation)" }
    ],
    cellular: [
      { phase: "Precalcific", timing: "Variable; not quantified", description: "Fibrocartilaginous metaplasia of tendon with chondrocyte-like cells and calcium crystals gathered in matrix vesicles [r2]." },
      { phase: "Formative", timing: "Variable; not quantified", description: "Calcium crystals deposit in matrix vesicles, which coalesce into large foci separated by chondrocytes and fibrocartilage septae [r2]." },
      { phase: "Resting", timing: "Variable; not quantified", description: "Fibrocollagenous tissue borders the foci of calcification, indicating that deposition has stopped [r2]." },
      { phase: "Resorptive", timing: "Variable; often weeks", description: "Vascular channels form at the periphery; macrophages and cathepsin K-positive multinucleated giant cells remove the deposit, leaving a toothpaste-like material under pressure. This phase is associated with severe pain [r2]." },
      { phase: "Post-calcific", timing: "Months", description: "Fibroblasts, granulation tissue and type III collagen as the tendon heals and remodels [r2]." }
    ],
    systems: [
      { system: "Nervous system and pain", effect: "Severe night and rest pain in the resorptive phase; prolonged pain can produce guarding, sleep loss and sensitisation (clinical observation)" },
      { system: "Immune and inflammatory", effect: "Macrophages and multinucleated giant cells clear the deposit in the resorptive phase [r2]" },
      { system: "Vascular", effect: "Thin-walled vascular channels form around the deposit during resorption [r2]" },
      { system: "Endocrine and metabolic", effect: "Associated with diabetes and thyroid disorders, with earlier onset and a longer natural history [r2]" },
      { system: "Psychological", effect: "Sudden severe pain and night disturbance can be distressing; reassurance about the favourable natural history is useful (clinical observation)" }
    ]
  },

  grading: {
    system: "Uhthoff stages with ultrasound morphology (no accepted clinical grading)",
    grades: [
      { grade: "Precalcific stage", description: "Fibrocartilaginous metaplasia of the tendon, with no visible deposit on imaging [r2].", prognosis: "Usually pain-free or mildly symptomatic; the correlation with symptoms was not evaluated [r2]." },
      { grade: "Formative phase", description: "Calcium deposited in matrix vesicles; arc-shaped or fragmented deposits on ultrasound [r2].", prognosis: "Mild pain in the ultrasound–clinical correlation summarised in the review [r2]." },
      { grade: "Resting phase", description: "Fibrocollagenous tissue borders the deposits; nodular deposits on ultrasound [r2].", prognosis: "Moderate to severe pain in the same correlation [r2]." },
      { grade: "Resorptive phase", description: "Vascular channels, macrophages and giant cells remove the deposit; cystic deposits and a toothpaste-like consistency under pressure [r2].", prognosis: "Severe pain, but also the phase in which the deposit resolves; many cases settle spontaneously [r2]." },
      { grade: "Post-calcific stage", description: "Granulation tissue and type III collagen as the tendon remodels [r2].", prognosis: "Pain usually settles; some people have persistent pain or reduced range at long follow-up [r2]." }
    ]
  },

  timeframes: {
    summary: "Calcific tendinopathy has a self-limiting course in many people, with spontaneous resorption of the deposit common [r2,r8], but the timing varies widely and is not well quantified in the literature reviewed here. Recovery may take up to several months [r3]. The phase durations below are illustrative clinical ranges, not derived from a source.",
    healing: [
      { phase: "Formative and resting phases", startDay: 0, endDay: 180, description: "Mild to moderate, often activity-related pain, or none. Education, activity modification and range of motion (clinical convention) [r2]." },
      { phase: "Resorptive (painful) phase", startDay: 30, endDay: 150, description: "Severe, often night, pain, with loss of active range. Analgesia, protection from provocative loading and a decision about minimally invasive treatment if pain persists [r2,r3]." },
      { phase: "Post-calcific remodelling and rehabilitation", startDay: 90, endDay: 365, description: "Pain settles, the tendon remodels and the cuff is progressively strengthened. Some people have residual pain or reduced range [r2]." }
    ],
    milestones: [
      { label: "Review at about 12 weeks if symptoms persist", day: 84, note: "In a recent trial, symptoms had to persist at least 3 months for entry, and 143 of 218 patients needed supplementary treatment after the 4-month assessment [r6]" },
      { label: "Pain settling with daily tasks", day: 90, note: "Typical clinical expectation, not trial-derived" },
      { label: "Full active range restored", day: 120 },
      { label: "Cuff strength within about 90% of the other side", day: 180 },
      { label: "Return to heavier overhead tasks", day: 210, note: "Criteria-based" }
    ],
    returnToSport: "Criteria-based and pain-guided, not time-based. After the painful phase settles, return to overhead work or sport once active range is full, external rotation and abduction strength are close to the other side, and task or sport simulation is tolerated. After barbotage or surgery, follow the proceduralist's advice."
  },

  clinicalPresentation: {
    symptoms: [
      "Shoulder pain, often severe and of rapid onset, worse at night and at rest",
      "Pain radiating to the lateral proximal forearm, with tenderness even at rest [r3]",
      "Pain with movement and reduced active range of motion; weakness from pain [r5]",
      "Difficulty sleeping on the affected side",
      "Sometimes a presentation like adhesive capsulitis, with painful stiffness [r9]",
      "A previous shoulder history, or no symptoms at all if the deposit is incidental [r1]"
    ],
    signs: [
      "Tenderness over the greater tuberosity and subacromial region",
      "Painful, restricted active elevation and external rotation, with a painful arc in some people",
      "Passive range often painful at end range in the resorptive phase; true stiffness suggests capsular involvement [r9]",
      "Pain-limited resisted abduction and external rotation, without a lag sign unless the cuff is torn",
      "Warmth or swelling is uncommon; if marked, consider infection or other crystal disease",
      "Shoulder hitching and guarding of the arm when the shoulder is acutely painful"
    ]
  },

  assessment: {
    subjective: [
      "Onset: sudden severe pain without injury (typical of the resorptive phase) versus gradual activity-related pain",
      "Night and rest pain, sleep disturbance and radiation to the lateral forearm [r3]",
      "Age, sex, diabetes, thyroid disease and previous episodes or a bilateral history [r1,r2]",
      "Previous treatments (injection, shockwave, needling) and their response",
      "Work, sport and goals, which influence the choice of treatment",
      "Red-flag screen: fever, systemic illness, trauma, neurological symptoms and chest symptoms"
    ],
    observation: [
      "Guarding and holding the arm against the trunk in an acute episode",
      "Shoulder hitching and loss of smooth scapulohumeral rhythm",
      "Swelling, redness or bruising (uncommon; consider alternative diagnoses)",
      "Muscle bulk of supraspinatus and infraspinatus fossae, which should be normal"
    ],
    palpation: [
      "Greater tuberosity and anterolateral acromion (supraspinatus footprint area)",
      "Subacromial space and bursa, which can be markedly tender in the painful phase",
      "Bicipital groove and AC joint, to exclude other pain sources"
    ],
    rangeOfMotion: [
      "Active elevation and external rotation, commonly pain-limited in the resorptive phase",
      "Passive elevation and external rotation: compare with active range; a global loss of passive external rotation suggests capsular involvement [r9]",
      "Hand-behind-back reach"
    ],
    strength: [
      "Resisted abduction and external rotation at the side, noting pain versus true weakness",
      "External and internal rotation lag signs and a drop-arm test if a cuff tear is suspected",
      "Strength may be underestimated while pain inhibition is severe; repeat after the pain settles"
    ],
    neuro: [
      "Cervical screen and upper limb neurodynamic tests, since cervical radiculopathy can mimic lateral arm pain",
      "Dermatomes, myotomes and reflexes of the upper limb",
      "Axillary nerve function (deltoid contraction, lateral shoulder sensation) if there was trauma"
    ],
    functional: [
      "Dressing, reaching overhead and behind the back",
      "Sleep position tolerance and night pain frequency",
      "Work and sport-specific tasks",
      "Patient-reported disability (see outcome measures)"
    ],
    specialTests: [
      { name: "Painful arc test", purpose: "Cuff disease in general; it does not identify calcification", procedure: "Active elevation through abduction or the scapular plane, observing for pain in the middle of the range.", positive: "Pain through the middle range of elevation that eases above and below.", lrPositive: "3.7 (95% CI 1.9–7.0)", lrNegative: "0.36 (95% CI 0.23–0.54) for a normal result", refs: ["r10"] },
      { name: "Resisted external rotation and abduction", purpose: "Pain and weakness of cuff muscle contraction; a positive external rotation resistance test was among the most accurate findings for cuff disease in general", procedure: "With the elbow at the side, resist isometric external rotation and abduction in the scapular plane and compare sides.", positive: "Pain or weakness compared with the other side. Accuracy for calcific tendinopathy has not been established; the figure in the cited review applies to rotator cuff disease generally.", refs: ["r10"] },
      { name: "Drop-arm test and lag signs", purpose: "To screen for a coexisting full-thickness cuff tear", procedure: "Passively abduct the arm to 90° and ask the patient to lower it slowly; test external and internal rotation lag.", positive: "The arm drops or lags. In the cited review the external rotation lag sign (LR+ 7.2) and the internal rotation lag sign (LR+ 5.6) were most accurate for full-thickness tears; these were not studied in calcific tendinopathy specifically.", lrPositive: "3.3 (95% CI 1.0–11) for drop-arm in cuff disease", refs: ["r10"] },
      { name: "Passive external rotation range", purpose: "To separate calcific tendinopathy from frozen shoulder", procedure: "Measure passive external rotation at the side and compare sides.", positive: "A marked, global loss of passive external rotation points to capsular restriction. No accuracy statistic was found in the sources reviewed.", refs: [] }
    ],
    clinicalRules: [
      { name: "A deposit is not the diagnosis", description: "Calcific deposits were present in 7.8% of asymptomatic adults [r1], so the deposit should be matched to the pain pattern, the stage and the examination before attributing symptoms to it." },
      { name: "Phase guides the plan", description: "Severe night pain and loss of active range suggest the resorptive phase, in which symptoms often settle spontaneously and in which analgesia and protection are priorities [r2]." },
      { name: "Always screen for a cuff tear", description: "Calcific deposits can coexist with cuff pathology and may worsen tendinopathy [r2]. A lag sign or marked weakness after the pain settles warrants imaging [r10]." }
    ],
    outcomeMeasures: [
      { name: "Constant–Murley score", use: "Used in treatment trials and reviews of calcific tendinopathy [r4,r7]" },
      { name: "Oxford Shoulder Score", use: "Primary outcome in the sham-controlled lavage trial [r6]" },
      { name: "Visual analogue or numeric pain scale", use: "Pain at rest, at night and with activity; used in trials [r4]" },
      { name: "QuickDASH or SPADI", use: "Patient-reported disability; QuickDASH was a secondary outcome in the lavage trial [r6]" },
      { name: "Radiographic or ultrasound deposit size", use: "To document resorption; resolution does not always match symptoms (clinical observation)" }
    ],
    imaging: [
      { modality: "Plain radiographs (AP views in neutral, internal and external rotation)", indication: "First-line when calcific tendinopathy is suspected or after trauma", findings: "Dense, well-defined or fluffy deposit near the greater tuberosity; deposits are also seen in asymptomatic shoulders [r1]; greater tuberosity osteolysis is an uncommon variant [r2]" },
      { modality: "Ultrasound", indication: "To characterise the deposit and plan needling or shockwave; also shows bursitis and cuff tears", findings: "Deposit shape (arc, fragmented, nodular or cystic) was associated with symptoms: arc and fragmented with mild pain, nodular with moderate to severe pain and cystic with severe pain [r2]" },
      { modality: "MRI", indication: "Not routine; when a cuff tear, bone oedema or osteolysis is suspected, or the diagnosis is uncertain", findings: "Deposit as a low-signal area, with associated oedema, bursitis and any cuff tear (clinical convention)" }
    ]
  },

  differentials: [
    { name: "Rotator cuff related shoulder pain", id: "rotator-cuff-related-shoulder-pain", distinguishing: "Gradual load-related pain without a calcific deposit on radiograph or ultrasound; calcification is a distinct, cell-mediated process [r2]." },
    { name: "Degenerative (atraumatic) rotator cuff tear", id: "degenerative-rotator-cuff-tear", distinguishing: "Older patient, gradual weakness, lag signs and a tear on imaging; may coexist with a deposit." },
    { name: "Traumatic rotator cuff tear", id: "traumatic-rotator-cuff-tear", distinguishing: "A clear injury with sudden weakness rather than sudden pain without trauma." },
    { name: "Frozen shoulder", id: "frozen-shoulder", distinguishing: "Global loss of passive range, especially external rotation; calcific tendinopathy can resemble adhesive capsulitis [r9]." },
    { name: "Long head of biceps tendinopathy", id: "long-head-biceps-tendinopathy", distinguishing: "Anterior pain over the bicipital groove with positive biceps loading tests." },
    { name: "Septic arthritis or septic bursitis", distinguishing: "Fever, hot red swollen shoulder and systemic illness; needs same-day review." },
    { name: "Cervical radiculopathy", id: "cervical-radiculopathy", distinguishing: "Neck-related pain with dermatomal symptoms and neck movements that reproduce arm pain." },
    { name: "Acromioclavicular joint pain", id: "ac-joint-injury", distinguishing: "Localised AC joint tenderness and pain on cross-body adduction." }
  ],
  redFlags: [
    "Fever, hot red swollen shoulder, systemic illness or recent injection or surgery: possible septic arthritis or bursitis, which can mimic an acute resorptive episode. Same-day medical review.",
    "Chest pain or pressure, breathlessness or sweating with shoulder pain: possible cardiac cause. Seek emergency assessment.",
    "Sudden loss of strength with a lag or drop-arm sign: possible cuff tear [r10]. Arrange early imaging and an orthopaedic opinion.",
    "Unremitting night pain, weight loss or a history of cancer: consider malignancy or referred pain. Refer for medical assessment.",
    "Arm weakness with dermatomal loss, bilateral symptoms or marked neck pain: consider cervical radiculopathy or myelopathy; refer for spinal assessment.",
    "Greater tuberosity osteolysis on imaging: an uncommon variant associated with poorer outcomes, so refer for specialist review [r2].",
    "Persistent severe symptoms despite 3 months or more of conservative care: consider ultrasound-guided intervention or surgical referral [r6,r7]."
  ],

  management: {
    principles: "Calcific tendinopathy is usually self-limiting, so management aims to control pain, protect function and keep the shoulder moving while the deposit runs its course [r2,r3]. The treatment evidence is mixed. High-energy shockwave therapy has moderate-quality GRADE evidence in one meta-analysis [r5], and a pooled analysis of randomised trials judged ESWT and ultrasound-guided needling reasonable as first-line options with surgery for refractory cases [r4]. In a large sham-controlled trial, however, ultrasound-guided lavage with corticosteroid and a corticosteroid injection alone were no better than sham at four or 24 months [r6], and a network meta-analysis found no gold standard for conservative treatment [r9]. Because most trials lack placebo controls and results improve over time in all groups, the best approach is shared decision-making based on the phase, pain severity, function and preferences. Start with education, analgesia and progressive movement and strengthening, consider minimally invasive treatment for persistent disabling pain, and reserve surgery for refractory cases [r3,r4,r7].",
    medical: [
      {
        name: "Analgesia (paracetamol, NSAIDs) and relative rest in the painful phase",
        description: "A review lists rest, NSAIDs, subacromial corticosteroid injections and shockwave therapy as the non-operative options, with non-operative treatment successful in up to 90% of patients [r3]. In vitro work suggests that NSAIDs and corticosteroids may influence tendon cell behaviour, but the clinical significance is unknown [r2]. Use the lowest effective dose and short courses.",
        evidence: "limited", recommendation: "consider", refs: ["r3", "r2"]
      },
      {
        name: "Subacromial corticosteroid injection",
        description: "In the BMJ trial, sham lavage plus 20 mg triamcinolone and lidocaine did not differ significantly from sham on the Oxford Shoulder Score at four months (difference 2.0, 95% CI −0.5 to 4.6), and no procedure was superior to sham at 24 months [r6]. A meta-analysis found that needling had not been shown to be better than ultrasound-guided subacromial corticosteroid injection [r5]. Corticosteroids can induce a fibrocartilaginous phenotype in tendon cells in vitro [r2]. It may give short-term pain relief to allow movement, but should not be repeated or relied on.",
        evidence: "conflicting", recommendation: "consider", refs: ["r6", "r5", "r2"]
      },
      {
        name: "High-energy extracorporeal shockwave therapy (ESWT)",
        description: "A meta-analysis of 20 studies (1544 participants) found moderate-quality GRADE evidence that high-energy ESWT improves pain and function compared with other interventions [r5]. A review of ESWT across tendinopathies concluded that it is effective for calcific tendinitis but not better than other options for non-calcific upper limb tendinopathy [r12]. In a pooled analysis of randomised trials the mean pain (VAS) difference was −3.83 with ESWT [r4], and Constant score improvement after one year ranged from 26.3 to 41.5 points across ESWT, needling and arthroscopy [r7]. A prospective series of 115 patients found disintegration or disappearance of deposits in 47% after one session and 77% after two at six months [r8]. Treatment protocols and equipment vary and trials had methodological flaws [r5].",
        evidence: "moderate", recommendation: "consider", refs: ["r5", "r12", "r4", "r7", "r8"]
      },
      {
        name: "Ultrasound-guided needling or lavage (barbotage)",
        description: "A pooled analysis reported a mean VAS difference of −4.83 and 67% complete radiographic resolution of the deposit after ultrasound-guided needling [r4]. A network meta-analysis of seven RCTs suggested that combined needling plus subacromial corticosteroid was superior to ESWT or injection alone [r11]. A separate network meta-analysis ranked needle aspiration among several options but found no gold standard [r9]. In contrast, the sham-controlled BMJ trial of 220 adults found no benefit of lavage plus steroid over sham at 24 months, and 143 of 218 patients needed supplementary treatment after four months [r6]. The balance of evidence is uncertain, and the procedure is usually offered after conservative care has failed.",
        evidence: "conflicting", recommendation: "consider", refs: ["r4", "r11", "r9", "r6"]
      },
      {
        name: "Arthroscopic removal of the deposit for refractory cases",
        description: "A meta-analysis of randomised trials found pooled Constant score differences of 38.35 for operative treatment compared with 22.01 for needling and 18.30 for ESWT, and complete radiographic resolution in 85% after surgery [r4]. A systematic review judged arthroscopy a very effective but more invasive secondary option, with the benefit of removing the deposit and adding subacromial decompression remaining unclear [r7]. A clinical guideline advises that patients with chronic calcific tendinitis should not be treated by subacromial decompression alone [r13]. Arthroscopic treatment is reported to give excellent results in more than 90% of people in a narrative review [r3], but trials directly comparing surgery with conservative care before failure are lacking [r4].",
        evidence: "limited", recommendation: "consider", refs: ["r4", "r7", "r13", "r3"]
      },
      {
        name: "Subacromial decompression (acromioplasty) alone",
        description: "A level V clinical guideline states that patients with chronic calcific tendinitis, workers' compensation cases and partial-thickness tears should not be treated by subacromial decompression alone, and lists calcific tendinopathy among the factors for failure of the procedure [r13]. Any surgery should address the deposit.",
        evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r13"]
      },
      {
        name: "Platelet-rich plasma and EDTA injections",
        description: "A network meta-analysis ranked platelet-rich plasma and EDTA highest by probability for function and pain respectively, but concluded that evidence on conservative approaches is lacking and no gold standard is established [r9]. These are not established treatments, and the ranking comes from a small number of trials.",
        evidence: "very-limited", recommendation: "consider", refs: ["r9"]
      }
    ],
    physio: [
      {
        name: "Education and reassurance about the natural history",
        description: "Explain that the deposit goes through phases, that the painful resorptive phase is usually self-limiting, that deposits are common in people with no pain [r1], and that symptoms often settle without intervention although some people have longer or incomplete recovery [r2,r3]. Address sleep, work and fear of movement.",
        evidence: "limited", recommendation: "recommended", refs: ["r1", "r2", "r3"]
      },
      {
        name: "Graded movement and cuff strengthening matched to the phase",
        description: "Pain-guided range of motion in the acute phase, then progressive strengthening of the cuff and scapular muscles as the pain settles, which is standard practice for cuff disorders. In the BMJ trial all participants, including the sham group, received a regimen of four home exercises [r6], so the trial does not isolate the effect of exercise, and the sources reviewed here include no trial of exercise alone for calcific tendinopathy.",
        evidence: "expert-opinion", recommendation: "recommended", refs: []
      },
      {
        name: "Pain-guided loading and activity modification",
        description: "Avoid forcing painful overhead or end-range positions in the resorptive phase, and maintain gentle movement to limit stiffness. Calcific tendinopathy can resemble adhesive capsulitis with painful stiffness [r9].",
        evidence: "expert-opinion", recommendation: "recommended", refs: []
      },
      {
        name: "Rehabilitation after needling, ESWT or surgery",
        description: "Restore range and strength once the procedure-related soreness has settled, following the proceduralist's advice. The sources reviewed here did not report standardised post-procedure rehabilitation protocols [r4,r7].",
        evidence: "expert-opinion", recommendation: "consider", refs: []
      },
      {
        name: "Aggressive stretching or manual forcing of an irritable shoulder",
        description: "Forceful end-range stretching and deep friction over a painful deposit can aggravate pain in the resorptive phase (clinical reasoning; no source reviewed tested this).",
        evidence: "expert-opinion", recommendation: "not-recommended", refs: []
      }
    ],
    education: [
      "A calcium deposit in the tendon is common, and it usually goes away on its own. The most painful stage is when the body is clearing it away.",
      "A scan showing calcium does not always explain pain, because many people have deposits without any symptoms.",
      "Pain tablets, gentle movement and a graded exercise plan are the basis of care. Injections, shockwave and needling can help some people but have mixed trial evidence.",
      "If pain is severe for months despite care, a procedure to treat the deposit can be discussed.",
      "Keep the shoulder moving within comfort to avoid stiffness, and avoid forceful stretching while it is very painful.",
      "Seek urgent advice for fever, a hot swollen shoulder, chest pain, or sudden weakness."
    ]
  },

  rehab: {
    overview: "This is a phase-guided, criteria-based programme. The painful resorptive phase often needs protection and analgesia, followed by range and then strength. No source reviewed here tested exercise alone in calcific tendinopathy, so dosages are common clinical conventions. Pain during exercise of up to about 3–4/10 that settles within 24 hours is acceptable (clinical convention). After needling, ESWT or surgery, follow the proceduralist's advice.",
    stages: [
      {
        name: "Calm the painful phase",
        timeframe: "Weeks 0–3 or while the pain is severe",
        goals: ["Reduce night and rest pain", "Maintain pain-free shoulder movement", "Educate about the natural history", "Maintain neck, elbow and hand function"],
        precautions: ["Avoid forced end-range stretching and heavy overhead loading while severe", "Seek urgent advice if fever, a hot red shoulder or sudden weakness develops"],
        exercises: [
          { name: "Pendulum swings", dosage: "3 × 30–60 s, 3 times daily", cues: "Let the arm hang and swing from the trunk, shoulder relaxed", figure: { pose: "ex-pendulum", view: "lateral" } },
          { name: "Supported assisted elevation (supine or with the other hand)", dosage: "2 × 10, 2–3 times daily within comfort", cues: "Stop at the first firm resistance; do not stretch through pain", figure: { pose: "ex-shoulder-flexion", view: "lateral" } },
          { name: "Isometric external rotation at the side", dosage: "5 × 30 s at about 30% effort, 1–2 times daily", cues: "Elbow bent and tucked, press the back of the hand into a wall", figure: { pose: "ex-shoulder-er-band", view: "lateral", props: ["wall"] } },
          { name: "Scapular setting and posture", dosage: "10 × 5 s, 3–4 times daily", cues: "Gently draw the shoulder blades back and down" },
          { name: "Sleep positioning (pillow support)", dosage: "Nightly", cues: "Support the arm in front of the body and avoid lying on the sore side" }
        ],
        progressionCriteria: ["Resting and night pain reduced (≤ 4/10)", "Pain-free or near pain-free passive elevation to at least 90°", "Tolerates isometrics with pain ≤ 3/10"]
      },
      {
        name: "Restore range of motion",
        timeframe: "Weeks 3–8",
        goals: ["Restore active elevation and external rotation", "Normalise scapulohumeral rhythm", "Prevent stiffness"],
        precautions: ["Do not provoke pain above 4/10 or pain still elevated the next morning", "If stiffness is global and painful, reassess for frozen shoulder"],
        exercises: [
          { name: "Wall slide", dosage: "3 × 8–10, 2 times daily", cues: "Keep the forearms on the wall and the shoulder blade moving", figure: { pose: "ex-wall-slide", view: "lateral", props: ["wall"] } },
          { name: "Active-assisted elevation (wand or table slide)", dosage: "2 × 10, 2–3 times daily", cues: "Lead with the good arm and avoid shrugging", figure: { pose: "ex-shoulder-flexion", view: "lateral" } },
          { name: "External rotation in the scapular plane, active-assisted", dosage: "2 × 10, 2 times daily", cues: "Wand or stick, elbow at the side, stop at tension" },
          { name: "Light active scaption raise to 90°", dosage: "2 × 10, daily, no load", cues: "Thumb up, raise in the plane of the scapula", figure: { pose: "ex-scaption", view: "lateral" } }
        ],
        progressionCriteria: ["Active elevation to near full range without hitching", "Pain ≤ 3/10 with daily tasks and sleep", "Passive external rotation within about 10° of the other side"]
      },
      {
        name: "Strengthen the cuff and scapular muscles",
        timeframe: "Weeks 8–16",
        goals: ["Restore cuff strength and endurance", "Improve scapular control", "Return to daily and light work tasks"],
        precautions: ["Increase load gradually (about 5–10% per week; clinical convention)", "Monitor for a pain flare over 24 hours"],
        exercises: [
          { name: "Band external rotation at the side", dosage: "3 × 10–15, slow tempo, 3 times per week", cues: "Elbow tucked, keep the shoulder blade set", figure: { pose: "ex-shoulder-er-band", view: "lateral", props: ["resistance-band"] } },
          { name: "Side-lying external rotation", dosage: "3 × 10–15 with a light dumbbell, 3 times per week", cues: "Elbow on the side, 2–3 s lowering", figure: { pose: "ex-shoulder-er-side-lying", view: "lateral", props: ["dumbbell", "mat"] } },
          { name: "Scaption raise", dosage: "3 × 10–12 with a light dumbbell, 3 times per week", cues: "No shrug, control the lowering", figure: { pose: "ex-scaption", view: "lateral", props: ["dumbbell"] } },
          { name: "Row (band or dumbbell)", dosage: "3 × 10–12, 3 times per week", cues: "Draw the shoulder blades back and down", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } },
          { name: "Incline or wall push-up plus", dosage: "3 × 8–12, 3 times per week", cues: "Push through the hands and protract at the top", figure: { pose: "ex-press-up", view: "lateral", props: ["wall"] } }
        ],
        progressionCriteria: ["Strength about 80% or more of the other side (dynamometry)", "Pain ≤ 2/10 with daily and light work tasks", "Full or near-full active range without hitching"]
      },
      {
        name: "Return to overhead work and sport",
        timeframe: "Months 3–6 and ongoing",
        goals: ["Restore full strength and endurance", "Return to overhead tasks, work and sport", "Establish a maintenance programme"],
        precautions: ["Build volume gradually", "Recurrence or a new painful episode should prompt reassessment rather than pushing through"],
        exercises: [
          { name: "Overhead press", dosage: "3–4 × 6–10 at 7–8/10 effort, 2–3 times per week", cues: "Press in the scapular plane, control the lowering", figure: { pose: "ex-overhead-press", view: "lateral", props: ["dumbbell"] } },
          { name: "Prone Y raise", dosage: "3 × 10–12, 2–3 times per week", cues: "Lift with the lower trapezius, not the neck", figure: { pose: "ex-prone-y", view: "lateral", props: ["bench"] } },
          { name: "Push-up progression", dosage: "3 × 8–15, 2–3 times per week", cues: "Straight trunk, protract at the top", figure: { pose: "ex-press-up", view: "lateral", props: ["mat"] } },
          { name: "Task or sport-specific overhead drills (serve, throw, lifting)", dosage: "Start at about 30% of normal volume and build over 4–8 weeks (clinical convention)", cues: "Quality first, then volume, then intensity", figure: { pose: "serve-trophy", view: "anterior" } }
        ],
        progressionCriteria: ["Passes the strength, range and function criteria (see return to sport)", "Completes task or sport simulation at full volume with pain ≤ 2/10", "Independent with a maintenance programme"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Pain ≤ 2/10 with work or sport tasks and no significant night pain",
      "Full or near-full active range equal to the other side, without hitching",
      "External rotation and abduction strength about 90% or more of the other side (clinical convention)",
      "No lag signs, and good scapular control during loaded elevation",
      "Completes task or sport-specific training at full volume without symptoms",
      "If a procedure was performed, clearance from the proceduralist",
      "No signs of stiffness suggesting a frozen shoulder"
    ],
    tests: [
      "Hand-held dynamometry for external rotation and abduction compared with the other side",
      "Active and passive range of motion (elevation, external rotation, hand-behind-back)",
      "Closed Kinetic Chain Upper Extremity Stability Test",
      "Overhead endurance and task simulation (work or sport specific)",
      "Constant score, Oxford Shoulder Score or SPADI at baseline and return"
    ]
  },

  prognosis: "The natural history is generally favourable. The deposit tends to be resorbed spontaneously and symptoms often resolve, although some people have persistent pain and reduced range at long follow-up [r2]. A review states that non-operative treatment is successful in up to 90% of patients, and that recovery may take up to several months [r3]. In a sham-controlled trial of adults with symptoms for at least three months, no procedure was superior to sham at 24 months, and 143 of 218 patients needed supplementary treatment after four months [r6]. In a 4-year prospective series of 115 patients treated with high-energy ESWT, 20% had undergone surgery and 59% of the remainder were followed up; 93% of those showed complete or partial resorption of the deposit and the Constant score rose from 45 to 85–88 [r8]. After one year, the Constant score improved by 26.3 to 41.5 points across ESWT, ultrasound-guided needling and arthroscopy in a systematic review [r7]. Recurrence rates were not reported in the sources reviewed here.",
  prevention: [
    "No established way to prevent calcific tendinopathy: the trigger is unknown [r2]",
    "Manage diabetes and thyroid disease with the usual medical care, since they are associated with calcification [r2]",
    "Maintain shoulder strength and general activity (reasonable principle; no trial evidence for prevention)",
    "Seek early assessment of sudden severe shoulder pain so that infection and cuff tears are not missed"
  ],
  clinicalPearls: [
    "Sudden, severe, unprovoked shoulder pain in a woman aged 30–60 years with a deposit on radiograph is calcific tendinopathy in its resorptive phase until proven otherwise [r1,r2].",
    "The painful phase is the resorptive phase: cystic, toothpaste-like deposits under pressure are associated with severe pain, whereas arc-shaped or fragmented deposits are associated with mild pain [r2]. A visible deposit on a radiograph does not by itself mean the shoulder is painful, since 7.8% of asymptomatic adults had one [r1].",
    "Reassure. Many cases settle with conservative care, with non-operative treatment reported as successful in up to 90% of patients, and the deposit often resorbs spontaneously [r2,r3].",
    "Be honest about the evidence for procedures. A sham-controlled trial found no benefit of lavage with corticosteroid at 24 months [r6], whereas pooled analyses of mostly uncontrolled or active-comparator studies show good outcomes [r4,r7].",
    "Calcific tendinopathy can look like frozen shoulder: check passive external rotation and monitor stiffness [r9].",
    "Do not offer subacromial decompression alone for chronic calcific tendinitis; surgery should address the deposit [r13]."
  ],
  related: ["degenerative-rotator-cuff-tear", "rotator-cuff-related-shoulder-pain", "frozen-shoulder", "traumatic-rotator-cuff-tear", "long-head-biceps-tendinopathy"],

  references: [
    { id: "r1", citation: "Louwerens JK, Sierevelt IN, van Hove RP, et al. Prevalence of calcific deposits within the rotator cuff tendons in adults with and without subacromial pain syndrome: clinical and radiologic analysis of 1219 patients. J Shoulder Elbow Surg. 2015;24(10):1588-93.", pmid: "25870115", doi: "10.1016/j.jse.2015.02.024", type: "cross-sectional", year: 2015 },
    { id: "r2", citation: "Oliva F, Via AG, Maffulli N. Physiopathology of intratendinous calcific deposition. BMC Med. 2012;10:95.", pmid: "22917025", doi: "10.1186/1741-7015-10-95", type: "narrative-review", year: 2012 },
    { id: "r3", citation: "Diehl P, Gerdesmeyer L, Gollwitzer H, et al. Calcific tendinitis of the shoulder [in German]. Orthopade. 2011;40(8):733-46.", pmid: "21814884", doi: "10.1007/s00132-011-1817-3", type: "narrative-review", year: 2011 },
    { id: "r4", citation: "Angileri HS, Gohal C, Comeau-Gauthier M, et al. Chronic calcific tendonitis of the rotator cuff: a systematic review and meta-analysis of randomized controlled trials comparing operative and nonoperative interventions. J Shoulder Elbow Surg. 2023;32(8):1746-60.", pmid: "37080421", doi: "10.1016/j.jse.2023.03.017", type: "meta-analysis", year: 2023 },
    { id: "r5", citation: "Louwerens JK, Sierevelt IN, van Noort A, et al. Evidence for minimally invasive therapies in the management of chronic calcific tendinopathy of the rotator cuff: a systematic review and meta-analysis. J Shoulder Elbow Surg. 2014;23(8):1240-9.", pmid: "24774621", doi: "10.1016/j.jse.2014.02.002", type: "meta-analysis", year: 2014 },
    { id: "r6", citation: "Moosmayer S, Ekeberg OM, Hallgren HB, et al. Ultrasound guided lavage with corticosteroid injection versus sham lavage with and without corticosteroid injection for calcific tendinopathy of shoulder: randomised double blinded multi-arm study. BMJ. 2023;383:e076447.", pmid: "37821122", doi: "10.1136/bmj-2023-076447", type: "rct", year: 2023 },
    { id: "r7", citation: "Louwerens JK, Veltman ES, van Noort A, et al. The effectiveness of high-energy extracorporeal shockwave therapy versus ultrasound-guided needling versus arthroscopic surgery in the management of chronic calcific rotator cuff tendinopathy: a systematic review. Arthroscopy. 2016;32(1):165-75.", pmid: "26382637", doi: "10.1016/j.arthro.2015.06.049", type: "systematic-review", year: 2016 },
    { id: "r8", citation: "Daecke W, Kusnierczak D, Loew M. Extracorporeal shockwave therapy (ESWT) in tendinosis calcarea of the rotator cuff: long-term results and efficacy [in German]. Orthopade. 2002;31(7):645-51.", pmid: "12219662", doi: "10.1007/s00132-002-0324-y", type: "cohort", year: 2002 },
    { id: "r9", citation: "Moggio L, Marotta N, de Sire A, et al. Efficacy of conservative approaches on pain relief and function in patients with rotator cuff calcific tendinopathy: which is the best option? A systematic review and network meta-analysis. Orthop Surg. 2025;17(11):3048-66.", pmid: "41002287", doi: "10.1111/os.70175", type: "meta-analysis", year: 2025 },
    { id: "r10", citation: "Hermans J, Luime JJ, Meuffels DE, et al. Does this patient with shoulder pain have rotator cuff disease? The Rational Clinical Examination systematic review. JAMA. 2013;310(8):837-47.", pmid: "23982370", doi: "10.1001/jama.2013.276187", type: "systematic-review", year: 2013 },
    { id: "r11", citation: "Arirachakaran A, Boonard M, Yamaphai S, et al. Extracorporeal shock wave therapy, ultrasound-guided percutaneous lavage, corticosteroid injection and combined treatment for the treatment of rotator cuff calcific tendinopathy: a network meta-analysis of RCTs. Eur J Orthop Surg Traumatol. 2017;27(3):381-90.", pmid: "27554465", doi: "10.1007/s00590-016-1839-y", type: "meta-analysis", year: 2017 },
    { id: "r12", citation: "Elgendy MH, Khalil SE, ElMeligie MM, et al. Effectiveness of extracorporeal shockwave therapy in treatment of upper and lower limb tendinopathies: a systematic review and meta-analysis. Physiother Res Int. 2024;29(1):e2042.", pmid: "37493215", doi: "10.1002/pri.2042", type: "meta-analysis", year: 2024 },
    { id: "r13", citation: "Hohmann E, Shea K, Scheiderer B, et al. Indications for arthroscopic subacromial decompression: a level V evidence clinical guideline. Arthroscopy. 2020;36(3):913-22.", pmid: "31882271", doi: "10.1016/j.arthro.2019.06.012", type: "clinical-practice-guideline", year: 2020 }
  ],

  animation: {
    title: "How calcific tendinopathy develops",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "anterior", environment: "home",
        actors: [{ id: "athlete", kit: "worker" }],
        keyframes: [
          { t: 0, pose: "stand", root: { x: 0 } },
          { t: 1.4, pose: "overhead-reach", joints: { shoulderR: 100 }, root: { x: 0 } },
          { t: 2.8, pose: "overhead-reach", joints: { shoulderR: 120 }, root: { x: 0 } },
          { t: 4.2, pose: "stand", joints: { shoulderR: 15, trunk: 8 }, root: { x: 0 } },
          { t: 5.4, pose: "stand", joints: { shoulderR: 12, trunk: 8 }, root: { x: 0 } }
        ],
        highlights: [{ t: [1.6, 6], at: "shoulderR" }],
        captions: [
          { t: 0, text: "A woman in her 40s has noticed an ache in her shoulder that has built up over weeks." },
          { t: 1.4, text: "Lifting the arm out to the side becomes painful, mostly in the middle of the range." },
          { t: 2.8, text: "There was no injury: calcium has been laid down inside a rotator cuff tendon." },
          { t: 4.2, text: "Pain peaks, often at night, when the body starts to clear the deposit away." }
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
          { t: 1.4, do: "calcify", target: "supraspinatusTendon", at: 0.8, dur: 2 },
          { t: 2.0, do: "label", target: "supraspinatusTendon", text: "Calcific deposit (formative phase)" },
          { t: 4.4, do: "inflame", target: "supraspinatusTendon", amount: 0.6, dur: 1.2 },
          { t: 4.6, do: "swell", target: "subacromialBursa", amount: 0.6, dur: 1.2 },
          { t: 4.8, do: "pain", at: "criticalZone" },
          { t: 5.2, do: "label", target: "subacromialBursa", text: "Resorptive phase: painful, inflamed bursa" },
          { t: 7.0, do: "reset", target: "supraspinatusTendon", dur: 1.6 },
          { t: 7.0, do: "reset", target: "subacromialBursa", dur: 1.6 },
          { t: 7.6, do: "label", target: "supraspinatusTendon", text: "Deposit resorbed; tendon remodels" },
          { t: 8.8, do: "camera", at: "supraspinatusFootprint", zoom: 1.6, dur: 1 }
        ],
        captions: [
          { t: 0, text: "The supraspinatus tendon runs under the acromion to the greater tuberosity." },
          { t: 1.4, text: "Cells in the tendon lay down a calcium deposit near the footprint: the formative phase." },
          { t: 3.4, text: "Deposition then stops, and the deposit rests, often with little or moderate pain." },
          { t: 4.6, text: "In the resorptive phase new vessels and immune cells attack the deposit, and pain is severe." },
          { t: 7.0, text: "As the deposit is cleared, the tendon remodels and the pain usually settles." }
        ]
      },
      {
        type: "micro", label: "Cellular process", duration: 9, tissue: "tendon-continuum",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.6, stage: "reactive" }, { t: 3.4, stage: "disrepair" }, { t: 5.2, stage: "degenerative" }, { t: 7.0, stage: "load-adaptation" }
        ],
        captions: [
          { t: 0, text: "Schematic. Healthy tendon: aligned collagen with resident tenocytes." },
          { t: 1.6, text: "Precalcific: tendon cells change, and fibrocartilage-like areas form in the matrix." },
          { t: 3.4, text: "Formative: calcium crystals collect in matrix vesicles and join into deposits." },
          { t: 5.2, text: "Resorptive: new vessels bring macrophages and giant cells that clear the deposit, painfully." },
          { t: 7.0, text: "Post-calcific: fibroblasts remodel the tendon, and loading rebuilds its capacity." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "UL2" }
};
