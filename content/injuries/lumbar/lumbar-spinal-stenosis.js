export default {
  id: "lumbar-spinal-stenosis",
  name: "Lumbar spinal stenosis (neurogenic claudication)",
  shortName: "Lumbar spinal stenosis",
  aka: ["LSS", "neurogenic claudication", "spinal stenosis", "central canal stenosis", "lateral recess stenosis", "degenerative lumbar stenosis", "spinal claudication", "pseudoclaudication"],
  region: "lumbar",
  tissues: ["nerve", "ligament", "disc", "joint-capsule"],
  onset: "gradual",
  mechanismType: ["degenerative", "compression"],
  populations: ["adults over 60 years", "older adults", "people with degenerative spondylolisthesis", "people with a congenitally narrow canal"],
  sports: [],
  urgency: "routine",
  summary: "Degenerative narrowing of the lumbar canal and recesses that squeezes the cauda equina or roots, causing buttock and leg symptoms on standing and walking that ease with sitting or bending forward.",
  keyFacts: [
    { label: "Typical recovery", value: "Both exercise-based care and surgery improved function over 2 years in trials; 57% of surgical candidates given physical therapy crossed over to surgery" },
    { label: "Key test", value: "History: no pain when seated (LR 7.4), relief on bending forward (LR 6.4), bilateral buttock or leg pain (LR 6.3)" },
    { label: "Imaging", value: "MRI when surgery or injection is considered; radiological stenosis is found in a pooled 11% of asymptomatic people and severity does not track symptoms" },
    { label: "Peak age", value: "Older adults; acquired CT stenosis rose from 20.0% (relative, under 40 years) to 47.2% at 60–69 years" },
    { label: "Incidence", value: "Clinically diagnosed in a pooled 11% of the general population, 25% in primary care (high risk of bias)" },
    { label: "Red flag", value: "New bladder, bowel or saddle symptoms or rapidly progressive weakness need same-day emergency assessment" }
  ],
  overview: "Lumbar spinal stenosis (LSS) is a narrowing of the central canal, lateral recesses or foramina in the lumbar spine that compresses the cauda equina or nerve roots. Most cases are degenerative: disc bulging, facet joint degeneration and hypertrophy, and ligamentum flavum hypertrophy and calcification combine to reduce the space for the neural elements, and in older adults the process usually involves both the central and lateral pathways [r1]. The characteristic clinical syndrome is neurogenic claudication: buttock and leg pain, heaviness or numbness that comes on with standing or walking and eases with sitting or bending forward [r2,r3]. It is a common cause of pain and disability in older adults [r4].\n\nImaging and symptoms are only loosely related. Radiological stenosis was found in a pooled 11% of asymptomatic people (95% CI 5–18%), although the included studies were at high risk of bias [r5], and in 202 patients who went on to surgery the MRI severity grade was not associated with pre-operative disability, pain or 1-year outcome [r6]. The diagnosis therefore rests on the clinical syndrome with concordant imaging [r2], not on the scan alone.\n\nExercise-based, multimodal non-surgical care is a reasonable first line: a 2021 guideline made conditional recommendations for multimodal care that includes education, home exercise, manual therapy and rehabilitation, based on moderate-quality evidence [r7,r8]. In a randomised trial of surgical candidates, decompression and a physical therapy program produced similar gains in physical function at 2 years, although 57% of those assigned to physical therapy crossed over to surgery [r9]. Both approaches help many people, the quality of the comparative evidence is limited, and the decision is a shared one [r9,r10].",

  epidemiology: {
    text: "A meta-analysis of 41 papers (55 samples), two thirds at high risk of bias, estimated the prevalence of LSS by clinical diagnosis at 11% (95% CI 4–18%) in the general population, 25% (19–32%) in primary care and 29% (22–36%) in secondary care [r5]. In 191 people from the Framingham community sample who had CT, acquired relative stenosis (12 mm cut-off) was seen in 22.5% and absolute stenosis (10 mm) in 7.3%. Prevalence rose from 20.0% and 4.0% in people under 40 years to 47.2% and 19.4% at 60–69 years, and absolute stenosis was associated with low back pain (OR 3.16, 95% CI 1.05–9.53) [r11]. Congenital narrowing was less common (4.7% relative, 2.6% absolute) [r11]. Among patients with lower extremity pain, age over 70 years raised the likelihood of the clinical syndrome (LR 2.0) and age under 60 years lowered it (LR 0.40) [r2].",
    riskFactors: {
      intrinsic: [
        "Older age: the prevalence of acquired CT stenosis rose from 20.0% (relative) under 40 years to 47.2% at 60–69 years [r11]",
        "Disc degeneration, facet joint degeneration and hypertrophy, and ligamentum flavum hypertrophy, the structural drivers of narrowing [r1]",
        "A congenitally narrow canal, which leaves little reserve before degeneration produces symptoms [r1,r11]",
        "Degenerative spondylolisthesis with stenosis, studied as a separate surgical group in the SPORT trial [r12]"
      ],
      extrinsic: [
        "Cumulative lumbar loading and heavy manual work (plausible clinical association; not tested in the sources reviewed)",
        "Physical inactivity and deconditioning once walking becomes limited, which can worsen function (clinical observation; not tested in the sources reviewed)"
      ]
    }
  },

  mechanism: {
    summary: "Lumbar spinal stenosis has no injury moment. Years of disc dehydration and bulging, facet hypertrophy and ligamentum flavum thickening reduce the cross-sectional area of the canal and recesses at one or more levels, and a canal that is only just adequate at rest becomes inadequate when the spine extends or is loaded. In patients with sciatica or neurogenic claudication, axial loading in slight extension reduced the dural sac area in 66 of 84 patients [r13], which fits the clinical pattern that upright standing and walking provoke symptoms while sitting or bending forward relieves them [r2].",
    sequence: [
      "Over years the disc loses water and height and its annulus bulges posteriorly into the canal.",
      "Loss of disc height shifts load to the facet joints, which develop osteoarthritis, enlarge and project into the canal and lateral recesses [r1].",
      "The ligamentum flavum thickens through fibrosis (scar) and may calcify, and it buckles into the canal when the segment extends [r1,r14].",
      "The central canal, lateral recesses and foramina narrow, often together in older adults, and a congenitally narrow canal has less reserve [r1,r11].",
      "Standing upright and walking increase lumbar extension and axial load, so the canal area falls further and the cauda equina or roots are compressed [r13].",
      "The compressed roots produce bilateral or unilateral buttock and leg pain, heaviness, numbness or weakness. Impaired blood flow to the roots during walking is a proposed contributor (not tested in the sources reviewed).",
      "The person stops, sits or leans forward on a trolley. Lumbar flexion enlarges the canal and symptoms ease over minutes [r2].",
      "Over months to years walking tolerance shrinks, the person avoids activity and deconditioning compounds the disability."
    ],
    variants: [
      { name: "Central canal stenosis", description: "Narrowing of the whole canal compresses the cauda equina and gives bilateral buttock and leg symptoms with walking, the classic neurogenic claudication pattern [r2]." },
      { name: "Lateral recess (subarticular) stenosis", description: "Hypertrophied superior articular process and bulging disc compress the traversing root, for example L5 at L4–5. It tends to give unilateral radicular pain and can mimic a disc herniation (clinical teaching)." },
      { name: "Foraminal stenosis", description: "Disc height loss, osteophytes and facet hypertrophy narrow the foramen and compress the exiting root, with extension and rotation as provocative positions (clinical teaching)." },
      { name: "Degenerative spondylolisthesis with stenosis", description: "Forward slip of one vertebra on the next adds to canal narrowing; it was studied as a separate group in SPORT [r12]. See the spondylolisthesis page." },
      { name: "Congenitally narrow canal", description: "A short-pedicle, narrow canal produces symptoms earlier, because less degeneration is needed to cross the threshold; congenital relative stenosis was found in 4.7% of a community sample [r1,r11]." }
    ]
  },

  anatomy: {
    text: "The lumbar canal is bounded in front by the posterior vertebral body, the disc and the posterior longitudinal ligament, behind by the laminae and the ligamentum flavum, and at the sides by the pedicles and the facet joints. Below the end of the spinal cord the thecal sac contains the cauda equina, the bundle of lumbar and sacral roots. Each root leaves the sac, crosses the lateral recess under the superior articular process and exits through the foramen; the lateral recess and foramen are therefore separate sites where a root can be compressed. The ligamentum flavum is an elastic ligament joining adjacent laminae that lies directly behind the thecal sac and buckles forward when the segment extends. In flexion the canal and foramina are larger than in extension, so posture changes the space available to the roots [r13].",
    structures: [
      { name: "Cauda equina and thecal sac", role: "Lumbar and sacral nerve roots bathed in cerebrospinal fluid; they need space and blood supply to conduct normally" },
      { name: "Ligamentum flavum", role: "Elastic ligament bridging the laminae behind the sac; it is thin in youth and thickens with degeneration, then buckles into the canal in extension [r14]" },
      { name: "Facet (zygapophyseal) joints", role: "Paired synovial joints behind each disc that limit flexion, rotation and shear; their hypertrophy narrows the lateral recess and foramen [r1]" },
      { name: "Intervertebral disc", role: "Spaces the vertebrae and forms the anterior boundary of the canal; a bulge and height loss both reduce canal and foraminal dimensions [r1]" },
      { name: "Lateral recess and intervertebral foramen", role: "The corridors in which each root travels and exits; compression here causes root-level (radicular) symptoms" },
      { name: "Multifidus and erector spinae", role: "Segmental and global extensors of the lumbar spine; their action and the resting lordosis influence canal dimensions" }
    ]
  },

  pathophysiology: {
    tissueDamage: "The structural change is slow and cumulative. Disc degeneration, facet degeneration and hypertrophy and ligamentum flavum hypertrophy with calcification each contribute, and they can cause symptoms by themselves or decompensate a canal that was already narrow [r1]. In 21 human ligamentum flavum samples, hypertrophy was due to fibrosis (scar tissue): the severity of scarring correlated with ligament thickness (r = 0.79), and the tissue expressed inflammation-related genes including COX-2, tumour necrosis factor-alpha and several interleukins [r14]. Thickening of the ligamentum flavum is therefore not simple buckling of a normal ligament but remodelled, fibrotic tissue.\n\nSymptoms depend on how the neural tissue responds, not only on how narrow the canal is. The space is posture-dependent, falling in axial loading with slight extension [r13]. Chronic compression is thought to deform the roots and impair their blood supply, especially when walking raises their metabolic demand, producing the intermittent pattern of neurogenic claudication; this mechanism is proposed and was not tested in the sources reviewed. Structure and symptoms correlate poorly: severe stenotic images are present in many symptom-free people [r1], and MRI severity did not relate to pre-operative disability or pain in surgical patients [r6].",
    structures: [
      { name: "Intervertebral disc", effect: "Dehydrates, loses height and bulges posteriorly, reducing canal and foraminal area [r1]" },
      { name: "Facet joints", effect: "Osteoarthritic degeneration with osteophytes and capsular hypertrophy narrows the lateral recess and foramen [r1]" },
      { name: "Ligamentum flavum", effect: "Fibrotic thickening, with calcification in some, projects into the canal; it buckles further in extension [r1,r14]" },
      { name: "Cauda equina and nerve roots", effect: "Compressed, with posture-dependent narrowing; chronic compression is thought to cause ischaemia, demyelination and, late, axonal injury (proposed; not tested in the sources reviewed)" },
      { name: "Vertebral alignment", effect: "A forward slip (degenerative spondylolisthesis) adds to narrowing and is common enough to be studied as a separate group [r12]" }
    ],
    muscles: [
      { name: "Multifidus and erector spinae", effect: "Reduced endurance and guarded movement are common clinically with chronic back and leg pain; their changes were not tested in the sources reviewed" },
      { name: "Hip flexors and hamstrings", effect: "Adaptive shortening develops with a flexed, stooped posture adopted for relief (clinical observation)" },
      { name: "Lower limb myotomes (L5, S1)", effect: "Mild weakness of ankle dorsiflexion, great toe extension or plantarflexion can develop with sustained root compression; examination is often normal at rest [r2]" },
      { name: "Gluteals and global lower limb muscle", effect: "Deconditioning from reduced walking lowers strength and endurance, which further limits walking tolerance (clinical observation)" }
    ],
    cellular: [
      { phase: "Disc degeneration", timing: "Years to decades", description: "Water and proteoglycan loss, annular fissuring and height loss reduce the disc's load sharing and begin canal narrowing [r1]." },
      { phase: "Ligamentum flavum fibrosis", timing: "Years", description: "Fibrosis and scar accumulate in the ligament, with expression of inflammation-related genes, and the ligament thickens [r14]." },
      { phase: "Facet joint osteoarthritis", timing: "Years", description: "Cartilage loss, osteophyte formation and capsular thickening enlarge the articular processes into the recess and foramen [r1]." },
      { phase: "Positional root compression", timing: "Minutes (reversible)", description: "In extension and loading the canal narrows and the roots are squeezed; flexion releases them [r13,r2]." },
      { phase: "Chronic root injury (proposed)", timing: "Months to years", description: "Prolonged compression is thought to impair intraneural blood flow and myelin, and late axonal integrity; mostly animal and surgical-specimen evidence, not tested in the sources reviewed." }
    ],
    systems: [
      { system: "Nervous system (peripheral)", effect: "Positional compression of the cauda equina or roots produces bilateral or unilateral leg symptoms with walking; sensory and motor signs may only appear after walking [r2,r13]" },
      { system: "Nervous system (central)", effect: "Persistent pain with low back pain, which is associated with absolute stenosis (OR 3.16 in a community sample) [r11]; pain processing and fear of walking can amplify disability (clinical observation)" },
      { system: "Vascular", effect: "Impaired nerve root blood flow during walking is a proposed mechanism for claudication; peripheral arterial disease is a common competing cause of walking-related leg pain and must be excluded [r1]" },
      { system: "Musculoskeletal chain", effect: "A flexed posture, reduced hip extension and a wide-based gait develop; wide-based gait raised the likelihood of the syndrome (LR 13) [r2]" },
      { system: "Cardiometabolic and functional", effect: "Reduced walking leads to deconditioning and loss of independence in older adults (clinical observation)" },
      { system: "Psychological and behavioural", effect: "Fear of walking, loss of confidence and low mood follow loss of function; psychologically informed approaches featured in the more successful exercise programs [r15]" }
    ]
  },

  grading: {
    system: "Anatomical zone (descriptive); there is no accepted clinical severity grade",
    grades: [
      { grade: "Central canal stenosis", description: "Narrowing of the whole canal compresses the cauda equina; typically bilateral symptoms.", prognosis: "Radiological severity was not associated with disability, pain or 1-year surgical outcome in 202 patients [r6]" },
      { grade: "Lateral recess (subarticular) stenosis", description: "Compression of the traversing root beneath the superior articular process; unilateral radicular symptoms are common (clinical teaching)." },
      { grade: "Foraminal stenosis", description: "Compression of the exiting root in the foramen (clinical teaching)." },
      { grade: "Radiological severity (mild to extreme)", description: "MRI grading by the Schizas morphological classification placed 7 of 202 surgical patients in the mild category, 38 moderate, 108 severe and 49 extreme [r6].", prognosis: "No relationship with pre-operative disability or pain, or with change at 1 year; the authors advise against over-emphasising MRI severity [r6]" }
    ]
  },

  timeframes: {
    summary: "LSS develops over years and has no healing timeline; the phases below describe a typical management course. In trials patients improved over 2 years whether treated surgically or non-surgically [r9,r16], and timing of any surgical decision is individual.",
    healing: [
      { phase: "Education, relieving positions and early flexion-biased activity", startDay: 0, endDay: 42, description: "Explain the condition, find positions and walking patterns that ease symptoms, begin cycling and gentle mobility (clinical convention)" },
      { phase: "Progressive exercise and walking capacity", startDay: 28, endDay: 112, description: "Supervised multimodal program with trunk and hip strengthening, fitness work and graded walking [r15,r8]" },
      { phase: "Review and decision point", startDay: 84, endDay: 180, description: "Reassess walking tolerance and disability; discuss a surgical opinion if disabling symptoms persist despite well-delivered care (clinical convention)" },
      { phase: "Long-term self-management", startDay: 112, endDay: 730, description: "Maintain activity, strength and a flare-up plan; trial outcomes were measured out to 2 years [r9,r16]" }
    ],
    milestones: [
      { label: "Baseline walking tolerance recorded", day: 0, note: "Self-paced walking test and ODI walk item are the suggested measures [r17]" },
      { label: "First review of symptoms and walking tolerance", day: 28, note: "Clinical convention" },
      { label: "Decision point: surgical opinion if disabling symptoms persist", day: 90, note: "Clinical convention; 57% of surgical candidates in the physical therapy arm crossed over to surgery by 2 years [r9]" },
      { label: "2-year follow-up in trials", day: 730, note: "Both treatment arms improved [r9,r16]" }
    ],
    returnToSport: "Not applicable as a sport diagnosis. The goal is function: walking tolerance, standing tolerance and the person's valued activities. Golf, cycling, swimming and gardening are usually possible with a flexion-tolerant posture, with timing guided by symptoms (clinical convention)."
  },

  clinicalPresentation: {
    symptoms: [
      "Buttock and leg pain, aching, heaviness, numbness or tingling that comes on with standing or walking, often bilateral (bilateral buttock or leg pain, LR 6.3) [r2]",
      "Relief by sitting or bending forward: no pain when seated (LR 7.4) and improvement on bending forward (LR 6.4) [r2]",
      "Relief when leaning on a shopping trolley or riding a bicycle (a Delphi consensus history item) [r3]",
      "A shrinking walking distance, with the need to stop and sit or stoop",
      "Low back pain, often present but not the dominant complaint [r3]",
      "Leg weakness or a feeling of the legs giving way on walking [r3]"
    ],
    signs: [
      "Neurological examination is often normal at rest; symptoms may only be reproduced after walking [r2]",
      "Wide-based gait (LR 13) and an abnormal Romberg test (LR 4.2) increased the likelihood of the syndrome [r2]",
      "Flexed, stooped posture and an upright extension posture that reproduces symptoms (clinical observation)",
      "Mild myotomal weakness, reduced ankle reflex or distal sensory change, in a minority (clinical observation)",
      "Normal and symmetric foot pulses, which help separate neurogenic from vascular claudication [r3]"
    ]
  },

  assessment: {
    subjective: [
      "Site, side and quality of buttock and leg symptoms, and whether they are bilateral",
      "Walking distance before symptoms start, and how long and in what position they take to ease",
      "Response to sitting, bending forward, a shopping trolley or a bicycle versus standing upright [r2,r3]",
      "Symptoms on level versus uphill versus downhill walking (clinical convention; not validated)",
      "Neurological and sphincter symptoms: leg weakness, saddle numbness, bladder, bowel and sexual function",
      "Vascular history and risk factors, because peripheral arterial disease also causes walking-related leg pain [r1]",
      "Previous back surgery or treatment, falls, goals and medications, and the person's own priorities for walking"
    ],
    observation: ["Flexed or stooped posture, or loss of lumbar lordosis", "Wide-based or cautious gait [r2]", "Gait change and trunk lean after a timed walk", "Foot drop or slapping gait if there is L4–L5 weakness"],
    palpation: ["Paraspinal tenderness and guarding (nonspecific)", "Pedal pulses (dorsalis pedis, posterior tibial) and skin changes, to screen for peripheral arterial disease [r3]", "Spinous process step or tenderness suggesting spondylolisthesis"],
    rangeOfMotion: ["Lumbar extension is often limited and provokes buttock or leg symptoms; flexion usually relieves them", "Sustained extension for 30 to 60 seconds to reproduce symptoms (clinical convention; no accuracy figures identified)", "Hip range of motion, especially extension and rotation, to exclude hip osteoarthritis as the source of leg pain"],
    strength: ["Myotomes L2–S1 bilaterally, including heel and toe walking, before and after a walking test", "Single-leg stance and sit-to-stand repetitions as general lower limb strength measures", "Hip extensor and abductor strength"],
    neuro: ["Dermatomes, reflexes and myotomes, often normal at rest", "Re-test after provoking walking or standing extension if the resting examination is normal [r2]", "Romberg test: abnormal result increased the likelihood of the syndrome (LR 4.2) [r2]", "Perineal sensation and bladder, bowel and sexual function screen in anyone with new or progressive symptoms", "Upper motor neuron signs (clonus, extensor plantar response) suggest a co-existing myelopathy and need referral"],
    functional: ["Self-paced walking test (distance or time to symptom onset) as a baseline [r17]", "Sit-to-stand, timed up and go and balance screens appropriate to older adults", "Standing tolerance in extension versus leaning on a bench or trolley", "Stationary cycling tolerance compared with walking"],
    specialTests: [
      { name: "History: no pain when seated", purpose: "Increase the probability of the clinical syndrome of lumbar spinal stenosis in older adults with leg pain", procedure: "Ask whether the leg pain is absent when sitting, and whether any amount of sitting reproduces it.", positive: "Absence of pain when seated", lrPositive: "7.4 (95% CI 1.9–30)", refs: ["r2"] },
      { name: "History: improvement when bending forward", purpose: "Identify the flexion-relief pattern of neurogenic claudication", procedure: "Ask whether leaning forward, sitting or using a trolley eases the symptoms.", positive: "Symptoms improve on bending forward", lrPositive: "6.4 (95% CI 4.1–9.9)", refs: ["r2"] },
      { name: "History: bilateral buttock or leg pain", purpose: "Distinguish multilevel or central stenosis from a unilateral radiculopathy", procedure: "Map the symptoms on a body chart.", positive: "Pain in both buttocks or both legs", lrPositive: "6.3 (95% CI 3.1–13)", refs: ["r2"] },
      { name: "History: neurogenic claudication", purpose: "Core symptom of the syndrome; its absence makes the diagnosis less likely", procedure: "Ask about leg or buttock symptoms provoked by walking and relieved by rest or flexion.", positive: "Walking-provoked leg or buttock symptoms relieved by sitting or flexion", lrPositive: "3.7 (95% CI 2.9–4.8)", lrNegative: "0.23 (95% CI 0.17–0.31)", refs: ["r2"] },
      { name: "Wide-based gait and Romberg test", purpose: "Examination findings that increase the likelihood of the syndrome", procedure: "Observe gait for a widened base. Perform the Romberg test with the feet together and eyes closed.", positive: "Wide-based gait, or loss of balance on the Romberg test", lrPositive: "Wide-based gait 13 (95% CI 1.9–95); abnormal Romberg 4.2 (95% CI 1.4–13)", refs: ["r2"] },
      { name: "Pedal pulses and ankle–brachial index", purpose: "Screen for vascular claudication as the competing diagnosis", procedure: "Palpate dorsalis pedis and posterior tibial pulses; refer for ankle–brachial index if pulses are absent or reduced.", positive: "Absent or reduced pulses, or cool, shiny skin: investigate for peripheral arterial disease. Normal and symmetric pulses were a Delphi consensus diagnostic item for LSS [r3]. No accuracy figures were identified in the sources reviewed.", refs: ["r3"] }
    ],
    clinicalRules: [
      { name: "Diagnostic support tool (Suri and colleagues)", description: "A score of 7 or higher on a tool combining history and examination findings increased the likelihood of the clinical syndrome (LR 3.3, 95% CI 2.7–4.0), while a score below 7 made the diagnosis much less likely (LR 0.10, 95% CI 0.06–0.16) [r2]. Combinations of findings were most useful for identifying people unlikely to have the diagnosis." },
      { name: "International Delphi consensus history items", description: "279 clinicians from 29 countries agreed on history items including leg or buttock pain while walking, flexing forward to relieve symptoms, relief with a shopping cart or bicycle, motor or sensory disturbance while walking, normal and symmetric foot pulses, lower extremity weakness and low back pain. Clinicians were 80% certain of the diagnosis within six questions [r3]." }
    ],
    outcomeMeasures: [
      { name: "Self-paced walking test and Oswestry Disability Index walk item", use: "Recommended walking outcome measures for neurogenic claudication, pending better evidence [r17]" },
      { name: "Oswestry Disability Index (ODI)", use: "Primary disability outcome in the Finnish and Swedish surgical trials [r16,r18]" },
      { name: "SF-36 physical function and bodily pain", use: "Primary outcomes in SPORT and in the physical therapy versus surgery trial [r9,r19]" },
      { name: "Roland-Morris Disability Questionnaire and leg pain numeric rating scale", use: "Primary outcomes in the epidural injection trial [r4]" },
      { name: "6-minute walk test", use: "Objective walking capacity, used in the Swedish fusion trial [r18]" }
    ],
    imaging: [
      { modality: "MRI of the lumbar spine", indication: "When the clinical syndrome is present and surgery or an epidural injection is being considered, or when red flags or progressive deficit are present. Not required to start non-surgical care.", findings: "Central canal, lateral recess and foraminal narrowing, ligamentum flavum thickening, facet hypertrophy and disc bulge. Severe stenotic images occur in symptom-free people [r1], a pooled 11% of asymptomatic people had radiological stenosis [r5], and severity was not associated with disability or outcome in surgical patients [r6]." },
      { modality: "Axially loaded or upright imaging (CT myelography or MRI)", indication: "Selected surgical candidates when supine imaging underestimates narrowing", findings: "Axial loading in slight extension reduced the dural sac area in 66 of 84 patients, so conventional supine imaging may understate the narrowing that occurs on standing [r13]." },
      { modality: "CT", indication: "When MRI is contraindicated or bony detail is needed for planning", findings: "Bony canal dimensions, osteophytes and facet hypertrophy; CT cut-offs of 12 mm (relative) and 10 mm (absolute) were used in the Framingham study [r11]." },
      { modality: "Standing radiographs, with flexion and extension views if instability is suspected", indication: "Suspected degenerative spondylolisthesis or deformity", findings: "Slip, disc height loss and alignment; the neural structures are not visible." },
      { modality: "Ankle–brachial index or vascular imaging", indication: "Absent or reduced pulses, risk factors for vascular disease, or atypical claudication", findings: "Peripheral arterial disease, which can co-exist with LSS [r1]." }
    ]
  },

  differentials: [
    { name: "Vascular claudication (peripheral arterial disease)", distinguishing: "Calf-dominant cramping that comes on after a reproducible walking distance and eases within minutes of standing still, not requiring flexion; reduced pulses or skin changes. The two conditions can co-exist, so vascular investigation matters before surgery [r1,r3]." },
    { name: "Lumbar disc herniation with radiculopathy", id: "lumbar-disc-herniation", distinguishing: "Younger age, unilateral dermatomal leg pain that is worse with sitting and flexion, a positive straight leg raise or slump test." },
    { name: "Lumbar facet joint pain", id: "lumbar-facet-joint-pain", distinguishing: "Back pain with non-dermatomal referral to the buttock or thigh that does not follow a walking-distance pattern." },
    { name: "Spondylolisthesis", id: "spondylolisthesis", distinguishing: "Radiographic slip, sometimes with a palpable step; it may be the cause of stenosis rather than an alternative to it [r12]." },
    { name: "Hip osteoarthritis", distinguishing: "Groin or lateral hip pain, restricted and painful hip internal rotation, pain on weight bearing that is not relieved by lumbar flexion." },
    { name: "Peripheral neuropathy", distinguishing: "Constant distal stocking-distribution symptoms, not posture or walking dependent, often with sensory loss and reduced ankle reflexes." },
    { name: "Cauda equina syndrome", id: "cauda-equina-syndrome", distinguishing: "New bladder, bowel or saddle disturbance, or rapidly progressive bilateral weakness; an emergency, not the slow positional pattern of stenosis." },
    { name: "Vertebral fracture, infection or malignancy", distinguishing: "Constant or night pain, systemic features, history of cancer, steroid use or trauma; look for combinations of red flags." }
  ],
  redFlags: [
    "EMERGENCY: possible cauda equina syndrome. New urinary retention or loss of bladder sensation, faecal incontinence, saddle (perineal) numbness, new sexual dysfunction or rapidly progressive bilateral leg weakness need same-day emergency department referral for urgent MRI and surgical review. Stenosis does not exclude it, and a narrow canal may have less reserve (clinical reasoning).",
    "Progressive or severe motor deficit (for example a new foot drop or loss of a grade of power on serial testing): arrange urgent spinal surgical review.",
    "Absent pedal pulses, rest pain, ulceration or colour change: peripheral arterial disease or critical limb ischaemia needs urgent vascular assessment [r3].",
    "Constant or night pain, unexplained weight loss, fever, a history of cancer or severe trauma: consider malignancy, infection or fracture and investigate.",
    "Upper motor neuron signs (hyper-reflexia, clonus, extensor plantar response) or gait ataxia out of proportion to the lumbar findings: consider cervical or thoracic myelopathy."
  ],

  management: {
    principles: "Start with multimodal non-surgical care: education, advice and lifestyle change, home exercise, manual therapy and rehabilitation. The 2021 guideline made conditional recommendations for this approach (moderate-quality evidence), and an updated systematic review found moderate-quality evidence that manual therapy with exercise, with or without education, is effective [r7,r8]. Several drug classes are not recommended and epidural steroid injection gave minimal or no short-term benefit [r7,r4]. Surgery is an option for people with disabling symptoms who want to consider it. In a randomised trial of surgical candidates, decompression and physical therapy gave similar gains at 2 years, with a high crossover to surgery [r9], and a Cochrane review had very little confidence in any conclusion on surgery versus non-surgical care [r10]. Present the options honestly and decide together.",
    medical: [
      { name: "Oral analgesics and other drugs (NSAIDs, paracetamol, opioids, muscle relaxants, gabapentinoids, calcitonin, methylcobalamin)", description: "The 2021 guideline made conditional recommendations against NSAIDs, methylcobalamin, calcitonin, paracetamol, opioids, muscle relaxants, pregabalin (consensus-based) and gabapentin (very low-quality evidence) for neurogenic claudication, because of little evidence of benefit [r7]. Short-term analgesia is a clinical decision for the prescriber.", evidence: "very-limited", recommendation: "not-recommended", refs: ["r7"] },
      { name: "Serotonin–noradrenaline reuptake inhibitors or tricyclic antidepressants", description: "The guideline said clinicians and patients may consider a trial, based on very low-quality evidence [r7]. A medical decision.", evidence: "very-limited", recommendation: "consider", refs: ["r7"] },
      { name: "Epidural corticosteroid injection", description: "In 400 patients with central stenosis, glucocorticoid plus lidocaine offered minimal or no short-term benefit over lidocaine alone at 6 weeks (Roland-Morris difference −1.0 points, 95% CI −2.1 to 0.1; leg pain −0.2, 95% CI −0.8 to 0.4) [r4]. The 2021 guideline recommended against epidural steroid injection (high-quality evidence), while an updated review found a statistically but not clinically important benefit over lidocaine alone in the short term [r7,r8].", evidence: "moderate", recommendation: "not-recommended", refs: ["r4", "r7", "r8"] },
      { name: "Decompressive surgery (laminectomy or laminotomy)", description: "Evidence conflicts. In SPORT, the intention-to-treat analysis showed a benefit for bodily pain (7.8, 95% CI 1.5–14.1) but not physical function or ODI, with 67% of the surgical arm operated and 43% of the non-surgical arm crossing over; the as-treated analysis favoured surgery at 2 years [r19]. In a Finnish randomised trial of 94 patients, ODI favoured surgery by 11.3 points at 1 year and 7.8 at 2 years, with no difference in walking ability [r16]. In a trial of physical therapy versus decompression, 2-year physical function gains were similar (difference 0.9, 95% CI −7.9 to 9.6) [r9]. A Cochrane review had very little confidence in any conclusion and noted surgical complication rates of 10–24% [r10].", evidence: "conflicting", recommendation: "consider", refs: ["r19", "r16", "r9", "r10"] },
      { name: "Fusion added to decompression", description: "In 247 patients, decompression plus fusion did not give better ODI or 6-minute walk results than decompression alone at 2 or 5 years, with longer hospital stay (7.4 versus 4.1 days) and similar reoperation (22% versus 21%). Results were similar with and without spondylolisthesis [r18].", evidence: "moderate", recommendation: "not-recommended", refs: ["r18"] },
      { name: "Post-operative rehabilitation", description: "The guideline suggested a supervised exercise program and/or educational materials encouraging activity, with cognitive-behavioural therapy, starting 12 weeks after surgery (low-quality evidence) [r7].", evidence: "limited", recommendation: "consider", refs: ["r7"] }
    ],
    physio: [
      { name: "Multimodal program (education, advice, home exercise, manual therapy and rehabilitation)", description: "The core first-line package. In moderate-quality evidence from three trials, manual therapy and exercise gave superior short-term symptom and function improvement compared with medical care or community-based group exercise, and manual therapy, education and exercise delivered with a cognitive-behavioural approach improved walking distance more than self-directed home exercise [r8]. The guideline conditionally recommended this approach [r7].", evidence: "moderate", recommendation: "recommended", refs: ["r7", "r8"] },
      { name: "Flexion-biased exercise, strengthening and cycling", description: "Among 13 trials (23 interventions, 1440 participants), most interventions included supervision and flexion-based exercises. Stretches, strength and trunk exercises, fitness exercise (especially cycling) and psychologically informed approaches featured more often in successful interventions, but no conclusions could be drawn about supervision or dose [r15].", evidence: "limited", recommendation: "consider", refs: ["r15"] },
      { name: "Education, activity advice and pacing", description: "Explain that stenosis on a scan does not mean damage is occurring, that walking in a flexion-tolerant way is safe, and teach pacing and relieving positions. Education and advice are part of the guideline's multimodal package [r7,r6].", evidence: "moderate", recommendation: "recommended", refs: ["r7", "r6"] },
      { name: "Manual therapy", description: "Used within the multimodal program as short-term symptom relief to enable exercise; the supporting trials tested manual therapy combined with exercise, not manual therapy alone [r8].", evidence: "limited", recommendation: "consider", refs: ["r8"] },
      { name: "Traditional acupuncture", description: "The guideline said acupuncture could be tried on a trial basis, with very low-quality evidence [r7].", evidence: "very-limited", recommendation: "consider", refs: ["r7"] },
      { name: "Prolonged rest or avoidance of walking", description: "Avoiding activity worsens deconditioning and was not supported by any source reviewed; the guideline favours advice and activity [r7].", evidence: "expert-opinion", recommendation: "not-recommended", refs: [] }
    ],
    education: [
      "Spinal stenosis is a common age-related change in the spine. A narrow canal on a scan does not mean the nerves are being damaged, and scan severity does not predict how you will do.",
      "Leaning forward, sitting or using a shopping trolley opens the canal and eases the symptoms. This is a sign of the condition, not a sign of harm.",
      "Walking in short, regular bouts, cycling and strengthening your legs and trunk are safe and are the foundation of treatment.",
      "Exercise-based care and surgery both help many people. If symptoms are disabling, a surgical opinion is reasonable, and the decision is yours.",
      "Injections of steroid into the spine did not help more than a local anaesthetic alone in a large trial.",
      "Go to an emergency department the same day if you notice numbness around the genitals or buttocks, difficulty passing urine, loss of bowel control or leg weakness that is getting worse."
    ]
  },

  rehab: {
    overview: "Progression is criteria-based and driven by walking tolerance and function. The evidence supports a multimodal program but does not define a regimen, so dosages below are typical clinical convention [r8,r15]. Start in positions and activities that relieve symptoms (flexion-biased, cycling), build trunk, hip and leg strength and general fitness, then progressively extend upright walking and standing tolerance. Psychologically informed approaches featured in the more successful programs, so address fear of walking and confidence alongside the physical work [r15]. Record walking distance or time with a self-paced walking test at each stage [r17]. Stop and reassess if neurological signs progress or new sphincter symptoms appear.",
    stages: [
      {
        name: "Educate & find relieving positions",
        timeframe: "Weeks 0–3 (typical; criteria override time)",
        goals: ["Understand the condition and the relieving positions", "Walk in short, regular bouts with planned rests", "Begin flexion-biased mobility and stationary cycling", "Record baseline walking tolerance"],
        precautions: ["Refer the same day for new bladder, bowel or saddle symptoms or rapidly progressive weakness", "Do not provoke symptoms in sustained extension early on", "Screen for peripheral arterial disease if pulses are reduced"],
        exercises: [
          { name: "Stationary cycling", dosage: "10–20 minutes, daily, in a slightly forward-leaning posture (clinical convention)", cues: "Lean forward on the handlebars; stop if leg symptoms build" },
          { name: "Supine knee to chest", dosage: "5 holds of 20–30 seconds per leg, twice daily (clinical convention)", cues: "Relax the back into the floor; breathe out", figure: { pose: "ex-knee-to-chest", view: "lateral", props: ["mat"] } },
          { name: "Cat–camel in comfortable range", dosage: "2 sets of 10 slow repetitions, 2–3 times daily (clinical convention)", cues: "Move smoothly; the flexed (camel) phase is the relieving position", figure: { pose: "ex-cat-camel", view: "lateral", props: ["mat"] } },
          { name: "Interval walking with rests", dosage: "3–5 minutes of walking, then a seated or leaning rest, repeated 3–5 times, 1–2 times a day (clinical convention)", cues: "Rest before symptoms are strong; a trolley or poles may help", figure: { pose: "walk-heel-strike", view: "lateral" } },
          { name: "Seated forward lean", dosage: "Hold 30 seconds, 3 times, as needed for symptom relief (clinical convention)", cues: "Elbows on knees; relax the back", figure: { pose: "sit", view: "lateral", props: ["chair"] } }
        ],
        progressionCriteria: ["Understands relieving positions and pacing", "Cycling 15–20 minutes without increasing leg symptoms", "Walking bouts of about 10 minutes tolerated with planned rests", "No new neurological signs on repeat examination"]
      },
      {
        name: "Restore control & mobility",
        timeframe: "Weeks 3–8",
        goals: ["Segmental trunk control in neutral", "Hip mobility and glute activation", "Walking tolerance increasing", "Sit-to-stand confidence"],
        precautions: ["Progress a new load only if leg symptoms are no worse after 24 hours (clinical convention)", "Avoid sustained lumbar extension while symptoms are irritable"],
        exercises: [
          { name: "Bird-dog", dosage: "3 sets of 8 repetitions per side with 5-second holds, daily (clinical convention)", cues: "Reach long, keep the pelvis level", figure: { pose: "ex-bird-dog", view: "lateral", props: ["mat"] } },
          { name: "Dead bug", dosage: "3 sets of 8 repetitions per side, daily (clinical convention)", cues: "Keep the low back flat as the limbs move", figure: { pose: "ex-dead-bug", view: "lateral", props: ["mat"] } },
          { name: "Glute bridge", dosage: "3 sets of 10 repetitions with a 3-second hold (clinical convention)", cues: "Drive through the heels, ribs down", figure: { pose: "ex-bridge", view: "lateral", props: ["mat"] } },
          { name: "Side plank (knees, then feet)", dosage: "3 holds of 15–30 seconds per side, building to 45 seconds (clinical convention)", cues: "Stack the hips; lift the waist away from the floor", figure: { pose: "ex-side-plank", view: "lateral", props: ["mat"] } },
          { name: "Supported sit-to-stand", dosage: "3 sets of 8–10 repetitions, once or twice daily (clinical convention)", cues: "Lean forward over the feet; push through the heels", figure: { pose: "ex-squat", view: "lateral" } }
        ],
        progressionCriteria: ["Walking 15–20 minutes with planned rests and symptoms settling in under 5 minutes", "Side plank at least 30 seconds each side (clinical convention)", "Sit-to-stand 10 repetitions without hand support", "Neurological signs stable or improving"]
      },
      {
        name: "Build strength & walking capacity",
        timeframe: "Weeks 8–16",
        goals: ["Hip and trunk strength and endurance", "Walking distance extended toward the person's goal", "Fitness and cycling capacity", "Confidence in upright activity"],
        precautions: ["Increase load or duration by about 5–10% a week, one variable at a time (clinical convention)", "Back off if walking tolerance drops over several sessions"],
        exercises: [
          { name: "Hip thrust", dosage: "3 sets of 8–10 repetitions at a load leaving 2–3 repetitions in reserve, 2–3 times a week (clinical convention)", cues: "Tuck the pelvis at the top; ribs down", figure: { pose: "ex-hip-thrust", view: "lateral", props: ["bench"] } },
          { name: "Single-leg bridge", dosage: "3 sets of 8 repetitions per leg, 3 times a week (clinical convention)", cues: "Keep the pelvis level; avoid arching", figure: { pose: "ex-single-leg-bridge", view: "lateral", props: ["mat"] } },
          { name: "Step-up", dosage: "3 sets of 8–10 repetitions per leg, 2–3 times a week (clinical convention)", cues: "Lead with the hip; control the descent", figure: { pose: "ex-step-up", view: "lateral", props: ["step"] } },
          { name: "Forearm plank", dosage: "3 holds of 30–45 seconds, 3 times a week (clinical convention)", cues: "Straight line from head to heels", figure: { pose: "ex-plank", view: "lateral", props: ["mat"] } },
          { name: "Progressive walking or cycling", dosage: "20–40 minutes, 4–5 days a week, adding about 10% each week (clinical convention)", cues: "Keep the same relieving strategy; rest early", figure: { pose: "walk-push-off", view: "lateral" } }
        ],
        progressionCriteria: ["Continuous walking of 30 minutes, or the person's goal distance", "Symptoms 3/10 or less and settling quickly after rest", "Strength training loads progressing weekly without flares", "Confident with the flare-up plan"]
      },
      {
        name: "Maintain & self-manage",
        timeframe: "Week 16 onward",
        goals: ["Sustain walking and strength gains", "Self-manage flares and relieving positions", "Prepare for activities that matter to the person", "Review whether a surgical opinion is wanted"],
        precautions: ["Review at 3 and 6 months; discuss a surgical opinion if disabling symptoms persist despite well-delivered care (clinical convention)", "Persisting neurological decline needs earlier review"],
        exercises: [
          { name: "Walking program", dosage: "30–45 minutes, 4–5 days a week (clinical convention)", cues: "Use rests and relieving positions as needed", figure: { pose: "walk-heel-strike", view: "lateral" } },
          { name: "Lower limb strength circuit (squat, step-up, hip extension)", dosage: "2–3 sets of 8–12 repetitions, 2–3 times a week (clinical convention)", cues: "Controlled tempo, moderate load", figure: { pose: "ex-squat", view: "lateral" } },
          { name: "Single-leg balance", dosage: "3 holds of 30 seconds per leg, daily (clinical convention)", cues: "Level pelvis; balance is rarely trained in LSS trials [r15]", figure: { pose: "ex-single-leg-balance", view: "lateral" } },
          { name: "Farmer carry", dosage: "3 carries of 20–30 metres, 2 times a week (clinical convention)", cues: "Walk tall; avoid leaning to the loaded side", figure: { pose: "ex-farmer-carry", view: "lateral", props: ["kettlebell"] } },
          { name: "Flare-up plan", dosage: "Reduce walking by about a third and use relieving positions for 3–5 days, then rebuild (clinical convention)", cues: "Write the plan down; use it early" }
        ],
        progressionCriteria: ["Walking goal sustained for at least 4 weeks", "Independent self-management plan in place", "Decision about further options (including surgery) made with the person"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "LSS is not usually a sport diagnosis, and no validated return-to-activity criteria were identified; the following are clinical convention",
      "Walking tolerance meeting the person's goal (for example 30 minutes or the distance to the shops) with symptoms settling quickly",
      "Ability to stand upright for the required period for daily tasks with no progressive neurological signs",
      "Lower limb and trunk strength adequate for the demands of their activity",
      "A self-management plan for flares, with confidence in using relieving positions"
    ],
    tests: [
      "Self-paced walking test (distance or time to symptom onset) compared with baseline [r17]",
      "Sit-to-stand and timed up and go",
      "Oswestry Disability Index or the person's goal-specific measure",
      "Single-leg balance and step-up quality"
    ]
  },

  prognosis: "LSS is a chronic, degenerative condition, and no natural-history estimate could be verified in the sources reviewed. Trial data show improvement over time with either approach. In a Finnish randomised trial, both surgical and non-operative groups improved over 2 years, with the surgical advantage in disability narrowing from 11.3 ODI points at 1 year to 7.8 at 2 years and no difference in walking ability [r16]. In the randomised trial of physical therapy versus decompression, physical function improved by 22.4 points after surgery and 19.2 after physical therapy at 2 years, but 57% of the physical therapy group crossed over to surgery and the study had no no-treatment control, so success cannot be attributed to either intervention [r9]. In SPORT, the intention-to-treat analysis was diluted by crossover (67% of the surgical arm operated, 43% of the non-surgical arm crossed over) [r19]. In a Cochrane review, evidence was low quality and complication rates after surgery were 10–24% [r10]. Adding fusion to decompression did not improve results at 2 or 5 years, and reoperation over a mean 6.5 years was similar (22% versus 21%) [r18]. Radiological severity did not predict outcome at 1 year after surgery [r6].",
  prevention: [
    "No intervention has been shown to prevent degenerative lumbar spinal stenosis; the points below are clinical convention.",
    "Stay physically active and keep trunk, hip and leg strength through adulthood and older age (clinical convention).",
    "Maintain a healthy weight and avoid smoking for general spinal and vascular health (clinical convention).",
    "Treat back and leg symptoms early with activity and education, and review persisting walking-related leg symptoms rather than accepting them as normal ageing (clinical convention)."
  ],
  clinicalPearls: [
    "Ask about sitting. Pain-free sitting (LR 7.4) and relief on bending forward (LR 6.4) are the most useful history items, and the absence of neurogenic claudication lowers the probability (LR 0.23) [r2].",
    "A big scan does not mean a big problem. Radiological stenosis occurs in a pooled 11% of asymptomatic people, and its severity did not track disability, pain or outcome in surgical patients [r5,r6]. Treat the person, not the picture.",
    "Palpate the pulses before you label it neurogenic. Peripheral arterial disease is a competing and sometimes co-existing cause of walking-related leg pain, so normal symmetric pulses support the neurogenic diagnosis [r1,r3].",
    "Cycling is an easy early win. People with neurogenic claudication often tolerate cycling longer than walking, and fitness exercise especially cycling featured in successful exercise programs [r3,r15].",
    "Be honest in the surgical conversation. Exercise-based care and surgery both improved function at 2 years in trials, the evidence is low to moderate quality, and 57% of surgical candidates assigned to physical therapy crossed over to surgery [r9,r10].",
    "Measure walking, not just pain. A self-paced walking test and the ODI walk item are recommended measures, so repeat them at each review [r17]."
  ],
  related: ["lumbar-disc-herniation", "cauda-equina-syndrome", "spondylolisthesis", "lumbar-facet-joint-pain", "acute-low-back-pain"],

  references: [
    { id: "r1", citation: "Szpalski M, Gunzburg R. Lumbar spinal stenosis in the elderly: an overview. Eur Spine J. 2003;12 Suppl 2:S170-5.", pmid: "13680315", doi: "10.1007/s00586-003-0612-1", type: "narrative-review", year: 2003 },
    { id: "r2", citation: "Suri P, Rainville J, Kalichman L, et al. Does this older adult with lower extremity pain have the clinical syndrome of lumbar spinal stenosis? JAMA. 2010;304(23):2628-36.", pmid: "21156951", doi: "10.1001/jama.2010.1833", type: "systematic-review", year: 2010 },
    { id: "r3", citation: "Tomkins-Lane C, Melloh M, Lurie J, et al. ISSLS Prize Winner: consensus on the clinical diagnosis of lumbar spinal stenosis: results of an international Delphi study. Spine (Phila Pa 1976). 2016;41(15):1239-46.", pmid: "26839989", doi: "10.1097/BRS.0000000000001476", type: "consensus-statement", year: 2016 },
    { id: "r4", citation: "Friedly JL, Comstock BA, Turner JA, et al. A randomized trial of epidural glucocorticoid injections for spinal stenosis. N Engl J Med. 2014;371(1):11-21.", pmid: "24988555", doi: "10.1056/NEJMoa1313265", type: "rct", year: 2014 },
    { id: "r5", citation: "Jensen RK, Jensen TS, Koes B, et al. Prevalence of lumbar spinal stenosis in general and clinical populations: a systematic review and meta-analysis. Eur Spine J. 2020;29(9):2143-63.", pmid: "32095908", doi: "10.1007/s00586-020-06339-1", type: "meta-analysis", year: 2020 },
    { id: "r6", citation: "Weber C, Giannadakis C, Rao V, et al. Is there an association between radiological severity of lumbar spinal stenosis and disability, pain, or surgical outcome? A multicenter observational study. Spine (Phila Pa 1976). 2016;41(2):E78-83.", pmid: "26352747", doi: "10.1097/BRS.0000000000001166", type: "cohort", year: 2016 },
    { id: "r7", citation: "Bussières A, Cancelliere C, Ammendolia C, et al. Non-surgical interventions for lumbar spinal stenosis leading to neurogenic claudication: a clinical practice guideline. J Pain. 2021;22(9):1015-39.", pmid: "33857615", doi: "10.1016/j.jpain.2021.03.147", type: "clinical-practice-guideline", year: 2021 },
    { id: "r8", citation: "Ammendolia C, Hofkirchner C, Plener J, et al. Non-operative treatment for lumbar spinal stenosis with neurogenic claudication: an updated systematic review. BMJ Open. 2022;12(1):e057724.", pmid: "35046008", doi: "10.1136/bmjopen-2021-057724", type: "systematic-review", year: 2022 },
    { id: "r9", citation: "Delitto A, Piva SR, Moore CG, et al. Surgery versus nonsurgical treatment of lumbar spinal stenosis: a randomized trial. Ann Intern Med. 2015;162(7):465-73.", pmid: "25844995", doi: "10.7326/M14-1420", type: "rct", year: 2015 },
    { id: "r10", citation: "Zaina F, Tomkins-Lane C, Carragee E, et al. Surgical versus non-surgical treatment for lumbar spinal stenosis. Cochrane Database Syst Rev. 2016;(1):CD010264.", pmid: "26824399", doi: "10.1002/14651858.CD010264.pub2", type: "systematic-review", year: 2016 },
    { id: "r11", citation: "Kalichman L, Cole R, Kim DH, et al. Spinal stenosis prevalence and association with symptoms: the Framingham Study. Spine J. 2009;9(7):545-50.", pmid: "19398386", doi: "10.1016/j.spinee.2009.03.005", type: "cross-sectional", year: 2009 },
    { id: "r12", citation: "Weinstein JN, Lurie JD, Tosteson TD, et al. Surgical versus nonoperative treatment for lumbar degenerative spondylolisthesis. N Engl J Med. 2007;356(22):2257-70.", pmid: "17538085", doi: "10.1056/NEJMoa070302", type: "rct", year: 2007 },
    { id: "r13", citation: "Willén J, Danielson B, Gaulitz A, et al. Dynamic effects on the lumbar spinal canal: axially loaded CT-myelography and MRI in patients with sciatica and/or neurogenic claudication. Spine (Phila Pa 1976). 1997;22(24):2968-76.", pmid: "9431634", doi: "10.1097/00007632-199712150-00021", type: "cohort", year: 1997 },
    { id: "r14", citation: "Sairyo K, Biyani A, Goel VK, et al. Lumbar ligamentum flavum hypertrophy is due to accumulation of inflammation-related scar tissue. Spine (Phila Pa 1976). 2007;32(11):E340-7.", pmid: "17495768", doi: "10.1097/01.brs.0000263407.25009.6e", type: "basic-science", year: 2007 },
    { id: "r15", citation: "Comer C, Williamson E, McIlroy S, et al. Exercise treatments for lumbar spinal stenosis: a systematic review and intervention component analysis of randomised controlled trials. Clin Rehabil. 2024;38(3):361-74.", pmid: "37715644", doi: "10.1177/02692155231201048", type: "systematic-review", year: 2024 },
    { id: "r16", citation: "Malmivaara A, Slätis P, Heliövaara M, et al. Surgical or nonoperative treatment for lumbar spinal stenosis? A randomized controlled trial. Spine (Phila Pa 1976). 2007;32(1):1-8.", pmid: "17202885", doi: "10.1097/01.brs.0000251014.81875.6d", type: "rct", year: 2007 },
    { id: "r17", citation: "Anderson DB, Mathieson S, Eyles J, et al. Measurement properties of walking outcome measures for neurogenic claudication: a systematic review and meta analysis. Spine J. 2019;19(8):1378-96.", pmid: "30986579", doi: "10.1016/j.spinee.2019.04.004", type: "systematic-review", year: 2019 },
    { id: "r18", citation: "Försth P, Ólafsson G, Carlsson T, et al. A randomized, controlled trial of fusion surgery for lumbar spinal stenosis. N Engl J Med. 2016;374(15):1413-23.", pmid: "27074066", doi: "10.1056/NEJMoa1513721", type: "rct", year: 2016 },
    { id: "r19", citation: "Weinstein JN, Tosteson TD, Lurie JD, et al. Surgical versus nonsurgical therapy for lumbar spinal stenosis. N Engl J Med. 2008;358(8):794-810.", pmid: "18287602", doi: "10.1056/NEJMoa0707136", type: "rct", year: 2008 }
  ],

  animation: {
    title: "How lumbar spinal stenosis causes neurogenic claudication",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 7, view: "lateral", environment: "road",
        actors: [{ id: "person", kit: "older-adult" }],
        keyframes: [
          { t: 0, actor: "person", pose: "stand", root: { x: -90 } },
          { t: 0.9, actor: "person", pose: "walk-heel-strike", root: { x: -60 } },
          { t: 1.7, actor: "person", pose: "walk-push-off", root: { x: -25 } },
          { t: 2.5, actor: "person", pose: "walk-heel-strike", joints: { trunk: -6, pelvis: 12 }, root: { x: 10 } },
          { t: 3.3, actor: "person", pose: "walk-push-off", joints: { trunk: -8, pelvis: 14 }, root: { x: 45 } },
          { t: 4.0, actor: "person", pose: "stand", joints: { trunk: -8, pelvis: 15 }, root: { x: 55 } },
          { t: 4.9, actor: "person", pose: "stand", joints: { trunk: 32, pelvis: -4, hipR: 18, hipL: 18, kneeR: 12, kneeL: 12 }, root: { x: 55 } },
          { t: 6.0, actor: "person", pose: "sit", root: { x: 55 } }
        ],
        forces: [
          { t: [2.4, 4.4], at: "lowBack", dir: "backward", label: "Upright extension narrows the canal" }
        ],
        highlights: [{ t: [2.6, 4.6], at: "lowBack" }],
        captions: [
          { t: 0, text: "An older adult sets out on a walk. Their lumbar canal is already narrowed by degeneration." },
          { t: 1.8, text: "Walking upright keeps the lumbar spine in extension and loaded, which narrows the canal further." },
          { t: 3.4, text: "Buttock and leg aching, heaviness or numbness builds, usually on both sides." },
          { t: 4.9, text: "They stop and lean forward. Flexion gives the nerves more room." },
          { t: 6.0, text: "Sitting brings relief within minutes. This pattern is neurogenic claudication." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "lowBack",
        captions: [{ t: 0, text: "Zooming into the lower lumbar spine from the side, to see the canal at L4–5." }]
      },
      {
        type: "closeup", label: "L4–5 canal", duration: 10.5, scene: "lumbar-sagittal",
        actions: [
          { t: 0, do: "highlight", target: "spinalCanal" },
          { t: 0.3, do: "label", target: "spinalCanal", text: "Spinal canal at L4–5" },
          { t: 1.2, do: "degenerate", target: "discL4L5" },
          { t: 1.4, do: "label", target: "discL4L5", text: "Degenerate, bulging disc" },
          { t: 2.4, do: "thicken", target: "ligamentumFlavum", amount: 0.8, dur: 1.2 },
          { t: 2.6, do: "label", target: "ligamentumFlavum", text: "Thickened ligamentum flavum" },
          { t: 3.4, do: "swell", target: "facetL4L5", amount: 0.5 },
          { t: 3.6, do: "label", target: "facetL4L5", text: "Facet joint hypertrophy" },
          { t: 4.6, do: "arrow", at: "canalL4L5", dir: "anterior", label: "Extension squeezes the canal", size: "m" },
          { t: 5.0, do: "compress", target: "caudaEquina", at: "canalL4L5" },
          { t: 5.2, do: "label", target: "caudaEquina", text: "Cauda equina compressed" },
          { t: 5.8, do: "irritate", target: "caudaEquina" },
          { t: 6.0, do: "pain", at: "canalL4L5" },
          { t: 7.4, do: "reset", target: "caudaEquina", dur: 1 },
          { t: 8.6, do: "camera", at: "canalL4L5", zoom: 1.6, dur: 1 },
          { t: 10.0, do: "camera", zoom: 1, dur: 0.5 }
        ],
        captions: [
          { t: 0, text: "The canal at L4–5 holds the cauda equina, the bundle of lumbar and sacral nerve roots." },
          { t: 1.2, text: "With age the disc loses height and bulges backwards into the canal." },
          { t: 2.4, text: "The ligamentum flavum thickens through fibrosis, not just buckling, and the facet joints enlarge." },
          { t: 4.6, text: "Standing and walking extend the spine. The space shrinks further and the nerve roots are squeezed." },
          { t: 6.0, text: "Compressed roots give leg pain, heaviness or numbness, often in both legs." },
          { t: 7.4, text: "Leaning forward or sitting flexes the spine and opens the canal, so the symptoms ease." },
          { t: 9.0, text: "The scan shows a fixed narrowing, but its severity does not predict symptoms or outcome." }
        ]
      },
      {
        type: "micro", label: "Nerve root", duration: 10, tissue: "nerve",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.6, stage: "compression" }, { t: 3.4, stage: "ischaemia" }, { t: 5.6, stage: "demyelination" }, { t: 7.8, stage: "axonal-injury" }
        ],
        timeLabels: [{ t: 1.6, text: "Minutes: with walking" }, { t: 3.4, text: "Proposed mechanism" }, { t: 5.6, text: "Chronic: months–years" }, { t: 7.8, text: "Chronic, severe" }],
        captions: [
          { t: 0, text: "A healthy nerve root: myelinated axons with a good blood supply." },
          { t: 1.6, text: "In a narrow canal, extension and loading compress the root." },
          { t: 3.4, text: "Blood flow may not meet the root's demand during walking. This mechanism is proposed, not proven." },
          { t: 5.6, text: "With long-standing compression, the myelin sheath can thin and conduction slows." },
          { t: 7.8, text: "Severe, prolonged compression can damage the axons themselves, so progressive deficit needs prompt review." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "SP3" }
};
