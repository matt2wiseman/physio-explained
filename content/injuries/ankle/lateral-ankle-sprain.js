export default {
  id: "lateral-ankle-sprain",
  name: "Lateral ankle sprain",
  shortName: "Lateral ankle sprain",
  aka: ["rolled ankle", "inversion ankle sprain", "ATFL sprain", "twisted ankle", "ankle ligament sprain", "lateral ankle ligament injury", "ankle inversion injury"],
  region: "ankle",
  tissues: ["ligament", "joint-capsule"],
  onset: "acute",
  mechanismType: ["non-contact", "contact"],
  populations: ["indoor and court-sport athletes", "children and adolescents", "female athletes", "people with a previous ankle sprain", "recreational walkers and runners on uneven ground"],
  sports: ["basketball", "netball", "volleyball", "soccer", "australian football", "rugby", "tennis", "trail running", "dance"],
  urgency: "routine",
  summary: "A partial or complete tear of the lateral ankle ligaments, usually the ATFL first, from a sudden inversion and internal-rotation roll of the foot on landing, cutting or uneven ground.",
  keyFacts: [
    { label: "Typical recovery", value: "Pain falls quickly over the first 2 weeks, but 5–33% still report pain at 1 year" },
    { label: "Return to sport", value: "Criteria-based; no validated criteria exist. Often weeks for mild–moderate sprains (clinical convention)" },
    { label: "Key test", value: "Delayed physical examination at 4–5 days (Sn 96%, Sp 84% for ligament rupture); Ottawa ankle rules exclude fracture (Sn 99.4%)" },
    { label: "Imaging", value: "Not routine; radiographs only when the Ottawa ankle rules are positive" },
    { label: "Peak age", value: "Incidence is highest in children, then adolescents, then adults (2.85, 1.94 and 0.72 per 1,000 exposures)" },
    { label: "Incidence", value: "Females 13.6 vs males 6.94 per 1,000 exposures; indoor and court sports carry the highest risk" }
  ],
  overview: "Lateral ankle sprain (LAS) is the most prevalent musculoskeletal injury in physically active people. It is also common in the general population, and its recurrence rate is high [r1]. The injury is a sudden overload of the lateral ligament complex, most often the anterior talofibular ligament (ATFL) and, in higher-grade injuries, the calcaneofibular ligament (CFL). The rearfoot typically rolls into inversion with internal rotation shortly after the foot lands [r2,r3].\n\nMost people recover well, but not all. In a systematic review, 5–33% of patients still had pain at one year, and between 3% and 34% had at least one re-sprain [r4]. A large share of patients with LAS develop chronic ankle instability (CAI), which is linked to lower physical activity, poorer quality of life and higher rates of post-traumatic ankle osteoarthritis [r1]. Early assessment therefore has two jobs: exclude a fracture or syndesmosis injury, and identify the mechanical and sensorimotor impairments that predict a poor outcome [r5]. Treatment is early, supported, progressive loading, not prolonged rest [r6,r7].",

  epidemiology: {
    text: "A meta-analysis of 181 prospective studies found a higher ankle sprain incidence in females than males (13.6 vs 6.94 per 1,000 exposures), and a higher incidence in children than adolescents (2.85 vs 1.94 per 1,000 exposures) and in adolescents than adults (1.94 vs 0.72 per 1,000 exposures). Indoor and court sports had the highest incidence (7 per 1,000 exposures). Lateral sprains were significantly more common than syndesmotic or medial sprains, and low-quality studies tended to under-report incidence [r8]. The most common predisposing factor for a sprain is a history of a previous sprain [r2].",
    riskFactors: {
      intrinsic: [
        "A previous ankle sprain, the strongest predisposing factor for a further sprain [r2]",
        "Female sex (higher incidence per exposure) [r8]",
        "Younger age: incidence is highest in children and adolescents [r8]",
        "Residual balance and postural-control deficits after an earlier sprain (modifiable), present in both limbs [r9]",
        "Incomplete rehabilitation: LAS is often under-treated, which leads to frequent recurrence [r2]"
      ],
      extrinsic: [
        "Indoor and court sports with repeated jumping, landing and cutting (basketball, volleyball, netball) [r8]",
        "Landing on another player's foot or on an uneven surface (clinical observation)",
        "High training frequency: training more than 3 times a week was linked to residual symptoms in one study [r4]",
        "No external support or neuromuscular training after a first sprain [r10]"
      ]
    }
  },

  mechanism: {
    summary: "Lateral ankle sprains typically occur when the rearfoot undergoes excessive supination on an externally rotated lower leg [r2]. Analyses of real injuries show a sudden inversion with internal rotation of the foot shortly after landing. In five televised tennis cases, peak inversion ranged from 48° to 126° and peak internal rotation from 35° to 99°, with the foot only slightly inverted at the moment of landing [r3]. In a laboratory handball side-step, inversion and internal rotation peaked 130–180 ms after initial contact [r11]. The classic teaching of plantarflexion plus inversion is a useful simplification, but the sagittal-plane position was variable: the tennis cases fluctuated between plantarflexion and dorsiflexion in the first 0.5 s after foot strike [r3], and the handball case showed considerable dorsiflexion [r11].",
    sequence: [
      "The athlete lands or plants on a court, uneven surface or another player's foot, with the foot slightly inverted at landing and the centre of pressure shifting laterally [r3].",
      "The foot is loaded on its lateral border, and the rearfoot begins to supinate on an externally rotated leg [r2].",
      "Inversion and internal rotation increase quickly: in a laboratory sidestep they peaked 130–180 ms after initial contact, and the athlete tried to unload the foot from about 80 ms [r11].",
      "The ATFL is loaded first as the talus is pushed forward and tilted. This is the classic teaching: the ATFL fails first, then the CFL if inversion continues.",
      "Fibres fail in the ligament, which may be a partial or complete tear. The adjacent lateral capsule tears with the ATFL, and blood tracks into the joint and soft tissues.",
      "Higher-grade injuries involve both the ATFL and CFL. The tibiofibular syndesmosis, talar dome cartilage and peroneal tendons can be injured at the same time.",
      "The athlete feels a sudden pain and sometimes a 'pop', swelling and bruising develop over the lateral malleolus, and weight-bearing becomes painful."
    ],
    variants: [
      { name: "Contact: landing on an opponent's foot", description: "The foot lands on another player's foot or the edge of a surface, which lets the ankle roll into inversion. This is common in basketball, volleyball and netball." },
      { name: "Non-contact landing or cutting", description: "A sidestep cut or one-leg landing in which the foot is planted too far lateral to the centre of mass. The sprain happens within a fraction of a second of foot contact [r11,r3]." },
      { name: "Uneven ground in walking or running", description: "Stepping on a kerb, hole, tree root or rock. Trail runners and recreational walkers are typical." },
      { name: "External rotation with dorsiflexion (syndesmosis)", description: "A different pattern that injures the AITFL and syndesmosis instead of the lateral ligaments. Screen for it in every sprain. See high-ankle sprain." }
    ]
  },

  anatomy: {
    text: "The ankle complex works through the talocrural, subtalar and inferior tibiofibular joints, and each one contributes to the mechanics of a sprain [r2]. The lateral ligament complex has three parts. The ATFL runs from the anterior border of the lateral malleolus to the talar neck and is a thickening of the anterior capsule. It is taut in plantarflexion and resists inversion and anterior talar translation. The CFL runs from the tip of the malleolus, deep to the peroneal tendons, to the lateral calcaneus and crosses both the ankle and subtalar joints. It is taut in dorsiflexion. The PTFL runs from the malleolar fossa to the posterior talar process and is the strongest of the three. The lateral ligaments lie outside the synovial joint cavity (extra-articular), so a torn ligament can heal with a scar. The peroneus longus and brevis tendons are the main dynamic restraint to inversion, and the ligaments and capsule contain mechanoreceptors that contribute to joint position sense.",
    structures: [
      { name: "Anterior talofibular ligament (ATFL)", role: "Resists inversion and anterior translation of the talus in plantarflexion. It is the weakest and most often injured lateral ligament." },
      { name: "Calcaneofibular ligament (CFL)", role: "Resists inversion of the talocrural and subtalar joints, mainly in dorsiflexion. Its lateral position makes it vulnerable once the ATFL has failed." },
      { name: "Posterior talofibular ligament (PTFL)", role: "Resists posterior talar translation and internal rotation at end-range dorsiflexion. It is rarely torn." },
      { name: "Peroneus longus and brevis", role: "Evert the foot and give the main dynamic protection against inversion" },
      { name: "Anterior inferior tibiofibular ligament (AITFL)", role: "Holds the distal fibula in the tibial incisura. It is injured in syndesmosis (high ankle) sprains, which can accompany a lateral sprain." },
      { name: "Talar dome cartilage", role: "Weight-bearing articular surface. It can be bruised or damaged at the time of the sprain." }
    ]
  },

  pathophysiology: {
    tissueDamage: "Ligament collagen tolerates tensile load through a toe region, a linear elastic region and then progressive fibril failure. In an inversion sprain, the load and speed of the roll exceed the capacity of the ATFL, which fails at its fibular origin or in mid-substance. A mild sprain produces stretch and microtears with intact continuity. A moderate sprain produces a partial tear. A severe sprain produces a complete rupture, often with CFL involvement. The ATFL is also part of the anterior capsule, so capsular tearing lets blood into the joint and the surrounding soft tissue.\n\nThe lateral ligaments are extra-articular, so the haematoma gives a fibrin scaffold for repair. The ligament heals with scar tissue that is initially weak and disorganised, and ligament strength does not fully return until months after the sprain [r12]. Mechanical laxity and sensorimotor impairments may persist, and they are the reason that some people develop recurrent sprains [r2,r5].",
    structures: [
      { name: "ATFL", effect: "Stretch, partial tear or complete rupture. It is usually the first lateral ligament to fail, and often the only one injured." },
      { name: "CFL", effect: "Added in moderate-to-severe injuries, when inversion continues after the ATFL has failed" },
      { name: "Lateral ankle capsule", effect: "Torn with the ATFL, which allows haemorrhage and oedema into the joint and lateral soft tissues" },
      { name: "PTFL", effect: "Rarely torn, and only in the most severe injuries" },
      { name: "Peroneal tendons and retinaculum", effect: "Can be strained or partially torn. Persistent lateral pain and snapping after a sprain should raise suspicion of a peroneal injury." },
      { name: "Talar dome and distal tibiofibular syndesmosis", effect: "Osteochondral bruising or injury and AITFL sprain can accompany an inversion injury. They are the commonest reasons for a slow recovery." },
      { name: "Superficial peroneal and sural nerves", effect: "Traction can produce transient altered sensation over the dorsolateral foot" }
    ],
    muscles: [
      { name: "Peroneus longus and brevis (evertors)", effect: "Pain, effusion and ligament deafferentation reduce their drive, so they are weak and slow to react to a perturbation. Reduced evertor function leaves the ankle less protected against another inversion." },
      { name: "Gastrocnemius and soleus", effect: "Guarding and disuse reduce calf capacity, and swelling and pain limit dorsiflexion range, which commonly produces a compensated gait" },
      { name: "Hip abductors and extensors", effect: "Altered proximal control after the injury can change landing strategy (clinical reasoning)." },
      { name: "Tibialis anterior", effect: "Reduced dorsiflexor control can leave the foot poorly positioned at initial contact" }
    ],
    cellular: [
      { phase: "Haemorrhage and inflammation", timing: "0–5 days", description: "Torn vessels bleed and a fibrin clot forms. Platelets, then neutrophils and macrophages, clear debris and release growth factors. Oedema and pain peak." },
      { phase: "Proliferation", timing: "5 days – 6 weeks", description: "Fibroblasts proliferate and lay down disorganised type III collagen, with new capillaries (angiogenesis). The ligament is weak and tolerates only controlled load." },
      { phase: "Remodelling", timing: "6 weeks – 12+ months", description: "Type III collagen is slowly replaced by aligned type I collagen along the line of load. The scar becomes stronger but not identical to uninjured ligament, and ligament strength takes months to return [r12]." }
    ],
    systems: [
      { system: "Nervous system", effect: "Loss of afferent input from the injured ligaments and capsule, plus pain and effusion, impair balance. Meta-analysis showed balance was impaired in the injured limb after acute ankle trauma and also in the uninjured limb [r9]." },
      { system: "Immune / inflammatory", effect: "Bleeding and an acute inflammatory response cause pain, swelling, bruising and warmth. They are an expected part of repair." },
      { system: "Vascular and lymphatic", effect: "Bruising often tracks distally to the lateral foot. Persistent swelling can limit dorsiflexion and slow rehabilitation." },
      { system: "Musculoskeletal chain", effect: "Antalgic gait and altered landing shift load to the hip and knee and the other leg. Rehabilitation therefore includes both limbs [r9]." },
      { system: "Psychological", effect: "Fear of re-injury and low confidence are common after a sprain and influence return to sport. They are commonly addressed as part of return-to-sport planning." },
      { system: "Long-term joint health", effect: "Recurrent sprains and CAI are associated with higher rates of post-traumatic ankle osteoarthritis and lower physical activity [r1]." }
    ]
  },

  grading: {
    system: "Clinical sprain grading (I–III; several variants are in use)",
    grades: [
      { grade: "Grade I (mild)", description: "Stretch with microscopic tearing of the ATFL. Mild swelling and tenderness, little or no bruising, no mechanical laxity, and the patient can usually weight-bear.", prognosis: "Usually the fastest recovery; criteria-based progression still applies" },
      { grade: "Grade II (moderate)", description: "Partial tear of the ATFL, sometimes with CFL involvement. Moderate swelling and bruising, painful weight-bearing and mild-to-moderate laxity with a firm end-point.", prognosis: "Typically needs several weeks of supported rehabilitation" },
      { grade: "Grade III (severe)", description: "Complete rupture of the ATFL and usually the CFL. Marked swelling and bruising, inability to weight-bear and obvious laxity with a soft end-point on delayed examination.", prognosis: "Longest recovery. Functional treatment with a short period of support is the usual starting point, and surgery is reserved for failure of rehabilitation [r6]." }
    ]
  },

  timeframes: {
    summary: "Ligament repair follows inflammation, proliferation and remodelling, and ligament strength takes months to return [r12]. Pain falls quickly, but physical impairments and instability can last [r4]. Time is not a criterion for return to sport.",
    healing: [
      { phase: "Haemorrhage and inflammation", startDay: 0, endDay: 5, description: "Bleeding, oedema and pain peak. The delayed physical examination is most reliable at 4–5 days." },
      { phase: "Proliferation", startDay: 5, endDay: 42, description: "Disorganised type III collagen and new capillaries; the ligament tolerates graded loading" },
      { phase: "Early remodelling", startDay: 42, endDay: 180, description: "Collagen realigns along the line of load as strength and neuromuscular capacity are rebuilt" },
      { phase: "Late remodelling", startDay: 180, endDay: 365, description: "Slow maturation of the scar; ligament strength is still recovering months after injury [r12]" }
    ],
    milestones: [
      { label: "Delayed physical examination", day: 5, note: "Most reliable time to grade ligament damage [r13,r6]" },
      { label: "Walking without a limp", day: 7, note: "Typical for mild–moderate sprains (clinical convention)" },
      { label: "Start jogging", day: 21, note: "Once pain-free hopping and balance criteria are met (clinical convention)" },
      { label: "Return to sport (grade I–II)", day: 42, note: "Criteria-based; a common range is 3–8 weeks (clinical convention)" },
      { label: "Ligament strength still recovering", day: 180, note: "Strength takes months to return [r12]" }
    ],
    returnToSport: "Criteria-based, not time-based. A systematic review found no published studies that used a criteria-based return-to-sport process for LAS, so no validated criteria exist [r14]. As a common clinical convention, grade I injuries often return within about 1–3 weeks, grade II within about 3–8 weeks and grade III within about 8–12 weeks, always supported by tape or a brace."
  },

  clinicalPresentation: {
    symptoms: [
      "Sudden pain on the outer ankle after an inversion roll, sometimes with a 'pop' or tearing sensation",
      "Swelling and bruising over the lateral malleolus that may spread to the lateral foot",
      "Pain on weight-bearing, walking and changing direction",
      "A feeling of instability or the ankle 'giving way'",
      "Stiffness, especially in dorsiflexion, that makes squatting and stairs difficult"
    ],
    signs: [
      "Swelling and ecchymosis anterior and inferior to the lateral malleolus",
      "Tenderness over the ATFL (anterior and inferior to the malleolus) and, in more severe injuries, over the CFL",
      "Antalgic gait with a shortened stance phase",
      "Reduced active and passive dorsiflexion and a painful inversion range",
      "Increased anterior talar translation or talar tilt on delayed examination of higher-grade tears [r13]"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism of injury: inversion roll, landing on a foot, the surface, the position of the foot and any external rotation or dorsiflexion [r5]",
      "Immediate ability to weight-bear and continue activity, plus ability to take four steps in the clinic (Ottawa rules)",
      "Sound or sensation at the time ('pop', 'crack'), onset of swelling and bruising",
      "Previous ankle sprains, giving-way episodes, earlier treatment and any unresolved symptoms",
      "Sport, level, position, season timing and the demands of work",
      "Pain location: lateral, anterior (impingement), medial or high (syndesmosis), midfoot or base of the fifth metatarsal",
      "Fear of re-injury, confidence and goals"
    ],
    observation: ["Swelling and bruise distribution", "Gait pattern and ability to heel–toe", "Hindfoot alignment and foot posture, compared with the other side", "Skin integrity and colour"],
    palpation: [
      "Bone first (Ottawa): posterior edge and tip of the lateral and medial malleoli (distal 6 cm), base of the fifth metatarsal, navicular",
      "ATFL (anterior to the lateral malleolus), CFL (inferior and posterior), PTFL",
      "AITFL and the syndesmosis, and the proximal fibula for a Maisonneuve injury",
      "Peroneal tendons in the retromalleolar groove, sinus tarsi and anterolateral talar dome",
      "Achilles tendon (continuity) and the medial deltoid ligament"
    ],
    rangeOfMotion: [
      "Active and passive dorsiflexion, plantarflexion, inversion and eversion, compared with the other side",
      "Weight-bearing dorsiflexion (knee-to-wall lunge) once safe, as restricted dorsiflexion contributes to ongoing symptoms and compensation",
      "Subtalar movement and midfoot mobility"
    ],
    strength: [
      "Peroneal (evertor) strength and endurance as pain permits",
      "Calf capacity (single-leg heel raise) once weight-bearing is comfortable",
      "Hip abductor and extensor control, because proximal weakness can change landing strategy (clinical reasoning)"
    ],
    neuro: [
      "Sensation over the dorsolateral foot (superficial peroneal and sural nerves)",
      "Dorsalis pedis and posterior tibial pulses and capillary refill, especially with marked swelling"
    ],
    functional: [
      "Single-leg stance, with eyes open then closed, once weight-bearing is allowed",
      "Star Excursion or Y-balance reach tests (posterior reach was predictive at 6 months [r15])",
      "Single-leg drop landing and drop vertical jump when the ankle is calm. Inability to complete both at 2 weeks was predictive of later chronic ankle instability [r15].",
      "Hop and change-of-direction tests as part of the return-to-sport process"
    ],
    specialTests: [
      {
        name: "Delayed physical examination (4–5 days after injury)",
        purpose: "Grade the lateral ligament damage once pain and swelling have settled enough for a reliable test",
        procedure: "Re-examine 4–5 days after injury, when pain and swelling have settled. Palpate the lateral ligaments, perform anterior drawer and talar tilt, and compare with the other side.",
        positive: "Tenderness over the ligaments, with abnormal laxity or a soft end-point on stress testing",
        sensitivity: "96% for detection of a ligament rupture (160 patients)",
        specificity: "84% for detection of a ligament rupture (160 patients)",
        refs: ["r13", "r6"]
      },
      {
        name: "Anterior drawer test",
        purpose: "ATFL integrity (anterior talar translation)",
        procedure: "Patient seated or supine with the ankle in about 10–20° of plantarflexion. Stabilise the distal tibia with one hand and draw the heel and talus forward with the other.",
        positive: "Increased anterior talar translation, a soft end-point or a suction sign compared with the other side",
        refs: []
      },
      {
        name: "Talar tilt (inversion stress) test",
        purpose: "CFL and combined ATFL–CFL integrity",
        procedure: "With the ankle in neutral, stabilise the distal tibia and invert the calcaneus and talus. Compare the tilt and end-feel with the other side.",
        positive: "Excessive inversion tilt or a soft end-point, with a sulcus below the lateral malleolus",
        refs: []
      },
      {
        name: "Syndesmosis screen (squeeze and external rotation tests)",
        purpose: "Screen for AITFL and syndesmosis injury, which changes management and prognosis",
        procedure: "Squeeze the tibia and fibula together at mid-calf. Then, with the knee flexed at 90°, externally rotate the foot with the ankle in dorsiflexion.",
        positive: "Pain over the anterior syndesmosis or distal tibiofibula (not just at the point of squeeze)",
        refs: []
      }
    ],
    clinicalRules: [
      {
        name: "Ottawa ankle (and midfoot) rules",
        description: "Request an ankle series if there is pain near the malleoli and bone tenderness at the posterior edge or tip of either malleolus, or an inability to take four steps both at injury and in the clinic. Request a foot series if there is midfoot pain with bone tenderness at the base of the fifth metatarsal or the navicular, or the same weight-bearing failure. In a meta-analysis of 66 studies, the ankle rules had pooled sensitivity of 99.4% (95% CI 97.9–99.8) and specificity of 35.3% (95% CI 28.8–42.3), so they are good at ruling out fracture but give many false positives [r16]."
      }
    ],
    outcomeMeasures: [
      { name: "Foot and Ankle Ability Measure (FAAM)", use: "Self-reported function in daily living and sport. Lower FAAM ADL scores at 6 months were predictive of later CAI [r15]." },
      { name: "Cumberland Ankle Instability Tool (CAIT)", use: "Self-reported ankle instability; used with the FAAM to predict 12-month outcome in a prospective cohort [r15]" },
      { name: "Lower Extremity Functional Scale (LEFS)", use: "Primary outcome in an RCT of early exercise after ankle sprain [r7]" },
      { name: "Star Excursion Balance Test / Y-balance test", use: "Dynamic postural control, and a predictor of outcome at 6 months [r15]" },
      { name: "Single-leg drop landing and drop vertical jump", use: "Movement-quality screening at about 2 weeks [r15]" }
    ],
    imaging: [
      { modality: "Plain radiograph", indication: "When the Ottawa rules are positive, or fracture is suspected", findings: "Malleolar, fifth metatarsal base, anterior process of calcaneus or lateral talar process fracture; widened medial clear space or tibiofibular clear space" },
      { modality: "Stress radiography, arthrography or ultrasound", indication: "Not routine for a typical sprain", findings: "In a prospective study of 160 patients, extra diagnostic tests added little information at considerable cost beyond a delayed physical examination [r13]" },
      { modality: "MRI", indication: "Persistent pain despite supervised rehabilitation, or when an osteochondral lesion, syndesmosis, tendon injury or occult fracture is suspected (a common clinical convention is about 6 weeks)", findings: "ATFL and CFL disruption; talar dome bone marrow oedema or osteochondral lesion; AITFL, peroneal or deltoid injury" }
    ]
  },

  differentials: [
    { name: "High ankle (syndesmosis) sprain", id: "high-ankle-sprain", distinguishing: "External rotation and dorsiflexion mechanism, anterior ankle pain above the joint line, positive squeeze or external rotation test, and slower recovery" },
    { name: "Medial ankle (deltoid) sprain", id: "medial-ankle-sprain", distinguishing: "Eversion or pronation mechanism with medial tenderness and swelling; often accompanies fibular fracture or syndesmosis injury" },
    { name: "Ankle (malleolar) fracture", id: "ankle-fracture", distinguishing: "Bony tenderness at the malleolar edge, inability to take four steps, deformity or widened mortise on radiograph" },
    { name: "Fifth metatarsal base fracture", id: "fifth-metatarsal-fracture", distinguishing: "Tenderness at the base of the fifth metatarsal after an inversion injury; peroneus brevis avulsion" },
    { name: "Osteochondral lesion of the talus", id: "osteochondral-lesion-talus", distinguishing: "Deep ankle pain, catching or swelling that persists beyond 6 weeks of rehabilitation; MRI confirms" },
    { name: "Peroneal tendon subluxation or tear", id: "peroneal-tendon-subluxation", distinguishing: "Retromalleolar pain with snapping on resisted eversion or circumduction; tenderness posterior to the malleolus" },
    { name: "Anterior ankle impingement", id: "anterior-ankle-impingement", distinguishing: "Anterior ankle pain with end-range dorsiflexion (lunge, squat, jumping) and a palpable anterior tibial or talar spur, often after repeated sprains" },
    { name: "Lisfranc injury", id: "lisfranc-injury", distinguishing: "Midfoot pain, plantar bruising and inability to rise on the toes; widened first–second metatarsal gap on weight-bearing radiograph" },
    { name: "Achilles tendon rupture", id: "achilles-rupture", distinguishing: "Posterior ankle pain, a palpable gap, weak plantarflexion and a positive Thompson test" }
  ],
  redFlags: [
    "Positive Ottawa ankle rules, inability to take four steps, deformity or bony tenderness: arrange radiographs the same day to exclude a fracture or dislocation.",
    "Tenderness over the proximal fibula, a widened mortise, or severe pain with external rotation: suspect syndesmosis disruption or a Maisonneuve fracture and refer for imaging and orthopaedic review.",
    "Absent pulses, cold or pale foot, severe swelling with pain on passive stretch, or progressive numbness: suspect neurovascular compromise or compartment syndrome and send to emergency.",
    "A palpable calf or Achilles gap, a positive Thompson test or weak plantarflexion: suspect Achilles rupture, which can be mistaken for an ankle sprain.",
    "Calf pain, swelling or breathlessness, especially after a boot or cast: consider DVT and pulmonary embolism. In an RCT of mechanical supports, DVT and pulmonary embolus were each reported in a small number of participants [r17].",
    "Pain, swelling or giving way that has not improved by about 6 weeks: re-assess for osteochondral lesion, syndesmosis, peroneal or occult fracture, and arrange MRI."
  ],

  management: {
    principles: "Management follows a functional approach: exclude fracture, protect the ligament briefly with tape, a brace or short-term support, start weight-bearing and exercise early, and progress by criteria [r6]. The updated guideline recommends supervised exercise-based programmes over passive modalities, to restore functional joint stability, and surgery only when a thorough exercise-based programme fails [r6]. In a randomised trial of grade 1 and 2 sprains, an accelerated exercise programme in the first week gave better function at weeks 1 and 2 than standard protection, rest, ice, compression and elevation, with no difference in pain or swelling [r7]. Because balance is impaired in both limbs after an acute sprain, the uninjured leg should not be used as a 'normal' reference, and both legs should be trained [r9]. Secondary prevention with a brace and neuromuscular training should start before return to sport [r10].",
    medical: [
      {
        name: "Radiographs for Ottawa-positive injuries",
        description: "Ordered by a clinician when the Ottawa rules are positive. Weight-bearing views help assess the mortise. The rules are sensitive but not specific, so a positive result does not mean a fracture is present [r16].",
        evidence: "strong", recommendation: "recommended", refs: ["r16"]
      },
      {
        name: "Short-term mechanical support (boot, brace or below-knee cast) for severe sprains",
        description: "In a trial of 584 people with severe sprain, a 10-day below-knee cast or an Aircast brace gave faster recovery at 3 months than a tubular compression bandage (cast 9% better function, 95% CI 2.4–15.0; Aircast 8%, 95% CI 1.8–14.2). A Bledsoe boot gave no benefit, and differences were gone by 9 months [r17]. A Cochrane review found functional treatment was favoured over immobilisation, but most of the differences were not significant after low-quality trials were excluded [r18]. Immobilisation is therefore an option for severe pain and swelling and not a routine for all sprains.",
        evidence: "conflicting", recommendation: "consider", refs: ["r17", "r18", "r6"]
      },
      {
        name: "Oral NSAIDs for short-term pain and swelling",
        description: "An overview of systematic reviews found strong evidence for NSAIDs on combined pain, swelling and function after acute sprain [r10]. The guideline cautions that NSAIDs may suppress natural healing and carry complications, so use them for a short course [r6]. A doctor or pharmacist should confirm suitability.",
        evidence: "moderate", recommendation: "consider", refs: ["r10", "r6"]
      },
      {
        name: "Surgical repair or reconstruction of the lateral ligaments",
        description: "Not a first-line treatment for acute LAS. The guideline reserves surgery for cases that fail a thorough exercise-based programme [r6]. An overview of systematic reviews found conflicting evidence for surgery in acute sprain [r10].",
        evidence: "conflicting", recommendation: "not-recommended", refs: ["r6", "r10"]
      }
    ],
    physio: [
      {
        name: "Early weight-bearing and supervised exercise therapy",
        description: "Start walking and range-of-motion exercise in the first days, within pain limits, then progress strengthening, balance and functional training. Supervised exercise-based care is preferred to passive modalities [r6]. In 101 patients with grade 1–2 sprains, accelerated exercise improved ankle function and activity in the first 2 weeks, with a 4% re-injury rate in both groups [r7]. The overview of reviews gives moderate evidence for exercise [r10].",
        evidence: "moderate", recommendation: "recommended", refs: ["r6", "r7", "r10"]
      },
      {
        name: "Tape or brace combined with exercise",
        description: "The guideline found that patients with an acute lateral ligament injury benefit most from tape or a brace combined with an exercise programme [r6]. A semi-rigid brace or lace-up brace is commonly used for return to activity.",
        evidence: "moderate", recommendation: "recommended", refs: ["r6"]
      },
      {
        name: "Sensorimotor and balance training on both limbs",
        description: "Screen with the ROAST framework and train balance and landing control early [r5]. Balance is impaired in both limbs after acute trauma, so train both legs [r9]. Failing a single-leg drop landing and drop vertical jump at 2 weeks was a predictor of CAI, which supports early screening [r15].",
        evidence: "moderate", recommendation: "recommended", refs: ["r5", "r9", "r15"]
      },
      {
        name: "Manual therapy and joint mobilisation",
        description: "An overview of reviews found moderate evidence for manual therapy [r10]. A meta-analysis of grade I–II sprains (mostly chronic) found joint mobilisation improved dynamic balance immediately and weight-bearing dorsiflexion in the short term but not pain intensity, and long-term effects have not been adequately studied [r19]. Use it as an adjunct to restore dorsiflexion, not as a stand-alone treatment.",
        evidence: "limited", recommendation: "consider", refs: ["r10", "r19"]
      },
      {
        name: "Compression, elevation and short-term cryotherapy",
        description: "A common first-line symptomatic approach in the first days after injury. In the accelerated-exercise trial, standard protection, rest, ice, compression and elevation was the comparator and gave poorer function than early exercise at weeks 1 and 2 [r7]. Use it for comfort, not as a substitute for early exercise.",
        evidence: "expert-opinion", recommendation: "consider", refs: ["r7"]
      },
      {
        name: "Therapeutic ultrasound",
        description: "An overview of systematic reviews found insufficient evidence to support ultrasound in acute ankle sprain [r10].",
        evidence: "very-limited", recommendation: "not-recommended", refs: ["r10"]
      },
      {
        name: "Prolonged immobilisation or rest",
        description: "A Cochrane review found no result significantly in favour of immobilisation compared with functional treatment [r18]. Many of the included trials were of low quality, so treat this finding with caution. Avoid prolonged rest in favour of early supported movement.",
        evidence: "limited", recommendation: "not-recommended", refs: ["r18"]
      }
    ],
    education: [
      "A sprain is a ligament injury that heals, but healing takes months. Early, guided movement gives a better result than prolonged rest.",
      "Walk as soon as you can, with the support your physio advises, and avoid forcing the ankle into an inverted position.",
      "Balance and strength training matter as much as the ligament healing, because the ankle's control system is also affected.",
      "Another sprain is more likely after the first. Wearing a brace or tape in sport and keeping up balance exercises lowers the risk.",
      "See your physio again if the ankle still hurts, swells or gives way after about 6 weeks, because other injuries can be present."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and starts early. No validated return-to-sport criteria exist for LAS [r14], so the criteria below reflect clinical convention and the ROAST concept of treating mechanical and sensorimotor impairments from the start [r5]. Timeframes are typical for grade I–II injuries; grade III and recurrent injuries are slower. Dosages are common clinical conventions, not trial-derived doses, unless a reference is shown. The 2021 JOSPT clinical practice guideline addresses the stability and movement-coordination impairments of first-time LAS and CAI and is the broader framework for this program [r20].",
    stages: [
      {
        name: "Protect, settle & keep moving",
        timeframe: "Days 0–7 (typical)",
        goals: ["Control pain and swelling", "Walk with a normal heel–toe pattern as soon as tolerated", "Maintain dorsiflexion and plantarflexion range", "Start balance and calf work within pain limits"],
        precautions: ["Exclude fracture and syndesmosis injury first (Ottawa rules and red flags)", "Avoid forced inversion or passive stretching into inversion", "If a boot or cast is used for severe injury, watch for DVT symptoms [r17]"],
        exercises: [
          { name: "Ankle alphabet", dosage: "Trace the alphabet with the big toe, 2 sets, 3–4 times daily, within pain-free range", cues: "Move from the ankle, not the knee", figure: { pose: "ex-ankle-alphabet", view: "lateral", props: ["chair"] } },
          { name: "Walking with support", dosage: "Short, frequent walks, building to 10–15 minutes as pain allows. Use tape, brace or a single crutch if it removes the limp.", cues: "Heel strike, then roll through, equal step lengths", figure: { pose: "walk-heel-strike", view: "lateral" } },
          { name: "Isometric eversion, inversion and dorsiflexion", dosage: "5 × 10 s holds at low effort, 2–3 times daily", cues: "Press into the wall or your hand without moving the ankle" },
          { name: "Double-leg calf raise", dosage: "2 × 10 within pain limits, once weight-bearing is comfortable", cues: "Rise evenly over both big toes", figure: { pose: "ex-calf-raise", view: "lateral" } },
          { name: "Single-leg balance (with brace or tape)", dosage: "3 × 20–30 s, near a support", cues: "Soft knee, stay tall, look ahead", figure: { pose: "ex-single-leg-balance", view: "anterior" } }
        ],
        progressionCriteria: ["Walking 10 minutes with a normal gait and no limp", "Pain ≤ 3/10 during walking", "Swelling reducing day to day", "Dorsiflexion approaching the other side"]
      },
      {
        name: "Restore range, strength & balance",
        timeframe: "Weeks 1–3",
        goals: ["Full or near-full dorsiflexion", "Restore evertor, calf and hip strength", "Single-leg balance with eyes closed", "Walk, climb stairs and cycle without symptoms"],
        precautions: ["Increase load only if swelling and pain settle within 24 hours", "Keep tape or brace for exercise and weight-bearing activity"],
        exercises: [
          { name: "Weight-bearing dorsiflexion lunge (knee-to-wall)", dosage: "3 × 10 holds of 5 s, daily", cues: "Keep the heel down and the knee over the second toe" },
          { name: "Band-resisted eversion, inversion, dorsiflexion and plantarflexion", dosage: "3 × 15 each direction, slow 3 s return, daily", cues: "Move only the ankle, control the return", figure: { pose: "ex-ankle-alphabet", view: "lateral", props: ["resistance-band"] } },
          { name: "Single-leg calf raise (progress from double-leg)", dosage: "3 × 8–12, then add load", cues: "Rise up over the big toe, avoid rolling out", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Single-leg balance, progressing the surface and task", dosage: "3 × 30–45 s: eyes closed, soft surface, then ball catch", cues: "Quiet ankle, stay level through the hips", figure: { pose: "ex-single-leg-balance", view: "anterior" } },
          { name: "Step-ups and controlled step-downs", dosage: "3 × 10 each leg, 3 times per week", cues: "Knee tracks over the second toe, control the lowering", figure: { pose: "ex-step-down", view: "anterior", props: ["step"] } }
        ],
        progressionCriteria: ["Weight-bearing dorsiflexion within a few millimetres of the other side", "Single-leg stance 30 s eyes open without hand support", "10 single-leg heel raises", "No swelling after loading sessions"]
      },
      {
        name: "Neuromuscular control, power & running",
        timeframe: "Weeks 2–6",
        goals: ["Single-leg control through the whole chain", "Return to running", "Landing control and low-level hopping", "Prepare for change of direction"],
        precautions: ["Progress running and hopping gradually, using tape or brace", "Stop and re-assess if giving way or pain returns"],
        exercises: [
          { name: "Single-leg squat to a chair", dosage: "3 × 8 each leg", cues: "Knee over the second toe, level pelvis", figure: { pose: "ex-single-leg-squat", view: "anterior" } },
          { name: "Multi-directional reach (Y-balance style)", dosage: "3 × 5 reaches in each of 3 directions", cues: "Reach, touch lightly and return without shifting weight" },
          { name: "Walk–jog progression", dosage: "Alternate 1 min jog and 1 min walk for 8–10 rounds, building jog time every 2–3 sessions", cues: "Short, quiet steps; land under the body", figure: { pose: "run-midstance", view: "lateral" } },
          { name: "Double-leg then single-leg landing and hop", dosage: "3 × 8 double-leg landings, then 3 × 5 single-leg hops each leg, with a 2 s stick", cues: "Soft landing, ankle, knee and hip bend together", figure: { pose: "jump-land", view: "lateral" } },
          { name: "Weighted single-leg calf raise", dosage: "3 × 8–10 with a dumbbell, 2–3 times per week", cues: "Slow lowering over 3 s", figure: { pose: "ex-single-leg-calf-raise", view: "lateral", props: ["dumbbell"] } }
        ],
        progressionCriteria: ["Pain-free jogging for 20 minutes", "Single-leg hops without pain, giving way or loss of control", "Single-leg squat without trunk or knee compensation", "Y-balance or star-excursion reach close to the other side"]
      },
      {
        name: "Sport-specific and return to sport",
        timeframe: "Weeks 4–8+ (longer for grade III)",
        goals: ["Cutting, change of direction and reactive agility", "Sport-specific drills at full speed", "Confidence and psychological readiness", "Ongoing prevention (brace or tape and balance training)"],
        precautions: ["No unrestricted play until criteria are passed", "Continue tape or brace for sport. Bracing has strong evidence for preventing recurrence [r10]."],
        exercises: [
          { name: "Planned then reactive change-of-direction drills", dosage: "2–3 sessions per week, progressing speed and angle", cues: "Lower the centre of mass, plant the foot under the knee", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Lateral bounds and skater hops with stick landing", dosage: "3 × 6 each side, 2 s hold on landing", cues: "Land on the full foot, not the outer border", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Sport-specific drills (jump, land, pivot)", dosage: "Graded exposure within team training, starting at 50% volume", cues: "Land with hips and knees flexed and weight over the whole foot", figure: { pose: "jump-land", view: "lateral" } },
          { name: "Continuing balance and strength maintenance", dosage: "10–15 minutes before training, 2–3 times per week", cues: "Single-leg balance with perturbation, calf and hip strength" }
        ],
        progressionCriteria: ["Full pain-free range and no swelling after full training", "Hop tests within about 90% of the other leg (clinical convention)", "Completion of full, unrestricted training without giving way", "Confidence and readiness rated high by the athlete"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No published validated criteria for LAS exist [r14]. The following are common clinical conventions.",
      "No pain or swelling at rest or after a full training session",
      "Full, symmetrical weight-bearing dorsiflexion and a normal gait, walk and jog",
      "Strength and calf-raise capacity around 90% of the other leg (clinical convention)",
      "Single-leg stance 30 s with eyes closed and a Y-balance or star-excursion reach near the other side",
      "Hop and change-of-direction tests without pain, giving way or movement compensation",
      "Athlete confidence, a plan for tape or brace and agreement with coach and medical team"
    ],
    tests: ["Weight-bearing dorsiflexion lunge", "Single-leg heel raise to fatigue", "Y-balance or Star Excursion Balance Test", "Single, triple and side hop tests", "Single-leg drop landing and agility drills", "FAAM sport subscale and CAIT"]
  },
  prognosis: "Most people improve quickly: pain falls rapidly over the first 2 weeks. In a systematic review, 36–85% reported full recovery within 3 years, 5–33% still had pain at 1 year, the re-sprain risk ranged from 3% to 34%, and subjective instability was reported by 0–33% in high-quality studies [r4]. In a prospective cohort of 82 people with a first LAS, inability to complete a single-leg drop landing and a drop vertical jump at 2 weeks identified CAI at 12 months with 83% sensitivity and 55% specificity, and reach distances on the star excursion balance test plus the FAAM ADL score at 6 months did so with 75% sensitivity and 91% specificity [r15]. A high proportion of people with LAS therefore develop CAI, with long-term consequences for activity, quality of life and ankle osteoarthritis [r1].",
  prevention: [
    "Wear a brace in sport after a sprain: an overview of reviews found strong evidence for bracing and moderate evidence for neuromuscular training in preventing recurrent sprain [r10]. The guideline recommends considering ankle braces for preventing recurrence [r6].",
    "Complete supervised, progressive rehabilitation that includes balance and neuromuscular training before return to sport [r6,r10].",
    "Treat residual deficits in dorsiflexion, balance and landing control rather than relying on symptom resolution alone [r5].",
    "Teach landing with the foot under the body and avoid landing on the outer border of the foot (clinical convention)."
  ],
  clinicalPearls: [
    "If the first examination is limited by pain and swelling, re-examine at 4–5 days. The delayed examination was the most accurate way to detect ligament rupture in a 160-patient study (Sn 96%, Sp 84%) [r13].",
    "The Ottawa rules are for ruling out fracture. They are very sensitive (99.4% pooled) but poorly specific (35.3%), so a positive result needs a radiograph, not a diagnosis [r16].",
    "Screen for sensorimotor deficits at the first visit. Inability to complete a single-leg drop landing and drop vertical jump at 2 weeks predicted chronic instability in one cohort [r15].",
    "Do not use the 'good' leg as the normal balance reference. Balance deficits are present in both limbs after an acute sprain, so train both [r9].",
    "Pain, swelling or giving way at 6 weeks is not a slow sprain until you have excluded osteochondral lesion, syndesmosis injury, peroneal tendon injury and occult fracture.",
    "Be honest about the evidence. There are no validated return-to-sport criteria for LAS, so objective tests and shared decision-making are better than a fixed number of weeks [r14]."
  ],
  related: ["high-ankle-sprain", "chronic-ankle-instability", "medial-ankle-sprain", "ankle-fracture", "osteochondral-lesion-talus", "peroneal-tendon-subluxation"],

  references: [
    { id: "r1", citation: "Gribble PA, Bleakley CM, Caulfield BM, et al. Evidence review for the 2016 International Ankle Consortium consensus statement on the prevalence, impact and long-term consequences of lateral ankle sprains. Br J Sports Med. 2016;50(24):1496-505.", pmid: "27259753", doi: "10.1136/bjsports-2016-096189", type: "narrative-review", year: 2016 },
    { id: "r2", citation: "Hertel J. Functional anatomy, pathomechanics, and pathophysiology of lateral ankle instability. J Athl Train. 2002;37(4):364-75.", pmid: "12937557", type: "narrative-review", year: 2002 },
    { id: "r3", citation: "Fong DT, Ha SC, Mok KM, et al. Kinematics analysis of ankle inversion ligamentous sprain injuries in sports: five cases from televised tennis competitions. Am J Sports Med. 2012;40(11):2627-32.", pmid: "22967824", doi: "10.1177/0363546512458259", type: "biomechanical", year: 2012 },
    { id: "r4", citation: "van Rijn RM, van Os AG, Bernsen RM, et al. What is the clinical course of acute ankle sprains? A systematic literature review. Am J Med. 2008;121(4):324-31.e6.", pmid: "18374692", doi: "10.1016/j.amjmed.2007.11.018", type: "systematic-review", year: 2008 },
    { id: "r5", citation: "Delahunt E, Bleakley CM, Bossard DS, et al. Clinical assessment of acute lateral ankle sprain injuries (ROAST): 2019 consensus statement and recommendations of the International Ankle Consortium. Br J Sports Med. 2018;52(20):1304-10.", pmid: "29886432", doi: "10.1136/bjsports-2017-098885", type: "consensus-statement", year: 2018 },
    { id: "r6", citation: "Vuurberg G, Hoorntje A, Wink LM, et al. Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline. Br J Sports Med. 2018;52(15):956.", pmid: "29514819", doi: "10.1136/bjsports-2017-098106", type: "clinical-practice-guideline", year: 2018 },
    { id: "r7", citation: "Bleakley CM, O'Connor SR, Tully MA, et al. Effect of accelerated rehabilitation on function after ankle sprain: randomised controlled trial. BMJ. 2010;340:c1964.", pmid: "20457737", doi: "10.1136/bmj.c1964", type: "rct", year: 2010 },
    { id: "r8", citation: "Doherty C, Delahunt E, Caulfield B, et al. The incidence and prevalence of ankle sprain injury: a systematic review and meta-analysis of prospective epidemiological studies. Sports Med. 2014;44(1):123-40.", pmid: "24105612", doi: "10.1007/s40279-013-0102-5", type: "meta-analysis", year: 2014 },
    { id: "r9", citation: "Wikstrom EA, Naik S, Lodha N, et al. Bilateral balance impairments after lateral ankle trauma: a systematic review and meta-analysis. Gait Posture. 2010;31(4):407-14.", pmid: "20303759", doi: "10.1016/j.gaitpost.2010.02.004", type: "meta-analysis", year: 2010 },
    { id: "r10", citation: "Doherty C, Bleakley C, Delahunt E, et al. Treatment and prevention of acute and recurrent ankle sprain: an overview of systematic reviews with meta-analysis. Br J Sports Med. 2017;51(2):113-25.", pmid: "28053200", doi: "10.1136/bjsports-2016-096178", type: "systematic-review", year: 2017 },
    { id: "r11", citation: "Kristianslund E, Bahr R, Krosshaug T. Kinematics and kinetics of an accidental lateral ankle sprain. J Biomech. 2011;44(14):2576-8.", pmid: "21824618", doi: "10.1016/j.jbiomech.2011.07.014", type: "biomechanical", year: 2011 },
    { id: "r12", citation: "Wolfe MW, Uhl TL, Mattacola CG, et al. Management of ankle sprains. Am Fam Physician. 2001;63(1):93-104.", pmid: "11195774", type: "narrative-review", year: 2001 },
    { id: "r13", citation: "van Dijk CN, Mol BW, Lim LS, et al. Diagnosis of ligament rupture of the ankle joint. Physical examination, arthrography, stress radiography and sonography compared in 160 patients after inversion trauma. Acta Orthop Scand. 1996;67(6):566-70.", pmid: "9065068", doi: "10.3109/17453679608997757", type: "diagnostic-accuracy", year: 1996 },
    { id: "r14", citation: "Tassignon B, Verschueren J, Delahunt E, et al. Criteria-based return to sport decision-making following lateral ankle sprain injury: a systematic review and narrative synthesis. Sports Med. 2019;49(4):601-19.", pmid: "30747379", doi: "10.1007/s40279-019-01071-3", type: "systematic-review", year: 2019 },
    { id: "r15", citation: "Doherty C, Bleakley C, Hertel J, et al. Recovery from a first-time lateral ankle sprain and the predictors of chronic ankle instability: a prospective cohort analysis. Am J Sports Med. 2016;44(4):995-1003.", pmid: "26912285", doi: "10.1177/0363546516628870", type: "cohort", year: 2016 },
    { id: "r16", citation: "Beckenkamp PR, Lin CC, Macaskill P, et al. Diagnostic accuracy of the Ottawa Ankle and Midfoot Rules: a systematic review with meta-analysis. Br J Sports Med. 2017;51(6):504-10.", pmid: "27884861", doi: "10.1136/bjsports-2016-096858", type: "meta-analysis", year: 2017 },
    { id: "r17", citation: "Lamb SE, Marsh JL, Hutton JL, et al. Mechanical supports for acute, severe ankle sprain: a pragmatic, multicentre, randomised controlled trial. Lancet. 2009;373(9663):575-81.", pmid: "19217992", doi: "10.1016/S0140-6736(09)60206-3", type: "rct", year: 2009 },
    { id: "r18", citation: "Kerkhoffs GM, Rowe BH, Assendelft WJ, et al. Immobilisation and functional treatment for acute lateral ankle ligament injuries in adults. Cochrane Database Syst Rev. 2002;(3):CD003762.", pmid: "12137710", doi: "10.1002/14651858.CD003762", type: "systematic-review", year: 2002 },
    { id: "r19", citation: "Weerasekara I, Osmotherly P, Snodgrass S, et al. Clinical benefits of joint mobilization on ankle sprains: a systematic review and meta-analysis. Arch Phys Med Rehabil. 2018;99(7):1395-412.e5.", pmid: "28882509", doi: "10.1016/j.apmr.2017.07.019", type: "meta-analysis", year: 2018 },
    { id: "r20", citation: "Martin RL, Davenport TE, Fraser JJ, et al. Ankle stability and movement coordination impairments: lateral ankle ligament sprains revision 2021. J Orthop Sports Phys Ther. 2021;51(4):CPG1-CPG80.", pmid: "33789434", doi: "10.2519/jospt.2021.0302", type: "clinical-practice-guideline", year: 2021 }
  ],

  animation: {
    title: "How a lateral ankle sprain happens",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "anterior", environment: "court",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "jump-takeoff", root: { x: -40 } },
          { t: 1.0, pose: "jump-flight", root: { x: -25 } },
          { t: 2.0, pose: "landing-stiff", joints: { ankleR: 10 }, root: { x: -10 } },
          { t: 2.8, pose: "ankle-inversion", root: { x: -6 }, ease: "in" },
          { t: 3.6, pose: "ankle-inversion", joints: { ankleR: 52, trunk: -14 }, root: { x: -4 } },
          { t: 5.0, pose: "squat", joints: { ankleR: 30 }, root: { x: 0 } },
          { t: 5.8, pose: "fall-sideways", root: { x: 8 } }
        ],
        props: [{ id: "ball", type: "ball-basketball", attach: "handL" }],
        forces: [
          { t: [2.0, 3.8], at: "footR", dir: "up", label: "Ground force lateral to the ankle" },
          { t: [2.6, 3.8], at: "ankleR", dir: "medial", label: "Inversion + internal rotation" }
        ],
        highlights: [{ t: [2.6, 6], at: "ankleR" }],
        impacts: [{ t: 3.1, at: "ankleR" }],
        slowmo: [{ t: [2.2, 3.6], rate: 0.3 }],
        captions: [
          { t: 0, text: "A basketball player jumps and lands on the right foot, on the edge of another player's shoe." },
          { t: 2.0, text: "The foot lands slightly inverted, with the centre of pressure lateral to the ankle." },
          { t: 2.8, text: "Body weight rolls the rearfoot into rapid inversion and internal rotation." },
          { t: 3.6, text: "The lateral ligaments are loaded beyond their capacity, and the ankle gives way." },
          { t: 4.8, text: "Pain, swelling and loss of balance end the play." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "ankleR",
        captions: [{ t: 0, text: "Zooming into the right ankle, viewed from the lateral side." }]
      },
      {
        type: "closeup", label: "Inside the ankle", duration: 10, scene: "ankle-lateral",
        actions: [
          { t: 0, do: "highlight", target: "atfl" },
          { t: 0.3, do: "label", target: "atfl", text: "ATFL: resists inversion" },
          { t: 1.0, do: "arrow", at: "sinusTarsiOpening", dir: "medial", label: "Inversion + internal rotation", size: "l" },
          { t: 1.2, do: "arrow", at: "anteriorTalarNeck", dir: "anterior", label: "Talus shifts forward" },
          { t: 1.5, do: "stretch", target: "atfl", amount: 0.35, dur: 1.2 },
          { t: 2.6, do: "tear", target: "atfl", grade: 1, at: 0.5 },
          { t: 2.7, do: "label", target: "atfl", text: "Grade I: microtears" },
          { t: 3.4, do: "tear", target: "atfl", grade: 2, at: 0.5 },
          { t: 3.5, do: "label", target: "atfl", text: "Grade II: partial tear" },
          { t: 4.3, do: "tear", target: "atfl", grade: 3, at: 0.5 },
          { t: 4.3, do: "impact", at: "atflMid" },
          { t: 4.4, do: "label", target: "atfl", text: "Grade III: complete rupture" },
          { t: 5.0, do: "stretch", target: "cfl", amount: 0.4, dur: 0.8 },
          { t: 5.7, do: "tear", target: "cfl", grade: 2, at: 0.5 },
          { t: 5.8, do: "label", target: "cfl", text: "CFL: injured in higher grades" },
          { t: 6.5, do: "bleed", target: "jointSpace" },
          { t: 6.6, do: "swell", target: "atfl", amount: 0.5 },
          { t: 7.2, do: "pain", at: "atflMid" },
          { t: 7.8, do: "camera", at: "atflMid", zoom: 1.6, dur: 1 },
          { t: 9.2, do: "camera", zoom: 1, dur: 0.7 }
        ],
        captions: [
          { t: 0, text: "The ATFL runs from the front of the lateral malleolus to the talus. It resists inversion." },
          { t: 1.1, text: "Rapid inversion and internal rotation push the talus forward and tilt it." },
          { t: 2.6, text: "Fibres begin to fail in the ATFL, usually first and often alone." },
          { t: 3.4, text: "With more load, the tear becomes partial (grade II)." },
          { t: 4.3, text: "A complete (grade III) rupture leaves frayed, retracted ends." },
          { t: 5.0, text: "If inversion continues, the calcaneofibular ligament (CFL) is injured too." },
          { t: 6.5, text: "Bleeding and oedema collect around the joint, and the lateral ankle becomes swollen and painful." },
          { t: 7.8, text: "The lateral ligaments are outside the joint, so they can heal with scar tissue." }
        ]
      },
      {
        type: "micro", label: "Cellular response", duration: 10, tissue: "ligament",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.0, stage: "loaded" }, { t: 2.0, stage: "overload" }, { t: 3.0, stage: "failure" },
          { t: 4.0, stage: "haemorrhage" }, { t: 5.3, stage: "inflammation" }, { t: 6.8, stage: "proliferation" }, { t: 8.4, stage: "remodelling" }
        ],
        timeLabels: [{ t: 5.3, text: "0–5 days" }, { t: 6.8, text: "5 days – 6 weeks" }, { t: 8.4, text: "6 weeks – 12+ months" }],
        captions: [
          { t: 0, text: "Healthy ligament: crimped type I collagen fibres aligned along the line of load." },
          { t: 1.0, text: "Under load the crimp straightens and the fibres stretch elastically." },
          { t: 2.0, text: "Beyond the elastic range, fibrils slide and begin to fail." },
          { t: 3.0, text: "Sequential fibre failure ends in partial or complete rupture." },
          { t: 4.0, text: "Torn vessels bleed, and the clot forms a scaffold for repair outside the joint." },
          { t: 5.3, text: "Inflammation: neutrophils, then macrophages, clear debris over the first few days." },
          { t: 6.8, text: "Fibroblasts lay down disorganised type III collagen and new capillaries grow in." },
          { t: 8.4, text: "Collagen realigns along the line of load. The scar remains weaker than normal ligament for months." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL9" }
};
