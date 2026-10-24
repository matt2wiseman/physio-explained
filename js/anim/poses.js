/**
 * POSE PRESETS — angle tables for every POSE_PRESETS id in js/anim/catalogue.js. OWNER: A2.
 *
 * Each preset: { lat, ant, x, r, rl, ra, seat, hints }
 *   lat  — sagittal angles AS SEEN in the lateral view (catalogue JOINTS.lateral semantics)
 *   ant  — frontal angles AS SEEN in the anterior view (catalogue JOINTS.anterior semantics). Because these are
 *          projected angles, a flexed segment pointing at the viewer is authored by its visible direction
 *          (e.g. squat thighs read as "abducted" ~60° from the front because they point forward-and-out).
 *   Both tables are always used together to reconstruct the 3-D pose; the rendered view is exact.
 *   Missing joints fall back to STAND. An ankle not given (or given as "flat") is auto-levelled so a planted
 *   foot stays flat on the ground — also after keyframe `joints` overrides of hip/knee.
 *   x    — hidden extras: trunkRot / pelvisRot / neckRot (+ = turn toward patient's right), toeOutL/R (deg),
 *          supL/R (forearm supination 0–180, flips wrist direction), gripL/R (0 open hand – 1 fist).
 *   r / rl / ra — root for both views / lateral only / anterior only: { rot, roll, yaw, lift, grounded }.
 *          LYING CONVENTION: lie-supine = rot −90 (head to screen left, face up); lie-prone = rot +90 (head right);
 *          side-lying = yaw 90 + roll −90 in lateral (you see the front, left side down, head right); the
 *          anterior tables of lying presets use roll ±90 (top-down front view).
 *   seat — the pose sits on something (renderers add a chair / car seat when no support prop is given).
 *   hints — prop placement: support (target under which support props go), wall ("back" | "front"),
 *          hold ("R" | "L" | "both"), band, roller, anchor, desk, carry, arcAt.
 * Exercise presets (ex-*) without `ant` fall back to the lateral view when the anterior view is requested.
 */

export const STAND = {
  lat: { neck: 0, trunk: 0, pelvis: 0, shoulderL: 3, shoulderR: 3, elbowL: 12, elbowR: 12, wristL: 0, wristR: 0, hipL: 0, hipR: 0, kneeL: 3, kneeR: 3, ankleL: 3, ankleR: 3, toeL: 0, toeR: 0 },
  ant: { neck: 0, trunk: 0, pelvis: 0, shoulderL: 7, shoulderR: 7, elbowL: 5, elbowR: 5, wristL: 0, wristR: 0, hipL: 4, hipR: 4, kneeL: -1, kneeR: -1, ankleL: 3, ankleR: 3, toeL: 0, toeR: 0 },
  x: {}
};

const SUP = { rot: -90 }, PRONE = { rot: 90 };
const SIDE_L = { yaw: 90, roll: -90 }, SIDE_A = { roll: -90 };
const armsRun = { shoulderR: 9, shoulderL: 9, elbowR: 38, elbowL: 38 };
const supineArms = { shoulderR: 4, shoulderL: 4, elbowR: 6, elbowL: 6 };
const seatLegs = { hipR: 90, kneeR: 90, hipL: 90, kneeL: 90 };
const seatAnt = { hipR: 6, hipL: 6, kneeR: -5, kneeL: -5 };
const squatAnt = { hipR: 24, kneeR: -18, hipL: 24, kneeL: -18, shoulderR: 14, shoulderL: 14, elbowR: 0, elbowL: 0 };

