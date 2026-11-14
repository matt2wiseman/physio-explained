export default {
  id: "ankle-fracture",
  name: "Ankle (malleolar) fracture",
  shortName: "Ankle fracture",
  aka: ["broken ankle", "malleolar fracture", "lateral malleolus fracture", "fibula fracture at the ankle", "bimalleolar fracture", "trimalleolar fracture", "Weber B fracture", "ankle fracture-dislocation"],
  region: "ankle",
  tissues: ["bone", "ligament"],
  onset: "acute",
  mechanismType: ["non-contact", "fall", "contact"],
  populations: ["adolescents and young men in sport", "women after about 50 years", "older adults after a low-energy fall", "recreational athletes"],
  sports: ["soccer", "rugby", "basketball", "skiing", "netball", "trail running", "dance"],
  urgency: "urgent",
  summary: "A fracture of the lateral, medial or posterior malleolus, usually from a twisting injury. Stability depends on the medial structures and the syndesmosis, which decide between casting and surgery.",
  keyFacts: [
    { label: "Typical recovery", value: "Bone union takes about 6–12 weeks (clinical convention). At 6 months, ankle scores were still only about 65 of 100 in older adults" },
    { label: "Return to sport", value: "Criteria-based; often 4–6 months or longer after a significant fracture (clinical convention)" },
    { label: "Key test", value: "Ottawa ankle rules rule out fracture (Sn 99.4%, Sp 35.3%); stability is judged on weight-bearing or stress radiographs" },
    { label: "Imaging", value: "AP, lateral and mortise radiographs, ideally weight-bearing; stress views or CT when stability is uncertain" },
    { label: "Peak age", value: "Adolescent peak in both sexes, then rising incidence in women with age" },
    { label: "Incidence", value: "168.7 per 100,000 per year in a Danish population study; lateral malleolus fractures were 55% of all" }
  ],
  overview: "An ankle fracture is a break of one or more of the malleoli, usually the lateral malleolus, produced by a rotational force through the mortise. In a population study of 9767 ankle fractures in Denmark the incidence was 168.7 per 100,000 per year, the lateral malleolus was fractured in 55%, and falls (61%) and sports (22%) were the main causes [r1]. Ankle fractures are usually classified by the level of the fibular fracture relative to the syndesmosis (Weber) and by the injury mechanism and ligament sequence (Lauge-Hansen).\n\nThe central question is stability. Stable fractures can be treated non-operatively. The integrity of the medial column (the medial malleolus and the deltoid ligament) is essential for stability, and bimalleolar and trimalleolar fractures and high fibular fractures with deltoid injury are usually unstable [r2]. A Cochrane review found insufficient evidence to say whether surgery or conservative treatment gives better long-term results in adults [r3]. Physiotherapists see patients after casting or fixation, when the main task is to restore movement, gait and function without risking the reduction.",

  epidemiology: {
    text: "In a Danish population-based study of 9767 ankle fractures (2005–2014), the mean incidence was 168.7 per 100,000 per year (157.1 in males and 179.5 in females) and the mean age was 41.4 years. Incidence peaked in adolescents of both sexes with a male predominance. After 19 years male incidence declined with age, whereas female incidence increased. Lateral malleolus fractures were the most common type at 55%, and the predominant causes were falls (61%) followed by sports (22%). Years with cold winters had higher incidence [r1]. A Cochrane review gives an incidence of 122 per 100,000 and notes that fractures usually affect young men and older women [r3]. Another study notes that ankle fractures are about 10% of all traumatic fractures, and that tibiotalar dislocation accompanies 21–36% of them [r4].",
    riskFactors: {
      intrinsic: [
        "Female sex after about 50 years: female incidence rises with age [r1]",
        "Adolescence in boys and girls: peak incidence in adolescents [r1]",
        "Low bone density and falls in older people (clinical reasoning; the study shows rising incidence with age in women) [r1]",
        "Previous ankle injury or instability (clinical reasoning)"
      ],
      extrinsic: [
        "Falls, including slips on ice and snow: cold winters raised incidence [r1]",
        "Sports with planting, cutting and contact, such as soccer, rugby and basketball (22% of fractures were sports-related) [r1]",
        "High-energy trauma, which causes fracture-dislocations and more extensive bone and soft-tissue damage [r4]",
        "Unsuitable footwear and uneven ground (clinical observation)"
      ]
    }
  },

  mechanism: {
    summary: "Most ankle fractures are rotational injuries in which the talus rotates in the mortise and pushes the malleoli or tears the ligaments. In the classic supination–external rotation (SER) pattern, which produces a Weber B fibular fracture at the syndesmosis level, the foot is supinated and the talus rotates externally. In the pronation–external rotation (PER) pattern, the deltoid ligament or medial malleolus fails first and a high Weber C fibular fracture follows [r2]. The sequence of injury (Lauge-Hansen teaching) tells you which medial and posterior structures to suspect, because a fibular fracture that looks isolated may hide a deltoid or syndesmotic injury.",
    sequence: [
      "The foot is planted or trapped (on a kerb, in a hole, on ice or in a ski boot), and the body rotates or falls over it.",
      "The talus is forced to rotate externally in the mortise, loading the anterior syndesmosis and the lateral and medial structures (the exact order depends on foot position).",
      "In SER injuries (foot supinated), the AITFL is injured first, and then an oblique fibular fracture forms at the level of the syndesmosis (Weber B) (classic Lauge-Hansen teaching) [r2].",
      "As the force continues, the posterior ligaments or posterior malleolus fail, and finally the deltoid ligament tears or the medial malleolus fractures (classic teaching).",
      "In PER injuries (foot pronated), the medial structures (deltoid or medial malleolus) fail first, and then the fibula fractures higher, above the syndesmosis (Weber C) [r2].",
      "If the medial structures fail, the talus shifts laterally, the medial clear space widens and the fracture becomes unstable [r2,r5].",
      "The athlete hears or feels a crack, cannot bear weight, and the ankle swells and may deform. Fracture-dislocations cause more extensive bone and soft-tissue damage [r4]."
    ],
    variants: [
      { name: "Weber B, supination–external rotation (SER)", description: "Oblique fibular fracture at the level of the syndesmosis. Stability depends on whether the deltoid or medial malleolus is intact [r2]." },
      { name: "Weber C, pronation–external rotation (PER) and Maisonneuve", description: "High fibular fracture above the syndesmosis, with the deltoid damaged or the medial malleolus fractured. A proximal fibular (Maisonneuve) fracture with syndesmotic disruption is a variant. Proximal fibular fractures are not repaired, but the syndesmosis is [r2,r6]." },
      { name: "Weber A, supination–adduction (SAD)", description: "A fibular fracture below the syndesmosis, often a transverse avulsion, with a possible medial malleolar fracture. It is usually stable (classic teaching)." },
      { name: "Bimalleolar and trimalleolar fractures", description: "Lateral and medial malleolar fractures, with a posterior malleolar fragment in trimalleolar injuries. These are generally considered unstable [r2]." },
      { name: "Fracture-dislocation and low-energy fracture in older adults", description: "Tibiotalar dislocation accompanies 21–36% of fractures and causes more soft-tissue damage [r4]. Falls from standing are the main cause in older women [r1]." }
    ]
  },

  anatomy: {
    text: "The ankle mortise is formed by the tibial plafond, the medial malleolus and the lateral malleolus (the distal fibula), which embrace the talus. The syndesmosis (AITFL, interosseous ligament and membrane, and PITFL) holds the fibula in the tibial notch. The deltoid ligament on the medial side and the lateral ligaments (ATFL, CFL and PTFL) hold the talus in the mortise. The medial column (the medial malleolus plus the deltoid ligament) is essential for the stability of a fibular fracture [r2]. The posterior malleolus is the posterior lip of the tibia and carries the PITFL attachment. In the Weber classification the level of the fibular fracture relative to the syndesmosis defines the type: A below, B at and C above the syndesmosis.",
    structures: [
      { name: "Lateral malleolus (distal fibula)", role: "Forms the lateral wall of the mortise and gives attachment to the lateral ligaments and the syndesmosis. It is the most commonly fractured malleolus (55% of ankle fractures) [r1]." },
      { name: "Medial malleolus and deltoid ligament", role: "The medial column. Its integrity is essential for stability in fibular fractures [r2]." },
      { name: "Syndesmosis (AITFL, interosseous ligament, PITFL)", role: "Holds the fibula against the tibia. Its disruption makes a Weber B or C fracture unstable and is under-recognised on plain radiographs [r7]." },
      { name: "Posterior malleolus", role: "Posterior tibial lip, with the PITFL attachment. Involved in trimalleolar fractures [r2]." },
      { name: "Talar dome and plafond cartilage", role: "Weight-bearing surfaces that can be injured with the fracture. Osteochondral lesions and syndesmosis diastasis were the main prognostic factors in one arthroscopic series (clinical reasoning)." },
      { name: "Tibialis posterior, peroneal and flexor tendons, and neurovascular bundle", role: "Pass close to the malleoli and can be injured or trapped; the posterior tibial neurovascular bundle runs behind the medial malleolus (standard anatomy)." }
    ]
  },

  pathophysiology: {
    tissueDamage: "A rotational force breaks cortical bone and tears the ligaments in sequence. In a Weber B fracture the fibula fractures obliquely at the syndesmosis; whether the injury is stable then depends on the medial structures [r2]. A fibula that looks isolated can be part of a bimalleolar-equivalent injury, because a deltoid tear lets the talus shift laterally and the medial clear space widen, which changes the mortise and loads the cartilage unevenly [r2,r5].\n\nBone heals by the stages of callus repair: haematoma, inflammation, soft callus, hard callus and remodelling. Casting and surgery differ in what they protect against. In older adults treated with close contact casting for unstable fractures, 19% later converted to surgery, and radiological malunion was more common than after surgery (15% vs 3%), whereas infection and wound breakdown were more common after surgery (10% vs 1%) [r8]. The syndesmosis is often injured, and plain stress radiography can under-detect it: in 53 Weber B or C fractures without frank diastasis, intraoperative stress radiographs were positive in 30.2% but arthroscopy showed syndesmotic diastasis in 66.0% [r7].",
    structures: [
      { name: "Fibula (lateral malleolus)", effect: "Fractures at the level of the syndesmosis (Weber B) or above it (Weber C). Displacement shortens or rotates the fibula and lets the talus shift laterally [r2]." },
      { name: "Medial malleolus and deltoid ligament", effect: "Fracture or tear makes the injury unstable. An intact medial column allows non-operative care [r2]." },
      { name: "Syndesmosis", effect: "Injured in many Weber B and C fractures. Arthroscopy found diastasis in 66.0% of 53 fractures, more than stress radiographs (30.2%) [r7]." },
      { name: "Posterior malleolus", effect: "Fractured in trimalleolar injuries with PITFL attachment; affects joint congruity [r2]." },
      { name: "Articular cartilage", effect: "Contusion or osteochondral injury can accompany the fracture. In a Chinese arthroscopic series of 42 patients, osteochondral lesions and syndesmosis diastasis were the most important prognostic factors for poor function (clinical reasoning; abstract read, small series)." },
      { name: "Soft tissues and skin", effect: "Swelling, blisters and wound breakdown affect timing of surgery and infection risk; infection and wound breakdown occurred in 10% after surgery in older adults [r8]." },
      { name: "Neurovascular bundle", effect: "Can be compromised by displacement or dislocation (clinical reasoning)." }
    ],
    muscles: [
      { name: "Calf muscles (gastrocnemius and soleus)", effect: "Disuse atrophy and a stiff ankle after immobilisation reduce push-off capacity (clinical reasoning)." },
      { name: "Tibialis anterior and the dorsiflexors", effect: "Weakness and reduced range limit foot clearance and gait" },
      { name: "Peroneals and tibialis posterior", effect: "Can be injured or scarred in the fracture zone and weakened by disuse (clinical reasoning)." },
      { name: "Quadriceps, hip abductors and extensors", effect: "Weaken during non-weight-bearing and protected weight-bearing; they are retrained early" }
    ],
    cellular: [
      { phase: "Haematoma and inflammation", timing: "0–7 days", description: "Bleeding from the fracture and soft tissue forms a clot. Inflammatory cells clear debris and release growth factors (general fracture biology)." },
      { phase: "Soft callus", timing: "About 1–3 weeks", description: "Cartilage-rich callus bridges the fragments and gives early stability (general fracture biology)." },
      { phase: "Hard callus", timing: "About 3–12 weeks", description: "Woven bone replaces the soft callus and the fracture becomes stable (general fracture biology)." },
      { phase: "Remodelling", timing: "Months to years", description: "Woven bone is replaced by lamellar bone along the lines of load (general fracture biology)." }
    ],
    systems: [
      { system: "Vascular and soft-tissue", effect: "Swelling and blisters often delay surgery, and compartment syndrome, though uncommon, must be recognised (clinical reasoning)." },
      { system: "Nervous system", effect: "Pain, immobilisation and altered proprioception impair balance and gait; fear of weight-bearing is common (clinical reasoning)." },
      { system: "Musculoskeletal chain", effect: "Protected weight-bearing shifts load to the other leg, hip and back; after fracture, dorsiflexion and plantarflexion may remain restricted: in one series of fracture-dislocations they were about 14° and 36° versus 28° and 46° on the unaffected side [r4]." },
      { system: "Bone health", effect: "A low-energy fracture in an older person may signal low bone density and fall risk (clinical reasoning)." },
      { system: "Long-term joint health", effect: "Post-traumatic osteoarthritis is common after ankle fracture-dislocations: 24 of 27 patients in one retrospective series had radiographic signs, although function was good [r4]." }
    ]
  },

  grading: {
    system: "Weber classification (with Lauge-Hansen mechanism)",
    grades: [
      { grade: "Weber A (below the syndesmosis)", description: "Fibular fracture below the level of the syndesmosis, often from supination–adduction. The syndesmosis is intact and the injury is usually stable, with a possible medial malleolar fracture (classic teaching).", prognosis: "Usually non-operative if the medial malleolus is not displaced (clinical convention)." },
      { grade: "Weber B (at the syndesmosis)", description: "Trans-syndesmotic fibular fracture, usually supination–external rotation (SER). Stability depends on the deltoid and the medial malleolus; how best to identify unstable isolated SER fractures is controversial [r2].", prognosis: "Stable if the medial clear space is normal on weight-bearing or stress views; unstable if the medial structures are disrupted [r2,r5,r9]." },
      { grade: "Weber C (above the syndesmosis)", description: "High fibular fracture, usually pronation–external rotation (PER), with a damaged deltoid ligament or fractured medial malleolus, which is considered unstable [r2]. Maisonneuve fracture is a proximal variant [r6].", prognosis: "Usually needs surgery, with syndesmotic assessment and fixation if unstable [r2,r6]." },
      { grade: "Bimalleolar and trimalleolar", description: "Lateral and medial malleolar fractures, with or without posterior malleolus. Generally considered unstable [r2].", prognosis: "Usually fixed surgically; older adults may be managed with close contact casting [r8]." },
      { grade: "Fracture-dislocation", description: "Tibiotalar dislocation with fracture, found in 21–36% of ankle fractures, with more extensive bone and soft-tissue damage [r4].", prognosis: "Urgent reduction and surgery; high rate of post-traumatic arthritis (24 of 27 in one series) [r4]." }
    ]
  },

  timeframes: {
    summary: "Bone union typically takes about 6–12 weeks, and protected weight-bearing for about 6 weeks was used in a randomised trial of non-operatively treated Weber B fractures [r10]. Recovery of function takes longer: at 6 months, older adults still had mean Olerud–Molander scores of about 65 out of 100 [r8]. Early weight-bearing improved function at 6–9 weeks after surgery, but the difference had disappeared by 6 months [r11].",
    healing: [
      { phase: "Haematoma and inflammation", startDay: 0, endDay: 7, description: "Pain and swelling peak; protect in a splint, cast or brace and elevate (clinical convention)." },
      { phase: "Soft callus and protected loading", startDay: 7, endDay: 42, description: "Protected weight-bearing per surgeon or physician. Removable braces allow early movement [r12,r13]." },
      { phase: "Hard callus and progressive loading", startDay: 42, endDay: 90, description: "Radiographic union, weaning from the boot or brace, graded weight-bearing and range work" },
      { phase: "Remodelling and rehabilitation", startDay: 90, endDay: 365, description: "Strength, balance and impact are rebuilt. Stiffness and swelling can persist for months [r4,r8]." }
    ],
    milestones: [
      { label: "Protected weight-bearing in cast or brace", day: 42, note: "Six weeks of cast or brace and protected weight-bearing in a randomised trial of non-operative Weber B fractures [r10]" },
      { label: "Brace or cast comparison endpoint", day: 112, note: "Primary outcome at 16 weeks in the AIR trial [r12]" },
      { label: "Walking without aids in normal shoes", day: 84, note: "Typical for uncomplicated fractures (clinical convention)" },
      { label: "Return to running", day: 120, note: "After union, with pain-free hopping (clinical convention)" },
      { label: "Return to sport or heavy work", day: 180, note: "Often 4–6 months or longer (clinical convention); at 6 months older adults averaged about 65/100 on the OMAS [r8]" }
    ],
    returnToSport: "Criteria-based, never time-based. There are no validated criteria. A common clinical convention is 4–6 months or longer after an operatively treated fracture, once the fracture has united, range, strength and balance are restored, and hop and cutting tests are passed. Older adults may have residual symptoms at 6 months: mean Olerud–Molander scores were 66.0 after surgery and 64.5 after casting [r8]."
  },

  clinicalPresentation: {
    symptoms: [
      "Immediate pain after a twist or fall, often with a feeling or sound of a crack",
      "Inability to bear weight or take four steps",
      "Rapid swelling and bruising around the ankle, sometimes with blisters",
      "A visibly deformed ankle in fracture-dislocation",
      "Pain with any attempt to move the ankle, and sometimes numbness or tingling in the foot"
    ],
    signs: [
      "Swelling and bruising over the malleoli, often with bone tenderness at the posterior edge or tip of the malleolus [r14]",
      "Deformity, a displaced foot or skin tenting in fracture-dislocation [r4]",
      "Tenderness over the medial deltoid region, which suggests medial injury and instability [r2]",
      "Tenderness along the proximal fibula in Maisonneuve injuries [r6]",
      "Inability to bear weight, and altered capillary refill or sensation if neurovascular injury is present"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism: twist, fall, sport, ice, high-energy trauma; foot position (supinated or pronated) and direction of rotation [r2]",
      "Immediate weight-bearing, sound or sensation of a crack, and the ability to walk four steps (Ottawa rules) [r14]",
      "Treatment so far: reduction, splint, cast or surgery; weight-bearing instructions; dates and surgeon's protocol",
      "Pain, swelling, wound or skin concerns, neurovascular symptoms, and calf pain",
      "Previous ankle injuries, bone health (falls, osteoporosis, steroids), diabetes, smoking and medications (clinical reasoning)",
      "Work, sport and home demands, and goals",
      "Fear of weight-bearing, sleep and mood"
    ],
    observation: ["Swelling, bruising and blisters", "Wound condition, scars and signs of infection", "Alignment of the foot and ankle compared with the other side", "Gait with aids and the weight-bearing pattern", "Skin colour and temperature"],
    palpation: [
      "Bone first (Ottawa): posterior edge and tip of the lateral and medial malleoli (distal 6 cm), base of the fifth metatarsal, navicular [r14]",
      "Whole fibula to the head to exclude a Maisonneuve fracture [r6]",
      "Medial deltoid region, the syndesmosis and the Achilles tendon",
      "Surgical wounds and hardware prominence once healed",
      "Calf for tenderness and swelling (deep vein thrombosis screen)"
    ],
    rangeOfMotion: [
      "Active and passive dorsiflexion, plantarflexion, inversion and eversion, compared with the other side, within the surgeon's limits",
      "Weight-bearing dorsiflexion (knee-to-wall lunge) once weight-bearing is allowed",
      "Subtalar and midfoot mobility; stiffness is common after immobilisation [r4]",
      "Great toe and lesser toe range"
    ],
    strength: [
      "Calf capacity: double then single heel raise when cleared",
      "Dorsiflexor, evertor and invertor strength",
      "Quadriceps, hip abductor and extensor strength after protected weight-bearing"
    ],
    neuro: [
      "Sensation over the dorsum, sole and lateral foot (superficial peroneal, sural and tibial nerves)",
      "Dorsalis pedis and posterior tibial pulses and capillary refill",
      "Signs of complex regional pain syndrome: disproportionate pain, allodynia, colour or temperature change (clinical reasoning)"
    ],
    functional: [
      "Gait pattern and the ability to walk without aids",
      "Single-leg stance once weight-bearing is allowed",
      "Stairs, sit-to-stand and step-up tests",
      "Hop and change-of-direction tests as part of return to sport"
    ],
    specialTests: [
      {
        name: "Ottawa ankle rules (bony tenderness and weight-bearing)",
        purpose: "Decide whether a radiograph is needed to exclude a fracture",
        procedure: "Palpate the posterior edge and tip of both malleoli (distal 6 cm) and ask the patient to take four steps, both at injury and in the clinic.",
        positive: "Bone tenderness at the posterior edge or tip of either malleolus, or inability to take four steps",
        sensitivity: "99.4% (95% CI 97.9–99.8) pooled from 66 studies",
        specificity: "35.3% (95% CI 28.8–42.3) pooled from 66 studies",
        refs: ["r14"]
      },
      {
        name: "External rotation stress examination (medial clear space)",
        purpose: "Test the stability of an apparently isolated Weber B fibular fracture",
        procedure: "Under radiographic control, the foot is externally rotated while the medial clear space is measured on a mortise view. Specialist-performed; physiotherapists do not apply this test to an acute fracture.",
        positive: "A medial clear space of 5 mm or more was used to define an unstable fracture in a randomised trial [r10].",
        refs: ["r10"]
      },
      {
        name: "Gravity stress radiograph",
        purpose: "Judge deltoid integrity and stability in isolated SER fractures without manual stress",
        procedure: "The patient lies on the affected side with the ankle hanging over a support, and a mortise view is taken. Specialist-ordered.",
        positive: "A medial clear space above 4 mm on gravity stress suggests an unstable SER injury; the mean in 120 normal ankles was 3.19 mm (95% CI 3.1–3.31) [r5].",
        refs: ["r5"]
      },
      {
        name: "Weight-bearing mortise radiograph",
        purpose: "Judge medial clear space restoration under physiological load as an alternative to stress views",
        procedure: "Take the mortise radiograph with the patient bearing weight, if the fracture and pain allow.",
        positive: "A widened medial clear space on weight-bearing suggests an unstable injury and the need for surgical review [r2]. In nine patients with SER fractures, the medial clear space was 1.41 mm on weight-bearing cone-beam CT versus 5.82 mm on gravity stress radiographs [r9].",
        refs: ["r2", "r9"]
      },
      {
        name: "Calf squeeze and Wells clinical screen for deep vein thrombosis",
        purpose: "Screen for DVT in patients immobilised after an ankle fracture",
        procedure: "Palpate the calf for tenderness, measure calf circumference difference and ask about leg pain, swelling, chest pain or breathlessness.",
        positive: "Unilateral calf swelling, tenderness or any symptom of pulmonary embolism: refer urgently",
        refs: []
      }
    ],
    clinicalRules: [
      {
        name: "Ottawa ankle (and midfoot) rules",
        description: "Request an ankle series if there is pain near the malleoli and bone tenderness at the posterior edge or tip of either malleolus, or an inability to take four steps both at injury and in the clinic. In a meta-analysis of 66 studies, the ankle rules had pooled sensitivity of 99.4% (95% CI 97.9–99.8) and specificity of 35.3% (95% CI 28.8–42.3), so they are good for ruling out fracture but give many false positives [r14]."
      },
      {
        name: "Stability decision for isolated Weber B fractures",
        description: "Stability rests on the medial column. A medial clear space of 5 mm or more on external rotation stress was the criterion for 'unstable' in a randomised trial [r10]; above 4 mm on gravity stress should raise suspicion of an unstable SER injury [r5]. Weight-bearing radiographs can also be used to classify the fracture [r2]. Thresholds differ between sources, so the decision rests with the treating surgeon."
      }
    ],
    outcomeMeasures: [
      { name: "Olerud–Molander Ankle Score (OMAS)", use: "Primary outcome in the AIR trial and the trial of casting versus surgery in older adults [r8,r12]" },
      { name: "Manchester–Oxford Foot Questionnaire (MOXFQ)", use: "Secondary outcome in the AIR trial; foot and ankle function [r12]" },
      { name: "Foot and Ankle Ability Measure (FAAM)", use: "Self-reported function in daily living and sport" },
      { name: "Weight-bearing dorsiflexion lunge and ankle range", use: "Range recovery; dorsiflexion was about half the other side in one series of fracture-dislocations [r4]" },
      { name: "Single-leg heel raise, hop tests and Y-balance", use: "Performance and return-to-sport measures when cleared" }
    ],
    imaging: [
      { modality: "Radiographs (AP, lateral and mortise), weight-bearing if allowed", indication: "Ottawa-positive injuries, suspected fracture, and follow-up of reduction and union", findings: "Fibular fracture level (Weber), medial malleolar fracture, posterior malleolar fragment, medial clear space and talar position. Weight-bearing views help judge stability [r2]." },
      { modality: "Stress radiograph (external rotation or gravity stress)", indication: "Isolated Weber B fracture of uncertain stability, decided by the surgeon", findings: "Medial clear space of 5 mm or more (external rotation stress) [r10]; above 4 mm on gravity stress [r5]" },
      { modality: "CT (including weight-bearing cone-beam CT where available)", indication: "Complex fractures, posterior malleolar fragments and doubtful syndesmotic diastasis", findings: "In 17 AO/OTA B and C fractures, CT detected syndesmotic diastasis in 82.3% versus 64.8% on plain radiographs [r15]. Weight-bearing cone-beam CT also shows residual malreduction and can predict stability [r9]." },
      { modality: "Arthroscopy or intraoperative assessment", indication: "Suspected syndesmotic injury during fixation", findings: "Arthroscopy detected syndesmotic diastasis in 66.0% of 53 Weber B or C fractures versus 30.2% for intraoperative stress radiographs [r7]." }
    ]
  },

  differentials: [
    { name: "High ankle (syndesmosis) sprain", id: "high-ankle-sprain", distinguishing: "External rotation mechanism with pain above the joint, positive squeeze and external rotation tests, no bony tenderness and a negative radiograph" },
    { name: "Lateral ankle sprain", id: "lateral-ankle-sprain", distinguishing: "Inversion mechanism with ATFL tenderness; negative Ottawa rules and no bone tenderness" },
    { name: "Medial ankle (deltoid) sprain", id: "medial-ankle-sprain", distinguishing: "Eversion mechanism with medial tenderness; no malleolar bone tenderness or fracture on radiograph" },
    { name: "Fifth metatarsal base fracture", id: "fifth-metatarsal-fracture", distinguishing: "Bone tenderness at the base of the fifth metatarsal after an inversion injury" },
    { name: "Osteochondral lesion of the talus", id: "osteochondral-lesion-talus", distinguishing: "Persistent deep ankle pain, catching or swelling after a sprain; MRI confirms. It can coexist with a fracture." },
    { name: "Lisfranc injury", id: "lisfranc-injury", distinguishing: "Midfoot pain, plantar bruising and a widened first–second metatarsal gap on weight-bearing radiograph" },
    { name: "Achilles tendon rupture", id: "achilles-rupture", distinguishing: "Posterior pain, palpable gap, weak plantarflexion and a positive Thompson test" },
    { name: "Talus or calcaneus fracture", distinguishing: "Hindfoot pain after a fall from height or high-energy injury; radiograph or CT shows the fracture (clinical reasoning)" }
  ],
  redFlags: [
    "Positive Ottawa ankle rules, inability to take four steps, deformity or bony tenderness: arrange radiographs the same day [r14].",
    "Gross deformity, a dislocated or displaced foot, skin tenting or an open wound: this is an emergency. Splint, keep the patient still and send to the emergency department for reduction [r4].",
    "Absent pulses, a cold or pale foot, loss of sensation, severe swelling with pain on passive toe stretch or pain out of proportion: suspect neurovascular compromise or compartment syndrome and send to emergency.",
    "Loss of reduction, increasing displacement or new pain after casting or surgery: arrange urgent orthopaedic review. Close contact casting converted to surgery in 19% of older adults, with malunion more common than after surgery [r8].",
    "Wound redness, discharge, fever or breakdown after surgery: suspect infection and refer urgently. Infection or wound breakdown occurred in 10% of older adults after surgery [r8].",
    "Calf pain or swelling, chest pain or breathlessness, especially in a boot or cast: suspect DVT or pulmonary embolism and send to emergency (clinical reasoning).",
    "Disproportionate pain, swelling, colour or temperature change and allodynia some weeks after fracture: consider complex regional pain syndrome and refer (clinical reasoning)."
  ],

  management: {
    principles: "The first decision belongs to the medical team: is the fracture stable or unstable? Stable fractures are treated non-operatively and unstable ones are usually treated surgically, although the evidence is limited. A Cochrane review of 292 participants in four trials found insufficient evidence to say whether surgery or conservative treatment gives better long-term outcomes [r3]. For isolated unstable Weber B fractures, a randomised trial found equivalent function between fixation and non-operative care, with more displacement and union problems in the non-operative group but infections and hardware removal in the operative group [r10]. In older adults with unstable fractures, close contact casting gave equivalent function at 6 months with fewer wound complications but more malunion [r8]. Physiotherapists contribute after immobilisation or fixation: restoring movement, gait, strength and balance, within the surgeon's weight-bearing instructions [r11,r12,r13].",
    medical: [
      {
        name: "Non-operative treatment of stable fractures (cast, boot or brace)",
        description: "Stable ankle fractures can be treated non-operatively [r2]. In the AIR trial of 669 adults, a removable brace was not inferior to plaster cast at 16 weeks (OMAS difference 1.8 in favour of the brace, 95% CI −2.0 to 5.6), and range-of-motion exercises started immediately in the brace group [r12]. In a randomised trial of isolated unstable Weber B fractures treated non-operatively, a short leg cast or brace and protected weight-bearing for 6 weeks gave function equivalent to fixation [r10].",
        evidence: "moderate", recommendation: "recommended", refs: ["r2", "r12", "r10"]
      },
      {
        name: "Close contact casting for unstable fractures in older adults",
        description: "In 620 adults older than 60 with unstable fractures, close contact casting gave ankle function equivalent to surgery at 6 months (OMAS 64.5 vs 66.0). Infection and wound breakdown were more common with surgery (10% vs 1%), radiologic malunion was more common with casting (15% vs 3%), and 19% of the casting group converted to surgery [r8]. It needs close monitoring of reduction.",
        evidence: "moderate", recommendation: "consider", refs: ["r8", "r3"]
      },
      {
        name: "Open reduction and internal fixation (ORIF) for unstable or displaced fractures",
        description: "Surgical fixation is the contemporary standard for unstable injuries [r8], but a Cochrane review found insufficient evidence for superiority over conservative care in long-term outcomes. Early treatment failure was higher in the conservative group (2/116 vs 19/129; RR 0.18) because closed reduction failed [r3]. In the Weber B trial, 5 of 41 surgical patients had surgical site infection and 5 needed hardware removal [r10]. A cost-utility analysis found ORIF not cost-effective at 1 year but potentially preferred over a lifetime if it lowers later ankle arthrosis by more than 3% [r16].",
        evidence: "limited", recommendation: "consider", refs: ["r3", "r10", "r8", "r16"]
      },
      {
        name: "Syndesmotic assessment and fixation during fracture surgery",
        description: "Syndesmotic injury is common in Weber B and C fractures: arthroscopy found diastasis in 66.0% of 53 cases, versus 30.2% on intraoperative stress radiographs, and 31 of 34 patients with screws had healed ligaments at second-look arthroscopy [r7]. In 236 patients with syndesmotic screws, 16 complications occurred in 15 patients (synostosis 11, screw breakage 4, late diastasis 1), and the authors suggest a screw be placed when in doubt [r6b]. The evidence is from case series.",
        evidence: "limited", recommendation: "consider", refs: ["r7", "r17"]
      }
    ],
    physio: [
      {
        name: "Early weight-bearing within the surgeon's protocol after fixation",
        description: "In a meta-analysis of 14 randomised trials (mostly high risk of bias), early weight-bearing improved function at 6–9 weeks after surgery (SMD 0.39, 95% CI 0.19–0.58) and shortened return to work (MD −12.29 days), but the functional difference had gone by 6 months [r11]. An earlier meta-analysis found no difference in complications between early and late weight-bearing (RR 1.26, 95% CI 0.56–2.85) [r13]. After syndesmotic screw fixation, full weight-bearing did not cause diastasis in an 86-patient retrospective study [r18]. Always follow the surgeon's instructions.",
        evidence: "limited", recommendation: "consider", refs: ["r11", "r13", "r18"]
      },
      {
        name: "Early ankle movement and removable immobilisation with exercise",
        description: "A meta-analysis of 25 studies found that ankle exercises led to earlier return to work or daily activities than immobilisation (mean difference −20.76 days, 95% CI −40.02 to −1.50) without more complications [r13]. A Cochrane review found that removable immobilisation with exercise after surgical fixation reduced activity limitation in 5 of 8 studies and reduced pain (RR 0.39), but had more minor adverse events (RR 2.30) [r19]. A later meta-analysis of randomised trials found no clinical benefit from early ankle mobilisation [r11]. The evidence conflicts, and patient reliability matters.",
        evidence: "conflicting", recommendation: "consider", refs: ["r13", "r19", "r11"]
      },
      {
        name: "Exercise-based rehabilitation after immobilisation (range, strength, balance, gait)",
        description: "The Cochrane review found no evidence for stretching, manual therapy or exercise compared with usual care after the immobilisation period, and that evidence overall is of low quality [r19]. Rehabilitation is still the standard route for restoring dorsiflexion, calf capacity, balance and gait, because range and strength are reduced after fracture (clinical reasoning) [r4]. Dosages are conventions.",
        evidence: "very-limited", recommendation: "consider", refs: ["r19", "r4"]
      },
      {
        name: "Gait retraining and aids, with progressive weight-bearing",
        description: "Teach safe walking with the prescribed weight-bearing status, then wean aids when gait is symmetrical (clinical convention). Early weight-bearing within the surgeon's instructions is not associated with more complications [r13].",
        evidence: "expert-opinion", recommendation: "recommended", refs: ["r13"]
      },
      {
        name: "Routine prolonged non-weight-bearing and immobilisation without a clinical reason",
        description: "Prolonged immobilisation delays return to work and activity compared with early exercise or early weight-bearing, and the AIR trial found plaster cast to be no better than a removable brace [r13,r11,r12]. Stay within the surgeon's limits where there is a clinical reason for protection.",
        evidence: "limited", recommendation: "not-recommended", refs: ["r13", "r11", "r12"]
      }
    ],
    education: [
      "A broken ankle needs protection while the bone and ligaments heal, but protection is not the same as doing nothing. Follow the weight-bearing instructions and keep the rest moving.",
      "Bone heals in about 6–12 weeks, but strength, balance and range take months to return. Swelling and stiffness at 3–6 months are common.",
      "Raise the foot, keep the wound clean and report increasing pain, redness, discharge or a change in toe colour or sensation.",
      "Do not remove or modify the cast, brace or boot unless your team has told you to.",
      "Report calf pain or swelling, chest pain or shortness of breath at once.",
      "Ask your doctor about bone health and fall prevention if the fracture came from a fall."
    ]
  },

  rehab: {
    overview: "Rehabilitation follows the surgeon's or physician's protocol. Weight-bearing status, brace use and any range-of-motion limits differ between non-operative care, fixation of the fibula alone, and fixation with syndesmotic screws or a posterior malleolar fragment. The stages below are typical, criteria-based and cautious. Dosages are common clinical conventions, not trial doses. Evidence supports early weight-bearing and early movement in selected patients but is mostly low quality and sometimes conflicting [r11,r13,r19].",
    stages: [
      {
        name: "Protect, settle and keep moving",
        timeframe: "Weeks 0–6 (typical; per protocol)",
        goals: ["Control pain and swelling", "Protect the fracture and wound", "Maintain hip, knee and core strength", "Start allowed ankle movement if the brace permits"],
        precautions: ["Follow the weight-bearing status exactly (non-weight-bearing, protected or full)", "No forced rotation or dorsiflexion beyond the surgeon's limits", "Watch the wound, the colour and sensation of the foot, and the calf", "Report loss of reduction, wound problems or DVT symptoms at once"],
        exercises: [
          { name: "Elevation, toe movement and calf pumps", dosage: "Hourly while awake, short sets", cues: "Foot above the heart, wiggle the toes" },
          { name: "Ankle alphabet within the brace limits", dosage: "2 sets, 3–4 times daily, if the brace is removable and the surgeon allows", cues: "Small, pain-free movement from the ankle", figure: { pose: "ex-ankle-alphabet", view: "lateral", props: ["chair"] } },
          { name: "Hip and core strengthening (for example bridge and clamshell)", dosage: "3 × 10–15, daily", cues: "Keep the injured foot relaxed", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Quadriceps and hamstring work and the other leg", dosage: "3 × 10–15, daily", cues: "Maintain strength for crutch use" },
          { name: "Crutch or frame walking with the prescribed weight-bearing", dosage: "Short, frequent walks", cues: "Heel strike, equal step lengths, look ahead", figure: { pose: "walk-heel-strike", view: "lateral" } }
        ],
        progressionCriteria: ["Medical clearance to increase weight-bearing or remove the cast", "Wound healed or healing without infection", "Pain at rest 3/10 or less", "Safe, independent transfers and walking with aids"]
      },
      {
        name: "Restore range and gait",
        timeframe: "Weeks 6–12 (typical; per protocol)",
        goals: ["Full weight-bearing without a limp", "Restore dorsiflexion and plantarflexion", "Reduce swelling and wean from the boot or brace", "Start calf and balance work"],
        precautions: ["Progress weight-bearing and load only as cleared", "Increase load only if swelling and pain settle within 24 hours", "Avoid forced end-range stretching of a healing syndesmosis or an osteopenic bone"],
        exercises: [
          { name: "Weight-bearing dorsiflexion lunge (knee-to-wall)", dosage: "3 × 10 holds of 5 s, daily", cues: "Heel down, knee over the second toe" },
          { name: "Active ankle range in all directions", dosage: "3 × 15 each direction, daily", cues: "Smooth and pain-free, full range as it returns" },
          { name: "Double-leg calf raise", dosage: "3 × 10–15, slow 3 s lowering, daily", cues: "Rise evenly over both big toes", figure: { pose: "ex-calf-raise", view: "lateral" } },
          { name: "Single-leg balance", dosage: "3 × 20–30 s, near a support", cues: "Soft knee, stay tall, look ahead", figure: { pose: "ex-single-leg-balance", view: "anterior" } },
          { name: "Gait retraining and compression for swelling", dosage: "Daily walking program building to 20–30 minutes", cues: "Normal heel–toe pattern, no limp" }
        ],
        progressionCriteria: ["Walking 20 minutes without aids or a limp", "Dorsiflexion within a few degrees of the other side, or improving", "Swelling not worse after exercise", "Radiographic union confirmed by the surgeon"]
      },
      {
        name: "Strength, balance and control",
        timeframe: "Weeks 10–20 (typical)",
        goals: ["Single-leg calf capacity and strength", "Balance with eyes closed and on a soft surface", "Normal stairs and stepping", "Prepare for running and impact"],
        precautions: ["Progress load gradually", "Stop and re-assess if pain, swelling or giving way returns", "Introduce impact only after union is confirmed"],
        exercises: [
          { name: "Single-leg calf raise (progress from double-leg, then add load)", dosage: "3 × 8–12, then add a dumbbell, 3 times per week", cues: "Rise over the big toe, slow lowering over 3 s", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Step-ups and controlled step-downs", dosage: "3 × 10 each leg, 3 times per week", cues: "Knee over the second toe, control the lowering", figure: { pose: "ex-step-down", view: "anterior", props: ["step"] } },
          { name: "Single-leg squat to a chair", dosage: "3 × 8 each leg", cues: "Level pelvis, knee over the second toe", figure: { pose: "ex-single-leg-squat", view: "anterior" } },
          { name: "Band-resisted ankle exercises in all directions", dosage: "3 × 15 each direction, 3 s return", cues: "Move only the ankle", figure: { pose: "ex-ankle-alphabet", view: "lateral", props: ["resistance-band"] } },
          { name: "Single-leg balance on a soft surface with a task", dosage: "3 × 30–45 s: eyes closed, then ball catch", cues: "Quiet ankle, level hips", figure: { pose: "ex-single-leg-balance", view: "anterior" } }
        ],
        progressionCriteria: ["10 single-leg heel raises", "Single-leg stance 30 s eyes closed", "Stairs reciprocal without pain", "No swelling after loading sessions"]
      },
      {
        name: "Impact, running and return to sport or work",
        timeframe: "Weeks 16–30+ (typical; longer for complex fractures)",
        goals: ["Return to running", "Hopping, landing and change of direction", "Sport- or work-specific tasks", "Long-term bone and ankle health"],
        precautions: ["Introduce running and hopping gradually", "No unrestricted sport until criteria are met and the surgeon agrees", "Re-assess for post-traumatic stiffness or osteochondral problems if pain persists", "Consider taping or bracing for return to sport (clinical convention)"],
        exercises: [
          { name: "Walk–jog progression", dosage: "1 min jog, 1 min walk, 8–10 rounds, building jog time every 2–3 sessions", cues: "Short, quiet steps under the body", figure: { pose: "run-midstance", view: "lateral" } },
          { name: "Double-leg landing, then single-leg hop and stick", dosage: "3 × 8 double-leg landings, then 3 × 5 single-leg hops with a 2 s stick", cues: "Soft landing, ankle, knee and hip bend together", figure: { pose: "jump-land", view: "lateral" } },
          { name: "Hopping and bounding progression", dosage: "3 × 5 each leg, 2 times per week", cues: "Land on the full foot", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Planned then reactive change-of-direction drills", dosage: "2–3 sessions per week, progressing speed and angle", cues: "Plant the foot under the knee, keep the ankle quiet", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Weighted single-leg calf raise and balance maintenance", dosage: "10–15 minutes, 2–3 times per week", cues: "Slow lowering over 3 s", figure: { pose: "ex-single-leg-calf-raise", view: "lateral", props: ["dumbbell"] } }
        ],
        progressionCriteria: ["Full pain-free range or stable residual deficit accepted by the patient", "Hop tests within about 90% of the other leg (clinical convention)", "Completion of full training or work duties without swelling or pain", "Confidence and readiness rated high; surgeon or physician clearance"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated criteria exist for return to sport after ankle fracture. These are common clinical conventions.",
      "Radiographic union confirmed by the surgeon, with no loss of reduction",
      "No pain or swelling at rest or after a full training session",
      "Dorsiflexion and plantarflexion range near the other side, or a stable deficit that does not limit the sport",
      "Calf capacity and hop tests around 90% of the other leg (clinical convention)",
      "Cutting, pivoting and landing without pain, giving way or compensation",
      "Athlete confidence, a plan for taping or bracing, and agreement with the coach and surgeon"
    ],
    tests: ["Weight-bearing dorsiflexion lunge", "Single-leg heel raise to fatigue", "Y-balance or star excursion balance test", "Single, triple and side hop tests", "Planned and reactive agility drills", "OMAS and FAAM sport subscale"]
  },
  prognosis: "Most fractures unite, but recovery of function takes months. In 620 older adults with unstable fractures, mean OMAS at 6 months was 66.0 after surgery and 64.5 after casting (out of 100), and a 3-year follow-up was also reported [r8,r20]. In the AIR trial, 669 adults were treated with cast or removable brace, with no significant difference in OMAS at 16 weeks [r12]. Early weight-bearing improved function at 6–9 weeks but not at 6 months [r11]. Complications include infection (10% after surgery in older adults), malunion (15% after casting), delayed union or nonunion and hardware removal [r8,r10], syndesmotic synostosis and screw breakage [r17], and post-traumatic osteoarthritis, which was seen radiographically in 24 of 27 patients after surgery for fracture-dislocation, despite good function [r4]. Residual stiffness is common: dorsiflexion was about 14° versus 28° on the unaffected side in that series [r4].",
  prevention: [
    "Fall prevention in older adults (balance, strength, home hazards, vision and medication review) and bone-health assessment after a low-energy fracture (clinical reasoning; falls cause 61% of ankle fractures) [r1].",
    "Safe footwear and care on ice, snow and uneven ground; cold winters were linked to higher incidence [r1].",
    "Sport-specific neuromuscular training and ankle support after previous sprains (clinical reasoning).",
    "Early recognition of unstable injuries and the right mix of protection and early movement to reduce complications [r11,r13]."
  ],
  clinicalPearls: [
    "Ottawa rules rule fractures out, not in: sensitivity 99.4% but specificity only 35.3%, so many positive patients have no fracture [r14].",
    "An isolated lateral malleolus fracture is not always simple. The deltoid and the syndesmosis decide stability, so ask what the weight-bearing or stress film showed [r2,r5].",
    "Stress radiograph thresholds differ (5 mm on external rotation stress, above 4 mm on gravity stress), so rely on the surgeon's judgement, not a single number [r5,r10].",
    "The syndesmosis is easy to miss: arthroscopy found diastasis in 66.0% of Weber B or C fractures, versus 30.2% on intraoperative stress radiographs [r7].",
    "Older adults may do as well with casting as with surgery, but check reduction closely: 19% converted to surgery and malunion was more common [r8].",
    "Early weight-bearing helped function at 6–9 weeks and was safe in trials, but the benefit faded by 6 months; always work to the surgeon's protocol [r11,r13].",
    "Expect stiffness: dorsiflexion was about half the other side in one fracture-dislocation series, so put range work early in the plan [r4]."
  ],
  related: ["high-ankle-sprain", "lateral-ankle-sprain", "medial-ankle-sprain", "osteochondral-lesion-talus", "fifth-metatarsal-fracture", "lisfranc-injury"],

  references: [
    { id: "r1", citation: "Elsoe R, Ostgaard SE, Larsen P. Population-based epidemiology of 9767 ankle fractures. Foot Ankle Surg. 2018;24(1):34-9.", pmid: "29413771", doi: "10.1016/j.fas.2016.11.002", type: "cohort", year: 2018 },
    { id: "r2", citation: "Gougoulias N, Sakellariou A. When is a simple fracture of the lateral malleolus not so simple? How to assess stability, which ones to fix and the role of the deltoid ligament. Bone Joint J. 2017;99-B(7):851-5.", pmid: "28663388", doi: "10.1302/0301-620X.99B7.BJJ-2016-1087.R1", type: "narrative-review", year: 2017 },
    { id: "r3", citation: "Donken CC, Al-Khateeb H, Verhofstad MH, et al. Surgical versus conservative interventions for treating ankle fractures in adults. Cochrane Database Syst Rev. 2012;(8):CD008470.", pmid: "22895975", doi: "10.1002/14651858.CD008470.pub2", type: "systematic-review", year: 2012 },
    { id: "r4", citation: "Pehlivanoglu T, Demirel M, Koyuncu D, et al. Long-term clinical and radiographic outcomes after surgical treatment for ankle fracture-dislocations. J Am Podiatr Med Assoc. 2025;115(3).", pmid: "38407969", doi: "10.7547/22-225", type: "cohort", year: 2025 },
    { id: "r5", citation: "Pitakveerakul A, Kungwan S, Arunakul P, et al. Radiographic parameters in gravity stress view of the ankle: normative data. Foot Ankle Surg. 2019;25(6):819-25.", pmid: "30803817", doi: "10.1016/j.fas.2018.10.011", type: "cross-sectional", year: 2019 },
    { id: "r6", citation: "Porter DA, Jaggers RR, Barnes AF, et al. Optimal management of ankle syndesmosis injuries. Open Access J Sports Med. 2014;5:173-82.", pmid: "25177153", doi: "10.2147/OAJSM.S41564", type: "narrative-review", year: 2014 },
    { id: "r7", citation: "Lui TH, Ip K, Chow HT. Comparison of radiologic and arthroscopic diagnoses of distal tibiofibular syndesmosis disruption in acute ankle fracture. Arthroscopy. 2005;21(11):1370.", pmid: "16325090", doi: "10.1016/j.arthro.2005.08.016", type: "cohort", year: 2005 },
    { id: "r8", citation: "Willett K, Keene DJ, Mistry D, et al. Close contact casting vs surgery for initial treatment of unstable ankle fractures in older adults: a randomized clinical trial. JAMA. 2016;316(14):1455-63.", pmid: "27727383", doi: "10.1001/jama.2016.14719", type: "rct", year: 2016 },
    { id: "r9", citation: "Marzo JM, Kluczynski MA, Clyde C, et al. Weight bearing cone beam CT scan versus gravity stress radiography for analysis of supination external rotation injuries of the ankle. Quant Imaging Med Surg. 2017;7(6):678-84.", pmid: "29312872", doi: "10.21037/qims.2017.12.02", type: "cross-sectional", year: 2017 },
    { id: "r10", citation: "Sanders DW, Tieszer C, Corbett B, et al. Operative versus nonoperative treatment of unstable lateral malleolar fractures: a randomized multicenter trial. J Orthop Trauma. 2012;26(3):129-34.", pmid: "22330975", doi: "10.1097/BOT.0b013e3182460837", type: "rct", year: 2012 },
    { id: "r11", citation: "Sharma T, Farrugia P. Early versus late weight bearing & ankle mobilization in the postoperative management of ankle fractures: a systematic review and meta-analysis of randomized controlled trials. Foot Ankle Surg. 2022;28(7):827-35.", pmid: "35337752", doi: "10.1016/j.fas.2022.03.003", type: "meta-analysis", year: 2022 },
    { id: "r12", citation: "Kearney R, McKeown R, Parsons H, et al. Use of cast immobilisation versus removable brace in adults with an ankle fracture: multicentre randomised controlled trial. BMJ. 2021;374:n1506.", pmid: "34226192", doi: "10.1136/bmj.n1506", type: "rct", year: 2021 },
    { id: "r13", citation: "Smeeing DPJ, Houwert RM, Briet JP, et al. Weight-bearing and mobilization in the postoperative care of ankle fractures: a systematic review and meta-analysis of randomized controlled trials and cohort studies. PLoS One. 2015;10(2):e0118320.", pmid: "25695796", doi: "10.1371/journal.pone.0118320", type: "meta-analysis", year: 2015 },
    { id: "r14", citation: "Beckenkamp PR, Lin CC, Macaskill P, et al. Diagnostic accuracy of the Ottawa Ankle and Midfoot Rules: a systematic review with meta-analysis. Br J Sports Med. 2017;51(6):504-10.", pmid: "27884861", doi: "10.1136/bjsports-2016-096858", type: "meta-analysis", year: 2017 },
    { id: "r15", citation: "Paredes-Vázquez R, Sesma-Villalpando RA, Herrera-Tenorio G, et al. CT scan evaluation of the syndesmotic diastasis in AO/OTA B and C ankle fractures. Acta Ortop Mex. 2011;25(1):32-8.", pmid: "21548256", type: "cross-sectional", year: 2011 },
    { id: "r16", citation: "Slobogean GP, Marra CA, Sadatsafavi M, et al. Is surgical fixation for stress-positive unstable ankle fractures cost effective? Results of a multicenter randomized control trial. J Orthop Trauma. 2012;26(11):652-8.", pmid: "22473067", doi: "10.1097/BOT.0b013e31824aec42", type: "other", year: 2012 },
    { id: "r17", citation: "van den Bekerom MP, Kloen P, Luitse JS, et al. Complications of distal tibiofibular syndesmotic screw stabilization: analysis of 236 patients. J Foot Ankle Surg. 2013;52(4):456-9.", pmid: "23632070", doi: "10.1053/j.jfas.2013.03.025", type: "cohort", year: 2013 },
    { id: "r18", citation: "Al-Hourani K, Stoddart M, Chesser TJS. Syndesmotic fixation in unstable ankle fractures: does early post-operative weight bearing affect radiographic outcomes? Injury. 2019;50(3):790-5.", pmid: "30826089", doi: "10.1016/j.injury.2019.02.014", type: "cohort", year: 2019 },
    { id: "r19", citation: "Lin CW, Donkers NA, Refshauge KM, et al. Rehabilitation for ankle fractures in adults. Cochrane Database Syst Rev. 2012;11:CD005595.", pmid: "23152232", doi: "10.1002/14651858.CD005595.pub3", type: "systematic-review", year: 2012 },
    { id: "r20", citation: "Keene DJ, Lamb SE, Mistry D, et al. Three-year follow-up of a trial of close contact casting vs surgery for initial treatment of unstable ankle fractures in older adults. JAMA. 2018;319(12):1274-6.", pmid: "29584832", doi: "10.1001/jama.2018.0811", type: "rct", year: 2018 }
  ],

  animation: {
    title: "How an ankle fracture happens",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6.5, view: "anterior", environment: "pitch",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "cut-plant", root: { x: -40 } },
          { t: 1.2, pose: "pivot", root: { x: -20 } },
          { t: 2.2, pose: "ankle-inversion", joints: { ankleR: 30 }, root: { x: -10 }, ease: "in" },
          { t: 3.0, pose: "ankle-inversion", joints: { ankleR: 48, trunk: -16 }, root: { x: -6 } },
          { t: 4.4, pose: "squat", joints: { ankleR: 30 }, root: { x: 0 } },
          { t: 5.6, pose: "fall-sideways", root: { x: 8 } }
        ],
        forces: [
          { t: [1.4, 3.4], at: "footR", dir: "up", label: "Foot fixed on the ground", size: "m" },
          { t: [2.0, 3.6], at: "ankleR", dir: "medial", label: "Body rotates over the planted foot", size: "l" }
        ],
        highlights: [{ t: [2.4, 6.5], at: "ankleR" }],
        impacts: [{ t: 3.0, at: "ankleR" }],
        slowmo: [{ t: [2.0, 3.6], rate: 0.3 }],
        captions: [
          { t: 0, text: "A footballer plants the right foot to turn." },
          { t: 1.2, text: "The foot stays fixed while the body keeps turning over it." },
          { t: 2.2, text: "The foot rolls outward and the talus rotates in the ankle mortise." },
          { t: 3.0, text: "The rotation is more than the ligaments and bones can take." },
          { t: 4.4, text: "There is a crack, and the ankle gives way." },
          { t: 5.6, text: "The player falls and cannot bear weight." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "ankleR",
        captions: [{ t: 0, text: "Zooming into the right ankle, seen from the front." }]
      },
      {
        type: "closeup", label: "Inside the ankle", duration: 10, scene: "ankle-anterior",
        actions: [
          { t: 0, do: "highlight", target: "fibula" },
          { t: 0.3, do: "label", target: "fibula", text: "Fibula (lateral malleolus)" },
          { t: 1.0, do: "arrow", at: "lateralMalleolus", dir: "lateral", label: "Talus rotates and pushes the fibula", size: "l" },
          { t: 1.6, do: "fracture", target: "fibula", pattern: "oblique", at: "syndesmosisLevel", displaced: false },
          { t: 1.7, do: "impact", at: "syndesmosisLevel" },
          { t: 1.8, do: "label", target: "fibula", text: "Weber B fibular fracture at the syndesmosis" },
          { t: 3.0, do: "unhighlight", target: "fibula" },
          { t: 3.2, do: "highlight", target: "deltoidLigament" },
          { t: 3.4, do: "stretch", target: "deltoidLigament", amount: 0.4, dur: 1.0 },
          { t: 4.4, do: "tear", target: "deltoidLigament", grade: 3, at: 0.5 },
          { t: 4.6, do: "label", target: "deltoidLigament", text: "Deltoid ligament tear: medial side fails" },
          { t: 5.6, do: "move", target: "talus", dir: "lateral", amount: 0.25, dur: 1.2 },
          { t: 5.9, do: "label", target: "jointSpace", text: "Talus shifts: medial clear space widens" },
          { t: 6.8, do: "fracture", target: "fibula", pattern: "oblique", at: "syndesmosisLevel", displaced: true },
          { t: 7.0, do: "bleed", target: "jointSpace" },
          { t: 7.6, do: "pain", at: "lateralMalleolus" },
          { t: 8.2, do: "camera", at: "medialClearSpace", zoom: 1.6, dur: 1 },
          { t: 9.4, do: "camera", zoom: 1, dur: 0.6 }
        ],
        captions: [
          { t: 0, text: "The lateral malleolus is the end of the fibula and forms the outer wall of the ankle mortise." },
          { t: 1.0, text: "External rotation drives the talus against the fibula." },
          { t: 1.6, text: "The fibula breaks obliquely at the level of the syndesmosis. This is a Weber B fracture." },
          { t: 3.2, text: "Stability depends on the medial side. If the deltoid ligament tears, the talus can shift." },
          { t: 5.6, text: "The talus moves laterally and the medial clear space widens. The fracture is unstable." },
          { t: 7.0, text: "Bleeding fills the joint and the ankle swells quickly." },
          { t: 8.2, text: "A widened medial clear space on a weight-bearing or stress film is the key sign of instability." }
        ]
      },
      {
        type: "micro", label: "Bone healing", duration: 10, tissue: "bone-fracture",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.0, stage: "fracture" }, { t: 2.2, stage: "haematoma" }, { t: 3.6, stage: "inflammation" },
          { t: 5.0, stage: "soft-callus" }, { t: 6.6, stage: "hard-callus" }, { t: 8.2, stage: "remodelling" }
        ],
        timeLabels: [{ t: 2.2, text: "Hours" }, { t: 3.6, text: "Days" }, { t: 5.0, text: "1–3 weeks" }, { t: 6.6, text: "3–12 weeks" }, { t: 8.2, text: "Months to years" }],
        captions: [
          { t: 0, text: "Healthy cortical bone: organised lamellae with osteocytes and a good blood supply." },
          { t: 1.0, text: "The fracture breaks the bone and tears local vessels and periosteum." },
          { t: 2.2, text: "A haematoma forms between the fragments and provides the first scaffold." },
          { t: 3.6, text: "Inflammation: cells clear debris and release growth factors that start repair." },
          { t: 5.0, text: "Soft callus: cartilage-rich tissue bridges the gap and gives early stability." },
          { t: 6.6, text: "Hard callus: woven bone replaces the soft callus and the fracture becomes stable." },
          { t: 8.2, text: "Remodelling: bone is slowly reshaped along the lines of load over months to years." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL9" }
};
