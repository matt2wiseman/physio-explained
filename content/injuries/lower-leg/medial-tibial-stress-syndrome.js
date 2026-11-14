export default {
  id: "medial-tibial-stress-syndrome",
  name: "Medial tibial stress syndrome (shin splints)",
  shortName: "MTSS (shin splints)",
  aka: ["shin splints", "MTSS", "medial tibial pain", "tibial stress syndrome", "exercise-induced leg pain", "medial shin pain", "tibial periostitis"],
  region: "lower-leg",
  tissues: ["bone", "fascia"],
  onset: "gradual",
  mechanismType: ["overuse"],
  populations: ["runners", "novice runners", "military recruits", "female athletes"],
  sports: ["running", "athletics", "soccer", "australian football", "basketball", "dance", "military training"],
  urgency: "routine",
  summary: "Exercise-related pain along the distal posteromedial tibial border, tender over 5 cm or more. The pathology is uncertain and sits on a bone stress continuum; load management is the first-line approach.",
  keyFacts: [
    { label: "Typical recovery", value: "Months. In one athlete study a graded running program alone took a mean of about 92 days to reach 18 min of pain-free running" },
    { label: "Return to sport", value: "Criteria-based: no border tenderness, pain-free walking, then a graded run progression. No validated MTSS-specific criteria exist" },
    { label: "Key test", value: "Diffuse tenderness over at least 5 cm of the posteromedial tibial border. Two clinicians agreed on the diagnosis (kappa 0.89)" },
    { label: "Imaging", value: "Not needed to diagnose. MRI oedema was present in only 43.5% of symptomatic legs; use MRI to exclude a stress fracture" },
    { label: "Incidence", value: "4–35% of athletes and military personnel; 5–35% of runners" },
    { label: "Treatment evidence", value: "No single treatment is supported by trials free of high risk of bias" }
  ],
  overview: "Medial tibial stress syndrome (MTSS), widely called shin splints, is exercise-induced pain along the posteromedial border of the tibia, with tenderness on palpation over a length of at least 5 cm [r1]. It is one of the most common leg injuries in runners and military personnel [r1,r2].\n\nThe exact pathology is uncertain. Histology does not support the traditional idea of periostitis from traction. The leading view is that bone resorption outpaces bone formation in the tibial cortex, which places MTSS on a bone stress continuum running from periosteal reaction, through marrow involvement, to a cortical stress fracture [r1,r3]. The soleus, flexor digitorum longus and deep crural fascia attach at the symptomatic site, so fascial traction may still add to the load on the bone [r4]. The diagnosis is clinical, and two clinicians reached the same diagnosis from history and examination in 96% of athletes [r5].\n\nTreatment evidence is weak. The trials available to a 2013 systematic review were at high risk of bias, and none was good enough to recommend a specific treatment [r2]. In a randomised trial in athletes, adding calf exercises or compression stockings to a graded running program made no difference to the time taken to complete the program [r6]. In practice, care rests on load management, a graded return to running and correction of contributing factors.",

  epidemiology: {
    text: "MTSS is reported in 4–35% of military personnel and athletes [r1] and in 5–35% of runners [r7]. In a meta-analysis of risk factors in runners, the factors significantly associated with MTSS were female sex (RR 1.71, 95% CI 1.15–2.54), previous MTSS (RR 3.74, 95% CI 1.17–11.91), fewer years of running experience, higher body mass index, greater navicular drop, prior orthotic use (RR 2.31, 95% CI 1.56–3.43) and, in males, greater hip external rotation [r7]. Risk factors differ between men and women, so mixed-sex samples need cautious interpretation [r7]. These are associations; they do not show that correcting a factor prevents MTSS.",
    riskFactors: {
      intrinsic: [
        "Female sex (RR 1.71 in a meta-analysis of runners) [r7]",
        "Previous history of MTSS (RR 3.74) [r7]",
        "Higher body mass index: a small association with onset (SMD 0.24) [r7] and a longer time to full recovery in a small cohort [r8]",
        "Greater navicular drop, a marker of foot pronation (SMD 0.26; navicular drop over 10 mm RR 1.99, 95% CI 1.00–3.96) [r7]",
        "Hip rotation range: greater external rotation in males [r7]; reduced hip internal rotation and greater ankle plantarflexion in a small cohort [r8]",
        "Lower regional bone mineral density at the painful tibial site in athletes with long-standing MTSS (an association; cause or effect is unclear) [r9]"
      ],
      extrinsic: [
        "Fewer years of running experience (SMD −0.74) [r7]",
        "Sudden increases in running volume or intensity: the load applied to bone is more amenable to change than bone strength, mainly through training-program design (modifiable) [r10]",
        "Occupations and sports with high running volumes, such as military training and distance running [r1]",
        "Prior orthotic use (RR 2.31), which may reflect earlier symptoms rather than a cause [r7]"
      ]
    }
  },

  mechanism: {
    summary: "MTSS has no single injury moment. It develops over weeks of repetitive running or jumping load on the distal posteromedial tibia. Each foot strike sends an impact load up the tibia [r11], and the calf muscles then work through stance and push-off while the shaft bends under the combined ground reaction and muscle forces. The soleus, flexor digitorum longus and deep crural fascia attach along the symptomatic border, so fascial traction may add to the bone load [r4]. When load repeatedly outpaces remodelling, bone resorption exceeds formation in the cortex [r1].",
    sequence: [
      "Running load rises faster than the tibia can adapt, for example a sudden increase in volume, intensity, or hill and speed work [r10].",
      "At each foot contact the ground reaction force sends a rapid impact load up the tibia. Higher tibial acceleration and vertical loading rates are the loading features linked with tibial stress fracture [r11].",
      "Through midstance and push-off the soleus and other calf muscles contract, and the tibial shaft bends under the combined ground reaction and muscle forces.",
      "The soleus, flexor digitorum longus and deep crural fascia attach along the distal posteromedial border, so calf contraction may also pull on the fascia–bone interface (a proposed contributor, not proven) [r4]. Histology does not support traction periostitis [r1].",
      "Microdamage accumulates in the cortex and resorption outpaces new bone formation. Bone density at the painful site is lower in athletes with long-standing MTSS [r1,r9].",
      "The periosteum and bone become sensitive to load, so pain appears with running and eases with rest. MRI may show periosteal or marrow oedema, but only 43.5% of symptomatic legs did in a prospective cohort [r3,r12].",
      "If loading continues without recovery, the injury can progress along the bone stress continuum towards a cortical stress fracture [r3,r10]."
    ],
    variants: [
      { name: "Early end of the bone stress continuum", description: "MRI work suggests a progression from periosteal oedema to marrow involvement to a frank cortical fracture, so MTSS may represent the mild end of a spectrum. Pain on daily walking, focal tenderness and pain on percussion were linked with the more severe tibial lesions [r3,r10]." },
      { name: "Fascial traction hypothesis", description: "Cadaver dissection found the soleus, flexor digitorum longus and deep crural fascia attached at the symptomatic border. Tibialis posterior did not attach there in any specimen, which argues against the older tibialis posterior traction explanation [r4]. Histology has not confirmed a traction periostitis [r1]." },
      { name: "Overlap with deep posterior compartment syndrome", description: "MTSS and deep posterior chronic exertional compartment syndrome share much of their symptom pattern and are difficult to separate clinically [r13]. Concurrent lower leg injuries were found in 32% of athletes with MTSS in one reliability study [r5]." },
      { name: "Recurrent MTSS", description: "A previous episode carried a 3.74-fold risk of developing MTSS again, which suggests that the loading or capacity problem often persists after symptoms settle [r7]." }
    ]
  },

  anatomy: {
    text: "The symptomatic site is the posteromedial border of the tibia, the edge where the subcutaneous medial surface meets the posterior surface, usually the distal part of the shaft. A dissection of the legs of 50 cadavers measured the origins of soleus, flexor digitorum longus, tibialis posterior and the deep crural fascia: the soleus, flexor digitorum longus and deep crural fascia attached most often at the site where MTSS symptoms occur, whereas tibialis posterior was not found attached there in any specimen [r4]. The deep posterior compartment lies behind this border, which explains some of the clinical overlap with deep posterior compartment syndrome [r13].",
    structures: [
      { name: "Tibial cortex (posteromedial border)", role: "Load-bearing cortical bone of the distal shaft; remodels in response to repeated bending and impact load [r1]" },
      { name: "Periosteum", role: "Sleeve of the tibial surface that carries the nerve supply and the fibrous attachments; the site of the oedema seen on MRI [r3]" },
      { name: "Soleus", role: "Plantarflexes the ankle and controls the tibia in stance; its fascia attaches along the medial border [r4]" },
      { name: "Flexor digitorum longus", role: "Deep posterior compartment muscle; attaches to the distal medial tibial border [r4]" },
      { name: "Deep crural fascia", role: "Fascial sheet enclosing the compartments; attaches to the posteromedial border [r4]" },
      { name: "Tibialis posterior", role: "Deep posterior compartment muscle that supports the medial arch; it did not attach at the MTSS site in a cadaver series [r4]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "The best-supported explanation is a bone overload injury. A critical review concluded that histological studies do not support periostitis from traction, and that MTSS reflects bony resorption outpacing bone formation in the tibial cortex, with supporting changes on bone scan, MRI, high-resolution CT and dual-energy x-ray absorptiometry [r1]. In 18 male athletes with long-standing MTSS, bone mineral density at the painful tibial region was 15% lower than in controls and 23% lower than in athletic controls [r9]. MRI studies describe a continuum from periosteal oedema, through progressive marrow involvement, to a cortical stress fracture [r3].\n\nThe picture is not tidy. In a prospective cohort of 52 athletes with MTSS, only 43.5% of symptomatic legs showed bone marrow or periosteal oedema, and the absence of oedema was associated with longer recovery [r12]. Abnormal imaging also occurs in asymptomatic people, so imaging should be read with caution [r1]. The exact pathology is therefore uncertain, and a fascial traction component at the soleus and flexor digitorum longus attachments cannot be excluded [r4].",
    structures: [
      { name: "Tibial cortex, distal posteromedial border", effect: "Remodelling imbalance with regional loss of bone density; may progress to a cortical stress fracture [r1,r9]" },
      { name: "Periosteum", effect: "Periosteal oedema on MRI in some, not all, symptomatic legs [r3,r12]" },
      { name: "Soleus and flexor digitorum longus attachments", effect: "Proposed site of fascial traction on the bone; the evidence is anatomical rather than histological [r4,r1]" },
      { name: "Deep posterior compartment", effect: "Symptom overlap with deep posterior chronic exertional compartment syndrome [r13]" }
    ],
    muscles: [
      { name: "Soleus", effect: "Its fascia attaches at the symptomatic border, so repeated calf work may add traction; the soleus is also the main calf muscle that shares load with the tibia [r4,r10]" },
      { name: "Flexor digitorum longus", effect: "Attaches at the distal medial border and may contribute to traction at the same site [r4]" },
      { name: "Tibialis posterior", effect: "Did not attach at the MTSS site in a 50-cadaver series, so it is unlikely to be the traction source [r4]" },
      { name: "Calf complex (capacity)", effect: "Calf strength and endurance are proposed to reduce the load the tibia carries, which is why calf strengthening is used for tibial bone stress injuries [r10]. MTSS-specific data on inhibition, spasm or atrophy were not found in the sources reviewed." },
      { name: "Hip and foot musculature", effect: "Associations with hip rotation range and foot pronation suggest that proximal and distal control affect loading [r7,r8]" }
    ],
    cellular: [
      { phase: "Repetitive loading and microdamage", timing: "Days to weeks of overload", description: "Repeated submaximal loading produces microdamage in the cortex. Normally it is removed and replaced by targeted remodelling [r10]." },
      { phase: "Remodelling imbalance", timing: "Weeks", description: "Bone resorption outpaces bone formation at the loaded cortex, and regional bone density falls [r1,r9]." },
      { phase: "Periosteal and marrow response", timing: "Weeks", description: "Periosteal oedema, then marrow oedema, may appear on MRI as the injury moves along the continuum [r3]." },
      { phase: "Repair", timing: "Weeks to months with modified loading", description: "When load falls below the bone's repair capacity and is then progressed gradually, remodelling catches up and symptoms settle. Most bone stress injuries heal after a period of modified loading and a progressive return to running [r10]." }
    ],
    systems: [
      { system: "Musculoskeletal chain", effect: "Greater navicular drop, hip rotation range and ankle plantarflexion were associated with MTSS, which points to foot, ankle and hip influences on tibial loading [r7,r8]." },
      { system: "Bone and endocrine", effect: "Lower regional bone density at the painful site is an association in long-standing MTSS [r9]. Whole-body bone health and energy availability matter for bone stress injury in general, so screen recurrent cases [r10]." },
      { system: "Immune and inflammatory", effect: "Histology does not show an inflammatory periostitis, so the 'itis' label and an anti-inflammatory rationale are doubtful [r1]." },
      { system: "Nervous system and pain", effect: "Pain is load-related and settles with rest in early stages. No MTSS-specific work on pain sensitisation was identified in the sources reviewed." },
      { system: "Psychological and behavioural", effect: "Slow progress and lengthy interruptions to training are common. In a randomised trial, 14 of 74 athletes (18.9%) did not complete the running program because of a lack of progress [r6]." }
    ]
  },

  grading: {
    system: "MRI bone stress continuum (Fredericson) [r3]",
    grades: [
      { grade: "Periosteal oedema only", description: "Periosteal oedema without marrow signal change. This is the MRI picture most compatible with MTSS.", prognosis: "In MTSS, bone marrow or periosteal oedema was present in 43.5% of symptomatic legs, and its absence was associated with longer recovery [r12]" },
      { grade: "Marrow oedema", description: "Progressive involvement of the marrow. Pain with daily walking, localised tibial tenderness and pain on direct or indirect percussion were linked with these more severe lesions [r3].", prognosis: "Across bone stress injuries, a higher MRI grade was associated with a longer time to return to sport [r14]" },
      { grade: "Cortical stress fracture", description: "A frank cortical fracture line. This is a stress fracture, not MTSS; see the tibial stress fracture page.", prognosis: "Longer healing and a risk-based approach to loading [r3,r14]" }
    ]
  },

  timeframes: {
    summary: "There is no validated recovery timeline for MTSS, and criteria override time. In a prospective study of athletes, the time to run 18 minutes consecutively without pain averaged 91.6 days with a graded running program alone [r15]. The phases below are typical clinical ranges, not trial-derived durations.",
    healing: [
      { phase: "Symptom settling with load modification", startDay: 0, endDay: 21, description: "Reduce provoking load, keep fitness with non-impact work; walking pain settles" },
      { phase: "Capacity building", startDay: 14, endDay: 70, description: "Calf, foot and hip strengthening as the bone remodels; tenderness along the border reduces" },
      { phase: "Graded walk–run progression", startDay: 28, endDay: 120, description: "Walk–run intervals, distance before speed. Mean time to 18 min of pain-free running was 91.6 days on a graded program alone in one athlete study [r15]" },
      { phase: "Return to full training and sport", startDay: 60, endDay: 150, description: "Intensity, hills and sport-specific loading are reintroduced once criteria are met" }
    ],
    milestones: [
      { label: "Pain-free walking", day: 14, note: "Typical clinical target before starting run–walk work" },
      { label: "Start walk–run intervals", day: 42, note: "Once criteria are met, not on a calendar" },
      { label: "18 min continuous pain-free running", day: 92, note: "Mean 91.6 days with graded running alone; 59.7 days when shockwave was added in a non-randomised comparison [r15]" },
      { label: "Full training load", day: 120, note: "Typical clinical range; slower if symptoms were long-standing or recurrent" }
    ],
    returnToSport: "Typically about 2–4 months in athletes treated with a graded running program, and longer for recurrent or long-standing cases. Return is criteria-based rather than time-based [r15]."
  },

  clinicalPresentation: {
    symptoms: [
      "Diffuse aching or sharp pain along the distal posteromedial border of the tibia during running or jumping [r1]",
      "Pain that settles with rest in the early stage; with progression, pain appears on daily walking and may be present at rest [r3]",
      "Pain at the start of a run that may ease once warm, then returns after the session",
      "A recent rise in running volume, intensity, hills or a change of surface or footwear",
      "Often a previous episode of shin pain on the same side or the other leg [r7]"
    ],
    signs: [
      "Tenderness over at least 5 cm of the posteromedial tibial border [r1], typically in the distal half to two-thirds of the shaft (clinical experience)",
      "Mild oedema over the border in some athletes (the shin oedema test) [r16]",
      "Pain reproduced by running, hopping or resisted calf raise; usually no pinpoint tenderness",
      "Increased navicular drop or a pronated foot posture in some athletes [r7]",
      "Normal neurovascular examination, no calf swelling and no night pain in uncomplicated MTSS"
    ]
  },

  assessment: {
    subjective: [
      "Onset and training load: weekly distance, intensity, surface, hills, footwear and any recent change in the 2–6 weeks before onset",
      "Pain behaviour: diffuse inner shin pain that starts with running and eases with rest (MTSS) versus focal pain, night pain or pain on walking (stress fracture) [r3]",
      "Previous MTSS or stress fracture, and history on the other side [r7]",
      "Bone health and energy availability: menstrual history, eating behaviours, fracture history, medications, vitamin D and calcium intake [r10]",
      "Exertional symptoms that point elsewhere: cramping or tightness that builds at a predictable point in a run, paraesthesia, or calf pain that eases within minutes of stopping [r13]",
      "Sport, level, season timing, current and target running volume, and what the athlete wants to return to"
    ],
    observation: [
      "Standing foot posture and navicular drop [r7]",
      "Running gait on treadmill or video: cadence, overstriding, foot strike, hip adduction and trunk control",
      "Oedema over the posteromedial tibial border and calf bulk compared with the other side [r16]",
      "Footwear wear pattern, age and type"
    ],
    palpation: [
      "Map the tenderness along the posteromedial border and record its length: diffuse tenderness over 5 cm or more supports MTSS [r1]",
      "Pinpoint (focal) bony tenderness, especially on the anterior tibial crest, raises suspicion of a stress fracture [r3]",
      "Soleus and deep posterior muscle tenderness, and tenderness at the tibialis posterior tendon as a differential",
      "Calf swelling, warmth or tenderness in the calf as a screen for deep vein thrombosis"
    ],
    rangeOfMotion: [
      "Weight-bearing ankle dorsiflexion and plantarflexion range; greater plantarflexion was associated with MTSS in a small cohort [r8]",
      "Hip internal and external rotation range; greater external rotation in males and reduced internal rotation were associated with MTSS [r7,r8]",
      "Subtalar and first-ray mobility, and foot posture"
    ],
    strength: [
      "Single-leg calf raise endurance (repetitions to fatigue or a set height, compared with the other side) with the knee straight for the gastrocnemius and bent for the soleus",
      "Hip abductor and external rotator strength",
      "Foot intrinsic and tibialis posterior strength"
    ],
    neuro: [
      "Screen for exertional paraesthesia or numbness in the foot or first web space, foot drop or weakness, and lumbar radicular signs, because exercise-induced leg pain has several non-bone causes [r13]",
      "Check distal pulses and capillary refill if pain is claudication-like and eases quickly with rest [r13]"
    ],
    functional: [
      "Single-leg hop on the spot or hop for distance: reproduction of the shin pain suggests more than MTSS and warrants a bone stress injury work-up",
      "Walking and jogging on a treadmill with a pain rating at set intervals",
      "Single-leg squat and step-down quality (hip and knee control)"
    ],
    specialTests: [
      {
        name: "Shin palpation test", purpose: "Locate and size tenderness along the posteromedial tibial border",
        procedure: "With the athlete relaxed, palpate along the posteromedial tibial border, usually the distal two-thirds, and record the length of tender bone. The definition used in the review literature is pain on palpation over at least 5 cm [r1].",
        positive: "Tenderness over 5 cm or more; focal pinpoint tenderness suggests a stress fracture instead. The likelihood ratios come from a study in which the screening test predicted later MTSS in asymptomatic military cadets; they are not diagnostic accuracy in symptomatic athletes [r16].",
        lrPositive: "3.38 (for later MTSS onset)", lrNegative: "0.732 (for later MTSS onset)",
        refs: ["r16"]
      },
      {
        name: "Shin oedema test", purpose: "Detect oedema over the posteromedial tibial border",
        procedure: "A common clinical method is to press firmly over the posteromedial border for several seconds and look for a lasting pit.",
        positive: "Pitting oedema over the border. As with the palpation test, the likelihood ratios describe prediction of later MTSS in asymptomatic cadets [r16].",
        lrPositive: "7.26 (for later MTSS onset)", lrNegative: "0.095 (for later MTSS onset)",
        refs: ["r16"]
      },
      {
        name: "Single-leg hop test (pain provocation)", purpose: "Screen for a bone stress injury more severe than MTSS",
        procedure: "The athlete hops repeatedly on the symptomatic leg. Ask for location and intensity of pain, then compare with the pain on running.",
        positive: "Reproduction of focal or intense tibial pain. Accuracy figures were not found in the sources reviewed; the test is used for provocation and monitoring, as a clinical parameter in bone stress injury trials [r17].",
        refs: ["r17"]
      },
      {
        name: "Percussion test (direct or indirect)", purpose: "Identify more severe tibial stress lesions",
        procedure: "Tap over the tender tibial segment, or percuss the heel or tibial tuberosity to transmit force along the shaft.",
        positive: "Pain on direct or indirect percussion, which correlated with more severe tibial stress injuries on MRI [r3]. Accuracy figures were not stated.",
        refs: ["r3"]
      },
      {
        name: "Navicular drop test", purpose: "Quantify foot pronation as a contributing factor",
        procedure: "Measure the navicular height in subtalar neutral sitting and in relaxed standing; the difference is the drop.",
        positive: "A drop above 10 mm was associated with MTSS (RR 1.99, 95% CI 1.00–3.96). This is a risk-factor association, not a diagnostic test [r7].",
        refs: ["r7"]
      }
    ],
    clinicalRules: [
      { name: "Clinical diagnosis of MTSS", description: "Exercise-induced pain along the posteromedial tibial border with palpation tenderness over at least 5 cm, once a stress fracture, chronic exertional compartment syndrome and other causes of exercise-induced leg pain have been considered [r1,r13]. In 46 athletes, two blinded clinicians using history and examination agreed on the diagnosis in 96% of cases (kappa 0.89) [r5]." }
    ],
    outcomeMeasures: [
      { name: "Lower Extremity Functional Scale (LEFS)", use: "Patient-reported function; used with a sports activity score to predict recovery time in athletes with MTSS [r12]" },
      { name: "Numeric pain rating scale (0–10)", use: "Pain on palpation and during running; used as a primary outcome in a sham-controlled MTSS trial [r18]" },
      { name: "Pain-limited running distance or time", use: "Practical running tolerance measure; recorded in MTSS trials [r18]" },
      { name: "Time to run 18 min consecutively pain-free", use: "Research endpoint for completion of a graded running program in athletes with MTSS [r6]" },
      { name: "Global Rating of Change scale (−7 to +7)", use: "Patient's perception of overall change [r18]" }
    ],
    imaging: [
      { modality: "Plain radiograph", indication: "Not routine for typical MTSS; consider when focal tenderness, night pain or a failure to progress raises the question of a stress fracture", findings: "Usually normal in MTSS; may show cortical thickening or a fracture line later" },
      { modality: "MRI", indication: "Suspected stress fracture, atypical or severe pain, or failure to progress with a sound program. MRI is preferred over bone scan for grading tibial stress lesions in runners [r3]", findings: "Periosteal oedema, then marrow oedema, then a cortical line. Oedema was present in only 43.5% of symptomatic legs, so a normal MRI does not exclude MTSS [r12]. Abnormal findings also occur in asymptomatic people [r1]." },
      { modality: "Bone scintigraphy or CT", indication: "Studied in MTSS but of limited additional value over examination and MRI [r1]", findings: "Abnormal findings are described on bone scan, CT and bone densitometry, but they also occur in asymptomatic people, so interpret with caution [r1]" }
    ]
  },

  differentials: [
    { name: "Tibial stress fracture", id: "tibial-stress-fracture", distinguishing: "Focal pinpoint tenderness, pain with walking, at night or with hopping, and pain on percussion. MRI shows a marrow signal or cortical line [r3]." },
    { name: "Chronic exertional compartment syndrome", id: "chronic-exertional-compartment-syndrome", distinguishing: "Pain builds to a predictable point in a run with tightness, may include paraesthesia, and settles within minutes of stopping; deep posterior compartment syndrome overlaps with MTSS [r13]." },
    { name: "Soleus strain", id: "soleus-strain", distinguishing: "Muscle belly pain and tenderness with resisted plantarflexion in knee flexion; a clear onset during a run is common." },
    { name: "Posterior tibial tendon dysfunction", id: "posterior-tibial-tendon-dysfunction", distinguishing: "Pain behind and below the medial malleolus and along the tendon, with arch collapse and difficulty with single-leg heel raise." },
    { name: "Functional popliteal artery entrapment", distinguishing: "Claudication-like calf pain that eases quickly with rest, with possible reduced pulses on plantarflexion or dorsiflexion; MR angiography is the primary investigation [r13]." },
    { name: "Lumbar radicular pain (disc herniation) or nerve entrapment", id: "lumbar-disc-herniation", distinguishing: "Burning, tingling or numbness, often with back symptoms or neurological signs; the pain does not follow the tibial border [r13]." }
  ],
  redFlags: [
    "Focal bony tenderness, pain at rest or at night, or pain with walking or hopping: treat as a tibial stress fracture until proven otherwise. Stop impact loading and arrange MRI [r3].",
    "Pinpoint tenderness on the anterior tibial crest, which is a high-risk stress fracture site: refer promptly to a sports physician or orthopaedic surgeon.",
    "Severe, escalating leg pain with a tense swollen leg, pain on passive toe stretch or new paraesthesia, especially after a fracture, crush or direct blow: acute compartment syndrome. This is a surgical emergency; send to the emergency department the same day.",
    "Calf pain with cramping or claudication that eases within minutes of stopping, or a cool, pale foot and reduced pulses: refer for vascular assessment [r13].",
    "Unilateral calf swelling, warmth and tenderness, especially after immobility or travel: same-day medical assessment for deep vein thrombosis.",
    "Recurrent bone stress injuries, irregular or absent menstruation, or disordered eating: screen for low energy availability and poor bone health and refer to a sports physician and dietitian."
  ],

  management: {
    principles: "Most athletes improve with a period of reduced provoking load, followed by a graded, criteria-based return to running while contributing factors are addressed. Treat the plan as a load-and-capacity strategy rather than a protocol, because the evidence is weak: a systematic review of 11 trials found that all randomised trials were at high risk of bias and that none of the treatments could be recommended [r2]. In three earlier randomised trials rest was as effective as any intervention [r1]. In 74 athletes, a graded running program alone performed no worse than the same program with calf exercises or a compression stocking [r6]. Classify the injury on the bone stress continuum, ask about bone health, and set the expectation that recovery takes months rather than weeks [r10,r15].",
    medical: [
      { name: "Simple analgesia", description: "Paracetamol or short-term anti-inflammatory medication to permit walking and daily activity. No MTSS-specific trial evidence was found in the sources reviewed, and histology does not show an inflammatory periostitis, so do not rely on anti-inflammatories for recovery [r1].", evidence: "expert-opinion", recommendation: "consider", refs: ["r1"] },
      { name: "Extracorporeal shockwave therapy (ESWT)", description: "Focused shockwave over the tender border, for example five sessions over nine weeks, added to a graded running program. A non-randomised comparison of 42 athletes found a shorter time to pain-free running (59.7 versus 91.6 days) [r15], but a sham-controlled randomised pilot (28 adults) found no benefit over sham [r18]. A review found ESWT the most promising treatment studied while still not recommending it [r2]. If used, treat it as an optional adjunct after shared decision-making.", evidence: "conflicting", recommendation: "consider", refs: ["r15", "r18", "r2"] },
      { name: "Surgery (fasciotomy or periosteal procedures)", description: "Considered only for recalcitrant cases after a sound conservative program and exclusion of stress fracture and compartment syndrome [r13]. Periosteal pecking was among the treatments reported in trials of low quality [r2].", evidence: "very-limited", recommendation: "consider", refs: ["r13", "r2"] },
      { name: "Medical and bone health review", description: "For recurrent, bilateral or severe bone stress injuries, review energy availability, menstrual function, vitamin D and calcium intake, and bone density where indicated [r10].", evidence: "limited", recommendation: "recommended", refs: ["r10"] }
    ],
    physio: [
      { name: "Load modification with graded return to running", description: "Reduce provoking load until walking is pain-free, keep fitness with non-impact work, then reintroduce walk–run intervals with a symptom-guided progression. In athletes, all arms of the main trial completed a graded running program with similar time to completion [r6]. Load modification is the common denominator of every approach and consistent with how bone stress injuries heal [r10].", evidence: "limited", recommendation: "recommended", refs: ["r1", "r6", "r10"] },
      { name: "Calf and soleus strengthening", description: "Progressive heavy calf loading builds the capacity that protects the tibia and is used for tibial bone stress injuries [r10]. In an MTSS trial, adding calf stretching and strengthening to a graded running program did not shorten time to completion, and exercise was not proven effective in a review [r6,r2]. Use it to rebuild capacity, not as an MTSS-specific cure.", evidence: "limited", recommendation: "consider", refs: ["r10", "r6", "r2"] },
      { name: "Running gait retraining (higher step rate)", description: "Cueing a 5–10% increase in step rate reduced tibial loading in healthy runners: in a randomised trial of 30 at-risk runners a 7.5% cue achieved an 8.6% rise and lowered vertical loading rates by about 18–19% [r19]. Visual feedback from a tibial accelerometer cut tibial acceleration by nearly 50% in 10 runners [r11]. These are changes in loading, not shown outcomes in people with MTSS [r10].", evidence: "very-limited", recommendation: "consider", refs: ["r19", "r11", "r10"] },
      { name: "Foot orthoses for a pronated foot", description: "Neoprene or semi-rigid orthotics may help prevent MTSS according to two large prospective studies [r1]. Treatment trials of orthoses were not identified in the sources reviewed, and prior orthotic use was itself associated with MTSS, possibly because of earlier symptoms [r7]. Reserve for athletes with marked pronation.", evidence: "very-limited", recommendation: "consider", refs: ["r1", "r7"] },
      { name: "Sports compression stockings", description: "No added benefit over a graded running program in athletes [r6], and compression stockings were not proven effective in a systematic review [r2].", evidence: "limited", recommendation: "not-recommended", refs: ["r6", "r2"] },
      { name: "Lower leg braces", description: "Pooled data showed no difference between lower leg braces and no brace (SMD −0.06, 95% CI −0.44 to 0.32) [r2].", evidence: "limited", recommendation: "not-recommended", refs: ["r2"] },
      { name: "Therapeutic ultrasound, iontophoresis, phonophoresis, laser and pulsed electromagnetic fields", description: "The trials were small and at high risk of bias, and pooled iontophoresis versus phonophoresis showed no difference (SMD 0.09, 95% CI −0.50 to 0.68). Laser and pulsed electromagnetic fields were not proven effective [r2]. Do not use these as routine care.", evidence: "very-limited", recommendation: "not-recommended", refs: ["r2"] },
      { name: "Education and cross-training", description: "Explain the bone-loading model, set pain and progression rules, and keep aerobic fitness with cycling, pool running or other non-impact work during the settling phase.", evidence: "expert-opinion", recommendation: "recommended", refs: [] }
    ],
    education: [
      "Shin splints is a bone-loading problem more than an inflammation to rub or ice away. Bone adapts to load, so the aim is the right amount of load rather than no load.",
      "Expect improvement over months. A short rest followed by a return to the old training volume often fails, so build back gradually.",
      "A mild ache of about 3/10 or less that settles within 24 hours is acceptable (clinical convention). Pain that is worsening, pinpoint tenderness, pain at rest or night pain means stop and be reviewed.",
      "No single gadget, such as stockings, braces or insoles, has been shown to speed recovery [r2,r6].",
      "Keep fit with cycling, pool running or similar work while running is limited.",
      "Contributors matter: training errors, running technique, calf and hip strength, footwear and bone health."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and follows the load-capacity model: settle the symptoms with load modification, rebuild calf, foot and hip capacity, then reintroduce running in graded steps, then rebuild training and sport. Move on when the objective criteria are met, not when a set number of weeks has passed. Return to running criteria for a tibial bone stress injury include resolved bony tenderness, pain-free walking, strength and functional tests, and identification of contributing factors, although this guidance is level IV evidence [r20]. Dosages here are typical clinical ranges, not trial-derived prescriptions. As working rules, keep pain at 3/10 or less during exercise and settled by the next morning (clinical convention).",
    stages: [
      {
        name: "Settle and modify load",
        timeframe: "Weeks 0–3 (until criteria are met)",
        goals: ["Walking pain 2/10 or less with no night pain", "Maintain aerobic fitness with non-impact work", "Begin pain-free calf, foot and hip loading", "Education on load and pain rules"],
        precautions: ["Stop and review if pinpoint tenderness, night pain or rest pain develops (stress fracture) [r3]", "Avoid running and jumping while walking is painful", "Complete rest for many weeks is not needed; adjust load instead"],
        exercises: [
          { name: "Cycling or pool running", dosage: "30–45 min, 3–5 days a week at a pain-free effort", cues: "Match the effort of a normal run to keep fitness" },
          { name: "Double-leg calf raise", dosage: "3 × 10, 3 s up and 3 s down, daily if pain-free", cues: "Rise evenly through both big toes", figure: { pose: "ex-calf-raise", view: "lateral" } },
          { name: "Seated (bent-knee) calf raise for soleus", dosage: "3 × 12–15, slow tempo, daily", cues: "Press through the ball of the foot and lower slowly", figure: { pose: "ex-seated-calf-raise", view: "lateral", props: ["chair"] } },
          { name: "Glute bridge", dosage: "3 × 12, daily", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Side-lying clamshell", dosage: "3 × 12–15 each side", cues: "Keep the pelvis still", figure: { pose: "ex-clamshell", view: "lateral", props: ["mat"] } },
          { name: "Single-leg balance", dosage: "3 × 30 s each leg", cues: "Soft knee, quiet trunk", figure: { pose: "ex-single-leg-balance", view: "anterior" } }
        ],
        progressionCriteria: ["Walking for 30 min with pain 2/10 or less and no pain the next morning", "No night or rest pain", "Length and intensity of border tenderness reduced from baseline on mapped palpation"]
      },
      {
        name: "Build calf and tibial load capacity",
        timeframe: "Weeks 2–8",
        goals: ["Single-leg calf raise endurance close to the other side", "Tolerate impact in small doses", "Hip and trunk control on one leg", "Brisk walking for 45 min without symptoms"],
        precautions: ["Increase load no faster than symptoms allow (pain 3/10 or less, settled by next morning)", "Stop if focal tenderness or night pain appears"],
        exercises: [
          { name: "Single-leg calf raise", dosage: "3 × 8–15, 3 s up and 3 s down; progress with a loaded backpack, 3 days a week", cues: "Full height, controlled lowering", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Seated calf raise (heavy)", dosage: "3–4 × 8–12 with load on the knee, 3 days a week", figure: { pose: "ex-seated-calf-raise", view: "lateral", props: ["chair", "dumbbell"] } },
          { name: "Split squat", dosage: "3 × 8–10 each leg", cues: "Knee tracks over the second toe", figure: { pose: "ex-split-squat", view: "lateral" } },
          { name: "Single-leg Romanian deadlift", dosage: "3 × 8 each leg", cues: "Hinge at the hip with a long spine", figure: { pose: "ex-rdl", view: "lateral", props: ["dumbbell"] } },
          { name: "Standing hip abduction", dosage: "3 × 12–15 each side", figure: { pose: "ex-hip-abduction-standing", view: "anterior" } },
          { name: "Double-leg hops on the spot", dosage: "3 × 10–20 low hops once calf raises are comfortable", cues: "Quiet, soft landings" }
        ],
        progressionCriteria: ["Single-leg calf raise endurance within about 90% of the other side, or 20 or more repetitions (clinical convention)", "Pain-free brisk walking for 45 min", "Pain-free double-leg hopping on the spot", "Border tenderness minimal on palpation"]
      },
      {
        name: "Graded return to running",
        timeframe: "Weeks 6–14",
        goals: ["Build to 30 min of continuous running", "Raise step rate modestly and run softly", "Keep strength work going", "Add a second then a third running day"],
        precautions: ["Run on alternate days at first", "Progress distance before speed and hills", "Hold or step back if pain exceeds 3/10 or lingers into the next morning"],
        exercises: [
          { name: "Walk–run intervals", dosage: "Alternate days, for example 1 min run and 2 min walk × 8, increasing the run share each session when criteria are met", cues: "Easy effort on flat, even ground", figure: { pose: "run-midstance", view: "lateral" } },
          { name: "Step-rate cue", dosage: "Raise cadence by about 5–10% with a metronome during all runs at first [r19]", cues: "Shorter, quicker, quieter steps" },
          { name: "Single-leg calf raise (loaded)", dosage: "3 × 8–12 loaded, twice a week", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Step-down", dosage: "3 × 10 each leg", cues: "Control the knee and pelvis", figure: { pose: "ex-step-down", view: "lateral", props: ["step"] } },
          { name: "Single-leg hop on the spot", dosage: "3 × 10 each leg, only after criteria are met", figure: { pose: "ex-hop", view: "lateral" } }
        ],
        progressionCriteria: ["Run 30 min continuously with pain 3/10 or less on two consecutive runs and no pain the next morning", "Single-leg hopping pain-free", "No tenderness at the border on palpation"]
      },
      {
        name: "Return to training and sport",
        timeframe: "Months 3–6",
        goals: ["Return to full running volume and intensity", "Reintroduce hills, intervals and sport-specific work", "Maintain calf and hip strength", "Monitor weekly load to avoid a repeat"],
        precautions: ["Increase volume or intensity, not both, in one week; gradual increments, for example about 10% a week (a common clinical convention that is not well validated)", "Review symptoms and tenderness weekly"],
        exercises: [
          { name: "Progressive run volume, then intensity", dosage: "Add distance first, then strides, hills and intervals over several weeks", cues: "Record distance, intensity and symptoms" },
          { name: "Jump squats and hops", dosage: "3 × 5–8, 2 days a week with full recovery", figure: { pose: "ex-jump-squat", view: "lateral" } },
          { name: "Heavy single-leg calf raise and split squat", dosage: "3–4 × 5–8, twice a week, indefinitely", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Sport-specific drills", dosage: "Cutting, accelerations and sport drills added in steps", cues: "Quality over volume" },
          { name: "Weekly load review", dosage: "Once a week, comparing planned and actual load with symptoms" }
        ],
        progressionCriteria: ["Full training week completed without next-day tenderness", "Calf raise endurance and hop distance within about 90% of the other leg or pre-injury values (clinical convention)", "No border tenderness on palpation", "Contributing factors addressed"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No tenderness on palpation of the posteromedial border compared with the other side [r20]",
      "Pain-free walking, then pain-free completion of two or three consecutive running sessions at planned intensity without next-day pain (clinical convention)",
      "Single-leg calf raise endurance and single-leg hop symmetry of about 90% (clinical convention)",
      "Contributing factors addressed: training plan, cadence and technique, strength, footwear and bone health [r20]",
      "Shared decision with the athlete and coach. No validated MTSS-specific return-to-sport criteria were identified."
    ],
    tests: ["Palpation mapping of the posteromedial border", "Single-leg calf raise endurance test", "Single-leg hop test for pain and symmetry", "Graded running test (for example 30 min easy running) with pain rating", "LEFS questionnaire [r12]"]
  },
  prognosis: "Most athletes recover with a graded program, but time varies widely. In a prospective study of athletes, time to run 18 minutes pain-free averaged 91.6 days (SD 43.0) with graded running alone, and 59.7 days (SD 25.8) when shockwave was added in a non-randomised comparison [r15]. In a randomised trial of 74 athletes, 14 (18.9%) did not complete the running program because of a lack of progress [r6]. A higher body mass index was associated with longer recovery [r8], and in an MRI cohort the absence of oedema was associated with longer recovery [r12]. A previous episode carried a 3.74-fold risk of MTSS [r7]. Long-term outcome data were not found in the sources reviewed.",
  prevention: [
    "Increase running load gradually and monitor symptoms; the load applied to bone is more amenable to change than bone strength, mainly through training-program design [r10].",
    "Neoprene sleeves or semi-rigid orthotics may help prevent MTSS, based on two large prospective studies; the evidence is not strong [r1].",
    "Build calf strength and capacity; calf strengthening is advised for tibial bone stress injuries [r10].",
    "Raising step rate by about 7.5% lowered vertical loading rates in healthy at-risk runners over a short trial, but it has not been shown to prevent MTSS [r19].",
    "Screen high-risk runners (previous MTSS, female sex, high BMI). Positive shin palpation and shin oedema tests predicted MTSS in military cadets [r16,r7]."
  ],
  clinicalPearls: [
    "Diffuse tenderness over 5 cm or more of the border favours MTSS. Pinpoint tenderness, night pain or pain on hopping favours a stress fracture, so map the tenderness at every visit [r1,r3].",
    "Always ask what else could be going on. Concurrent lower leg injuries were present in 32% of athletes with MTSS [r5], and deep posterior compartment syndrome overlaps with it [r13].",
    "Do not use MRI to reassure or to rule out MTSS. Oedema was present in less than half of symptomatic legs, and abnormal images occur in asymptomatic people [r12,r1].",
    "None of the adjuncts tested beat a graded running program, so put your time into a clear load plan and capacity building rather than into devices [r6,r2].",
    "A recurrence usually means a loading or capacity problem persisted. Review training load, technique, strength and bone health [r7]."
  ],
  related: ["tibial-stress-fracture", "chronic-exertional-compartment-syndrome", "bone-stress-injury", "soleus-strain", "posterior-tibial-tendon-dysfunction", "calf-strain"],

  references: [
    { id: "r1", citation: "Moen MH, Tol JL, Weir A, et al. Medial tibial stress syndrome: a critical review. Sports Med. 2009;39(7):523-46.", pmid: "19530750", doi: "10.2165/00007256-200939070-00002", type: "narrative-review", year: 2009 },
    { id: "r2", citation: "Winters M, Eskes M, Weir A, et al. Treatment of medial tibial stress syndrome: a systematic review. Sports Med. 2013;43(12):1315-33.", pmid: "23979968", doi: "10.1007/s40279-013-0087-0", type: "systematic-review", year: 2013 },
    { id: "r3", citation: "Fredericson M, Bergman AG, Hoffman KL, et al. Tibial stress reaction in runners. Correlation of clinical symptoms and scintigraphy with a new magnetic resonance imaging grading system. Am J Sports Med. 1995;23(4):472-81.", pmid: "7573660", doi: "10.1177/036354659502300418", type: "cohort", year: 1995 },
    { id: "r4", citation: "Beck BR, Osternig LR. Medial tibial stress syndrome. The location of muscles in the leg in relation to symptoms. J Bone Joint Surg Am. 1994;76(7):1057-61.", pmid: "8027114", doi: "10.2106/00004623-199407000-00015", type: "basic-science", year: 1994 },
    { id: "r5", citation: "Winters M, Bakker EWP, Moen MH, et al. Medial tibial stress syndrome can be diagnosed reliably using history and physical examination. Br J Sports Med. 2018;52(19):1267-72.", pmid: "28179260", doi: "10.1136/bjsports-2016-097037", type: "cross-sectional", year: 2018 },
    { id: "r6", citation: "Moen MH, Holtslag L, Bakker E, et al. The treatment of medial tibial stress syndrome in athletes; a randomized clinical trial. Sports Med Arthrosc Rehabil Ther Technol. 2012;4:12.", pmid: "22464032", doi: "10.1186/1758-2555-4-12", type: "rct", year: 2012 },
    { id: "r7", citation: "Newman P, Witchalls J, Waddington G, et al. Risk factors associated with medial tibial stress syndrome in runners: a systematic review and meta-analysis. Open Access J Sports Med. 2013;4:229-41.", pmid: "24379729", doi: "10.2147/OAJSM.S39331", type: "meta-analysis", year: 2013 },
    { id: "r8", citation: "Moen MH, Bongers T, Bakker EW, et al. Risk factors and prognostic indicators for medial tibial stress syndrome. Scand J Med Sci Sports. 2012;22(1):34-9.", pmid: "20561280", doi: "10.1111/j.1600-0838.2010.01144.x", type: "cohort", year: 2012 },
    { id: "r9", citation: "Magnusson HI, Westlin NE, Nyqvist F, et al. Abnormally decreased regional bone density in athletes with medial tibial stress syndrome. Am J Sports Med. 2001;29(6):712-5.", pmid: "11734482", doi: "10.1177/03635465010290060701", type: "case-control", year: 2001 },
    { id: "r10", citation: "Warden SJ, Davis IS, Fredericson M. Management and prevention of bone stress injuries in long-distance runners. J Orthop Sports Phys Ther. 2014;44(10):749-65.", pmid: "25103133", doi: "10.2519/jospt.2014.5334", type: "narrative-review", year: 2014 },
    { id: "r11", citation: "Crowell HP, Davis IS. Gait retraining to reduce lower extremity loading in runners. Clin Biomech (Bristol). 2011;26(1):78-83.", pmid: "20888675", doi: "10.1016/j.clinbiomech.2010.09.003", type: "cohort", year: 2011 },
    { id: "r12", citation: "Moen MH, Schmikli SL, Weir A, et al. A prospective study on MRI findings and prognostic factors in athletes with MTSS. Scand J Med Sci Sports. 2014;24(1):204-10.", pmid: "22515327", doi: "10.1111/j.1600-0838.2012.01467.x", type: "cohort", year: 2014 },
    { id: "r13", citation: "Lohrer H, Malliaropoulos N, Korakakis V, et al. Exercise-induced leg pain in athletes: diagnostic, assessment, and management strategies. Phys Sportsmed. 2019;47(1):47-59.", pmid: "30345867", doi: "10.1080/00913847.2018.1537861", type: "systematic-review", year: 2019 },
    { id: "r14", citation: "Hoenig T, Tenforde AS, Strahl A, et al. Does magnetic resonance imaging grading correlate with return to sports after bone stress injuries? A systematic review and meta-analysis. Am J Sports Med. 2022;50(3):834-44.", pmid: "33720786", doi: "10.1177/0363546521993807", type: "meta-analysis", year: 2022 },
    { id: "r15", citation: "Moen MH, Rayer S, Schipper M, et al. Shockwave treatment for medial tibial stress syndrome in athletes; a prospective controlled study. Br J Sports Med. 2012;46(4):253-7.", pmid: "21393260", doi: "10.1136/bjsm.2010.081992", type: "cohort", year: 2012 },
    { id: "r16", citation: "Newman P, Adams R, Waddington G. Two simple clinical tests for predicting onset of medial tibial stress syndrome: shin palpation test and shin oedema test. Br J Sports Med. 2012;46(12):861-4.", pmid: "22966153", doi: "10.1136/bjsports-2011-090409", type: "cohort", year: 2012 },
    { id: "r17", citation: "Gan TY, Kuah DE, Graham KS, et al. Low-intensity pulsed ultrasound in lower limb bone stress injuries: a randomized controlled trial. Clin J Sport Med. 2014;24(6):457-60.", pmid: "24667169", doi: "10.1097/JSM.0000000000000084", type: "rct", year: 2014 },
    { id: "r18", citation: "Newman P, Waddington G, Adams R. Shockwave treatment for medial tibial stress syndrome: a randomized double blind sham-controlled pilot trial. J Sci Med Sport. 2017;20(3):220-4.", pmid: "27640922", doi: "10.1016/j.jsams.2016.07.006", type: "rct", year: 2017 },
    { id: "r19", citation: "Willy RW, Buchenic L, Rogacki K, et al. In-field gait retraining and mobile monitoring to address running biomechanics associated with tibial stress fracture. Scand J Med Sci Sports. 2016;26(2):197-205.", pmid: "25652871", doi: "10.1111/sms.12413", type: "rct", year: 2016 },
    { id: "r20", citation: "George ERM, Sheerin KR, Reid D. Criteria and guidelines for returning to running following a tibial bone stress injury: a scoping review. Sports Med. 2024;54(9):2247-65.", pmid: "39141251", doi: "10.1007/s40279-024-02051-y", type: "other", year: 2024 }
  ],

  animation: {
    title: "How medial tibial stress syndrome develops",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "lateral", environment: "road",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "run-contact", root: { x: -80 } },
          { t: 0.9, pose: "run-midstance", root: { x: -55 } },
          { t: 1.8, pose: "run-toe-off", root: { x: -30 } },
          { t: 2.7, pose: "run-contact", root: { x: 0 } },
          { t: 3.6, pose: "run-midstance", root: { x: 25 } },
          { t: 4.5, pose: "run-toe-off", root: { x: 50 } },
          { t: 5.4, pose: "run-contact", root: { x: 75 } }
        ],
        forces: [
          { t: [0.1, 1.0], at: "footR", dir: "up", label: "Impact load" },
          { t: [0.9, 2.4], at: "shinR", dir: "backward", label: "Tibial bending" },
          { t: [1.2, 4.6], at: "calfR", dir: "down", label: "Soleus traction (proposed)" },
          { t: [2.8, 3.7], at: "footR", dir: "up", label: "Repeated impact" }
        ],
        highlights: [{ t: [0.9, 6], at: "shinR" }],
        slowmo: [{ t: [0.5, 1.8], rate: 0.5 }],
        captions: [
          { t: 0, text: "A runner has raised weekly distance and added speed work." },
          { t: 1.2, text: "At each foot strike, impact load travels up the tibia." },
          { t: 2.4, text: "In stance and push-off the calf pulls on the tibial border while the shaft bends." },
          { t: 3.6, text: "Repeated over weeks, load outpaces repair at the distal posteromedial tibia." },
          { t: 4.8, text: "Pain builds along the inner shin during and after runs." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "shinR",
        captions: [{ t: 0, text: "Zooming into the right shin, viewed from the front." }]
      },
      {
        type: "closeup", label: "Inside the shin", duration: 10, scene: "lower-leg-anterior",
        actions: [
          { t: 0, do: "highlight", target: "tibia" },
          { t: 0.3, do: "label", target: "tibia", text: "Tibia: distal posteromedial border" },
          { t: 1.3, do: "pulse", target: "soleusMedial" },
          { t: 1.3, do: "pulse", target: "flexorDigitorumLongus" },
          { t: 1.6, do: "label", target: "soleusMedial", text: "Soleus and FDL attach here" },
          { t: 2.4, do: "arrow", at: "posteromedialTibiaDistalThird", dir: "distal", label: "Calf / fascial traction (proposed)" },
          { t: 2.6, do: "arrow", at: "posteromedialTibiaDistalThird", dir: "posterior", label: "Bending load" },
          { t: 3.4, do: "stress", target: "tibia", at: "posteromedialTibiaDistalThird" },
          { t: 4.4, do: "swell", target: "tibialPeriosteum", amount: 0.35 },
          { t: 4.6, do: "label", target: "tibialPeriosteum", text: "Periosteal oedema on MRI (not always)" },
          { t: 5.6, do: "pain", at: "posteromedialTibiaDistalThird" },
          { t: 6.4, do: "camera", at: "posteromedialTibiaDistalThird", zoom: 1.6, dur: 1 },
          { t: 9.0, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "From the front, the distal posteromedial tibial border is the usual site of pain." },
          { t: 1.3, text: "Soleus, flexor digitorum longus and deep fascia attach along this border." },
          { t: 2.4, text: "Running load bends the tibia, and calf pull may add traction at the attachments." },
          { t: 3.4, text: "The cortex shows a stress reaction: resorption outpaces new bone formation." },
          { t: 4.4, text: "The periosteum may swell and show oedema on MRI, although fewer than half of legs do." },
          { t: 5.6, text: "The result is load-related pain along the shin." },
          { t: 6.6, text: "The exact pathology is uncertain; MTSS is best seen on a bone stress continuum." }
        ]
      },
      {
        type: "micro", label: "Bone response", duration: 10, tissue: "bone-stress",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.3, stage: "loading" }, { t: 2.6, stage: "microdamage" },
          { t: 4.0, stage: "resorption-exceeds-formation" }, { t: 5.6, stage: "stress-reaction" }, { t: 7.6, stage: "healing" }
        ],
        captions: [
          { t: 0, text: "Healthy cortical bone: microdamage is removed and replaced as it forms." },
          { t: 1.3, text: "Repetitive running load strains the cortex of the distal tibia." },
          { t: 2.6, text: "Microcracks accumulate faster than the bone can repair them." },
          { t: 4.0, text: "Osteoclast resorption outpaces osteoblast formation, so the cortex becomes less dense." },
          { t: 5.6, text: "A stress reaction: periosteal and marrow change, with load-related pain." },
          { t: 7.6, text: "With load reduced then progressed gradually, remodelling catches up and the bone heals." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL8" }
};
