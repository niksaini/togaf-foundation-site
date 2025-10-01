// Refresher with robust images (fallbacks + overlay) + Mock tests

function imgCandidates(primary, fallbacks=[]) { return [primary, ...fallbacks].filter(Boolean); }

const refresherSections = [
  { title: "Exam Snapshot & Strategy", tag: "Start Here", bullets: [
    "Audience: TOGAF® 9.2 Foundation (Part 1). Concept recognition over deep design.",
    "Format: Multiple choice; typical pass mark ≈ 60%; time ≈ 60 minutes; no negative marking.",
    "Strategy: Memorize core anchors (ADM, DABB, Repository, Continuum, Principles).",
    "Eliminate distractors that contradict definitions (e.g., ABB vs SBB).",
    "Timeboxing: ~1–1.5 min per question; mark difficult ones; return later.",
    "Keywords: ‘primarily’, ‘best describes’, ‘objective of Phase X’, ‘holds’, ‘consists of’.",
    "Artifacts (catalog/matrix/diagram) vs Deliverables (Architecture Definition Document, Roadmap, IM Plan).",
    "When unsure, map to ADM: G=compliance; F=migration plan; A=SoAW; H=change mgmt."
  ]},
  { title: "ADM Overview (map)", tag: "ADM", bullets: [
    "Preliminary → A → B → C → D → E → F → G → H; central Requirements Management.",
    "Iteration: around cycle / between phases / within a phase; use partitions for scale.",
    "Aims: A Vision+SoAW; B Business; C IS (Data+App); D Tech; E Opportunities; F Migration; G Governance; H Change."
  ],
    imageUrls: imgCandidates(
      "https://upload.wikimedia.org/wikipedia/commons/1/13/TOGAF_ADM.svg",
      [
        "https://commons.wikimedia.org/wiki/Special:FilePath/TOGAF%20ADM.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/TOGAF_ADM.svg/1024px-TOGAF_ADM.svg.png"
      ]
    ),
    imageCredit: "Wikimedia Commons: TOGAF ADM (license may apply)"
  },
  { title: "Preliminary Phase", tag: "ADM", bullets: [
    "Establish EA capability; define principles; select tools; set up Repository; tailor framework.",
    "Outputs: Principles, EA Charter, governance approach, initial capability target state.",
    "Exam cue: Principles here; SoAW belongs to Phase A."
  ]},
  { title: "Phase A — Architecture Vision", tag: "ADM", bullets: [
    "Scope, stakeholders, value proposition; high-level target; business outcomes; risks.",
    "Produce/approve Statement of Architecture Work (SoAW).",
    "Outputs: Vision, SoAW, stakeholder map, initial requirements."
  ]},
  { title: "Phase B — Business Architecture", tag: "ADM", bullets: [
    "Develop Baseline/Target; perform Gap Analysis; refine requirements.",
    "Artifacts: Capability map, Value Streams, Organization/Actors, Business Services/Processes.",
    "Trace to business outcomes; align with principles/constraints."
  ]},
  { title: "Phase C — Data Architecture", tag: "ADM", bullets: [
    "Baseline/Target for data; stewardship; security class; privacy; lifecycle.",
    "Artifacts: Data Entity catalog, Data Lifecycle, Data Dissemination/Ownership matrices.",
    "Align Data with Business & Applications (CRUD/App↔Data matrices)."
  ]},
  { title: "Phase C — Application Architecture", tag: "ADM", bullets: [
    "Baseline/Target for apps; services, interfaces, integration patterns.",
    "Artifacts: Application Portfolio catalog; Application/Service Communication diagram; Interaction matrices.",
    "Clarify build/buy/reuse decisions (later realized as SBBs)."
  ]},
  { title: "Phase D — Technology Architecture", tag: "ADM", bullets: [
    "Logical/physical tech components; infra services; environments.",
    "Artifacts: Technology Standards catalog; Platform Decomposition; Environment & Platform diagrams.",
    "Non-functionals: availability, perf, scalability; choose standards/profiles."
  ]},
  { title: "Phase E — Opportunities & Solutions", tag: "ADM", bullets: [
    "Consolidate gaps → work packages; outline SBBs; define Transition Architectures.",
    "Produce high-level Roadmap; capture implementation factors & dependencies.",
    "Cue: Transition identification here; IM Plan finalized in Phase F."
  ]},
  { title: "Phase F — Migration Planning", tag: "ADM", bullets: [
    "Prioritize work packages; schedule increments; cost/benefit; dependencies.",
    "Outputs: Implementation & Migration Plan (final), detailed Roadmap.",
    "Cue: ‘Finalize IM Plan’ = Phase F."
  ]},
  { title: "Phase G — Implementation Governance", tag: "ADM", bullets: [
    "Ensure conformance with target; conduct compliance reviews; manage waivers.",
    "Use Architecture Contracts; escalate deviations; update Repository with decisions.",
    "Cue: ‘Compliance reviews’ = Phase G."
  ]},
  { title: "Phase H — Change Management", tag: "ADM", bullets: [
    "Monitor value realization; assess change requests; trigger new cycles.",
    "Minor vs major change routes; keep Architecture Landscape current."
  ]},
  { title: "Requirements Management (central)", tag: "ADM", bullets: [
    "Capture → assess → prioritize → approve/defer → implement; traceability throughout.",
    "Sources: stakeholders, risk/compliance findings, change requests.",
    "Exam cue: It’s continuous and central, not a single phase."
  ]},
  { title: "DABB — Deliverables, Artifacts, Building Blocks", tag: "Core", bullets: [
    "Deliverable: reviewed package (Architecture Definition Document, Roadmap, IM Plan).",
    "Artifact: catalog/matrix/diagram (Application Portfolio, Technology Standards, Data Lifecycle).",
    "ABBs describe capabilities; SBBs describe implementations/products/configurations.",
    "Mnemonic: Artifacts live inside Deliverables; Artifacts describe Building Blocks."
  ],
    imageUrls: imgCandidates(
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/TOGAF_-_Building_Blocks.jpg",
      [
        "https://commons.wikimedia.org/wiki/Special:FilePath/TOGAF%20-%20Building%20Blocks.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/TOGAF_-_Building_Blocks.jpg/1024px-TOGAF_-_Building_Blocks.jpg"
      ]
    ),
    imageCredit: "Wikimedia Commons: TOGAF - Building Blocks (license may apply)"
  },
  { title: "Content Metamodel — Motivation & Business", tag: "Metamodel", bullets: [
    "Motivation: drivers, goals, objectives, requirements, constraints, principles.",
    "Business: capabilities, value streams, services, processes, org/actors, roles.",
    "Trace: Goals ↔ Capabilities ↔ Services/Processes ↔ Measures.",
    "Views: Capability Map; Value Stream; Organization/Actor catalogs."
  ]},
  { title: "Content Metamodel — Data & Application", tag: "Metamodel", bullets: [
    "Data: entities/components, ownership, lifecycle, classification; quality & privacy.",
    "Application: app components, services, interfaces; interactions & dependencies.",
    "Matrices: App↔Data, App↔App, CRUD."
  ]},
  { title: "Content Metamodel — Technology & Realization", tag: "Metamodel", bullets: [
    "Technology: logical/physical components, environments, standards, infra services.",
    "Realization: work packages, projects, contracts, measures, risks, stakeholders.",
    "Standards profile → consistency; Roadmap → projects → IM Plan."
  ]},
  { title: "Repository — What goes where?", tag: "Repository", bullets: [
    "Metamodel (schema); Capability (org model/tools); Architecture Landscape (Strategic/Segment/Capability).",
    "Standards Information Base (SIB): adopted standards/product selections/service standards.",
    "Reference Library: reference models/guides/patterns; Governance Log: decisions/waivers; Requirements & Solutions stores."
  ]},
  { title: "Enterprise Continuum", tag: "Continuum", bullets: [
    "Architecture Continuum (generic → org-specific) + Solutions Continuum (generic → deployed).",
    "Purpose: classify assets, enable reuse, pick starting points (reference models/patterns).",
    "Examples: Foundation → Common Systems → Industry → Organization-specific.",
    "Exam cue: A conceptual classification, not a tool by itself."
  ]},
  { title: "Stakeholder Management", tag: "Technique", bullets: [
    "Identify → analyze/classify → engagement strategy → tailored viewpoints & comms.",
    "Examples: CFO (cost/benefit), CISO (risk/compliance), COO (operability).",
    "Outputs: engagement plan and selected viewpoints."
  ]},
  { title: "Gap Analysis", tag: "Technique", bullets: [
    "Baseline vs Target: ‘carried over’, ‘eliminated’, ‘new’ building blocks.",
    "Decide ABB→SBB realization (build/buy/reuse).",
    "Feeds: work packages, transition architectures, risks/dependencies."
  ],
    imageUrls: imgCandidates(
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/0017_-_GAP-Analyse.png",
      [
        "https://commons.wikimedia.org/wiki/Special:FilePath/0017%20-%20GAP-Analyse.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/0017_-_GAP-Analyse.png/800px-0017_-_GAP-Analyse.png"
      ]
    ),
    imageCredit: "Wikimedia Commons: GAP-Analyse (CC BY-SA)"
  },
  { title: "Migration Planning & Roadmaps", tag: "Technique", bullets: [
    "Inputs: priorities, dependencies, readiness, constraints, benefits/risks.",
    "Outputs: IM Plan (F), refined Roadmap; balance quick wins vs foundations.",
    "Governance tie-in: contracts, checkpoints, change control."
  ]},
  { title: "Governance Essentials", tag: "Governance", bullets: [
    "Architecture Board: standards stewardship, waivers, arbitration.",
    "Compliance reviews & Architecture Contracts enforce conformance.",
    "Waivers: approved exceptions recorded in Governance Log with rationale/timebox."
  ]},
  { title: "Principles — Read/Write", tag: "Principles", bullets: [
    "Template: Name, Statement, Rationale, Implications (incl. costs/ops).",
    "Families: Business, Data, Application, Technology principles (e.g., standards‑based).",
    "Purpose: guide decisions and trade‑offs; influence constraints."
  ]},
  { title: "Views & Viewpoints", tag: "Metamodel", bullets: [
    "Viewpoint = template for concerns/stakeholders/conventions; View = an instance.",
    "Tailor viewpoints per stakeholder; improves exam Qs like ‘which view best addresses…?’"
  ]},
  { title: "Architecture Levels & Partitions", tag: "Practice", bullets: [
    "Levels: Strategic, Segment, Capability; Partition for region/LOB/different methods.",
    "Integration contracts across partitions maintain coherence."
  ]},
  { title: "Interoperability & Non‑Functionals", tag: "Quality", bullets: [
    "Capture across B/C/D; track centrally.",
    "NFRs: availability, performance, security, compliance, operability → drive tech/app choices."
  ]},
  { title: "Risk Management & Readiness", tag: "Quality", bullets: [
    "Risk exposure ≈ Probability × Impact; treat/accept/transfer/avoid.",
    "Transformation readiness: sponsorship, skills, funding, governance maturity → schedule accordingly."
  ]},
  { title: "Common Exam Pitfalls", tag: "Exam", bullets: [
    "Artifacts vs Deliverables confusion; wrong phase mapping (G=compliance, F=IM Plan, A=SoAW).",
    "Thinking Continuum is a tool; forgetting Requirements Mgmt is continuous."
  ]}
];

