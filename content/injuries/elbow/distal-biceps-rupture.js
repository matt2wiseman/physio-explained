export default {
  id: "distal-biceps-rupture",
  name: "Distal biceps tendon rupture",
  shortName: "Distal biceps rupture",
  aka: ["distal biceps avulsion", "biceps tendon rupture at the elbow", "distal biceps tendon tear", "Popeye sign (distal)", "radial tuberosity avulsion", "biceps brachii distal tendon rupture"],
  region: "elbow",
  tissues: ["tendon"],
  onset: "acute",
  mechanismType: ["non-contact", "traction"],
  populations: ["men in their 40s", "smokers", "people with a raised body mass index", "weightlifters and manual workers", "dominant-arm injury"],
  sports: ["weightlifting", "bodybuilding", "rugby", "wrestling", "martial arts", "rock climbing"],
  urgency: "urgent",
  summary: "Acute avulsion of the distal biceps tendon from the radial tuberosity under a sudden eccentric load on a flexed elbow, causing a pop, a Popeye deformity and weak supination. Repair is usually favoured in active people.",
  keyFacts: [
    { label: "Typical recovery", value: "After repair, in a meta-analysis flexion strength reached 94.7% and supination strength 89.2% of the other arm, versus 83.0% and 62.6% without surgery" },
    { label: "Return to sport", value: "Criteria-based, set by the surgeon's protocol; lifting is typically restricted for about 3–6 months (clinical convention)" },
    { label: "Key test", value: "Hook test: abnormal in 33 of 33 complete avulsions and normal in 45 of 45 uninjured arms (sensitivity and specificity both 100% in one surgeon's 45-patient cohort)" },
    { label: "Imaging", value: "Not needed if the hook test is clear. MRI is used to separate partial from complete tears (sensitivity 92%, specificity 85% in the same cohort)" },
    { label: "Peak age", value: "Mean age about 46 years; about 95% of cases are in men" },
    { label: "Incidence", value: "About 2.55 per 100,000 patient-years in a US national insurance database" }
  ],
  overview: "A distal biceps tendon rupture is an acute avulsion of the biceps tendon from the radial tuberosity, typically when a flexed elbow is suddenly forced towards extension against a heavy load. In a defined population, every patient described a mechanism involving excessive eccentric tension as the arm was forced from a flexed position [r1]. It is uncommon: the estimated national incidence was 2.55 per 100,000 patient-years in one large database, and about 95% of those injured were men with a mean age of 46 years [r2].\n\nThe rupture is usually the end point of a vulnerable tendon. A cadaveric study found a hypovascular zone in the distal tendon and mechanical impingement between the radius and ulna in forearm pronation, which may contribute to attritional rupture [r3]. The classic findings are a pop and sharp pain at the antecubital fossa, bruising, a retracted biceps belly (the 'Popeye' sign) and weak supination. The hook test is the key clinical sign: it was abnormal in all 33 complete avulsions in one cohort [r4]. Complete ruptures are frequently missed on clinical examination, so a high index of suspicion matters [r4].\n\nIn a meta-analysis of mostly observational studies, surgery gave better patient-reported outcomes and better flexion and supination strength than non-operative care, but with a complication profile that includes heterotopic ossification and transient nerve injury [r5]. For a complete rupture, primary repair within 3–4 weeks of injury is recommended in one review [r6]. A retrospective comparison found similar functional results for repairs done after more than 21 days, so a late diagnosis is not a reason to withhold referral [r7].",

  epidemiology: {
    text: "In a US national insurance database, the estimated incidence of distal biceps tendon rupture was 2.55 per 100,000 patient-years, and 5.35 per 100,000 patient-years in the authors' local population. The mean age in the regional cohort was 46.3 years, and males made up the large majority (national 95%, regional 96%) [r2]. In an earlier defined health-care population, the incidence was 1.2 ruptures per 100,000 patients per year, the average age was 47 years, and the dominant arm was involved in 86% [r1]. Smoking and elevated body mass index were associated with injury in the larger study, whereas diabetes was not [r2]. In the earlier study, 43% of patients used tobacco versus 9% of all members, equivalent to a 7.5 times greater risk in smokers [r1].",
    riskFactors: {
      intrinsic: [
        "Male sex: about 95% of ruptures in a national database [r2]",
        "Age in the fourth to fifth decade: mean age 46.3 years [r2]",
        "Smoking: 7.5 times greater risk in a Poisson regression analysis (modifiable) [r1]; smoking was also associated with rupture in the larger database [r2]",
        "Elevated body mass index was associated with rupture (modifiable); diabetes was not [r2]",
        "A hypovascular zone averaging 2.14 cm in the distal tendon and impingement between the radius and ulna in pronation may predispose to attritional rupture [r3]"
      ],
      extrinsic: [
        "A sudden eccentric load on a flexed elbow, such as lifting or catching a heavy object: all patients described excessive eccentric tension as the arm was forced from a flexed position [r1]",
        "Dominant arm: involved in 86% of one cohort [r1]",
        "Heavy lifting and resistance training, and manual handling (clinical observation; not quantified in the sources reviewed)"
      ]
    }
  },

  mechanism: {
    summary: "Distal biceps rupture is a sudden failure of the tendon at its insertion on the radial tuberosity. The elbow is flexed and the forearm supinated with the biceps contracting to hold a heavy load. When the load exceeds what the muscle can resist, the elbow is forced towards extension and the biceps lengthens while still contracting. Every patient in a defined cohort described excessive eccentric tension as the arm was forced from a flexed position [r1]. Failure occurs in a tendon with a hypovascular zone that can be nipped between the radius and ulna in pronation, which may have weakened it beforehand [r3].",
    sequence: [
      "The elbow is flexed to about 90° with the forearm supinated, and the biceps contracts to lift, hold or catch a heavy load.",
      "An unexpected or excessive load forces the elbow towards extension while the biceps is still contracting, so the muscle is overloaded eccentrically [r1].",
      "Tension concentrates at the distal tendon, particularly where it is poorly vascularised and subject to impingement between radius and ulna [r3].",
      "The tendon avulses from the radial tuberosity, with a palpable or audible pop and sharp pain at the front of the elbow.",
      "The biceps muscle belly retracts towards the shoulder, and the rupture is often more obvious if the bicipital aponeurosis also tears (the Popeye deformity; clinical observation).",
      "Bruising appears in the antecubital fossa and forearm over the next days, and supination and flexion are weak.",
      "Without repair the tendon end scars proximally and does not reattach to the radius."
    ],
    variants: [
      { name: "Single heavy lift or catch", description: "The usual mechanism: a sudden heavy load on a flexed elbow, for example catching a falling object or lifting beyond capacity. Excessive eccentric tension was present in all patients in one cohort [r1]." },
      { name: "Attritional (degenerative) rupture", description: "Hypovascularity and repeated impingement in pronation may degrade the tendon before it fails, so the load that finally causes rupture can be modest [r3]. Distal biceps and triceps ruptures have an acute traumatic cause that may be superimposed on underlying tendinopathy [r6]." },
      { name: "Partial tear", description: "Some tears are incomplete, and they can show an intact hook test that is painful (9 of 12 partial detachments in one cohort) [r4]. MRI-confirmed partial tears can be treated non-operatively with immobilisation [r6]." },
      { name: "Delayed (chronic) presentation", description: "A rupture not repaired within 21 days is called chronic; chronic cases may have retraction and scarring, and repair outcomes were similar to acute repair in one retrospective series [r7]." }
    ]
  },

  anatomy: {
    text: "The biceps brachii is a strong forearm supinator and elbow flexor. Its distal tendon passes through the antecubital fossa and inserts on the radial tuberosity, where it wraps around the radius as the forearm rotates; the bicipital aponeurosis (lacertus fibrosus) fans medially from the tendon over the flexor-pronator mass. The tendon has proximal and distal vascular zones separated by a hypovascular zone averaging 2.14 cm. In full pronation the tendon occupied 85% of the proximal radioulnar space on sectioning [r3]. The brachialis, which inserts on the ulna, continues to flex the elbow after rupture (standard anatomy), and flexion strength was better preserved than supination strength without surgery (83.0% versus 62.6%) [r5]. The lateral antebrachial cutaneous nerve and the posterior interosseous nerve lie close to the insertion (standard anatomy), and transient sensory and motor nerve injuries occur after repair [r5].",
    structures: [
      { name: "Distal biceps tendon", role: "Transmits biceps force to the radial tuberosity for forearm supination and elbow flexion [r3]" },
      { name: "Radial tuberosity", role: "Bony insertion on the radius; the site of avulsion" },
      { name: "Bicipital aponeurosis (lacertus fibrosus)", role: "Fascial expansion from the tendon over the forearm flexors; if intact it may limit retraction of the muscle belly (clinical observation)" },
      { name: "Biceps brachii muscle belly", role: "Retracts proximally after complete rupture, forming the Popeye deformity" },
      { name: "Brachialis", role: "Elbow flexor inserting on the ulna; it keeps flexion relatively strong after biceps rupture [r5]" },
      { name: "Lateral antebrachial cutaneous and posterior interosseous nerves", role: "Lie near the insertion; transient sensory nerve injury (10%) and transient motor nerve injury (1.6%) occurred after surgical repair in a meta-analysis [r5]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "In distal biceps rupture the tendon avulses from the radial tuberosity under an eccentric overload [r1]. The rupture often occurs in a tendon that is already vulnerable. A cadaveric study identified three vascular zones, with a hypovascular zone averaging 2.14 cm between the proximal and distal zones, and a CT study showed a 50% reduction in the radioulnar space at the radial tuberosity from full supination to full pronation. Together these suggest that hypovascularity and mechanical impingement may contribute to attritional rupture [r3]. A review adds that the traumatic rupture may be superimposed on underlying tendinopathy [r6].\n\nOnce the tendon has avulsed, the muscle retracts. Without surgical fixation, the end does not reattach to bone, and the arm adapts with a loss of supination strength and a smaller loss of flexion strength because the brachialis is preserved: in a meta-analysis non-operative supination strength was 62.6% of the uninjured arm and flexion strength 83.0% [r5]. Repair places the tendon back on the tuberosity and allows tendon-to-bone healing, with 94.7% flexion and 89.2% supination strength in the same analysis [r5].",
    structures: [
      { name: "Distal biceps tendon", effect: "Complete avulsion from the radial tuberosity, usually with a tendon stump that retracts proximally; partial tears keep some continuity [r4]" },
      { name: "Bicipital aponeurosis", effect: "May tear with the tendon, which allows more retraction and a more obvious Popeye deformity (clinical observation)" },
      { name: "Radial tuberosity", effect: "Bony footprint where the tendon is lost; the target for repair" },
      { name: "Antecubital fossa soft tissues", effect: "Haemorrhage and bruising; large haematomas can compress neurovascular structures (clinical reasoning)" }
    ],
    muscles: [
      { name: "Biceps brachii", effect: "Retracts proximally and loses its distal anchor, so supination and flexion strength fall; supination strength was 62.6% of the uninjured arm without surgery [r5]" },
      { name: "Brachialis", effect: "Continues to flex the elbow, which explains why flexion is better preserved (83.0% without surgery versus 62.6% for supination) [r5]" },
      { name: "Supinator and pronator group", effect: "The supinator and forearm muscles compensate partly for the lost biceps supination (clinical reasoning)" },
      { name: "Forearm and shoulder girdle", effect: "Substitution patterns develop with a weak arm; address them in rehabilitation (clinical reasoning)" }
    ],
    cellular: [
      { phase: "Haemorrhage", timing: "0–2 days", description: "Bleeding at the avulsion site and into the antecubital fossa; platelets form a clot (typical tendon biology)." },
      { phase: "Inflammatory", timing: "0–5 days", description: "Neutrophils and macrophages clear debris and release growth factors (typical tendon biology)." },
      { phase: "Proliferative", timing: "5 days to 6 weeks", description: "Fibroblasts lay down disorganised type III collagen; after surgical repair, the tendon is held against the tuberosity so that healing can bridge the gap (typical tendon biology)." },
      { phase: "Remodelling", timing: "6 weeks to 12+ months", description: "Collagen is replaced by aligned type I collagen along the line of load; strength returns slowly, and in a single case re-strengthening began by week 8 [r8]." }
    ],
    systems: [
      { system: "Vascular", effect: "A hypovascular zone averaging 2.14 cm in the distal tendon may limit healing capacity and predispose to attritional failure [r3]. Smoking increased the risk 7.5-fold [r1]." },
      { system: "Nervous system", effect: "Nerves near the insertion can be injured at surgery: 10% transient sensory and 1.6% transient motor nerve injury in a meta-analysis [r5]. Document sensation and finger extension before surgery." },
      { system: "Musculoskeletal chain", effect: "Loss of supination strength affects tool use, driving and lifting; compensation shifts load to the shoulder and forearm (clinical reasoning)." },
      { system: "Metabolic and lifestyle", effect: "Higher body mass index and smoking were associated with rupture [r2]. Addressing them is part of long-term care, although whether changes alter the risk of a second rupture is unproven." },
      { system: "Psychological", effect: "Fear of re-rupture can limit early activity; most protocols restrict early aggressive loading for that reason [r8]. Education and a clear plan help." }
    ]
  },

  grading: {
    system: "Clinical classification: partial versus complete rupture, with or without retraction",
    grades: [
      { grade: "Partial tear or tendinopathy", description: "Part of the tendon remains attached; the hook test is intact but can be painful (painful in 9 of 12 partial detachments) [r4]. MRI helps to separate partial from complete tears.", prognosis: "MRI-confirmed partial tears can be managed non-operatively with immobilisation [r6]; surgery is considered if they fail to settle." },
      { grade: "Complete rupture, aponeurosis intact (limited retraction)", description: "The tendon has avulsed but the bicipital aponeurosis limits retraction, so the Popeye deformity is subtle and the ruptured tendon is easy to miss (clinical observation). The hook test is abnormal [r4].", prognosis: "Same indications for repair as a complete rupture [r6]" },
      { grade: "Complete rupture with retraction", description: "The tendon and aponeurosis have failed, the muscle belly retracts proximally and the Popeye sign is obvious (clinical observation). Hook test abnormal and biceps squeeze test positive [r9].", prognosis: "Primary repair within about 3–4 weeks is recommended [r6]; later repair is possible but more complex (clinical observation)." }
    ]
  },

  timeframes: {
    summary: "The tendon heals by the standard cascade, but timing is set by the repair and the surgeon's protocol. Primary repair is recommended within 3–4 weeks of rupture [r6]; a repair done after 21 days is classed as chronic [r7]. After repair, supination returned on the squeeze test at 3 months in all operated patients [r9]. Return to heavy lifting is typically 3–6 months (clinical convention).",
    healing: [
      { phase: "Haemorrhage and inflammation", startDay: 0, endDay: 5, description: "Haematoma and inflammatory cell invasion at the avulsion site (typical tendon biology)" },
      { phase: "Proliferation (protected motion after repair)", startDay: 5, endDay: 42, description: "Fibroblast-led deposition of disorganised collagen; after repair, the elbow is protected and moved within the surgeon's limits (typical biology)" },
      { phase: "Remodelling and strengthening", startDay: 42, endDay: 365, description: "Collagen organises along the line of load; strengthening progresses cautiously from about week 8 in one reported case [r8]" },
      { phase: "Acute repair window", startDay: 0, endDay: 28, description: "Primary repair within about 3–4 weeks is recommended for complete ruptures [r6]" }
    ],
    milestones: [
      { label: "Diagnosis and surgical referral", day: 7, note: "Aim for review within days; do not wait for the bruising to settle (clinical convention)" },
      { label: "Chronic threshold", day: 21, note: "Repairs after more than 21 days are classed as chronic; in a retrospective series of 75 chronic and 135 acute repairs, functional scores were similar [r7]" },
      { label: "End of the recommended primary-repair window", day: 28, note: "Primary repair within 3–4 weeks of injury [r6]" },
      { label: "Full active motion before week 6", day: 42, note: "The authors of a single case report suggest light strengthening may begin if full active motion is reached before week 6; most protocols avoid aggressive early stretching and strengthening for fear of re-rupture [r8]" },
      { label: "Supination returns on the squeeze test after repair", day: 90, note: "All 22 operated patients regained supination on the biceps squeeze test at 3 months [r9]" },
      { label: "Return to heavy lifting (typical)", day: 150, note: "Clinical convention; set by the surgeon's protocol and strength criteria" }
    ],
    returnToSport: "Criteria-based and surgeon-led. In a small series using a home-based programme after double-incision repair, all 21 patients returned to their previous surgical activities [r10]. Strength recovery after repair averaged 94.7% for flexion and 89.2% for supination in a meta-analysis [r5]. Typical lifting restrictions last roughly 3–6 months (clinical convention)."
  },

  clinicalPresentation: {
    symptoms: [
      "A sudden pop or tearing sensation at the front of the elbow during a heavy lift or when catching a load [r1]",
      "Sharp pain in the antecubital fossa that settles to a dull ache over days",
      "Bruising at the front of the elbow and forearm within 1–3 days",
      "Weakness of forearm supination (turning a screwdriver, opening a jar) and, to a lesser degree, elbow flexion [r5]",
      "Cramping or a visible change in the contour of the upper arm"
    ],
    signs: [
      "Popeye deformity: the biceps belly sits high and bunched in the upper arm, with a flattened antecubital fossa (may be subtle if the aponeurosis is intact)",
      "Antecubital ecchymosis and swelling",
      "Absent cord-like tendon on the hook test [r4]",
      "Positive biceps squeeze test: no supination when the biceps belly is squeezed [r9]",
      "Weak resisted supination and flexion, with preserved range of motion"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism: eccentric load on a flexed elbow, with a pop, which was described by every patient in a defined cohort [r1]",
      "Hand dominance: the dominant arm was involved in 86% [r1]",
      "Smoking, body mass index and occupational or gym lifting load [r2]",
      "Previous pain in the antecubital fossa (suggests pre-existing tendinopathy) [r6]",
      "Function: loss of supination and weight-bearing strength, and the patient's work, sport and goals",
      "Time since injury: the 3–4 week window and the 21-day threshold for chronic repair [r6,r7]",
      "Medication and health history: steroids, anabolic agents and fluoroquinolones (clinical convention), diabetes and smoking [r2]"
    ],
    observation: [
      "Contour of the arm: proximal bunching of the biceps belly (Popeye deformity), compared with the other arm",
      "Bruising in the antecubital fossa and forearm, and swelling",
      "Elbow posture and the willingness to supinate or lift"
    ],
    palpation: [
      "Antecubital fossa: the cord-like tendon should be palpable beneath the examiner's finger on the hook test; tenderness is often present [r4]",
      "Biceps muscle belly: higher and bunched compared with the other arm",
      "Medial edge of the aponeurosis (lacertus fibrosus), to see whether an aponeurosis remnant is palpable (clinical observation)"
    ],
    rangeOfMotion: [
      "Elbow flexion, extension, pronation and supination are usually near full; a block suggests another injury",
      "Compare passive supination with active supination against gravity"
    ],
    strength: [
      "Resisted supination at 90° of flexion: weak or painful. Supination strength was only 62.6% of the uninjured arm without surgery [r5]",
      "Resisted elbow flexion: often relatively preserved by the brachialis (83.0% of the other side without surgery) [r5]",
      "Compare both sides with a dynamometer, as flexion and supination strength ratios are used to judge repair outcome [r5]"
    ],
    neuro: [
      "Document sensation over the lateral forearm (lateral antebrachial cutaneous nerve) and finger and thumb extension before any surgery, because transient nerve injury occurs after repair [r5]",
      "Check the distal circulation and look for signs of a tense antecubital haematoma (clinical reasoning)"
    ],
    functional: [
      "Lifting and carrying tolerance with the elbow flexed",
      "Task simulation: turning a screwdriver, a door handle or a jar lid",
      "Patient-reported function: DASH, Mayo Elbow Performance Score [r5]"
    ],
    specialTests: [
      { name: "Hook test", purpose: "Detect a complete distal biceps avulsion", procedure: "The patient actively supinates with the elbow flexed to 90°. The examiner hooks an index finger under the biceps tendon from the lateral side. An intact tendon feels like a cord that the finger can hook; in avulsion there is no cord-like structure.", positive: "No cord-like structure to hook. Abnormal in 33 of 33 complete avulsions; intact in 12 of 12 partial detachments (although painful in 9 of 12) and in 45 of 45 uninjured arms. Performed by one surgeon in patients undergoing surgical exploration, so accuracy in routine physiotherapy practice is unproven [r4].", sensitivity: "100% (33 of 33 complete avulsions)", specificity: "100% (hook test intact in all 12 partial tears and 45 uninjured arms)", refs: ["r4"] },
      { name: "Biceps squeeze test", purpose: "Detect a complete rupture by the loss of supination when the muscle belly is squeezed", procedure: "With the patient relaxed and the elbow flexed, squeeze the biceps muscle belly and watch for passive supination of the forearm (analogous to the Thompson test).", positive: "No supination of the forearm on squeezing. The test was positive in 24 of 25 patients with presumptive rupture, 21 of 22 operated patients had a confirmed complete tear, and 65 of 65 control patients supinated normally. Results were not reported as sensitivity or specificity [r9].", sensitivity: "Not reported as a percentage (positive in 24 of 25 patients with presumptive rupture)", specificity: "Not reported as a percentage (normal in 65 of 65 controls)", refs: ["r9"] },
      { name: "Resisted supination and flexion strength", purpose: "Quantify the functional deficit and track recovery", procedure: "With the elbow flexed to 90°, resist supination and then flexion with a dynamometer or hand-held device; compare with the other side.", positive: "Marked supination weakness with relatively preserved flexion, consistent with rupture. Typical non-operative strengths were 62.6% (supination) and 83.0% (flexion) of the uninjured arm [r5]. No diagnostic accuracy was identified in the sources reviewed.", refs: ["r5"] },
      { name: "Observation for Popeye deformity and ecchymosis", purpose: "Identify a retracted biceps belly and the pattern of bruising", procedure: "Observe both arms from the side with the elbow flexed; ask the patient to contract the biceps.", positive: "A retracted, bunched biceps belly and antecubital bruising. The sign is absent or subtle if the aponeurosis is intact. No accuracy figure was identified in the sources reviewed.", refs: [] }
    ],
    clinicalRules: [
      { name: "Hook test plus squeeze test", description: "A clear abnormal hook test and loss of supination on the squeeze test together support a complete rupture and an early surgical referral; an intact but painful hook test suggests a partial tear [r4,r9]. No validated clinical prediction rule was identified in the sources reviewed." }
    ],
    outcomeMeasures: [
      { name: "DASH (Disabilities of the Arm, Shoulder and Hand)", use: "Standard patient-reported measure used to compare operative and non-operative care; surgery was favoured (p = .02) [r5]" },
      { name: "Mayo Elbow Performance Score or Index", use: "Clinician-rated elbow function used in the meta-analysis (surgery favoured, p < .001) [r5]; a mean score of 95 was reported after double-incision repair with home rehabilitation [r10]" },
      { name: "Flexion and supination strength ratio (injured to uninjured arm)", use: "Primary objective outcome: after surgery 94.7% and 89.2% [r5]; for chronic and acute repairs about 89% and 77% [r7]" },
      { name: "Range of motion (flexion, extension, pronation, supination)", use: "Track recovery; the single-incision approach gave better pronation range (81.5° vs 76.1°) in the meta-analysis [r5]" },
      { name: "Patient-Rated Elbow Evaluation (PREE) or Q-DASH", use: "Used in the acute versus chronic repair comparison, with no significant difference between groups [r7]" }
    ],
    imaging: [
      { modality: "Plain radiograph", indication: "After trauma or if a bony avulsion is suspected, and later for heterotopic ossification", findings: "Usually normal at presentation; heterotopic ossification occurred in 10% of surgical patients in a meta-analysis [r5]" },
      { modality: "MRI", indication: "Uncertain clinical diagnosis, suspected partial tear, or a delay in presentation", findings: "In one cohort MRI had a sensitivity of 92% and a specificity of 85%, lower than the hook test (100% for both) [r4]" },
      { modality: "Ultrasound", indication: "Dynamic assessment when MRI is not available", findings: "May show tendon discontinuity and a retracted stump. Accuracy was not examined in the sources reviewed." }
    ]
  },

  differentials: [
    { name: "Partial distal biceps tear or tendinopathy", distinguishing: "Pain at the antecubital fossa and with resisted supination, with an intact hook test that is often painful; MRI confirms partial tear [r4]. MRI-confirmed partial tears can be treated non-operatively [r6]." },
    { name: "Proximal (long head) biceps rupture", id: "proximal-biceps-rupture", distinguishing: "Popeye deformity of the upper arm with an intact distal tendon and a normal hook test; pain and bruising are at the shoulder or upper arm." },
    { name: "Triceps tendon rupture", id: "triceps-tendon-rupture", distinguishing: "Pain and a palpable defect at the back of the elbow after a fall or eccentric load, with weak elbow extension." },
    { name: "Brachialis strain or tear", distinguishing: "Anterior elbow pain and swelling after a load, with an intact biceps tendon and normal hook test; pain on resisted flexion rather than supination." },
    { name: "Elbow dislocation or fracture", id: "elbow-dislocation", distinguishing: "A fall or high-energy injury with deformity, swelling and loss of range; radiographs show the bony injury." },
    { name: "Bicipitoradial bursitis or anterior elbow impingement", distinguishing: "Pain and swelling in the antecubital fossa with forearm rotation and an intact hook test; no loss of supination strength." },
    { name: "Radial tunnel syndrome / PIN compression", id: "radial-tunnel-syndrome", distinguishing: "Lateral proximal forearm pain, with possible finger-extension weakness, but a normal hook test and preserved supination strength." }
  ],
  redFlags: [
    "Suspected complete rupture (pop, Popeye deformity, abnormal hook test): refer early for surgical review, because primary repair is recommended within 3–4 weeks [r6]. Late referral is still worthwhile, as chronic repairs (over 21 days) gave similar function in one series [r7].",
    "Tense swelling in the antecubital fossa, severe pain, paraesthesia, a cold or pale hand, or an absent pulse: suspect a large haematoma with neurovascular compromise or brachial artery injury. Send to emergency the same day.",
    "New numbness over the lateral forearm, or weakness of finger and thumb extension after repair: suspect nerve injury (transient sensory nerve injury 10%, transient motor nerve injury 1.6% in a meta-analysis). Inform the surgeon [r5].",
    "Sudden pop, new deformity or loss of flexion after surgical repair: suspect re-rupture. Contact the surgeon urgently.",
    "Progressive loss of forearm rotation or elbow movement after repair: suspect heterotopic ossification (10% in the meta-analysis). Refer for radiographs and surgical review [r5].",
    "Fever, spreading redness or wound discharge after surgery: suspect infection. Refer the same day."
  ],

  management: {
    principles: "Decide between surgical repair and non-operative care early and with the patient, using age, activity, dominance and supination demands. In a meta-analysis of 53 studies (1380 patients), surgery gave better DASH and Mayo Elbow Performance scores and better flexion (94.7% vs 83.0%) and supination (89.2% vs 62.6%) strength than non-operative care; the evidence was level 4, so the comparison is mostly observational [r5]. For complete ruptures, primary repair within 3–4 weeks of injury is recommended [r6], and an acute-versus-chronic comparison found similar function after delayed repair [r7]. Non-operative care is a reasonable choice for low-demand or older patients who accept the loss of supination strength (clinical judgement). Physiotherapists play three roles: recognising a rupture and referring early, preparing the patient, and delivering rehabilitation that follows the surgeon's protocol, because no consensus protocol exists [r8].",
    medical: [
      { name: "Surgical repair (anatomic single- or double-incision, button, anchor or screw fixation)", description: "Re-attaches the tendon to the radial tuberosity. In a systematic review and meta-analysis surgery was superior to non-operative care for DASH (p = .02), Mayo Elbow Performance Index (p < .001), flexion strength (94.7% vs 83.0%) and supination strength (89.2% vs 62.6%). Complications: heterotopic ossification 10%, transient sensory nerve injury 10%, transient motor nerve injury 1.6% and persistent motor deficit 0.1%. Fixation methods gave similar results, and the single-incision technique had slightly better pronation (81.5° vs 76.1°) [r5].", evidence: "limited", recommendation: "recommended", refs: ["r5", "r6"] },
      { name: "Early versus delayed repair", description: "Primary repair within 3–4 weeks is recommended for complete ruptures [r6]. In a retrospective case-control study of 75 chronic (over 21 days) and 135 acute repairs, functional results and strength recovery were similar, and heterotopic ossification was higher in the acute group [r7]. Do not treat late presentation as a reason not to refer.", evidence: "limited", recommendation: "consider", refs: ["r6", "r7"] },
      { name: "Non-operative management of a complete rupture", description: "Acceptable for low-demand, older or medically unfit patients who accept weaker supination. In the meta-analysis non-operative supination strength was 62.6% and flexion strength 83.0% of the uninjured arm, versus 89.2% and 94.7% after surgery [r5]. Two patients who declined surgery did not regain supination on the squeeze test at 3 months [r9].", evidence: "limited", recommendation: "consider", refs: ["r5", "r9"] },
      { name: "Immobilisation for MRI-confirmed partial tears", description: "MRI-confirmed partial ruptures can be treated non-operatively with immobilisation; complete ruptures should be repaired [r6]. Surgery is considered if a partial tear does not settle.", evidence: "expert-opinion", recommendation: "consider", refs: ["r6"] },
      { name: "Analgesia, ice and a sling before surgery", description: "Short-term symptom control while awaiting surgical review (clinical convention). It does not alter the need for early referral.", evidence: "expert-opinion", recommendation: "consider", refs: [] }
    ],
    physio: [
      { name: "Early recognition and referral (hook test, biceps squeeze test, supination strength)", description: "A clearly abnormal hook test and a positive squeeze test support a complete rupture and early surgical review. The hook test was abnormal in 33 of 33 complete avulsions in a surgeon's cohort [r4]; the squeeze test was positive in 24 of 25 patients with presumptive rupture [r9]. Complete ruptures are frequently missed, so examine both arms [r4].", evidence: "limited", recommendation: "recommended", refs: ["r4", "r9"] },
      { name: "Post-operative rehabilitation following the surgeon's protocol (protected motion, then progressive strengthening)", description: "In a retrospective series of 21 patients after double-incision repair with a home-based programme, mean MEPS was 95, mean DASH 0.4, range of motion recovered in every patient and all returned to their previous surgical activities [r10]. Most current protocols avoid aggressive early stretching, active range of motion or strengthening, because of fear of re-rupture; one case report progressed to full active motion early and started light strengthening around week 8 [r8]. No trial has compared protocols.", evidence: "very-limited", recommendation: "recommended", refs: ["r10", "r8"] },
      { name: "Rehabilitation for non-operative management", description: "Graded strengthening of supination and flexion, shoulder girdle and grip, with realistic expectations about residual supination weakness [r5]. No trial of rehabilitation protocols for non-operative distal biceps rupture was identified in the sources reviewed.", evidence: "very-limited", recommendation: "consider", refs: ["r5"] },
      { name: "Education, scar and swelling management, and neighbouring-joint conditioning", description: "Explain the injury, the surgeon's restrictions and the signs of complications; maintain shoulder, wrist and hand function and manage oedema (clinical convention).", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Early resisted supination or heavy eccentric elbow loading before surgical clearance", description: "Heavy resisted or eccentric loading of a repaired tendon risks re-rupture, which is why most protocols avoid early aggressive loading [r8]. Wait for the surgeon's clearance.", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r8"] }
    ],
    education: [
      "The biceps tendon has pulled off the forearm bone. The muscle cannot heal back by itself, so decisions about surgery should be made within days to weeks.",
      "Repair gives stronger bending and especially stronger forearm turning (supination) than no surgery, but it carries risks such as nerve irritation and extra bone formation.",
      "If you choose not to have surgery, expect to keep reasonable elbow bending strength but to lose a larger share of supination strength.",
      "Follow the surgeon's rehabilitation plan exactly. Heavy lifting and sudden pulling too soon can cause the repair to fail.",
      "Report new numbness, finger weakness, a new pop, a hot red wound or loss of movement straight away.",
      "Stopping smoking and managing weight are the main changes that may lower the risk of further tendon problems."
    ]
  },

  rehab: {
    overview: "Rehabilitation is criteria-based and follows the surgeon's protocol, which varies with technique and surgeon preference; no consensus protocol exists [r8]. The stages below describe typical progression after repair: protect and mobilise the neighbouring joints, restore motion within limits, build strength, then return to heavy lifting and sport. For non-operative management, the same progression applies from stage 2, guided by pain and the patient's goals. Dosages are typical clinical ranges, not trial prescriptions. As a working rule (clinical convention), pain during exercise should stay at or below about 3/10 and settle within 24 hours. A home-based programme after double-incision repair gave a mean MEPS of 95 in a small series [r10].",
    stages: [
      {
        name: "Protect & maintain",
        timeframe: "Weeks 0–2 (or as set by the surgeon)",
        goals: ["Protect the repair and manage wound, pain and swelling", "Maintain shoulder, scapular, wrist and hand function", "Educate on restrictions and warning signs"],
        precautions: ["No resisted elbow flexion or supination, and no lifting with the operated arm", "Avoid sudden active elbow extension against a load and passive end-range stretching [r8]", "Wear the splint or brace as directed; watch for numbness, finger weakness and wound problems [r5]"],
        exercises: [
          { name: "Hand and finger range of motion, and light putty squeeze", dosage: "3 × 10 hourly while awake; putty 3 × 10 at low effort, daily", cues: "Keep the elbow in the splint", figure: { pose: "ex-grip", view: "lateral" } },
          { name: "Shoulder pendulum and scapular setting", dosage: "2 × 1 min pendulum, 3 × 10 scapular sets, 2–3 times a day", cues: "Relax the operated arm; do not lift actively with the biceps", figure: { pose: "ex-pendulum", view: "lateral" } },
          { name: "Wrist active range of motion (within the brace allowance)", dosage: "3 × 10, 3 times a day", cues: "Elbow supported; avoid resisted wrist motion" },
          { name: "Swelling management (elevation, light compression, gentle movement)", dosage: "Throughout the day", cues: "Elevate the arm above heart height when resting" }
        ],
        progressionCriteria: ["Wound healed and no signs of infection", "Surgeon clearance to begin active-assisted elbow motion", "Pain at or below 3/10 at rest, and no new neurological symptoms"]
      },
      {
        name: "Restore motion",
        timeframe: "Weeks 2–8 (surgeon-dependent)",
        goals: ["Restore elbow flexion, extension and forearm rotation within the surgeon's limits", "Keep shoulder and scapular strength", "Avoid stiffness and heterotopic ossification triggers (vigorous passive stretching)"],
        precautions: ["Progress extension and supination in the ranges the surgeon permits; do not force terminal extension [r8]", "No resisted biceps loading yet", "Stop and report any new pop, sharp pain or loss of motion"],
        exercises: [
          { name: "Active-assisted elbow flexion and extension (using the other hand)", dosage: "3 × 10, 3–4 times a day, within comfortable range", cues: "Smooth movement; stop at gentle tension" },
          { name: "Active forearm supination and pronation (elbow at 90°, no resistance)", dosage: "3 × 10, 3 times a day", cues: "Slow and pain-free; do not add weight yet" },
          { name: "Scapular retraction with a light band (elbow at the side)", dosage: "3 × 12, daily", cues: "Keep the elbow close to the body and avoid active biceps loading", figure: { pose: "ex-row", view: "lateral", props: ["resistance-band"] } },
          { name: "Gentle grip and wrist strengthening", dosage: "3 × 10, daily", cues: "Elbow supported on a table", figure: { pose: "ex-wrist-flexion", view: "lateral", props: ["dumbbell"] } }
        ],
        progressionCriteria: ["Near-full active range of motion for flexion, extension, pronation and supination (compared with the other side)", "Surgeon clearance for light resisted exercise", "No pain on gentle isometric biceps contraction (checked with the surgeon)"]
      },
      {
        name: "Build strength",
        timeframe: "Weeks 8–16 (surgeon-dependent)",
        goals: ["Rebuild flexion and supination strength progressively", "Restore functional strength for daily tasks", "Reduce side-to-side differences"],
        precautions: ["Increase load only when the previous session settles within 24 hours", "Use slow tempos and avoid sudden heavy eccentric loads", "Do not return to heavy lifting yet"],
        exercises: [
          { name: "Isometric elbow flexion and supination holds (elbow at 90°)", dosage: "5 × 20–30 s at about 30–50% effort, daily, building to 70%", cues: "Build gradually; no sharp pain" },
          { name: "Light isotonic elbow flexion (curl) with supinated grip", dosage: "3 × 10–15, 3 s up and 3 s down, 3 times a week", cues: "Slow lowering; stop short of end-range extension" },
          { name: "Supination–pronation with a weighted bar or hammer", dosage: "3 × 10–12, 3 times a week", cues: "Short lever first, then lengthen", figure: { pose: "grip-tool", view: "lateral", props: ["hammer"] } },
          { name: "Band row and light carry", dosage: "3 × 10–12 (row), 3 × 20–30 m (carry), 3 times a week", cues: "Neutral spine; avoid sudden jerks", figure: { pose: "carry", view: "lateral" } },
          { name: "Shoulder and scapular strengthening", dosage: "2–3 sets of 10–12, 3 times a week", cues: "Maintain posture and trunk control", figure: { pose: "ex-shoulder-flexion", view: "lateral" } }
        ],
        progressionCriteria: ["Flexion and supination strength about 80% or more of the other side (clinical convention)", "No pain or swelling after heavier sessions", "Full or near-full range of motion", "Surgeon clearance for heavier loading"]
      },
      {
        name: "Return to heavy lifting and sport",
        timeframe: "Months 4–6+ (criteria-based)",
        goals: ["Return to heavy, eccentric and sudden loading", "Resume work, gym and sport in graded steps", "Maintain strength and manage long-term risks"],
        precautions: ["Progress load in small steps; avoid maximal lifts and uncontrolled drops until strength and surgeon criteria are met", "Warm up thoroughly and use a spotter for heavy lifts", "Re-rupture symptoms (pop, sudden weakness) need immediate surgeon review"],
        exercises: [
          { name: "Heavy slow curl and chin-up progression", dosage: "3–4 × 6–10, 3 s lowering, 2–3 times a week", cues: "Controlled lowering; do not drop into end-range extension" },
          { name: "Lift-and-carry progression (farmer carry, squat lift)", dosage: "3 × 30–40 m (carry), 3 × 6–8 (squat lift); 2–3 times a week", cues: "Neutral spine; share load between both arms", figure: { pose: "lift-squat", view: "lateral", props: ["barbell"] } },
          { name: "Push-up and pressing progression", dosage: "3 × 8–12, 2–3 times a week", cues: "Maintain elbow control", figure: { pose: "ex-press-up", view: "lateral", props: ["mat"] } },
          { name: "Sport- or work-specific drills (catching and pulling tasks, graded)", dosage: "Start at a fraction of normal volume and build in steps of 10–20% a week (clinical convention)", cues: "Quality first; stop if pain rises" }
        ],
        progressionCriteria: ["Flexion and supination strength about 90% or more of the other side, with no pain (clinical convention)", "Full range of motion, normal hook test and biceps squeeze test", "Completes full work or training for at least 2 weeks without a flare", "Surgeon clearance for unrestricted lifting"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No validated criteria for return to lifting after distal biceps repair were identified in the sources reviewed; the criteria below reflect clinical convention and surgeon protocols",
      "Surgeon clearance for unrestricted loading",
      "Full or near-full range of motion in flexion, extension, pronation and supination compared with the other side",
      "Flexion and supination strength about 90% or more of the other arm (clinical convention; the pooled post-surgical means were 94.7% and 89.2%) [r5]",
      "Pain-free resisted supination and flexion, with an intact hook test and a positive supination response to the squeeze test [r9]",
      "Tolerates graded lifting and sport-specific loading for at least 2 weeks with no flare"
    ],
    tests: ["Hook test (cord-like tendon present) and biceps squeeze test (supination response) [r4]", "Isometric flexion and supination strength at 90° with a dynamometer, compared with the other arm", "Range of motion in all four elbow and forearm planes", "DASH and Mayo Elbow Performance Score", "Task-specific lifting trial with a next-day pain and swelling log"]
  },
  prognosis: "With surgical repair, strength recovered to a mean of 94.7% (flexion) and 89.2% (supination) of the uninjured arm in a meta-analysis, versus 83.0% and 62.6% without surgery. Complications included heterotopic ossification (10%), transient sensory nerve injury (10%) and transient motor nerve injury (1.6%), with persistent motor deficits in 0.1% [r5]. In a retrospective comparison of 75 chronic and 135 acute repairs, strength recovered to about 89% (flexion) and 77% (supination), with no difference between the groups [r7]. In a small series of 21 patients on a home rehabilitation programme, all returned to their previous surgical activities [r10]. Rates of re-rupture and the long-term effect of non-operative care beyond strength deficits were not identified in the sources reviewed.",
  prevention: [
    "Avoid sudden, uncontrolled heavy loads on a flexed elbow: use controlled lifting, warm up thoroughly and use spotters for heavy weights (expert opinion). The rupture occurred under excessive eccentric tension in all patients in one cohort [r1].",
    "Stop smoking: smoking carried a 7.5 times greater risk in one cohort, although this association does not prove that stopping prevents rupture [r1].",
    "Manage body weight: elevated body mass index was associated with rupture [r2].",
    "Take antecubital or distal biceps pain seriously and review training load, because rupture may be superimposed on underlying tendinopathy [r6].",
    "No trial-proven prevention programme was identified in the sources reviewed."
  ],
  clinicalPearls: [
    "The hook test is the key bedside test. It was abnormal in 33 of 33 complete avulsions and normal in 45 of 45 uninjured arms, but in a single surgeon's cohort of patients undergoing exploration, so combine it with the squeeze test and the history [r4,r9].",
    "An intact but painful hook test points to a partial tear (9 of 12 partial detachments were painful), so painful resisted supination with a hookable tendon still needs MRI and an orthopaedic opinion [r4].",
    "Supination is the casualty. Non-operative supination strength was 62.6% versus flexion 83.0% of the uninjured arm, because the brachialis keeps the elbow flexing, so test supination, not just flexion [r5].",
    "Do not rely on the Popeye sign. It can be subtle when the aponeurosis is intact, and a complete rupture can look like a minor arm injury [r4].",
    "Refer early. Repair is recommended within 3–4 weeks [r6]. Earlier studies reported more complications after repairs delayed beyond 21 days, although one retrospective series found similar results [r7].",
    "Document sensation over the lateral forearm and finger and thumb extension before surgery, because transient nerve injury is common after repair (10% sensory, 1.6% motor) [r5]."
  ],
  related: ["proximal-biceps-rupture", "triceps-tendon-rupture", "elbow-dislocation", "medial-elbow-tendinopathy", "radial-tunnel-syndrome", "long-head-biceps-tendinopathy"],

  references: [
    { id: "r1", citation: "Safran MR, Graham SM. Distal biceps tendon ruptures: incidence, demographics, and the effect of smoking. Clin Orthop Relat Res. 2002;(404):275-83.", pmid: "12439270", type: "cohort", year: 2002 },
    { id: "r2", citation: "Kelly MP, Perkinson SG, Ablove RH, et al. Distal biceps tendon ruptures: an epidemiological analysis using a large population database. Am J Sports Med. 2015;43(8):2012-7.", pmid: "26063401", doi: "10.1177/0363546515587738", type: "cross-sectional", year: 2015 },
    { id: "r3", citation: "Seiler JG, Parker LM, Chamberland PD, et al. The distal biceps tendon. Two potential mechanisms involved in its rupture: arterial supply and mechanical impingement. J Shoulder Elbow Surg. 1995;4(3):149-56.", pmid: "7552670", doi: "10.1016/s1058-2746(05)80044-8", type: "basic-science", year: 1995 },
    { id: "r4", citation: "O'Driscoll SW, Goncalves LB, Dietz P. The hook test for distal biceps tendon avulsion. Am J Sports Med. 2007;35(11):1865-9.", pmid: "17687121", doi: "10.1177/0363546507305016", type: "diagnostic-accuracy", year: 2007 },
    { id: "r5", citation: "Cuzzolin M, Secco D, Guerra E, et al. Operative versus nonoperative management for distal biceps brachii tendon lesions: a systematic review and meta-analysis. Orthop J Sports Med. 2021;9(10):23259671211037311.", pmid: "34734095", doi: "10.1177/23259671211037311", type: "meta-analysis", year: 2021 },
    { id: "r6", citation: "Taylor SA, Hannafin JA. Evaluation and management of elbow tendinopathy. Sports Health. 2012;4(5):384-93.", pmid: "23016111", doi: "10.1177/1941738112454651", type: "narrative-review", year: 2012 },
    { id: "r7", citation: "Carlier Y, Pierreux PA. Primary repair of acute versus chronic ruptures of the distal biceps tendon. Comparison of functional results in a case-control study. Orthop Traumatol Surg Res. 2023;109(5):103559.", pmid: "36690325", doi: "10.1016/j.otsr.2023.103559", type: "case-control", year: 2023 },
    { id: "r8", citation: "Horschig A, Sayers SP, Lafontaine T, et al. Rehabilitation of a surgically repaired rupture of the distal biceps tendon in an active middle aged male: a case report. Int J Sports Phys Ther. 2012;7(6):663-71.", pmid: "23316429", type: "other", year: 2012 },
    { id: "r9", citation: "Ruland RT, Dunbar RP, Bowen JD. The biceps squeeze test for diagnosis of distal biceps tendon ruptures. Clin Orthop Relat Res. 2005;(437):128-31.", pmid: "16056039", doi: "10.1097/01.blo.0000167668.18444.f5", type: "diagnostic-accuracy", year: 2005 },
    { id: "r10", citation: "Forns GM, Simone JP, Varaona JM. Acute distal biceps repair using double incision technique: results of a standardized home rehabilitation protocol. Acta Ortop Mex. 2021;35(5):405-10.", pmid: "35451248", type: "cohort", year: 2021 }
  ],

  animation: {
    title: "How a distal biceps tendon ruptures",
    phases: [
      {
        type: "moi", label: "Sudden heavy load", duration: 7, view: "lateral", environment: "gym",
        actors: [{ id: "lifter", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "stand", root: { x: 0 } },
          { t: 0.9, pose: "carry", root: { x: 0 } },
          { t: 2.0, pose: "carry", joints: { elbowR: 100 }, ease: "out" },
          { t: 2.7, pose: "carry", joints: { elbowR: 45, trunk: 12 }, ease: "in" },
          { t: 3.5, pose: "carry", joints: { elbowR: 40, trunk: 14 } },
          { t: 5.5, pose: "carry", joints: { elbowR: 60, trunk: 8 }, ease: "out" },
          { t: 6.5, pose: "carry", joints: { elbowR: 70, trunk: 8 } }
        ],
        props: [{ id: "load", type: "kettlebell", attach: "handR" }],
        forces: [
          { t: [2.4, 3.3], at: "handR", dir: "down", label: "Sudden heavy load" },
          { t: [2.4, 3.4], at: "forearmR", dir: "up", label: "Biceps contracts against the load" }
        ],
        highlights: [{ t: [2.5, 7], at: "elbowR" }],
        impacts: [{ t: 2.8, at: "elbowR" }],
        slowmo: [{ t: [2.3, 3.2], rate: 0.3 }],
        captions: [
          { t: 0, text: "A man in his forties lifts a heavy load with the elbow bent and the forearm turned up." },
          { t: 1.2, text: "The biceps contracts hard to hold the load against gravity." },
          { t: 2.3, text: "The load suddenly exceeds what he can hold, and the elbow is forced towards extension." },
          { t: 2.8, text: "The biceps is lengthened while still contracting: an eccentric overload at the elbow." },
          { t: 3.6, text: "There is a pop and sharp pain at the front of the elbow." },
          { t: 5.0, text: "The arm is weak, and the biceps belly bunches up towards the shoulder." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "elbowR",
        captions: [{ t: 0, text: "Zooming into the right elbow from the inner side." }]
      },
      {
        type: "closeup", label: "Inside the elbow", duration: 10, scene: "elbow-medial",
        actions: [
          { t: 0, do: "highlight", target: "distalBicepsTendon" },
          { t: 0.3, do: "label", target: "distalBicepsTendon", text: "Distal biceps tendon" },
          { t: 1.0, do: "arrow", at: "radialTuberosity", dir: "distal", label: "Load forces the elbow open", size: "m" },
          { t: 1.1, do: "contract", target: "biceps", amount: 0.5, dur: 0.8 },
          { t: 1.4, do: "stretch", target: "distalBicepsTendon", amount: 0.45, dur: 1.0 },
          { t: 2.7, do: "avulse", target: "distalBicepsTendon", end: "to" },
          { t: 2.7, do: "impact", at: "radialTuberosity" },
          { t: 3.1, do: "pain", at: "radialTuberosity", hold: 3 },
          { t: 3.3, do: "move", target: "biceps", dir: "proximal", amount: 0.5, dur: 1.2 },
          { t: 4.6, do: "label", target: "biceps", text: "Retracted biceps belly (Popeye sign)" },
          { t: 5.8, do: "camera", at: "radialTuberosity", zoom: 1.7, dur: 1.0 },
          { t: 6.3, do: "label", target: "distalBicepsTendon", text: "Tendon avulsed from the radial tuberosity" },
          { t: 8.0, do: "highlight", target: "brachialis" },
          { t: 9.0, do: "camera", zoom: 1, dur: 0.8 }
        ],
        captions: [
          { t: 0, text: "The distal biceps tendon runs through the front of the elbow to the radial tuberosity." },
          { t: 1.0, text: "The biceps contracts as the load pulls the forearm open, so the tendon is stretched." },
          { t: 2.7, text: "The tendon avulses from the radial tuberosity, usually completely." },
          { t: 3.3, text: "The muscle belly recoils up the arm: the Popeye deformity." },
          { t: 4.6, text: "The hook test finds no cord-like tendon under the finger." },
          { t: 6.3, text: "Without repair the tendon cannot reattach, so supination stays weak." },
          { t: 8.0, text: "The brachialis still bends the elbow, so flexion is better preserved than supination." }
        ]
      },
      {
        type: "micro", label: "Tendon healing", duration: 10, tissue: "tendon",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.1, stage: "loaded" }, { t: 2.0, stage: "overload" }, { t: 2.9, stage: "failure" },
          { t: 3.9, stage: "haemorrhage" }, { t: 5.1, stage: "inflammation" }, { t: 6.5, stage: "proliferation" }, { t: 8.0, stage: "remodelling" }
        ],
        timeLabels: [{ t: 5.1, text: "0–5 days" }, { t: 6.5, text: "5 days – 6 weeks" }, { t: 8.0, text: "6 weeks – 12+ months" }],
        captions: [
          { t: 0, text: "Healthy tendon: aligned type I collagen carries the biceps force." },
          { t: 1.1, text: "Under heavy load the fibres straighten and tension rises." },
          { t: 2.0, text: "Eccentric overload pushes the collagen beyond its limit." },
          { t: 2.9, text: "The fibres fail at the bone attachment." },
          { t: 3.9, text: "Bleeding fills the gap, and the tendon end retracts." },
          { t: 5.1, text: "Inflammatory cells clear debris and release signals for repair." },
          { t: 6.5, text: "Fibroblasts lay down disorganised collagen; after surgical repair the tendon is held against the bone so it can heal." },
          { t: 8.0, text: "Collagen remodels along the line of load over many months, so strength returns slowly." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "UL4" }
};
