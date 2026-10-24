/**
 * Micro module: TENDON (acute injury & healing). OWNER: A7.
 * Same healing sequence as ligament (see ligament.js → makeAcuteCollagen), drawn as tendon: cream type I collagen in
 * tightly packed, in-register crimped bundles with rows of flattened tenocytes between them.
 * Stages: healthy, loaded, overload, failure, haemorrhage, inflammation, proliferation, remodelling.
 */
import { makeAcuteCollagen } from "./ligament.js";

export default makeAcuteCollagen({
  id: "tendon", tint: "anat-tendon", fibre: "anat-tendon", edge: "anat-tendon-edge", cellKind: "tenocyte",
  cellLabel: "Tenocytes in rows", fibreLabel: "Type I collagen fascicles\n(tightly packed, crimped)", fibreWidth: 8, cellsPerRow: 6,
  wavelength: 36, amplitude: 3.8, crimpRegister: true, scale: "≈ 50 µm"
});
