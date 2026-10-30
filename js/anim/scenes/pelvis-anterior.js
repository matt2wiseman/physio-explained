/**
 * Scene: pelvis-anterior — bony pelvis, sacrum/coccyx, hip joints and lower anterior abdominal wall, ANTERIOR view
 * (standing AP, as on an AP pelvis radiograph / atlas plate).
 *   - The patient faces the viewer: patient's RIGHT = screen LEFT. Superior = up. Anterior = toward the viewer ("out").
 *   - Right-sided catalogue structures (pubic rami, adductor longus, inguinal ligament & canal, conjoint tendon,
 *     ilioinguinal / genitofemoral / lateral femoral cutaneous nerves, iliac apophysis, iliolumbar & anterior SIJ
 *     ligaments) are drawn on the patient's right. `directions.medial/lateral` are therefore given for that side
 *     (medial = screen right, lateral = screen left).
 *   - "Ilium" = the hip bone minus the pubis (wing, acetabular region and ischium down to the tuberosity); the pubic
 *     rami (superior ramus, body, inferior ramus) are separate, so the obturator foramen is the gap between them.
 *   - Abdominal wall layers are superficial, so they are ghosted over the pelvis: external & internal oblique on the
 *     patient's right (step-cut: EO fleshy part upper-lateral, IO below it in the inguinal region), transversus
 *     abdominis on the patient's left. The flat muscles are cut away over the iliac fossae (window onto the pelvis);
 *     the internal oblique is shown by its lower fibres arching above the inguinal canal into the conjoint tendon.
 *     Rectus abdominis = the right rectus (left one decorative).
 *   - Muscle axes origin → insertion (rectus: pubic crest → costal margin; adductor longus: pubis → linea aspera).
 * Scale ≈ 1.45 px/mm; origin (0,0) = top of the pubic symphysis at screen (400, 300).
 */

/* ---------- geometry helpers (module-local; the default export is plain data) ---------- */
const S = 1.45, OX = 400, OY = 300;
const r = (n) => Math.round(n * 10) / 10;
const pt = (p) => `${r(p[0])},${r(p[1])}`;
function spline(pts, closed = true) {
  const n = pts.length, at = (i) => (closed ? pts[(i + n) % n] : pts[Math.min(n - 1, Math.max(0, i))]);
  let d = `M${pt(pts[0])}`;
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2), k1 = (p1[2] ?? 1) / 6, k2 = (p2[2] ?? 1) / 6;
    d += ` C${pt([p1[0] + (p2[0] - p0[0]) * k1, p1[1] + (p2[1] - p0[1]) * k1])} ${pt([p2[0] - (p3[0] - p1[0]) * k2, p2[1] - (p3[1] - p1[1]) * k2])} ${pt(p2)}`;
  }
  return closed ? d + " Z" : d;
}
/** mm (x: + = patient's left / screen right, y: + = inferior) → px. Optional 3rd value = tangent scale. */
const P = (x, y, k) => (k === undefined ? [OX + x * S, OY + y * S] : [OX + x * S, OY + y * S, k]);
const pts = (list, mirror = false) => list.map(([x, y, k]) => P(mirror ? -x : x, y, k));
const shape = (list, mirror = false) => spline(pts(mirror ? [...list].reverse() : list, mirror));
const R = (p) => [r(p[0]), r(p[1])];
const ellipse = (cx, cy, rx, ry, rot = 0, n = 14) => { const a = (rot * Math.PI) / 180, out = []; for (let i = 0; i < n; i++) { const t = (i / n) * Math.PI * 2, x = rx * Math.cos(t), y = ry * Math.sin(t); out.push([cx + x * Math.cos(a) - y * Math.sin(a), cy + x * Math.sin(a) + y * Math.cos(a)]); } return out; };

