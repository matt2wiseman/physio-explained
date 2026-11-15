export default {
  id: "physeal-fracture",
  name: "Physeal (growth plate) fracture — Salter–Harris",
  shortName: "Growth plate fracture",
  aka: ["growth plate fracture", "Salter-Harris fracture", "physeal fracture", "physeal injury", "epiphyseal plate fracture", "epiphyseal fracture", "growth plate injury", "SH fracture", "Salter-Harris type II fracture", "paediatric physeal fracture"],
  region: "general",
  tissues: ["physis", "bone"],
  onset: "acute",
  mechanismType: ["fall", "contact", "overuse"],
  populations: ["children and adolescents with open growth plates", "adolescent athletes around the growth spurt", "children who fall onto an outstretched hand", "young gymnasts and climbers (physeal stress injuries)"],
  sports: ["football", "soccer", "basketball", "gymnastics", "climbing", "skateboarding", "netball", "rugby", "trampolining"],
  urgency: "urgent",
  summary: "A fracture through or involving the growth plate in a skeletally immature child, classified Salter–Harris I to V. Most heal, but growth disturbance and angular deformity can follow, so follow-up matters.",
  keyFacts: [
    { label: "Typical recovery", value: "Union usually takes weeks (a common clinical convention); high-risk fractures need radiographic monitoring for at least 1 year for growth disturbance" },
    { label: "Return to sport", value: "Criteria-based, after union and orthopaedic clearance; contact and high-impact sport come last" },
    { label: "Key test", value: "Focal tenderness over an open growth plate after a fall or twist. Among radiograph-negative lateral ankle injuries in children aged 5–12, MRI found a distal fibular Salter-Harris I fracture in only 3.0%; most were ligament sprains" },
    { label: "Imaging", value: "Radiographs in at least two planes (oblique views can show a metaphyseal extension); CT or MRI for intra-articular fractures, occult injury and physeal bars" },
    { label: "Incidence", value: "In 1124 children with epiphyseal fractures, Salter-Harris II was most common (1002 of 1147 fractures); type V was rare (1 case); the distal radius was the commonest site" },
    { label: "Growth disturbance", value: "Premature physeal closure after distal tibial physeal fracture: 12.1%; distal ulna: 19.6% growth disturbance; physeal bars after Salter-Harris III or IV medial malleolus fractures: 30.4%" }
  ],
  overview: "A physeal fracture is an injury through or involving the growth plate (physis), the cartilage plate that produces longitudinal growth of a child's long bone. Many childhood injuries can be treated closed because of children's remarkable growth and remodelling potential, but some fracture patterns need special consideration to prevent long-term growth deformity [r1]. The Salter–Harris (SH) classification, types I to V, is the standard way to describe which parts of the growth plate's zonal structure and the adjacent bone are injured, and the risk of growth arrest and angular deformity depends on the type [r2,r3]. In a series of 1124 children with epiphyseal fractures, 1002 of 1147 fractures were type II, 105 type IV, 25 type III, 14 type I and 1 type V [r4].\n\nThe main concerns are an accurate diagnosis, a good reduction of displaced or intra-articular fractures, and surveillance for premature physeal closure, which may not show for months. Physeal bars developed in 30.4% of SH III and IV medial malleolus fractures, and were diagnosed at a mean of 8.4 months [r5]. Risk depends on the site, the fracture type and the initial displacement, not on the SH type alone [r6,r7,r8]. The physiotherapist's role is to recognise a possible physeal injury, refer promptly, support the family through immobilisation and follow-up, restore function after union, and return the child to sport safely.",

  epidemiology: {
    text: "In a retrospective series of 1124 children younger than 18 years with 1147 fresh epiphyseal fractures (789 boys and 335 girls), the number of fracture sites peaked in the adolescent group, and the commonest sites were the distal radius (460), the phalanges of the fingers (233) and the distal humerus (146). Falls were the most important cause (720 patients), followed by car accidents (68) and basketball falls (43). Eighty-eight patients presented more than 72 h after injury [r4]. In 259 children with ankle physeal fractures (mean age 12.3 years), the peak ages were 14 in boys and 12 in girls, 51% of fractures were sports-related, isolated distal tibial fractures were the most common (47.1%) and type II fractures made up 51% [r9]. Type II is the clinically most common type [r2]. Type V is rare, with a single case in the 1147 fractures above [r4]. Physeal stress injuries are an overuse variant: more than 200 cases of finger physeal stress injury have been documented in young climbers, mostly aged 13–15 years during the main pubertal growth spurt [r10], and a scoping review pooled 149 such injuries in 98 adolescent climbers with a mean age of 14 years [r11].",
    riskFactors: {
      intrinsic: [
        "Skeletal immaturity: the injury occurs only while the physis is open, and adolescents around the growth spurt are most affected [r4,r10]",
        "Male sex: 789 of 1124 children with epiphyseal fractures were boys [r4]",
        "Younger age or bone age is linked to premature physeal closure after medial malleolus and distal femoral fractures (under 11.5 years in one series) [r12,r8]. At the distal ulna the pattern was different: children with less than 2 years of growth remaining had more growth disturbance [r7]",
        "Fracture type and site: SH III and IV fractures carried more growth disturbance at the distal ulna [r7], and SH I and II distal femoral fractures carried a higher risk of premature closure [r8]",
        "Initial displacement: each extra millimetre of displacement carried a relative risk of 1.15 for premature closure at the distal tibia [r6]"
      ],
      extrinsic: [
        "Falls, including falls from play equipment, bikes and basketball [r4]",
        "Sport: about half of ankle physeal fractures were sports-related, and the injury peaked in autumn in one centre [r9]",
        "Repetitive loading of a growing physis, for example finger crimping in young climbers, which is modifiable through load management [r10]",
        "Delay to treatment: some children present more than 72 h after injury, and delayed or poorly reduced fractures are harder to manage [r4]"
      ]
    }
  },

  mechanism: {
    summary: "In a growing child the physis is the weakest part of the long bone, weaker than the ligaments and the adjacent bone, so forces that sprain a ligament or break the bone in an adult can instead split the growth plate (standard anatomical teaching). The commonest mechanism is a fall: the child trips, reaches out and lands on an outstretched hand, loading the distal radius physis in compression, bending and shear, which gives a Salter–Harris II fracture of the distal radius in most cases [r4]. At the ankle the pattern depends on the position of the foot at injury, for example supination and plantar flexion in 33.6% of ankle physeal fractures [r9,r13]. The fracture line follows the physis and then exits through the metaphysis (type II), the epiphysis to the joint (type III) or both (type IV) [r14,r2].",
    sequence: [
      "A child with open growth plates runs, jumps or plays and loses balance; falls are the most common cause of physeal fractures [r4].",
      "The child reaches out and lands on an outstretched hand (or the foot is forced into a twisted position at the ankle).",
      "The ground-reaction force passes up the limb and loads the physis in compression, bending and shear.",
      "The growth plate cartilage fails before the stronger bone and ligaments (standard anatomical teaching).",
      "The fracture line runs along the physis and, in a type II fracture, exits through the metaphysis, leaving a triangular metaphyseal fragment attached to the epiphysis (standard description).",
      "The epiphysis and metaphysis may be displaced, with periosteum sometimes trapped in the gap; a gap of more than 3 mm after reduction raises suspicion of entrapped periosteum and a higher risk of premature closure [r13].",
      "The child has pain, swelling and loss of function at the growth plate; growth disturbance may only appear months later [r5]."
    ],
    variants: [
      { name: "Distal radius (Salter–Harris II)", description: "The commonest site: 460 of 1147 epiphyseal fractures were at the distal radius, and 454 of those were type II [r4]." },
      { name: "Ankle (distal tibia and fibula)", description: "Common at any age but mostly in adolescents. SH I to IV patterns are seen, and displaced SH III and IV fractures need open reduction to restore joint congruity and minimise the risk of arrest [r13]." },
      { name: "Medial malleolus (McFarland, SH III and IV)", description: "High risk of physeal bar formation: premature closure occurred in 35.4% of 48 surgically treated children in one series [r12]; bars formed in 30.4% of 56 in another [r5]." },
      { name: "Distal femur", description: "Rare but severe; premature closure occurred in 48% of 54 displaced fractures after surgical stabilisation, and no consensus exists on treatment of SH IV and V injuries [r8,r15]." },
      { name: "Physeal stress injury (overuse)", description: "Repetitive loading of the growth plate in young climbers and gymnasts. Most climbing cases are SH III (Aitken II) fractures at the finger physes; diagnosis is usually by MRI [r10,r11]." },
      { name: "Type V crush injury", description: "Compression of the physis without an obvious fracture line. It is rare (one case in 1147 fractures) [r4], and is classically diagnosed late, when growth disturbance appears (classical teaching; not quantified in the sources read)." }
    ]
  },

  anatomy: {
    text: "A long bone grows in length at its physes, the cartilage growth plates between the epiphysis (the end of the bone, covered by articular cartilage) and the metaphysis (the flared end of the shaft). The physis has a zonal structure (resting, proliferative, hypertrophic and calcifying cartilage), and the Salter–Harris classification depends on which of these elements and adjacent bone structures are injured [r2]. The growth plate is weaker than the surrounding ligaments and bone (standard anatomical teaching), the periosteum is thick in a child and can become interposed in the fracture gap [r13], and the epiphysis depends on a blood supply that crosses or surrounds the plate (standard anatomy).",
    structures: [
      { name: "Physis (growth plate)", role: "Cartilage plate producing longitudinal growth; its injury can cause premature closure, a bony bar, a leg-length difference or angular deformity [r2,r5]" },
      { name: "Epiphysis and articular cartilage", role: "The end of the bone; involvement in SH III and IV fractures makes them intra-articular and needs anatomical reduction [r13]" },
      { name: "Metaphysis", role: "The flared shaft end next to the physis; a triangular metaphyseal fragment is the signature of a type II fracture (standard description)" },
      { name: "Periosteum", role: "Thick and strong in children; it can be interposed in the physeal gap, and a gap over 3 mm after reduction suggests entrapment and a higher risk of premature closure [r13]" },
      { name: "Ligaments and joint capsule", role: "Stronger than the physis in a child, so the growth plate often fails first (standard teaching). Most radiograph-negative lateral ankle injuries in children are ligament sprains, not physeal fractures [r16]" },
      { name: "Surrounding muscles", role: "Wasting and stiffness follow immobilisation; they can be restored after union (clinical reasoning)" }
    ]
  },

  pathophysiology: {
    tissueDamage: "In a physeal fracture the force splits the growth plate cartilage and, depending on the Salter–Harris type, the adjacent metaphysis and epiphysis [r2]. The risk of growth arrest and angular deformity depends on the classification, because it reflects how much of the plate and its zonal structure is damaged [r2]. SH IV fractures extend through the articular cartilage, epiphysis, physis and metaphysis and have a high rate of complications from premature partial closure of the physis; in 18 distal tibial medial malleolus SH IV fractures, 9 developed partial closure and needed operative treatment [r14]. Healing of the damaged plate can produce a bony bridge (a physeal bar) that tethers growth, and the bar is often not diagnosed for months [r5].\n\nSite, type and displacement all shape the risk. After distal tibial physeal fractures, premature closure occurred in 12.1% of 124 children, 67% of those in SH II fractures, with no arrest in SH I or Tillaux fractures, and each millimetre of initial displacement carried a relative risk of 1.15 [r6]. At the distal ulna, 19.6% of 56 children showed growth disturbance (14.3% complete arrest) [r7]. After surgically treated medial malleolus (McFarland) fractures, premature closure occurred in 35.4%, with age under 11.5 years and initial displacement over 4.5 mm as cut-offs [r12]. In displaced distal femoral fractures, three risk factors (younger bone age, SH type and displacement) gave odds ratios for premature closure of 39 with two and 96 with three factors [r8]. These are retrospective single-centre series, so the exact figures should be treated as indicative.",
    structures: [
      { name: "Physeal cartilage", effect: "Fractured, separated or crushed; may heal normally or form a bony bar that tethers growth [r2,r5]" },
      { name: "Metaphysis (type II fragment)", effect: "A triangular metaphyseal fragment stays attached to the epiphysis in type II fractures (standard description)" },
      { name: "Epiphysis and articular surface (types III and IV)", effect: "Intra-articular fracture line; displacement risks joint incongruity and arrest, so anatomical reduction is needed [r13,r14]" },
      { name: "Periosteum", effect: "May be entrapped in the fracture gap; gapping of more than 3 mm after reduction is a warning sign [r13]" }
    ],
    muscles: [
      { name: "Muscles around the injured segment", effect: "Guard and weaken because of pain and immobilisation, with stiffness of the neighbouring joints; formal physiotherapy after about 3 weeks of casting did not improve function or motion in a trial of paediatric supracondylar fractures [r17]." },
      { name: "Kinetic chain and the uninjured limb", effect: "Altered use and, if growth arrest causes a leg-length difference, compensatory movement (clinical reasoning)." }
    ],
    cellular: [
      { phase: "Injury and haematoma", timing: "Day 0 to about 1 week", description: "The plate fails, bleeding fills the gap, and the periosteum may be stripped (clinical teaching)." },
      { phase: "Inflammation and early repair", timing: "Days to 2–3 weeks", description: "Inflammatory cells clear the haematoma, and cartilage and woven bone start to bridge the fracture (general bone healing; timing is a clinical convention)." },
      { phase: "Fracture union", timing: "About 3–6 weeks", description: "The fracture unites; physeal fractures usually heal faster than adult fractures (clinical convention)." },
      { phase: "Remodelling", timing: "Months", description: "Children have an amazing remodelling potential, which is why many injuries can be treated closed [r1]." },
      { phase: "Possible bony bridge formation", timing: "Months (mean 8.4 months to diagnosis of a bar after SH III or IV medial malleolus fractures)", description: "If the damaged plate heals with a bony bar, growth is tethered; this was diagnosed at a mean of 8.4 months [r5]." }
    ],
    systems: [
      { system: "Skeletal growth", effect: "Premature closure can cause a leg-length discrepancy or angular deformity; 50% of children with premature closure after distal femoral fracture already had a leg-length difference of at least 1 cm when it was identified at 6 months [r8]." },
      { system: "Vascular and neurological", effect: "Severe displaced injuries can threaten the neurovascular supply or lead to compartment syndrome; a thorough clinical examination avoids potentially catastrophic complications [r13]." },
      { system: "Nervous system and pain", effect: "Pain is acute and focal; children may guard or refuse to use the limb." },
      { system: "Psychological and social", effect: "Children and families need clear information about the risk of growth disturbance and the need for long follow-up [r5]. Child abuse should be considered when the history does not fit the injury [r1]." },
      { system: "Endocrine and growth", effect: "Skeletal age and the growth remaining modify the effect of an arrest on final deformity, and the pubertal growth spurt is the period of greatest vulnerability [r7,r10]." }
    ]
  },

  grading: {
    system: "Salter–Harris classification (types I–V)",
    grades: [
      { grade: "Type I", description: "Fracture through the physis alone, often with little or no displacement and normal radiographs (classical description). In children aged 5–12 with radiograph-negative lateral ankle injuries, MRI-confirmed SH I fractures of the distal fibula were found in only 3.0% of 135 children; most had ligament sprains [r16].", prognosis: "Site-specific: no premature closure was seen in SH I fractures of the distal tibia in one series [r6], but SH I and II distal femoral fractures carried a higher risk [r8]" },
      { grade: "Type II", description: "Fracture through the physis that exits through the metaphysis, leaving a triangular metaphyseal fragment (classical description). The commonest type: 1002 of 1147 epiphyseal fractures [r4].", prognosis: "Usually good with reduction and immobilisation. At the distal tibia, 67% of premature closures occurred in SH II fractures [r6]; at the distal femur, SH II is a risk factor for closure [r8]" },
      { grade: "Type III", description: "Fracture through the physis and epiphysis into the joint, so it is intra-articular (classical description). Displaced fractures need anatomical reduction to restore joint congruity [r13].", prognosis: "Higher growth disturbance than other types at the distal ulna (50.0% for SH III and IV vs 11.1% for others) [r7]" },
      { grade: "Type IV", description: "Fracture extending through the articular cartilage, epiphysis, physis and metaphysis [r14].", prognosis: "High rate of complications from premature partial closure; 9 of 18 distal tibial medial malleolus fractures needed operative treatment for it [r14]" },
      { grade: "Type V", description: "Compression (crush) injury to the physis, without an obvious fracture line (classical description). It is rare (1 of 1147 epiphyseal fractures) [r4].", prognosis: "Classically diagnosed late, when growth disturbance appears; there is no consensus on treatment of SH IV and V distal femoral fractures [r15]" }
    ]
  },

  timeframes: {
    summary: "Union typically takes weeks (a common clinical convention), but the growth plate has to be watched for much longer. Premature closure was identified at the 6-month visit in a distal femoral series [r8], physeal bars after medial malleolus SH III and IV fractures were diagnosed at a mean of 8.4 months, and monitoring for at least 1 year is recommended for those high-risk fractures [r5].",
    healing: [
      { phase: "Reduction and immobilisation", startDay: 0, endDay: 35, description: "Cast, brace or fixation until union; non-displaced fractures can often be managed non-operatively [r13]; duration is a clinical convention that varies by site" },
      { phase: "Early rehabilitation", startDay: 21, endDay: 70, description: "Restore range, strength and function after immobilisation, only where deficits remain (clinical convention) [r17]" },
      { phase: "Return to sport", startDay: 56, endDay: 140, description: "Graded, criteria-based return after clearance (clinical convention)" },
      { phase: "Growth surveillance", startDay: 90, endDay: 400, description: "Follow-up radiographs for growth disturbance: 6-month review [r7,r8]; at least 1 year in high-risk fractures [r5]" }
    ],
    milestones: [
      { label: "Fracture union and immobilisation ends", day: 35, note: "Typical range 3–6 weeks (a common clinical convention); varies with site and type" },
      { label: "Six-month radiographic review for growth disturbance", day: 180, note: "Premature closure identified at 6 months [r8]; 6-month follow-up used in [r7]" },
      { label: "Mean time to diagnosis of a physeal bar (SH III and IV medial malleolus)", day: 255, note: "8.4 months [r5]" },
      { label: "End of minimum surveillance in high-risk fractures", day: 365, note: "At least 1 year of radiographic monitoring recommended [r5]" }
    ],
    returnToSport: "Criteria-based, after union and clearance from the treating orthopaedic team, then a graded return that restores range, strength and control. For minor injuries and sprains of the ankle, children managed with a removable brace and self-regulated return to activity had comparable recovery whether MRI showed a fracture or a sprain [r16]. Climbers with finger growth plate injuries returned to sport in 2 weeks to 6 months, and 91% returned [r11]. Growth surveillance continues after return."
  },

  clinicalPresentation: {
    symptoms: [
      "Pain at or near a joint after a fall, twist or direct blow in a child or adolescent with open growth plates [r4]",
      "Inability or unwillingness to use the limb or take weight; younger children may simply refuse to move it",
      "Swelling and, in displaced fractures, visible deformity or loss of normal contour",
      "Gradual onset of pain with climbing, gymnastics or throwing in physeal stress injuries, with tenderness over the growth plate [r10]",
      "Later signs of growth disturbance: an angular deformity, a leg-length difference, or stiffness at the joint [r8,r12]"
    ],
    signs: [
      "Focal tenderness over the physis (the growth plate), the key clinical sign, even when the radiograph is normal [r13]",
      "Swelling, bruising and reduced joint movement, with guarding",
      "Deformity or abnormal angulation in displaced fractures",
      "Neurovascular signs: pulses, capillary refill, sensation and movement distal to the injury, which must be checked first [r13]",
      "Tense, painful compartments in severe injuries, which suggest compartment syndrome [r13]"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism and age: a fall onto an outstretched hand, a twist, a direct blow or repetitive loading; skeletal maturity and growth spurt timing [r4,r10]",
      "Time since injury: some children present more than 72 h late [r4]",
      "Function: ability to weight-bear or use the hand, and whether pain is progressing or settling",
      "Sport and training: gymnastics, climbing (crimp grip) or throwing load that suggests a physeal stress injury [r10,r11]",
      "Previous fractures, family history of bone disease, and systemic features (fever, night pain) that suggest another cause",
      "Safeguarding: whether the history fits the injury and the child's age; consider child abuse if not [r1]",
      "Child and parent expectations, and their anxiety about growth (clinical practice)"
    ],
    observation: [
      "Deformity, swelling, bruising and skin integrity (open wound or tenting)",
      "Limb posture and how the child holds and guards the limb",
      "Gait and weight-bearing in lower-limb injuries",
      "Later, in follow-up: limb alignment, leg-length asymmetry and angular deformity [r8]"
    ],
    palpation: [
      "Focal tenderness over the physis (e.g. distal radius, distal fibula, medial malleolus), compared with the other side [r13]",
      "Neighbouring ligaments, which are the more common source of pain in radiograph-negative ankle injuries [r16]",
      "Compartment feel (soft and compressible versus tense) (clinical reasoning)"
    ],
    rangeOfMotion: [
      "Active and passive motion of the adjacent joints, limited by pain and swelling in the acute phase",
      "After union: compare with the other side; limited ankle range was found in 11 of 48 children after medial malleolus fractures [r12]"
    ],
    strength: [
      "Not tested in the acute phase of a suspected physeal fracture",
      "After clearance: grip strength or limb strength compared with the other side, and single-leg heel-raise capacity for ankle injuries (clinical convention)"
    ],
    neuro: [
      "Sensation, power and distal pulses and capillary refill, before and after any manipulation; document findings [r13]",
      "Screen for evolving compartment syndrome (pain out of proportion, pain on passive stretch, tense compartment) (clinical convention) [r13]"
    ],
    functional: [
      "Weight-bearing and gait in lower-limb injuries; use of the hand for daily tasks in upper-limb injuries",
      "Activity Scale for Kids (ASK) as a function measure in paediatric injury research [r16,r17]",
      "After clearance: hop, balance and jump-landing tests, and sport-specific skills"
    ],
    specialTests: [
      { name: "Physeal palpation", purpose: "Identify focal tenderness over the growth plate that suggests a physeal injury", procedure: "Palpate the physis of the injured bone gently, comparing it with the other side and with the adjacent ligaments.", positive: "Focal tenderness over the plate raises suspicion of a physeal injury. No accuracy figures were identified in the sources reviewed.", refs: [] },
      { name: "Weight-bearing and use-of-limb test", purpose: "Screen for a significant fracture in a child who cannot or will not use the limb", procedure: "Ask the child to take weight or use the hand for simple tasks, if safe, and note pain and guarding.", positive: "Inability to weight-bear or use the limb needs imaging. No accuracy figures were identified in the sources reviewed.", refs: [] },
      { name: "Neurovascular examination", purpose: "Exclude vascular injury and compartment syndrome", procedure: "Check distal pulses, capillary refill, sensation and movement, and palpate the compartments.", positive: "Absent pulses, neurological change or a tense, painful compartment need urgent medical review. No accuracy figures were identified in the sources reviewed.", refs: [] }
    ],
    clinicalRules: [
      { name: "No validated physio-level rule for physeal fracture", description: "Diagnosis rests on history, focal physeal tenderness and radiographs. In radiograph-negative lateral ankle injuries in children aged 5–12, MRI-confirmed SH I fractures of the distal fibula were uncommon (4 of 135, 3.0%), and 108 (80.0%) had ligament injuries. Children managed with a removable brace and allowed to return to activity as tolerated had comparable recovery with or without an MRI-detected fracture [r16]. Follow local paediatric protocols for presumed physeal fracture." }
    ],
    outcomeMeasures: [
      { name: "Activity Scale for Kids (ASK)", use: "A child-reported measure of function used after ankle and elbow injuries in children [r16,r17]" },
      { name: "Pain rating (numeric or faces scale)", use: "Track pain at rest, on movement and with palpation (clinical practice)" },
      { name: "Range of motion and limb-length comparison", use: "Detect stiffness and leg-length discrepancy during follow-up; a difference of at least 1 cm was already present in half of children with premature closure at 6 months [r8]" },
      { name: "Alignment and growth-line review on follow-up radiographs", use: "Symmetric growth was judged by Harris growth lines compared with the uninjured side [r6]" },
      { name: "Return-to-sport checklist", use: "Pain-free range, strength and hop tests relative to the other side, set with the orthopaedic team (clinical convention)" }
    ],
    imaging: [
      { modality: "Plain radiographs (at least two planes, oblique if needed)", indication: "First-line imaging of any suspected physeal injury; compare with the other side if uncertain", findings: "Physeal widening or a metaphyseal fragment; extension of a medial malleolus fracture into the metaphysis can be visible only on oblique views [r14]" },
      { modality: "MRI", indication: "Radiograph-negative injuries with persistent focal tenderness, suspected physeal stress injury, or suspected bar", findings: "Occult physeal fractures and ligament injuries; in 135 children with radiograph-negative lateral ankle injuries, only 4 (3.0%) had a fibular SH I fracture [r16]. MRI is usually the diagnostic study in young climbers with physeal stress injuries [r10]" },
      { modality: "CT", indication: "Intra-articular fractures, planning of surgery and mapping of a physeal bar", findings: "Fracture displacement and the area of a bar; CT data were used to map the area of a bar in a series of bar resections [r18]" },
      { modality: "Follow-up radiographs", indication: "At about 6 months in most displaced or high-risk fractures, and at least 1 year for SH III and IV medial malleolus fractures", findings: "Premature closure, a physeal bar, angulation or leg-length discrepancy [r5,r8]" }
    ]
  },

  differentials: [
    { name: "Lateral ankle sprain", id: "lateral-ankle-sprain", distinguishing: "Most radiograph-negative lateral ankle injuries in children are ligament sprains, sometimes with a small avulsion fracture; tenderness is over the ligament rather than the physis [r16]." },
    { name: "Paediatric supracondylar humerus fracture", id: "supracondylar-fracture", distinguishing: "A distal humerus fracture above the physis after a fall on the elbow or hand, with a typical Gartland pattern and neurovascular risk; image the elbow." },
    { name: "Distal radius fracture (torus or other pattern)", id: "distal-radius-fracture", distinguishing: "Metaphyseal buckle or greenstick fractures do not involve the plate; radiographs distinguish." },
    { name: "Apophysitis (traction injury)", id: "osgood-schlatter", distinguishing: "Gradual-onset load-related pain at an apophysis (for example the tibial tubercle) without a single injury; a chronic traction injury, not a fracture." },
    { name: "Slipped capital femoral epiphysis", id: "scfe", distinguishing: "Hip, thigh or knee pain with a limp in an adolescent, often with obesity and limited internal rotation; a physeal injury of the proximal femur that needs urgent imaging." },
    { name: "Little League shoulder or elbow (physeal stress)", id: "little-league-shoulder", distinguishing: "Throwing-related pain at the proximal humeral physis or medial epicondyle in adolescents; overuse-related physeal injury." },
    { name: "Osteomyelitis, septic arthritis or tumour", distinguishing: "Fever, night pain, systemic upset or a lesion on imaging; arrange urgent medical assessment (clinical convention)." },
    { name: "Non-accidental injury", distinguishing: "Fractures that do not fit the history or the child's developmental stage, multiple injuries or delay in presentation; follow child-protection procedures [r1]." }
  ],
  redFlags: [
    "Absent or weak distal pulses, pallor, numbness, or a cold or blue limb after injury: suspect vascular injury and arrange emergency assessment; check neurovascular status before and after any manipulation [r13].",
    "Severe pain out of proportion, pain on passive stretch or a tense compartment after a physeal injury: suspect compartment syndrome and send to the emergency department [r13].",
    "Open wound over a suspected fracture, marked deformity or a displaced intra-articular (SH III or IV) fracture: do not mobilise; refer urgently for orthopaedic assessment, because displaced SH III and IV fractures need open reduction to protect the joint surface and the plate [r13].",
    "A history that does not fit the injury or the child's age, multiple injuries or delayed presentation: consider child abuse and follow child-protection procedures [r1].",
    "Focal tenderness over a physis in a child with a normal radiograph, or a delayed presentation: do not dismiss; treat as a possible physeal injury and refer for imaging or paediatric orthopaedic advice, following local protocols [r16,r4].",
    "New angular deformity, a limb-length difference, stiffness or increasing pain weeks to months after a physeal fracture: suspect premature physeal closure and arrange radiographs and orthopaedic review [r5,r8]."
  ],

  management: {
    principles: "Management is led by paediatric orthopaedic specialists, with physiotherapy supporting recovery. Many injuries can be treated closed because of children's remodelling potential, but fracture patterns that threaten growth need special care [r1]. Non-displaced physeal fractures of the distal tibia and fibula can be safely treated non-operatively; displaced fractures should have a gentle reduction under appropriate anaesthesia, with multiple attempts avoided; and displaced SH III and IV fractures need open reduction to maintain joint congruity and minimise the risk of arrest [r13]. After healing, the key task is growth surveillance: premature closure can be missed in the first months, so radiographic follow-up for 6 months to at least 1 year is recommended in high-risk fractures [r8,r5]. The evidence is mostly retrospective case series, and there are no randomised trials of treatments in physeal fractures in the sources reviewed.",
    medical: [
      { name: "Immobilisation (cast or brace) for non-displaced fractures", description: "Non-displaced physeal fractures of the distal tibia and fibula can be safely treated non-operatively [r13]. Radiograph-negative lateral ankle injuries in children aged 5–12 were managed with a removable brace and activities as tolerated, with comparable recovery whether MRI showed a fibular fracture or a sprain [r16].", evidence: "limited", recommendation: "recommended", refs: ["r13", "r16"] },
      { name: "Gentle closed reduction under adequate anaesthesia (displaced fractures)", description: "Displaced fractures should be gently reduced with appropriate anaesthesia, and multiple reduction attempts should be avoided. Gapping of the physis of more than 3 mm after reduction should raise suspicion of entrapped periosteum and a higher risk of premature closure [r13].", evidence: "limited", recommendation: "recommended", refs: ["r13"] },
      { name: "Open reduction and fixation (displaced SH III and IV, or failed closed reduction)", description: "Open reduction of displaced SH III and IV fractures is critical to maintain joint congruity and minimise the risk of arrest [r13]. Initial displacement and physeal involvement predict the need for surgery and bar formation in medial malleolus fractures [r5].", evidence: "limited", recommendation: "recommended", refs: ["r13", "r5"] },
      { name: "Radiographic growth surveillance", description: "Follow-up radiographs at about 6 months in distal femoral fractures [r8], at least 6 months in distal ulna fractures [r7], and at least 1 year in SH III and IV medial malleolus fractures [r5], to find premature closure early enough to intervene.", evidence: "limited", recommendation: "recommended", refs: ["r8", "r7", "r5"] },
      { name: "Surgery for physeal bar or angular deformity (bar resection, hemiepiphysiodesis, osteotomy)", description: "In 19 children, bar resection with or without hemiepiphysiodesis improved angular deformity by more than 5° in 63.2%, but leg-length discrepancy increased by more than 5 mm in 36.8% [r18]. In 27 children, resection with guided growth gave a mean correction of 7.6° versus −0.77° with resection alone (P = 0.01) [r19]. Eight of 17 children (47%) with bars after medial malleolus fractures needed at least one secondary operation [r5]. Retrospective case series only.", evidence: "limited", recommendation: "consider", refs: ["r18", "r19", "r5"] },
      { name: "Repeated forceful reduction attempts", description: "Multiple reduction attempts should be avoided, because they may damage the plate and raise the risk of premature closure [r13].", evidence: "limited", recommendation: "not-recommended", refs: ["r13"] },
      { name: "Safeguarding assessment", description: "Consider child abuse when the history does not fit the injury, and follow local child-protection procedures [r1].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r1"] }
    ],
    physio: [
      { name: "Education and growth-surveillance counselling", description: "Explain the injury, the usual good outcome and the small but real risk of growth disturbance, and why follow-up radiographs matter, so families attend [r5,r8].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r5", "r8"] },
      { name: "Keep the rest of the body active during immobilisation", description: "Active range and strength of the uninjured joints, core work and lower-body or upper-body training that does not load the injury, to preserve fitness and the child's confidence (clinical practice).", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Targeted rehabilitation after union where deficits remain", description: "Restore range, strength and balance with a graded home program after clearance. A randomised trial of 61 children after supracondylar fracture found that routine physiotherapy did not improve function or motion after about 3 weeks of casting [r17]; so reserve formal physiotherapy for children with persisting deficits or longer immobilisation, or for athletes (clinical reasoning).", evidence: "limited", recommendation: "consider", refs: ["r17"] },
      { name: "Graded return to activity (brace and self-regulated for minor ankle injuries)", description: "Children aged 5–12 with radiograph-negative ankle injuries who returned to activity as tolerated in a removable brace had recovery comparable with those with MRI-detected fractures [r16]. For confirmed physeal fractures, return is staged and cleared by the orthopaedic team.", evidence: "limited", recommendation: "consider", refs: ["r16"] },
      { name: "Load management and technique review for physeal stress injuries", description: "In young climbers, early diagnosis and education of athlete, coach and parents are crucial; frequent use of the crimp grip increased the risk, and prevention targets this and overall load management [r10]. Return took 2 weeks to 6 months, and 91% returned [r11].", evidence: "limited", recommendation: "recommended", refs: ["r10", "r11"] },
      { name: "Routine formal physiotherapy for every child after a short cast period", description: "Routine physiotherapy after a short period of casting gave no benefit in function or motion, and ASK-p scores were worse in the physiotherapy group at 9 and 15 weeks, in children with supracondylar fractures [r17]. The trial was not in physeal fractures.", evidence: "limited", recommendation: "not-recommended", refs: ["r17"] },
      { name: "Loading or forcefully stretching an un-united physeal fracture", description: "Do not load, stretch or mobilise the injured segment before union and clearance, because of the risk of displacement and growth disturbance (clinical reasoning).", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] }
    ],
    education: [
      "A growth plate injury is a break through the area of the bone where growth happens. Most heal well with the right treatment.",
      "The cast or brace and the follow-up X-rays are both important. Some growth problems only show months later.",
      "Tell us straight away about new pain, a change in the shape of the limb, or one leg or arm that looks shorter.",
      "Keep fit while you heal with exercises that do not load the injured area, and return to sport in stages once you are cleared.",
      "If you climb or train hard in gymnastics, tell us about your training: overload of the growth plate is preventable [r10]."
    ]
  },

  rehab: {
    overview: "Rehabilitation follows medical management and is criteria-based, tailored to the site (upper or lower limb), the fracture type and the surgeon's clearance. Many children recover without formal therapy: routine physiotherapy after a short cast period showed no benefit in one randomised trial of supracondylar fractures [r17]. So physiotherapy is targeted at children with persisting deficits, longer immobilisation, high-level sport or fractures of high-risk sites. The stages are: protect and stay active; restore range and early loading; build strength and control; and return to sport with continued growth surveillance [r5]. Timeframes are clinical conventions, and the doses are typical clinical ranges, not trial-based prescriptions.",
    stages: [
      {
        name: "Protect & stay active",
        timeframe: "Weeks 0–5 (in a cast, brace or after fixation)",
        goals: ["Protect the fracture and follow the orthopaedic plan", "Keep the rest of the body strong and active", "Educate child and family about growth surveillance", "Reduce swelling and maintain joint range outside the cast"],
        precautions: ["No loading, stretching or mobilisation of the injured segment before clearance (clinical reasoning)", "Check neurovascular status if pain, swelling or numbness increases [r13]", "Report any new deformity or pain"],
        exercises: [
          { name: "Active range of the free joints (fingers, elbow, shoulder or toes, knee, hip)", dosage: "10–15 repetitions, 3–4 times a day, within comfort", cues: "Move the joints the cast does not cover to prevent stiffness" },
          { name: "Core (dead bug)", dosage: "3 × 8–10, daily", cues: "Press the low back into the mat", figure: { pose: "ex-dead-bug", view: "lateral", props: ["mat"] } },
          { name: "Lower-body strength if the arm is injured (bridge, squat)", dosage: "3 × 10–12, 3 times a week", cues: "Keep the injured arm protected", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Upper-body strength if the leg is injured (band row)", dosage: "3 × 10–12, 3 times a week", cues: "Sit or stand with the injured leg supported", figure: { pose: "ex-row", view: "lateral" } },
          { name: "Swelling control: elevation and active muscle pumping", dosage: "Several times a day as advised", cues: "Gentle pumping of the toes or fingers" }
        ],
        progressionCriteria: ["Fracture united on imaging and the orthopaedic team has cleared loading", "Swelling settling and pain at or below 3/10 in the cast-free joints", "Family understand the follow-up plan"]
      },
      {
        name: "Restore range & early loading",
        timeframe: "Weeks 4–8 (after cast removal)",
        goals: ["Restore active and passive range of the injured joint", "Start protected weight-bearing or light use", "Reduce stiffness and swelling", "Rebuild confidence"],
        precautions: ["Increase load only with orthopaedic clearance", "Avoid forced passive stretching; use active movement", "Stop and review if pain or swelling increases the next day"],
        exercises: [
          { name: "Active range of motion (wrist or ankle, e.g. ankle alphabet)", dosage: "2–3 sets of 10 in each direction, 3 times a day", cues: "Smooth, comfortable movement through the full range", figure: { pose: "ex-ankle-alphabet", view: "lateral" } },
          { name: "Double-leg calf raise (lower limb)", dosage: "3 × 10–12, daily", cues: "Even weight through both feet", figure: { pose: "ex-calf-raise", view: "lateral" } },
          { name: "Wrist extension, light weight (upper limb)", dosage: "2 × 10–15, daily, light load", cues: "Forearm supported; stop if painful", figure: { pose: "ex-wrist-extension", view: "lateral" } },
          { name: "Single-leg balance (lower limb)", dosage: "3 × 20–30 s each side, daily", cues: "Eyes forward and a level pelvis", figure: { pose: "ex-single-leg-balance", view: "anterior" } },
          { name: "Grip squeeze (upper limb)", dosage: "2 × 10, daily, light resistance", cues: "Gentle squeeze and slow release", figure: { pose: "ex-grip", view: "lateral" } }
        ],
        progressionCriteria: ["Range within about 80% of the other side (clinical convention)", "Walks or uses the limb for daily tasks without a limp or guarding", "Pain at or below 2/10 with daily activity", "No new swelling or deformity"]
      },
      {
        name: "Strength & control",
        timeframe: "Weeks 8–12",
        goals: ["Restore strength and endurance relative to the other side", "Improve balance and movement quality", "Introduce impact and sport drills in a graded way", "Keep growth surveillance appointments"],
        precautions: ["Increase impact only if the previous session settled by the next day", "Avoid contact and high-impact work until cleared", "Report any new pain over the growth plate"],
        exercises: [
          { name: "Bodyweight squat", dosage: "3 × 10–12, 3 times a week", cues: "Whole foot down, knees over the toes", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Step-up", dosage: "3 × 8–10 each leg, 3 times a week", cues: "Control the pelvis and the knee", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Single-leg calf raise", dosage: "3 × 8–12, every second day", cues: "Full range with a pause at the top", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Plank (forearm)", dosage: "3 × 20–30 s, 3 times a week", cues: "Straight line from head to heels; light load on the wrist", figure: { pose: "ex-plank", view: "lateral", props: ["mat"] } },
          { name: "Push-up from the wall or knees (upper limb)", dosage: "3 × 8–10, 3 times a week, progress when pain-free", cues: "Keep the wrist comfortable; stop if painful", figure: { pose: "ex-press-up", view: "lateral" } }
        ],
        progressionCriteria: ["Strength within about 90% of the other side (clinical convention)", "Single-leg stance and squat controlled with no pain", "No tenderness over the growth plate and no swelling after sessions", "Orthopaedic clearance to start impact loading"]
      },
      {
        name: "Return to sport",
        timeframe: "Weeks 12–20 (criteria-based, longer for high-risk fractures)",
        goals: ["Return to sport-specific skills, jumping and cutting in stages", "Return to full training and competition", "Maintain strength and load management", "Complete growth surveillance"],
        precautions: ["Return only with clearance from the treating team", "Contact and collision sport comes last", "Keep appointments for follow-up radiographs even if the child feels well [r5]"],
        exercises: [
          { name: "Single-leg hop in place, then forward", dosage: "3 × 5–8 each leg, twice a week", cues: "Soft landing; hold the landing for 2 s", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Jump and soft landing", dosage: "3 × 5, twice a week, increasing height gradually", cues: "Hips and knees bent on landing", figure: { pose: "jump-land", view: "lateral" } },
          { name: "Change-of-direction drills", dosage: "2 sessions a week, planned first then reactive", cues: "Land under control, knee over the foot", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Sport-specific skill progression (climbing, gymnastics, ball sports)", dosage: "Graded exposure over 2–4 weeks, agreed with the coach", cues: "Avoid the crimp grip or heavy wrist loading until cleared [r10]" },
          { name: "Graded team training", dosage: "Partial then full over 2–3 weeks", cues: "Monitor pain, swelling and load; share the plan with the coach" }
        ],
        progressionCriteria: ["Full training for at least 2 weeks without pain or swelling", "Hop and strength tests near the other side and pain-free (clinical convention)", "Growth surveillance plan in place and imaging reviewed by the orthopaedic team", "Child, family, coach and clinicians agree on the return"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated return-to-sport (RTS) criteria exist for physeal fractures; the criteria below reflect clinical practice and the orthopaedic plan",
      "Union on imaging and clearance from the treating orthopaedic team, with the growth-surveillance plan agreed [r5]",
      "No tenderness over the growth plate, no swelling after activity and pain-free range of motion (clinical convention)",
      "Strength and hop or skill tests near the other side (about 90%) (clinical convention)",
      "Graded exposure to sport-specific loading, with contact and collision sport last",
      "For physeal stress injuries, a modified training load and technique (for example reduced crimp-grip use) [r10]"
    ],
    tests: ["Palpation of the physis and pain rating with loading", "Range of motion compared with the other side", "Strength (grip or limb) and single-leg hop or jump tests compared with the other side", "Sport-specific skill tests", "Review of the latest follow-up radiographs by the orthopaedic team [r5]"]
  },
  prognosis: "Most physeal fractures heal well, because children have an amazing remodelling potential [r1]. Growth disturbance is the main risk and depends on the site, type and displacement. In one series of distal tibial physeal fractures, premature closure occurred in 12.1% [r6]; 19.6% of distal ulna fractures had growth disturbance, 14.3% complete arrest [r7]; 35.4% of surgically treated medial malleolus fractures developed premature closure [r12], and physeal bars formed in 30.4% of SH III and IV medial malleolus fractures, with 47% of those children needing at least one more operation [r5]; and 48% of displaced distal femoral fractures closed prematurely, and half of those with premature closure already had a leg-length difference of at least 1 cm by 6 months [r8]. The evidence is retrospective and single-centre, so risk estimates vary. Surgery for bars gives mixed results: guided growth with resection achieved a larger correction than resection alone (7.6° vs −0.77°) [r19]. Type V crush injuries are rare and are classically diagnosed late [r4]. Many children with a physeal stress injury (for example climbers) return to sport: 91% in a scoping review [r11].",
  prevention: [
    "Promote safe play and appropriate protective measures in children's sport and play, since falls cause most physeal fractures [r4].",
    "Manage training load in young climbers and gymnasts, and limit repetitive high-stress positions such as the crimp grip, to prevent physeal stress injuries [r10].",
    "Educate athletes, coaches and parents about early symptoms (focal pain over a growth plate) so that early diagnosis avoids chronic injury [r10].",
    "After any physeal fracture, attend the full growth-surveillance schedule: at least 6 months to 1 year for higher-risk fractures [r8,r5].",
    "Aim for an accurate reduction in displaced fractures, with a minimum of reduction attempts, to reduce the risk of premature closure [r13]."
  ],
  clinicalPearls: [
    "Open physes plus focal tenderness is a physeal injury until shown otherwise. But keep perspective for the radiograph-negative lateral ankle: in children aged 5–12 only 3.0% had an MRI-confirmed fibular SH I fracture, and most had sprains [r16].",
    "Growth disturbance is a late complication. Bars after SH III and IV medial malleolus fractures were diagnosed at a mean of 8.4 months, so the child needs surveillance for at least 1 year [r5].",
    "Site and displacement matter as much as the SH number: each millimetre of initial displacement carried a relative risk of 1.15 at the distal tibia, and a gap above 3 mm after reduction suggests entrapped periosteum [r6,r13].",
    "A type II fracture is the commonest (1002 of 1147) and the one with the typical metaphyseal fragment. Type V (crush) is rare and often found late, when the child develops growth arrest or an angular deformity [r4].",
    "In adolescent climbers and gymnasts with finger or wrist pain, think of a physeal stress injury; MRI is usually diagnostic, and early diagnosis and load management give the best outcome [r10,r11].",
    "Do not over-treat. A randomised trial found no benefit from routine physiotherapy after short casting of supracondylar fractures; target physiotherapy to children with deficits [r17]."
  ],
  related: ["supracondylar-fracture", "distal-radius-fracture", "ankle-fracture", "lateral-ankle-sprain", "scfe", "osgood-schlatter"],

  references: [
    { id: "r1", citation: "Gladden PB, Wilson CH, Suk M. Pediatric orthopedic trauma: principles of management. Semin Pediatr Surg. 2004;13(2):119-25.", pmid: "15362282", doi: "10.1053/j.sempedsurg.2004.01.008", type: "narrative-review", year: 2004 },
    { id: "r2", citation: "Sun H, Kuhn L. A scoping review of animal models of growth plate injury organized by Salter-Harris classification. Bone. 2026;209:117899.", pmid: "41997338", doi: "10.1016/j.bone.2026.117899", type: "basic-science", year: 2026 },
    { id: "r3", citation: "Cepela DJ, Tartaglione JP, Dooley TP, et al. Classifications in brief: Salter-Harris classification of pediatric physeal fractures. Clin Orthop Relat Res. 2016;474(11):2531-7.", pmid: "27206505", doi: "10.1007/s11999-016-4891-3", type: "narrative-review", year: 2016 },
    { id: "r4", citation: "Deng H, Zhao Z, Xiong Z, et al. Clinical characteristics of 1124 children with epiphyseal fractures. BMC Musculoskelet Disord. 2023;24:598.", pmid: "37479999", doi: "10.1186/s12891-023-06728-9", type: "cross-sectional", year: 2023 },
    { id: "r5", citation: "Roth OS, Gupta A, Adebayo T, et al. Risk factors and surgical sequelae of physeal arrest in pediatric Salter-Harris III and IV medial malleolus fractures. J Pediatr Orthop. 2026;46(7):e618-25.", pmid: "41230683", doi: "10.1097/BPO.0000000000003160", type: "cohort", year: 2026 },
    { id: "r6", citation: "Leary JT, Handling M, Talerico M, et al. Physeal fractures of the distal tibia: predictive factors of premature physeal closure and growth arrest. J Pediatr Orthop. 2009;29(4):356-61.", pmid: "19461377", doi: "10.1097/BPO.0b013e3181a6bfe8", type: "cohort", year: 2009 },
    { id: "r7", citation: "Lee J, Värk PR, Mendenhall SD, et al. Physeal fractures of the distal ulna: incidence and risk factors for premature growth arrest. J Pediatr Orthop. 2024;44(3):151-6.", pmid: "38062866", doi: "10.1097/BPO.0000000000002585", type: "cohort", year: 2024 },
    { id: "r8", citation: "Hulbert MA, Chun L, Bryan TP, et al. Factors associated with premature physeal closure after distal femur physeal fracture. J Pediatr Orthop. 2025;45(5):e413-7.", pmid: "40019337", doi: "10.1097/BPO.0000000000002911", type: "cohort", year: 2025 },
    { id: "r9", citation: "Valisena S, De Marco G, Vazquez O, et al. Demographic distribution and injury patterns of ankle physeal fractures in children: a retrospective cohort study. Swiss Med Wkly. 2025;155:4265.", pmid: "40450739", doi: "10.57187/s.4265", type: "cohort", year: 2025 },
    { id: "r10", citation: "Schöffl V, Moser O, Küpper T. [Stress fractures of the growth plates in the fingers of adolescent rock climbers]. Unfallchirurgie (Heidelb). 2024;127(11):824-31.", pmid: "39311912", doi: "10.1007/s00113-024-01482-6", type: "narrative-review", year: 2024 },
    { id: "r11", citation: "Jaini A, Lu J, Smuek A, et al. Finger growth plate injuries in adolescent sport climbers: a scoping review. PM R. 2026;18(7):803-8.", pmid: "41424400", doi: "10.1002/pmrj.70068", type: "systematic-review", year: 2026 },
    { id: "r12", citation: "Pan Y, Pan Y, Dai T, et al. Risk factors for the development of premature physeal closure after a McFarland fracture in children. Int Orthop. 2025;49(3):661-9.", pmid: "39907773", doi: "10.1007/s00264-025-06428-0", type: "cohort", year: 2025 },
    { id: "r13", citation: "Podeszwa DA, Mubarak SJ. Physeal fractures of the distal tibia and fibula (Salter-Harris Type I, II, III, and IV fractures). J Pediatr Orthop. 2012;32 Suppl 1:S62-8.", pmid: "22588106", doi: "10.1097/BPO.0b013e318254c7e5", type: "narrative-review", year: 2012 },
    { id: "r14", citation: "Cass JR, Peterson HA. Salter-Harris Type-IV injuries of the distal tibial epiphyseal growth plate, with emphasis on those involving the medial malleolus. J Bone Joint Surg Am. 1983;65(8):1059-70.", pmid: "6630250", type: "other", year: 1983 },
    { id: "r15", citation: "Shu W, Ou Z, Feng Q, et al. Minimally invasive percutaneous leverage reduction in the treatment of pediatric Salter-Harris IV and V distal femoral physeal fractures. Orthop Surg. 2024;16(1):269-75.", pmid: "37853920", doi: "10.1111/os.13926", type: "cohort", year: 2024 },
    { id: "r16", citation: "Boutis K, Plint A, Stimec J, et al. Radiograph-negative lateral ankle injuries in children: occult growth plate fracture or sprain? JAMA Pediatr. 2016;170(1):e154114.", pmid: "26747077", doi: "10.1001/jamapediatrics.2015.4114", type: "cohort", year: 2016 },
    { id: "r17", citation: "Schmale GA, Mazor S, Mercer LD, et al. Lack of benefit of physical therapy on function following supracondylar humeral fracture: a randomized controlled trial. J Bone Joint Surg Am. 2014;96(11):944-50.", pmid: "24897743", doi: "10.2106/JBJS.L.01696", type: "rct", year: 2014 },
    { id: "r18", citation: "Xiao H, Li M, Zhu G, et al. The effectiveness of physeal bar resection with or without hemi-epiphysiodesis to treat partial growth arrest. BMC Musculoskelet Disord. 2023;24:77.", pmid: "36710347", doi: "10.1186/s12891-023-06167-6", type: "cohort", year: 2023 },
    { id: "r19", citation: "Alhassan MS, Park KB, Kim HW, et al. The efficacy of physeal bar resection with guided growth in the treatment of physeal arrest with angular limb deformity. Sci Rep. 2024;14:14052.", pmid: "38890468", doi: "10.1038/s41598-024-64875-y", type: "cohort", year: 2024 }
  ],

  animation: {
    title: "How a growth plate (Salter–Harris) fracture happens",
    phases: [
      {
        type: "moi", label: "Fall", duration: 6, view: "lateral", environment: "pitch",
        actors: [{ id: "child", kit: "child" }],
        keyframes: [
          { t: 0, pose: "run-midstance", root: { x: -50 } },
          { t: 1.1, pose: "trip", root: { x: -25 } },
          { t: 2.3, pose: "foosh", joints: { wristR: 70 }, root: { x: -10 }, ease: "in" },
          { t: 3.1, pose: "foosh", joints: { wristR: 80 }, root: { x: -8 } },
          { t: 5.5, pose: "foosh", joints: { wristR: 80 }, root: { x: -8 } }
        ],
        forces: [
          { t: [2.4, 4.0], at: "wristR", dir: "up", label: "Ground force through the outstretched hand", size: "l" }
        ],
        highlights: [{ t: [2.6, 6], at: "wristR" }],
        impacts: [{ t: 2.8, at: "wristR" }],
        slowmo: [{ t: [2.1, 3.3], rate: 0.3 }],
        captions: [
          { t: 0, text: "A child running in play trips and starts to fall." },
          { t: 1.2, text: "Children reach out to protect themselves when they fall." },
          { t: 2.4, text: "The palm hits the ground and the wrist is forced into extension." },
          { t: 3.0, text: "The force passes up the arm to the end of the radius, where the growth plate sits." },
          { t: 4.4, text: "The wrist is painful, swollen and may look deformed." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "wristR",
        captions: [{ t: 0, text: "Zooming into the wrist: the growth plate at the end of the radius." }]
      },
      {
        type: "closeup", label: "Inside the bone", duration: 11, scene: "long-bone",
        actions: [
          { t: 0, do: "highlight", target: "distalPhysis" },
          { t: 0.3, do: "label", target: "distalPhysis", text: "Growth plate: the weak link in a child" },
          { t: 1.0, do: "arrow", at: "distalEpiphysisCentre", dir: 90, label: "Load through the bone", size: "m" },
          { t: 2.2, do: "separate", target: "distalPhysis", grade: "II", dur: 1.2 },
          { t: 2.4, do: "impact", at: "distalPhysisCentre" },
          { t: 3.6, do: "label", target: "distalPhysis", text: "Type II: split through the plate with a metaphyseal fragment" },
          { t: 4.4, do: "pain", at: "distalPhysisCentre", hold: 2.5 },
          { t: 5.6, do: "reset", target: "distalPhysis", dur: 1.2 },
          { t: 5.8, do: "label", target: "distalEpiphysis", text: "Reduction and immobilisation realign the plate" },
          { t: 7.2, do: "separate", target: "proximalPhysis", grade: "V", dur: 1.0 },
          { t: 7.5, do: "label", target: "proximalPhysis", text: "Type V: crush injury, often found late" },
          { t: 9.0, do: "camera", at: "proximalPhysisCentre", zoom: 1.6, dur: 1.0 },
          { t: 10.4, do: "camera", zoom: 1, dur: 0.5 }
        ],
        captions: [
          { t: 0, text: "In a child the growth plate is the weakest part of a long bone." },
          { t: 1.1, text: "The fall loads the end of the bone in compression, bending and shear." },
          { t: 2.3, text: "The plate fails first. The fracture runs along the plate and up through the metaphysis." },
          { t: 3.7, text: "This is Salter-Harris type II, the most common type, with a triangular metaphyseal fragment." },
          { t: 4.6, text: "The child has focal pain over the growth plate and may not use the limb." },
          { t: 5.8, text: "Reduction and a cast usually restore alignment. Most heal well, but the plate needs follow-up." },
          { t: 7.4, text: "A type V crush injury shows no clear fracture line and is often diagnosed late." }
        ]
      },
      {
        type: "micro", label: "Plate response", duration: 10, tissue: "physis",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.4, stage: "traction" }, { t: 3.2, stage: "separation" }, { t: 6.0, stage: "healing" }
        ],
        timeLabels: [{ t: 3.2, text: "At injury" }, { t: 6.0, text: "Weeks; growth watched for 1 year or more" }],
        captions: [
          { t: 0, text: "Healthy growth plate: ordered columns of cartilage cells that drive longitudinal growth." },
          { t: 1.4, text: "Loading: the fall places traction, bending and shear on the weakest part of the plate." },
          { t: 3.2, text: "Separation: the plate splits and the epiphysis and metaphysis move apart." },
          { t: 6.0, text: "Healing: the plate repairs, but a bony bar can form, so growth is monitored for months." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "SP6" }
};
