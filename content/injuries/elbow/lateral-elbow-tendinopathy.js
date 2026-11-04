export default {
  id: "lateral-elbow-tendinopathy",
  name: "Lateral elbow tendinopathy (tennis elbow)",
  shortName: "Lateral elbow tendinopathy",
  aka: ["tennis elbow", "lateral epicondylitis", "lateral epicondylalgia", "lateral epicondylosis", "LET", "extensor carpi radialis brevis tendinopathy", "ECRB tendinopathy", "common extensor tendinopathy"],
  region: "elbow",
  tissues: ["tendon"],
  onset: "gradual",
  mechanismType: ["overuse"],
  populations: ["working-age adults (peak 45–54 years)", "manual workers and tool users", "keyboard and mouse users", "racquet-sport players", "current and former smokers"],
  sports: ["tennis", "squash", "badminton", "golf", "rock climbing", "weightlifting"],
  urgency: "routine",
  summary: "A load-related overuse tendinopathy of the common extensor origin (ECRB) at the lateral epicondyle, causing pain with gripping and wrist extension. Managed with education, load modification and progressive exercise.",
  keyFacts: [
    { label: "Typical recovery", value: "Usually self-limiting, but symptoms can persist beyond 1 year in up to 20% of people" },
    { label: "Return to sport", value: "Criteria-based, not time-based: pain-free gripping and tolerance of full work or sport load; most people in trials were much improved by 6–12 months" },
    { label: "Key test", value: "Tenderness at the lateral epicondyle plus pain on resisted wrist or middle-finger extension and gripping. In one small study (30 patients, all with the condition) sensitivity was 0.97 for Cozen's test and 0.87 for Mill's test" },
    { label: "Imaging", value: "Not needed to make the diagnosis. In 21 patients MRI showed tendinosis signal in 18, but the severity of the signal did not match symptoms" },
    { label: "Peak age", value: "45–54 years in a Finnish population sample; equally common in men and women" },
    { label: "Incidence", value: "Prevalence of definite lateral epicondylitis 1.3% in adults aged 30–64; incidence fell from 4.5 to 2.4 per 1000 people between 2000 and 2012 in one US cohort" }
  ],
  overview: "Lateral elbow tendinopathy (LET), widely known as tennis elbow, is a load-related overuse condition of the common extensor tendon at the lateral epicondyle, centred on the origin of extensor carpi radialis brevis (ECRB) [r1,r2]. The name 'tennis elbow' is a misnomer. Tennis players are only a minority of cases (clinical observation); in a general population sample the condition was linked to repetitive and forceful arm activity, smoking and age in working adults [r3]. It is a tendinopathy, not a primary tendonitis: MRI shows signal change consistent with tendinosis, and the severity of that change does not track symptoms [r4].\n\nTendon pathology is only one part of the problem. An integrative model describes three interacting components: local tendon pathology, changes in the pain system and impairment of the motor system [r5]. This is why a one-size-fits-all treatment performs poorly, and why prognostic factors such as neck pain, tendon tears and central sensitisation are worth assessing [r1]. First-line care is education, load modification and progressive exercise. Corticosteroid injection relieves pain in the short term but led to worse outcomes and more recurrence at 26 and 52 weeks in a placebo-controlled trial [r6], and a head-to-head trial showed the same reversal against physiotherapy [r7].\n\nThe natural history is usually favourable: most people in a wait-and-see group reported a successful outcome at 52 weeks [r7]. However, symptoms persist beyond a year in up to 20% [r2], and about 1 in 10 people with symptoms at 6 months went on to surgery in one population cohort [r8].",

  epidemiology: {
    text: "In a Finnish population sample of 4,783 adults aged 30–64, the prevalence of definite lateral epicondylitis was 1.3% (medial epicondylitis 0.4%). Prevalence did not differ between men and women and was highest at 45–54 years [r3]. A BMJ Clinical Evidence review states that lateral elbow pain affects up to 3% of the population [r2]. In a population-based incidence cohort followed from 2000 to 2012, the age- and sex-adjusted annual incidence fell from 4.5 to 2.4 per 1000 people; the authors suggested that this may reflect changes in diagnostic patterns or a true decrease. The 2-year recurrence rate was 8.5% [r8]. Smoking and repetitive, forceful arm use are the best-supported modifiable associations, although association does not prove cause [r3].",
    riskFactors: {
      intrinsic: [
        "Age 45–54 years: highest prevalence in a Finnish population sample [r3]",
        "Current smoking (adjusted OR 3.4, 95% CI 1.4–8.3) and former smoking (OR 3.0, 95% CI 1.3–6.6) were associated with definite lateral epicondylitis [r3]",
        "Neck pain, a tendon tear on imaging and central sensitisation may carry prognostic value; they are markers to assess, not proven causes [r1]"
      ],
      extrinsic: [
        "Repetitive arm movements combined with forceful activities: OR 5.6 (95% CI 1.9–16.5) for possible or definite lateral epicondylitis versus neither exposure [r3]",
        "Sudden rises in gripping or wrist-extension load relative to tendon capacity, for example a new job, new tools or a return to racquet sport (modifiable; consistent with the load-capacity model) [r9]",
        "Tool, racquet and workstation factors such as handle size, string tension and keyboard or mouse set-up (clinical observation; not tested in the sources reviewed)"
      ]
    }
  },

  mechanism: {
    summary: "Lateral elbow tendinopathy has no single injury moment. It develops when repeated or sustained gripping and wrist extension load the common extensor origin faster than the tendon can adapt. During a grip the extensor carpi radialis brevis and its neighbours hold the wrist extended and stable while the finger flexors squeeze, so a heavy or repetitive grip (hammering, lifting, a racquet stroke, mouse work) transmits high tension to the origin at the lateral epicondyle [r2,r4]. When load repeatedly exceeds capacity, the tendon moves from a reactive state towards disrepair and degeneration [r9].",
    sequence: [
      "The hand grips a tool, racquet or load and the forearm extensors contract to hold the wrist in extension and the forearm steady.",
      "An impact or heavy load (a hammer strike, ball contact, a lift with the palm down) drives the wrist towards flexion, and the wrist extensors contract, mostly isometrically or eccentrically, to resist it.",
      "Tension travels through the muscle bellies into the common extensor tendon and concentrates at its origin on the lateral epicondyle, centred on the ECRB enthesis [r4].",
      "Cycle after cycle, with too little recovery or a sudden rise in load, repeated tension exceeds what the tendon can tolerate [r9].",
      "Tenocytes respond, the matrix swells and the collagen becomes disorganised, so the tendon thickens [r9].",
      "The tendon becomes sensitised and the pain system changes, so pain appears at lighter loads such as lifting a cup or shaking hands [r5].",
      "Pain-limited grip and motor system impairment follow, which feeds back into how the arm is used [r5]."
    ],
    variants: [
      { name: "Occupational and manual loading", description: "Repetitive, forceful tasks such as hammering, screwing, lifting and sustained gripping are the main exposures in the general population [r3]." },
      { name: "Racquet sports", description: "Backhand strokes and a tight or poorly sized grip load the wrist extensors on impact. Tennis accounts for a minority of cases (clinical observation; not quantified in the sources reviewed)." },
      { name: "Sustained low-level extension", description: "Keyboard and mouse work holds the wrist in extension for long periods. This is a plausible overload route in office workers (clinical observation; not quantified in the sources reviewed)." },
      { name: "Load spike", description: "A sudden increase in gripping or wrist-extension load, such as a new job, a decorating project or a return to sport, can overload a tendon that lacks capacity [r9]." }
    ]
  },

  anatomy: {
    text: "The common extensor tendon arises from the lateral epicondyle of the humerus and is formed by extensor carpi radialis brevis, extensor digitorum, extensor digiti minimi and extensor carpi ulnaris. Extensor carpi radialis longus arises from the supracondylar ridge just above. The ECRB tendon lies deep to ECRL at the origin and is the usual site of pathology: lateral epicondylitis is a painful condition of the proximal enthesis of the ECRB tendon [r4]. Deep to the origin lie the radial collateral ligament complex and the radiocapitellar joint, and distally the posterior interosseous nerve passes through the supinator beneath the arcade of Frohse, which is why radial tunnel syndrome is a key mimic [r10].",
    structures: [
      { name: "Common extensor tendon (ECRB origin)", role: "Transmits tension from the wrist and finger extensors to the lateral epicondyle; the ECRB origin is the usual site of tendinopathy [r4]" },
      { name: "Extensor carpi radialis brevis (ECRB)", role: "Extends and stabilises the wrist during gripping; its origin lies deep to the common extensor tendon" },
      { name: "Extensor carpi radialis longus and brachioradialis", role: "Wrist extension and elbow flexion; they lie superficial and anterior to the ECRB origin and often share tenderness" },
      { name: "Extensor digitorum and ECU", role: "Finger extension and ulnar wrist extension; contribute to the common extensor origin" },
      { name: "Radial collateral and lateral ulnar collateral ligaments", role: "Lateral elbow stability; they lie deep to the origin and are a separate pain source after trauma" },
      { name: "Posterior interosseous nerve and arcade of Frohse", role: "Motor nerve to the finger and thumb extensors; compression under the arcade gives lateral forearm pain that mimics LET [r10]" },
      { name: "Capitellum, radial head and annular ligament", role: "Radiocapitellar joint surfaces; intra-articular pathology produces lateral pain with a different pattern" }
    ]
  },

  pathophysiology: {
    tissueDamage: "Lateral elbow tendinopathy is a failure of the common extensor tendon to adapt to load, not a rupture. In the continuum model, repeated overload of a tendon with insufficient capacity produces a reactive response, then attempted repair with matrix disorganisation (disrepair), and in some people a degenerative state with areas of cell death [r9]. The lesion is therefore better described as degenerate and thickened tendon than as a primarily inflammatory tendonitis. MRI supports this: moderate or severe signal change consistent with tendinosis was present in 18 of 21 people with chronic lateral epicondylitis [r4].\n\nLocal tendon pathology is only one of three interrelated components. The integrative model adds changes in the pain system and impairment of the motor system [r5]. Structure and symptoms are only loosely linked: in the same MRI study the severity of signal change did not correlate positively with symptoms, which questions the value of MRI for assessment [r4]. Prognostic markers such as neck pain, tendon tears and central sensitisation show that the tendon is not the whole story [r1].",
    structures: [
      { name: "Common extensor tendon (ECRB origin)", effect: "Thickened, disorganised tendon at the proximal enthesis. MRI studies grade both the degree of tendinosis and the length of tendon separation from the epicondyle [r4]" },
      { name: "Tendon-bone enthesis", effect: "Site of focal tenderness at the lateral epicondyle; the bone is usually normal" },
      { name: "Lateral collateral ligament complex", effect: "Lies deep to the origin and can be a coexisting source of pain; check lateral stability if there is a history of trauma (clinical reasoning)" },
      { name: "Posterior interosseous nerve", effect: "May be a coexisting or alternative source of lateral forearm pain; the diagnosis of radial tunnel syndrome is controversial and needs careful examination [r10]" }
    ],
    muscles: [
      { name: "Wrist extensors (ECRB, ECRL, extensor digitorum)", effect: "Pain-related weakness, particularly of pain-free grip, is part of the motor system impairment seen in the condition [r5]. Pain-free grip strength is a standard outcome measure [r11]." },
      { name: "Brachioradialis and supinator", effect: "Co-contract with the extensors in gripping and forearm rotation, so they share load and can be a secondary source of forearm pain (clinical reasoning)" },
      { name: "Scapular and shoulder girdle muscles", effect: "Capacity of the proximal chain determines how much load is passed to the forearm; assess and load it as part of the programme (clinical reasoning; no trial evidence was reviewed for this page)" }
    ],
    cellular: [
      { phase: "Reactive response", timing: "Days to weeks after a load spike", description: "Tenocytes activate and produce proteoglycan, so the matrix takes up water and the tendon thickens. This short-term adaptive change can reverse if load is adjusted [r9]." },
      { phase: "Tendon disrepair", timing: "Weeks to months", description: "Cell numbers and protein production rise as the tendon attempts repair. Collagen becomes more disorganised and the matrix expands [r9]." },
      { phase: "Degenerative tendinopathy", timing: "Months to years", description: "Areas of cell death and disorganised matrix. Reversal of the structure is limited, but pain and function can still improve [r9]." },
      { phase: "Load adaptation", timing: "Weeks to months of progressive loading", description: "In trials, exercise outperformed passive treatments over weeks to months, although the effect was small and tissue-level change was not measured in the sources reviewed [r11]." }
    ],
    systems: [
      { system: "Nervous system and pain processing", effect: "Changes in the pain system are one of the three model components [r5]. Central sensitisation may carry prognostic value [r1]." },
      { system: "Musculoskeletal chain", effect: "Neck pain is a prognostic marker, so screen the cervical spine and shoulder girdle in persistent cases [r1]." },
      { system: "Vascular and systemic health", effect: "Smoking was associated with definite lateral epicondylitis (OR 3.4 for current smokers). The mechanism is not established [r3]." },
      { system: "Behavioural and occupational", effect: "Combined repetitive and forceful work carries the highest odds [r3]. Whether the person can modify tasks, and whether they keep up the exercise programme, strongly shapes recovery (clinical reasoning)." }
    ]
  },

  grading: {
    system: "Tendinopathy continuum (Cook and Purdam): a structural staging model, used alongside pain and function",
    grades: [
      { grade: "Reactive tendinopathy", description: "Short-term adaptive response to a load spike: a thickened but otherwise intact tendon, with pain that rises quickly with load [r9].", prognosis: "Often settles with load adjustment followed by gradual re-exposure" },
      { grade: "Tendon disrepair", description: "Attempted repair with more matrix disorganisation if overload continues [r9].", prognosis: "Responds to progressive loading; some change can partly reverse" },
      { grade: "Degenerative tendinopathy", description: "Focal areas of cell death and disorganised matrix in a thickened tendon [r9].", prognosis: "Structure rarely normalises, but capacity can be rebuilt and pain reduced; recovery is usually slower" }
    ]
  },

  timeframes: {
    summary: "The continuum describes load history, not a calendar, so the stage durations are illustrative and overlap. In the 52-week physiotherapy trial most participants in the physiotherapy and wait-and-see groups reported success at 1 year [r7], yet symptoms persist beyond a year in up to 20% [r2].",
    healing: [
      { phase: "Reactive response to overload", startDay: 0, endDay: 21, description: "Tenocyte activation and matrix swelling after a load spike; settles with load adjustment [r9]" },
      { phase: "Tendon disrepair", startDay: 14, endDay: 90, description: "Attempted repair with matrix disorganisation if overload continues [r9]" },
      { phase: "Degenerative change", startDay: 60, endDay: 365, description: "Cell death and disorganised matrix in long-standing overload; limited reversibility, although pain can still improve" },
      { phase: "Exercise-based recovery", startDay: 0, endDay: 84, description: "Programmes in trials ran from 8 physiotherapy sessions with outcomes at 6 weeks [r7] to 4–6 visits spread over 12 weeks [r12]" }
    ],
    milestones: [
      { label: "4-week review", day: 28, note: "Placebo injection plus physiotherapy: 39% completely recovered or much improved versus 10% without physiotherapy [r6]" },
      { label: "6-week review", day: 42, note: "Corticosteroid injection was best at 6 weeks, but 47 of 65 successes later regressed; physiotherapy was better than wait-and-see [r7]" },
      { label: "12-week programme complete", day: 84, note: "Both groups improved from baseline at 6, 12 and 24 weeks in a self-management programme [r12]" },
      { label: "26-week review", day: 182, note: "Complete recovery or much improved: 55% after corticosteroid injection versus 85% after placebo injection [r6]" },
      { label: "1-year review", day: 365, note: "Most participants in the wait-and-see and physiotherapy groups reported success [r7]; up to 20% still have symptoms [r2]" }
    ],
    returnToSport: "Criteria-based; there is no standard time. Many people continue to work and play with load modification. Most participants in trials were much improved by 6–12 months [r7,r6]. Consider specialist review if symptoms have not resolved by about 6 months [r8]."
  },

  clinicalPresentation: {
    symptoms: [
      "Pain over the outer elbow (lateral epicondyle), sometimes spreading into the forearm",
      "Pain triggered by gripping and lifting, especially with the forearm pronated: shaking hands, lifting a kettle or a cup, turning a screwdriver, using a mouse",
      "Gradual onset over weeks, often after a change in work, tools or sport",
      "Reduced or painful grip strength, and difficulty carrying bags",
      "Stiffness after rest and pain after activity, or at night in more irritable cases"
    ],
    signs: [
      "Focal tenderness at or just distal to the lateral epicondyle, over the ECRB origin",
      "Pain on resisted wrist extension and on resisted middle-finger extension",
      "Pain on passive wrist flexion with the elbow extended and forearm pronated (tendon stretch)",
      "Reduced pain-free grip strength compared with the other side",
      "Full elbow range with no effusion, and a normal neurological examination"
    ]
  },

  assessment: {
    subjective: [
      "Pain site, spread and behaviour: lateral epicondyle versus deeper forearm pain (radial tunnel) versus neck-arm pain [r1,r10]",
      "Aggravating tasks: gripping, lifting palm-down, racquet or tool use, keyboard and mouse hours",
      "Recent load change: new job, tools, equipment or sport, or a return after a break",
      "Duration and previous treatment, including any corticosteroid injection and its effect (injection is linked to worse outcomes at 26 and 52 weeks) [r6]",
      "Neck pain, arm paraesthesia or weakness, and shoulder history, because neck pain may carry prognostic value [r1]",
      "Irritability: how fast pain comes on, how long it lasts, and night pain",
      "Smoking status, occupation and the patient's goals and ability to modify tasks [r3]"
    ],
    observation: [
      "Elbow, forearm and wrist posture and obvious swelling (swelling suggests a different diagnosis)",
      "Muscle bulk of the forearm extensors compared with the other side",
      "Task observation: how the person grips, lifts, types or swings a racquet",
      "Workstation set-up, tool handle size and grip technique (clinical observation)"
    ],
    palpation: [
      "Tenderness at the lateral epicondyle and just distal to it over the ECRB origin; compare with the supracondylar ridge (ECRL), radial head and joint line",
      "Tenderness along the extensor mass and over the radial tunnel, a few centimetres distal to the epicondyle, where deep tenderness points towards the posterior interosseous nerve [r10]",
      "Lateral epicondyle tenderness is expected in this condition; it is sensitive but not specific, so pair it with load provocation"
    ],
    rangeOfMotion: [
      "Elbow flexion, extension, pronation and supination are usually full; a block or an effusion suggests an intra-articular cause",
      "Passive wrist flexion with the elbow extended and the forearm pronated stretches the extensor origin and often reproduces pain",
      "Cervical, thoracic and shoulder range, to screen the proximal chain and for referred pain [r1]"
    ],
    strength: [
      "Pain-free grip strength with a dynamometer, compared with the other side. It is a standard outcome measure in trials [r11]",
      "Isometric wrist extension and middle-finger extension: pain and force",
      "Wrist and forearm capacity: resisted supination, pronation and radial deviation",
      "Scapular and shoulder strength and endurance, as the proximal chain shares the load (clinical reasoning)"
    ],
    neuro: [
      "Finger and thumb extension (the posterior interosseous nerve), sensation over the dorsum of the hand, and reflexes",
      "Cervical screen for radiculopathy: neck movement reproducing arm pain, Spurling-type testing, dermatomes and reflexes",
      "Radial tunnel provocation (pain with resisted supination or resisted middle-finger extension with deep tenderness distal to the epicondyle). The validity of these tests is unclear [r10]"
    ],
    functional: [
      "Pain with a standardised grip task, such as lifting a weighted cup or a jug with the forearm pronated",
      "Task-specific provocation: hammering, typing or mouse use, racquet stroke",
      "Repeated-grip endurance (squeeze and release) with pain rating"
    ],
    specialTests: [
      { name: "Palpation of the lateral epicondyle and ECRB origin", purpose: "Localise pain to the common extensor origin", procedure: "With the elbow flexed to about 90° and the forearm supported, palpate the lateral epicondyle and the tissue just distal to it. Compare with the other side.", positive: "Focal tenderness that reproduces the familiar pain. No accuracy figure was identified in the sources reviewed.", refs: [] },
      { name: "Cozen's test (resisted wrist extension)", purpose: "Reproduce pain at the extensor origin with a wrist-extensor contraction", procedure: "With the elbow flexed or extended and the forearm pronated, the patient makes a fist and extends the wrist against the examiner's resistance while the examiner palpates the lateral epicondyle.", positive: "Sharp lateral epicondylar pain on resisted wrist extension. Sensitivity 0.967 in a single case series of 30 patients who all had ultrasound-supported lateral epicondylitis, so specificity could not be estimated.", sensitivity: "0.967 (30 patients, all with the condition)", specificity: "Not estimable (all patients had the condition)", refs: ["r13"] },
      { name: "Mill's test (passive stretch)", purpose: "Stretch the extensor origin", procedure: "With the shoulder relaxed, the examiner pronates the forearm, flexes the wrist and extends the elbow while palpating the lateral epicondyle.", positive: "Reproduction of lateral epicondylar pain. Sensitivity 0.867 in the same small case series; specificity could not be estimated.", sensitivity: "0.867 (30 patients, all with the condition)", specificity: "Not estimable (all patients had the condition)", refs: ["r13"] },
      { name: "Maudsley's test (resisted middle-finger extension)", purpose: "Load the extensor digitorum and ECRB via the third ray", procedure: "With the elbow extended and the forearm pronated, the patient extends the middle finger against resistance.", positive: "Pain at the lateral epicondyle. Sensitivity 0.833 in the same small case series. Its validity for radial tunnel syndrome or for chronic lateral elbow pain in general is unclear, so a positive test does not separate the two [r10].", sensitivity: "0.833 (30 patients, all with the condition)", specificity: "Not estimable (all patients had the condition)", refs: ["r13", "r10"] },
      { name: "Cervical and neural screen", purpose: "Exclude cervical radiculopathy and radial tunnel syndrome as the main source", procedure: "Test cervical movement and Spurling-type provocation, upper-limb neurological signs, and tenderness distal to the epicondyle over the radial tunnel.", positive: "Arm pain reproduced by neck movement, dermatomal or myotomal signs, or deep tenderness over the radial tunnel with weak finger extension. Accuracy figures were not identified in the sources reviewed.", refs: ["r1", "r10"] }
    ],
    clinicalRules: [
      { name: "Clinical diagnosis", description: "Diagnosis rests on lateral epicondylar pain, tenderness at the ECRB origin, and pain on resisted wrist or middle-finger extension and gripping, after excluding neck, radial tunnel and intra-articular causes [r1]. No validated clinical prediction rule was identified in the sources reviewed." }
    ],
    outcomeMeasures: [
      { name: "Patient-Rated Tennis Elbow Evaluation (PRTEE)", use: "0–100 questionnaire of pain and function in lateral elbow tendinopathy, higher score = worse; used alongside provocative tests in a diagnostic study [r13]. Track at baseline and every 4–6 weeks." },
      { name: "Pain-free grip strength (dynamometer)", use: "Primary outcome in trials of exercise; a clinically significant difference was found for exercise versus corticosteroid injection at short, mid and long-term follow-up [r11]" },
      { name: "QuickDASH or DASH", use: "Upper-limb disability questionnaire used in tendinopathy trials and MRI studies [r4,r14]" },
      { name: "Global rating of change", use: "Single question of complete recovery or much improvement; the primary outcome in the main corticosteroid and physiotherapy trials [r6,r7]" },
      { name: "Pain intensity (NRS 0–10) with a standard grip task", use: "Simple measure of provocation to guide loading" }
    ],
    imaging: [
      { modality: "Plain radiograph", indication: "After trauma, or if a bony cause is suspected (loose body, osteoarthritis, calcification)", findings: "Usually normal in tendinopathy" },
      { modality: "Ultrasound", indication: "Diagnosis uncertain, or before an invasive procedure", findings: "Tendon thickening and hypoechoic change at the origin. It supports the clinical picture but does not change first-line care. Ultrasound was used to confirm the diagnosis in a diagnostic study [r13]." },
      { modality: "MRI", indication: "Persistent symptoms with an atypical picture, suspected intra-articular or ligament pathology, or surgical planning", findings: "Signal change consistent with tendinosis in 18 of 21 patients with chronic disease, but severity did not correlate positively with symptoms [r4]." }
    ]
  },

  differentials: [
    { name: "Radial tunnel syndrome / PIN compression", id: "radial-tunnel-syndrome", distinguishing: "Deeper aching in the proximal forearm, tenderness a few centimetres distal to the epicondyle, often night pain, and no focal epicondylar tenderness. The diagnosis is controversial and the standard tests have unclear validity [r10]. It can coexist with LET." },
    { name: "Cervical radiculopathy (C6–C7)", id: "cervical-radiculopathy", distinguishing: "Neck pain, symptoms reproduced by neck movement, paraesthesia or myotomal and reflex change. Neck pain may also be a prognostic factor in LET [r1]." },
    { name: "Osteochondritis dissecans of the capitellum", id: "capitellar-ocd", distinguishing: "Adolescent throwing or gymnastic athlete with lateral pain, catching or locking and reduced extension; imaging shows the lesion." },
    { name: "Radial head fracture", id: "radial-head-fracture", distinguishing: "Trauma (fall on the outstretched hand), swelling, a block to forearm rotation and bony tenderness at the radial head." },
    { name: "Posterolateral rotatory instability or lateral collateral ligament injury", distinguishing: "Past dislocation or trauma, a sense of giving way or clicking when pushing up from a chair; positive pivot-shift or chair-push-up tests." },
    { name: "Intra-articular pathology (synovial plica, osteoarthritis, loose body)", distinguishing: "Pain with passive elbow movement or end-range, catching, an effusion, and a loss of range." },
    { name: "Medial elbow tendinopathy", id: "medial-elbow-tendinopathy", distinguishing: "Same load-capacity mechanism at the common flexor origin, with pain on the inner elbow and with resisted wrist flexion and pronation. It can coexist." },
    { name: "Referred pain from the shoulder or trigger points", distinguishing: "Pain reproduced by shoulder movement or by pressing a tender band in the forearm extensors or triceps, without epicondylar tenderness." }
  ],
  redFlags: [
    "Elbow trauma with swelling, deformity or a block to movement: suspect fracture or dislocation. Arrange radiographs and same-day medical review.",
    "Weakness of finger and thumb extension or a wrist drop, with or without forearm pain: suspect posterior interosseous nerve palsy or a more proximal radial nerve lesion. Refer for urgent neurological and surgical review.",
    "Neck-arm pain with arm weakness, spreading numbness, reflex change or signs of myelopathy (clumsy hands, gait change): refer for urgent spinal assessment.",
    "A hot, red, swollen elbow with fever or systemic illness: suspect septic arthritis or infection. Refer for same-day emergency assessment.",
    "Constant night or rest pain unrelated to load, unexplained weight loss, or a past history of cancer: suspect a bone or soft-tissue tumour or inflammatory disease. Arrange imaging and medical review.",
    "Pain that has not improved after about 6 months of well-delivered exercise-based care: discuss with a doctor, because about 1 in 10 people with symptoms at 6 months proceeded to surgery in one cohort [r8]."
  ],

  management: {
    principles: "Treat lateral elbow tendinopathy as a load-capacity problem in a person, not as a tendon inflammation to be injected. Explain the condition, agree on realistic timelines and modify the aggravating tasks rather than stopping all activity. Start progressive exercise, which outperformed corticosteroid injection and passive treatments in a meta-analysis, although the certainty was low and the effects small [r11]. Exercise dose varies widely across trials, so choose the load by symptom response, not by a fixed protocol [r11]. Avoid corticosteroid injection, which gave short-term relief but worse recovery and more recurrence at 26 and 52 weeks [r6,r7,r15]. Tailor care to prognostic markers such as neck pain and sensitisation [r1]. Because it is usually self-limiting, give adequate time before moving to invasive options [r2].",
    medical: [
      { name: "Corticosteroid injection", description: "Large short-term pain relief (pooled SMD 1.44 versus no intervention), reversed at intermediate (-0.40) and long term (-0.31) in a systematic review [r15]. In a placebo-controlled trial of 165 people, 1-year complete recovery or much improved was 83% versus 96% with placebo, 1-year recurrence was 54% versus 12%, and at 26 weeks 55% versus 85% [r6]. In a three-arm trial, 47 of 65 early successes later regressed [r7]. Serious adverse events were rare across all tendinopathy sites (1 of 991 people had a tendon rupture) [r15].", evidence: "moderate", recommendation: "not-recommended", refs: ["r6", "r7", "r15"] },
      { name: "Autologous blood or platelet-rich plasma (PRP) injection", description: "A Cochrane review of 32 studies (2337 participants) found moderate-certainty evidence that these injections probably give little or no clinically important benefit over placebo injection for pain or function at 3 months, and the authors concluded the data do not support their use [r16].", evidence: "moderate", recommendation: "not-recommended", refs: ["r16"] },
      { name: "Non-corticosteroid injections (hyaluronate, botulinum toxin, prolotherapy)", description: "A systematic review reported pain reduction against placebo with these injections for lateral epicondylalgia and concluded they might be of benefit long term. It drew on few trials, and results should not be generalised [r15].", evidence: "very-limited", recommendation: "consider", refs: ["r15"] },
      { name: "Surgery (open, percutaneous or arthroscopic release or debridement of the ECRB origin)", description: "Reserved for people with long-standing disabling pain who have failed a well-delivered non-operative programme. A Cochrane review found insufficient evidence for or against surgery (5 trials, 191 participants, all at high risk of bias) [r17]. In a small sham-controlled trial (26 patients) excision of the degenerate ECRB gave no benefit over skin incision alone at 6 months or 2.5 years [r18].", evidence: "very-limited", recommendation: "consider", refs: ["r17", "r18"] },
      { name: "Oral or topical NSAIDs and simple analgesia", description: "May reduce pain enough to allow loading. These interventions were assessed in the BMJ Clinical Evidence review [r2], but the effect on the long-term course of the tendon was not extracted for this page.", evidence: "expert-opinion", recommendation: "consider", refs: ["r2"] }
    ],
    physio: [
      { name: "Education and load modification (not rest)", description: "Explain the load-capacity model and the usually favourable course, adjust grip, tools and tasks to keep pain tolerable, and avoid painful repetitive gripping. In a trial, most participants in the wait-and-see group reported success at 52 weeks [r7]; simple advice can resolve symptoms in some patients [r1].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r1", "r7"] },
      { name: "Progressive exercise therapy (isometric, isotonic, heavy slow and functional loading)", description: "A meta-analysis of 30 RCTs (2123 participants) found exercise outperformed corticosteroid injection on all outcomes at all time points except short-term pain, with clinically significant improvements in pain-free grip. Certainty was low or very low, the effect was small, and dose descriptions varied widely [r11].", evidence: "limited", recommendation: "recommended", refs: ["r11", "r1"] },
      { name: "Eccentric wrist extensor exercise", description: "A systematic review supported including eccentric exercise within a multimodal programme, and a small RCT (21 patients) added an eccentric wrist extensor exercise with large improvements in DASH (76% versus 13%) and pain (81% versus 22%) [r19,r14]. Isolated eccentric exercise was tested in only one low-quality study, and a 2015 review found that adding eccentric or concentric strengthening to stretching gave no additional benefit [r19,r20].", evidence: "conflicting", recommendation: "consider", refs: ["r19", "r14", "r20"] },
      { name: "Self-management programme with stretching and activity modification (strengthening optional)", description: "In a trial of 94 people, 4–6 visits over 12 weeks of education, stretching, pain management and activity modification reduced pain and improved function to 52 weeks, and adding strengthening gave no additional benefit [r12]. A review found the relative effectiveness of stretching versus strengthening is unknown [r20].", evidence: "limited", recommendation: "consider", refs: ["r12", "r20"] },
      { name: "Multimodal physiotherapy (elbow mobilisation with movement plus exercise)", description: "Eight sessions of mobilisation with movement and exercise beat wait-and-see at 6 weeks and corticosteroid injection after 6 weeks, with no difference from wait-and-see at 52 weeks [r7]. In a later trial, physiotherapy did not change 1-year recovery (91% versus 88%) or recurrence (29% versus 38%), although placebo injection plus physiotherapy was better at 4 weeks (39% versus 10%) [r6].", evidence: "conflicting", recommendation: "consider", refs: ["r7", "r6"] },
      { name: "Bracing, taping and other adjuncts (ESWT, laser, ultrasound, acupuncture)", description: "These interventions were assessed in the BMJ Clinical Evidence review [r2]; effect sizes were not extracted for this page. Use only as a short-term adjunct to loading, not as the main treatment.", evidence: "expert-opinion", recommendation: "consider", refs: ["r2"] },
      { name: "Passive treatment alone (rest, ice, therapeutic ultrasound, massage)", description: "Exercise outperformed passive interventions in a meta-analysis [r11]. Passive treatment does not build capacity and should not replace loading.", evidence: "limited", recommendation: "not-recommended", refs: ["r11"] },
      { name: "Cervicothoracic and shoulder girdle treatment when relevant", description: "Neck pain may carry prognostic value, and the proximal chain shares the load. Treat the neck and scapular control if the assessment finds a contribution [r1].", evidence: "expert-opinion", recommendation: "consider", refs: ["r1"] }
    ],
    education: [
      "This is a tendon that has become overloaded and thickened, not a torn tendon and not a simple inflammation. Its capacity can be rebuilt with progressive loading.",
      "Most people improve over months, even with little treatment, but a minority have symptoms beyond a year, so a steady exercise programme matters.",
      "A cortisone injection can give quick relief, but in trials people who had one were less likely to be recovered at 26 and 52 weeks and had more recurrences.",
      "Keep using the arm: change how you grip (palm up, two hands, larger handles, lighter loads) and avoid repeated painful gripping instead of resting completely.",
      "Some pain with exercise is acceptable if it settles within 24 hours. Pain that is clearly worse the next day means the load was too high.",
      "Scans do not show how bad the pain is. An abnormal scan does not mean the elbow is damaged beyond repair."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and follows the load-capacity model: settle irritability and modify tasks, build wrist-extensor and grip capacity with progressive strength work, add heavy and functional loading, then rebuild work- and sport-specific exposure. Move on when the objective criteria are met, not when a number of weeks has passed. Dosages below are typical clinical ranges, not prescriptions from a single trial, because trial protocols differ widely in load, duration and frequency [r11]. As a working rule (clinical convention), pain during exercise should stay at or below about 4/10 and settle within 24 hours. In a trial of a low-visit self-management programme, strengthening added no extra benefit [r12], so adjust the emphasis to the person's response and preference. Review adherence at every visit.",
    stages: [
      {
        name: "Settle pain & modify load",
        timeframe: "Weeks 0–3 (or until irritability settles)",
        goals: ["Reduce pain with gripping and lifting", "Explain the condition and agree on goals", "Modify the tasks and tools that aggravate", "Keep the rest of the arm and the neck and shoulder girdle conditioned"],
        precautions: ["Avoid repeated painful gripping and heavy palm-down lifting; do not rest completely", "Do not stretch hard into pain", "Avoid corticosteroid injection [r6]", "Keep pain at or below about 4/10 during exercise (clinical convention); screen for red flags"],
        exercises: [
          { name: "Isometric wrist extension hold (forearm supported)", dosage: "5 × 30–45 s at about 50–70% effort, 1–2 times daily (clinical convention)", cues: "Push steadily and breathe normally. Pain should be steady or fall during the hold.", figure: { pose: "ex-wrist-extension", view: "lateral", props: ["dumbbell"] } },
          { name: "Pain-free grip squeeze (putty or ball)", dosage: "3 × 10 holds of 5 s at a pain-free grip, daily", cues: "Squeeze to the point just before pain; keep the wrist neutral", figure: { pose: "ex-grip", view: "lateral" } },
          { name: "Task and tool modification", dosage: "Throughout the day", cues: "Lift palm up or with two hands, use larger handles, relax the grip, and keep the wrist neutral on the keyboard", figure: { pose: "typing", view: "lateral", props: ["desk", "keyboard"] } },
          { name: "Band row (scapular and shoulder capacity)", dosage: "3 × 10–12, 3 s lowering, daily or every second day", cues: "Squeeze the shoulder blades together and keep the wrist neutral", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } }
        ],
        progressionCriteria: ["Pain on resisted wrist extension at or below 3/10", "Pain-free grip is improving week on week", "Daily tasks (lifting a cup, shaking hands) are mild or pain-free", "Pain settles within 24 hours of exercise"]
      },
      {
        name: "Build tendon capacity",
        timeframe: "Weeks 2–8",
        goals: ["Increase wrist-extensor and grip strength", "Raise tolerance to repeated gripping", "Restore normal use of the arm at work and home"],
        precautions: ["Increase load only when the previous session settles within 24 hours", "Keep the forearm supported and the movement slow and controlled", "Stay with the moderate-load tempo; do not rush heavy loading"],
        exercises: [
          { name: "Wrist extension with dumbbell (forearm supported)", dosage: "3 × 12–15, 3 s up and 3 s down, once daily (clinical convention)", cues: "Slow, controlled lowering; stop short of sharp pain", figure: { pose: "ex-wrist-extension", view: "lateral", props: ["dumbbell"] } },
          { name: "Eccentric wrist extension with a flexible rubber bar (FlexBar)", dosage: "3 × 15 each session, 1–2 times daily (clinical convention)", cues: "Twist the bar with the uninvolved hand, then slowly release with the painful wrist extensors", figure: { pose: "ex-wrist-extension", view: "lateral" } },
          { name: "Progressive grip squeeze", dosage: "3 × 10 holds of 6–8 s, building resistance, daily", cues: "Add resistance only when pain stays at or below 4/10", figure: { pose: "ex-grip", view: "lateral" } },
          { name: "Forearm pronation and supination with a hammer", dosage: "3 × 12–15, slow, 3–4 times a week", cues: "Hold the weight near the handle end first, then lengthen the lever", figure: { pose: "grip-tool", view: "lateral", props: ["hammer"] } },
          { name: "Band row", dosage: "3 × 10–12, 3 s lowering, 3 times a week", cues: "Neutral wrist, shoulders down", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } }
        ],
        progressionCriteria: ["Pain on loaded wrist extension at or below 3/10", "Completes 3 × 15 slow repetitions with no next-day flare", "Pain-free grip about 70–80% of the other side, or clearly improving (clinical convention)", "PRTEE or QuickDASH falling from baseline"]
      },
      {
        name: "Heavy slow & functional strength",
        timeframe: "Weeks 6–16",
        goals: ["Build high-load strength in the wrist extensors and forearm", "Restore tolerance to carrying and weight-bearing through the hand", "Rebuild confidence in lifting and gripping"],
        precautions: ["Progress load by small steps and keep a slow tempo", "Avoid sudden jumps in carrying or gripping load", "Warm up before heavy sessions"],
        exercises: [
          { name: "Heavy slow wrist extension", dosage: "3–4 × 6–10, 3 s up and 3 s down, 2–3 times a week (clinical convention)", cues: "Load that makes the last 2 repetitions hard but controlled", figure: { pose: "ex-wrist-extension", view: "lateral", props: ["dumbbell"] } },
          { name: "Farmer carry (pronated grip)", dosage: "3 × 30–40 m, 2–3 times a week", cues: "Tall posture, neutral wrist, even grip", figure: { pose: "ex-farmer-carry", view: "lateral", props: ["kettlebell"] } },
          { name: "Push-up (weight-bearing through the hand)", dosage: "3 × 8–12, progress incline or depth", cues: "Keep the wrist neutral and spread the fingers", figure: { pose: "ex-press-up", view: "lateral", props: ["mat"] } },
          { name: "Heavy row", dosage: "3 × 8–10, 3 s lowering", cues: "Control the lowering; avoid a hard grip clench", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } },
          { name: "Grip endurance with a tool", dosage: "3 sets of 30–60 s of tool use or squeeze, 2–3 times a week", cues: "Relax the grip between sets", figure: { pose: "grip-tool", view: "lateral", props: ["hammer"] } }
        ],
        progressionCriteria: ["Pain at or below 2/10 on heavy wrist extension and carrying", "Pain-free grip about 80–90% of the other side (clinical convention)", "Everyday tasks, lifting and carrying are pain-free or mild", "No next-day flare after the heaviest session"]
      },
      {
        name: "Return to work and sport",
        timeframe: "Weeks 12–24+ (criteria-based)",
        goals: ["Return to full tool, keyboard or racquet use", "Rebuild work and sport exposure in graded steps", "Hold strength and manage load for the long term"],
        precautions: ["Increase hours or volume stepwise, tracking next-day pain", "Do not return to full competition while pain is above 2/10 or flares the next day", "Avoid sudden load spikes after a holiday or break"],
        exercises: [
          { name: "Graded task-specific loading (tools, keyboard or mouse)", dosage: "Start at a fraction of usual work volume and build in steps of roughly 10–20% a week (clinical convention)", cues: "Pace tasks, take micro-breaks, and keep the wrist neutral", figure: { pose: "typing", view: "lateral", props: ["desk", "keyboard"] } },
          { name: "Racquet or implement drills (forehand, backhand, serve)", dosage: "10–15 min, 2–3 times a week, building from half-pace to full-pace", cues: "Check grip size, string tension and technique with the coach", figure: { pose: "serve-trophy", view: "lateral", props: ["racquet"] } },
          { name: "Medicine-ball or light impact catch and throw", dosage: "3 × 8–10, 2 times a week, if the sport requires it", cues: "Soft hands, quick release; stop if grip pain flares" },
          { name: "Heavy strength maintenance (wrist extension, row, carry)", dosage: "2 times a week, 3 × 6–10, all year", cues: "Keep the heavy slow tempo", figure: { pose: "ex-wrist-extension", view: "lateral", props: ["dumbbell"] } }
        ],
        progressionCriteria: ["Completes full work or training for at least 2 weeks with pain at or below 2/10 and no next-day flare", "Pain-free grip about 90% or more of the other side (clinical convention)", "PRTEE or QuickDASH near the patient's goal, with no pain on resisted wrist extension", "Patient confidence, and agreement with employer or coach"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated, tendinopathy-specific return-to-activity criteria were identified in the sources reviewed; the criteria below reflect clinical convention and trial design",
      "Pain on resisted wrist extension, gripping and the usual provocation task at or below 2/10, with no next-day flare",
      "Pain-free grip about 90% or more of the other side or of pre-injury values (clinical convention)",
      "Tolerates at least 2 weeks of full-volume work, training or play without a rise in pain",
      "Patient-reported outcome (PRTEE or QuickDASH) clearly improved from baseline and close to the patient's goal",
      "A maintenance strength and load-management plan is in place, with tools and technique checked"
    ],
    tests: ["Pain-free grip strength (dynamometer) compared with the other side", "Resisted wrist and middle-finger extension pain (0–10)", "PRTEE or QuickDASH questionnaire", "Task-specific trial: tool, typing or racquet strokes at full intensity with next-day pain log"]
  },
  prognosis: "Lateral elbow tendinopathy is usually self-limiting, but symptoms persist beyond 1 year in up to 20% of people [r2]. In a randomised trial, most people in both the wait-and-see and physiotherapy groups reported a successful outcome at 52 weeks, whereas the early benefit of corticosteroid injection reversed, with 47 of 65 early successes later regressing [r7]. In a placebo-controlled trial, 1-year recurrence was 54% after corticosteroid injection versus 12% after placebo injection [r6]. In a population cohort the 2-year recurrence rate was 8.5%, and about 1 in 10 people with symptoms at 6 months went on to surgery [r8]. Neck pain, tendon tears and central sensitisation may be useful prognostic markers [r1].",
  prevention: [
    "Build gripping and wrist-extension load gradually after a break or when starting a new job, tool or sport, because sudden rises in load overload the tendon [r9].",
    "Break up repetitive, forceful tasks and use two-handed lifts, lighter loads and appropriately sized handles (clinical observation; the protective effect was not tested in the sources reviewed).",
    "Keep forearm, grip and shoulder girdle strength up all year (expert opinion; no trial-proven prevention programme was identified).",
    "Do not smoke: smoking was associated with lateral epicondylitis (OR 3.4 in current smokers), although this association does not prove that stopping prevents it [r3].",
    "Check racquet grip size, string tension and technique with a coach (clinical observation; not tested in the sources reviewed)."
  ],
  clinicalPearls: [
    "Avoid corticosteroid injection. Pain relief is short-lived: at 26 weeks 55% of the injection group were recovered or much improved versus 85% of the placebo group, and at 1 year recurrence was 54% versus 12% [r6].",
    "Wait-and-see is not nothing. Most people in the wait-and-see arm of a 52-week trial reported a successful outcome, so offer reassurance and load advice before more treatment [r7].",
    "Screen the neck and shoulder every time. Neck pain, tendon tears and central sensitisation may be prognostic markers, and one-size-fits-all treatment is a common reason for failure [r1].",
    "Do not use MRI to explain pain or predict outcome: tendinosis signal was present in 18 of 21 people, but its severity did not correlate positively with symptoms [r4].",
    "Treat provocation tests as supportive, not definitive. The sensitivities quoted for Cozen's and Mill's tests come from 30 people who all had the condition, so specificity is unknown [r13].",
    "Distinguish lateral epicondylar tenderness from radial tunnel tenderness a few centimetres further distal. The latter condition is controversial and the standard tests are of unclear validity, so avoid over-diagnosing it [r10]."
  ],
  related: ["medial-elbow-tendinopathy", "radial-tunnel-syndrome", "cervical-radiculopathy", "capitellar-ocd", "radial-head-fracture", "cubital-tunnel-syndrome"],

  references: [
    { id: "r1", citation: "Coombes BK, Bisset L, Vicenzino B. Management of lateral elbow tendinopathy: one size does not fit all. J Orthop Sports Phys Ther. 2015;45(11):938-49.", pmid: "26381484", doi: "10.2519/jospt.2015.5841", type: "narrative-review", year: 2015 },
    { id: "r2", citation: "Bisset L, Coombes B, Vicenzino B. Tennis elbow. BMJ Clin Evid. 2011;2011:1117.", pmid: "21708051", type: "systematic-review", year: 2011 },
    { id: "r3", citation: "Shiri R, Viikari-Juntura E, Varonen H, et al. Prevalence and determinants of lateral and medial epicondylitis: a population study. Am J Epidemiol. 2006;164(11):1065-74.", pmid: "16968862", doi: "10.1093/aje/kwj325", type: "cross-sectional", year: 2006 },
    { id: "r4", citation: "Walton MJ, Mackie K, Fallon M, et al. The reliability and validity of magnetic resonance imaging in the assessment of chronic lateral epicondylitis. J Hand Surg Am. 2011;36(3):475-9.", pmid: "21334144", doi: "10.1016/j.jhsa.2010.11.040", type: "diagnostic-accuracy", year: 2011 },
    { id: "r5", citation: "Coombes BK, Bisset L, Vicenzino B. A new integrative model of lateral epicondylalgia. Br J Sports Med. 2009;43(4):252-8.", pmid: "19050004", doi: "10.1136/bjsm.2008.052738", type: "narrative-review", year: 2009 },
    { id: "r6", citation: "Coombes BK, Bisset L, Brooks P, et al. Effect of corticosteroid injection, physiotherapy, or both on clinical outcomes in patients with unilateral lateral epicondylalgia: a randomized controlled trial. JAMA. 2013;309(5):461-9.", pmid: "23385272", doi: "10.1001/jama.2013.129", type: "rct", year: 2013 },
    { id: "r7", citation: "Bisset L, Beller E, Jull G, et al. Mobilisation with movement and exercise, corticosteroid injection, or wait and see for tennis elbow: randomised trial. BMJ. 2006;333(7575):939.", pmid: "17012266", doi: "10.1136/bmj.38961.584653.AE", type: "rct", year: 2006 },
    { id: "r8", citation: "Sanders TL, Maradit Kremers H, Bryan AJ, et al. The epidemiology and health care burden of tennis elbow: a population-based study. Am J Sports Med. 2015;43(5):1066-71.", pmid: "25656546", doi: "10.1177/0363546514568087", type: "cohort", year: 2015 },
    { id: "r9", citation: "Cook JL, Purdam CR. Is tendon pathology a continuum? A pathology model to explain the clinical presentation of load-induced tendinopathy. Br J Sports Med. 2009;43(6):409-16.", pmid: "18812414", doi: "10.1136/bjsm.2008.051193", type: "narrative-review", year: 2009 },
    { id: "r10", citation: "Ang GG, Bolzonello DG, Johnstone BR. Radial tunnel syndrome: case report and comprehensive critical review of a compression neuropathy surrounded by controversy. Hand (N Y). 2023;18(1_suppl):146S-153S.", pmid: "34284603", doi: "10.1177/15589447211029045", type: "narrative-review", year: 2023 },
    { id: "r11", citation: "Karanasios S, Korakakis V, Whiteley R, et al. Exercise interventions in lateral elbow tendinopathy have better outcomes than passive interventions, but the effects are small: a systematic review and meta-analysis of 2123 subjects in 30 trials. Br J Sports Med. 2021;55(9):477-85.", pmid: "33148599", doi: "10.1136/bjsports-2020-102525", type: "meta-analysis", year: 2021 },
    { id: "r12", citation: "McQueen KS, Powell RK, Keener T, et al. Role of strengthening during nonoperative treatment of lateral epicondyle tendinopathy. J Hand Ther. 2021;34(4):619-26.", pmid: "33250396", doi: "10.1016/j.jht.2020.10.009", type: "rct", year: 2021 },
    { id: "r13", citation: "Factor S, Snopik PG, Albagli A, et al. The \"Selfie Test\": a novel test for the diagnosis of lateral epicondylitis. Medicina (Kaunas). 2023;59(6):1159.", pmid: "37374364", doi: "10.3390/medicina59061159", type: "diagnostic-accuracy", year: 2023 },
    { id: "r14", citation: "Tyler TF, Thomas GC, Nicholas SJ, et al. Addition of isolated wrist extensor eccentric exercise to standard treatment for chronic lateral epicondylosis: a prospective randomized trial. J Shoulder Elbow Surg. 2010;19(6):917-22.", pmid: "20579907", doi: "10.1016/j.jse.2010.04.041", type: "rct", year: 2010 },
    { id: "r15", citation: "Coombes BK, Bisset L, Vicenzino B. Efficacy and safety of corticosteroid injections and other injections for management of tendinopathy: a systematic review of randomised controlled trials. Lancet. 2010;376(9754):1751-67.", pmid: "20970844", doi: "10.1016/S0140-6736(10)61160-9", type: "systematic-review", year: 2010 },
    { id: "r16", citation: "Karjalainen TV, Silagy M, O'Bryan E, et al. Autologous blood and platelet-rich plasma injection therapy for lateral elbow pain. Cochrane Database Syst Rev. 2021;9(9):CD010951.", pmid: "34590307", doi: "10.1002/14651858.CD010951.pub2", type: "systematic-review", year: 2021 },
    { id: "r17", citation: "Buchbinder R, Johnston RV, Barnsley L, et al. Surgery for lateral elbow pain. Cochrane Database Syst Rev. 2011;(3):CD003525.", pmid: "21412883", doi: "10.1002/14651858.CD003525.pub2", type: "systematic-review", year: 2011 },
    { id: "r18", citation: "Kroslak M, Murrell GAC. Surgical treatment of lateral epicondylitis: a prospective, randomized, double-blinded, placebo-controlled clinical trial. Am J Sports Med. 2018;46(5):1106-13.", pmid: "29498885", doi: "10.1177/0363546517753385", type: "rct", year: 2018 },
    { id: "r19", citation: "Cullinane FL, Boocock MG, Trevelyan FC. Is eccentric exercise an effective treatment for lateral epicondylitis? A systematic review. Clin Rehabil. 2014;28(1):3-19.", pmid: "23881334", doi: "10.1177/0269215513491974", type: "systematic-review", year: 2014 },
    { id: "r20", citation: "Menta R, Randhawa K, Côté P, et al. The effectiveness of exercise for the management of musculoskeletal disorders and injuries of the elbow, forearm, wrist, and hand: a systematic review by the OPTIMa collaboration. J Manipulative Physiol Ther. 2015;38(7):507-20.", pmid: "26130104", doi: "10.1016/j.jmpt.2015.06.002", type: "systematic-review", year: 2015 }
  ],

  animation: {
    title: "How lateral elbow tendinopathy develops",
    phases: [
      {
        type: "moi", label: "Repeated gripping", duration: 7, view: "lateral", environment: "home",
        actors: [{ id: "worker", kit: "worker" }],
        keyframes: [
          { t: 0, pose: "stand", root: { x: 0 } },
          { t: 0.8, pose: "grip-tool", root: { x: 0 } },
          { t: 1.5, pose: "grip-tool", joints: { elbowR: 105, wristR: 30 }, ease: "in" },
          { t: 2.2, pose: "grip-tool", ease: "out" },
          { t: 3.0, pose: "grip-tool", joints: { elbowR: 105, wristR: 30 }, ease: "in" },
          { t: 3.8, pose: "grip-tool", ease: "out" },
          { t: 4.6, pose: "grip-tool", joints: { elbowR: 105, wristR: 30 }, ease: "in" },
          { t: 5.4, pose: "grip-tool", ease: "out" },
          { t: 6.2, pose: "grip-tool", joints: { elbowR: 105, wristR: 30 }, ease: "in" }
        ],
        props: [{ id: "hammer", type: "hammer", attach: "handR" }],
        forces: [
          { t: [1.4, 1.9], at: "handR", dir: "down", label: "Impact load through the grip" },
          { t: [1.4, 2.4], at: "forearmR", dir: "up", label: "Wrist extensors brace the wrist" },
          { t: [4.5, 5.2], at: "handR", dir: "down", label: "Repeated load, strike after strike" }
        ],
        highlights: [{ t: [1.3, 7], at: "elbowR" }],
        slowmo: [{ t: [1.3, 2.0], rate: 0.4 }],
        captions: [
          { t: 0, text: "A tradesperson hammers all day, gripping the tool tightly with the forearm pronated." },
          { t: 1.0, text: "To grip and strike, the wrist extensors hold the wrist extended and steady." },
          { t: 1.5, text: "On impact the wrist is driven down and the extensors contract hard to resist it." },
          { t: 3.0, text: "Their tension passes into the common extensor tendon and its origin at the outer elbow." },
          { t: 4.5, text: "Strike after strike, with little recovery, the load can exceed what the tendon can tolerate." },
          { t: 6.0, text: "There is no single injury moment: pain builds up as the tendon changes." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "elbowR",
        captions: [{ t: 0, text: "Zooming into the right elbow from the outer side." }]
      },
      {
        type: "closeup", label: "Inside the elbow", duration: 10, scene: "elbow-lateral",
        actions: [
          { t: 0, do: "highlight", target: "commonExtensorTendon" },
          { t: 0.3, do: "label", target: "commonExtensorTendon", text: "Common extensor tendon (ECRB origin)" },
          { t: 1.0, do: "arrow", at: "lateralEpicondyle", dir: "distal", label: "Wrist extensor pull", size: "m" },
          { t: 1.1, do: "contract", target: "ecrb", amount: 0.4, dur: 0.8 },
          { t: 1.3, do: "stretch", target: "commonExtensorTendon", amount: 0.25, dur: 1.0 },
          { t: 2.8, do: "reset", target: "commonExtensorTendon" },
          { t: 2.8, do: "reset", target: "ecrb" },
          { t: 3.5, do: "contract", target: "ecrb", amount: 0.45, dur: 0.7 },
          { t: 3.6, do: "stretch", target: "commonExtensorTendon", amount: 0.3, dur: 0.9 },
          { t: 4.4, do: "thicken", target: "commonExtensorTendon", amount: 0.5, dur: 1.4 },
          { t: 4.8, do: "pain", at: "ecrbOrigin", hold: 3 },
          { t: 5.8, do: "degenerate", target: "commonExtensorTendon", dur: 1.6 },
          { t: 6.3, do: "label", target: "commonExtensorTendon", text: "Thickened, disorganised ECRB origin (tendinopathy)" },
          { t: 7.4, do: "camera", at: "ecrbOrigin", zoom: 1.7, dur: 1.0 },
          { t: 9.2, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "The common extensor tendon anchors the wrist and finger extensors to the lateral epicondyle." },
          { t: 1.0, text: "When you grip, extensor carpi radialis brevis pulls hard on its origin at the outer elbow." },
          { t: 2.8, text: "With rest, the tendon recovers and adapts to the load." },
          { t: 3.5, text: "With repeated loading beyond its capacity, the tendon swells and starts to hurt." },
          { t: 4.8, text: "Pain is felt at the lateral epicondyle, over the ECRB origin." },
          { t: 5.9, text: "The collagen becomes disorganised and thick. It degenerates; it is not mainly inflamed, and it does not tear." },
          { t: 7.4, text: "Scans show the change, but structure and pain do not always match, so diagnosis stays clinical." }
        ]
      },
      {
        type: "micro", label: "Tendon continuum", duration: 10, tissue: "tendon-continuum",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.6, stage: "reactive" }, { t: 3.4, stage: "disrepair" },
          { t: 5.2, stage: "degenerative" }, { t: 7.2, stage: "load-adaptation" }
        ],
        timeLabels: [{ t: 1.6, text: "Days to weeks" }, { t: 3.4, text: "Weeks to months" }, { t: 5.2, text: "Months to years" }, { t: 7.2, text: "Weeks to months of loading" }],
        captions: [
          { t: 0, text: "Healthy tendon: tightly packed, aligned type I collagen with a few resident tenocytes." },
          { t: 1.6, text: "Reactive: after a load spike, tenocytes activate and the matrix swells. This can reverse." },
          { t: 3.4, text: "Disrepair: cells try to repair the tendon and the collagen becomes disorganised." },
          { t: 5.2, text: "Degenerative: areas of cell death and disorganised matrix remain, with limited capacity to reverse." },
          { t: 7.2, text: "Progressive loading builds capacity: pain settles as the tendon adapts, even if structure does not normalise." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "UL4" }
};