/* ---------- bones (patient's right side in mm; left = mirror) ---------- */
const ILIUM = [
  [-46, -101], [-62, -126], [-86, -141], [-110, -143], [-128, -133], [-136.5, -118], [-134, -100], [-127, -85], [-120.5, -73, 0.5],   // crest → ASIS
  [-114.5, -59], [-110, -45, 0.6], [-106, -33], [-112, -19], [-117.5, 4], [-113.5, 28], [-104, 48], [-96, 66], [-89, 80],            // AIIS, lateral acetabulum, ischium
  [-76, 89, 0.6], [-62, 85], [-50, 75], [-43, 67, 0.4],                                                                            // tuberosity → ischial ramus
  [-48, 56], [-60, 49], [-67.5, 32], [-67, 14], [-62, 3.5, 0.4],                                                                  // obturator foramen (lateral rim)
  [-66, -21, 0.4], [-62, -40], [-56, -58], [-50, -77], [-47.5, -90]                                                               // iliopubic eminence → arcuate line → SIJ
];
const PUBIS = [
  [-66, -21, 0.4], [-48, -12.5], [-33, -6], [-23, -4.5, 0.6], [-11, -1.8], [-2.6, -0.4, 0.4], [-2.6, 20], [-2.8, 39, 0.4],          // pecten, tubercle, crest, symphyseal face
  [-9, 46], [-25, 58], [-43, 67, 0.4], [-41, 53], [-35, 41], [-33, 26], [-35, 12], [-45, 4], [-58, 2.5], [-62, 3.5, 0.4]             // inferior ramus, obturator foramen (medial/upper rim)
];
const SACRUM_R = [[0, -94.5], [-15, -96.5], [-31, -103], [-45, -104, 0.6], [-54, -98, 0.6], [-49.5, -88], [-44, -70], [-38, -51], [-33, -36], [-25, -24], [-12, -17], [-6.5, -15.5]];
const sacrumPts = [...SACRUM_R, ...SACRUM_R.slice(1).reverse().map(([x, y, k]) => [-x, y, k])];
const foramina = [[14.5, -79], [13.5, -62], [12.5, -46.5], [11, -32.5]].flatMap(([x, y], i) => [ellipse(-x, y, 4.6 - i * 0.5, 3.6 - i * 0.3, 18), ellipse(x, y, 4.6 - i * 0.5, 3.6 - i * 0.3, -18)]);
const sacrumD = spline(pts(sacrumPts)) + " " + foramina.map((e) => spline(pts(e))).join(" ");
const COCCYX = [[-6.5, -15], [6.5, -15], [5.5, -10], [4.8, -7.5], [3.6, -4.6], [2.2, -2.4, 0.6], [-2.2, -2.4, 0.6], [-3.6, -4.6], [-4.8, -7.5], [-5.5, -10]];
const L5 = [[-24, -133], [24, -133, 0.5], [26, -125], [44, -122, 0.6], [46, -116, 0.6], [27, -114], [25, -107, 0.5], [-25, -107, 0.5], [-27, -114], [-46, -116, 0.6], [-44, -122, 0.6], [-26, -125]];
const FEMUR = [[-80, -15], [-96, -17.5], [-110, -10], [-118, 2], [-131, 6], [-140, 10, 0.6], [-148, 26], [-143, 58], [-134, 112, 0], [-110, 112, 0], [-113, 64], [-108, 54, 0.5], [-101, 33], [-88, 25], [-75, 18], [-68.5, 4], [-70, -8]];

