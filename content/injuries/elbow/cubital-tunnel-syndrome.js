export default {
  id: "cubital-tunnel-syndrome",
  name: "Cubital tunnel syndrome",
  shortName: "Cubital tunnel syndrome",
  aka: ["ulnar nerve compression at the elbow", "ulnar neuropathy at the elbow", "UNE", "ulnar nerve entrapment at the elbow", "funny bone nerve problem", "sulcus ulnaris syndrome", "retrocondylar groove syndrome", "ulnar neuritis at the elbow"],
  region: "elbow",
  tissues: ["nerve"],
  onset: "gradual",
  mechanismType: ["compression", "traction", "overuse"],
  populations: ["adults in their 40s to 60s", "manual and care workers", "people who hold the elbow flexed for long periods", "people with previous elbow trauma or deformity", "people who lean on the inner elbow"],
  sports: ["baseball", "weightlifting"],
  urgency: "routine",
  summary: "Compression and stretch of the ulnar nerve behind the inner elbow, worsened by sustained flexion or leaning. It causes ring and little finger tingling, later weakness. Conservative care helps most mild cases.",
  keyFacts: [
    { label: "Typical recovery", value: "Mild or moderate cases: 51 of 57 patients (89.5%) were improved at 6 months, and information alone, a night splint and nerve gliding did not differ in one RCT" },
    { label: "Return to sport", value: "Criteria-based; no validated criteria exist. Most return once symptoms are controlled and grip and pinch strength are near the other side (clinical convention)" },
    { label: "Key test", value: "Tinel's sign (sensitivity 0.70 and 54% in two studies) and the elbow flexion test (0.32 at 30 s and 46%); elbow flexion plus nerve pressure was most sensitive (0.91 at 30 s) in a 32-patient study" },
    { label: "Imaging", value: "Electrodiagnosis was abnormal in about 91% and ultrasound in about 95% of clinically diagnosed patients in one retrospective series, so a normal nerve conduction study does not exclude the condition" },
    { label: "Peak age", value: "Mean age about 48 years, and 56% men, across surgical series in a network meta-analysis" },
    { label: "Incidence", value: "Symptoms in up to 5.9% of the general population in one review; the second most common compressive neuropathy after carpal tunnel syndrome" }
  ],
  overview: "Cubital tunnel syndrome is compression and traction of the ulnar nerve at the elbow. It is the second most common compressive neuropathy of the upper limb after carpal tunnel syndrome, and in one review up to 5.9% of the general population had experienced symptoms, with many people never seeking care [r1]. The usual story is numbness and tingling in the ring and little fingers and the dorsoulnar hand, often at night or when the elbow is held bent, then clumsiness and weakness of the small hand muscles if it persists [r1].\n\nThe nerve sits behind the axis of elbow flexion and runs through confined spaces, so it is subjected to stretch and compression that its normal gliding usually moderates [r2]. In cadavers, flexing the elbow from full extension to 135° reduced the cross-sectional area of the cubital tunnel by 30–41% and raised pressure inside the nerve [r3]. The roof is not a single band: the cubital tunnel includes the retrocondylar groove partly covered by the cubital tunnel retinaculum (Osborne's ligament), the humeroulnar arcade and the deep flexor–pronator aponeurosis [r4]. Sustained flexion (for example on a phone or in sleep) and leaning on the inner elbow are the provoking positions in clinical practice; this is reasoned from the mechanics rather than measured in the sources reviewed.\n\nThere is no universally agreed diagnostic or treatment algorithm [r1]. Mild and moderate cases are managed conservatively first, but randomised evidence for any particular conservative treatment is thin [r5]. When surgery is needed, a Cochrane review found little to no difference in function between simple decompression and decompression with transposition, including in severe disease [r5]. Observational pooled analyses point in different directions, so the choice of operation rests more on surgeon preference and the individual elbow than on trial proof [r6, r7].",

  epidemiology: {
    text: "In a narrative review, up to 5.9% of the general population had experienced cubital tunnel symptoms, and the condition is thought to be underdiagnosed because people do not seek treatment. Older patients tended to present with motor symptoms of chronic onset, while younger patients tended to have more acute symptoms [r1]. A network meta-analysis of surgical studies (30 studies, 2894 limbs) found that 56% of participants were men, the mean age was 48 years and symptoms had lasted a mean of 15 months before surgery; these are surgical populations, so they describe people referred for an operation rather than everyone with symptoms [r7]. The review authors describe the condition as affecting about 6% of the population [r7]. No population-based incidence figure was retrieved for this page.",
    riskFactors: {
      intrinsic: [
        "Anatomical variants of the tunnel: anterior subluxation of the nerve or an anconeus epitrochlearis muscle (a primary form) [r4]",
        "Elbow deformity or earlier elbow injury, for example cubitus valgus, which Sunderland classed as a secondary form [r4]",
        "A thickened or fused tunnel roof: in cadavers the cubital tunnel fascia was thickened, and fusion of its three layers may reduce nerve gliding [r8]",
        "Age: older patients tended to present with chronic motor symptoms and younger patients with acute symptoms [r1]"
      ],
      extrinsic: [
        "Repetitive pressure, stretching, flexion or trauma of the elbow are the recognised causes [r1]",
        "Sustained elbow flexion, such as long phone calls, sleeping with the elbows bent or holding a tool close to the body (modifiable; reasoned from the pressure data in flexion [r3], not tested directly)",
        "Leaning on the inner elbow on a desk, armrest or car door (modifiable; clinical observation)",
        "Heavy repetitive manual work or throwing sports (clinical observation; the sources reviewed did not quantify occupational or sporting risk)"
      ]
    }
  },

  mechanism: {
    summary: "The ulnar nerve passes behind the medial epicondyle and through the cubital tunnel, behind the axis of elbow flexion [r2]. As the elbow flexes, the nerve is drawn over the epicondyle, the tunnel narrows and pressure rises inside the nerve [r3]. Prolonged or repeated flexion, direct leaning, or a tight or thickened roof therefore combine traction and compression on a nerve that normally glides. Reduced gliding and perineural scarring can then make the nerve more vulnerable still [r2].",
    sequence: [
      "The elbow is held flexed for long periods, or the medial elbow is leaned on, so the nerve is drawn behind the medial epicondyle (clinical observation of the provoking positions).",
      "As the elbow moves from extension to about 135° of flexion, the cross-sectional area of the cubital tunnel falls by 30–41% and the nerve itself flattens (area down 33–50%) in cadavers [r3].",
      "Pressure inside the nerve rises: at 130° of flexion the pressure within the nerve in the tunnel was 45% higher than the pressure outside it [r3].",
      "The roof of the tunnel (retinaculum and flexor–pronator aponeurosis) tightens over the nerve; if its layers are thickened or fused, the nerve glides less [r8].",
      "Compression and traction impair the nerve's blood supply and conduction, and symptoms appear as intermittent tingling in the ring and little fingers, typically at night or in flexion (typical nerve-compression biology).",
      "If the provocation continues, restricted gliding and perineural scarring can set up a cycle of further loss of excursion and progressive nerve damage [r2].",
      "With severe or prolonged compression, axons are lost and the small hand muscles weaken and waste, for example the first dorsal interosseous [r1]."
    ],
    variants: [
      { name: "Idiopathic (primary) compression", description: "No clear cause apart from the anatomy of the tunnel; this is the group most surgical trials studied. Primary forms include anterior subluxation of the nerve and compression by an anconeus epitrochlearis muscle [r4]." },
      { name: "Secondary compression after elbow deformity or injury", description: "A secondary form follows deformation or other processes of the elbow joint, for example cubitus valgus or old elbow trauma [r4]. The treatment choice changes: transposition may be preferred in cubitus valgus and with severe bone or tissue change [r4]." },
      { name: "Subluxating (snapping) ulnar nerve", description: "The nerve slips over the medial epicondyle on flexion; a review based on the German guideline suggests subcutaneous anterior transposition when the subluxation is painful or the nerve 'snaps' back and forth [r4]." },
      { name: "Traction-dominant or throwing-related", description: "Repeated valgus and flexion in throwers stretches the nerve (clinical observation). The strain data are discussed under pathophysiology; no throwing-specific trials were retrieved." },
      { name: "Coexisting problems", description: "Cubital tunnel syndrome can coexist with carpal tunnel syndrome or cervical or thoracic outlet problems, so symptoms in the ulnar hand do not always arise from the elbow (clinical observation; see differentials)." }
    ]
  },

  anatomy: {
    text: "The ulnar nerve runs down the medial arm, passes behind the medial epicondyle in the retrocondylar groove and enters the cubital tunnel, which has three parts: the groove partly covered by the cubital tunnel retinaculum (Osborne's ligament or ligamentum arcuatum), the humeroulnar arcade, and the deep flexor–pronator aponeurosis [r4]. In cadavers the roof is a three-layered myofascial retinaculum (fascial, tendinous and muscular layers, mean thickness 523 µm), and the multifascicular nerve has a mean area of 6.0 mm² [r8]. The floor is the medial collateral ligament and joint capsule (standard anatomy), and the nerve then passes beneath flexor carpi ulnaris (FCU) into the forearm. The dorsoulnar hand is within the sensory territory affected [r1], and the nerve supplies most intrinsic hand muscles, the FCU and the ulnar half of flexor digitorum profundus (standard anatomy).",
    structures: [
      { name: "Ulnar nerve", role: "Runs behind the axis of elbow flexion, normally gliding as the elbow moves; supplies sensation to the ring and little fingers and dorsoulnar hand and power to most intrinsic hand muscles [r2, r1]" },
      { name: "Medial epicondyle and retrocondylar groove", role: "The nerve lies in the groove behind the epicondyle and is drawn over it in flexion [r4]" },
      { name: "Cubital tunnel retinaculum (Osborne's ligament)", role: "Forms the roof of the tunnel between the medial epicondyle and the olecranon; a three-layered myofascial structure in cadavers [r4, r8]" },
      { name: "Humeroulnar arcade and deep flexor–pronator aponeurosis", role: "Distal parts of the tunnel as the nerve passes between the heads of flexor carpi ulnaris; decompression should span from triceps to the FCU fascia [r4, r8]" },
      { name: "Medial collateral ligament and joint capsule", role: "Floor of the tunnel (standard anatomy); can bulge or develop osteophytes in the post-traumatic or degenerative elbow" },
      { name: "Flexor carpi ulnaris", role: "Muscle whose fascia forms the distal roof; it overlies the nerve as it enters the forearm (standard anatomy)" }
    ]
  },

  pathophysiology: {
    tissueDamage: "Cubital tunnel syndrome is a compression and traction neuropathy. In cadavers, moving the elbow from extension to 135° of flexion reduced the area of the cubital tunnel at three levels by 30%, 39% and 41%, reduced the area of the nerve by 33%, 50% and 34%, and raised pressure inside the nerve, which exceeded the pressure outside it at 90° of flexion and beyond; at 130° it was 45% higher [r3]. Gliding also matters: pathological fusion of the three layers of the roof may reduce nerve gliding and so contribute to symptoms [r8], and when excursion is restricted a cycle of perineural scarring, further loss of excursion and progressive damage can develop [r2].\n\nThe size of the role of strain, as opposed to pressure, is unsettled. In ten cadavers, in situ decompression did not significantly reduce ulnar nerve strain during flexion (5.3% to 4.3%), whereas adding a medial epicondylectomy removed it (-0.54%) [r9]. In a second cadaver study, in situ release did not change strain, subcutaneous and submuscular transposition each reduced strain in full flexion, and medial epicondylectomy gave no significant change [r10]. The two studies therefore agree that in situ release alone leaves strain unchanged but disagree on epicondylectomy, and the clinical trials do not show better outcomes from the operations that reduce strain [r5].",
    structures: [
      { name: "Ulnar nerve", effect: "Flattened and under raised internal pressure in flexion in cadavers [r3]; with persistent compression it can lose conduction, myelin and finally axons (typical nerve biology)" },
      { name: "Cubital tunnel retinaculum and FCU aponeurosis", effect: "The roof can be thickened, with fusion of its three layers that may restrict gliding [r8]" },
      { name: "Perineural tissue", effect: "Restricted excursion is thought to lead to perineural scarring and progressive damage [r2]; perineural scarring is also described at revision surgery (clinical observation)" },
      { name: "Medial epicondyle, groove and joint", effect: "Deformity, old trauma or bony change can narrow the tunnel and are classed as secondary causes [r4]" },
      { name: "Anconeus epitrochlearis muscle (when present)", effect: "An accessory muscle that can compress the nerve; a primary anatomical cause [r4]" }
    ],
    muscles: [
      { name: "First dorsal interosseous and other intrinsics", effect: "Weakness and wasting in advanced or chronic disease, with loss of fine hand function; first dorsal interosseous atrophy is a recognised late sign [r1]" },
      { name: "Hypothenar muscles and adductor pollicis", effect: "Weak little finger abduction and key pinch (Wartenberg's and Froment's signs; standard clinical findings)" },
      { name: "Flexor digitorum profundus to the ring and little fingers and flexor carpi ulnaris", effect: "Can be weak in elbow-level lesions, which helps to localise the lesion above the wrist (standard clinical findings)" },
      { name: "Compensating muscles", effect: "The median-innervated muscles and proximal arm compensate; grip and pinch drop and substitution patterns develop (clinical observation)" }
    ],
    cellular: [
      { phase: "Compression and traction", timing: "Minutes to hours of provocation", description: "Sustained flexion or pressure compresses and stretches the nerve, impairing its microcirculation and conduction; symptoms are intermittent and settle when the position changes (typical nerve-compression biology)." },
      { phase: "Ischaemia and conduction block", timing: "Days to weeks", description: "Reduced blood flow in the compressed segment blocks conduction, causing tingling and numbness that come and go (typical nerve-compression biology)." },
      { phase: "Demyelination", timing: "Weeks to months", description: "Persistent compression strips myelin focally, slowing conduction while axons are preserved; this is potentially reversible if compression is relieved (typical nerve-compression biology)." },
      { phase: "Axonal injury and Wallerian degeneration", timing: "Months", description: "In severe or prolonged compression, axons are damaged and the distal nerve degenerates, causing weakness and wasting (typical nerve-compression biology)." },
      { phase: "Regeneration", timing: "Months to a year or more", description: "After relief of compression, remyelination and axonal regrowth can restore function, more slowly and less completely when many axons have been lost (typical nerve biology; no recovery timings were extracted from the sources reviewed)." }
    ],
    systems: [
      { system: "Peripheral nervous system", effect: "Focal conduction block progressing to demyelination and axon loss in the ulnar nerve at the elbow; electrodiagnostic studies can miss the milder, intermittent stage [r11, r12]." },
      { system: "Vascular (intraneural microcirculation)", effect: "Raised pressure in flexion is the proposed route to impaired nerve blood flow [r3]; transposition carries a risk of compromising blood flow if poorly done [r4]." },
      { system: "Musculoskeletal chain", effect: "Neck, shoulder and thoracic outlet problems and carpal tunnel syndrome can coexist with or mimic ulnar symptoms, so screen the whole upper limb [r4]." },
      { system: "Sleep and daily function", effect: "Night symptoms wake the person and disturb sleep; people may sleep with the elbows flexed, which provokes the nerve (clinical observation)." },
      { system: "Central processing and psychological", effect: "Chronic numbness and clumsiness can reduce confidence in fine tasks; no studies of central changes in cubital tunnel syndrome were retrieved (clinical reasoning)." }
    ]
  },

  grading: {
    system: "Clinical severity staging (mild, moderate, severe) as used in trials",
    grades: [
      { grade: "Mild", description: "Intermittent tingling or numbness in the ulnar digits, often provoked by flexion, with little or no objective weakness. Trials of conservative care enrolled mild and moderate patients using Dellon's staging [r12]; this description is the commonly taught one, as the original staging paper was not retrieved.", prognosis: "In one randomised trial of mild or moderate patients, 89.5% of those followed were improved at 6 months [r12]." },
      { grade: "Moderate", description: "Intermittent sensory symptoms with measurable weakness, for example reduced pinch or grip strength, but no fixed deficit or wasting (the commonly taught description of Dellon's stages; the original paper was not retrieved).", prognosis: "Included with mild cases in the conservative trial [r12]; conservative care is usually tried first, and surgery is recommended when it fails [r4]." },
      { grade: "Severe", description: "Persistent sensory loss, marked weakness and wasting of the intrinsic muscles (Dellon grade 3 in a trial of severe cubital tunnel syndrome) [r13].", prognosis: "Surgery is recommended for motor weakness, muscle atrophy or fixed sensory change [r4]. In a randomised trial of 70 severe cases, simple decompression and submuscular transposition both gave good or excellent results in about four in five patients [r13]." }
    ]
  },

  timeframes: {
    summary: "Mild and moderate cases usually settle within months once the provoking positions are changed: 89.5% of those followed were improved at 6 months in one trial, with no difference between information alone, a night splint or nerve gliding [r12]. Recovery after surgery depends on how much axon loss was present, so strength can keep changing for a year or more (clinical convention).",
    healing: [
      { phase: "Early relief of provocation", startDay: 0, endDay: 42, description: "Education, position change and (optionally) a night splint reduce night and flexion-provoked symptoms; intermittent conduction block can settle quickly (typical biology, clinical convention)." },
      { phase: "Remyelination and sensory recovery", startDay: 14, endDay: 180, description: "Most improvement in a 6-month conservative trial of mild and moderate cases [r12]; pace varies with severity." },
      { phase: "Axonal regeneration after decompression (if axons were lost)", startDay: 60, endDay: 540, description: "Slow regrowth to the small hand muscles; strength recovery is slower and less complete the longer the weakness lasted (typical nerve biology, clinical convention)." },
      { phase: "Post-operative protection and mobilisation", startDay: 0, endDay: 42, description: "Surgeon-dependent; early therapy was favoured over immobilisation with limited evidence [r14]." }
    ],
    milestones: [
      { label: "Education and position changes started", day: 7, note: "Review night symptoms and provoking positions (clinical convention)" },
      { label: "6-week review", day: 42, note: "Refer promptly if weakness or wasting is progressing; otherwise continue (clinical convention)" },
      { label: "Consider surgical opinion", day: 90, note: "If conservative care has failed or motor signs are present, surgery is recommended [r4]" },
      { label: "6-month outcome of conservative care", day: 180, note: "51 of 57 (89.5%) were improved in a trial of mild and moderate cases [r12]" },
      { label: "Recovery plateau after surgery (typical)", day: 365, note: "Strength and sensation may keep changing for a year or more (clinical convention)" }
    ],
    returnToSport: "Criteria-based and led by symptoms and strength, not by a fixed date. Most people return to work and sport once night symptoms have settled, provoking positions are managed and grip and pinch strength are close to the other side (clinical convention). After surgery, return follows the surgeon's protocol, which depends on whether the nerve was transposed. No validated return criteria were identified in the sources reviewed."
  },

  clinicalPresentation: {
    symptoms: [
      "Intermittent numbness and tingling in the ring and little fingers and the dorsoulnar hand, often at night or when the elbow is held bent [r1]",
      "Medial elbow pain or aching, with tenderness over the nerve [r1]",
      "Symptoms provoked by sustained flexion (phone, steering, sleeping) or leaning on the inner elbow (clinical observation)",
      "Clumsiness, dropping objects and loss of fine hand control; weak grip [r1]",
      "In advanced cases, visible wasting between the thumb and index finger and a weak pinch [r1]"
    ],
    signs: [
      "Positive Tinel's sign over the nerve in the groove, and reproduction of symptoms on elbow flexion [r15, r16]",
      "Sensory loss in the ring and little fingers, including the dorsoulnar hand",
      "Thickening or tenderness of the nerve on palpation [r1]; the nerve may sublux on flexion [r4]",
      "Weak finger abduction and adduction, Froment's sign and Wartenberg's sign (standard clinical findings)",
      "Atrophy of the first dorsal interosseous and hypothenar muscles in chronic cases [r1]"
    ]
  },

  assessment: {
    subjective: [
      "Distribution of numbness: ring and little fingers and the dorsoulnar hand, and whether the neck, shoulder or thumb side of the hand is involved [r1]",
      "Provocation and relief: elbow flexion, phone use, steering, leaning, sleeping posture; night waking; relief with extension",
      "Duration, progression and the speed of onset: older patients more often present with chronic motor symptoms, younger patients with acute symptoms [r1]",
      "Hand function: dropping objects, grip, buttons, typing, instrument playing or fine work",
      "Previous elbow fracture, dislocation or surgery, elbow deformity, and occupation or sport",
      "Neck, shoulder and thoracic outlet symptoms, carpal tunnel symptoms, diabetes and other neuropathic risk factors (clinical convention)"
    ],
    observation: [
      "Wasting of the first dorsal interosseous and hypothenar eminence, compared with the other side [r1]",
      "Carrying angle (cubitus valgus) and any scar or deformity at the elbow [r4]",
      "Clawing or an abducted little finger (Wartenberg's sign) in advanced cases (standard clinical finding)",
      "Resting elbow posture and sleeping habits"
    ],
    palpation: [
      "Ulnar nerve in the groove behind the medial epicondyle: tenderness, thickening or a thickened tunnel roof [r1]",
      "Stability of the nerve as the elbow is flexed and extended: a nerve that rides forward over the epicondyle may sublux or snap [r4]",
      "Medial epicondyle, common flexor origin and medial collateral ligament, to separate other medial elbow pain",
      "Anconeus epitrochlearis, an accessory muscle that compresses the nerve in some people; it is rarely identifiable on palpation (clinical observation) [r4]"
    ],
    rangeOfMotion: [
      "Elbow flexion and extension, and any loss after trauma that could narrow the tunnel",
      "Cervical spine, shoulder and wrist range, to look for other contributors",
      "Whether sustained end-range flexion reproduces tingling within about a minute (see elbow flexion test)"
    ],
    strength: [
      "First dorsal interosseous (index abduction) and little finger abduction against resistance, compared with the other side",
      "Key pinch (Froment's sign) and grip, with a dynamometer if available; grip and pinch are standard outcome measures in surgical trials [r17]",
      "Flexor digitorum profundus to the ring and little fingers and flexor carpi ulnaris; weakness here points to a lesion at or above the elbow (standard clinical finding)",
      "Crossed-finger and finger abduction tests for intrinsic weakness (standard clinical finding)"
    ],
    neuro: [
      "Map light-touch and pinprick over the ring and little fingers and the dorsoulnar hand; involvement of the dorsoulnar hand is typical of the elbow rather than the wrist [r1]",
      "Screen C8 and T1 (reflexes, myotomes, Spurling's test) and the thoracic outlet; C8 radiculopathy is a key differential [r4]",
      "Check the median nerve and carpal tunnel symptoms, as they can coexist (clinical observation)"
    ],
    functional: [
      "Grip and pinch tasks, buttons, keyboard or instrument use and fine motor work",
      "Task and posture review: phone use, steering, sleeping position, desk and armrest habits",
      "Patient-reported function, for example QuickDASH, DASH, or the Canadian Occupational Performance Measure [r12, r17]"
    ],
    specialTests: [
      { name: "Tinel's sign over the cubital tunnel", purpose: "Provoke tingling by tapping the irritable ulnar nerve", procedure: "With the elbow slightly flexed, tap along the nerve in the groove behind the medial epicondyle and just above and below it. Compare with the other side.", positive: "Tingling or paraesthesia radiating into the ring and little fingers (not just local tenderness). Sensitivity varied between studies, and specificity was described as high or tests were 'rarely positive' in controls, with no figure given in the abstracts [r15, r16].", sensitivity: "0.70 (31 of 44 extremities with electrodiagnostically proven cubital tunnel syndrome, 32 patients) [r15]; 54% (70 patients with cubital tunnel syndrome) [r16]", specificity: "Not given as a figure in either abstract (positive tests were rarely seen in controls [r15]; specificity and predictive values were described as high [r16])", refs: ["r15", "r16"] },
      { name: "Elbow flexion test", purpose: "Reproduce symptoms by narrowing the tunnel and stretching the nerve", procedure: "The patient holds the elbow fully flexed with the forearm supinated and the wrist extended while the examiner times the onset of tingling in the ulnar digits (commonly up to 60 s; the study abstract reports 30 s). Compare with the other side.", positive: "Tingling or numbness in the ulnar digits during the hold. In the original study 33 of 44 extremities with cubital tunnel syndrome had a positive elbow flexion test, but the sensitivity at 30 seconds was only 0.32, so a short or negative test does not exclude the condition [r15].", sensitivity: "0.32 at 30 s (33 of 44 extremities had a positive test) [r15]; 46% for 'flexion/nerve compression' (Cheng) [r16]", specificity: "Not given as a figure in either abstract (tests were rarely positive in controls [r15])", refs: ["r15", "r16"] },
      { name: "Pressure provocation and combined elbow flexion plus pressure test", purpose: "Add direct pressure over the nerve to the flexed position", procedure: "With the elbow flexed and the wrist extended, press over the ulnar nerve just proximal to the cubital tunnel with a thumb for up to 60 s (study abstract reports 30 s) and ask about tingling in the ulnar digits.", positive: "Reproduction of tingling in the ulnar digits. This combination was the most sensitive test in a prospective study of 32 patients and 33 controls (32 patients had electrodiagnostically proven cubital tunnel syndrome); controls rarely had a positive test [r15]. The cohort was small and from one centre.", sensitivity: "0.91 at 30 s for flexion plus pressure; 0.55 for pressure alone [r15]", specificity: "Not given as a figure in the abstract (provocative tests were rarely positive in controls [r15])", refs: ["r15"] },
      { name: "Scratch collapse test", purpose: "Add a nerve-compression test with a different, motor response", procedure: "The patient resists bilateral shoulder external rotation with the elbows flexed. The examiner lightly scratches over the suspected compression site and the patient immediately resists again.", positive: "Momentary loss of external-rotation resistance on the affected side. In the original prospective study (70 patients with cubital tunnel syndrome, 109 controls) sensitivity was higher than Tinel's sign and the flexion/compression test, with high but unquantified specificity and 89% accuracy. This was one group's study, and independent confirmation was not reviewed here [r16].", sensitivity: "69% (cubital tunnel syndrome, 70 patients) [r16]", specificity: "Not given as a figure in the abstract (described as high) [r16]", refs: ["r16"] },
      { name: "Froment's sign, Wartenberg's sign and crossed-finger test", purpose: "Detect ulnar intrinsic weakness", procedure: "Froment's: the patient grips a sheet of paper between thumb and index finger and the examiner pulls it away. Wartenberg's: the little finger rests abducted. Crossed-finger: the patient crosses the middle finger over the index finger.", positive: "Thumb IP flexion (Froment's), an abducted little finger (Wartenberg's) or inability to cross the fingers. These are standard motor signs; no diagnostic accuracy figure was identified in the sources reviewed.", refs: [] },
      { name: "Palpation for nerve subluxation on elbow flexion", purpose: "Identify a subluxating nerve, which changes surgical planning", procedure: "Palpate the nerve in the groove as the elbow is moved from extension to full flexion.", positive: "The nerve rides over the medial epicondyle or snaps back (a review based on the German guideline suggests subcutaneous transposition when this is painful) [r4]. No accuracy figure was identified.", refs: [] }
    ],
    clinicalRules: [
      { name: "Sum of diagnostic criteria (Delphi-derived)", description: "In a vignette study, two panels of 8 hand surgeons rated 64 hypothetical cases built from six expert-agreed criteria. They did not agree on the relative importance of the six criteria, but the number of criteria present predicted the probability of cubital tunnel syndrome, and three or more positive criteria gave high diagnostic confidence. This was not tested against patients with a reference standard, so treat it as a framework, not a validated rule [r18]." }
    ],
    outcomeMeasures: [
      { name: "Dellon staging (mild, moderate, severe)", use: "Used in the conservative and surgical trials to classify severity [r12, r13]" },
      { name: "Bishop scoring system", use: "Used to grade surgical outcome as excellent, good or fair [r13, r17]" },
      { name: "DASH or QuickDASH", use: "Patient-reported arm function; DASH was compared between endoscopic and open decompression in a meta-analysis [r17]" },
      { name: "Grip and pinch dynamometry", use: "Objective strength; grip and pinch strength were better after endoscopic decompression in a meta-analysis [r17], and strength was measured in the conservative trial [r12]" },
      { name: "Canadian Occupational Performance Measure and visual analogue pain scales", use: "Patient-rated performance and pain in the conservative-care trial [r12]" }
    ],
    imaging: [
      { modality: "Nerve conduction studies and electromyography", indication: "Confirm and localise the lesion, document severity and rule out other causes, especially before surgery (clinical convention)", findings: "Limited sensitivity: in a retrospective series of 89 patients (115 nerves) with clinical cubital tunnel syndrome, 91.3% of patients had positive electrodiagnostic studies and 8% of nerves were negative [r11]. In a randomised trial, 76% of patients with typical symptoms had normal neurophysiology, and routine testing was judged unnecessary for mild or moderate cases [r12]." },
      { modality: "Ultrasound", indication: "Dynamic and morphological assessment, and an option when electrodiagnosis is negative", findings: "Nerve cross-sectional area was highly correlated with electrodiagnostic severity, and 94.8% of clinically diagnosed patients had positive ultrasound in one retrospective study that used clinical diagnosis as the reference [r11]. Operator dependence and the retrospective design limit the evidence." },
      { modality: "Plain radiographs", indication: "Previous elbow trauma, deformity, restricted motion or suspected bony cause (clinical convention)", findings: "Show deformity, osteophytes or old fracture that can cause secondary compression [r4]." },
      { modality: "MRI", indication: "Atypical cases, suspected mass, or unclear anatomy", findings: "MRI and ultrasound can show morphological changes in the nerve in the tunnel [r4]; no accuracy figure was identified in the sources reviewed." }
    ]
  },

  differentials: [
    { name: "C8 or T1 radiculopathy", id: "cervical-radiculopathy", distinguishing: "Neck or scapular pain, a dermatomal rather than ulnar-nerve pattern, weakness of thumb and finger muscles beyond the ulnar nerve, and no tenderness at the groove; C8 radiculopathy is a key differential [r4]." },
    { name: "Thoracic outlet syndrome (lower trunk)", id: "thoracic-outlet-syndrome", distinguishing: "Symptoms on the medial forearm and hand that depend on arm elevation, with possible median-innervated thenar weakness and neck or supraclavicular findings." },
    { name: "Ulnar tunnel (Guyon's canal) syndrome", id: "ulnar-tunnel-syndrome", distinguishing: "Sensory loss spares the dorsoulnar hand and the FCU and ring and little finger profundus, and symptoms relate to the wrist and hand pressure (standard anatomy)." },
    { name: "Medial elbow tendinopathy", id: "medial-elbow-tendinopathy", distinguishing: "Pain over the common flexor origin with resisted wrist flexion and pronation, without ulnar-nerve sensory symptoms." },
    { name: "Ulnar collateral ligament injury of the elbow", id: "elbow-ucl-injury", distinguishing: "Medial elbow pain with valgus loading in throwers, with a positive valgus stress or moving valgus test and no ulnar-distribution paraesthesia unless the nerve is also involved." },
    { name: "Carpal tunnel syndrome (coexisting or alternative)", id: "carpal-tunnel-syndrome", distinguishing: "Median distribution (thumb, index and middle fingers), night waking, and a positive Phalen or carpal compression test; it can coexist." },
    { name: "Pancoast tumour or pressure palsy", distinguishing: "Pancoast tumour of the lung apex gives progressive shoulder or arm pain, Horner's syndrome or weight loss; pressure palsy follows sustained external pressure (for example during anaesthesia) [r4]." }
  ],
  redFlags: [
    "Progressive weakness, wasting of the first dorsal interosseous or hypothenar eminence, clawing or fixed numbness: refer for surgical review within days to weeks, because surgery is recommended once there is motor weakness, muscle atrophy or fixed sensory change [r4].",
    "Weakness or numbness appearing soon after an elbow fracture, dislocation, cast or operation: contact the treating surgeon urgently, because the nerve may be contused, stretched or compressed by haematoma or hardware (clinical reasoning).",
    "Progressive shoulder or arm pain with a Horner's syndrome, hand muscle wasting, weight loss or a smoking history: suspect a Pancoast tumour and arrange urgent medical review [r4].",
    "Upper motor neuron signs, bilateral hand symptoms, gait change or neck pain with arm weakness: suspect cervical myelopathy or a central cause and arrange urgent medical review (clinical convention).",
    "Constant severe pain, a cold, pale or swollen forearm or hand, or tense swelling around the elbow: suspect vascular compromise or compartment problems and send to emergency the same day (clinical convention).",
    "After surgery: spreading redness, discharge, fever, a tense haematoma or a new or worsening deficit: contact the surgeon the same day; haematoma was more frequent after endoscopic decompression in a meta-analysis [r17]."
  ],

  management: {
    principles: "Decide on treatment by severity and course, with the patient. For mild and moderate cases start with education about the provoking positions and pressure, which was the one conservative measure that improved subjective discomfort in a small trial (low-quality evidence) [r19]. In a randomised trial of mild and moderate patients, 89.5% of those followed were improved at 6 months, and a night splint or nerve gliding added nothing to information alone [r12]. A pooled analysis of mostly uncontrolled studies reported improvement in 89% of splinted cases and 54% of injected cases, but that analysis cannot show that either treatment beats time and advice [r20]. Surgery is recommended when conservative care fails or when there is motor weakness, atrophy or fixed sensory change [r4]. There is little randomised evidence on when to operate rather than treat conservatively, because only two trials had conservative treatment as the comparator [r19]. Among operations, a Cochrane review found moderate-certainty evidence of little to no difference in function between simple decompression and transposition, and between endoscopic and open decompression [r5]. Pooled non-randomised comparisons point in different directions [r6, r7], so the choice of operation depends on the surgeon, the nerve's stability and the elbow anatomy.",
    medical: [
      { name: "Simple (in situ) decompression, open or endoscopic", description: "Release of the tunnel roof along the nerve; a review based on the German guideline calls it the treatment of choice in primary cubital tunnel syndrome, to be extended at least 5–6 cm distal to the medial epicondyle and done under local anaesthesia by an open or endoscopic technique [r4]. In the Cochrane update there was probably little to no difference in clinical improvement against subcutaneous transposition (RR 0.92, 95% CI 0.74–1.14) or submuscular transposition (RR 0.95, 95% CI 0.77–1.17), and the finding held when nerve impairment was severe [r5]. A randomised trial of 70 severe cases found good or excellent results in about 80% (decompression) and 83% (submuscular transposition), with no significant difference [r13]. A network meta-analysis of 30 mostly observational studies found 87% improved overall, and ranked in situ decompression as least risky: complications 3%, reoperation 2%, recurrence 3% [r7].", evidence: "moderate", recommendation: "recommended", refs: ["r4", "r5", "r13", "r7"] },
      { name: "Anterior transposition (subcutaneous or submuscular)", description: "Moves the nerve in front of the epicondyle. It did not give a better clinical result than simple decompression in the Cochrane review (RR 0.92 and 0.95), and wound infections were not clearly different (RR 0.29 and 0.35, wide confidence intervals) [r5]. A pooled analysis of 10 comparative studies found no significant difference, with a trend towards transposition (OR of improvement with simple decompression 0.751, 95% CI 0.542–1.040) [r6], whereas the network meta-analysis found in situ decompression more effective than any transposition and submuscular transposition with five times the reoperation risk (RR 5.08, 95% CI 2.06–12.52) [r7]. A guideline-based review reserves subcutaneous transposition for a painful subluxating nerve or severe bony change such as cubitus valgus, and submuscular transposition for scarring, because it provides a healthy bed and soft-tissue cover; risks include compromised blood flow and kinking [r4]. Mitchell's cadaver study found transposition reduced strain in full flexion [r10].", evidence: "moderate", recommendation: "consider", refs: ["r5", "r6", "r7", "r4", "r10"] },
      { name: "Medial epicondylectomy (with in situ decompression)", description: "Removes the epicondyle so the nerve cannot ride over it. One trial of 47 participants found no difference from anterior transposition [r19]. In the network meta-analysis, open in situ decompression with epicondylectomy had a higher success rate than subcutaneous transposition (RR 1.13, 95% CI 1.01–1.25) and was ranked safest for recurrence, with uncertainty in the estimates [r7]. Cadaver studies disagree: epicondylectomy removed strain in one [r9] but gave no significant change in another [r10]. A guideline-based review notes the procedure is uncommon in Germany [r4].", evidence: "limited", recommendation: "consider", refs: ["r19", "r7", "r9", "r10", "r4"] },
      { name: "Endoscopic versus open decompression", description: "Two trials (99 participants) found no difference in the Bishop score (RR 0.98, 95% CI 0.84–1.14) [r5]. A meta-analysis of 11 studies (686 patients) found endoscopic decompression took about 9 minutes longer (MD 9.32), had more postoperative haematoma (RR 4.44) and surgical-site pain (RR 1.50), but less elbow numbness (RR 0.06) and better grip and pinch strength (MD 6.29), with no difference in Bishop or DASH scores, infection, nerve subluxation or reoperation [r17].", evidence: "moderate", recommendation: "consider", refs: ["r5", "r17"] },
      { name: "Corticosteroid injection around the nerve", description: "One trial (55 participants) found no difference from placebo in symptoms at three months [r19]; the 2025 update graded the evidence as very low certainty. Pooled uncontrolled data reported improvement in 54% of injected cases [r20]. Rinkel's review found no evidence on the effect of an injection added to splinting [r14]. A small dextrose perineural injection trial reported less pain at 4 and 12 months than placebo, and another found no clinically relevant difference between dextrose and corticosteroid [r5].", evidence: "very-limited", recommendation: "not-recommended", refs: ["r19", "r5", "r20", "r14"] }
    ],
    physio: [
      { name: "Education about provoking positions and pressure", description: "Explain the condition; avoid sustained elbow flexion (phone use, steering and sleeping with the elbows tightly bent), leaning on the inner elbow and prolonged pressure. In the single small trial (51 participants), information on avoiding prolonged movements or positions improved subjective discomfort (low-quality evidence) [r19]. In a second trial, all patients received this information and 89.5% of those followed were improved at 6 months, with no extra benefit from a splint or gliding exercises [r12].", evidence: "limited", recommendation: "recommended", refs: ["r19", "r12"] },
      { name: "Night elbow extension splint", description: "Holds the elbow in extension or a moderate degree of flexion at night so the nerve is not stretched while asleep. In a randomised trial, night splinting added no benefit to information alone [r12]. Pooled mostly uncontrolled studies reported improvement in 89% of splinted cases (95% CI 69–99%), and the authors preferred splinting over injections, although that finding cannot show that splints beat advice alone [r20]. A guideline-based review says night splints may be considered in the early stages [r4].", evidence: "conflicting", recommendation: "consider", refs: ["r12", "r20", "r4"] },
      { name: "Ulnar nerve gliding (sliding technique)", description: "Gentle, symptom-free sliding of the nerve (not stretching into tingling). A trial of night splinting versus nerve gliding versus information alone found no difference between the groups [r12]; the Cochrane review judged that gliding added nothing to information [r19]. It is an optional adjunct, not a proven treatment.", evidence: "limited", recommendation: "consider", refs: ["r12", "r19"] },
      { name: "Early postoperative therapy (rather than immobilisation)", description: "A systematic review found limited evidence for early postoperative therapy over immobilisation [r14]. The programme depends on the technique and the surgeon; after transposition, the surgeon may restrict flexion for a period (clinical convention).", evidence: "limited", recommendation: "consider", refs: ["r14"] },
      { name: "Postoperative electrical stimulation in severe disease", description: "A small randomised trial in clinically severe disease found that postsurgical electrical stimulation improved intrinsic muscle reinnervation and strength at 12 months [r5]. It is a single small trial and not widely available.", evidence: "very-limited", recommendation: "consider", refs: ["r5"] },
      { name: "Graded hand, grip and dexterity retraining; task and workplace review", description: "Restore dexterity, pinch and grip after symptoms settle or after surgery, and adjust the workstation and habits to avoid sustained flexion and elbow pressure. No trials of strengthening or workplace programmes were identified in the sources reviewed (clinical convention).", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Sustained elbow flexion during an active episode (slings or flexed positioning)", description: "Prolonged flexion narrows the cubital tunnel and raises pressure inside the nerve in cadavers [r3], so a flexed position (for example a sling with the elbow bent, or sleeping with the arm bent) is best avoided while symptoms are active. This is reasoned from the cadaver data, not trialled.", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r3"] }
    ],
    education: [
      "The nerve that runs behind the inner elbow is being squeezed and stretched, mainly when the elbow is bent for long periods or when you lean on it.",
      "Most mild and moderate cases improve over months once you change the positions that provoke it: in one trial, about 9 in 10 people followed were improved at 6 months, whatever the type of conservative advice [r12].",
      "Avoid keeping the elbow tightly bent on a phone, steering wheel or pillow, and avoid leaning on the inner elbow.",
      "A splint at night is a reasonable option but trials have not shown that it works better than advice alone.",
      "A normal nerve test does not rule out the condition. The diagnosis is mainly based on your symptoms and examination [r11, r12].",
      "Tell us about weakness, wasting between thumb and finger, or constant numbness, because surgery is recommended once there is weakness or fixed numbness [r4]."
    ]
  },

  rehab: {
    overview: "Rehabilitation here is symptom- and criteria-led. In mild and moderate cases it is mainly education, position and pressure management, then hand and arm conditioning once night symptoms have settled; trials did not show added benefit from a night splint or gliding exercises, so these are optional [r12]. After surgery, follow the surgeon's protocol, which varies with the operation and especially with whether the nerve was transposed. Limited evidence favours early postoperative therapy over immobilisation [r14]. Dosages are typical clinical ranges, not trial prescriptions. As a working rule (clinical convention), tingling during exercise should stay mild and settle within minutes, with no worsening of night symptoms the next day.",
    stages: [
      {
        name: "Settle & protect",
        timeframe: "Weeks 0–6 (or per the surgeon's protocol)",
        goals: ["Reduce night and flexion-provoked symptoms", "Identify and change the provoking positions and pressure points", "Keep the hand, shoulder and neck moving and conditioned", "Explain the condition and the warning signs"],
        precautions: ["Avoid sustained elbow flexion beyond about 90° where possible, because pressure inside the nerve rose at 90° of flexion and beyond in cadavers [r3]", "Avoid leaning on the medial elbow and pressure on the groove", "After surgery, follow the surgeon's limits on flexion and any splint; do not stretch the nerve into tingling", "Stop and review for progressive weakness, wasting or constant numbness [r4]"],
        exercises: [
          { name: "Position and task review (hands-free phone, pad the elbow, avoid leaning, adjust desk and armrest height)", dosage: "Review at the first visit and every follow-up; act on it throughout the day", cues: "Keep the elbow more open than a right angle for long tasks; swap arms or use hands-free", figure: { pose: "sit-desk", view: "lateral", props: ["desk", "keyboard"] } },
          { name: "Night elbow extension splint or towel wrap (optional)", dosage: "Nightly for about 6–12 weeks (clinical convention); evidence for added benefit is conflicting [r12, r20]", cues: "Elbow near straight or only slightly bent, so the nerve is not stretched in sleep" },
          { name: "Ulnar nerve gliding (optional)", dosage: "2 × 10 slow repetitions, 1–2 times a day, without provoking tingling (clinical convention; no added benefit in one trial [r12])", cues: "Slide, do not stretch; stop at mild tension" },
          { name: "Gentle grip and finger movement", dosage: "3 × 10 gentle squeezes with 5 s holds, daily", cues: "Pain-free and tingling-free grip; keep the elbow supported", figure: { pose: "ex-grip", view: "lateral" } },
          { name: "Shoulder and scapular mobility (wall slide)", dosage: "2 × 10, daily", cues: "Smooth range; keep the neck and shoulder free of tension", figure: { pose: "ex-wall-slide", view: "lateral" } }
        ],
        progressionCriteria: ["Night waking from tingling reduced (clinical convention, for example no more than once a week)", "Provoking positions identified and managed, with symptoms no longer escalating", "No progressive weakness, wasting or fixed numbness", "After surgery: wound healed and surgeon clearance to start active movement"]
      },
      {
        name: "Restore hand function",
        timeframe: "Weeks 4–12",
        goals: ["Restore dexterity and intrinsic muscle control", "Restore pinch and grip strength towards the other side", "Return to normal daily use of the arm"],
        precautions: ["Keep gripping tasks below the point at which tingling builds", "Avoid prolonged elbow flexion during exercise", "After transposition, avoid end-range flexion until the surgeon allows it"],
        exercises: [
          { name: "Putty pinch (key, tip and three-jaw)", dosage: "3 × 10 holds of 5 s, daily, with light resistance", cues: "Pinch against the thumb without rolling the thumb IP joint", figure: { pose: "ex-grip", view: "lateral" } },
          { name: "Finger abduction against a band and first dorsal interosseous isometrics", dosage: "3 × 10 holds of 5 s, daily", cues: "Spread the fingers; keep the wrist neutral" },
          { name: "Dexterity tasks (coin sorting, buttons, small-object pick-up)", dosage: "5–10 min, daily, building complexity", cues: "Slow and accurate before fast" },
          { name: "Wrist flexion with a light dumbbell (forearm supported)", dosage: "3 × 12, 3 s up and down, 3 times a week", cues: "Elbow supported; stop before tingling", figure: { pose: "ex-wrist-flexion", view: "lateral", props: ["dumbbell"] } },
          { name: "Wrist extension with a light dumbbell (forearm supported)", dosage: "3 × 12, 3 s up and down, 3 times a week", cues: "Keep the elbow open and supported", figure: { pose: "ex-wrist-extension", view: "lateral", props: ["dumbbell"] } }
        ],
        progressionCriteria: ["Grip and pinch strength about 70–80% of the other side, or clearly improving (clinical convention)", "Sensory symptoms intermittent and not provoked by ordinary hand use", "No new weakness or wasting", "No increase in night symptoms after exercise sessions"]
      },
      {
        name: "Build strength & tolerance",
        timeframe: "Weeks 8–20",
        goals: ["Build forearm, grip and elbow strength in tolerable positions", "Raise tolerance to carrying and weight-bearing through the hand", "Rebuild confidence in work and gym tasks"],
        precautions: ["Increase load only when the previous session settles within 24 hours", "Avoid loaded exercises held in deep elbow flexion and avoid resting on the medial elbow", "After surgery, confirm with the surgeon before loading the elbow in flexion"],
        exercises: [
          { name: "Band row", dosage: "3 × 10–12, 3 s lowering, 3 times a week", cues: "Squeeze the shoulder blades; do not hold the elbow tightly flexed", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } },
          { name: "Farmer carry", dosage: "3 × 30–40 m, 2–3 times a week", cues: "Tall posture, even grip, neutral wrist", figure: { pose: "ex-farmer-carry", view: "lateral", props: ["kettlebell"] } },
          { name: "Push-up (incline first)", dosage: "3 × 8–12, 2–3 times a week", cues: "Keep the elbows in a comfortable range and avoid sustained flexion; stop if tingling builds", figure: { pose: "ex-press-up", view: "lateral", props: ["mat"] } },
          { name: "Forearm rotation with a hammer or bar", dosage: "3 × 12, slow, 3 times a week", cues: "Short lever first, then lengthen", figure: { pose: "grip-tool", view: "lateral", props: ["hammer"] } },
          { name: "Shoulder flexion raise", dosage: "3 × 10–12, 3 times a week", cues: "Control the lowering; keep the neck relaxed", figure: { pose: "ex-shoulder-flexion", view: "lateral" } }
        ],
        progressionCriteria: ["Grip and pinch strength about 80–90% of the other side (clinical convention)", "No next-day flare in symptoms after the heaviest session", "Full elbow range without tingling", "Daily and work tasks tolerated without provocation"]
      },
      {
        name: "Return to work and sport",
        timeframe: "Weeks 12–26+ (criteria-based)",
        goals: ["Return to full work, gym and sport in graded steps", "Maintain strength and position habits", "Keep the nerve from being provoked again"],
        precautions: ["Increase hours or load in small steps and keep a log of night and next-day symptoms", "Keep workstation and sleeping habits that avoid prolonged flexion", "Do not return to full duties while weakness is still progressing"],
        exercises: [
          { name: "Graded work simulation (keyboard, tools, steering, carrying)", dosage: "Start at a fraction of usual volume and build in steps of 10–20% a week (clinical convention)", cues: "Take micro-breaks and keep the elbow open where possible", figure: { pose: "typing", view: "lateral", props: ["desk", "keyboard"] } },
          { name: "Gym loading with controlled elbow range (rows, presses, carries)", dosage: "3 × 6–10, 2–3 times a week", cues: "Avoid sustained deep flexion and leaning on the inner elbow" },
          { name: "Throwing or racquet progression, if the sport requires it", dosage: "10–15 min, 2–3 times a week, building from half-pace to full-pace (clinical convention)", cues: "Quality first; stop if tingling builds; agree the plan with the surgeon after surgery" },
          { name: "Heavy strength maintenance (row, carry, press)", dosage: "2 times a week, 3 × 6–10, all year", cues: "Keep a steady tempo", figure: { pose: "ex-farmer-carry", view: "lateral", props: ["kettlebell"] } }
        ],
        progressionCriteria: ["Completes full work or training for at least 2 weeks without a flare in night or provoked symptoms", "Grip and pinch strength about 90% or more of the other side (clinical convention)", "No progressive weakness, with intact two-point and light-touch sensation as far as it is going to recover", "Surgeon clearance after any operation"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated return-to-sport criteria for cubital tunnel syndrome were identified in the sources reviewed; the criteria below are clinical convention",
      "Night symptoms and provoked tingling have settled, and sleeping and working positions are managed",
      "Grip and pinch strength about 90% or more of the other side (clinical convention)",
      "No progressive weakness or wasting, and sensation has recovered as far as is expected",
      "Tolerates at least 2 weeks of full work or training without a flare",
      "After surgery: the surgeon has cleared loading, and flexion restrictions after any transposition have ended"
    ],
    tests: ["Grip and key-pinch dynamometry compared with the other side [r17]", "First dorsal interosseous and little finger abduction strength", "Tinel's sign and elbow flexion test (symptom provocation; positive tests do not mean return is unsafe) [r15]", "QuickDASH or DASH [r17]", "Task-specific trial (work or sport) with a night and next-day symptom log"]
  },
  prognosis: "In a randomised trial of mild and moderate patients, 89.5% of the 57 followed for six months were improved, and the groups (information alone, a night splint or nerve gliding) did not differ; 76% of those with typical symptoms had normal neurophysiology, and 75% of those with abnormal studies improved [r12]. After surgery, a network meta-analysis of mostly observational studies found 87% of patients improved, with complications in 3%, reoperation in 2% and recurrence in 3% [r7]. In a randomised trial of severe cases, about four in five had a good or excellent result 6 months after either simple decompression or submuscular transposition, and no severe complications or recurrences occurred over a mean follow-up of about four years [r13]. A review summarising Dellon's re-analysis of 50 articles reported that results were best in mild neuropathy [r2]. Recovery of intrinsic muscle strength depends on how much axon loss occurred, and persistent weakness is more likely in long-standing disease (clinical observation).",
  prevention: [
    "Avoid sustained elbow flexion where possible (phone calls, steering, sleeping with the elbows bent) and use hands-free options, because flexion narrows the tunnel and raises pressure inside the nerve in cadavers [r3]. The effect of such advice on recurrence was not tested in the sources reviewed.",
    "Avoid leaning on the inner elbow on desks, armrests and car doors, and pad hard surfaces (clinical observation).",
    "Take breaks from repeated or sustained flexed tasks and vary your posture (clinical observation).",
    "Keep upper-limb strength and conditioning, and manage neck and shoulder problems that can add to ulnar symptoms (expert opinion).",
    "No trial-proven prevention programme was identified in the sources reviewed."
  ],
  clinicalPearls: [
    "A negative provocative test does not exclude it. Elbow flexion alone had a sensitivity of 0.32 at 30 seconds in one study, and the combination of flexion with pressure over the nerve was most sensitive (0.91) in a small cohort [r15].",
    "A normal nerve conduction study does not exclude cubital tunnel syndrome: 76% of people with typical symptoms had normal neurophysiology in one trial, and about 8% of clinically diagnosed nerves had a negative study in a retrospective series [r12, r11]. Treat the patient, not the report.",
    "Lead with education about positions and pressure. Night splinting and nerve gliding added nothing to information alone in a randomised trial [r12], and the pooled uncontrolled splinting data cannot show that a splint beats advice [r20].",
    "Do not assume one operation is better. The Cochrane review found little to no difference between simple decompression and transposition, including in severe disease, although pooled observational data point in different directions [r5, r6, r7].",
    "Act on motor signs. Weakness, wasting or fixed sensory loss are the reasons given to recommend surgery, so test first dorsal interosseous and pinch at every visit [r4].",
    "Dorsoulnar hand numbness locates the problem above the wrist (the dorsal ulnar cutaneous branch leaves before Guyon's canal; standard anatomy), but always screen the neck, thoracic outlet and carpal tunnel because other lesions coexist [r4]."
  ],
  related: ["medial-elbow-tendinopathy", "elbow-ucl-injury", "ulnar-tunnel-syndrome", "carpal-tunnel-syndrome", "cervical-radiculopathy", "thoracic-outlet-syndrome"],

  references: [
    { id: "r1", citation: "Anderson D, Woods B, Abubakar T, et al. A comprehensive review of cubital tunnel syndrome. Orthop Rev (Pavia). 2022;14(3):38239.", pmid: "36128335", doi: "10.52965/001c.38239", type: "narrative-review", year: 2022 },
    { id: "r2", citation: "Posner MA. Compressive neuropathies of the ulnar nerve at the elbow and wrist. Instr Course Lect. 2000;49:305-17.", pmid: "10829185", type: "narrative-review", year: 2000 },
    { id: "r3", citation: "Gelberman RH, Yamaguchi K, Hollstien SB, et al. Changes in interstitial pressure and cross-sectional area of the cubital tunnel and of the ulnar nerve with flexion of the elbow. An experimental study in human cadavera. J Bone Joint Surg Am. 1998;80(4):492-501.", pmid: "9563378", doi: "10.2106/00004623-199804000-00005", type: "biomechanical", year: 1998 },
    { id: "r4", citation: "Assmus H, Antoniadis G, Bischoff C, et al. Cubital tunnel syndrome - a review and management guidelines. Cent Eur Neurosurg. 2011;72(2):90-8.", pmid: "21547883", doi: "10.1055/s-0031-1271800", type: "narrative-review", year: 2011 },
    { id: "r5", citation: "Caliandro P, La Torre G, Padua R, et al. Treatment for ulnar neuropathy at the elbow. Cochrane Database Syst Rev. 2025;4(4):CD006839.", pmid: "40298125", doi: "10.1002/14651858.CD006839.pub5", type: "systematic-review", year: 2025 },
    { id: "r6", citation: "Macadam SA, Gandhi R, Bezuhly M, et al. Simple decompression versus anterior subcutaneous and submuscular transposition of the ulnar nerve for cubital tunnel syndrome: a meta-analysis. J Hand Surg Am. 2008;33(8):1314.e1-12.", pmid: "18929194", doi: "10.1016/j.jhsa.2008.03.006", type: "meta-analysis", year: 2008 },
    { id: "r7", citation: "Wade RG, Griffiths TT, Flather R, et al. Safety and outcomes of different surgical techniques for cubital tunnel decompression: a systematic review and network meta-analysis. JAMA Netw Open. 2020;3(11):e2024352.", pmid: "33231636", doi: "10.1001/jamanetworkopen.2020.24352", type: "meta-analysis", year: 2020 },
    { id: "r8", citation: "Macchi V, Tiengo C, Porzionato A, et al. The cubital tunnel: a radiologic and histotopographic study. J Anat. 2014;225(2):262-9.", pmid: "24917209", doi: "10.1111/joa.12206", type: "basic-science", year: 2014 },
    { id: "r9", citation: "Hicks D, Toby EB. Ulnar nerve strains at the elbow: the effect of in situ decompression and medial epicondylectomy. J Hand Surg Am. 2002;27(6):1026-31.", pmid: "12457353", doi: "10.1053/jhsu.2002.35870", type: "biomechanical", year: 2002 },
    { id: "r10", citation: "Mitchell J, Dunn JC, Kusnezov N, et al. The effect of operative technique on ulnar nerve strain following surgery for cubital tunnel syndrome. Hand (N Y). 2015;10(4):707-11.", pmid: "26568727", doi: "10.1007/s11552-015-9770-y", type: "biomechanical", year: 2015 },
    { id: "r11", citation: "Carroll TJ, Chirokikh A, Thon J, et al. Diagnosis of ulnar neuropathy at the elbow using ultrasound - a comparison to electrophysiologic studies. J Hand Surg Am. 2023;48(12):1229-35.", pmid: "37877916", doi: "10.1016/j.jhsa.2023.08.014", type: "diagnostic-accuracy", year: 2023 },
    { id: "r12", citation: "Svernlöv B, Larsson M, Rehn K, et al. Conservative treatment of the cubital tunnel syndrome. J Hand Surg Eur Vol. 2009;34(2):201-7.", pmid: "19282413", doi: "10.1177/1753193408098480", type: "rct", year: 2009 },
    { id: "r13", citation: "Gervasio O, Gambardella G, Zaccone C, et al. Simple decompression versus anterior submuscular transposition of the ulnar nerve in severe cubital tunnel syndrome: a prospective randomized study. Neurosurgery. 2005;56(1):108-17; discussion 117.", pmid: "15617592", doi: "10.1227/01.neu.0000145854.38234.81", type: "rct", year: 2005 },
    { id: "r14", citation: "Rinkel WD, Schreuders TAR, Koes BW, et al. Current evidence for effectiveness of interventions for cubital tunnel syndrome, radial tunnel syndrome, instability, or bursitis of the elbow: a systematic review. Clin J Pain. 2013;29(12):1087-96.", pmid: "23985778", doi: "10.1097/AJP.0b013e31828b8e7d", type: "systematic-review", year: 2013 },
    { id: "r15", citation: "Novak CB, Lee GW, Mackinnon SE, et al. Provocative testing for cubital tunnel syndrome. J Hand Surg Am. 1994;19(5):817-20.", pmid: "7806810", doi: "10.1016/0363-5023(94)90193-7", type: "diagnostic-accuracy", year: 1994 },
    { id: "r16", citation: "Cheng CJ, Mackinnon-Patterson B, Beck JL, et al. Scratch collapse test for evaluation of carpal and cubital tunnel syndrome. J Hand Surg Am. 2008;33(9):1518-24.", pmid: "18984333", doi: "10.1016/j.jhsa.2008.05.022", type: "diagnostic-accuracy", year: 2008 },
    { id: "r17", citation: "Alghamdi AM, Alkulli OA, Faidah DE, et al. Endoscopic versus open in situ decompression of cubital tunnel syndrome: a systematic review and meta-analysis of 686 cases. Ann Plast Surg. 2025;94(5):561-76.", pmid: "39903603", doi: "10.1097/SAP.0000000000004248", type: "meta-analysis", year: 2025 },
    { id: "r18", citation: "Cuneo KR, Collins DW, Sullivan CM, et al. Identifying diagnostic criteria for cubital tunnel syndrome. Plast Reconstr Surg. 2025;156(4):583-9.", pmid: "40327807", doi: "10.1097/PRS.0000000000012169", type: "other", year: 2025 },
    { id: "r19", citation: "Caliandro P, La Torre G, Padua R, et al. Treatment for ulnar neuropathy at the elbow. Cochrane Database Syst Rev. 2016;11(11):CD006839.", pmid: "27845501", doi: "10.1002/14651858.CD006839.pub4", type: "systematic-review", year: 2016 },
    { id: "r20", citation: "Natroshvili T, van de Warenburg MS, Heine EP, et al. Conservative treatment of ulnar nerve compression at the elbow: a systematic review and meta-analysis. Arch Plast Surg. 2023;50(1):70-81.", pmid: "36755648", doi: "10.1055/s-0042-1757571", type: "meta-analysis", year: 2023 }
  ],

  animation: {
    title: "How cubital tunnel syndrome develops",
    phases: [
      {
        type: "moi", label: "Flexed and leaning", duration: 7, view: "lateral", environment: "office",
        actors: [{ id: "worker", kit: "worker" }],
        keyframes: [
          { t: 0, pose: "sit-desk", root: { x: 0 } },
          { t: 1.2, pose: "sit-desk", joints: { trunk: 30, shoulderR: 20, elbowR: 95 } },
          { t: 2.6, pose: "sit-desk", joints: { trunk: 35, shoulderR: 20, elbowR: 95 } },
          { t: 3.6, pose: "sit-desk", joints: { trunk: 15, shoulderR: 15, elbowR: 135, wristR: 10 }, ease: "inOut" },
          { t: 5.0, pose: "sit-desk", joints: { trunk: 12, shoulderR: 15, elbowR: 145, wristR: 10 } },
          { t: 6.5, pose: "sit-desk", joints: { trunk: 12, shoulderR: 15, elbowR: 145, wristR: 10 } }
        ],
        props: [{ id: "dk", type: "desk" }],
        forces: [
          { t: [1.4, 3.0], at: "elbowR", dir: "down", label: "Pressure on the inner elbow" },
          { t: [4.0, 6.4], at: "elbowR", dir: "backward", label: "Flexion stretches the nerve" }
        ],
        highlights: [{ t: [1.6, 7], at: "elbowR" }],
        captions: [
          { t: 0, text: "An office worker spends hours at a desk, resting on the inner side of the elbow." },
          { t: 1.2, text: "Leaning presses on the ulnar nerve where it passes behind the medial epicondyle." },
          { t: 3.6, text: "Later the elbow is held tightly bent, on a long phone call, in a car or in sleep." },
          { t: 4.6, text: "Flexion narrows the cubital tunnel and stretches the nerve around the epicondyle." },
          { t: 5.8, text: "Tingling in the ring and little fingers appears and eases when the arm is straightened." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "elbowR",
        captions: [{ t: 0, text: "Zooming into the right elbow from the inner side." }]
      },
      {
        type: "closeup", label: "Inside the elbow", duration: 10, scene: "elbow-medial",
        actions: [
          { t: 0, do: "highlight", target: "ulnarNerve" },
          { t: 0.3, do: "label", target: "ulnarNerve", text: "Ulnar nerve behind the medial epicondyle" },
          { t: 1.2, do: "stretch", target: "osborneLigament", amount: 0.3, dur: 1.0 },
          { t: 1.3, do: "label", target: "osborneLigament", text: "Cubital tunnel retinaculum (Osborne)" },
          { t: 1.6, do: "stretch", target: "ulnarNerve", amount: 0.3, dur: 1.2 },
          { t: 2.4, do: "compress", target: "ulnarNerve", at: "cubitalTunnel", dur: 1.2 },
          { t: 3.6, do: "irritate", target: "ulnarNerve" },
          { t: 4.0, do: "pain", at: "cubitalTunnel", hold: 3 },
          { t: 4.6, do: "reset", target: "ulnarNerve" },
          { t: 4.6, do: "reset", target: "osborneLigament" },
          { t: 5.6, do: "thicken", target: "osborneLigament", amount: 0.5, dur: 1.2 },
          { t: 6.2, do: "entrap", target: "ulnarNerve", at: "cubitalTunnel", dur: 1.2 },
          { t: 7.4, do: "camera", at: "cubitalTunnel", zoom: 1.7, dur: 1.0 },
          { t: 9.2, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "The ulnar nerve runs behind the medial epicondyle, under a roof of retinaculum and fascia." },
          { t: 1.2, text: "As the elbow bends, the roof tightens and the nerve is dragged around the epicondyle." },
          { t: 2.4, text: "The tunnel narrows and pressure inside the nerve rises, so it is squeezed as well as stretched." },
          { t: 3.6, text: "Early on, this causes tingling in the ring and little fingers that eases when the elbow straightens." },
          { t: 4.6, text: "With the elbow open and rested, the nerve recovers." },
          { t: 5.6, text: "With repeated provocation, the roof can thicken and the nerve glides less." },
          { t: 7.4, text: "A persistent pinch point can lead to weakness and wasting of the small hand muscles." }
        ]
      },
      {
        type: "micro", label: "Nerve response", duration: 10, tissue: "nerve",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.3, stage: "compression" }, { t: 2.8, stage: "ischaemia" }, { t: 4.3, stage: "demyelination" },
          { t: 5.8, stage: "axonal-injury" }, { t: 7.5, stage: "regeneration" }
        ],
        captions: [
          { t: 0, text: "Healthy nerve: myelinated axons carry signals, fed by tiny blood vessels." },
          { t: 1.3, text: "Sustained flexion or leaning compresses and stretches the nerve." },
          { t: 2.8, text: "Blood flow in the squeezed segment falls and conduction is blocked: tingling and numbness." },
          { t: 4.3, text: "If compression persists, myelin is lost and conduction slows, but the axons are still intact." },
          { t: 5.8, text: "In severe, prolonged compression axons are damaged and muscles weaken and waste." },
          { t: 7.5, text: "Once the pressure is relieved, the nerve can recover, more slowly and less completely if axons were lost." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "UL4" }
};
