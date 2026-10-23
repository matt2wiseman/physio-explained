// Injury content validator. Shared by scripts/build.mjs and tests. OWNER: head of QC.
import * as A from "../../js/anim/catalogue.js";

export const REGIONS = ["hip-groin", "thigh", "knee", "lower-leg", "ankle", "foot", "shoulder", "arm", "elbow", "wrist-hand", "cervical", "thoracic", "lumbar", "pelvis", "chest-abdomen", "head-face", "general"];
export const BODY_AREAS = {
  "lower-limb": ["hip-groin", "thigh", "knee", "lower-leg", "ankle", "foot"],
  "upper-limb": ["shoulder", "arm", "elbow", "wrist-hand"],
  "spine": ["cervical", "thoracic", "lumbar"],
  "trunk": ["pelvis", "chest-abdomen"],
  "head": ["head-face"],
  "general": ["general"]
};
export const bodyAreaOf = (region) => Object.keys(BODY_AREAS).find((k) => BODY_AREAS[k].includes(region)) || "general";
export const TISSUES = ["ligament", "tendon", "muscle", "bone", "cartilage", "meniscus", "labrum", "joint-capsule", "nerve", "bursa", "disc", "fascia", "fat-pad", "physis", "vascular", "brain", "vestibular", "multiple"];
export const MECHANISMS = ["contact", "non-contact", "overuse", "fall", "collision", "degenerative", "insidious", "traction", "compression"];
export const REF_TYPES = ["clinical-practice-guideline", "consensus-statement", "systematic-review", "meta-analysis", "rct", "cohort", "case-control", "cross-sectional", "diagnostic-accuracy", "biomechanical", "basic-science", "narrative-review", "textbook", "other"];
export const EVIDENCE = ["strong", "moderate", "limited", "very-limited", "conflicting", "expert-opinion"];
export const RECOMMENDATION = ["recommended", "consider", "not-recommended"];
const CITE_RE = /\[(r\d+(?:\s*,\s*r\d+)*)\]/g;

