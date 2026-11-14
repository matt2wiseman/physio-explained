export default {
  id: "acute-compartment-syndrome",
  name: "Acute compartment syndrome",
  shortName: "Acute compartment syndrome",
  aka: ["ACS", "acute limb compartment syndrome", "compartment syndrome of the leg", "tibial compartment syndrome", "anterior compartment syndrome", "acute leg compartment syndrome", "Volkmann ischaemic contracture (late sequela)"],
  region: "lower-leg",
  tissues: ["muscle", "fascia", "nerve", "vascular"],
  onset: "acute",
  mechanismType: ["compression", "contact"],
  populations: ["young men with tibial fractures", "contact-sport athletes", "people taking anticoagulants", "trauma and crush injury patients"],
  sports: ["soccer", "rugby", "australian football", "skiing", "cycling", "motorsport"],
  urgency: "emergency",
  summary: "SURGICAL EMERGENCY. Rising pressure in a closed leg compartment after fracture, crush or reperfusion causes ischaemia and necrosis. Suspect it early and send for same-day fasciotomy.",
  keyFacts: [
    { label: "Urgency", value: "Surgical emergency: send to the emergency department now; decompression (fasciotomy) is the treatment" },
    { label: "Typical recovery", value: "Depends on timing: normal function followed 68% of fasciotomies done within 12 h of onset versus 8% of later ones (1976 series)" },
    { label: "Key test", value: "Pain out of proportion, pain on passive stretch and a tense compartment; clinical signs alone have low sensitivity (13–19%)" },
    { label: "Imaging", value: "Imaging does not make the diagnosis. Continuous differential-pressure monitoring: sensitivity 94%, specificity 98% after tibial shaft fracture" },
    { label: "Incidence", value: "In 164 cases, 69% had an associated fracture (about half of them tibial shaft); most were men under 35" },
    { label: "Return to sport", value: "Only after surgical decompression, wound healing, fracture union and rehabilitation; no standard criteria" }
  ],
  overview: "Acute compartment syndrome (ACS) of the leg is a surgical emergency. Any suspected case needs immediate escalation to an emergency department or orthopaedic team for assessment and decompression by fasciotomy [r1]. It is caused by bleeding or oedema in a closed muscle compartment surrounded by fascia and bone, which leads to muscle and nerve ischaemia. Untreated, it usually leads to muscle necrosis and limb amputation, and in severe cases to renal failure and death [r2].\n\nMost cases follow a fracture: in 164 patients, 69% had an associated fracture, about half of the tibial shaft, and most patients were men under 35. Soft tissue injury without fracture was the second most common cause, and about one in ten patients had a bleeding disorder or took anticoagulants [r3]. Reperfusion after treatment of acute arterial obstruction is another well-known cause [r2]. The diagnosis is hard: there is no consensus on how to diagnose it [r4], and the sensitivity of clinical findings for the lower leg was only 13–19% in the studies reviewed, so a single sign has low predictive value and serial examination matters [r5]. Timing matters most. In a classic series, normal function followed 68% of fasciotomies done within 12 hours and 8% of later ones [r6], and a recent meta-analysis found that fasciotomy within 6 hours was associated with lower odds of amputation [r7].\n\nThe physiotherapist's role is to recognise the pattern, escalate at once and not to mobilise or treat the leg. Rehabilitation begins only after surgical decompression.",

  epidemiology: {
    text: "In a review of 164 patients treated over eight years, 69% had an associated fracture, about half of them of the tibial shaft. Most patients were men, usually under 35 years of age. Injury to soft tissue without fracture was the second most common cause, and one-tenth of the patients had a bleeding disorder or were taking anticoagulant drugs [r3]. Reported rates vary with how patients are selected and monitored. In a prospective series of 116 patients with tibial diaphyseal fractures and continuous anterior compartment monitoring, 3 patients (2.6%) developed ACS [r8]. In a later cohort of 850 monitored patients with tibial diaphyseal fractures, 152 (17.9%) underwent fasciotomy for ACS [r9].",
    riskFactors: {
      intrinsic: [
        "Young age, especially men under 35 [r3]",
        "Male sex: most patients with ACS were men [r3]",
        "Bleeding disorder or anticoagulant use (about one in ten cases) [r3]"
      ],
      extrinsic: [
        "Tibial shaft fracture, the most common fracture associated with leg ACS [r3]",
        "Soft tissue injury or crush without fracture (the second most common cause) [r3]",
        "Reperfusion after treatment of acute arterial obstruction [r2]",
        "A tight circumferential cast, splint or bandage on a swelling limb (modifiable; clinical teaching)"
      ]
    }
  },

  mechanism: {
    summary: "ACS follows an injury, usually a tibial fracture, direct crush or a reperfusion event. Bleeding or oedema accumulates in a closed osteofascial compartment, so tissue pressure rises toward the diastolic blood pressure and perfusion falls [r2,r10]. Ischaemic muscle and nerve swell and leak, which raises pressure further. Without decompression the cycle ends in necrosis [r2].",
    sequence: [
      "An injury occurs: a tibial fracture from a tackle, fall, vehicle crash or ski accident; a crush; or revascularisation after arterial occlusion [r3,r2].",
      "Bleeding from the fracture or damaged muscle, and oedema, accumulate inside a closed compartment bounded by bone, interosseous membrane and deep fascia [r2].",
      "Compartment pressure rises toward the diastolic blood pressure, and the perfusion pressure (diastolic minus compartment pressure, delta p) falls [r10].",
      "Venous outflow and capillary perfusion fall, producing muscle and nerve ischaemia [r2].",
      "Ischaemic cells swell and leak, so pressure rises further in a vicious cycle; nerve function is disturbed first, producing paraesthesia, and then muscle weakness develops.",
      "Arterial pulses are often preserved for some time, so a palpable pulse does not exclude ACS; loss of pulses, pallor and paralysis are late signs.",
      "Without decompression, muscle necrosis, limb loss, and in severe cases renal failure and death follow [r2]; contracture is a late sequela."
    ],
    variants: [
      { name: "Fracture-associated (most common)", description: "69% of cases in one series had an associated fracture, about half of the tibial shaft [r3]. Pressure monitoring in tibial shaft fractures is usually from the anterior compartment [r8]." },
      { name: "Soft tissue injury or crush without fracture", description: "The second most common cause; often missed because there is no fracture to alert the clinician [r3]." },
      { name: "Reperfusion after arterial obstruction", description: "Reperfusion after treatment of acute arterial obstruction swells ischaemic muscle and can precipitate ACS [r2]." },
      { name: "Bleeding disorder or anticoagulant-related", description: "About one-tenth of cases had a bleeding disorder or took anticoagulants, which makes haematoma formation more likely after relatively minor injury [r3]." }
    ]
  },

  anatomy: {
    text: "The lower leg has four fascial compartments bounded by the tibia, fibula, interosseous membrane and deep crural fascia. The anterior compartment contains tibialis anterior, extensor digitorum longus, extensor hallucis longus, the anterior tibial artery and the deep peroneal nerve. The lateral compartment contains peroneus longus and brevis and the superficial peroneal nerve. The superficial posterior compartment contains gastrocnemius and soleus, and the deep posterior compartment contains tibialis posterior, flexor digitorum longus and flexor hallucis longus with the posterior tibial neurovascular bundle. The fascia is relatively inelastic, so a small rise in volume produces a large rise in pressure. In the prospective monitoring studies of tibial shaft fractures, the anterior compartment was the one monitored [r8].",
    structures: [
      { name: "Anterior compartment", role: "Ankle and toe dorsiflexors, anterior tibial artery and deep peroneal nerve; the compartment usually monitored after tibial fracture [r8]" },
      { name: "Lateral compartment", role: "Peroneal muscles and superficial peroneal nerve; can be involved with the anterior compartment" },
      { name: "Superficial posterior compartment", role: "Gastrocnemius and soleus, the main plantarflexors" },
      { name: "Deep posterior compartment", role: "Tibialis posterior and long toe flexors with the posterior tibial neurovascular bundle; hardest to palpate and easily missed" },
      { name: "Deep crural fascia and interosseous membrane", role: "Inelastic boundaries of the compartments, which turn swelling into pressure [r2]" },
      { name: "Neurovascular structures", role: "Nerves are sensitive to ischaemia early; the artery is usually patent until late" }
    ]
  },

  pathophysiology: {
    tissueDamage: "ACS is caused by bleeding or oedema in a closed muscle compartment surrounded by fascia and bone, which leads to muscle and nerve ischaemia [r2]. Perfusion of the compartment depends on the difference between the diastolic blood pressure and the intracompartmental pressure (delta p); a delta p below 30 mmHg is the commonly used threshold for fasciotomy [r10]. In a prospective series of 116 patients with tibial diaphyseal fractures, 53 patients had absolute pressures above 30 mmHg in the first 12 hours, and a decompression threshold of 30 mmHg absolute pressure would have led to fasciotomy in 43% of patients, whereas a delta p threshold of 30 mmHg missed no cases [r8].\n\nUntreated ACS usually leads to muscle necrosis, limb amputation and, in severe cases of large compartments, renal failure and death [r2]. Fasciotomy itself carries a risk of long-term complications, which is why the decision depends on a reliable diagnosis [r4]. In a meta-analysis of 11 studies (2,504 patients) after fasciotomy for lower limb ACS, the pooled amputation rate was 10.5% and mortality 7.7% [r7].",
    structures: [
      { name: "Muscle in the affected compartments", effect: "Ischaemia, swelling, then necrosis if pressure is not relieved [r2]" },
      { name: "Nerves (deep peroneal, superficial peroneal, tibial)", effect: "Ischaemic dysfunction: paraesthesia and numbness first, then weakness and paralysis [r2]" },
      { name: "Capillaries and veins", effect: "Perfusion falls as compartment pressure approaches diastolic pressure; delta p below 30 mmHg is the trigger for decompression [r10]" },
      { name: "Fascia and interosseous membrane", effect: "Inelastic boundary that converts bleeding and oedema into pressure [r2]" },
      { name: "Tibia and fibula (when fractured)", effect: "Source of bleeding into the compartment; about half of fracture-associated cases involve the tibial shaft [r3]" }
    ],
    muscles: [
      { name: "Tibialis anterior, EDL and EHL (anterior compartment)", effect: "Ischaemia causes pain, weakness of dorsiflexion and toe extension, and pain on passive stretch; necrosis causes permanent loss [r2]" },
      { name: "Peroneals (lateral compartment)", effect: "Weak eversion; sensory loss from the superficial peroneal nerve" },
      { name: "Gastrocnemius and soleus (superficial posterior)", effect: "Calf swelling and pain on passive dorsiflexion" },
      { name: "Tibialis posterior and long toe flexors (deep posterior)", effect: "Pain with passive toe extension and weak toe flexion; easily missed because the compartment is deep" }
    ],
    cellular: [
      { phase: "Injury and bleeding or oedema", timing: "Minutes to hours", description: "Fracture, crush or reperfusion produces bleeding and oedema inside a closed compartment [r2]." },
      { phase: "Pressure rise and falling perfusion", timing: "Hours", description: "Compartment pressure approaches diastolic pressure, venous outflow and capillary perfusion fall [r10]." },
      { phase: "Ischaemia", timing: "Hours", description: "Muscle and nerve become ischaemic; ischaemic cells swell and leak, pressure rises further [r2]." },
      { phase: "Necrosis if undecompressed", timing: "From hours; late fasciotomy rarely restores function", description: "In a classic series, only 8% of limbs with late fasciotomy had normal function, versus 68% when fasciotomy was within 12 hours [r6]." }
    ],
    systems: [
      { system: "Vascular", effect: "Venous outflow and capillary perfusion fall as pressure rises, producing muscle and nerve ischaemia [r2]; arterial pulses are often present until late (clinical teaching)." },
      { system: "Nervous", effect: "Ischaemic nerve dysfunction causes paraesthesia, then weakness and paralysis [r2]." },
      { system: "Renal and metabolic", effect: "In severe cases of large compartments, muscle necrosis can lead to renal failure and death [r2]; check creatine kinase, potassium and creatinine (clinical practice)." },
      { system: "Immune and inflammatory", effect: "Reperfusion after treatment of acute arterial obstruction can itself cause ACS [r2]; inflammation and oedema add to the pressure." },
      { system: "Psychological and behavioural", effect: "Severe pain, delayed diagnosis, large wounds and permanent deficits cause substantial distress; plan psychological support." }
    ]
  },

  grading: null,

  timeframes: {
    summary: "Time is tissue. In a classic series, fasciotomy within 12 hours of onset led to normal function in 68% of limbs versus 8% when late [r6], and a meta-analysis found fasciotomy within 6 hours associated with lower odds of amputation (OR 0.31, 95% CI 0.13–0.75) [r7]. Rehabilitation after decompression is long and depends on fracture fixation, wound closure and the extent of muscle and nerve damage; the later phases are typical clinical ranges.",
    healing: [
      { phase: "Emergency decompression window", startDay: 0, endDay: 1, description: "Recognition, escalation and fasciotomy; within 6 hours is associated with lower amputation odds, and normal function is far more likely if within 12 hours [r7,r6]" },
      { phase: "Wound management and fracture care", startDay: 1, endDay: 14, description: "Wounds are re-inspected and closed, delayed or grafted; fracture fixation proceeds per orthopaedic plan" },
      { phase: "Early rehabilitation", startDay: 7, endDay: 56, description: "Oedema control, range of motion, gentle muscle activation, nerve monitoring; loading restricted by fracture and wound status" },
      { phase: "Strength, gait and function", startDay: 42, endDay: 150, description: "Progressive weight-bearing, strengthening and gait re-education once fracture and wounds allow" },
      { phase: "Return to impact and sport", startDay: 120, endDay: 365, description: "Running, plyometrics and sport-specific work if muscle and nerve function recovered" }
    ],
    milestones: [
      { label: "Fasciotomy (target within 6 h of recognition)", day: 0, note: "Early decompression within 6 h was associated with lower amputation odds [r7]" },
      { label: "Wound closure or skin graft", day: 7, note: "Typical clinical range; varies with swelling and technique" },
      { label: "Weight-bearing as permitted by fracture fixation", day: 42, note: "Orthopaedic decision" },
      { label: "Return to running (if function recovered)", day: 150, note: "Typical clinical range; not trial-derived" },
      { label: "Return to contact sport (earliest)", day: 270, note: "Criteria-based; depends on fracture union and muscle and nerve recovery" }
    ],
    returnToSport: "Highly variable and criteria-based. It depends on fracture union, muscle and nerve damage and wound healing; early decompression gives the best chance of full function [r6]. No validated return-to-sport criteria for ACS were identified."
  },

  clinicalPresentation: {
    symptoms: [
      "Pain out of proportion to the injury that escalates despite analgesia (the cardinal early symptom)",
      "A deep, tight, burning ache in the leg that is worse with movement and with stretch of the involved muscles",
      "Paraesthesia or numbness from nerve ischaemia [r2], for example in the first web space of the foot (deep peroneal nerve)",
      "A sense of tightness or pressure in the leg",
      "Late: weakness or paralysis of the foot and toes, and pale, cool or pulseless foot (late, not reliable early signs)"
    ],
    signs: [
      "A tense, swollen, shiny compartment on palpation; the anterior and lateral compartments are easily palpated, the deep posterior compartment is not",
      "Pain on passive stretch of the toes and ankle (dorsiflexors: passive plantarflexion; deep flexors: passive toe extension)",
      "Sensory loss in the first web space or sole, and weak dorsiflexion or toe movement",
      "Pulses and capillary refill are often normal in early ACS; do not use them to exclude it",
      "Clinical findings have low sensitivity, so one finding does not exclude ACS and three findings raised the probability to 93% in one review [r5]"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism and time of injury: tibial fracture, crush, direct blow, reperfusion event, or tight cast, splint or bandage",
      "Pain behaviour: escalating pain despite appropriate analgesia, and increasing analgesia requirement",
      "Neurological symptoms: numbness, pins and needles, or weakness developing after injury [r2]",
      "Anticoagulants, bleeding disorders or antiplatelet drugs, which raise risk [r3]",
      "Patients who cannot report pain (unconscious, sedated, intoxicated, very young or under nerve block) need risk-based assessment and may need pressure measurement [r1,r10]"
    ],
    observation: [
      "Tense, shiny swollen leg, bruising and wounds; deformity of a fracture",
      "Limb posture and guarding; position of the foot",
      "Circumferential dressings, casts or splints that may be constricting"
    ],
    palpation: [
      "Tension of the anterior, lateral and superficial posterior compartments compared with the other leg",
      "The deep posterior compartment is hard to palpate; rely on pain on passive toe extension",
      "Distal pulses and capillary refill, noting that they are often normal until late (clinical teaching)"
    ],
    rangeOfMotion: [
      "Pain on passive stretch of the toes and ankle is a key sign; perform it gently and only once, because it is painful",
      "Do not force movement at an unstable fracture"
    ],
    strength: [
      "Active toe and ankle dorsiflexion and plantarflexion, if safe; weakness is a later sign and may be limited by pain"
    ],
    neuro: [
      "Sensation in the first web space (deep peroneal), dorsum of the foot (superficial peroneal), lateral border and sole (sural and tibial)",
      "Repeat neurovascular examination at set intervals, because findings evolve; document the times"
    ],
    functional: [
      "No functional testing: do not walk on or exercise the limb if ACS is suspected; escalate immediately"
    ],
    specialTests: [
      {
        name: "Clinical assessment (pain out of proportion, pain on passive stretch, tense compartment, paraesthesia, paresis)", purpose: "Identify ACS clinically",
        procedure: "Ask about escalating pain and numbness, palpate each compartment, stretch the toes passively, and test sensation and motor function. Repeat at set intervals.",
        positive: "Any of the findings should prompt escalation and monitoring. In a review of four prospective studies, the probability of ACS was about 25% with one clinical finding and 93% with three findings [r5]. Data were limited.",
        sensitivity: "13–19%",
        specificity: "97–98%",
        refs: ["r5"]
      },
      {
        name: "Continuous intracompartmental pressure monitoring (differential pressure)", purpose: "Confirm ACS or support monitoring in at-risk or unassessable patients",
        procedure: "A catheter measures compartment pressure, usually in the anterior compartment, and delta p is calculated as the diastolic blood pressure minus the compartment pressure.",
        positive: "Delta p below 30 mmHg: decompression recommended [r8,r10]. In 850 monitored tibial diaphyseal fracture patients, estimated sensitivity was 94%, specificity 98%, positive predictive value 93% and negative predictive value 99% [r9].",
        sensitivity: "94%",
        specificity: "98%",
        refs: ["r9", "r8", "r10"]
      },
      {
        name: "Serial neurovascular observation", purpose: "Detect evolving ACS in at-risk limb injuries",
        procedure: "Examine pain, compartments, stretch pain, sensation and motor function at regular intervals (for example hourly) in a high-risk limb, and document each time.",
        positive: "A change in pain, new sensory loss or increasing tension should prompt immediate senior review. Accuracy of serial examination alone was not found in the sources reviewed.",
        refs: []
      }
    ],
    clinicalRules: [
      { name: "Delta p below 30 mmHg", description: "Perfusion of the compartment depends on the difference between diastolic blood pressure and compartment pressure. Decompression is recommended when delta p falls below 30 mmHg [r10]. A threshold using absolute compartment pressure of 30 mmHg would have led to fasciotomy in 43% of one monitored cohort, whereas delta p missed no cases [r8]." },
      { name: "Australian and New Zealand guideline", description: "Acute limb compartment syndrome after trauma is a surgical emergency. Guideline recommendations covered diagnosis in alert and unconscious patients, assessment of compartment pressure, timing and technique of fasciotomy, wound management and prevention; they were largely consensus-based because of limited trial evidence [r1]." }
    ],
    outcomeMeasures: [
      { name: "Manual muscle test (MRC grade) for dorsiflexion, plantarflexion and toe movement", use: "Track motor recovery after decompression" },
      { name: "Sensory testing in the peroneal and tibial distributions", use: "Track nerve recovery" },
      { name: "Ankle and toe range of motion", use: "Monitor contracture risk and recovery" },
      { name: "Lower Extremity Functional Scale (LEFS)", use: "Patient-reported function through rehabilitation" },
      { name: "Pain numeric rating scale (0–10)", use: "Track pain and its response over time" }
    ],
    imaging: [
      { modality: "Plain radiograph", indication: "Identify and classify fracture; it does not diagnose ACS", findings: "Tibial and fibular fractures, which are the most common association [r3]" },
      { modality: "Compartment pressure monitoring (not imaging)", indication: "At-risk limb, high-energy injury, or a patient who cannot report pain; follow local protocol [r10,r4]", findings: "Absolute pressure and delta p; delta p below 30 mmHg supports decompression [r10]" },
      { modality: "Duplex ultrasound, CT or MRI", indication: "Only for other questions (arterial injury, DVT, haematoma); do not delay decompression for imaging when suspicion is high", findings: "These tests do not exclude ACS; there is no consensus on a diagnostic imaging test [r4]" },
      { modality: "Blood and urine tests", indication: "Suspected muscle necrosis or after decompression", findings: "Rising creatine kinase, potassium and creatinine, and myoglobinuria, indicate muscle injury and renal risk (clinical practice)" }
    ]
  },

  differentials: [
    { name: "Tibia and fibula shaft fracture", id: "tibia-fibula-shaft-fracture", distinguishing: "Fracture pain is severe but usually settles with immobilisation and analgesia; ACS pain escalates despite both and is accompanied by a tense compartment and stretch pain. ACS often coexists with the fracture [r3]." },
    { name: "Chronic exertional compartment syndrome", id: "chronic-exertional-compartment-syndrome", distinguishing: "Recurrent exertional pain and tightness that settle quickly with rest; ACS does not settle with rest [r11]." },
    { name: "Calf strain or contusion without ACS", id: "calf-strain", distinguishing: "Pain is proportionate and settles with rest and analgesia; no escalating pain or neurological change. Re-examine often if there is any doubt." },
    { name: "Acute arterial occlusion or vascular injury", distinguishing: "A cold, pale, pulseless limb with severe pain from the start; ACS usually has preserved pulses early. Both are emergencies." },
    { name: "Deep vein thrombosis", distinguishing: "Calf swelling and tenderness without trauma, tense compartments or neurological change; urgent assessment is still needed." },
    { name: "Exertional rhabdomyolysis", id: "exertional-rhabdomyolysis", distinguishing: "Severe muscle pain and swelling after extreme exertion with dark urine and very high creatine kinase; it can coexist with ACS." },
    { name: "Nerve injury", id: "common-peroneal-nerve-injury", distinguishing: "Sensory or motor deficit without a tense, painful compartment or stretch pain." }
  ],
  redFlags: [
    "Any of: pain out of proportion or escalating despite analgesia, pain on passive stretch of the toes, a tense swollen compartment, or new numbness or tingling, after a fracture, crush, direct blow or in a limb in a cast: SUSPECT ACUTE COMPARTMENT SYNDROME. This is a surgical emergency. Call an ambulance or send the patient to the emergency department now and speak to the treating surgeon [r1].",
    "Do not wait for pallor, pulselessness or paralysis. These are late signs, pulses are often normal early, and clinical findings have low sensitivity, so repeat the examination and escalate on suspicion [r5].",
    "Loosen or remove any tight bandage, cast or splint at once and keep the limb at heart level (not elevated or iced) while arranging transfer; escalate even if the pain eases afterwards (clinical practice).",
    "Patients who cannot report pain (unconscious, sedated, a child, an intoxicated athlete, or a nerve block) with a high-risk injury: use risk-based assessment and request compartment pressure measurement [r1,r10].",
    "Young men with tibial fractures and anyone taking anticoagulants or with a bleeding disorder are at higher risk: keep a low threshold for escalation [r3].",
    "Dark urine, falling urine output or rising creatine kinase: muscle necrosis and renal risk; urgent medical care [r2].",
    "After fasciotomy: signs of wound infection, wound breakdown, ongoing neurological deficit or calf swelling with warmth require prompt surgical review."
  ],

  management: {
    principles: "ACS is a surgical emergency and the treatment is urgent fasciotomy by the surgical team [r1]. The physiotherapist's role in the acute phase is to recognise the pattern, remove constriction, escalate immediately and not mobilise or treat. Diagnosis is clinical, supported by pressure monitoring in at-risk or unassessable patients, but there is no consensus on exactly how to diagnose it [r4,r10]. Because fasciotomy has its own long-term complications, the diagnosis should be as reliable as possible without delaying surgery when suspicion is high [r4]. Outcomes depend on timing: early decompression is associated with better function and lower amputation odds [r6,r7]. Physiotherapy begins after decompression and is long and criteria-based.",
    medical: [
      { name: "Emergency fasciotomy (open release of the involved compartments)", description: "Open fasciotomy, incising both skin and fascia, is the most reliable method of decompression [r2]. Early fasciotomy matters: normal function followed 68% of fasciotomies within 12 hours versus 8% of later ones [r6], and fasciotomy within 6 hours was associated with lower amputation odds (OR 0.31) [r7]. The evidence is observational and guideline recommendations are largely consensus-based [r1].", evidence: "limited", recommendation: "recommended", refs: ["r2", "r6", "r7", "r1"] },
      { name: "Removal of constrictive casts, bandages and splints; limb at heart level", description: "First-aid and in-hospital step while arranging surgery. Keep the limb at heart level, do not apply ice and do not elevate above the heart (consensus clinical practice; no trial evidence was found).", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Continuous compartment pressure monitoring (differential pressure)", description: "In 850 monitored patients with tibial diaphyseal fractures, sensitivity was 94%, specificity 98%, PPV 93% and NPV 99% [r9]. Many surgeons suggest monitoring all high-risk limb injuries, others prefer to operate on clinical suspicion, and there is no consensus [r4]. Use delta p below 30 mmHg as the trigger [r10,r8].", evidence: "moderate", recommendation: "consider", refs: ["r9", "r4", "r10", "r8"] },
      { name: "Supportive care: analgesia, fluids, renal and metabolic monitoring", description: "Analgesia, intravenous fluids and monitoring of creatine kinase, potassium and renal function when muscle injury is likely, because necrosis can lead to renal failure [r2].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r2"] },
      { name: "Delaying fasciotomy for repeated observation or imaging when suspicion is high", description: "Delay lowers the chance of normal function (68% within 12 hours versus 8% later) and raises amputation odds [r6,r7].", evidence: "limited", recommendation: "not-recommended", refs: ["r6", "r7"] }
    ],
    physio: [
      { name: "Recognition, escalation and safety-netting", description: "Know the pattern, examine early, document times and escalate immediately; give clear return-to-ED advice to anyone sent home after a leg injury [r1].", evidence: "expert-opinion", recommendation: "recommended", refs: ["r1"] },
      { name: "Post-fasciotomy early rehabilitation", description: "Oedema control within the surgeon's instructions, active and active-assisted ankle and toe movement as permitted, protected loading according to fracture fixation and wound status.", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Nerve and muscle monitoring with neuromuscular re-education", description: "Track sensation and motor grades, and retrain activation of dorsiflexors and plantarflexors as nerve and muscle function recover.", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Graded strengthening, gait re-education and return to function", description: "Progress from weight-bearing as allowed to strengthening, gait and impact once fracture and wounds permit.", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Orthotic support for persisting dorsiflexor weakness", description: "An ankle-foot orthosis can improve gait and prevent contracture if foot drop persists.", evidence: "expert-opinion", recommendation: "consider", refs: [] }
    ],
    education: [
      "A leg injury that becomes more painful over hours instead of settling is an emergency. Go to the emergency department immediately; do not wait for the morning.",
      "Pain that is not controlled by your usual painkillers, a tight or hard leg, or numbness and tingling in the foot are warning signs.",
      "If a cast or bandage feels too tight, tell the staff at once; do not wait.",
      "Early surgery to open the compartments gives the best chance of keeping full muscle and nerve function [r6].",
      "Fasciotomy wounds can be large and take time to close; recovery is long but often good when treatment is early."
    ]
  },

  rehab: {
    overview: "This section covers rehabilitation after fasciotomy, which starts only after surgical decompression and is led with the surgical team. Protocols vary with fracture fixation, wound closure and the extent of muscle and nerve injury, and no standard post-fasciotomy program was identified in the sources reviewed; the stages below are typical clinical practice. Move on when criteria are met, not on a calendar. Always follow the surgeon's weight-bearing and wound instructions.",
    stages: [
      {
        name: "Protect, control oedema and maintain movement",
        timeframe: "Days 0–14",
        goals: ["Wounds protected and healing", "Oedema controlled", "Maintain range of motion of toes and ankle", "Monitor sensation and motor recovery"],
        precautions: ["Wound care and dressings per the surgical team", "Weight-bearing as the fracture fixation allows", "Report signs of infection, wound breakdown, new numbness or calf swelling with warmth", "Compression only if the surgeon permits"],
        exercises: [
          { name: "Seated ankle and toe movement", dosage: "3 × 20, hourly while awake as permitted", cues: "Move gently through pain-free range", figure: { pose: "ex-ankle-alphabet", view: "lateral", props: ["chair"] } },
          { name: "Quadriceps sets", dosage: "10 × 10 s, 3 times daily", figure: { pose: "ex-quad-set", view: "lateral", props: ["mat"] } },
          { name: "Straight-leg raise", dosage: "3 × 10 once there is no lag, if the fracture allows", figure: { pose: "ex-straight-leg-raise", view: "lateral", props: ["mat"] } },
          { name: "Heel slides", dosage: "2 × 15, twice daily if permitted", figure: { pose: "ex-heel-slide", view: "lateral", props: ["mat"] } },
          { name: "Upper-body and trunk exercise", dosage: "Daily seated programme per ability" }
        ],
        progressionCriteria: ["Wounds healing without infection", "Oedema stable or decreasing", "Toe and ankle range returning without pain spikes", "Surgeon clearance to progress loading"]
      },
      {
        name: "Restore range of motion and activation",
        timeframe: "Weeks 2–8",
        goals: ["Full ankle and toe range of motion", "Activate dorsiflexors and plantarflexors", "Scar mobility", "Start weight-bearing as allowed"],
        precautions: ["Follow fracture and wound limits", "Avoid aggressive stretching over healing wounds or grafts", "Stop if pain, swelling or numbness increases"],
        exercises: [
          { name: "Active ankle dorsiflexion and plantarflexion", dosage: "3 × 15, twice daily", figure: { pose: "ex-ankle-alphabet", view: "lateral", props: ["chair"] } },
          { name: "Seated calf raise (light)", dosage: "3 × 12–15, slow tempo", figure: { pose: "ex-seated-calf-raise", view: "lateral", props: ["chair"] } },
          { name: "Glute bridge", dosage: "3 × 12, daily", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Side-lying clamshell", dosage: "3 × 12–15 each side", figure: { pose: "ex-clamshell", view: "lateral", props: ["mat"] } },
          { name: "Scar mobilisation and desensitisation", dosage: "5 min daily once wounds have closed and the surgeon agrees" }
        ],
        progressionCriteria: ["Ankle range near the other side", "Visible activation of dorsiflexors and plantarflexors", "Wounds closed", "Weight-bearing permitted and tolerated"]
      },
      {
        name: "Strength, balance and gait",
        timeframe: "Weeks 6–16",
        goals: ["Normal gait pattern", "Calf and dorsiflexor strength", "Single-leg balance", "Tolerance of stairs and daily activity"],
        precautions: ["Progress load as fracture union allows", "Watch for foot drop or toe clawing and manage with orthosis if needed"],
        exercises: [
          { name: "Double-leg calf raise", dosage: "3 × 12–15, slow tempo", figure: { pose: "ex-calf-raise", view: "lateral" } },
          { name: "Bodyweight squat", dosage: "3 × 12", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Step-up", dosage: "3 × 10 each leg", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Single-leg balance", dosage: "3 × 30 s each leg", figure: { pose: "ex-single-leg-balance", view: "anterior" } },
          { name: "Gait re-education", dosage: "10–15 min daily with mirror or video feedback", cues: "Heel strike, even step length, no foot slap" }
        ],
        progressionCriteria: ["Normal gait without aids", "Single-leg stance 30 s", "Calf raise endurance building towards the other side", "Fracture union confirmed or surgeon clearance"]
      },
      {
        name: "Impact and return to sport",
        timeframe: "Months 4–12",
        goals: ["Return to running", "Rebuild plyometric capacity", "Sport-specific work", "Symmetrical strength"],
        precautions: ["Only start impact when the fracture has united and wounds are robust", "Progress gradually and monitor for pain, swelling and neurological change", "Only possible if muscle and nerve function recovered"],
        exercises: [
          { name: "Single-leg calf raise", dosage: "3 × 8–15, progress with load", figure: { pose: "ex-single-leg-calf-raise", view: "lateral" } },
          { name: "Walk–run progression", dosage: "Alternate days, for example 1 min run and 2 min walk × 8, progressing", figure: { pose: "run-midstance", view: "lateral" } },
          { name: "Single-leg hops", dosage: "3 × 10 each leg once criteria are met", figure: { pose: "ex-hop", view: "lateral" } },
          { name: "Sport-specific drills", dosage: "Cutting, accelerations and contact preparation added in steps", cues: "Quality over volume" }
        ],
        progressionCriteria: ["Pain-free running progression", "Strength and hop symmetry about 90% (clinical convention)", "No swelling or neurological change after sessions", "Surgeon and team agree to full return"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Fracture united and cleared by the orthopaedic surgeon",
      "Wounds and any skin graft healed, with scars mobile and not tender",
      "Full pain-free ankle and toe range of motion",
      "Dorsiflexor and plantarflexor strength and single-leg hop symmetry of about 90% (clinical convention)",
      "Sensory function recovered or stable, with any residual deficit managed",
      "Pain-free completion of a graded running and sport-specific program, followed by a shared decision with the athlete, coach and surgeon. No validated ACS-specific criteria were identified."
    ],
    tests: ["Manual muscle testing or dynamometry of dorsiflexors and plantarflexors", "Single-leg calf raise endurance", "Single-leg hop for distance and pain", "Sensory testing in the peroneal and tibial distributions"]
  },
  prognosis: "Outcome depends mainly on how quickly the compartment is decompressed. In a classic series of 66 cases, fasciotomy within 12 hours led to normal function in 68% of limbs and a 4.5% complication rate, versus 8% and 54% when fasciotomy was late [r6]. In a meta-analysis of 11 studies (2,504 patients) after fasciotomy for lower limb ACS, the pooled amputation rate was 10.5% and mortality 7.7%; fasciotomy within 6 hours was associated with lower odds of amputation (OR 0.31, 95% CI 0.13–0.75) and intracompartmental pressure monitoring with lower amputation odds (OR 0.23, 95% CI 0.10–0.54), although the data were observational [r7]. Fasciotomy carries long-term complications [r4]. Untreated ACS usually leads to muscle necrosis, limb amputation and, in severe cases, renal failure and death [r2].",
  prevention: [
    "Recognise high-risk injuries early: tibial shaft fracture, crush injury, high-energy limb trauma, anticoagulation and bleeding disorders, especially in young men [r3].",
    "Use serial neurovascular examination in high-risk limb injuries and consider continuous differential-pressure monitoring; sensitivity was 94% and specificity 98% in tibial diaphyseal fracture [r9,r4].",
    "Avoid tight circumferential bandages, casts and splints on swelling limbs, and split or loosen them if pain escalates (clinical practice).",
    "Give safety-net advice to every patient discharged after a leg injury: return immediately if pain escalates or numbness appears [r1]."
  ],
  clinicalPearls: [
    "Pain out of proportion is the key early sign, but clinical signs alone have poor accuracy (sensitivity 13–19%, positive predictive value 11–15%). The probability of ACS was 93% with three findings, so repeat the examination and escalate on suspicion [r5].",
    "Do not wait for the late signs (pallor, pulselessness, paralysis). Normal pulses do not exclude ACS (clinical teaching).",
    "Young men with tibial shaft fractures and anticoagulated patients are at highest risk [r3].",
    "A delta p below 30 mmHg is the commonly used pressure trigger; a threshold of absolute pressure 30 mmHg would have led to fasciotomy in 43% of one cohort, whereas delta p missed none [r8,r10].",
    "Time matters: fasciotomy within 6 hours was associated with lower amputation odds, and normal function was far more common within 12 hours [r7,r6].",
    "ACS does not settle with rest. If an exertional leg pain pattern is recurrent and settles quickly, think chronic exertional compartment syndrome instead [r11]."
  ],
  related: ["tibia-fibula-shaft-fracture", "chronic-exertional-compartment-syndrome", "exertional-rhabdomyolysis", "common-peroneal-nerve-injury", "calf-strain", "medial-tibial-stress-syndrome"],

  references: [
    { id: "r1", citation: "Wall CJ, Lynch J, Harris IA, et al. Clinical practice guidelines for the management of acute limb compartment syndrome following trauma. ANZ J Surg. 2010;80(3):151-6.", pmid: "20575916", doi: "10.1111/j.1445-2197.2010.05213.x", type: "clinical-practice-guideline", year: 2010 },
    { id: "r2", citation: "Gourgiotis S, Villias C, Germanos S, et al. Acute limb compartment syndrome: a review. J Surg Educ. 2007;64(3):178-86.", pmid: "17574182", doi: "10.1016/j.jsurg.2007.03.006", type: "narrative-review", year: 2007 },
    { id: "r3", citation: "McQueen MM, Gaston P, Court-Brown CM. Acute compartment syndrome. Who is at risk? J Bone Joint Surg Br. 2000;82(2):200-3.", pmid: "10755426", type: "cohort", year: 2000 },
    { id: "r4", citation: "von Keudell AG, Weaver MJ, Appleton PT, et al. Diagnosis and treatment of acute extremity compartment syndrome. Lancet. 2015;386(10000):1299-310.", pmid: "26460664", doi: "10.1016/S0140-6736(15)00277-9", type: "narrative-review", year: 2015 },
    { id: "r5", citation: "Ulmer T. The clinical diagnosis of compartment syndrome of the lower leg: are clinical findings predictive of the disorder? J Orthop Trauma. 2002;16(8):572-7.", pmid: "12352566", doi: "10.1097/00005131-200209000-00006", type: "systematic-review", year: 2002 },
    { id: "r6", citation: "Sheridan GW, Matsen FA 3rd. Fasciotomy in the treatment of the acute compartment syndrome. J Bone Joint Surg Am. 1976;58(1):112-5.", pmid: "1249096", type: "cohort", year: 1976 },
    { id: "r7", citation: "Kungwengwe G, Donnachie D, Tong K, et al. Post-fasciotomy complications in lower extremity acute compartment syndrome: a systematic review and proportional meta-analysis. Eur J Orthop Surg Traumatol. 2025;35(1):69.", pmid: "39937292", doi: "10.1007/s00590-025-04186-8", type: "meta-analysis", year: 2025 },
    { id: "r8", citation: "McQueen MM, Court-Brown CM. Compartment monitoring in tibial fractures. The pressure threshold for decompression. J Bone Joint Surg Br. 1996;78(1):99-104.", pmid: "8898137", type: "cohort", year: 1996 },
    { id: "r9", citation: "McQueen MM, Duckworth AD, Aitken SA, et al. The estimated sensitivity and specificity of compartment pressure monitoring for acute compartment syndrome. J Bone Joint Surg Am. 2013;95(8):673-7.", pmid: "23595064", doi: "10.2106/JBJS.K.01731", type: "diagnostic-accuracy", year: 2013 },
    { id: "r10", citation: "Shadgan B, Menon M, O'Brien PJ, et al. Diagnostic techniques in acute compartment syndrome of the leg. J Orthop Trauma. 2008;22(8):581-7.", pmid: "18758292", doi: "10.1097/BOT.0b013e318183136d", type: "narrative-review", year: 2008 },
    { id: "r11", citation: "Hirschmuller A, Recktenwald K, Gahwiler R, et al. [Chronic exertional compartment syndrome - an overlooked diagnosis of exercise related leg pain]. Ther Umsch. 2024;81(7):245-8.", pmid: "40079717", doi: "10.23785/TU.2024.07.003", type: "narrative-review", year: 2024 }
  ],

  animation: {
    title: "How acute compartment syndrome develops",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "lateral", environment: "pitch",
        actors: [{ id: "athlete", kit: "athlete" }, { id: "opponent", kit: "opponent", facing: "left" }],
        keyframes: [
          { t: 0, actor: "athlete", pose: "run-midstance", root: { x: -40 } },
          { t: 1.4, actor: "athlete", pose: "stand", root: { x: -15 } },
          { t: 2.4, actor: "athlete", pose: "stand", root: { x: -18 } },
          { t: 3.4, actor: "athlete", pose: "stand", joints: { trunk: -15 }, root: { x: -25 } },
          { t: 5.0, actor: "athlete", pose: "fall-backward", root: { x: -50 } },
          { t: 0, actor: "opponent", pose: "run-contact", root: { x: 160 } },
          { t: 1.4, actor: "opponent", pose: "sprint-drive", root: { x: 70 } },
          { t: 2.4, actor: "opponent", pose: "tackle-low", root: { x: 30 }, ease: "in" },
          { t: 4.0, actor: "opponent", pose: "tackle-low", root: { x: 10 } },
          { t: 5.0, actor: "opponent", pose: "lie-prone", root: { x: 10 } }
        ],
        forces: [
          { t: [2.3, 3.4], at: "shinR", dir: "backward", label: "Direct blow to the shin", size: "l" }
        ],
        highlights: [{ t: [2.4, 6], at: "shinR" }],
        impacts: [{ t: 2.5, at: "shinR" }],
        slowmo: [{ t: [2.0, 3.3], rate: 0.3 }],
        captions: [
          { t: 0, text: "A footballer is running with the ball when an opponent slides in." },
          { t: 2.2, text: "A high-energy blow lands on the front of the right shin." },
          { t: 3.4, text: "The tibia fractures and bleeds, and the athlete goes down." },
          { t: 4.6, text: "Pain escalates over the next hours instead of settling." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "shinR",
        captions: [{ t: 0, text: "Zooming into the right shin, viewed from the front." }]
      },
      {
        type: "closeup", label: "Inside the leg", duration: 10, scene: "lower-leg-anterior",
        actions: [
          { t: 0, do: "arrow", at: "midShaftTibia", dir: "posterior", label: "Direct blow", size: "l" },
          { t: 0.6, do: "fracture", target: "tibia", pattern: "oblique", at: "midShaftTibia", displaced: true },
          { t: 0.6, do: "impact", at: "midShaftTibia" },
          { t: 1.4, do: "bleed", target: "anteriorCompartment" },
          { t: 1.6, do: "label", target: "anteriorCompartment", text: "Bleeding into a closed compartment" },
          { t: 2.6, do: "swell", target: "tibialisAnterior", amount: 0.5 },
          { t: 3.0, do: "pressure", target: "anteriorCompartment", amount: 0.6 },
          { t: 3.2, do: "label", target: "tibialisAnterior", text: "Pressure rises, perfusion falls" },
          { t: 4.0, do: "compress", target: "anteriorTibialArtery", at: 0.5 },
          { t: 4.6, do: "compress", target: "deepPeronealNerve", at: 0.5 },
          { t: 4.8, do: "label", target: "deepPeronealNerve", text: "Nerve ischaemia: numbness, weakness" },
          { t: 5.6, do: "pain", at: "midShaftTibia" },
          { t: 5.8, do: "pressure", target: "anteriorCompartment", amount: 1 },
          { t: 5.8, do: "pressure", target: "deepPosteriorCompartment", amount: 0.7 },
          { t: 6.4, do: "occlude", target: "anteriorTibialArtery", at: 0.5 },
          { t: 6.6, do: "label", target: "anteriorTibialArtery", text: "Pulses are lost late" },
          { t: 6.8, do: "fade", target: "tibialisAnterior", to: 0.45 },
          { t: 7.8, do: "tear", target: "deepCruralFascia", grade: 3, at: 0.5, label: "Fasciotomy: fascia released" },
          { t: 8.4, do: "reset", target: "anteriorCompartment" },
          { t: 8.4, do: "reset", target: "deepPosteriorCompartment" },
          { t: 8.4, do: "reset", target: "anteriorTibialArtery" }
        ],
        captions: [
          { t: 0, text: "A direct blow fractures the tibial shaft." },
          { t: 1.4, text: "Bleeding fills the anterior compartment, which is bounded by bone and inelastic fascia." },
          { t: 2.8, text: "Muscle swells and compartment pressure rises toward the diastolic blood pressure." },
          { t: 4.0, text: "Perfusion falls, and the nerve is ischaemic: pain out of proportion, numbness, weakness." },
          { t: 5.8, text: "Pressure keeps climbing; the deep posterior compartment is involved too." },
          { t: 6.6, text: "Pulses are lost late. Do not wait for them; muscle begins to die." },
          { t: 7.8, text: "Emergency fasciotomy releases the fascia and restores perfusion." }
        ]
      },
      {
        type: "micro", label: "Compartment", duration: 10, tissue: "compartment",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.2, stage: "swelling" }, { t: 2.6, stage: "pressure-rise" },
          { t: 4.0, stage: "venous-occlusion" }, { t: 5.4, stage: "ischaemia" }, { t: 7.0, stage: "necrosis" }, { t: 8.4, stage: "decompression" }
        ],
        captions: [
          { t: 0, text: "A healthy compartment: well-perfused muscle inside a fascial sleeve." },
          { t: 1.2, text: "Bleeding and oedema from the injury begin to swell the compartment." },
          { t: 2.6, text: "Tissue pressure climbs because the fascia and bone cannot expand." },
          { t: 4.0, text: "Venous outflow falls and capillaries congest, so pressure rises further." },
          { t: 5.4, text: "Perfusion falls below what muscle and nerve need: ischaemia." },
          { t: 7.0, text: "Without decompression, muscle fibres die: necrosis, contracture and nerve loss." },
          { t: 8.4, text: "Fasciotomy releases the compartment; early decompression restores perfusion." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL8" }
};
