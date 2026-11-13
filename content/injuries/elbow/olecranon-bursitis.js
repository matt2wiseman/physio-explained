export default {
  id: "olecranon-bursitis",
  name: "Olecranon bursitis",
  shortName: "Olecranon bursitis",
  aka: ["student's elbow", "miner's elbow", "draftsman's elbow", "elbow bursitis", "septic olecranon bursitis", "aseptic olecranon bursitis", "olecranon bursa inflammation"],
  region: "elbow",
  tissues: ["bursa"],
  onset: "acute-or-gradual",
  mechanismType: ["compression", "overuse", "contact", "fall"],
  populations: ["manual workers who lean on their elbows", "military combat recruits", "adults aged around 50 years (septic series)", "people with gout or rheumatoid arthritis", "people on steroid therapy or with alcohol misuse (septic risk)"],
  sports: ["wrestling", "rugby", "ice hockey", "gymnastics", "skateboarding"],
  urgency: "urgent",
  summary: "Inflammation and fluid in the subcutaneous olecranon bursa from pressure, friction, a direct blow, crystal disease or infection. Aseptic cases usually settle with conservative care; septic bursitis needs same-day review.",
  keyFacts: [
    { label: "Typical recovery", value: "In a 90-patient trial of non-septic bursitis, 83% treated with compression and NSAIDs had resolved by 4 weeks; time to resolution was about 2–3 weeks across groups" },
    { label: "Return to sport", value: "Criteria-based: swelling settled, full pain-free elbow movement and tolerance of padded contact; no standard time frame" },
    { label: "Key test", value: "Fluctuant swelling over the olecranon with a painless, full range of elbow movement. In septic cases tenderness (88% vs 36%), erythema (83% vs 27%), warmth (84% vs 56%) and fever (38% vs 0%) were more common, but the findings overlap" },
    { label: "Imaging", value: "Not needed for uncomplicated cases. Ultrasound helps to separate bursitis from cellulitis; radiographs after trauma or for spurs and fractures" },
    { label: "Peak age", value: "Adults, mostly men; mean age 52 years in a series of septic bursitis (80% male)" },
    { label: "Incidence", value: "29 per 100,000 person-years in a military population, rising to 97 per 100,000 in combat roles" }
  ],
  overview: "Olecranon bursitis is inflammation of the subcutaneous bursa that lies between the olecranon and the overlying skin. The olecranon bursa is one of the most frequently affected bursae in the body. It can be acute or chronic and septic or aseptic, and telling septic from aseptic is difficult because the clinical and laboratory features overlap [r1]. It has acquired names such as 'student's elbow' and 'miner's elbow' that point to repeated minor trauma from external pressure [r2].\n\nMost cases are aseptic. Chronic microtrauma is the most common cause of superficial bursitis in general, and other causes include acute trauma with haemorrhage, inflammatory conditions such as gout or rheumatoid arthritis, and infection [r3]. In a military population septic bursitis made up 24% of cases [r4]. In a series of septic bursitis, Staphylococcus aureus was isolated from 87.5% of bursal fluid samples, and predisposing factors included skin lesions from trauma, steroid therapy and alcoholism [r5].\n\nThe key clinical task is to exclude infection and a joint problem. Management of aseptic bursitis is mainly conservative. In a randomised trial, compression bandaging with NSAIDs, aspiration, and aspiration with steroid injection did not differ in resolution at 4 weeks [r6]. A systematic review of mostly level IV evidence found non-surgical management more effective and safer than surgery, and found that corticosteroid injection increased complications, including skin atrophy, without improving the outcome [r7].",

  epidemiology: {
    text: "Olecranon bursitis is one of the most commonly affected bursae and is common enough to present to many specialties [r1,r2]. In the Israel Defense Forces, the crude incidence was 29 per 100,000 person-years, rising to 97 per 100,000 in combat duty. Septic bursitis made up 24% of cases overall and 32% in combat soldiers. Men and women had similar incidence in administrative roles. The mean symptom duration was 17.58 weeks with a mean of 1.75 physician visits, and 19% were referred to a specialist [r4]. In a Spanish series of 40 septic bursitis cases (23 olecranon), 80% were male and the mean age was 52 years [r5]. A systematic review found no studies that examined olecranon bursitis and occupational biomechanical overload, so the link between work and bursitis is based on clinical experience and military data rather than exposure studies [r8].",
    riskFactors: {
      intrinsic: [
        "Inflammatory or crystal disease (gout, rheumatoid arthritis) can cause a non-infective inflammatory bursitis [r3]",
        "Steroid therapy (15%) and alcoholism (8%) were predisposing factors in a series of septic bursitis [r5]",
        "Skin breaks over the elbow: a moderately or severely injured elbow had a relative risk of 3.86 for septic bursitis in an infantry cluster [r9]",
        "Staphylococcus aureus carriage on the skin was common, but did not explain the difference between platoons in that cluster [r9]"
      ],
      extrinsic: [
        "Repeated minor trauma and pressure on the elbow, as in leaning on a desk or floor, is the typical cause of chronic microtraumatic bursitis [r3,r2]",
        "Military combat roles, with crawling and field training, had an incidence of 97 per 100,000 person-years [r4]",
        "Acute trauma such as a fall onto the elbow, with bleeding into the bursa [r3]",
        "Occupations with prolonged kneeling or leaning on hard surfaces (clinical observation; no exposure studies were identified) [r8]"
      ]
    }
  },

  mechanism: {
    summary: "The olecranon bursa is a thin sac between the point of the elbow and the skin. It reduces friction between them, and when the skin is repeatedly pressed or slid against bone the bursal lining becomes irritated and fills with fluid. The same bursa can be injured by a single direct blow, which causes bleeding into it, or inoculated with bacteria through broken skin [r3,r5]. Chronic microtrauma is the most common cause of superficial bursitis [r3].",
    sequence: [
      "The elbow bears body weight or pressure through its tip, for example leaning on a desk, kneeling and propping on elbows, or crawling [r2,r4].",
      "Compression and shear between the thin skin and the olecranon irritate the bursal lining.",
      "The lining cells react and small vessels dilate, so the bursa becomes inflamed (clinical biology).",
      "Fluid, or blood after a blow, collects in the bursa and produces a fluctuant swelling over the olecranon [r3].",
      "A skin abrasion or puncture over the bursa allows bacteria, most often Staphylococcus aureus, to seed the bursa [r5,r9].",
      "With continued pressure the bursa thickens and the swelling becomes chronic or recurrent.",
      "With protection from pressure, and treatment of any infection or underlying disease, the fluid is resorbed and the lining settles."
    ],
    variants: [
      { name: "Chronic microtraumatic bursitis", description: "Repeated pressure and friction from leaning on the elbow. The most common cause of superficial bursitis; managed conservatively with attention to the cause [r3]." },
      { name: "Acute traumatic or haemorrhagic bursitis", description: "A direct blow or fall onto the elbow with bleeding into the bursa. Treated with ice, elevation, rest and analgesia, and aspiration may shorten symptoms [r3]." },
      { name: "Septic bursitis", description: "Infection of the bursa, usually after a skin break; S. aureus accounted for 87.5% of cultures in one series [r5]. It was more frequent in combat soldiers (32%) than in the whole military cohort (24%) [r4]." },
      { name: "Inflammatory or crystal bursitis", description: "Gout or rheumatoid arthritis affecting the bursa. Treatment targets the underlying condition [r3]." }
    ]
  },

  anatomy: {
    text: "The olecranon bursa is a subcutaneous bursa over the posterior tip of the olecranon and the distal triceps tendon. Only a thin layer of skin and fat covers it, so it is easily compressed against bone and easily breached by abrasions. It does not normally communicate with the elbow joint, which is why bursal swelling leaves passive elbow movement relatively preserved (standard anatomy). Deep to it lie the olecranon, the triceps tendon insertion and the posterior joint capsule; the ulnar nerve runs in the groove on the medial side. An olecranon traction spur or osteophyte at the triceps insertion can coexist or mimic bursal pain, although it is poorly described in the literature [r10].",
    structures: [
      { name: "Olecranon bursa", role: "Thin synovial-lined sac that lets the skin glide over the olecranon; the site of inflammation and effusion [r1]" },
      { name: "Olecranon (tip)", role: "Bony prominence at the back of the elbow; carries pressure when leaning on the elbow" },
      { name: "Overlying skin", role: "Thin protective layer; a skin break creates the route for septic bursitis [r9]" },
      { name: "Triceps tendon insertion", role: "Extends the elbow; lies deep to the bursa and can be a separate source of posterior elbow pain, including an olecranon spur [r10]" },
      { name: "Elbow joint capsule", role: "Separate from the bursa; effusion in the joint causes pain on all movement and a different pattern from bursitis" },
      { name: "Ulnar nerve (cubital groove)", role: "Passes behind the medial epicondyle; check it if swelling extends medially (clinical reasoning)" }
    ]
  },

  pathophysiology: {
    tissueDamage: "In olecranon bursitis the bursal lining is irritated by repeated compression and shear, or by a direct blow, and responds with inflammation and fluid production. The bursa fills with a serous, serosanguinous or bloody effusion; in chronic cases the wall thickens and nodules or villi may form. Bursitis can be acute or chronic and septic or aseptic, and the distinction can be difficult because physical and laboratory data overlap [r1]. Causes include chronic microtrauma, acute trauma with haemorrhage, inflammatory disorders such as gout or rheumatoid arthritis, and infection [r3].\n\nIn septic bursitis, bacteria enter through a skin break or by haematogenous spread and multiply within the closed space, producing a hot, red, tender bursa and, in some people, fever and cellulitis. S. aureus is the usual organism [r5,r3]. Septic cases showed more tenderness, erythema or cellulitis, warmth and fever than aseptic cases, but none was specific [r1].",
    structures: [
      { name: "Olecranon bursa", effect: "Inflamed, thickened lining with excess fluid (serous, bloody, crystal-laden or purulent) [r3]" },
      { name: "Overlying skin and subcutaneous tissue", effect: "Stretched and thin over the effusion; erythema, warmth and cellulitis occur in septic cases (erythema or cellulitis in 83% of septic cases vs 27% of aseptic) [r1]" },
      { name: "Olecranon (bone)", effect: "Usually unaffected; a traction spur or osteophyte may be present [r10]" },
      { name: "Triceps tendon insertion", effect: "May be irritated by the effusion or by coexisting spur-related tendinopathy [r10]" }
    ],
    muscles: [
      { name: "Triceps", effect: "Guarded pain-limited movement against a tense, tender bursa; full strength is usually preserved (clinical reasoning)" },
      { name: "Elbow flexors and shoulder girdle", effect: "People avoid elbow flexion with a large effusion and use the shoulder and trunk to compensate (clinical reasoning)" }
    ],
    cellular: [
      { phase: "Friction and irritation", timing: "Hours to days of repeated pressure", description: "Compression and shear injure the bursal lining cells (typical bursa biology)." },
      { phase: "Inflammation", timing: "Days", description: "Inflammatory cells arrive, vessels dilate and leak, and the lining thickens (typical bursa biology)." },
      { phase: "Effusion", timing: "Days to weeks", description: "Fluid accumulates and distends the bursa; in septic bursitis the fluid contains neutrophils and bacteria, and the fluid white cell count and glucose guide diagnosis [r3]." },
      { phase: "Resolution or chronicity", timing: "Weeks to months", description: "With protection and treatment the fluid is resorbed within about 2–4 weeks in a trial of non-septic bursitis [r6]. Without it the wall thickens and the swelling recurs; the mean symptom duration was 17.58 weeks in a military series [r4]." }
    ],
    systems: [
      { system: "Immune and infectious", effect: "S. aureus is the usual cause of septic bursitis, and steroid therapy and alcoholism were predisposing factors [r5]." },
      { system: "Systemic inflammatory and metabolic", effect: "Gout and rheumatoid arthritis can cause non-infective inflammatory bursitis that responds to treatment of the underlying disease [r3]." },
      { system: "Skin and integument", effect: "Abrasions over the elbow are the main route for infection: relative risk 3.86 for a moderately or severely injured elbow in an infantry cluster [r9]." },
      { system: "Nervous system and pain processing", effect: "Pain is local and mechanical in most aseptic cases; a pain-limited range of movement is a feature of an associated joint problem rather than of a bursitis (clinical reasoning)." }
    ]
  },

  grading: {
    system: "Aetiological classification (septic versus aseptic; acute traumatic, chronic microtraumatic, chronic inflammatory) [r3]",
    grades: [
      { grade: "Acute traumatic or haemorrhagic bursitis", description: "A fall or direct blow with bleeding into the bursa. Often a firm, bruised swelling [r3].", prognosis: "Treated conservatively; aspiration may shorten symptoms [r3]" },
      { grade: "Chronic microtraumatic bursitis", description: "Repeated pressure or friction over weeks to months, with a fluctuant but only mildly painful swelling [r3].", prognosis: "Conservative care and attention to the cause; aspiration is generally not advised because of the risk of iatrogenic septic bursitis [r3]" },
      { grade: "Chronic inflammatory bursitis (gout, rheumatoid arthritis)", description: "Bursal inflammation as part of a systemic or crystal disease [r3].", prognosis: "Treat the underlying disease; intrabursal steroid is often used in this group [r3]" },
      { grade: "Septic bursitis", description: "Infection of the bursa, usually by S. aureus, with a hot, tender bursa and sometimes fever or cellulitis [r5,r1].", prognosis: "Antibiotics effective against S. aureus first; surgery for non-response or recurrence [r3]. In a series, 38 of 40 resolved without open surgical drainage [r5]." }
    ]
  },

  timeframes: {
    summary: "Aseptic bursitis typically settles in a few weeks with conservative care, but chronic cases can last months. In a randomised trial the time to resolution ranged from about 2.3 to 3.2 weeks [r6], while the mean symptom duration in a military population was 17.58 weeks [r4]. Longer symptom duration before treatment predicted failure at 4 weeks [r6].",
    healing: [
      { phase: "Acute inflammation", startDay: 0, endDay: 7, description: "Pain, warmth and swelling after a blow or repeated pressure; ice, elevation and protection (clinical convention)" },
      { phase: "Effusion and conservative treatment", startDay: 3, endDay: 28, description: "Fluctuant swelling persists; resolution by 4 weeks in about 65–85% of patients depending on treatment arm in one trial [r6]" },
      { phase: "Resolution and return of function", startDay: 14, endDay: 56, description: "Fluid is resorbed and the lining settles; return to padded pressure and contact (clinical convention)" },
      { phase: "Chronic or recurrent bursitis", startDay: 28, endDay: 180, description: "Persistent or recurrent swelling and a thickened bursal wall; mean symptom duration was 17.58 weeks in a military series [r4]" }
    ],
    milestones: [
      { label: "Septic bursitis decision", day: 1, note: "Assess for infection at the first visit: aspirate and culture if infection is suspected [r3]" },
      { label: "Earliest resolution (aspiration plus steroid)", day: 16, note: "2.3 weeks versus 3.1 weeks (aspiration alone) and 3.2 weeks (compression plus NSAIDs) [r6]" },
      { label: "4-week review", day: 28, note: "Resolved in 25 of 30 (compression with NSAIDs), 17 of 26 (aspiration) and 23 of 27 (aspiration with steroid) [r6]" },
      { label: "Specialist review for non-resolution", day: 42, note: "Persistent or recurrent bursitis after about 4 weeks warrants review; longer symptom duration predicted failure [r6]" },
      { label: "Mean symptom duration in a military population", day: 123, note: "17.58 weeks with 1.75 physician visits on average [r4]" }
    ],
    returnToSport: "Criteria-based. Return to elbow-loading activity when swelling has settled, there is no heat or tenderness, and padded pressure is tolerated. In a randomised trial, 65–85% of non-septic cases had resolved by 4 weeks, depending on treatment arm [r6]. Septic bursitis needs completion of antibiotics and medical clearance before return."
  },

  clinicalPresentation: {
    symptoms: [
      "A fluctuant swelling over the point of the elbow, often noticed after leaning on it or a blow [r2]",
      "Pain that is mild in chronic cases and sharp when pressed or knocked",
      "Tenderness, warmth and redness over the swelling in acute or septic cases [r1]",
      "A tight or stretched feeling at end-range elbow flexion because of the swelling",
      "Fever, malaise or spreading redness in septic cases (fever in 38% of septic versus 0% of aseptic cases) [r1]"
    ],
    signs: [
      "Fluctuant, well-defined swelling over the olecranon that is separate from the joint [r3]",
      "Tenderness (88% septic, 36% aseptic), erythema or cellulitis (83% versus 27%) and warmth (84% versus 56%) are more common in septic bursitis, but the overlap is large [r1]",
      "A skin abrasion, puncture or lesion over the bursa (present in 50% of septic and 25% of aseptic cases) [r1]",
      "Full or near-full, relatively painless active and passive elbow movement (clinical reasoning)",
      "Palpable thickened bursal wall or loose nodules in chronic cases"
    ]
  },

  assessment: {
    subjective: [
      "Onset: gradual after repeated pressure, or acute after a fall or blow, and the time course (acute versus chronic) [r1]",
      "Aggravating factors: leaning on the elbow, crawling, kneeling and sport contact [r2,r4]",
      "Pain, redness, warmth, fever, chills or spreading erythema: septic features, although overlap with aseptic bursitis is large [r1]",
      "Skin break over the elbow, insect bites, piercings or injections [r9]",
      "Medical history: diabetes, gout, rheumatoid arthritis, immunosuppression, steroid use and alcohol intake [r5,r3]",
      "Previous bursitis, aspirations or injections, and any antibiotic use",
      "Impact on work, sport and sleep, and the patient's ability to avoid leaning on the elbow"
    ],
    observation: [
      "Size, shape and position of the swelling; redness, bruising or an abrasion over it",
      "Signs of spreading cellulitis (streaking, warmth beyond the bursa) [r1]",
      "Arm and elbow posture and willingness to bend the elbow; compare with the other side"
    ],
    palpation: [
      "Tense or boggy fluctuant swelling over the olecranon; assess temperature compared with the opposite elbow",
      "Tenderness: tenderness was reported in 88% of septic versus 36% of aseptic cases [r1]",
      "Thickened wall, nodules or loose bodies in a chronic bursa",
      "Olecranon tip, triceps tendon and joint line for bony or tendinous tenderness (spur, triceps pathology) [r10]"
    ],
    rangeOfMotion: [
      "Active and passive elbow flexion and extension, and pronation and supination. These are usually full in bursitis; marked loss or severe pain on gentle movement suggests septic arthritis (clinical reasoning)",
      "Wrist and shoulder range of motion, to check compensation and referred pain"
    ],
    strength: [
      "Resisted elbow extension (triceps) and flexion, usually strong but pain-limited",
      "Grip strength and upper-limb functional strength, to guide return to work and sport"
    ],
    neuro: [
      "Ulnar nerve sensation and intrinsic hand function if swelling is large or extends medially",
      "Screen the neck and shoulder if pain does not match the local findings"
    ],
    functional: [
      "Tolerance of leaning, resting the arm on a table and sleeping on the side",
      "Task and sport demands: padded contact, floor work and gripping tasks"
    ],
    specialTests: [
      { name: "Inspection and palpation of the bursa for fluctuance and warmth", purpose: "Identify bursal effusion and the signs of infection", procedure: "Inspect from behind and the side with the elbow flexed to about 90°. Palpate gently for fluctuance and compare skin temperature with the opposite elbow.", positive: "A defined fluctuant swelling over the olecranon. Warmth, erythema and tenderness make infection more likely, but no single finding separates septic from aseptic bursitis: tenderness 88% vs 36%, erythema or cellulitis 83% vs 27%, warmth 84% vs 56%, trauma or skin lesion 50% vs 25%, and fever 38% vs 0% in septic and aseptic cases [r1].", refs: ["r1"] },
      { name: "Passive elbow range of motion", purpose: "Separate bursitis from septic arthritis or an intra-articular problem", procedure: "Gently move the elbow through flexion, extension, pronation and supination, and ask about pain.", positive: "Bursitis usually leaves passive range largely preserved. Marked pain or a block to passive movement suggests an intra-articular source and needs urgent assessment. No accuracy figure was identified in the sources reviewed.", refs: [] },
      { name: "Aspiration with fluid analysis (medical)", purpose: "Confirm or exclude infection and crystal disease when septic bursitis is suspected", procedure: "A doctor aspirates the bursa and the fluid is sent for Gram stain, crystal analysis, glucose, cell count and culture [r3].", positive: "Organisms on Gram stain or culture, a high white cell count, a low glucose or crystals. Bursal aspiration of suspected infection is the standard step in the sources reviewed; accuracy figures were not extracted [r3].", refs: ["r3"] },
      { name: "Ultrasound of the bursa and skin", purpose: "Distinguish bursitis from cellulitis and guide aspiration", procedure: "Scan the posterior elbow over the olecranon with the elbow flexed.", positive: "A fluid-filled bursa separate from the skin suggests bursitis rather than cellulitis alone. Ultrasound can help to distinguish bursitis from cellulitis, but accuracy figures were not identified in the sources reviewed [r3].", refs: ["r3"] }
    ],
    clinicalRules: [
      { name: "No validated septic-versus-aseptic rule", description: "Clinical and laboratory features overlap, so no decision rule reliably separates septic from aseptic olecranon bursitis [r1]. When infection is suspected, aspirate and culture rather than relying on a combination of features [r3]." }
    ],
    outcomeMeasures: [
      { name: "Bursal swelling and resolution (fluid collection present or absent)", use: "Primary outcome in the main trial: resolution was defined by clinically reduced or absent fluid at 4 weeks [r6]" },
      { name: "Pain visual analogue scale (VAS 0–10)", use: "Used alongside resolution in the trial of non-septic bursitis [r6]" },
      { name: "Elbow range of motion (flexion, extension, pronation, supination)", use: "Track recovery of movement; compare with the other side" },
      { name: "Number of physician visits and symptom duration", use: "Measures of medical burden in a military cohort (mean 1.75 visits, 17.58 weeks) [r4]" },
      { name: "Upper-limb function (DASH or QuickDASH)", use: "Only if function is limited; not specifically validated for bursitis in the sources reviewed" }
    ],
    imaging: [
      { modality: "Plain radiograph", indication: "After trauma, or if a spur, loose body or fracture is suspected", findings: "Soft-tissue swelling behind the olecranon; may show an olecranon spur or osteophyte [r10]" },
      { modality: "Ultrasound", indication: "Uncertain diagnosis, suspected cellulitis or before aspiration", findings: "Helps to distinguish bursitis from cellulitis [r3]" },
      { modality: "MRI and blood tests", indication: "Suspected infection or deep extension, or diagnostic doubt", findings: "White cell count, inflammatory markers and MRI can help to separate infectious from non-infectious causes [r3]" }
    ]
  },

  differentials: [
    { name: "Septic arthritis of the elbow", distinguishing: "Severe pain on any passive movement, a joint effusion, a warm elbow and systemic illness. The bursa is not the main swelling. Needs emergency assessment." },
    { name: "Cellulitis over the elbow without bursitis", distinguishing: "Diffuse redness and warmth without a discrete fluid collection; ultrasound can help to distinguish it from bursitis [r3]." },
    { name: "Gout or other crystal or inflammatory arthritis", distinguishing: "Bursitis with tophi, other joint involvement or a history of gout or rheumatoid arthritis; the fluid contains crystals or inflammatory cells [r3]." },
    { name: "Triceps tendon rupture or tendinopathy", id: "triceps-tendon-rupture", distinguishing: "Posterior elbow pain with weak resisted extension, often after a fall or an eccentric load, and a palpable defect at the tendon insertion. The bursa may be swollen secondarily." },
    { name: "Olecranon spur or osteophyte", distinguishing: "Bony prominence at the triceps insertion with pain on resisted extension or end-range extension; seen on radiographs [r10]." },
    { name: "Olecranon fracture or elbow injury after a fall", distinguishing: "Bony tenderness, a block to extension or inability to extend against gravity, and a fracture on radiographs." },
    { name: "Elbow dislocation or other joint injury", id: "elbow-dislocation", distinguishing: "A high-energy mechanism, deformity, a joint effusion and loss of range; the swelling is not confined to the bursa." },
    { name: "Elbow joint effusion or inflammatory arthritis", distinguishing: "Fullness on either side of the olecranon and in the lateral soft spot, and pain with passive movement." }
  ],
  redFlags: [
    "A hot, red, tender bursa with fever, malaise, spreading cellulitis or lymphangitis: suspect septic bursitis. Arrange same-day medical review for aspiration, culture and antibiotics. Fever was present in only 38% of septic cases, so its absence does not exclude infection [r1].",
    "Septic features in a person who is immunosuppressed, diabetic, on steroids or misuses alcohol (steroid therapy 15% and alcoholism 8% in a septic series): lower the threshold for same-day review [r5].",
    "An abrasion, puncture or wound over the bursa: treat as a possible entry point for S. aureus and review early [r9].",
    "A systemically unwell patient (high fever, rigors, tachycardia, spreading cellulitis): refer to hospital for intravenous antibiotics; outpatient antibiotics are reserved for patients who are not acutely ill [r3].",
    "Severe pain on gentle passive movement of the elbow, a hot joint or inability to move it: suspect septic arthritis rather than bursitis. Refer for emergency assessment.",
    "Swelling after trauma with bony tenderness or inability to extend the elbow: obtain radiographs for fracture or triceps avulsion and refer.",
    "Swelling that persists or recurs after about 4 weeks of conservative care, or bursitis with tophi or other joint involvement: arrange medical review for aspiration, crystal analysis and consideration of gout or rheumatoid arthritis [r3,r6]."
  ],

  management: {
    principles: "First decide whether the bursa is septic, then whether another diagnosis explains the swelling. Aspirate and culture if infection is suspected, because clinical and laboratory features overlap [r1,r3]. Aseptic bursitis is treated conservatively: protect the elbow from pressure, compress, and use short-term analgesia, and address the underlying cause. In a randomised trial, compression bandaging with NSAIDs, aspiration and aspiration with steroid injection did not differ in 4-week resolution, and the authors suggested compression with a short course of NSAIDs offers the best balance of safety and efficacy [r6]. A systematic review found non-surgical management more effective and safer than surgery, and corticosteroid injection increased complications without improving the outcome [r7]. Aspiration of chronic microtraumatic bursitis is generally not recommended because of the risk of iatrogenic septic bursitis, although one review found no increase in bursal infection after aspiration of aseptic bursitis [r3,r7].",
    medical: [
      { name: "Aspiration and fluid analysis for suspected infection", description: "A doctor aspirates the bursa and sends the fluid for Gram stain, crystal analysis, glucose, white cell count and culture. This is the standard step if infection is suspected, and it can also identify gout [r3].", evidence: "limited", recommendation: "recommended", refs: ["r3", "r1"] },
      { name: "Antibiotics for septic bursitis", description: "Antibiotics effective against Staphylococcus aureus are the initial treatment, with surgery reserved for non-response or recurrence. Outpatient antibiotics may be considered for patients who are not acutely ill, whereas acutely ill patients are admitted for intravenous antibiotics [r3]. In a series of 40 septic cases, 80% received initial intravenous therapy for a mean of 11 days (range 5–21) and 38 (95%) resolved without open surgical drainage [r5]. The optimum length and route of antibiotics is unclear [r1].", evidence: "limited", recommendation: "recommended", refs: ["r3", "r5", "r1"] },
      { name: "Aspiration for aseptic bursitis", description: "Aspiration alone resolved 17 of 26 non-septic cases (65%) at 4 weeks in the trial, a difference from compression with NSAIDs that did not reach significance [r6]. One review found that aspiration did not increase bursal infection in aseptic bursitis [r7], whereas another advises against aspiration of chronic microtraumatic bursitis because of the risk of iatrogenic septic bursitis. Aspiration may shorten symptoms in acute traumatic or haemorrhagic bursitis [r3].", evidence: "conflicting", recommendation: "consider", refs: ["r6", "r7", "r3"] },
      { name: "Corticosteroid injection into the bursa", description: "Aspiration with steroid injection gave the earliest resolution in a trial (2.3 weeks versus 3.1 and 3.2 weeks), although 4-week resolution did not differ significantly between groups [r6]. A systematic review found steroid injection increased complications and skin atrophy without improving outcome [r7]. High-quality evidence of benefit in microtraumatic bursitis is unavailable [r3].", evidence: "limited", recommendation: "not-recommended", refs: ["r6", "r7", "r3"] },
      { name: "Compression bandaging with NSAIDs", description: "In the trial, 25 of 30 patients (83%) treated with compression bandaging and NSAIDs had resolved by 4 weeks, and the authors suggested it may offer the best balance of safety and efficacy [r6].", evidence: "limited", recommendation: "recommended", refs: ["r6"] },
      { name: "Surgery (bursectomy, open or endoscopic)", description: "Reserved for recurrent bursitis, antibiotic-unresponsive septic bursitis or chronic thickened bursae. Surgical management was less likely to resolve bursitis and had higher rates of complications, persistent drainage and bursal infection than non-surgical care in a systematic review of mostly level IV evidence [r7]; surgery is kept for non-responsive or recurrent cases [r3].", evidence: "limited", recommendation: "consider", refs: ["r7", "r3"] },
      { name: "Treatment of underlying inflammatory or crystal disease", description: "In chronic inflammatory bursitis (for example gout or rheumatoid arthritis), treat the underlying condition; intrabursal steroid is often used in this group [r3].", evidence: "limited", recommendation: "recommended", refs: ["r3"] }
    ],
    physio: [
      { name: "Education, pressure avoidance and protection (padding)", description: "Explain the cause, stop leaning on the elbow, and pad the elbow for sport and work. Chronic microtraumatic bursitis is managed conservatively with attention to the underlying cause [r3]. Protective gear was the most promising preventive measure in a military population [r4]. No trials of padding for treatment were identified.", evidence: "limited", recommendation: "recommended", refs: ["r3", "r4"] },
      { name: "Compression bandage, ice, elevation and rest for acute bursitis", description: "Acute traumatic or haemorrhagic bursitis is treated with ice, elevation, rest and analgesia [r3]. The compression-with-NSAIDs arm resolved 83% of cases at 4 weeks in the trial [r6].", evidence: "limited", recommendation: "recommended", refs: ["r3", "r6"] },
      { name: "Early referral for suspected infection or an alternative diagnosis", description: "Apply the red flags, and refer the same day for septic features. Septic and aseptic bursitis cannot be separated reliably on clinical findings alone [r1].", evidence: "limited", recommendation: "recommended", refs: ["r1"] },
      { name: "Range of motion, triceps and shoulder girdle exercise after settling", description: "Restore elbow flexion and extension, then progressively strengthen the triceps and shoulder girdle and return to loading. No trials of exercise for olecranon bursitis were identified in the sources reviewed.", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Massage, heat or deep friction over a hot, swollen bursa", description: "May aggravate inflammation and could mask or spread an infection. No trials were identified (clinical reasoning); use the red flags first.", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] }
    ],
    education: [
      "The bursa is a small fluid-filled cushion over the point of the elbow. It has become irritated by pressure or a knock, and usually settles in a few weeks if you stop leaning on it.",
      "Use a soft bandage for light compression and an elbow pad when you cannot avoid pressure. Do not wrap it tightly enough to cause numbness or colour change.",
      "Seek the same-day review if the elbow becomes hot, red, very painful or you feel unwell with fever, because a bursa can become infected.",
      "A cut or graze over the elbow should be cleaned and watched, because it is the usual way for infection to start.",
      "Cortisone injections and repeated needling can cause skin thinning and infection, so they are not first-line treatment.",
      "If the swelling returns or does not settle in about 4–6 weeks, see your doctor to check for gout or arthritis and to consider other treatment."
    ]
  },

  rehab: {
    overview: "Rehabilitation applies to aseptic bursitis and to people recovering after septic bursitis has been treated. It is criteria-based: protect from pressure while the bursa is hot and swollen, restore elbow movement as swelling settles, then rebuild strength and padded loading before returning to work or sport. There are no trials of exercise rehabilitation for olecranon bursitis, so the stages below reflect clinical practice and the conservative approach described in the reviews [r3,r7]. Dosages are typical clinical ranges. As a working rule (clinical convention), exercise should not provoke more than mild pain and should not increase swelling or warmth the next day. Do not start loading through a hot, red, enlarging bursa; seek medical review.",
    stages: [
      {
        name: "Protect & settle",
        timeframe: "Days 0–7 (or until swelling and warmth settle)",
        goals: ["Remove pressure and friction from the olecranon", "Settle pain, warmth and swelling", "Check for signs of infection or another diagnosis"],
        precautions: ["Do not lean on the elbow or kneel on elbows; use padding", "Report fever, spreading redness or increasing pain the same day [r1]", "Do not wrap the bandage tightly; avoid distal swelling or numbness"],
        exercises: [
          { name: "Ice, elevation and compression bandage (light)", dosage: "Ice 10–15 min, 3–4 times daily (clinical convention); light compression between sessions; elevate when resting", cues: "Skin should stay pink and warm; loosen the bandage if numbness appears" },
          { name: "Active hand, wrist and finger movement", dosage: "3 × 10, hourly while awake", cues: "Keep the elbow supported", figure: { pose: "ex-grip", view: "lateral" } },
          { name: "Gentle active elbow flexion and extension within comfort", dosage: "3 × 10, 3 times a day", cues: "Smooth and pain-free; do not force end range" },
          { name: "Shoulder and scapular movement (pendulum, setting)", dosage: "3 × 10, 2–3 times a day", cues: "Relax the arm; avoid leaning on the elbow", figure: { pose: "ex-pendulum", view: "lateral" } }
        ],
        progressionCriteria: ["Warmth and tenderness settling", "No fever or signs of infection", "Swelling stable or reducing", "Elbow flexion and extension are comfortable"]
      },
      {
        name: "Restore movement and function",
        timeframe: "Weeks 1–4",
        goals: ["Regain full pain-free elbow flexion, extension and forearm rotation", "Maintain upper-limb strength and conditioning", "Return to daily tasks without pressure on the elbow"],
        precautions: ["Keep padding on the elbow for tasks involving pressure", "Avoid repeated aspiration or manipulation of the bursa", "Stop and review if swelling increases or the elbow becomes hot or red"],
        exercises: [
          { name: "Active elbow flexion–extension through full range", dosage: "3 × 15, 3 times a day", cues: "Smooth tempo; stop at gentle end-range tension" },
          { name: "Forearm pronation and supination (elbow at 90°)", dosage: "3 × 15, 2–3 times a day", cues: "Elbow supported on a pad or towel, not on the olecranon tip" },
          { name: "Light band row (elbow free of the surface)", dosage: "3 × 12, daily", cues: "Keep the elbow clear of any hard surface", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } },
          { name: "Gentle triceps activation (isometric extension against the other hand)", dosage: "5 × 20–30 s at about 30–50% effort, daily", cues: "No pressure on the elbow tip" },
          { name: "Grip squeeze", dosage: "3 × 10 holds of 5 s, daily", cues: "Keep the wrist neutral", figure: { pose: "ex-grip", view: "lateral" } }
        ],
        progressionCriteria: ["Full or near-full pain-free elbow range", "Swelling resolved or minimal, with no warmth", "Normal daily activities without pressure on the elbow", "No fever or other systemic features"]
      },
      {
        name: "Strengthen & return to loading",
        timeframe: "Weeks 3–8+ (criteria-based)",
        goals: ["Rebuild triceps and shoulder girdle strength", "Return to work, sport and floor-based tasks with padding", "Prevent recurrence by changing how pressure is applied"],
        precautions: ["Introduce pressure in graded steps with a thick pad", "Avoid direct blows and sustained leaning on the elbow tip until the bursa is settled", "Report swelling that returns or becomes warm"],
        exercises: [
          { name: "Incline or knee push-up (elbow tracking back, no pressure on the tip)", dosage: "3 × 8–12, 2–3 times a week", cues: "Keep the elbow tip clear of the surface", figure: { pose: "ex-press-up", view: "lateral", props: ["mat"] } },
          { name: "Overhead press (light)", dosage: "3 × 10, 2–3 times a week", cues: "Smooth tempo and neutral wrist", figure: { pose: "ex-overhead-press", view: "lateral", props: ["dumbbell"] } },
          { name: "Band or dumbbell row", dosage: "3 × 10–12, 3 s lowering, 3 times a week", cues: "Elbow free of surfaces", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } },
          { name: "Graded padded pressure exposure", dosage: "Start with 1–2 min of padded leaning and build as tolerated over 2–4 weeks (clinical convention)", cues: "Use a thick pad; stop if the bursa becomes tender or swollen" },
          { name: "Work- and sport-specific drills (padded contact, floor work, desk set-up)", dosage: "Start at a fraction of normal volume and build in steps of 10–20% a week (clinical convention)", cues: "Check desk height and arm support; use elbow guards in sport" }
        ],
        progressionCriteria: ["No swelling, warmth or tenderness at the bursa", "Full strength and range of motion", "Tolerates padded pressure and a full work or training load for at least 2 weeks without a flare", "Padding and workstation or technique changes are in place"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated return-to-sport criteria were identified in the sources reviewed; the criteria below reflect clinical convention",
      "Swelling resolved or minimal, with no heat, redness or tenderness at the bursa",
      "Full, pain-free elbow range of motion and normal triceps and shoulder strength compared with the other side",
      "If the bursitis was septic: antibiotics completed and clearance from the treating doctor [r3]",
      "Tolerates padded pressure and sport-specific contact for at least 2 weeks without swelling returning",
      "Protective padding or modified technique is in place [r4]"
    ],
    tests: ["Inspection and palpation of the bursa (swelling, warmth, tenderness)", "Active and passive elbow range of motion compared with the other side", "Resisted triceps and flexor strength", "Graded padded-pressure and sport-specific trial with a next-day swelling check"]
  },
  prognosis: "Aseptic olecranon bursitis usually resolves with conservative care. In a randomised trial of non-septic bursitis, 83% of the compression-with-NSAIDs group, 65% of the aspiration group and 85% of the aspiration-with-steroid group had resolved by 4 weeks, with times to resolution of about 3.2, 3.1 and 2.3 weeks; longer symptom duration before treatment predicted failure at 4 weeks, and the bursitis can recur [r6]. In a military population the mean symptom duration was 17.58 weeks and 19% needed a specialist referral [r4]. Septic bursitis responds to antibiotics: in a series of 40 septic cases, 95% resolved without open surgical drainage and none had recurrence or serious complications [r5]. Surgery carries higher complication rates than non-surgical care [r7]. Long-term recurrence rates were not quantified in the sources reviewed.",
  prevention: [
    "Avoid prolonged leaning on the elbow and use padding or elbow guards for tasks and sports that involve pressure or contact. Protective gear appeared the most promising preventive measure in a military population [r4].",
    "Clean and cover any graze or wound over the elbow, because skin injury is the usual route for septic bursitis (relative risk 3.86 for a moderately or severely injured elbow) [r9].",
    "Review desk height and arm support so that the elbow tip is not the resting point (clinical observation; not tested in the sources reviewed).",
    "Treat underlying gout or inflammatory arthritis to reduce inflammatory bursitis [r3].",
    "Avoid repeated needling or steroid injection of a recurrent bursitis without a specialist plan, because injection increased complications in a systematic review [r7]."
  ],
  clinicalPearls: [
    "The first job is to exclude infection. Tenderness (88% vs 36%), erythema (83% vs 27%), warmth (84% vs 56%) and fever (38% vs 0%) were more frequent in septic bursitis, but the findings overlap and fever was present in only 38% of septic cases [r1].",
    "Always check the skin. A break over the bursa was linked to septic bursitis (relative risk 3.86 for a moderately or severely injured elbow in a cluster), and S. aureus was cultured in 87.5% of one series [r9,r5].",
    "Preserved passive elbow movement points to the bursa; pain on gentle passive movement points to the joint and needs urgent assessment (clinical reasoning).",
    "Do not reach for the steroid injection. In a trial aspiration with steroid resolved fastest (2.3 vs 3.1 and 3.2 weeks) but did not differ at 4 weeks, and a systematic review found more complications and skin atrophy [r6,r7].",
    "Compression with a short NSAID course resolved 83% in 4 weeks in the trial, so it is a reasonable first step for aseptic cases without red flags [r6].",
    "Screen for gout, rheumatoid arthritis and medication risk factors in recurrent or bilateral cases [r3,r5]."
  ],
  related: ["triceps-tendon-rupture", "prepatellar-bursitis", "elbow-dislocation", "cubital-tunnel-syndrome", "medial-elbow-tendinopathy", "lateral-elbow-tendinopathy"],

  references: [
    { id: "r1", citation: "Reilly D, Kamineni S. Olecranon bursitis. J Shoulder Elbow Surg. 2016;25(1):158-67.", pmid: "26577126", doi: "10.1016/j.jse.2015.08.032", type: "narrative-review", year: 2016 },
    { id: "r2", citation: "Blackwell JR, Hay BA, Bolt AM, et al. Olecranon bursitis: a systematic overview. Shoulder Elbow. 2014;6(3):182-90.", pmid: "27582935", doi: "10.1177/1758573214532787", type: "narrative-review", year: 2014 },
    { id: "r3", citation: "Khodaee M. Common superficial bursitis. Am Fam Physician. 2017;95(4):224-31.", pmid: "28290630", type: "narrative-review", year: 2017 },
    { id: "r4", citation: "Schermann H, Karakis I, Dolkart O, et al. Olecranon bursitis in a military population: epidemiology and evidence for prolonged morbidity in combat recruits. Mil Med. 2017;182(9):e1976-80.", pmid: "28885965", doi: "10.7205/MILMED-D-16-00402", type: "cohort", year: 2017 },
    { id: "r5", citation: "Gómez-Rodríguez N, Méndez-García MJ, Ferreiro-Seoane JL, et al. [Infectious bursitis: study of 40 cases in the pre-patellar and olecranon regions]. Enferm Infecc Microbiol Clin. 1997;15(5):237-42.", pmid: "9376379", type: "cohort", year: 1997 },
    { id: "r6", citation: "Kim JY, Chung SW, Kim JH, et al. A randomized trial among compression plus nonsteroidal antiinflammatory drugs, aspiration, and aspiration with steroid injection for nonseptic olecranon bursitis. Clin Orthop Relat Res. 2016;474(3):776-83.", pmid: "26463567", doi: "10.1007/s11999-015-4579-0", type: "rct", year: 2016 },
    { id: "r7", citation: "Sayegh ET, Strauch RJ. Treatment of olecranon bursitis: a systematic review. Arch Orthop Trauma Surg. 2014;134(11):1517-36.", pmid: "25234151", doi: "10.1007/s00402-014-2088-3", type: "systematic-review", year: 2014 },
    { id: "r8", citation: "Curti S, Mattioli S, Bonfiglioli R, et al. Elbow tendinopathy and occupational biomechanical overload: a systematic review with best-evidence synthesis. J Occup Health. 2021;63(1):e12186.", pmid: "33534951", doi: "10.1002/1348-9585.12186", type: "systematic-review", year: 2021 },
    { id: "r9", citation: "Wasserzug O, Balicer RD, Boxman J, et al. A cluster of septic olecranon bursitis in association with infantry training. Mil Med. 2011;176(1):122-4.", pmid: "21305974", doi: "10.7205/milmed-d-10-00117", type: "cohort", year: 2011 },
    { id: "r10", citation: "Reilly D, Kamineni S. The olecranon spur. J Shoulder Elbow Surg. 2015;24(6):980-7.", pmid: "25979555", doi: "10.1016/j.jse.2015.03.002", type: "narrative-review", year: 2015 }
  ],

  animation: {
    title: "How olecranon bursitis develops",
    phases: [
      {
        type: "moi", label: "Leaning on elbow", duration: 7, view: "lateral", environment: "office",
        actors: [{ id: "worker", kit: "worker" }],
        keyframes: [
          { t: 0, pose: "sit-desk", root: { x: 0 } },
          { t: 1.2, pose: "sit-desk", joints: { trunk: 35, shoulderR: 20, elbowR: 100 } },
          { t: 2.4, pose: "sit-desk", joints: { trunk: 40, shoulderR: 20, elbowR: 85 }, ease: "in" },
          { t: 3.4, pose: "sit-desk", joints: { trunk: 40, shoulderR: 20, elbowR: 105 } },
          { t: 4.4, pose: "sit-desk", joints: { trunk: 40, shoulderR: 20, elbowR: 85 } },
          { t: 5.4, pose: "sit-desk", joints: { trunk: 40, shoulderR: 20, elbowR: 105 } },
          { t: 6.4, pose: "sit-desk", joints: { trunk: 40, shoulderR: 20, elbowR: 90 } }
        ],
        props: [{ id: "dk", type: "desk" }],
        forces: [
          { t: [1.4, 3.0], at: "elbowR", dir: "down", label: "Body weight through the point of the elbow" },
          { t: [3.0, 5.8], at: "elbowR", dir: "backward", label: "Repeated pressure and sliding friction" }
        ],
        highlights: [{ t: [1.6, 7], at: "elbowR" }],
        captions: [
          { t: 0, text: "A student studies for hours at a hard desk." },
          { t: 1.2, text: "Leaning forward, body weight is carried through the point of the elbow." },
          { t: 2.4, text: "Thin skin is squeezed against the olecranon, and slides over it with every movement." },
          { t: 4.4, text: "Hours of repeated pressure and friction irritate the cushion between skin and bone." },
          { t: 5.6, text: "A knock or fall onto the elbow can do the same, or break the skin and let infection in." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "elbowR",
        captions: [{ t: 0, text: "Zooming into the right elbow from the outer side." }]
      },
      {
        type: "closeup", label: "Inside the elbow", duration: 10, scene: "elbow-lateral",
        actions: [
          { t: 0, do: "highlight", target: "olecranonBursa" },
          { t: 0.3, do: "label", target: "olecranonBursa", text: "Olecranon bursa (under the skin)" },
          { t: 1.0, do: "arrow", at: "olecranonTip", dir: "superior", label: "Pressure from leaning", size: "m" },
          { t: 1.3, do: "compress", target: "olecranonBursa", dur: 0.8 },
          { t: 2.6, do: "reset", target: "olecranonBursa" },
          { t: 3.3, do: "compress", target: "olecranonBursa", dur: 0.8 },
          { t: 4.2, do: "inflame", target: "olecranonBursa", amount: 0.5, dur: 1.2 },
          { t: 5.0, do: "swell", target: "olecranonBursa", amount: 0.8, dur: 1.4 },
          { t: 5.4, do: "pain", at: "olecranonTip", hold: 3 },
          { t: 6.2, do: "label", target: "olecranonBursa", text: "Inflamed, fluid-filled bursa" },
          { t: 7.4, do: "camera", at: "olecranonTip", zoom: 1.6, dur: 1.0 },
          { t: 9.2, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "The olecranon bursa is a thin fluid-filled sac between the point of the elbow and the skin." },
          { t: 1.0, text: "Leaning presses the skin against the bone, and the sac is squashed and sheared." },
          { t: 2.6, text: "With a break from pressure, the lining recovers." },
          { t: 3.3, text: "With repeated pressure, the lining becomes irritated and inflamed." },
          { t: 5.0, text: "Fluid collects and the bursa swells into a soft, often painless lump over the olecranon." },
          { t: 6.3, text: "If it becomes hot, red and tender, or you have a fever, suspect infection and seek review." },
          { t: 7.6, text: "The joint itself is usually normal, so elbow movement is typically preserved." }
        ]
      },
      {
        type: "micro", label: "Bursal lining", duration: 8, tissue: "bursa",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.4, stage: "friction" }, { t: 3.0, stage: "inflammation" }, { t: 4.8, stage: "effusion" }, { t: 6.4, stage: "resolution" }
        ],
        timeLabels: [{ t: 3.0, text: "Days" }, { t: 4.8, text: "Days to weeks" }, { t: 6.4, text: "About 2–4 weeks with treatment" }],
        captions: [
          { t: 0, text: "A thin synovial lining encloses a film of lubricating fluid." },
          { t: 1.4, text: "Repeated compression and shear irritate the lining cells." },
          { t: 3.0, text: "Inflammatory cells arrive and vessels dilate; the wall thickens." },
          { t: 4.8, text: "Excess fluid distends the bursa into a visible swelling." },
          { t: 6.4, text: "Protected from pressure, the fluid is resorbed and the lining settles." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "UL4" }
};
