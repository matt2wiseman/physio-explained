export default {
  id: "radial-head-fracture",
  name: "Radial head fracture",
  shortName: "Radial head fracture",
  aka: ["fracture of the radial head", "radial head and neck fracture", "Mason fracture", "proximal radius fracture", "elbow fracture after fall on outstretched hand", "radiocapitellar fracture", "radial head fracture (Mason type I to IV)"],
  region: "elbow",
  tissues: ["bone"],
  onset: "acute",
  mechanismType: ["fall", "compression"],
  populations: ["adults aged 20 to 60 years", "women after low-energy falls", "contact and collision-sport athletes", "people with osteoporosis", "people in road crashes or falls from height"],
  sports: ["football", "basketball", "cycling", "skiing", "gymnastics"],
  urgency: "urgent",
  summary: "Fracture of the radial head after a fall on the outstretched hand, causing lateral elbow pain and painful forearm rotation. Most isolated, stable fractures heal well with a sling and early movement.",
  keyFacts: [
    { label: "Typical recovery", value: "Isolated stable Mason I–II fractures treated non-operatively: mean DASH 5.8 at about 10 years, with 14% reporting stiffness and 24% some pain (100 patients)" },
    { label: "Return to sport", value: "Criteria-based; often about 6–12 weeks for a non-operatively managed stable fracture and longer after surgery (clinical convention; no validated criteria found)" },
    { label: "Key test", value: "Elbow extension test: sensitivity 96.8% and specificity 48.5% for any elbow fracture in a multicentre study of 1740 eligible adults and children; inability to extend fully means radiographs are needed" },
    { label: "Imaging", value: "Lateral radiograph at 90° of flexion for the posterior fat pad sign; with an effusion and no visible fracture, 15 of 20 adults (75%) had an occult fracture on MRI, mostly in the radial head" },
    { label: "Peak age", value: "Median age 43 years (range 13–94), with no sex predominance; women commonly injured in low-energy falls" },
    { label: "Incidence", value: "The most common elbow fracture in adults, about one-third of elbow fractures in one review; 199 radial head fractures in a 6872-patient trauma database over a year" }
  ],
  overview: "A radial head fracture is a break in the proximal articular end of the radius, usually from a fall onto an outstretched arm, and it is the commonest fracture of the elbow [r1]. In a trauma database, 285 radial head and neck fractures occurred in one year, the median age was 43 years, there was no sex predominance, women were commonly injured in low-energy falls and associated injuries were related to age, mechanism of injury and fracture complexity [r2]. The classic findings are lateral elbow pain, swelling, painful or blocked forearm rotation and an elbow effusion.\n\nThe Mason classification is used to describe the fracture. In its original 1954 form there are three types: undisplaced (type I), simple displaced (type II) and comminuted (type III) [r1, r3]. A fourth type, a radial head fracture with an elbow dislocation, is commonly added in the modified Mason classification (clinical convention; the original modification papers were not retrieved). Trials of type II fractures define them as partial articular fractures with at least 2 mm of articular step-off and less than 2 mm of gap, without dislocation, interosseous ligament injury or other fractures [r4]. A radial head fracture is not always isolated: look for associated injuries, including a collateral ligament injury, an elbow dislocation with the terrible triad [r5] and, with wrist or forearm pain, an Essex-Lopresti injury [r6].\n\nMost isolated, stable fractures (Mason I and II) do well without surgery. In 100 such patients treated non-operatively, mean DASH was 5.8 at about 10 years [r7]. Early mobilisation gave better results than a week in plaster in a 180-patient trial [r8]. For displaced Mason II fractures, the evidence is limited: one small randomised trial and a meta-analysis found no functional advantage for surgery [r9, r10]. For comminuted fractures, fixation versus arthroplasty has even weaker evidence from few trials [r11, r12].",

  epidemiology: {
    text: "In a prospective trauma database of 6872 patients, 285 fractures of the radial head (n = 199) and neck (n = 86) occurred over a year. The median age was 43 years (range 13–94), the mean age of men was younger than that of women, and there was no sex predominance. Women commonly sustained low-energy falls. Radial head fractures were associated more commonly with complex injuries by the Mason classification, and associated injuries were related to age, the mechanism of injury and fracture complexity. The authors recommended considering osteoporosis in a subset of patients [r2]. In a cohort of isolated stable Mason I and II fractures (mean age 46 years), a fall from standing height accounted for 69% of injuries and 35% of patients had a comorbidity [r7]. A review describes radial head fractures as about one-third of elbow fractures [r11].",
    riskFactors: {
      intrinsic: [
        "Age and sex pattern: the median age was 43 years, with no sex predominance, but women were commonly injured in low-energy falls [r2]",
        "Low bone density: the authors advise considering osteoporosis in people with a low-energy fracture (modifiable through bone health care) [r2]",
        "Comorbidities were present in 35% of patients with isolated stable fractures, although they were not shown to be a risk factor for fracture itself [r7]"
      ],
      extrinsic: [
        "A fall onto the outstretched hand (a fall from standing height caused 69% of injuries in one cohort) [r7, r1]",
        "Mechanism of injury was related to associated injuries [r2]; higher-energy trauma (road crashes, falls from height, sport collisions) is generally linked with more complex injuries (clinical observation)",
        "Contact, collision and wheeled sports (clinical observation; the sources reviewed did not quantify sport-specific risk)"
      ]
    }
  },

  mechanism: {
    summary: "In the usual mechanism the person falls onto the outstretched hand and an axial load travels up the forearm, driving the radial head into the capitellum (standard mechanism; it is not measured in the sources reviewed). The radial head is the lateral column of the elbow, so a high-energy or rotational version of the same fall may also dislocate the elbow or tear the collateral ligaments. Fracture type depends on the load, the forearm rotation at impact and bone quality. Women commonly sustain these in low-energy falls [r2]. Mason described the original three fracture types by displacement and comminution [r1, r3].",
    sequence: [
      "The person falls with the arm outstretched and the elbow near-straight, and the hand strikes the ground (clinical observation).",
      "Axial force passes up the forearm into the radiocapitellar joint (standard mechanism; usually a fall onto an outstretched arm [r1]).",
      "The radial head is driven against the capitellum, which loads its articular margin and neck (standard mechanism).",
      "The radial head cracks: a split or marginal fragment (Mason I or II) or a comminuted fracture (Mason III) [r1].",
      "Bleeding from the cancellous bone fills the joint (haemarthrosis); the effusion lifts the anterior and posterior fat pads on a lateral radiograph [r13].",
      "Pain and a mechanical block to rotation develop; a displaced fragment can also block forearm rotation (clinical observation).",
      "With greater force the elbow can also dislocate or the ligaments tear, and the fracture becomes part of a complex injury [r5]."
    ],
    variants: [
      { name: "Isolated, undisplaced fracture (Mason type I)", description: "A crack or minimal displacement; managed non-operatively. In a cohort of 100 isolated stable Mason I and II fractures treated non-operatively, 57 were type I [r7]." },
      { name: "Displaced partial articular fracture (Mason type II)", description: "A displaced segment, defined in the RAMBO trial as at least 2 mm of articular step-off with less than 2 mm of gap and at least one-third of the articular surface, not associated with dislocation, interosseous ligament injury or other fractures [r4]. Fractures displaced more than 4 mm or angulated more than 30° had worse outcomes in one trial [r8]." },
      { name: "Comminuted fracture (Mason type III)", description: "Multiple fragments involving the whole head; the choice between fixation, replacement or excision is contested, and the evidence is weak [r11, r12]." },
      { name: "Fracture with elbow dislocation, including the terrible triad", description: "A radial head fracture with an elbow dislocation (modified Mason type IV, clinical convention). The terrible triad is a dislocation with radial head and coronoid fractures [r5]; see elbow dislocation." },
      { name: "Essex-Lopresti injury", description: "A radial head fracture with forearm interosseous membrane and distal radioulnar joint injury, causing longitudinal forearm instability. There is no accepted definition in the literature; a radial head fracture with wrist or forearm pain should raise suspicion, and comparative radiographs and a dynamic assessment are advised [r6]." }
    ]
  },

  anatomy: {
    text: "The radial head is a disc-shaped cup that articulates with the capitellum (radiocapitellar joint) and rotates within the annular ligament against the ulna at the proximal radioulnar joint. It is a secondary stabiliser of the elbow against valgus stress and posterolateral rotatory instability, and with the interosseous membrane it shares longitudinal load between the forearm bones (standard anatomy). The posterior interosseous nerve winds around the radial neck beneath the supinator, near the surgical approach (standard anatomy); a transient palsy occurred in one of 16 patients after ORIF in one long-term series [r14]. The capitellum, radial head and joint cavity sit in a capsule whose effusion raises the fat pads seen on a lateral radiograph [r13].",
    structures: [
      { name: "Radial head and neck", role: "The proximal articular end of the radius; radial head fractures were associated more commonly with complex injuries by Mason class [r2]" },
      { name: "Capitellum and capitellar cartilage", role: "Receives load from the radial head; chondral injury can accompany the fracture (clinical observation)" },
      { name: "Annular ligament and radiocapitellar joint", role: "Holds the radial head against the ulna while allowing rotation (standard anatomy)" },
      { name: "Interosseous membrane and distal radioulnar joint", role: "Share longitudinal load; injury produces the Essex-Lopresti pattern [r6]" },
      { name: "Collateral ligaments and coronoid (terrible triad)", role: "Radial head fracture with elbow dislocation and coronoid fracture is the terrible triad [r5]" },
      { name: "Elbow capsule and fat pads", role: "A distending effusion lifts the anterior and posterior fat pads (fat pad sign) [r13]" },
      { name: "Posterior interosseous nerve", role: "Lies close to the radial neck; transient palsy occurred in one of 16 patients after ORIF in one long-term series [r14]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "The radial head is cancellous bone covered by a cap of articular cartilage. Axial load through the radiocapitellar joint produces a split, a marginal fragment or comminution (standard mechanism); the displaced fragment can disrupt the articular surface, bleed into the joint and block forearm rotation. A joint effusion with no visible fracture on radiographs usually means an occult fracture: in 20 adults with such an effusion who had MRI, 75% had an occult fracture, 86.6% of these in the radial head, 90% had marrow oedema and 15% had collateral ligament disruption; the size of the fat pad elevation did not predict a fracture [r13].\n\nHealing follows the standard bone cascade (haematoma, inflammation, soft callus, hard callus, remodelling), but the intra-articular position, limited periosteum and cartilage cover probably make fragment position matter more than callus (clinical reasoning). Displacement, hardware and prolonged stiffness are the main problems: after ORIF in one comparison there were eight cases of mild heterotopic ossification and two hardware failures, versus one mild heterotopic ossification and one complex regional pain syndrome in the non-operative group [r15]. Long-term, 14% of non-operatively treated patients reported stiffness and 24% pain [r7].",
    structures: [
      { name: "Radial head and neck", effect: "Split, marginal or comminuted fracture; fragment displacement can block rotation (standard mechanism; displacement above 4 mm or angulation above 30° worsened outcome in one trial [r8])" },
      { name: "Capitellar cartilage", effect: "Can be bruised or damaged by the same impact (clinical observation)" },
      { name: "Collateral ligaments", effect: "Disrupted in 15% of occult-fracture cases on MRI in a small series [r13]; ligament injury is part of the terrible triad [r5]" },
      { name: "Interosseous membrane and distal radioulnar joint", effect: "Injured in Essex-Lopresti injuries, which are under-detected if wrist pain is not examined [r6]" },
      { name: "Joint effusion and fat pads", effect: "Haemarthrosis lifts the fat pads on a lateral radiograph [r13]" }
    ],
    muscles: [
      { name: "Supinator and biceps", effect: "The fragment, haemarthrosis and guarding limit active forearm rotation (clinical observation)" },
      { name: "Brachioradialis, wrist extensors and flexors", effect: "Reflex guarding and disuse weaken grip and wrist control (clinical reasoning)" },
      { name: "Triceps and brachialis", effect: "Disuse and guarding limit elbow extension and flexion strength (clinical reasoning)" },
      { name: "Shoulder girdle", effect: "Stiffness and weakness develop in a sling (clinical reasoning); keep it moving" }
    ],
    cellular: [
      { phase: "Haematoma", timing: "0–2 days", description: "Bleeding from the cancellous fracture surfaces fills the joint; platelets form a clot (typical bone biology)." },
      { phase: "Inflammation", timing: "0–7 days", description: "Neutrophils and macrophages clear debris and release growth factors; pain peaks and then falls (typical bone biology)." },
      { phase: "Soft callus", timing: "Days 7–21", description: "Mesenchymal cells lay down cartilage and fibrous tissue across the fracture; protected early motion is compatible with healing in stable fractures (typical bone biology; early motion trial [r8])." },
      { phase: "Hard callus and remodelling", timing: "Weeks 3–12+", description: "Woven bone replaces soft callus and then remodels along the lines of load; cancellous radial head fractures often show little visible callus (typical biology)." }
    ],
    systems: [
      { system: "Musculoskeletal chain", effect: "Associated wrist, forearm or elbow ligament injury changes the plan; screen the distal radioulnar joint and interosseous membrane [r6]." },
      { system: "Skeletal and metabolic", effect: "A low-energy radial head fracture, particularly in women, should prompt consideration of osteoporosis [r2]." },
      { system: "Inflammatory", effect: "Haemarthrosis causes pain and stiffness; aspiration with local anaesthetic relieved pain in 92% of aspirated patients in one trial [r16]." },
      { system: "Nervous system", effect: "Posterior interosseous nerve palsy is a risk of surgery near the radial neck [r14]." },
      { system: "Psychological and social", effect: "Worse patient-reported outcomes were associated with older age, comorbidity, socioeconomic deprivation, greater displacement and compensation proceedings [r7]." }
    ]
  },

  grading: {
    system: "Mason classification (original 1954 types I–III, with the commonly added modified type IV)",
    grades: [
      { grade: "Type I: undisplaced", description: "Undisplaced or minimally displaced fracture of the radial head (Mason 1954) [r1, r3]. A common threshold for a displaced fracture is at least 2 mm of articular step-off [r4].", prognosis: "Non-operative care with early movement gives good long-term outcomes: 57 of 100 patients in a long-term series had Mason I fractures, with mean DASH 5.8 at 10 years in the type I and II group combined [r7]." },
      { grade: "Type II: displaced partial articular fracture (simple displaced)", description: "A displaced marginal or partial articular fracture, not comminuted [r1]. RAMBO defines it as a partial articular fracture with at least 2 mm of step-off, less than 2 mm of gap and at least one-third of the articular surface, with no dislocation, interosseous ligament injury or other fracture [r4].", prognosis: "Non-operative treatment is the usual option for a stable fracture; one randomised trial of 45 patients found similar function at 12 months with or without surgery [r9]. In one comparison more complications occurred in the operated group [r15]." },
      { grade: "Type III: comminuted fracture of the whole head", description: "A comminuted fracture involving the entire head (Mason 1954) [r1, r3]; the unstable or multifragmentary pattern is the usual surgical question.", prognosis: "The best operation is uncertain: a systematic review of two randomised trials gave weak evidence that arthroplasty beats ORIF [r11], and a network meta-analysis favoured arthroplasty over ORIF with metal implants but with very wide intervals [r12]." },
      { grade: "Type IV (modified): fracture with elbow dislocation", description: "Radial head fracture with elbow dislocation, added by later authors to the original classification (clinical convention; the modification papers were not retrieved). With a coronoid fracture it forms the terrible triad [r5].", prognosis: "Complications and reoperation are common in complex injuries; see elbow dislocation [r5]." }
    ]
  },

  timeframes: {
    summary: "Pain and swelling in stable isolated fractures settle over days to a few weeks, and early guided movement gave better range and function than a week of immobilisation [r8]. Union takes about 6–12 weeks (clinical convention). Function is usually excellent by 12 months: median DASH was 0.0 after surgery and 1.7 after non-operative care in a small randomised trial [r9]. At about 10 years the mean DASH was 5.8 after non-operative care [r7].",
    healing: [
      { phase: "Haematoma and inflammation", startDay: 0, endDay: 7, description: "Pain, swelling and haemarthrosis; aspiration with local anaesthetic relieved pain in 92% in one trial [r16]" },
      { phase: "Early guided motion (sling for comfort)", startDay: 2, endDay: 42, description: "Active motion started after a 2-day sling gave the best results in a three-protocol trial, better than 7 days in a cast [r8]" },
      { phase: "Soft and hard callus", startDay: 7, endDay: 84, description: "Fracture union through callus; cancellous radial head fractures may show little visible callus (typical bone biology)" },
      { phase: "Remodelling and strengthening", startDay: 42, endDay: 365, description: "Collagen and bone remodel under progressive load; patient-reported function is usually excellent by 12 months [r9]" }
    ],
    milestones: [
      { label: "Radiographs and assessment", day: 0, note: "Elbow extension test, radiographs and exclusion of associated injuries [r17]" },
      { label: "Active motion begins (sling for 2 days)", day: 2, note: "The best protocol in a three-arm trial of 180 patients [r8]" },
      { label: "Fracture position check", day: 14, note: "Repeat radiographs if displacement or a block is suspected (clinical convention)" },
      { label: "Union and progressive loading (typical)", day: 56, note: "Clinical convention; individual radiographic union varies" },
      { label: "12-month outcome", day: 365, note: "Median DASH 0.0 (operated) versus 1.7 (non-operative) in 45 patients [r9]" }
    ],
    returnToSport: "Criteria-based, not date-based. After a non-operatively managed stable fracture, many people return to full activity at about 6–12 weeks once motion, strength and pain allow (clinical convention). Contact sport is typically delayed until radiographic union and full range and strength return. After surgery or with associated injuries, return follows the surgeon's protocol and is slower. No validated return criteria were identified in the sources reviewed."
  },

  clinicalPresentation: {
    symptoms: [
      "Lateral elbow pain after a fall onto the outstretched hand, worse with forearm rotation and gripping [r1]",
      "Swelling and a feeling of fullness at the elbow from haemarthrosis (clinical observation)",
      "Difficulty fully straightening the elbow or turning the palm up and down (clinical observation)",
      "Clicking, locking or a mechanical block to rotation if a displaced fragment is present (clinical observation)",
      "Wrist or forearm pain suggests an associated Essex-Lopresti injury [r6]"
    ],
    signs: [
      "Tenderness over the radial head, just distal to the lateral epicondyle (clinical observation)",
      "Pain or a block on passive and active forearm rotation, especially in supination and pronation at 90° of flexion",
      "Inability to fully extend the elbow: the elbow extension test [r17]",
      "Joint effusion on palpation and posterior fat pad elevation on radiograph [r13]",
      "Valgus or varus laxity, instability or deformity, which indicates an associated ligament injury or dislocation [r5]"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism: fall onto the outstretched hand, sport collision or high-energy trauma [r1, r2]",
      "Pain location and its relation to forearm rotation, gripping and lifting",
      "Wrist, forearm, shoulder or neck pain, which suggests associated injuries including an Essex-Lopresti injury [r6]",
      "Locking, catching or a feeling of instability",
      "Bone health risk factors, particularly in women after a low-energy fall [r2]",
      "Hand dominance, occupation, sport, comorbidities and compensation or deprivation context, which predicted worse outcomes in one cohort [r7]"
    ],
    observation: [
      "Swelling, bruising and carrying angle compared with the other side",
      "Elbow posture and whether the patient can fully straighten the arm [r17]",
      "Skin integrity, wounds and distal circulation",
      "Wrist and forearm posture and swelling"
    ],
    palpation: [
      "Radial head: point tenderness 1–2 cm below the lateral epicondyle with the forearm rotated (clinical convention)",
      "Lateral epicondyle and collateral ligaments; medial structures for associated injuries (clinical convention)",
      "Distal radioulnar joint, wrist and mid-forearm for tenderness suggesting an Essex-Lopresti injury [r6]",
      "Olecranon and posterior joint for effusion"
    ],
    rangeOfMotion: [
      "Active flexion and extension: full extension excludes most elbow fractures but not all [r17]",
      "Active and passive pronation and supination at 90° of flexion, noting any block (soft end-feel with pain versus a hard mechanical block)",
      "Wrist and shoulder range, to screen for associated injury and stiffness"
    ],
    strength: [
      "Resisted wrist and finger movement once pain allows (not before fracture position is known)",
      "Grip dynamometry later in rehabilitation [r8]",
      "Elbow and forearm strength compared with the other side in later stages"
    ],
    neuro: [
      "Radial pulse and capillary return",
      "Sensation in the radial, median and ulnar distributions and motor function, including finger and thumb extension (posterior interosseous nerve) [r14]",
      "Document findings before treatment"
    ],
    functional: [
      "Daily tasks: carrying, opening jars, turning a key, pushing up from a chair",
      "Work and sport demands, including weight-bearing through the hand",
      "Patient-reported function: DASH, Oxford Elbow Score, Mayo Elbow Performance, Broberg and Morrey score [r9, r8, r15]"
    ],
    specialTests: [
      { name: "Elbow extension test", purpose: "Decide whether radiographs are needed after elbow injury", procedure: "Ask the patient to fully extend the injured elbow actively (compare with the other side). It tests for any elbow fracture, not only the radial head.", positive: "Unable to fully extend: the patient needs radiographs, with nearly a 50% chance of fracture. In a multicentre prospective study of 1740 eligible adults and children, full extension had a negative predictive value of 98.4% in adults and 95.8% in children; two adults with full extension had olecranon fractures needing a change of treatment [r17].", sensitivity: "96.8% (95% CI 95.0–98.2) for any elbow fracture [r17]", specificity: "48.5% (95% CI 45.6–51.4) [r17]", lrNegative: "0.03 (95% CI 0.01–0.08) in adults; 0.11 (0.06–0.19) in children [r17]", refs: ["r17"] },
      { name: "Posterior fat pad (and anterior fat pad) sign on a lateral radiograph", purpose: "Infer an elbow effusion and a likely occult fracture when no fracture line is visible", procedure: "On a true lateral radiograph at 90° of elbow flexion, look for an elevated posterior fat pad or a displaced anterior fat pad (sail sign).", positive: "In 20 adults with an effusion and no visible fracture who had MRI, 75% had an occult fracture (86.6% radial head); the size of fat pad elevation did not predict the likelihood of fracture. The series was small and no sensitivity or specificity was reported [r13].", refs: ["r13"] },
      { name: "Forearm rotation and radial head palpation", purpose: "Identify pain and a block to rotation over the radial head", procedure: "With the elbow at 90°, palpate the radial head while passively pronating and supinating the forearm.", positive: "Pain over the radial head and a block or crepitus to rotation. This is standard practice (clinical convention); no accuracy figures were identified in the sources reviewed.", refs: [] },
      { name: "Wrist, distal radioulnar joint and interosseous membrane screen", purpose: "Detect an Essex-Lopresti injury", procedure: "Palpate the distal radioulnar joint and forearm, check wrist pain and compare the ulnar variance on comparative radiographs; the review advises some dynamic assessment of longitudinal stability.", positive: "Wrist or forearm pain with a radial head fracture should raise suspicion; there is no accepted definition of the injury and the definitions vary [r6]. No accuracy figures were identified.", refs: [] },
      { name: "Valgus and varus stress and posterolateral rotatory stability testing (when pain allows)", purpose: "Screen for associated ligament injury", procedure: "Gently test collateral ligament laxity at about 20–30° of flexion once the fracture position is known (clinical convention).", positive: "Laxity or apprehension suggests an associated injury and needs surgical review [r5]. No accuracy figures were identified in the sources reviewed.", refs: [] }
    ],
    clinicalRules: [
      { name: "Elbow extension test as a decision rule for radiography", description: "Patients unable to fully extend the elbow should have radiographs, and those who can may avoid them if the clinician is confident there is no olecranon fracture; patients not imaged should return if symptoms persist at 7–10 days. This rule was validated in a multicentre prospective study [r17]." }
    ],
    outcomeMeasures: [
      { name: "DASH or QuickDASH", use: "Primary outcome in the Mason II trial and long-term cohort [r9, r7]" },
      { name: "Oxford Elbow Score", use: "Patient-rated elbow function; mean 46 at 10 years in isolated stable Mason I–II fractures [r7]" },
      { name: "Mayo Elbow Performance Score (MEPS)", use: "Clinician-rated elbow function; MEPS 93 versus 86 favoured non-operative care in one comparison [r15]" },
      { name: "Broberg and Morrey score and ASES-Elbow", use: "Used in the early mobilisation trial [r8]" },
      { name: "Range of motion, grip strength and pain scales", use: "Flexion-extension arc and rotation arc, grip and pinch strength and visual analogue pain [r8, r14]" }
    ],
    imaging: [
      { modality: "Plain radiographs (AP, true lateral and radiocapitellar views)", indication: "After a fall with elbow pain and failure of the elbow extension test [r17]", findings: "Fracture line, displacement, comminution and fat pad elevation; a joint effusion with no visible fracture often hides an occult fracture [r13]." },
      { modality: "Ultrasound and repeat radiographs at 7–10 days", indication: "Suspected occult fracture with an effusion and no visible fracture", findings: "In 193 patients with an effusion and no visible fracture, ultrasound showed an intra-articular effusion in all, and cortical discontinuity (a direct sign of fracture) in 82%; repeat radiographs at 7–10 days showed a fracture in 95% (111 radial neck, 73 undisplaced radial head), and nine (5%) had no fracture confirmed and went on to MRI. This was a single-centre study without formal accuracy figures in the abstract [r18]." },
      { modality: "CT", indication: "Comminuted or displaced fractures and surgical planning, and suspected coronoid or other fractures (clinical convention)", findings: "Shows fragment number, size and displacement; the surgical question is often whether the fracture is reconstructable [r11]." },
      { modality: "MRI", indication: "Persistent pain with negative radiographs or suspected ligament injury (clinical convention)", findings: "In 20 adults with an effusion and no visible fracture, MRI found occult fractures in 75% and collateral ligament disruption in 15%, but it did not change management in that series [r13]." }
    ]
  },

  differentials: [
    { name: "Elbow dislocation (including terrible triad)", id: "elbow-dislocation", distinguishing: "Deformity and a prominent olecranon after a fall; radiographs show the dislocation, often with radial head and coronoid fractures [r5]." },
    { name: "Supracondylar humerus fracture (children)", id: "supracondylar-fracture", distinguishing: "A child with pain and swelling above the elbow; the fracture is in the distal humerus and the radial head is intact." },
    { name: "Pulled elbow (very young children)", id: "pulled-elbow", distinguishing: "A child aged about 1–4 years refusing to use the arm after a pull, with no swelling or bony tenderness; radiographs are normal (clinical convention)." },
    { name: "Lateral elbow tendinopathy", id: "lateral-elbow-tendinopathy", distinguishing: "Gradual lateral epicondyle pain provoked by gripping, with no acute fall and no block to rotation." },
    { name: "Osteochondritis dissecans of the capitellum", id: "capitellar-ocd", distinguishing: "Lateral elbow pain in a young throwing or gymnast athlete with catching or locking, but no acute fracture." },
    { name: "Capitellum, coronoid, olecranon or distal humerus fracture", distinguishing: "Fractures of the capitellum, coronoid, olecranon or distal humerus produce a similar effusion and are shown on radiographs or CT; a radial head fracture may coexist." },
    { name: "Essex-Lopresti injury", distinguishing: "A radial head fracture with wrist or forearm pain and distal radioulnar joint or interosseous membrane tenderness; there is no accepted definition [r6]." }
  ],
  redFlags: [
    "Elbow deformity, instability or a radial head fracture with a dislocation or coronoid fracture: urgent orthopaedic review the same day, because this is a terrible triad or complex injury [r5].",
    "Wrist or forearm pain with a radial head fracture: suspect an Essex-Lopresti injury and arrange comparative radiographs and a dynamic assessment of the forearm [r6].",
    "Absent pulse, a cold or pale hand, severe forearm pain or tense swelling, or new numbness: send to emergency the same day (clinical convention).",
    "New finger or thumb extension weakness after surgery or manipulation: suspect posterior interosseous nerve palsy and contact the surgeon [r14].",
    "A mechanical block to forearm rotation, locking, or a fragment that is clearly displaced on radiographs: refer for an orthopaedic opinion (clinical convention). Trials define 'displaced' as at least 2 mm of articular step-off [r4], and outcomes worsened beyond 4 mm of displacement or 30° of angulation in one trial [r8].",
    "Progressive stiffness, a firm end-feel, or a worsening range after weeks: suspect heterotopic ossification or contracture and refer for radiographs [r15]."
  ],

  management: {
    principles: "Decide on treatment by displacement, stability, the presence of a block to rotation and associated injuries. Isolated, stable Mason I fractures, and isolated stable Mason II fractures without a block, are managed non-operatively with a brief sling and early guided movement: in a three-protocol randomised trial of 180 patients, early mobilisation gave better results than a week in a cast, and a 2-day sling then active movement gave the best range, strength and function [r8]. Long-term results of non-operative care are excellent for most (mean DASH 5.8 at 10 years) [r7]. For displaced Mason II fractures, a small randomised trial found similar function at 12 months with or without screw fixation [r9], a meta-analysis of four studies (271 patients) found no significant functional differences and a lower complication rate with non-operative care [r10], and a systematic review of case series could not draw firm conclusions [r19]. For comminuted or complex fractures, the choice between fixation and arthroplasty rests on weak evidence [r11, r12]. The physio's role is to screen for associated injuries, start movement safely and restore function.",
    medical: [
      { name: "Sling for comfort with early guided movement for isolated Mason I and stable II fractures", description: "Isolated stable fractures treated non-operatively had a mean DASH of 5.8 at about 10 years, with 14% stiffness and 24% pain; 57 of the 100 were type I [r7]. In a three-protocol trial, early mobilisation beat a 7-day cast, and a 2-day sling followed by active mobilisation gave the best outcome; displacement above 4 mm or angulation above 30° impaired outcome [r8].", evidence: "moderate", recommendation: "recommended", refs: ["r7", "r8"] },
      { name: "Aspiration of the haemarthrosis, with or without local anaesthetic", description: "A Cochrane review of two trials (108 participants analysed) found very low-quality evidence of little difference in function at 12 months (9/51 vs 7/57 with impaired function; RR 1.43, 95% CI 0.57–3.58), a beneficial effect on pain immediately afterwards, and insufficient evidence of effectiveness or safety [r1]. In one trial of 80 adults, aspiration with local anaesthetic relieved pain in 92% and made early movement more comfortable [r16].", evidence: "very-limited", recommendation: "consider", refs: ["r1", "r16"] },
      { name: "Routine ORIF of an isolated, stable displaced Mason II fracture", description: "In a randomised trial of 45 patients, function at 12 months was similar after screw fixation or non-operative care (median DASH 0.0 vs 1.7, p = 0.076), with low complication rates in both [r9]. A meta-analysis of four studies (271 patients) found no significant differences in DASH, Oxford Elbow Score, MEPS, flexion, extension or pain, with a lower complication rate after non-operative care [r10]. In a retrospective comparison of 30 patients per group, MEPS favoured non-operative care (93 vs 86) and ORIF had more complications (eight mild heterotopic ossification and two hardware failures vs one and one) [r15]. After a mean of 22 years in 16 operated patients, results were no better than published non-operative results, and implant removal was routine [r14]. Pooled case series favoured ORIF (93% vs 80% good or excellent), but they were retrospective and low-level [r19].", evidence: "limited", recommendation: "not-recommended", refs: ["r9", "r10", "r15", "r14", "r19"] },
      { name: "Surgery for a block to rotation, instability or associated injury", description: "Fixation or arthroplasty is generally considered when a displaced fragment blocks rotation or the elbow is unstable (clinical convention). The RAMBO trial specifically excluded fractures with dislocation, interosseous ligament injury or other fractures, so these cases are not covered by the trial evidence [r4].", evidence: "expert-opinion", recommendation: "consider", refs: ["r4"] },
      { name: "Radial head arthroplasty versus ORIF for Mason III (comminuted) fractures", description: "A systematic review based on two randomised trials found weak evidence that arthroplasty gives better functional outcomes and lower complication rates than ORIF [r11]. In a network meta-analysis of five RCTs (326 patients), arthroplasty gave better patient-reported outcomes than ORIF with metal implants (OR 0.04, credible interval 0.0011–0.87, a very wide interval), and non-operative care was not shown to be significantly worse than arthroplasty [r12]. In terrible triad injuries, replacement and reconstruction gave similar MEPS (88.6 vs 88.5) and reoperation rates (18.4% vs 17.9%), with a 65% overall complication rate [r20].", evidence: "conflicting", recommendation: "consider", refs: ["r11", "r12", "r20"] }
    ],
    physio: [
      { name: "Elbow extension test and early referral for radiographs", description: "Failure to extend the elbow fully after injury should prompt radiography; full extension had a negative predictive value of 98.4% in adults [r17]. Examine the wrist and forearm for an Essex-Lopresti injury [r6].", evidence: "moderate", recommendation: "recommended", refs: ["r17", "r6"] },
      { name: "Early active elbow and forearm movement (sling for 2 days, then active motion)", description: "In 180 patients, early mobilisation protocols gave better outcomes than a 7-day cast; immediate motion caused more pain in the first 3 days, and the 2-day sling then active motion protocol gave the best range, strength and function, particularly in displaced fractures [r8].", evidence: "moderate", recommendation: "recommended", refs: ["r8"] },
      { name: "Prolonged immobilisation in a cast or rigid splint", description: "A week in a cast gave worse outcomes than early mobilisation in a randomised trial [r8]; stiffness remained a long-term complaint in 14% [r7].", evidence: "limited", recommendation: "not-recommended", refs: ["r8", "r7"] },
      { name: "Education, graded loading and return-to-activity planning", description: "Explain that most isolated stable fractures heal well, advise on pain-guided use of the arm, and set realistic expectations; older age, comorbidity, deprivation, displacement and compensation predicted worse outcomes in one cohort [r7]. No trial of specific strengthening programmes after radial head fracture was identified (clinical convention).", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Post-operative rehabilitation after ORIF or arthroplasty (follow the surgeon)", description: "No trial of rehabilitation protocols after radial head fixation or arthroplasty was identified in the sources reviewed, so follow the surgeon's protocol and restrictions (clinical convention).", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Forceful passive stretching or manipulation of a stiff elbow", description: "Aggressive stretching risks more pain and bone formation; heterotopic ossification occurred in 8 ORIF patients versus 1 non-operative patient in one comparison [r15]. Use active, graded motion instead (clinical reasoning).", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r15"] }
    ],
    education: [
      "The round top of the forearm bone at the elbow has cracked. Most single cracks that are not badly out of position heal well without surgery.",
      "Moving the elbow early, within comfort, gives better results than keeping it in a cast.",
      "Some stiffness or aching can last: about 1 in 7 people still noticed stiffness and 1 in 4 some pain 10 years later in one study, though function was usually excellent [r7].",
      "A wrist or forearm pain after a fall on the hand needs to be mentioned, because other injuries can occur with a radial head fracture [r6].",
      "Do not force the elbow into movement or stretch it hard.",
      "Seek urgent review for a locked elbow, a deformity, a cold, pale or numb hand, or if the elbow suddenly feels unstable."
    ]
  },

  rehab: {
    overview: "Rehabilitation for an isolated stable fracture managed non-operatively is criteria-based. A brief sling for comfort (the best trial protocol used 2 days) is followed by active movement of the elbow and forearm, then strengthening and a graded return to activity [r8]. After surgery or for associated injuries, follow the surgeon's protocol, because no rehabilitation trials were identified. Dosages are typical clinical ranges, not trial prescriptions. As a working rule (clinical convention), pain during movement should stay at or below about 3/10 and settle within hours, and swelling should not increase the next day.",
    stages: [
      {
        name: "Settle & start moving",
        timeframe: "Days 0–14 (or per the surgeon)",
        goals: ["Control pain and swelling", "Begin active elbow and forearm movement", "Keep the shoulder, wrist and hand moving", "Educate on safe use and warning signs"],
        precautions: ["No weight-bearing through the hand or lifting", "No forced passive stretching", "Report a mechanical block, locking or new instability for urgent review", "Do not progress if associated injuries (Essex-Lopresti, dislocation) have not been excluded [r6]"],
        exercises: [
          { name: "Gravity-assisted elbow extension and active flexion (arm hanging)", dosage: "10 repetitions every waking hour in comfortable range (clinical convention)", cues: "Smooth and pain-limited; sling only for comfort in the first days [r8]", figure: { pose: "ex-pendulum", view: "lateral" } },
          { name: "Active forearm pronation and supination with the elbow at 90°", dosage: "3 × 10, 4 times a day", cues: "Elbow tucked into the side; stop at a block" },
          { name: "Gentle grip squeeze with the elbow supported", dosage: "3 × 10 holds of 5 s, hourly while awake", cues: "Pump the hand to reduce swelling", figure: { pose: "ex-grip", view: "lateral" } },
          { name: "Shoulder and scapular movement (wall slide)", dosage: "2 × 10, 3 times a day", cues: "Keep the elbow relaxed", figure: { pose: "ex-wall-slide", view: "lateral" } },
          { name: "Elevation and swelling management", dosage: "Between sessions", cues: "Hand above elbow, elbow above heart" }
        ],
        progressionCriteria: ["Pain at or below about 3/10 at rest and on gentle movement", "Active motion improving day by day without a block", "No new neurological or circulatory symptoms", "Fracture position acceptable on radiographs if checked"]
      },
      {
        name: "Restore range",
        timeframe: "Weeks 2–6",
        goals: ["Regain full flexion and extension", "Regain full forearm rotation", "Normalise daily use of the arm"],
        precautions: ["Active-assisted work only; avoid end-range stretching into pain", "No heavy resistance or weight-bearing yet", "Stop if a block, clicking or a sudden loss of range appears"],
        exercises: [
          { name: "Active-assisted elbow flexion and extension (table slide)", dosage: "3 × 10–15, 4 times a day", cues: "Use the other hand to help; stop at gentle tension" },
          { name: "Active pronation and supination with a light bar", dosage: "3 × 12, 3 times a day", cues: "Elbow supported and tucked in", figure: { pose: "grip-tool", view: "lateral", props: ["hammer"] } },
          { name: "Isometric elbow flexion, extension and forearm rotation at mid-range", dosage: "5 × 10 s at about 30–50% effort, 1–2 times a day (clinical convention)", cues: "Steady push, no pain" },
          { name: "Scapular retraction with a light band (elbow at the side)", dosage: "3 × 12, daily", cues: "Keep the elbow close to the body", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } },
          { name: "Wrist flexion and extension with a light dumbbell (forearm supported)", dosage: "3 × 12, 3 s up and down, 3 times a week", cues: "Elbow supported on a table", figure: { pose: "ex-wrist-flexion", view: "lateral", props: ["dumbbell"] } }
        ],
        progressionCriteria: ["Near-full active flexion and extension and a pain-free rotation arc compared with the other side", "No block or catching", "Pain at or below 2/10 with daily tasks", "Radiographic union or surgeon clearance before loading"]
      },
      {
        name: "Build strength & load tolerance",
        timeframe: "Weeks 6–12",
        goals: ["Restore elbow, forearm and shoulder strength", "Restore load tolerance through the hand", "Regain confidence with lifting and weight-bearing"],
        precautions: ["Increase load only when the previous session settles within 24 hours", "Avoid sudden axial loads (falls, push-offs) until union and strength are adequate", "After surgery, confirm clearance for weight-bearing"],
        exercises: [
          { name: "Biceps curl and triceps extension with progressive load", dosage: "3 × 10–12, 3 s lowering, 3 times a week (clinical convention)", cues: "Full range, slow control" },
          { name: "Band row and shoulder flexion raise", dosage: "3 × 10–12, 3 times a week", cues: "Control the lowering; relaxed neck", figure: { pose: "ex-shoulder-flexion", view: "lateral" } },
          { name: "Wall or incline push-up", dosage: "3 × 8–12, 2–3 times a week", cues: "Keep the elbows in line; stop if lateral elbow pain builds", figure: { pose: "ex-press-up", view: "lateral", props: ["mat"] } },
          { name: "Forearm rotation with a weighted hammer", dosage: "3 × 12, slow, 3 times a week", cues: "Short lever first, then lengthen", figure: { pose: "grip-tool", view: "lateral", props: ["hammer"] } },
          { name: "Farmer carry", dosage: "3 × 30–40 m, 2–3 times a week", cues: "Tall posture and a neutral wrist", figure: { pose: "ex-farmer-carry", view: "lateral", props: ["kettlebell"] } }
        ],
        progressionCriteria: ["Full or near-full range compared with the other side", "Strength about 80% or more of the other side (clinical convention)", "No pain above 2/10 and no next-day flare", "Tolerates weight-bearing through the hand without pain"]
      },
      {
        name: "Return to sport and work",
        timeframe: "Weeks 10–16+ (criteria-based)",
        goals: ["Return to work, gym and sport in graded steps", "Prepare for catching, falling and contact", "Maintain strength and range"],
        precautions: ["Progress in small steps with a next-day symptom check", "Delay contact and collision sport until criteria are met", "After surgery or associated injury, follow the surgeon's timing"],
        exercises: [
          { name: "Push-up and pressing progression", dosage: "3 × 8–12, 2–3 times a week", cues: "Full control through the full range", figure: { pose: "ex-press-up", view: "lateral", props: ["mat"] } },
          { name: "Weight-bearing progression (quadruped, bird-dog, plank on the hands)", dosage: "3 × 20–30 s, building to 60 s, 3 times a week", cues: "Soft elbows; stable shoulders", figure: { pose: "ex-bird-dog", view: "lateral", props: ["mat"] } },
          { name: "Catch-and-release and ball-reaction drills", dosage: "3 × 10, 2–3 times a week, building speed", cues: "Soft hands; stop if the elbow feels sore or unstable", figure: { pose: "reach-catch", view: "lateral", props: ["ball-basketball"] } },
          { name: "Controlled falling and landing drills (mat) for contact and gymnastics sports", dosage: "2–3 sets of 5, building height and speed, 2 times a week (clinical convention)", cues: "Absorb with flexed arms and roll; avoid locked elbows" },
          { name: "Heavy strength maintenance (curl, row, press)", dosage: "2 times a week, 3 × 6–10", cues: "Slow tempo, full range", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } }
        ],
        progressionCriteria: ["Full pain-free range and strength about 90% or more of the other side (clinical convention)", "Completes full training or work for at least 2 weeks without a flare", "No pain or apprehension on weight-bearing, catching and landing drills", "Surgeon or physician clearance after any operation"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated return-to-sport criteria for radial head fracture were identified in the sources reviewed; the criteria below reflect clinical convention",
      "Radiographic union (or surgeon clearance) and a stable elbow",
      "Full or near-full, pain-free range of flexion, extension and forearm rotation compared with the other side",
      "Strength about 90% or more of the other arm and no pain on weight-bearing or catching drills (clinical convention)",
      "Tolerates full training or work for at least 2 weeks without a flare",
      "For contact or gymnastic sports, falling and landing drills are completed without pain or apprehension"
    ],
    tests: ["Flexion-extension and rotation range compared with the other side [r8]", "Grip and elbow strength dynamometry [r8]", "DASH, Oxford Elbow Score and MEPS [r9, r15]", "Weight-bearing, catching and landing tolerance in sport-specific drills", "Pain on resisted forearm rotation and gripping"]
  },
  prognosis: "Isolated, stable Mason I and II fractures managed non-operatively usually do very well: in 100 patients mean DASH was 5.8 and mean Oxford Elbow Score 46 at about 10 years, with stiffness in 14% and pain in 24%; worse DASH was associated with older age, comorbidity, socioeconomic deprivation, greater displacement and compensation proceedings [r7]. In a randomised trial of 45 patients, median 12-month DASH was 0.0 after screw fixation and 1.7 after non-operative care (p = 0.076) [r9]. After ORIF of stable displaced fractures, results at 22 years were no better than non-operative results, and implant removal was routine [r14]. Outcomes after comminuted fractures and fracture-dislocations are less predictable, with complications and reoperation in many patients (for example 65% overall complications and about 18% reoperation in terrible triad series) [r20].",
  prevention: [
    "No trial-proven prevention programme for radial head fracture was identified in the sources reviewed.",
    "Falling technique and balance training for people at risk of falls may reduce injuries from falls onto an outstretched arm (expert opinion; not tested in the sources reviewed).",
    "Bone health assessment after a low-energy fracture, particularly in women, because osteoporosis should be considered [r2].",
    "Protective equipment and technique in collision and wheeled sports (clinical observation; not tested in the sources reviewed)."
  ],
  clinicalPearls: [
    "Use the elbow extension test as a triage rule. Failing to extend fully means radiographs are needed (sensitivity 96.8%, specificity 48.5% for any elbow fracture), but full extension does not rule out an olecranon fracture [r17].",
    "A joint effusion with no visible fracture usually means an occult fracture. In a small MRI series, 15 of 20 adults had one, most in the radial head, and the size of the fat pad elevation did not predict the likelihood [r13].",
    "Check the wrist and forearm. A radial head fracture with wrist or forearm pain may be an Essex-Lopresti injury, which is under-detected and has no accepted definition [r6].",
    "Start movement early. A sling for 2 days followed by active motion gave the best results in a 180-patient trial, better than a week in a cast [r8].",
    "Surgery for an isolated, stable Mason II fracture has not been shown to improve function: one RCT and a meta-analysis found no functional advantage, and surgery carries complications [r9, r10, r15].",
    "Be candid about uncertainty in comminuted fractures: only a few trials compare ORIF with arthroplasty, the evidence is weak, and the network meta-analysis interval is extremely wide [r11, r12]."
  ],
  related: ["elbow-dislocation", "supracondylar-fracture", "lateral-elbow-tendinopathy", "capitellar-ocd", "distal-radius-fracture", "pulled-elbow"],

  references: [
    { id: "r1", citation: "Foocharoen T, Foocharoen C, Laopaiboon M, et al. Aspiration of the elbow joint for treating radial head fractures. Cochrane Database Syst Rev. 2014;(11):CD009949.", pmid: "25416525", doi: "10.1002/14651858.CD009949.pub2", type: "systematic-review", year: 2014 },
    { id: "r2", citation: "Duckworth AD, Clement ND, Jenkins PJ, et al. The epidemiology of radial head and neck fractures. J Hand Surg Am. 2012;37(1):112-9.", pmid: "22119600", doi: "10.1016/j.jhsa.2011.09.034", type: "cross-sectional", year: 2012 },
    { id: "r3", citation: "Mason ML. Some observations on fractures of the head of the radius with a review of one hundred cases. Br J Surg. 1954;42(172):123-32.", pmid: "13209035", doi: "10.1002/bjs.18004217203", type: "other", year: 1954 },
    { id: "r4", citation: "Bruinsma W, Kodde I, de Muinck Keizer RJO, et al. A randomized controlled trial of nonoperative treatment versus open reduction and internal fixation for stable, displaced, partial articular fractures of the radial head: the RAMBO trial. BMC Musculoskelet Disord. 2014;15:147.", pmid: "24885637", doi: "10.1186/1471-2474-15-147", type: "other", year: 2014 },
    { id: "r5", citation: "Chen HW, Liu GD, Wu LJ. Complications of treating terrible triad injury of the elbow: a systematic review. PLoS One. 2014;9(5):e97476.", pmid: "24832627", doi: "10.1371/journal.pone.0097476", type: "systematic-review", year: 2014 },
    { id: "r6", citation: "Kooistra B, van den Bekerom M, Priester-Vink S, et al. Defining acute Essex-Lopresti injuries is problematic and variable: a systematic review. EFORT Open Rev. 2022;7(10):727-33.", pmid: "36287106", doi: "10.1530/EOR-22-0066", type: "systematic-review", year: 2022 },
    { id: "r7", citation: "Duckworth AD, Wickramasinghe NR, Clement ND, et al. Long-term outcomes of isolated stable radial head fractures. J Bone Joint Surg Am. 2014;96(20):1716-23.", pmid: "25320198", doi: "10.2106/JBJS.M.01354", type: "cohort", year: 2014 },
    { id: "r8", citation: "Paschos NK, Mitsionis GI, Vasiliadis HS, et al. Comparison of early mobilization protocols in radial head fractures. J Orthop Trauma. 2013;27(3):134-9.", pmid: "22576643", doi: "10.1097/BOT.0b013e31825cf765", type: "rct", year: 2013 },
    { id: "r9", citation: "Mulders MAM, Schep NWL, de Muinck Keizer RO, et al. Operative vs. nonoperative treatment for Mason type 2 radial head fractures: a randomized controlled trial. J Shoulder Elbow Surg. 2021;30(7):1670-8.", pmid: "33753275", doi: "10.1016/j.jse.2021.02.025", type: "rct", year: 2021 },
    { id: "r10", citation: "Zhao B, Wang H, Diao S, et al. Comparison of operatively and nonoperatively treated isolated mason type II radial head fractures: a systematic review and meta-analysis. J Orthop Surg Res. 2024;19(1):540.", pmid: "39227938", doi: "10.1186/s13018-024-05039-6", type: "meta-analysis", year: 2024 },
    { id: "r11", citation: "Meacher H, Hermena S, Isaac S. Open reduction and internal fixation versus radial head arthroplasty for Mason III radial head fractures: appraising the current literature evidence. Cureus. 2020;12(4):e7501.", pmid: "32373405", doi: "10.7759/cureus.7501", type: "systematic-review", year: 2020 },
    { id: "r12", citation: "Haines S, Abdelmalek A, Akehurst H, et al. A systematic review and network meta-analysis of randomised controlled trials comparing treatments for displaced radial head fractures. J Hand Surg Asian Pac Vol. 2024;29(4):343-9.", pmid: "39005184", doi: "10.1142/S2424835524500358", type: "meta-analysis", year: 2024 },
    { id: "r13", citation: "O'Dwyer H, O'Sullivan P, Fitzgerald D, et al. The fat pad sign following elbow trauma in adults: its usefulness and reliability in suspecting occult fracture. J Comput Assist Tomogr. 2004;28(4):562-5.", pmid: "15232392", doi: "10.1097/00004728-200407000-00021", type: "diagnostic-accuracy", year: 2004 },
    { id: "r14", citation: "Lindenhovius ALC, Felsch Q, Ring D, et al. The long-term outcome of open reduction and internal fixation of stable displaced isolated partial articular fractures of the radial head. J Trauma. 2009;67(1):143-6.", pmid: "19590324", doi: "10.1097/TA.0b013e31818234d6", type: "cohort", year: 2009 },
    { id: "r15", citation: "Yoon A, King GJW, Grewal R. Is ORIF superior to nonoperative treatment in isolated displaced partial articular fractures of the radial head? Clin Orthop Relat Res. 2014;472(7):2105-12.", pmid: "24577616", doi: "10.1007/s11999-014-3541-x", type: "cohort", year: 2014 },
    { id: "r16", citation: "Holdsworth BJ, Clement DA, Rothwell PN. Fractures of the radial head--the benefit of aspiration: a prospective controlled trial. Injury. 1987;18(1):44-7.", pmid: "3440615", doi: "10.1016/0020-1383(87)90385-8", type: "rct", year: 1987 },
    { id: "r17", citation: "Appelboam A, Reuben AD, Benger JR, et al. Elbow extension test to rule out elbow fracture: multicentre, prospective validation and observational study of diagnostic accuracy in adults and children. BMJ. 2008;337:a2428.", pmid: "19066257", doi: "10.1136/bmj.a2428", type: "diagnostic-accuracy", year: 2008 },
    { id: "r18", citation: "Pavić R, Margetić P, Hnatešen D. Diagnosis of occult radial head and neck fracture in adults. Injury. 2015;46 Suppl 6:S119-24.", pmid: "26584731", doi: "10.1016/j.injury.2015.10.050", type: "diagnostic-accuracy", year: 2015 },
    { id: "r19", citation: "Kaas L, Struijs PAA, Ring D, et al. Treatment of Mason type II radial head fractures without associated fractures or elbow dislocation: a systematic review. J Hand Surg Am. 2012;37(7):1416-21.", pmid: "22622090", doi: "10.1016/j.jhsa.2012.03.042", type: "systematic-review", year: 2012 },
    { id: "r20", citation: "Kyriacou S, Gupta Y, Bains HK, et al. Radial head replacement versus reconstruction for the treatment of the terrible triad injury of the elbow: a systematic review and meta-analysis. Arch Orthop Trauma Surg. 2019;139(4):507-17.", pmid: "30656475", doi: "10.1007/s00402-019-03111-z", type: "meta-analysis", year: 2019 }
  ],

  animation: {
    title: "How a radial head fracture happens",
    phases: [
      {
        type: "moi", label: "Fall on the hand", duration: 6.5, view: "lateral", environment: "road",
        actors: [{ id: "worker", kit: "worker" }],
        keyframes: [
          { t: 0, pose: "walk-heel-strike", root: { x: -140 } },
          { t: 1.0, pose: "trip", root: { x: -80 } },
          { t: 2.0, pose: "trip", root: { x: -30 }, ease: "in" },
          { t: 3.0, pose: "foosh", root: { x: 0 }, ease: "in" },
          { t: 3.6, pose: "foosh", joints: { elbowR: 10 } },
          { t: 4.4, pose: "foosh", joints: { elbowR: 35 }, ease: "out" },
          { t: 5.5, pose: "foosh", joints: { elbowR: 45 } }
        ],
        forces: [
          { t: [3.0, 4.2], at: "handR", dir: "up", label: "Ground force through the hand" },
          { t: [3.2, 4.4], at: "forearmR", dir: "up", label: "Axial load up the forearm" }
        ],
        highlights: [{ t: [3.2, 6.5], at: "elbowR" }],
        impacts: [{ t: 3.5, at: "elbowR" }],
        slowmo: [{ t: [3.0, 4.0], rate: 0.3 }],
        captions: [
          { t: 0, text: "A person is walking when a foot catches the kerb and they trip forward." },
          { t: 1.8, text: "The arm shoots out to break the fall, with the elbow near-straight." },
          { t: 3.1, text: "The hand hits the ground and force travels up the forearm." },
          { t: 3.6, text: "The radius is driven up into the elbow, loading the radial head against the capitellum." },
          { t: 4.8, text: "The elbow is sore, swelling quickly, and turning the forearm hurts." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "elbowR",
        captions: [{ t: 0, text: "Zooming into the right elbow from the outer side." }]
      },
      {
        type: "closeup", label: "Inside the elbow", duration: 10, scene: "elbow-lateral",
        actions: [
          { t: 0, do: "highlight", target: "radius" },
          { t: 0.3, do: "label", target: "radius", text: "Radius and radial head" },
          { t: 1.0, do: "arrow", at: "radialHead", dir: "proximal", label: "Axial load through the forearm", size: "m" },
          { t: 1.3, do: "compress", target: "capitellarCartilage", dur: 0.6 },
          { t: 1.8, do: "impact", at: "radiocapitellarJoint" },
          { t: 1.9, do: "fracture", target: "radius", pattern: "wedge", at: "radialHead", displaced: true },
          { t: 3.0, do: "label", target: "radius", text: "Displaced marginal fragment (Mason type II)" },
          { t: 3.6, do: "bleed", target: "jointSpace" },
          { t: 4.4, do: "arrow", at: "olecranonFossa", dir: "posterior", label: "Effusion lifts the posterior fat pad", size: "s" },
          { t: 5.2, do: "pain", at: "radialHead", hold: 3 },
          { t: 6.4, do: "camera", at: "radialHead", zoom: 1.7, dur: 1.0 },
          { t: 8.6, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "The radial head is the cup at the top of the radius, which articulates with the capitellum." },
          { t: 1.0, text: "Axial load drives the radial head into the capitellum." },
          { t: 1.9, text: "The edge of the radial head cracks and a segment is displaced: a Mason type II fracture." },
          { t: 3.6, text: "Blood fills the joint and lifts the fat pads, which can be seen on a lateral radiograph." },
          { t: 5.2, text: "Pain is felt over the radial head, and a displaced fragment can block forearm rotation." },
          { t: 6.6, text: "Comminuted fractures (Mason III) or a dislocation make the injury more complex." },
          { t: 8.2, text: "Most stable, isolated fractures heal well with a short sling and early movement." }
        ]
      },
      {
        type: "micro", label: "Bone healing", duration: 9, tissue: "bone-fracture",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.2, stage: "fracture" }, { t: 2.4, stage: "haematoma" }, { t: 3.6, stage: "inflammation" },
          { t: 5.0, stage: "soft-callus" }, { t: 6.4, stage: "hard-callus" }, { t: 7.8, stage: "remodelling" }
        ],
        timeLabels: [{ t: 2.4, text: "Hours to days" }, { t: 3.6, text: "Days" }, { t: 5.0, text: "Weeks" }, { t: 6.4, text: "Weeks to months" }, { t: 7.8, text: "Months" }],
        captions: [
          { t: 0, text: "Healthy cancellous bone of the radial head, with a cartilage cap." },
          { t: 1.2, text: "Under axial load the trabeculae crack and a fragment separates." },
          { t: 2.4, text: "Bleeding fills the gap with a blood clot." },
          { t: 3.6, text: "Inflammatory cells clear debris and release signals for repair." },
          { t: 5.0, text: "A soft callus bridges the fracture; gentle early motion is compatible with healing in a stable fracture." },
          { t: 6.4, text: "Woven bone replaces the soft callus and hardens." },
          { t: 7.8, text: "Bone remodels along the lines of load over months (schematic; cancellous radial head bone often shows little callus)." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "UL5" }
};