const BANK = [
  { id:"q001", topic:"ADM", stem:"Which phase produces the Statement of Architecture Work?", choices:[
    {text:"Preliminary",correct:false},{text:"Phase A: Architecture Vision",correct:true},{text:"Phase E",correct:false},{text:"Phase G",correct:false}
  ], explanation:"Phase A creates and seeks approval for the SoAW."},
  { id:"q002", topic:"ADM", stem:"Which phase completes the Implementation & Migration Plan?", choices:[
    {text:"Phase E",correct:false},{text:"Phase F",correct:true},{text:"Phase G",correct:false},{text:"Phase H",correct:false}
  ], explanation:"Phase F finalizes the IM Plan."},
  { id:"q003", topic:"ADM", stem:"Requirements Management is:", choices:[
    {text:"A single phase",correct:false},{text:"Central & continuous",correct:true},{text:"Only migration-related",correct:false},{text:"Optional",correct:false}
  ], explanation:"It governs requirements throughout the ADM."},
  { id:"q004", topic:"DABB", stem:"An Application Portfolio catalog is a(n):", choices:[
    {text:"Deliverable",correct:false},{text:"Artifact",correct:true},{text:"ABB",correct:false},{text:"SBB",correct:false}
  ], explanation:"Catalogs are artifacts."},
  { id:"q005", topic:"Repository", stem:"Which holds adopted standards?", choices:[
    {text:"Reference Library",correct:false},{text:"Standards Information Base",correct:true},{text:"Solutions Landscape",correct:false},{text:"Governance Log",correct:false}
  ], explanation:"SIB contains standards and product selections."},
  { id:"q006", topic:"Continuum", stem:"The Enterprise Continuum consists of:", choices:[
    {text:"Arch Landscape + Solutions Landscape",correct:false},{text:"Architecture Continuum + Solutions Continuum",correct:true},{text:"Reference + SIB",correct:false},{text:"Strategic + Segment",correct:false}
  ], explanation:"Together they classify architectures and solutions."},
  { id:"q007", topic:"Governance", stem:"Compliance reviews are in:", choices:[
    {text:"Phase F",correct:false},{text:"Phase G",correct:true},{text:"Phase H",correct:false},{text:"Preliminary",correct:false}
  ], explanation:"Phase G = Implementation Governance."}
];

