export default {
  id: "fifth-metatarsal-fracture",
  name: "Fifth metatarsal fracture (avulsion & Jones)",
  shortName: "Fifth metatarsal fracture",
  aka: ["Jones fracture", "fifth metatarsal base fracture", "5th metatarsal fracture", "proximal fifth metatarsal fracture", "tuberosity avulsion fracture", "pseudo-Jones fracture", "zone 1 fifth metatarsal fracture", "zone 2 fifth metatarsal fracture"],
  region: "foot",
  tissues: ["bone"],
  onset: "acute-or-gradual",
  mechanismType: ["traction", "overuse", "non-contact"],
  populations: ["adults after ankle inversion injuries", "athletes in football, basketball and soccer", "elite and professional athletes (Jones fractures)", "young players in their first seasons of professional sport"],
  sports: ["soccer", "basketball", "american football", "australian football", "rugby", "netball", "dance", "running"],
  urgency: "urgent",
  summary: "A fracture at the base of the fifth metatarsal. Zone 1 tuberosity avulsions usually heal with functional care; zone 2 Jones fractures risk delayed union and refracture, and athletes are often offered screw fixation.",
  keyFacts: [
    { label: "Typical recovery", value: "Zone 1 avulsion: functional treatment, scores comparable by 6 weeks. Jones fracture: mean union 8.2 weeks with screw fixation versus 13.7 weeks non-operatively" },
    { label: "Return to sport", value: "Athletes after Jones surgery: mean 9.6 weeks (98.4% returned overall); non-operative: mean 13.1 weeks" },
    { label: "Key test", value: "Focal bony tenderness at the fifth metatarsal base after an inversion injury; Ottawa foot rules guide radiographs" },
    { label: "Imaging", value: "Foot radiographs first. In athletes with a Jones fracture, expert consensus supports MRI for nondisplaced fractures and CT for comminuted or displaced fractures" },
    { label: "Classification", value: "Lawrence and Botte zones 1–3 (poor reliability); a 2026 two-part scheme (avulsion versus indirect) had interobserver κ = 0.92" },
    { label: "Incidence", value: "The fifth metatarsal is involved in 45–70% of metatarsal fractures; 42% of adult metatarsal fractures in one radiograph series" }
  ],
  overview: "Fractures of the base of the fifth metatarsal are among the most common forefoot injuries, and they are particularly important in athletes [r1]. Lawrence and Botte described three distinct types: the tuberosity avulsion fracture, the Jones fracture at the metaphyseal–diaphyseal junction, and the proximal diaphyseal stress fracture. Confusing them obscures real differences in prognosis and treatment [r2]. The groups are usually described as zone 1, zone 2 and zone 3 [r3].\n\nA tuberosity (zone 1) avulsion typically follows an inversion injury and has an excellent healing potential, so it is treated with functional immobilisation and early mobilisation [r3,r4]. A zone 2 Jones fracture lies in a watershed region with a retrograde blood supply, so it carries a higher risk of delayed union, nonunion and refracture [r3,r5]. In a randomised trial of acute Jones fractures, 44% of casted fractures failed, compared with 5% after early screw fixation [r6]. A 2025 consensus statement and systematic review in elite athletes found that return to sport was shorter after surgery, whatever the cause of the fracture [r7]. Most evidence is retrospective, so the choice should be shared with the athlete.",

  epidemiology: {
    text: "Metatarsal fractures account for roughly 5–6% of fractures seen in the outpatient setting, and 45–70% of them involve the fifth metatarsal [r5]. In a radiograph review of 1949 adult metatarsal fractures, the fifth metatarsal was the most common site (42.45%), 58.37% of fractures were in the proximal metaphysis, and the 31–50-year age group made up 45.26% of patients [r8]. Among 663 patients with a fifth metatarsal fracture seen through a UK emergency department pathway, 37.5% were zone 1 (type 1), 17% were Jones (type 2) fractures and 42% were type 3 or distal fractures [r4]. In 25 National Football League players who had Jones fracture fixation, 76% had surgery during their first three seasons, 48% were diagnosed before or during their rookie season, and the injury was more likely in wide receivers, linebackers and tight ends [r9].",
    riskFactors: {
      intrinsic: [
        "Young players in the first seasons of professional sport (NFL series, 76% had surgery in their first three seasons) [r9]",
        "Anatomy of the attachments: the peroneus brevis and the lateral band of the plantar aponeurosis attach at or just proximal to the zone where Jones fractures occur, which is proposed to expose the bone to traction stress (descriptive cadaver study, hypothesis only) [r10]",
        "A watershed blood supply at the metaphyseal–diaphyseal junction, which impairs healing rather than causing the fracture [r3,r5]",
        "A high-arched, varus-aligned foot that loads the lateral border, and low energy availability or low bone density (clinical observation; not tested in the sources cited)"
      ],
      extrinsic: [
        "Sports with cutting, jumping and rapid push-off: American football, basketball and soccer [r1,r9]",
        "Inversion injuries and landing on the lateral border of the plantarflexed foot (tuberosity avulsion) [r11]",
        "Sudden increases in training volume or intensity, and hard surfaces (stress-type fractures; modifiable; clinical observation)",
        "Early return to sport before union (refracture risk) [r12,r9]"
      ]
    }
  },

  mechanism: {
    summary: "There are two main mechanisms. A zone 1 tuberosity avulsion typically follows a sudden inversion injury, with the foot plantarflexed and loaded on its lateral border, when the peroneus brevis and the lateral band of the plantar aponeurosis pull the tuberosity off the base [r11,r10]. A zone 2 Jones fracture is an indirect, bending-type injury at the metaphyseal–diaphyseal junction, which can be a single acute overload of the lateral forefoot or a stress fracture from repetitive loading [r13,r10]. Which structure avulses the tuberosity is debated: a cadaver study pointed to the lateral cord of the plantar aponeurosis rather than the peroneus brevis [r11], and a recent classification scheme defines avulsion by the peroneus brevis footprint, which averaged 15 mm in cadavers [r13].",
    sequence: [
      "The athlete lands, cuts or steps on uneven ground with the foot plantarflexed and loaded on its lateral border.",
      "The foot is forced into inversion and the peroneus brevis contracts hard to resist it.",
      "The peroneus brevis and the lateral band of the plantar aponeurosis attach at the base and tuberosity of the fifth metatarsal and tension it [r10,r11].",
      "The tensile load exceeds the strength of the cancellous base. A zone 1 tuberosity fragment is avulsed [r11,r13].",
      "In the Jones mechanism, load on the lateral forefoot (cutting, push-off) creates a bending moment at the metaphyseal–diaphyseal junction instead [r13,r10].",
      "In the stress variant, repeated loads cause microdamage faster than a relatively poorly vascularised junction can repair it, so a stress fracture develops before the complete fracture [r3,r5].",
      "The athlete has lateral midfoot pain and swelling, and finds it hard to push off or bear weight; a Jones fracture heals slowly."
    ],
    variants: [
      { name: "Zone 1 tuberosity avulsion", description: "An avulsion of the tuberosity (the base). It is usually extra-articular, has an excellent healing potential and is treated conservatively [r2,r3]." },
      { name: "Zone 2 acute Jones fracture", description: "A fracture at the metaphyseal–diaphyseal junction that may extend into the fourth–fifth intermetatarsal joint. It lies in a watershed region, and it has a higher risk of delayed union and nonunion [r3,r5]." },
      { name: "Stress-type Jones fracture and zone 3 diaphyseal stress fracture", description: "A fracture from repetitive loading, often with weeks of lateral foot pain beforehand. In the elite athlete consensus, stress fractures were usually treated with open reduction and internal fixation, and non-operative treatment had the highest failure rate (8.2%) [r7]." },
      { name: "Refracture or nonunion", description: "Can follow either operative or non-operative care. Contributors named by one group were hardware of insufficient strength, aggressive rehabilitation and biological insufficiency at the fracture site [r12]." }
    ]
  },

  anatomy: {
    text: "The fifth metatarsal forms the lateral border of the foot. Its base projects laterally as a tuberosity and articulates with the cuboid and the base of the fourth metatarsal. The peroneus brevis inserts on the tuberosity and the lateral band of the plantar aponeurosis attaches close by. In a study of 102 cadaver legs, the peroneus brevis attached proximal to the zone 2 border in 40.2% of feet, at the border in 54.9% and across it in 4.9%; the lateral band attached proximal to the border in 26.5% and at the border in 73.5%; the long plantar ligament did not attach to the fifth metatarsal [r10]. The metaphyseal–diaphyseal junction (zone 2) is a watershed region with a retrograde vascular supply, and the vascular anatomy and soft tissue attachments explain the higher risk of delayed union and nonunion there [r3,r5]. Lawrence and Botte classified fractures by location: zone 1 (tuberosity avulsion), zone 2 (metaphyseal–diaphyseal junction, extending into the 4–5 intermetatarsal joint) and zone 3 (proximal diaphysis) [r3].",
    structures: [
      { name: "Fifth metatarsal base and tuberosity (zone 1)", role: "Cancellous bone at the lateral border; the attachment site for the peroneus brevis and the lateral plantar aponeurosis [r10]" },
      { name: "Metaphyseal–diaphyseal junction (zone 2, Jones zone)", role: "Watershed zone with a retrograde blood supply and high bending load; the site of poor healing [r3,r5]" },
      { name: "Proximal diaphysis (zone 3)", role: "Site of proximal diaphyseal stress fractures [r3]" },
      { name: "Peroneus brevis tendon", role: "Everts and abducts the foot and resists inversion; inserts on the tuberosity [r10]" },
      { name: "Lateral band of the plantar aponeurosis", role: "Tension band running to the tuberosity; a candidate avulsing structure [r11,r10]" },
      { name: "Fourth–fifth intermetatarsal and cuboid joints", role: "Articular surfaces at the base; intra-articular zone 2 extension affects management [r3]" },
      { name: "Sural nerve", role: "Runs close to the base and is at risk during screw insertion [r5]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "A zone 1 avulsion fails through the cancellous base where the peroneus brevis and lateral plantar aponeurosis attach. This region has a good blood supply, so healing is usually reliable. In a trial of 37 patients with tuberosity fractures, outcomes were comparable by 12 weeks, although two patients in each group had no clear radiographic union at 12 weeks and one needed surgery [r14].\n\nA zone 2 Jones fracture fails at the metaphyseal–diaphyseal junction, where the nutrient and metaphyseal supplies meet in a watershed region with retrograde flow. This is why union is slower and nonunion is more frequent [r3,r5]. In a pooled analysis, union was 97.3% with operative treatment and 71.4% with non-operative treatment, and the overall refracture rate was 10.2% [r1]. Stress-type injuries add a second problem: microdamage accumulates faster than remodelling can repair it, so the athlete may have weeks of pain before a complete fracture. Even after union, refracture can occur if hardware is too small, rehabilitation is too aggressive or the fracture site is biologically insufficient [r12].",
    structures: [
      { name: "Fifth metatarsal base (zone 1)", effect: "Tuberosity fragment avulsed by the peroneus brevis and lateral plantar aponeurosis; usually extra-articular and stable [r11,r13]" },
      { name: "Metaphyseal–diaphyseal junction (zone 2)", effect: "Transverse or short oblique fracture through a watershed region; may extend into the fourth–fifth intermetatarsal joint; high risk of delayed union and nonunion [r3,r5]" },
      { name: "Peroneus brevis and lateral plantar aponeurosis", effect: "Remain attached to the tuberosity fragment in zone 1; their pull can displace it [r10,r13]" },
      { name: "Surrounding soft tissue", effect: "Swelling and bruising along the lateral foot, sometimes with an associated lateral ankle sprain" }
    ],
    muscles: [
      { name: "Peroneus brevis and longus", effect: "Pain inhibition and disuse weakness in the immobilisation phase reduce eversion strength and lateral stability. Restore this early." },
      { name: "Gastrocnemius–soleus and intrinsic foot muscles", effect: "Disuse atrophy during protected weight-bearing; calf capacity is rebuilt before running and cutting." },
      { name: "Hip and trunk muscles", effect: "Deconditioning during the unloaded phase affects landing and cutting mechanics; maintain strength with cross-training." }
    ],
    cellular: [
      { phase: "Haematoma and inflammation", timing: "Days 0–14 (typical bone healing)", description: "A haematoma forms at the fracture, and inflammatory cells and signals recruit repair cells." },
      { phase: "Soft callus", timing: "Weeks 2–6 (typical)", description: "Cartilaginous callus bridges the gap. In zone 1 this proceeds reliably; in zone 2 the watershed blood supply can slow or stall it [r3,r5]." },
      { phase: "Hard callus", timing: "Weeks 6–12 (typical)", description: "Woven bone replaces the soft callus. After screw fixation, mean union was 8.2 weeks, and non-operative mean union was 13.7 weeks in the pooled data [r1]." },
      { phase: "Remodelling", timing: "Months", description: "Lamellar bone replaces woven bone along the lines of load. The risk of refracture falls as the bone matures and loading is built gradually [r12]." }
    ],
    systems: [
      { system: "Vascular and bone biology", effect: "Retrograde blood supply in the metaphyseal–diaphyseal junction (the watershed) limits repair capacity [r3,r5]." },
      { system: "Musculoskeletal chain", effect: "Lateral foot loading, hindfoot and foot alignment and footwear influence the load that reaches the lateral column (clinical observation; not tested in the sources reviewed)." },
      { system: "Bone health and energy availability", effect: "Stress-type fractures, repeated fractures or low bone density should prompt a screen for low energy availability and bone health (see the metatarsal stress fracture page)." },
      { system: "Nervous system and pain", effect: "Acute pain and guarding alter gait and loading for weeks. The sural nerve lies close to the base and can be injured at surgery [r5]." },
      { system: "Psychological and sport", effect: "Elite athletes often face time pressure from teams, which is a driver of early return and refracture risk [r12,r9]." }
    ]
  },

  grading: {
    system: "Lawrence and Botte zones (1–3), with a 2026 two-part avulsion versus indirect scheme",
    grades: [
      { grade: "Zone 1: tuberosity avulsion", description: "Avulsion of the tuberosity at the base, usually extra-articular, at the insertion of the peroneus brevis and lateral plantar aponeurosis [r3].", prognosis: "Excellent healing; functional treatment [r3,r14]" },
      { grade: "Zone 2: Jones fracture", description: "Fracture at the metaphyseal–diaphyseal junction, extending into the fourth–fifth intermetatarsal joint; acute or stress-type [r3].", prognosis: "Higher risk of delayed union, nonunion and refracture; early screw fixation is favoured in athletes [r3,r1]" },
      { grade: "Zone 3: proximal diaphyseal fracture", description: "Proximal diaphyseal fracture, usually a stress fracture [r3,r2].", prognosis: "Slow healing; early fixation advised in athletes [r3]" },
      { grade: "Two-part scheme: avulsion versus indirect", description: "Avulsion fractures lie within the peroneus brevis footprint (about 15 mm from the tuberosity in cadavers). Indirect fractures are distal to it and result from a bending moment. The scheme had interobserver κ = 0.92 and intraobserver κ = 0.85–1.00, while the Lawrence and Botte scheme has poor reliability [r13].", prognosis: "In a small series (23 followed patients), all four indirect fractures treated in closed fashion went to nonunion, and seven of eight avulsions fixed internally healed primarily; groups were too small to test [r13]" }
    ]
  },

  timeframes: {
    summary: "Zone 1 fractures usually heal within about 6–12 weeks with functional treatment. Zone 2 fractures take longer and are less certain, depending on treatment: pooled union was 8.2 weeks after screw fixation and 13.7 weeks non-operatively [r1].",
    healing: [
      { phase: "Haematoma and inflammation", startDay: 0, endDay: 14, description: "Haematoma and early repair signals. Pain, swelling and protected loading." },
      { phase: "Soft callus", startDay: 14, endDay: 42, description: "Cartilaginous bridge forms. In a zone 2 fracture the watershed supply can slow this [r3,r5]." },
      { phase: "Hard callus and union", startDay: 42, endDay: 98, description: "Woven bone bridges the fracture. Mean time to union was about 8 weeks (screw) or 14 weeks (non-operative) for Jones fractures [r1]." },
      { phase: "Remodelling and loading", startDay: 84, endDay: 365, description: "Bone matures along the lines of load. Return to sport occurs on this timeline, with refracture risk if loading is rushed [r12]." }
    ],
    milestones: [
      { label: "Zone 1 scores comparable between treatments", day: 42, note: "Plaster gave a better foot score at 2 weeks, but scores were comparable by 6 and 12 weeks [r14]" },
      { label: "Union after screw fixation (Jones)", day: 57, note: "Mean 8.2 weeks (95% CI 7.5–9.0) in a pooled analysis [r1]" },
      { label: "Return to play after surgery (athletes)", day: 67, note: "Mean 9.6 weeks in a pooled analysis of Jones fractures [r1]; mean 11.15 weeks in elite athletes [r15]" },
      { label: "Return to play, non-operative (athletes)", day: 92, note: "Mean 13.1 weeks with wide confidence intervals [r1]" },
      { label: "Union non-operatively (Jones)", day: 96, note: "Mean 13.7 weeks in pooled data; union rate 71.4% [r1]" }
    ],
    returnToSport: "Criteria-based. After Jones fracture fixation athletes returned at a mean of 9.6 weeks, and 98.4% returned overall [r1]. Non-operative return took a mean of 13.1 weeks, and only 71.6% returned [r1]. In the elite-athlete consensus, mean return was 13.3 weeks for stress fractures and 11.6 weeks for traumatic fractures [r7]. Zone 1 injuries typically return within about 6–12 weeks as symptoms allow (clinical convention). Do not rush: early or aggressive return is linked to refracture [r12,r9]."
  },

  clinicalPresentation: {
    symptoms: [
      "Lateral foot pain and swelling after an inversion or landing injury, often with a 'pop' (zone 1) or sudden pain during a cut or push-off (acute Jones)",
      "A prodrome of weeks of lateral foot or midfoot ache with sport, then a sudden worsening (stress-type Jones fracture)",
      "Difficulty bearing weight or pushing off, with a limp that favours the medial border",
      "Pain with inversion and with resisted eversion",
      "Bruising along the lateral border of the foot"
    ],
    signs: [
      "Point tenderness over the base of the fifth metatarsal (zone 1) or just distal to it at the metaphyseal–diaphyseal junction (zone 2)",
      "Swelling, ecchymosis and warmth along the lateral border",
      "Pain on passive inversion and plantarflexion, and on resisted eversion",
      "Antalgic gait with reduced push-off",
      "Associated lateral ankle sprain signs in some patients"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism: inversion, landing, cut, direct blow or an insidious onset with preceding lateral foot pain",
      "Prodromal lateral foot pain in the weeks before the injury (suggests a stress fracture) [r7]",
      "Sport, level and position, season timing and the athlete's goals and preference regarding surgery [r7]",
      "Previous fifth metatarsal fracture, nonunion or refracture [r12]",
      "Training load changes, footwear and surface; menstrual history, diet, bone health and energy availability (stress-type fractures)",
      "Ability to weight-bear and the Ottawa foot rule features",
      "Diabetes, neuropathy, smoking and medications that affect bone healing"
    ],
    observation: ["Swelling and bruising along the lateral foot", "Gait: protective gait, reduced push-off", "Foot posture: cavovarus alignment and heel position", "Skin integrity and any tenting over the base"],
    palpation: [
      "Base and tuberosity of the fifth metatarsal (zone 1), and the metaphyseal–diaphyseal junction about 1.5–2 cm distal to the tuberosity (zone 2)",
      "Peroneus brevis tendon behind the lateral malleolus (differential: peroneal tendinopathy)",
      "Cuboid, the fourth metatarsal base, the lateral malleolus and the anterior talofibular ligament for associated injuries"
    ],
    rangeOfMotion: ["Ankle dorsiflexion and plantarflexion (protected range early)", "Subtalar inversion and eversion: painful and limited early", "Great toe and lesser toe motion"],
    strength: ["Resisted eversion (peroneus brevis and longus): pain and weakness are expected early", "Calf (single-leg heel raise) and intrinsic foot strength, measured only when the fracture is healed", "Hip abductor and extensor strength"],
    neuro: ["Sensation over the lateral foot and the sural nerve distribution (important after surgery) [r5]", "Distal pulses and capillary refill"],
    functional: ["Gait with a boot or shoe: weight-bearing tolerance", "Single-leg stance and balance", "Single-leg heel raise, then hop and landing tests only once union is confirmed", "Sport-specific tasks: cutting, sprinting and jumping (late)"],
    specialTests: [
      { name: "Palpation of the base and the Jones zone", purpose: "Localise bony tenderness to zone 1 or zone 2", procedure: "Press over the tuberosity, then along the lateral border of the metatarsal about 1.5–2 cm distally. Compare with the other foot.", positive: "Focal bony tenderness. No accuracy figures were identified in the sources reviewed.", refs: [] },
      { name: "Resisted eversion and passive inversion", purpose: "Provoke pain through the peroneus brevis attachment", procedure: "With the foot in slight plantarflexion, resist eversion, then passively invert and plantarflex.", positive: "Reproduction of lateral foot pain. A positive test is not specific for fracture.", refs: [] },
      { name: "Ottawa foot rules", purpose: "Decide whether foot radiographs are needed after an acute midfoot injury", procedure: "Check for bony tenderness at the base of the fifth metatarsal or the navicular, and inability to take four steps both immediately and in the clinic.", positive: "Either tenderness site or inability to take four steps: arrange foot radiographs. No accuracy figures were quoted in the sources reviewed.", refs: [] },
      { name: "Hop test (late stage only)", purpose: "Check readiness to load the lateral foot at the end of rehabilitation", procedure: "Single-leg hop in place and forward, once union and full pain-free weight-bearing are confirmed.", positive: "Pain at the base or a failure to match the other side. No accuracy data were identified.", refs: [] }
    ],
    clinicalRules: [
      { name: "Ottawa foot rules", description: "A radiograph is needed if there is pain in the midfoot and bone tenderness at the base of the fifth metatarsal or the navicular, or if the patient cannot take four steps. They guide imaging, not treatment." },
      { name: "Zone classification (Lawrence and Botte)", description: "Classify on radiographs: zone 1 tuberosity avulsion, zone 2 metaphyseal–diaphyseal junction, zone 3 proximal diaphysis [r3]. Reliability is poor, so confirm the pattern with the surgeon [r13]." }
    ],
    outcomeMeasures: [
      { name: "Foot and Ankle Ability Measure (FAAM), including the sport subscale", use: "Function and return-to-sport readiness" },
      { name: "AOFAS midfoot score", use: "Clinician-rated midfoot outcome used in a comparison of cast and functional bandage [r16]" },
      { name: "Foot score and pain (0–10)", use: "Pain and dysfunction in the trial of plaster versus tubular support [r14]" },
      { name: "Radiographic and clinical union and time to return to play", use: "The main outcomes in the Jones fracture trials and meta-analyses [r6,r1]" }
    ],
    imaging: [
      { modality: "Plain radiographs (anteroposterior, lateral and oblique foot)", indication: "Whenever the Ottawa foot rules are positive or a fracture is suspected", findings: "Fracture zone, displacement, articular involvement, sclerosis and widening (delayed union). Accessory bones such as os vesalianum pedis (prevalence 0.15%) can look like a fracture [r17]." },
      { modality: "MRI", indication: "Nondisplaced Jones fracture or a suspected stress fracture with normal radiographs; unanimous expert consensus in elite athletes [r7]", findings: "Marrow oedema, a fracture line and stress reaction at the metaphyseal–diaphyseal junction" },
      { modality: "CT", indication: "Comminuted or displaced fractures, and planning of fixation; unanimous expert consensus in elite athletes [r7]", findings: "Fracture pattern, comminution and joint involvement" }
    ]
  },

  differentials: [
    { name: "Lateral ankle sprain", id: "lateral-ankle-sprain", distinguishing: "Tenderness over the ATFL and lateral ligaments rather than the metatarsal base. Fracture and sprain can coexist, so apply the Ottawa rules." },
    { name: "Peroneal tendinopathy", id: "peroneal-tendinopathy", distinguishing: "Pain behind the lateral malleolus and along the tendons with resisted eversion, without bony tenderness at the base." },
    { name: "Metatarsal stress fracture", id: "metatarsal-stress-fracture", distinguishing: "Gradual forefoot pain at the second or third metatarsal neck, rather than the lateral border. Image to confirm." },
    { name: "Lisfranc (tarsometatarsal) injury", id: "lisfranc-injury", distinguishing: "Midfoot pain and swelling, plantar bruising and pain when the midfoot is twisted, after a twisting or axial load injury." },
    { name: "Os vesalianum pedis or other accessory ossicle", distinguishing: "A well-corticated ossicle at the base, found in 0.15% of one Turkish radiograph series; usually asymptomatic and can be mistaken for a fracture [r17]." },
    { name: "Normal apophysis of the fifth metatarsal base (adolescents)", distinguishing: "A secondary ossification centre that runs parallel to the shaft with smooth margins; a fracture runs across it. Compare with the other foot." },
    { name: "Cuboid or navicular stress fracture", id: "navicular-stress-fracture", distinguishing: "Dorsal or lateral midfoot pain with tenderness over the bone; MRI distinguishes." },
    { name: "Distal fifth metatarsal shaft fracture", distinguishing: "Tenderness distal to the base after an inversion or twisting injury; usually spiral and managed differently from zone 1–3 fractures." }
  ],
  redFlags: [
    "Open fracture, skin tenting over the base, or a displaced fracture with neurovascular compromise: refer to emergency immediately.",
    "Severe, escalating pain, a tense foot or pain out of proportion to the injury: suspect compartment syndrome and arrange emergency review.",
    "Athlete with a prodrome of lateral foot pain and a positive radiograph or MRI: do not treat as a simple sprain. Refer early for orthopaedic review because of the risk of delayed union, nonunion and refracture [r7,r3].",
    "Persistent pain or tenderness at the fracture site beyond about 8–12 weeks, or widening of the fracture line and sclerosis on radiographs: suspect delayed union or nonunion and refer to orthopaedics [r1].",
    "After surgery: fever, wound redness or discharge, calf pain or breathlessness (infection, DVT or PE) or numbness over the lateral foot (sural nerve): arrange urgent review [r5].",
    "Diabetes, peripheral neuropathy or poor circulation with a foot fracture: refer for specialist review because of the risk of poor healing and Charcot change."
  ],

  management: {
    principles: "Classify the fracture (zone, displacement, acute versus stress-type) and the patient's sport, level and goals before choosing a pathway. Zone 1 fractures are treated conservatively with functional immobilisation and early mobilisation, with an excellent outcome [r3,r4]. Zone 2 and 3 fractures can be treated conservatively when acute, but early intramedullary screw fixation is advised in athletic individuals because of delayed union and prolonged recovery [r3]. In the randomised trial, screw fixation shortened union (7.5 versus 14.5 weeks) and return to sport (8.0 versus 15.0 weeks) [r6]. A meta-analysis recommended fixation for all athletes with Jones fractures [r1]. However, most data are retrospective, and an emergency-department pathway that gave Jones fractures a boot and full weight-bearing found only 7% had asymptomatic nonunion [r4]. Make the decision with the athlete, and review the treatment of recreational patients individually.",
    medical: [
      { name: "Intramedullary screw fixation (acute Jones fracture in athletes)", description: "A solid screw across the zone 2 fracture, placed high and inside the medullary canal. In an RCT of 37 patients, 44% of casted fractures failed (5 nonunions, 1 delayed union, 2 refractures) versus 1 of 19 after screw fixation, with median union and return to sport of 7.5 and 8.0 weeks versus 14.5 and 15.0 weeks in casts [r6]. In a meta-analysis of 22 studies (646 Jones fractures), return to play was 98.8% with screw fixation and 71.6% non-operatively, and refracture overall was 10.2% [r1]. In elite athletes the complication rate was 22.5% and refracture was 8.6% [r15]. Evidence beyond the single RCT is mostly retrospective.", evidence: "moderate", recommendation: "recommended", refs: ["r6", "r1", "r15", "r7", "r3"] },
      { name: "Revision fixation with bone grafting (delayed union, nonunion or refracture)", description: "In 21 elite athletes with refracture or nonunion, revision intramedullary screw fixation with autologous bone graft or bone-marrow aspirate and demineralised bone matrix led to healing in all and a return to prior level at a mean of 12.3 weeks; one refracture occurred. The authors recommend a large solid screw (5.5 mm or larger) [r12]. The elite-athlete consensus reached unanimous agreement on adjunctive bone grafting without specifying indications in the abstract [r7].", evidence: "limited", recommendation: "consider", refs: ["r12", "r7"] },
      { name: "Functional (non-operative) treatment for zone 1 avulsions", description: "A supportive boot, stiff-soled shoe or elastic bandage with weight-bearing as tolerated. Plaster gave a better foot score at 2 weeks than a tubular support, but scores were comparable at 6 and 12 weeks [r14]. A soft dressing allowed earlier return to activity than rigid casting [r18]. Outcomes were similar with a cast or a functional bandage for minimally displaced fractures in 154 patients [r16].", evidence: "limited", recommendation: "recommended", refs: ["r14", "r18", "r16", "r3"] },
      { name: "Non-weight-bearing cast (Jones fracture, non-operative)", description: "For patients who decline surgery or are lower-demand. Union was achieved in 56–100% in reviewed series but can require prolonged casting, and 44% failed in the RCT [r18,r6]. Pooled union was 71.4% [r1].", evidence: "moderate", recommendation: "consider", refs: ["r18", "r6", "r1"] },
      { name: "Fixation or excision of displaced zone 1 avulsions", description: "Considered for displaced fragments, intra-articular involvement or symptomatic nonunion at the surgeon's judgement. In a small series, seven of eight avulsions fixed internally healed primarily and one displaced avulsion was excised [r13].", evidence: "very-limited", recommendation: "consider", refs: ["r13", "r3"] },
      { name: "Bone stimulators and orthoses as adjuncts in elite athletes", description: "Part of one NFL protocol (noninvasive bone stimulators, custom orthoses and an aggressive rehabilitation program) in which return to play was 100%, with 12% refractured. The contribution of the adjuncts was not isolated [r9].", evidence: "very-limited", recommendation: "consider", refs: ["r9"] },
      { name: "Simple analgesia", description: "Paracetamol and short courses of other analgesia for pain control in the early weeks.", evidence: "expert-opinion", recommendation: "consider", refs: [] }
    ],
    physio: [
      { name: "Education and protected weight-bearing", description: "Explain the zone, expected healing and why load is progressed by criteria. In zone 1, weight-bear as tolerated in a boot or supportive shoe. After Jones fixation follow the surgeon's protocol (one institutional protocol used 2 weeks non-weight-bearing, then protected weight-bearing in a boot, with 25%, 50%, 75% and 100% at weeks 3–6) [r5,r4].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r5", "r4"] },
      { name: "Early range of motion and proximal strengthening", description: "Ankle range of motion, hip, knee and core strength and cardiovascular cross-training during the protected phase. These are started early in the post-operative protocol [r5].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r5"] },
      { name: "Progressive peroneal, calf and foot strengthening", description: "Eversion and calf strengthening and foot-intrinsic control once weight-bearing is allowed, then loaded calf work, balance and hopping as union is confirmed (clinical convention).", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Criteria-based return to running, cutting and sport", description: "Progress on clinical and radiographic union, pain and functional tests, not on weeks alone. Aggressive rehabilitation is among the factors named in refracture, and an NFL series reported 12% refracture despite an accelerated protocol [r12,r9].", evidence: "limited", recommendation: "recommended", refs: ["r12", "r9"] },
      { name: "Footwear and lateral-column offloading orthoses", description: "A stiff-soled shoe early, then a supportive sport shoe, and custom orthoses for the athlete with high lateral loading, as one NFL protocol did [r9]. The independent effect on healing is unknown.", evidence: "expert-opinion", recommendation: "consider", refs: ["r9"] },
      { name: "Prolonged rigid immobilisation of zone 1 avulsions", description: "Rigid casting did not improve outcomes beyond the first weeks and delayed return to activity compared with soft dressings [r14,r18].", evidence: "limited", recommendation: "not-recommended", refs: ["r14", "r18"] },
      { name: "Early return to sport before union", description: "Associated with refracture and nonunion. Wait for clinical and radiographic union and graded loading [r12,r9].", evidence: "limited", recommendation: "not-recommended", refs: ["r12", "r9"] }
    ],
    education: [
      "The type of fracture matters: a tuberosity avulsion usually heals well, but a Jones fracture has a poor blood supply and can be slow to heal.",
      "If you play competitive sport, discuss the surgery option early; surgery gave faster union and return to sport in the trials, but it carries its own risks.",
      "Do not return to sport until your surgeon or physiotherapist confirms healing. Rushing back is a common cause of refracture.",
      "Lateral foot pain during sport that does not settle should be checked early. It can be a stress fracture before it is a complete break.",
      "Keep fit with cycling, swimming and upper-body or core work while the foot is protected.",
      "Persistent pain at the fracture site after 8–12 weeks needs a review for delayed healing."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and follows the pathway (zone 1 functional treatment, Jones fracture with screw fixation, or non-operative Jones fracture). Always follow the surgeon's weight-bearing instructions. Move on when clinical and, where needed, radiographic criteria are met, not when a set number of weeks has passed. The timeframes below are typical. Aggressive rehabilitation has been implicated in refracture [r12], so load gradually. The one published schedule for post-operative loading used 2 weeks non-weight-bearing and then 25%, 50%, 75% and 100% weight-bearing at weeks 3–6 in a boot, with pool or treadmill work at weeks 8–12 [r5]. Dosages are typical clinical ranges, not prescriptions from a single source.",
    stages: [
      {
        name: "Protect & maintain",
        timeframe: "Weeks 0–2 (post-operative or acute Jones); zone 1 may be weight-bearing as tolerated",
        goals: ["Control pain and swelling", "Protect the fracture and any fixation", "Maintain ankle motion and proximal strength", "Maintain cardiovascular fitness"],
        precautions: ["Follow the surgeon's weight-bearing instructions exactly [r5]", "Avoid inversion and resisted eversion loading early", "Monitor wound, DVT and nerve (sural) symptoms after surgery [r5]"],
        exercises: [
          { name: "Ankle pumps and ankle alphabet (pain-free range)", dosage: "2–3 × 20 each direction, several times daily", cues: "Move slowly and avoid forced inversion", figure: { pose: "ex-ankle-alphabet", view: "lateral", props: ["chair"] } },
          { name: "Quadriceps sets", dosage: "10 × 10 s, 3 times daily", cues: "Push the back of the knee down", figure: { pose: "ex-quad-set", view: "lateral", props: ["mat"] } },
          { name: "Straight-leg raise", dosage: "3 × 10, daily", cues: "Lock the knee, lift to the height of the other knee", figure: { pose: "ex-straight-leg-raise", view: "lateral", props: ["mat"] } },
          { name: "Side-lying hip abduction and glute bridge", dosage: "3 × 12, daily", cues: "Keep the pelvis level and the foot relaxed", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Seated upper-body or one-leg cycling cross-training", dosage: "20–30 min, daily", cues: "Keep the injured foot protected" }
        ],
        progressionCriteria: ["Swelling controlled and pain at or below 3/10 at rest", "Permission to start protected weight-bearing from the surgeon", "Full ankle dorsiflexion and plantarflexion within the allowed range"]
      },
      {
        name: "Progressive weight-bearing",
        timeframe: "Weeks 2–6",
        goals: ["Progress weight-bearing in a boot or shoe as allowed", "Restore a normal gait", "Restore ankle motion and early calf and peroneal strength", "Improve balance"],
        precautions: ["Progress weight-bearing by tolerance and the surgeon's schedule (for example 25% to 100% across weeks 3–6) [r5]", "Avoid forced inversion, hopping, running and cutting", "Keep lateral foot pain at or below 3/10 and settled the next day (clinical convention)"],
        exercises: [
          { name: "Weight-shift and graded weight-bearing in a boot", dosage: "5 × 1 min, several times daily, increasing load as allowed", cues: "Roll through the foot, heel to toe" },
          { name: "Double-leg calf raise (when allowed)", dosage: "3 × 10–12, slow", cues: "Even weight over both feet", figure: { pose: "ex-calf-raise", view: "lateral" } },
          { name: "Seated calf raise", dosage: "3 × 15, daily", cues: "Press through the ball of the foot", figure: { pose: "ex-seated-calf-raise", view: "lateral" } },
          { name: "Isometric eversion against a band or wall (pain-free)", dosage: "5 × 10 s, twice daily", cues: "Gentle effort, no pain at the base of the fifth metatarsal" },
          { name: "Single-leg balance (protected, then barefoot)", dosage: "3 × 30 s", cues: "Soft knee and quiet trunk", figure: { pose: "ex-single-leg-balance", view: "anterior" } }
        ],
        progressionCriteria: ["Full weight-bearing without a limp in a shoe or boot", "No tenderness at the fracture site and pain at or below 2/10", "Surgeon or clinician confirms progress, with radiographic healing under way", "Double-leg calf raise × 15 pain-free"]
      },
      {
        name: "Strength & impact",
        timeframe: "Weeks 6–10 (once healing is confirmed)",
        goals: ["Restore calf, peroneal and foot strength", "Restore single-leg control", "Begin low-impact loading and walking or jogging", "Build tolerance of the lateral foot"],
        precautions: ["Confirm union (clinically and radiographically where indicated) before impact", "Progress impact slowly and leave 48 h between sessions", "Stop if pain at the fracture site returns [r12]"],
        exercises: [
          { name: "Single-leg calf raise", dosage: "3 × 8–12, 3 s up and 3 s down, every second day", cues: "Full range with a pause at the top", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Resisted eversion with a band (isotonic)", dosage: "3 × 12–15, 3 times per week", cues: "Slow return and no pain over the base" },
          { name: "Step-up and controlled step-down", dosage: "3 × 8–10 each leg", cues: "Keep the pelvis level, with the knee over the second toe", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Pool or treadmill walking, then jogging", dosage: "20–30 min, 3 times per week, as allowed from about weeks 8–12 [r5]", cues: "Push off evenly through the whole foot" },
          { name: "Single-leg balance with perturbation", dosage: "3 × 30–45 s", cues: "Keep the arch active and the lateral border loaded evenly", figure: { pose: "ex-single-leg-balance", view: "anterior" } }
        ],
        progressionCriteria: ["Clinical and radiographic union confirmed by the surgeon or physician", "Single-leg calf raise × 15 with pain at or below 2/10 and equal height", "Walks 30 min and jogs 10 min with no pain at the fracture site", "Resisted eversion strength within about 90% of the other side (clinical convention)"]
      },
      {
        name: "Return to sport",
        timeframe: "Weeks 8–16+ (criteria-based; athlete mean return 9.6 weeks after fixation [r1])",
        goals: ["Return to running, hopping, cutting and jumping", "Return to team training and then competition", "Hold lateral-column load tolerance as volume increases", "Plan long-term strength and load monitoring"],
        precautions: ["Increase volume and intensity in steps and avoid rushing [r12,r9]", "Check footwear, surface and orthoses", "Do not return to competition while pain persists at the fracture site"],
        exercises: [
          { name: "Single-leg hop in place, forward and lateral", dosage: "3 × 5–8 each leg, building to 3 × 10", cues: "Soft landing, stick for 2 s", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Walk–run program", dosage: "1 min run / 2 min walk for 20 min, 3 times a week, adding running every 1–2 sessions (clinical convention)", cues: "Quiet landings and an even load across the foot", figure: { pose: "run-toe-off", view: "lateral" } },
          { name: "Planned then reactive change of direction", dosage: "2 sessions a week, increasing speed and angle", cues: "Land under control, with the knee over the foot", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Jump landing and rebound drills", dosage: "3 × 5, from low height", cues: "Soft landing with hips and knees bent", figure: { pose: "jump-land", view: "lateral" } },
          { name: "Graded team training", dosage: "Partial then full training over 2–3 weeks", cues: "Share the plan with the coach and monitor pain and swelling" }
        ],
        progressionCriteria: ["Full training for at least 2 weeks with pain at or below 1/10 and no swelling or next-day flare", "Single-leg hop distance and calf-raise capacity at or above 90% of the other side (clinical convention)", "Clinical and radiographic union confirmed", "Athlete, coach and surgeon agree on the return"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated return-to-sport (RTS) criteria were identified for fifth metatarsal fractures; the criteria below reflect clinical convention and the trial designs",
      "Clinical union (no tenderness at the fracture site) and radiographic union confirmed by the treating surgeon or physician [r6,r1]",
      "Pain-free full weight-bearing, running, cutting and jumping at or below 1/10, with no swelling or next-day flare",
      "Calf, peroneal and hop performance about 90% or more of the other side (clinical convention)",
      "Completion of full, unrestricted team training for at least 2 weeks, with graded exposure rather than a sudden return [r12,r9]",
      "Footwear, orthoses and a maintenance strength and load-monitoring plan in place, agreed with the athlete, coach and surgeon"
    ],
    tests: ["Palpation of the fracture site and pain on loading", "Radiographs (and CT where union is uncertain) as directed by the surgeon", "Single-leg heel raise repetitions and height", "Single-leg hop tests (single, triple, side) with pain rating", "Resisted eversion strength by hand-held dynamometer", "Weekly training volume and next-day pain log"]
  },
  prognosis: "Zone 1 avulsions have an excellent prognosis with functional treatment [r3], although in a trial of 37 patients two in each group had no clear union at 12 weeks and one needed surgery [r14]. Jones fractures have worse and more variable outcomes. In a meta-analysis of athletes, return to play was 98.4% overall, 98.8% after screw fixation and 71.6% non-operatively. Union was 97.3% with operative and 71.4% with non-operative treatment, and the overall refracture rate was 10.2% [r1]. In elite athletes, union was 96.7%, mean return to play was 11.15 weeks, the complication rate was 22.5% and refracture was 8.6% [r15]. Among 25 NFL players, 100% returned to play and 12% refractured [r9]. After refracture or nonunion, revision with bone grafting returned 21 elite athletes to their prior level at a mean of 12.3 weeks [r12]. In a UK pathway of 663 fifth metatarsal fractures, 8 Jones fractures (7%) went to asymptomatic nonunion after conservative treatment [r4].",
  prevention: [
    "Build training load gradually and avoid sudden jumps in cutting, jumping or running volume (clinical convention; no prevention trial identified).",
    "Take lateral foot pain in athletes seriously and image early, because a stress reaction can become a complete Jones fracture [r7].",
    "Monitor load in young professional players in their first seasons, when many Jones fractures occurred in one NFL series [r9].",
    "Review footwear and surfaces, and consider orthoses for athletes with a high-arched, laterally loaded foot (clinical observation).",
    "Screen for low energy availability, low bone density and nutritional factors in athletes with stress-type or recurrent fractures (see the metatarsal stress fracture page).",
    "After a fracture, return in a graded way and only when union is confirmed, to reduce refracture [r12]."
  ],
  clinicalPearls: [
    "Zone matters more than the label 'fifth metatarsal fracture': a zone 1 avulsion is usually benign, while a zone 2 or zone 3 fracture in an athlete may need fixation [r3,r2].",
    "Reliability of the three-zone scheme is poor, so do not rely on the zone alone. A two-part avulsion versus indirect scheme based on the peroneus brevis footprint (about 15 mm from the tuberosity) had κ = 0.92 [r13].",
    "In athletes, discuss screw fixation early: in the RCT, casting failed in 44% and screw fixation shortened return to sport from about 15 to 8 weeks [r6]. Offer non-operative care as a legitimate choice for lower-demand patients [r4].",
    "Prodromal lateral foot pain before the 'injury' means a stress fracture is likely. In the elite consensus, nondisplaced fractures should have MRI and comminuted or displaced fractures CT [r7].",
    "Beware of rushing: refracture was 10.2% overall and 12% in NFL players despite fixation, so use clinical and radiographic union plus graded loading [r1,r9,r12].",
    "Not every lucency is a fracture. Os vesalianum pedis (0.15%) and the normal apophysis in adolescents can mimic one, so compare with the other foot [r17]."
  ],
  related: ["lateral-ankle-sprain", "peroneal-tendinopathy", "metatarsal-stress-fracture", "lisfranc-injury", "navicular-stress-fracture", "peroneal-tendon-subluxation"],

  references: [
    { id: "r1", citation: "Attia AK, Taha T, Kong G, et al. Return to play and fracture union after the surgical management of Jones fractures in athletes: a systematic review and meta-analysis. Am J Sports Med. 2021;49(12):3422-36.", pmid: "33740393", doi: "10.1177/0363546521990020", type: "meta-analysis", year: 2021 },
    { id: "r2", citation: "Lawrence SJ, Botte MJ. Jones' fractures and related fractures of the proximal fifth metatarsal. Foot Ankle. 1993;14(6):358-65.", pmid: "8406253", doi: "10.1177/107110079301400610", type: "narrative-review", year: 1993 },
    { id: "r3", citation: "Cheung CN, Lui TH. Proximal fifth metatarsal fractures: anatomy, classification, treatment and complications. Arch Trauma Res. 2016;5(4):e33298.", pmid: "28144601", doi: "10.5812/atr.33298", type: "narrative-review", year: 2016 },
    { id: "r4", citation: "Brogan K, Bellringer S, Akehurst H, et al. Virtual fracture clinic management of fifth metatarsal, including Jones', fractures is safe and cost-effective. Injury. 2017;48(4):966-70.", pmid: "28284470", doi: "10.1016/j.injury.2017.02.003", type: "cohort", year: 2017 },
    { id: "r5", citation: "Dewar CP, O'Hara GN, Roebke LJ, et al. Percutaneous screw fixation of proximal fifth metatarsal fractures. JBJS Essent Surg Tech. 2024;14(4).", pmid: "39554542", doi: "10.2106/JBJS.ST.23.00078", type: "other", year: 2024 },
    { id: "r6", citation: "Mologne TS, Lundeen JM, Clapper MF, et al. Early screw fixation versus casting in the treatment of acute Jones fractures. Am J Sports Med. 2005;33(7):970-5.", pmid: "15888715", doi: "10.1177/0363546504272262", type: "rct", year: 2005 },
    { id: "r7", citation: "Balboni JM, Semelsberger SD, Boggiano VJ, et al. Jones fractures in elite athletes-2025 International Foot and Ankle Sports Consensus and systematic review. Knee Surg Sports Traumatol Arthrosc. 2026;34(9):3120-34.", pmid: "41451757", doi: "10.1002/ksa.70241", type: "consensus-statement", year: 2026 },
    { id: "r8", citation: "Zhao HT, Wu HT, Wu WJ, et al. Epidemiological investigation of adult metatarsal fractures. Zhonghua Yi Xue Za Zhi. 2010;90(1):15-8.", pmid: "20356518", type: "cross-sectional", year: 2010 },
    { id: "r9", citation: "Lareau CR, Hsu AR, Anderson RB. Return to play in National Football League players after operative Jones fracture treatment. Foot Ankle Int. 2016;37(1):8-16.", pmid: "26353796", doi: "10.1177/1071100715603983", type: "cohort", year: 2016 },
    { id: "r10", citation: "Kaneko F, Edama M, Ikezu M, et al. Anatomic characteristics of tissues attached to the fifth metatarsal bone. Orthop J Sports Med. 2020;8(9):2325967120947725.", pmid: "32995346", doi: "10.1177/2325967120947725", type: "basic-science", year: 2020 },
    { id: "r11", citation: "Richli WR, Rosenthal DI. Avulsion fracture of the fifth metatarsal: experimental study of pathomechanics. AJR Am J Roentgenol. 1984;143(4):889-91.", pmid: "6332501", doi: "10.2214/ajr.143.4.889", type: "basic-science", year: 1984 },
    { id: "r12", citation: "Hunt KJ, Anderson RB. Treatment of Jones fracture nonunions and refractures in the elite athlete: outcomes of intramedullary screw fixation with bone grafting. Am J Sports Med. 2011;39(9):1948-54.", pmid: "21632977", doi: "10.1177/0363546511408868", type: "cohort", year: 2011 },
    { id: "r13", citation: "Marcus RE, Rascoe AS, Pasternack J, et al. A novel classification system for fifth metatarsal base fractures is reliable and clinically validated. Clin Orthop Relat Res. 2026;484(7):1331-8.", pmid: "41591313", doi: "10.1097/CORR.0000000000003827", type: "diagnostic-accuracy", year: 2026 },
    { id: "r14", citation: "Gray AC, Rooney BP, Ingram R. A prospective comparison of two treatment options for tuberosity fractures of the proximal fifth metatarsal. Foot (Edinb). 2008;18(3):156-8.", pmid: "20307430", doi: "10.1016/j.foot.2008.02.002", type: "rct", year: 2008 },
    { id: "r15", citation: "Goodloe JB, Cregar WM, Caughman A, et al. Surgical management of proximal fifth metatarsal fractures in elite athletes: a systematic review. Orthop J Sports Med. 2021;9(9):23259671211037647.", pmid: "34552993", doi: "10.1177/23259671211037647", type: "systematic-review", year: 2021 },
    { id: "r16", citation: "Biz C, Zamperetti M, Gasparella A, et al. Early radiographic and clinical outcomes of minimally displaced proximal fifth metatarsal fractures: castfunctional bandage. Muscles Ligaments Tendons J. 2017;7(3):532-40.", pmid: "29387648", doi: "10.11138/mltj/2017.7.3.532", type: "cohort", year: 2017 },
    { id: "r17", citation: "Uğuz Gençer C, Tetiker H, Koşar MI, et al. The prevalence and the clinical importance of os vesalianum pedis. Acta Chir Orthop Traumatol Cech. 2024;91(5):296-300.", pmid: "39496196", doi: "10.55095/ACHOT2024/053", type: "cross-sectional", year: 2024 },
    { id: "r18", citation: "Vu D, McDiarmid T, Brown M, et al. Clinical inquiries. What is the most effective management of acute fractures of the base of the fifth metatarsal? J Fam Pract. 2006;55(8):713-7.", pmid: "16882447", type: "narrative-review", year: 2006 }
  ],

  animation: {
    title: "How a fifth metatarsal fracture happens",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "anterior", environment: "court",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "run-contact", root: { x: -90 } },
          { t: 1.2, pose: "cut-plant", root: { x: -25 } },
          { t: 2.2, pose: "ankle-inversion", root: { x: 0 }, ease: "in" },
          { t: 3.2, pose: "ankle-inversion", joints: { ankleR: 40 }, root: { x: 2 } },
          { t: 4.4, pose: "squat", root: { x: 8 } },
          { t: 5.6, pose: "stand", root: { x: 10 } }
        ],
        props: [{ id: "ball", type: "ball-basketball", attach: "handL" }],
        forces: [
          { t: [1.9, 3.2], at: "footR", dir: "up", label: "Ground force on the lateral border" },
          { t: [2.0, 3.3], at: "ankleR", dir: "medial", label: "Foot forced into inversion" }
        ],
        highlights: [{ t: [2.2, 6], at: "footR" }],
        impacts: [{ t: 2.5, at: "footR" }],
        slowmo: [{ t: [1.8, 3.0], rate: 0.3 }],
        captions: [
          { t: 0, text: "A basketball player runs and cuts hard on the right foot." },
          { t: 1.3, text: "The foot plants on its outer edge, with the ankle pointing down." },
          { t: 2.1, text: "The foot rolls into inversion and the peroneus brevis fights to hold it." },
          { t: 3.0, text: "The peroneus brevis and the plantar fascia pull on the base of the fifth metatarsal." },
          { t: 4.3, text: "The athlete feels a sharp pain on the outer foot and cannot push off." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "footR",
        captions: [{ t: 0, text: "Zooming into the right foot, viewed from the outer (lateral) side." }]
      },
      {
        type: "closeup", label: "Inside the foot", duration: 10.5, scene: "ankle-lateral",
        actions: [
          { t: 0, do: "highlight", target: "fifthMetatarsal" },
          { t: 0.3, do: "label", target: "fifthMetatarsal", text: "5th metatarsal" },
          { t: 0.9, do: "highlight", target: "peronealBrevisTendon" },
          { t: 1.1, do: "label", target: "peronealBrevisTendon", text: "Peroneus brevis: inserts on the base" },
          { t: 1.6, do: "arrow", at: "baseFifthMetatarsal", dir: "posterior", label: "Tendon and fascia pull", size: "m" },
          { t: 1.9, do: "stretch", target: "peronealBrevisTendon", amount: 0.3, dur: 0.8 },
          { t: 2.9, do: "fracture", target: "fifthMetatarsal", pattern: "avulsion", at: "baseFifthMetatarsal", displaced: false },
          { t: 2.9, do: "impact", at: "baseFifthMetatarsal" },
          { t: 3.5, do: "pain", at: "baseFifthMetatarsal", hold: 2.5 },
          { t: 3.9, do: "label", target: "fifthMetatarsal", text: "Zone 1: tuberosity avulsion (heals well)" },
          { t: 5.4, do: "reset", target: "fifthMetatarsal" },
          { t: 5.4, do: "reset", target: "peronealBrevisTendon" },
          { t: 5.8, do: "camera", at: "jonesZone", zoom: 1.6, dur: 0.9 },
          { t: 6.3, do: "arrow", at: "jonesZone", dir: "down", label: "Repeated bending load", size: "m" },
          { t: 6.8, do: "stress", target: "fifthMetatarsal", at: "jonesZone" },
          { t: 8.0, do: "fracture", target: "fifthMetatarsal", pattern: "transverse", at: "jonesZone", displaced: false },
          { t: 8.6, do: "label", target: "fifthMetatarsal", text: "Zone 2: Jones fracture (poor blood supply)" },
          { t: 9.9, do: "camera", zoom: 1, dur: 0.6 }
        ],
        captions: [
          { t: 0, text: "The fifth metatarsal forms the outer border of the foot, with a tuberosity at its base." },
          { t: 1.1, text: "The peroneus brevis inserts on the base, and the lateral plantar fascia attaches next to it." },
          { t: 1.7, text: "In a forced inversion they pull hard on the tuberosity." },
          { t: 2.9, text: "The tuberosity fails: a zone 1 avulsion fracture. It has a good blood supply and usually heals." },
          { t: 5.4, text: "A different injury happens a little further along the bone, at the Jones zone." },
          { t: 6.4, text: "Here, repeated bending load builds a stress reaction in a region with a poor, watershed blood supply." },
          { t: 8.0, text: "A Jones fracture can follow. It heals slowly, and it may not heal at all without fixation." },
          { t: 9.2, text: "Athletes are often offered a screw, since casting fails in up to 44%." }
        ]
      },
      {
        type: "micro", label: "Bone healing", duration: 10, tissue: "bone-fracture",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.0, stage: "fracture" }, { t: 2.2, stage: "haematoma" },
          { t: 3.4, stage: "inflammation" }, { t: 4.8, stage: "soft-callus" }, { t: 6.4, stage: "hard-callus" }, { t: 8.0, stage: "remodelling" }
        ],
        timeLabels: [{ t: 2.2, text: "Days 0–7" }, { t: 3.4, text: "Days 1–14" }, { t: 4.8, text: "Weeks 2–6" }, { t: 6.4, text: "Weeks 6–12" }, { t: 8.0, text: "Months" }],
        captions: [
          { t: 0, text: "Healthy bone: cortical and cancellous bone with a good blood supply." },
          { t: 1.0, text: "Fracture: the bone breaks and the blood vessels at the fracture are torn." },
          { t: 2.2, text: "A haematoma forms and holds the signals that start repair." },
          { t: 3.4, text: "Inflammation: cells clear debris and recruit repair cells." },
          { t: 4.8, text: "Soft callus bridges the gap. In the Jones zone this step can stall because of a poor blood supply." },
          { t: 6.4, text: "Hard callus replaces cartilage with woven bone. Union takes about 8 weeks with a screw and longer without." },
          { t: 8.0, text: "Remodelling: bone is reshaped along the lines of load, which is why loading must be built gradually." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL10" }
};
