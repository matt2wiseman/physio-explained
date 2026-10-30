export default {
  id: "patellofemoral-pain",
  name: "Patellofemoral pain",
  shortName: "Patellofemoral pain",
  aka: ["PFP", "PFPS", "patellofemoral pain syndrome", "anterior knee pain", "runner's knee", "chondromalacia patellae", "kneecap pain"],
  region: "knee",
  tissues: ["cartilage", "fat-pad", "bone"],
  onset: "gradual",
  mechanismType: ["overuse", "insidious"],
  populations: ["adolescents", "female adolescent athletes", "recreational runners", "military recruits", "young active adults"],
  sports: ["running", "soccer", "basketball", "volleyball", "netball", "cycling", "hiking", "skiing"],
  urgency: "routine",
  summary: "Pain around or behind the kneecap, provoked by squatting, stairs or running, which arises when repeated patellofemoral load exceeds tissue capacity. Managed with education and hip-plus-knee exercise.",
  keyFacts: [
    { label: "Key test", value: "Anterior knee pain on squatting (PFP present in about 80% of people positive); there is no definitive test" },
    { label: "Typical recovery", value: "Education plus a physical treatment beats wait-and-see at 3 months, but many people still have symptoms years later" },
    { label: "Return to sport", value: "Criteria-based, with modified activity usually continued throughout rehab" },
    { label: "Imaging", value: "Not needed to diagnose; structural findings correlate imprecisely with pain" },
    { label: "Peak age", value: "Adolescents and young adults; common in female athletes, runners and military recruits" },
    { label: "Incidence", value: "Annual prevalence 22.7% in the general population and 28.9% in adolescents (systematic review)" }
  ],
  overview: "Patellofemoral pain (PFP) is pain around or behind the patella that is provoked by loading the patellofemoral joint during weight bearing on a flexed knee, for example squatting, stair climbing, jogging or hopping [r1]. It accounts for 11–17% of knee pain presentations to general practice and 25–40% of knee problems seen in sports injury clinics [r2]. 'Patellofemoral pain' is the preferred term and replaces chondromalacia patellae, anterior knee pain and runner's knee [r1]. No single clinical test is definitive, so diagnosis rests on the history, reproduction of familiar pain with loading and exclusion of other causes [r1].\n\nPFP is best understood as a load-versus-capacity problem. Pain develops when the repeated stress on the joint exceeds what its tissues can currently tolerate, and the cartilage, subchondral bone, synovium, fat pad and retinaculum may each contribute [r3]. Structural change relates imprecisely to pain [r1]. Exercise therapy delivered with education is the foundation of care [r2,r4], but PFP is not reliably self-limiting: in one long-term follow-up, more than half of the people who responded still reported an unfavourable recovery 5–8 years after diagnosis [r5].",

  epidemiology: {
    text: "A systematic review of 23 studies reported an annual prevalence of 22.7% in the general population and 28.9% in adolescents. The pooled point prevalence in adolescents was 7.2% (95% CI 6.3–8.3%), rising to 22.7% (95% CI 17.4–28.0%) in female-only adolescent athletes, and incidence in military recruits ranged from 9.7 to 571.4 per 1,000 person-years [r6]. The 2016 consensus statement reported a prevalence of 7–28% and an incidence of 9.2% in young adolescents, and an annual incidence in military populations of 3.8% in men and 6.5% in women. Specialising in a single sport carried a relative risk of 1.5 (95% CI 1.0–2.2) compared with multisport athletes [r1].\n\nA meta-analysis of prospective studies (18 studies, 4,818 participants, about 10% developing PFP) found that age, height, weight, BMI, body fat and Q angle did not predict who would develop PFP [r7]. Modifiable factors that have been studied are mostly training load and muscle capacity, but prospective evidence is sparse and inconsistent, so risk-factor findings should be treated as hypotheses rather than prescriptions.",
    riskFactors: {
      intrinsic: [
        "Quadriceps weakness (moderate evidence in military recruits, especially when normalised to BMI; modifiable) [r7]",
        "Greater peak hip adduction during running in female runners who went on to develop PFP (limited evidence) [r8]",
        "Decreased knee flexion and increased knee abduction range of motion during landing (kinematic risk factors) [r9]",
        "Female sex in military recruits (annual incidence 6.5% in women versus 3.8% in men) [r1]",
        "Hip weakness is common in people who already have PFP [r1], but prospective data do not show that it predicts onset [r7]"
      ],
      extrinsic: [
        "Abrupt increases in repetitive loading relative to conditioning (running volume, hills, stairs, jumping, deep squatting), the usual trigger in clinical practice [r3]",
        "Single-sport specialisation (relative risk 1.5 versus multisport athletes) [r1]",
        "Military recruit training, which has a high incidence of PFP [r6]",
        "Occupations or sports that demand repeated stair use, squatting or kneeling-to-stand (clinical observation)"
      ]
    }
  },

  mechanism: {
    summary: "There is no single injury event. PFP develops when repeated or suddenly increased patellofemoral joint load, usually through a flexed, weight-bearing knee (mid-stance of running, stair ascent or descent, squatting, jump landings), exceeds the capacity of the joint's tissues [r3]. As the knee bends under load, the quadriceps must produce more force to control the flexion moment, and that force and the patellar tendon pull compress the patella into the trochlear groove. Hip adduction and knee abduction (valgus) during running and landing are associated with PFP, although prospective evidence is limited and inconsistent [r8,r9].",
    sequence: [
      "A load that is new, repeated or larger than recent training is applied through a flexed, weight-bearing knee, for example mid-stance of running (the knee typically bends to about 40°), stair descent or a deep squat.",
      "As the knee flexes under body weight, the sagittal-plane knee-extensor moment rises, so the quadriceps and patellar tendon pull harder and press the patella posteriorly into the trochlea.",
      "Frontal-plane control matters: greater hip adduction and knee abduction on loading are associated with PFP [r8,r9], and are proposed to shift where load falls on the patella (traditionally thought to be the lateral facet) [r1].",
      "Cumulative stress exceeds tissue capacity and local tissue homeostasis is lost: synovium and fat pad become inflamed, and intraosseous pressure and bone metabolic activity in the patella rise [r3].",
      "Nociceptors in the retinaculum, synovium, fat pad and subchondral bone are sensitised, so a load that was previously tolerated now hurts [r3,r1].",
      "Pain appears around or behind the patella with squatting, stairs, running or prolonged sitting. The person avoids loading, so quadriceps and hip capacity fall further and the gap between load and capacity widens.",
      "If the cycle continues, signs of peripheral and central sensitisation can develop and the pain pattern may spread [r10]."
    ],
    variants: [
      { name: "Running-related PFP", description: "Repetitive stance-phase loading with a high weekly volume. Greater peak hip adduction has been observed in female runners who developed PFP (limited evidence) [r8]. Runners benefit from training-load modification as a core part of care [r11]." },
      { name: "Jump-landing and team-sport PFP", description: "Repeated landings with reduced knee flexion range and greater knee abduction range of motion are associated with later PFP [r9]." },
      { name: "Adolescent PFP", description: "Prevalence is highest in adolescence (annual prevalence 28.9%) [r6]. Recovery rates after treatment may be lower than in adults, and symptoms often persist beyond adolescence [r2]." },
      { name: "After ACL reconstruction", description: "ACL reconstruction increases the risk of patellofemoral osteoarthritis, probably through altered biomechanics and concomitant chondral damage [r1]. Anterior knee pain in this group needs a broader assessment than usual PFP." },
      { name: "Direct trauma and instability (excluded)", description: "A fall onto a flexed knee can contuse cartilage or bone, and patellar dislocation or subluxation produces a different clinical picture. The consensus definition excludes people with a history of dislocation or perceived subluxation [r1]." }
    ]
  },

  anatomy: {
    text: "The patellofemoral joint (PFJ) is formed by the patella, a sesamoid bone embedded in the quadriceps–patellar tendon complex, and the trochlear groove of the femur. The patella lengthens the quadriceps lever arm and, as the knee flexes, engages the trochlea so that the contact area moves proximally along the patella and spreads load. Both articular surfaces are covered by hyaline cartilage, which has no nerve supply, so pain arises from innervated neighbours: subchondral bone, synovium, the retinaculum and the infrapatellar fat pad [r3,r1]. The medial patellofemoral ligament (MPFL) and lateral retinaculum are passive restraints, while the vasti (including vastus medialis obliquus) and the hip abductors and external rotators control the patella and femur dynamically.",
    structures: [
      { name: "Patella and patellar cartilage", role: "Transmits quadriceps force to the patellar tendon and distributes compressive load across the trochlea. The subchondral bone is innervated and can contribute to pain when intraosseous pressure rises [r3]." },
      { name: "Femoral trochlea and trochlear cartilage", role: "The groove that guides the patella. Abnormal trochlear morphology is associated with patellofemoral osteoarthritis [r1]." },
      { name: "Quadriceps (vasti) and quadriceps/patellar tendons", role: "Extend the knee and control flexion under load. Quadriceps weakness predicted PFP in military recruits [r7]." },
      { name: "MPFL and lateral retinaculum", role: "Passive medial and lateral restraints. Nerve changes in the retinaculum have been described as a possible pain source [r3]." },
      { name: "Infrapatellar (Hoffa's) fat pad", role: "Intracapsular, extrasynovial and highly innervated; a potential cause of PFP [r1]." },
      { name: "Synovium", role: "Lines the joint. An inflamed synovial lining is one of the tissues implicated in PFP [r3]." },
      { name: "Hip abductors, external rotators and foot–ankle complex", role: "Control femoral and tibial position in stance. Hip muscle weakness is well documented in young people with PFP [r1], and limited ankle dorsiflexion and midfoot mobility have been linked to response to foot orthoses [r2]." }
    ]
  },

  pathophysiology: {
    tissueDamage: "PFP is not a tear or a fracture and no single tissue fails. The best-supported model is a mismatch between load and capacity. When repeated loading exceeds what the joint tolerates, tissue homeostasis is lost: an inflamed synovial lining and fat pad, retinacular nerve changes, raised intraosseous pressure and increased metabolic activity of patellar bone have all been documented as contributors to anterior knee pain [r3]. Once initiated, this state may persist if the loading continues. This model comes from an expert-opinion review [r3], but it fits the consensus view that the relationship between abnormal joint structure and pain is imprecise [r1].\n\nPain is not only mechanical. A meta-analysis of 15 studies found strong evidence of lower local and remote pressure pain thresholds, impaired conditioned pain modulation and facilitated temporal summation in people with PFP, with expanding pain patterns in those with long-standing symptoms [r10]. These findings point to peripheral and, in some people, central sensitisation, which helps explain why pain can persist when load is reduced and why education and graded loading, not rest alone, are the mainstay of care.",
    structures: [
      { name: "Patellar and trochlear cartilage", effect: "Compressive overload. Cartilage damage may be present, but its relationship to pain is imprecise [r1]." },
      { name: "Subchondral bone of the patella", effect: "Raised intraosseous pressure and increased osseous metabolic activity [r3]." },
      { name: "Infrapatellar fat pad", effect: "Highly innervated and a potential pain source; its role in the disease process is unclear [r1]." },
      { name: "Synovium", effect: "Inflamed lining and, in some people, a small effusion [r3,r1]." },
      { name: "Lateral retinaculum", effect: "Retinacular neuromas have been described and may contribute to pain [r3]." },
      { name: "MPFL and medial structures", effect: "Usually intact. A history of dislocation or perceived subluxation points to a different diagnosis [r1]." }
    ],
    muscles: [
      { name: "Quadriceps", effect: "Reduced strength and endurance lower tissue capacity. Quadriceps weakness predicted PFP in military recruits [r7]." },
      { name: "Hip abductors and external rotators", effect: "Weakness is well documented in young people with PFP [r1]. It did not predict onset in prospective studies [r7], yet adding hip strengthening to knee strengthening gives better pain and activity outcomes [r12]." },
      { name: "Calf and ankle dorsiflexion", effect: "Less ankle dorsiflexion has been associated with response to foot orthoses [r2]. Restricted dorsiflexion can shift load to the knee during squatting and stair descent (clinical reasoning)." }
    ],
    cellular: [
      { phase: "Loading within capacity", timing: "Each loading cycle (seconds)", description: "Cyclic compression squeezes fluid through the cartilage matrix and loads subchondral bone. Within capacity, cartilage and bone remodel and adapt." },
      { phase: "Overload and loss of tissue homeostasis", timing: "Days to weeks of repeated overload", description: "When load exceeds capacity, the synovium and fat pad become inflamed, and intraosseous pressure and patellar bone metabolic activity rise [r3]." },
      { phase: "Peripheral sensitisation", timing: "Weeks", description: "Inflammatory mediators lower the firing threshold of nociceptors in the retinaculum, synovium, fat pad and bone, so local pressure pain thresholds fall [r10]." },
      { phase: "Central sensitisation (in a subset)", timing: "Months of persistent pain", description: "Impaired conditioned pain modulation, facilitated temporal summation and lowered remote pressure pain thresholds indicate altered pain processing [r10]." },
      { phase: "Adaptation and recovery", timing: "Weeks to months of graded loading", description: "As load is matched to capacity and strength is rebuilt, tissues adapt and symptoms settle. Exercise combined with education beats wait-and-see at 3 months [r13]." }
    ],
    systems: [
      { system: "Nervous system", effect: "Signs of peripheral and central sensitisation (lower local and remote pressure pain thresholds, impaired conditioned pain modulation, facilitated temporal summation) are present in people with PFP, and pain maps expand with longer duration [r10]." },
      { system: "Immune / inflammatory", effect: "An inflamed synovial lining and fat pad are part of the proposed loss of tissue homeostasis [r3]." },
      { system: "Musculoskeletal chain", effect: "Hip adduction and knee abduction on loading, reduced knee flexion range on landing and limited ankle dorsiflexion link the hip, knee and foot to patellofemoral load [r8,r9,r2]." },
      { system: "Psychological", effect: "Kinesiophobia is moderately associated with poorer self-reported function (r = −0.44) and weakly with pain (r = 0.16) in people with PFP [r14]." },
      { system: "Long-term joint health", effect: "In a 5–8 year follow-up, 48 of 50 people who had knee radiographs (98%) showed no signs of radiographic knee osteoarthritis [r5]. Patellofemoral osteoarthritis is a related but distinct condition with a similar pain pattern in older adults [r1]." }
    ]
  },

  grading: null,

  timeframes: {
    summary: "PFP has no tissue-healing timeline like a ligament or muscle injury. Recovery follows settling of sensitised tissues and rebuilding of capacity. Education plus a physical treatment is more effective than wait-and-see at 3 months [r13], but symptoms persist for years in many people [r2,r5]. Phase and milestone days below are typical clinical ranges, not trial-derived, and criteria override time.",
    healing: [
      { phase: "Settle irritability", startDay: 0, endDay: 14, description: "Modify (not stop) provocative loading, teach load monitoring and begin pain-tolerable isometric and hip strengthening as sensitised tissues settle." },
      { phase: "Build capacity", startDay: 14, endDay: 84, description: "Progressive hip- and knee-targeted strengthening. Improvement over this period is the usual benchmark for judging response [r13]." },
      { phase: "Load re-exposure", startDay: 56, endDay: 168, description: "Graded return to running, jumping and sport-specific loading as capacity and symptoms allow." },
      { phase: "Consolidation and relapse prevention", startDay: 112, endDay: 365, description: "Maintain strength, manage training load and monitor for recurrence. A longer symptom duration at baseline predicts a poorer long-term outcome [r5]." }
    ],
    milestones: [
      { label: "Squat to 60° with pain ≤ 3/10 that settles within 24 h", day: 14, note: "Symptom-guided gate for moving beyond Stage 1" },
      { label: "Step-down and stairs with control and pain ≤ 2/10", day: 56, note: "Typical for mild to moderate presentations" },
      { label: "Start walk–run program", day: 70, note: "Only once Stage 3 criteria are met" },
      { label: "3-month review of response", day: 84, note: "If there is no meaningful improvement, re-examine the diagnosis and the program [r13]" },
      { label: "Return to full training and sport (typical)", day: 140, note: "Longer in chronic or highly irritable presentations" }
    ],
    returnToSport: "There is no fixed time. Many people keep playing at a modified load throughout rehab, and full return (return to sport, RTS) is criteria-based: pain-free or near pain-free sport-specific loading, adequate strength and confidence. A typical clinical range is 6–12 weeks for mild, recent presentations and 3–6 months or longer for chronic ones; these ranges are expert opinion and not trial-derived."
  },

  clinicalPresentation: {
    symptoms: [
      "Diffuse anterior knee pain around or behind the patella that is hard to localise with one finger [r1]",
      "Pain with squatting, stair ascent and descent, running and hopping, all of which load the flexed, weight-bearing knee [r1]",
      "Pain on sitting with the knee bent, on rising from sitting or when straightening the knee after sitting [r1]",
      "Crepitus or a grinding sensation with knee flexion movements [r1]",
      "Gradual onset, often after a change in training load, footwear, surface or occupation",
      "The person may report the knee 'giving way' with pain, but there is no true instability or locking"
    ],
    signs: [
      "Familiar pain reproduced by a squat, the best single clinical test available [r1]",
      "Tenderness on palpation of the patellar edges or facets [r1]",
      "A small effusion in some people, though effusion and range of motion are poor discriminators [r1]",
      "Pain and poor control on single-leg squat or step-down (dynamic valgus, pelvic drop, trunk lean)",
      "Reduced quadriceps and hip abductor or external rotator strength, with normal knee range of motion",
      "Negative ligament and meniscal tests and no patellar apprehension"
    ]
  },

  assessment: {
    subjective: [
      "Location and pattern of pain: diffuse peripatellar or retropatellar pain, provoked by squatting, stairs, running, hopping or rising from sitting [r1]",
      "Onset and load history: what changed in the 2–6 weeks before onset (running volume, hills, new sport, job, footwear)? A pain duration over 12 months predicts a poorer outcome [r5]",
      "Exclude instability: a history of patellar dislocation or perceived subluxation points to another diagnosis [r1]",
      "Irritability: how much load provokes pain, how severe it gets and how long it takes to settle (24-hour response)",
      "Previous treatment, what helped, current footwear and activity level, and the patient's goals and expectations",
      "Beliefs and fear: concerns that the kneecap is 'wearing out' and fear of movement. Assess kinesiophobia in practice [r14]",
      "Screen for red flags and referred pain (hip in adolescents, lumbar spine)"
    ],
    observation: [
      "Single-leg squat and step-down: knee valgus, hip adduction, pelvic drop, trunk lean and depth at which pain begins",
      "Gait and running (video where possible): foot strike, step rate, hip adduction, trunk position",
      "Quadriceps bulk, effusion and patellar position (patellar position alone is not diagnostic)",
      "Foot posture, midfoot mobility and ankle dorsiflexion if foot orthoses are being considered [r2]"
    ],
    palpation: [
      "Patellar edges and facets: PFP is evident in 71–75% of people with tenderness at these sites [r1]",
      "Fat pad either side of the patellar tendon (compare with Hoffa's fat pad impingement)",
      "Patellar tendon, especially the inferior pole (patellar tendinopathy), and the tibial tuberosity in adolescents",
      "Medial plica and retinaculum, joint line (meniscus), iliotibial band at the lateral epicondyle and the pes anserine"
    ],
    rangeOfMotion: [
      "Knee flexion and extension are usually full; range of motion and effusion have limited diagnostic usefulness [r1]",
      "Weight-bearing lunge test for ankle dorsiflexion",
      "Hip internal and external rotation (to screen the hip in adolescents and to look for femoral torsion signs)",
      "Patellar glide and tilt to look for hypermobility or apprehension"
    ],
    strength: [
      "Isometric quadriceps strength (hand-held dynamometry at 60–90° flexion) compared with the other side",
      "Hip abductor and external rotator strength (hand-held dynamometry or functional endurance tests)",
      "Single-leg calf raise endurance and quadriceps endurance (repetitions to fatigue)"
    ],
    neuro: [
      "Pain mapping and pressure pain at a remote site, for example tibialis anterior, if pain is long-standing or widespread; lowered local and remote thresholds indicate sensitisation [r10]",
      "Lumbar and femoral nerve screen (slump, femoral nerve stretch) if symptoms do not fit a mechanical pattern"
    ],
    functional: [
      "Double-leg squat and single-leg squat: pain, depth and movement quality",
      "Step-down and stair ascent/descent: pain, control and reps to onset of pain",
      "Single-leg hop or drop landing once symptoms allow",
      "Running tolerance test (time or distance to pain)"
    ],
    specialTests: [
      {
        name: "Squat (pain on squatting)",
        purpose: "Provoke familiar anterior knee pain through weight-bearing flexed-knee loading, the consensus 'best available' test",
        procedure: "The patient performs a bodyweight squat, or a single-leg squat if double-leg is not provocative, to the depth that reproduces symptoms.",
        positive: "Reproduction of the patient's familiar anterior knee pain. PFP is evident in 80% of people with a positive result [r1].",
        lrPositive: "1.8",
        lrNegative: "0.2",
        refs: ["r15", "r1"]
      },
      {
        name: "Patellar tilt test",
        purpose: "Assess lateral retinacular tightness",
        procedure: "With the knee extended and quadriceps relaxed, lift the lateral border of the patella away from the lateral femoral condyle.",
        positive: "Inability to raise the lateral border to or above the horizontal. Accuracy comes from a small number of studies and is not conclusive.",
        lrPositive: "5.4",
        lrNegative: "0.6",
        refs: ["r15"]
      },
      {
        name: "Patellar edge / facet palpation",
        purpose: "Identify peripatellar tenderness",
        procedure: "Palpate the medial and lateral patellar borders and facets with the knee extended, then slightly flexed.",
        positive: "Reproduction of familiar pain. PFP is evident in 71–75% of people with this finding; accuracy figures are limited [r1].",
        refs: ["r1"]
      },
      {
        name: "Single-leg squat / step-down with movement analysis",
        purpose: "Reproduce pain and identify contributing control deficits (hip adduction, knee valgus, trunk lean)",
        procedure: "Perform 5–10 controlled repetitions to about 60° of knee flexion, or step down from a 15–20 cm step, while observing the pelvis, knee and foot.",
        positive: "Familiar pain with poor frontal-plane control. Movement quality is a clinical guide only and has no verified diagnostic accuracy.",
        refs: []
      },
      {
        name: "Clarke's (patellar grinding) test and apprehension test",
        purpose: "Clarke's test provokes patellar pain; the apprehension test detects patellar instability. Neither diagnoses PFP",
        procedure: "Clarke's: resist a quadriceps contraction while compressing the patella. Apprehension: translate the patella laterally with the knee slightly flexed.",
        positive: "The consensus lists patellar grinding and apprehension tests as having low sensitivity and limited diagnostic accuracy for PFP [r1], so a negative result does not exclude PFP. A positive apprehension test points to patellar instability rather than PFP.",
        refs: ["r1"]
      }
    ],
    clinicalRules: [
      { name: "2016 consensus definition of PFP", description: "The core criterion is pain around or behind the patella aggravated by at least one activity that loads the patellofemoral joint during weight bearing on a flexed knee. Crepitus, patellar facet tenderness, a small effusion and pain on sitting are supportive but not essential. People with a history of dislocation or perceived subluxation are excluded from the PFP definition [r1]." },
      { name: "Ottawa knee rules", description: "Use after acute trauma to decide on radiographs to exclude fracture before attributing anterior knee pain to PFP." }
    ],
    outcomeMeasures: [
      { name: "Anterior Knee Pain Scale (AKPS / Kujala)", use: "A PFP-specific function score; lower baseline AKPS predicted poor 5–8 year outcome [r5], and AKPS had adequate evidence of truth and discrimination [r16]" },
      { name: "KOOS (and its patellofemoral subscale)", use: "Pain, symptoms, function and quality of life; KOOS had adequate evidence of truth and discrimination for knee conditions [r16]" },
      { name: "Pain numeric rating scale or VAS", use: "Usual pain, worst pain and pain during a defined task (squat, stairs, running); the consensus recommends measuring pain, function and global assessment [r1]" },
      { name: "Global rating of change", use: "Patient-perceived improvement; used as the primary outcome in a network meta-analysis of treatments [r13]" },
      { name: "Lower Extremity Functional Scale (LEFS)", use: "Region-wide function; adequate evidence for truth and discrimination [r16]" },
      { name: "Kinesiophobia questionnaire (e.g. Tampa Scale)", use: "Screens fear of movement, which is associated with poorer function; assessment of kinesiophobia in practice is recommended [r14]" },
      { name: "Core outcome set (status)", use: "No agreed PFP-specific core outcome set exists yet. A scoping review of 969 studies concluded that a consensus-based core outcome measurement set is needed [r17]" }
    ],
    imaging: [
      { modality: "Plain radiograph (AP, lateral, skyline)", indication: "Not needed for typical PFP. Consider after trauma, if instability or trochlear dysplasia is suspected, in persistent pain or if patellofemoral osteoarthritis is suspected in older adults.", findings: "Usually normal. May show patella alta, patellar tilt, trochlear dysplasia or patellofemoral joint space narrowing and osteophytes." },
      { modality: "MRI", indication: "Not routine. Use to exclude other pathology (osteochondral lesion, meniscal tear, tendon or fat pad disease) when features are atypical, mechanical symptoms are present or the patient has not responded to well-delivered rehab.", findings: "May show cartilage damage, bone marrow lesions or fat pad signal change, but the relationship between structural findings and pain is imprecise [r1]." }
    ]
  },

  differentials: [
    { name: "Patellar tendinopathy", id: "patellar-tendinopathy", distinguishing: "Pain localised to the inferior pole of the patella, load-related in jumping and landing, with focal patellar tendon tenderness and a positive single-leg decline squat." },
    { name: "Infrapatellar (Hoffa's) fat pad impingement", id: "hoffa-fat-pad-impingement", distinguishing: "Pain either side of the patellar tendon, worse with knee hyperextension and standing in locked knees, with fat pad tenderness and swelling." },
    { name: "Lateral patellar dislocation or instability", id: "patellar-dislocation", distinguishing: "History of dislocation or subluxation, apprehension on lateral glide and often a positive J-sign. These patients are excluded from the PFP definition [r1]." },
    { name: "Osgood–Schlatter disease", id: "osgood-schlatter", distinguishing: "Adolescent growth-spurt pain with a tender, prominent tibial tuberosity, worse with kneeling and quadriceps loading." },
    { name: "Sinding-Larsen–Johansson syndrome", id: "sinding-larsen-johansson", distinguishing: "Adolescent pain localised to the inferior pole of the patella (patellar tendon origin) with local tenderness." },
    { name: "Iliotibial band syndrome", id: "itb-syndrome", distinguishing: "Lateral knee pain over the lateral femoral epicondyle with running, often at a repeatable distance, with focal lateral tenderness." },
    { name: "Prepatellar bursitis", id: "prepatellar-bursitis", distinguishing: "Visible swelling in front of the patella after kneeling, with pain on direct pressure but a dry knee joint." },
    { name: "Articular cartilage or osteochondral defect", id: "articular-cartilage-defect-knee", distinguishing: "Acute or traumatic onset, recurrent effusion and mechanical symptoms (catching, locking). MRI identifies the lesion." },
    { name: "Traumatic meniscal tear", id: "meniscal-tear", distinguishing: "Twisting injury with joint-line tenderness, catching or locking and a positive McMurray or Thessaly test." },
    { name: "Referred hip or lumbar pain", id: "scfe", distinguishing: "Hip pathology (for example slipped capital femoral epiphysis or hip dysplasia) can refer pain to the knee in adolescents. Look for reduced hip internal rotation, a limp and a normal knee examination." }
  ],
  redFlags: [
    "Anterior knee pain in an adolescent with a limp, groin or thigh pain or reduced hip internal rotation: examine the hip and suspect slipped capital femoral epiphysis. Refer the same day for radiographs and orthopaedic review.",
    "A hot, red, swollen knee with fever or inability to bear weight: suspect septic arthritis. Send to emergency the same day.",
    "Constant pain, night pain unrelated to load, unexplained weight loss, a past history of cancer, a palpable mass or bone tenderness over the patella or distal femur: suspect tumour or infection. Arrange imaging and urgent medical review.",
    "Acute trauma with a haemarthrosis, inability to straight-leg raise against gravity or inability to bear weight (positive Ottawa knee rules): arrange radiographs and exclude fracture or extensor mechanism rupture.",
    "True locking, a large recurrent effusion or frequent giving way: suspect intra-articular pathology (meniscus, osteochondral injury, ligament) and arrange MRI or orthopaedic review.",
    "Pain that does not follow a mechanical pattern, with neurological symptoms, a positive femoral nerve stretch or lumbar signs: reassess the spine and refer if indicated."
  ],

  management: {
    principles: "Treat PFP as a load-versus-capacity problem. First-line care is exercise therapy delivered with education and tailored to the person's presentation, preferences and goals [r4,r2,r18]. A best-practice synthesis of 65 high-quality RCTs (3,796 participants), patient interviews and expert focus groups recommended knee-targeted exercise with or without hip-targeted exercise, underpinned by education, with prefabricated foot orthoses, manual therapy, movement or running retraining and taping added according to the individual's needs [r4]. In a network meta-analysis, every treatment beat wait-and-see at 3 months, while at 12 months education alone was comparable with education plus a physical treatment, and the authors advise against a wait-and-see approach. Most comparisons were low to very low certainty, so no particular physical treatment can be said to be superior [r13]. Load management means modifying, not eliminating, provocative activity while capacity is rebuilt. Review response at 4–6 weeks and again at 3 months.",
    medical: [
      { name: "Simple analgesia or topical NSAIDs", description: "A short course may allow exercise to proceed during irritable phases. It does not change the load–capacity balance. Pharmacological treatment is outside the scope of the physical-intervention consensus statements, and evidence for it in PFP is not covered here.", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Specialist referral (sports physician or orthopaedics)", description: "For atypical features, red flags, mechanical symptoms, a suspected structural cause (for example osteochondral lesion or maltracking with instability) or failure to improve after well-delivered rehab over about 3–6 months.", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Surgery (arthroscopic debridement, lateral release, realignment)", description: "There is no established role for surgery in typical PFP. It is reserved for rare, carefully selected cases with a specific structural diagnosis after prolonged, well-delivered rehab.", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] }
    ],
    physio: [
      { name: "Exercise therapy: combined hip- and knee-targeted strengthening", description: "Progressive resistance training 2–3 times per week for at least 6–12 weeks, combining knee-targeted exercises (squat, step-up and step-down, leg press, knee extension in a tolerable range) with hip-targeted exercises (abduction, external rotation, bridging, hip hinge). Compared with knee strengthening alone, adding hip strengthening reduced pain (mean difference −1.5; 95% CI −2.3 to −0.8) and improved activity (SMD 0.7; 95% CI 0.2 to 1.3), with gains maintained beyond the intervention, although measured strength did not change [r12]. The 2016 consensus recommends combining hip and knee exercises in preference to knee exercises alone [r2]. Dosages are typical clinical prescriptions; trials report them poorly [r2].", evidence: "moderate", recommendation: "recommended", refs: ["r12", "r2", "r18", "r4"] },
      { name: "Education and load management", description: "Explain the load–capacity model, why scans correlate poorly with pain, what pain levels are acceptable during exercise (a common clinical convention is up to 3–4/10 settling within 24 hours) and how to modify running, stairs and squatting. In runners, adding gait retraining or exercise to education gave no extra benefit on symptoms at 20 weeks, and the authors advise that education on symptoms and training load should be a primary component [r11]. The consensus could not make a recommendation for education in isolation because there is little research [r2].", evidence: "limited", recommendation: "recommended", refs: ["r11", "r13", "r4", "r2"] },
      { name: "Combined interventions", description: "Exercise plus education, with patellar taping or mobilisation (and foot orthoses) as indicated. Recommended in adults for short- and medium-term pain [r2]. In the network meta-analysis, education plus exercise plus taping or mobilisation was superior to education alone at 3 months (OR 2.6; 95% CrI 1.7–4.2) [r13].", evidence: "moderate", recommendation: "recommended", refs: ["r2", "r18", "r13"] },
      { name: "Prefabricated foot orthoses", description: "Recommended for short-term pain relief [r2,r18]. In a 179-participant RCT, orthoses beat flat inserts at 6 weeks (relative risk reduction 0.66; 99% CI 0.05–1.17; NNT 4) but were similar to physiotherapy and added nothing when combined with it; every group improved clinically over 52 weeks [r19]. The average benefit may lack clinical significance because individual response varies. Predictors of response are greater midfoot mobility, less ankle dorsiflexion and immediate improvement in single-leg squat pain with orthoses in place [r2].", evidence: "moderate", recommendation: "consider", refs: ["r2", "r18", "r19", "r4"] },
      { name: "Patellar taping", description: "Use as a short-term adjunct to reduce pain during exercise as part of a combined program. The 2016 consensus was unsure whether taping should be first-line [r2], the 2018 consensus remained uncertain [r18], and guidelines were consistent in supporting taping [r20]. Check for an immediate pain reduction on squat or step-down before continuing.", evidence: "conflicting", recommendation: "consider", refs: ["r2", "r18", "r20"] },
      { name: "Gait and running retraining", description: "For runners with identifiable faults (for example overstriding or a high loading rate). In an RCT of 69 runners, gait retraining raised step rate by 7.0% and cut average vertical loading rate by 25.4%, but did not improve symptoms beyond education alone [r11]. The 2018 consensus is uncertain [r18], and a best-practice guide lists movement and running retraining as a supporting option to be tailored [r4].", evidence: "limited", recommendation: "consider", refs: ["r11", "r18", "r4"] },
      { name: "Pain-science education and graded exposure", description: "For people with fear of movement, widespread pain or long-standing symptoms. Kinesiophobia is moderately associated with poorer function; interventions that target it (psychobehavioural approaches, education, self-managed exercise) may reduce it, but certainty is very low [r14]. Signs of central sensitisation suggest including treatments with central effects within a multimodal plan [r10].", evidence: "very-limited", recommendation: "consider", refs: ["r14", "r10"] },
      { name: "Patellofemoral, knee or lumbar mobilisation in isolation", description: "Not recommended as a stand-alone treatment. Manual soft-tissue techniques are uncertain [r18]. Manual therapy may be used as a supporting adjunct alongside exercise if it helps the individual [r4].", evidence: "limited", recommendation: "not-recommended", refs: ["r18", "r2", "r20"] },
      { name: "Electrophysical agents (for example therapeutic ultrasound, electrical stimulation)", description: "Not recommended. Electrophysical agents may not improve outcomes, and guidelines do not recommend electrotherapeutic modalities [r2,r18,r20].", evidence: "limited", recommendation: "not-recommended", refs: ["r2", "r18", "r20"] },
      { name: "Patellar bracing and dry needling / acupuncture", description: "Two higher-quality guidelines did not recommend dry needling or patellar bracing [r20], and the 2018 consensus is uncertain about acupuncture, dry needling and bracing [r18]. Do not use as first-line care.", evidence: "very-limited", recommendation: "not-recommended", refs: ["r20", "r18"] }
    ],
    education: [
      "Patellofemoral pain is common and the knee is not 'wearing out'. Scan findings relate poorly to pain, and most people can load their knee safely.",
      "Pain is a sign that the knee's current capacity has been exceeded, not necessarily that it is being damaged. We rebuild capacity with strength training and adjust the load while that happens.",
      "Stay active. A pain level up to about 3–4/10 during exercise that settles within 24 hours is acceptable (a common clinical convention). Avoid complete rest and sudden spikes in running, stairs or squatting.",
      "Strength work for the hips and thighs usually helps more than thigh-only exercise, and gains typically take 6–12 weeks.",
      "PFP can last for years in many people, so keep the program going after the pain settles and tell your physio early if it flares.",
      "Taping or shoe inserts can reduce pain in the short term and help you exercise, but they work best alongside strengthening."
    ]
  },

  rehab: {
    overview: "Progression is symptom-guided and criteria-based rather than time-based. The aim is to rebuild the capacity of the quadriceps, hip and calf musculature, then re-expose the knee to the loads that provoked pain (stairs, deep flexion, running, jumping). Use a simple pain-monitoring rule: pain up to about 3–4/10 during exercise is acceptable if it settles within 24 hours; if it does not, reduce load or depth for the next session. Change one variable at a time (load, depth, volume, speed) and prefer the range that is tolerable, then progress. Dosages below are typical clinical prescriptions, not trial-validated protocols, as the consensus noted that reporting of exercise therapy in PFP trials is poor [r2]. Timeframes are typical and criteria override them.",
    stages: [
      {
        name: "Settle & start loading",
        timeframe: "Weeks 0–2",
        goals: ["Reduce irritability and pain on daily tasks", "Learn load monitoring and activity modification", "Begin pain-tolerable quadriceps and hip activation", "Maintain general fitness with low-impact activity"],
        precautions: ["Modify, do not stop, provocative activities (avoid repeated deep loaded flexion beyond the pain limit)", "Avoid sudden increases in running, stairs or squatting", "Stay in the pain-tolerable range (≤ 3–4/10) and settle within 24 hours"],
        exercises: [
          { name: "Isometric wall sit", dosage: "4–5 × 30–45 s holds at a tolerable knee angle (typically 45–60° flexion), once or twice daily", cues: "Weight through the whole foot, knees tracking over the second toe", figure: { pose: "ex-wall-sit", view: "lateral", props: ["wall"] } },
          { name: "Straight-leg raise", dosage: "3 × 10–15, daily", cues: "Lock the knee straight first, then lift", figure: { pose: "ex-straight-leg-raise", view: "lateral", props: ["mat"] } },
          { name: "Side-lying clamshell", dosage: "3 × 12–15 each side, daily", cues: "Keep the pelvis stacked and do not roll back", figure: { pose: "ex-clamshell", view: "lateral", props: ["mat"] } },
          { name: "Glute bridge", dosage: "3 × 10–12 with a 2–3 s hold, daily", cues: "Drive through the heels and keep ribs down", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Standing hip abduction with band", dosage: "3 × 12–15 each side, 3–4 times per week", cues: "Stand tall and do not lean away from the working leg", figure: { pose: "ex-hip-abduction-standing", view: "anterior", props: ["resistance-band"] } },
          { name: "Low-impact conditioning (cycling with a higher saddle, swimming or brisk walking)", dosage: "20–30 min, 3–5 days per week, pain ≤ 3/10" }
        ],
        progressionCriteria: ["Pain on squat to about 60° of knee flexion ≤ 3/10 and settles within 24 hours", "Isometric wall sit tolerated for 5 × 30 s", "Daily tasks (stairs, sit-to-stand) pain ≤ 3/10", "Patient can explain and apply the load-monitoring rule"]
      },
      {
        name: "Build capacity",
        timeframe: "Weeks 2–8",
        goals: ["Progressive hip- and knee-targeted strengthening", "Improve single-leg control and depth tolerance", "Normalise stair mechanics", "Build calf and trunk endurance"],
        precautions: ["Increase load before depth, and depth before speed", "Keep pain ≤ 3–4/10 with 24-hour settling", "Reduce loaded depth in a flare rather than stopping"],
        exercises: [
          { name: "Squat to box, progressing depth then load", dosage: "3–4 × 8–12, 2–3 times per week; add load once 3 × 12 is pain-tolerable", cues: "Hips back, knees over toes, even weight through the foot", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Step-up", dosage: "3 × 8–12 each leg, 2–3 times per week", cues: "Drive through the whole foot with a level pelvis", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Eccentric step-down", dosage: "3 × 8–10 each leg, 3 s lowering, 2–3 times per week", cues: "Knee tracks over the second toe, pelvis level", figure: { pose: "ex-step-down", view: "anterior", props: ["step"] } },
          { name: "Seated knee extension in the pain-free range", dosage: "3 × 10–12, 3 s up and 3 s down, 2–3 times per week", cues: "Use the arc that is pain-tolerable (commonly 90–45° flexion first) and widen it over time", figure: { pose: "ex-knee-extension", view: "lateral", props: ["chair"] } },
          { name: "Romanian deadlift (hip hinge)", dosage: "3 × 8–10, 2 times per week", cues: "Hinge from the hips with a long spine", figure: { pose: "ex-rdl", view: "lateral", props: ["dumbbell"] } },
          { name: "Side plank", dosage: "3 × 20–30 s each side, 3 times per week", cues: "Straight line from head to feet, hips stacked", figure: { pose: "ex-side-plank", view: "anterior", props: ["mat"] } }
        ],
        progressionCriteria: ["Squat to 90° and eccentric step-down with pain ≤ 2/10", "Single-leg squat to 60° for 8 reps without valgus or trunk collapse", "Hip abductor and quadriceps strength improving, or within about 10–20% of the other side", "No next-day pain increase after loading sessions"]
      },
      {
        name: "Strength & single-leg control",
        timeframe: "Weeks 8–16",
        goals: ["Heavy, slow strength work for the quadriceps, hip and calf", "Single-leg control without dynamic valgus", "Pain-free stairs and prolonged sitting", "Prepare for impact"],
        precautions: ["Progress load in small steps (about 5–10% per week) while monitoring the 24-hour response", "Avoid jumping and running until the progression criteria are met"],
        exercises: [
          { name: "Loaded squat or leg press (heavy)", dosage: "3–4 × 6–8, 2 times per week", cues: "Slow lowering, full-foot contact", figure: { pose: "ex-squat", view: "lateral", props: ["barbell"] } },
          { name: "Split squat / Bulgarian split squat", dosage: "3–4 × 6–10 each leg, 2 times per week", cues: "Upright trunk, front knee tracks over the second toe", figure: { pose: "ex-split-squat", view: "lateral", props: ["dumbbell"] } },
          { name: "Single-leg squat", dosage: "3 × 8 each leg, 2–3 times per week", cues: "Level pelvis and knee over the foot", figure: { pose: "ex-single-leg-squat", view: "anterior" } },
          { name: "Single-leg bridge", dosage: "3 × 10–12 each leg", cues: "Keep the pelvis level and push through the heel", figure: { pose: "ex-single-leg-bridge", view: "lateral", props: ["mat"] } },
          { name: "Single-leg calf raise", dosage: "3 × 12–15 each leg, 2–3 times per week", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Single-leg balance with perturbation", dosage: "3 × 30–45 s each leg", cues: "Soft knee, quiet trunk", figure: { pose: "ex-single-leg-balance", view: "anterior" } }
        ],
        progressionCriteria: ["Single-leg squat to 60–90° for 10 reps, pain ≤ 2/10, without valgus or trunk collapse", "Pain ≤ 2/10 on stair descent and after 30 min of sitting", "Quadriceps and hip abductor strength ≥ 90% of the other side (if unilateral) or at target for body weight", "Tolerates brisk walking for 30 min with no flare"]
      },
      {
        name: "Return to running, impact & sport",
        timeframe: "Weeks 12–24+",
        goals: ["Graded return to running", "Landing and jump tolerance", "Sport-specific loading", "Self-managed maintenance strength program"],
        precautions: ["Change one running variable at a time (volume, intensity or hills)", "Do not progress if pain is above 2–3/10 or does not settle within 24 hours", "Reduce volume rather than stopping completely in a flare"],
        exercises: [
          { name: "Walk–run program", dosage: "20 min total, for example 5 × (1 min jog and 2 min walk), every second day; lengthen the jog intervals as next-day pain stays ≤ 2/10", cues: "Short, quick steps and a relaxed upper body", figure: { pose: "run-midstance", view: "lateral" } },
          { name: "Step-rate cue with metronome (runners)", dosage: "Raise cadence by about 5–10% for 2–4 weeks if overstriding; gait retraining raised step rate by 7.0% in a trial [r11]", cues: "Land closer under the body with quicker steps" },
          { name: "Jump squat and drop-landing drills", dosage: "3 × 5–8 with full recovery, 2 times per week", cues: "Land softly with hips and knees bent, knees over the second toe", figure: { pose: "ex-jump-squat", view: "lateral" } },
          { name: "Single-leg hop progressions (forward, then lateral)", dosage: "3 × 5 each direction and leg, 2 times per week", cues: "Stick the landing for 2 s", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Heavy strength maintenance (squat, split squat, hip hinge)", dosage: "2 times per week, 3–4 × 5–8", cues: "Keep the quality; reduce volume in a flare rather than stopping" },
          { name: "Sport-specific drills (cutting, changes of direction, stairs or hills)", dosage: "Build from 50% intensity and volume over 2–4 weeks", cues: "Control the knee over the second toe" }
        ],
        progressionCriteria: ["Runs 30 min continuously with pain ≤ 2/10 that settles within 24 hours", "Single-leg hop distance symmetry ≥ 90% (if unilateral) with good landing control", "Full training sessions completed with no swelling and no flare the next day", "AKPS or KOOS near pre-injury level and confidence restored"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Pain ≤ 2/10 (ideally 0–1/10) during squat, stairs and sport-specific tasks, settling within 24 hours",
      "Completed a graded running and jumping progression (for example 30 min continuous running and sport drills at match intensity) without a symptom flare",
      "Single-leg squat or step-down for 10 repetitions with pain ≤ 2/10 and good frontal-plane control",
      "Quadriceps and hip abductor strength ≥ 90% of the other side (if unilateral) or at an age- and sport-appropriate target",
      "Patient-reported function near pre-injury levels (AKPS, KOOS or similar) and no marked fear of movement [r14]",
      "There are no widely accepted, validated PFP-specific return-to-sport criteria, so the thresholds above are expert opinion and should be agreed with the athlete and coach"
    ],
    tests: ["Single-leg squat and step-down", "Hand-held dynamometry for quadriceps and hip abductors (limb symmetry index)", "Single, triple and lateral hop tests (limb symmetry index)", "Running tolerance test (30 min) with 24-hour pain response", "AKPS or KOOS questionnaire"]
  },
  prognosis: "PFP is not reliably self-limiting. In a 5–8 year follow-up of two RCT cohorts, 34 of 60 people who responded (57%) reported an unfavourable recovery, and baseline pain duration over 12 months and a lower AKPS predicted a poorer outcome. Only 19.3% completed follow-up, so the figure may be biased, and 98% of the 50 people X-rayed (48 of 50) showed no radiographic knee osteoarthritis [r5]. The 2016 consensus describes PFP as recalcitrant and sometimes lasting many years, with possible loss of sports participation, and notes that recovery rates may be lower in adolescents [r2]. In the shorter term, all treatment groups improved clinically over 52 weeks in a 179-participant RCT [r19], and every treatment tested beat wait-and-see at 3 months in a network meta-analysis [r13]. Whether PFP in youth leads to patellofemoral osteoarthritis later is unclear [r1,r5].",
  prevention: [
    "Prevention research is limited, and identifying modifiable risk factors has been called an urgent priority [r7]. The points below are derived mainly from prospective risk-factor studies.",
    "Build quadriceps capacity before high-volume activity, because quadriceps weakness predicted PFP in military recruits (modifiable) [r7].",
    "Progress running, jumping and stair or squat volume gradually relative to conditioning, since abrupt increases in loading are the usual trigger [r3].",
    "Avoid early single-sport specialisation in young athletes (relative risk 1.5 versus multisport) [r1].",
    "Teach landing with adequate knee flexion and good frontal-plane control, as reduced knee flexion range and greater knee abduction during landing are associated with PFP [r9].",
    "Treat a first episode early and fully: a symptom duration over 12 months predicts a worse long-term outcome [r5]."
  ],
  clinicalPearls: [
    "If a squat or step-down does not reproduce the patient's familiar pain, question the diagnosis; the squat is the best single test available, though it is not definitive [r1,r15].",
    "Avoid 'wear and tear' language. Structure relates imprecisely to pain, and catastrophic explanations feed kinesiophobia, which is associated with poorer function [r1,r14].",
    "Hip weakness is common in PFP yet did not predict onset prospectively, but adding hip to knee strengthening still outperforms knee strengthening alone, so prescribe both and judge the result by symptoms rather than by a presumed mechanism [r7,r12].",
    "Ask what changed in the 2–6 weeks before onset. Correcting the load spike matters more than finding the 'cause'.",
    "If the squat hurts, switch to a different pain-tolerable pattern (step-ups, hip hinge, cycling) and re-expose to deep flexion progressively rather than avoiding it.",
    "Trial taping or orthoses for an immediate effect: a prompt drop in single-leg squat pain predicts a response to foot orthoses [r2]. Long duration and a low AKPS at baseline predict a poor prognosis, so set expectations early [r5]."
  ],
  related: ["patellar-tendinopathy", "hoffa-fat-pad-impingement", "patellar-dislocation", "itb-syndrome", "articular-cartilage-defect-knee", "osgood-schlatter"],

  references: [
    { id: "r1", citation: "Crossley KM, Stefanik JJ, Selfe J, et al. 2016 Patellofemoral pain consensus statement from the 4th International Patellofemoral Pain Research Retreat, Manchester. Part 1: Terminology, definitions, clinical examination, natural history, patellofemoral osteoarthritis and patient-reported outcome measures. Br J Sports Med. 2016;50(14):839-43.", pmid: "27343241", doi: "10.1136/bjsports-2016-096384", type: "consensus-statement", year: 2016 },
    { id: "r2", citation: "Crossley KM, van Middelkoop M, Callaghan MJ, et al. 2016 Patellofemoral pain consensus statement from the 4th International Patellofemoral Pain Research Retreat, Manchester. Part 2: recommended physical interventions (exercise, taping, bracing, foot orthoses and combined interventions). Br J Sports Med. 2016;50(14):844-52.", pmid: "27247098", doi: "10.1136/bjsports-2016-096268", type: "consensus-statement", year: 2016 },
    { id: "r3", citation: "Dye SF. The pathophysiology of patellofemoral pain: a tissue homeostasis perspective. Clin Orthop Relat Res. 2005;(436):100-10.", pmid: "15995427", doi: "10.1097/01.blo.0000172303.74414.7d", type: "narrative-review", year: 2005 },
    { id: "r4", citation: "Neal BS, Lack SD, Bartholomew C, et al. Best practice guide for patellofemoral pain based on synthesis of a systematic review, the patient voice and expert clinical reasoning. Br J Sports Med. 2024;58(24):1486-95.", pmid: "39401870", doi: "10.1136/bjsports-2024-108110", type: "systematic-review", year: 2024 },
    { id: "r5", citation: "Lankhorst NE, van Middelkoop M, Crossley KM, et al. Factors that predict a poor outcome 5-8 years after the diagnosis of patellofemoral pain: a multicentre observational analysis. Br J Sports Med. 2016;50(14):881-6.", pmid: "26463119", doi: "10.1136/bjsports-2015-094664", type: "cohort", year: 2016 },
    { id: "r6", citation: "Smith BE, Selfe J, Thacker D, et al. Incidence and prevalence of patellofemoral pain: a systematic review and meta-analysis. PLoS One. 2018;13(1):e0190892.", pmid: "29324820", doi: "10.1371/journal.pone.0190892", type: "meta-analysis", year: 2018 },
    { id: "r7", citation: "Neal BS, Lack SD, Lankhorst NE, et al. Risk factors for patellofemoral pain: a systematic review and meta-analysis. Br J Sports Med. 2019;53(5):270-81.", pmid: "30242107", doi: "10.1136/bjsports-2017-098890", type: "meta-analysis", year: 2019 },
    { id: "r8", citation: "Ceyssens L, Vanelderen R, Barton C, et al. Biomechanical risk factors associated with running-related injuries: a systematic review. Sports Med. 2019;49(7):1095-115.", pmid: "31028658", doi: "10.1007/s40279-019-01110-z", type: "systematic-review", year: 2019 },
    { id: "r9", citation: "De Bleecker C, Vermeulen S, De Blaiser C, et al. Relationship between jump-landing kinematics and lower extremity overuse injuries in physically active populations: a systematic review and meta-analysis. Sports Med. 2020;50(8):1515-32.", pmid: "32514700", doi: "10.1007/s40279-020-01296-7", type: "meta-analysis", year: 2020 },
    { id: "r10", citation: "Sigmund KJ, Bement MKH, Earl-Boehm JE. Exploring the pain in patellofemoral pain: a systematic review and meta-analysis examining signs of central sensitization. J Athl Train. 2021;56(8):887-901.", pmid: "33238005", doi: "10.4085/1062-6050-0190.20", type: "meta-analysis", year: 2021 },
    { id: "r11", citation: "Esculier JF, Bouyer LJ, Dubois B, et al. Is combining gait retraining or an exercise programme with education better than education alone in treating runners with patellofemoral pain? A randomised clinical trial. Br J Sports Med. 2018;52(10):659-66.", pmid: "28476901", doi: "10.1136/bjsports-2016-096988", type: "rct", year: 2018 },
    { id: "r12", citation: "Nascimento LR, Teixeira-Salmela LF, Souza RB, et al. Hip and knee strengthening is more effective than knee strengthening alone for reducing pain and improving activity in individuals with patellofemoral pain: a systematic review with meta-analysis. J Orthop Sports Phys Ther. 2018;48(1):19-31.", pmid: "29034800", doi: "10.2519/jospt.2018.7365", type: "meta-analysis", year: 2018 },
    { id: "r13", citation: "Winters M, Holden S, Lura CB, et al. Comparative effectiveness of treatments for patellofemoral pain: a living systematic review with network meta-analysis. Br J Sports Med. 2021;55(7):369-77.", pmid: "33106251", doi: "10.1136/bjsports-2020-102819", type: "meta-analysis", year: 2021 },
    { id: "r14", citation: "Rethman KK, Mansfield CJ, Moeller J, et al. Kinesiophobia is associated with poor function and modifiable through interventions in people with patellofemoral pain: a systematic review with individual participant data correlation meta-analysis. Phys Ther. 2023;103(9):pzad074.", pmid: "37354454", doi: "10.1093/ptj/pzad074", type: "meta-analysis", year: 2023 },
    { id: "r15", citation: "Nunes GS, Stapait EL, Kirsten MH, et al. Clinical test for diagnosis of patellofemoral pain syndrome: systematic review with meta-analysis. Phys Ther Sport. 2013;14(1):54-9.", pmid: "23232069", doi: "10.1016/j.ptsp.2012.11.003", type: "diagnostic-accuracy", year: 2013 },
    { id: "r16", citation: "Howe TE, Dawson LJ, Syme G, et al. Evaluation of outcome measures for use in clinical practice for adults with musculoskeletal conditions of the knee: a systematic review. Man Ther. 2012;17(2):100-18.", pmid: "21872524", doi: "10.1016/j.math.2011.07.002", type: "systematic-review", year: 2012 },
    { id: "r17", citation: "Besomi M, Machado EM, Lyng KD, et al. Measures of health-related domains used in patellofemoral pain: a scoping review and mapping to the Outcome Measures in Rheumatology (OMERACT) core areas. JOSPT Open. 2026;4(3):276-88.", pmid: "42686181", doi: "10.2519/josptopen.2026.0232", type: "systematic-review", year: 2026 },
    { id: "r18", citation: "Collins NJ, Barton CJ, van Middelkoop M, et al. 2018 Consensus statement on exercise therapy and physical interventions (orthoses, taping and manual therapy) to treat patellofemoral pain: recommendations from the 5th International Patellofemoral Pain Research Retreat, Gold Coast, Australia, 2017. Br J Sports Med. 2018;52(18):1170-8.", pmid: "29925502", doi: "10.1136/bjsports-2018-099397", type: "consensus-statement", year: 2018 },
    { id: "r19", citation: "Collins N, Crossley K, Beller E, et al. Foot orthoses and physiotherapy in the treatment of patellofemoral pain syndrome: randomised clinical trial. BMJ. 2008;337:a1735.", pmid: "18952682", doi: "10.1136/bmj.a1735", type: "rct", year: 2008 },
    { id: "r20", citation: "Wallis JA, Roddy L, Bottrell J, et al. A systematic review of clinical practice guidelines for physical therapist management of patellofemoral pain. Phys Ther. 2021;101(3):pzab021.", pmid: "33533400", doi: "10.1093/ptj/pzab021", type: "systematic-review", year: 2021 }
  ],

  animation: {
    title: "How patellofemoral pain develops",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 8, view: "lateral", environment: "gym",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "run-contact", root: { x: 0 } },
          { t: 0.7, pose: "run-midstance", root: { x: 0 } },
          { t: 1.3, pose: "run-toe-off", root: { x: 0 } },
          { t: 1.9, pose: "run-contact", root: { x: 0 } },
          { t: 2.5, pose: "run-midstance", root: { x: 0 } },
          { t: 3.3, pose: "stand", root: { x: 0 } },
          { t: 4.1, pose: "squat", root: { x: 0 } },
          { t: 5.0, pose: "deep-squat", root: { x: 0 }, ease: "in" },
          { t: 6.6, pose: "deep-squat", root: { x: 0 } }
        ],
        forces: [
          { t: [0.4, 1.2], at: "footR", dir: "up", label: "Ground force", size: "m" },
          { t: [0.5, 1.3], at: "kneeR", dir: "backward", label: "Kneecap pressed into groove", size: "m" },
          { t: [2.2, 3.0], at: "footR", dir: "up", label: "Repeated each stride", size: "m" },
          { t: [4.2, 7.6], at: "thighR", dir: "up", label: "Quadriceps force", size: "m" },
          { t: [4.4, 7.6], at: "kneeR", dir: "backward", label: "Compression rises with knee bend", size: "l" }
        ],
        highlights: [{ t: [0.4, 8], at: "kneeR" }],
        impacts: [{ t: 5.4, at: "kneeR" }],
        slowmo: [{ t: [2.4, 3.0], rate: 0.5 }, { t: [5.0, 5.6], rate: 0.5 }],
        captions: [
          { t: 0, text: "Running, stairs and squats all load the patellofemoral joint through a bent, weight-bearing knee." },
          { t: 1.6, text: "At mid-stance the quadriceps controls knee bend and presses the kneecap into its groove." },
          { t: 3.2, text: "Capacity is what the joint can tolerate. Training, strength and recovery set it." },
          { t: 4.2, text: "Deeper bends need more quadriceps force, so joint compression rises with flexion." },
          { t: 5.4, text: "When repeated load outstrips capacity, the tissues around the kneecap become irritated." },
          { t: 6.6, text: "Pain starts around or behind the kneecap. Avoiding load lowers capacity even further." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "kneeR",
        captions: [{ t: 0, text: "Zooming into the right knee, seen from the side as a sagittal slice." }]
      },
      {
        type: "closeup", label: "Inside the knee", duration: 8, scene: "knee-sagittal",
        actions: [
          { t: 0, do: "highlight", target: "patellarCartilage" },
          { t: 0.3, do: "label", target: "patellarCartilage", text: "Patellar cartilage" },
          { t: 0.9, do: "label", target: "femoralCartilage", text: "Trochlear cartilage" },
          { t: 1.5, do: "arrow", at: "quadricepsTendonInsertion", dir: "proximal", label: "Quadriceps pull", size: "m" },
          { t: 1.7, do: "arrow", at: "patellaCentre", dir: "posterior", label: "Joint compression", size: "l" },
          { t: 1.9, do: "stretch", target: "quadricepsTendon", amount: 0.2, dur: 1 },
          { t: 2.3, do: "compress", target: "patellarCartilage", dur: 0.8 },
          { t: 2.3, do: "compress", target: "femoralCartilage", dur: 0.8 },
          { t: 3.4, do: "label", target: "patellarCartilage", text: "Cartilage has no pain fibres" },
          { t: 4.2, do: "inflame", target: "infrapatellarFatPad", amount: 0.5, dur: 1 },
          { t: 4.2, do: "label", target: "infrapatellarFatPad", text: "Fat pad: highly innervated" },
          { t: 5.0, do: "swell", target: "infrapatellarFatPad", amount: 0.3 },
          { t: 5.4, do: "label", target: "patella", text: "Bone under load: raised pressure" },
          { t: 6.0, do: "pain", at: "patellaCentre" },
          { t: 6.4, do: "camera", at: "trochlea", zoom: 1.5, dur: 1 },
          { t: 7.4, do: "camera", zoom: 1, dur: 0.5 }
        ],
        captions: [
          { t: 0, text: "The kneecap glides in the trochlear groove, cushioned by cartilage on both surfaces." },
          { t: 1.5, text: "Quadriceps pull presses the patella into the groove, and compression rises as the knee bends." },
          { t: 3.4, text: "Cartilage has no pain fibres. Pain comes from innervated tissue nearby: bone, synovium, fat pad." },
          { t: 4.2, text: "The fat pad behind the patellar tendon is highly innervated and can become sensitised." },
          { t: 5.6, text: "Pain is felt around or behind the kneecap, but scans explain it only imprecisely." }
        ]
      },
      {
        type: "closeup", label: "Joint from below", duration: 7, scene: "patellofemoral-axial",
        actions: [
          { t: 0, do: "highlight", target: "patella" },
          { t: 0.3, do: "label", target: "patella", text: "Patella in the trochlear groove" },
          { t: 1.0, do: "arrow", at: "patellaCentre", dir: "posterior", label: "Compression from quadriceps", size: "l" },
          { t: 1.2, do: "compress", target: "patellarCartilage", dur: 0.8 },
          { t: 1.2, do: "compress", target: "trochlearCartilage", dur: 0.8 },
          { t: 2.4, do: "arrow", at: "lateralFacet", dir: "posterior", label: "Load may shift laterally", size: "m" },
          { t: 3.0, do: "stretch", target: "lateralRetinaculum", amount: 0.25, dur: 1 },
          { t: 3.2, do: "label", target: "lateralRetinaculum", text: "Retinaculum: possible pain source" },
          { t: 4.0, do: "bruise", target: "patella", at: "lateralFacet" },
          { t: 4.2, do: "label", target: "patella", text: "Raised bone pressure and activity" },
          { t: 5.0, do: "effuse", target: "jointSpace", amount: 0.25 },
          { t: 5.2, do: "label", target: "jointSpace", text: "Small effusion in some" },
          { t: 5.8, do: "atrophy", target: "vmo", amount: 0.3, dur: 1 },
          { t: 6.0, do: "label", target: "vmo", text: "Lower capacity" },
          { t: 6.3, do: "pain", at: "patellaCentre" }
        ],
        captions: [
          { t: 0, text: "Seen from below, the patella sits in the groove, held by the MPFL and lateral retinaculum." },
          { t: 1.0, text: "Each step, stair or squat presses the patella into the groove through its cartilage." },
          { t: 2.4, text: "Poor hip and knee control is proposed to shift load toward the lateral facet." },
          { t: 3.2, text: "The retinaculum is stretched, and its nerve endings may add to the pain." },
          { t: 4.2, text: "The bone beneath the cartilage reacts to overload with raised pressure and metabolic activity." },
          { t: 5.2, text: "A small effusion may form in some people." },
          { t: 6.0, text: "Pain-limited loading lowers quadriceps capacity, so the same task becomes harder next time." }
        ]
      },
      {
        type: "micro", label: "Cartilage cells", duration: 8, tissue: "cartilage",
        stages: [
          { t: 0, stage: "healthy" }, { t: 2.3, stage: "impact" }, { t: 5.0, stage: "matrix-loss" }
        ],
        timeLabels: [{ t: 2.3, text: "Each loading cycle" }, { t: 5.0, text: "Prolonged overload, in some" }],
        captions: [
          { t: 0, text: "Healthy hyaline cartilage: chondrocytes in a collagen and proteoglycan matrix that absorbs compression." },
          { t: 2.3, text: "Heavy or repeated compression squeezes fluid out and can fissure the surface when capacity is exceeded." },
          { t: 5.0, text: "With sustained overload, proteoglycan is lost and the collagen network weakens, in some people but not all." },
          { t: 6.8, text: "Cartilage change matches pain poorly, so rehab targets load tolerance and capacity, not the scan." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL6" }
};