export const PRESETS = {
  /* ---- locomotion ---- */
  "stand": {},
  "walk-heel-strike": {
    lat: { trunk: 2, hipR: 25, kneeR: 4, ankleR: 0, hipL: -14, kneeL: 14, ankleL: -8, toeL: 22, shoulderR: -18, elbowR: 22, shoulderL: 20, elbowL: 28 },
    ant: { hipR: 3, hipL: 3, shoulderR: 6, shoulderL: 6, elbowR: 8, elbowL: 8 } },
  "walk-push-off": {
    lat: { trunk: 2, hipR: -16, kneeR: 22, ankleR: -14, toeR: 32, hipL: 22, kneeL: 6, shoulderR: 20, elbowR: 28, shoulderL: -18, elbowL: 22 },
    ant: { hipR: 3, hipL: 3, shoulderR: 6, shoulderL: 6, elbowR: 8, elbowL: 8 } },
  "run-contact": {
    lat: { trunk: 9, neck: -7, hipR: 30, kneeR: 14, ankleR: 2, hipL: -10, kneeL: 88, ankleL: -22, shoulderR: -38, elbowR: 88, shoulderL: 38, elbowL: 82 },
    ant: { hipR: 3, hipL: 4, kneeL: -2, ...armsRun } },
  "run-midstance": {
    lat: { trunk: 9, neck: -7, hipR: 14, kneeR: 38, hipL: 22, kneeL: 105, ankleL: -5, shoulderR: 4, elbowR: 88, shoulderL: -6, elbowL: 88 },
    ant: { hipR: 2, kneeR: 2, hipL: 5, ...armsRun } },
  "run-toe-off": {
    lat: { trunk: 10, neck: -7, hipR: -16, kneeR: 16, ankleR: -24, toeR: 38, hipL: 52, kneeL: 82, ankleL: 4, shoulderR: 40, elbowR: 85, shoulderL: -40, elbowL: 92 },
    ant: { hipR: 3, hipL: 4, ...armsRun } },
  "run-swing-late": {
    lat: { trunk: 12, neck: -9, hipR: 70, kneeR: 28, ankleR: 4, hipL: -16, kneeL: 24, ankleL: -26, toeL: 36, shoulderR: -48, elbowR: 95, shoulderL: 58, elbowL: 78 },
    ant: { hipR: 2, hipL: 4, shoulderR: 10, shoulderL: 10, elbowR: 36, elbowL: 36 } },
  "sprint-drive": { r: { rot: 32 },
    lat: { trunk: 6, neck: -18, hipR: -6, kneeR: 18, ankleR: 22, toeR: 34, hipL: 108, kneeL: 112, ankleL: 6, shoulderR: 72, elbowR: 88, shoulderL: -48, elbowL: 78 },
    ant: { hipR: 3, hipL: 5, shoulderR: 10, shoulderL: 10, elbowR: 30, elbowL: 30 } },
  "push-off": { r: { rot: 8 },
    lat: { trunk: 14, neck: -12, hipR: -12, kneeR: 8, ankleR: -24, toeR: 46, hipL: 48, kneeL: 55, ankleL: 0, shoulderR: 48, elbowR: 70, shoulderL: -40, elbowL: 60 },
    ant: { hipR: 4, hipL: 5, shoulderR: 14, shoulderL: 12, elbowR: 25, elbowL: 25 } },
  "sudden-dorsiflexion": { r: { rot: 4 },
    lat: { trunk: 14, neck: -10, hipR: -22, kneeR: 3, ankleR: 26, hipL: 42, kneeL: 40, shoulderR: 40, elbowR: 30, shoulderL: 30, elbowL: 30 },
    ant: { hipR: 5, hipL: 5, shoulderR: 30, shoulderL: 28, elbowR: 15, elbowL: 15 } },

  /* ---- jumping / landing / change of direction ---- */
  "jump-takeoff": {
    lat: { trunk: 10, neck: -8, hipR: 12, kneeR: 12, ankleR: -34, toeR: 40, hipL: 12, kneeL: 12, ankleL: -34, toeL: 40, shoulderR: 155, elbowR: 15, shoulderL: 155, elbowL: 15 },
    ant: { hipR: 5, hipL: 5, shoulderR: 165, shoulderL: 165, elbowR: 5, elbowL: 5 } },
  "jump-flight": { r: { lift: 45 },
    lat: { trunk: 18, neck: -12, hipR: 72, kneeR: 105, ankleR: -22, hipL: 68, kneeL: 100, ankleL: -22, shoulderR: 110, elbowR: 30, shoulderL: 110, elbowL: 30 },
    ant: { hipR: 12, hipL: 12, kneeR: -8, kneeL: -8, ankleR: 0, ankleL: 0, shoulderR: 40, shoulderL: 40, elbowR: 10, elbowL: 10 } },
  "jump-land": {
    lat: { trunk: 34, neck: -22, hipR: 72, kneeR: 92, hipL: 72, kneeL: 92, shoulderR: 55, elbowR: 30, shoulderL: 55, elbowL: 30 },
    ant: { hipR: 14, hipL: 14, kneeR: -8, kneeL: -8, shoulderR: 20, shoulderL: 20, elbowR: 20, elbowL: 20 } },
  "landing-stiff": {
    lat: { trunk: -4, neck: 2, hipR: 16, kneeR: 12, ankleR: 2, hipL: 16, kneeL: 12, ankleL: 2, shoulderR: 40, elbowR: 25, shoulderL: 40, elbowL: 25 },
    ant: { hipR: 5, hipL: 5, kneeR: 4, kneeL: 4, shoulderR: 30, shoulderL: 30, elbowR: 15, elbowL: 15 } },
  "cut-plant": { r: { rot: -8 },
    lat: { trunk: -2, neck: 4, hipR: 36, kneeR: 22, hipL: -8, kneeL: 55, ankleL: -22, shoulderR: 30, elbowR: 60, shoulderL: 40, elbowL: 55 },
    ant: { trunk: -10, pelvis: 4, hipR: 22, kneeR: -2, hipL: 6, kneeL: -6, ankleL: -5, shoulderR: 34, elbowR: 40, shoulderL: 30, elbowL: 50 } },
  "pivot": { x: { trunkRot: -40, pelvisRot: -18 },
    lat: { trunk: 10, neck: -6, hipR: 22, kneeR: 26, hipL: -6, kneeL: 34, ankleL: -24, toeL: 30, shoulderR: 50, elbowR: 55, shoulderL: -15, elbowL: 45 },
    ant: { trunk: 6, hipR: 8, kneeR: 6, hipL: 10, kneeL: -2, shoulderR: 25, shoulderL: 30, elbowR: 40, elbowL: 30 } },
  "valgus-collapse": {
    lat: { trunk: 16, neck: -10, hipR: 32, kneeR: 32, hipL: 14, kneeL: 48, ankleL: -22, shoulderR: 38, elbowR: 42, shoulderL: 44, elbowL: 45 },
    ant: { trunk: 12, neck: -6, pelvis: 6, hipR: -8, kneeR: 16, hipL: 12, kneeL: -2, ankleL: -4, shoulderR: 34, elbowR: 30, shoulderL: 40, elbowL: 32 } },
  "ankle-inversion": { r: { roll: 4 },
    lat: { trunk: 8, neck: -6, hipR: 18, kneeR: 22, ankleR: -32, hipL: 34, kneeL: 62, ankleL: -12, shoulderR: 38, elbowR: 30, shoulderL: 32, elbowL: 30 },
    ant: { trunk: -8, pelvis: -4, hipR: 6, kneeR: 0, ankleR: 38, hipL: 16, kneeL: -4, ankleL: 0, shoulderR: 45, elbowR: 20, shoulderL: 55, elbowL: 20 } },
  "heel-strike-hard": {
    lat: { hipR: 30, kneeR: 2, ankleR: 6, hipL: -16, kneeL: 22, ankleL: -14, toeL: 30, shoulderR: -24, elbowR: 25, shoulderL: 24, elbowL: 30 },
    ant: { hipR: 3, hipL: 3 } },

  /* ---- squat / lunge / kneel ---- */
  "squat": { x: { toeOutR: 18, toeOutL: 18 },
    lat: { trunk: 42, neck: -30, hipR: 92, kneeR: 112, hipL: 92, kneeL: 112, shoulderR: 125, elbowR: 8, shoulderL: 125, elbowL: 8 },
    ant: squatAnt },
  "deep-squat": { x: { toeOutR: 22, toeOutL: 22 },
    lat: { trunk: 34, neck: -26, hipR: 122, kneeR: 148, hipL: 122, kneeL: 148, shoulderR: 110, elbowR: 25, shoulderL: 110, elbowL: 25 },
    ant: { hipR: 125, kneeR: -122, hipL: 125, kneeL: -122, shoulderR: 12, shoulderL: 12, elbowR: 30, elbowL: 30 } },
  "lunge": {
    lat: { trunk: 2, hipR: 82, kneeR: 86, hipL: -10, kneeL: 82, ankleL: 22, toeL: 54, shoulderR: 4, elbowR: 15, shoulderL: 4, elbowL: 15 },
    ant: { hipR: 8, kneeR: -6, hipL: 5, kneeL: 0, ankleL: 0, shoulderR: 10, shoulderL: 10 } },
  "kneel": {
    lat: { kneeR: 92, ankleR: -45, kneeL: 92, ankleL: -45, shoulderR: 4, elbowR: 15, shoulderL: 4, elbowL: 15 },
    ant: { hipR: 3, hipL: 3, kneeR: 0, kneeL: 0, ankleR: 0, ankleL: 0 } },

  /* ---- kicking / throwing / overhead ---- */
  "kick-backswing": { r: { rot: -6 }, x: { pelvisRot: 12, trunkRot: 10 },
    lat: { trunk: -6, neck: 4, hipR: -32, kneeR: 102, ankleR: -38, hipL: 24, kneeL: 22, shoulderR: -20, elbowR: 30, shoulderL: 70, elbowL: 25 },
    ant: { trunk: -8, hipR: 6, hipL: 6, shoulderR: 40, shoulderL: 62, elbowR: 15, elbowL: 15 } },
  "kick-contact": { r: { rot: -10 },
    lat: { trunk: -10, neck: 8, hipR: 38, kneeR: 34, ankleR: -42, hipL: 22, kneeL: 24, shoulderR: 40, elbowR: 30, shoulderL: 62, elbowL: 25 },
    ant: { trunk: -10, hipR: 4, hipL: 8, shoulderR: 50, shoulderL: 66, elbowR: 15, elbowL: 15 } },
  "kick-follow-through": { r: { rot: -12 },
    lat: { trunk: -16, neck: 10, hipR: 96, kneeR: 10, ankleR: -36, hipL: 12, kneeL: 16, ankleL: -26, toeL: 20, shoulderR: -12, elbowR: 30, shoulderL: 66, elbowL: 25 },
    ant: { trunk: -10, hipR: 8, hipL: 6, shoulderR: 55, shoulderL: 70 } },
  "throw-cocking": { x: { trunkRot: 38, pelvisRot: 18 },
    lat: { trunk: -12, hipR: -14, kneeR: 26, ankleR: 8, toeR: 24, hipL: 40, kneeL: 30, shoulderR: -82, elbowR: -58, wristR: -10, shoulderL: 92, elbowL: 18 },
    ant: { trunk: -10, hipR: 10, hipL: 12, shoulderR: 92, elbowR: -82, shoulderL: 40, elbowL: 10 } },
  "throw-acceleration": { x: { trunkRot: -20, pelvisRot: -12 },
    lat: { trunk: 18, neck: -10, hipR: -24, kneeR: 42, ankleR: -18, toeR: 40, hipL: 42, kneeL: 30, shoulderR: 115, elbowR: 40, shoulderL: 20, elbowL: 95 },
    ant: { trunk: 12, hipR: 10, hipL: 12, shoulderR: 100, elbowR: -35, shoulderL: 30, elbowL: 70 } },
  "throw-follow-through": { x: { trunkRot: -45, pelvisRot: -30 },
    lat: { trunk: 42, neck: -25, hipR: 2, kneeR: 62, ankleR: -32, toeR: 30, hipL: 62, kneeL: 42, shoulderR: 62, elbowR: 25, shoulderL: -10, elbowL: 80 },
    ant: { trunk: -6, hipR: 8, hipL: 10, shoulderR: 30, elbowR: 70, shoulderL: 25, elbowL: 60 } },
  "serve-trophy": { x: { trunkRot: 40, pelvisRot: 15, gripR: 0.9 },
    lat: { trunk: -16, neck: -8, hipR: 18, kneeR: 32, hipL: 20, kneeL: 30, shoulderR: -60, elbowR: -82, wristR: -15, shoulderL: 165, elbowL: 5, wristL: 10 },
    ant: { trunk: -12, hipR: 6, hipL: 6, shoulderR: 98, elbowR: -88, shoulderL: 165, elbowL: 0 } },
  "overhead-reach": {
    lat: { trunk: -4, shoulderR: 172, elbowR: 4, wristR: 5, ankleR: -10, toeR: 20, ankleL: -10, toeL: 20 },
    ant: { trunk: -6, shoulderR: 168, elbowR: 0 } },
  "bowling-delivery": { x: { trunkRot: 10 },
    lat: { trunk: 22, neck: -8, hipL: 34, kneeL: 8, hipR: -22, kneeR: 32, ankleR: -24, toeR: 42, shoulderR: 178, elbowR: 0, shoulderL: 40, elbowL: 50 },
    ant: { trunk: -32, neck: 8, pelvis: -6, hipL: 12, kneeL: 2, hipR: 16, shoulderR: 172, elbowR: 0, shoulderL: 60, elbowL: 45 } },
  "swing-golf-top": { x: { trunkRot: 80, pelvisRot: 40, gripR: 0.9, gripL: 0.9 },
    lat: { trunk: 38, neck: -28, hipR: 26, kneeR: 22, hipL: 26, kneeL: 26, shoulderR: 196, elbowR: 70, wristR: 20, shoulderL: 214, elbowL: 4, wristL: 20 },
    ant: { trunk: 6, hipR: 8, hipL: 8, kneeL: 6, shoulderR: 112, elbowR: -70, shoulderL: -140, elbowL: 6, wristR: 20, wristL: 20 }, hints: { hold: "both" } },
  "swing-golf-impact": { x: { trunkRot: -20, pelvisRot: -35, gripR: 0.9, gripL: 0.9 },
    lat: { trunk: 36, neck: -26, hipR: 24, kneeR: 26, ankleR: -10, toeR: 20, hipL: 22, kneeL: 14, shoulderR: 66, elbowR: 10, shoulderL: 66, elbowL: 2 },
    ant: { trunk: 10, hipR: 6, hipL: 6, shoulderR: 12, elbowR: 15, shoulderL: -8, elbowL: 0, wristR: 10, wristL: 10 }, hints: { hold: "both" } },
  "punch": { x: { trunkRot: -30, pelvisRot: -12, gripR: 1, gripL: 1 },
    lat: { trunk: 10, neck: -6, hipL: 20, kneeL: 20, hipR: -14, kneeR: 16, ankleR: -8, toeR: 20, shoulderR: 86, elbowR: 4, shoulderL: 34, elbowL: 132 },
    ant: { hipR: 8, hipL: 8, shoulderR: 12, elbowR: 0, shoulderL: 22, elbowL: 95 } },
  "reach-catch": { x: { gripR: 0, gripL: 0 },
    lat: { trunk: -2, hipR: 10, kneeR: 18, hipL: 10, kneeL: 18, shoulderR: 145, elbowR: 10, wristR: 20, shoulderL: 145, elbowL: 10, wristL: 20 },
    ant: { shoulderR: 150, shoulderL: 150, elbowR: 0, elbowL: 0, hipR: 8, hipL: 8 } },
  "climb-crimp": { r: { grounded: false, lift: 70 }, x: { gripR: 0.6, gripL: 0.6 },
    lat: { trunk: -4, neck: -14, shoulderR: 168, elbowR: 30, wristR: -10, shoulderL: 130, elbowL: 70, hipR: 40, kneeR: 72, ankleR: 10, hipL: 12, kneeL: 30, ankleL: 0 },
    ant: { shoulderR: 160, elbowR: 15, shoulderL: 140, elbowL: 30, hipR: 22, kneeR: -14, hipL: 10, kneeL: -4, ankleR: 0, ankleL: 0 } },
  "grip-tool": { x: { gripR: 1, gripL: 0.7 },
    lat: { trunk: 16, neck: -12, shoulderR: 78, elbowR: 105, wristR: 30, shoulderL: 52, elbowL: 62, hipR: 6, kneeR: 10, hipL: 6, kneeL: 10 },
    ant: { shoulderR: 30, elbowR: 30, shoulderL: 20, elbowL: 55 } },
  "typing": { seat: true, x: { gripR: 0, gripL: 0 }, hints: { desk: true },
    lat: { trunk: -4, neck: 6, ...seatLegs, kneeR: 92, kneeL: 92, shoulderR: 16, elbowR: 88, wristR: 14, shoulderL: 16, elbowL: 88, wristL: 14 },
    ant: { ...seatAnt, shoulderR: 12, elbowR: 30, shoulderL: 12, elbowL: 30 } },

  /* ---- falls & collisions ---- */
  "foosh": { r: { rot: 52 }, x: { gripR: 0, gripL: 0 },
    lat: { trunk: 8, neck: -26, hipR: 14, kneeR: 16, ankleR: -10, toeR: 34, hipL: 30, kneeL: 30, ankleL: -12, shoulderR: 108, elbowR: 4, wristR: 72, shoulderL: 96, elbowL: 18, wristL: 50 },
    ant: { shoulderR: 40, elbowR: 0, wristR: 0, shoulderL: 44, elbowL: 10, hipR: 6, hipL: 8, ankleR: 0, ankleL: 0 } },
  "fall-sideways": { rl: { yaw: 90, roll: 62 }, ra: { roll: 62 },
    lat: { hipR: 10, kneeR: 15, ankleR: 0, hipL: 20, kneeL: 25, ankleL: 0, shoulderR: 20, elbowR: 30, shoulderL: 30, elbowL: 30 },
    ant: { trunk: 12, neck: -14, hipR: 6, hipL: 22, kneeL: -6, ankleR: 0, ankleL: 0, shoulderR: 38, elbowR: 20, shoulderL: 110, elbowL: 25 } },
  "fall-backward": { r: { rot: -34 }, x: { gripR: 0, gripL: 0 },
    lat: { trunk: 16, neck: 18, hipR: 64, kneeR: 52, ankleR: 8, hipL: 60, kneeL: 48, ankleL: 8, shoulderR: -30, elbowR: 10, wristR: 60, shoulderL: -30, elbowL: 10, wristL: 60 },
    ant: { shoulderR: 30, shoulderL: 30, hipR: 10, hipL: 10, ankleR: 0, ankleL: 0 } },
  "slip": { r: { rot: -22 },
    lat: { trunk: -8, neck: 12, hipR: 62, kneeR: 4, ankleR: 14, hipL: 8, kneeL: 62, ankleL: -10, shoulderR: 100, elbowR: 30, shoulderL: 125, elbowL: 30 },
    ant: { shoulderR: 80, shoulderL: 100, elbowR: 20, elbowL: 20, hipR: 5, hipL: 5, ankleR: 0, ankleL: 0 } },
  "trip": { r: { rot: 30 }, x: { gripR: 0, gripL: 0 },
    lat: { trunk: 14, neck: -24, hipR: -22, kneeR: 44, ankleR: -24, hipL: 52, kneeL: 44, ankleL: 0, shoulderR: 110, elbowR: 18, wristR: 30, shoulderL: 105, elbowL: 22, wristL: 30 },
    ant: { shoulderR: 30, shoulderL: 30, elbowR: 10, elbowL: 10, ankleR: 0, ankleL: 0 } },
  "tackle-low": { r: { rot: 18 },
    lat: { trunk: 26, neck: -20, hipR: -6, kneeR: 8, ankleR: -6, hipL: 8, kneeL: 14, shoulderR: 90, elbowR: 22, shoulderL: 120, elbowL: 26 },
    ant: { trunk: 6, shoulderR: 60, shoulderL: 74, elbowR: 20, elbowL: 20, hipR: 3, hipL: 3 } },
  "tackle-high": { r: { rot: -14 },
    lat: { trunk: -14, neck: -24, hipR: 10, kneeR: 18, hipL: -6, kneeL: 24, ankleL: -14, toeL: 20, shoulderR: 70, elbowR: 40, shoulderL: 90, elbowL: 45 },
    ant: { trunk: -8, neck: 20, shoulderR: 60, shoulderL: 40, elbowR: 30, elbowL: 30 } },
  "ski-crouch": { x: { gripR: 0.9, gripL: 0.9, toeOutR: 0, toeOutL: 0 },
    lat: { trunk: 36, neck: -26, hipR: 62, kneeR: 92, hipL: 62, kneeL: 92, shoulderR: 40, elbowR: 62, shoulderL: 40, elbowL: 62 },
    ant: { hipR: 6, hipL: 6, kneeR: -4, kneeL: -4, shoulderR: 22, shoulderL: 22, elbowR: 30, elbowL: 30 } },
  "ski-fall-back": { r: { rot: -22 }, x: { toeOutR: -12, toeOutL: 0, gripR: 0.9, gripL: 0.9 },
    lat: { trunk: 30, neck: -18, hipR: 102, kneeR: 122, hipL: 70, kneeL: 75, shoulderR: 40, elbowR: 30, shoulderL: -10, elbowL: 30 },
    ant: { hipR: 2, kneeR: 12, hipL: 18, kneeL: -6, shoulderR: 40, shoulderL: 50, elbowR: 20, elbowL: 20 } },
  "ballet-releve": { x: { toeOutR: 22, toeOutL: 22 },
    lat: { neck: -4, kneeR: 0, kneeL: 0, ankleR: -62, toeR: 4, ankleL: -62, toeL: 4, shoulderR: 158, elbowR: 32, shoulderL: 158, elbowL: 32 },
    ant: { hipR: 2, hipL: 2, kneeR: 0, kneeL: 0, ankleR: 0, ankleL: 0, shoulderR: 150, elbowR: -58, shoulderL: 150, elbowL: -58 } },

  /* ---- lifting / sitting / lying ---- */
  "lift-stoop": { x: { gripR: 0.8, gripL: 0.8 }, hints: { hold: "both" },
    lat: { pelvis: 52, hipR: 52, kneeR: 8, hipL: 52, kneeL: 8, trunk: 46, neck: -22, shoulderR: 96, elbowR: 6, shoulderL: 96, elbowL: 6 },
    ant: { shoulderR: 10, shoulderL: 10, elbowR: 10, elbowL: 10, hipR: 6, hipL: 6 } },
  "lift-squat": { x: { gripR: 0.8, gripL: 0.8, toeOutR: 15, toeOutL: 15 }, hints: { hold: "both" },
    lat: { pelvis: 24, hipR: 106, kneeR: 104, hipL: 106, kneeL: 104, trunk: 14, neck: -18, shoulderR: 46, elbowR: 4, shoulderL: 46, elbowL: 4 },
    ant: { hipR: 22, kneeR: -18, hipL: 22, kneeL: -18, shoulderR: 8, shoulderL: 8 } },
  "carry": { x: { gripR: 0.7, gripL: 0.7 }, hints: { carry: true },
    lat: { trunk: -8, neck: 6, kneeR: 6, kneeL: 6, shoulderR: 26, elbowR: 86, shoulderL: 26, elbowL: 86 },
    ant: { shoulderR: 18, elbowR: 46, shoulderL: 18, elbowL: 46 } },
  "sit": { seat: true,
    lat: { trunk: -4, pelvis: -4, hipR: 88, kneeR: 90, hipL: 88, kneeL: 90, shoulderR: 22, elbowR: 58, shoulderL: 22, elbowL: 58 },
    ant: { ...seatAnt, shoulderR: 6, shoulderL: 6, elbowR: 28, elbowL: 28 } },
  "sit-car": { seat: true, x: { gripR: 0.8, gripL: 0.8 }, hints: { seatProp: "car-seat" },
    lat: { pelvis: -10, trunk: -12, neck: 16, hipR: 92, kneeR: 72, ankleR: -6, hipL: 92, kneeL: 78, ankleL: -4, shoulderR: 62, elbowR: 32, shoulderL: 62, elbowL: 32 },
    ant: { hipR: 8, hipL: 8, kneeR: -6, kneeL: -6, ankleR: 0, ankleL: 0, shoulderR: 14, shoulderL: 14, elbowR: 20, elbowL: 20 } },
  "sit-desk": { seat: true, x: { gripR: 0, gripL: 0 }, hints: { desk: true },
    lat: { pelvis: -14, trunk: 24, neck: 14, hipR: 82, kneeR: 86, hipL: 82, kneeL: 86, shoulderR: 26, elbowR: 78, wristR: 10, shoulderL: 26, elbowL: 78, wristL: 10 },
    ant: { ...seatAnt, shoulderR: 10, shoulderL: 10, elbowR: 32, elbowL: 32 } },
  "lie-supine": { rl: SUP, ra: { roll: 90 }, x: { toeOutR: 24, toeOutL: 24 },
    lat: { kneeR: 3, kneeL: 3, ankleR: -22, ankleL: -22, ...supineArms },
    ant: { hipR: 4, hipL: 4, kneeR: 0, kneeL: 0, ankleR: 0, ankleL: 0, shoulderR: 12, shoulderL: 12, elbowR: 0, elbowL: 0 } },
  "lie-prone": { rl: PRONE, ra: { roll: -90 },
    lat: { neck: -12, kneeR: 3, kneeL: 3, ankleR: -50, ankleL: -50, shoulderR: 6, shoulderL: 6, elbowR: 8, elbowL: 8 },
    ant: { shoulderR: 12, shoulderL: 12, hipR: 4, hipL: 4, kneeR: 0, kneeL: 0, ankleR: 0, ankleL: 0 } },
  "lie-side": { rl: SIDE_L, ra: SIDE_A,
    lat: { hipR: 30, kneeR: 45, ankleR: -10, hipL: 25, kneeL: 45, ankleL: -10, shoulderR: 10, elbowR: 20, shoulderL: 8, elbowL: 10 },
    ant: { shoulderL: 168, elbowL: 4, shoulderR: 10, elbowR: 20, hipR: 2, hipL: 0, kneeR: 0, kneeL: 0, ankleR: 0, ankleL: 0 } },

  /* ---- exercise presets (lateral required; `ant` where a frontal view is meaningful) ---- */
  "ex-quad-set": { rl: SUP, lat: { hipR: 0, kneeR: -2, ankleR: 10, hipL: 45, kneeL: 90, ...supineArms } },
  "ex-straight-leg-raise": { rl: SUP, lat: { hipR: 42, kneeR: 0, ankleR: 8, hipL: 45, kneeL: 90, ...supineArms } },
  "ex-heel-slide": { rl: SUP, lat: { hipR: 48, kneeR: 88, hipL: 0, kneeL: 2, ankleL: -15, ...supineArms } },
  "ex-bridge": { rl: { rot: -114 }, lat: { neck: 24, hipR: 0, kneeR: 114, hipL: 0, kneeL: 114, shoulderR: -24, elbowR: 0, shoulderL: -24, elbowL: 0 } },
  "ex-single-leg-bridge": { rl: { rot: -114 }, lat: { neck: 24, hipR: 0, kneeR: 114, hipL: 0, kneeL: 0, ankleL: -10, shoulderR: -24, elbowR: 0, shoulderL: -24, elbowL: 0 } },
  "ex-hamstring-bridge": { rl: { rot: -104 }, hints: { support: "heels" },
    lat: { neck: 16, hipR: 0, kneeR: 28, ankleR: 2, hipL: 0, kneeL: 28, ankleL: 2, shoulderR: -14, elbowR: 0, shoulderL: -14, elbowL: 0 } },
  "ex-hip-thrust": { rl: { rot: -92 }, hints: { support: "upperBack" },
    lat: { neck: 22, hipR: 2, kneeR: 92, hipL: 2, kneeL: 92, shoulderR: 30, elbowR: 40, shoulderL: 30, elbowL: 40 } },
  "ex-clamshell": { rl: SIDE_L, ra: SIDE_A,
    lat: { hipR: 42, kneeR: 85, ankleR: -10, hipL: 42, kneeL: 85, ankleL: -10, shoulderL: 8, elbowL: 10, shoulderR: 10, elbowR: 30 },
    ant: { hipR: 38, kneeR: -36, hipL: 0, kneeL: 0, ankleR: 0, ankleL: 0, shoulderL: 168, elbowL: 4, shoulderR: 10, elbowR: 40 } },
  "ex-side-plank": { rl: { yaw: 90, roll: -74 }, ra: { roll: -74 },
    lat: { shoulderL: 6, elbowL: 90, shoulderR: 0, elbowR: 0, ankleR: 0, ankleL: 0, kneeR: 0, kneeL: 0 },
    ant: { shoulderL: 74, elbowL: 0, shoulderR: 90, elbowR: 0, hipR: 0, hipL: 0, kneeR: 0, kneeL: 0, ankleR: 0, ankleL: 0 } },
  "ex-plank": { rl: { rot: 80 }, x: { gripR: 0.8, gripL: 0.8 },
    lat: { neck: -6, shoulderR: 80, elbowR: 90, shoulderL: 80, elbowL: 90, hipR: 0, kneeR: 0, ankleR: 0, toeR: 80, hipL: 0, kneeL: 0, ankleL: 0, toeL: 80 } },
  "ex-bird-dog": { rl: { rot: 76 }, x: { gripR: 0, gripL: 0 },
    lat: { neck: -10, shoulderR: 76, elbowR: 4, wristR: 86, shoulderL: 166, elbowL: 0, hipR: -14, kneeR: 0, ankleR: -10, hipL: 76, kneeL: 90, ankleL: -55 } },
  "ex-dead-bug": { rl: SUP, lat: { neck: 8, shoulderR: 90, elbowR: 0, shoulderL: 165, elbowL: 0, hipR: 22, kneeR: 8, ankleR: -10, hipL: 90, kneeL: 90, ankleL: -10 } },
  "ex-copenhagen": { rl: { yaw: 90, roll: -76 }, ra: { roll: -76 }, hints: { support: "kneeR" },
    lat: { shoulderL: 6, elbowL: 90, shoulderR: 0, elbowR: 10, ankleR: 0, ankleL: 0, kneeR: 0, kneeL: 0 },
    ant: { shoulderL: 76, elbowL: 0, shoulderR: 90, elbowR: 0, hipR: 0, kneeR: 0, hipL: -14, kneeL: 0, ankleR: 0, ankleL: 0 } },
  "ex-squat": { x: { toeOutR: 18, toeOutL: 18 },
    lat: { trunk: 38, neck: -28, hipR: 88, kneeR: 102, hipL: 88, kneeL: 102, shoulderR: 120, elbowR: 6, shoulderL: 120, elbowL: 6 },
    ant: { ...squatAnt, hipR: 22, kneeR: -16, hipL: 22, kneeL: -16 } },
  "ex-split-squat": { x: { gripR: 0.9, gripL: 0.9 }, hints: { hold: "both" },
    lat: { trunk: 4, hipR: 72, kneeR: 88, hipL: -14, kneeL: 86, ankleL: 22, toeL: 52, shoulderR: 2, elbowR: 4, shoulderL: 2, elbowL: 4 },
    ant: { hipR: 6, kneeR: -4, hipL: 5, kneeL: 0, ankleL: 0, shoulderR: 8, shoulderL: 8, elbowR: 0, elbowL: 0 } },
  "ex-lunge": {
    lat: { trunk: 4, hipR: 82, kneeR: 86, hipL: -10, kneeL: 82, ankleL: 22, toeL: 54, shoulderR: 4, elbowR: 15, shoulderL: 4, elbowL: 15 },
    ant: { hipR: 8, kneeR: -6, hipL: 5, kneeL: 0, ankleL: 0, shoulderR: 10, shoulderL: 10 } },
  "ex-step-up": { hints: { support: "footR" },
    lat: { trunk: 14, neck: -10, hipR: 62, kneeR: 72, hipL: -4, kneeL: 12, ankleL: -16, toeL: 30, shoulderR: 30, elbowR: 60, shoulderL: -20, elbowL: 40 },
    ant: { hipR: 6, kneeR: -4, hipL: 5, shoulderR: 10, shoulderL: 10, elbowR: 20, elbowL: 20 } },
  "ex-step-down": { hints: { support: "footR" },
    lat: { trunk: 14, neck: -10, hipR: 50, kneeR: 76, hipL: 10, kneeL: 2, ankleL: 4, shoulderR: 22, elbowR: 20, shoulderL: 22, elbowL: 20 },
    ant: { hipR: 2, kneeR: 0, hipL: 9, kneeL: 0, ankleL: 0, shoulderR: 22, shoulderL: 22, elbowR: 10, elbowL: 10 } },
  "ex-single-leg-squat": {
    lat: { trunk: 30, neck: -20, hipR: 64, kneeR: 86, hipL: 52, kneeL: 12, ankleL: 0, shoulderR: 72, elbowR: 6, shoulderL: 72, elbowL: 6 },
    ant: { hipR: 3, kneeR: 0, hipL: 8, kneeL: -2, ankleL: 0, shoulderR: 14, shoulderL: 14 } },
  "ex-single-leg-balance": {
    lat: { hipL: 32, kneeL: 72, ankleL: -12, shoulderR: 12, elbowR: 18, shoulderL: 12, elbowL: 18 },
    ant: { hipR: 1, kneeR: 0, hipL: 5, kneeL: -2, ankleL: 0, shoulderR: 26, shoulderL: 26, elbowR: 10, elbowL: 10 } },
  "ex-wall-sit": { hints: { wall: "back" },
    lat: { ...seatLegs, trunk: 0, shoulderR: 4, elbowR: 10, shoulderL: 4, elbowL: 10 },
    ant: { hipR: 10, hipL: 10, kneeR: -8, kneeL: -8 } },
  "ex-calf-raise": {
    lat: { kneeR: 0, kneeL: 0, ankleR: -34, toeR: 40, ankleL: -34, toeL: 40 },
    ant: { ankleR: 0, ankleL: 0 } },
  "ex-single-leg-calf-raise": {
    lat: { kneeR: 0, ankleR: -34, toeR: 40, hipL: 4, kneeL: 75, ankleL: -15, shoulderR: 30, elbowR: 30 },
    ant: { ankleR: 0, hipL: 4, kneeL: 0, ankleL: 0, shoulderR: 25 } },
  "ex-seated-calf-raise": { seat: true,
    lat: { trunk: 8, ...seatLegs, ankleR: -30, toeR: 40, ankleL: -30, toeL: 40, shoulderR: 28, elbowR: 50, shoulderL: 28, elbowL: 50 } },
  "ex-nordic": { r: { rot: 42 }, x: { gripR: 0, gripL: 0 }, hints: { anchor: "ankles" },
    lat: { neck: -8, hipR: 0, kneeR: 48, ankleR: -40, hipL: 0, kneeL: 48, ankleL: -40, shoulderR: 60, elbowR: 30, wristR: 50, shoulderL: 60, elbowL: 30, wristL: 50 } },
  "ex-rdl": { x: { gripR: 0.9, gripL: 0.9 }, hints: { hold: "both" },
    lat: { pelvis: 62, hipR: 62, kneeR: 16, hipL: 62, kneeL: 16, trunk: 4, neck: -14, shoulderR: 66, elbowR: 2, shoulderL: 66, elbowL: 2 } },
  "ex-knee-extension": { seat: true,
    lat: { trunk: -4, hipR: 90, kneeR: 38, ankleR: 2, hipL: 90, kneeL: 90, shoulderR: 12, elbowR: 22, shoulderL: 12, elbowL: 22 } },
  "ex-hip-abduction-standing": {
    lat: { hipR: 4, kneeR: 0, ankleR: 0, shoulderL: 30, elbowL: 30 },
    ant: { trunk: 4, hipR: 32, kneeR: 0, ankleR: 0, hipL: 1, kneeL: 0, shoulderL: 40, elbowL: 20, shoulderR: 10 } },
  "ex-hop": { r: { lift: 22 },
    lat: { trunk: 10, neck: -8, hipR: 26, kneeR: 34, ankleR: -30, hipL: 48, kneeL: 92, ankleL: -12, shoulderR: 58, elbowR: 70, shoulderL: -26, elbowL: 60 },
    ant: { hipR: 3, kneeR: 0, ankleR: 0, hipL: 8, kneeL: -4, ankleL: 0, shoulderR: 20, shoulderL: 20, elbowR: 30, elbowL: 30 } },
  "ex-jump-squat": { r: { lift: 30 },
    lat: { trunk: 6, hipR: 6, kneeR: 8, ankleR: -40, toeR: 6, hipL: 6, kneeL: 8, ankleL: -40, toeL: 6, shoulderR: 140, elbowR: 15, shoulderL: 140, elbowL: 15 },
    ant: { hipR: 5, hipL: 5, ankleR: 0, ankleL: 0, shoulderR: 160, shoulderL: 160, elbowR: 0, elbowL: 0 } },
  "ex-ankle-alphabet": { seat: true, hints: { arcAt: "toeR" },
    lat: { trunk: -4, hipR: 88, kneeR: 12, ankleR: -18, hipL: 90, kneeL: 90, shoulderR: 14, elbowR: 30, shoulderL: 14, elbowL: 30 } },
  "ex-shoulder-er-side-lying": { rl: SIDE_L, ra: SIDE_A, x: { gripR: 0.9 }, hints: { hold: "R" },
    lat: { hipR: 35, kneeR: 50, ankleR: -10, hipL: 35, kneeL: 50, ankleL: -10, shoulderR: 0, elbowR: 0, shoulderL: 8, elbowL: 10 },
    ant: { shoulderR: 4, elbowR: -88, shoulderL: 168, elbowL: 4, hipR: 0, hipL: 0, kneeR: 0, kneeL: 0, ankleR: 0, ankleL: 0 } },
  "ex-shoulder-er-band": { x: { gripR: 0.85 }, hints: { band: "R" },
    lat: { shoulderR: 6, elbowR: 90, wristR: 0, shoulderL: 3, elbowL: 15 },
    ant: { shoulderR: 6, elbowR: -90, shoulderL: 7 } },
  "ex-shoulder-flexion": { x: { gripR: 0.8 },
    lat: { shoulderR: 148, elbowR: 2, wristR: 0 },
    ant: { shoulderR: 172, elbowR: 0 } },
  "ex-scaption": { x: { gripR: 0.8, gripL: 0.8 },
    lat: { shoulderR: 126, elbowR: 2, shoulderL: 126, elbowL: 2 },
    ant: { shoulderR: 113, elbowR: 0, shoulderL: 113, elbowL: 0 } },
  "ex-pendulum": { x: { gripL: 0 }, hints: { support: "handL" },
    lat: { pelvis: 40, hipR: 40, kneeR: 12, hipL: 60, kneeL: 24, trunk: 42, neck: -16, shoulderR: 92, elbowR: 4, shoulderL: 52, elbowL: 2, wristL: 70 } },
  "ex-wall-slide": { x: { gripR: 0, gripL: 0 }, hints: { wall: "front" },
    lat: { shoulderR: 125, elbowR: 58, shoulderL: 125, elbowL: 58 },
    ant: { shoulderR: 130, elbowR: -45, shoulderL: 130, elbowL: -45 } },
  "ex-row": { x: { gripR: 0.9, gripL: 0.9 }, hints: { hold: "R" },
    lat: { pelvis: 36, hipR: 36, kneeR: 22, hipL: 36, kneeL: 22, trunk: 12, neck: -16, shoulderR: -32, elbowR: 80, shoulderL: 48, elbowL: 4 } },
  "ex-press-up": { rl: { rot: 70 }, x: { gripR: 0, gripL: 0 },
    lat: { neck: -6, shoulderR: 70, elbowR: 0, wristR: 88, shoulderL: 70, elbowL: 0, wristL: 88, hipR: 0, kneeR: 0, ankleR: -8, toeR: 72, hipL: 0, kneeL: 0, ankleL: -8, toeL: 72 } },
  "ex-overhead-press": { x: { gripR: 0.9, gripL: 0.9 }, hints: { hold: "both" },
    lat: { shoulderR: 172, elbowR: 6, shoulderL: 172, elbowL: 6 },
    ant: { shoulderR: 160, elbowR: -14, shoulderL: 160, elbowL: -14 } },
  "ex-prone-y": { rl: PRONE, x: { gripR: 0.6, gripL: 0.6 },
    lat: { neck: -10, shoulderR: 188, elbowR: 0, shoulderL: 188, elbowL: 0, kneeR: 2, kneeL: 2, ankleR: -50, ankleL: -50 },
    ant: { shoulderR: 135, shoulderL: 135 } },
  "ex-wrist-extension": { seat: true, x: { gripR: 1, supR: 0 }, hints: { hold: "R" },
    lat: { trunk: 26, neck: -16, ...seatLegs, shoulderR: 34, elbowR: 64, wristR: 36, shoulderL: 30, elbowL: 70 } },
  "ex-wrist-flexion": { seat: true, x: { gripR: 1, supR: 180 }, hints: { hold: "R" },
    lat: { trunk: 26, neck: -16, ...seatLegs, shoulderR: 34, elbowR: 64, wristR: -36, shoulderL: 30, elbowL: 70 } },
  "ex-grip": { x: { gripR: 1 }, lat: { shoulderR: 10, elbowR: 90, wristR: 10 }, ant: { elbowR: 20 } },
  "ex-chin-tuck": { rl: SUP, lat: { neck: 16, hipR: 45, kneeR: 90, hipL: 45, kneeL: 90, ...supineArms } },
  "ex-neck-isometric": { seat: true, x: { gripR: 0 },
    lat: { trunk: -2, ...seatLegs, shoulderR: 70, elbowR: 128, wristR: 10, shoulderL: 14, elbowL: 50 },
    ant: { ...seatAnt, shoulderR: 60, elbowR: 118, wristR: 0 } },
  "ex-thoracic-extension": { rl: { rot: -60 }, hints: { roller: "upperBack" },
    lat: { trunk: -36, neck: 12, hipR: 62, kneeR: 96, hipL: 62, kneeL: 96, shoulderR: 150, elbowR: 135, shoulderL: 150, elbowL: 135 } },
  "ex-cat-camel": { rl: { rot: 76 }, x: { gripR: 0, gripL: 0 },
    lat: { trunk: 22, neck: 20, shoulderR: 98, elbowR: 2, wristR: 86, shoulderL: 98, elbowL: 2, wristL: 86, hipR: 76, kneeR: 90, ankleR: -55, hipL: 76, kneeL: 90, ankleL: -55 } },
  "ex-prone-press-up": { rl: PRONE, x: { gripR: 0, gripL: 0 },
    lat: { trunk: -48, neck: -8, shoulderR: 42, elbowR: 4, wristR: 86, shoulderL: 42, elbowL: 4, wristL: 86, kneeR: 2, kneeL: 2, ankleR: -50, ankleL: -50 } },
  "ex-knee-to-chest": { rl: SUP,
    lat: { neck: 10, hipR: 118, kneeR: 122, ankleR: -20, hipL: 0, kneeL: 3, ankleL: -20, shoulderR: 60, elbowR: 96, shoulderL: 60, elbowL: 96 } },
  "ex-slump-glide": { seat: true,
    lat: { pelvis: -10, trunk: 32, neck: 40, ...seatLegs, kneeR: 22, ankleR: 14, shoulderR: -10, elbowR: 10, shoulderL: -10, elbowL: 10 } },
  "ex-median-nerve-glide": { x: { gripR: 0, supR: 0 },
    lat: { shoulderR: 90, elbowR: 4, wristR: 80 },
    ant: { neck: -22, shoulderR: 90, elbowR: 0, wristR: 75 } },
  "ex-farmer-carry": { x: { gripR: 1, gripL: 1 }, hints: { hold: "both", holdProp: "kettlebell" },
    lat: { trunk: -2, hipR: 18, kneeR: 8, hipL: -10, kneeL: 16, ankleL: -10, toeL: 18, shoulderR: 0, elbowR: 2, shoulderL: 0, elbowL: 2 },
    ant: { shoulderR: 9, elbowR: 0, shoulderL: 9, elbowL: 0, hipR: 3, hipL: 3 } }
};
