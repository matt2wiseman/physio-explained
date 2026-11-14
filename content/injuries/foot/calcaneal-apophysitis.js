export default {
  id: "calcaneal-apophysitis",
  name: "Calcaneal apophysitis (Sever's disease)",
  shortName: "Calcaneal apophysitis",
  aka: ["Sever's disease", "Sever's injury", "Sever's", "apophysitis calcanei", "calcaneal osteochondrosis", "heel pain in children", "paediatric heel pain", "growing heel pain"],
  region: "foot",
  tissues: ["physis", "bone"],
  onset: "gradual",
  mechanismType: ["overuse", "traction", "compression"],
  populations: ["active children and adolescents aged about 8–15 years", "youth soccer, football and basketball players", "children with a higher body mass index", "children with a tight calf (gastrocnemius equinus)"],
  sports: ["soccer", "australian football", "basketball", "gymnastics", "running", "tennis", "dance"],
  urgency: "routine",
  summary: "Activity-related heel pain in growing children from repeated traction and impact on the calcaneal apophysis. A clinical diagnosis, usually self-limiting, managed with load modification, heel support and calf care.",
  keyFacts: [
    { label: "Typical recovery", value: "Self-limiting. In a youth soccer academy, mean time to return to play was 60.7 days (SD 64.9), and longer with recurrence" },
    { label: "Return to sport", value: "Pain-guided and usually without complete rest: modify load, add heel support, then a graded return to full training" },
    { label: "Key test", value: "Calcaneal squeeze test (sensitivity 97%) and one-leg heel standing (100%); specificity 100% in one study of 30 children and 15 controls" },
    { label: "Imaging", value: "Not needed. Sclerosis and fragmentation also occur in pain-free active children; radiographs changed the diagnosis in 1 of 61 patients (a bone cyst)" },
    { label: "Peak age", value: "8–15 years; mean age 11.8 years in a youth academy cohort" },
    { label: "Incidence", value: "0.36 per 100 youth soccer players per year in one academy; up to 16% of paediatric musculoskeletal outpatient conditions" }
  ],
  overview: "Calcaneal apophysitis (Sever's disease) is the most common cause of heel pain in active children and adolescents [r1,r2]. It affects children between about 8 and 15 years of age, during the years when the calcaneal apophysis (the growth centre at the back and underside of the heel bone) is open and still separated from the main bone by a growth plate [r2]. It presents as activity-related pain at the back and sole of the heel that eases with rest, and is most often seen in soccer, football, basketball, running and gymnastics [r3,r2].\n\nThe diagnosis is clinical, based on the history and two or three simple tests, not on radiographs: sclerosis and fragmentation of the apophysis also appear in pain-free active children [r4,r5]. The condition is regarded as an overuse syndrome driven by repetitive traction from the Achilles tendon and impact load at the heel on an immature apophysis [r6]. It is self-limiting, but it can cost substantial playing time and can recur [r6,r5]. The evidence for treatment is weak, although conservative measures such as load modification, heel support, exercise and taping are widely used and are reported to relieve symptoms [r7,r3].",

  epidemiology: {
    text: "Calcaneal apophysitis is the most common cause of heel pain in childhood and adolescence, and in the outpatient setting it accounts for up to 16% of musculoskeletal conditions in children [r1]. In a 10-year retrospective study of 612 players in a German youth soccer academy (4326 injury cases), 22 cases were found, an incidence of 0.36 per 100 athletes per year. The mean age at diagnosis was 11.8 years (SD 2.1), and symptoms were unilateral in 20 of 22 cases. Three of the 22 (13.6%) were recurrences, and the mean time to return to play was 60.7 days (SD 64.9). Recurrent cases took longer to recover [r6]. A systematic review of 11 observational studies (1265 participants, mean age 10.7 years) found that the studied risk and associated factors included limited ankle dorsiflexion, foot alignment, midfoot stiffness, plantar pressures and ground-reaction force, body mass index, age, gender, other osteochondroses and sport participation. The studies disagreed on which are true risk factors and which are consequences [r8].",
    riskFactors: {
      intrinsic: [
        "Limited ankle dorsiflexion: in 56 boys, 26 of 28 with Sever's disease and 8 of 28 controls had bilateral gastrocnemius equinus; in 106 boys it was about 8 times more likely in those with the condition. It is unclear whether this predisposes or results (modifiable) [r9,r10]",
        "Higher body mass index and obesity [r2,r10,r8]",
        "Higher peak heel plantar pressures and a slower centre-of-pressure velocity, which may be a cause or a consequence [r9,r10]",
        "Foot alignment and midfoot stiffness and mobility (inconsistent between studies) [r8]",
        "Age, with an open growth plate in the immature calcaneus (puberty) [r2]",
        "Presence of other osteochondroses [r8]"
      ],
      extrinsic: [
        "High levels of physical activity and sport participation [r2,r8]",
        "High-impact sports: soccer, track, cross-country, gymnastics, tennis and ballet [r2]",
        "Sudden increases in training volume, such as pre-season or tournament blocks, and hard surfaces or stiff cleats (modifiable; clinical observation, not established in the reviews cited)"
      ]
    }
  },

  mechanism: {
    summary: "Sever's disease has no single injury moment. It develops from repeated loading across an open growth plate: the Achilles tendon pulls on the posterior calcaneal apophysis at push-off, and the heel takes high peak pressure at heel strike [r6,r9]. Because the apophysis is still separated from the heel bone by a growth plate, repeated traction and compression are thought to cause microtrauma and pain at the growth plate. The mechanism is inferred rather than shown directly; there is no histology in the sources reviewed.",
    sequence: [
      "A growing child runs, jumps and changes direction many times a day in sport, often on hard surfaces.",
      "At heel strike the heel takes a high peak pressure, and the heel pad absorbs the impact. Children with Sever's disease had higher heel pressures than controls [r9,r10].",
      "In late stance the gastrocnemius–soleus contracts and the Achilles tendon pulls on the posterior calcaneal apophysis (traction).",
      "A tight calf (limited dorsiflexion) raises that traction. Bilateral gastrocnemius equinus was far more common in affected children [r9,r10].",
      "With repeated cycles, the load is more than the immature growth plate can tolerate, and the apophysis becomes irritated and painful.",
      "Pain appears first after sport, then during it, and the child starts to limp or toe-walk.",
      "As the growth plate fuses in later adolescence the pain resolves; symptoms often settle within weeks to months with load reduction [r6,r5]."
    ],
    variants: [
      { name: "High-impact sport load", description: "Soccer, track, cross-country, gymnastics, tennis and ballet involve repeated heel impact and push-off, and high activity levels are a primary risk factor [r2]." },
      { name: "Tight calf and restricted dorsiflexion", description: "Ankle dorsiflexion limitation was the most frequently studied intrinsic factor, and gastrocnemius equinus was more common in affected boys [r8,r9]." },
      { name: "High body mass", description: "Higher BMI and obesity add load through the heel and were associated with the condition [r2,r10]." },
      { name: "Recurrent or bilateral disease", description: "Recurrence occurred in 13.6% of youth soccer players, and recurrent cases took longer to return to play. Most cases were unilateral [r6]." }
    ]
  },

  anatomy: {
    text: "The calcaneus has a secondary ossification centre, the calcaneal apophysis, at its posterior and plantar surface. A cartilaginous growth plate (physis) separates it from the body of the heel bone until the two fuse in later adolescence. The Achilles tendon attaches posteriorly to the calcaneal tuberosity, and the plantar fascia and short plantar muscles originate from the plantar surface near it, so the apophysis resists traction from both. The heel fat pad cushions the bone under the heel. A heel cup that supports the pad improved heel-pad thickness and reduced peak pressure in 50 children [r11]. The growth plate is a relatively weak link between tendon and bone while the child is growing, which is the usual explanation for apophyseal overuse injuries.",
    structures: [
      { name: "Calcaneal apophysis and growth plate (physis)", role: "Secondary ossification centre that takes tendon traction. It is the site of pain in Sever's disease." },
      { name: "Achilles tendon (calcaneal tuberosity insertion)", role: "Transmits gastrocnemius–soleus force to the calcaneal apophysis during push-off" },
      { name: "Plantar fascia and short plantar muscles", role: "Attach near the apophysis and share the traction at push-off" },
      { name: "Heel fat pad", role: "Absorbs impact at heel strike; heel-pad support reduced heel peak pressure and pain in 50 children [r11]" },
      { name: "Gastrocnemius–soleus complex", role: "Calf muscle that drives push-off. A tight gastrocnemius limits dorsiflexion and raises traction on the heel [r9]." },
      { name: "Calcaneal body", role: "The bone beneath the physis, which must be examined for stress injury, cysts and other lesions in atypical cases [r5]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "Calcaneal apophysitis is an overuse injury of the growing heel. The calcaneal apophysis is separated from the body of the calcaneus by a growth plate that is mechanically weaker than the surrounding bone and tendon. Repeated Achilles traction and heel impact are thought to overload this region, so the plate becomes irritated and painful [r6]. The same pattern of apophyseal overuse occurs at the tibial tuberosity (Osgood–Schlatter) and the inferior pole of the patella (clinical observation).\n\nThe radiographic appearance of the apophysis has historically been read as a sign of inflammation from Achilles traction. In a study of 30 children with Sever's injury and 15 matched pain-free controls, all participants showed increased density of the apophysis, and half of the pain-free controls showed fragmentation compared with almost 90% of children with heel pain. The authors concluded that these findings may represent normal growth and development, and that the diagnosis is clinical [r4]. A prospective review of 61 patients reached the same conclusion: neither sclerosis nor fragmentation could be used to establish the diagnosis [r5]. The cellular mechanism of pain in Sever's disease has not been directly studied in the sources reviewed, so the micro phase below is schematic.",
    structures: [
      { name: "Calcaneal apophysis and physis", effect: "Overloaded by traction and compression; irritated and painful. Sclerosis and fragmentation are common in pain-free active children too, so they do not confirm the diagnosis [r4]." },
      { name: "Achilles tendon insertion", effect: "Transmits the traction to the apophysis. A tight gastrocnemius may raise this load [r9]." },
      { name: "Heel fat pad and heel-strike mechanics", effect: "Peak heel pressure is higher in affected children; supporting the heel pad lowered peak pressure and pain [r9,r11]." },
      { name: "Calcaneal body", effect: "Normal in typical disease. A radiograph changed the diagnosis in only 1 of 61 patients (a simple bone cyst) [r5]." }
    ],
    muscles: [
      { name: "Gastrocnemius–soleus", effect: "Gastrocnemius equinus (reduced dorsiflexion with the knee straight) was far more common in affected boys: 26 of 28 versus 8 of 28 controls had bilateral equinus. It is unclear whether this is a cause or a result [r9,r10]." },
      { name: "Intrinsic foot muscles and plantar fascia", effect: "Share the load at the plantar part of the apophysis. Their role in Sever's disease has not been studied in the sources reviewed." },
      { name: "Hip and trunk muscles", effect: "Landing and running mechanics influence heel load. There is no direct evidence for Sever's disease, so assessment is based on clinical judgement." }
    ],
    cellular: [
      { phase: "Traction and compressive loading", timing: "Weeks of high load", description: "Repeated tensile and compressive loads pass across the apophyseal growth plate. This is a mechanistic model, not directly observed in children." },
      { phase: "Microdamage and irritation", timing: "Weeks", description: "Microscopic disruption of the growth-plate cartilage and its junction with bone is proposed. Whether there is true inflammation is uncertain, because imaging changes are also seen in pain-free children [r4]." },
      { phase: "Symptom settling with reduced load", timing: "Weeks to a few months", description: "Pain improves with load modification and heel support, and most children return to play (mean 60.7 days in a youth soccer academy) [r6,r5]." },
      { phase: "Maturation", timing: "Until skeletal maturity", description: "The growth plate closes and the apophysis fuses to the calcaneus, after which Sever's disease no longer occurs (clinical anatomy; not tested in the sources reviewed)." }
    ],
    systems: [
      { system: "Skeletal growth", effect: "An open growth plate in the immature calcaneus is the defining risk, and the condition mainly occurs in puberty [r2]. The common model that bone grows faster than the calf–Achilles unit during growth spurts is plausible but not directly shown in the sources reviewed." },
      { system: "Musculoskeletal chain", effect: "Ankle dorsiflexion restriction, foot alignment and plantar pressure patterns were associated with the condition, although the direction of cause is unclear [r8,r9]." },
      { system: "Body composition and activity load", effect: "Obesity and high levels of physical activity are the primary risk factors reported in athletes [r2]." },
      { system: "Nervous system and pain", effect: "Pain is mechanical and activity-related, and pain-processing changes have not been studied in this condition. Persistent pain with night symptoms should prompt a search for another cause." },
      { system: "Participation and psychosocial", effect: "Calcaneal apophysitis results in substantial time loss from sport [r6]. Pain and a long lay-off can affect a child's wellbeing and team involvement; involve parents and coaches in the plan." }
    ]
  },

  grading: null,

  timeframes: {
    summary: "Symptoms usually settle within weeks to a few months with load modification, but the range is wide. The phases below are illustrative. In a youth soccer academy the mean time to return to play was 60.7 days (SD 64.9) [r6].",
    healing: [
      { phase: "Painful, load-limited phase", startDay: 0, endDay: 28, description: "Activity-related heel pain limits running and jumping. Pain settles with load reduction and heel support." },
      { phase: "Load modification and rebuilding", startDay: 14, endDay: 90, description: "Calf mobility, strength and graded return to impact. Heel support allows activity to continue with less pain [r11,r7]." },
      { phase: "Return to full sport", startDay: 30, endDay: 120, description: "Mean time to return to play was 60.7 days in a youth soccer academy, with a wide spread (SD 64.9) [r6]" },
      { phase: "Maturation and fusion of the growth plate", startDay: 120, endDay: 730, description: "The growth plate closes in later adolescence. Recurrence is possible while the plate is open (13.6% in one academy cohort) [r6]." }
    ],
    milestones: [
      { label: "Short-term relief with heel support or orthoses", day: 14, note: "Orthoses gave greater short-term pain relief than heel raises in the limited trial evidence [r7]" },
      { label: "Better ankle function with kinesio taping", day: 30, note: "AOFAS was better at 1 and 3 months with kinesio tape than with sham tape in 22 athletes, although pain scores did not differ [r12]" },
      { label: "Mean return to play", day: 61, note: "60.7 days (SD 64.9) in a youth soccer academy [r6]" },
      { label: "Resolution by skeletal maturity", day: 365, note: "Pain settles as the growth plate matures; no long-term effects have been associated with Sever's disease [r2]" }
    ],
    returnToSport: "Criteria-based and pain-guided, typically within about 2 months for most youth players, with a wide range (mean 60.7 days, SD 64.9) and longer after recurrence [r6]. Children can often keep playing at a reduced load with heel support [r11]."
  },

  clinicalPresentation: {
    symptoms: [
      "Activity-related pain at the back and underside of the heel in a child aged about 8–15 years [r2]",
      "Pain during and after running, jumping and sport, easing with rest",
      "Gradual onset over weeks, often during a growth spurt or after a rise in training",
      "Limping or toe-walking after sport, and pain on first steps after rest in some children",
      "Usually one heel (20 of 22 cases were unilateral), though both heels can be involved [r6]"
    ],
    signs: [
      "Tenderness over the calcaneal apophysis at the back and sides of the heel",
      "Positive calcaneal squeeze test (medial–lateral compression of the heel) [r4]",
      "Pain on one-leg heel standing [r4]",
      "Reduced ankle dorsiflexion, particularly with the knee straight (gastrocnemius equinus) [r9]",
      "No heel swelling, redness or bruising; no night pain"
    ]
  },

  assessment: {
    subjective: [
      "Age, stage of growth (recent growth spurt) and sports played, with weekly volume and any recent rise in training [r2]",
      "Pain location, relation to activity and rest, and whether it limits play; limping or toe-walking",
      "Night pain, rest pain, fever, swelling, other joint pain or systemic symptoms (red-flag screen)",
      "Unilateral or bilateral symptoms, previous heel pain and what was tried (heel cups, rest)",
      "Footwear, cleats and playing surfaces",
      "Parent and child goals, upcoming competitions and coach involvement"
    ],
    observation: [
      "Gait: heel-strike pattern, toe-walking or limping, and any avoidance of heel loading",
      "Foot posture and alignment, including hindfoot position and arch height (findings were inconsistent between studies) [r8]",
      "Height and weight to calculate BMI [r2,r10]",
      "No visible swelling, redness or heel-pad bruising; if present, consider another diagnosis"
    ],
    palpation: [
      "Posterior and plantar calcaneus over the apophysis: the usual site of tenderness [r4]",
      "Medial–lateral heel squeeze (squeeze test) [r4]",
      "Compare with the Achilles insertion, retrocalcaneal area, plantar fascia origin and heel pad centre"
    ],
    rangeOfMotion: [
      "Ankle dorsiflexion with the knee straight and bent (gastrocnemius and soleus length); gastrocnemius equinus was far more common in affected boys [r9,r10]",
      "Subtalar and midfoot motion; midfoot stiffness was one of the factors studied [r8]"
    ],
    strength: [
      "Single-leg heel raise: repetitions, height and symmetry",
      "Toe flexor and intrinsic foot strength (short-foot test)",
      "Hip abductor and extensor strength as part of the kinetic chain"
    ],
    neuro: [
      "Sensation over the heel and sole and a brief neurological screen; findings are normal in uncomplicated disease"
    ],
    functional: [
      "One-leg heel standing [r4]",
      "Single-leg hop, jump and running tests, rating pain and next-day response",
      "Sport-specific tasks: running, cutting and landing"
    ],
    specialTests: [
      { name: "Calcaneal squeeze test", purpose: "Reproduce pain by compressing the apophysis and growth plate", procedure: "Squeeze the heel from medial and lateral sides with both hands, compressing the calcaneal apophysis.", positive: "Reproduction of the child's familiar heel pain", sensitivity: "97% (30 children with Sever's injury)", specificity: "100% (15 pain-free matched controls)", refs: ["r4"] },
      { name: "One-leg heel standing", purpose: "Provoke heel pain with a loaded single-leg task", procedure: "Ask the child to stand on one leg in the heel-standing position described in the original study. The abstract does not define the exact procedure, so it is interpreted here as a single-leg heel-raise position; confirm against the original paper.", positive: "Reproduction of familiar heel pain", sensitivity: "100% (30 children with Sever's injury)", specificity: "100% (15 pain-free matched controls)", refs: ["r4"] },
      { name: "Palpation of the calcaneal apophysis", purpose: "Localise tenderness to the apophysis", procedure: "Press firmly over the posterior and plantar heel at the apophysis and compare with the Achilles insertion and the heel pad.", positive: "Focal tenderness over the apophysis reproducing the child's pain", sensitivity: "80% (30 children with Sever's injury)", specificity: "100% (15 pain-free matched controls)", refs: ["r4"] },
      { name: "Gastrocnemius–soleus length (ankle dorsiflexion with the knee straight and bent)", purpose: "Identify gastrocnemius equinus, a possible predisposing factor", procedure: "Measure dorsiflexion with a goniometer, knee extended then flexed, with the subtalar joint in neutral.", positive: "Reduced dorsiflexion, particularly with the knee straight, and bilaterally. No accuracy figures apply; this is a risk-factor measure.", refs: [] }
    ],
    clinicalRules: [
      { name: "Clinical diagnostic criteria (Perhamre)", description: "A study of 30 children with Sever's injury and 15 controls suggested that the diagnosis should be based on the history and the results of two specific clinical tests rather than radiographs [r4]. These criteria come from one small, single-centre study and have not been prospectively validated in the sources reviewed." }
    ],
    outcomeMeasures: [
      { name: "Numeric pain rating (0–10) or VAS", use: "Pain during and after sport and first-step pain; used in the RCTs of heel cups and taping [r11,r12]" },
      { name: "AOFAS ankle–hindfoot score", use: "Function score used as an outcome in the kinesio taping RCT [r12]" },
      { name: "Single-leg heel raise repetitions", use: "Capacity measure to guide strength progression" },
      { name: "Sport participation and training load", use: "Playing time, weekly sessions and return-to-play date. The review of interventions used maintenance of physical activity as an outcome [r7]." }
    ],
    imaging: [
      { modality: "Plain radiograph", indication: "Not routine. Use if there is trauma, night pain, swelling, a very unusual presentation, or no response to treatment.", findings: "Sclerosis and fragmentation of the apophysis occur in pain-free active children, so they do not confirm the diagnosis [r4]. Radiographs changed the diagnosis in 1 of 61 patients (a simple bone cyst) [r5]." },
      { modality: "Ultrasound or MRI", indication: "When stress fracture, infection, enthesitis or a tumour is suspected, or when symptoms persist despite treatment", findings: "MRI can show marrow oedema in the apophysis and body of the calcaneus; findings should be interpreted with the clinical picture." }
    ]
  },

  differentials: [
    { name: "Plantar heel pain (plantar fasciopathy)", id: "plantar-heel-pain", distinguishing: "Rare under 15 years. Plantar-medial tenderness at the fascial origin, with first-step pain, rather than posterior heel pain and a positive squeeze test." },
    { name: "Insertional Achilles tendinopathy", id: "insertional-achilles-tendinopathy", distinguishing: "Posterior heel pain at the tendon insertion, with tendon thickening or tenderness and pain on loaded calf raises. The squeeze test is negative." },
    { name: "Calcaneal stress fracture", distinguishing: "Pain that continues at rest or at night, a positive squeeze test and a sudden increase in load. MRI is the best test." },
    { name: "Acute apophyseal avulsion or calcaneal fracture", distinguishing: "Acute trauma, swelling and bruising, and inability to bear weight. Radiograph confirms." },
    { name: "Retrocalcaneal bursitis", distinguishing: "Swelling just in front of the Achilles insertion with tenderness on either side of the tendon, rare in young children." },
    { name: "Bone cyst, tumour or osteomyelitis", distinguishing: "Constant or night pain, swelling, fever or a mass; unresolving pain. A simple calcaneal bone cyst was found on radiograph in 1 of 61 patients [r5]." },
    { name: "Enthesitis-related juvenile arthritis", distinguishing: "Bilateral or migratory heel pain with morning stiffness, other joint or enthesis involvement, or systemic features. Refer to rheumatology." },
    { name: "Tarsal coalition", distinguishing: "Stiff, flat foot with recurrent sprains and restricted subtalar motion; radiograph or CT shows the coalition." },
    { name: "Tarsal tunnel or nerve pain", id: "tarsal-tunnel-syndrome", distinguishing: "Burning or radiating pain with a positive Tinel's test; unusual in children." }
  ],
  redFlags: [
    "Night pain, constant rest pain, fever, malaise or weight loss: suspect infection, tumour or inflammatory disease. Arrange urgent medical review and imaging.",
    "Heel swelling, redness, warmth or a palpable mass: suspect infection, a tumour or a bone cyst. Arrange imaging and medical review.",
    "Acute trauma with inability to bear weight, bruising or deformity: suspect avulsion or calcaneal fracture. Arrange radiographs.",
    "Pain after a sudden rise in load that continues at rest, with a positive squeeze test or bony tenderness: suspect calcaneal stress fracture and image before loading.",
    "Bilateral or migratory joint pain with morning stiffness or other joint swelling: refer for assessment of juvenile idiopathic arthritis.",
    "Symptoms that have not improved after about 3 months of well-delivered conservative care, or that worsen: review the diagnosis and refer for imaging or medical assessment (clinical convention)."
  ],

  management: {
    principles: "Explain to the child and parents that Sever's disease is common, self-limiting and not a sign of serious damage [r5,r2]. Management is conservative: modify load rather than stop sport, support the heel, restore calf mobility and capacity, and return to play in a graded way. A systematic review of 8 randomised trials found conservative treatment effective for relieving symptoms but included insoles, exercise, taping and orthoses with variable risk of bias [r3]. An earlier review concluded that evidence for heel raises and orthoses is limited, with methodological problems and little follow-up [r7]. No clinical practice guideline was identified in the sources reviewed, so the plan below rests on small trials and clinical practice. Review the plan every 2–4 weeks and involve coaches and parents.",
    medical: [
      { name: "Simple analgesia and short courses of NSAIDs", description: "Used for short-term pain control to allow activity, together with ice. NSAIDs are among the methods listed for Sever's pain, but no trials were identified [r2].", evidence: "expert-opinion", recommendation: "consider", refs: ["r2"] },
      { name: "Short-term immobilisation (walking boot or cast)", description: "For severe pain that has not responded to other measures. It is listed among treatment methods but was not tested in the trials reviewed [r2].", evidence: "expert-opinion", recommendation: "consider", refs: ["r2"] },
      { name: "Routine radiographs", description: "Not indicated for typical presentations: radiographs changed the diagnosis in 1 of 61 patients and the apophyseal findings do not confirm the diagnosis [r5,r4].", evidence: "limited", recommendation: "not-recommended", refs: ["r5", "r4"] },
      { name: "Corticosteroid injection", description: "No trial evidence was identified for injecting the growing heel, and it risks the apophysis and fat pad. It is not part of standard care for Sever's disease.", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] }
    ],
    physio: [
      { name: "Education and relative load reduction", description: "Explain the cause and the natural history. Reduce running and jumping volume to a level where pain is tolerable (at or below about 3–4/10 and settled by the next day), rather than stopping sport entirely. Ice and activity restriction are commonly used [r2,r11].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r2", "r11"] },
      { name: "Heel cup, heel raise or insole", description: "A custom-molded rigid heel cup that enclosed the heel pad relieved pain without reducing physical activity, and in 50 children it increased heel-pad thickness and reduced peak pressure [r11]. Orthoses gave greater short-term pain relief than heel raises in limited trial evidence [r7].", evidence: "limited", recommendation: "consider", refs: ["r11", "r7", "r3"] },
      { name: "Calf stretching and strengthening", description: "Targets the restricted dorsiflexion and gastrocnemius equinus found in affected children [r9,r10]. Therapeutic exercise was among the interventions in the RCTs reviewed, but trial-level evidence for any specific program is limited [r3].", evidence: "limited", recommendation: "consider", refs: ["r3", "r9", "r10"] },
      { name: "Kinesio taping", description: "In 22 male football athletes, kinesio tape gave better AOFAS scores than sham tape at 1 and 3 months, but pain scores did not differ at the end of treatment [r12].", evidence: "limited", recommendation: "consider", refs: ["r12", "r3"] },
      { name: "Footwear and surface advice", description: "Cushioned, supportive footwear for school and sport, and cleats that fit well, with attention to hard surfaces. Support the heel pad during activity (clinical convention) [r11].", evidence: "expert-opinion", recommendation: "consider", refs: ["r11"] },
      { name: "Weight management", description: "Obesity and higher BMI were associated with Sever's disease; give healthy activity and nutrition advice without stigma [r2,r10].", evidence: "expert-opinion", recommendation: "consider", refs: ["r2", "r10"] },
      { name: "Complete rest or banning all sport", description: "Not needed in most cases and it removes the child's activity and team involvement. Heel-cup studies achieved pain relief without reducing physical activity [r11].", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r11"] }
    ],
    education: [
      "Sever's disease is common in active growing children and is not a sign of serious damage or a torn tendon.",
      "It is an overuse problem of the growth plate at the back of the heel and it settles as you mature and with load changes.",
      "You can usually keep playing at a reduced level. Use heel cups or heel support in all shoes, including school shoes and cleats.",
      "Pain after sport that is worse the next day means the load was too much: cut back a little and build up again.",
      "Tight calves can add to the pull on the heel, so regular calf stretching and strengthening help.",
      "Most children return to sport within about 2 months, but it can come back, particularly during growth spurts [r6]."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and follows a load-capacity model: settle the heel with load modification and heel support, restore calf mobility and strength, rebuild impact tolerance, then return to full sport. Move on when the objective criteria are met, not when a set number of weeks has passed. Timeframes are typical; the mean return to play was about 60 days in one academy, with a wide range [r6]. Dosages are typical clinical ranges, not prescriptions from a single source; trial evidence for specific exercise programs is limited [r3]. As a working rule, activity pain should stay at or below about 3–4/10 and settle by the next morning (clinical convention). Adjust dosing for the child's size and age, and make the program fun and suitable for a child.",
    stages: [
      {
        name: "Settle & support",
        timeframe: "Weeks 0–2",
        goals: ["Reduce heel pain and limping", "Reduce impact load while keeping the child active", "Provide heel support in all shoes", "Start gentle calf mobility"],
        precautions: ["Do not stop sport completely; reduce running and jumping volume", "Keep pain at or below about 3–4/10 and settled by the next morning (clinical convention)", "Review red flags if pain is constant, at night or unresolving"],
        exercises: [
          { name: "Gastrocnemius stretch against a wall (knee straight)", dosage: "3 × 30 s each leg, twice daily", cues: "Keep the heel down and the foot pointing straight ahead" },
          { name: "Soleus stretch against a wall (knee bent)", dosage: "3 × 30 s each leg, twice daily", cues: "Bend the back knee while keeping the heel on the floor" },
          { name: "Seated calf raise", dosage: "2 × 15, slow, daily", cues: "Press through the ball of the foot, pause at the top", figure: { pose: "ex-seated-calf-raise", view: "lateral" } },
          { name: "Double-leg calf raise (flat floor)", dosage: "2–3 × 10–12, slow, daily if pain allows", cues: "Share weight evenly over both feet", figure: { pose: "ex-calf-raise", view: "lateral" } },
          { name: "Low-impact cross-training (cycling or swimming)", dosage: "20–30 min, 3 times per week, below the pain threshold", cues: "Maintains fitness and team involvement without heel impact" }
        ],
        progressionCriteria: ["Pain with walking and school at or below 2/10", "Squeeze test pain reduced compared with the start", "Double-leg calf raise × 10 with pain at or below 3/10"]
      },
      {
        name: "Mobility & strength",
        timeframe: "Weeks 2–6",
        goals: ["Improve ankle dorsiflexion and gastrocnemius length", "Build calf and foot strength", "Restore normal walking and running mechanics without limping", "Continue heel support"],
        precautions: ["Increase load only when the previous session has settled by the next morning", "Keep jump and sprint volume low but not zero"],
        exercises: [
          { name: "Single-leg calf raise", dosage: "3 × 8–12, 3 s up and 3 s down, every second day", cues: "Full range with a pause at the top", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Seated calf raise with load (soleus)", dosage: "3 × 12–15 with a light dumbbell on the knee, 3 times per week", cues: "Slow lowering", figure: { pose: "ex-seated-calf-raise", view: "lateral", props: ["dumbbell"] } },
          { name: "Single-leg balance", dosage: "3 × 30 s each leg, daily", cues: "Keep the arch lifted and the knee soft", figure: { pose: "ex-single-leg-balance", view: "anterior" } },
          { name: "Bodyweight squat", dosage: "3 × 10–12, 3 times per week", cues: "Heels flat, knees tracking over the toes", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Short-foot and towel scrunch", dosage: "3 × 10, daily", cues: "Draw the ball of the foot toward the heel" }
        ],
        progressionCriteria: ["Ankle dorsiflexion within about 5° of the other side or at a functional range (clinical convention)", "Single-leg calf raise × 12 with pain at or below 3/10", "Limp-free walking and light jogging without a flare"]
      },
      {
        name: "Impact tolerance",
        timeframe: "Weeks 4–10",
        goals: ["Rebuild tolerance to running, hopping and landing", "Limit heel strike load with good technique", "Maintain calf capacity", "Increase sport-specific activity"],
        precautions: ["Add impact in small steps and leave at least 24–48 h between impact sessions", "Stop progressing if pain is higher the next morning", "Keep heel support in sport shoes"],
        exercises: [
          { name: "Skipping rope or low bilateral hops", dosage: "3 × 20–30 s, twice per week", cues: "Quiet landings on the forefoot" },
          { name: "Single-leg hop in place, then forward", dosage: "3 × 5–8 each leg, twice per week", cues: "Soft landing, stick for 2 s", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Jog-walk intervals", dosage: "1 min jog / 1 min walk × 10, 3 times per week, on a soft surface first", cues: "Short, quick steps and quiet landings", figure: { pose: "run-toe-off", view: "lateral" } },
          { name: "Step-up with heel drive", dosage: "3 × 8–10 each leg", cues: "Control the pelvis and push through the whole foot", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Calf strength maintenance", dosage: "3 × 8–12 single-leg calf raises, twice per week", cues: "Slow tempo", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } }
        ],
        progressionCriteria: ["Hopping and skipping pain at or below 2/10 with no next-morning flare", "Jogs 15–20 min with pain at or below 2/10", "Squeeze test negative or minimally tender"]
      },
      {
        name: "Return to sport",
        timeframe: "Weeks 6–12+ (criteria-based)",
        goals: ["Return to full running, cutting and jumping", "Return to training and then matches", "Monitor load through growth spurts", "Keep a long-term calf and foot strength routine"],
        precautions: ["Increase training and match volume in steps", "Avoid sudden jumps in load such as tournaments or camps", "Check footwear, cleats and surface"],
        exercises: [
          { name: "Graded running program", dosage: "Build continuous running by about 10% per week (clinical convention), tracking next-morning pain", cues: "Check the heel pain the morning after", figure: { pose: "run-contact", view: "lateral" } },
          { name: "Planned then reactive change of direction", dosage: "2 sessions per week, increasing speed and angle", cues: "Land under control, with the knee over the foot", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Jump and landing drills", dosage: "3 × 5, twice per week", cues: "Land softly with hips and knees bent", figure: { pose: "jump-land", view: "lateral" } },
          { name: "Graded team training", dosage: "Partial then full training over 2–3 weeks", cues: "Share the plan with the coach and monitor pain" },
          { name: "Calf and foot strength and stretching maintenance", dosage: "2 times per week, 3 × 8–12", cues: "Keep this going through growth spurts" }
        ],
        progressionCriteria: ["Full training for 2 weeks with pain at or below 1–2/10 and no next-day flare", "Single-leg calf raise × 20 and symmetrical height", "Hop tests pain-free and symmetrical", "Child, parents and coach agree on the plan"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated return-to-sport (RTS) criteria were identified for Sever's disease; the criteria below reflect clinical convention",
      "Pain at or below 1–2/10 in sport with no next-day flare after loaded sessions",
      "Squeeze test and palpation negative or minimally tender",
      "Single-leg heel raise × 20 with symmetrical height; hop tests pain-free and symmetrical",
      "Completed full, unrestricted training for at least 1–2 weeks",
      "Heel support, footwear and a calf strength and load-monitoring plan in place, with agreement from child, parents and coach"
    ],
    tests: ["Squeeze test and palpation", "Single-leg heel raise repetitions and height", "Single-leg hop tests with pain rating", "Pain rating (0–10) during and the morning after sport", "Weekly training volume log"]
  },
  prognosis: "Calcaneal apophysitis is regarded as a self-limiting disease [r5], and no long-term effects have been associated with it [r2]. Time away from sport can be substantial: in a 10-year youth soccer academy cohort, mean time to return to play was 60.7 days (SD 64.9), and three of 22 cases (13.6%) were recurrences, which recovered more slowly. Age and BMI at diagnosis did not affect time to return to play [r6]. Most children improve with conservative treatment [r1,r3]. High-quality long-term follow-up trials are lacking [r7].",
  prevention: [
    "Build running and jumping volume gradually and avoid sudden spikes during growth spurts, tournaments and pre-season (clinical convention; no prevention trial identified) [r6].",
    "Maintain calf flexibility and strength, particularly in children with restricted dorsiflexion (plausible, since gastrocnemius equinus is associated with the condition, but not proven to prevent it) [r9].",
    "Use well-fitting, cushioned shoes and cleats, and avoid training on very hard surfaces (clinical convention).",
    "Give children rest days and avoid early single-sport specialisation with year-round high volume (clinical convention).",
    "Manage healthy body weight and activity levels for children with a higher BMI [r2,r10]."
  ],
  clinicalPearls: [
    "Diagnose Sever's disease from the history and the squeeze test, not the radiograph. In one study half of pain-free controls showed apophyseal fragmentation, versus almost 90% of children with heel pain [r4].",
    "The squeeze test (sensitivity 97%, specificity 100% in one small study) is the key bedside test. Check both heels, because the other side may be involved [r4].",
    "Heel support lets many children keep playing: a heel cup reduced pain without reducing the child's activity level [r11].",
    "Always measure ankle dorsiflexion with the knee straight and bent: 26 of 28 affected boys had bilateral gastrocnemius equinus versus 8 of 28 controls [r9].",
    "Unilateral pain that wakes the child at night, constant pain or swelling is not Sever's disease until proven otherwise; image and refer [r5].",
    "Set expectations: mean return to play was about 2 months with a wide range, and 13.6% of players had a recurrence, so plan calf work and load monitoring through later growth spurts [r6]."
  ],
  related: ["plantar-heel-pain", "insertional-achilles-tendinopathy", "osgood-schlatter", "sinding-larsen-johansson", "navicular-stress-fracture"],

  references: [
    { id: "r1", citation: "Morancie NA, Irvin L, Rayala BZ. Heel pain: diagnosis and management. Am Fam Physician. 2025;112(6):648-56.", pmid: "41533410", type: "narrative-review", year: 2025 },
    { id: "r2", citation: "Ramponi DR, Baker C. Sever's disease (calcaneal apophysitis). Adv Emerg Nurs J. 2019;41(1):10-4.", pmid: "30702528", doi: "10.1097/TME.0000000000000219", type: "narrative-review", year: 2019 },
    { id: "r3", citation: "Hernandez-Lucas P, Leirós-Rodríguez R, García-Liñeira J, et al. Conservative treatment of Sever's disease: a systematic review. J Clin Med. 2024;13(5):1391.", pmid: "38592198", doi: "10.3390/jcm13051391", type: "systematic-review", year: 2024 },
    { id: "r4", citation: "Perhamre S, Lazowska D, Papageorgiou S, et al. Sever's injury: a clinical diagnosis. J Am Podiatr Med Assoc. 2013;103(5):361-8.", pmid: "24072363", doi: "10.7547/1030361", type: "diagnostic-accuracy", year: 2013 },
    { id: "r5", citation: "Kose O. Do we really need radiographic assessment for the diagnosis of non-specific heel pain (calcaneal apophysitis) in children? Skeletal Radiol. 2010;39(4):359-61.", pmid: "19672591", doi: "10.1007/s00256-009-0774-y", type: "cohort", year: 2010 },
    { id: "r6", citation: "Belikan P, Färber LC, Abel F, et al. Incidence of calcaneal apophysitis (Sever's disease) and return-to-play in adolescent athletes of a German youth soccer academy: a retrospective study of 10 years. J Orthop Surg Res. 2022;17(1):83.", pmid: "35139872", doi: "10.1186/s13018-022-02979-9", type: "cohort", year: 2022 },
    { id: "r7", citation: "James AM, Williams CM, Haines TP. Effectiveness of interventions in reducing pain and maintaining physical activity in children and adolescents with calcaneal apophysitis (Sever's disease): a systematic review. J Foot Ankle Res. 2013;6(1):16.", pmid: "23641779", doi: "10.1186/1757-1146-6-16", type: "systematic-review", year: 2013 },
    { id: "r8", citation: "Nieto-Gil P, Marco-Lledó J, García-Campos J, et al. Risk factors and associated factors for calcaneal apophysitis (Sever's disease): a systematic review. BMJ Open. 2023;13(6):e064903.", pmid: "37280033", doi: "10.1136/bmjopen-2022-064903", type: "systematic-review", year: 2023 },
    { id: "r9", citation: "Becerro-de-Bengoa-Vallejo R, Losa-Iglesias ME, Rodriguez-Sanz D. Static and dynamic plantar pressures in children with and without Sever disease: a case-control study. Phys Ther. 2014;94(6):818-26.", pmid: "24481597", doi: "10.2522/ptj.20120164", type: "case-control", year: 2014 },
    { id: "r10", citation: "Rodríguez-Sanz D, Becerro-de-Bengoa-Vallejo R, López-López D, et al. Slow velocity of the center of pressure and high heel pressures may increase the risk of Sever's disease: a case-control study. BMC Pediatr. 2018;18(1):357.", pmid: "30453930", doi: "10.1186/s12887-018-1318-1", type: "case-control", year: 2018 },
    { id: "r11", citation: "Perhamre S, Lundin F, Klässbo M, et al. A heel cup improves the function of the heel pad in Sever's injury: effects on heel pad thickness, peak pressure and pain. Scand J Med Sci Sports. 2012;22(4):516-22.", pmid: "21410537", doi: "10.1111/j.1600-0838.2010.01266.x", type: "rct", year: 2012 },
    { id: "r12", citation: "Kuyucu E, Gülenç B, Biçer H, et al. Assessment of the kinesiotherapy's efficacy in male athletes with calcaneal apophysitis. J Orthop Surg Res. 2017;12(1):146.", pmid: "28985751", doi: "10.1186/s13018-017-0637-5", type: "rct", year: 2017 }
  ],

  animation: {
    title: "How Sever's disease develops",
    phases: [
      {
        type: "moi", label: "Repeated loading", duration: 6.5, view: "lateral", environment: "pitch",
        actors: [{ id: "athlete", kit: "child" }],
        keyframes: [
          { t: 0, pose: "run-contact", root: { x: -80 } },
          { t: 0.9, pose: "run-midstance", root: { x: -45 } },
          { t: 1.8, pose: "run-toe-off", root: { x: -10 }, ease: "out" },
          { t: 3.0, pose: "run-contact", root: { x: 30 } },
          { t: 3.9, pose: "run-midstance", root: { x: 65 } },
          { t: 4.9, pose: "run-toe-off", root: { x: 100 }, ease: "out" },
          { t: 6.2, pose: "run-contact", root: { x: 135 } }
        ],
        props: [{ id: "ball", type: "ball-soccer", keyframes: [{ t: 0, x: -20, y: 12 }, { t: 6.4, x: 190, y: 12 }] }],
        forces: [
          { t: [0, 0.8], at: "heelR", dir: "up", label: "Heel-strike impact" },
          { t: [1.3, 2.1], at: "heelR", dir: "up", label: "Achilles pulls on the heel" },
          { t: [3.0, 3.8], at: "heelR", dir: "up", label: "Impact, again and again" },
          { t: [4.3, 5.2], at: "heelR", dir: "up", label: "Traction on the growth plate" }
        ],
        highlights: [{ t: [0.2, 6.5], at: "heelR" }],
        slowmo: [{ t: [1.4, 2.3], rate: 0.4 }],
        captions: [
          { t: 0, text: "A growing child runs and kicks all week. Every heel strike loads the heel." },
          { t: 1.0, text: "As the child pushes off, the calf muscles pull on the heel through the Achilles tendon." },
          { t: 1.8, text: "That pull passes into the growth centre at the back of the heel bone." },
          { t: 3.2, text: "Training load builds, often during a growth spurt, and the heel takes impact over and over." },
          { t: 4.6, text: "A tight calf adds to the pull, and the growth plate cannot keep up with the load." },
          { t: 5.7, text: "There is no single injury: the heel becomes sore with sport and settles with rest." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "heelR",
        captions: [{ t: 0, text: "Zooming into the right heel, viewed from the inner (medial) side." }]
      },
      {
        type: "closeup", label: "Inside the heel", duration: 10, scene: "foot-sagittal",
        actions: [
          { t: 0, do: "highlight", target: "calcanealApophysis" },
          { t: 0.3, do: "label", target: "calcanealApophysis", text: "Calcaneal apophysis (growth plate)" },
          { t: 1.0, do: "arrow", at: "achillesInsertion", dir: "superior", label: "Achilles traction", size: "m" },
          { t: 1.2, do: "arrow", at: "heelPadCentre", dir: "superior", label: "Heel-strike force", size: "m" },
          { t: 1.5, do: "stretch", target: "achillesTendon", amount: 0.25, dur: 1.0 },
          { t: 2.9, do: "reset", target: "achillesTendon" },
          { t: 3.1, do: "unhighlight", target: "calcanealApophysis" },
          { t: 3.5, do: "stress", target: "calcanealApophysis", at: "calcanealTuberosity" },
          { t: 4.3, do: "inflame", target: "calcanealApophysis", amount: 0.5, dur: 1.2 },
          { t: 4.6, do: "pain", at: "calcanealTuberosity", hold: 3 },
          { t: 5.4, do: "label", target: "calcanealApophysis", text: "Irritated growth plate: traction and impact" },
          { t: 6.8, do: "camera", at: "calcanealTuberosity", zoom: 1.7, dur: 1.0 },
          { t: 9.0, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "In a child, the back of the heel bone has a separate growth centre, the apophysis, with a growth plate beneath it." },
          { t: 1.1, text: "The Achilles tendon pulls on the apophysis while the ground pushes up through the heel." },
          { t: 2.9, text: "In an adult the plate has fused, but in a growing child it is the weak link." },
          { t: 3.6, text: "With repeated overload, the growth plate becomes stressed and irritated." },
          { t: 4.7, text: "Pain is felt at the back and underside of the heel, and the squeeze test reproduces it." },
          { t: 6.9, text: "Scans may show a dense, fragmented apophysis, but pain-free active children have this too." },
          { t: 8.2, text: "Pain settles with load changes and heel support, and the problem resolves as the plate fuses." }
        ]
      },
      {
        type: "micro", label: "Growth plate", duration: 10, tissue: "physis",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.8, stage: "traction" }, { t: 3.6, stage: "microdamage" },
          { t: 5.4, stage: "inflammation" }, { t: 7.4, stage: "healing" }
        ],
        timeLabels: [{ t: 1.8, text: "Weeks of high load" }, { t: 3.6, text: "Weeks" }, { t: 5.4, text: "Weeks to months" }, { t: 7.4, text: "With load changes and maturity" }],
        captions: [
          { t: 0, text: "Healthy growth plate: orderly columns of cartilage cells between the apophysis and the heel bone." },
          { t: 1.8, text: "Traction: repeated tendon pull and impact load the growth plate." },
          { t: 3.6, text: "Microdamage: the load is more than the immature plate tolerates, and small areas are disrupted." },
          { t: 5.4, text: "Irritation: the area becomes painful and sensitive to load (schematic: true inflammation is uncertain)." },
          { t: 7.4, text: "Healing: load reduction lets the plate recover, and it closes as the child matures. There is no true separation." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL7" }
};
