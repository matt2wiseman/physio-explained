// Inguinal-related groin pain ("sports hernia") — LL2
export default {
  id: "inguinal-related-groin-pain",
  name: "Inguinal-related groin pain (\"sports hernia\")",
  shortName: "Inguinal-related groin pain",
  aka: ["sports hernia", "sportsman's hernia", "inguinal disruption", "Gilmore's groin", "athletic pubalgia", "IRGP", "hockey groin"],
  region: "hip-groin",
  tissues: ["fascia", "muscle", "nerve"],
  onset: "gradual",
  mechanismType: ["overuse"],
  populations: ["male football players", "kicking, sprinting and change-of-direction sport athletes", "ice hockey players", "young adult male athletes"],
  sports: ["soccer", "australian football", "rugby", "ice hockey", "gaelic football", "hurling", "tennis"],
  urgency: "routine",
  summary: "Longstanding pain in the inguinal canal region with canal tenderness and no palpable hernia, typically worse with coughing, sneezing, sit-ups, sprinting and kicking. It is the Doha term for 'sports hernia'.",
  keyFacts: [
    { label: "Typical recovery", value: "Rehabilitation-first for 6–12 weeks; ~73% return pain-free at about 10 weeks in rehab cohorts" },
    { label: "Return to sport", value: "After surgery for failed rehab, most return within 6–12 weeks" },
    { label: "Key test", value: "Recognisable pain on inguinal canal palpation (scrotal invagination + Valsalva) and on resisted sit-up" },
    { label: "Imaging", value: "Ultrasound (dynamic) to exclude true hernia; MRI for other entities" },
    { label: "Peak age", value: "Mid-20s to early 30s (mean ~28 years in surgical series)" },
    { label: "Mechanism", value: "Repetitive trunk rotation and hip extension under load: kicking, sprinting, cutting" }
  ],
  overview: "Inguinal-related groin pain (IRGP) is the Doha agreement term for what was called 'sports hernia', 'sportsman's groin' or 'Gilmore's groin'. It is defined as pain in the inguinal canal region with tenderness of the inguinal canal and no palpable inguinal hernia. It is more likely if the pain is aggravated by abdominal resistance testing or by a Valsalva manoeuvre, cough or sneeze [r1]. The British Hernia Society consensus prefers 'inguinal disruption', because no true hernia exists. Surgeons describe abnormal tension around the inguinal ligament attachment, posterior inguinal wall weakness, small tears of the external oblique aponeurosis and local oedema [r3].\n\nIRGP is often one of several entities in the same athlete. In a multidisciplinary groin clinic, 44% of athletes had more than one cause of groin pain [r2]. It must be distinguished from a true hernia and from non-musculoskeletal causes. Management starts with tailored, multidisciplinary rehabilitation [r3], which returned 73% of athletes with athletic groin pain to play pain-free at about 10 weeks in a large cohort [r9]. Surgery (mesh reinforcement or minimal repair with tension release and nerve release) is reserved for athletes who fail rehabilitation. It has the strongest trial evidence of any treatment for this condition [r10,r13].",

  epidemiology: {
    text: "Precise incidence is unknown because definitions have varied, but IRGP is one of the four defined Doha entities and the second most common indication for groin surgery in athletes. In a systematic review of 47 surgical studies (2737 athletes), 94% were male, the mean age at surgery was 27.8 years, symptoms had lasted 13.1 months on average, and 71% played football (then rugby, Australian football and ice hockey) [r11]. Inter-examiner reliability for classifying IRGP is only moderate (κ 0.44), which partly explains the variable prevalence figures [r5]. Previous groin injury, a higher level of play and reduced adductor strength are general risk factors for groin injury [r6]. A high (muscular) insertion of the conjoint tendon on MRI is more common in symptomatic athletes and may predispose to IRGP [r7].",
    riskFactors: {
      intrinsic: [
        "Male sex and young adult age (94% male, mean age ~28 years in surgical series) [r11]",
        "Previous groin injury [r6]",
        "Reduced hip adductor strength (modifiable) [r6]",
        "High insertion of the conjoint tendon (types 1–2 in 76% of patients vs 28% of controls) [r7]",
        "Coexisting hip-related groin pain or FAI morphology, which may increase load on the abdominal wall [r12]"
      ],
      extrinsic: [
        "Football codes and ice hockey: repetitive kicking, sprinting, cutting and skating [r11]",
        "Higher level of play and congested fixtures [r6]",
        "Rapid increases in sprinting or kicking volume"
      ]
    }
  },

  mechanism: {
    summary: "IRGP is an overuse condition of the lower abdominal wall at the inguinal canal. Repetitive, forceful trunk rotation and hip extension during kicking, sprinting and cutting load the external oblique aponeurosis, the conjoint tendon and the transversalis fascia of the posterior inguinal wall. The rectus abdominis and abdominal wall pull the pubis upward while the adductors pull it downward. When this repetitive load exceeds tissue capacity, the posterior wall and aponeurosis attenuate and develop microtears, and the ilioinguinal, iliohypogastric or genitofemoral nerves can become irritated or entrapped [r3,r8].",
    sequence: [
      "Training or match load builds over weeks with high volumes of sprinting, kicking and change of direction.",
      "In the kicking backswing the trunk extends and rotates away while the hip extends, stretching the lower abdominal wall over the pubis.",
      "The abdominal muscles then contract forcefully to drive trunk flexion and rotation while the adductors pull the pubis the opposite way.",
      "Repetitive tension concentrates where the external oblique aponeurosis, conjoint tendon and inguinal ligament attach near the pubic tubercle [r3].",
      "The transversalis fascia of the posterior inguinal wall attenuates and the superficial ring may dilate [r3,r8].",
      "Local nerves (most often the ilioinguinal) become irritated or entrapped in thickened or scarred tissue [r10].",
      "The athlete notices deep inguinal pain with sprinting, kicking and sit-ups, and later with coughing or sneezing [r1]."
    ],
    variants: [
      { name: "Acute onset", description: "A minority recall a specific sprint, kick or twist after which pain began, although most describe a gradual onset." },
      { name: "Dual pathology with FAI", description: "IRGP often coexists with hip-related groin pain. Treating the hip alone resolved the inguinal component without groin surgery in 89% of athletes with both [r12]." },
      { name: "Combined with adductor-related groin pain", description: "Abdominal and adductor attachments share the pubic aponeurotic plate, so adductor- and inguinal-related pain frequently coexist [r2]." }
    ]
  },

  anatomy: {
    text: "The inguinal canal is an oblique passage, about 4 cm long, above the medial half of the inguinal ligament. It runs from the deep ring (in the transversalis fascia) to the superficial ring (in the external oblique aponeurosis, just above and lateral to the pubic tubercle) and carries the spermatic cord or round ligament and the ilioinguinal nerve. Its anterior wall is the external oblique aponeurosis. Its posterior wall is the transversalis fascia, reinforced medially by the conjoint tendon (the fused lower fibres of internal oblique and transversus abdominis inserting on the pubic crest). Its floor is the inguinal ligament. The posterior wall and the conjoint tendon insertion lie next to the rectus abdominis and the adductor longus origin on the pubis. This is why abdominal-wall and adductor problems interact [r3,r8].",
    structures: [
      { name: "Posterior inguinal wall (transversalis fascia)", role: "Resists intra-abdominal pressure. It attenuates or bulges in IRGP (79% of operated athletes in one series) [r10]." },
      { name: "Conjoint tendon", role: "Reinforces the medial posterior wall. A high, muscular insertion is associated with IRGP [r7]." },
      { name: "External oblique aponeurosis and superficial ring", role: "Anterior wall. Tears and ring dilatation are described in inguinal disruption [r3,r8]." },
      { name: "Inguinal ligament", role: "Floor of the canal and attachment for the abdominal wall. Abnormal tension around its pubic attachment is a consistent surgical finding [r3]." },
      { name: "Ilioinguinal, iliohypogastric and genitofemoral nerves", role: "Sensory supply to the groin, scrotum or labia and upper medial thigh. Entrapment was found in 96% of operated athletes [r10]." },
      { name: "Rectus abdominis", role: "Inserts on the pubis and opposes adductor pull. It may be involved in combined 'core muscle' injuries." }
    ]
  },

  pathophysiology: {
    tissueDamage: "Inguinal disruption is an overload injury of the abdominal-wall attachments at the pubis, not a true hernia. Repetitive shear and tension cause the transversalis fascia to attenuate and bulge, the external oblique aponeurosis to develop small tears with dilatation of the superficial ring, and the tissues around the inguinal ligament attachment to become oedematous and abnormally tense [r3]. Dynamic ultrasound may show posterior wall bulging, preperitoneal fat moving at Hesselbach's triangle, or ring dilatation. MRI can show associated rectus abdominis or adductor enthesis injury and symphyseal oedema, but its accuracy for IRGP itself is debated [r8].\n\nNerves play an important part. In a surgical series of 51 athletes, ilioinguinal nerve entrapment was found in 92.5%, iliohypogastric in 30.8% and genitofemoral in 13.2%, and scar tissue around the adductor origin needed debridement in 57% [r10]. This mix of fascial, tendinous and neural pathology explains why IRGP pain is often diffuse, may radiate to the scrotum or upper thigh, and is aggravated by raised intra-abdominal pressure. No single clinical test is definitive [r4].",
    structures: [
      { name: "Transversalis fascia (posterior wall)", effect: "Attenuation and bulging under raised intra-abdominal pressure [r3,r10]" },
      { name: "External oblique aponeurosis / superficial ring", effect: "Small tears and dilatation of the superficial ring [r3,r8]" },
      { name: "Conjoint tendon", effect: "Strain or tearing at its pubic insertion, more common with a high muscular insertion [r7]" },
      { name: "Ilioinguinal and genital branch of genitofemoral nerve", effect: "Entrapment or irritation causing burning or radiating pain to the scrotum, labia or medial thigh [r10]" },
      { name: "Adductor longus origin and rectus abdominis insertion", effect: "Frequently co-involved through the shared pubic aponeurosis [r2,r10]" }
    ],
    muscles: [
      { name: "Abdominal wall (obliques, transversus, rectus)", effect: "Pain inhibition reduces trunk control during sprinting and cutting. Resisted sit-up tests are painful in a proportion of cases (21–49%) [r4]." },
      { name: "Hip adductors", effect: "Often weak and painful as a coexisting entity. Restoring adductor strength is part of rehabilitation [r2,r6]." },
      { name: "Trunk and pelvic control", effect: "Increased ipsilateral trunk side flexion when cutting. This reduced with intersegmental-control rehabilitation [r9]." }
    ],
    cellular: [
      { phase: "Microtrauma & oedema", timing: "Weeks of overload", description: "Repetitive tension causes microtears in aponeurotic and fascial collagen, with local oedema and inflammatory mediators [r3]." },
      { phase: "Disorganised repair", timing: "Weeks–months", description: "Fibroblasts lay down disorganised collagen. The fascia attenuates or thickens and scar can tether local nerves [r10]." },
      { phase: "Fascial thickening & neural irritation", timing: "Months (persistent cases)", description: "Thickened, less compliant tissue around the superficial ring and inguinal ligament attachment. Peripheral nerve sensitisation adds burning, radiating pain." },
      { phase: "Remodelling", timing: "6–12+ weeks of graded load (or after repair)", description: "Collagen realigns along the lines of load as capacity is rebuilt with rehabilitation, or after surgical reinforcement and tension release [r9,r10]." }
    ],
    systems: [
      { system: "Nervous system", effect: "Ilioinguinal, iliohypogastric and genitofemoral nerve entrapment or irritation produces burning, radiating pain and sometimes altered sensation in the groin, scrotum or labia [r10]." },
      { system: "Musculoskeletal chain", effect: "Hip-related pathology (FAI) and adductor dysfunction change the load on the abdominal wall. Treating the hip can resolve inguinal symptoms in dual pathology [r12]." },
      { system: "Pressure / respiratory", effect: "Raised intra-abdominal pressure (cough, sneeze, Valsalva when lifting) loads the attenuated posterior wall and reproduces pain [r1,r4]." },
      { system: "Psychological / performance", effect: "Symptoms often last more than a year before surgery (mean 13 months), with reduced sprint and kicking performance and frustration over unclear diagnoses [r11]." }
    ]
  },

  grading: null,

  timeframes: {
    summary: "Rehabilitation-first management usually takes 6–12 weeks. In a cohort of 205 athletes with athletic groin pain, 73% returned to play pain-free at a mean of 9.9 weeks [r9]. After surgery for failed rehabilitation, return to sport is typically 4–12 weeks depending on technique [r10,r13].",
    healing: [
      { phase: "Settle symptoms", startDay: 0, endDay: 14, description: "Load modification and pain-free trunk and hip activation" },
      { phase: "Capacity & intersegmental control", startDay: 10, endDay: 70, description: "Progressive trunk, hip and adductor strength and running mechanics [r9]" },
      { phase: "Return to sport", startDay: 49, endDay: 98, description: "Graded sprinting, change of direction and kicking" },
      { phase: "Post-operative recovery (if needed)", startDay: 0, endDay: 84, description: "Wound and fascial healing, then graded return over 4–12 weeks [r10,r13]" }
    ],
    milestones: [
      { label: "Pain-free cough/sneeze and daily activities", day: 14, note: "Typical" },
      { label: "Pain-free running", day: 28 },
      { label: "Pain-free return to play (rehab cohort mean)", day: 69, note: "Mean 9.9 weeks [r9]" },
      { label: "Review surgical option if rehab fails", day: 84, note: "After ~2–3 months of well-conducted rehabilitation [r3,r13]" },
      { label: "Return to sport after surgery (typical)", day: 42, note: "Mean 5.9 weeks after minimal repair and neurolysis [r10]" }
    ],
    returnToSport: "About 6–12 weeks with rehabilitation (73% pain-free at a mean of 9.9 weeks) [r9]. After surgery, 90% returned to sport within 3 months in an RCT [r13] and 92% returned to their pre-injury level across surgical series [r11]."
  },

  clinicalPresentation: {
    symptoms: [
      "Gradual, deep, unilateral (sometimes bilateral) pain in the inguinal region above the inguinal ligament",
      "Pain with sprinting, kicking, cutting, sit-ups and getting out of bed or a car",
      "Pain with coughing, sneezing or straining (Valsalva) [r1]",
      "Pain may radiate to the adductor region, scrotum or labia, or upper medial thigh",
      "Stiffness and soreness the morning after a match"
    ],
    signs: [
      "Tenderness of the inguinal canal and superficial ring, often best found on scrotal invagination with Valsalva [r4]",
      "Recognisable pain on resisted sit-up or oblique sit-up [r4]",
      "No palpable hernia on standing cough impulse examination [r1]",
      "Tenderness at the pubic tubercle or conjoint tendon insertion",
      "Coexisting adductor or hip findings in many athletes [r2]"
    ]
  },

  assessment: {
    subjective: [
      "Location: inguinal canal above the inguinal ligament, compared with the adductor origin, pubic symphysis or deep hip [r1]",
      "Aggravation with coughing, sneezing, sit-ups, sprinting and kicking [r1]",
      "Onset and duration, previous groin injuries and treatments, and load history [r6]",
      "Lumps, testicular pain or swelling, urinary symptoms, haematuria, bowel or gynaecological symptoms",
      "Burning or radiating pain or numbness suggesting nerve involvement [r10]",
      "Hip symptoms: clicking, catching, pain sitting or with deep flexion (possible dual pathology) [r12]"
    ],
    observation: ["Usually normal. Look for a visible bulge on standing and coughing (true hernia)", "Trunk and pelvic posture; movement quality when cutting (trunk side flexion) [r9]"],
    palpation: [
      "Inguinal canal palpation via scrotal invagination (males) at rest and with Valsalva: recognisable pain was positive in 79% of defined IRGP [r4]",
      "Superficial ring size, posterior wall 'softness' or bulging (poor reliability, κ 0.01–0.29) [r4]",
      "Pubic tubercle, conjoint tendon and rectus abdominis insertion",
      "Adductor longus origin and pubic symphysis to identify coexisting entities [r2]"
    ],
    rangeOfMotion: ["Hip flexion, internal rotation and FADIR to screen hip-related groin pain [r12]", "Trunk extension and rotation (often provocative at end range)", "Bent-knee fall-out for adductor flexibility"],
    strength: [
      "Resisted sit-up and oblique sit-up (pain provocation and endurance) [r4]",
      "Adductor squeeze test at 0° and 45° (coexisting adductor involvement)",
      "Hip abduction, extension and flexion strength",
      "Side-bridge endurance"
    ],
    neuro: ["Sensation over the ilioinguinal (groin, root of penis or labia, upper medial thigh) and genitofemoral (scrotum or labia) distributions", "Tinel's sign medial to the ASIS (ilioinguinal) if burning pain is reported"],
    functional: ["Sprinting, cutting and kicking with pain rating", "Single-leg squat and cutting assessment for trunk side flexion and pelvic control [r9]", "Repeated sit-ups or a plank hold for provocation and endurance"],
    specialTests: [
      {
        name: "Inguinal canal palpation with Valsalva (scrotal invagination)",
        purpose: "Provoke recognisable pain at the inguinal canal and superficial ring",
        procedure: "Patient standing or supine. Invaginate the scrotal skin with the little finger toward the superficial ring (in females palpate over the canal), then ask the patient to cough or perform a Valsalva manoeuvre.",
        positive: "Reproduction of the athlete's recognisable inguinal pain (not just discomfort). It was the most prevalent positive test in defined IRGP (79%). Inter-examiner reliability of inguinal palpation provocation is fair to moderate (κ 0.35–0.49) [r4].",
        refs: ["r4"]
      },
      {
        name: "Resisted sit-up / oblique sit-up",
        purpose: "Provoke inguinal pain with abdominal contraction",
        procedure: "Supine with knees bent. The patient curls up (straight or rotating toward the opposite knee) against the examiner's resistance at the chest or shoulder.",
        positive: "Recognisable inguinal pain. Positive in 21–49% of defined IRGP, with fair to substantial reliability (κ 0.35–0.72) [r4]. A negative test does not exclude IRGP.",
        refs: ["r4"]
      },
      {
        name: "Posterior wall assessment (firmness / bulging)",
        purpose: "Traditional assessment of posterior wall deficiency",
        procedure: "During invagination, feel for a soft posterior wall or bulging with cough.",
        positive: "Soft or bulging wall. Reliability is slight to fair (κ 0.01 for firmness, 0.29 for bulging), so do not base a diagnosis on it [r4].",
        refs: ["r4"]
      },
      {
        name: "Cough impulse / hernia examination",
        purpose: "Exclude a true inguinal or femoral hernia",
        procedure: "Patient standing. Inspect and palpate the inguinal and femoral regions while the patient coughs.",
        positive: "A palpable expansile impulse or lump indicates a true hernia, which excludes IRGP by definition and needs surgical review [r1].",
        refs: []
      }
    ],
    clinicalRules: [
      { name: "Doha agreement definition of IRGP", description: "Pain in the inguinal canal region and tenderness of the inguinal canal, with no palpable inguinal hernia. More likely if aggravated by abdominal resistance or Valsalva, cough or sneeze [r1]. Classify every coexisting entity." }
    ],
    outcomeMeasures: [
      { name: "Copenhagen Hip and Groin Outcome Score (HAGOS)", use: "Primary PROM in rehabilitation and surgical cohorts [r16,r9]" },
      { name: "Pain (NRS) during sprinting, kicking, sit-ups and cough", use: "Track irritability and response to loading" },
      { name: "Adductor squeeze test and side-bridge endurance", use: "Objective capacity measures for coexisting adductor and trunk deficits" }
    ],
    imaging: [
      { modality: "Dynamic ultrasound", indication: "To exclude a true inguinal or femoral hernia and assess the posterior wall", findings: "Posterior wall (transversalis fascia) bulging, preperitoneal fat passing at Hesselbach's triangle, superficial ring dilatation [r8]" },
      { modality: "MRI pelvis", indication: "Atypical or refractory cases; to identify coexisting adductor, pubic or hip pathology", findings: "Rectus abdominis or adductor enthesis injury, pubic bone marrow oedema, conjoint tendon insertion type. Accuracy for IRGP itself is debated [r7,r8]." },
      { modality: "Plain radiograph (AP pelvis, hip views)", indication: "Suspected hip-related groin pain or bony pathology", findings: "Cam or pincer morphology (dual pathology), symphyseal changes [r12]" }
    ]
  },

  differentials: [
    { name: "True inguinal or femoral hernia", distinguishing: "Palpable or visible expansile lump on coughing or standing. Needs surgical referral." },
    { name: "Adductor-related groin pain", id: "adductor-related-groin-pain", distinguishing: "Tenderness at the adductor longus origin and pain on resisted adduction rather than at the inguinal canal [r1]." },
    { name: "Pubic-related groin pain", id: "pubic-related-groin-pain", distinguishing: "Local tenderness over the symphysis and adjacent pubic bone [r1]." },
    { name: "Iliopsoas-related groin pain", id: "iliopsoas-related-groin-pain", distinguishing: "More lateral pain with resisted hip flexion and iliopsoas stretch pain [r1]." },
    { name: "Hip-related groin pain (FAI syndrome)", id: "fai-syndrome", distinguishing: "Deep anterior hip pain, positive FADIR, limited internal rotation, mechanical symptoms. May coexist (dual pathology) [r12]." },
    { name: "Rectus abdominis strain", id: "rectus-abdominis-strain", distinguishing: "Pain and tenderness at the rectus insertion or belly, usually after an acute event." },
    { name: "Ilioinguinal or genitofemoral neuropathy (other cause)", distinguishing: "Burning pain with sensory change in the nerve distribution, often after previous surgery." },
    { name: "Urological, gynaecological or abdominal causes", distinguishing: "Testicular pathology, epididymitis, urinary tract stones, prostatitis, ovarian pathology, appendicitis or inflammatory bowel disease, with systemic or organ-specific symptoms." }
  ],
  redFlags: [
    "A tender, irreducible groin lump with vomiting, abdominal distension or absent bowel movements: suspect incarcerated or strangulated hernia. Send to the emergency department immediately.",
    "Sudden severe testicular pain or swelling (torsion), or a painless testicular lump (possible tumour): refer for same-day urological assessment.",
    "Fever, dysuria, haematuria or loin-to-groin colicky pain (infection, stones), or right iliac fossa pain with fever (appendicitis): arrange urgent medical review.",
    "Unexplained weight loss, night pain or enlarged inguinal lymph nodes: refer for medical investigation of infection or malignancy.",
    "Pain on hopping with bony tenderness in an endurance athlete: exclude pubic ramus or femoral neck stress fracture with MRI."
  ],

  management: {
    principles: "Start with a multidisciplinary, rehabilitation-first approach [r3]. Confirm the Doha entities present, exclude a true hernia and non-musculoskeletal causes, and treat coexisting adductor and hip problems in parallel [r1,r2]. Rehabilitation targets trunk, pelvic and hip capacity and intersegmental control during running and change of direction, with graded return of sprinting and kicking [r9]. Conservative care has limited trial evidence. In the one RCT, laparoscopic mesh repair outperformed conservative care that included active physiotherapy, injections and NSAIDs (90% vs 27% back in sport at 3 months) [r13]. Systematic reviews also give moderate evidence for surgery over conservative treatment [r14]. Surgery is therefore a reasonable option after about 2–3 months of well-conducted rehabilitation. If dual pathology with FAI is present, address the hip first, because hip arthroscopy alone resolved the inguinal component in 89% [r12].",
    medical: [
      { name: "Laparoscopic (TEP/TAPP) mesh reinforcement", description: "Mesh placed behind the posterior wall and pubic region. In an RCT of 60 athletes, 90% returned to sport by 3 months versus 27% with conservative care, and 23% of the conservative group later chose surgery [r13]. Long-term cohort data show 75% pain-free during exercise at a median of 83 months [r15].", evidence: "moderate", recommendation: "consider", refs: ["r13", "r15", "r14"] },
      { name: "Open minimal repair with tension release and nerve release (neurolysis or neurectomy)", description: "Repair of the posterior wall with release of the ilioinguinal or genitofemoral nerve based on intraoperative findings. In a case series, 96% returned to the same level at a mean of 5.9 weeks [r10]. Return to play after inguinal surgery is about 92% across mostly low-quality studies [r11].", evidence: "limited", recommendation: "consider", refs: ["r10", "r11"] },
      { name: "Hip arthroscopy for dual pathology (FAI + inguinal disruption)", description: "When FAI syndrome coexists, correcting the hip alone avoided groin surgery in 89% of cases, with outcomes similar to combined surgery [r12].", evidence: "limited", recommendation: "consider", refs: ["r12"] },
      { name: "Corticosteroid injection or nerve blocks", description: "Diagnostic or short-term pain relief, for example an ilioinguinal block when nerve pain dominates. Injections were part of the conservative arm that did worse than surgery in the RCT [r13].", evidence: "very-limited", recommendation: "consider", refs: ["r13"] }
    ],
    physio: [
      { name: "Tailored, multidisciplinary rehabilitation (first-line)", description: "Progressive trunk, abdominal-wall, hip and adductor strengthening with load management for 6–12 weeks, as recommended by the British Hernia Society consensus [r3].", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Intersegmental control and change-of-direction mechanics rehabilitation", description: "Rehabilitation focused on trunk–pelvis–hip control during running and cutting, progressing linear running to multidirectional drills. In 205 athletes with athletic groin pain (mixed entities), 73% returned to play pain-free at a mean of 9.9 weeks, with improved HAGOS and cutting biomechanics [r9].", evidence: "limited", recommendation: "recommended", refs: ["r9"] },
      { name: "Adductor strengthening for coexisting adductor-related pain", description: "Copenhagen adduction and squeeze progressions when adductor findings coexist, as they often do [r2,r17].", evidence: "moderate", recommendation: "recommended", refs: ["r17", "r2"] },
      { name: "Post-operative rehabilitation", description: "Early walking, then progressive trunk and hip loading from about week 1–2 and running from about week 2–4, depending on the surgical technique and the surgeon's protocol. Most athletes return within 4–12 weeks [r10,r13].", evidence: "limited", recommendation: "recommended", refs: ["r10", "r13"] },
      { name: "Prolonged rest or passive treatment alone", description: "Rest and passive modalities may ease symptoms temporarily but do not restore capacity. Symptoms usually return when sprinting and kicking resume.", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] }
    ],
    education: [
      "A 'sports hernia' is not a true hernia. It is an overload injury of the lower abdominal wall where it attaches to the pubic bone.",
      "Most athletes improve with a structured program over 6–12 weeks. Surgery is an option if good rehab has not worked after 2–3 months.",
      "Coughing or sneezing pain is typical and not dangerous, but a new lump or testicular pain needs a doctor's review.",
      "Other groin problems (adductor or hip) often coexist and must be treated too, otherwise pain persists.",
      "Sprinting and kicking are reintroduced gradually because they load the injured area most."
    ]
  },

  rehab: {
    overview: "Progress by criteria using pain (≤3/10 during and settled by the next morning), provocation tests (cough, resisted sit-up, inguinal palpation) and functional performance. Rehabilitation targets trunk and abdominal-wall capacity, hip and adductor strength, and intersegmental control during running and cutting [r9]. Address coexisting entities in parallel. After surgery use the same stages but follow the surgeon's restrictions (usually 1–2 weeks of light activity before progressive loading).",
    stages: [
      {
        name: "Settle & activate",
        timeframe: "Weeks 0–2 (post-op: weeks 0–2)",
        goals: ["Pain-free daily activities, coughing and sneezing", "Pain-free low-load trunk and hip activation", "Maintain aerobic fitness"],
        precautions: ["Avoid sit-ups, maximal sprinting and long kicking", "Post-op: protect the wound; no heavy lifting or straining per the surgeon"],
        exercises: [
          { name: "Dead bug", dosage: "3 × 8 each side, daily", cues: "Exhale and keep the lower back gently on the floor", figure: { pose: "ex-dead-bug", view: "lateral", props: ["mat"] } },
          { name: "Glute bridge", dosage: "3 × 12", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Isometric adductor squeeze (ball between knees)", dosage: "5 × 10–20 s at moderate effort", cues: "No inguinal pain" },
          { name: "Bird-dog", dosage: "3 × 8 each side", figure: { pose: "ex-bird-dog", view: "lateral", props: ["mat"] } },
          { name: "Walking or stationary bike", dosage: "20–30 min daily" }
        ],
        progressionCriteria: ["Pain-free cough and sneeze", "Pain ≤2/10 on resisted sit-up", "Pain-free brisk walking and cycling"]
      },
      {
        name: "Trunk, hip & adductor capacity",
        timeframe: "Weeks 2–6",
        goals: ["Restore trunk endurance and rotational strength", "Restore hip and adductor strength", "Pain-free running"],
        precautions: ["Progress rotational and anti-extension load gradually"],
        exercises: [
          { name: "Side plank", dosage: "3 × 20–45 s each side", figure: { pose: "ex-side-plank", view: "anterior", props: ["mat"] } },
          { name: "Forearm plank", dosage: "3 × 30–60 s", figure: { pose: "ex-plank", view: "lateral", props: ["mat"] } },
          { name: "Copenhagen adduction (short → long lever)", dosage: "2–3 × 6–10 each side, 2–3×/week", figure: { pose: "ex-copenhagen", view: "anterior", props: ["bench"] } },
          { name: "Hip thrust", dosage: "3 × 8–12", figure: { pose: "ex-hip-thrust", view: "lateral", props: ["bench", "barbell"] } },
          { name: "Split squat", dosage: "3 × 8–10", figure: { pose: "ex-split-squat", view: "lateral" } },
          { name: "Graded linear running", dosage: "Run–walk building to 20–30 min continuous, 3×/week" }
        ],
        progressionCriteria: ["Side bridge ≥60 s each side without pain", "Squeeze-test force symmetrical and pain-free", "Pain-free continuous running for 20–30 min"]
      },
      {
        name: "Intersegmental control, speed & change of direction",
        timeframe: "Weeks 4–10",
        goals: ["Efficient cutting mechanics with less trunk side flexion", "High-speed running", "Progressive kicking"],
        precautions: ["Increase one variable at a time: speed, angle or kick distance"],
        exercises: [
          { name: "Single-leg squat and step-down control", dosage: "3 × 8 each side", cues: "Trunk upright over the stance foot, pelvis level", figure: { pose: "ex-single-leg-squat", view: "anterior" } },
          { name: "Change-of-direction drills (45° → 90° → 110°+)", dosage: "2–3 sessions/week", cues: "Push the centre of mass in the direction of travel, avoid leaning the trunk sideways", figure: { pose: "cut-plant", view: "anterior" } },
          { name: "Acceleration and sprint progressions", dosage: "6–10 × 20–40 m at 70 → 90 → 100%", figure: { pose: "sprint-drive", view: "lateral" } },
          { name: "Rotational medicine-ball throws (progressive)", dosage: "3 × 6 each side", cues: "Rotate from the hips and trunk together" },
          { name: "Graded kicking program", dosage: "Short → long passing → shooting over 2–3 weeks" }
        ],
        progressionCriteria: ["Pain-free sprinting and cutting at full speed", "Pain-free long kicking", "Negative provocation on resisted sit-up and cough", "HAGOS Sport subscale approaching normal"]
      },
      {
        name: "Return to sport",
        timeframe: "Weeks 8–12 (post-op: weeks 4–12)",
        goals: ["Full team training, then match play", "Maintain trunk and adductor strength"],
        precautions: ["Monitor next-day symptoms during the first matches", "Refer for surgical opinion if symptoms persist after ~2–3 months of good rehab [r3,r13]"],
        exercises: [
          { name: "Full team training", dosage: "≥1–2 weeks before match selection" },
          { name: "Maintenance trunk and adductor program", dosage: "2×/week", figure: { pose: "ex-copenhagen", view: "anterior", props: ["bench"] } },
          { name: "Sprint and kicking exposure", dosage: "Within training, matched to positional demands" }
        ],
        progressionCriteria: ["Full training without symptom flare", "Athlete confidence in sprinting and shooting"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "No recognisable pain with coughing, sneezing, resisted sit-up and inguinal palpation",
      "Pain-free maximal sprinting, change of direction and long kicking",
      "Restored trunk endurance and symmetrical adductor squeeze strength",
      "Completion of full team training without next-day flare",
      "HAGOS Sport and Participation subscales recovered [r16]"
    ],
    tests: ["Resisted sit-up and oblique sit-up provocation", "Adductor squeeze test (dynamometer)", "Side-bridge endurance", "Sport-specific sprint, cutting and kicking tasks", "HAGOS"]
  },
  prognosis: "With rehabilitation focused on intersegmental control, 73% of athletes with athletic groin pain returned to play pain-free at a mean of 9.9 weeks [r9]. In athletes who fail conservative care, surgery has good outcomes. In the RCT, 90% returned to sport within 3 months after laparoscopic mesh repair versus 27% with continued conservative care [r13]. Return to pre-injury level after inguinal surgery is about 92% across mostly low-quality case series [r11], and 75% were pain-free during exercise about 7 years after TEP repair, although 36% reported some recurrent symptoms [r15]. Unrecognised coexisting entities, especially adductor- and hip-related groin pain, are a common reason for persisting pain [r2,r12].",
  prevention: [
    "Adductor strengthening programs (Copenhagen adduction) reduce overall groin problems in footballers by about 40% [r17].",
    "Build sprint and kicking volume gradually, and monitor groin symptoms during congested fixture periods [r6].",
    "Address previous groin injury and reduced adductor strength, which are general groin-injury risk factors [r6]."
  ],
  clinicalPearls: [
    "The Doha diagnosis is clinical: inguinal canal tenderness, no palpable hernia, and pain with resisted abdominal tests or cough. A soft posterior wall on palpation is unreliable [r1,r4].",
    "Always look for a second entity. Adductor- and hip-related pain commonly coexist, and treating only one leads to failure [r2,r12].",
    "If FAI syndrome coexists, consider addressing the hip first. Inguinal symptoms resolved without groin surgery in 89% [r12].",
    "Burning or radiating pain into the scrotum or thigh suggests nerve involvement (usually ilioinguinal). Ask, and test sensation [r10].",
    "Give rehab a fair trial of about 2–3 months, but do not delay referral beyond that. Surgery has the best trial evidence for refractory cases [r13,r14]."
  ],
  related: ["adductor-related-groin-pain", "pubic-related-groin-pain", "iliopsoas-related-groin-pain", "rectus-abdominis-strain", "fai-syndrome", "adductor-longus-strain"],

  references: [
    { id: "r1", citation: "Weir A, Brukner P, Delahunt E, et al. Doha agreement meeting on terminology and definitions in groin pain in athletes. Br J Sports Med. 2015;49(12):768-74.", pmid: "26031643", doi: "10.1136/bjsports-2015-094869", type: "consensus-statement", year: 2015 },
    { id: "r2", citation: "Taylor R, Vuckovic Z, Mosler A, et al. Multidisciplinary assessment of 100 athletes with groin pain using the Doha agreement: high prevalence of adductor-related groin pain in conjunction with multiple causes. Clin J Sport Med. 2018;28(4):364-9.", pmid: "28654441", doi: "10.1097/JSM.0000000000000469", type: "cross-sectional", year: 2018 },
    { id: "r3", citation: "Sheen AJ, Stephenson BM, Lloyd DM, et al. 'Treatment of the sportsman's groin': British Hernia Society's 2014 position statement based on the Manchester Consensus Conference. Br J Sports Med. 2014;48(14):1079-87.", pmid: "24149096", doi: "10.1136/bjsports-2013-092872", type: "consensus-statement", year: 2014 },
    { id: "r4", citation: "Heijboer WMP, Vuckovic Z, Weir A, et al. Clinical examination for athletes with inguinal-related groin pain: interexaminer reliability and prevalence of positive tests. BMJ Open Sport Exerc Med. 2023;9(1):e001498.", pmid: "36643406", doi: "10.1136/bmjsem-2022-001498", type: "diagnostic-accuracy", year: 2023 },
    { id: "r5", citation: "Heijboer WMP, Weir A, Vuckovic Z, et al. Inter-examiner reliability of the Doha agreement meeting classification system of groin pain in male athletes. Scand J Med Sci Sports. 2023;33(2):189-96.", pmid: "36259124", doi: "10.1111/sms.14248", type: "diagnostic-accuracy", year: 2023 },
    { id: "r6", citation: "Whittaker JL, Small C, Maffey L, et al. Risk factors for groin injury in sport: an updated systematic review. Br J Sports Med. 2015;49(12):803-9.", pmid: "25833903", doi: "10.1136/bjsports-2014-094287", type: "systematic-review", year: 2015 },
    { id: "r7", citation: "Bou Antoun M, Ronot M, Crombe A, et al. High insertion of conjoint tendon is associated with inguinal-related groin pain: a MRI study. Eur Radiol. 2020;30(3):1517-24.", pmid: "31728693", doi: "10.1007/s00330-019-06466-4", type: "case-control", year: 2020 },
    { id: "r8", citation: "Bou Antoun M, Reboul G, Ronot M, et al. Imaging of inguinal-related groin pain in athletes. Br J Radiol. 2018;91(1092):20170856.", pmid: "29947268", doi: "10.1259/bjr.20170856", type: "narrative-review", year: 2018 },
    { id: "r9", citation: "King E, Franklyn-Miller A, Richter C, et al. Clinical and biomechanical outcomes of rehabilitation targeting intersegmental control in athletic groin pain: prospective cohort of 205 patients. Br J Sports Med. 2018;52(16):1054-62.", pmid: "29550754", doi: "10.1136/bjsports-2016-097089", type: "cohort", year: 2018 },
    { id: "r10", citation: "Gerhardt M, Christiansen J, Sherman B, et al. Outcomes following surgical management of inguinal-related groin pain in athletes: a case series. J Hip Preserv Surg. 2020;7(1):103-8.", pmid: "32382436", doi: "10.1093/jhps/hnz068", type: "cohort", year: 2020 },
    { id: "r11", citation: "Hatem M, Martin RL, Bharam S. Surgical outcomes of inguinal-, pubic-, and adductor-related chronic pain in athletes: a systematic review based on surgical technique. Orthop J Sports Med. 2021;9(9):23259671211023116.", pmid: "34541009", doi: "10.1177/23259671211023116", type: "systematic-review", year: 2021 },
    { id: "r12", citation: "Carton P, Filan D. Arthroscopic correction of femoroacetabular impingement for concomitant inguinal disruption in athletes with dual pathology. Am J Sports Med. 2021;49(7):1741-9.", pmid: "33914654", doi: "10.1177/03635465211007144", type: "cohort", year: 2021 },
    { id: "r13", citation: "Paajanen H, Brinck T, Hermunen H, et al. Laparoscopic surgery for chronic groin pain in athletes is more effective than nonoperative treatment: a randomized clinical trial with magnetic resonance imaging of 60 patients with sportsman's hernia (athletic pubalgia). Surgery. 2011;150(1):99-107.", pmid: "21549403", doi: "10.1016/j.surg.2011.02.016", type: "rct", year: 2011 },
    { id: "r14", citation: "Serner A, van Eijck CH, Beumer BR, et al. Study quality on groin injury management remains low: a systematic review on treatment of groin pain in athletes. Br J Sports Med. 2015;49(12):813.", pmid: "25633830", doi: "10.1136/bjsports-2014-094256", type: "systematic-review", year: 2015 },
    { id: "r15", citation: "Meuzelaar RR, Visscher L, den Hartog FPJ, et al. Athletes treated for inguinal-related groin pain by endoscopic totally extraperitoneal (TEP) repair: long-term benefits of a prospective cohort. Hernia. 2023;27(5):1179-86.", pmid: "37391498", doi: "10.1007/s10029-023-02815-x", type: "cohort", year: 2023 },
    { id: "r16", citation: "Thorborg K, Hölmich P, Christensen R, et al. The Copenhagen Hip and Groin Outcome Score (HAGOS): development and validation according to the COSMIN checklist. Br J Sports Med. 2011;45(6):478-91.", pmid: "21478502", doi: "10.1136/bjsm.2010.080937", type: "cohort", year: 2011 },
    { id: "r17", citation: "Harøy J, Clarsen B, Wiger EG, et al. The Adductor Strengthening Programme prevents groin problems among male football players: a cluster-randomised controlled trial. Br J Sports Med. 2019;53(3):150-7.", pmid: "29891614", doi: "10.1136/bjsports-2017-098937", type: "rct", year: 2019 }
  ],

  animation: {
    title: "How inguinal-related groin pain develops",
    phases: [
      {
        type: "moi", label: "Load vs capacity", duration: 7, view: "lateral", environment: "pitch",
        actors: [{ id: "athlete", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "sprint-drive", root: { x: -140 } },
          { t: 1.0, pose: "run-toe-off", root: { x: -90 } },
          { t: 2.0, pose: "kick-backswing", joints: { hipR: -25, kneeR: 95, trunk: -14, shoulderL: 60, shoulderR: -40 }, root: { x: -55 }, ease: "in" },
          { t: 2.8, pose: "kick-contact", joints: { trunk: 12 }, root: { x: -45 } },
          { t: 3.8, pose: "kick-follow-through", root: { x: -30 } },
          { t: 5.2, pose: "stand", joints: { trunk: 22, neck: 15, shoulderR: 30, elbowR: 90 }, root: { x: -20 } },
          { t: 6.2, pose: "stand", joints: { trunk: 4 }, root: { x: -20 } }
        ],
        props: [{ id: "ball", type: "ball-soccer", keyframes: [{ t: 0, x: 0, y: 11 }, { t: 2.8, x: 0, y: 11 }, { t: 3.5, x: 260, y: 110 }, { t: 4.2, x: 460, y: 80 }] }],
        forces: [
          { t: [1.6, 2.6], at: "abdomen", dir: "up", label: "Abdominal wall stretched over the pubis", size: "m" },
          { t: [1.6, 2.6], at: "thighR", dir: "backward", label: "Hip extension", size: "s" },
          { t: [2.4, 3.4], at: "groinR", dir: "forward", label: "Forceful trunk & hip flexion", size: "l" },
          { t: [5.2, 6.2], at: "abdomen", dir: "toward-viewer", label: "Cough: intra-abdominal pressure", size: "m" }
        ],
        highlights: [{ t: [2.0, 7], at: "groinR" }],
        captions: [
          { t: 0, text: "Sprinting, kicking and cutting repeatedly load the lower abdominal wall where it attaches near the pubis." },
          { t: 1.8, text: "In the backswing the trunk extends and the hip extends, stretching the inguinal region." },
          { t: 2.7, text: "Then the abdominals and hip flexors fire hard. Thousands of repeats outpace the tissue's capacity." },
          { t: 4.0, text: "Over weeks the posterior inguinal wall attenuates and local nerves become irritated." },
          { t: 5.2, text: "The give-away: deep inguinal pain with sprinting and kicking, and also when coughing or sneezing." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "groinR",
        captions: [{ t: 0, text: "Zooming into the right inguinal region, viewed from the front." }]
      },
      {
        type: "closeup", label: "Inguinal canal", duration: 10, scene: "hip-anterior",
        actions: [
          { t: 0, do: "highlight", target: "inguinalCanal" },
          { t: 0.3, do: "label", target: "inguinalCanal", text: "Inguinal canal" },
          { t: 0.9, do: "highlight", target: "inguinalLigament" },
          { t: 1.1, do: "label", target: "inguinalLigament", text: "Inguinal ligament (canal floor)" },
          { t: 2.0, do: "arrow", at: "pubicTubercle", dir: "superior", label: "Abdominal pull", size: "m" },
          { t: 2.0, do: "arrow", at: "adductorLongusOrigin", dir: "inferior", label: "Adductor pull", size: "m" },
          { t: 2.4, do: "contract", target: "rectusAbdominis", amount: 0.3, dur: 0.8 },
          { t: 2.6, do: "stretch", target: "inguinalLigament", amount: 0.2, dur: 1.0 },
          { t: 4.0, do: "pressure", target: "inguinalCanal", amount: 0.6 },
          { t: 4.2, do: "label", target: "inguinalCanal", text: "Posterior wall attenuates and bulges" },
          { t: 5.4, do: "inflame", target: "inguinalCanal", amount: 0.5 },
          { t: 5.6, do: "swell", target: "inguinalLigament", amount: 0.3 },
          { t: 6.4, do: "pain", at: "superficialInguinalRing" },
          { t: 6.6, do: "label", target: "inguinalLigament", text: "Tender at the superficial ring" },
          { t: 7.4, do: "camera", at: "superficialInguinalRing", zoom: 1.7, dur: 1 },
          { t: 9.2, do: "camera", zoom: 1, dur: 0.7 }
        ],
        captions: [
          { t: 0, text: "The inguinal canal runs obliquely above the inguinal ligament to the superficial ring near the pubic tubercle." },
          { t: 2.0, text: "The abdominal wall pulls the pubis upward while the adductors pull it downward." },
          { t: 4.0, text: "With repeated load and raised abdominal pressure, the transversalis fascia attenuates. There is no true hernia." },
          { t: 5.4, text: "The aponeurosis develops microtears and oedema, and the ilioinguinal nerve can become entrapped." },
          { t: 6.6, text: "Pain sits at the canal and superficial ring, provoked by palpation with a cough and by resisted sit-ups." },
          { t: 8.4, text: "Most cases settle with targeted rehabilitation. Surgery helps those who fail a good trial." }
        ]
      },
      {
        type: "micro", label: "Fascial overload", duration: 8, tissue: "fascia",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.6, stage: "microtears" }, { t: 3.4, stage: "degeneration" },
          { t: 5.0, stage: "thickening" }, { t: 6.5, stage: "remodelling" }
        ],
        timeLabels: [{ t: 1.6, text: "Weeks of overload" }, { t: 5.0, text: "Months" }, { t: 6.5, text: "6–12 weeks of rehab or repair" }],
        captions: [
          { t: 0, text: "Healthy aponeurosis and fascia: dense, regularly arranged collagen layers." },
          { t: 1.6, text: "Repetitive tension causes microtears in collagen bundles near the pubic attachment." },
          { t: 3.4, text: "Repair is disorganised, and the posterior wall becomes thin and less able to resist pressure." },
          { t: 5.0, text: "In persistent cases, tissue around the ring thickens and can tether local nerves." },
          { t: 6.5, text: "Graded loading, or surgical reinforcement and tension release, lets collagen remodel along the lines of load." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "LL2" }
};
