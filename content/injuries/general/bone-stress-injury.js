export default {
  id: "bone-stress-injury",
  name: "Bone stress injury and RED-S",
  shortName: "Bone stress injury & RED-S",
  aka: ["BSI", "bone stress injury", "stress fracture", "stress reaction", "fatigue fracture", "overuse bone injury", "RED-S", "REDs", "relative energy deficiency in sport", "low energy availability", "female athlete triad", "athlete triad"],
  region: "general",
  tissues: ["bone"],
  onset: "gradual",
  mechanismType: ["overuse"],
  populations: ["distance runners and track-and-field athletes", "female athletes with low energy availability or menstrual dysfunction", "male endurance athletes", "military recruits", "dancers and gymnasts", "athletes with a sudden rise in training load or a previous bone stress injury"],
  sports: ["running", "track and field", "cross-country", "dance", "gymnastics", "rowing", "football", "basketball", "military training"],
  urgency: "routine",
  summary: "A continuum from stress reaction to stress fracture when load exceeds remodelling capacity. Load, energy availability, bone health and mechanics drive it. Low-risk sites usually heal; high-risk sites need referral.",
  keyFacts: [
    { label: "Typical recovery", value: "Across all sites, mean return to sport rose from 41.7 days (MRI grade 1) to 98.5 days (grade 4); cortical-rich sites healed faster than trabecular-rich sites" },
    { label: "Return to sport", value: "More than 90% of athletes return. Longest at the tarsal navicular (127 days) and femoral neck (107 days); shortest at the posteromedial tibial shaft (44 days)" },
    { label: "Key test", value: "Focal bony tenderness with load-related pain that builds over days to weeks, plus a screen for training-load change, energy availability and bone health" },
    { label: "Imaging", value: "Radiograph first, often normal early; MRI if radiographs are negative and suspicion remains. MRI grade predicts time to return" },
    { label: "Risk factors", value: "Training-load errors, low energy availability, menstrual dysfunction, low bone density, prior bone stress injury and biomechanics" },
    { label: "Incidence", value: "In collegiate athletes, 10.5% of 239 female athletes and 27% of 156 male distance runners (mean 1.9 years) sustained a bone stress injury" }
  ],
  overview: "Bone stress injury (BSI) is the inability of bone to withstand repetitive loading, causing structural fatigue and localised bone pain and tenderness. It lies on a continuum that begins with a stress reaction, can progress to a stress fracture, and ultimately to a complete fracture [r1]. BSIs are a concern because they are frequent, cause morbidity and tend to recur [r1]. Stress fractures are a fatigue failure of bone with a spectrum of severity, and healing potential varies by location [r2]. Low-risk sites heal readily with modified loading, whereas high-risk sites share high tensile load and low blood flow and carry a greater risk of progression, delayed healing and nonunion [r3].\n\nThe bone's load–capacity balance depends on training load, biomechanics, and bone health and energy availability. Relative energy deficiency in sport (REDs, called RED-S in earlier statements) describes deleterious health and performance outcomes in female and male athletes exposed to low energy availability (LEA) [r4]; these outcomes include altered bone health [r5]. Most studies conclude that athletes with LEA have impaired bone health and a higher risk of BSI [r5]. The causal evidence is debated, because most REDs evidence is associational and symptoms are generic [r6]. This page covers the general model, screening and management principles. Site-specific pages cover the tibia, metatarsals, femoral neck and navicular. Physiotherapists lead load management and strengthening, and screen for the wider causes.",

  epidemiology: {
    text: "BSIs are common in athletes and recruits, and most published rates are for all sites combined. In a prospective multisite cohort of 259 exercising girls and women (mean age 18.1 years), 28 (10.8%) sustained a BSI [r7]. In 239 collegiate athletes from 16 sports, 25 (10.5%) sustained at least one BSI, and cross-country runners contributed 64% of them [r8]. In 156 male collegiate distance runners, 42 (27%) sustained 61 BSIs over an average of 1.9 years [r9]. In a 5-year prospective study of 211 collegiate track and field and cross-country athletes, 34 athletes (12 men and 22 women) sustained 61 BSIs [r10]. A systematic review of site-specific return to sport pooled 76 studies reporting 2974 BSIs [r11]. Upper-limb BSIs are less common than lower-limb BSIs and can be missed because symptoms are subtle [r12]. Low energy availability is common: a meta-analysis of 59 studies found LEA in 44.7% of 6118 athletes (44.2% of female and 49.4% of male athletes) in 46 studies [r5].",
    riskFactors: {
      intrinsic: [
        "Low energy availability and related REDs features: moderate-risk and high-risk Female Athlete Triad Cumulative Risk Assessment scores carried 2.6 and 3.8 times the BSI risk in female collegiate athletes [r8,r4]",
        "Menstrual dysfunction (oligomenorrhoea or amenorrhoea) and prior stress fracture or reaction: independent predictors of BSI [r8]",
        "Low bone mineral density: a BMD Z-score below −1.0 was associated with BSI (21.0% incidence), and low BMD with at least 12 h a week of exercise raised the odds (OR 5.1, 95% CI 2.2–12.1) [r7]",
        "Low BMI (below 21.0 kg/m2) was associated with BSI (15.3% incidence) in girls and women [r7]",
        "Prior BSI: each 1-point rise in the prior BSI score was linked to a 57% higher risk of a subsequent BSI in male runners [r9]",
        "Age-related bone loss: BSIs in masters runners can include insufficiency-type failure of weakened bone [r13]"
      ],
      extrinsic: [
        "A sudden rise in training volume or intensity, or too little rest, which disrupts normal bone reparative mechanisms [r3]",
        "Purposeful exercise of at least 12 h a week (14.7% incidence) in girls and women [r7]",
        "Leanness sports and dietary restraint: the combination of at least 12 h a week of exercise, a leanness sport and dietary restraint carried an odds ratio of 8.7 (95% CI 2.7–28.3) [r7]",
        "Training-programme design, impact forces and movement patterns, which are the modifiable part of the load [r1]",
        "Time at the start of military training (recruits): a period of novel loading with higher stress fracture risk than other times in service [r14]"
      ]
    }
  },

  mechanism: {
    summary: "A BSI has no single injury moment. It results from disruption of the homeostasis between microdamage formation and its removal. Microdamage accumulation and the risk of a BSI relate to the load applied to the bone and to the bone's ability to resist load [r1]. Load rises with training volume, intensity and impact forces. Capacity falls when remodelling is impaired, for example by low energy availability, menstrual dysfunction or low bone mass [r4,r7]. The failure site depends on the load pattern: tibial and metatarsal shafts at low-risk sites, or tension-side and trabecular sites that carry more risk [r3,r15].",
    sequence: [
      "Training load rises or recovery shrinks (new block, more track work, recruit training, a return to sport after a break) [r3].",
      "Each cycle of loading creates a small amount of microdamage in the cortex, and the bone removes and replaces damaged bone through remodelling [r1].",
      "When microdamage is created faster than it is removed, or when remodelling is impaired by low energy availability or hormonal disturbance, damage accumulates [r1,r4].",
      "The bone is transiently weaker while it remodels (mechanistic model), and focal pain begins with loading.",
      "A stress reaction develops: bone marrow oedema and periosteal reaction on MRI, with or without symptoms [r2,r12].",
      "If loading continues, a cortical stress fracture line forms, and it can progress to a complete fracture [r1].",
      "The athlete notices pain that first appears after activity, then during it, then in daily life and at rest."
    ],
    variants: [
      { name: "Low-risk cortical sites (tibial and metatarsal shaft)", description: "Low-risk BSIs of the tibial and metatarsal diaphyses account for more than half of BSIs in runners and are managed with symptom-driven load [r16]." },
      { name: "High-risk tension-side sites", description: "The femoral neck (tension side), patella, anterior tibia, medial malleolus, talus, tarsal navicular, proximal fifth metatarsal and great toe sesamoids share high tensile load and low blood flow [r3]. Treatment complications were highest at the femoral neck, navicular, anterior tibial shaft and fifth metatarsal [r11]." },
      { name: "Trabecular-rich sites (pelvis, sacrum, femoral neck, calcaneus)", description: "Trabecular-rich sites took longer to heal than cortical-rich sites [r15], and the femoral neck, pubic bone and sacrum were linked to prolonged return to sport [r10]." },
      { name: "Upper-limb BSIs", description: "Repetitive loading can exceed the capacity of the scapula, clavicle, humerus, forearm, carpal bones, metacarpals and phalanges, often with subtle symptoms and a diagnostic delay [r12]." },
      { name: "Insufficiency-type failure", description: "Occurs at normal loads in bone weakened by age-related loss of bone or low bone mass, as in some masters runners [r13]." }
    ]
  },

  anatomy: {
    text: "Long bones have a stiff cortical shell, trabecular bone at the metaphyses and ends, a periosteum on the outer surface and marrow within. Bone is constantly remodelled: osteoclasts remove damaged or old bone and osteoblasts lay down new bone, and the balance between microdamage formation and its removal sets how the bone copes with repetitive load [r1]. Cortical-rich sites (tibia, metatarsal and other long-bone shafts) healed faster than trabecular-rich sites (pelvis, femoral neck, calcaneus) in a meta-analysis [r15]. High-risk sites combine high tensile load with low blood flow [r3]. Muscles share bone load, and strengthening local musculature reduces the load on bone [r1].",
    structures: [
      { name: "Cortical bone", role: "Resists bending and compression; the site of microdamage and stress fracture lines in shaft sites such as the tibia and metatarsal [r1,r15]" },
      { name: "Trabecular bone", role: "Sponge-like bone at the metaphyses and in the pelvis, femoral neck and calcaneus; trabecular-rich sites healed more slowly [r15]" },
      { name: "Periosteum and marrow", role: "Periosteal reaction and marrow oedema are the early imaging markers of a stress reaction [r2,r12]" },
      { name: "Remodelling units (osteoclasts and osteoblasts)", role: "Remove microdamage and replace bone; the balance with microdamage formation determines BSI risk [r1]" },
      { name: "Local musculature", role: "Shares and absorbs load; strengthening the calf for tibial BSIs and the foot intrinsics for metatarsal BSIs is advised [r1]" },
      { name: "Endocrine and nutritional support of bone", role: "Energy availability, menstrual function and bone mass interact to set bone health; these are the three components of the Female Athlete Triad [r17,r7]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "A BSI is a fatigue failure of bone. A stress reaction, with bone marrow oedema and periosteal reaction, can progress to a stress fracture and a complete fracture along one continuum [r1]. Kaeding and Miller graded stress fractures from grade I (asymptomatic stress reaction on imaging) to grade V (nonunion) [r2]. The load applied is the more modifiable half of the equation, through training-programme design, reduced impact forces and local muscle strength [r1]. Healing potential varies by site: in 76 studies, location influenced return to sport timelines and treatment complications [r11].\n\nBone capacity depends on health as well as load. The 2023 IOC consensus describes a Physiological Model in which problematic or adaptable LEA exposure, combined with individual moderating factors, leads to changes in health and performance outcomes [r4]. In practice, the risk of BSI rose with the number of Female Athlete Triad-related risk factors: about 15–20% for significant single factors and 30–50% for significant combinations [r7]. A modified cumulative risk score also predicted BSI in male runners, whereas BMI and BMD scores alone did not [r9]. Critics point out that most REDs evidence is associational, that energy availability is very hard to measure in the field, and that the same symptoms can have other causes, so a diagnosis of REDs should not be assumed [r6].",
    structures: [
      { name: "Cortex at the stress site", effect: "Microdamage, then a stress reaction and, if loading continues, a stress fracture line [r1,r2]" },
      { name: "Periosteum and marrow", effect: "Periosteal reaction and marrow oedema; the MRI grade predicts the time to return to sport [r15]" },
      { name: "Remodelling balance", effect: "Disrupted homeostasis between microdamage formation and removal [r1]" },
      { name: "Bone mineral density and structure", effect: "Lower BMD and amenorrhoea or oligomenorrhoea were associated with higher MRI grades and longer recovery [r10]" }
    ],
    muscles: [
      { name: "Local stabilising and shock-absorbing muscles", effect: "Weakness or fatigue reduces the share of load carried by muscle, so more reaches bone; strengthening the calf and foot intrinsics is advised [r1]." },
      { name: "Hip and trunk muscles", effect: "Influence running mechanics and impact forces. Cross-training and strengthening should continue during offloading to avoid deconditioning [r16]." },
      { name: "Deconditioning during offloading", effect: "Maintain cardiopulmonary and musculoskeletal fitness with cross-training while loading is reduced [r16]." }
    ],
    cellular: [
      { phase: "Repetitive loading", timing: "Weeks of high load", description: "Each cycle produces microdamage in the cortex; damage and removal are normally balanced [r1]." },
      { phase: "Remodelling exceeds formation", timing: "Weeks", description: "Remodelling removes damaged bone, but when removal outpaces new bone formation, or formation is impaired by low energy availability, the bone is transiently weaker (mechanistic model) [r1,r4]." },
      { phase: "Stress reaction", timing: "Weeks", description: "Marrow oedema and periosteal reaction appear, and loading becomes painful [r2]." },
      { phase: "Stress fracture", timing: "Weeks if loading continues", description: "A cortical fracture line forms and can progress to a complete fracture [r1]." },
      { phase: "Healing", timing: "Weeks to months", description: "With modified load, new bone forms and the cortex remodels. Mean return to sport was 41.7 to 98.5 days across MRI grades 1–4 [r15]." }
    ],
    systems: [
      { system: "Endocrine and energy availability", effect: "REDs is defined by exposure to LEA in female and male athletes [r4]. The Female Athlete Triad has three components: LEA with or without disordered eating, menstrual dysfunction and low bone mineral density [r17]." },
      { system: "Musculoskeletal chain", effect: "Training load, impact forces, running mechanics and malalignment set the load on bone; these are the modifiable half of the BSI equation [r1]." },
      { system: "Nutritional and metabolic", effect: "Calcium and vitamin D contribute to bone health; supplementation reduced stress fractures in female Navy recruits (20% lower incidence) [r18]. Evidence outside military recruits is limited." },
      { system: "Nervous system and pain", effect: "Pain is mechanical and load-related early, then progresses to pain in daily life and at rest as the lesion advances [r1]." },
      { system: "Psychological and behavioural", effect: "Mental health interacts with REDs, and athletes may under-report symptoms or conceal restrictive eating or over-exercise; sensitive, non-judgemental screening and a multidisciplinary team are needed [r4]." }
    ]
  },

  grading: {
    system: "Kaeding and Miller stress fracture grading (I–V), plus MRI-based BSI grades 1–4 for prognosis",
    grades: [
      { grade: "Grade I", description: "Asymptomatic stress reaction on imaging [r2].", prognosis: "Usually settles with load adjustment" },
      { grade: "Grade II", description: "Pain with no fracture line [r2].", prognosis: "Good prognosis at low-risk sites with modified loading [r1]" },
      { grade: "Grade III", description: "Non-displaced stress fracture [r2].", prognosis: "Heals with modified loading at low-risk sites; slower than reaction-only injuries" },
      { grade: "Grade IV", description: "Displaced stress fracture [r2].", prognosis: "Needs orthopaedic review; surgical fixation may be required" },
      { grade: "Grade V", description: "Nonunion [r2].", prognosis: "Needs orthopaedic review; surgery is usually needed" },
      { grade: "MRI grades 1–4 (all sites combined)", description: "Mean time to return to sport was 41.7 days for grade 1, 70.1 for grade 2, 84.3 for grade 3 and 98.5 for grade 4 [r15].", prognosis: "Higher MRI grade and lower BMD predicted longer recovery in track and field athletes [r10]" }
    ]
  },

  timeframes: {
    summary: "Healing time depends on severity and site. Mean return to sport rose from 41.7 to 98.5 days across MRI grades 1–4 [r15]. By site, the pooled time to return was longest for the tarsal navicular (127 days) and femoral neck (107 days) and shortest for the posteromedial tibial shaft (44 days) and fibula (56 days) [r11]. The phases below are typical and overlap.",
    healing: [
      { phase: "Offloading and symptom settling", startDay: 0, endDay: 21, description: "Initial load reduction (partial or non-weight-bearing if needed) until daily activities are pain-free [r16]" },
      { phase: "Healing under graded loading", startDay: 14, endDay: 84, description: "Cross-training, strengthening and walking progression, guided by symptoms [r16]" },
      { phase: "Return to running and sport", startDay: 42, endDay: 127, description: "Return-to-run progression; return took 41.7–98.5 days by MRI grade and 44–127 days by site [r15,r11]" },
      { phase: "Remodelling and capacity building", startDay: 84, endDay: 365, description: "Keep strength, load management and an energy availability plan to reduce recurrence [r1]" }
    ],
    milestones: [
      { label: "Pain-free daily activities for 5 consecutive days", day: 21, note: "The criterion for starting a return-to-run program at low-risk sites [r16]; time varies" },
      { label: "Mean return to sport, MRI grade 1", day: 42, note: "41.7 days across sites [r15]" },
      { label: "Pooled return, posteromedial tibial shaft", day: 44, note: "44 days [r11]" },
      { label: "Mean return to sport, MRI grade 4", day: 99, note: "98.5 days across sites [r15]" },
      { label: "Pooled return, tarsal navicular", day: 127, note: "127 days [r11]" }
    ],
    returnToSport: "Criteria-based and symptom-driven. More than 90% of athletes return to sport [r11,r15]. Low-risk sites often take about 6–14 weeks, and high-risk or trabecular sites take longer [r15,r11]. A return-to-run program can start once the athlete has been pain-free in daily activities for 5 consecutive days, with volume progressed before speed [r16]."
  },

  clinicalPresentation: {
    symptoms: [
      "Gradual onset of focal bone pain over days to weeks, often after a rise in training load or a change of surface, footwear or event [r3]",
      "Pain at first after activity, then during it, then in daily life, and in advanced injuries at night or at rest [r1]",
      "Pain provoked by impact or the specific loading task (running, hopping, push-off, rowing or throwing, depending on site)",
      "Fatigue, mood change, recurrent illness or injuries, restrictive eating and menstrual disturbance in some athletes [r4]",
      "Vague pain at deep sites (femoral neck, pelvis, sacrum) that can be mistaken for soft-tissue pain [r3,r10]"
    ],
    signs: [
      "Focal bony tenderness over the injured site, usually well localised and reproducible [r1]",
      "Pain provoked by loading tests such as a single-leg hop or the sport-specific task (clinical convention)",
      "Local swelling, warmth or a palpable thickening at superficial sites such as the tibia or metatarsal",
      "Antalgic gait or an altered running pattern, with reduced push-off or stance time",
      "Low BMI or recent weight loss, and signs of low energy availability, in some athletes [r4,r7]"
    ]
  },

  assessment: {
    subjective: [
      "Pain behaviour: onset, site, relation to load, whether it hurts in daily life or at night, and whether it is progressing [r1]",
      "Training load: recent rises in volume, intensity, track or hill work, surface and footwear changes, and rest days [r3]",
      "Previous BSI or stress fracture, which is a strong predictor of another [r9,r8]",
      "Energy availability: restrictive or rigid eating, dieting for weight or aesthetic goals, fatigue, mood, and gastrointestinal symptoms [r4]",
      "Menstrual history (oligomenorrhoea or amenorrhoea, age at menarche) in female athletes, and symptoms of low testosterone (low libido, morning erections) in male athletes [r8,r4]",
      "Bone health: prior fractures, family history, steroid or other medication use, calcium intake and vitamin D status [r18,r7]",
      "Sport, level, goals and external pressure to keep training; and mental health, using sensitive questions [r4]"
    ],
    observation: [
      "Body build and any recent weight loss (BMI below 21.0 kg/m2 was associated with BSI in girls and women) [r7]",
      "Gait and sport-specific movement: foot strike, stride rate, hip control and impact pattern [r1]",
      "Local swelling or erythema, and callus or footwear wear patterns"
    ],
    palpation: [
      "Systematic palpation along the bone, with focal tenderness over one site and comparison with the other side [r1]",
      "Deep or high-risk sites: femoral neck, anterior tibial cortex, medial malleolus, navicular, base of the fifth metatarsal and sesamoids, where an early imaging decision is important [r3]",
      "Adjacent soft tissue and joints, to separate bone pain from tendon, muscle or joint pain (clinical reasoning)"
    ],
    rangeOfMotion: [
      "Joint motion above and below the site, looking for restriction that increases load (for example hip internal rotation, ankle dorsiflexion and first MTP extension) (clinical reasoning)",
      "Range at the injured joint, which is normally preserved in a bone stress injury"
    ],
    strength: [
      "Strength and endurance of the local musculature (calf for tibial BSIs, foot intrinsics for metatarsal BSIs, hip abductors and extensors) [r1]",
      "Capacity tests as pain allows, such as repeated single-leg heel raises"
    ],
    neuro: [
      "Neurological screen of the limb; neuropathy or other neurological disease is a contributor in the foot (clinical reasoning)"
    ],
    functional: [
      "Single-leg hop in place only when a high-risk site or a displaced fracture is not suspected: pain on hopping at the site is a positive provocation [r3]",
      "Gait and walking pain rating, and sport-specific loading when appropriate",
      "Single-leg squat and balance for lower-limb control"
    ],
    specialTests: [
      { name: "Focal bony palpation", purpose: "Localise the stress injury to a single bone site", procedure: "Palpate the bone systematically along its surface, and compare with the other side.", positive: "Focal bony tenderness reproducing the familiar pain. No accuracy figures were identified in the sources reviewed.", refs: [] },
      { name: "Single-leg hop test", purpose: "Provoke pain with impact loading", procedure: "Hop in place on the affected leg a few times, only if there is no suspicion of a high-risk site or a displaced fracture.", positive: "Reproduction of focal pain over the bone. No accuracy figures were identified, and repeated aggravation should be avoided.", refs: [] },
      { name: "Percussion or tuning-fork test", purpose: "Supportive test for a bone stress injury", procedure: "Tap along the bone shaft or apply a vibrating tuning fork and note focal pain.", positive: "Focal pain over the bone. No accuracy figures were identified in the sources reviewed; confirm with imaging if the diagnosis is uncertain.", refs: [] },
      { name: "Female Athlete Triad Cumulative Risk Assessment (screen)", purpose: "Stratify BSI risk and guide clearance", procedure: "Score energy availability (including disordered eating), menstrual function, BMI, bone mineral density and prior stress reaction or fracture, then assign a low, moderate or high risk category.", positive: "Moderate and high-risk categories carried 2.6 and 3.8 times the risk of a subsequent BSI in 239 collegiate female athletes [r8].", refs: [] }
    ],
    clinicalRules: [
      { name: "REDs Clinical Assessment Tool, version 2 (CAT2)", description: "Introduced in the IOC 2023 consensus statement to help detect and diagnose REDs on the basis of accumulated severity and risk stratification, with associated training and competition recommendations [r4]." },
      { name: "Female Athlete Triad risk stratification", description: "The 2014 consensus proposed a risk stratification point system to guide decisions on sport participation, clearance and return to play, with clearance categories, a multidisciplinary team and treatment contracts [r17]. A modified score also predicted BSI in male runners [r9]." },
      { name: "No validated clinical prediction rule for diagnosis", description: "Diagnosis is clinical (a load history and focal bony tenderness) and confirmed by imaging when uncertain. Energy availability cannot be measured accurately in the field, so REDs is identified through symptoms and risk factors [r6]." }
    ],
    outcomeMeasures: [
      { name: "Numeric pain rating (0–10) during daily activities, walking, hopping and running", use: "Symptom-driven loading: the optimal load does not produce symptoms during, after or the day following loading [r16]" },
      { name: "MRI grade (1–4)", use: "Prognostic information on time to return to sport, which rose from 41.7 to 98.5 days across grades [r15]" },
      { name: "Bone mineral density (DXA Z-score)", use: "Lower BMD predicted longer recovery, and a Z-score below −1.0 was associated with BSI in girls and women [r10,r7]" },
      { name: "Low energy availability in females questionnaire (LEAF-Q)", use: "A survey tool to identify athletes at risk of LEA [r5]" },
      { name: "Weekly training load log and next-morning pain", use: "Tracks the return-to-run program and detects flares early [r16]" }
    ],
    imaging: [
      { modality: "Plain radiograph", indication: "First-line imaging in suspected BSI, mainly to exclude other pathology and to monitor healing", findings: "Plain radiographs may be normal early [r12]; MRI was the next step when radiographs were negative [r10]. Later films can show periosteal reaction, callus or a fracture line (clinical convention)" },
      { modality: "MRI", indication: "Normal radiographs with continued suspicion, a high-risk site, or when grading and prognosis are needed", findings: "Marrow oedema, periosteal reaction and fracture lines; higher MRI grade predicts longer return to sport [r10,r15]" },
      { modality: "CT", indication: "To define a fracture line, displacement or union at a complex or high-risk site, or when MRI is not possible", findings: "Cortical fracture line, sclerosis and union or nonunion (clinical convention)" },
      { modality: "DXA", indication: "Athletes with recurrent or multiple BSIs, a high-risk site, amenorrhoea or other REDs risk features", findings: "Low BMD is a risk factor and predicts longer recovery [r10,r7]" }
    ]
  },

  differentials: [
    { name: "Medial tibial stress syndrome (shin splints)", id: "medial-tibial-stress-syndrome", distinguishing: "Diffuse tenderness along the posteromedial tibial border over a longer length, without a focal point of bony tenderness." },
    { name: "Chronic exertional compartment syndrome", id: "chronic-exertional-compartment-syndrome", distinguishing: "Exercise-induced tightness and pain that settle with rest, often with transient neurological symptoms, without focal bony tenderness." },
    { name: "Tendinopathy or muscle strain at the same site", distinguishing: "Pain at the tendon or muscle on resisted testing or stretch, rather than focal bony tenderness; imaging excludes bone involvement." },
    { name: "Tibial stress fracture (site-specific BSI)", id: "tibial-stress-fracture", distinguishing: "A BSI at a specific low-risk or high-risk (anterior tibia) site; use the site-specific page for its management [r3,r11]." },
    { name: "Femoral neck stress fracture", id: "femoral-neck-stress-fracture", distinguishing: "Groin or anterior hip pain with load, a high-risk tension-side site that needs urgent imaging and protected weight-bearing [r3]." },
    { name: "Physeal stress injury in skeletally immature athletes", id: "physeal-fracture", distinguishing: "Pain at an open growth plate in adolescents, for example the finger physes in young climbers; MRI is usually diagnostic [r19]." },
    { name: "Infection, tumour or metabolic bone disease", distinguishing: "Constant or night pain, fever, systemic features, or a history of cancer; low BMD with minimal load suggests insufficiency fracture [r13]. Arrange urgent imaging and medical review." }
  ],
  redFlags: [
    "Pain at a high-risk site (femoral neck, anterior tibial cortex, navicular, proximal fifth metatarsal, medial malleolus, talus, patella, great toe sesamoids) or a displaced or complete fracture: stop loading and refer for orthopaedic or sports medicine review [r3].",
    "Groin or anterior hip pain with weight-bearing in a runner: suspect a femoral neck stress fracture, protect weight-bearing and arrange MRI promptly [r3].",
    "Constant rest or night pain, fever, unexplained weight loss or a history of cancer: suspect infection, tumour or advanced fracture and arrange urgent imaging and medical review (clinical convention).",
    "Multiple or recurrent BSIs, amenorrhoea or oligomenorrhoea, low BMI or restrictive eating: screen for REDs and refer for medical, dietetic and, where needed, mental health assessment [r4,r17].",
    "Dizziness, fainting, palpitations, marked weight loss or signs of a severe eating disorder: arrange same-day medical assessment, because REDs can affect cardiovascular function (clinical convention) [r5].",
    "No progress after about 12 weeks of well-delivered load management, or pain that returns with graded loading: suspect delayed union or nonunion and refer for repeat imaging (clinical convention)."
  ],

  management: {
    principles: "Treat a low-risk BSI as a load–capacity problem. Reduce load until daily activities are pain-free, then build it with symptom-driven loading: the optimal load does not produce symptoms during, after or the day following loading [r16]. Find and treat the causes, because the high recurrence rate signals a need to address underlying factors [r1]. Screen every athlete with a BSI for energy availability, menstrual function and bone health, using the REDs and Female Athlete Triad frameworks, and use a multidisciplinary team when risk is moderate or high [r4,r17]. The evidence for the optimal-load approach is largely expert-based and observational [r16]. High-risk sites need a more aggressive approach, often non-weight-bearing immobilisation or surgery [r3].",
    medical: [
      { name: "REDs and Female Athlete Triad screening and multidisciplinary care", description: "The IOC 2023 statement introduced the REDs Clinical Assessment Tool (CAT2) with severity and risk stratification and training and competition recommendations, plus prevention and treatment principles [r4]. The 2014 Triad consensus gives clearance categories, a multidisciplinary team and treatment contracts [r17]. Treatment centres on restoring energy availability with a doctor, dietitian and, where needed, a psychologist (clinical reasoning; the detailed IOC treatment principles were not read in full). The causal evidence is partly associational and debated [r6].", evidence: "limited", recommendation: "recommended", refs: ["r4", "r17", "r6"] },
      { name: "Calcium and vitamin D (ensure adequate intake)", description: "In 5201 female Navy recruits, 2000 mg calcium and 800 IU vitamin D daily gave a 20% lower incidence of stress fractures (5.3% versus 6.6%) [r18]. A systematic review of four trials in military personnel found a risk ratio of 0.77 (95% CI 0.62–0.95) in the Navy trial [r20]. A lower dose (1000 mg and 1000 IU) in Army recruits prevented increases in bone resorption markers but did not change tibial microarchitecture after 8 weeks [r14]. The evidence is from military recruits; whether it applies to athletes is not established.", evidence: "moderate", recommendation: "consider", refs: ["r18", "r20", "r14"] },
      { name: "Short-term analgesia", description: "Simple analgesics or NSAIDs, in the short term only (sooner than 7 days) and only for resting pain and night pain [r16].", evidence: "expert-opinion", recommendation: "consider", refs: ["r16"] },
      { name: "Non-weight-bearing immobilisation and orthopaedic review (high-risk sites)", description: "Treatment of high-risk BSIs consists of non-weight-bearing immobilisation, often with a prolonged period away from sport and a methodical reintroduction to activity; some require surgery [r3].", evidence: "limited", recommendation: "recommended", refs: ["r3"] },
      { name: "Healing adjuncts (low-intensity pulsed ultrasound, recombinant parathyroid hormone)", description: "May be attempted to influence tissue healing, but they are not established [r16].", evidence: "very-limited", recommendation: "consider", refs: ["r16"] },
      { name: "Surgical fixation (displaced fracture, nonunion, selected high-risk sites)", description: "For grade IV–V stress fractures and selected high-risk sites. High-risk stress fractures may require surgical intervention [r3]. Treatment complications were highest at the femoral neck, navicular, anterior tibial shaft and fifth metatarsal [r11].", evidence: "limited", recommendation: "consider", refs: ["r3", "r11"] }
    ],
    physio: [
      { name: "Education and symptom-driven load management", description: "Explain the continuum from stress reaction to fracture and why symptoms guide load. Keep load at a level that causes no symptoms during, after or the day following loading [r16].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r16", "r1"] },
      { name: "Cross-training and strength to maintain fitness", description: "Cycling, pool running or swimming plus upper-body and core work while addressing musculoskeletal fitness [r16].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r16"] },
      { name: "Graded return-to-run program", description: "Begin once the athlete has been pain-free in daily activities for 5 consecutive days, progressing volume before speed [r16].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r16"] },
      { name: "Local muscle strengthening and movement correction", description: "Strengthen the calf for tibial BSIs and the foot intrinsics for metatarsal BSIs, and address malalignment and abnormal movement patterns [r1].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r1"] },
      { name: "Gait retraining and impact reduction", description: "Instruct the athlete to run 'softer' or with a higher stride rate to reduce impact forces; optimal loading may also include jump training or gait retraining to reduce later BSI risk [r1,r16].", evidence: "expert-opinion", recommendation: "consider", refs: ["r1", "r16"] },
      { name: "Screening for REDs risk and referral", description: "Use the Triad cumulative risk score or the REDs CAT2 and refer athletes with moderate or high risk for a multidisciplinary team [r8,r4,r17].", evidence: "limited", recommendation: "recommended", refs: ["r8", "r4", "r17"] },
      { name: "Continuing full training through pain", description: "BSIs lie on a continuum and can progress from reaction to fracture if loading continues [r1].", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r1"] },
      { name: "Rest alone without addressing the causes", description: "Most BSIs heal with modified loading, but the high recurrence rate signals a need to address training load, mechanics, strength and energy availability, not just give time off [r1,r9].", evidence: "limited", recommendation: "not-recommended", refs: ["r1", "r9"] },
      { name: "Prolonged complete unloading beyond symptom relief", description: "Initial load reduction is typically needed to alleviate symptoms, but cross-training and strengthening should continue [r16]; prolonged unloading beyond that point causes deconditioning (clinical reasoning).", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r16"] }
    ],
    education: [
      "A bone stress injury is a fatigue injury: the bone has been loaded faster than it could repair. Most low-risk injuries heal well with a planned period of modified load.",
      "Pain is your guide. The right load does not cause pain during, after or the next day.",
      "Keep fit while you heal with cycling, pool work, and upper-body and core training.",
      "Eating enough for your training matters for bone health. Tell us about dieting, missed periods, tiredness or low mood so we can get you the right help. This is common and treatable.",
      "A previous bone stress injury makes another more likely, so fixing the cause (training load, nutrition, mechanics and strength) is as important as healing the bone [r9]."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and symptom-driven. The optimal load does not produce symptoms during, after or the day following loading, and it is increased only when this holds [r16]. The stages are: offload and settle; restore capacity; return to running or sport-specific load; and return to sport with prevention. Timeframes depend on site and severity (44–127 days by site, 41.7–98.5 days by MRI grade) [r11,r15]. The stages are written for low-risk sites; high-risk sites follow the orthopaedic plan and a slower, more cautious progression [r3]. Dosages are common clinical conventions based on the principles in the optimal-load paper, not trial-based prescriptions [r16]. Address training load, mechanics, strength and energy availability throughout [r1,r4].",
    stages: [
      {
        name: "Offload & settle",
        timeframe: "Weeks 0–2 (until daily activities are pain-free)",
        goals: ["Relieve pain with initial load reduction (partial or non-weight-bearing if needed)", "Maintain cardiovascular and musculoskeletal fitness", "Start proximal strengthening", "Educate on cause, symptom-driven loading and energy availability, and screen for REDs"],
        precautions: ["Avoid hopping and running until pain-free in daily life", "Use a boot or crutches if walking is painful [r16]", "Treat high-risk sites with protected weight-bearing and referral [r3]", "Screen red flags, REDs risk and bone health before loading [r4]"],
        exercises: [
          { name: "Cycling or pool running (non-impact cardiovascular)", dosage: "30–45 min, 4–5 times a week, below the pain threshold", cues: "Maintain aerobic fitness without impact at the injured site" },
          { name: "Glute bridge", dosage: "3 × 12–15, daily", cues: "Drive through the heels and keep the ribs down", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Side-lying clamshell", dosage: "3 × 15 each side, daily", cues: "Keep the pelvis still", figure: { pose: "ex-clamshell", view: "lateral", props: ["mat"] } },
          { name: "Dead bug (core)", dosage: "3 × 8–10 each side, daily", cues: "Press the low back into the mat", figure: { pose: "ex-dead-bug", view: "lateral", props: ["mat"] } },
          { name: "Upper-body and trunk strength", dosage: "2–3 sessions a week, 3 × 8–12, avoiding loading the injured limb", cues: "Keep the training habit and strength without bone load at the site" }
        ],
        progressionCriteria: ["Pain-free daily activities for 5 consecutive days [r16]", "No focal bony tenderness at the site", "Walks 20–30 min with pain at or below 2/10 (clinical convention)"]
      },
      {
        name: "Restore capacity",
        timeframe: "Weeks 2–6",
        goals: ["Return to normal walking volume without a limp", "Build local muscle strength (for example calf or foot intrinsics) [r1]", "Improve single-leg control and balance", "Continue cross-training and begin an energy availability plan if risk is present"],
        precautions: ["Increase load only if the previous session settled by the next day [r16]", "Avoid hopping and running", "Keep pain at or below about 2/10 and settled by the next morning (clinical convention)"],
        exercises: [
          { name: "Bodyweight squat", dosage: "3 × 10–12, 3 times a week", cues: "Whole foot on the floor, knee over the second toe", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Double-leg calf raise", dosage: "3 × 12–15, 3 s up and 3 s down, daily", cues: "Even weight through the forefoot", figure: { pose: "ex-calf-raise", view: "lateral" } },
          { name: "Single-leg balance", dosage: "3 × 30–45 s each side, daily", cues: "Keep the pelvis level and the arch lifted", figure: { pose: "ex-single-leg-balance", view: "anterior" } },
          { name: "Step-up", dosage: "3 × 8–10 each leg, 3 times a week", cues: "Control the pelvis; push through the whole foot", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Walking program", dosage: "Build to 45–60 min, 4–5 times a week on level ground", cues: "Even, comfortable steps" }
        ],
        progressionCriteria: ["Walks 45–60 min with no pain during or the next day", "Single-leg calf raise × 15 without pain at the site (clinical convention)", "No tenderness at the injury site and a normal gait"]
      },
      {
        name: "Return to running or impact",
        timeframe: "Weeks 4–10",
        goals: ["Restart running in a graded way, volume before speed [r16]", "Build impact tolerance with hopping and jumping", "Optimise running mechanics and impact forces [r1]"],
        precautions: ["Start only after pain-free daily activities for 5 consecutive days [r16]", "Allow rest days between runs and step back if pain appears during, after or the next day [r16]", "Do not progress loading faster than energy intake and recovery support (clinical reasoning)"],
        exercises: [
          { name: "Walk–run program on soft, level surfaces", dosage: "1 min run / 2 min walk for 20 min, every second day, adding running as the next day stays symptom-free (clinical convention)", cues: "Short, quick steps and a soft landing", figure: { pose: "run-toe-off", view: "lateral" } },
          { name: "Continuous running with volume progression", dosage: "Build weekly run time by about 10% as symptoms allow (clinical convention); speed work last", cues: "Check the site the morning after each run" },
          { name: "Single-leg hop in place, then forward", dosage: "3 × 5–8 each leg, twice a week once running is tolerated", cues: "Soft landing; stick for 2 s", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Single-leg calf raise (heavy)", dosage: "3–4 × 6–10, 2–3 times a week", cues: "Slow tempo, full range", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Romanian deadlift", dosage: "3 × 8, 2 times a week, progressing load", cues: "Hinge from the hips with a neutral spine", figure: { pose: "ex-rdl", view: "lateral" } }
        ],
        progressionCriteria: ["Runs 30 min continuously with pain at or below 1–2/10 and no next-morning increase [r16]", "Hopping pain-free and symmetrical", "No focal tenderness at the injury site", "Stable weekly volume for 2 weeks without a flare"]
      },
      {
        name: "Return to sport & prevention",
        timeframe: "Weeks 8–16+ (criteria-based; longer for high-risk sites)",
        goals: ["Return to sport-specific running, cutting and jumping", "Return to full training and competition", "Maintain strength, jump training and load monitoring", "Resolve contributing causes (load, mechanics, energy availability, bone health) [r1,r4]"],
        precautions: ["Increase training load in steps, not spikes", "Do not return to competition while pain is present during or the day after sport", "Keep monitoring energy availability and bone health, with the multidisciplinary team where risk is moderate or high [r17]"],
        exercises: [
          { name: "Planned then reactive change of direction", dosage: "2 sessions a week, increasing speed and angle", cues: "Land under control, knee over the foot", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Jump training (low to moderate height)", dosage: "3 × 5, twice a week, progressing gradually", cues: "Soft landing with the hips and knees bent", figure: { pose: "jump-land", view: "lateral" } },
          { name: "Graded team training or race-pace work", dosage: "Partial then full over 2–3 weeks", cues: "Share the plan with the coach; monitor pain and load" },
          { name: "Gait retraining (higher stride rate, softer landing)", dosage: "Short blocks within runs, 2–3 times a week", cues: "Quiet steps and a slightly higher cadence", figure: { pose: "run-contact", view: "lateral" } },
          { name: "Heavy strength maintenance (hip, calf, foot)", dosage: "2 times a week all year, 3–5 × 5–8", cues: "Heavy loads with a controlled tempo", figure: { pose: "ex-split-squat", view: "lateral" } }
        ],
        progressionCriteria: ["Full training for at least 2 weeks with no pain during or the next day [r16]", "Hop and capacity tests pain-free and symmetrical (clinical convention)", "Energy availability plan and bone-health follow-up in place", "Athlete, coach and clinicians agree on the return"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated return-to-sport (RTS) criteria exist for BSI in general. The criteria below reflect the symptom-driven approach and clinical convention [r16]",
      "Pain-free daily activities for at least 5 consecutive days before starting running (low-risk sites) [r16]",
      "No focal bony tenderness, and pain-free hop and local capacity tests (clinical convention)",
      "Graded running and sport-specific load progressed from volume to speed with no pain during, after or the next day [r16]",
      "Full, unrestricted training for at least 2 weeks without a flare",
      "Imaging evidence of healing for high-risk sites, and clearance by the treating specialist [r3]",
      "Cause addressed: load plan, mechanics, strength and, where risk features are present, a REDs or Triad risk assessment with a plan for the athlete and team [r4,r17]"
    ],
    tests: ["Palpation of the site and pain rating during hopping", "Local capacity tests (for example single-leg heel raise repetitions)", "Single-leg hop tests with pain rating", "Weekly running volume and next-morning pain log", "REDs CAT2 or Triad cumulative risk score [r4,r8]", "Repeat imaging only if symptoms persist or the site is high-risk"]
  },
  prognosis: "The prognosis for BSIs is good. In a meta-analysis of 76 studies, more than 90% of athletes returned to sport, although site influenced timelines and complications [r11]. Mean return to sport across all sites rose from 41.7 days (MRI grade 1) to 98.5 days (grade 4) [r15]. Complication rates were highest for the femoral neck, tarsal navicular, anterior tibial shaft and fifth metatarsal and lowest for the fibula, pubic bone and posteromedial tibial shaft [r11]. Higher MRI grade, lower BMD, trabecular sites and oligomenorrhoea or amenorrhoea were associated with slower recovery [r10]. BSIs tend to recur: the prior BSI score and the cumulative risk score both predicted further BSIs in male runners [r1,r9]. Long-term bone health outcomes after REDs or the Triad depend on restoring energy availability and menstrual function, which are beyond the scope of the sources reviewed.",
  prevention: [
    "Progress training load gradually, build rest days into the plan and avoid sudden jumps in volume or intensity [r1,r3].",
    "Screen at preparticipation and after any BSI for energy availability, menstrual function, prior BSI and bone health, using the Triad cumulative risk assessment or the REDs CAT2, and act on moderate and high risk [r8,r4,r17].",
    "Maintain local strength all year (calf and foot intrinsics for tibial and metatarsal BSIs) and address malalignment and abnormal movement patterns [r1].",
    "Reduce impact forces with softer landings or a higher stride rate where appropriate (expert opinion) [r1].",
    "Ensure adequate calcium and vitamin D; evidence for fewer stress fractures comes from military recruits and does not prove a benefit for athletes [r18,r20].",
    "Treat the REDs model with care: most evidence is associational and the symptoms are generic, so look at the whole athlete, including allostatic load, and avoid a single-cause diagnosis [r6]."
  ],
  clinicalPearls: [
    "A BSI is a continuum, not a single diagnosis. Reaction, fracture and complete fracture sit along one pathway, so stage the injury by imaging grade, site and symptoms [r1,r2].",
    "Know the site. A low-risk shaft site is managed with symptom-driven load; a high-risk tension-side site needs protection, imaging and specialist input [r3,r11].",
    "Always screen the athlete, not just the bone. Moderate and high Triad risk scores carried 2.6 and 3.8 times the BSI risk, and a previous BSI strongly predicts the next [r8,r9].",
    "Ask about eating, periods and mood in a sensitive way, and team with a doctor and dietitian. REDs evidence is largely associational, so keep the differential open [r4,r6].",
    "Use MRI grade and site to set expectations: mean return to sport rose from 41.7 to 98.5 days across grades, and ranged from 44 days at the posteromedial tibia to 127 days at the navicular [r15,r11].",
    "Cross-train and strengthen during offloading. Load reduction is for symptoms, and fitness and muscle capacity should be preserved [r16]."
  ],
  related: ["tibial-stress-fracture", "metatarsal-stress-fracture", "femoral-neck-stress-fracture", "navicular-stress-fracture", "sacral-stress-fracture", "medial-tibial-stress-syndrome"],

  references: [
    { id: "r1", citation: "Warden SJ, Davis IS, Fredericson M. Management and prevention of bone stress injuries in long-distance runners. J Orthop Sports Phys Ther. 2014;44(10):749-65.", pmid: "25103133", doi: "10.2519/jospt.2014.5334", type: "narrative-review", year: 2014 },
    { id: "r2", citation: "Kaeding CC, Miller T. The comprehensive description of stress fractures: a new classification system. J Bone Joint Surg Am. 2013;95(13):1214-20.", pmid: "23824390", doi: "10.2106/JBJS.L.00890", type: "other", year: 2013 },
    { id: "r3", citation: "McInnis KC, Ramey LN. High-risk stress fractures: diagnosis and management. PM R. 2016;8(3 Suppl):S113-24.", pmid: "26972260", doi: "10.1016/j.pmrj.2015.09.019", type: "narrative-review", year: 2016 },
    { id: "r4", citation: "Mountjoy M, Ackerman KE, Bailey DM, et al. 2023 International Olympic Committee's (IOC) consensus statement on Relative Energy Deficiency in Sport (REDs). Br J Sports Med. 2023;57(17):1073-97.", pmid: "37752011", doi: "10.1136/bjsports-2023-106994", type: "consensus-statement", year: 2023 },
    { id: "r5", citation: "Gallant TL, Ong LF, Wong L, et al. Low energy availability and relative energy deficiency in sport: a systematic review and meta-analysis. Sports Med. 2025;55(2):325-39.", pmid: "39485653", doi: "10.1007/s40279-024-02130-0", type: "meta-analysis", year: 2025 },
    { id: "r6", citation: "Jeukendrup AE, Areta JL, Van Genechten L, et al. Does Relative Energy Deficiency in Sport (REDs) syndrome exist? Sports Med. 2024;54(11):2793-816.", pmid: "39287777", doi: "10.1007/s40279-024-02108-y", type: "narrative-review", year: 2024 },
    { id: "r7", citation: "Barrack MT, Gibbs JC, De Souza MJ, et al. Higher incidence of bone stress injuries with increasing female athlete triad-related risk factors: a prospective multisite study of exercising girls and women. Am J Sports Med. 2014;42(4):949-58.", pmid: "24567250", doi: "10.1177/0363546513520295", type: "cohort", year: 2014 },
    { id: "r8", citation: "Tenforde AS, Carlson JL, Chang A, et al. Association of the female athlete triad risk assessment stratification to the development of bone stress injuries in collegiate athletes. Am J Sports Med. 2017;45(2):302-10.", pmid: "28038316", doi: "10.1177/0363546516676262", type: "cohort", year: 2017 },
    { id: "r9", citation: "Kraus E, Tenforde AS, Nattiv A, et al. Bone stress injuries in male distance runners: higher modified Female Athlete Triad Cumulative Risk Assessment scores predict increased rates of injury. Br J Sports Med. 2019;53(4):237-42.", pmid: "30580252", doi: "10.1136/bjsports-2018-099861", type: "cohort", year: 2019 },
    { id: "r10", citation: "Nattiv A, Kennedy G, Barrack MT, et al. Correlation of MRI grading of bone stress injuries with clinical risk factors and return to play: a 5-year prospective study in collegiate track and field athletes. Am J Sports Med. 2013;41(8):1930-41.", pmid: "23825184", doi: "10.1177/0363546513490645", type: "cohort", year: 2013 },
    { id: "r11", citation: "Hoenig T, Eissele J, Strahl A, et al. Return to sport following low-risk and high-risk bone stress injuries: a systematic review and meta-analysis. Br J Sports Med. 2023;57(7):427-32.", pmid: "36720584", doi: "10.1136/bjsports-2022-106328", type: "meta-analysis", year: 2023 },
    { id: "r12", citation: "Bojovic M, Hagert E. Bone stress fractures and injuries of the upper limb in athletes. Int Orthop. 2026;50(11):2805-13.", pmid: "42570081", doi: "10.1007/s00264-026-06978-x", type: "narrative-review", year: 2026 },
    { id: "r13", citation: "Raiser SN, Schroeder AN, Lawley RJ, et al. Bone health and the masters runner. PM R. 2024;16(4):363-73.", pmid: "38532664", doi: "10.1002/pmrj.13175", type: "narrative-review", year: 2024 },
    { id: "r14", citation: "Gaffney-Stomberg E, Hughes JM, Guerriere KI, et al. Once daily calcium (1000 mg) and vitamin D (1000 IU) supplementation during military training prevents increases in biochemical markers of bone resorption but does not affect tibial microarchitecture in Army recruits. Bone. 2022;155:116269.", pmid: "34861430", doi: "10.1016/j.bone.2021.116269", type: "rct", year: 2022 },
    { id: "r15", citation: "Hoenig T, Tenforde AS, Strahl A, et al. Does magnetic resonance imaging grading correlate with return to sports after bone stress injuries? A systematic review and meta-analysis. Am J Sports Med. 2022;50(3):834-44.", pmid: "33720786", doi: "10.1177/0363546521993807", type: "meta-analysis", year: 2022 },
    { id: "r16", citation: "Warden SJ, Edwards WB, Willy RW. Optimal load for managing low-risk tibial and metatarsal bone stress injuries in runners: the science behind the clinical reasoning. J Orthop Sports Phys Ther. 2021;51(7):322-30.", pmid: "33962529", doi: "10.2519/jospt.2021.9982", type: "narrative-review", year: 2021 },
    { id: "r17", citation: "De Souza MJ, Nattiv A, Joy E, et al. 2014 Female Athlete Triad Coalition consensus statement on treatment and return to play of the female athlete triad: 1st International Conference held in San Francisco, CA, May 2012, and 2nd International Conference held in Indianapolis, IN, May 2013. Clin J Sport Med. 2014;24(2):96-119.", pmid: "24569429", doi: "10.1097/JSM.0000000000000085", type: "consensus-statement", year: 2014 },
    { id: "r18", citation: "Lappe J, Cullen D, Haynatzki G, et al. Calcium and vitamin D supplementation decreases incidence of stress fractures in female navy recruits. J Bone Miner Res. 2008;23(5):741-9.", pmid: "18433305", doi: "10.1359/jbmr.080102", type: "rct", year: 2008 },
    { id: "r19", citation: "Schöffl V, Moser O, Küpper T. [Stress fractures of the growth plates in the fingers of adolescent rock climbers]. Unfallchirurgie (Heidelb). 2024;127(11):824-31.", pmid: "39311912", doi: "10.1007/s00113-024-01482-6", type: "narrative-review", year: 2024 },
    { id: "r20", citation: "Sivakumar G, Koziarz A, Farrokhyar F. Vitamin D supplementation in military personnel: a systematic review of randomized controlled trials. Sports Health. 2019;11(5):425-31.", pmid: "31268835", doi: "10.1177/1941738119857717", type: "systematic-review", year: 2019 }
  ],

  animation: {
    title: "How a bone stress injury develops",
    phases: [
      {
        type: "moi", label: "Repeated loading", duration: 6.5, view: "lateral", environment: "track",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "run-contact", root: { x: -80 } },
          { t: 0.9, pose: "run-midstance", root: { x: -45 } },
          { t: 1.8, pose: "run-toe-off", root: { x: -10 }, ease: "out" },
          { t: 3.0, pose: "run-contact", root: { x: 30 } },
          { t: 3.9, pose: "run-midstance", root: { x: 65 } },
          { t: 4.9, pose: "run-toe-off", root: { x: 100 }, ease: "out" },
          { t: 6.2, pose: "run-contact", root: { x: 135 } }
        ],
        forces: [
          { t: [0.1, 1.0], at: "shinR", dir: "up", label: "Impact load through the shin", size: "m" },
          { t: [3.0, 4.0], at: "shinR", dir: "up", label: "Training load keeps rising", size: "m" },
          { t: [5.0, 6.2], at: "shinR", dir: "up", label: "Damage outpaces repair", size: "m" }
        ],
        highlights: [{ t: [0.2, 6.5], at: "shinR" }],
        slowmo: [{ t: [0.1, 1.0], rate: 0.5 }],
        captions: [
          { t: 0, text: "A runner steps up training: more miles, less recovery and not enough fuel for the load." },
          { t: 1.0, text: "Each stride loads the bones. The shin takes a high impact force at every contact." },
          { t: 2.0, text: "Bone repairs small amounts of microdamage after every run, but only as fast as its biology allows." },
          { t: 3.4, text: "Low energy availability, menstrual disturbance or low bone mass reduce that repair capacity." },
          { t: 4.6, text: "When load rises faster than repair, microdamage accumulates." },
          { t: 5.7, text: "No single injury occurs: focal bone pain builds over days to weeks." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "shinR",
        captions: [{ t: 0, text: "Zooming into the loaded bone." }]
      },
      {
        type: "closeup", label: "Inside the bone", duration: 10, scene: "long-bone",
        actions: [
          { t: 0, do: "highlight", target: "diaphysis" },
          { t: 0.3, do: "label", target: "diaphysis", text: "Long bone shaft (cortex)" },
          { t: 1.0, do: "arrow", at: "distalMetaphysis", dir: 90, label: "Repetitive load", size: "m" },
          { t: 2.0, do: "stress", target: "diaphysis", at: "corticalStressSite" },
          { t: 3.6, do: "pain", at: "corticalStressSite", hold: 3 },
          { t: 4.2, do: "label", target: "diaphysis", text: "Stress reaction: damage outpaces repair" },
          { t: 5.6, do: "fracture", target: "diaphysis", pattern: "stress", at: "corticalStressSite", displaced: false },
          { t: 6.2, do: "label", target: "periosteum", text: "Periosteal reaction and marrow oedema" },
          { t: 7.2, do: "camera", at: "corticalStressSite", zoom: 1.8, dur: 1.0 },
          { t: 8.8, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "A bone stress injury starts in the cortex of a loaded long bone." },
          { t: 1.1, text: "With every stride, load passes through the shaft and bends it slightly." },
          { t: 2.1, text: "Repeated cycles create microdamage at the stress site faster than it can be removed." },
          { t: 3.7, text: "Pain is focal over the bone and is provoked by impact loading." },
          { t: 4.3, text: "A stress reaction develops: marrow oedema and periosteal reaction show on MRI." },
          { t: 5.7, text: "If loading continues, a cortical fracture line forms: a stress fracture." },
          { t: 7.4, text: "Most low-risk sites heal with load management. High-risk sites need more care." }
        ]
      },
      {
        type: "micro", label: "Bone response", duration: 10, tissue: "bone-stress",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.0, stage: "loading" }, { t: 2.2, stage: "microdamage" },
          { t: 3.6, stage: "resorption-exceeds-formation" }, { t: 5.0, stage: "stress-reaction" },
          { t: 6.4, stage: "stress-fracture" }, { t: 8.0, stage: "healing" }
        ],
        timeLabels: [{ t: 2.2, text: "Weeks of high load" }, { t: 3.6, text: "Weeks" }, { t: 5.0, text: "Weeks" }, { t: 6.4, text: "If loading continues" }, { t: 8.0, text: "Weeks to months" }],
        captions: [
          { t: 0, text: "Healthy bone: an ordered network of osteocytes and mineralised collagen in balance." },
          { t: 1.0, text: "Loading: each stride bends the bone slightly and stimulates adaptation." },
          { t: 2.2, text: "Microdamage: repeated cycles create tiny cracks faster than normal." },
          { t: 3.6, text: "Remodelling removes damaged bone faster than new bone forms, which is worse when energy availability is low." },
          { t: 5.0, text: "Stress reaction: marrow oedema and periosteal reaction appear, and it hurts to load." },
          { t: 6.4, text: "Stress fracture: a crack runs through the cortex if loading continues." },
          { t: 8.0, text: "Healing: with modified load and adequate fuel, osteoblasts rebuild the bone." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "SP6" }
};