/* ---------- soft tissue ---------- */
const symphysis = [[-2.8, 0.6, 0.5], [2.8, 0.6, 0.5], [2.8, 20], [2.8, 38.6, 0.5], [-2.8, 38.6, 0.5], [-2.8, 20]];
const sij = (m) => shape([[-47, -100], [-51, -92], [-46.5, -72], [-41, -52], [-35.6, -37, 0.5], [-32.6, -39], [-37.6, -54], [-43, -72], [-47.6, -90]], m);
const apophysis = [[-60, -129], [-86, -145.5], [-111, -147.5], [-130, -137], [-139.6, -120], [-137.8, -102, 0.4], [-134.2, -104], [-132, -118], [-125.5, -130], [-109, -139.5], [-87, -137.5], [-63, -124]];
const canal = [[-72, -52, 0.6], [-64, -48], [-40, -22], [-26, -14, 0.6], [-22, -9, 0.6], [-30, -8], [-46, -17], [-70, -40]];
const rectusR = [[-3, -1.5, 0.4], [-25, -4, 0.4], [-34, -40], [-46, -100], [-56, -160], [-62, -212, 0], [-3, -212, 0]];
const eoR = [[-170, -212, 0], [-82, -212, 0], [-86, -186], [-100, -166], [-118, -151], [-136, -141], [-152, -132], [-170, -128, 0]];
const ioR = [[-125, -84, 0.5], [-112, -73], [-92, -60], [-72, -51], [-60, -51, 0.5], [-55, -64], [-62, -79], [-80, -87], [-100, -94], [-118, -99, 0.5]];
const taL = [[170, -205, 0], [64, -205, 0], [60, -175], [62, -150], [84, -150], [112, -148], [140, -140], [170, -134, 0]];
const adductor = [[-6, 3, 0.5], [-21, 6, 0.6], [-30, 20], [-48, 46], [-70, 78], [-91, 112, 0], [-62, 112, 0], [-44, 82], [-28, 54], [-14, 30], [-6, 14]];
const pelvicFloor = [[-58, 2], [-52, 24], [-36, 42], [-16, 52], [0, 54], [16, 52], [36, 42], [52, 24], [58, 2], [46, 4], [40, 22], [28, 34], [12, 40], [0, 41], [-12, 40], [-28, 34], [-40, 22], [-46, 4]];
const skin = [[-178, -215, 0], [-172, -150], [-176, -95], [-184, -30], [-178, 40], [-165, 112, 0], [165, 112, 0], [178, 40], [184, -30], [176, -95], [172, -150], [178, -215, 0]];

