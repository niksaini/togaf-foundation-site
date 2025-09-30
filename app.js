// Refresher + Mock Tests logic

const refresherSections = [
  { title: "ADM at a glance", tag: "ADM", bullets: [
    "Preliminary → A → B → C → D → E → F → G → H; Requirements Management is central and continuous.",
    "A: scope & stakeholders, Architecture Vision, Statement of Architecture Work.",
    "B/C/D: develop Baseline & Target, perform Gap Analysis, select standards; produce Architecture Definition Document.",
    "E: consolidate gaps into work packages; create Transition Architectures & Roadmap.",
    "F: prioritize & schedule migration; finalize Implementation & Migration Plan.",
    "G: govern implementation; compliance reviews & Architecture Contract.",
    "H: manage change, value realization, continuous improvement."
  ]},
  { title: "Deliverables, Artifacts, Building Blocks (DABB)", tag: "DABB", bullets: [
    "Deliverable: formally reviewed output (e.g., Architecture Definition Document, Roadmap).",
    "Artifact: catalogs, matrices, diagrams (e.g., Application Portfolio, Technology Standards).",
    "ABBs describe capabilities; SBBs describe implementations/products.",
    "Artifacts live inside deliverables; artifacts describe building blocks."
  ]},
  { title: "Repository & Enterprise Continuum", tag: "Repository", bullets: [
    "Repository parts: Metamodel, Capability, Architecture Landscape, Standards Info Base, Reference Library, Governance Log, Requirements, Solutions Landscape.",
    "Enterprise Continuum = Architecture Continuum (generic→specific) + Solutions Continuum (generic solutions→deployed).",
    "Purpose: classification, reuse, and common language for assets."
  ]},
  { title: "Content Metamodel & Views", tag: "Metamodel", bullets: [
    "Motivation → Business (capabilities, value streams) → IS (data, apps, services) → Technology → Realization (work packages, contracts, standards).",
    "Views/Viewpoints: tailor representations to stakeholder concerns."
  ]},
  { title: "Key techniques likely to appear", tag: "Techniques", bullets: [
    "Stakeholder management: identify → classify → engagement strategy → tailored views.",
    "Gap analysis: carried over / eliminated / new building blocks; realization decisions.",
    "Migration planning: implementation factors, dependencies, value vs risk.",
    "Capability-based planning; Transformation Readiness; Risk mgmt; Interoperability."
  ]},
  { title: "Governance essentials", tag: "Governance", bullets: [
    "Architecture Board steers; governance includes standards, compliance reviews, waivers, escalation.",
    "Architecture Contracts: agreements between architecture and delivery."
  ]},
  { title: "Principles", tag: "Principles", bullets: [
    "Each principle: Name, Statement, Rationale, Implications.",
    "Families: Business, Data, Application, Technology principles."
  ]}
];
const BANK = [
  {
    "id": "q001",
    "topic": "ADM",
    "stem": "Which phase produces the Statement of Architecture Work?",
    "choices": [
      {
        "text": "Preliminary",
        "correct": false
      },
      {
        "text": "Phase A: Architecture Vision",
        "correct": true
      },
      {
        "text": "Phase E",
        "correct": false
      },
      {
        "text": "Phase G",
        "correct": false
      }
    ],
    "explanation": "Phase A scopes the initiative and creates the Statement of Architecture Work."
  },
  {
    "id": "q002",
    "topic": "ADM",
    "stem": "Which phase completes the Implementation & Migration Plan?",
    "choices": [
      {
        "text": "Phase E",
        "correct": false
      },
      {
        "text": "Phase F",
        "correct": true
      },
      {
        "text": "Phase G",
        "correct": false
      },
      {
        "text": "Phase H",
        "correct": false
      }
    ],
    "explanation": "Phase F prioritizes and finalizes the plan."
  },
  {
    "id": "q003",
    "topic": "ADM",
    "stem": "Which is true about Requirements Management?",
    "choices": [
      {
        "text": "Only in Phase A",
        "correct": false
      },
      {
        "text": "Central, continuous across all phases",
        "correct": true
      },
      {
        "text": "Only in migration",
        "correct": false
      },
      {
        "text": "Optional",
        "correct": false
      }
    ],
    "explanation": "Requirements Management is a central, ongoing process in the ADM."
  },
  {
    "id": "q004",
    "topic": "ADM",
    "stem": "Which output typically contains catalogs, matrices, and diagrams for the target state?",
    "choices": [
      {
        "text": "Architecture Vision",
        "correct": false
      },
      {
        "text": "Architecture Definition Document",
        "correct": true
      },
      {
        "text": "Architecture Contract",
        "correct": false
      },
      {
        "text": "Migration Plan",
        "correct": false
      }
    ],
    "explanation": "The Architecture Definition Document compiles the detailed description of architectures."
  },
  {
    "id": "q005",
    "topic": "ADM",
    "stem": "Which phase governs implementation and conducts compliance reviews?",
    "choices": [
      {
        "text": "Phase F",
        "correct": false
      },
      {
        "text": "Phase G",
        "correct": true
      },
      {
        "text": "Phase H",
        "correct": false
      },
      {
        "text": "Preliminary",
        "correct": false
      }
    ],
    "explanation": "Phase G is Implementation Governance with compliance reviews."
  },
  {
    "id": "q006",
    "topic": "ADM",
    "stem": "Which phase manages change and value realization?",
    "choices": [
      {
        "text": "Phase D",
        "correct": false
      },
      {
        "text": "Phase G",
        "correct": false
      },
      {
        "text": "Phase H",
        "correct": true
      },
      {
        "text": "Phase E",
        "correct": false
      }
    ],
    "explanation": "Phase H focuses on change management and value."
  },
  {
    "id": "q007",
    "topic": "ADM",
    "stem": "Which is an objective of Phase E?",
    "choices": [
      {
        "text": "Define Architecture Principles",
        "correct": false
      },
      {
        "text": "Identify work packages and Transition Architectures",
        "correct": true
      },
      {
        "text": "Sign off Architecture Contract",
        "correct": false
      },
      {
        "text": "Operate solutions",
        "correct": false
      }
    ],
    "explanation": "Phase E consolidates gaps into work packages and transition architectures."
  },
  {
    "id": "q008",
    "topic": "DABB",
    "stem": "An Application Portfolio catalog is a(n):",
    "choices": [
      {
        "text": "Deliverable",
        "correct": false
      },
      {
        "text": "Artifact",
        "correct": true
      },
      {
        "text": "ABB",
        "correct": false
      },
      {
        "text": "SBB",
        "correct": false
      }
    ],
    "explanation": "Catalogs are artifacts."
  },
  {
    "id": "q009",
    "topic": "DABB",
    "stem": "ABBs describe ___ while SBBs describe ___.",
    "choices": [
      {
        "text": "solutions; capabilities",
        "correct": false
      },
      {
        "text": "capabilities; implementations",
        "correct": true
      },
      {
        "text": "principles; policies",
        "correct": false
      },
      {
        "text": "roadmaps; standards",
        "correct": false
      }
    ],
    "explanation": "ABBs focus on capabilities; SBBs are implementations/products."
  },
  {
    "id": "q010",
    "topic": "Repository",
    "stem": "Which holds adopted standards for compliance?",
    "choices": [
      {
        "text": "Reference Library",
        "correct": false
      },
      {
        "text": "Standards Information Base",
        "correct": true
      },
      {
        "text": "Solutions Landscape",
        "correct": false
      },
      {
        "text": "Governance Log",
        "correct": false
      }
    ],
    "explanation": "The Standards Information Base contains standards and product selections."
  },
  {
    "id": "q011",
    "topic": "Repository",
    "stem": "Enterprise Continuum consists of:",
    "choices": [
      {
        "text": "Architecture Landscape + Solutions Landscape",
        "correct": false
      },
      {
        "text": "Architecture Continuum + Solutions Continuum",
        "correct": true
      },
      {
        "text": "Reference Library + SIB",
        "correct": false
      },
      {
        "text": "Strategic + Segment architectures",
        "correct": false
      }
    ],
    "explanation": "Architecture Continuum and Solutions Continuum together form the Enterprise Continuum."
  },
  {
    "id": "q012",
    "topic": "Repository",
    "stem": "Which Repository part records decisions/waivers from reviews?",
    "choices": [
      {
        "text": "Governance Log",
        "correct": true
      },
      {
        "text": "Metamodel",
        "correct": false
      },
      {
        "text": "Reference Library",
        "correct": false
      },
      {
        "text": "Capability",
        "correct": false
      }
    ],
    "explanation": "Governance log captures approvals, waivers, and decisions."
  },
  {
    "id": "q013",
    "topic": "Metamodel",
    "stem": "Which is a Business layer concept?",
    "choices": [
      {
        "text": "Data Entity",
        "correct": false
      },
      {
        "text": "Business Capability",
        "correct": true
      },
      {
        "text": "Logical Technology Component",
        "correct": false
      },
      {
        "text": "IS Service",
        "correct": false
      }
    ],
    "explanation": "Business layer includes capabilities, value streams, processes, org."
  },
  {
    "id": "q014",
    "topic": "Metamodel",
    "stem": "A viewpoint is best described as:",
    "choices": [
      {
        "text": "A template for stakeholder concerns and views",
        "correct": true
      },
      {
        "text": "A repository of artifacts",
        "correct": false
      },
      {
        "text": "A standard",
        "correct": false
      },
      {
        "text": "A building block catalog",
        "correct": false
      }
    ],
    "explanation": "A viewpoint defines conventions for constructing views for specific concerns."
  },
  {
    "id": "q015",
    "topic": "Techniques",
    "stem": "Stakeholder management typical second step after identify is to:",
    "choices": [
      {
        "text": "Classify and assess stakeholders",
        "correct": true
      },
      {
        "text": "Draft the Contract",
        "correct": false
      },
      {
        "text": "Do compliance review",
        "correct": false
      },
      {
        "text": "Define SBBs",
        "correct": false
      }
    ],
    "explanation": "Identify \u2192 classify/assess \u2192 engagement approach \u2192 tailor deliverables."
  },
  {
    "id": "q016",
    "topic": "Techniques",
    "stem": "Gap analysis highlights:",
    "choices": [
      {
        "text": "Only new components",
        "correct": false
      },
      {
        "text": "Carried over, eliminated, and new building blocks",
        "correct": true
      },
      {
        "text": "Principles only",
        "correct": false
      },
      {
        "text": "Budgets",
        "correct": false
      }
    ],
    "explanation": "Gap analysis categorizes BBs and informs roadmap."
  },
  {
    "id": "q017",
    "topic": "Governance",
    "stem": "Which body typically steers EA and approves standards?",
    "choices": [
      {
        "text": "PMO",
        "correct": false
      },
      {
        "text": "Architecture Board",
        "correct": true
      },
      {
        "text": "Change Advisory Board",
        "correct": false
      },
      {
        "text": "Steering Committee",
        "correct": false
      }
    ],
    "explanation": "Architecture Board provides governance for EA."
  },
  {
    "id": "q018",
    "topic": "Governance",
    "stem": "What is an Architecture Contract?",
    "choices": [
      {
        "text": "Procurement invoice",
        "correct": false
      },
      {
        "text": "Agreement defining conformance obligations",
        "correct": true
      },
      {
        "text": "Jira workflow",
        "correct": false
      },
      {
        "text": "Legal NDA",
        "correct": false
      }
    ],
    "explanation": "It formalizes conformance between architecture function and implementation."
  },
  {
    "id": "q019",
    "topic": "Principles",
    "stem": "Each principle includes:",
    "choices": [
      {
        "text": "Name + Diagram only",
        "correct": false
      },
      {
        "text": "Name, Statement, Rationale, Implications",
        "correct": true
      },
      {
        "text": "Only Statement",
        "correct": false
      },
      {
        "text": "Rationale + Policy",
        "correct": false
      }
    ],
    "explanation": "Those four elements are standard across principles."
  },
  {
    "id": "q020",
    "topic": "Principles",
    "stem": "Data is shared, Data is accessible are examples of:",
    "choices": [
      {
        "text": "Business principles",
        "correct": false
      },
      {
        "text": "Data principles",
        "correct": true
      },
      {
        "text": "Application principles",
        "correct": false
      },
      {
        "text": "Technology principles",
        "correct": false
      }
    ],
    "explanation": "Examples of Data principles."
  },
  {
    "id": "q021",
    "topic": "ADM",
    "stem": "Which step usually precedes developing Baseline/Target in B/C/D?",
    "choices": [
      {
        "text": "Gap Analysis",
        "correct": false
      },
      {
        "text": "Select reference models/viewpoints/tools",
        "correct": true
      },
      {
        "text": "Compliance review",
        "correct": false
      },
      {
        "text": "Migration plan",
        "correct": false
      }
    ],
    "explanation": "Typically select reference models and viewpoints, then Baseline/Target, then Gap Analysis."
  },
  {
    "id": "q022",
    "topic": "ADM",
    "stem": "Which document requests approval to proceed with architecture work?",
    "choices": [
      {
        "text": "Architecture Vision Document",
        "correct": false
      },
      {
        "text": "Statement of Architecture Work",
        "correct": true
      },
      {
        "text": "Architecture Requirements Spec",
        "correct": false
      },
      {
        "text": "Architecture Roadmap",
        "correct": false
      }
    ],
    "explanation": "The SoAW defines scope, constraints, and approach for approval."
  },
  {
    "id": "q023",
    "topic": "ADM",
    "stem": "Which artifact shows relationships (e.g., app \u2194 data)?",
    "choices": [
      {
        "text": "Catalog",
        "correct": false
      },
      {
        "text": "Matrix",
        "correct": true
      },
      {
        "text": "Diagram",
        "correct": false
      },
      {
        "text": "Principle table",
        "correct": false
      }
    ],
    "explanation": "Matrices show relationships between elements."
  },
  {
    "id": "q024",
    "topic": "ADM",
    "stem": "Which diagram type is common in Phase B?",
    "choices": [
      {
        "text": "Value Stream or Capability Map",
        "correct": true
      },
      {
        "text": "Server Rack Diagram",
        "correct": false
      },
      {
        "text": "Network routing table",
        "correct": false
      },
      {
        "text": "Activity Log",
        "correct": false
      }
    ],
    "explanation": "Business architecture often uses capability maps/value streams."
  },
  {
    "id": "q025",
    "topic": "Metamodel",
    "stem": "Which belongs to Technology layer?",
    "choices": [
      {
        "text": "Logical Technology Component",
        "correct": true
      },
      {
        "text": "Business Process",
        "correct": false
      },
      {
        "text": "Data Entity",
        "correct": false
      },
      {
        "text": "Stakeholder",
        "correct": false
      }
    ],
    "explanation": "LTC is in Technology architecture."
  },
  {
    "id": "q026",
    "topic": "Repository",
    "stem": "Purpose of Reference Library is to:",
    "choices": [
      {
        "text": "Store waivers",
        "correct": false
      },
      {
        "text": "Store reusable reference materials/models",
        "correct": true
      },
      {
        "text": "Store running solutions",
        "correct": false
      },
      {
        "text": "Store financials",
        "correct": false
      }
    ],
    "explanation": "Reference Library holds reference models and guidance."
  },
  {
    "id": "q027",
    "topic": "Techniques",
    "stem": "In risk management, the typical formula for risk exposure is:",
    "choices": [
      {
        "text": "Probability \u00d7 Impact",
        "correct": true
      },
      {
        "text": "Impact \u2212 Probability",
        "correct": false
      },
      {
        "text": "Probability \u00f7 Impact",
        "correct": false
      },
      {
        "text": "Likelihood only",
        "correct": false
      }
    ],
    "explanation": "Risk exposure ~ probability \u00d7 impact."
  },
  {
    "id": "q028",
    "topic": "Governance",
    "stem": "Compliance reviews typically occur in:",
    "choices": [
      {
        "text": "Phase G",
        "correct": true
      },
      {
        "text": "Phase B",
        "correct": false
      },
      {
        "text": "Phase A",
        "correct": false
      },
      {
        "text": "Phase H",
        "correct": false
      }
    ],
    "explanation": "Implementation governance in Phase G includes compliance reviews."
  },
  {
    "id": "q029",
    "topic": "Principles",
    "stem": "Implications usually capture:",
    "choices": [
      {
        "text": "Why the principle exists",
        "correct": false
      },
      {
        "text": "Operational consequences and costs",
        "correct": true
      },
      {
        "text": "The visual design",
        "correct": false
      },
      {
        "text": "Stakeholder list",
        "correct": false
      }
    ],
    "explanation": "Implications discuss what it means to adopt the principle."
  },
  {
    "id": "q030",
    "topic": "ADM",
    "stem": "Which activities are part of Preliminary Phase?",
    "choices": [
      {
        "text": "Establish EA capability & principles",
        "correct": true
      },
      {
        "text": "Define Transition Architectures",
        "correct": false
      },
      {
        "text": "Develop Technology baseline",
        "correct": false
      },
      {
        "text": "Do compliance reviews",
        "correct": false
      }
    ],
    "explanation": "Preliminary sets up the EA capability and agrees principles."
  },
  {
    "id": "q031",
    "topic": "ADM",
    "stem": "Which is an output of Phase A?",
    "choices": [
      {
        "text": "Architecture Roadmap",
        "correct": false
      },
      {
        "text": "Architecture Vision and SoAW",
        "correct": true
      },
      {
        "text": "Detailed Data Model",
        "correct": false
      },
      {
        "text": "Operations Handbook",
        "correct": false
      }
    ],
    "explanation": "Phase A develops Architecture Vision and the SoAW."
  },
  {
    "id": "q032",
    "topic": "ADM",
    "stem": "Which is NOT typical of Phase F?",
    "choices": [
      {
        "text": "Prioritize work packages",
        "correct": false
      },
      {
        "text": "Perform detailed design of servers",
        "correct": true
      },
      {
        "text": "Confirm migration plan",
        "correct": false
      },
      {
        "text": "Create Implementation & Migration Plan",
        "correct": false
      }
    ],
    "explanation": "Detailed design is outside Phase F scope."
  },
  {
    "id": "q033",
    "topic": "DABB",
    "stem": "A firewall appliance is best categorized as:",
    "choices": [
      {
        "text": "ABB",
        "correct": false
      },
      {
        "text": "SBB",
        "correct": true
      },
      {
        "text": "Artifact",
        "correct": false
      },
      {
        "text": "Deliverable",
        "correct": false
      }
    ],
    "explanation": "It's an implemented solution building block."
  },
  {
    "id": "q034",
    "topic": "DABB",
    "stem": "A capability map is a(n):",
    "choices": [
      {
        "text": "Artifact",
        "correct": true
      },
      {
        "text": "SBB",
        "correct": false
      },
      {
        "text": "Deliverable",
        "correct": false
      },
      {
        "text": "Contract",
        "correct": false
      }
    ],
    "explanation": "It's an artifact describing business capabilities."
  },
  {
    "id": "q035",
    "topic": "Repository",
    "stem": "The Solutions Landscape primarily captures:",
    "choices": [
      {
        "text": "Abstract principles",
        "correct": false
      },
      {
        "text": "Deployed solutions and their configurations",
        "correct": true
      },
      {
        "text": "Team roles",
        "correct": false
      },
      {
        "text": "Financial KPIs",
        "correct": false
      }
    ],
    "explanation": "It reflects deployed or planned solutions."
  },
  {
    "id": "q036",
    "topic": "Metamodel",
    "stem": "Information System services relate primarily to:",
    "choices": [
      {
        "text": "Business layer",
        "correct": false
      },
      {
        "text": "IS (Data/Application) layer",
        "correct": true
      },
      {
        "text": "Technology layer",
        "correct": false
      },
      {
        "text": "Motivation layer",
        "correct": false
      }
    ],
    "explanation": "IS layer includes data, application, and services."
  },
  {
    "id": "q037",
    "topic": "Techniques",
    "stem": "Interoperability requirements are commonly identified in:",
    "choices": [
      {
        "text": "Phase B/C/D and Requirements Management",
        "correct": true
      },
      {
        "text": "Only Phase H",
        "correct": false
      },
      {
        "text": "Only Phase F",
        "correct": false
      },
      {
        "text": "Only Preliminary",
        "correct": false
      }
    ],
    "explanation": "They appear through B/C/D and get tracked centrally."
  },
  {
    "id": "q038",
    "topic": "Governance",
    "stem": "A waiver is:",
    "choices": [
      {
        "text": "A violation with no approval",
        "correct": false
      },
      {
        "text": "An approved exception to a standard",
        "correct": true
      },
      {
        "text": "A budget overrun",
        "correct": false
      },
      {
        "text": "A risk event",
        "correct": false
      }
    ],
    "explanation": "Waivers are approved exceptions tracked in governance."
  },
  {
    "id": "q039",
    "topic": "Principles",
    "stem": "Technology independence is an example of:",
    "choices": [
      {
        "text": "Business principle",
        "correct": false
      },
      {
        "text": "Application principle",
        "correct": true
      },
      {
        "text": "Data principle",
        "correct": false
      },
      {
        "text": "Technology principle",
        "correct": false
      }
    ],
    "explanation": "Often framed as an Application principle."
  },
  {
    "id": "q040",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 40)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q041",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 41)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q042",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 42)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q043",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 43)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q044",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 44)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q045",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 45)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q046",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 46)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q047",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 47)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q048",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 48)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q049",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 49)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q050",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 50)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q051",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 51)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q052",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 52)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q053",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 53)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q054",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 54)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q055",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 55)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q056",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 56)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q057",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 57)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q058",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 58)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q059",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 59)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q060",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 60)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q061",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 61)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q062",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 62)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q063",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 63)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q064",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 64)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q065",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 65)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q066",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 66)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q067",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 67)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q068",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 68)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q069",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 69)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q070",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 70)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q071",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 71)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  },
  {
    "id": "q072",
    "topic": "ADM",
    "stem": "In ADM iteration, which statement is true? (variant 72)",
    "choices": [
      {
        "text": "ADM supports iteration across phases",
        "correct": true
      },
      {
        "text": "ADM is strictly linear",
        "correct": false
      },
      {
        "text": "Iteration only in H",
        "correct": false
      },
      {
        "text": "Iteration only in A",
        "correct": false
      }
    ],
    "explanation": "ADM supports iteration: around the cycle, between phases, or within a phase."
  }
];

