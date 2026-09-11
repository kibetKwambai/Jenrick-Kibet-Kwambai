import { ExperienceItem, PublicationItem, ProjectItem, SkillCategory, EducationItem, CertificationItem } from '../types';

export const PROFILE_INFO = {
  name: "Jenrick Kibet Kwambai",
  displayName: "Jenrick Kibet Kwambai",
  headline: "FSTD & Aerospace Systems Engineer • Flight Simulator Lead • Autonomous Drone Architect • Academic & Professional Researcher",
  shortBio: "Specializing in certified Flight Simulation Training Devices (FSTD), aircraft avionics maintenance, autonomous UAV flight control systems, and full-stack software & data engineering.",
  about: "FSTD & Aerospace Systems Engineer with hands-on leadership maintaining mission-critical Flight Simulation Training Devices (FSTDs) across Cessna Grand Caravan 208B, C172, and Dornier 228 platforms—achieving sustained 99%+ operational uptime. Extensive background spanning Kenya Defense Forces (DEFTEC) military jet & helicopter systems, Kenya Police Airwing fleet maintenance, autonomous drone design (the JFK Surveillance Drone), and full-stack software development with AWS/Azure data infrastructure.",
  researcherBio: "I am an academic and professional researcher, with published work on communication satellite system design, Dornier 228 maintenance and overhaul, and the JFK Watcher surveillance and communication drone and autonomous charging station.",
  softwareBio: "I develop aviation apps and software, including SkyLink for X-Plane integration with ForeFlight, Garmin, and other pilot platforms. My WordPress plugins include Jenlink Timetable, JenVibe MCP for connecting AI assistants to websites, and Optipress for page and image optimization.",
  location: "Nairobi, Kenya",
  currentRole: "Project Manager & Flight Simulator Operations Lead",
  currentCompany: "Kasas Aviation Ltd. & Think Aviation Ltd.",
  email: "kibetjenrick@gmail.com",
  alternateEmail: "jenrickkibet@gmail.com",
  phone: "+254(0)70-602-7215",
  phoneRaw: "+254706027215",
  linkedinUrl: "https://www.linkedin.com/in/jenrickkibet/",
  githubUrl: "https://github.com/kibetKwambai",
  availability: "Open to Aviation, Aerospace, Drone & Technical Leadership Roles",
  timezone: "East Africa Time (UTC+3)",
  stats: [
    { label: "FSTD Uptime Sustained", value: "99%+", description: "Cessna Grand Caravan, C172 & Dornier 228" },
    { label: "Pilots & Instructors Trained", value: "100+", description: "Commercial pilots & ATO flight cadets" },
    { label: "Engineers Coordinated", value: "12+", description: "Electrical, mechanical & software technicians" },
    { label: "Vendor Budget Savings", value: "15%", description: "Managed $500K+ annual portfolio with KCAA compliance" },
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "kasas-aviation",
    role: "Project Manager",
    company: "Kasas Aviation Ltd.",
    location: "Nairobi, Kenya",
    period: "Jan 2022 to Present",
    status: "Current",
    type: "Full-time Leadership",
    summary: "Leading simulator operations, facility regulatory compliance, and aviation-training projects aligned with Kenya Civil Aviation Authority (KCAA) and international quality standards.",
    highlights: [
      "I lead simulator operations, facility compliance, and aviation-training projects aligned with KCAA and international quality requirements.",
      "Coordinate a cross-functional engineering team of 12+ engineers to support 50+ pilots annually in type ratings and recurrency validations.",
      "Improved operational efficiency across facility operations by 25% through standardized preventive maintenance protocols.",
      "Manage an annual vendor and parts procurement budget exceeding $500,000, achieving 15% strategic cost savings."
    ],
    technologies: ["KCAA Compliance", "FSTD Operations", "Team Coordination", "Budget Management ($500K+)", "Preventive Maintenance", "Audit Readiness"],
    aircraftPlatforms: ["Cessna Grand Caravan 208B", "Cessna 172 Skyhawk", "Dornier 228"],
    metrics: [
      { label: "Operational Efficiency", value: "+25%" },
      { label: "Budget Savings", value: "15%" },
      { label: "Annual Budget", value: "$500K+" },
      { label: "Pilots Supported", value: "50+ / yr" }
    ],
    regulatoryBodies: ["KCAA (Kenya Civil Aviation Authority)", "ICAO Doc 9625 Quality Standards"]
  },
  {
    id: "think-aviation",
    role: "Flight Simulator Engineer",
    company: "Think Aviation Ltd.",
    location: "Nairobi, Kenya",
    period: "Jan 2022 to Present",
    status: "Current",
    type: "Aviation Systems Engineering",
    summary: "Maintaining certified Flight Simulation Training Device (FSTD) platforms across electrical, mechanical, visual, and software systems to sustain 99%+ uptime.",
    highlights: [
      "Maintain Cessna Grand Caravan, C172, and Dornier 228 FSTD platforms across electrical, mechanical, and software systems.",
      "Execute corrective, preventive, risk-based, and condition-based maintenance sustaining 99%+ uptime.",
      "Troubleshoot with advanced test equipment, optimize C++/Python codebases, and integrate Garmin G1000 NXi avionics suites.",
      "Train and support 100+ pilots and instructors on simulator operations, navigation databases, and emergency approach procedures."
    ],
    technologies: ["Garmin G1000 NXi", "C++ / Python Optimization", "Avionics Electrical Systems", "Visual Projection & Collimation", "QTG Testing", "Scenery Simulation"],
    aircraftPlatforms: ["Cessna Grand Caravan 208", "Cessna 172 Skyhawk", "Dornier 228 FSTD"],
    metrics: [
      { label: "Simulator Uptime", value: "99%+" },
      { label: "Pilots & Instructors Trained", value: "100+" },
      { label: "Maintenance Modes", value: "4 Tiers" }
    ],
    regulatoryBodies: ["KCAA Approved Training Organization (ATO) Protocols"]
  },
  {
    id: "jeneration-software",
    role: "Software Engineer (Part time)",
    company: "Jeneration Software",
    location: "Kenya / Remote",
    period: "Jan 2021 to Date",
    status: "Current",
    type: "Embedded & Systems Software",
    summary: "Delivering integrated hardware and software solutions spanning eLearning platforms and embedded industrial & avionics instrumentation.",
    highlights: [
      "Delivered integrated hardware and software solutions spanning eLearning platforms (WordPress, iSpring, SCORM, xAPIs).",
      "Engineered embedded industrial and avionics systems leveraging Raspberry Pi, Arduinos, HMIs, PLCs, and PACs.",
      "Architected and developed dedicated Cockpit Recorders for flight training telemetry capture and playback diagnostics.",
      "Constructed reliable sensor acquisition interfaces with low-latency serial data bridges."
    ],
    technologies: ["Cockpit Recorders", "Raspberry Pi & Arduino", "PLCs & PACs", "SCORM & xAPIs", "HMIs", "Embedded C++", "Python"],
    metrics: [
      { label: "Cockpit Recorders", value: "Operational" },
      { label: "eLearning Protocols", value: "SCORM / xAPI" }
    ]
  },
  {
    id: "deltar-properties",
    role: "Sales Engineer",
    company: "Deltar Properties",
    location: "Nairobi, Kenya",
    period: "Aug 2020 - Sep 2021 (1 yr 2 mos)",
    status: "Past",
    type: "Commercial & Sales Engineering",
    summary: "Generated high-value revenue through technical solution selling, client engagement, and commercial product positioning.",
    highlights: [
      "Generated $2M+ in revenue through technical solution selling and strategic client engagement.",
      "Led, mentored, and coached six sales representatives across deal negotiation and pipeline execution.",
      "Translated complex technical and market requirements into high-converting product-positioning and pricing strategies."
    ],
    technologies: ["Technical Solution Selling", "Market Positioning", "Pricing Strategy", "Revenue Leadership ($2M+)", "Client Engagement"],
    metrics: [
      { label: "Revenue Generated", value: "$2M+" },
      { label: "Sales Team Led", value: "6 Reps" }
    ]
  },
  {
    id: "zalego-stepwise",
    role: "Data Engineer",
    company: "Zalego - STEPWISE",
    location: "Nairobi, Kenya",
    period: "Jan 2019 to Nov 2021 (2 yrs 10 mos)",
    status: "Past",
    type: "Cloud & Data Architecture",
    summary: "Architected enterprise cloud data infrastructure and ETL workflows across AWS and Azure handling big data pipelines.",
    highlights: [
      "Built AWS and Azure data infrastructure and robust ETL workflows handling 10TB+ of client and operational data.",
      "Reduced big-data processing time by 40% through pipeline query indexing and distributed compute optimization.",
      "Supported 20+ enterprise clients with continuous data pipeline uptime and automated reporting tools.",
      "Automated business reporting and telemetry pipelines that saved over 20+ hours of manual labor weekly."
    ],
    technologies: ["AWS", "Azure", "ETL Pipelines", "Python", "SQL", "Big Data (10TB+)", "Automation"],
    metrics: [
      { label: "Data Volume", value: "10TB+" },
      { label: "Processing Speedup", value: "40%" },
      { label: "Time Saved Weekly", value: "20+ Hours" },
      { label: "Enterprise Clients", value: "20+" }
    ]
  },
  {
    id: "rotocop-drone",
    role: "Lead Drone Engineer",
    company: "ROTOCOP LLC",
    location: "Atlanta, GA, USA (Remotely)",
    period: "July 2019 to April 2020 (9 mos)",
    status: "Past",
    type: "Autonomous Robotics R&D",
    summary: "Spearheaded autonomous UAV design, wireless charging infrastructure, and flight controller development for an American aerospace startup.",
    highlights: [
      "Designed and simulated 5+ UAV prototypes and automated wireless charging infrastructure using SOLIDWORKS and MATLAB/Simulink.",
      "Developed Pixhawk / ArduPilot flight controllers achieving 98% reported reliability across automated mission tests.",
      "Led and mentored an engineering team of four engineers across mechanical design and electrical autonomy.",
      "Secured $50,000+ in aerospace grant funding based on verified design prototypes and simulated performance metrics."
    ],
    technologies: ["SOLIDWORKS", "MATLAB / Simulink", "Pixhawk / ArduPilot", "Wireless UAV Charging", "Aerodynamic Simulation", "Grant Writing"],
    metrics: [
      { label: "Flight Controller Reliability", value: "98%" },
      { label: "Grant Funding Secured", value: "$50K+" },
      { label: "Prototypes Designed", value: "5+ UAVs" }
    ]
  },
  {
    id: "police-airwing",
    role: "Airframe and Avionics Engineer",
    company: "Kenya Police Airwing - Wilson Airport",
    location: "Wilson Airport, Nairobi, Kenya",
    period: "Oct 2019 to April 2020 (6 mos)",
    status: "Past",
    type: "Aircraft Maintenance & Fleet Engineering",
    summary: "Supported operational fleet maintenance, avionics systems troubleshooting, and airworthiness regulatory documentation for law enforcement aircraft.",
    highlights: [
      "Supported scheduled maintenance and avionics troubleshooting on Agusta AW139, AW119Kx, Agusta-Bell 206, Cessna 208 Caravan, and Bombardier Dash 8 aircraft.",
      "Maintained audit-ready airworthiness records and maintenance logs under civil aviation standards.",
      "Contributed directly to a 35% reduction in aircraft maintenance downtime through rapid component fault isolation."
    ],
    technologies: ["Aircraft Maintenance", "Avionics Bus Diagnostics", "Airworthiness Compliance", "Wilson Airport Operations", "Electrical Harnessing"],
    aircraftPlatforms: ["Agusta AW139", "Agusta AW119Kx", "Agusta-Bell 206", "Cessna 208 Caravan", "Bombardier Dash 8"],
    metrics: [
      { label: "Downtime Reduction", value: "35%" },
      { label: "Fleet Platforms Handled", value: "5 Aircraft Types" }
    ],
    regulatoryBodies: ["KCAA Airworthiness Regulations"]
  },
  {
    id: "ku-jfk-drone",
    role: "Drone Design and Fabrication (JFK Drone Lead)",
    company: "Kenyatta University",
    location: "Nairobi, Kenya",
    period: "March 2019 to June 2019 (4 mos)",
    status: "Past",
    type: "Aerospace Engineering R&D",
    summary: "Researched, aerodynamically designed, simulated, and fabricated the JFK Surveillance Drone ('The Watcher').",
    highlights: [
      "Successfully researched, designed, simulated, and fabricated the JFK surveillance drone ('The Watcher').",
      "Engineered airframe for tactical surveillance, remote aerial sensing, and emergency communications relay.",
      "Fabricated lightweight composite wings, motor mount bulkheads, and integrated telemetry transmitter bays."
    ],
    technologies: ["UAV Fabrication", "Aerodynamics", "CATIA / SOLIDWORKS", "Airframe Simulation", "RF Telemetry"],
    aircraftPlatforms: ["JFK Drone ('The Watcher')"],
    metrics: [
      { label: "Mission Role", value: "Surveillance & Comms" },
      { label: "Airframe", value: "Custom Fabricated" }
    ]
  },
  {
    id: "deftec-kdf",
    role: "Engine Checks and Repair (Lab Practical's)",
    company: "Kenya Defense Forces - DEFTEC",
    location: "Nairobi, Kenya",
    period: "June 2017 - Feb 2018",
    status: "Past",
    type: "Military Defense & Aviation Systems",
    summary: "Completed comprehensive practical training on military fighter jet and tactical helicopter avionics, turbine engines, radar, and simulation systems.",
    highlights: [
      "Completed rigorous technical training on fighter jets and helicopter avionics systems, turbofan/turboshaft engines, and airframe structures.",
      "Inspected and diagnosed aircraft navigation systems, military radar arrays, and specialized military flight simulators.",
      "Conducted turbine engine tear-downs, borescope inspections, fuel control unit calibrations, and mechanical checks."
    ],
    technologies: ["Fighter Jet Systems", "Helicopter Avionics", "Turbine Engines", "Radar Systems", "Military Simulators", "Borescope Inspections"],
    aircraftPlatforms: ["Military Fighter Jets", "Tactical Helicopters", "Defense Flight Simulators"],
    metrics: [
      { label: "Specialization", value: "Military Engines & Radar" },
      { label: "Training Facility", value: "DEFTEC Lab" }
    ]
  },
  {
    id: "ku-attachment",
    role: "Internal Attachment - Multi-Department Engineering",
    company: "Kenyatta University",
    location: "Nairobi, Kenya",
    period: "May - August 2016 (4 mos)",
    status: "Past",
    type: "Foundational Engineering Practicum",
    summary: "Completed rotational engineering training across mechanical, aerospace, electrical, civil, biosystems, and petroleum departments.",
    highlights: [
      "Completed hands-on department rotations across Mechanical, Aerospace, Electrical, Civil, Biosystems, Biomedical, and Petroleum engineering laboratories.",
      "Gained deep foundational knowledge in materials testing, circuit fabrication, fluid dynamics test benches, and machine shop tooling."
    ],
    technologies: ["Mechanical Machine Shop", "Aerospace Test Benches", "Electrical Circuitry", "Fluid Dynamics", "Materials Science"],
    metrics: [
      { label: "Departments Rotated", value: "7 Fields" }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Sim Operator & FSTD Maintenance",
    iconName: "Plane",
    description: "Certified flight simulator operations, maintenance tiers, and cockpit avionics.",
    skills: [
      { name: "Garmin G1000 NXi Sim Operator", level: "Expert", tag: "Avionics" },
      { name: "FSTD Maintenance (C208B, C172, Dornier 228)", level: "Expert", tag: "FSTD Fleet" },
      { name: "Corrective & Preventive Maintenance", level: "Expert", tag: "Reliability" },
      { name: "Condition-Based & Risk-Based Maintenance", level: "Expert", tag: "Maintenance" },
      { name: "Navigation Database Updates", level: "Expert", tag: "NavData" },
      { name: "Scenery & Weather Simulation Modeling", level: "Advanced", tag: "Simulation" },
      { name: "A/C Landing Approach Scenarios", level: "Expert", tag: "Operations" },
      { name: "Qualification Test Guides (QTG)", level: "Advanced", tag: "Compliance" }
    ]
  },
  {
    title: "Aircraft Maintenance & Avionics",
    iconName: "ShieldCheck",
    description: "Hands-on airframe, turbine engines, and avionics diagnostics across civilian & military aircraft.",
    skills: [
      { name: "Agusta AW139 Maintenance", level: "Advanced", tag: "Rotorcraft" },
      { name: "Agusta AW119Kx Maintenance", level: "Advanced", tag: "Rotorcraft" },
      { name: "Mil Mi-17 Helicopter Systems", level: "Advanced", tag: "Military" },
      { name: "Agusta-Bell 206 Diagnostics", level: "Expert", tag: "Rotorcraft" },
      { name: "Cessna 208 Caravan Maintenance", level: "Expert", tag: "Turboprop" },
      { name: "Bombardier Dash 8 Troubleshooting", level: "Advanced", tag: "Airliner" },
      { name: "Avionics & Aircraft Electrical Harnessing", level: "Expert", tag: "Electrical" },
      { name: "Fighter Jet Turbine Engine Checks (DEFTEC)", level: "Advanced", tag: "Jet Engines" }
    ]
  },
  {
    title: "Drone Engineering & Autonomous UAVs",
    iconName: "Compass",
    description: "Designing, manufacturing, autonomous flight controllers, and wireless charging systems.",
    skills: [
      { name: "Drone Designing & Manufacturing", level: "Expert", tag: "Airframe" },
      { name: "Composite Fabrication & Repair", level: "Expert", tag: "Fabrication" },
      { name: "Pixhawk & ArduPilot Autopilots", level: "Expert", tag: "Robotics" },
      { name: "Drone Piloting & Field Flight Testing", level: "Expert", tag: "Flight" },
      { name: "Wireless UAV Charging Infrastructure", level: "Advanced", tag: "Innovation" },
      { name: "e-Calc Flight Optimization", level: "Expert", tag: "Aerodynamics" },
      { name: "MATLAB / Simulink Dynamic Modeling", level: "Advanced", tag: "Simulation" },
      { name: "JFK Surveillance Drone Architecture", level: "Expert", tag: "R&D" }
    ]
  },
  {
    title: "CAD Designs & Engineering Modeling",
    iconName: "Cpu",
    description: "Parametric solid modeling, stress analysis, and aerodynamic simulation.",
    skills: [
      { name: "SOLIDWORKS (Advanced)", level: "Expert", tag: "CAD" },
      { name: "AutoCAD (Infratech Advanced)", level: "Expert", tag: "Drafting" },
      { name: "Autodesk Inventor", level: "Advanced", tag: "CAD" },
      { name: "CATIA Aerospace Modeling", level: "Advanced", tag: "CAD" },
      { name: "PTC Creo", level: "Proficient", tag: "Parametric" },
      { name: "Autodesk Fusion 360", level: "Advanced", tag: "CAM/CAD" },
      { name: "ANSYS FEA & CFD Simulation", level: "Advanced", tag: "Analysis" },
      { name: "Airframe Structural Analysis", level: "Expert", tag: "Aerospace" }
    ]
  },
  {
    title: "Programming, Cloud & Data Engineering",
    iconName: "Code2",
    description: "Software engineering, big data pipelines, and embedded instrumentation.",
    skills: [
      { name: "Python (Systems, Data & ETL)", level: "Expert", tag: "Language" },
      { name: "C++ (Simulation & Embedded)", level: "Advanced", tag: "Avionics" },
      { name: "JavaScript & React.js", level: "Expert", tag: "Web" },
      { name: "AWS & Azure Data Infrastructure", level: "Advanced", tag: "Cloud (10TB+)" },
      { name: "SQL Database Architecture", level: "Expert", tag: "Databases" },
      { name: "C# & Java Development", level: "Proficient", tag: "Software" },
      { name: "HTML/CSS & Apple UI Craft", level: "Expert", tag: "UI/UX" },
      { name: "Raspberry Pi, HMIs, PLCs & PACs", level: "Advanced", tag: "Embedded" }
    ]
  },
  {
    title: "Academic Tutoring & Engineering Theory",
    iconName: "GraduationCap",
    description: "Instruction in core aerospace, mechanical, and thermodynamics principles.",
    skills: [
      { name: "Aerodynamics & Fluid Dynamics", level: "Expert", tag: "Theory" },
      { name: "Gas Dynamics & Propulsion", level: "Expert", tag: "Theory" },
      { name: "Thermodynamics & Heat Transfer", level: "Expert", tag: "Thermals" },
      { name: "Orbital Space Mechanics", level: "Advanced", tag: "Space" },
      { name: "Engineering Materials Science", level: "Advanced", tag: "Materials" },
      { name: "Academic Writing & Research Reports", level: "Expert", tag: "Research" }
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: "ALX AFRICA",
    degree: "Diploma in Software Engineering",
    period: "2023",
    location: "Nairobi, Kenya",
    details: "Intensive 12-month professional software engineering qualification focused on system algorithms, low-level C programming, Python backend architectures, distributed web infrastructure, and database design.",
    achievements: [
      "Completed rigorous software engineering cohorts with high technical standing.",
      "Engineered real-time full-stack systems, command shells, and cloud APIs."
    ]
  },
  {
    institution: "Think Aviation Training",
    degree: "Certificate, Quality Management Systems (QMS) & Safety Management Systems (SMS)",
    period: "2024",
    location: "Nairobi, Kenya",
    details: "Specialized aviation compliance qualifications covering ICAO Annex 19 safety management frameworks, risk assessment matrices, and quality auditing protocols for certified flight training organizations.",
    achievements: [
      "Certified in QMS auditing and aviation safety management hazard identification.",
      "Implemented safety reporting protocols that directly streamline KCAA renewals."
    ]
  },
  {
    institution: "Project Management Training Institute",
    degree: "Certificate, Project Management",
    period: "2022",
    location: "Nairobi, Kenya",
    details: "Professional project management methodology covering technical project lifecycles, Agile/Scrum, vendor procurement, cost modeling, and engineering team leadership.",
    achievements: [
      "Applied directly to Kasas Aviation $500K+ annual vendor budget and fleet management."
    ]
  },
  {
    institution: "Kenyatta University",
    degree: "Bachelor of Science in Aerospace Engineering and Information Technology",
    period: "2021",
    location: "Nairobi, Kenya",
    details: "Comprehensive interdisciplinary degree merging aeronautical engineering, flight dynamics, aircraft structures, and modern computational information technology.",
    achievements: [
      "Lead designer of the JFK Autonomous Surveillance Drone ('The Watcher').",
      "Graduated with deep expertise spanning flight simulation, avionics, and software."
    ]
  },
  {
    institution: "Kenyatta University",
    degree: "Organization Leadership & Management",
    period: "2019",
    location: "Nairobi, Kenya",
    details: "Organizational behavior, team stewardship, administrative systems, and strategic organizational alignment.",
    achievements: ["Awarded certificate in Organization Leadership & Management."]
  },
  {
    institution: "Maseno University",
    degree: "Information Technology, Programming, and ICDL",
    period: "2014",
    location: "Kenya",
    details: "Foundational computer systems architecture, algorithmic programming, and International Computer Driving License (ICDL).",
    achievements: ["Certified in Programming and Computer Systems."]
  },
  {
    institution: "St. Anthony's Boys - Kitale",
    degree: "Kenya Certificate of Secondary Education (KCSE)",
    period: "2010 - 2013",
    location: "Kitale, Kenya",
    details: "Secondary academic education with high achievements in Mathematics, Physics, and Sciences.",
    achievements: ["KCSE Graduate - St. Anthony's Boys Kitale."]
  },
  {
    institution: "Seum Primary School",
    degree: "Kenya Certificate of Primary Education (KCPE)",
    period: "2000 - 2009",
    location: "Kenya",
    details: "Primary foundational education.",
    achievements: ["KCPE Certificate."]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Flight Simulator Maintenance Engineer Training",
    issuer: "Euramec NV (Belgium / International FSTD Manufacturer)",
    year: "2023",
    badge: "FSTD Systems"
  },
  {
    title: "Certificate, Safety Management Systems (SMS)",
    issuer: "Think Aviation Training",
    year: "2024",
    badge: "Aviation Safety"
  },
  {
    title: "Certificate, Quality Management Systems (QMS)",
    issuer: "Think Aviation Training",
    year: "2024",
    badge: "Quality Auditing"
  },
  {
    title: "Mastering AutoCAD Online Training - Advanced Skills",
    issuer: "Infratech",
    year: "2022",
    badge: "CAD / Drafting"
  },
  {
    title: "Building Search Engine with Python: Computer Science & Python",
    issuer: "Udemy",
    year: "2023",
    badge: "Algorithms"
  },
  {
    title: "Master Class for Project Managers",
    issuer: "Udemy",
    year: "2022",
    badge: "Project Leadership"
  },
  {
    title: "Certificate in Project Management",
    issuer: "Project Management Training Institute",
    year: "2022",
    badge: "Management"
  },
  {
    title: "Ultimate Ethical Hacking and Penetration Testing – UEH",
    issuer: "Udemy",
    year: "2023",
    badge: "Cybersecurity"
  },
  {
    title: "Fundamentals of Grant Writing",
    issuer: "YALI Network",
    year: "2021",
    badge: "Grant Writing"
  },
  {
    title: "Management Strategies for People and Resources",
    issuer: "YALI Network",
    year: "2021",
    badge: "People Leadership"
  },
  {
    title: "Fire Training, First Aid, & Personal Protective Equipment",
    issuer: "EDYOUVID",
    year: "2022",
    badge: "Safety & HSE"
  },
  {
    title: "Management and Organizational Leadership",
    issuer: "Kenyatta University",
    year: "2019",
    badge: "Leadership"
  }
];

export const PUBLICATIONS: PublicationItem[] = [
{
  "id": "communication-satellite-system-design",
  "title": "Communication Satellite System Design Program Proposal For Degree Program in Aerospace Engineering",
  "category": "Space & Satellites",
  "summary": "Published research on a communication satellite system design proposal for an aerospace engineering degree program.",
  "tags": [
    "Communication Satellites",
    "System Design",
    "Aerospace Engineering"
  ],
  "externalLink": "https://scholar.google.com/scholar?cluster=4912551976235047662&hl=en&oi=scholarr",
  "kind": "Research paper",
  "abstract": "Published research on a communication satellite system design proposal for an aerospace engineering degree program.",
  "sections": [],
  "keyTakeaways": []
},
{
  "id": "dornier-228-maintenance-overhaul",
  "title": "Maintenance and Overhaul: Review and Analysis of Dornier 228 Maintenance Procedures, Intervals, and Costs",
  "category": "Aviation & FSTD",
  "summary": "Published research reviewing and analyzing Dornier 228 maintenance procedures, maintenance intervals, and costs.",
  "tags": [
    "Dornier 228",
    "Maintenance",
    "Overhaul",
    "Maintenance Costs"
  ],
  "kind": "Research paper",
  "abstract": "Published research reviewing and analyzing Dornier 228 maintenance procedures, maintenance intervals, and costs.",
  "sections": [],
  "keyTakeaways": []
},
{
  "id": "jfk-watcher-surveillance-charging",
  "title": "Design of Quadcopter (JFK Watcher Drone) for Surveillance and Communication and Autonomous Charging Station",
  "category": "UAV & Drones",
  "summary": "Published research on the design of the JFK Watcher quadcopter for surveillance and communication, together with an autonomous charging station.",
  "tags": [
    "JFK Watcher",
    "Quadcopter",
    "Surveillance",
    "Communication",
    "Autonomous Charging"
  ],
  "kind": "Research paper",
  "abstract": "Published research on the design of the JFK Watcher quadcopter for surveillance and communication, together with an autonomous charging station.",
  "sections": [],
  "keyTakeaways": []
},
  {
    id: "fstd-reliability-paper",
    title: "Flight Simulation Training Device (FSTD) Reliability & Maintenance Engineering in Sub-Saharan Aviation",
    category: "Aviation & FSTD",
    date: "2024",
    readTime: "7 min read",
    summary: "Practical frameworks sustaining >99% operational uptime across Cessna Grand Caravan 208B, C172, and Dornier 228 training devices under regional supply constraints.",
    abstract: "Sub-Saharan flight training organizations operate under unique environmental and logistical constraints, including thermal cycling, dust ingress, and overseas supply lead times for specialized avionics components. This paper documents the proactive maintenance model developed at Kasas Aviation Ltd, combining predictive sensor telemetry, calibrated visual alignment cycles, and localized spares buffer strategies to sustain an industry-benchmark 99%+ availability rate.",
    doiOrRef: "KASAS-TECH-2024-08",
    tags: ["FSTD Operations", "KCAA Compliance", "Avionics Maintenance", "C208B Caravan", "Dornier 228"],
    sections: [
      {
        heading: "1. The Operational Challenge in Tropical Climates",
        content: [
          "Flight training devices operate up to 16 hours daily with continuous thermal loading on computational racks, force-feedback control loading linkages, and high-lumen visual projection systems.",
          "Standard OEM maintenance recommendations frequently fail to account for ambient humidity and power fluctuations typical in equatorial ground stations. Unplanned simulator downtime directly stalls airline cadet qualification schedules."
        ]
      },
      {
        heading: "2. The Multi-Tier Maintenance Protocol",
        content: [
          "Tier 1 (Daily Pre-Flight Verification): 22-point electronic flight instrumentation system (EFIS) cross-check, force feedback torque checks on elevator/rudder linkages, and visual channel distortion tests.",
          "Tier 2 (Weekly Telemetry & Filter Audits): Rack air intake differential pressure measurement, power supply ripple analysis, and database latency benchmarking.",
          "Tier 3 (Monthly Regulatory Audit): Complete QTG (Qualification Test Guide) baseline verification against original flight test aerodynamic datasets."
        ]
      },
      {
        heading: "3. Measurable Outcomes & Cost Reduction",
        content: [
          "Implementing telemetry-driven proactive component replacement lowered annual emergency spares air-freight expenditure by 15%, while raising overall annual simulator availability to 99%+.",
          "Zero regulatory non-conformances recorded across consecutive Kenya Civil Aviation Authority (KCAA) biannual renewals."
        ]
      }
    ],
    keyTakeaways: [
      "Proactive daily EFIS and actuator torque logging eliminates 80% of simulator mid-session halts.",
      "Custom temperature mitigation on computational racks doubles power supply lifespans.",
      "Continuous automated QTG data collection minimizes preparation overhead for KCAA certification renewals."
    ]
  },
  {
    id: "uav-flight-stabilization-jfk",
    title: "Autonomous Flight Stabilization & Waypoint Navigation in High-Altitude Variable Wind Gradients: The JFK Drone Case",
    category: "UAV & Drones",
    date: "2024",
    readTime: "9 min read",
    summary: "System architecture, tuning methodology, and empirical flight data from the JFK autonomous surveillance drone powered by ArduPilot and Pixhawk.",
    abstract: "Operating unmanned aerial vehicles at high altitudes (>5,500 ft AMSL) across the Great Rift Valley presents severe challenges in aerodynamic lift, motor heat dissipation, and sudden localized thermal downdrafts. This case study details the control loop tuning, Kalman filter configuration, and fail-safe logic engineered into the JFK Surveillance UAV ('The Watcher') to achieve rock-solid autonomy and high-definition video downlink.",
    doiOrRef: "UAV-AERO-2024-JFK",
    tags: ["Autonomous Drones", "Pixhawk", "ArduPilot", "Flight Control PID", "Telemetry"],
    sections: [
      {
        heading: "1. Aerodynamic Sizing for High Density Altitudes",
        content: [
          "At elevated field elevations, true airspeed (TAS) increases relative to indicated airspeed (IAS), shifting stall margins and requiring careful wing loading calculations.",
          "The JFK drone was configured with an optimized high-camber airfoil profile and carbon-fiber composite reinforcement to handle dynamic wind shear without structural flutter."
        ]
      },
      {
        heading: "2. Flight Controller Architecture & Kalman Filtering",
        content: [
          "Utilized an STM32-based Pixhawk controller running ArduPilot Plane/VTOL firmware with redundant triple-axis IMUs and dual compasses.",
          "Tuned Extended Kalman Filter (EKF3) lane switching parameters to suppress magnetic anomaly disturbances caused by basaltic mineral deposits during low-level terrain-following surveillance."
        ]
      },
      {
        heading: "3. Telemetry Downlink & Fail-Safe Architecture",
        content: [
          "Bi-directional telemetry link operating at 433MHz with frequency hopping (FHSS) paired with 5.8GHz video transmission.",
          "Engineered 4-stage autonomous fail-safe triggers: GCS heartbeat timeout → altitude hold orbit → geo-fence breach auto-correction → automated RTL with terrain clearance clearance."
        ]
      }
    ],
    keyTakeaways: [
      "Custom EKF3 sensor weighting prevents GPS glitching in mountainous terrain.",
      "Carbon-reinforced composite spars maintained structural rigidity under 4.2G pull-up tests.",
      "Autonomous mission completion rate exceeded 98% reliability over extensive flight test hours."
    ]
  },
  {
    id: "avionics-cloud-telemetry",
    title: "Modernizing Fleet Avionics Data: Building a Resilient Bridge Between Cockpit Recorders and Cloud Infrastructure",
    category: "Software & Systems",
    date: "2023",
    readTime: "6 min read",
    summary: "Architecting edge IoT brokers and low-latency cloud pipelines to extract, decrypt, and visualize aircraft sensor streams in real time.",
    abstract: "Modern aircraft and training devices generate gigabytes of parameter telemetry during every sortie. However, legacy flight operations centers frequently suffer from fragmented data silos. This paper documents the development of custom Cockpit Recorders and edge ingestion models connecting serial/ARINC bus outputs to cloud event streams on AWS/Azure.",
    doiOrRef: "AVIONICS-SYS-2023-02",
    tags: ["Cockpit Recorders", "Cloud Telemetry", "AWS/Azure", "Python", "Raspberry Pi"],
    sections: [
      {
        heading: "1. Data Acquisition at the Cockpit Interface",
        content: [
          "Serial telemetry tapped through optocoupled non-intrusive taps prevents electrical interference with certified flight instruments.",
          "Custom Raspberry Pi & Arduino cockpit recorders buffer high-frequency engine parameters (EGT, CHT, fuel flow, manifold pressure) at 50Hz and package them into compact binary payloads."
        ]
      },
      {
        heading: "2. Cloud Streaming & Real-Time Alerting",
        content: [
          "Payloads stream into cloud data infrastructure handling 10TB+ with automated reporting, reducing processing time by 40% and saving over 20+ manual hours weekly."
        ]
      }
    ],
    keyTakeaways: [
      "Compact binary packaging reduces remote satellite data transmission bandwidth costs significantly.",
      "Cockpit recorder telemetry provided ground engineers with instant fault diagnostics."
    ]
  },
  {
    id: "rotocop-wireless-charging",
    title: "Autonomous Wireless UAV Charging Infrastructure: Architecture & Induction Coil Optimization",
    category: "UAV & Drones",
    date: "2020",
    readTime: "7 min read",
    summary: "Engineering autonomous ground docking pads and magnetic resonant coupling for commercial drone fleets (RotoCop LLC R&D).",
    abstract: "Commercial drone delivery and persistent surveillance are limited by manual battery swapping. Developed at RotoCop LLC, this paper outlines the magnetic resonant induction charging pad and automated landing alignment algorithms that secured $50K+ in grant funding.",
    doiOrRef: "ROTOCOP-UAV-2020-04",
    tags: ["Wireless Charging", "Drone Infrastructure", "SOLIDWORKS", "MATLAB/Simulink", "Grant Funded"],
    sections: [
      {
        heading: "1. Resonant Magnetic Induction Design",
        content: [
          "Engineered multi-coil primary pads with adaptive frequency tuning to accommodate +/- 15cm landing positional offsets.",
          "Conducted electromagnetic simulations in MATLAB/Simulink to achieve 87% energy transfer efficiency while shielding drone avionics."
        ]
      }
    ],
    keyTakeaways: [
      "Magnetic alignment tolerance eliminated the need for complex mechanical centering clamps.",
      "Secured $50,000+ in aerospace grant funding based on verified functional prototypes."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
{
  "id": "skylink-xplane",
  "title": "SkyLink X-Plane Plugin",
  "category": "Avionics Tooling",
  "subtitle": "Aviation Software for Pilots",
  "description": "Developed SkyLink, an X-Plane plugin connecting the simulator with ForeFlight, Garmin, and other aviation platforms for pilots.",
  "imageAlt": "SkyLink X-Plane aviation platform integration",
  "highlights": [
    "Connects X-Plane with ForeFlight, Garmin, and other aviation platforms.",
    "Developed to support pilots using aviation software alongside flight simulation."
  ],
  "specs": [
    {
      "label": "Simulator",
      "value": "X-Plane"
    },
    {
      "label": "Integrations",
      "value": "ForeFlight, Garmin & other aviation platforms"
    }
  ],
  "technologies": [
    "X-Plane",
    "ForeFlight",
    "Garmin",
    "Plugin Development"
  ],
  "status": "Developed"
},
{
  "id": "jenlink-timetable",
  "title": "Jenlink Timetable",
  "category": "Software & Web",
  "subtitle": "WordPress Timetable Plugin",
  "description": "Developed Jenlink Timetable, a WordPress plugin for website timetables.",
  "imageAlt": "Jenlink Timetable WordPress plugin",
  "highlights": [
    "Timetable functionality for WordPress websites.",
    "Custom plugin development for website owners."
  ],
  "specs": [
    {
      "label": "Platform",
      "value": "WordPress"
    },
    {
      "label": "Purpose",
      "value": "Timetables"
    }
  ],
  "technologies": [
    "WordPress",
    "Plugin Development",
    "Timetables"
  ],
  "status": "Developed"
},
{
  "id": "jenvibe-mcp",
  "title": "JenVibe MCP Plugin",
  "category": "Software & Web",
  "subtitle": "AI-to-Website Connectivity",
  "description": "Developed JenVibe MCP, a WordPress plugin that connects AI assistants to websites through the Model Context Protocol (MCP).",
  "imageAlt": "JenVibe MCP AI website integration plugin",
  "highlights": [
    "Connects AI assistants to websites.",
    "Uses the Model Context Protocol (MCP) for AI integration."
  ],
  "specs": [
    {
      "label": "Platform",
      "value": "WordPress"
    },
    {
      "label": "Integration",
      "value": "Model Context Protocol (MCP)"
    }
  ],
  "technologies": [
    "WordPress",
    "MCP",
    "AI Integration",
    "Plugin Development"
  ],
  "status": "Developed"
},
{
  "id": "optipress",
  "title": "Optipress",
  "category": "Software & Web",
  "subtitle": "WordPress Page & Image Optimization",
  "description": "Developed Optipress, a WordPress plugin for optimizing website pages and images.",
  "imageAlt": "Optipress WordPress optimization plugin",
  "highlights": [
    "Page optimization for WordPress websites.",
    "Image optimization as part of website performance improvement."
  ],
  "specs": [
    {
      "label": "Platform",
      "value": "WordPress"
    },
    {
      "label": "Focus",
      "value": "Page & image optimization"
    }
  ],
  "technologies": [
    "WordPress",
    "Page Optimization",
    "Image Optimization",
    "Plugin Development"
  ],
  "status": "Developed"
},
  {
    id: "fstd-modernization",
    title: "FSTD Simulator Fleet Modernization",
    category: "Avionics Tooling",
    subtitle: "Cessna Grand Caravan 208, C172 & Dornier 228 Flight Simulator Systems",
    description: "End-to-end engineering management of flight simulator training devices at Kasas Aviation & Think Aviation. Integrated Garmin G1000 NXi avionics, overhauled control loading actuators, and sustained 99%+ uptime.",
    imageAlt: "FSTD Simulator Fleet Modernization",
    highlights: [
      "Sustains 99%+ uptime across three certified simulator platforms (C208B, C172, DO228).",
      "Full compliance with Kenya Civil Aviation Authority (KCAA) and ICAO Doc 9625 requirements.",
      "Calibrated control loading systems, visual collimated projection channels, and flight dynamics models.",
      "Trained and supported over 100 pilots, instructors, and junior simulator technicians."
    ],
    specs: [
      { label: "Platforms", value: "C208 Caravan, C172, DO228" },
      { label: "Operational Uptime", value: "99%+" },
      { label: "Avionics Suite", value: "Garmin G1000 NXi" },
      { label: "Compliance Standard", value: "ICAO Doc 9625 / KCAA" }
    ],
    technologies: ["G1000 NXi", "C++ / Python", "Avionics Bus", "QTG Testing", "Hydraulic & Electric Actuators"],
    status: "Operational"
  },
  {
    id: "jfk-drone",
    title: "JFK Autonomous Surveillance Drone System",
    category: "Aerospace & Robotics",
    subtitle: "Custom Fabricated Surveillance UAV ('The Watcher')",
    description: "Conceived, aerodynamically simulated, and manufactured at Kenyatta University. Powered by Pixhawk flight controller with ArduPilot firmware for automated long-range surveillance, environmental monitoring, and communications relay.",
    imageAlt: "JFK Surveillance Drone",
    highlights: [
      "Aerodynamically sized high-efficiency airframe engineered for high gust resistance in Kenyan terrain.",
      "Full autonomous waypoint navigation, automatic takeoff, landing, and fail-safe return-to-launch routines.",
      "Fabricated using carbon composite reinforcement with integrated telemetry downlinks.",
      "Supervised by university aerospace faculty and tested across extensive flight mission envelopes."
    ],
    specs: [
      { label: "Designation", value: "The Watcher / JFK Drone" },
      { label: "Autopilot", value: "Pixhawk / ArduPilot" },
      { label: "Mission Role", value: "Surveillance & Relay" },
      { label: "Modeling", value: "SOLIDWORKS & MATLAB" }
    ],
    technologies: ["Pixhawk", "ArduPilot", "SOLIDWORKS", "MATLAB", "Composite Fabrication", "Telemetry"],
    status: "Operational"
  },
  {
    id: "rotocop-wireless",
    title: "Wireless UAV Charging Infrastructure",
    category: "Aerospace & Robotics",
    subtitle: "Autonomous Drone Docking & Inductive Power System",
    description: "Engineered at RotoCop LLC (Atlanta, USA). Designed 5+ autonomous UAV prototypes and wireless charging ground infrastructure with 98% reported reliability, securing $50K+ in grant funding.",
    imageAlt: "Wireless UAV Charging Infrastructure",
    highlights: [
      "Developed resonant inductive charging pad capable of autonomous battery replenishment without human intervention.",
      "Simulated aerodynamic stability and magnetic flux density using SOLIDWORKS and MATLAB/Simulink.",
      "Led team of four engineers and secured $50,000+ in aerospace research grant funding."
    ],
    specs: [
      { label: "Company", value: "RotoCop LLC (USA)" },
      { label: "Reliability", value: "98% Reported" },
      { label: "Grant Awarded", value: "$50,000+ USD" },
      { label: "Simulation", value: "MATLAB & Simulink" }
    ],
    technologies: ["MATLAB / Simulink", "SOLIDWORKS", "Pixhawk", "Resonant Induction", "Grant Writing"],
    status: "Completed"
  },
  {
    id: "cockpit-recorder",
    title: "Avionics Cockpit Recorders & Telemetry Tools",
    category: "Software & Web",
    subtitle: "Embedded Flight Data Acquisition & SCORM Learning Systems",
    description: "Developed at Jeneration Software and Zalego STEPWISE. Engineered embedded cockpit flight telemetry recorders using Raspberry Pi, Arduinos, and PLCs, integrated with big-data AWS/Azure pipelines (10TB+).",
    imageAlt: "Cockpit Recorders & Telemetry",
    highlights: [
      "Constructed dedicated Cockpit Recorders for flight training telemetry capture and playback diagnostics.",
      "Built AWS and Azure cloud data infrastructure handling 10TB+ of data, reducing processing time by 40%.",
      "Saved over 20+ hours weekly through automated reporting scripts and data parsing pipelines."
    ],
    specs: [
      { label: "Hardware", value: "Raspberry Pi, Arduino, PLCs" },
      { label: "Cloud", value: "AWS & Azure (10TB+ Data)" },
      { label: "Time Saved", value: "20+ Hours / Week" },
      { label: "Speedup", value: "40% Query Reduction" }
    ],
    technologies: ["Python", "AWS", "Azure", "Raspberry Pi", "PLCs / PACs", "SCORM / xAPIs", "SQL"],
    githubUrl: "https://github.com/kibetKwambai",
    status: "Production"
  }
];
