export default {
  id: "scaphoid-fracture",
  name: "Scaphoid fracture",
  shortName: "Scaphoid fracture",
  aka: ["navicular fracture of the wrist", "carpal navicular fracture", "broken scaphoid", "scaphoid waist fracture", "snuffbox fracture", "wrist fracture (scaphoid)", "scaphoid nonunion", "missed scaphoid"],
  region: "wrist-hand",
  tissues: ["bone"],
  onset: "acute",
  mechanismType: ["fall", "contact"],
  populations: ["young adult men", "athletes in contact and ball sports", "people after a fall on an outstretched hand", "cyclists and skaters"],
  sports: ["football", "rugby", "australian football", "basketball", "snowboarding", "skateboarding", "cycling", "boxing"],
  urgency: "urgent",
  summary: "A break of the scaphoid, usually at the waist, from a fall on an outstretched hand with the wrist extended and radially deviated. Snuffbox tenderness needs imaging, as missed fractures risk nonunion and AVN.",
  keyFacts: [
    { label: "Typical recovery", value: "Cast immobilisation for undisplaced waist fractures, then rehabilitation; trial outcomes are measured at 52 weeks (SWIFFT)" },
    { label: "Key test", value: "Snuffbox tenderness is sensitive (0.87–1.00 across studies) but not specific (0.03–0.98); combining tests raises specificity" },
    { label: "Imaging", value: "Radiographs can miss fractures; in a meta-analysis MRI had sensitivity 94.2% and specificity 97.7%, CT 81.5% and 96.0%" },
    { label: "Peak age", value: "Young adults; mean age 33 and 83% men in the SWIFFT trial" },
    { label: "Incidence", value: "29 per 100,000 per year in a one-year Edinburgh study of radiographically confirmed fractures" },
    { label: "Key risk", value: "Blood enters the scaphoid mainly at the distal end, so proximal pole fractures risk avascular necrosis and nonunion" }
  ],
  overview: "The scaphoid is the most commonly fractured carpal bone and the fracture occurs mostly in young men, although the incidence in women has risen [r1]. A prospective one-year study of 151 radiographically confirmed acute fractures found an incidence of 29 per 100,000 [r2]. The scaphoid has an unusual blood supply: most of the intraosseous vessels, and all of the proximal pole, are supplied by branches of the radial artery that enter the bone through the dorsal ridge, so the proximal pole depends on vessels entering distal to it [r3]. A fracture can therefore cut off the proximal fragment, which is the basis of the risk of avascular necrosis (AVN) and nonunion [r3].\n\nThe diagnosis is difficult because the first radiographs can look normal: a meta-analysis of 42 articles found that fractures missed on X-ray and later diagnosed on advanced imaging made up 21.8% of cases, and that MRI was the most accurate test [r4]. Snuffbox tenderness or pain on axial loading of the thumb should be treated as a scaphoid fracture until proved otherwise [r1]. For adults with a bicortical waist fracture displaced by 2 mm or less, the pragmatic SWIFFT trial found no significant difference in patient-rated wrist function at 52 weeks between early surgery and initial casting, and recommended initial cast immobilisation with fixation of confirmed nonunion [r5]. A meta-analysis of eight randomised trials suggested some advantages for surgery, but concluded that the evidence was insufficient to prove that it is better [r6].",

  epidemiology: {
    text: "The scaphoid is the most common carpal bone fracture [r1]. Estimates of its share of carpal fractures differ between sources: about 90% in the SWIFFT trial report [r5] and about 60% (2–3% of all fractures) in a German imaging review [r7]. A meta-analysis found that the scaphoid accounts for about 15% of acute wrist fractures [r4]. In a one-year Edinburgh study of 151 radiographically confirmed acute fractures, the annual incidence was 29 per 100,000 (95% CI 25–34), 105 patients (70%) were male, and males were significantly younger than females. Low-energy falls from standing height were the most common mechanism (40.4%), men were more likely to have a high-energy injury, and the commonest pattern was Herbert B2, a complete waist fracture (36.4%). Unstable fractures were more common in younger patients after high-energy injury [r2]. SWIFFT enrolled adults with a mean age of 33 years, of whom 83% were men [r5].\n\nThe population-level rates of nonunion and AVN after scaphoid fracture were not retrieved from the sources available for this page, so none are quoted.",
    riskFactors: {
      intrinsic: [
        "Young adult male sex: 70% of fractures in the Edinburgh study and 83% of SWIFFT participants were men [r2,r5]",
        "Female sex is less common but the incidence in women has increased over the past decade [r1]",
        "Proximal pole location: the proximal fragment relies on blood entering distally, so AVN and nonunion are more likely [r3]",
        "Displacement of the fracture, which is a recognised reason to fix the fracture to reduce the risk of nonunion [r1]"
      ],
      extrinsic: [
        "Fall on an outstretched hand: low-energy falls from standing height were the most common mechanism [r2]",
        "High-energy injury (sport, road accidents, falls from height), which more often causes unstable fractures in younger people [r2]",
        "Contact and ball sports, cycling and board sports (clinical)",
        "Missed or inadequately immobilised fractures, which raise the risk of nonunion [r7]"
      ]
    }
  },

  mechanism: {
    summary: "Most scaphoid fractures follow a fall on an outstretched hand in which the wrist is forced into extension and radial deviation. The scaphoid, which spans the proximal and distal carpal rows, is compressed between the radius and the distal row and then bent over the radial styloid. It fails at its narrowest part, the waist, and the fracture line usually runs obliquely or transversely across the bone (clinical biomechanics). The commonest pattern in a prospective series was a complete waist fracture [r2].",
    sequence: [
      "The person falls forward and reaches out; the palm lands with the wrist in marked extension.",
      "The wrist deviates radially as the hand strikes the ground, so the load passes through the thumb side of the carpus.",
      "The distal pole is driven proximally against the capitate and trapezium while the proximal pole is held by the radius and the scapholunate ligament (clinical biomechanics).",
      "Bending forces concentrate at the waist, and the palmar cortex fails in tension first, then the dorsal cortex (clinical biomechanics).",
      "The fracture line crosses the waist. If the proximal fragment is small, its blood supply, which enters distally, is cut off [r3].",
      "Swelling and pain appear in the radial wrist and anatomical snuffbox; many people keep using the hand, and the first radiograph can look normal [r4].",
      "Without diagnosis and immobilisation, the fracture may fail to unite, and the proximal pole can become avascular [r7]."
    ],
    variants: [
      { name: "High-energy injury", description: "Road accidents, falls from height and sports collisions cause displaced or unstable fractures, more often in younger people [r2]." },
      { name: "Axial load through the thumb", description: "A direct load along the thumb ray (for example a punch or a ball striking the hand) can fracture the scaphoid without a fall (clinical)." },
      { name: "Proximal pole fracture", description: "The proximal fragment depends on retrograde blood flow, so these fractures carry the greatest AVN and nonunion risk [r3]." },
      { name: "Tuberosity and distal pole fractures", description: "Fractures of the distal pole or tubercle have a more reliable blood supply and generally heal more readily (clinical)." },
      { name: "Trans-scaphoid perilunate fracture-dislocation", description: "A high-energy injury in which the scaphoid fractures and the carpus dislocates around the lunate (Herbert B4). It is an emergency (clinical)." }
    ]
  },

  anatomy: {
    text: "The scaphoid lies on the radial side of the proximal carpal row and acts as a link between the proximal and distal rows. Its distal pole articulates with the trapezium and trapezoid, its waist is the narrow middle, and its proximal pole articulates with the radius and is attached to the scapholunate ligament. A large part of the bone is covered by articular cartilage, which leaves limited room for vessels to enter (clinical anatomy). The anatomical snuffbox, bounded by the tendons of abductor pollicis longus and extensor pollicis brevis radially and extensor pollicis longus ulnarly, overlies the scaphoid, and the radial artery crosses its floor (clinical anatomy). In 15 fresh cadaver wrists, 70–80% of the intraosseous vascularity and the entire proximal pole were supplied by radial artery branches entering through the dorsal ridge, while 20–30% (the distal tuberosity region) came from volar radial branches [r3].",
    structures: [
      { name: "Scaphoid (waist, proximal and distal poles)", role: "Links the proximal and distal carpal rows and transmits load from the hand to the radius; the waist is the usual site of fracture [r2]" },
      { name: "Radial artery and its branches", role: "Main blood supply. Branches enter mainly through the dorsal ridge, with fewer from the volar side [r3]" },
      { name: "Scapholunate ligament", role: "Binds the proximal pole to the lunate and stabilises the carpus; injured in higher-energy injuries" },
      { name: "Anatomical snuffbox and scaphoid tubercle", role: "Surface landmarks for palpation; tenderness here suggests a scaphoid injury [r8]" },
      { name: "Radioscaphoid and midcarpal joints", role: "Articulations at risk of post-traumatic arthritis if nonunion or carpal collapse follows (clinical)" },
      { name: "Thumb tendons (APL, EPB, EPL)", role: "Form the snuffbox borders; their irritation overlaps with de Quervain's tenosynovitis" }
    ]
  },

  pathophysiology: {
    tissueDamage: "A fall on an outstretched hand loads the scaphoid in bending and compression, and the bone breaks at the waist. The scaphoid is largely covered by cartilage and its vessels enter at limited sites, mostly through the dorsal ridge. A fracture through the waist or proximal third can therefore interrupt the supply to the proximal fragment, which depends on flow that travels back through the bone from the distal end [r3]. Gelberman and Menon proposed this vascular anatomy as the explanation for scaphoid necrosis [r3].\n\nIf the fracture is missed, inadequately immobilised or displaced, the fragments may not unite [r1,r7]. A nonunion can progress to carpal collapse, with a humpback deformity and dorsal intercalated segment instability (DISI), and later to wrist arthritis (the scaphoid nonunion advanced collapse pattern; clinical knowledge). In a systematic review of bone grafting for nonunion, reduced contrast uptake in the proximal fragment on MRI and a humpback deformity or DISI were associated with a higher risk of graft failure [r11].",
    structures: [
      { name: "Scaphoid waist (most commonly) and proximal pole", effect: "Fracture of cortex and trabeculae; displacement is the main driver of instability and the decision to operate [r1,r5]" },
      { name: "Intraosseous blood supply", effect: "Vessels entering through the dorsal ridge are interrupted at a waist or proximal pole fracture, which threatens the proximal fragment [r3]" },
      { name: "Scapholunate ligament and other carpal ligaments", effect: "May be injured with higher-energy mechanisms (clinical)" },
      { name: "Adjacent articular cartilage (radioscaphoid and midcarpal)", effect: "Chondral damage and later arthritis if nonunion causes carpal collapse (clinical)" },
      { name: "Soft tissues and radial wrist tendons", effect: "Swelling and haematoma around the snuffbox; thumb tendons can become irritated (clinical)" }
    ],
    muscles: [
      { name: "Wrist flexors and extensors", effect: "Disuse weakness and stiffness during prolonged immobilisation (clinical). Cast treatment of an undisplaced waist fracture needs a long period of immobilisation [r1]." },
      { name: "Thumb muscles (thenar group, APL, EPB, EPL)", effect: "Pain-related inhibition and weakness; thumb pinch and grip fall (clinical)." },
      { name: "Shoulder and elbow musculature", effect: "Guarding and disuse during immobilisation, particularly in cast and sling use (clinical)." }
    ],
    cellular: [
      { phase: "Haematoma and inflammation", timing: "Hours to about 1 week", description: "Bleeding at the fracture and inflammatory cell recruitment (standard fracture biology)." },
      { phase: "Soft callus and early repair", timing: "About 1–4 weeks", description: "Fibrocartilage forms across the fracture; limited blood supply may slow this, particularly at the proximal pole [r3]." },
      { phase: "Hard callus and union", timing: "About 4–12 weeks or longer", description: "Mineralisation bridges the fracture. Union of the scaphoid is generally slower than in many bones, and proximal fractures take longest (clinical range)." },
      { phase: "Remodelling, or failure of union", timing: "Months", description: "In successful healing, the bone remodels. In nonunion, a fibrous or sclerotic gap persists and the proximal fragment may become necrotic [r3,r7]." }
    ],
    systems: [
      { system: "Vascular", effect: "Retrograde intraosseous blood flow explains the vulnerability of the proximal pole to ischaemia [r3]. Contrast-enhanced MRI is considered the best method to assess the vitality of the fragments [r7]." },
      { system: "Musculoskeletal chain", effect: "Nonunion can lead to carpal collapse (humpback deformity, DISI) and altered wrist mechanics [r11]. Immobilisation also affects the thumb, elbow and shoulder." },
      { system: "Nervous system and pain", effect: "Pain-related inhibition and, rarely, complex regional pain syndrome after wrist injury (clinical)." },
      { system: "Psychosocial and functional", effect: "Young active people may lose time from sport and work. Uncertainty about a missed fracture and a long period in a cast can affect adherence (clinical)." }
    ]
  },

  grading: {
    system: "Herbert classification (clinical convention) with a displacement threshold of 2 mm",
    grades: [
      { grade: "Type A: stable acute fractures", description: "A1 tubercle fracture; A2 incomplete fracture through the waist.", prognosis: "Usually treated in a cast (clinical)" },
      { grade: "Type B: unstable acute fractures", description: "B1 distal oblique; B2 complete waist (the most common pattern, 36.4% in one series [r2]); B3 proximal pole; B4 trans-scaphoid perilunate fracture-dislocation.", prognosis: "Displaced or proximal pole fractures usually need surgery to reduce the risk of nonunion [r1]" },
      { grade: "Type C: delayed union", description: "Fracture still not united after the expected period of immobilisation.", prognosis: "Needs imaging and review for fixation (clinical)" },
      { grade: "Type D: established nonunion", description: "Fibrous (D1) or sclerotic (D2) nonunion.", prognosis: "Usually needs fixation with bone grafting; pooled graft failure incidence was 0.08–0.09 in one review [r11]" },
      { grade: "Displaced (more than 2 mm) versus undisplaced or minimally displaced (2 mm or less)", description: "SWIFFT enrolled bicortical waist fractures displaced by 2 mm or less [r5].", prognosis: "Undisplaced or minimally displaced waist fractures are managed initially in a cast [r5]" }
    ]
  },

  timeframes: {
    summary: "Union takes weeks to months. Nondisplaced fractures have high union rates in a cast but need extended periods of immobilisation [r1]. SWIFFT measured outcomes at 52 weeks [r5]. The exact union times below are typical clinical ranges, not findings from a single cited source.",
    healing: [
      { phase: "Haematoma and inflammation", startDay: 0, endDay: 7, description: "Pain and swelling around the snuffbox; immobilise and confirm the diagnosis" },
      { phase: "Soft callus", startDay: 7, endDay: 35, description: "Early repair under cast protection; vascular supply is limited, particularly proximally [r3]" },
      { phase: "Hard callus and union", startDay: 35, endDay: 120, description: "Mineralisation across the fracture; union is confirmed clinically and on imaging (CT is helpful) [r7]" },
      { phase: "Remodelling and functional recovery", startDay: 90, endDay: 365, description: "Range, grip and confidence recover; patient-rated function is followed to 52 weeks in trials [r5]" }
    ],
    milestones: [
      { label: "Suspected fracture immobilised and imaged", day: 1, note: "Treat snuffbox tenderness or pain on thumb axial loading as a fracture until proved otherwise [r1]" },
      { label: "Repeat imaging for suspected fracture with normal radiographs", day: 10, note: "Typical timing (clinical convention). Serial radiographs or advanced imaging (MRI most accurate) confirm or exclude the diagnosis [r4]" },
      { label: "Suspected nonunion confirmed and fixed", day: 90, note: "SWIFFT cast group had immediate fixation if nonunion was confirmed [r5]" },
      { label: "Early active motion after fixation (pilot)", day: 56, note: "Eight men healed on CT at 8 weeks in an early-active-motion pilot after fixation; very limited evidence [r12]" },
      { label: "Primary outcome point in SWIFFT", day: 365, note: "PRWE similar between surgery and cast at 52 weeks [r5]" }
    ],
    returnToSport: "Criteria-based and slower than most wrist injuries, usually 3–6 months or more after a waist fracture treated in a cast (a clinical range). Fixation of an undisplaced fracture can allow an earlier return, but the evidence that surgery improves outcomes is conflicting [r1,r5,r6]. Return to contact sport requires confirmed union, near-full range, grip within about 90% of the other side and protective padding or splinting."
  },

  clinicalPresentation: {
    symptoms: [
      "Pain on the radial side of the wrist after a fall on an outstretched hand or a direct blow",
      "Pain with gripping, pinching, pushing up from a chair and weight-bearing through the hand",
      "Swelling in the snuffbox and radial wrist, sometimes minimal",
      "Many patients continue to use the hand for days or weeks, so presentation can be delayed",
      "Persisting 'sprained wrist' pain that does not settle over 1–2 weeks"
    ],
    signs: [
      "Anatomical snuffbox tenderness (highly sensitive but poorly specific) [r8]",
      "Tenderness over the scaphoid tubercle at the base of the thenar eminence [r8]",
      "Pain with axial compression of the thumb (longitudinal thumb compression) [r8]",
      "Pain with ulnar deviation of the wrist [r8]",
      "Reduced grip strength and wrist range with swelling"
    ]
  },

  assessment: {
    subjective: [
      "Mechanism: fall on an outstretched hand, height, direct blow, collision, or high-energy trauma",
      "Time since injury and whether the hand has been used since; a delay raises concern for nonunion [r7]",
      "Hand dominance, occupation, sport and the demands of return to play",
      "Previous wrist injuries, smoking and conditions that affect bone healing (clinical)",
      "Paraesthesia or increasing pain (neurovascular or compartment concerns)",
      "Pain location: radial wrist versus ulnar wrist or thumb base"
    ],
    observation: ["Swelling, bruising or loss of the snuffbox hollow", "Wrist and thumb posture (protective positioning)", "Skin integrity and signs of other injuries (distal radius, hand)"],
    palpation: ["Anatomical snuffbox", "Scaphoid tubercle (palmar, at the base of the thenar eminence)", "Distal radius, ulnar styloid, and first carpometacarpal joint for differential diagnosis"],
    rangeOfMotion: ["Wrist flexion, extension, radial and ulnar deviation, comparing sides", "Thumb range, especially radial abduction", "Forearm rotation"],
    strength: ["Grip dynamometry compared with the other hand (reduced early, and later as a recovery marker)", "Pinch strength and thumb abduction", "Shoulder and elbow strength after immobilisation"],
    neuro: ["Median, ulnar and radial nerve sensation and motor function", "Capillary refill and radial pulse", "Signs of acute carpal tunnel syndrome after a high-energy injury"],
    functional: ["PRWE or QuickDASH items", "Ability to perform daily tasks, push up from a chair and carry loads", "Sport- or work-specific tasks once cleared"],
    specialTests: [
      { name: "Anatomical snuffbox tenderness", purpose: "Screen for scaphoid fracture", procedure: "Palpate the snuffbox between the tendons of abductor pollicis longus and extensor pollicis longus with the wrist in ulnar deviation.", positive: "Focal tenderness. This is sensitive but not specific, so treat as a fracture until proved otherwise [r1].", sensitivity: "0.87–1.00 (range across 8 studies, 1,164 patients; not pooled because of heterogeneity)", specificity: "0.03–0.98 (range across the same studies)", refs: ["r8"] },
      { name: "Scaphoid tubercle tenderness", purpose: "Detect distal pole and waist injury", procedure: "Palpate the palmar prominence at the base of the thenar eminence, on the radial side of the flexor carpi radialis tendon.", positive: "Focal tenderness reproducing the patient's pain.", sensitivity: "0.82–1.00 (range)", specificity: "0.17–0.57 (range)", refs: ["r8"] },
      { name: "Longitudinal thumb compression (axial loading)", purpose: "Provoke pain from the scaphoid by loading it through the thumb ray", procedure: "Gently compress the thumb along its axis towards the scaphoid.", positive: "Pain in the snuffbox or radial wrist.", sensitivity: "0.48–1.00 (range across 8 studies, 961 patients; not pooled)", specificity: "0.22–0.97 (range)", refs: ["r8"] },
      { name: "Painful ulnar deviation", purpose: "Detect radial wrist pain from loading the scaphoid", procedure: "Actively or passively deviate the wrist toward the ulnar side.", positive: "Radial-sided wrist pain.", sensitivity: "0.67–1.00 (range)", specificity: "0.17–0.60 (range)", refs: ["r8"] }
    ],
    clinicalRules: [
      { name: "Treat as a scaphoid fracture until proved otherwise", description: "Snuffbox tenderness and/or pain with axial loading of the thumb should be managed as a fracture, with the diagnosis confirmed by serial radiographs and/or advanced imaging [r1]." },
      { name: "Combine tests to improve specificity", description: "In a systematic review of 13 studies (25 tests), three studies showed that combining clinical tests increased specificity and the post-test probability of fracture while keeping high sensitivity, which may limit unnecessary immobilisation. Data came from studies with a high or unclear risk of bias [r8]." },
      { name: "Be cautious interpreting a positive test in a low-prevalence setting", description: "True fractures are uncommon among suspected cases, so false positives are nearly as common as true positives, and even MRI had a positive predictive value of only 88% in low-prevalence situations [r9]." }
    ],
    outcomeMeasures: [
      { name: "Patient-Rated Wrist Evaluation (PRWE)", use: "Primary outcome in SWIFFT at 52 weeks; score out of 100, lower is better [r5]" },
      { name: "DASH or QuickDASH", use: "Upper-limb disability tracking; used in the early-motion pilot [r12]" },
      { name: "Grip and pinch dynamometry", use: "Objective strength, compared with the other hand" },
      { name: "Goniometric wrist range and Mayo Wrist Score", use: "Range-of-motion and function measures used in the early-active-motion pilot [r12]" }
    ],
    imaging: [
      { modality: "Plain radiographs (scaphoid series)", indication: "All suspected scaphoid injuries", findings: "A fracture line, displacement or humpback deformity. Radiographs can miss fractures: up to 16% in one summary, and 21.8% of fractures were missed on X-ray and found on advanced imaging in a meta-analysis [r4]; initial diagnosis is possible in 70–80% of cases in another review [r7]." },
      { modality: "MRI", indication: "Suspected fracture with normal radiographs, or to assess vitality", findings: "Meta-analysis: sensitivity 94.2% and specificity 97.7% [r4]. In low-prevalence settings the positive predictive value was 88% and false positives are possible [r9]. Contrast-enhanced MRI is the best method to assess fragment vitality [r7]." },
      { modality: "CT", indication: "Fracture detail, displacement, union assessment and nonunion staging", findings: "Meta-analysis: sensitivity 81.5% and specificity 96.0% [r4]. Multislice CT helps stage nonunion [r7]." },
      { modality: "Ultrasound", indication: "Adjunct where MRI is unavailable (local practice varies)", findings: "Meta-analysis: sensitivity 81.5% and specificity 77.4% [r4]" }
    ]
  },

  differentials: [
    { name: "Distal radius fracture", id: "distal-radius-fracture", distinguishing: "Tenderness at the distal radius rather than the snuffbox; fracture seen on radiographs. It can coexist with a scaphoid fracture." },
    { name: "Scapholunate ligament injury", id: "scapholunate-ligament-injury", distinguishing: "Dorsal wrist pain, positive scaphoid shift test and a widened scapholunate interval on radiographs; can accompany a scaphoid fracture." },
    { name: "Hook of hamate fracture", id: "hook-of-hamate-fracture", distinguishing: "Ulnar-sided palmar tenderness over the hook of the hamate, typical in racquet and club sports." },
    { name: "De Quervain's tenosynovitis", id: "de-quervain-tenosynovitis", distinguishing: "Pain over the radial styloid and first dorsal compartment, positive Finkelstein, no bony snuffbox tenderness." },
    { name: "Thumb ulnar collateral ligament injury (skier's thumb)", id: "skiers-thumb", distinguishing: "Pain and laxity at the thumb MCP joint rather than the snuffbox." },
    { name: "Bennett's fracture", id: "bennett-fracture", distinguishing: "Pain and swelling at the thumb base and a fracture of the first metacarpal base on radiographs." },
    { name: "Intersection syndrome", id: "intersection-syndrome", distinguishing: "Pain and crepitus about 4–6 cm proximal to the wrist on the dorsoradial forearm, not at the snuffbox." },
    { name: "Wrist sprain", distinguishing: "Diagnosis of exclusion once fracture has been excluded with appropriate imaging; persisting pain beyond 1–2 weeks should prompt re-imaging." },
    { name: "Thumb carpometacarpal osteoarthritis", distinguishing: "Gradual onset, pain at the thumb base and a positive grind test; no traumatic mechanism." }
  ],
  redFlags: [
    "Snuffbox or scaphoid tubercle tenderness, or pain on thumb axial loading, with normal radiographs: manage as a scaphoid fracture. Immobilise, and arrange repeat radiographs or advanced imaging (MRI preferred) [r1,r4]. Do not discharge as a sprain.",
    "Wrist 'sprain' that has not settled by 1–2 weeks: re-image to exclude an occult scaphoid fracture before returning to loading (clinical).",
    "Displaced fracture, humpback deformity on lateral view, or a proximal pole fracture: refer to hand or orthopaedic surgery promptly, because these usually need fixation to reduce nonunion risk [r1,r3].",
    "Gross wrist deformity with severe pain, swelling or median nerve symptoms after high-energy trauma: suspect a perilunate fracture-dislocation. Refer to emergency immediately.",
    "Increasing numbness, severe pain out of proportion, pain on passive finger stretch or pallor after injury or cast: suspect acute carpal tunnel syndrome or compartment syndrome. Release any tight cast, elevate, and refer to emergency.",
    "Persisting wrist pain, reduced grip or loading pain months after the injury: suspect nonunion or AVN. Arrange CT, with contrast-enhanced MRI for fragment vitality [r7].",
    "Disproportionate burning pain, swelling and colour or temperature change after immobilisation: suspect complex regional pain syndrome. Refer early."
  ],

  management: {
    principles: "Treat all clinically suspected scaphoid fractures as fractures until proved otherwise, confirm the diagnosis, and match treatment to displacement and fracture location [r1]. Displaced fractures are generally fixed to reduce the risk of nonunion, while nondisplaced fractures have high union rates in a cast but need extended immobilisation [r1]. For bicortical waist fractures displaced by 2 mm or less, SWIFFT (439 adults) found no significant difference in PRWE at 52 weeks between early surgery and casting; potentially serious surgical complications occurred in 14% of the surgery group versus 1% of the cast group, and cast-related complications in 18% of the cast group versus 2% of the surgery group [r5]. An economic evaluation found initial casting with fixation of nonunion was less costly with comparable outcomes [r10]. A meta-analysis of eight randomised trials favoured surgery for function, delayed union and return to work, but its authors judged the evidence insufficient to prove that surgery is better [r6]. Decisions should be shared and consider work, sport and the person's preferences.",
    medical: [
      { name: "Immobilisation and confirmation of a suspected fracture", description: "Immobilise suspected fractures and confirm or exclude with repeat radiographs or advanced imaging. MRI had the highest accuracy in a meta-analysis (sensitivity 94.2%, specificity 97.7%), but positive results in low-prevalence settings include false positives [r1,r4,r9].", evidence: "moderate", recommendation: "recommended", refs: ["r1", "r4", "r9"] },
      { name: "Below-elbow cast for bicortical waist fractures displaced 2 mm or less, with fixation if nonunion is confirmed", description: "In SWIFFT, outcomes at 52 weeks were not significantly different from early surgery (adjusted PRWE difference −2.1, 95% CI −5.8 to 1.6), with fewer serious complications from treatment [r5]. A meta-analysis of eight trials suggested benefits for surgery, but evidence was insufficient to be definitive [r6]. Initial casting was less costly with comparable outcomes [r10].", evidence: "moderate", recommendation: "recommended", refs: ["r5", "r6", "r10"] },
      { name: "Early surgical fixation of an undisplaced or minimally displaced waist fracture", description: "May be considered for selected people who prioritise early return, such as athletes or manual workers [r1]. SWIFFT found no significant difference in PRWE at 52 weeks and a higher rate of potentially serious complications from surgery (14% versus 1%) [r5], while a meta-analysis found better function and shorter time to return to work with surgery but insufficient evidence overall [r6].", evidence: "conflicting", recommendation: "consider", refs: ["r1", "r5", "r6"] },
      { name: "Surgical fixation of displaced or unstable fractures", description: "Nearly all displaced scaphoid fractures should have surgery to reduce the risk of nonunion [r1]. This is a narrative-review recommendation; SWIFFT did not include displaced fractures beyond 2 mm [r5].", evidence: "limited", recommendation: "recommended", refs: ["r1", "r5"] },
      { name: "Fixation with bone grafting for nonunion", description: "Vascularised and non-vascularised bone grafts for scaphoid nonunion had pooled failure incidences of 0.09 (95% CI 0.05–0.13) and 0.08 (95% CI 0.06–0.11). Reduced proximal fragment contrast uptake on MRI predicted graft failure, and humpback deformity or DISI predicted failure of vascularised grafts [r11].", evidence: "limited", recommendation: "consider", refs: ["r11"] },
      { name: "Analgesia and elevation", description: "Simple analgesia, elevation and early finger movement in the early phase (clinical convention).", evidence: "expert-opinion", recommendation: "recommended", refs: [] }
    ],
    physio: [
      { name: "Recognition, protection and referral", description: "Perform the snuffbox, tubercle, thumb compression and ulnar deviation tests, treat a positive finding as a fracture, immobilise, and arrange imaging. Combining tests improves specificity with high sensitivity [r1,r8].", evidence: "limited", recommendation: "recommended", refs: ["r1", "r8"] },
      { name: "Mobilisation of uninjured joints and oedema control during immobilisation", description: "Finger, elbow and shoulder movement, elevation and gentle pumping exercises while in the cast (clinical convention).", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Graded range-of-motion, grip and loading program after union", description: "Start once union is confirmed by the treating team, then progress range, strength and loading by clinical criteria (see rehab stages). No trial in the sources retrieved compared rehabilitation protocols for scaphoid fractures.", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Early active motion after fixation (surgeon-directed)", description: "In a pilot of eight men after open reduction and fixation, an early active motion protocol was followed by CT healing at 8 weeks, near-symmetrical range at 12 weeks and no complications. The sample is tiny and uncontrolled [r12].", evidence: "very-limited", recommendation: "consider", refs: ["r12"] },
      { name: "Protected return to sport", description: "Use a padded cast, splint or taping as allowed, and progress contact exposure once union and strength criteria are met (clinical convention).", evidence: "expert-opinion", recommendation: "recommended", refs: [] },
      { name: "Relying on normal initial radiographs to exclude fracture", description: "Radiographs can miss scaphoid fractures: 21.8% of fractures were missed on X-ray and diagnosed on advanced imaging in one meta-analysis [r4]. A positive snuffbox examination with normal films should be managed as a fracture and re-imaged [r1,r4].", evidence: "moderate", recommendation: "not-recommended", refs: ["r1", "r4"] },
      { name: "Loading or sport before union is confirmed", description: "Returning to loading or contact exposure in a fracture that has not united risks displacement and nonunion; undiagnosed or inadequately immobilised fractures increase nonunion risk [r7].", evidence: "limited", recommendation: "not-recommended", refs: ["r7"] }
    ],
    education: [
      "Pain in the 'snuffbox' after a fall needs imaging, even if the first X-ray looks normal. Some scaphoid fractures only show up on a later scan.",
      "The scaphoid has a limited blood supply, so it heals slowly and sometimes not at all. Following the immobilisation and review plan lowers that risk.",
      "A cast and surgery gave similar function at one year for undisplaced waist fractures in the largest trial, with different risks: surgery carries operative complications and a cast carries cast-related problems and a small chance of nonunion needing surgery [r5].",
      "Keep your fingers, elbow and shoulder moving while in the cast, and tell us about numbness, severe pain or colour change.",
      "Return to sport depends on proof of union and recovery of strength, not on a set date."
    ]
  },

  rehab: {
    overview: "Rehabilitation follows fracture protection and union. The programme keeps uninjured joints moving during immobilisation, restores range of motion once the treating team confirms union or stability, rebuilds grip and wrist strength, and then progresses to sport-specific and contact loading. The evidence for specific rehabilitation protocols after scaphoid fracture is very limited; one uncontrolled pilot supports early active motion after fixation [r12], so dosages below are common clinical conventions and are progressed by criteria. Always follow the surgeon's or treating doctor's restrictions.",
    stages: [
      {
        name: "Protect & maintain adjacent function",
        timeframe: "Weeks 0–6+ (in cast or splint; length set by the treating team)",
        goals: ["Protect the fracture", "Maintain finger, elbow and shoulder function", "Control swelling", "Detect complications early"],
        precautions: ["Do not remove the cast or splint unless instructed", "No weight-bearing or forceful gripping through the injured wrist", "Report numbness, severe pain or colour change immediately"],
        exercises: [
          { name: "Finger flexion and extension (free fingers)", dosage: "10 repetitions each, every waking hour", cues: "Full fist, then open fully" },
          { name: "Elevation and finger pumping", dosage: "20 finger pumps with the hand above the heart, 3–4 times daily", cues: "Elbow supported, hand above the elbow" },
          { name: "Shoulder flexion range", dosage: "2 × 10, 2–3 times daily", cues: "Lift overhead without gripping the cast", figure: { pose: "ex-shoulder-flexion", view: "lateral" } },
          { name: "Elbow flexion and extension", dosage: "2 × 15, 3 times daily", cues: "Full range; avoid forearm rotation if restricted" },
          { name: "Contralateral grip and arm strengthening", dosage: "3 × 10, daily", cues: "Maintain general fitness while protecting the wrist", figure: { pose: "ex-grip", view: "lateral" } }
        ],
        progressionCriteria: ["Fingers, elbow and shoulder fully mobile", "Swelling controlled", "No signs of neurovascular compromise or CRPS", "Treating team confirms union or clears cast removal"]
      },
      {
        name: "Restore range of motion",
        timeframe: "After union is confirmed (typically about weeks 8–14; criteria override time)",
        goals: ["Regain wrist flexion, extension and deviation", "Restore forearm rotation and thumb range", "Settle swelling and stiffness", "Return to light daily tasks"],
        precautions: ["No forceful loading or weight-bearing until cleared", "Avoid heavy passive stretching into pain", "Report increasing pain or a click with loading"],
        exercises: [
          { name: "Active wrist flexion and extension", dosage: "3 × 15, 3–4 times daily", cues: "Forearm supported; move to comfortable end range", figure: { pose: "ex-wrist-extension", view: "lateral", props: ["chair"] } },
          { name: "Radial and ulnar deviation", dosage: "2 × 15, 3 times daily", cues: "Move only the wrist; stay within pain-free range" },
          { name: "Active forearm pronation and supination", dosage: "3 × 15, 3 times daily", cues: "Elbow tucked in; slow and controlled" },
          { name: "Thumb range: abduction, extension and opposition", dosage: "3 × 10, 3 times daily", cues: "Touch the thumb to each fingertip and open fully" },
          { name: "Wrist flexor and extensor stretches", dosage: "3 × 30 s, twice daily", cues: "Gentle, no overpressure", figure: { pose: "ex-wrist-flexion", view: "lateral", props: ["chair"] } }
        ],
        progressionCriteria: ["At least 75% of the other wrist range in flexion and extension", "Pain at 3/10 or less with daily use", "No loading pain in the snuffbox", "Treating team agrees to progress to loading"]
      },
      {
        name: "Strength & graded loading",
        timeframe: "About 3–6 months after injury (criteria-based)",
        goals: ["Restore grip, pinch and wrist strength", "Tolerate weight-bearing through the hand", "Resume normal work tasks", "Build forearm endurance"],
        precautions: ["Add load only if pain and swelling are settled 24 hours later", "Weight-bearing exercises only after union has been confirmed", "Persistent snuffbox pain with loading needs review and re-imaging"],
        exercises: [
          { name: "Wrist extension with dumbbell", dosage: "3 × 10–15, light load, 3 times weekly", cues: "Forearm supported; slow lowering", figure: { pose: "ex-wrist-extension", view: "lateral", props: ["dumbbell", "chair"] } },
          { name: "Wrist flexion with dumbbell", dosage: "3 × 10–15, light load, 3 times weekly", cues: "Control through full range", figure: { pose: "ex-wrist-flexion", view: "lateral", props: ["dumbbell", "chair"] } },
          { name: "Grip strengthening (putty, gripper or towel wring)", dosage: "3 × 8–10 with 5 s holds, 3 times weekly", cues: "Wrist neutral; squeeze firmly", figure: { pose: "ex-grip", view: "lateral" } },
          { name: "Wall or incline push-up", dosage: "3 × 8–12, progressing towards the floor", cues: "Even weight through both hands; wrists under shoulders", figure: { pose: "ex-press-up", view: "lateral", props: ["bench"] } },
          { name: "Farmer carry", dosage: "3 × 20–30 m, building load", cues: "Neutral wrists, tall posture", figure: { pose: "ex-farmer-carry", view: "lateral", props: ["dumbbell"] } }
        ],
        progressionCriteria: ["Grip strength at least 80% of the other side", "Tolerates body-weight loading through the wrist with minimal pain", "Wrist range within about 10% of the other side", "Union confirmed on imaging by the treating team"]
      },
      {
        name: "Return to work, sport & contact",
        timeframe: "About 4–6+ months after injury (criteria-based)",
        goals: ["Return to full work and sport", "Restore power, speed and impact tolerance", "Tolerate contact and falls", "Prevent re-injury"],
        precautions: ["Use padding or a splint for contact sports if the team advises", "Increase impact exposure gradually", "Re-image if pain recurs"],
        exercises: [
          { name: "Task-specific loading (tools, lifting, keyboard)", dosage: "Graded exposure, adding 10–20% duration weekly", cues: "Keep the wrist near neutral; take breaks", figure: { pose: "grip-tool", view: "lateral", props: ["hammer"] } },
          { name: "Ball catching and hand-eye drills", dosage: "3 × 10 catches, progressing ball speed and weight", cues: "Soft hands; absorb the ball with the whole arm", figure: { pose: "reach-catch", view: "lateral", props: ["ball-basketball"] } },
          { name: "Heavy grip and wrist strength maintenance", dosage: "2 times weekly, 3 × 6–10", cues: "Symptom-guided progression" },
          { name: "Plyometric push-ups and loaded hand-weight-bearing", dosage: "3 × 5–8 as tolerated, 2 times weekly", cues: "Quiet landing; stop if pain develops", figure: { pose: "ex-press-up", view: "lateral", props: ["mat"] } },
          { name: "Safe-fall practice and contact drills", dosage: "Within sport training, as cleared", cues: "Roll and absorb with the whole body rather than an outstretched hand" }
        ],
        progressionCriteria: ["Grip strength at least 90% of the other side", "Pain-free through full range and loading", "Union confirmed and clearance from the treating team", "Completes sport-specific and contact drills without symptoms"]
      }
    ]
  },

  returnToSport: {
    criteria: [
      "Union confirmed clinically and on imaging by the treating team (CT is helpful) [r7]",
      "Pain-free snuffbox, tubercle and axial thumb loading",
      "Wrist range within about 10% of the other side",
      "Grip strength at least 90% of the other side (a common clinical convention)",
      "Pain-free sport-specific and contact loading",
      "Protective padding or splinting plan agreed for contact sport",
      "Patient confidence and agreement with the surgeon, coach and physiotherapist"
    ],
    tests: ["Grip and pinch dynamometry compared with the other hand", "Goniometric wrist and forearm range", "PRWE or QuickDASH", "CT for union where there is doubt [r7]", "Sport-specific loading and contact tests"]
  },
  prognosis: "Nondisplaced fractures have high union rates in a cast, but the process requires a long period of immobilisation [r1]. In SWIFFT, PRWE at 52 weeks was 11.9 (surgery) versus 14.0 (cast), a non-significant difference [r5]. Long-term follow-up of the trial is ongoing [r5]. Inadequate immobilisation or an undiagnosed fracture increases the risk of nonunion [r7]. Nonunion and AVN can lead to carpal collapse and arthritis (clinical). For established nonunion, grafting had pooled failure incidences of 0.08–0.09 in a systematic review, and reduced contrast uptake in the proximal fragment on MRI predicted failure [r11]. Overall population rates of nonunion and AVN were not available from the retrieved sources.",
  prevention: [
    "Image suspected fractures and treat them as fractures until excluded, since delay and missed fractures increase nonunion risk [r1,r7].",
    "Use wrist guards or padding in higher-risk sports (clinical).",
    "Teach safe falling techniques that avoid landing on an outstretched hand (clinical).",
    "Do not return to loading or contact before union is confirmed [r7]."
  ],
  clinicalPearls: [
    "Snuffbox tenderness is sensitive but poorly specific: use it to screen, not to confirm. A negative X-ray does not exclude a fracture [r4,r8].",
    "Combine several tests (snuffbox, tubercle, axial thumb loading, ulnar deviation) rather than relying on one, to raise specificity and limit overtreatment [r8].",
    "The blood supply enters distally, so a proximal pole fracture is the highest risk for AVN and nonunion [r3].",
    "A 'wrist sprain' that is still painful at 1–2 weeks needs re-imaging before loading.",
    "For undisplaced waist fractures, cast and surgery gave similar function at one year, so the choice rests on risk, preference and time off work [r5,r6].",
    "Confirm union before weight-bearing and contact sport: pain with loading months later suggests nonunion [r7]."
  ],
  related: ["distal-radius-fracture", "scapholunate-ligament-injury", "hook-of-hamate-fracture", "de-quervain-tenosynovitis", "tfcc-injury", "bennett-fracture"],

  references: [
    { id: "r1", citation: "Fowler JR, Hughes TB. Scaphoid fractures. Clin Sports Med. 2015;34(1):37-50.", pmid: "25455395", doi: "10.1016/j.csm.2014.09.011", type: "narrative-review", year: 2015 },
    { id: "r2", citation: "Duckworth AD, Jenkins PJ, Aitken SA, et al. Scaphoid fracture epidemiology. J Trauma Acute Care Surg. 2012;72(2):E41-5.", pmid: "22439232", doi: "10.1097/ta.0b013e31822458e8", type: "cohort", year: 2012 },
    { id: "r3", citation: "Gelberman RH, Menon J. The vascularity of the scaphoid bone. J Hand Surg Am. 1980;5(5):508-13.", pmid: "7430591", doi: "10.1016/s0363-5023(80)80087-6", type: "basic-science", year: 1980 },
    { id: "r4", citation: "Bäcker HC, Wu CH, Strauch RJ. Systematic review of diagnosis of clinically suspected scaphoid fractures. J Wrist Surg. 2020;9(1):81-9.", pmid: "32025360", doi: "10.1055/s-0039-1693147", type: "meta-analysis", year: 2020 },
    { id: "r5", citation: "Dias JJ, Brealey SD, Fairhurst C, et al. Surgery versus cast immobilisation for adults with a bicortical fracture of the scaphoid waist (SWIFFT): a pragmatic, multicentre, open-label, randomised superiority trial. Lancet. 2020;396(10248):390-401.", pmid: "32771106", doi: "10.1016/S0140-6736(20)30931-4", type: "rct", year: 2020 },
    { id: "r6", citation: "Al-Ajmi TA, Al-Faryan KH, Al-Kanaan NF, et al. A systematic review and meta-analysis of randomized controlled trials comparing surgical versus conservative treatments for acute undisplaced or minimally-displaced scaphoid fractures. Clin Orthop Surg. 2018;10(1):64-73.", pmid: "29564049", doi: "10.4055/cios.2018.10.1.64", type: "meta-analysis", year: 2018 },
    { id: "r7", citation: "Kahl T, Razny FK, Benter JP, et al. [Diagnosis of the scaphoid bone: fractures, nonunion, circulation, perfusion]. Orthopade. 2016;45(11):938-44.", pmid: "27637547", doi: "10.1007/s00132-016-3333-y", type: "narrative-review", year: 2016 },
    { id: "r8", citation: "Mallee WH, Henny EP, van Dijk CN, et al. Clinical diagnostic evaluation for scaphoid fractures: a systematic review and meta-analysis. J Hand Surg Am. 2014;39(9):1683-91.e2.", pmid: "25091335", doi: "10.1016/j.jhsa.2014.06.004", type: "meta-analysis", year: 2014 },
    { id: "r9", citation: "Duckworth AD, Ring D, McQueen MM. Assessment of the suspected fracture of the scaphoid. J Bone Joint Surg Br. 2011;93(6):713-9.", pmid: "21586765", doi: "10.1302/0301-620X.93B6.26506", type: "narrative-review", year: 2011 },
    { id: "r10", citation: "Hinde S, Richardson G, Fairhurst C, et al. Cost-effectiveness of surgery versus cast immobilization for adults with a bicortical fracture of the scaphoid waist: an economic evaluation of the SWIFFT trial. Bone Joint J. 2021;103-B(7):1277-83.", pmid: "34192942", doi: "10.1302/0301-620X.103B7.BJJ-2020-2322.R2", type: "rct", year: 2021 },
    { id: "r11", citation: "Rancy SK, Wolfe SW, Jerome JTJ. Predictors of failure for vascularized and nonvascularized bone grafting of scaphoid nonunions: a systematic review. J Hand Microsurg. 2022;14(4):322-35.", pmid: "36398155", doi: "10.1055/s-0041-1735349", type: "systematic-review", year: 2022 },
    { id: "r12", citation: "Dunn JC, Kusnezov N, Fares A, et al. Early active motion protocol following open reduction internal fixation of the scaphoid: a pilot study. Hand Surg Rehabil. 2017;36(1):30-5.", pmid: "28137439", doi: "10.1016/j.hansur.2016.11.004", type: "cohort", year: 2017 }
  ],

  animation: {
    title: "How a scaphoid fracture happens",
    phases: [
      {
        type: "moi", label: "Mechanism", duration: 6, view: "lateral", environment: "pitch",
        actors: [{ id: "player", kit: "athlete" }],
        keyframes: [
          { t: 0, pose: "run-midstance", root: { x: -40 } },
          { t: 1.3, pose: "trip", root: { x: -25 } },
          { t: 2.5, pose: "foosh", joints: { wristR: 70 }, root: { x: -12 }, ease: "in" },
          { t: 3.3, pose: "foosh", joints: { wristR: 80 }, root: { x: -10 } },
          { t: 5.2, pose: "foosh", joints: { wristR: 80 }, root: { x: -10 } }
        ],
        forces: [
          { t: [2.6, 4.4], at: "wristR", dir: "up", label: "Ground force through the extended wrist", size: "l" }
        ],
        highlights: [{ t: [2.8, 6], at: "wristR" }],
        impacts: [{ t: 3.0, at: "wristR" }],
        slowmo: [{ t: [2.3, 3.5], rate: 0.3 }],
        captions: [
          { t: 0, text: "A footballer sprints for the ball and is clipped from behind." },
          { t: 1.3, text: "He falls forward and reaches out with the right hand." },
          { t: 2.5, text: "The palm lands with the wrist forced into extension and radial deviation." },
          { t: 3.1, text: "Force passes through the thumb side of the wrist and bends the scaphoid." },
          { t: 4.5, text: "The wrist is sore, but he may keep playing, and the first X-ray can look normal." }
        ]
      },
      {
        type: "zoom", label: "Zoom in", duration: 1.5, to: "wristR",
        captions: [{ t: 0, text: "Zooming into the right wrist, viewed from the palm side." }]
      },
      {
        type: "closeup", label: "Inside the wrist", duration: 10, scene: "wrist-hand",
        actions: [
          { t: 0, do: "highlight", target: "scaphoid" },
          { t: 0.1, do: "fade", target: "flexorTendons", to: 0.35 },
          { t: 0.1, do: "fade", target: "thenarMuscles", to: 0.3 },
          { t: 0.4, do: "label", target: "scaphoid", text: "Scaphoid: links the two carpal rows" },
          { t: 1.2, do: "arrow", at: "scaphoidDistalPole", dir: "proximal", label: "Load via the thumb side (wrist extended, radially deviated)", size: "l" },
          { t: 2.6, do: "impact", at: "scaphoidWaist" },
          { t: 2.8, do: "fracture", target: "scaphoid", pattern: "transverse", at: "scaphoidWaist", displaced: false },
          { t: 3.6, do: "label", target: "scaphoid", text: "Waist fracture: often undisplaced and easily missed" },
          { t: 4.6, do: "pulse", target: "radialArtery" },
          { t: 4.9, do: "label", target: "radialArtery", text: "Blood enters mainly at the distal end" },
          { t: 5.8, do: "bruise", target: "scaphoid", at: "scaphoidProximalPole" },
          { t: 6.2, do: "label", target: "scaphoid", text: "Proximal pole at risk: AVN and nonunion" },
          { t: 7.2, do: "pain", at: "anatomicalSnuffbox" },
          { t: 7.6, do: "label", target: "scaphoid", text: "Snuffbox tenderness: image and immobilise" },
          { t: 8.2, do: "camera", at: "scaphoidWaist", zoom: 1.6, dur: 1 },
          { t: 9.4, do: "camera", zoom: 1, dur: 0.6 }
        ],
        captions: [
          { t: 0, text: "The scaphoid bridges the proximal and distal carpal rows on the thumb side." },
          { t: 1.2, text: "A fall on an extended, radially deviated wrist drives load through the scaphoid." },
          { t: 2.8, text: "The bone fails at its narrow waist; the fracture is often undisplaced." },
          { t: 4.6, text: "Blood enters mainly distally and runs back to the proximal pole." },
          { t: 5.8, text: "A break can cut off the proximal fragment, risking avascular necrosis and nonunion." },
          { t: 7.2, text: "Snuffbox tenderness is the key sign: treat as a fracture until imaging says otherwise." }
        ]
      },
      {
        type: "micro", label: "Bone healing", duration: 9, tissue: "bone-fracture",
        stages: [
          { t: 0, stage: "healthy" }, { t: 1.2, stage: "fracture" }, { t: 2.4, stage: "haematoma" },
          { t: 3.6, stage: "inflammation" }, { t: 5.0, stage: "soft-callus" }, { t: 6.4, stage: "hard-callus" }, { t: 7.8, stage: "remodelling" }
        ],
        timeLabels: [{ t: 2.4, text: "Hours" }, { t: 3.6, text: "Days 0–7" }, { t: 5.0, text: "Weeks 1–5" }, { t: 6.4, text: "Weeks 5–17" }, { t: 7.8, text: "Months 3–12" }],
        captions: [
          { t: 0, text: "Healthy scaphoid bone with a limited blood supply, especially proximally." },
          { t: 1.2, text: "The bone fails under bending and compression." },
          { t: 2.4, text: "A haematoma forms around the broken ends." },
          { t: 3.6, text: "Inflammatory cells clear debris and release growth factors." },
          { t: 5.0, text: "A soft callus begins to bridge the gap, slowed by the limited blood supply." },
          { t: 6.4, text: "The callus mineralises. Union is slow and needs confirmation on imaging." },
          { t: 7.8, text: "If blood supply fails, union may not occur and the proximal fragment can become necrotic." }
        ]
      }
    ]
  },

  meta: { lastReviewed: "2026-10", team: "UL6" }
};
