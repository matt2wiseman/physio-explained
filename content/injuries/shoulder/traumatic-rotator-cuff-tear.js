export default {
  id: "traumatic-rotator-cuff-tear",
  name: "Traumatic rotator cuff tear",
  shortName: "Traumatic cuff tear",
  aka: ["acute rotator cuff tear", "traumatic rotator cuff rupture", "acute-on-chronic rotator cuff tear", "torn rotator cuff", "full-thickness rotator cuff tear", "rotator cuff avulsion"],
  region: "shoulder",
  tissues: ["tendon", "bone"],
  onset: "acute",
  mechanismType: ["fall", "traction", "contact"],
  populations: ["adults in their 50s (mean about 55 years in one systematic review)", "men", "older adults after a fall or shoulder dislocation", "younger people after high-energy trauma"],
  sports: ["rugby union", "australian football", "judo", "wrestling", "skiing", "weightlifting"],
  urgency: "urgent",
  summary: "A sudden tear of one or more rotator cuff tendons after a fall or forceful pull, with immediate pain and weakness. It may be a new tear or an acute-on-chronic extension of a degenerate tendon.",
  keyFacts: [
    { label: "Typical recovery", value: "Months: about 6–12 months after repair (clinical convention); non-operative recovery is slower and less predictable for large tears" },
    { label: "Return to sport", value: "Criteria-based; commonly not before about 6 months after repair, and 9–12 months for overhead or contact sport (clinical convention)" },
    { label: "Key test", value: "External rotation lag sign (LR+ 7.2) and internal rotation lag sign (LR+ 5.6) for full-thickness tears" },
    { label: "Imaging", value: "Ultrasound or MRI: sensitivity and specificity over 0.90 for full-thickness tears" },
    { label: "Peak age", value: "Mean about 55 years (systematic review of traumatic tears), largely male" },
    { label: "Mechanism", value: "Fall onto the arm most common; subscapularis involved in 78% in the same review" }
  ],
  overview: "A traumatic rotator cuff tear begins with an identifiable injury such as a fall, a forceful pull on the arm or a shoulder dislocation. In a systematic review of nine studies, the average age was 54.7 years, the patients were largely male, and the commonest mechanism was a fall onto an outstretched arm. Supraspinatus was torn in 84% of shoulders, infraspinatus in 39% and subscapularis in 78%, and 42% of tears were over 5 cm [r1]. Because cuff abnormality is common with age, rising from 9.7% in people aged 20 or younger to 62% in those aged 80 or older [r2], many acute tears are probably acute-on-chronic extensions of a degenerate tendon rather than injuries to a healthy one.\n\nSudden weakness after a fall should prompt testing for a full-thickness tear: external rotation and internal rotation lag signs are the most accurate findings [r3], and ultrasound and MRI are both highly accurate for full-thickness tears [r4]. After a shoulder dislocation, persistent pain or weakness in people over 40 often indicates a concomitant cuff tear [r5].\n\nThe evidence for treatment is uncertain and largely does not come from traumatic tears. Trials of repair versus exercise included mostly small degenerative tears and may not apply to traumatic tears [r6]. For acute tears, an older small series reported the best functional results when repair occurred within 3 weeks [r7], but a systematic review found insufficient data to recommend early repair firmly [r1]. A clinical practice guideline considers surgery appropriate for selected patients with a full-thickness tear [r8]. The practical message is early assessment, early imaging when weakness is more than pain-limited, and a shared decision between rehabilitation and repair, with physiotherapy central in either pathway.",

  epidemiology: {
    text: "In a systematic review of nine studies of traumatic cuff tears, the mean age was 54.7 years (range 34–61) and patients were largely male; the most common mechanism was a fall onto an outstretched arm, with the mean time to surgery 66 days [r1]. Rotator cuff abnormalities become much more common with age, from 9.7% in people aged 20 or younger to 62% in those aged 80 or older, and they are similarly common whether or not people have symptoms or have had a dislocation, so it is often difficult to tell when an abnormality is new [r2]. Rotator cuff tears are an important cause of persistent pain and weakness after shoulder dislocation, particularly in contact or overhead athletes, people older than 40 years and those with nerve injury [r5]. In a series of young patients under 24 years with first-time anterior dislocation, there were no rotator cuff tears at arthroscopy [r9].",
    riskFactors: {
      intrinsic: [
        "Age over about 40–50 years, when underlying tendon degeneration is common [r2]",
        "Male sex: traumatic tears were largely in men [r1]",
        "Pre-existing tendinopathy or an asymptomatic tear that is then extended by injury [r2]",
        "Shoulder dislocation after the age of 40 years [r5]",
        "Nerve injury with a dislocation (associated with concomitant cuff tears) [r5]"
      ],
      extrinsic: [
        "A fall onto the outstretched or abducted arm [r1]",
        "A forceful pull or sudden heavy eccentric load on the arm (for example catching a falling load or grabbing a rail)",
        "Contact and collision sports, and overhead or throwing athletes with a dislocation [r5]",
        "High-energy trauma in younger people, in whom cuff tears are uncommon [r9]"
      ]
    }
  },

  mechanism: {
    summary: "A traumatic tear usually follows a fall onto the outstretched or abducted arm, or a sudden forceful pull, in which the cuff tendons are overloaded eccentrically while the arm is abducted and externally rotated [r1]. The load exceeds the tensile capacity of the tendon, which is often already degenerate. The failure typically starts in the supraspinatus near its footprint on the greater tuberosity and can extend posteriorly to infraspinatus and anteriorly to the rotator interval and subscapularis.",
    sequence: [
      "A fall, slip or forceful pull loads an arm that is abducted and often externally rotated.",
      "The cuff muscles contract eccentrically to resist the load, but the force exceeds the tensile capacity of the tendon, especially a tendon already degenerate.",
      "Fibres fail near the supraspinatus footprint (the 'critical zone'), producing a partial or full-thickness tear or an avulsion from the greater tuberosity.",
      "The tear can extend posteriorly into infraspinatus and anteriorly through the rotator interval into subscapularis, which was torn in 78% of shoulders in one review [r1].",
      "The muscle pulls the torn tendon end medially (retraction), bleeding fills the joint and bursa, and the person feels sudden pain and immediate weakness.",
      "If a large tear is not repaired, the cuff loses its ability to centre the humeral head, and tears can enlarge with time, particularly full-thickness tears [r10]."
    ],
    variants: [
      { name: "Acute tear in a previously healthy tendon", description: "Uncommon, higher energy injury, mostly in younger people, sometimes with avulsion from the greater tuberosity. Cuff tears are rare in young patients after dislocation [r9]." },
      { name: "Acute-on-chronic extension of a degenerate tear", description: "A previously quiet or mildly symptomatic degenerate tendon or small tear is extended by a fall or forceful movement. Age-related cuff abnormality is common [r2]." },
      { name: "Tear with shoulder dislocation (age over 40)", description: "Persistent pain or weakness after dislocation often indicates a concomitant cuff tear, especially in people over 40 years or with nerve injury [r5]." },
      { name: "Isolated subscapularis or anterior tear", description: "Follows forced external rotation or extension of an adducted or abducted arm, with anterior shoulder pain and weak internal rotation. Subscapularis was torn in 78% of traumatic tears in one review [r1]." },
      { name: "Greater tuberosity avulsion fracture", description: "The bony equivalent of a supraspinatus or infraspinatus tear, seen on radiograph, often after a fall or dislocation." }
    ]
  },

  anatomy: {
    text: "The rotator cuff comprises supraspinatus, infraspinatus, teres minor and subscapularis. Their tendons blend into a sleeve around the humeral head and insert on the greater tuberosity (supraspinatus, infraspinatus, teres minor) and the lesser tuberosity (subscapularis). Together they compress and centre the humeral head in the glenoid during elevation, balancing the deltoid's superior pull. The supraspinatus tendon passes beneath the acromion and coracoacromial ligament and is separated from them by the subacromial–subdeltoid bursa. The supraspinatus footprint and the adjacent 'critical zone' are the commonest sites of failure. The long head of biceps tendon runs through the rotator interval between supraspinatus and subscapularis.",
    structures: [
      { name: "Supraspinatus tendon", role: "Abduction and humeral head compression; involved in 84% of traumatic tears in one review [r1]" },
      { name: "Infraspinatus and teres minor", role: "External rotation and posterior stability; infraspinatus was torn in 39% of traumatic tears [r1]" },
      { name: "Subscapularis tendon", role: "Internal rotation and anterior stability; torn in 78% of traumatic tears in the same review [r1]" },
      { name: "Rotator interval and long head of biceps", role: "Transmits the biceps tendon, binds supraspinatus to subscapularis and is a path for tear extension" },
      { name: "Greater and lesser tuberosities", role: "Cuff attachment sites (footprints); avulsion fractures can occur here" },
      { name: "Subacromial–subdeltoid bursa", role: "Gliding surface over the cuff; fills with blood and inflames after an acute tear" }
    ]
  },

  pathophysiology: {
    tissueDamage: "In an acute traumatic tear, tendon fibres fail under eccentric overload near the footprint of supraspinatus, either through a weak, degenerate area or by avulsion from the greater tuberosity. The tear may be partial or full-thickness, and extends along the tendon or into neighbouring tendons: in a systematic review of traumatic tears, supraspinatus was involved in 84%, infraspinatus in 39% and subscapularis in 78%, with 22% under 3 cm, 36% between 3 and 5 cm and 42% over 5 cm [r1]. Cuff degeneration is common with age even in asymptomatic people [r2], so an acute event is often superimposed on a tendon that already had a structural weakness.\n\nAfter the tear, the muscle pulls the tendon edge medially, and the muscle atrophies and accumulates fat if the cuff is not loaded. In a retrospective MRI study of 59 non-operatively treated symptomatic tears (mean age 58.8 years), tears progressed in size more often when followed for over 18 months (48% versus 19%), more often in full-thickness than partial-thickness tears (52% versus 8%), and more often in patients over 60 (54% versus 17%); atrophy was seen in 24% of full-thickness tears, and fatty infiltration was associated with progression [r10]. This is the biological reason that a large traumatic tear with acute weakness is assessed early.",
    structures: [
      { name: "Supraspinatus tendon (footprint and critical zone)", effect: "Fibre failure or avulsion from the greater tuberosity; torn in 84% of traumatic tears in one review [r1]" },
      { name: "Subscapularis tendon", effect: "Frequently torn in traumatic tears (78%) and easily missed [r1]" },
      { name: "Infraspinatus tendon", effect: "Torn in 39% as the tear extends posteriorly [r1]" },
      { name: "Long head of biceps and rotator interval", effect: "Tear extension through the interval can destabilise the biceps tendon and cause anterior pain" },
      { name: "Greater tuberosity", effect: "Avulsion fracture, or bruising from the injury" },
      { name: "Subacromial–subdeltoid bursa and joint", effect: "Haemarthrosis and bursal bleeding with inflammation and pain" }
    ],
    muscles: [
      { name: "Supraspinatus and infraspinatus", effect: "Pain inhibition and true loss of force transmission; atrophy and fatty infiltration may follow if the tear is not addressed, and atrophy was seen in 24% of full-thickness tears [r10]" },
      { name: "Subscapularis", effect: "Weak internal rotation and belly-press; reduced anterior stability" },
      { name: "Deltoid and upper trapezius", effect: "Compensatory overactivity and shoulder hitching on elevation" },
      { name: "Scapular stabilisers", effect: "Altered recruitment and scapular position with pain and weakness" }
    ],
    cellular: [
      { phase: "Haemorrhage and inflammation", timing: "Days 0–7", description: "Bleeding into the joint and bursa, platelet plug, then neutrophils and macrophages clear debris from the torn tendon." },
      { phase: "Proliferation", timing: "Weeks 1–6", description: "Fibroblasts and new capillaries lay down disorganised type III collagen. Tendon-to-bone healing after repair is slow and weak at this stage, and the repair is protected." },
      { phase: "Remodelling", timing: "Weeks 6–52", description: "Collagen is slowly replaced by aligned type I fibres along lines of load. Healing is often incomplete, and retears can occur after repair [r11]." },
      { phase: "Muscle changes if unrepaired or retorn", timing: "Months", description: "Progressive atrophy and fatty infiltration of the torn muscle. Atrophy was seen in 24% of full-thickness tears and none of the partial-thickness tears, and tear progression was more likely over 60 years of age [r10]." }
    ],
    systems: [
      { system: "Nervous system", effect: "Acute nociceptive pain with night pain; in larger retracted tears, traction or compression of the suprascapular nerve may contribute (proposed). Concomitant nerve injury should be screened after dislocation [r5]" },
      { system: "Vascular", effect: "Haemarthrosis and bursal bleeding; reduced tendon vascularity with age may limit healing capacity (proposed)" },
      { system: "Musculoskeletal chain", effect: "With a large tear, loss of the force couple allows the humeral head to migrate superiorly and the scapula to compensate with hitching" },
      { system: "Psychological", effect: "Sudden loss of function, fear of re-injury and uncertainty about surgery affect mood, sleep and engagement with rehabilitation" },
      { system: "Ageing", effect: "Cuff abnormality is common in ageing even without symptoms [r2], and affects healing and the decision between repair and rehabilitation" }
    ]
  },

  grading: {
    system: "Descriptive classification by depth and size (no single universally accepted system)",
    grades: [
      { grade: "Partial-thickness tear", description: "Articular-sided, bursal-sided or intratendinous tear that does not pass completely through the tendon. Commonly graded by depth.", prognosis: "In an MRI follow-up of non-operatively treated tears, 8% of partial-thickness tears increased in size versus 52% of full-thickness tears [r10]." },
      { grade: "Full-thickness, small to medium (under 3 cm)", description: "Complete tear through the tendon thickness, limited to supraspinatus or the supraspinatus and part of infraspinatus; 22% of traumatic tears in one review were under 3 cm [r1].", prognosis: "Often repairable with good tendon quality; the optimal management in traumatic tears is uncertain [r1]." },
      { grade: "Full-thickness, large (3–5 cm)", description: "Involves more than one tendon (for example supraspinatus and infraspinatus, or supraspinatus and subscapularis); 36% of traumatic tears in one review [r1].", prognosis: "Early orthopaedic review is advised, especially with acute weakness." },
      { grade: "Massive (over 5 cm or two or more tendons)", description: "Large retracted tear, often with subscapularis involvement; 42% of traumatic tears in one review were over 5 cm [r1].", prognosis: "Higher risk of fatty infiltration, superior head migration and pseudoparalysis; repair may not be possible." },
      { grade: "Muscle quality modifier (fatty infiltration and atrophy)", description: "The degree of fatty infiltration and atrophy on MRI or ultrasound is assessed separately from tear size.", prognosis: "Fatty infiltration was associated with progression in tear size [r10]." }
    ]
  },

  timeframes: {
    summary: "Timing of repair matters most in the first weeks for acute full-thickness tears, although the evidence is old and limited. A small series reported best function when repair was done within 3 weeks [r7], and a systematic review reported a mean time to surgery of 66 days with insufficient data to recommend early repair firmly [r1]. Recovery after repair takes many months, and the phases below are typical clinical ranges.",
    healing: [
      { phase: "Acute: protect, assess and decide", startDay: 0, endDay: 21, description: "Pain control, protection and early imaging. Decide between repair and rehabilitation. Repair within about 3 weeks was associated with the best function in a small old series [r7]." },
      { phase: "Tendon proliferation (protected)", startDay: 7, endDay: 56, description: "Fibroblast proliferation. After repair, the tendon is protected in a sling with progressive passive and then active-assisted motion." },
      { phase: "Remodelling and strength", startDay: 42, endDay: 365, description: "Collagen remodelling with progressive strengthening and return to function." }
    ],
    milestones: [
      { label: "Decision on repair versus rehabilitation", day: 21, note: "Earlier is better if repair is planned [r7]" },
      { label: "Mean time to surgery in one systematic review", day: 66, note: "Range 3 to 48 weeks [r1]" },
      { label: "Sling weaned after repair", day: 42, note: "Typical; follow the surgeon's protocol" },
      { label: "Active elevation restored", day: 90 },
      { label: "Return to light overhead work", day: 180 },
      { label: "Return to overhead or contact sport", day: 270, note: "Criteria-based, commonly 9–12 months" }
    ],
    returnToSport: "Criteria-based. After repair, commonly not before about 6 months for non-overhead activity and 9–12 months for overhead or contact sport (clinical conventions); confirm with the surgeon, because tear size, tendon quality and repair integrity influence timing."
  },

  clinicalPresentation: {
    symptoms: [
      "Sudden shoulder pain after a fall, forceful pull or dislocation, sometimes with a tearing sensation",
      "Immediate or rapidly developing weakness, with difficulty lifting the arm away from the body",
      "Night pain and pain lying on the affected side",
      "Bruising down the arm after a few days",
      "Anterior shoulder pain and weak internal rotation if subscapularis is torn",
      "Pre-injury shoulder pain or a degenerate shoulder history in acute-on-chronic tears"
    ],
    signs: [
      "Weak active elevation and external rotation that is more than pain-limited",
      "Positive external rotation or internal rotation lag sign, or a drop-arm sign, in a full-thickness tear [r3]",
      "Painful arc and weakness on resisted abduction and external rotation",
      "Passive range preserved (unless stiffness or pain limits it)",
      "Shoulder hitching and compensation on attempted elevation",
      "Later: wasting of supraspinatus and infraspinatus fossae, and superior migration of the head in large tears"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism: fall onto the arm, forceful pull, dislocation, or heavy lifting, and the arm position at the time",
      "Immediate versus delayed onset of weakness and inability to lift the arm",
      "Previous shoulder pain, tendinopathy, injections or known cuff tears (acute-on-chronic)",
      "Age, dominant arm, occupation, sport and goals",
      "Neurological symptoms, and whether the shoulder was dislocated and reduced",
      "Red-flag screen: chest symptoms, fever, weight loss, other trauma"
    ],
    observation: [
      "Bruising, swelling and deformity",
      "Wasting of supraspinatus and infraspinatus fossae (usually later)",
      "Scapular position and compensatory hitching during elevation",
      "Arm posture and willingness to elevate"
    ],
    palpation: [
      "Greater tuberosity and supraspinatus footprint tenderness",
      "Anterior shoulder and bicipital groove (subscapularis and biceps)",
      "Posterior shoulder (infraspinatus)",
      "AC joint, clavicle and proximal humerus to exclude fracture"
    ],
    rangeOfMotion: [
      "Active elevation, external rotation and internal rotation compared with passive range; a large difference points to a tear",
      "Passive range of motion: should be largely preserved; marked loss suggests stiffness (see frozen shoulder)",
      "Hand-behind-back reach for subscapularis function"
    ],
    strength: [
      "Resisted external rotation (infraspinatus) and abduction (supraspinatus) at the side, noting pain versus weakness; a positive external rotation resistance test was among the most accurate findings for cuff disease [r3]",
      "External rotation lag sign and internal rotation lag sign",
      "Belly-press, belly-off and lift-off tests for subscapularis",
      "Drop-arm sign at 90° abduction"
    ],
    neuro: [
      "Axillary nerve: deltoid contraction and lateral shoulder sensation, especially after dislocation or in people over 40 [r5]",
      "Suprascapular nerve: wasting and external rotation weakness without a lag sign",
      "Cervical screen: neck movement, Spurling test and upper limb neurodynamic tests",
      "Distal pulses and capillary refill after significant trauma"
    ],
    functional: [
      "Ability to elevate the arm actively against gravity and hold it at 90°",
      "Hand-behind-back, overhead reach and work tasks",
      "Sleep position tolerance",
      "Patient-reported disability (see outcome measures)"
    ],
    specialTests: [
      { name: "External rotation lag sign", purpose: "Full-thickness supraspinatus or infraspinatus tear", procedure: "Passively hold the arm in near-maximal external rotation (elbow flexed at the side or in the scapular plane) and ask the patient to maintain it as you release the wrist.", positive: "The arm drifts into internal rotation (a lag).", lrPositive: "7.2 (95% CI 1.7–31)", refs: ["r3"] },
      { name: "Internal rotation lag sign", purpose: "Full-thickness subscapularis tear", procedure: "Place the hand behind the back with the elbow flexed and the hand lifted off the back by the examiner, then ask the patient to hold it there as you release it.", positive: "The hand falls back onto the back instead of staying lifted.", lrPositive: "5.6 (95% CI 2.6–12)", lrNegative: "0.04 (95% CI 0.0–0.58) for a normal result", refs: ["r3"] },
      { name: "Drop-arm test", purpose: "Cuff disease", procedure: "Passively abduct the arm to 90° and ask the patient to lower it slowly.", positive: "The arm drops or cannot be lowered smoothly.", lrPositive: "3.3 (95% CI 1.0–11)", refs: ["r3"] },
      { name: "Painful arc test", purpose: "Cuff disease in general (lag signs were more accurate for full-thickness tears) [r3]", procedure: "Active elevation through abduction or the scapular plane with observation of pain in the mid range.", positive: "Pain through the mid-range of elevation that eases above and below.", lrPositive: "3.7 (95% CI 1.9–7.0)", lrNegative: "0.36 (95% CI 0.23–0.54) for a normal result", refs: ["r3"] },
      { name: "Belly-press and belly-off tests", purpose: "Subscapularis tendon tear", procedure: "Patient presses the hand into the abdomen with the elbow in front of the trunk (belly-press); in the belly-off sign the examiner passively positions the hand off the belly and asks the patient to hold it.", positive: "Inability to keep the elbow forward or to hold the hand off the abdomen.", refs: ["r12"] }
    ],
    clinicalRules: [
      { name: "Lag signs are the most useful tear findings", description: "A positive external or internal rotation lag test was most accurate for diagnosing a full-thickness tear, whereas a positive painful arc or resisted external rotation test was most accurate for detecting cuff disease in general [r3]. The accuracy figures come from specialist-performed tests in referred patients, so generalisability to non-referred populations is unknown [r3]." },
      { name: "Weakness after dislocation", description: "Persistent pain or dysfunction after shoulder dislocation should prompt assessment of the rotator cuff, especially in contact or overhead athletes, people over 40 years, and those with nerve injury [r5]." }
    ],
    outcomeMeasures: [
      { name: "Constant–Murley score", use: "Reported after repair in the traumatic tear review (weighted mean 77) [r1]" },
      { name: "UCLA shoulder score", use: "Reported after repair in the traumatic tear review (weighted mean 30) [r1]" },
      { name: "Oxford Shoulder Score or SPADI", use: "Patient-reported pain and function" },
      { name: "Active forward elevation (degrees)", use: "Average improved from 81° to 150° after repair in the traumatic tear review [r1]" },
      { name: "Hand-held dynamometry (external rotation, internal rotation, abduction)", use: "Strength and limb symmetry before and after repair" }
    ],
    imaging: [
      { modality: "Ultrasound", indication: "First-line for suspected full-thickness tear; point-of-care and low cost", findings: "Full-thickness tear, tear size and retraction. Sensitivity and specificity were over 0.90 for full-thickness tears, and accuracy was similar whether performed by a radiologist, sonographer or orthopaedist [r4]" },
      { modality: "MRI or MR arthrography", indication: "Planning repair: tear size, retraction, subscapularis, fatty infiltration and associated pathology", findings: "Sensitivity and specificity over 0.90 for full-thickness tears; for partial tears and tendinopathy, specificity over 0.90 and sensitivity 0.67–0.83 [r4]" },
      { modality: "Plain radiographs (AP, scapular Y, axillary)", indication: "All acute traumatic shoulders, to exclude fracture or dislocation", findings: "Greater tuberosity fracture, humeral neck fracture, dislocation, superior head migration in large tears and degenerative change" }
    ]
  },

  differentials: [
    { name: "Degenerative (atraumatic) rotator cuff tear", id: "degenerative-rotator-cuff-tear", distinguishing: "Gradual onset without a clear injury, usually older, often bilateral, and sometimes asymptomatic." },
    { name: "Rotator cuff related shoulder pain", id: "rotator-cuff-related-shoulder-pain", distinguishing: "Painful arc and pain-limited weakness without a lag sign or sudden loss of function [r3]." },
    { name: "Anterior shoulder dislocation", id: "anterior-shoulder-dislocation", distinguishing: "Obvious deformity and loss of external rotation until reduced; may coexist with a cuff tear, especially over 40 years [r5]." },
    { name: "Proximal humerus fracture", id: "proximal-humerus-fracture", distinguishing: "Bony tenderness, deformity, crepitus and extensive bruising; confirmed on radiograph or CT." },
    { name: "Proximal (long head) biceps rupture", id: "proximal-biceps-rupture", distinguishing: "Popeye deformity of the biceps with relatively preserved cuff function." },
    { name: "Pectoralis major rupture", id: "pectoralis-major-rupture", distinguishing: "Chest and axillary bruising and loss of the anterior axillary fold after forced abduction or extension." },
    { name: "Acromioclavicular joint injury", id: "ac-joint-injury", distinguishing: "Pain and step deformity at the AC joint after a fall on the point of the shoulder." },
    { name: "Cervical radiculopathy or brachial neuritis", id: "cervical-radiculopathy", distinguishing: "Neck-related pain with dermatomal signs and myotomal weakness rather than lag signs." }
  ],

  redFlags: [
    "Sudden inability to lift the arm after a fall or pull, or a positive lag or drop-arm sign: possible acute full-thickness cuff tear. Arrange early imaging (ultrasound or MRI) and an orthopaedic opinion in days, not weeks, because repair outcomes were best within about 3 weeks in an old small series [r7].",
    "Persistent pain or weakness after a shoulder dislocation, especially in people over 40 years or with nerve injury: probable cuff tear. Image the cuff and refer [r5].",
    "Fracture on radiograph (greater tuberosity displaced, humeral neck, glenoid) or an unreduced dislocation: refer to the emergency department for imaging and orthopaedic assessment.",
    "Axillary nerve injury (deltoid weakness, lateral shoulder numbness), brachial plexus injury or a vascular deficit (cold, pale or pulseless hand): urgent medical assessment; these are more frequent with significant trauma or dislocation.",
    "Chest pain or pressure, breathlessness or sweating with shoulder pain: possible cardiac cause. Seek emergency assessment.",
    "Fever, a hot red swollen shoulder, or wound drainage after injection or surgery: infection. Same-day medical review.",
    "After repair: sudden loss of function or a 'pop' during rehabilitation suggests a retear. Contact the surgeon and stop loading until reviewed."
  ],

  management: {
    principles: "Assess early. A suspected acute full-thickness tear with sudden weakness should be imaged promptly and discussed with an orthopaedic surgeon, because the older evidence suggests better function with earlier repair [r7], although a systematic review found insufficient data for a firm recommendation [r1]. Surgery is considered appropriate for selected patients with a full-thickness tear [r8]. In contrast, trials of repair versus exercise were done in mostly small degenerative tears, found little or no clinically important benefit of surgery over non-operative care at one year, and may not apply to traumatic tears, large subscapularis tears or young people [r6]. Partial-thickness tears and small tears in lower-demand patients can be managed with a structured exercise program with monitoring. Share the uncertainty with the patient, and tailor the decision to age, demand, tear size and muscle quality. Rehabilitation, before or after repair, is progressive and criteria-based.",
    medical: [
      {
        name: "Early imaging and orthopaedic assessment for suspected acute full-thickness tear",
        description: "Image with ultrasound or MRI, both of which have sensitivity and specificity over 0.90 for full-thickness tears [r4], and refer early if weakness is more than pain-limited. Early referral keeps the repair option open.",
        evidence: "limited", recommendation: "recommended", refs: ["r4", "r7"]
      },
      {
        name: "Surgical repair of acute traumatic full-thickness tears (selected patients)",
        description: "In a small older series of 37 patients, active abduction averaged 168° with repair within 3 weeks, compared with 126° at 3–6 weeks and 129° at 6–12 weeks, and the authors concluded early repair afforded the best opportunity for maximal recovery [r7]. A systematic review of traumatic tears reported average active elevation improving from 81° to 150° after surgery, but concluded that insufficient data prevent a firm recommendation for early repair [r1]. The clinical practice guideline considers surgery appropriate for selected patients with a full-thickness tear [r8]. Candidates include younger, active people, acute weakness, larger tears and subscapularis involvement.",
        evidence: "limited", recommendation: "consider", refs: ["r7", "r1", "r8"]
      },
      {
        name: "Non-operative management for partial-thickness or small tears and for people unsuitable for surgery",
        description: "A Cochrane review of trials in mostly small degenerative full-thickness tears found moderate-certainty evidence that surgery probably provides little or no improvement in pain compared with exercise at one year (0.87 points better on a 0–10 scale), and low-certainty evidence for a small function difference. The authors cautioned that this may not apply to traumatic tears [r6]. Monitor for progression: tears progressed in size more often if full-thickness, in patients over 60 and with fatty infiltration [r10].",
        evidence: "limited", recommendation: "consider", refs: ["r6", "r10"]
      },
      {
        name: "Simple analgesia and short-term sling for comfort",
        description: "Paracetamol or NSAIDs and a sling for a few days for comfort, with early gentle movement. Avoid prolonged immobilisation.",
        evidence: "expert-opinion", recommendation: "consider", refs: []
      },
      {
        name: "Repair of an associated cuff tear after dislocation",
        description: "In a systematic review of level III and IV studies, surgical repair improved pain relief and patient satisfaction compared with non-operative management in patients with a cuff tear after dislocation, and repair with capsulolabral repair helped restore stability [r5].",
        evidence: "limited", recommendation: "consider", refs: ["r5"]
      }
    ],
    physio: [
      {
        name: "Progressive, criteria-based rehabilitation (non-operative or after repair)",
        description: "Structured stages from protected motion to strengthening and return to function. The optimal post-operative protocol is unclear: a meta-analysis of 20 randomised trials (1841 patients) found substantial variation in rehabilitation programmes and most trials at high or unclear risk of bias [r13]. Follow the surgeon's protocol after repair.",
        evidence: "limited", recommendation: "recommended", refs: ["r13"]
      },
      {
        name: "Early motion versus immobilisation after repair",
        description: "Evidence conflicts. A systematic review of overlapping meta-analyses found no meta-analysis showing immobilisation to be superior to early motion, that early motion improves range of motion, but that the best available evidence suggests it increases retear risk, and that tear size may guide the protocol [r11]. A meta-analysis of 20 randomised trials found early rehabilitation improved shoulder flexion (for example mean difference 8.45 at three months) with no statistically significant increase in retear (odds ratio 1.05, 95% CI 0.64–1.75) and few differences in pain or function [r13]. Choose a protocol with the surgeon, using tear size and tissue quality.",
        evidence: "conflicting", recommendation: "consider", refs: ["r11", "r13"]
      },
      {
        name: "Pre-operative and non-operative strengthening, scapular control and education",
        description: "Restore passive range, scapular control and the strength of intact cuff and deltoid. In rotator cuff related shoulder pain, a graduated exercise approach confers at least equivalent benefit to surgery for partial-thickness tears and atraumatic full-thickness tears, but this is not established for traumatic tears [r14].",
        evidence: "limited", recommendation: "consider", refs: ["r14"]
      },
      {
        name: "Resisted or heavy active loading of a repaired tendon in the early protected phase",
        description: "Avoid resisted active loading until the surgeon's protocol allows it. Early motion may increase the risk of retear in some evidence [r11], although other meta-analyses found no increase [r13]. Loading too early is a recognised risk to repair integrity.",
        evidence: "limited", recommendation: "not-recommended", refs: ["r11", "r13"]
      },
      {
        name: "Education, load management and reassurance",
        description: "Explain the tear, the uncertain timing and evidence, expected recovery, protection of the repair, and warning signs of retear. Address fear of movement and sleep.",
        evidence: "expert-opinion", recommendation: "recommended", refs: []
      }
    ],
    education: [
      "A cuff tear after a fall or pull is a real injury, and early assessment helps keep the options open. If the weakness is more than pain, tell your clinician promptly.",
      "Many cuff changes on scans are age-related and do not cause pain, but a sudden injury with loss of strength needs proper assessment.",
      "Some tears can be managed with exercise, and some benefit from surgery. The evidence for traumatic tears is limited, so the choice depends on your tear, age, work and goals.",
      "If you have surgery, the tendon needs time to heal: follow the sling and exercise plan closely, because loading too early risks the repair.",
      "Recovery takes many months, and strength returns slowly. Steady progress and consistency matter more than speed.",
      "Seek urgent advice for a sudden loss of function after repair, new numbness, fever or a hot swollen shoulder."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based. After repair, follow the surgeon's protocol for sling use and movement limits, which vary with tear size and tissue quality; the evidence on early versus delayed motion is conflicting [r11,r13]. For non-operative treatment, the same stages apply but start earlier and move faster through range. The dosages below are common clinical conventions, not trial-derived prescriptions, and are for rehabilitation after repair unless stated.",
    stages: [
      {
        name: "Protect and restore passive motion",
        timeframe: "Weeks 0–6 after repair (weeks 0–2 if non-operative)",
        goals: ["Protect the repair or injured tendon", "Control pain and swelling", "Maintain elbow, wrist and hand function", "Restore passive range within the surgeon's limits"],
        precautions: ["No active lifting or resisted movement of the repaired tendon until cleared", "Respect the surgeon's limits for passive elevation and external rotation", "Avoid sleeping on the operated side", "Report sudden pain, a 'pop' or loss of function"],
        exercises: [
          { name: "Pendulum swings", dosage: "3 × 30–60 s, 3–4 times daily (if permitted)", cues: "Let the arm hang and swing from the trunk", figure: { pose: "ex-pendulum", view: "lateral" } },
          { name: "Supine passive elevation with the other hand or therapist", dosage: "2 × 10, 2–3 times daily, within limits", cues: "Relax the shoulder; stop at the first firm resistance or the surgeon's limit", figure: { pose: "ex-shoulder-flexion", view: "lateral" } },
          { name: "Elbow, wrist and hand range of motion and grip", dosage: "3 × 15, hourly while awake", cues: "Keep the shoulder relaxed" },
          { name: "Scapular setting and posture", dosage: "10 × 5 s, 3–4 times daily", cues: "Gently draw the shoulder blades back and down; avoid shrugging" }
        ],
        progressionCriteria: ["Pain controlled (≤ 3/10 at rest)", "Passive elevation within the surgeon's target range", "Surgeon's clearance to start active-assisted motion"]
      },
      {
        name: "Active-assisted to active motion",
        timeframe: "Weeks 6–12 after repair",
        goals: ["Restore active range of motion", "Normalise scapulohumeral rhythm", "Wean the sling and resume light daily tasks", "Begin submaximal isometrics when cleared"],
        precautions: ["No heavy lifting, or lifting away from the body, until strengthening is cleared", "Progress active range only if pain and compensatory hitching are controlled"],
        exercises: [
          { name: "Active-assisted elevation (table slide, wand or pulley)", dosage: "2 × 10, 2–3 times daily", cues: "Lead with the good arm, avoid shrugging", figure: { pose: "ex-shoulder-flexion", view: "lateral" } },
          { name: "Wall slide", dosage: "3 × 8–10, 2 times daily", cues: "Keep the shoulder blade moving; stop short of pain", figure: { pose: "ex-wall-slide", view: "lateral", props: ["wall"] } },
          { name: "Active elevation in the scapular plane against gravity (once permitted)", dosage: "2 × 10, daily, low load", cues: "Thumb up; watch for hitching" },
          { name: "Submaximal isometric external and internal rotation at the side", dosage: "5 × 10 s at about 20–30% effort, twice daily (once cleared)", cues: "Press into the wall with the elbow bent and arm by your side", figure: { pose: "ex-shoulder-er-band", view: "lateral", props: ["wall"] } }
        ],
        progressionCriteria: ["Active elevation to near full range without hitching", "Pain ≤ 3/10 with daily activities", "Surgeon's clearance to start progressive strengthening"]
      },
      {
        name: "Progressive strengthening",
        timeframe: "Months 3–6 after repair",
        goals: ["Restore cuff and scapular strength", "Improve endurance for daily and light work tasks", "Normalise movement quality"],
        precautions: ["Increase load gradually and monitor for pain flare over 24 hours", "Avoid heavy overhead loading until strength and control are restored"],
        exercises: [
          { name: "Side-lying external rotation", dosage: "3 × 10–15 with a light dumbbell, 3 times per week", cues: "Elbow tucked; slow tempo", figure: { pose: "ex-shoulder-er-side-lying", view: "lateral", props: ["dumbbell", "mat"] } },
          { name: "Band external and internal rotation at the side", dosage: "3 × 10–15, 3 times per week", cues: "Keep the shoulder blade set", figure: { pose: "ex-shoulder-er-band", view: "lateral", props: ["resistance-band"] } },
          { name: "Scaption raise", dosage: "3 × 10–12 with a light dumbbell, 3 times per week", cues: "Raise in the scapular plane with no shrug", figure: { pose: "ex-scaption", view: "lateral", props: ["dumbbell"] } },
          { name: "Row", dosage: "3 × 10–12, 3 times per week", cues: "Squeeze the shoulder blades back and down", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } },
          { name: "Incline or wall push-up plus", dosage: "3 × 8–12, 3 times per week", cues: "Push through the hands and protract at the top", figure: { pose: "ex-press-up", view: "lateral", props: ["wall"] } }
        ],
        progressionCriteria: ["Active elevation full or near full without hitching", "Strength ≥ 80% of the other side for external rotation and abduction", "Pain ≤ 2/10 with daily and light work tasks", "Surgeon's clearance for heavier loading"]
      },
      {
        name: "Return to work or sport",
        timeframe: "Months 6–12 after repair",
        goals: ["Restore full strength and endurance", "Return to overhead and heavy work, and sport", "Establish a long-term maintenance program"],
        precautions: ["Return to overhead and contact activity only when criteria and surgeon clearance are met", "Build volume gradually (about 10–20% per week, a clinical convention)"],
        exercises: [
          { name: "Overhead press", dosage: "3–4 × 6–10 at 7–8/10 effort, 2–3 times per week", cues: "Control the lowering; press in the scapular plane", figure: { pose: "ex-overhead-press", view: "lateral", props: ["dumbbell"] } },
          { name: "Prone Y raise", dosage: "3 × 10–12, 2–3 times per week", cues: "Lift with the lower trapezius, not the neck", figure: { pose: "ex-prone-y", view: "lateral", props: ["bench"] } },
          { name: "Push-up progression", dosage: "3 × 8–15, 2–3 times per week", cues: "Straight trunk; protract at the top", figure: { pose: "ex-press-up", view: "lateral", props: ["mat"] } },
          { name: "Task or sport-specific drills (throwing, serving, lifting, overhead work)", dosage: "Start at about 25–30% of normal volume and build over 4–8 weeks (clinical convention)", cues: "Quality first, then volume, then intensity", figure: { pose: "serve-trophy", view: "anterior" } }
        ],
        progressionCriteria: ["Passes strength, range and function criteria (see return to sport)", "Completes task or sport simulation at full volume with pain ≤ 2/10", "Surgeon's clearance for unrestricted return"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Surgeon clearance after repair, with attention to tear size and repair integrity",
      "Pain ≤ 2/10 with work or sport tasks and no night pain",
      "Full or near-full active range of motion equal to the other side, with no hitching",
      "External rotation, internal rotation and abduction strength about 90% or more of the other side",
      "No lag signs, and good scapular control during loaded elevation",
      "Completes progressive task or sport-specific training without symptoms",
      "Time since repair: commonly not before about 6 months for non-overhead activity and 9–12 months for overhead or contact sport (clinical convention)"
    ],
    tests: [
      "Hand-held dynamometry for external rotation, internal rotation and abduction compared with the other side",
      "External and internal rotation lag signs and belly-press at final assessment",
      "Closed Kinetic Chain Upper Extremity Stability Test",
      "Overhead endurance and task simulation (sport or work specific)",
      "Oxford Shoulder Score, SPADI or Constant score at baseline and return"
    ]
  },

  prognosis: "After surgical repair of traumatic tears, a systematic review reported that average active forward elevation improved from 81° to 150°, with a weighted mean UCLA score of 30 and a mean Constant score of 77, concluding that repair results were acceptable [r1]. In a small older series followed for an average of 7.0 years, active abduction averaged 168° after repair within 3 weeks compared with 126° at 3–6 weeks and 129° at 6–12 weeks, although pain relief was generally satisfactory in all groups [r7]. Non-operatively treated symptomatic tears progress in size over time: after more than 18 months of follow-up, 48% had increased in size versus 19% with shorter follow-up, full-thickness tears more often than partial (52% versus 8%), and those over 60 years more often than younger patients (54% versus 17%) [r10]. Retear after repair is a recognised risk [r11], and the sources reviewed here did not give a single pooled retear rate. Repair integrity is not guaranteed, and trial evidence for traumatic tears is limited [r6].",
  prevention: [
    "Reduce falls risk in older adults (strength, balance and home safety), since falls are the commonest mechanism [r1]",
    "Maintain cuff, scapular and trunk strength to build tendon capacity, particularly in people over 40",
    "Teach safe lifting and avoid sudden forceful pulls on the arm (reasonable principle; trial evidence for prevention is limited)",
    "After a shoulder dislocation over the age of 40, screen early for a cuff tear if weakness persists [r5]",
    "Seek early assessment of persistent shoulder pain and weakness rather than waiting"
  ],
  clinicalPearls: [
    "Sudden weakness after a fall in a person in their 50s is a cuff tear until proven otherwise. Test lag signs: the external rotation lag sign had a positive likelihood ratio of 7.2 and the internal rotation lag sign 5.6 for full-thickness tears, and a normal internal rotation lag test was the most useful finding for ruling one out (negative likelihood ratio 0.04). A positive painful arc detects cuff disease in general rather than a tear specifically [r3].",
    "Ultrasound is a good first test: sensitivity and specificity were over 0.90 for full-thickness tears and accuracy was similar for radiologists, sonographers and orthopaedists [r4].",
    "If repair is on the table, do not wait for a failed trial of rehabilitation: an older series suggested the best function after repair within about 3 weeks [r7], while modern data are insufficient for a firm rule [r1].",
    "Do not extrapolate degenerative-tear trials to traumatic tears. The Cochrane review explicitly cautioned that its conclusions may not apply to traumatic tears or large subscapularis tears [r6].",
    "Always test subscapularis (belly-press, lift-off, internal rotation lag). It was torn in 78% of traumatic tears in one review [r1], and it is easily missed.",
    "After a dislocation in someone over 40, persistent weakness means a cuff tear until proven otherwise [r5]."
  ],
  related: ["degenerative-rotator-cuff-tear", "rotator-cuff-related-shoulder-pain", "anterior-shoulder-dislocation", "proximal-humerus-fracture", "proximal-biceps-rupture", "long-head-biceps-tendinopathy"],

  references: [
    { id: "r1", citation: "Mall NA, Lee AS, Chahal J, et al. An evidenced-based examination of the epidemiology and outcomes of traumatic rotator cuff tears. Arthroscopy. 2013;29(2):366-76.", pmid: "23290186", doi: "10.1016/j.arthro.2012.06.024", type: "systematic-review", year: 2013 },
    { id: "r2", citation: "Teunis T, Lubberts B, Reilly BT, et al. A systematic review and pooled analysis of the prevalence of rotator cuff disease with increasing age. J Shoulder Elbow Surg. 2014;23(12):1913-21.", pmid: "25441568", doi: "10.1016/j.jse.2014.08.001", type: "systematic-review", year: 2014 },
    { id: "r3", citation: "Hermans J, Luime JJ, Meuffels DE, et al. Does this patient with shoulder pain have rotator cuff disease? The Rational Clinical Examination systematic review. JAMA. 2013;310(8):837-47.", pmid: "23982370", doi: "10.1001/jama.2013.276187", type: "systematic-review", year: 2013 },
    { id: "r4", citation: "Roy JS, Braen C, Leblond J, et al. Diagnostic accuracy of ultrasonography, MRI and MR arthrography in the characterisation of rotator cuff disorders: a systematic review and meta-analysis. Br J Sports Med. 2015;49(20):1316-28.", pmid: "25677796", doi: "10.1136/bjsports-2014-094148", type: "diagnostic-accuracy", year: 2015 },
    { id: "r5", citation: "Gombera MM, Sekiya JK. Rotator cuff tear and glenohumeral instability: a systematic review. Clin Orthop Relat Res. 2014;472(8):2448-56.", pmid: "24043432", doi: "10.1007/s11999-013-3290-2", type: "systematic-review", year: 2014 },
    { id: "r6", citation: "Karjalainen TV, Jain NB, Heikkinen J, et al. Surgery for rotator cuff tears. Cochrane Database Syst Rev. 2019;(12):CD013502.", pmid: "31813166", doi: "10.1002/14651858.CD013502", type: "systematic-review", year: 2019 },
    { id: "r7", citation: "Bassett RW, Cofield RH. Acute tears of the rotator cuff. The timing of surgical repair. Clin Orthop Relat Res. 1983;(175):18-24.", pmid: "6839586", type: "cohort", year: 1983 },
    { id: "r8", citation: "Lafrance S, Charron M, Roy JS, et al. Diagnosing, managing, and supporting return to work of adults with rotator cuff disorders: a clinical practice guideline. J Orthop Sports Phys Ther. 2022;52(10):647-64.", pmid: "35881707", doi: "10.2519/jospt.2022.11306", type: "clinical-practice-guideline", year: 2022 },
    { id: "r9", citation: "Taylor DC, Arciero RA. Pathologic changes associated with shoulder dislocations. Arthroscopic and physical examination findings in first-time, traumatic anterior dislocations. Am J Sports Med. 1997;25(3):306-11.", pmid: "9167808", doi: "10.1177/036354659702500306", type: "cohort", year: 1997 },
    { id: "r10", citation: "Maman E, Harris C, White L, et al. Outcome of nonoperative treatment of symptomatic rotator cuff tears monitored by magnetic resonance imaging. J Bone Joint Surg Am. 2009;91(8):1898-906.", pmid: "19651947", doi: "10.2106/JBJS.G.01335", type: "cohort", year: 2009 },
    { id: "r11", citation: "Houck DA, Kraeutler MJ, Schuette HB, et al. Early versus delayed motion after rotator cuff repair: a systematic review of overlapping meta-analyses. Am J Sports Med. 2017;45(12):2911-5.", pmid: "28288280", doi: "10.1177/0363546517692543", type: "systematic-review", year: 2017 },
    { id: "r12", citation: "Hegedus EJ, Goode AP, Cook CE, et al. Which physical examination tests provide clinicians with the most value when examining the shoulder? Update of a systematic review with meta-analysis of individual tests. Br J Sports Med. 2012;46(14):964-78.", pmid: "22773322", doi: "10.1136/bjsports-2012-091066", type: "meta-analysis", year: 2012 },
    { id: "r13", citation: "Mazuquin B, Moffatt M, Gill P, et al. Effectiveness of early versus delayed rehabilitation following rotator cuff repair: systematic review and meta-analyses. PLoS One. 2021;16(5):e0252137.", pmid: "34048450", doi: "10.1371/journal.pone.0252137", type: "meta-analysis", year: 2021 },
    { id: "r14", citation: "Lewis J. Rotator cuff related shoulder pain: assessment, management and uncertainties. Man Ther. 2016;23:57-68.", pmid: "27083390", doi: "10.1016/j.math.2016.03.009", type: "narrative-review", year: 2016 }
  ],

  animation: {
    title: "How a traumatic rotator cuff tear happens",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "anterior", environment: "stairs",
        actors: [{ id: "athlete", kit: "older-adult" }],
        keyframes: [
          { t: 0, pose: "stand", root: { x: 0 } },
          { t: 1.0, pose: "overhead-reach", joints: { shoulderR: 100 }, root: { x: 0 } },
          { t: 2.2, pose: "slip", joints: { shoulderR: 130 }, root: { x: 5 }, ease: "in" },
          { t: 3.4, pose: "fall-sideways", joints: { shoulderR: 120 }, root: { x: 12 } },
          { t: 5.2, pose: "fall-sideways", root: { x: 14 } }
        ],
        forces: [
          { t: [2.0, 3.6], at: "shoulderR", dir: "down", label: "Sudden load on the abducted arm", size: "m" }
        ],
        highlights: [{ t: [2.2, 6], at: "shoulderR" }],
        impacts: [{ t: 2.5, at: "shoulderR" }],
        slowmo: [{ t: [1.9, 3.0], rate: 0.3 }],
        captions: [
          { t: 0, text: "A 55-year-old reaches up and grabs a rail as their foot slips." },
          { t: 1.0, text: "The arm is held abducted while the body weight shifts." },
          { t: 2.2, text: "Their body weight loads the arm suddenly and the cuff tendons are overloaded." },
          { t: 3.4, text: "Something gives in the shoulder, with sudden pain, and the arm will not lift." }
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
          { t: 0.9, do: "arrow", at: "supraspinatusFootprint", dir: "inferior", label: "Sudden eccentric overload", size: "m" },
          { t: 1.2, do: "stretch", target: "supraspinatusTendon", amount: 0.45, dur: 1.2 },
          { t: 2.6, do: "tear", target: "supraspinatusTendon", grade: 3, at: 0.8 },
          { t: 2.6, do: "impact", at: "criticalZone" },
          { t: 3.0, do: "label", target: "supraspinatusTendon", text: "Full-thickness tear near the footprint" },
          { t: 3.8, do: "tear", target: "subscapularisTendon", grade: 2, at: 0.7 },
          { t: 4.2, do: "label", target: "subscapularisTendon", text: "Tear can extend to subscapularis" },
          { t: 4.8, do: "bleed", target: "jointSpace" },
          { t: 5.0, do: "swell", target: "subacromialBursa", amount: 0.5 },
          { t: 5.4, do: "pain", at: "criticalZone" },
          { t: 6.2, do: "atrophy", target: "supraspinatus", amount: 0.5, dur: 2 },
          { t: 6.8, do: "label", target: "supraspinatus", text: "Muscle wasting if untreated" },
          { t: 8.2, do: "camera", at: "supraspinatusFootprint", zoom: 1.7, dur: 1 }
        ],
        captions: [
          { t: 0, text: "The supraspinatus tendon runs under the acromion and attaches to the greater tuberosity." },
          { t: 0.9, text: "A sudden eccentric load stretches the tendon beyond its capacity." },
          { t: 2.6, text: "The fibres fail near the footprint: a full-thickness tear with a retracting edge." },
          { t: 3.8, text: "The tear can extend forward through the rotator interval into subscapularis." },
          { t: 4.8, text: "Blood fills the joint and bursa, and the arm is painful and weak." },
          { t: 6.2, text: "If a large tear is left, the muscle can waste and fatty infiltration can set in." }
        ]
      },
      {
        type: "micro", label: "Tendon healing", duration: 9, tissue: "tendon",
        stages: [
          { t: 0, stage: "healthy" }, { t: 0.9, stage: "loaded" }, { t: 1.8, stage: "overload" }, { t: 2.6, stage: "failure" },
          { t: 3.5, stage: "haemorrhage" }, { t: 4.7, stage: "inflammation" }, { t: 6.0, stage: "proliferation" }, { t: 7.5, stage: "remodelling" }
        ],
        timeLabels: [{ t: 4.7, text: "Days 0–7" }, { t: 6.0, text: "Weeks 1–6" }, { t: 7.5, text: "Months 2–12" }],
        captions: [
          { t: 0, text: "Healthy tendon: aligned, crimped type I collagen with a few resident tenocytes." },
          { t: 0.9, text: "Under load the crimp straightens and the fibres stretch." },
          { t: 1.8, text: "In a degenerate tendon, weakened fibres fail at a lower load." },
          { t: 2.6, text: "Fibres rupture, leaving a gap with frayed, retracted ends." },
          { t: 3.5, text: "Torn vessels bleed into the gap." },
          { t: 4.7, text: "Inflammation: neutrophils and macrophages clear debris." },
          { t: 6.0, text: "Fibroblasts lay down disorganised collagen, and tendon-to-bone healing is slow and weak." },
          { t: 7.5, text: "Remodelling is slow and often incomplete, which is why repairs are protected and retears can occur." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "UL2" }
};