const PASS_MARK = 0.60;
const DURATION_MINUTES = 60;

// Generate 10 seeded tests (each is a shuffled subset up to 40 Q without replacement)
const TEST_SEEDS = Array.from({length:10}, (_,i)=> i+1);
function rng(seed) {
  // mulberry32
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function sampleWithoutReplacement(arr, k, r) {
  const a = arr.slice();
  for (let i=a.length-1;i>0;i--) {
    const j = Math.floor(r()* (i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, k);
}

const TESTS = TEST_SEEDS.map(seed => ({ id: seed, name: `Mock Test #${seed}`, questions: sampleWithoutReplacement(BANK, Math.min(40, BANK.length), rng(seed)) }));

// UI wiring
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
tabs.forEach(btn=>btn.addEventListener('click', ()=>{
  tabs.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  tabContents.forEach(c=>c.classList.remove('active'));
  document.getElementById(btn.dataset.tab).classList.add('active');
}));

// Render refresher
const refresherWrap = document.getElementById('refresher-sections');
refresherSections.forEach(s => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<div class="kicker">${s.tag}</div><h3>${s.title}</h3>`;
  const ul = document.createElement('ul');
  s.bullets.forEach(b => { const li = document.createElement('li'); li.textContent = b; ul.appendChild(li); });
  card.appendChild(ul);
  refresherWrap.appendChild(card);
});

// Tests dropdown
const selectEl = document.getElementById('test-select');
TESTS.forEach(t => {
  const opt = document.createElement('option');
  opt.value = t.id; opt.textContent = t.name;
  selectEl.appendChild(opt);
});

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

let currentTest = null;
let idx = 0;
let answers = [];
let remainingSeconds = DURATION_MINUTES * 60;
let tickInterval = null;
let submitted = false;

function formatTime(s) {
  const m = Math.floor(s/60).toString().padStart(2,'0');
  const ss = (s%60).toString().padStart(2,'0');
  return `${m}:${ss}`;
}

function startTimer() {
  remainingSeconds = DURATION_MINUTES * 60;
  timeLeftEl.textContent = formatTime(remainingSeconds);
  timerBox.classList.remove('hidden');
  tickInterval && clearInterval(tickInterval);
  tickInterval = setInterval(()=>{
    if (remainingSeconds <= 0) { clearInterval(tickInterval); submit(); return; }
    remainingSeconds -= 1;
    timeLeftEl.textContent = formatTime(remainingSeconds);
  }, 1000);
}

function renderQuestion() {
  const q = currentTest.questions[idx];
  progress.textContent = `Question ${idx+1} / ${currentTest.questions.length}`;
  qContainer.innerHTML = '';
  const wrap = document.createElement('div'); wrap.className='question';
  const h4 = document.createElement('h4'); h4.textContent = q.stem; wrap.appendChild(h4);
  const ul = document.createElement('ul'); ul.className='choices';
  q.choices.forEach((c,ci)=>{
    const li = document.createElement('li');
    const id = `q${idx}_c${ci}`;
    li.innerHTML = `<label><input type="radio" name="q${idx}" value="${ci}" ${(answers[idx]===ci)?'checked':''}> ${c.text}</label>`;
    ul.appendChild(li);
  });
  ul.addEventListener('change', (e)=>{ answers[idx] = Number(e.target.value); });
  wrap.appendChild(ul);
  qContainer.appendChild(wrap);
  prevBtn.disabled = idx===0;
  nextBtn.disabled = idx===currentTest.questions.length-1;
}

function submit() {
  if (submitted) return;
  submitted = true;
  // Grade
  let correct = 0;
  const feedback = [];
  currentTest.questions.forEach((q,i)=>{
    const sel = answers[i];
    const correctIdx = q.choices.findIndex(c=>c.correct);
    const isCorrect = sel === correctIdx;
    if (isCorrect) correct += 1;
    feedback.push({ q, selected: sel, correctIdx, isCorrect });
  });
  const total = currentTest.questions.length;
  const pct = total? (correct/total):0;
  const pass = pct >= PASS_MARK;
  // Render results
  results.innerHTML = `<div class="result ${pass? 'good':'bad'}"><h3>Result: ${(pct*100).toFixed(0)}% (${correct}/${total}) — ${pass? 'PASS' : 'FAIL'}</h3>
  <p>Pass mark: 60%. Time limit: 60 minutes.</p></div>`;

  // List incorrect first with brief feedback
  const incorrect = feedback.filter(f=>!f.isCorrect);
  const correctOnes = feedback.filter(f=>f.isCorrect);
  const section = document.createElement('div');
  const head = document.createElement('h3'); head.textContent = `Review — focus on incorrect (${incorrect.length})`; section.appendChild(head);

  [...incorrect, ...correctOnes].forEach((f)=>{
    const div = document.createElement('div'); div.className = 'result ' + (f.isCorrect?'good':'bad');
    const your = (f.selected!=null) ? f.q.choices[f.selected]?.text : '(no answer)';
    const right = f.q.choices[f.correctIdx].text;
    div.innerHTML = `<p><strong>Q:</strong> ${f.q.stem}</p>
      <p><strong>Your answer:</strong> ${your}</p>
      <p><strong>Correct:</strong> ${right}</p>
      <p><em>${f.q.explanation}</em></p>`;
    section.appendChild(div);
  });
  results.appendChild(section);

  results.classList.remove('hidden');
  testArea.classList.add('hidden');
  timerBox.classList.add('hidden');
  tickInterval && clearInterval(tickInterval);
}

startBtn.addEventListener('click', ()=>{
  const id = Number(selectEl.value);
  currentTest = TESTS.find(t=>t.id===id);
  idx = 0; answers = Array(currentTest.questions.length).fill(null);
  results.classList.add('hidden');
  testArea.classList.remove('hidden');
  submitted = false;
  renderQuestion();
  startTimer();
});

prevBtn.addEventListener('click', ()=>{ if (idx>0) { idx-=1; renderQuestion(); } });
nextBtn.addEventListener('click', ()=>{ if (idx<currentTest.questions.length-1) { idx+=1; renderQuestion(); } });
submitBtn.addEventListener('click', submit);