export default {
  id: "pelvis-anterior",
  viewBox: [0, 0, 800, 450],
  directions: { superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1], medial: [1, 0], lateral: [-1, 0], anterior: "out", posterior: "in", up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] },
  backdrop: [{ d: spline(pts(skin)), fill: "skin", opacity: 0.3 }],
  structures: {
    pelvicFloor: { type: "muscle", d: spline(pts(pelvicFloor)), axis: [R(P(-50, 10)), R(P(0, 48))], fibreAngle: 10, z: 0.8, label: R(P(30, 40)) },
    vertebraL5Context: { type: "bone", d: spline(pts(L5)), z: 1.0 },
    discL5S1Context: { type: "disc", d: spline(pts([[-24, -106.5], [24, -106.5, 0.5], [26, -101], [16, -95.6], [-16, -95.6], [-26, -101, 0.5]])), nucleus: { rx: 13, ry: 4 }, z: 1.05 },
    coccyx: { type: "bone", d: spline(pts(COCCYX)), z: 1.1, label: R(P(0, -9)) },
    sacrum: { type: "bone", d: sacrumD, fillRule: "evenodd", z: 1.2, label: R(P(0, -55)) },
    iliumRight: { type: "bone", d: spline(pts(ILIUM)), z: 1.4, label: R(P(-92, -110)) },
    iliumLeft: { type: "bone", d: shape(ILIUM, true), z: 1.4, label: R(P(92, -110)) },
    pubicRamusRight: { type: "bone", d: spline(pts(PUBIS)), z: 1.5, label: R(P(-42, -6)) },
    pubicRamusLeft: { type: "bone", d: shape(PUBIS, true), z: 1.5, label: R(P(42, -6)) },
    femurRightContext: { type: "bone", d: spline(pts(FEMUR)), z: 1.6 },
    femurLeftContext: { type: "bone", d: shape(FEMUR, true), z: 1.6 },
    pubicSymphysis: { type: "cartilage", d: spline(pts(symphysis)), axis: [R(P(0, 1)), R(P(0, 38))], z: 1.7, label: R(P(0, 20)) },
    iliacApophysis: { type: "physis", d: spline(pts(apophysis)), epiphysis: "iliumRight", z: 1.7, label: R(P(-110, -143)) },
    sijRight: { type: "capsule", d: sij(false), z: 1.8, label: R(P(-43, -70)) },
    sijLeft: { type: "capsule", d: sij(true), z: 1.8, label: R(P(43, -70)) },
    anteriorSIJLigaments: { type: "ligament", from: R(P(-34, -76)), to: R(P(-57, -71)), width: 30, z: 1.9 },
    iliolumbarLigament: { type: "ligament", from: R(P(-44, -119)), to: R(P(-63, -124)), bend: -2, width: 8, z: 1.9 },

    lateralFemoralCutaneousNerve: { type: "nerve", points: pts([[-48, -128], [-66, -116], [-86, -98], [-102, -80], [-109.5, -66], [-114, -48], [-121, -20], [-128, 20], [-134, 60]]).map(R), width: 4.5, z: 2.4 },
    genitofemoralNerve: { type: "nerve", points: pts([[-28, -142], [-36, -118], [-46, -92], [-57, -68], [-66, -52], [-72, -36], [-76, -16], [-80, 10]]).map(R), width: 4.5, z: 2.4 },
    adductorLongus: { type: "muscle", d: spline(pts(adductor)), axis: [R(P(-13, 7)), R(P(-76, 110))], fibreAngle: 4, z: 2.5, label: R(P(-46, 62)) },

    transversusAbdominis: { type: "muscle", d: spline(pts(taL)), axis: [R(P(165, -120)), R(P(62, -120))], fibreAngle: 0, z: 3, ghost: true, label: R(P(110, -175)) },
    internalOblique: { type: "muscle", d: spline(pts(ioR)), axis: [R(P(-120, -88)), R(P(-58, -58))], fibreAngle: 6, z: 3, ghost: true, label: R(P(-92, -76)) },
    externalOblique: { type: "muscle", d: spline(pts(eoR)), axis: [R(P(-150, -200)), R(P(-96, -150))], fibreAngle: 0, z: 3.1, ghost: true, label: R(P(-125, -180)) },
    rectusAbdominisLeftContext: { type: "muscle", d: shape(rectusR, true), axis: [R(P(14, -3)), R(P(32, -210))], fibreAngle: 0, z: 3.2, ghost: true },
    rectusAbdominis: { type: "muscle", d: spline(pts(rectusR)), axis: [R(P(-14, -3)), R(P(-32, -210))], fibreAngle: 0, z: 3.2, ghost: true, label: R(P(-28, -150)) },

    inguinalCanal: { type: "space", d: spline(pts(canal)), visible: true, z: 3.6, label: R(P(-48, -30)) },
    inguinalLigament: { type: "ligament", from: R(P(-120, -71)), to: R(P(-23, -4)), bend: 4, width: 5, z: 3.8 },
    conjointTendon: { type: "tendon", points: pts([[-62, -48], [-48, -34], [-32, -18], [-19, -6]]).map(R), width: 9, z: 3.7 },
    rectusAdductorAponeurosis: { type: "fascia", points: pts([[-14, -12], [-14, -2], [-14, 7], [-15, 16]]).map(R), width: 13, z: 3.9 },
    ilioinguinalNerve: { type: "nerve", points: pts([[-96, -146], [-110, -122], [-112, -100], [-104, -82], [-86, -62], [-66, -45], [-46, -29], [-30, -14], [-24, -4], [-21, 8]]).map(R), width: 4, z: 4.2 }
  },
  anchors: {
    asisRight: R(P(-120.5, -73)), aiisRight: R(P(-110, -45)), asisLeft: R(P(120.5, -73)), iliacCrestRight: R(P(-110, -143)),
    pubicTubercleRight: R(P(-23, -4.5)), pubicSymphysisCentre: R(P(0, 20)), superiorPubicRamus: R(P(-45, -4)), inferiorPubicRamus: R(P(-14, 47)),
    sijRightLine: R(P(-43, -68)), sacralAla: R(P(-34, -92)), deepInguinalRing: R(P(-69, -49)), superficialInguinalRing: R(P(-26, -12)),
    lfcnExit: R(P(-109.5, -66)), ischialTuberosityRight: R(P(-72, 82)), coccyxTip: R(P(0, -2.6)), rectusInsertion: R(P(-14, -3))
  }
};