export function validateInjury(inj, { catalogue, file, folderRegion }) {
  const errors = [], warnings = [];
  const E = (p, m) => errors.push(`${p}: ${m}`);
  const W = (p, m) => warnings.push(`${p}: ${m}`);
  const isStr = (v) => typeof v === "string" && v.trim().length > 0;
  const isArr = Array.isArray;
  const str = (p, v, { max, min } = {}) => {
    if (!isStr(v)) return E(p, "must be a non-empty string");
    if (max && v.length > max) W(p, `is ${v.length} chars (max ${max})`);
    if (min && v.length < min) W(p, `is only ${v.length} chars (expected ≥ ${min})`);
  };
  const arr = (p, v, { min = 0, max = Infinity, of } = {}) => {
    if (!isArr(v)) return E(p, "must be an array"), false;
    if (v.length < min) W(p, `has ${v.length} items (expected ≥ ${min})`);
    if (v.length > max) W(p, `has ${v.length} items (expected ≤ ${max})`);
    if (of === "string") v.forEach((x, i) => { if (!isStr(x)) E(`${p}[${i}]`, "must be a non-empty string"); });
    return true;
  };
  const oneOf = (p, v, list) => { if (!list.includes(v)) E(p, `"${v}" is not one of: ${list.join(", ")}`); };
  const objArr = (p, v, keys, opts = {}) => {
    if (!arr(p, v, opts)) return;
    v.forEach((o, i) => {
      if (!o || typeof o !== "object") return E(`${p}[${i}]`, "must be an object");
      for (const k of keys) if (!isStr(o[k])) E(`${p}[${i}].${k}`, "must be a non-empty string");
    });
  };

  if (!inj || typeof inj !== "object") { E("file", "must `export default` an object"); return { errors, warnings }; }

  // ---- identity ----
  const cat = catalogue.find((c) => c.id === inj.id);
  if (!isStr(inj.id) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(inj.id)) E("id", "must be kebab-case");
  if (!cat) E("id", `"${inj.id}" is not in content/catalogue.json`);
  if (file && !file.endsWith(`/${inj.id}.js`)) E("id", `filename must be ${inj.id}.js`);
  str("name", inj.name);
  if (cat && inj.name !== cat.name) W("name", `differs from catalogue name "${cat.name}"`);
  str("shortName", inj.shortName, { max: 28 });
  arr("aka", inj.aka, { min: 2, of: "string" });
  oneOf("region", inj.region, REGIONS);
  if (cat && inj.region !== cat.region) E("region", `must be "${cat.region}" (catalogue)`);
  if (folderRegion && inj.region !== folderRegion) E("region", `file is in folder "${folderRegion}" but region is "${inj.region}"`);
  if (arr("tissues", inj.tissues, { min: 1 })) inj.tissues.forEach((t, i) => oneOf(`tissues[${i}]`, t, TISSUES));
  oneOf("onset", inj.onset, ["acute", "gradual", "acute-or-gradual"]);
  if (arr("mechanismType", inj.mechanismType, { min: 1 })) inj.mechanismType.forEach((t, i) => oneOf(`mechanismType[${i}]`, t, MECHANISMS));
  arr("populations", inj.populations, { min: 1, of: "string" });
  arr("sports", inj.sports, { of: "string" });
  oneOf("urgency", inj.urgency, ["routine", "urgent", "emergency"]);
  str("summary", inj.summary, { max: 220 });
  if (isStr(inj.summary) && CITE_RE.test(inj.summary)) W("summary", "should not contain citations");
  CITE_RE.lastIndex = 0;
  objArr("keyFacts", inj.keyFacts, ["label", "value"], { min: 4, max: 6 });
  str("overview", inj.overview, { min: 200 });

  // ---- sections ----
  const ep = inj.epidemiology || {};
  str("epidemiology.text", ep.text);
  arr("epidemiology.riskFactors.intrinsic", ep.riskFactors?.intrinsic, { min: 2, of: "string" });
  arr("epidemiology.riskFactors.extrinsic", ep.riskFactors?.extrinsic, { min: 1, of: "string" });

  const m = inj.mechanism || {};
  str("mechanism.summary", m.summary);
  arr("mechanism.sequence", m.sequence, { min: 4, max: 8, of: "string" });
  objArr("mechanism.variants", m.variants, ["name", "description"]);

  str("anatomy.text", inj.anatomy?.text);
  objArr("anatomy.structures", inj.anatomy?.structures, ["name", "role"], { min: 3, max: 8 });

  const pp = inj.pathophysiology || {};
  str("pathophysiology.tissueDamage", pp.tissueDamage, { min: 200 });
  objArr("pathophysiology.structures", pp.structures, ["name", "effect"], { min: 2 });
  objArr("pathophysiology.muscles", pp.muscles, ["name", "effect"], { min: 1 });
  objArr("pathophysiology.cellular", pp.cellular, ["phase", "timing", "description"], { min: 3 });
  objArr("pathophysiology.systems", pp.systems, ["system", "effect"], { min: 3 });

  if (inj.grading !== null) {
    if (!inj.grading || typeof inj.grading !== "object") E("grading", "must be null or an object");
    else { str("grading.system", inj.grading.system); objArr("grading.grades", inj.grading.grades, ["grade", "description"], { min: 2 }); }
  }

  const tf = inj.timeframes || {};
  str("timeframes.summary", tf.summary);
  str("timeframes.returnToSport", tf.returnToSport);
  if (arr("timeframes.healing", tf.healing, { min: 3 })) tf.healing.forEach((h, i) => {
    const p = `timeframes.healing[${i}]`;
    str(`${p}.phase`, h.phase); str(`${p}.description`, h.description);
    if (typeof h.startDay !== "number" || typeof h.endDay !== "number") E(p, "startDay/endDay must be numbers (days)");
    else if (h.startDay > h.endDay) E(p, "startDay > endDay");
  });
  if (arr("timeframes.milestones", tf.milestones, { min: 3 })) tf.milestones.forEach((h, i) => {
    str(`timeframes.milestones[${i}].label`, h.label);
    if (typeof h.day !== "number") E(`timeframes.milestones[${i}].day`, "must be a number (days)");
  });

  arr("clinicalPresentation.symptoms", inj.clinicalPresentation?.symptoms, { min: 3, of: "string" });
  arr("clinicalPresentation.signs", inj.clinicalPresentation?.signs, { min: 3, of: "string" });

  const as = inj.assessment || {};
  arr("assessment.subjective", as.subjective, { min: 4, of: "string" });
  for (const k of ["observation", "palpation", "rangeOfMotion", "strength", "functional"]) arr(`assessment.${k}`, as[k], { min: 1, of: "string" });
  arr("assessment.neuro", as.neuro, { of: "string" });
  if (arr("assessment.specialTests", as.specialTests, { min: 1 })) as.specialTests.forEach((t, i) => {
    const p = `assessment.specialTests[${i}]`;
    for (const k of ["name", "purpose", "procedure", "positive"]) str(`${p}.${k}`, t[k]);
    if (!isArr(t.refs)) E(`${p}.refs`, "must be an array (use [] if no accuracy data)");
    if ((t.sensitivity || t.specificity || t.lrPositive || t.lrNegative) && (!isArr(t.refs) || !t.refs.length)) E(p, "quotes accuracy statistics but has no refs");
  });
  objArr("assessment.clinicalRules", as.clinicalRules, ["name", "description"]);
  objArr("assessment.outcomeMeasures", as.outcomeMeasures, ["name", "use"], { min: 1 });
  objArr("assessment.imaging", as.imaging, ["modality", "indication", "findings"], { min: 1 });

  if (arr("differentials", inj.differentials, { min: 4 })) inj.differentials.forEach((d, i) => {
    str(`differentials[${i}].name`, d.name); str(`differentials[${i}].distinguishing`, d.distinguishing);
    if (d.id !== undefined && !catalogue.some((c) => c.id === d.id)) E(`differentials[${i}].id`, `"${d.id}" not in catalogue`);
  });
  arr("redFlags", inj.redFlags, { min: 2, of: "string" });

  const mg = inj.management || {};
  str("management.principles", mg.principles);
  for (const k of ["medical", "physio"]) if (arr(`management.${k}`, mg[k], { min: k === "physio" ? 3 : 1 })) mg[k].forEach((t, i) => {
    const p = `management.${k}[${i}]`;
    str(`${p}.name`, t.name); str(`${p}.description`, t.description);
    oneOf(`${p}.evidence`, t.evidence, EVIDENCE); oneOf(`${p}.recommendation`, t.recommendation, RECOMMENDATION);
    if (!isArr(t.refs)) E(`${p}.refs`, "must be an array");
    else if (!t.refs.length && t.evidence !== "expert-opinion") W(p, `evidence "${t.evidence}" but no refs`);
  });
  arr("management.education", mg.education, { min: 3, of: "string" });

  const rh = inj.rehab || {};
  str("rehab.overview", rh.overview);
  if (arr("rehab.stages", rh.stages, { min: 3, max: 5 })) rh.stages.forEach((s, i) => {
    const p = `rehab.stages[${i}]`;
    str(`${p}.name`, s.name); str(`${p}.timeframe`, s.timeframe);
    arr(`${p}.goals`, s.goals, { min: 1, of: "string" }); arr(`${p}.precautions`, s.precautions, { of: "string" });
    arr(`${p}.progressionCriteria`, s.progressionCriteria, { min: 2, of: "string" });
    if (arr(`${p}.exercises`, s.exercises, { min: 3, max: 7 })) s.exercises.forEach((x, j) => {
      const q = `${p}.exercises[${j}]`;
      str(`${q}.name`, x.name); str(`${q}.dosage`, x.dosage);
      if (x.figure) {
        if (!A.POSE_PRESETS[x.figure.pose]) E(`${q}.figure.pose`, `"${x.figure.pose}" is not a POSE_PRESETS id`);
        if (x.figure.view && !A.VIEWS.includes(x.figure.view)) E(`${q}.figure.view`, "must be lateral|anterior");
        (x.figure.props || []).forEach((pr) => { if (!A.PROPS.includes(pr)) E(`${q}.figure.props`, `"${pr}" is not a PROPS id`); });
      }
    });
  });

  arr("returnToSport.criteria", inj.returnToSport?.criteria, { min: 2, of: "string" });
  arr("returnToSport.tests", inj.returnToSport?.tests, { of: "string" });
  str("prognosis", inj.prognosis);
  arr("prevention", inj.prevention, { of: "string" });
  arr("clinicalPearls", inj.clinicalPearls, { min: 3, max: 6, of: "string" });
  if (arr("related", inj.related, { min: 2, max: 6 })) inj.related.forEach((r, i) => {
    if (!catalogue.some((c) => c.id === r)) E(`related[${i}]`, `"${r}" not in catalogue`);
    if (r === inj.id) E(`related[${i}]`, "cannot reference itself");
  });

  // ---- references & citations ----
  const refIds = new Set();
  if (arr("references", inj.references, { min: 8, max: 22 })) inj.references.forEach((r, i) => {
    const p = `references[${i}]`;
    if (!/^r\d+$/.test(r.id || "")) E(`${p}.id`, 'must look like "r1"');
    else if (refIds.has(r.id)) E(`${p}.id`, `duplicate ${r.id}`);
    else refIds.add(r.id);
    if (r.id !== `r${i + 1}`) W(`${p}.id`, `expected r${i + 1} (number references sequentially)`);
    str(`${p}.citation`, r.citation);
    oneOf(`${p}.type`, r.type, REF_TYPES);
    if (typeof r.year !== "number" || r.year < 1900 || r.year > 2027) E(`${p}.year`, "must be a number");
    if (!r.pmid && !r.doi && !r.url) E(p, "needs a pmid, doi or url");
    if (r.pmid && !/^\d{5,9}$/.test(String(r.pmid))) E(`${p}.pmid`, "must be digits");
    if (r.doi && !/^10\.\d{4,9}\//.test(r.doi)) E(`${p}.doi`, "must start with 10.xxxx/");
  });
  const cited = new Map(); // id -> first-use order
  const walk = (v, path) => {
    if (path.startsWith("references") || path.startsWith("animation")) return;
    if (typeof v === "string") {
      for (const mm of v.matchAll(CITE_RE)) for (const id of mm[1].split(/\s*,\s*/)) {
        if (!refIds.has(id)) E(path, `cites ${id} which is not in references`);
        if (!cited.has(id)) cited.set(id, cited.size);
      }
    } else if (isArr(v)) {
      if (path.endsWith(".refs")) v.forEach((id) => { if (!refIds.has(id)) E(path, `refs ${id} which is not in references`); if (!cited.has(id)) cited.set(id, cited.size); });
      else v.forEach((x, i) => walk(x, `${path}[${i}]`));
    } else if (v && typeof v === "object") for (const k of Object.keys(v)) walk(v[k], path ? `${path}.${k}` : k);
  };
  walk(inj, "");
  for (const id of refIds) if (!cited.has(id)) W("references", `${id} is never cited`);

  // ---- meta ----
  if (!inj.meta || !isStr(inj.meta.lastReviewed)) E("meta.lastReviewed", "required");
  if (cat && inj.meta?.team !== cat.agent) W("meta.team", `expected "${cat.agent}"`);

  // ---- animation ----
  validateAnimation(inj.animation, E, W);
  return { errors, warnings };
}

export function validateAnimation(an, E, W) {
  if (!an || typeof an !== "object") return E("animation", "required (see docs/ANIMATION_DSL.md)");
  if (typeof an.title !== "string" || !an.title) E("animation.title", "required");
  if (!Array.isArray(an.phases) || !an.phases.length) return E("animation.phases", "must be a non-empty array");
  const types = an.phases.map((p) => p.type);
  if (!types.includes("moi")) E("animation.phases", "must include a moi phase");
  if (!types.includes("closeup")) E("animation.phases", "must include a closeup phase");
  if (!types.includes("micro")) W("animation.phases", "no micro phase (only omit if truly irrelevant)");
  const total = an.phases.reduce((s, p) => s + (p.duration || 0), 0);
  if (total > 40) W("animation", `total duration ${total}s (aim ≤ 35s)`);

  an.phases.forEach((ph, pi) => {
    const P = `animation.phases[${pi}]`;
    if (!["moi", "zoom", "closeup", "micro"].includes(ph.type)) return E(`${P}.type`, `unknown "${ph.type}"`);
    if (typeof ph.duration !== "number" || ph.duration <= 0) E(`${P}.duration`, "must be a positive number");
    if (typeof ph.label !== "string" || !ph.label) E(`${P}.label`, "required");
    else if (ph.label.length > 18) W(`${P}.label`, "keep ≤ 18 chars");
    const inT = (t, p) => { if (typeof t !== "number" || t < 0 || t > ph.duration + 1e-9) E(p, `time ${t} outside 0–${ph.duration}`); };
    const inRange = (r, p) => { if (!Array.isArray(r) || r.length !== 2) return E(p, "must be [start, end]"); inT(r[0], p); inT(r[1], p); if (r[0] > r[1]) E(p, "start > end"); };
    (ph.captions || []).forEach((c, i) => {
      inT(c.t, `${P}.captions[${i}].t`);
      if (typeof c.text !== "string" || !c.text) E(`${P}.captions[${i}].text`, "required");
      else if (c.text.length > 130) W(`${P}.captions[${i}].text`, `${c.text.length} chars (aim ≤ 110)`);
      if (i && c.t < ph.captions[i - 1].t) E(`${P}.captions[${i}]`, "captions must be sorted by t");
    });
    if (!ph.captions?.length) W(`${P}.captions`, "add captions — they carry the teaching");

    if (ph.type === "moi") {
      if (!A.VIEWS.includes(ph.view)) E(`${P}.view`, `must be one of ${A.VIEWS}`);
      if (ph.environment && !A.ENVIRONMENTS.includes(ph.environment)) E(`${P}.environment`, `"${ph.environment}" not in ENVIRONMENTS`);
      const actors = ph.actors || [{ id: "athlete", kit: "athlete" }];
      const actorIds = actors.map((a) => a.id);
      actors.forEach((a, i) => {
        if (!a.id) E(`${P}.actors[${i}].id`, "required");
        if (a.kit && !A.KITS.includes(a.kit)) E(`${P}.actors[${i}].kit`, `"${a.kit}" not in KITS`);
        if (a.facing && !["left", "right"].includes(a.facing)) E(`${P}.actors[${i}].facing`, "left|right");
      });
      if (!Array.isArray(ph.keyframes) || ph.keyframes.length < 2) E(`${P}.keyframes`, "need ≥ 2 keyframes");
      const lastT = {};
      (ph.keyframes || []).forEach((k, i) => {
        const K = `${P}.keyframes[${i}]`;
        inT(k.t, `${K}.t`);
        const actor = k.actor || actorIds[0];
        if (!actorIds.includes(actor)) E(`${K}.actor`, `"${actor}" not declared in actors`);
        if (lastT[actor] !== undefined && k.t < lastT[actor]) E(K, "keyframes for an actor must be sorted by t");
        lastT[actor] = k.t;
        if (k.pose && !A.POSE_PRESETS[k.pose]) E(`${K}.pose`, `"${k.pose}" is not a POSE_PRESETS id`);
        if (!k.pose && !k.joints && !k.root) W(K, "keyframe has no pose, joints or root");
        for (const [j, v] of Object.entries(k.joints || {})) {
          if (!A.JOINT_NAMES.includes(j)) E(`${K}.joints.${j}`, "unknown joint");
          if (typeof v !== "number" || Math.abs(v) > 200) E(`${K}.joints.${j}`, "must be a number of degrees");
        }
        if (k.ease && !["linear", "in", "out", "inOut"].includes(k.ease)) E(`${K}.ease`, "linear|in|out|inOut");
      });
      (ph.props || []).forEach((p, i) => {
        if (!A.PROPS.includes(p.type)) E(`${P}.props[${i}].type`, `"${p.type}" not in PROPS`);
        if (p.attach && !A.BODY_TARGETS.includes(p.attach)) E(`${P}.props[${i}].attach`, `"${p.attach}" not in BODY_TARGETS`);
        (p.keyframes || []).forEach((k, j) => inT(k.t, `${P}.props[${i}].keyframes[${j}].t`));
      });
      (ph.forces || []).forEach((f, i) => {
        inRange(f.t, `${P}.forces[${i}].t`);
        if (!A.BODY_TARGETS.includes(f.at)) E(`${P}.forces[${i}].at`, `"${f.at}" not in BODY_TARGETS`);
        if (f.dir === undefined && f.angle === undefined) E(`${P}.forces[${i}]`, "needs dir or angle");
        if (f.dir !== undefined && !A.FORCE_DIRS.includes(f.dir)) E(`${P}.forces[${i}].dir`, `"${f.dir}" not in FORCE_DIRS`);
      });
      (ph.highlights || []).forEach((h, i) => { inRange(h.t, `${P}.highlights[${i}].t`); if (!A.BODY_TARGETS.includes(h.at)) E(`${P}.highlights[${i}].at`, `"${h.at}" not in BODY_TARGETS`); });
      (ph.impacts || []).forEach((h, i) => { inT(h.t, `${P}.impacts[${i}].t`); if (!A.BODY_TARGETS.includes(h.at)) E(`${P}.impacts[${i}].at`, `"${h.at}" not in BODY_TARGETS`); });
      (ph.slowmo || []).forEach((s, i) => { inRange(s.t, `${P}.slowmo[${i}].t`); if (!(s.rate > 0 && s.rate <= 1)) E(`${P}.slowmo[${i}].rate`, "0 < rate ≤ 1"); });
    }
    if (ph.type === "zoom") {
      if (!A.BODY_TARGETS.includes(ph.to)) E(`${P}.to`, `"${ph.to}" not in BODY_TARGETS`);
      if (an.phases[pi - 1]?.type !== "moi") E(P, "zoom must follow a moi phase");
      if (an.phases[pi + 1]?.type !== "closeup") E(P, "zoom must be followed by a closeup phase");
    }
    if (ph.type === "closeup") {
      const sc = A.SCENES[ph.scene];
      if (!sc) return E(`${P}.scene`, `"${ph.scene}" not in SCENES`);
      const anchorOk = (a) => a in sc.anchors;
      (ph.actions || []).forEach((ac, i) => {
        const X = `${P}.actions[${i}]`;
        inT(ac.t, `${X}.t`);
        if (i && ac.t < ph.actions[i - 1].t) E(X, "actions must be sorted by t");
        if (A.SCENE_ACTIONS.includes(ac.do)) {
          if (ac.do !== "camera" || ac.at) { if (!anchorOk(ac.at)) E(`${X}.at`, `"${ac.at}" is not an anchor of ${ph.scene}`); }
          if (ac.do === "camera" && ac.target && !sc.structures[ac.target]) E(`${X}.target`, `"${ac.target}" not in ${ph.scene}`);
          return;
        }
        const st = sc.structures[ac.target];
        if (!st) return E(`${X}.target`, `"${ac.target}" is not a structure of ${ph.scene}`);
        const allowed = A.listStructureActions(st[0]);
        if (!allowed.includes(ac.do)) return E(`${X}.do`, `"${ac.do}" not allowed on ${st[0]} (${allowed.join(", ")})`);
        if (["fracture", "bruise", "stress"].includes(ac.do) && st[0] === "bone" && !anchorOk(ac.at)) E(`${X}.at`, `"${ac.at}" must be an anchor of ${ph.scene}`);
        if (ac.do === "fracture" && !A.FRACTURE_PATTERNS.includes(ac.pattern)) E(`${X}.pattern`, `must be one of ${A.FRACTURE_PATTERNS}`);
        if (ac.do === "tear" && ["ligament", "tendon"].includes(st[0]) && ![1, 2, 3].includes(ac.grade)) E(`${X}.grade`, "1|2|3");
        if (ac.do === "tear" && st[0] === "cartilage" && !A.CARTILAGE_TEARS.includes(ac.pattern)) E(`${X}.pattern`, `must be one of ${A.CARTILAGE_TEARS}`);
        if (ac.do === "strain" && ![1, 2, 3].includes(ac.grade)) E(`${X}.grade`, "1|2|3");
        if (ac.do === "herniate" && !A.HERNIATION_GRADES.includes(ac.grade)) E(`${X}.grade`, `must be one of ${A.HERNIATION_GRADES}`);
        if (ac.do === "separate" && !A.SALTER_HARRIS.includes(ac.grade)) E(`${X}.grade`, `must be one of ${A.SALTER_HARRIS}`);
        if (ac.do === "avulse" && !["from", "to"].includes(ac.end)) E(`${X}.end`, "from|to");
        if (ac.do === "label" && !ac.text) E(`${X}.text`, "label needs text");
        if (ac.do === "move" && !ac.to && ac.dir === undefined) E(X, "move needs `to` (anchor) or `dir` + `amount`");
        if (ac.do === "move" && ac.to && !anchorOk(ac.to)) E(`${X}.to`, `"${ac.to}" is not an anchor of ${ph.scene}`);
        if (ac.do === "scatter" && ac.to && !anchorOk(ac.to)) E(`${X}.to`, `"${ac.to}" is not an anchor of ${ph.scene}`);
        if (typeof ac.at === "string" && !["fracture", "bruise", "stress"].includes(ac.do) && !anchorOk(ac.at)) E(`${X}.at`, `"${ac.at}" is not an anchor of ${ph.scene}`);
        if (typeof ac.at === "number" && (ac.at < 0 || ac.at > 1)) E(`${X}.at`, "numeric `at` must be 0–1");
      });
      if (!ph.actions?.length) E(`${P}.actions`, "closeup needs actions");
    }
    if (ph.type === "micro") {
      const mt = A.MICRO_TISSUES[ph.tissue];
      if (!mt) return E(`${P}.tissue`, `"${ph.tissue}" not in MICRO_TISSUES`);
      let last = -1;
      (ph.stages || []).forEach((s, i) => {
        inT(s.t, `${P}.stages[${i}].t`);
        const idx = mt.stages.indexOf(s.stage);
        if (idx < 0) E(`${P}.stages[${i}].stage`, `"${s.stage}" not a stage of ${ph.tissue} (${mt.stages.join(", ")})`);
        else if (idx < last) W(`${P}.stages[${i}]`, "stage out of natural order");
        last = Math.max(last, idx);
      });
      if (!ph.stages?.length) E(`${P}.stages`, "micro needs stages");
      (ph.timeLabels || []).forEach((l, i) => inT(l.t, `${P}.timeLabels[${i}].t`));
    }
  });
}
