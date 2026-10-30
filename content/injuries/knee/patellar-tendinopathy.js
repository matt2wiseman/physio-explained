export default {
  id: "patellar-tendinopathy",
  name: "Patellar tendinopathy (jumper's knee)",
  shortName: "Patellar tendinopathy",
  aka: ["jumper's knee", "patellar tendinosis", "patellar tendonitis", "patella tendinopathy", "proximal patellar tendinopathy", "patellar tendon pain", "PT"],
  region: "knee",
  tissues: ["tendon"],
  onset: "gradual",
  mechanismType: ["overuse"],
  populations: ["jumping and sprinting athletes", "male athletes", "young adult athletes", "elite volleyball and basketball players", "people with physically demanding work"],
  sports: ["volleyball", "basketball", "handball", "soccer", "athletics", "high jump", "netball", "australian football"],
  urgency: "routine",
  summary: "A load-related overuse tendinopathy of the proximal patellar tendon, causing pain at the base of the kneecap with jumping, landing and deceleration. It is managed with progressive tendon loading.",
  keyFacts: [
    { label: "Typical recovery", value: "Months, not weeks: in a 24-week trial, VISA-P improved by 28 points with progressive loading (18 with eccentric exercise)" },
    { label: "Return to sport", value: "Criteria-based. In a chronic, mostly previously treated cohort, 43% (progressive loading) and 27% (eccentric) had returned in the 24-week trial" },
    { label: "Key test", value: "Load-related pain at the inferior pole of the patella; single-leg decline squat reproduces it. Palpation PPV 68% in symptomatic tendons" },
    { label: "Imaging", value: "Ultrasound or MRI show tendon change but correlate poorly with symptoms; not needed to make the diagnosis" },
    { label: "Peak age", value: "Young athletic adults (mean age 24 in the main RCT); more common in men" },
    { label: "Incidence", value: "Prevalence 14.2% in elite athletes across sports; 44.6% in elite volleyball" }
  ],
  overview: "Patellar tendinopathy (jumper's knee) is a load-related overuse condition of the patellar tendon. Its hallmark features are pain localised to the inferior pole of the patella and load-related pain that rises with the demand on the knee extensors, particularly in activities that store and release energy in the tendon, such as jumping, landing and changing direction [r1]. It is a tendinopathy, not a tear: the tendon stays in continuity but its structure and capacity change [r2]. The diagnosis is clinical, because tendon abnormalities on imaging also occur in people who have no pain [r1].\n\nThe continuum model explains the condition as repeated load exceeding the tendon's capacity to adapt, which moves the tendon from a reactive response through disrepair to degeneration [r2]. The model has since been revisited, because structure and pain do not map neatly onto each other, so pain, function and structure should be weighed together [r3]. First-line care is education, load management and progressive tendon-loading exercise. In a randomised trial, progressive tendon-loading exercises outperformed eccentric-only exercise at 24 weeks [r4]. Recovery is often slow: elite athletes with jumper's knee had been symptomatic for a mean of about 32 months [r5].",

  epidemiology: {
    text: "In a cross-sectional study of 613 Norwegian elite athletes across nine sports, current jumper's knee affected 14.2% overall, ranging from 0% to 45% by sport. Prevalence was highest in volleyball (44.6%) and basketball (31.9%), with no cases in cycling or orienteering, and it was higher in men (13.5%) than in women (5.6%) [r5]. Among 891 non-elite Dutch athletes the overall prevalence was 8.5% (volleyball 14.4%, soccer 2.5%), again higher in men (10.2%) than in women (6.4%); affected athletes were younger, taller and heavier than unaffected athletes [r6]. In a prospective survey of 385 Dutch volleyball and basketball players followed from 2008 to 2011, 13% developed symptomatic patellar tendinopathy, and male sex was the only established risk factor (OR 2.0, 95% CI 1.1–3.5) [r7].",
    riskFactors: {
      intrinsic: [
        "Male sex (about twice the odds in a prospective cohort) [r7,r6]",
        "Younger age, taller stature and higher body weight (non-elite athletes) [r6]",
        "A stiffer landing strategy: athletes with previous jumper's knee showed higher knee angular velocities and loading rates in drop jumps than controls (small case-control study) [r8]",
        "Abnormal (hypoechoic) tendon on ultrasound while asymptomatic: about a fourfold risk of later patellar tendinopathy (RR 4.35, 95% CI 2.62–7.23) [r9]"
      ],
      extrinsic: [
        "Sports with high speed and power demands on the leg extensors, especially volleyball and basketball [r5]",
        "High total tendon load: no single sports variable predicted onset, but heavy physically demanding work showed a non-significant trend (OR 2.3, 95% CI 0.9–6.3), so total load matters [r7]",
        "Sudden rises in jumping or training volume relative to what the tendon is conditioned for, for example at pre-season or after a break (modifiable; consistent with the load-capacity model) [r2]"
      ]
    }
  },

  mechanism: {
    summary: "Patellar tendinopathy has no single injury moment. It develops from repeated high loading of the knee extensor mechanism in the stretch–shortening cycle. On landing or deceleration the quadriceps contracts eccentrically as the hip, knee and ankle flex, so the patellar tendon lengthens and stores elastic energy; on take-off or push-off it recoils and returns that energy [r1]. When this loading is repeated faster than the tendon can adapt, load exceeds capacity and the tendon's structure changes [r2]. Landing strategy matters: in drop jumps, athletes with previous jumper's knee landed more stiffly, with higher knee angular velocity and loading rates [r8].",
    sequence: [
      "The athlete approaches a jump, a sprint stop or a change of direction, and the quadriceps pre-activate before ground contact.",
      "At foot contact the knee is near extension and the ground-reaction force rises rapidly; the hip, knee and ankle begin to flex.",
      "The quadriceps contracts eccentrically to brake the fall, so the knee flexes deeper while the patellar tendon is stretched under high tensile load and stores elastic energy [r1].",
      "Load peaks at the bottom of the movement. Symptoms localise to the proximal tendon at the inferior pole of the patella [r1].",
      "On take-off the quadriceps contracts concentrically and the tendon recoils, returning the stored energy to the jump.",
      "Across many jumps and sessions with too little recovery, load exceeds capacity. Tenocytes respond, the matrix swells and the collagen becomes disorganised [r2].",
      "The tendon becomes sensitised, so pain appears at progressively lower loads: first at the start of activity, then during and after it."
    ],
    variants: [
      { name: "Change of direction and deceleration", description: "Cutting, sprint braking and stopping load the extensor mechanism eccentrically even without a jump. This explains cases in soccer, handball and athletics [r5]." },
      { name: "Stiff landing strategy", description: "Athletes with previous jumper's knee used a stiffer landing than controls. In contrast, athletes with recent symptomatic jumper's knee reduced peak knee moment, power and work, which suggests they offload the tendon by shifting load elsewhere [r8]." },
      { name: "Load spike", description: "A sudden increase in jump or plyometric volume, such as pre-season or return from a break, can overload a tendon that lacks capacity and produce a reactive tendinopathy [r2]." },
      { name: "Occupational and non-sport loading", description: "Heavy, physically demanding work (for example nurses or physical education teachers) showed a trend toward higher risk, although the confidence interval crossed 1 [r7]." }
    ]
  },

  anatomy: {
    text: "The patellar tendon (strictly a ligament, but called a tendon clinically) joins the inferior pole of the patella to the tibial tuberosity and continues the quadriceps tendon over the front of the patella. It transmits quadriceps force to the tibia and behaves as an elastic spring in jumping, landing and cutting [r1]. It is cushioned behind by the infrapatellar fat pad and the deep infrapatellar bursa. The proximal tendon, at the inferior pole of the patella, is the classic site of pain and pathology [r1].",
    structures: [
      { name: "Patellar tendon", role: "Transmits quadriceps force to the tibia and stores and releases elastic energy in jumping, landing and cutting" },
      { name: "Patella (inferior pole)", role: "Sesamoid bone that increases the quadriceps lever arm. Its inferior pole is the proximal attachment of the tendon and the usual site of tenderness" },
      { name: "Quadriceps muscle and tendon", role: "Brake the body eccentrically on landing and extend the knee concentrically on take-off" },
      { name: "Tibial tuberosity", role: "Distal attachment of the tendon; an apophysis in adolescents (Osgood–Schlatter site)" },
      { name: "Infrapatellar (Hoffa's) fat pad", role: "Lies behind the tendon. It can be a separate or coexisting source of anterior knee pain" },
      { name: "Hip extensors and calf-soleus complex", role: "Share the work of absorbing landing load. Deficits in this kinetic chain increase demand on the knee extensors [r1]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "Patellar tendinopathy is a failure of the tendon to adapt to load, not a rupture. In the continuum model, repeated overload of a tendon that lacks capacity produces a reactive response, then attempted repair with matrix disorganisation (disrepair), and in some people a degenerative state with areas of cell death and disorganised matrix [r2]. The stages overlap and can move in either direction. Later work cautions that staging by structure alone is too simple for a condition driven by pain and function [r3].\n\nBiopsies show abnormal fibril morphology. Patients had lower collagen fibril density and a trend toward larger mean fibril area than healthy controls, although tendon stiffness and modulus were similar to controls (small study, 8 patients) [r10]. Structure and symptoms are only loosely related. In a randomised trial, corticosteroid injection and heavy slow resistance training both reduced tendon swelling and neovascularisation at 12 weeks, yet symptoms relapsed after the injection but not after loading [r11]. Hypoechoic areas on ultrasound were found in 19–29% of asymptomatic college jumpers [r12], and an abnormal ultrasound in an asymptomatic tendon carries about a fourfold increase in the risk of later symptoms [r9].",
    structures: [
      { name: "Patellar tendon (proximal)", effect: "Thickening, disorganised collagen, increased ground substance and neovascularisation near the inferior pole of the patella. The tendon stays in continuity [r2,r11]" },
      { name: "Patellar enthesis (inferior pole)", effect: "Site of localised tenderness and load-related pain. The bone is usually unremarkable [r1]" },
      { name: "Infrapatellar fat pad", effect: "May be irritated secondarily or coexist, which spreads pain behind and beside the tendon" },
      { name: "Tendon mechanical properties", effect: "Stiffness and modulus were similar to healthy tendon at baseline, so mechanical weakness is not the main problem [r10]" }
    ],
    muscles: [
      { name: "Quadriceps", effect: "Pain-related inhibition: corticospinal inhibition is raised and force output is reduced. In six volleyball players a single bout of isometric contractions lowered inhibition and increased maximal voluntary contraction by 18.7% [r13]." },
      { name: "Calf-soleus complex and hip extensors", effect: "Reduced capacity in the kinetic chain pushes more of the landing work onto the knee extensors. Assess and load them as part of the program [r1]." },
      { name: "Hamstrings and trunk", effect: "Altered landing and jumping strategy changes how much work the knee extensors absorb, for example a stiffer landing with less hip and knee flexion [r8]." }
    ],
    cellular: [
      { phase: "Reactive response", timing: "Days to weeks after a load spike", description: "Tenocytes activate and produce more proteoglycan, so the matrix takes up water and the tendon thickens. This is a short-term adaptive response that can reverse if load is reduced [r2]." },
      { phase: "Tendon disrepair", timing: "Weeks to months", description: "Cell numbers and protein production rise as the tendon attempts repair. Collagen becomes more disorganised, the matrix expands and new vessels appear [r2,r11]." },
      { phase: "Degenerative tendinopathy", timing: "Months to years", description: "Areas of cell death and disorganised matrix with few viable cells. The ability to reverse the structure is limited, but pain and function can still improve with loading [r2,r11]." },
      { phase: "Load adaptation", timing: "12–24 weeks of progressive loading", description: "With heavy slow resistance training, fibril density rose, mean fibril area fell and collagen turnover increased over 12 weeks [r10,r11]. Clinical gains continued to 24 weeks [r4]." }
    ],
    systems: [
      { system: "Nervous system and pain processing", effect: "Corticospinal inhibition of the knee extensors accompanies tendon pain, and isometric contractions reduced pain and inhibition together [r13]. Pain does not track tendon structure, and a role for central pain processing is plausible in persistent cases but is not established in the sources reviewed." },
      { system: "Musculoskeletal chain", effect: "Landing and jumping strategy, and the capacity of the calf, hip and trunk, determine how much load reaches the patellar tendon [r8,r1]." },
      { system: "Systemic and metabolic", effect: "Systemic comorbidities can make presentations more irritable and harder to manage. Screen for them in persistent or atypical cases [r1]." },
      { system: "Behavioural and psychological", effect: "Slow progress, fear of loading and sport identity affect adherence. In the main RCT, adherence at 24 weeks was only 40% (progressive loading) and 49% (eccentric) [r4]." }
    ]
  },

  grading: {
    system: "Tendinopathy continuum (Cook and Purdam): a structural staging model, to be used alongside pain and function [r3]",
    grades: [
      { grade: "Reactive tendinopathy", description: "Short-term adaptive response to acute overload or a load spike: swelling, a thickened but otherwise intact tendon, and higher pain with load [r2].", prognosis: "Often settles with load adjustment followed by gradual re-exposure" },
      { grade: "Tendon disrepair", description: "Attempted repair with more matrix disorganisation and increased vascularity if overload continues [r2].", prognosis: "Responds to progressive loading; some change can partly reverse" },
      { grade: "Degenerative tendinopathy", description: "Focal areas of cell death and disorganised matrix, often a thickened, nodular tendon [r2].", prognosis: "Structure rarely normalises, but capacity can be rebuilt and pain reduced; recovery is usually slower" }
    ]
  },

  timeframes: {
    summary: "The continuum describes load history, not a calendar, so the stage durations below are illustrative and overlap. In trials, clinically meaningful gains took 12–24 weeks of progressive loading [r10,r4].",
    healing: [
      { phase: "Reactive response to overload", startDay: 0, endDay: 21, description: "Tenocyte activation and matrix swelling after a load spike; settles with load adjustment [r2]" },
      { phase: "Tendon disrepair", startDay: 14, endDay: 90, description: "Attempted repair with matrix disorganisation and increased vascularity if overload continues [r2]" },
      { phase: "Degenerative change", startDay: 60, endDay: 365, description: "Cell death and disorganised matrix in chronic overload; limited reversibility, although pain can still improve" },
      { phase: "Load adaptation with progressive loading", startDay: 0, endDay: 168, description: "Fibril morphology and collagen turnover shift over about 12 weeks of heavy slow resistance, and clinical gain continues to 24 weeks [r10,r4]" }
    ],
    milestones: [
      { label: "Short-term pain relief from isometric holds", day: 1, note: "Single-leg decline squat pain fell within minutes and stayed lower at 45 min in a six-player crossover study [r13]" },
      { label: "In-season pain reduction", day: 28, note: "Four weeks of isometric or isotonic exercise reduced decline-squat pain without changing training load [r14]" },
      { label: "Heavy slow resistance block complete", day: 84, note: "12 weeks improved symptoms and moved fibril morphology toward normal in a small cohort [r10]" },
      { label: "Primary outcome point of the main RCT", day: 168, note: "VISA-P improved by 28 points with progressive loading and 18 with eccentric exercise [r4]" },
      { label: "Return to full sport (earliest, criteria-based)", day: 180, note: "Not time-based. 43% (progressive loading) and 27% (eccentric) had returned in the 24-week trial [r4]" }
    ],
    returnToSport: "Criteria-based; typically 3–6 months or longer for an established tendinopathy (clinical range). In the 24-week RCT, 43% of the progressive-loading group and 27% of the eccentric group had returned to sport (a non-significant difference), in a cohort where 82% had already failed other treatment [r4]."
  },

  clinicalPresentation: {
    symptoms: [
      "Pain at the inferior pole of the patella (front of the knee, just below the kneecap) [r1]",
      "Load-related pain that rises with demand on the knee extensors: jumping, landing, sprint braking, cutting and squatting [r1]",
      "Gradual onset over weeks, often after a rise in training volume or intensity, or a return from a break",
      "Pain that eases with warm-up, then returns after activity or the next morning in more irritable tendons",
      "Reduced jump height, speed or ability to train and play at the usual level, which the VISA-P captures [r15]"
    ],
    signs: [
      "Focal tenderness over the proximal patellar tendon at the inferior pole of the patella [r16]",
      "Pain reproduced by a single-leg decline squat, hops or jumps",
      "No true joint effusion and a full, pain-free range of knee motion (intra-articular signs point to another diagnosis)",
      "Quadriceps weakness or pain on loaded knee extension, with possible calf or hip extensor deficits",
      "Occasionally visible or palpable tendon thickening"
    ]
  },

  assessment: {
    subjective: [
      "Pain location (inferior pole of the patella), pain behaviour with load, and which activities provoke it [r1]",
      "Training history: recent change in jump volume, intensity, surface, footwear or competition schedule, or a return from a break (load spike)",
      "Duration of symptoms: a longer duration predicts a poorer response to treatment [r17]",
      "Previous treatment, including injections and what was actually done (82% of the main RCT cohort had failed prior treatment) [r4]",
      "Irritability: how quickly pain comes on, how long it takes to settle, and any night or rest pain (a red flag)",
      "Comorbidities and medication history, because systemic factors can complicate management [r1]",
      "Sport, level, season timing and goals. Whether the athlete is in-season or off-season changes the plan [r14]"
    ],
    observation: [
      "Quadriceps bulk and symmetry, and general lower-limb posture",
      "Jump and landing technique on video: stiff landing, limited hip and knee flexion, trunk position and knee alignment [r8]",
      "Visible swelling or thickening at the inferior pole of the patella (uncommon)"
    ],
    palpation: [
      "Tenderness at the proximal patellar tendon and inferior pole of the patella. Palpation is reliable (r = 0.82) but not specific, and mild tenderness in asymptomatic jumpers is normal [r16]",
      "Compare with the tibial tuberosity (Osgood–Schlatter), the inferior pole as an apophysis in adolescents (Sinding-Larsen–Johansson), the superior pole (quadriceps tendon), and either side of the tendon (fat pad)"
    ],
    rangeOfMotion: [
      "Knee flexion and extension are usually full; loss of motion or an effusion suggests an alternative diagnosis",
      "Quadriceps, hamstring, gastrocnemius and soleus flexibility, plus ankle dorsiflexion. These measures did not predict outcome in the JUMPER cohort, so use them to guide treatment, not prognosis [r18]"
    ],
    strength: [
      "Isometric quadriceps strength (hand-held or fixed dynamometry) and pain during the contraction [r13]",
      "Calf-soleus capacity (single-leg heel raises) and hip extensor and abductor strength as kinetic chain measures [r1]",
      "Strength and flexibility tests did not predict or track the 24-week change in VISA-P, so do not use a single test to forecast outcome [r18]"
    ],
    neuro: [],
    functional: [
      "Single-leg decline squat: pain (0–10) and movement control [r13,r14]",
      "Vertical jump, drop jump and hop tasks: pain and landing mechanics (stiffness, symmetry) [r8]",
      "Pain after three maximal jumps has been used as a provocation measure [r18]",
      "Sport-specific tasks: approach jump, sprint-and-stop, change of direction"
    ],
    specialTests: [
      { name: "Palpation of the patellar tendon at the inferior pole", purpose: "Localise the tendon as the source of the patient's pain", procedure: "With the knee extended and the quadriceps relaxed, palpate the proximal tendon and inferior pole of the patella. Grade tenderness 0–3.", positive: "Moderate or severe tenderness that reproduces the familiar pain. Against ultrasound abnormality, the positive predictive value was 68% in symptomatic tendons but only 36–38% as a screening test in asymptomatic athletes.", refs: ["r16"] },
      { name: "Single-leg decline squat (SLDS)", purpose: "Reproduce load-related tendon pain and monitor change over time", procedure: "The patient stands on one leg on a decline board and squats to a comfortable depth. Rate pain on a 0–10 scale.", positive: "Reproduction of the familiar tendon pain at the inferior pole. Diagnostic accuracy was not established in the sources reviewed; it is used mainly as a provocation and outcome measure.", refs: ["r13", "r14"] },
      { name: "Hop or maximal jump provocation", purpose: "Test energy-storage loading, the activity that most often provokes pain", procedure: "Three maximal vertical jumps or a series of single-leg hops, then rate tendon pain 0–10.", positive: "Familiar pain at the inferior pole of the patella during or after the task. No accuracy data were identified.", refs: ["r18"] },
      { name: "Isometric resisted knee extension", purpose: "Check pain on a low-strain contraction and identify a tendon that can be loaded isometrically", procedure: "With the knee in mid-range flexion, ask for a sustained maximal isometric quadriceps contraction against a fixed resistance or dynamometer.", positive: "Pain on contraction is mild or absent in many patients, which supports isometric holds as an early loading option [r13]. A very painful contraction suggests high irritability or another diagnosis.", refs: ["r13"] }
    ],
    clinicalRules: [
      { name: "Two hallmark clinical features", description: "Localised pain at the inferior pole of the patella plus load-related pain that increases with knee-extensor demand, especially in energy-storage tasks, supports the diagnosis [r1]. No validated clinical prediction rule was identified in the sources reviewed." }
    ],
    outcomeMeasures: [
      { name: "VISA-P (Victorian Institute of Sport Assessment, patella)", use: "0–100 questionnaire of symptoms, function and sport participation, where 100 is asymptomatic. Test-retest and inter-tester reliability were above r = 0.95. Mean scores were 95 in asymptomatic controls and 55 in clinic patients with jumper's knee [r15]." },
      { name: "Single-leg decline squat pain (NRS 0–10)", use: "Pain-provocation outcome used as the primary measure in the in-season trials [r14]" },
      { name: "Return-to-sport rate and training participation", use: "Sport participation and return rate were secondary outcomes in the main RCT [r4]; keep a weekly jump-count and pain diary" },
      { name: "Isometric quadriceps strength and jump height", use: "Capacity measures to guide loading. They did not predict VISA-P change in the JUMPER cohort, so interpret alongside VISA-P [r18]" }
    ],
    imaging: [
      { modality: "Plain radiograph", indication: "Rarely needed. Use when a fracture, an inferior-pole avulsion or apophyseal injury in adolescents, calcification or a bone lesion is suspected", findings: "Usually normal in tendinopathy" },
      { modality: "Ultrasound", indication: "When the diagnosis is unclear, to exclude a partial tear, or before injection or surgery", findings: "Tendon thickening, hypoechoic areas and Doppler neovascularity at the proximal tendon. These also occur in asymptomatic jumpers [r12], although they raise the future risk about fourfold [r9]. Structure does not need to normalise for symptoms to improve [r11]." },
      { modality: "MRI", indication: "To exclude other causes of anterior knee pain, bone stress or a partial tear, or when surgery is being considered", findings: "Tendon thickening and increased signal. Interpret with the clinical picture, because structural findings do not map reliably onto symptoms [r3]." }
    ]
  },

  differentials: [
    { name: "Patellofemoral pain", id: "patellofemoral-pain", distinguishing: "Diffuse peri- or retropatellar pain, worse with stairs, squatting and prolonged sitting. The tendon is not focally tender at the inferior pole and there is no strict load-related pattern with energy-storage tasks." },
    { name: "Infrapatellar (Hoffa's) fat pad impingement", id: "hoffa-fat-pad-impingement", distinguishing: "Pain behind or beside the tendon, provoked by end-range knee extension; tenderness either side of the tendon. It can coexist with tendinopathy." },
    { name: "Sinding-Larsen–Johansson syndrome", id: "sinding-larsen-johansson", distinguishing: "Adolescent traction apophysitis at the inferior pole of the patella; consider this in the skeletally immature athlete." },
    { name: "Osgood–Schlatter disease", id: "osgood-schlatter", distinguishing: "Adolescent pain and a bony prominence at the tibial tuberosity, not the inferior pole of the patella." },
    { name: "Patellar tendon rupture or partial tear", id: "patellar-tendon-rupture", distinguishing: "Sudden pain with a pop or giving way, a palpable gap, a high-riding patella and inability to extend the knee against gravity. Often follows a previous corticosteroid injection or a sudden eccentric load." },
    { name: "Prepatellar or infrapatellar bursitis", id: "prepatellar-bursitis", distinguishing: "Superficial swelling over the front of the patella or tendon, often after kneeling; pain is not load-related in the same way." },
    { name: "Patellar stress fracture or fracture", id: "patella-fracture", distinguishing: "Focal bony tenderness, pain at rest or at night, or a history of trauma. Radiograph or MRI shows the fracture." },
    { name: "Quadriceps tendinopathy", distinguishing: "Tenderness and load-related pain at the superior pole of the patella, not the inferior pole." }
  ],
  redFlags: [
    "Sudden sharp pain with a pop, inability to perform a straight-leg raise or extend the knee against gravity, a palpable gap or a high-riding patella: suspect patellar tendon rupture. Refer for urgent orthopaedic review and imaging.",
    "Constant pain unrelated to load, night pain, or pain at rest, especially with unexplained weight loss, fever or a past history of cancer: suspect bone tumour, infection or a stress fracture. Arrange urgent imaging and medical review.",
    "A hot, red, swollen knee with fever or inability to bear weight: suspect septic arthritis or a fracture. Refer the same day for emergency assessment.",
    "A knee effusion, locking or giving way: this is not typical of tendinopathy. Look for an intra-articular cause (meniscal, ligament or cartilage injury) and arrange review.",
    "Symptoms after recent corticosteroid or fluoroquinolone use, or with bilateral enthesis pain, morning stiffness and systemic features: discuss with a doctor, because tendon rupture risk is raised and an inflammatory arthropathy needs excluding."
  ],

  management: {
    principles: "Treat patellar tendinopathy as a load-capacity problem. Educate the athlete, adjust (rather than stop) tendon load, and build capacity with a progressive tendon-loading program that moves from isometric work through heavy slow strength to energy-storage and sport-specific loading [r1,r4]. In-season athletes can keep playing while pain is managed with isometric or isotonic exercise [r14]. Make the plan with the athlete and set realistic timelines: gains take 12–24 weeks, and adherence was only 40–49% in the main trial, so review the plan at every visit [r4]. Consider shockwave, injection or surgery only after about 6 months of well-delivered loading has failed [r17]. The evidence for these options is mostly from small, low-quality trials with variable comparators [r17,r19].",
    medical: [
      { name: "Corticosteroid injection", description: "Gives short-term pain relief, but in an RCT symptoms returned by follow-up, and a systematic review found no benefit. Avoid injecting into or around a loaded tendon [r11,r17].", evidence: "limited", recommendation: "not-recommended", refs: ["r11", "r17"] },
      { name: "Platelet-rich plasma (PRP), with or without high-volume image-guided injection", description: "Delivered by a doctor after failed loading. In a network meta-analysis, leukocyte-poor PRP plus high-volume image-guided injection beat non-injection conservative care, mainly at about 6 months. A systematic review found widely varying results, and no injection has long-term evidence [r17,r19].", evidence: "limited", recommendation: "consider", refs: ["r17", "r19"] },
      { name: "Polidocanol (sclerosant) injection", description: "Showed a very large pooled VISA-P effect against non-injection care at about 6 months in a network meta-analysis. The result comes from a small number of trials and should be interpreted cautiously [r19].", evidence: "very-limited", recommendation: "consider", refs: ["r19"] },
      { name: "Surgery (open or arthroscopic debridement)", description: "For athletes who have failed at least about 6 months of conservative treatment. In a systematic review, VISA-P improved by 57% (95% CI 52–62%) after surgery in refractory patients, with similar outcomes for open and arthroscopic approaches. The data are uncontrolled [r17].", evidence: "limited", recommendation: "consider", refs: ["r17"] },
      { name: "Simple analgesia or short courses of topical or oral NSAIDs", description: "May ease pain enough to allow loading. Evidence that anti-inflammatory drugs alter the long-term course of the tendinopathy was not identified in the sources reviewed.", evidence: "expert-opinion", recommendation: "consider", refs: [] }
    ],
    physio: [
      { name: "Education and load management (not rest)", description: "Explain the load-capacity model. Reduce or redistribute jumping, sprinting and plyometric volume to what the tendon tolerates, and keep training the rest of the body. In-season, isometric or isotonic programs reduced pain without changing training or competition load [r1,r14].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r1", "r14"] },
      { name: "Progressive tendon-loading exercise therapy (isometric, then heavy slow strength, then energy storage, then sport)", description: "Staged, criteria-based loading of the whole kinetic chain. In an investigator-blinded RCT of 76 athletes, VISA-P improved 28 points with progressive loading versus 18 with eccentric exercise at 24 weeks (adjusted difference 9 points, 95% CI 1–16) [r4].", evidence: "moderate", recommendation: "recommended", refs: ["r4", "r20", "r11"] },
      { name: "Heavy slow resistance (HSR) training", description: "Isotonic strength work with a slow tempo (see stage 2). In an RCT it improved symptoms in the short and long term, accompanied by reduced swelling and neovascularisation, higher collagen turnover and the highest satisfaction at half-year follow-up [r11,r10]. A systematic review found greater evidence for HSR than for eccentric loading in the patellar tendon [r20].", evidence: "moderate", recommendation: "recommended", refs: ["r11", "r10", "r20"] },
      { name: "Isometric (and isotonic) holds for in-season pain relief", description: "A single bout of isometric holds reduced decline-squat pain from 7.0 to 0.2 in six volleyball players, more than isotonic contractions [r13]. In a 4-week in-season RCT (n = 29), both isometric and isotonic programs reduced pain, with no significant difference between them [r14].", evidence: "limited", recommendation: "consider", refs: ["r13", "r14"] },
      { name: "Eccentric decline-squat exercise", description: "Improved VISA-P in a systematic review, but evidence that eccentric loading is superior to other loading was conflicting, and progressive loading outperformed eccentric-only exercise in the main RCT [r17,r20,r4].", evidence: "conflicting", recommendation: "consider", refs: ["r17", "r20", "r4"] },
      { name: "Kinetic chain strengthening and landing retraining", description: "Address calf-soleus, hip and trunk capacity and a stiff landing strategy. This is plausible and widely recommended, but trial evidence that it changes outcomes was not identified [r1,r8].", evidence: "expert-opinion", recommendation: "consider", refs: ["r1", "r8"] },
      { name: "Extracorporeal shockwave therapy (ESWT)", description: "Considered after about 6 months of failed loading, as an adjunct to exercise. Reported VISA-P improvement was 54% (95% CI 22–87%), which varies widely across studies [r17].", evidence: "limited", recommendation: "consider", refs: ["r17"] },
      { name: "Ultrasound-guided dry needling", description: "Multiple dry-needling sessions reduced pain compared with no injection at about 6 months in a network meta-analysis of small trials. Long-term benefit is unproven [r19].", evidence: "very-limited", recommendation: "consider", refs: ["r19"] },
      { name: "Passive modalities alone (therapeutic ultrasound, laser, massage, taping, ice)", description: "Overreliance on passive treatment is a recognised pitfall. Use passive treatment only to make loading possible, not instead of it [r1].", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r1"] },
      { name: "Complete rest or prolonged load avoidance", description: "Rest unloads the tendon but does not build capacity. Athletes improved while continuing to train and play with isometric or isotonic exercise [r14].", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r14"] }
    ],
    education: [
      "Tendon pain means the load has exceeded what the tendon can currently tolerate. The tendon is not torn, and its capacity can be rebuilt with progressive loading.",
      "Expect improvement over 12–24 weeks, not days. Gains are slow but come from consistent loading, so keep the plan going even when you feel better.",
      "A scan that looks abnormal does not mean the tendon is damaged beyond repair. Abnormal tendons are common in people without pain, and pain can improve without the scan changing.",
      "Some pain during exercise is acceptable if it settles within 24 hours. Pain that is clearly worse the next day means the load was too high.",
      "Keep training: reduce jumps and sprints to a tolerable level instead of stopping completely, and avoid sudden jumps in volume.",
      "A cortisone injection can give brief relief but made long-term results worse in the research, so it is not advised for this tendon."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and follows the load-capacity model: settle the tendon with isometric work and load management, build strength with heavy slow resistance, then restore energy-storage capacity with plyometrics, then rebuild sport-specific exposure. Move to the next stage when the objective criteria are met, not when a set number of weeks has passed [r1,r4]. Stage timeframes are typical, and an irritable or long-standing tendon will take longer. Dosages are typical clinical ranges drawn from the trial protocols cited and from clinical practice, not prescriptions from a single source. As a working rule, tendon pain during exercise should stay at or below about 4/10 and settle within 24 hours (clinical convention). Review adherence at every visit, because it was only 40–49% at 24 weeks in the main RCT [r4].",
    stages: [
      {
        name: "Settle pain & start isometric loading",
        timeframe: "Weeks 0–2 (or until irritability settles)",
        goals: ["Reduce load-related pain and calm the tendon", "Keep the quadriceps active and prevent deconditioning", "Remove load spikes while keeping the athlete training", "Educate on the load-capacity model"],
        precautions: ["Do not rest completely; adjust jump and sprint volume instead [r14]", "Avoid corticosteroid injection [r11]", "Keep pain during holds at or below about 4/10 and settled within 24 hours (clinical convention)"],
        exercises: [
          { name: "Isometric knee extension hold (mid-range)", dosage: "5 × 30–45 s at about 70% of maximal effort, 2 min rest, once or twice daily", cues: "Push steadily, do not jerk, and breathe normally. Pain should fall during the set.", figure: { pose: "ex-knee-extension", view: "lateral", props: ["chair"] } },
          { name: "Wall sit (isometric squat)", dosage: "4–5 × 30–45 s, 2 min rest, daily", cues: "Shins vertical, weight through the whole foot", figure: { pose: "ex-wall-sit", view: "lateral", props: ["wall"] } },
          { name: "Double-leg calf raise (slow)", dosage: "3 × 15, 3 s up and 3 s down, daily", cues: "Pause at the top", figure: { pose: "ex-calf-raise", view: "lateral" } },
          { name: "Glute bridge", dosage: "3 × 12–15, daily", cues: "Drive through the heels and keep the ribs down", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Low-impact conditioning (cycling or pool)", dosage: "20–30 min, 3 times per week, below the pain threshold", cues: "Maintain fitness without jumping load" }
        ],
        progressionCriteria: ["Pain during isometric holds at or below 3/10", "Single-leg decline squat pain no worse than the previous week and settles within 24 hours", "Able to complete the full isometric set (5 × 45 s) without a pain flare"]
      },
      {
        name: "Heavy slow strength",
        timeframe: "Weeks 2–12",
        goals: ["Build quadriceps and kinetic chain strength", "Raise the tendon's capacity to tolerate load", "Restore normal squat, stair and step-down function", "Maintain sport fitness and technique without jumping flares"],
        precautions: ["Progress load only when the previous session settles within 24 hours", "Keep jump and sprint volume low but non-zero", "Slow tempo: the goal is high load, not speed [r11]"],
        exercises: [
          { name: "Leg press or squat (heavy slow resistance)", dosage: "3–4 sets, starting at about 15 repetitions and progressing to about 6 repetitions with heavier load across 12 weeks; 3 s up, 3 s down; 3 times per week", cues: "Slow and controlled; stay in a comfortable range", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Seated knee extension (isotonic)", dosage: "3 × 8–12, 3 s up and 3 s down, 2–3 times per week", cues: "Smooth tempo with no bounce", figure: { pose: "ex-knee-extension", view: "lateral", props: ["chair"] } },
          { name: "Split squat", dosage: "3 × 8–10 each leg, 3 s lowering", cues: "Torso upright, front knee tracking over the second toe", figure: { pose: "ex-split-squat", view: "lateral", props: ["dumbbell"] } },
          { name: "Romanian deadlift", dosage: "3 × 8–10", cues: "Hinge at the hips with a long spine", figure: { pose: "ex-rdl", view: "lateral", props: ["dumbbell"] } },
          { name: "Single-leg calf raise", dosage: "3 × 10–12, 3 s up and 3 s down", cues: "Full range with a pause at the top", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } }
        ],
        progressionCriteria: ["Pain on single-leg decline squat at or below 3/10 and falling", "Heavy-phase loads completed with good control and no next-day flare", "Isometric quadriceps strength improving toward the other leg (limb symmetry index about 90%)", "Daily activities, stairs and squatting are pain-free or mild"]
      },
      {
        name: "Energy storage & plyometric loading",
        timeframe: "Weeks 10–20",
        goals: ["Restore the tendon's spring-like function", "Tolerate bilateral then single-leg jumping and landing", "Improve landing mechanics (soft landing, hip and knee flexion)", "Maintain heavy strength 2 times per week"],
        precautions: ["Add jump volume gradually and leave at least 48 h between plyometric sessions", "Stop progressing if pain is higher the next day", "Keep heavy strength work going alongside jumping"],
        exercises: [
          { name: "Step-up and controlled step-down", dosage: "3 × 8–10 each leg, 3 s lowering", cues: "Control the knee and keep the pelvis level", figure: { pose: "ex-step-down", view: "anterior", props: ["step"] } },
          { name: "Single-leg squat", dosage: "3 × 8 each leg", cues: "Hip back, knee over the foot", figure: { pose: "ex-single-leg-squat", view: "anterior" } },
          { name: "Jump squat", dosage: "3 × 5–8, 2 min rest, 2 times per week", cues: "Land softly with hips and knees bent", figure: { pose: "ex-jump-squat", view: "lateral" } },
          { name: "Single-leg hop progressions (vertical, then forward)", dosage: "3 × 5 each leg, building to 3 × 10", cues: "Quiet landing, stick for 2 s", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Drop landing then rebound jump", dosage: "3 × 5, from a low box", cues: "Soft landing, then spring straight up", figure: { pose: "jump-land", view: "lateral", props: ["plyo-box"] } },
          { name: "Heavy strength maintenance (squat, split squat)", dosage: "2 times per week, 3–4 × 6–8", cues: "Keep the slow tempo" }
        ],
        progressionCriteria: ["Pain at or below 2/10 during hops and landings", "Tolerates 3 × 10 single-leg hops on each side with no next-day flare", "Strength (isometric or isotonic) about 90% of the other leg, or of pre-injury values", "VISA-P clearly improved from baseline and still rising"]
      },
      {
        name: "Return to sport",
        timeframe: "Weeks 16–24+ (criteria-based)",
        goals: ["Sport-specific jumping, sprinting and change of direction", "Graded return to training, then competition", "Hold the load-capacity balance as training volume rises", "Long-term strength and load-monitoring plan"],
        precautions: ["Increase jump and sprint volume stepwise, tracking weekly jump count and next-day pain", "Do not return to full competition while pain is above 2/10 or flares the next day", "Avoid sudden load spikes after returning, such as tournaments or training camps"],
        exercises: [
          { name: "Planned then reactive change-of-direction drills", dosage: "2–3 sessions per week, progressing speed and angle", cues: "Lower the centre of mass and keep the knee over the foot", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Sport-specific jump drills (approach jumps, rebounds, spikes)", dosage: "Start at a fraction of usual jump volume and build in steps of roughly 10–20% per week (clinical convention)", cues: "Quality landings; stop the session if landings turn stiff" },
          { name: "Graded team training", dosage: "Partial then full training over 2–4 weeks", cues: "Coordinate with coach and athlete; log jumps and pain" },
          { name: "Heavy strength maintenance", dosage: "2 times per week, 3–5 × 3–8, all year", cues: "Keep the loads heavy and the tempo controlled", figure: { pose: "ex-squat", view: "lateral" } }
        ],
        progressionCriteria: ["Completes full team training for at least 2 weeks with pain at or below 2/10 and no next-day flare", "VISA-P near the uninjured reference range [r15]", "Strength and hop symmetry about 90% or more", "Athlete confidence and agreement with coach and clinician"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated, tendinopathy-specific return-to-sport (RTS) criteria were identified in the sources reviewed; the criteria below reflect clinical convention and trial design",
      "Pain on single-leg decline squat and hop at or below 2/10, with no next-day flare after a loaded session",
      "VISA-P approaching the uninjured reference range (mean 95 in asymptomatic controls) [r15]. Rises of 20–30 points are realistic over 24 weeks [r4,r18]",
      "Quadriceps, calf and hip strength about 90% of the other leg or of pre-injury values (clinical convention)",
      "Tolerates at least 2 weeks of progressively increasing jump, sprint and change-of-direction volume at near-full training load without a rise in pain",
      "Completes full team training without symptom increase, and has agreed a maintenance strength and load-monitoring plan"
    ],
    tests: ["Single-leg decline squat pain (0–10) and control", "VISA-P questionnaire", "Isometric or isotonic quadriceps and calf strength (note: physical test scores did not predict outcome alone [r18])", "Hop and vertical jump tests with pain rating", "Weekly jump-count and next-day pain log during graded exposure"]
  },
  prognosis: "Patellar tendinopathy is often persistent. Elite athletes with jumper's knee had symptoms for a mean of 32 months and a VISA score of 64 [r5]; non-elite athletes had a mean duration of 18.9 months and VISA-P of 71.4 [r6]. A longer symptom duration predicted poorer outcomes, with about a 0.9% decrease in improvement for each additional month of symptoms [r17]. With exercise therapy in a mostly chronic cohort, VISA-P rose by a mean of 23 points over 24 weeks, and baseline physical tests did not predict outcome [r18]. In the main RCT the gains were 28 points with progressive loading and 18 with eccentric exercise, and fewer than half of participants had returned to sport [r4]. Long-term recurrence rates were not identified in the sources reviewed; ongoing strength and load management are the practical protection.",
  prevention: [
    "Manage cumulative tendon load: build jumping and sprinting volume progressively, and avoid sudden spikes after breaks or at pre-season. Total load matters more than any single sports variable [r7,r2].",
    "Maintain lower-limb strength all year, including calf-soleus and hip extensor capacity (expert opinion; no trial-proven prevention program was identified) [r1].",
    "Coach a soft, shock-absorbing landing. A stiffer landing was linked to jumper's knee, but whether retraining prevents it is unproven [r8].",
    "Act early on load-related tendon pain by adjusting load and starting isometric or isotonic exercise, since a longer symptom duration predicts poorer outcomes [r17,r14].",
    "Ultrasound screening of asymptomatic athletes identifies those at higher risk (RR about 4), but other factors beyond tissue structure are involved, and the benefit of screening-guided programs is unproven [r9]."
  ],
  clinicalPearls: [
    "Diagnose by pain location and load behaviour, not by the scan. Hypoechoic areas appear in 19–29% of asymptomatic college jumpers, and tendon structure need not normalise for symptoms to improve [r12,r11].",
    "Tenderness alone is not diagnostic: positive predictive value was 68% even in symptomatic tendons, and mild tenderness in asymptomatic jumpers is normal. Pair palpation with a load-provocation task such as the single-leg decline squat [r16].",
    "Isometric holds are a useful in-season analgesic (decline-squat pain fell from 7.0 to 0.2 after one bout in six volleyball players), but they do not rebuild capacity. Progress to heavy slow resistance [r13,r14].",
    "Do not rely on eccentric decline squats alone: progressive tendon loading beat eccentric exercise by 9 VISA-P points (95% CI 1–16) at 24 weeks, and there is little evidence that isolating the eccentric phase is necessary [r4,r20].",
    "Treat early: each additional month of symptoms was linked to about 0.9% less improvement. Avoid corticosteroid injections, which gave short-term relief but poorer long-term results [r17,r11].",
    "Do not promise that strength or jump tests will tell you when an athlete is ready. They did not predict or track VISA-P change in the JUMPER cohort, so combine VISA-P, pain response to loading and tolerance of graded sport exposure [r18]."
  ],
  related: ["patellofemoral-pain", "hoffa-fat-pad-impingement", "sinding-larsen-johansson", "osgood-schlatter", "patellar-tendon-rupture", "midportion-achilles-tendinopathy"],

  references: [
    { id: "r1", citation: "Malliaras P, Cook J, Purdam C, et al. Patellar tendinopathy: clinical diagnosis, load management, and advice for challenging case presentations. J Orthop Sports Phys Ther. 2015;45(11):887-98.", pmid: "26390269", doi: "10.2519/jospt.2015.5987", type: "narrative-review", year: 2015 },
    { id: "r2", citation: "Cook JL, Purdam CR. Is tendon pathology a continuum? A pathology model to explain the clinical presentation of load-induced tendinopathy. Br J Sports Med. 2009;43(6):409-16.", pmid: "18812414", doi: "10.1136/bjsm.2008.051193", type: "narrative-review", year: 2009 },
    { id: "r3", citation: "Cook JL, Rio E, Purdam CR, et al. Revisiting the continuum model of tendon pathology: what is its merit in clinical practice and research? Br J Sports Med. 2016;50(19):1187-91.", pmid: "27127294", doi: "10.1136/bjsports-2015-095422", type: "narrative-review", year: 2016 },
    { id: "r4", citation: "Breda SJ, Oei EHG, Zwerver J, et al. Effectiveness of progressive tendon-loading exercise therapy in patients with patellar tendinopathy: a randomised clinical trial. Br J Sports Med. 2021;55(9):501-9.", pmid: "33219115", doi: "10.1136/bjsports-2020-103403", type: "rct", year: 2021 },
    { id: "r5", citation: "Lian OB, Engebretsen L, Bahr R. Prevalence of jumper's knee among elite athletes from different sports: a cross-sectional study. Am J Sports Med. 2005;33(4):561-7.", pmid: "15722279", doi: "10.1177/0363546504270454", type: "cross-sectional", year: 2005 },
    { id: "r6", citation: "Zwerver J, Bredeweg SW, van den Akker-Scheek I. Prevalence of jumper's knee among nonelite athletes from different sports: a cross-sectional survey. Am J Sports Med. 2011;39(9):1984-8.", pmid: "21737835", doi: "10.1177/0363546511413370", type: "cross-sectional", year: 2011 },
    { id: "r7", citation: "de Vries AJ, van der Worp H, Diercks RL, et al. Risk factors for patellar tendinopathy in volleyball and basketball players: a survey-based prospective cohort study. Scand J Med Sci Sports. 2015;25(5):678-84.", pmid: "25091500", doi: "10.1111/sms.12294", type: "cohort", year: 2015 },
    { id: "r8", citation: "Bisseling RW, Hof AL, Bredeweg SW, et al. Relationship between landing strategy and patellar tendinopathy in volleyball. Br J Sports Med. 2007;41(7):e8.", pmid: "17224437", doi: "10.1136/bjsm.2006.032565", type: "case-control", year: 2007 },
    { id: "r9", citation: "McAuliffe S, McCreesh K, Culloty F, et al. Can ultrasound imaging predict the development of Achilles and patellar tendinopathy? A systematic review and meta-analysis. Br J Sports Med. 2016;50(24):1516-23.", pmid: "27633025", doi: "10.1136/bjsports-2016-096288", type: "meta-analysis", year: 2016 },
    { id: "r10", citation: "Kongsgaard M, Qvortrup K, Larsen J, et al. Fibril morphology and tendon mechanical properties in patellar tendinopathy: effects of heavy slow resistance training. Am J Sports Med. 2010;38(4):749-56.", pmid: "20154324", doi: "10.1177/0363546509350915", type: "cohort", year: 2010 },
    { id: "r11", citation: "Kongsgaard M, Kovanen V, Aagaard P, et al. Corticosteroid injections, eccentric decline squat training and heavy slow resistance training in patellar tendinopathy. Scand J Med Sci Sports. 2009;19(6):790-802.", pmid: "19793213", doi: "10.1111/j.1600-0838.2009.00949.x", type: "rct", year: 2009 },
    { id: "r12", citation: "Fazekas ML, Sugimoto D, Cianci A, et al. Ultrasound examination and patellar tendinopathy scores in asymptomatic college jumpers. Phys Sportsmed. 2018;46(4):477-84.", pmid: "30122090", doi: "10.1080/00913847.2018.1513756", type: "cross-sectional", year: 2018 },
    { id: "r13", citation: "Rio E, Kidgell D, Purdam C, et al. Isometric exercise induces analgesia and reduces inhibition in patellar tendinopathy. Br J Sports Med. 2015;49(19):1277-83.", pmid: "25979840", doi: "10.1136/bjsports-2014-094386", type: "rct", year: 2015 },
    { id: "r14", citation: "van Ark M, Cook JL, Docking SI, et al. Do isometric and isotonic exercise programs reduce pain in athletes with patellar tendinopathy in-season? A randomised clinical trial. J Sci Med Sport. 2016;19(9):702-6.", pmid: "26707957", doi: "10.1016/j.jsams.2015.11.006", type: "rct", year: 2016 },
    { id: "r15", citation: "Visentini PJ, Khan KM, Cook JL, et al. The VISA score: an index of severity of symptoms in patients with jumper's knee (patellar tendinosis). J Sci Med Sport. 1998;1(1):22-8.", pmid: "9732118", doi: "10.1016/s1440-2440(98)80005-4", type: "cohort", year: 1998 },
    { id: "r16", citation: "Cook JL, Khan KM, Kiss ZS, et al. Reproducibility and clinical utility of tendon palpation to detect patellar tendinopathy in young basketball players. Br J Sports Med. 2001;35(1):65-9.", pmid: "11157466", doi: "10.1136/bjsm.35.1.65", type: "diagnostic-accuracy", year: 2001 },
    { id: "r17", citation: "Everhart JS, Cole D, Sojka JH, et al. Treatment options for patellar tendinopathy: a systematic review. Arthroscopy. 2017;33(4):861-72.", pmid: "28110807", doi: "10.1016/j.arthro.2016.11.007", type: "systematic-review", year: 2017 },
    { id: "r18", citation: "Deng J, Breda SJ, Eygendaal D, et al. Association between physical tests and patient-reported outcomes in athletes performing exercise therapy for patellar tendinopathy: a secondary analysis of the JUMPER study. Am J Sports Med. 2023;51(13):3523-32.", pmid: "37815096", doi: "10.1177/03635465231200241", type: "rct", year: 2023 },
    { id: "r19", citation: "Wang S, Lyu B. Effectiveness of injection strategies on patients with patellar tendonitis (jumpers' knee): a network meta-analysis of randomized controlled trials. Sports Health. 2025;17(3):556-63.", pmid: "39101544", doi: "10.1177/19417381241263338", type: "meta-analysis", year: 2025 },
    { id: "r20", citation: "Malliaras P, Barton CJ, Reeves ND, et al. Achilles and patellar tendinopathy loading programmes: a systematic review comparing clinical outcomes and identifying potential mechanisms for effectiveness. Sports Med. 2013;43(4):267-86.", pmid: "23494258", doi: "10.1007/s40279-013-0019-z", type: "systematic-review", year: 2013 }
  ],

  animation: {
    title: "How patellar tendinopathy develops",
    phases: [
      {
        type: "moi", label: "Repeated loading", duration: 7, view: "lateral", environment: "court",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "stand", root: { x: 0 } },
          { t: 0.8, pose: "squat", root: { x: 0 } },
          { t: 1.4, pose: "jump-takeoff", root: { x: 0 }, ease: "out" },
          { t: 2.0, pose: "jump-flight", root: { x: 0, lift: 40 } },
          { t: 2.8, pose: "jump-land", root: { x: 0, lift: 0 }, ease: "in" },
          { t: 3.5, pose: "squat", root: { x: 0 } },
          { t: 4.1, pose: "jump-takeoff", root: { x: 0 }, ease: "out" },
          { t: 4.7, pose: "jump-flight", root: { x: 0, lift: 45 } },
          { t: 5.5, pose: "jump-land", root: { x: 0, lift: 0 }, ease: "in" },
          { t: 6.3, pose: "squat", root: { x: 0 } }
        ],
        props: [{ id: "ball", type: "ball-basketball", attach: "handL" }],
        forces: [
          { t: [1.4, 2.0], at: "footR", dir: "down", label: "Push-off: stored energy released" },
          { t: [2.8, 3.7], at: "kneeR", dir: "up", label: "Quadriceps pull stretches the tendon" },
          { t: [2.8, 3.4], at: "footR", dir: "up", label: "Landing force" },
          { t: [5.5, 6.6], at: "kneeR", dir: "up", label: "Repeated load, jump after jump" }
        ],
        highlights: [{ t: [2.6, 7], at: "kneeR" }],
        slowmo: [{ t: [2.7, 3.7], rate: 0.4 }],
        captions: [
          { t: 0, text: "A basketball player jumps again and again in training. Every landing loads the patellar tendon." },
          { t: 1.2, text: "In take-off and landing, the quadriceps and patellar tendon work like a spring: they store and release energy." },
          { t: 2.9, text: "On landing the quadriceps brakes the fall, and the tendon lengthens under high tensile load." },
          { t: 4.0, text: "Healthy tendons adapt when load builds gradually and recovery is long enough." },
          { t: 5.0, text: "When jump volume rises faster than the tendon's capacity, or recovery is short, load exceeds capacity." },
          { t: 6.0, text: "Repeated overload makes the tendon painful at the base of the kneecap, with no single injury moment." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "kneeR",
        captions: [{ t: 0, text: "Zooming into the right knee from the side." }]
      },
      {
        type: "closeup", label: "Inside the knee", duration: 10, scene: "knee-sagittal",
        actions: [
          { t: 0, do: "highlight", target: "patellarTendon" },
          { t: 0.3, do: "label", target: "patellarTendon", text: "Patellar tendon: stores and releases energy" },
          { t: 1.0, do: "arrow", at: "quadricepsTendonInsertion", dir: "superior", label: "Quadriceps pull" },
          { t: 1.0, do: "arrow", at: "tibialTuberosity", dir: "inferior", label: "Tibial anchor" },
          { t: 1.1, do: "stretch", target: "patellarTendon", amount: 0.3, dur: 1.0 },
          { t: 2.5, do: "reset", target: "patellarTendon" },
          { t: 3.3, do: "stretch", target: "patellarTendon", amount: 0.35, dur: 0.9 },
          { t: 4.3, do: "thicken", target: "patellarTendon", amount: 0.5, dur: 1.4 },
          { t: 4.6, do: "pain", at: "patellarTendonProximal", hold: 3 },
          { t: 5.8, do: "degenerate", target: "patellarTendon", at: "patellarTendonProximal", dur: 1.6 },
          { t: 6.2, do: "label", target: "patellarTendon", text: "Thickened, disorganised proximal tendon (tendinopathy)" },
          { t: 7.3, do: "camera", at: "patellarTendonProximal", zoom: 1.7, dur: 1.0 },
          { t: 9.2, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "The patellar tendon links the inferior pole of the patella to the tibial tuberosity." },
          { t: 1.0, text: "On landing the quadriceps pulls up while the tibia pulls down, so the tendon lengthens and stores energy." },
          { t: 2.5, text: "At take-off it recoils and gives the energy back, like a spring." },
          { t: 3.3, text: "With repeated loading beyond its capacity, the tendon swells and load-related pain appears." },
          { t: 4.8, text: "Pain and pathology cluster in the proximal tendon, just below the inferior pole of the patella." },
          { t: 5.9, text: "The collagen becomes disorganised and thick, with extra vessels. The tendon degenerates; it does not tear." },
          { t: 7.4, text: "Scans show the change, but structure and pain do not always match, so diagnosis stays clinical." }
        ]
      },
      {
        type: "micro", label: "Tendon continuum", duration: 10, tissue: "tendon-continuum",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.6, stage: "reactive" }, { t: 3.4, stage: "disrepair" },
          { t: 5.2, stage: "degenerative" }, { t: 7.2, stage: "load-adaptation" }
        ],
        timeLabels: [{ t: 1.6, text: "Days to weeks" }, { t: 3.4, text: "Weeks to months" }, { t: 5.2, text: "Months to years" }, { t: 7.2, text: "12–24 weeks of loading" }],
        captions: [
          { t: 0, text: "Healthy tendon: tightly packed, aligned type I collagen with a few resident tenocytes." },
          { t: 1.6, text: "Reactive: after a load spike, tenocytes activate and the matrix swells. This can reverse." },
          { t: 3.4, text: "Disrepair: cells try to repair the tendon, the collagen becomes disorganised and new vessels appear." },
          { t: 5.2, text: "Degenerative: areas of cell death and disorganised matrix remain, with limited capacity to reverse." },
          { t: 7.2, text: "Progressive loading builds capacity: collagen turnover rises, and pain settles as the tendon adapts." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL6" }
};
