// Acute adductor longus strain — LL2
export default {
  id: "adductor-longus-strain",
  name: "Acute adductor longus strain",
  shortName: "Adductor longus strain",
  aka: ["groin strain", "pulled groin", "acute adductor injury", "adductor longus tear", "adductor muscle strain", "proximal adductor longus avulsion", "acute groin injury"],
  region: "hip-groin",
  tissues: ["muscle", "tendon"],
  onset: "acute",
  mechanismType: ["non-contact", "contact"],
  populations: ["male football players", "kicking and change-of-direction sport athletes", "ice hockey players", "young adult athletes"],
  sports: ["soccer", "australian football", "rugby", "gaelic football", "ice hockey", "field hockey", "futsal"],
  urgency: "routine",
  summary: "An acute tear of the adductor longus at its proximal tendon, musculotendinous junction or pubic insertion, caused by rapid activation while the muscle is being rapidly lengthened in kicking or change of direction.",
  keyFacts: [
    { label: "Typical recovery", value: "Median ~18 days to full training for MRI grade 0–2; ~11 weeks for complete tears/avulsions" },
    { label: "Return to sport", value: "Criteria-based; being clinically pain-free before return is linked to fewer reinjuries" },
    { label: "Key test", value: "Palpation of the proximal adductor longus plus resisted adduction (squeeze) reproducing the injury pain" },
    { label: "Imaging", value: "MRI only if a complete tear/avulsion is suspected or for prognosis in elite sport" },
    { label: "Peak age", value: "Young adults (median 27 years in an MRI cohort)" },
    { label: "Mechanism", value: "~70% non-contact: change of direction, kicking, reaching, jumping" }
  ],
  overview: "The adductor longus is the most commonly injured muscle in acute groin injury. In athletes with MRI-confirmed acute adductor injuries it accounted for 62 of 111 injured adductor muscles, and injuries cluster at three sites: the proximal (pubic) insertion, the intramuscular musculotendinous junction (MTJ) of the proximal tendon and the MTJ of the distal tendon [r2]. Hip and groin injuries make up 12–16% of all injuries in professional football each season, and adductor-related injuries are the most common diagnosis [r1]. Acute adductor injury belongs to the adductor-related entity of the Doha agreement classification of groin pain in athletes [r3].\n\nThe injury happens when the muscle is activated quickly while it is being stretched quickly. Typical moments are a closed-chain change of direction or reach (hip extended, abducted and externally rotated) or an open-chain kick as the hip swings from extension and abduction into flexion and adduction [r4]. Most athletes are pain-free within about two weeks and back in full team training within about three weeks. Complete tears and proximal avulsions take two to three months, and even these respond well to non-surgical, criteria-based rehabilitation [r10,r14]. The physiotherapist leads diagnosis, prognosis, progressive adductor loading and the return to sport (RTS).",

  epidemiology: {
    text: "Over seven seasons of UEFA elite club football, 628 hip and groin injuries were recorded. This equals 1.1 injuries per 1000 hours, with match incidence about six times training incidence (3.5 vs 0.6 per 1000 h). Adductor-related injuries were by far the most common (399 of 628), 53% caused more than a week of absence, and 15% were reinjuries [r1]. In an MRI cohort of 71 male athletes with acute adductor injury (median age 27 years), the adductor longus was injured most often. It was injured in isolation or together with adductor brevis, pectineus or obturator externus [r2]. Previous groin injury, a higher level of play, lower adductor strength (absolute, and relative to the abductors) and less sport-specific training are associated with groin injury risk [r6]. Low adduction strength is a **modifiable** risk factor. However, screening tests cannot reliably identify which individual athlete will be injured [r8].",
    riskFactors: {
      intrinsic: [
        "Previous hip or groin injury (HR 1.8 in professional football) [r8]",
        "Low hip adductor strength, absolute or relative to the abductors (modifiable) [r6,r7]",
        "Adduction-to-abduction strength ratio below 80%: 17 times the risk in professional ice hockey players [r7]",
        "Low eccentric adduction strength (HR 1.7 for adductor-related injury) [r8]",
        "Male sex and young adult age (most cohorts are male)"
      ],
      extrinsic: [
        "Higher level of play and match play rather than training [r1,r6]",
        "Kicking and change-of-direction sports (football codes, ice hockey) [r4]",
        "Lower levels of sport-specific (preseason) training [r6]",
        "No adductor strengthening in the injury-prevention program [r17]"
      ]
    }
  },

  mechanism: {
    summary: "Video analysis of acute adductor longus injuries in professional football found that 71% were non-contact and that more than half followed a quick reaction to a change in play [r4]. The injuring actions were change of direction (35%), kicking (29%), reaching (24%) and jumping (12%). Closed-chain injuries (change of direction, reaching) occurred with the hip extended, abducted and externally rotated. Open-chain injuries (kicking, jumping) occurred as the hip moved from extension to flexion and from abduction to adduction [r4]. The common thread is rapid muscle activation during rapid lengthening. In a maximal kick the adductor longus is lengthening fastest (~22 cm/s) near peak hip extension at about 40% of swing, just as it is activating to drive the limb forward [r5].",
    sequence: [
      "The athlete reacts quickly to a change in play, for example a loose ball, an opponent or a pass [r4].",
      "Kicking: the kicking hip swings back into extension (~23°), abduction and external rotation, which lengthens the adductor longus [r5].",
      "The adductor longus is activated forcefully (from ~10% of swing) while it is still being stretched at its fastest rate [r5].",
      "As the hip reverses from extension into flexion and adduction, eccentric load at the proximal tendon and MTJ peaks [r4,r5].",
      "Fibres fail at the stiffness transition: the proximal tendon MTJ, the distal tendon MTJ or the pubic insertion [r2].",
      "The athlete feels a sharp, sudden pain high in the medial groin, often with a 'pull' or 'pop', and usually cannot keep kicking or sprinting.",
      "Bleeding and inflammation follow. Bruising may track down the medial thigh over 24–48 hours in higher-grade tears."
    ],
    variants: [
      { name: "Closed-chain change of direction or reach", description: "The stance or reaching leg is forced into hip extension, abduction and external rotation, for example sliding to block a ball or a wide lateral lunge, while the adductors contract to decelerate and redirect the body [r4]." },
      { name: "Open-chain kicking or jumping", description: "A maximal kick or a jump in which the hip moves rapidly from extension and abduction into flexion and adduction. This is the classic kicking 'groin strain' [r4,r5]." },
      { name: "Contact (about 3 in 10)", description: "A tackle or collision forces the leg into abduction while the adductors are contracting, for example a block tackle or a split under an opponent [r4]." },
      { name: "Proximal avulsion", description: "Most injuries at the proximal insertion are complete avulsions of the tendon from the pubic bone. They carry a longer RTS [r2,r11]." }
    ]
  },

  anatomy: {
    text: "The adductor longus is the most anterior adductor. It arises by a narrow, flattened tendon from the anterior pubic body just below the pubic tubercle. The tendon blends with the pubic symphysis capsule and the rectus abdominis aponeurosis. The muscle fans out to insert into the middle third of the linea aspera. Its proximal tendon extends deep into the muscle belly as an intramuscular tendon, which creates long proximal and distal musculotendinous junctions. These junctions are the usual failure sites [r2]. It is supplied by the anterior division of the obturator nerve. It adducts the hip and, from an extended position, contributes to hip flexion. This dual role puts it under high eccentric load when the hip moves from extension and abduction toward flexion and adduction in kicking [r5].",
    structures: [
      { name: "Adductor longus", role: "Prime hip adductor. Accelerates the thigh across the body when kicking and decelerates abduction during cutting. Contributes to hip flexion from an extended hip." },
      { name: "Proximal adductor longus tendon and pubic enthesis", role: "Narrow fibrocartilaginous attachment to the anterior pubic body, continuous with the rectus abdominis aponeurosis. This is the site of avulsion injuries." },
      { name: "Intramuscular (proximal) tendon and MTJs", role: "Transfer force from muscle to tendon. The abrupt change in stiffness makes them the usual strain sites [r2]." },
      { name: "Adductor brevis, pectineus and obturator externus", role: "Deeper adductors. They are co-injured in about a third of acute adductor injuries [r2]." },
      { name: "Rectus abdominis", role: "Counterbalances the adductors across the pubic symphysis. Together they form the anterior pubic 'aponeurotic plate'." },
      { name: "Obturator nerve (anterior division)", role: "Motor supply to adductor longus, brevis and gracilis, and sensation to the medial thigh." }
    ]
  },

  pathophysiology: {
    tissueDamage: "Acute adductor longus injury is a strain-type muscle injury. Force rises fast while the muscle–tendon unit is already lengthening fast, so the sarcomeres in series near the junction with the stiffer tendon overstretch, lose myofilament overlap and rupture [r4,r9]. Damage concentrates where fibres join the proximal intramuscular tendon or the distal aponeurosis, which are the two MTJ sites seen on MRI. Injury at the proximal insertion is less common but more serious, because most insertional injuries are complete avulsions of the tendon from the pubis [r2]. Injury at the bone–tendon junction and a palpable defect predict a longer RTS [r11].\n\nTorn myofibres and intramuscular vessels bleed, and a haematoma fills the gap. Healing then follows the muscle sequence of destruction, repair and remodelling. Regenerating myofibres from satellite cells compete with fibroblast-driven connective-tissue scar, and early, controlled mechanical loading favours aligned regeneration over a dense, adherent scar [r9]. A partly regenerated, scarred MTJ is stiffer and weaker than normal tissue. This helps explain why previous groin injury is a risk factor for further injury [r6,r8].",
    structures: [
      { name: "Adductor longus MTJs (proximal or distal tendon)", effect: "Partial disruption of myofibres at the musculotendinous junction with intramuscular haemorrhage. These are the most common locations, together about two-thirds of adductor longus injuries [r2]." },
      { name: "Proximal adductor longus tendon / pubic enthesis", effect: "Partial or complete avulsion (12 of 16 insertional injuries were complete). The tendon retracts distally and a palpable gap may be present [r2,r12]." },
      { name: "Adductor brevis and pectineus", effect: "Concurrent strain in multi-muscle injuries [r2]" },
      { name: "Rectus abdominis–adductor aponeurosis", effect: "May be disrupted in severe proximal avulsions because it is continuous with the adductor longus origin" },
      { name: "Pubic bone (adolescents)", effect: "In skeletally immature athletes the same mechanism can avulse the pubic apophysis instead of tearing the muscle" }
    ],
    muscles: [
      { name: "Adductor longus and adductor group", effect: "Pain inhibition and protective guarding reduce adduction strength and range. Flexibility returns early in rehab, but eccentric adduction strength recovers slowly and keeps improving up to RTS [r13]." },
      { name: "Hip flexors and abdominals", effect: "Take over load during kicking and cutting when the adductors are protected, and can become secondarily overloaded." },
      { name: "Hip abductors", effect: "Relative abductor dominance increases when adduction strength falls. An adduction-to-abduction ratio below 80% is a risk marker [r7]." }
    ],
    cellular: [
      { phase: "Destruction & inflammation", timing: "0–3 days", description: "Myofibres rupture and their torn ends necrotise, and a haematoma fills the gap. Neutrophils then macrophages invade, removing debris and releasing growth factors [r9]." },
      { phase: "Repair", timing: "3 days – 3 weeks", description: "Satellite cells activate, proliferate and fuse into myotubes that regenerate myofibres. At the same time fibroblasts lay down a type III collagen scar and capillaries grow into the injury site [r9]." },
      { phase: "Remodelling", timing: "2–6 weeks onwards", description: "Regenerated myofibres mature and form new MTJ-like attachments to the scar. The scar contracts and reorganises (more type I collagen) along the lines of loading [r9]." },
      { phase: "Maturation (complete tears/avulsions)", timing: "3–12 months", description: "After complete avulsion the retracted tendon regains partial or complete continuity on MRI within a year of non-surgical treatment [r14]." }
    ],
    systems: [
      { system: "Nervous system", effect: "Nociceptive input and pain inhibition reduce voluntary activation of the adductors and alter kicking and cutting patterns. Pain on palpation of the proximal adductor longus insertion predicts a longer RTS [r11]." },
      { system: "Vascular / inflammatory", effect: "Intramuscular haemorrhage and an inflammatory response cause swelling and, in higher grades, bruising that tracks distally along the medial thigh under gravity." },
      { system: "Musculoskeletal chain", effect: "Load shifts to the hip flexors, abdominals and the contralateral limb during the injury period. Reduced adduction strength persists and is a risk factor for re-injury [r6,r13]." },
      { system: "Psychological", effect: "Groin injuries mean repeated time loss and a high reinjury share (15% of hip/groin injuries in elite football). Fear of re-injury during maximal kicking is common in late rehab [r1]." }
    ]
  },

  grading: {
    system: "MRI grading 0–3 (used in the Aspetar adductor cohort studies)",
    grades: [
      { grade: "Grade 0", description: "Clinical adductor injury with no MRI abnormality", prognosis: "Median ~18 days to full team training (grades 0–2 do not differ) [r10]" },
      { grade: "Grade 1", description: "Muscle oedema without architectural disruption", prognosis: "As grade 0: pain-free in about 2 weeks, full training in about 3 weeks [r10]" },
      { grade: "Grade 2", description: "Partial tear: oedema with partial fibre or tendon disruption", prognosis: "As grade 0–1 in this cohort; MRI grade 0–2 did not change RTS duration [r10]" },
      { grade: "Grade 3", description: "Complete tear or proximal tendon avulsion with discontinuity and retraction", prognosis: "Median 55 days to pain-free and 78 days to full team training with non-surgical rehabilitation [r10,r14]" }
    ]
  },

  timeframes: {
    summary: "Most acute adductor injuries (MRI grade 0–2) become clinically pain-free in about two weeks and return to full team training in about three weeks. Complete tears and avulsions take two to three months [r10]. Muscle regeneration and scar remodelling continue well beyond RTS, so ongoing adductor strengthening is part of the plan.",
    healing: [
      { phase: "Destruction & inflammation", startDay: 0, endDay: 3, description: "Fibre rupture, haematoma and inflammatory cell influx" },
      { phase: "Repair (regeneration + scar)", startDay: 3, endDay: 21, description: "Satellite-cell regeneration, fibroblast scar formation and capillary ingrowth" },
      { phase: "Remodelling", startDay: 14, endDay: 90, description: "Scar reorganisation and maturation of regenerated fibres along loading lines" },
      { phase: "Tendon continuity (avulsions)", startDay: 60, endDay: 365, description: "Partial or complete tendon continuity restored on MRI by one year after avulsion [r14]" }
    ],
    milestones: [
      { label: "Clinically pain-free (grade 0–2)", day: 13, note: "Median; IQR 11–21 days [r10]" },
      { label: "Controlled sports training completed", day: 17, note: "Median for grade 0–2 [r10]" },
      { label: "Full team training (grade 0–2)", day: 18, note: "Median; IQR 14–27 days [r10]" },
      { label: "RTS after complete avulsion", day: 69, note: "Median with non-surgical rehabilitation [r14]" },
      { label: "Full team training (grade 3)", day: 78, note: "Median; IQR 68–98 days [r10]" }
    ],
    returnToSport: "About 2–4 weeks for grade 0–2 injuries and about 2–3 months for complete tears or avulsions [r10,r14]. RTS is criteria-based: athletes who were clinically pain-free before returning had a lower 1-year reinjury rate (5% vs 21%) [r10]."
  },

  clinicalPresentation: {
    symptoms: [
      "Sudden sharp pain in the proximal medial groin during a kick, change of direction, slide or reach",
      "A pulling or 'pop' sensation, often with inability to continue kicking or sprinting",
      "Pain on kicking, side-footing, cutting and getting in and out of a car",
      "Pain on walking or climbing stairs in higher-grade injuries",
      "Bruising along the medial thigh appearing after 1–2 days in larger tears"
    ],
    signs: [
      "Localised tenderness at the proximal adductor longus: insertion, proximal tendon or MTJ [r11]",
      "Pain and weakness on resisted adduction (squeeze test, side-lying eccentric adduction)",
      "Pain and reduced range on passive abduction (adductor stretch) and bent-knee fall-out",
      "A palpable defect or gap near the pubis in a complete proximal avulsion [r12]",
      "Antalgic gait with shortened stride in more severe injuries"
    ]
  },

  assessment: {
    subjective: [
      "Exact mechanism: kick, change of direction, reach, slide, jump or contact, and whether the onset was sudden (acute) or built up over weeks (longstanding) [r3,r4]",
      "Ability to continue playing, felt 'pop' and bruising, which suggest a higher grade",
      "Previous groin injuries on either side and current training load, including preseason and match congestion [r6]",
      "Symptoms suggesting other entities: cough or sneeze pain (inguinal), central pubic pain (pubic), deep anterior hip pain with catching (hip-related) [r3]",
      "Systemic, urological or abdominal symptoms (fever, testicular pain, haematuria, abdominal pain) to screen for non-musculoskeletal causes",
      "Sport, position, kicking leg, fixture timing and the athlete's RTS goals"
    ],
    observation: ["Gait: antalgic with shortened stride and reduced hip extension", "Medial thigh bruising (usually 24–48 h after a tear)", "Visible asymmetry or a hollow near the pubis in proximal avulsion"],
    palpation: [
      "Palpate the adductor longus from its pubic insertion along the proximal tendon to the MTJ and muscle belly, and record the site and length of tenderness",
      "Pain at the proximal insertion predicts a longer RTS [r11]",
      "Feel for a palpable defect. If present, MRI always showed a complete avulsion in a cohort of 81 athletes [r12].",
      "Palpate the pubic symphysis, inguinal canal and iliopsoas to identify co-existing entities"
    ],
    rangeOfMotion: [
      "Passive hip abduction in supine or side-lying with goniometry",
      "Bent-knee fall-out test (distance from fibular head to bed) as a measure of adductor longus flexibility [r13]",
      "Hip flexion, internal rotation and FADIR to screen the hip joint"
    ],
    strength: [
      "Adductor squeeze test with hand-held dynamometry at 0° and 45° hip flexion: pain (NRS) and force",
      "Side-lying eccentric hip adduction with hand-held dynamometry, which tracks recovery throughout rehabilitation [r13]",
      "Hip abduction strength and the adduction-to-abduction ratio (risk marker below 80%) [r7]",
      "Resisted hip flexion and abdominal curl-up to identify iliopsoas or inguinal involvement"
    ],
    neuro: [],
    functional: [
      "Walking, single-leg stance and lateral lunge for pain-free control",
      "Graded running, change of direction and short-to-long passing in the later stages",
      "Copenhagen adduction tolerance (short then long lever) before return to full training"
    ],
    specialTests: [
      {
        name: "Adductor palpation (proximal adductor longus)",
        purpose: "Locate and grade the injury and detect complete avulsion",
        procedure: "Patient supine with the hip slightly abducted. Palpate the adductor longus systematically from the pubic insertion distally along the tendon and MTJ.",
        positive: "Recognisable injury pain at the insertion, tendon or MTJ. A palpable defect had a positive predictive value of 100% for complete avulsion, and absence of insertional palpation pain a negative predictive value of 98% [r12].",
        refs: ["r12"]
      },
      {
        name: "Adductor squeeze test (resisted adduction)",
        purpose: "Provoke adductor pain and quantify adduction strength",
        procedure: "Supine with hips flexed 45° (or legs straight at 0°). The patient squeezes maximally against the examiner's fist, a ball or a dynamometer between the knees (or ankles) for 3–5 s.",
        positive: "Recognisable groin pain and/or reduced force compared with the other side or a baseline. Reliability for adductor resistance tests ranges from fair to substantial [r20].",
        refs: ["r20"]
      },
      {
        name: "Passive adductor stretch",
        purpose: "Provoke pain with passive lengthening and rule out complete avulsion",
        procedure: "Supine. Passively abduct the straight leg (or the leg in figure-4) to end range while stabilising the pelvis.",
        positive: "Recognisable adductor pain at end range. Pain on stretch was associated with a higher MRI grade, and absence of stretch pain had a negative predictive value of 100% for complete avulsion [r12].",
        refs: ["r12"]
      },
      {
        name: "Bent-knee fall-out test",
        purpose: "Measure adductor longus flexibility and track recovery",
        procedure: "Supine. Put the foot of the tested leg beside the opposite knee and let the knee fall outward. Measure the vertical distance from the fibular head to the couch.",
        positive: "Greater distance and/or pain compared with the uninjured side. The test reflects adductor longus flexibility, and values normalise early in rehabilitation [r13,r19].",
        refs: ["r13", "r19"]
      }
    ],
    clinicalRules: [],
    outcomeMeasures: [
      { name: "Copenhagen Hip and Groin Outcome Score (HAGOS)", use: "Six-subscale PROM for physically active people with hip and groin pain. The Symptoms subscale relates to MRI injury grade [r15,r12]." },
      { name: "Hand-held dynamometry: eccentric and squeeze adduction strength", use: "Objective strength and limb symmetry to guide progression and RTS [r13]" },
      { name: "Pain (NRS) during the squeeze test", use: "Simple repeated measure of irritability across sessions" },
      { name: "OSTRC overuse injury questionnaire", use: "Monitors groin problems after RTS and during the season [r14,r17]" }
    ],
    imaging: [
      { modality: "MRI", indication: "Suspected complete tear or avulsion (palpable defect, large haematoma, insertional pain), elite athletes needing prognosis, or slow progress", findings: "Oedema and haemorrhage at the proximal MTJ, distal MTJ or insertion; tendon discontinuity and retraction in grade 3. MRI added little to clinical examination for predicting RTS (0–7% extra variance) [r11]." },
      { modality: "Ultrasound", indication: "Point-of-care assessment of tendon continuity and haematoma", findings: "Hypoechoic disruption at the MTJ or insertion; dynamic assessment of tendon retraction" },
      { modality: "Plain radiograph", indication: "Adolescents (possible apophyseal avulsion) or suspected bony injury", findings: "Avulsed bony fragment from the pubis or another pelvic apophysis" }
    ]
  },

  differentials: [
    { name: "Adductor-related groin pain (longstanding)", id: "adductor-related-groin-pain", distinguishing: "Gradual onset over weeks, with pain on palpation and resistance at the adductor longus origin and no single injury moment [r3]." },
    { name: "Pelvic apophyseal avulsion (adolescent)", id: "pelvic-apophyseal-avulsion", distinguishing: "Skeletally immature athlete with a similar mechanism. Radiographs show an avulsed fragment (ASIS, AIIS, ischium or pubis)." },
    { name: "Iliopsoas-related groin pain or strain", id: "iliopsoas-related-groin-pain", distinguishing: "Pain more lateral and proximal, provoked by resisted hip flexion and the iliopsoas stretch (modified Thomas test) rather than adduction." },
    { name: "Inguinal-related groin pain", id: "inguinal-related-groin-pain", distinguishing: "Pain at the inguinal canal with tenderness there, worse on coughing, sneezing or sit-ups. No palpable hernia [r3]." },
    { name: "Rectus abdominis strain", id: "rectus-abdominis-strain", distinguishing: "Pain above the pubis on resisted trunk flexion or rotation rather than on adduction." },
    { name: "Femoral neck stress fracture", id: "femoral-neck-stress-fracture", distinguishing: "Insidious, load-related deep groin pain, pain on hopping and end-range hip rotation, often in endurance runners. Needs MRI." },
    { name: "Hip-related groin pain (FAI syndrome / labral tear)", id: "fai-syndrome", distinguishing: "Deep anterior hip pain, clicking or catching, positive FADIR and limited internal rotation [r3]." }
  ],
  redFlags: [
    "Acute scrotal or testicular pain, swelling or a high-riding testis: suspect testicular torsion. Send to the emergency department immediately.",
    "A tender, irreducible groin lump with vomiting or abdominal distension: suspect incarcerated or strangulated hernia. Send to the emergency department immediately.",
    "Inability to hop or weight-bear, night pain, or deep groin pain with end-range rotation in an endurance athlete: suspect femoral neck or pubic ramus stress fracture. Unload and arrange urgent MRI.",
    "An adolescent with a 'pop' and a localised bony point of tenderness: arrange radiographs to exclude an apophyseal avulsion fracture.",
    "Fever, malaise or severe pain out of proportion to the injury (septic arthritis, osteomyelitis of the pubis, abscess), or calf swelling and breathlessness (DVT/PE): arrange urgent medical review."
  ],

  management: {
    principles: "Acute adductor injuries are managed without surgery, with a short protection period followed by a supervised, criteria-based exercise program [r10,r14]. Clinical examination drives management and prognosis. Palpation pain at the proximal insertion or a palpable defect points to a longer RTS, and MRI adds little except where complete avulsion is suspected [r11]. Load is progressed from pain-free isometric adduction to heavy eccentric and long-lever exercises such as the Copenhagen adduction, then through running, change of direction and kicking. Pain during and after loading guides the pace (aim for ≤2–3/10 that settles by the next day). Repeated clinical measures only roughly track recovery, so progression decisions combine pain, strength and functional performance rather than any single test [r13]. Share expected timeframes with the athlete and coach early: about 3 weeks for most injuries and 2–3 months for complete tears [r10].",
    medical: [
      { name: "Simple analgesia and short-course NSAIDs", description: "Paracetamol, or a few days of NSAIDs, for pain control in the first days. Long courses are avoided because inflammatory signalling contributes to muscle regeneration [r9].", evidence: "limited", recommendation: "consider", refs: ["r9"] },
      { name: "Surgical reattachment of complete proximal avulsion", description: "Not needed routinely. Athletes with complete adductor longus avulsions treated with exercise returned to sport in a median of 69 days, with normal strength and HAGOS scores at one year and no surgical risk [r14]. Surgery may be considered for rare multi-tendon avulsions with large retraction or failed rehabilitation.", evidence: "limited", recommendation: "not-recommended", refs: ["r14"] },
      { name: "Sports physician or orthopaedic review", description: "For suspected complete avulsion with retraction, adolescents with possible apophyseal avulsion, or when red flags or other groin entities are present.", evidence: "expert-opinion", recommendation: "consider", refs: [] }
    ],
    physio: [
      { name: "Criteria-based progressive adductor rehabilitation", description: "Supervised exercise progressed through pain-free isometric, then concentric–eccentric, then long-lever adductor loading, running, change of direction and kicking. Progression depends on pain and function criteria, not time. In 81 athletes this approach returned grade 0–2 injuries to full training in a median of 18 days, with an 8% 1-year reinjury rate [r10].", evidence: "moderate", recommendation: "recommended", refs: ["r10", "r13"] },
      { name: "Early pain-guided loading instead of prolonged rest", description: "Start isometric adduction and walking within the first days. A short relative rest (1–3 days) protects the fresh haematoma, after which early loading promotes aligned regeneration and limits dense scar [r9].", evidence: "limited", recommendation: "recommended", refs: ["r9"] },
      { name: "Copenhagen adduction exercise (late rehabilitation and maintenance)", description: "Side-lying adduction plank with the top leg supported, progressed from short lever (knee support) to long lever (ankle support). Eight weeks of progressive training increased eccentric adduction strength by 35.7% [r16].", evidence: "moderate", recommendation: "recommended", refs: ["r16"] },
      { name: "Isometric adductor squeezes", description: "Ball or fist between the knees, 5–10 s holds. A squeeze between the knees produced about 118% of maximal adductor longus EMG, so it can be dosed from gentle early loading to strengthening [r18].", evidence: "limited", recommendation: "recommended", refs: ["r18"] },
      { name: "Graded return-to-running and kicking program", description: "Progress straight-line running, then change of direction, then short then long passing and maximal kicking, staying within pain criteria. This reproduces the injury mechanism under control [r4,r10].", evidence: "limited", recommendation: "recommended", refs: ["r4", "r10"] },
      { name: "Aggressive early stretching or deep massage into the injury site", description: "Forceful stretching or deep friction in the first week can disturb the fresh haematoma and the forming scar. Gentle pain-free range of motion is enough, because flexibility returns early anyway [r13].", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] },
      { name: "Therapeutic ultrasound", description: "Widely used, but experimental work shows no meaningful effect on muscle regeneration and it adds nothing to active rehabilitation [r9].", evidence: "limited", recommendation: "not-recommended", refs: ["r9"] }
    ],
    education: [
      "This is a common injury. Most groin strains settle and return to full training in about three weeks, while complete tears take two to three months.",
      "Some pain during rehab exercises is acceptable if it stays mild (≤2–3/10) and has settled by the next morning.",
      "Returning before the groin is pain-free on testing roughly quadruples the risk of re-injury.",
      "Kicking power returns last. Long passing and shooting are reintroduced step by step at the end of rehab.",
      "Keep doing a Copenhagen adduction program once or twice a week after returning. It reduced groin problems by about 40% in footballers."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and follows the supervised protocol used in the Aspetar adductor cohorts [r10,r13]. Each stage has pain, strength and function gates, and the typical timeframes are for MRI grade 0–2 injuries. For complete tears or avulsions expect stages 1–2 to last 4–8 weeks [r10,r14]. Pain during exercise should stay ≤2–3/10 and settle within 24 hours. Strength gains continue throughout rehabilitation and beyond RTS, so adductor strengthening is never 'finished' [r13].",
    stages: [
      {
        name: "Protect & start loading",
        timeframe: "Days 0–5 (grade 3: weeks 0–2)",
        goals: ["Pain-free walking", "Pain-free submaximal isometric adduction", "Maintain cardiovascular fitness and core and hip strength", "Limit swelling and haematoma spread"],
        precautions: ["No kicking, sprinting or end-range stretching", "Avoid deep massage over a fresh tear", "Crutches only if walking is painful (usually grade 3)"],
        exercises: [
          { name: "Isometric adductor squeeze (ball between knees, hips flexed)", dosage: "5–10 × 5–10 s at 30–60% effort, 2–3 times daily", cues: "Squeeze to a level that is ≤2/10 pain; progress effort each day" },
          { name: "Glute bridge", dosage: "3 × 12, daily", cues: "Ribs down, push through the heels", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Side-lying hip abduction / clamshell (uninjured side up first)", dosage: "3 × 12–15", figure: { pose: "ex-clamshell", view: "lateral", props: ["mat"] } },
          { name: "Dead bug (core control)", dosage: "3 × 8 each side", cues: "Keep the lower back gently pressed into the mat", figure: { pose: "ex-dead-bug", view: "lateral", props: ["mat"] } },
          { name: "Stationary bike or upper-body conditioning", dosage: "20–30 min, low resistance", cues: "Pain-free only" }
        ],
        progressionCriteria: ["Pain-free walking and stairs", "Isometric squeeze at 45° pain ≤2/10 at near-maximal effort", "Pain-free active hip abduction through most of the range"]
      },
      {
        name: "Adductor strength",
        timeframe: "Days 4–14 (grade 3: weeks 2–6)",
        goals: ["Restore concentric and eccentric adduction strength", "Full pain-free range of abduction", "Pain-free jogging"],
        precautions: ["Progress lever length before load", "No maximal kicking"],
        exercises: [
          { name: "Side-lying hip adduction (bottom leg lifts)", dosage: "3 × 10–15, 3 s lowering, daily → loaded with an ankle weight", cues: "Lift the bottom leg straight, slow on the way down" },
          { name: "Standing cable or band adduction", dosage: "3 × 10–12, slow eccentric, every second day", cues: "Let the leg move out slowly, pull across the midline", figure: { pose: "ex-hip-abduction-standing", view: "anterior", props: ["resistance-band"] } },
          { name: "Copenhagen adduction, short lever (knee supported)", dosage: "2–3 × 6–10 each side, 3×/week", cues: "Body in a straight line; lift the bottom leg to meet the top leg", figure: { pose: "ex-copenhagen", view: "anterior", props: ["bench"] } },
          { name: "Squat and split squat", dosage: "3 × 8–12", figure: { pose: "ex-split-squat", view: "lateral" } },
          { name: "Jogging, straight line", dosage: "10–20 min at 50–70% of maximum speed", cues: "Stop if the groin pain exceeds 3/10" }
        ],
        progressionCriteria: ["Eccentric adduction strength ≥80% of the uninjured side", "Pain-free adductor squeeze at 0° and 45°", "Bent-knee fall-out and abduction range symmetrical", "Pain-free jogging for 20 minutes"]
      },
      {
        name: "Running, change of direction & kicking",
        timeframe: "Days 10–21 (grade 3: weeks 5–10)",
        goals: ["High-speed running", "Pain-free planned then unplanned change of direction", "Progress passing from short to long and then shooting", "Restore eccentric adduction strength to ≥90% symmetry"],
        precautions: ["Increase only one of speed, angle or kick distance at a time", "Monitor next-day squeeze test pain"],
        exercises: [
          { name: "Copenhagen adduction, long lever (ankle supported)", dosage: "2–3 × 6–12 each side, 2–3×/week", cues: "Slow lowering; keep the pelvis level", figure: { pose: "ex-copenhagen", view: "anterior", props: ["bench"] } },
          { name: "Side plank with top-leg adduction emphasis", dosage: "3 × 20–40 s", figure: { pose: "ex-side-plank", view: "anterior", props: ["mat"] } },
          { name: "Lateral lunge and lateral shuffle drills", dosage: "3 × 8 each side → 3 × 20 m shuffles", cues: "Push off the outside leg and control the inside leg", figure: { pose: "ex-lunge", view: "lateral" } },
          { name: "Progressive passing and kicking program", dosage: "Side-foot passes 5–10 m → 20–30 m → long balls → shots at 50–75–100% effort, every second day", cues: "Increase distance or effort only when the previous session was pain-free" },
          { name: "Change-of-direction drills (45° → 90° → 180°, planned → reactive)", dosage: "2–3 sessions/week", figure: { pose: "cut-plant", view: "anterior" } }
        ],
        progressionCriteria: ["Eccentric adduction strength ≥90% of the uninjured side", "Pain-free sprinting and change of direction", "Pain-free maximal kicking", "Clinically pain-free on palpation, stretch and resistance tests [r10]"]
      },
      {
        name: "Return to sport & prevention",
        timeframe: "Week 3 onwards (grade 3: ~2–3 months)",
        goals: ["Complete full, unrestricted team training", "Match fitness", "Ongoing adductor strength maintenance"],
        precautions: ["Gradual exposure to match minutes after a long absence", "Watch for symptoms returning in congested fixture periods"],
        exercises: [
          { name: "Full team training including small-sided games", dosage: "At least 1–2 full sessions before match selection" },
          { name: "Copenhagen Adductor Strengthening Programme (maintenance)", dosage: "1 session/week in season (3/week preseason), 3 progression levels [r17]", figure: { pose: "ex-copenhagen", view: "anterior", props: ["bench"] } },
          { name: "Heavy lower-limb strength maintenance", dosage: "1–2×/week" },
          { name: "Repeated sprint and kicking volume", dosage: "Within training, matched to positional demands" }
        ],
        progressionCriteria: ["Completion of full team training without symptoms", "Squeeze and eccentric adduction strength ≥90–100% of baseline or the uninjured side", "Athlete confidence for maximal kicking and duels"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Clinically pain-free: no recognisable pain on adductor palpation, passive stretch or resisted adduction. Meeting this before RTS was associated with fewer reinjuries (5% vs 21%) [r10].",
      "Completion of controlled sports-specific training: sprinting, change of direction and maximal kicking [r10]",
      "Eccentric and squeeze adduction strength ≥90% of the uninjured side or the pre-injury baseline",
      "Completion of full team training before match selection",
      "Athlete confidence and a shared decision with the coach and medical team"
    ],
    tests: ["Adductor squeeze test with dynamometry (0° and 45°)", "Side-lying eccentric adduction strength (hand-held dynamometer)", "Copenhagen adduction holds or repetitions to fatigue", "Sport-specific sprint, change-of-direction and kicking tasks", "HAGOS"]
  },
  prognosis: "With criteria-based rehabilitation, athletes with MRI grade 0–2 injuries reached full team training in a median of 18 days, and those with grade 3 injuries in a median of 78 days. The 1-year reinjury rate was 8% [r10]. The strongest predictors of longer RTS are palpation pain at the proximal adductor longus insertion, a palpable defect and MRI injury at the bone–tendon junction. In athletes without these findings even extensive examination adds little precision [r11]. Athletes with complete avulsions treated without surgery returned in a median of 69 days, with full HAGOS scores, near-symmetrical strength and restored tendon continuity on MRI at one year [r14]. Previous groin injury remains a risk factor for future injury, so a prevention program should continue after RTS [r6,r8].",
  prevention: [
    "An adductor strengthening program built on the Copenhagen adduction exercise (three times a week preseason, once a week in season) reduced the prevalence of groin problems by 41% in male footballers (OR 0.59) [r17].",
    "Progressive Copenhagen adduction training increases eccentric adduction strength by about a third in eight weeks [r16].",
    "Monitor adduction strength and the adduction-to-abduction ratio, and address deficits, especially after previous groin injury [r6,r7].",
    "Make sure there is adequate sport-specific preseason training before high match loads [r6]."
  ],
  clinicalPearls: [
    "Palpate carefully from the pubis down. Pain at the insertion or a palpable gap predicts a much longer RTS than pain at the MTJ, and is the main reason to order MRI [r11,r12].",
    "MRI grade 0, 1 and 2 adductor injuries return in similar times, so do not let the scan grade alone set expectations [r10].",
    "Flexibility returns within days. Eccentric adduction strength is the slow deficit, so measure it with a dynamometer rather than estimating it [r13].",
    "Long passing and shooting are the last things to come back. Build a written kicking progression with the athlete and coach.",
    "Even a complete proximal avulsion usually does well without surgery. Most athletes are back in 2–3 months [r14].",
    "Keep the Copenhagen adduction in the program after RTS. It is the best-supported groin prevention exercise [r17]."
  ],
  related: ["adductor-related-groin-pain", "pelvic-apophyseal-avulsion", "iliopsoas-related-groin-pain", "inguinal-related-groin-pain", "hamstring-strain", "rectus-abdominis-strain"],

  references: [
    { id: "r1", citation: "Werner J, Hägglund M, Waldén M, et al. UEFA injury study: a prospective study of hip and groin injuries in professional football over seven consecutive seasons. Br J Sports Med. 2009;43(13):1036-40.", pmid: "19945984", doi: "10.1136/bjsm.2009.066944", type: "cohort", year: 2009 },
    { id: "r2", citation: "Serner A, Weir A, Tol JL, et al. Characteristics of acute groin injuries in the adductor muscles: a detailed MRI study in athletes. Scand J Med Sci Sports. 2018;28(2):667-76.", pmid: "28649700", doi: "10.1111/sms.12936", type: "cross-sectional", year: 2018 },
    { id: "r3", citation: "Weir A, Brukner P, Delahunt E, et al. Doha agreement meeting on terminology and definitions in groin pain in athletes. Br J Sports Med. 2015;49(12):768-74.", pmid: "26031643", doi: "10.1136/bjsports-2015-094869", type: "consensus-statement", year: 2015 },
    { id: "r4", citation: "Serner A, Mosler AB, Tol JL, et al. Mechanisms of acute adductor longus injuries in male football players: a systematic visual video analysis. Br J Sports Med. 2019;53(3):158-64.", pmid: "30006458", doi: "10.1136/bjsports-2018-099246", type: "cross-sectional", year: 2019 },
    { id: "r5", citation: "Charnock BL, Lewis CL, Garrett WE, et al. Adductor longus mechanics during the maximal effort soccer kick. Sports Biomech. 2009;8(3):223-34.", pmid: "19891200", doi: "10.1080/14763140903229500", type: "biomechanical", year: 2009 },
    { id: "r6", citation: "Whittaker JL, Small C, Maffey L, et al. Risk factors for groin injury in sport: an updated systematic review. Br J Sports Med. 2015;49(12):803-9.", pmid: "25833903", doi: "10.1136/bjsports-2014-094287", type: "systematic-review", year: 2015 },
    { id: "r7", citation: "Tyler TF, Nicholas SJ, Campbell RJ, et al. The association of hip strength and flexibility with the incidence of adductor muscle strains in professional ice hockey players. Am J Sports Med. 2001;29(2):124-8.", pmid: "11292035", doi: "10.1177/03635465010290020301", type: "cohort", year: 2001 },
    { id: "r8", citation: "Mosler AB, Weir A, Serner A, et al. Musculoskeletal screening tests and bony hip morphology cannot identify male professional soccer players at risk of groin injuries: a 2-year prospective cohort study. Am J Sports Med. 2018;46(6):1294-305.", pmid: "29585730", doi: "10.1177/0363546518763373", type: "cohort", year: 2018 },
    { id: "r9", citation: "Järvinen TA, Järvinen TL, Kääriäinen M, et al. Muscle injuries: biology and treatment. Am J Sports Med. 2005;33(5):745-64.", pmid: "15851777", doi: "10.1177/0363546505274714", type: "narrative-review", year: 2005 },
    { id: "r10", citation: "Serner A, Weir A, Tol JL, et al. Return to sport after criteria-based rehabilitation of acute adductor injuries in male athletes: a prospective cohort study. Orthop J Sports Med. 2020;8(1):2325967119897247.", pmid: "32064292", doi: "10.1177/2325967119897247", type: "cohort", year: 2020 },
    { id: "r11", citation: "Serner A, Weir A, Tol JL, et al. Associations between initial clinical examination and imaging findings and return-to-sport in male athletes with acute adductor injuries: a prospective cohort study. Am J Sports Med. 2020;48(5):1151-9.", pmid: "32182099", doi: "10.1177/0363546520908610", type: "cohort", year: 2020 },
    { id: "r12", citation: "Serner A, Hölmich P, Tol JL, et al. Associations between clinical findings and MRI injury extent in male athletes with acute adductor injuries - a cross-sectional study. J Sci Med Sport. 2021;24(5):454-62.", pmid: "33334688", doi: "10.1016/j.jsams.2020.11.003", type: "cross-sectional", year: 2021 },
    { id: "r13", citation: "Serner A, Hölmich P, Tol JL, et al. Progression of strength, flexibility, and palpation pain during rehabilitation of athletes with acute adductor injuries: a prospective cohort study. J Orthop Sports Phys Ther. 2021;51(3):126-34.", pmid: "33115342", doi: "10.2519/jospt.2021.9951", type: "cohort", year: 2021 },
    { id: "r14", citation: "Serner A, Hölmich P, Arnaiz J, et al. One-year clinical and imaging follow-up after exercise-based treatment for acute complete adductor longus tendon avulsions in athletes: a prospective case series. Am J Sports Med. 2021;49(11):3004-13.", pmid: "34161743", doi: "10.1177/03635465211015996", type: "cohort", year: 2021 },
    { id: "r15", citation: "Thorborg K, Hölmich P, Christensen R, et al. The Copenhagen Hip and Groin Outcome Score (HAGOS): development and validation according to the COSMIN checklist. Br J Sports Med. 2011;45(6):478-91.", pmid: "21478502", doi: "10.1136/bjsm.2010.080937", type: "cohort", year: 2011 },
    { id: "r16", citation: "Ishøi L, Sørensen CN, Kaae NM, et al. Large eccentric strength increase using the Copenhagen Adduction exercise in football: a randomized controlled trial. Scand J Med Sci Sports. 2016;26(11):1334-42.", pmid: "26589483", doi: "10.1111/sms.12585", type: "rct", year: 2016 },
    { id: "r17", citation: "Harøy J, Clarsen B, Wiger EG, et al. The Adductor Strengthening Programme prevents groin problems among male football players: a cluster-randomised controlled trial. Br J Sports Med. 2019;53(3):150-7.", pmid: "29891614", doi: "10.1136/bjsports-2017-098937", type: "rct", year: 2019 },
    { id: "r18", citation: "Krommes K, Bandholm T, Jakobsen MD, et al. Dynamic hip adduction, abduction and abdominal exercises from the Hölmich groin-injury prevention program are intense enough to be considered strengthening exercises - a cross-sectional study. Int J Sports Phys Ther. 2017;12(3):371-80.", pmid: "28593090", type: "cross-sectional", year: 2017 },
    { id: "r19", citation: "Serner A, Lichau O, Reboul G. Evaluation of the bent knee fall out test pre- and post- an adductor longus tenotomy. Phys Ther Sport. 2021;48:196-200.", pmid: "33508695", doi: "10.1016/j.ptsp.2021.01.005", type: "cross-sectional", year: 2021 },
    { id: "r20", citation: "Heijboer WMP, Weir A, Vuckovic Z, et al. Clinical examination tests for adductor- and pubic-related groin pain in athletes with longstanding groin pain: inter-examiner reliability and prevalence of positive tests. Phys Ther Sport. 2024;66:9-16.", pmid: "38219694", doi: "10.1016/j.ptsp.2023.12.008", type: "diagnostic-accuracy", year: 2024 }
  ],

  animation: {
    title: "How an acute adductor longus strain happens",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "lateral", environment: "pitch",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "run-midstance", root: { x: -130 } },
          { t: 0.9, pose: "run-toe-off", root: { x: -80 } },
          { t: 1.6, pose: "kick-backswing", joints: { hipR: -24, kneeR: 95 }, root: { x: -45 } },
          { t: 2.3, pose: "kick-backswing", joints: { hipR: -6, kneeR: 105, trunk: -8 }, root: { x: -38 }, ease: "in" },
          { t: 2.9, pose: "kick-contact", joints: { hipR: 35, kneeR: 25 }, root: { x: -30 } },
          { t: 4.2, pose: "stand", joints: { hipR: 12, kneeR: 12, trunk: 14, shoulderR: 20, elbowR: 70 }, root: { x: -22 } },
          { t: 5.4, pose: "walk-heel-strike", joints: { hipR: 12 }, root: { x: -10 } }
        ],
        props: [
          { id: "ball", type: "ball-soccer", keyframes: [{ t: 0, x: 10, y: 11 }, { t: 2.9, x: 10, y: 11 }, { t: 3.6, x: 260, y: 90 }, { t: 4.2, x: 420, y: 60 }] }
        ],
        forces: [
          { t: [1.4, 2.6], at: "thighR", dir: "backward", label: "Hip pulled into extension & abduction", size: "m" },
          { t: [2.1, 3.0], at: "groinR", dir: "forward", label: "Adductors fire while lengthening", size: "l" }
        ],
        highlights: [{ t: [2.2, 6], at: "groinR" }],
        impacts: [{ t: 2.4, at: "groinR" }],
        slowmo: [{ t: [1.8, 2.8], rate: 0.3 }],
        captions: [
          { t: 0, text: "A footballer runs onto a loose ball and winds up for a hard, long kick with the right leg." },
          { t: 1.5, text: "The kicking hip swings back into extension, abduction and external rotation, lengthening the adductor longus." },
          { t: 2.1, text: "The adductor fires hard while still being stretched at its fastest rate, as the hip reverses into flexion." },
          { t: 3.0, text: "Sharp pain high in the inner groin: the adductor longus has torn near its proximal tendon." },
          { t: 4.2, text: "The player stops, clutches the groin and walks off with a shortened stride." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "groinR",
        captions: [{ t: 0, text: "Zooming into the right groin, viewed from the front." }]
      },
      {
        type: "closeup", label: "Inside the groin", duration: 10, scene: "hip-anterior",
        actions: [
          { t: 0, do: "highlight", target: "adductorLongus" },
          { t: 0.3, do: "label", target: "adductorLongus", text: "Adductor longus" },
          { t: 1.0, do: "arrow", at: "adductorLongusMTJ", dir: "lateral", label: "Rapid lengthening", size: "m" },
          { t: 1.2, do: "stretch", target: "adductorLongus", amount: 0.3, dur: 1.2 },
          { t: 1.4, do: "stretch", target: "adductorLongusTendon", amount: 0.2, dur: 1.0 },
          { t: 2.7, do: "strain", target: "adductorLongus", grade: 2, at: 0.22 },
          { t: 2.7, do: "impact", at: "adductorLongusMTJ" },
          { t: 3.3, do: "label", target: "adductorLongusTendon", text: "Partial tear at the proximal MTJ" },
          { t: 4.2, do: "haematoma", target: "adductorLongus", at: 0.25 },
          { t: 4.8, do: "spasm", target: "adductorLongus" },
          { t: 5.4, do: "pain", at: "adductorLongusMTJ" },
          { t: 6.4, do: "camera", at: "adductorLongusOrigin", zoom: 1.7, dur: 1 },
          { t: 6.8, do: "pulse", target: "adductorLongusTendon" },
          { t: 7.0, do: "label", target: "pubicSymphysis", text: "Insertional injury or avulsion = longer recovery" },
          { t: 8.8, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "The adductor longus runs from the front of the pubic bone to the middle of the thigh bone." },
          { t: 1.1, text: "Kicking stretches the muscle quickly while it is contracting hard." },
          { t: 2.6, text: "Fibres fail where muscle joins its proximal tendon, the most common strain site." },
          { t: 4.2, text: "Torn vessels bleed into the muscle, and guarding spasm limits abduction and kicking." },
          { t: 5.5, text: "Pain is felt high in the inner groin, worse with squeezing the knees together." },
          { t: 6.5, text: "Injury at the pubic insertion, often a full avulsion, means a much longer time out." },
          { t: 8.6, text: "Even full avulsions usually heal well with criteria-based rehab, without surgery." }
        ]
      },
      {
        type: "micro", label: "Muscle healing", duration: 10, tissue: "muscle",
        stages: [
          { t: 0, stage: "healthy" }, { t: 0.9, stage: "contracting" }, { t: 1.8, stage: "eccentric-overstretch" },
          { t: 2.8, stage: "sarcomere-disruption" }, { t: 3.9, stage: "haematoma" }, { t: 5.0, stage: "inflammation" },
          { t: 6.2, stage: "satellite-activation" }, { t: 7.4, stage: "regeneration" }, { t: 8.7, stage: "scar" }
        ],
        timeLabels: [{ t: 5.0, text: "Days 0–3" }, { t: 6.2, text: "Days 3–10" }, { t: 7.4, text: "Weeks 1–3" }, { t: 8.7, text: "Weeks 3+" }],
        captions: [
          { t: 0, text: "Healthy muscle: sarcomeres in series with overlapping actin and myosin." },
          { t: 0.9, text: "The adductor contracts to decelerate the backswing." },
          { t: 1.8, text: "Lengthened while contracting, the weakest sarcomeres overstretch and lose overlap." },
          { t: 2.8, text: "Overstretched sarcomeres and fibres rupture near the stiff tendon junction." },
          { t: 3.9, text: "Torn capillaries bleed, and a haematoma fills the gap between fibre ends." },
          { t: 5.0, text: "Neutrophils then macrophages clear necrotic fibre ends and debris." },
          { t: 6.2, text: "Satellite cells activate and fuse into new myotubes." },
          { t: 7.4, text: "New fibres regenerate across the gap, helped by early, controlled loading." },
          { t: 8.7, text: "A small collagen scar remains. Progressive strength work makes it align with the load." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL2" }
};