(function injectModalStyles(){
  const css = `
  .img-modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); display: none; align-items: center; justify-content: center; z-index: 9999; }
  .img-modal-overlay.open { display: flex; }
  .img-modal-content { max-width: 92vw; max-height: 90vh; position: relative; }
  .img-modal-content img { width: 100%; height: auto; border-radius: 12px; border: 1px solid #1e2a52; background: #0b1020; }
  .img-modal-close { position: absolute; top: -10px; right: -10px; background: #222a4d; color: #fff; border: 1px solid #415aa6; border-radius: 999px; width: 36px; height: 36px; display: grid; place-items: center; font-size: 18px; cursor: pointer; }
  .img-modal-caption { color: #aeb7d5; margin-top: 8px; font-size: 12px; text-align: center; }
  .refresher-img { cursor: zoom-in; }
  `;
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);
})();

const ImgModal = (function(){
  let overlay, content, img, closeBtn, caption;
  function ensure(){
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.className = 'img-modal-overlay';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');

    content = document.createElement('div');
    content.className = 'img-modal-content';

    img = document.createElement('img');
    img.alt = '';

    closeBtn = document.createElement('button');
    closeBtn.className = 'img-modal-close';
    closeBtn.setAttribute('aria-label','Close image');
    closeBtn.innerHTML = '&times;';

    caption = document.createElement('div');
    caption.className = 'img-modal-caption';

    content.appendChild(img);
    content.appendChild(closeBtn);
    content.appendChild(caption);
    overlay.appendChild(content);
    document.body.appendChild(overlay);

    function close(){ overlay.classList.remove('open'); document.body.style.removeProperty('overflow'); }
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e)=>{ if(e.target===overlay) close(); });
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && overlay.classList.contains('open')) close(); });

    overlay.close = close;
  }
  function open(src, alt, credit){
    ensure();
    img.src = src;
    img.alt = alt || '';
    caption.textContent = credit || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  return { open };
})();

