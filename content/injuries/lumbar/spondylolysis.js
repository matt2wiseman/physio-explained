export default {
  id: "spondylolysis",
  name: "Spondylolysis (pars stress fracture)",
  shortName: "Spondylolysis",
  aka: ["pars stress fracture", "pars interarticularis defect", "pars fracture", "isthmic spondylolysis", "lumbar stress fracture", "gymnast's back", "pars defect", "lumbar bone stress injury"],
  region: "lumbar",
  tissues: ["bone"],
  onset: "gradual",
  mechanismType: ["overuse", "non-contact"],
  populations: ["adolescent athletes", "gymnasts", "rowers", "throwing-sport athletes", "fast bowlers"],
  sports: ["gymnastics", "rowing", "javelin and throwing sports", "cricket", "diving", "weightlifting", "football codes", "tennis", "dance"],
  urgency: "routine",
  summary: "A fatigue (stress) fracture of the pars interarticularis, most often at L5, from repetitive lumbar extension and rotation in adolescent athletes. Early-stage lesions can heal, so prompt diagnosis matters.",
  keyFacts: [
    { label: "Peak age", value: "Adolescent athletes: 47% of 100 adolescent athletes with back pain had spondylolysis, versus 5% of adults with acute low back pain" },
    { label: "Prevalence", value: "5.9% of the Japanese general population on CT (90% at L5); 8.0% of Spanish elite athletes, up to 26.7% in throwing sports" },
    { label: "Key test", value: "No physical test is diagnostic; the one-legged hyperextension test was not supported (sensitivity 50–73%, specificity 0–87%)" },
    { label: "Imaging", value: "MRI found active spondylolysis missed by radiographs in 48.5% of 200 young athletes; SPECT or CT is more sensitive but uses radiation" },
    { label: "Healing", value: "Union with a hard brace: 94% early, 64% and 27% progressive (high and low MRI signal), 0% terminal defects" },
    { label: "Typical recovery", value: "Median 2.5 months (75 days) to return to sport in one 12-athlete functional progression series" }
  ],
  overview: "Spondylolysis is a defect in the pars interarticularis, the narrow bridge of bone between the superior and inferior articular processes of a vertebra. Isthmic spondylolysis is regarded as a fatigue fracture of the pars [r1]. Most lesions are found at L5 (90.3% of affected vertebrae in a CT series) and about 6% of the general population have one, mostly without symptoms [r2,r1]. Symptomatic lesions are a particular problem in adolescents, especially adolescent athletes: 47% of 100 adolescent athletes with back pain had a pars stress fracture, compared with 5% of adults presenting with acute low back pain [r3].\n\nThe typical mechanism is repetitive lumbar hyperextension and rotation. A series of 3152 Spanish elite athletes found a prevalence of 8.02% overall, rising to 26.67% in throwing sports, 16.96% in artistic gymnastics and 16.88% in rowing, and the authors added torsion against resistance as a causative factor [r4]. Imaging findings of spondylolysis are more common in adults aged 50 or younger with back pain than in those without it (odds ratio 5.06, 95% CI 1.65–15.53) [r5]. Clinical examination cannot make or exclude the diagnosis [r6,r7]; imaging is needed, and many lesions are missed on plain radiographs [r8].\n\nOutcome depends on the stage of the lesion. In a prospective series using a hard brace, union occurred in 94% of early defects and 0% of terminal defects [r9]. There are no controlled trials of bracing versus activity restriction in the sources reviewed, and treatment usually combines at least relative rest, rehabilitation and consideration of a brace [r1]. A 12-athlete single-arm study reported return to sport at a median of 2.5 months using an immediate functional progression programme [r10]. Long-term, recurrent symptoms were reported by 45.5% of athletes followed for a mean of 3.4 years [r11].",

  epidemiology: {
    text: "On CT scans of 2000 Japanese adults scanned for reasons unrelated to back pain, spondylolysis was present in 5.9% (7.9% of men, 3.9% of women); 90.3% of affected vertebrae were L5 and 21.0% of affected people had a unilateral lesion [r2]. Spina bifida occulta was associated with spondylolysis (16.2% vs 5.0%; odds ratio 3.7), and spondylolisthesis was present in 74.5% of people with bilateral and 7.7% of those with unilateral spondylolysis [r2]. Symptomatic lesions concentrate in young athletes: in a case comparison, 47% of 100 adolescent athletes with back pain had spondylolysis versus 5% of 100 adults with acute low back pain [r3]. Among 3152 Spanish high-level athletes the prevalence was 8.02%, with much higher values in throwing sports (26.67%), artistic gymnastics (16.96%) and rowing (16.88%) [r4]. In 200 young athletes (mean age 14.1 years) with low back pain, 48.5% had active spondylolysis on MRI that was not seen on plain radiographs [r8]. Radiographic spondylolysis is common in the general population and the vast majority is thought to be asymptomatic [r1].",
    riskFactors: {
      intrinsic: [
        "Adolescence in an athlete with a growing skeleton: symptomatic lesions are mainly a problem of adolescent athletes [r1,r3]",
        "Male sex (male to female ratio of 2:1 in a general population CT series) [r2]",
        "Spina bifida occulta (odds ratio 3.7) [r2]",
        "L5 level, where 90.3% of lesions occur [r2]",
        "A unilateral defect, which increases stress on the opposite pars (see below) [r12]"
      ],
      extrinsic: [
        "Sports with repetitive lumbar hyperextension and rotation, and torsion against resistance: throwing sports, artistic gymnastics and rowing had the highest prevalence [r4]",
        "High training volume with rapid increases in load (clinical association; not tested in the sources reviewed)",
        "Continuing to train through pain with a unilateral lesion in a rotation sport, which risks contralateral stress injury [r12]"
      ]
    }
  },

  mechanism: {
    summary: "Repetitive lumbar extension combined with rotation, and torsion against resistance, loads the pars interarticularis of the lower lumbar vertebrae, most often L5, until bone microdamage outpaces repair [r1,r4]. The lesion progresses from a bone stress reaction with marrow oedema to an incomplete and then a complete stress fracture; early lesions can heal, while terminal lesions form a non-union [r9,r10].",
    sequence: [
      "An adolescent athlete repeats extension-and-rotation movements many times a week, such as gymnastic arching, overhead serving or throwing, fast bowling or rowing [r4].",
      "Each repetition loads the pars interarticularis at the lower lumbar levels, most often L5 [r2].",
      "Bone microdamage accumulates faster than the adolescent skeleton can remodel it, producing a stress reaction with marrow oedema in the pars or adjacent pedicle on MRI [r8,r9].",
      "An early, incomplete stress fracture develops and the athlete notices extension-provoked, often one-sided, low back pain [r8].",
      "If loading continues, the fracture becomes complete (progressive stage) and, ultimately, a sclerotic non-union (terminal stage) with a lower chance of bony healing [r9].",
      "A unilateral defect shifts stress to the contralateral pars and pedicle, which can develop a stress reaction or fracture in rotation sports [r12].",
      "With modified loading, relative rest and, in suitable lesions, a brace, early and some progressive lesions can unite in about 3 to 6 months [r9]."
    ],
    variants: [
      { name: "Unilateral lesion with contralateral stress", description: "In 13 athletes under 20 years with unilateral spondylolysis, 3 (23.1%) had a contralateral stress fracture and 4 more had sclerosis at the contralateral pedicle; a finite element model showed contralateral stresses up to 12.6 times those of an intact spine [r12]. Monitor the opposite side in torsion sports." },
      { name: "Bilateral lesion with possible slip", description: "Spondylolisthesis was present in 74.5% of people with bilateral and 7.7% with unilateral spondylolysis in a general population series [r2]. Slip progression is a reason to monitor adolescents with bilateral defects." },
      { name: "Terminal (established non-union) defect", description: "Chronic non-union with sclerotic margins is often an incidental or long-standing finding; no terminal defect united with bracing [r9]. Pain may still arise from the segment, so management is symptom-guided." },
      { name: "Asymptomatic or incidental lesion", description: "Many lesions are found incidentally in people with no back pain [r1,r2]; do not attribute pain to a defect without clinical and imaging concordance." }
    ]
  },

  anatomy: {
    text: "The pars interarticularis is the segment of the neural arch between the superior and inferior articular processes, lying between the facet joints of the same vertebra. In the lower lumbar spine it carries bending and shear stress as the lamina and inferior articular process resist the forward-directed shear of the vertebral body, and the lumbosacral junction is a common site of failure (L5 in 90.3% of cases) [r2]. A unilateral defect disconnects the neural arch from the body on one side; a bilateral defect lets the vertebral body and pedicles move relative to the posterior elements, which is the precursor to isthmic spondylolisthesis.",
    structures: [
      { name: "Pars interarticularis", role: "Bridge between the superior and inferior articular processes; resists bending and shear and is the site of stress injury" },
      { name: "Pedicle", role: "Connects the vertebral body to the posterior arch; marrow oedema in the adjacent pedicle on MRI marks a more active lesion [r9]" },
      { name: "Facet (zygapophyseal) joints", role: "Guide extension and rotation and limit anterior shear; loaded in the movements that cause spondylolysis" },
      { name: "L5–S1 disc", role: "Resists forward shear of L5 on S1; degenerates or slips if bilateral defects destabilise the segment [r2]" },
      { name: "Multifidus and erector spinae", role: "Control segmental extension and rotation; guard when the lesion is painful" },
      { name: "Contralateral pars and pedicle", role: "Take extra stress when one side is deficient, and are at risk of stress reaction or fracture [r12]" }
    ]
  },

  pathophysiology: {
    tissueDamage: "Isthmic spondylolysis is regarded as a fatigue fracture of the pars interarticularis [r1]. Repetitive extension and rotation loading produces bone microdamage that accumulates when resorption exceeds formation, giving a stress reaction (marrow oedema without a visible fracture line) that can progress to a stress fracture and non-union. On CT, defects are staged as early, progressive and terminal; progressive defects are further divided by STIR MRI into those with high signal in the adjacent pedicle and those with low signal [r9]. In 97 young athletes with active spondylolysis on MRI that was occult on plain radiographs, CT stages were nonlysis (52), very early (37), late early (22), progressive (10) and terminal (0) [r8].\n\nThe stage governs the chance of bony union: with a hard brace, union rates were 94% for early defects, 64% for progressive defects with high MRI signal, 27% for progressive defects with low MRI signal and 0% for terminal defects, with mean healing times of 3.2, 5.4 and 5.7 months [r9]. In a retrospective CT study of 134 children and adolescents with 239 defects treated conservatively, spinal level and stage were the predominant predictors of union, and defect site, associated spondylolisthesis, the condition of the contralateral pars, lordosis and lumbar inclination also mattered [r13]. Unilateral defects can overload the opposite side: finite element modelling of an L5 defect showed contralateral stresses up to 12.6 times higher than in an intact spine [r12].",
    structures: [
      { name: "Pars interarticularis", effect: "Stress reaction, then stress fracture (early, then progressive), and in chronic cases a sclerotic non-union (terminal) [r9]" },
      { name: "Pedicle", effect: "Marrow oedema (high STIR signal) adjacent to the pars marks an active lesion with better healing potential among progressive defects [r9]" },
      { name: "Contralateral pars and pedicle", effect: "Stress reaction, sclerosis or stress fracture where the first defect is unilateral (3 of 13 athletes had a contralateral stress fracture) [r12]" },
      { name: "L5–S1 segment", effect: "Spondylolisthesis can develop, especially with bilateral defects (74.5% of bilateral versus 7.7% of unilateral lesions in one CT series) [r2]" }
    ],
    muscles: [
      { name: "Multifidus and erector spinae", effect: "Reflex guarding and extension-related pain; segmental control is clinically thought to be reduced but this was not tested in the sources reviewed" },
      { name: "Abdominal wall and gluteals", effect: "Reduced capacity to control lumbar extension and pelvic tilt is a common rehabilitation target (clinical convention; no controlled evidence identified)" },
      { name: "Hip flexors and hamstrings", effect: "Tightness may increase lumbar extension loading and anterior pelvic tilt in some athletes (clinical hypothesis; not tested in the sources reviewed)" },
      { name: "Deconditioned trunk and hip muscles during rest", effect: "Prolonged rest leads to loss of capacity that must be rebuilt before return to sport" }
    ],
    cellular: [
      { phase: "Loading and microdamage", timing: "Weeks of repetitive training", description: "Repeated tensile and shear strain produce microcracks in cortical and trabecular bone of the pars [r1]." },
      { phase: "Resorption exceeds formation (stress reaction)", timing: "Weeks", description: "Osteoclastic resorption outpaces osteoblastic formation at the site of microdamage; marrow oedema appears on MRI before a fracture line is visible [r8,r9]." },
      { phase: "Stress fracture", timing: "Weeks to months", description: "Microcracks coalesce into an incomplete, then complete, fracture through the pars; the adjacent pedicle may show high STIR signal [r9]." },
      { phase: "Union or non-union", timing: "About 3–6 months", description: "Early defects unite in a mean of 3.2 months and progressive defects in 5.4–5.7 months when they heal; terminal defects form a fibrous or cartilaginous non-union with sclerotic margins [r9]." }
    ],
    systems: [
      { system: "Skeletal (bone remodelling)", effect: "Adolescent bone remodels actively, which gives early lesions a high chance of healing, but rapid loading increases outpace repair [r9]" },
      { system: "Nervous (pain processing)", effect: "Pain is extension-provoked and usually mechanical; neurological signs are uncommon unless there is a high-grade slip or a coexisting disc lesion" },
      { system: "Endocrine and nutritional", effect: "Low energy availability, menstrual disturbance and vitamin D status are recognised contributors to bone stress injury in general but were not examined in the sources reviewed; consider a wider review in recurrent or multi-site cases" },
      { system: "Psychological and social", effect: "Time out of sport has major psychosocial effects for young athletes; female sex and an adverse reaction during care predicted poor long-term outcome [r11]" },
      { system: "Musculoskeletal chain", effect: "Hip mobility, trunk control and sport-specific technique modulate lumbar extension and rotation loads; they are modifiable rehabilitation targets" }
    ]
  },

  grading: {
    system: "CT stage (early, progressive, terminal) with STIR MRI subdivision of progressive defects",
    grades: [
      { grade: "Early (including stress reaction)", description: "A stress reaction or an incomplete (hairline) defect, with marrow oedema on MRI; many are not visible on plain radiographs [r8].", prognosis: "Union in 94% with a hard brace, in a mean of 3.2 months [r9]" },
      { grade: "Progressive, high STIR signal in the pedicle", description: "A clear fracture gap with ongoing biological activity shown as high signal in the adjacent pedicle.", prognosis: "Union in 64%, mean 5.4 months [r9]" },
      { grade: "Progressive, low STIR signal", description: "A fracture gap without marrow oedema, indicating little current biological activity.", prognosis: "Union in 27%, mean 5.7 months [r9]" },
      { grade: "Terminal", description: "Established non-union with sclerotic margins.", prognosis: "No terminal defect healed with conservative treatment [r9]; management is symptom-guided" }
    ]
  },

  timeframes: {
    summary: "Healing time depends on stage: in a hard brace, early defects united in about 3 months and progressive defects in about 5–6 months, while terminal defects did not unite [r9]. Return to sport may precede imaging union; one 12-athlete series reported a median 75 days to return [r10].",
    healing: [
      { phase: "Early-stage union (hard brace)", startDay: 0, endDay: 96, description: "Mean time to union in early-stage defects was 3.2 months [r9]" },
      { phase: "Progressive-stage union (hard brace)", startDay: 0, endDay: 171, description: "Mean time to union was 5.4–5.7 months in progressive defects that healed [r9]" },
      { phase: "Functional progression and return to sport", startDay: 14, endDay: 120, description: "In a 12-athlete series using an immediate functional progression programme, median return to sport was 75 days (IQR 55–85) and MRI improved in 11 of 12 at 3 months [r10]" },
      { phase: "Terminal defect (no bony union)", startDay: 0, endDay: 365, description: "No union with conservative care [r9]; symptoms are managed with rehabilitation and load management" }
    ],
    milestones: [
      { label: "Pain-free activities of daily living", day: 14, note: "Typical clinical expectation; varies" },
      { label: "Median return to sport (immediate functional progression series)", day: 75, note: "IQR 55–85 days in 12 athletes [r10]" },
      { label: "Mean union time, early-stage defects (brace)", day: 96, note: "3.2 months [r9]" },
      { label: "Repeat CT or MRI to document healing", day: 90, note: "Imaging was repeated about every 3 months in the bracing study [r9]" },
      { label: "Mean union time, progressive defects (brace)", day: 171, note: "5.4–5.7 months [r9]" }
    ],
    returnToSport: "Typically about 2.5–6 months, guided by symptoms, function and imaging. Median 75 days in one small functional progression series [r10]; union takes 3–6 months in braced series [r9]. Return is criteria-based; there are no validated return-to-sport (RTS) criteria for spondylolysis, so those below are clinical convention."
  },

  clinicalPresentation: {
    symptoms: [
      "Gradual onset of central or one-sided low back pain over days to weeks in an adolescent athlete in an extension and rotation sport",
      "Pain provoked by extension, rotation and sport-specific movements (arching, serving, throwing, bowling) and eased by rest",
      "Pain that may refer to the buttock but not usually below the knee",
      "Pain with prolonged standing or single-leg stance in some people",
      "Usually no neurological symptoms; night pain or constant pain is not typical and should prompt a wider search"
    ],
    signs: [
      "Pain on lumbar extension, especially in standing, often unilateral",
      "Pain on extension combined with rotation (Kemp test) or on single-leg hyperextension, although these were not diagnostic in the studies reviewed [r6,r7,r8]",
      "Paraspinal tenderness and sometimes focal tenderness over the L5 level",
      "A palpable step deformity if a slip has developed (spondylolisthesis) [r6]",
      "Hamstring tightness and normal neurological examination"
    ]
  },

  assessment: {
    subjective: [
      "Age, sport, position and training volume, recent increases in load or a growth spurt",
      "Extension-provoked pain, unilateral or central; pain with sport-specific arches, serves, throws or bowling",
      "Duration of symptoms (persistent extension-provoked pain for more than a few weeks in an adolescent athlete warrants imaging)",
      "Previous back pain or pars lesion; family history; other bone stress injuries",
      "Red flag screening: constant or night pain, fever, weight loss, neurological symptoms, bladder or bowel change",
      "Menstrual history, nutrition and energy availability in female and lean-sport athletes (clinical practice; not examined in the sources reviewed)",
      "Athlete and parent goals and the competition calendar"
    ],
    observation: ["Standing posture and lumbar lordosis", "Gait and single-leg stance", "Sport technique where possible (arch, serve, delivery or rowing stroke)"],
    palpation: ["Paraspinal and midline tenderness at L4–S1", "Step deformity at the lumbosacral junction (spondylolisthesis): sensitivity 60–88% and specificity 87–100% for spondylolisthesis in the systematic review, but not spondylolysis [r6]"],
    rangeOfMotion: ["Lumbar flexion and extension, noting pain and range", "Hip flexor, hamstring and thoracic mobility that influence lumbar extension load"],
    strength: ["Trunk endurance (side plank, prone hold) and hip extension and abduction strength", "Neurological screen L2–S1 to exclude radiculopathy"],
    neuro: ["Myotomes, dermatomes and reflexes: normal in uncomplicated spondylolysis", "Straight leg raise and slump to exclude disc herniation or radiculopathy"],
    functional: ["Single-leg squat and hop quality", "Hip hinge and trunk control during landing", "Sport-specific movements once pain allows"],
    specialTests: [
      { name: "One-legged hyperextension (stork) test", purpose: "Provocation of pain in suspected spondylolysis", procedure: "Standing on one leg, the athlete extends and rotates the trunk towards the standing side; repeat on the other leg.", positive: "Reproduction of familiar low back pain. A positive result does not confirm and a negative result does not exclude spondylolysis [r7].", sensitivity: "50–73% (range across studies)", specificity: "0–87% (range across studies)", refs: ["r6", "r7"] },
      { name: "Kemp (extension–rotation) test", purpose: "Provocation of facet or pars pain", procedure: "Standing or sitting, the examiner guides the trunk into extension, rotation and side flexion to each side.", positive: "Reproduction of local low back pain. No significant discriminating value was found in 200 young athletes [r8].", refs: ["r8"] },
      { name: "Spinous process percussion and palpation", purpose: "Screen for local tenderness at the lumbosacral level", procedure: "Percuss or palpate the lumbar spinous processes; compare levels.", positive: "Localised tenderness; no significant discriminating value in the study that tested it [r8].", refs: ["r8"] },
      { name: "Step-deformity palpation (for spondylolisthesis)", purpose: "Detect a slip of one vertebra on another", procedure: "Palpate the spinous process contours in standing and lying for a step.", positive: "A palpable step; the evidence is for spondylolisthesis rather than spondylolysis.", sensitivity: "60–88% (spondylolisthesis; range across studies)", specificity: "87–100% (spondylolisthesis; range across studies)", refs: ["r6"] }
    ],
    clinicalRules: [
      { name: "Demographic and history features have little diagnostic value on their own", description: "For spondylolysis, age under 20 had sensitivity of 81% and specificity of 44%, and male sex had sensitivity of 73% and specificity of 57% in the systematic review; no recommendations could be made from history data and no physical test showed utility [r6]. Image when an adolescent athlete has persistent extension-provoked low back pain (clinical convention)." },
      { name: "Stage the lesion before choosing the programme", description: "Early lesions and progressive lesions with high MRI signal have the best chance of healing; terminal lesions do not unite [r9]." }
    ],
    outcomeMeasures: [
      { name: "Numeric Pain Rating Scale (0–10)", use: "Pain at rest, in extension and during sport" },
      { name: "Micheli Functional Scale (pain and function)", use: "Used to track adolescent athletes with active spondylolysis during rehabilitation [r10]" },
      { name: "Time out of sport and return-to-sport date", use: "Clinical outcome used in functional progression series [r10]" },
      { name: "Patient-Specific Functional Scale", use: "Sport-specific goals such as a vault, serve or delivery" },
      { name: "Repeat imaging (MRI or CT)", use: "Document healing in early and progressive defects; imaging was repeated about every 3 months in the bracing study [r9]" }
    ],
    imaging: [
      { modality: "Plain radiographs", indication: "Initial screening for spondylolisthesis, deformity and other pathology", findings: "Often negative in early-stage lesions: 97 of 200 young athletes (48.5%) had active spondylolysis on MRI that radiographs missed [r8]." },
      { modality: "MRI (including STIR)", indication: "First-line in many centres for a suspected early lesion in a young athlete, because it shows marrow oedema and avoids radiation", findings: "Bone stress reaction (high STIR signal) in the pars or pedicle; MRI detected bone stress in 40 of 50 SPECT-positive pars and 18 of 19 pars fractures seen on CT, so it is less sensitive than SPECT [r7]." },
      { modality: "CT (limited, targeted)", indication: "Define the stage and defect and to monitor union", findings: "Incomplete or complete pars defect, sclerosis in terminal lesions; used to classify early, progressive and terminal defects [r9,r13]. Radiation exposure should be minimised in adolescents." },
      { modality: "Bone scintigraphy with SPECT", indication: "Some centres use it as first-line for athletes with back pain, followed by limited CT", findings: "In 71 young athletes with back pain, SPECT showed active spondylolysis in 55% of subjects; the authors recommended SPECT first, then limited CT [r7]." }
    ]
  },

  differentials: [
    { name: "Acute non-specific low back pain", id: "acute-low-back-pain", distinguishing: "Pain is not consistently extension-provoked and settles quickly. In adolescent athletes muscle-tendon strain accounted for only 6% of back pain, versus 27% in adults, so do not default to this diagnosis [r3]." },
    { name: "Lumbar disc herniation", id: "lumbar-disc-herniation", distinguishing: "Flexion and sitting aggravate pain; leg-dominant pain below the knee with positive neural tension tests. Discogenic back pain was the final diagnosis in 11% of adolescents versus 48% of adults in one comparison [r3]." },
    { name: "Spondylolisthesis", id: "spondylolisthesis", distinguishing: "Forward slip of one vertebra on another, often with a palpable step and hamstring tightness; it can follow a bilateral spondylolysis [r2]." },
    { name: "Lumbar facet joint pain", id: "lumbar-facet-joint-pain", distinguishing: "Also extension-provoked, and clinically indistinguishable from spondylolysis in many adolescents; imaging separates them." },
    { name: "Sacroiliac joint pain", id: "sacroiliac-joint-pain", distinguishing: "Pain below L5 over the sacroiliac joint with a cluster of provocation tests and no extension-specific pattern." },
    { name: "Other bone stress injury or apophyseal ring injury", id: "bone-stress-injury", distinguishing: "Other bone stress injuries in the same athlete (for example sacrum or pelvis) can coexist; consider wider bone health if multi-site." },
    { name: "Infection, tumour or inflammatory back pain", distinguishing: "Constant or night pain, fever, weight loss, or morning stiffness in a young person warrants medical review and imaging." }
  ],
  redFlags: [
    "Constant, night or rest pain, fever, weight loss or malaise: suspect infection or tumour; arrange urgent medical review and imaging.",
    "EMERGENCY: new bladder or bowel dysfunction, saddle numbness, or bilateral leg weakness: suspect cauda equina syndrome (rare, for example with a high-grade slip). Send to an emergency department the same day.",
    "Progressive neurological deficit or radicular pain below the knee: arrange urgent medical review and MRI.",
    "Visible slip, a palpable step that is increasing, or marked hamstring tightness with altered gait: refer for specialist review and stop provocative sport until assessed.",
    "Persistent pain despite appropriate rest and rehabilitation, or recurrent episodes: re-image, consider other diagnoses and refer to sports medicine or spinal specialists; surgery is rarely needed [r1].",
    "Multiple bone stress injuries, menstrual disturbance or low energy availability: refer for a medical and nutritional assessment (clinical convention)."
  ],

  management: {
    principles: "The evidence is limited: no controlled trials were identified in a critical review, and management is based on case series and clinical experience, usually combining at least relative rest, physical rehabilitation and consideration of a brace, and rarely surgery [r1]. Match the plan to the stage: early and progressive-high-signal defects are the best candidates for a union-seeking approach (hard brace, activity modification), while terminal defects will not unite and are managed by symptoms [r9]. An immediate functional progression programme in 12 athletes reported return to sport in a median of 75 days and improvement of the lesion on MRI in 11 of 12 [r10]. Use shared decision-making with the athlete, family and coach, set expectations about time out of the sport's provocative movements, and plan monitoring because recurrence of significant symptoms occurred in 45.5% at a mean of 3.4 years [r11].",
    medical: [
      { name: "Hard brace (moulded thoracolumbosacral orthosis)", description: "In a prospective series of 63 defects in 37 patients under 18 years, union occurred in 94% of early, 64% of progressive high-signal, 27% of progressive low-signal and 0% of terminal defects, with mean healing times of 3.2, 5.4 and 5.7 months [r9]. There was no comparison group, and bracing versus activity restriction alone has not been tested in randomised trials in the sources reviewed. The role of bracing in paediatric spondylolisthesis is not well established [r14].", evidence: "limited", recommendation: "consider", refs: ["r9", "r14"] },
      { name: "Relative rest from provocative sport", description: "Stop or modify extension, rotation and torsion-loaded activity while keeping general fitness; a critical review concludes treatment is likely to require at least relative rest and physical rehabilitation [r1].", evidence: "limited", recommendation: "recommended", refs: ["r1"] },
      { name: "Analgesia", description: "Short-term simple analgesia for symptom control. The effect of anti-inflammatory drugs on pars healing has not been established in the sources reviewed.", evidence: "expert-opinion", recommendation: "consider", refs: [] },
      { name: "Surgical repair or fusion", description: "Rarely required, for persistent symptoms after a full trial of conservative care or for progressive slip [r1].", evidence: "very-limited", recommendation: "consider", refs: ["r1"] }
    ],
    physio: [
      { name: "Education and load management with the athlete, parents and coach", description: "Explain the stress fracture, the stage and the plan for graded return. Adjust sport-specific extension and rotation volume rather than imposing total rest where the lesion and symptoms allow.", evidence: "limited", recommendation: "recommended", refs: ["r1", "r10"] },
      { name: "Immediate functional progression programme", description: "A single-arm trial in 12 adolescent athletes reported that 11 (92%) returned to sport in a median of 75 days, MRI showed lesion improvement in all but one, and one athlete had an adverse reaction with significant recurrence of pain [r10]. The evidence is preliminary.", evidence: "very-limited", recommendation: "consider", refs: ["r10"] },
      { name: "Trunk, gluteal and hip rehabilitation", description: "Progressive strength and control training for the trunk and hip, with sport-specific progression, forms part of the rehabilitation recommended in reviews [r1,r10]. The specific content is based on clinical convention.", evidence: "limited", recommendation: "recommended", refs: ["r1", "r10"] },
      { name: "Monitoring for contralateral stress and recurrence", description: "Review symptoms and, if pain recurs, consider repeat imaging: 3 of 13 athletes with a unilateral lesion had a contralateral stress fracture [r12], and 45.5% reported recurrent symptoms over a mean of 3.4 years [r11].", evidence: "limited", recommendation: "recommended", refs: ["r12", "r11"] },
      { name: "Continuing full sport participation through pain", description: "Continued loading of an active lesion risks progression to a terminal defect and contralateral overload in rotation sports [r12,r9].", evidence: "expert-opinion", recommendation: "not-recommended", refs: ["r12", "r9"] }
    ],
    education: [
      "A stress fracture of this kind is common in young athletes, and early ones often heal if the loading that caused it is reduced.",
      "A scan or X-ray cannot always see it early. A normal X-ray does not rule it out, and an MRI or CT may be needed.",
      "Healing takes about 3 to 6 months for many lesions, but you can often return to sport earlier as symptoms and function allow. Your physio will guide each step.",
      "Pushing through pain can make the break worse or put extra stress on the other side of the bone.",
      "Cross-training, strength and sport-specific technique work will keep you fit during recovery.",
      "Go to an emergency department the same day if you develop numbness around the genitals, trouble passing urine or controlling your bowels, or leg weakness."
    ]
  },
