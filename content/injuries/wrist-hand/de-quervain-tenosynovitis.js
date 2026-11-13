export default {
  id: "de-quervain-tenosynovitis",
  name: "De Quervain's tenosynovitis",
  shortName: "De Quervain's",
  aka: ["de Quervain's disease", "de Quervain tenosynovitis", "first dorsal compartment tenosynovitis", "radial styloid tenosynovitis", "mother's wrist", "gamer's thumb", "washerwoman's sprain", "stenosing tenosynovitis of the first dorsal compartment"],
  region: "wrist-hand",
  tissues: ["tendon", "fascia"],
  onset: "gradual",
  mechanismType: ["overuse"],
  populations: ["new parents and infant caregivers", "women", "people in repetitive thumb and wrist work", "people after distal radius fracture"],
  sports: ["racquet sports", "golf", "rowing", "climbing", "gaming"],
  urgency: "routine",
  summary: "Stenosing tenosynovitis of the first dorsal compartment (APL and EPB) at the radial styloid, causing radial wrist pain with thumb use. It follows repetitive thumb and wrist loading, infant handling or wrist trauma.",
  keyFacts: [
    { label: "Typical recovery", value: "Conservative care first; injection success is documented at 61–83% in a review, and a splint added to injection helps short and mid-term (moderate evidence)" },
    { label: "Key test", value: "Finkelstein and Eichhoff tests have low specificity; the WHAT test was proposed as an alternative. Accuracy figures were not retrieved" },
    { label: "Imaging", value: "Ultrasound can show the intercompartmental septum and made injections more accurate with better outcomes in a review" },
    { label: "Risk setting", value: "26.8% of 190 infant caregivers had a positive Finkelstein test (small cross-sectional study)" },
    { label: "After fracture", value: "2.2% (operative) to 3.8% (non-operative) of distal radius fracture patients developed it within a year" },
    { label: "Nature of the problem", value: "Thickening of the first dorsal compartment retinaculum with a degenerative rather than purely inflammatory histology" }
  ],
  overview: "De Quervain's disease is a common painful condition of the radial wrist. It is caused by resisted gliding of the abductor pollicis longus (APL) and extensor pollicis brevis (EPB) tendons within the fibro-osseous canal of the first dorsal compartment [r1]. It is a stenosing tenosynovitis: the problem lies mainly in the thickened compartment roof (the retinaculum) and the sheath rather than in the tendons themselves [r3]. Histological studies describe thickening of the first dorsal retinaculum that is characterised by degeneration rather than inflammation, although inflammatory mediators (for example TNF-alpha) were raised in severe disease [r3]. The cause remains debated: evidence supports both an inflammatory and a degenerative pathway, and anatomical variation of the compartment is partly implicated [r2].\n\nManagement is stepped. A European consensus recommended that every patient receive instructions, combined with another treatment such as NSAIDs, splinting, corticosteroid injection, injection plus splint, or surgery, chosen by severity, duration and previous treatment [r1]. Corticosteroid injection is the most effective conservative option, with documented success of 61–83%, and a splint plus injection appears better than either alone [r4]. A systematic review of trials found moderate evidence for injection in the very short term and for a thumb splint added to injection [r5]. Evidence for physiotherapy-specific interventions is thin.",

  epidemiology: {
    text: "De Quervain's disease is a common radial wrist condition [r1], but population incidence figures were not retrieved from the sources used for this page, so none are quoted. It is commonly reported in mothers from pregnancy up to the delayed postpartum period [r6]. In a cross-sectional study of 190 infant caregivers in Lahore, 26.8% had a positive Finkelstein test, and infant age, lifting frequency and hand dominance were significant risk factors [r6]. Because the Finkelstein test has low specificity [r2], this prevalence may be overestimated. The single small Cochrane-reviewed trial of injection enrolled only pregnant and lactating women [r8].\n\nThe condition can also follow trauma. In a 10-year retrospective study of 1,451 patients with a distal radius fracture, 41 developed post-traumatic de Quervain tenosynovitis within a year (average 6.5 months). The incidence was 2.2% after operative treatment and 3.8% after non-operative treatment, which was 2.4 and 4.2 times more likely than in the general population. Of the affected patients, 78% reported strenuous overuse activities or careers, and they were more likely to be female [r7].",
    riskFactors: {
      intrinsic: [
        "Female sex: the post-fracture cohort and the caregiver literature are predominantly female [r6,r7]",
        "Pregnancy, lactation and the postpartum period [r6,r8]",
        "Structural variation of the first dorsal compartment, such as a separate EPB sheath or septum [r2,r7]",
        "Dominant hand: significant in infant caregivers [r6]",
        "Previous distal radius fracture, especially a higher-energy or non-operatively treated fracture [r7]"
      ],
      extrinsic: [
        "Repetitive or forceful thumb abduction and extension with wrist ulnar deviation (clinical)",
        "Frequent lifting of an infant: lifting frequency and infant age were significant risk factors [r6]",
        "Strenuous overuse activities or careers: reported by 78% of those developing post-fracture disease [r7]",
        "Racquet, golf, rowing and gaming (grip and thumb loading; clinical)"
      ]
    }
  },

  mechanism: {
    summary: "There is no single injury moment. Repeated or sustained thumb abduction and extension combined with wrist ulnar deviation, for example pinch gripping, lifting an infant under the arms, or racquet and tool use, drives the APL and EPB tendons to glide around the radial styloid through a tight fibro-osseous canal. Resisted gliding of these tendons in the canal produces the pain [r1]. In susceptible people the compartment roof thickens and narrows, so the friction rises and pain appears with smaller loads [r3].",
    sequence: [
      "The hand grips or pinches while the thumb is abducted or extended and the wrist deviates to the ulnar side, for example when lifting an infant, hammering, texting or swinging a racquet (clinical).",
      "The APL and EPB tendons change direction at the radial styloid and are loaded as they glide through the first dorsal compartment [r1].",
      "Repeated loading irritates the tendons and their synovial sheath, and friction rises where the tendons are angulated (clinical).",
      "The retinaculum that forms the roof thickens, with degenerative change rather than simple inflammation, which narrows the canal [r3].",
      "Tendon excursion is limited. Pain appears over the radial styloid with thumb use, and swelling or crepitus may develop (clinical).",
      "If a separate EPB subcompartment or septum is present, one tendon may be more restricted, and a single-point injection may miss it (clinical reasoning; ultrasound can show the septum [r4]). A separate EPB sheath was found in every post-fracture patient needing release [r7].",
      "Rest and offloading, injection or release reduce the mismatch between the tendons and the canal."
    ],
    variants: [
      { name: "Postnatal or caregiving overload", description: "Repeated lifting and holding of an infant, along with hormonal changes of pregnancy and lactation, is a common setting [r6]." },
      { name: "Occupational or hobby overuse", description: "Forceful or repetitive thumb and wrist work, including tool use and gaming, which was reported by 78% of those developing post-fracture disease [r7]." },
      { name: "Post-traumatic", description: "Distal radius fracture raised the likelihood of de Quervain tenosynovitis 2.4 to 4.2 times, and the post-traumatic form responded less well to injection [r7]." },
      { name: "Anatomical variation", description: "A separate EPB sheath or intercompartmental septum was noted in all patients needing surgical release in a post-fracture series, and ultrasound can show the septum before injection [r4,r7]." }
    ]
  },

  anatomy: {
    text: "The first dorsal extensor compartment is a fibro-osseous tunnel on the radial side of the wrist, over the radial styloid. It contains the abductor pollicis longus and extensor pollicis brevis tendons, and its roof is part of the extensor retinaculum. The tendons change direction here as they pass from the forearm to the thumb, and the canal is narrow, so the tendons are loaded against the retinaculum and the styloid when the thumb abducts or extends and the wrist moves to the ulnar side [r1]. The APL often has several slips, and the EPB may lie in a separate subcompartment divided by a septum. Such variation is associated with the disease, and a separate EPB sheath was found in every post-fracture patient who needed surgical release [r2,r7]. Branches of the superficial radial nerve cross the compartment (clinical anatomy).",
    structures: [
      { name: "First dorsal compartment (retinaculum and sheath)", role: "Holds the APL and EPB tendons against the radial styloid and directs their pull; its roof thickens in de Quervain's disease [r3]" },
      { name: "Abductor pollicis longus (APL) tendon", role: "Abducts the thumb at the carpometacarpal joint and helps radially deviate the wrist; usually several slips (clinical)" },
      { name: "Extensor pollicis brevis (EPB) tendon", role: "Extends the thumb at the MCP joint; sometimes in a separate subcompartment [r2,r7]" },
      { name: "Radial styloid", role: "The bony pulley where the tendons change direction and where tenderness is greatest" },
      { name: "Superficial radial nerve branches", role: "Cross the first compartment; at risk with injection or surgery and a source of radial-sided sensory symptoms (clinical)" },
      { name: "Thumb carpometacarpal joint and scaphoid", role: "Neighbouring structures that cause overlapping radial wrist pain" }
    ]
  },

  pathophysiology: {
    tissueDamage: "De Quervain's disease is a problem of the compartment roof and sheath more than of the tendons. Mechanical friction in a narrow canal, with or without anatomical variation, leads to thickening of the first dorsal retinaculum. Histological studies report that this thickening is characterised by degeneration rather than inflammation [r3]. Whether the primary driver is inflammatory or degenerative remains debated, and the literature supports both pathways [r2]. In severe disease, TNF-alpha was up-regulated, and IL-20 was positively correlated with TNF-alpha and with disease severity, which suggests that inflammatory mediators contribute in advanced cases [r3].\n\nIn this model the tendons are secondarily affected: their sheath becomes irritated and their excursion is restricted (clinical model). Treatment therefore offloads the compartment, reduces sheath irritation, or enlarges the canal by releasing the roof [r1,r5].",
    structures: [
      { name: "First dorsal compartment retinaculum (roof)", effect: "Thickening with degenerative change; narrows the canal [r3]" },
      { name: "APL and EPB tendon sheaths (synovium)", effect: "Irritation and thickening; swelling over the radial styloid (clinical)" },
      { name: "APL and EPB tendons", effect: "Restricted gliding with pain on resisted use; usually intact and not the primary lesion [r1]" },
      { name: "EPB subcompartment or septum", effect: "When present, one tendon may be more constricted and a single-point injection may miss it (clinical reasoning); ultrasound can show the septum [r4,r7]" },
      { name: "Superficial radial nerve branches", effect: "May be irritated by swelling, causing radial-sided tingling (clinical)" }
    ],
    muscles: [
      { name: "Abductor pollicis longus and extensor pollicis brevis", effect: "Pain on resisted use; pain-related inhibition reduces thumb abduction and extension strength (clinical)." },
      { name: "Thenar muscles and grip musculature", effect: "Pinch and grip weaken as pain limits loading, and the patient avoids thumb use (clinical)." },
      { name: "Forearm extensors and flexors", effect: "Compensatory guarding and overload when the thumb is protected (clinical)." }
    ],
    cellular: [
      { phase: "Irritable, early disease", timing: "Days to weeks", description: "Repetitive friction irritates the tendon sheath and tenocytes; the compartment roof starts to react (clinical model)." },
      { phase: "Retinacular thickening", timing: "Weeks to months", description: "The first dorsal retinaculum thickens with degenerative change rather than inflammation [r3]." },
      { phase: "Established stenosing tenosynovitis", timing: "Months", description: "The canal is narrowed, and the tendons glide poorly; inflammatory mediators such as TNF-alpha and IL-20 rise in severe cases [r3]." },
      { phase: "Recovery with offloading, injection or release", timing: "Weeks to months", description: "Offloading and injection reduce the sheath irritation. Surgery enlarges the canal; in a pilot trial, all patients improved after release or reconstruction [r5,r11]." }
    ],
    systems: [
      { system: "Endocrine and reproductive", effect: "The condition is commonly reported from pregnancy to the delayed postpartum period, which implicates hormonal and fluid changes plus the load of infant care [r6]." },
      { system: "Nervous system and pain", effect: "Local pain at the radial styloid may spread along the thumb or forearm, and superficial radial nerve irritation can add tingling (clinical)." },
      { system: "Musculoskeletal chain", effect: "Wrist, thumb carpometacarpal joint and forearm muscles share load. Overload elsewhere in the chain (for example thumb carpometacarpal osteoarthritis) can coexist (clinical)." },
      { system: "Psychosocial and occupational", effect: "Caregiving duties, repetitive work and gaming sustain the load. Advice to reduce load must be realistic for new parents and workers [r6,r7]." }
    ]
  },

  grading: {
    system: "Practical severity and duration grouping (clinical convention; no validated grading system)",
    grades: [
      { grade: "Mild or short duration", description: "Pain with specific thumb tasks, mild tenderness, no constant pain and no previous treatment.", prognosis: "Instructions with splinting or NSAIDs are suitable options [r1]" },
      { grade: "Moderate or established", description: "Pain with most thumb and wrist use, clear tenderness and swelling, positive provocation tests, weeks to months of symptoms.", prognosis: "Corticosteroid injection, ideally with a splint, has the best-documented effect [r4,r5]" },
      { grade: "Severe, long-standing or recurrent", description: "Persistent pain, marked thickening or crepitus, failure of previous treatment, or a separate EPB subcompartment.", prognosis: "Surgical release is considered once other options have failed [r1,r11]" }
    ]
  },

  timeframes: {
    summary: "De Quervain's disease has no fixed healing timeline: symptoms follow load and the thickened compartment roof. The phases below are illustrative of the biology and are not drawn from a single cited source. Injection effects are short term, and splint-plus-injection effects were seen in the short and mid term [r5].",
    healing: [
      { phase: "Irritable phase", startDay: 0, endDay: 42, description: "Pain with thumb use, local tenderness and swelling; offload and give instructions [r1]" },
      { phase: "Established tenosynovitis", startDay: 30, endDay: 180, description: "Retinacular thickening and restricted gliding; injection and splint are considered [r3,r4]" },
      { phase: "Chronic or refractory stenosis", startDay: 120, endDay: 540, description: "Persistent symptoms despite treatment; consider ultrasound for a septum and surgical referral [r1,r4]" },
      { phase: "Recovery and load re-adaptation", startDay: 14, endDay: 180, description: "Graded return to thumb and wrist load after settling, with ongoing load management (clinical)" }
    ],
    milestones: [
      { label: "Pain relief after corticosteroid injection", day: 7, note: "In the single small trial of pregnant and lactating women, all 9 in the injection arm had complete relief at 1–6 days [r8]" },
      { label: "Review of response to splint and instructions", day: 21, note: "A 3-week trial is a common clinical convention; there are no consistent trial data [r1]" },
      { label: "Decision on repeat injection or referral", day: 42, note: "Documented success of injection was 61–83% in a review, so treatment failure is not rare [r4]" },
      { label: "Post-surgical review of function", day: 180, note: "In a pilot RCT of 40 patients, all improved at 6 months after release or reconstruction [r11]" }
    ],
    returnToSport: "Return to thumb-intensive sport and work is criteria-based: pain-free pinch and grip, a negative provocation test and tolerance of graded task exposure. Typical timing is a few weeks after settling with injection or splint and longer after release (clinical range)."
  },

  clinicalPresentation: {
    symptoms: [
      "Pain on the radial side of the wrist, often aggravated by gripping, pinching, lifting an infant, texting or twisting",
      "Pain that may radiate into the thumb or up the radial forearm",
      "Swelling or a feeling of catching over the radial styloid",
      "Difficulty with jar opening, pouring from a kettle or holding an infant",
      "Gradual onset after a change in load, after childbirth or after a wrist fracture"
    ],
    signs: [
      "Tenderness over the first dorsal compartment at the radial styloid [r1]",
      "Swelling, thickening or crepitus over the compartment (clinical)",
      "Pain on resisted thumb abduction or extension",
      "Positive Finkelstein or Eichhoff test (low specificity [r2])",
      "Reduced pinch and grip strength because of pain"
    ]
  },

  assessment: {
    subjective: [
      "Site and behaviour of pain: radial wrist pain with thumb use, night pain and morning stiffness",
      "Onset and context: pregnancy, postpartum, infant lifting, new hobby or job, previous distal radius fracture [r6,r7]",
      "Aggravating tasks: pinching, lifting, typing, phone use, tool use or sport",
      "Previous treatment: splint, injections, NSAIDs, and response (needed for choosing the next step [r1])",
      "Medical history: inflammatory arthritis, diabetes, pregnancy or lactation (medication choices)",
      "Numbness over the dorsum of the thumb or hand (superficial radial nerve) or neck pain"
    ],
    observation: ["Swelling or fullness over the radial styloid", "Thumb and wrist posture during grip and lifting tasks", "Skin changes or scar from previous injection or surgery"],
    palpation: ["Tenderness and thickening over the first dorsal compartment", "Crepitus with thumb movement", "Snuffbox, thumb carpometacarpal joint and the intersection point 4–6 cm proximal (to separate differentials)"],
    rangeOfMotion: ["Wrist radial and ulnar deviation and flexion", "Thumb abduction, extension and opposition", "Full range is usually preserved, but pain limits ulnar deviation with the thumb flexed"],
    strength: ["Resisted thumb abduction and extension (APL, EPB)", "Pinch and grip dynamometry, comparing sides", "Forearm extensors and flexors"],
    neuro: ["Sensation over the radial dorsum of the hand and thumb (superficial radial nerve)", "Screen the neck for C6 radiculopathy if symptoms extend beyond the radial wrist"],
    functional: ["Observe lifting and holding an infant, tool grip, typing and phone use", "Timed functional tasks such as jar opening or pouring (patient-specific)", "Sleep and night pain"],
    specialTests: [
      { name: "Finkelstein test", purpose: "Provoke pain in the first dorsal compartment by stretching APL and EPB", procedure: "The examiner holds the thumb and passively deviates the wrist to the ulnar side.", positive: "Sharp pain over the radial styloid and first dorsal compartment. The test has low specificity, so a positive result does not confirm the diagnosis [r2].", refs: ["r2"] },
      { name: "Eichhoff test", purpose: "A variation that loads the tendons with the thumb flexed in the palm", procedure: "The patient tucks the thumb inside a closed fist, and the wrist is moved to ulnar deviation. In practice this version is often called Finkelstein's test.", positive: "Pain over the radial styloid. Like Finkelstein's test, it has low specificity [r2].", refs: ["r2"] },
      { name: "Wrist hyperflexion and abduction of the thumb (WHAT) test", purpose: "A newer provocation test proposed because Finkelstein and Eichhoff tests have low specificity", procedure: "The wrist is held in hyperflexion with the thumb abducted for about 1 minute (a common time convention).", positive: "Pain over the first dorsal compartment. Accuracy figures were not retrievable for this page [r2].", refs: ["r2"] },
      { name: "Palpation and resisted thumb extension and abduction", purpose: "Localise pain to APL and EPB and to the first compartment", procedure: "Palpate over the compartment, then resist thumb extension and abduction.", positive: "Focal tenderness and pain with resisted movement.", refs: [] }
    ],
    clinicalRules: [
      { name: "Do not diagnose from one provocation test", description: "Finkelstein and Eichhoff tests have low specificity, so combine focal tenderness, thickening, resisted-movement pain and the exclusion of differentials such as scaphoid and thumb base conditions [r2]." }
    ],
    outcomeMeasures: [
      { name: "11-point Numeric Pain Rating Scale (NPRS)", use: "Pain with thumb tasks; used in physiotherapy case series [r10]" },
      { name: "Patient-Rated Wrist Evaluation (PRWE)", use: "Pain and function; used in the caregiver study [r6]" },
      { name: "DASH or QuickDASH", use: "Upper-limb disability across treatment [r10,r11]" },
      { name: "Pinch and grip dynamometry", use: "Objective strength, compared with the other hand" }
    ],
    imaging: [
      { modality: "Ultrasound", indication: "Confirm tenosynovitis, identify an intercompartmental septum or separate EPB subcompartment, and guide injection", findings: "Thickened sheath, fluid and a septum. Ultrasound-guided injections were more accurate and gave better outcomes in a review [r4]." },
      { modality: "Plain radiographs", indication: "Trauma, suspected thumb carpometacarpal arthritis or a radial styloid abnormality", findings: "Fracture, arthritis or other bony cause (clinical)" },
      { modality: "MRI", indication: "Atypical or refractory cases", findings: "Tenosynovitis and thickening of the retinaculum; rarely needed (clinical)" }
    ]
  },

  differentials: [
    { name: "Intersection syndrome", id: "intersection-syndrome", distinguishing: "Pain and crepitus 4–6 cm proximal to the wrist on the dorsoradial forearm where APL and EPB cross the radial wrist extensors, not at the radial styloid." },
    { name: "Scaphoid fracture", id: "scaphoid-fracture", distinguishing: "Trauma, snuffbox tenderness and pain on axial thumb loading; image any suspicion." },
    { name: "Thumb carpometacarpal osteoarthritis", distinguishing: "Pain at the thumb base with a positive grind test and loss of pinch; radiographic joint changes." },
    { name: "Trigger thumb (flexor pollicis longus stenosing tenosynovitis)", id: "trigger-finger", distinguishing: "Catching or locking of the thumb IP joint with a tender A1 pulley at the MCP flexion crease." },
    { name: "Thumb ulnar collateral ligament injury", id: "skiers-thumb", distinguishing: "Pain and laxity at the thumb MCP joint after abduction injury." },
    { name: "Wartenberg's syndrome (superficial radial nerve entrapment)", distinguishing: "Burning, tingling or numbness over the dorsoradial hand and thumb; Tinel sign over the nerve; no tendon swelling." },
    { name: "Cervical radiculopathy (C6)", id: "cervical-radiculopathy", distinguishing: "Neck pain, dermatomal symptoms, reproduction with neck movement and neurological change." },
    { name: "Inflammatory arthritis or crystal arthropathy", distinguishing: "Multiple joints, morning stiffness, systemic features, or an acute hot joint; arrange medical review." }
  ],
  redFlags: [
    "Hot, red, rapidly swelling wrist or thumb with fever, or a wound near the compartment: suspect infection (tenosynovitis or septic arthritis). Refer to emergency.",
    "Radial wrist or snuffbox pain after a fall or direct trauma: do not assume de Quervain's. Exclude scaphoid and distal radius fracture with imaging.",
    "New numbness or burning over the dorsum of the thumb and hand after injection or surgery: suspect superficial radial nerve injury. Arrange urgent surgical review.",
    "Multiple swollen joints, morning stiffness longer than 30 minutes or systemic symptoms: suspect inflammatory arthritis. Arrange medical review.",
    "Persisting or recurrent symptoms after repeated injections (a common convention is two), or a post-fracture presentation not responding to injection: refer to hand surgery, as a separate EPB subcompartment may be present [r4,r7].",
    "Pregnant or breastfeeding women: check medication and injection decisions with the prescriber, because trial evidence in this group is a single small study [r8]."
  ],

  management: {
    principles: "Use a stepped approach guided by severity, duration and previous treatment. European consensus (35 experts) recommended that every patient receives instructions, combined with another treatment, and that instructions alone are not enough. Suitable options were NSAIDs, splinting, NSAIDs plus splinting, corticosteroid injection, injection plus splinting, or surgery [r1]. Corticosteroid injection is the most effective conservative treatment, with documented success of 61–83%, and a combination of splint and injection appears more beneficial than either alone, although there is no consensus on the best protocol [r4]. A systematic review of 15 randomised trials for de Quervain's disease found moderate evidence for injection in the very short term and for a thumb splint added to injection in the short and mid term [r5]. The evidence for exercise, taping and other physiotherapy interventions is weak [r9,r10]. Corticosteroid is not benign and should be used with caution [r4].",
    medical: [
      { name: "Corticosteroid injection into the first dorsal compartment (ultrasound-guided where available)", description: "Documented success was 61–83%. Ultrasound visualised the intercompartmental septum, and ultrasound-guided injections were more accurate and gave better outcomes [r4]. Moderate evidence supports a short-term effect [r5]. The Cochrane review found a single small trial (18 pregnant or lactating women) in which all 9 injected patients had complete pain relief at 1–6 days versus none of 9 with a thumb spica [r8]. Post-fracture disease responded less well [r7].", evidence: "moderate", recommendation: "consider", refs: ["r4", "r5", "r8", "r7"] },
      { name: "Thumb spica splint added to corticosteroid injection", description: "A thumb splint added to injection was effective in the short and mid term (moderate evidence) [r5], and combining splint and injection appears better than either alone [r4].", evidence: "moderate", recommendation: "consider", refs: ["r4", "r5"] },
      { name: "Multipoint or repeat corticosteroid injection", description: "Some evidence suggests multipoint injection and multiple injections before surgical referral may help, but corticosteroid use is not benign and should be done with caution [r4].", evidence: "limited", recommendation: "consider", refs: ["r4"] },
      { name: "NSAIDs (oral or topical) with instructions", description: "Listed by the European consensus as a suitable option when combined with instructions [r1]. Use according to individual risk, especially in pregnancy and lactation.", evidence: "expert-opinion", recommendation: "consider", refs: ["r1"] },
      { name: "Surgical release of the first dorsal compartment", description: "Considered when other treatments fail [r1]. In a pilot RCT of 40 patients, all improved at 6 months after release or reconstruction, with no significant difference; ultrasound showed tendon subluxation in 4 patients after release (1 symptomatic) and in none after reconstruction [r11]. A separate EPB sheath was noted in all post-fracture patients needing release, so all subcompartments should be checked [r7].", evidence: "limited", recommendation: "consider", refs: ["r1", "r11", "r7"] }
    ],
    physio: [
      { name: "Instructions, education and activity modification", description: "The consensus advised that patients always receive instructions and that instructions should be combined with another treatment [r1]. Modify high-risk tasks: thumb and wrist positions in infant lifting, pinch grip, texting and tools. Keep realistic for new parents and workers [r6].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r1"] },
      { name: "Thumb spica splint (fitting and wear schedule)", description: "A splint supporting the wrist and thumb offloads the first compartment. Evidence supports it mainly as an addition to injection [r5]. In the single small trial, thumb spica alone gave no complete pain relief at 1–6 days versus injection [r8].", evidence: "limited", recommendation: "consider", refs: ["r5", "r8"] },
      { name: "Graded exercise: pain-free range, isometric then isotonic and eccentric loading", description: "Progressive thumb abduction, extension and radial deviation loading after pain settles. In a case series of four patients, mobilisation with movement, eccentric training and electrical stimulation were followed by reductions in pain and DASH, and one needed an injection later. Evidence is very limited [r10].", evidence: "very-limited", recommendation: "consider", refs: ["r10"] },
      { name: "Load management and return-to-task program", description: "Graded exposure to pinch, lifting and keyboard tasks with pacing (see rehab stages). No trial evidence is quoted here for a specific protocol.", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Therapeutic taping (including Kinesio taping)", description: "A meta-analysis of seven high-risk-of-bias trials (241 participants) found that taping did not improve pain, grip strength or function, and was no better than other modalities; there is insufficient evidence to recommend it [r9].", evidence: "limited", recommendation: "not-recommended", refs: ["r9"] }
    ],
    education: [
      "De Quervain's is a tight, thickened tunnel for the thumb tendons at the wrist. It is a common, treatable problem, and it is not a sign of serious damage.",
      "Rest from the specific painful tasks, change how you hold and lift (for example, support a baby with forearms and palms rather than a pinch grip), and wear the splint as advised.",
      "Injections help many people for a time, and a splint worn with an injection seems to help more than either alone, but not everyone responds [r4,r5].",
      "Surgery is an option if symptoms persist after other treatment, and most people in the small trial improved [r11].",
      "Return to normal use gradually, because jumping back to full gripping and lifting is a common cause of flare-ups."
    ]
  },

  rehab: {
    overview: "The rehabilitation program offloads the first dorsal compartment while symptoms are irritable, then restores thumb and wrist capacity with graded loading, and finally returns the person to the tasks that caused the problem with better technique. Trials of specific rehabilitation protocols are lacking [r10], so dosages are common clinical conventions and are progressed by symptom response. After an injection, load is reduced for a short period, and after surgery the surgeon's protocol (wound care, scar management and splint) overrides this program.",
    stages: [
      {
        name: "Settle irritability & offload",
        timeframe: "Weeks 0–3",
        goals: ["Reduce pain with daily tasks", "Teach load modification and handling technique", "Fit a thumb splint if chosen", "Keep other joints moving"],
        precautions: ["Avoid forceful pinch and sustained ulnar deviation with the thumb flexed", "After an injection, avoid heavy loading for 1–2 weeks (clinical convention)", "Do not stretch into pain (Finkelstein-type stretches can aggravate)"],
        exercises: [
          { name: "Thumb spica splint wear schedule", dosage: "Wear during painful tasks and at night for a 3-week trial (common clinical convention)", cues: "Wrist and thumb MCP supported; IP joint free" },
          { name: "Pain-free thumb IP and finger range", dosage: "10 repetitions each, 3–4 times daily", cues: "Keep movement small and comfortable" },
          { name: "Pain-free active wrist flexion and extension", dosage: "2 × 15, no load, 2–3 times daily", cues: "Avoid ulnar deviation with the thumb tucked in", figure: { pose: "ex-wrist-extension", view: "lateral", props: ["chair"] } },
          { name: "Infant lifting and carrying technique", dosage: "Practise once, then use daily", cues: "Support with the forearms and both palms; avoid pinching under the arms with the wrist deviated", figure: { pose: "carry", view: "lateral" } },
          { name: "Activity pacing and micro-breaks", dosage: "Change grip or posture every 20–30 minutes during repetitive tasks", cues: "Alternate hands and tasks" }
        ],
        progressionCriteria: ["Pain with daily tasks reduced (for example to 3/10 or less)", "Resting pain minimal and night pain settling", "Patient understands handling changes", "No signs of infection or nerve injury"]
      },
      {
        name: "Restore range & load tolerance",
        timeframe: "Weeks 2–6",
        goals: ["Full pain-free wrist and thumb range", "Isometric then light isotonic loading", "Reduce reliance on the splint", "Restore pinch confidence"],
        precautions: ["Keep loading below a moderate pain level that settles within 24 hours", "Avoid end-range ulnar deviation under load early"],
        exercises: [
          { name: "Isometric thumb abduction and extension holds", dosage: "5 × 30–45 s, 1–2 times daily (a common convention for loaded tendon pain; no DQ-specific trial)", cues: "Moderate effort; pain no more than 3–4/10" },
          { name: "Wrist flexion and extension with light load", dosage: "3 × 10–15, light dumbbell, 3 times weekly", cues: "Forearm supported; slow tempo", figure: { pose: "ex-wrist-flexion", view: "lateral", props: ["dumbbell", "chair"] } },
          { name: "Thumb abduction against a light band", dosage: "3 × 10, 3 times weekly", cues: "Lift the thumb away from the palm slowly" },
          { name: "Light grip squeezes", dosage: "2 × 10 with a soft ball, 3–5 s holds", cues: "Wrist neutral; no pinching pain", figure: { pose: "ex-grip", view: "lateral" } },
          { name: "Gentle forearm rotation", dosage: "3 × 15, light weight", cues: "Elbow at side; slow control" }
        ],
        progressionCriteria: ["Pain with isometrics at 3/10 or less", "Full pain-free wrist and thumb range", "Pinch and grip at least 70% of the other side", "Symptoms stay stable after loading sessions"]
      },
      {
        name: "Strength & capacity",
        timeframe: "Weeks 6–12",
        goals: ["Restore pinch and grip strength", "Build tendon and forearm capacity", "Tolerate sustained tool and keyboard tasks", "Wean the splint"],
        precautions: ["Increase load gradually, no faster than symptoms allow", "Persisting swelling or crepitus warrants review"],
        exercises: [
          { name: "Eccentric radial deviation with hammer or weighted bar", dosage: "3 × 10–15, slow 3–4 s lowering, 3 times weekly (common clinical convention)", cues: "Control the lowering; stay within tolerable pain", figure: { pose: "grip-tool", view: "lateral", props: ["hammer"] } },
          { name: "Wrist extension with dumbbell", dosage: "3 × 10–15, progressing load", cues: "Forearm supported", figure: { pose: "ex-wrist-extension", view: "lateral", props: ["dumbbell", "chair"] } },
          { name: "Grip and pinch strengthening (putty, gripper)", dosage: "3 × 8–10 with 5 s holds, 3 times weekly", cues: "Squeeze firmly without ulnar deviation pain", figure: { pose: "ex-grip", view: "lateral" } },
          { name: "Farmer carry", dosage: "3 × 20–30 m, building load", cues: "Neutral wrists, tall posture", figure: { pose: "ex-farmer-carry", view: "lateral", props: ["dumbbell"] } },
          { name: "Wall or incline push-up", dosage: "3 × 8–12", cues: "Even weight through both hands", figure: { pose: "ex-press-up", view: "lateral", props: ["bench"] } }
        ],
        progressionCriteria: ["Pinch and grip at least 85–90% of the other side", "Negative or minimally painful provocation tests", "Tolerates sustained work or caregiving tasks", "Pain 2/10 or less after loading sessions"]
      },
      {
        name: "Return to full activity & prevention",
        timeframe: "Weeks 10+",
        goals: ["Return to full work, caregiving and sport", "Maintain strength and handling technique", "Recognise early recurrence", "Taper formal support"],
        precautions: ["Avoid sudden increases in repetitive thumb tasks", "Re-refer if symptoms recur or fail to respond"],
        exercises: [
          { name: "Task-specific graded exposure (tools, gripping, lifting)", dosage: "Start at about 50% of usual volume and add 10–20% per week (common convention)", cues: "Alternate tasks; take planned breaks", figure: { pose: "grip-tool", view: "lateral", props: ["hammer"] } },
          { name: "Keyboard and phone tolerance", dosage: "Blocks of 20–30 minutes, building up", cues: "Keep the thumb relaxed and the wrist near neutral", figure: { pose: "typing", view: "lateral", props: ["keyboard", "desk"] } },
          { name: "Heavy grip and wrist maintenance", dosage: "2 times weekly, 3 × 6–10", cues: "Symptom-guided progression" },
          { name: "Sport-specific loading (racquet, golf, rowing)", dosage: "Gradual increase in volume and intensity", cues: "Check grip size and technique" }
        ],
        progressionCriteria: ["Full usual duties without a flare", "Pinch and grip at least 90% of the other side", "Provocation tests negative", "Patient has a plan for load management and early recurrence"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Pain-free daily tasks and full thumb and wrist range",
      "Pinch and grip strength at about 90% of the other side (a common clinical convention)",
      "Negative or minimal Finkelstein, Eichhoff or WHAT provocation",
      "Tolerance of graded work, caregiving or sport tasks without a flare",
      "Splint weaned or used only for selected tasks",
      "Wound and scar settled if surgery was performed"
    ],
    tests: ["Pinch and grip dynamometry", "NPRS during task simulation", "QuickDASH or PRWE", "Provocation tests (Finkelstein, Eichhoff, WHAT)"]
  },
  prognosis: "Many people improve with conservative care, but no treatment protocol is clearly best [r4]. Documented success of corticosteroid injection was 61–83% [r4]. The post-traumatic form responded less well to injection and more often needed surgical decompression, with a separate EPB sheath found in all those needing release [r7]. In a pilot randomised trial of 40 patients, all improved at 6 months after surgery, with no clinical difference between pulley release and reconstruction; tendon subluxation on ultrasound was seen in 4 patients after release (1 symptomatic) and in none after reconstruction, a difference that was not statistically significant [r11]. Long-term recurrence rates were not retrieved from the sources used.",
  prevention: [
    "Keep the wrist and thumb in neutral positions during repetitive tasks, and avoid sustained pinch with ulnar deviation (clinical).",
    "Teach lifting and holding an infant with forearm and palmar support, because lifting frequency and infant age were significant risk factors in caregivers [r6].",
    "Build up repetitive thumb tasks (gaming, texting, tools, racquet sport) gradually (clinical).",
    "After a distal radius fracture, watch for radial wrist pain in the following months, because risk was raised 2.4 to 4.2 times [r7]."
  ],
  clinicalPearls: [
    "A positive Finkelstein or Eichhoff does not confirm the diagnosis: both have low specificity. Pair them with focal tenderness over the compartment and exclude snuffbox and thumb-base causes [r2].",
    "Ask about new babies. Infant lifting frequency was a significant risk factor, and handling technique is often the most useful change [r6].",
    "Think of de Quervain's in the months after a distal radius fracture, because the post-traumatic form responds less well to injection and often has a separate EPB sheath [r7].",
    "A thumb splint alone is a weak option: in the single small trial it gave no complete relief at 1–6 days against 9 of 9 for injection, and its main support is as an addition to injection [r5,r8].",
    "If an injection fails, consider a septum or separate EPB subcompartment before repeating it blindly: ultrasound can show it [r4].",
    "Do not use taping as the main treatment: the meta-analysis found no benefit over other modalities [r9]."
  ],
  related: ["intersection-syndrome", "scaphoid-fracture", "trigger-finger", "skiers-thumb", "carpal-tunnel-syndrome", "distal-radius-fracture"],

  references: [
    { id: "r1", citation: "Huisstede BMA, Coert JH, Fridén J, et al. Consensus on a multidisciplinary treatment guideline for de Quervain disease: results from the European HANDGUIDE study. Phys Ther. 2014;94(8):1095-110.", pmid: "24700135", doi: "10.2522/ptj.20130069", type: "consensus-statement", year: 2014 },
    { id: "r2", citation: "Fakoya AO, Tarzian M, Sabater EL, et al. De Quervain's disease: a discourse on etiology, diagnosis, and treatment. Cureus. 2023;15(4):e38079.", pmid: "37252462", doi: "10.7759/cureus.38079", type: "narrative-review", year: 2023 },
    { id: "r3", citation: "Kuo YL, Jou IM, Wang PH, et al. Correlation between IL-20 and de Quervain's disease severity. Ann Plast Surg. 2019;82(1S Suppl 1):S6-12.", pmid: "30540601", doi: "10.1097/SAP.0000000000001701", type: "cohort", year: 2019 },
    { id: "r4", citation: "Abi-Rafeh J, Kazan R, Safran T, et al. Conservative management of de Quervain stenosing tenosynovitis: review and presentation of treatment algorithm. Plast Reconstr Surg. 2020;146(1):105-26.", pmid: "32590652", doi: "10.1097/PRS.0000000000006901", type: "systematic-review", year: 2020 },
    { id: "r5", citation: "Huisstede BM, Gladdines S, Randsdorp MS, et al. Effectiveness of conservative, surgical, and postsurgical interventions for trigger finger, Dupuytren disease, and De Quervain disease: a systematic review. Arch Phys Med Rehabil. 2018;99(8):1635-49.e21.", pmid: "28860097", doi: "10.1016/j.apmr.2017.07.014", type: "systematic-review", year: 2018 },
    { id: "r6", citation: "Manzoor A, Syed S, Nadeem M, et al. Prevalence of De Quervain disease in infant caregivers and its association with risk factors. J Pak Med Assoc. 2024;74(7):1335-7.", pmid: "39028065", doi: "10.47391/JPMA.4916", type: "cross-sectional", year: 2024 },
    { id: "r7", citation: "Carroll TJ, Caraet B, Madsen N, et al. Development of de Quervain tenosynovitis after distal radius fracture. Hand (N Y). 2024;19(7):1154-8.", pmid: "37246426", doi: "10.1177/15589447231174042", type: "cohort", year: 2024 },
    { id: "r8", citation: "Peters-Veluthamaningal C, van der Windt DAWM, Winters JC, et al. Corticosteroid injection for de Quervain's tenosynovitis. Cochrane Database Syst Rev. 2009;(3):CD005616.", pmid: "19588376", doi: "10.1002/14651858.CD005616.pub2", type: "systematic-review", year: 2009 },
    { id: "r9", citation: "Drapeza RC, Navasca SB, Dones V, et al. The effects of taping on de Quervain's disease: a systematic review and meta-analysis. J Bodyw Mov Ther. 2022;32:218-27.", pmid: "36180153", doi: "10.1016/j.jbmt.2022.05.004", type: "meta-analysis", year: 2022 },
    { id: "r10", citation: "Rabin A, Israeli T, Kozol Z. Physiotherapy management of people diagnosed with de Quervain's disease: a case series. Physiother Can. 2015;67(3):263-7.", pmid: "26839455", doi: "10.3138/ptc.2014-47", type: "other", year: 2015 },
    { id: "r11", citation: "Salim B, Ansari MT, Kumar VS, et al. Is pulley reconstruction better than pulley release for de Quervain's tenosynovitis? A double-blind randomized controlled trial. J Wrist Surg. 2021;10(5):377-84.", pmid: "34631289", doi: "10.1055/s-0041-1725171", type: "rct", year: 2021 }
  ],

  animation: {
    title: "How de Quervain's tenosynovitis develops",
    phases: [
      {
        type: "moi", label: "Repeated load", duration: 6, view: "lateral", environment: "home",
        actors: [{ id: "parent", kit: "worker" }],
        keyframes: [
          { t: 0, pose: "stand", root: { x: 0 } },
          { t: 1.2, pose: "carry", root: { x: 0 } },
          { t: 2.6, pose: "carry", joints: { wristR: 25, elbowR: 100 }, root: { x: 0 } },
          { t: 4.0, pose: "carry", joints: { wristR: 35, elbowR: 100 }, root: { x: 0 } },
          { t: 5.4, pose: "carry", joints: { wristR: 35, elbowR: 100 }, root: { x: 0 } }
        ],
        forces: [
          { t: [2.4, 5.8], at: "wristR", dir: "down", label: "Repeated pinch and lift, thumb abducted", size: "m" }
        ],
        highlights: [{ t: [2.4, 6], at: "wristR" }],
        captions: [
          { t: 0, text: "A new parent lifts and carries an infant many times a day." },
          { t: 1.2, text: "Each lift is a pinch-and-twist grip with the thumb abducted and the wrist deviated." },
          { t: 2.6, text: "The APL and EPB tendons glide around the radial styloid under load." },
          { t: 4.2, text: "Repeated friction irritates the tight canal that holds them." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "wristR",
        captions: [{ t: 0, text: "Zooming into the right wrist at the radial styloid." }]
      },
      {
        type: "closeup", label: "Inside the wrist", duration: 10, scene: "wrist-hand",
        actions: [
          { t: 0, do: "highlight", target: "firstDorsalCompartment" },
          { t: 0.2, do: "fade", target: "flexorTendons", to: 0.3 },
          { t: 0.2, do: "fade", target: "thenarMuscles", to: 0.3 },
          { t: 0.4, do: "label", target: "firstDorsalCompartment", text: "First dorsal compartment sheath (retinaculum roof)" },
          { t: 1.0, do: "label", target: "aplTendon", text: "APL" },
          { t: 1.2, do: "label", target: "epbTendon", text: "EPB" },
          { t: 1.8, do: "arrow", at: "firstDorsalCompartmentRegion", dir: "medial", label: "Ulnar deviation with thumb abduction loads the tendons", size: "m" },
          { t: 2.6, do: "swell", target: "aplTendon", amount: 0.35 },
          { t: 2.6, do: "swell", target: "epbTendon", amount: 0.35 },
          { t: 3.2, do: "degenerate", target: "firstDorsalCompartment" },
          { t: 3.8, do: "thicken", target: "firstDorsalCompartment", amount: 0.7 },
          { t: 4.2, do: "label", target: "firstDorsalCompartment", text: "Roof thickens: degenerative change, a narrowed canal" },
          { t: 5.4, do: "inflame", target: "firstDorsalCompartment", amount: 0.4 },
          { t: 6.0, do: "pain", at: "firstDorsalCompartmentRegion" },
          { t: 6.6, do: "camera", at: "firstDorsalCompartmentRegion", zoom: 1.6, dur: 1 },
          { t: 9.0, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "APL and EPB run together through the first dorsal compartment at the radial styloid." },
          { t: 1.8, text: "Thumb abduction with ulnar deviation angles and loads the tendons in the canal." },
          { t: 2.6, text: "Sheath irritation swells the tendons and narrows the space." },
          { t: 3.8, text: "The retinaculum thickens, with degeneration more than simple inflammation." },
          { t: 5.4, text: "In severe cases inflammatory mediators rise, and pain is felt at the radial styloid." },
          { t: 6.6, text: "Offloading, a splint with injection, or release of the roof reduces the pressure." }
        ]
      },
      {
        type: "micro", label: "Tissue response", duration: 9, tissue: "tendon-continuum",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.6, stage: "reactive" }, { t: 3.4, stage: "disrepair" }, { t: 5.2, stage: "degenerative" }, { t: 7.0, stage: "load-adaptation" }
        ],
        timeLabels: [{ t: 1.6, text: "Days–weeks" }, { t: 3.4, text: "Weeks–months" }, { t: 5.2, text: "Chronic" }, { t: 7.0, text: "With load management" }],
        captions: [
          { t: 0, text: "Healthy connective tissue: aligned collagen and a smooth gliding surface." },
          { t: 1.6, text: "Repeated friction irritates the cells and swells the matrix (a generic tendon-matrix model of the sheath response)." },
          { t: 3.4, text: "With continued load the matrix becomes disorganised and thickened." },
          { t: 5.2, text: "Chronic change: disorganised, degenerative matrix, as reported in the thickened retinaculum." },
          { t: 7.0, text: "Graded loading and offloading help the tissue adapt, but the thickened canal may need injection or release." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "UL7" }
};