function attachImageFallback(imgEl) {
  const listAttr = imgEl.getAttribute('data-src-list');
  if (!listAttr) return;
  let list;
  try { list = JSON.parse(listAttr); } catch { list = [imgEl.src]; }
  let ix = 0;
  function tryNext() {
    if (ix >= list.length) { imgEl.closest('figure')?.remove(); return; }
    imgEl.src = list[ix++];
  }
  imgEl.addEventListener('error', tryNext);
}

const TEST_SEEDS = Array.from({length:10}, (_,i)=> i+1);
function rng(seed) { return function () { let t = (seed += 0x6d2b79f5); t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function sample(arr, k, r) { const a = arr.slice(); for (let i=a.length-1;i>0;i--){ const j=Math.floor(r()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a.slice(0,k); }
const TESTS = TEST_SEEDS.map(seed => ({ id: seed, name: `Mock Test #${seed}`, questions: sample(BANK, Math.min(40, BANK.length), rng(seed)) }));

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
tabs.forEach(btn=>btn.addEventListener('click', ()=>{
  tabs.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  tabContents.forEach(c=>c.classList.remove('active'));
  document.getElementById(btn.dataset.tab).classList.add('active');
}));

const refresherWrap = document.getElementById('refresher-sections');
if (refresherWrap) {
  refresherSections.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';
    const kicker = `<div class="kicker">${s.tag}</div>`;
    const title = `<h3>${s.title}</h3>`;
    let media = '';
    if (s.imageUrls && s.imageUrls.length) {
      const listJson = JSON.stringify(s.imageUrls).replace(/"/g,'&quot;');
      const safeTitle = s.title.replace(/`/g,'\`');
      media = `<figure style="margin:0 0 10px 0;">
        <img class="refresher-img" src="${s.imageUrls[0]}" data-src-list="${listJson}" alt="${safeTitle}" style="width:100%;border-radius:12px;border:1px solid #1e2a52;max-height:280px;object-fit:contain;background:#0b1020;" data-caption="${s.imageCredit||''}"/>
        <figcaption style="color:#aeb7d5;font-size:12px;margin-top:6px;">${s.imageCredit||''}</figcaption>
      </figure>`;
    }
    const ul = document.createElement('ul');
    s.bullets.forEach(b => { const li = document.createElement('li'); li.textContent = b; ul.appendChild(li); });
    card.innerHTML = kicker + title + media;
    card.appendChild(ul);
    refresherWrap.appendChild(card);
  });

  refresherWrap.querySelectorAll('img.refresher-img').forEach(img => {
    attachImageFallback(img);
  });

  refresherWrap.addEventListener('click', (e)=>{
    const img = e.target.closest('img.refresher-img');
    if (!img) return;
    const listAttr = img.getAttribute('data-src-list');
    let full = img.src;
    if (listAttr) {
      try {
        const list = JSON.parse(listAttr);
        full = list[0] || img.src;
      } catch {}
    }
    const caption = img.getAttribute('data-caption') || '';
    ImgModal.open(full, img.alt, caption);
  });
}

const PASS_MARK = 0.60;
const DURATION_MINUTES = 60;
const selectEl = document.getElementById('test-select');
if (selectEl) { TESTS.forEach(t => { const opt = document.createElement('option'); opt.value = t.id; opt.textContent = t.name; selectEl.appendChild(opt); }); }
const startBtn = document.getElementById('start-btn');
const testArea = document.getElementById('test-area');
const qContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const progress = document.getElementById('q-progress');
const results = document.getElementById('results');
const timerBox = document.getElementById('timer');
const timeLeftEl = document.getElementById('time-left');

let currentTest = null, idx = 0, answers = [], remainingSeconds = DURATION_MINUTES * 60, tickInterval = null, submitted = false;
function formatTime(s){ const m = String(Math.floor(s/60)).padStart(2,'0'); const ss = String(s%60).padStart(2,'0'); return `${m}:${ss}`; }
function startTimer(){ remainingSeconds=DURATION_MINUTES*60; if(timeLeftEl) timeLeftEl.textContent=formatTime(remainingSeconds); if(timerBox) timerBox.classList.remove('hidden'); if(tickInterval) clearInterval(tickInterval); tickInterval=setInterval(()=>{ if(remainingSeconds<=0){ clearInterval(tickInterval); submit(); return;} remainingSeconds--; if(timeLeftEl) timeLeftEl.textContent=formatTime(remainingSeconds); },1000); }
function renderQuestion(){ const q=currentTest.questions[idx]; if(progress) progress.textContent=`Question ${idx+1} / ${currentTest.questions.length}`; if(qContainer) qContainer.innerHTML=''; const wrap=document.createElement('div'); wrap.className='question'; const h4=document.createElement('h4'); h4.textContent=q.stem; wrap.appendChild(h4); const ul=document.createElement('ul'); ul.className='choices'; q.choices.forEach((c,ci)=>{ const li=document.createElement('li'); li.innerHTML=`<label><input type="radio" name="q${idx}" value="${ci}" ${(answers[idx]===ci)?'checked':''}> ${c.text}</label>`; ul.appendChild(li); }); ul.addEventListener('change',e=>{ answers[idx]=Number(e.target.value); }); wrap.appendChild(ul); if(qContainer) qContainer.appendChild(wrap); if(prevBtn) prevBtn.disabled = idx===0; if(nextBtn) nextBtn.disabled = idx===currentTest.questions.length-1; }
function submit(){ if(submitted) return; submitted=true; let correct=0; const feedback=[]; currentTest.questions.forEach((q,i)=>{ const sel=answers[i]; const correctIdx=q.choices.findIndex(c=>c.correct); const isCorrect=sel===correctIdx; if(isCorrect) correct++; feedback.push({q,selected:sel,correctIdx,isCorrect}); }); const total=currentTest.questions.length; const pct= total? (correct/total):0; const pass=pct>=PASS_MARK; if(results){ results.innerHTML=`<div class="result ${pass? 'good':'bad'}"><h3>Result: ${(pct*100).toFixed(0)}% (${correct}/${total}) — ${pass? 'PASS' : 'FAIL'}</h3><p>Pass mark: 60%. Time limit: 60 minutes.</p></div>`; const incorrect=feedback.filter(f=>!f.isCorrect); const correctOnes=feedback.filter(f=>f.isCorrect); const section=document.createElement('div'); const head=document.createElement('h3'); head.textContent=`Review — focus on incorrect (${incorrect.length})`; section.appendChild(head); [...incorrect,...correctOnes].forEach(f=>{ const div=document.createElement('div'); div.className='result ' + (f.isCorrect?'good':'bad'); const your=(f.selected!=null)? f.q.choices[f.selected]?.text : '(no answer)'; const right=f.q.choices[f.correctIdx].text; div.innerHTML=`<p><strong>Q:</strong> ${f.q.stem}</p><p><strong>Your answer:</strong> ${your}</p><p><strong>Correct:</strong> ${right}</p><p><em>${f.q.explanation}</em></p>`; section.appendChild(div); }); results.appendChild(section); results.classList.remove('hidden'); } if(testArea) testArea.classList.add('hidden'); if(timerBox) timerBox.classList.add('hidden'); if(tickInterval) clearInterval(tickInterval); }
if (startBtn) startBtn.addEventListener('click', ()=>{ const id=Number(selectEl.value); currentTest=TESTS.find(t=>t.id===id); idx=0; answers=Array(currentTest.questions.length).fill(null); if(results) results.classList.add('hidden'); if(testArea) testArea.classList.remove('hidden'); submitted=false; renderQuestion(); startTimer(); });
if (prevBtn) prevBtn.addEventListener('click', ()=>{ if(idx>0){ idx--; renderQuestion(); }});
if (nextBtn) nextBtn.addEventListener('click', ()=>{ if(idx<currentTest.questions.length-1){ idx++; renderQuestion(); }});
if (submitBtn) submitBtn.addEventListener('click', submit);
