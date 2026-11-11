import React, { useMemo, useState } from 'react';
import {
  Activity, BarChart3, Blocks, BookOpenCheck, CalendarDays, Database, Gauge,
  GraduationCap, Home, Network, Plane, PlugZap, RadioTower, Rocket, ShieldCheck,
  SlidersHorizontal, SquareCode, UsersRound, Workflow
} from 'lucide-react';

type SoftwareCategory = 'Aviation' | 'WordPress & SaaS' | 'Engineering' | 'Platforms';
type SoftwareStatus = 'Production' | 'Operational' | 'Developed' | 'Active Development';

interface SoftwareProduct {
  id: string; name: string; category: SoftwareCategory; status: SoftwareStatus;
  eyebrow: string; summary: string; technologies: string[]; capabilities: string[];
  accent: 'blue' | 'lime' | 'cyan' | 'violet';
  visual: 'cockpit' | 'flight' | 'wordpress' | 'calendar' | 'analytics' | 'learning' | 'performance' | 'talent' | 'qtg' | 'bridge' | 'property' | 'xapi' | 'simulator' | 'database' | 'elementor';
}

const SOFTWARE_PRODUCTS: SoftwareProduct[] = [
  {id:'jicheki-cockpit-recorder',name:'Jicheki Cockpit Recorder',category:'Aviation',status:'Production',eyebrow:'Flight Telemetry & Diagnostics',summary:'Cockpit, simulator and flight-training telemetry capture, playback and diagnostics built around embedded data acquisition and operational analysis.',technologies:['Python','Raspberry Pi','Arduino','SQL'],capabilities:['Telemetry capture','Playback diagnostics','Sensor acquisition','Reporting'],accent:'blue',visual:'cockpit'},
  {id:'skylink-xplane',name:'SkyLink X-Plane Plugin',category:'Aviation',status:'Developed',eyebrow:'Simulator Connectivity',summary:'Connects X-Plane with ForeFlight, Garmin and other pilot platforms for simulator data exchange, navigation and training workflows.',technologies:['X-Plane','ForeFlight','Garmin','Plugin API'],capabilities:['Simulator integration','Pilot tools','Navigation data','Real-time connectivity'],accent:'cyan',visual:'flight'},
  {id:'jenvibe-mcp',name:'JenVibe MCP',category:'WordPress & SaaS',status:'Production',eyebrow:'AI-to-Website Connectivity',summary:'WordPress MCP integration for authorised AI assistants with approvals, diagnostics, site operations, OAuth/PKCE flows and audit-oriented controls.',technologies:['WordPress','MCP','OAuth / PKCE','REST'],capabilities:['AI connectivity','Approvals','Diagnostics','Site controls'],accent:'violet',visual:'wordpress'},
  {id:'jenlink-timetable',name:'Jenlink Timetable Universal',category:'WordPress & SaaS',status:'Production',eyebrow:'Scheduling & Bookings',summary:'Full-featured class and timetable system with registrations, bookings, reminders, imports, user workflows and Elementor/Gutenberg integration.',technologies:['WordPress','Elementor','CSV','Cron'],capabilities:['Timetables','Bookings','Reminders','User import'],accent:'lime',visual:'calendar'},
  {id:'testimonial-bridge',name:'Testimonial Bridge',category:'WordPress & SaaS',status:'Developed',eyebrow:'Training Quality Intelligence',summary:'Review, testimonial and course-critique platform with moderation, evaluation dashboards, course catalogues and export-ready quality analytics.',technologies:['WordPress','Elementor','Analytics','PDF / CSV'],capabilities:['Course critique','Review moderation','QA dashboards','Exports'],accent:'blue',visual:'analytics'},
  {id:'educore-lms',name:'Educore LMS',category:'WordPress & SaaS',status:'Developed',eyebrow:'Learning Management System',summary:'WordPress LMS with course migration, SCORM/xAPI/iSpring workflows, quizzes, certificates and interoperability with established LMS platforms.',technologies:['WordPress','SCORM','xAPI','iSpring'],capabilities:['Course delivery','LMS migration','Assessments','Learning standards'],accent:'cyan',visual:'learning'},
  {id:'optipress',name:'Optipress',category:'WordPress & SaaS',status:'Developed',eyebrow:'Performance Optimisation',summary:'WordPress performance tooling focused on page and image optimisation for leaner, faster and more maintainable websites.',technologies:['WordPress','PHP','Images','Performance'],capabilities:['Page optimisation','Image optimisation','Performance','Web operations'],accent:'lime',visual:'performance'},
  {id:'verifiedhire',name:'VerifiedHire',category:'Platforms',status:'Active Development',eyebrow:'Recruitment & Credential Platform',summary:'Full-stack candidate and employer platform combining professional verification, job workflows, credentials, privacy controls and AI-assisted matching.',technologies:['React','Firebase','Express','Drizzle'],capabilities:['Candidate verification','Employer ATS','Credentials','AI matching'],accent:'blue',visual:'talent'},
  {id:'verifiedhire-elementor',name:'VerifiedHire Elementor Addon',category:'WordPress & SaaS',status:'Developed',eyebrow:'Native Elementor Integration',summary:'Editable Elementor components that bring VerifiedHire profile, recruitment and platform experiences into WordPress without static embeds.',technologies:['WordPress','Elementor','PHP','REST'],capabilities:['Native widgets','Editable layouts','Profile UI','Recruitment flows'],accent:'violet',visual:'elementor'},
  {id:'simqtg-studio',name:'SimQTG Studio',category:'Engineering',status:'Active Development',eyebrow:'FSTD Qualification Engineering',summary:'QTG campaign and evidence workspace for simulator fidelity profiles, telemetry capture, individual or full-suite tests and engineering validation workflows.',technologies:['X-Plane','Telemetry','QTG','Windows'],capabilities:['QTG campaigns','Fidelity profiles','Evidence capture','Test execution'],accent:'blue',visual:'qtg'},
  {id:'echomorans',name:'EchoMorans',category:'Engineering',status:'Active Development',eyebrow:'Simulator Telemetry Bridge',summary:'Windows engineering application for robust X-Plane telemetry transport, QTG protocol handling, watchdog monitoring and evidence-oriented simulator analysis.',technologies:['C# / .NET','UDP','X-Plane','Telemetry'],capabilities:['UDP transport','Heartbeat monitoring','Data integrity','QTG bridge'],accent:'cyan',visual:'bridge'},
  {id:'kikwetu-property-platform',name:'Kikwetu Property Platform',category:'WordPress & SaaS',status:'Active Development',eyebrow:'Real Estate & Airbnb Operations',summary:'Integrated WordPress property platform for units, hosts, agents, users and bookings with pricing, custom login and native Elementor controls.',technologies:['WordPress','Elementor','Bookings','Maps'],capabilities:['Property units','Hosts & agents','Bookings','Custom login'],accent:'lime',visual:'property'},
  {id:'custom-xapi-injector',name:'Custom xAPI Injector',category:'WordPress & SaaS',status:'Developed',eyebrow:'Learning Telemetry Integration',summary:'Custom WordPress integration for injecting xAPI tracking into embedded Articulate learning content and capturing launch-level learning events.',technologies:['WordPress','xAPI','JavaScript','Articulate'],capabilities:['xAPI injection','Learning events','Embedded content','LMS integration'],accent:'cyan',visual:'xapi'},
  {id:'do228-integration-suite',name:'DO228 Simulator Integration Suite',category:'Aviation',status:'Operational',eyebrow:'Native Simulator Modules',summary:'Integrated X-Plane tooling for the Dornier 228 simulator, grouping DO228Plugin, DO228Sound SASL, DataMirror and UDPGaugeInterface into one engineering suite.',technologies:['X-Plane 11','SASL','UDP','DataRefs'],capabilities:['Aircraft plugin','Sound module','Data mirroring','Gauge interfaces'],accent:'blue',visual:'simulator'},
  {id:'estatik-data-loader',name:'Estatik Real Estate Data Loader',category:'WordPress & SaaS',status:'Active Development',eyebrow:'Property Data Operations',summary:'Backend data-loader architecture for bulk real-estate ingestion with CSV/XLSX mapping, duplicate handling, media import, validation and scalable batch processing.',technologies:['WordPress','Estatik','CSV / XLSX','Batch Jobs'],capabilities:['Bulk import','Field mapping','Deduplication','Import logs'],accent:'violet',visual:'database'}
];

const categories: Array<'All' | SoftwareCategory> = ['All','Aviation','WordPress & SaaS','Engineering','Platforms'];

const iconFor = (visual: SoftwareProduct['visual']) => {
  const cls='h-6 w-6';
  switch(visual){
    case 'cockpit': return <RadioTower className={cls}/>;
    case 'flight': return <Plane className={cls}/>;
    case 'wordpress': return <PlugZap className={cls}/>;
    case 'calendar': return <CalendarDays className={cls}/>;
    case 'analytics': return <BarChart3 className={cls}/>;
    case 'learning': return <GraduationCap className={cls}/>;
    case 'performance': return <Rocket className={cls}/>;
    case 'talent': return <UsersRound className={cls}/>;
    case 'qtg': return <Gauge className={cls}/>;
    case 'bridge': return <Network className={cls}/>;
    case 'property': return <Home className={cls}/>;
    case 'xapi': return <Workflow className={cls}/>;
    case 'simulator': return <Activity className={cls}/>;
    case 'database': return <Database className={cls}/>;
    case 'elementor': return <Blocks className={cls}/>;
    default: return <SquareCode className={cls}/>;
  }
};

const visualContent=(product:SoftwareProduct)=>(
  <div className={'software-visual software-visual--'+product.accent}>
    <div className="software-visual__grid"/><div className="software-visual__icon">{iconFor(product.visual)}</div>
    <div className="software-visual__content"><span>{product.eyebrow}</span><strong>{product.name}</strong></div>
    <div className="software-visual__signal"><i/><i/><i/><i/><i/></div>
  </div>
);

export const SoftwarePortfolio:React.FC=()=>{
  const [active,setActive]=useState<'All'|SoftwareCategory>('All');
  const visible=useMemo(()=>active==='All'?SOFTWARE_PRODUCTS:SOFTWARE_PRODUCTS.filter(p=>p.category===active),[active]);
  const countFor=(category:'All'|SoftwareCategory)=>category==='All'?SOFTWARE_PRODUCTS.length:SOFTWARE_PRODUCTS.filter(p=>p.category===category).length;
  return <section id="software" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80 bg-white scroll-mt-28">
    <div className="max-w-[102.4rem] mx-auto">
      <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6">
        <div className="max-w-4xl"><p className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Software · Plugins · Engineering Tools</p><h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 mt-2">Software & Plugins Portfolio</h2><p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed mt-3">A verified catalogue of aviation software, WordPress products, data platforms and engineering tools I have designed, developed or actively engineered.</p></div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Software categories">{categories.map(category=><button key={category} onClick={()=>setActive(category)} role="tab" aria-selected={active===category} className={'rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all '+(active===category?'border-slate-900 bg-slate-900 text-white shadow-sm':'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-800')}>{category} <span className="ml-1 opacity-70">({countFor(category)})</span></button>)}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-9">{visible.map(product=><article key={product.id} className="software-card group">
        {visualContent(product)}
        <div className="p-5 sm:p-6 flex flex-col flex-1"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold text-blue-700">{product.category}</p><h3 className="font-heading text-lg font-bold text-slate-950 mt-1 leading-tight">{product.name}</h3></div><span className={'status-badge status-badge--'+product.status.toLowerCase().replace(/s+/g,'-')}>{product.status}</span></div>
        <p className="text-sm leading-relaxed text-slate-600 mt-4">{product.summary}</p><div className="grid grid-cols-2 gap-2 mt-5">{product.capabilities.slice(0,4).map(item=><span key={item} className="capability-chip">{item}</span>)}</div><div className="flex flex-wrap gap-1.5 mt-auto pt-5">{product.technologies.map(tech=><span key={tech} className="technology-chip">{tech}</span>)}</div></div>
      </article>)}</div>
      <div className="mt-8 grid md:grid-cols-3 gap-4"><div className="portfolio-proof"><ShieldCheck/><span><strong>Evidence-led</strong><small>Only products supported by repository or project history are shown.</small></span></div><div className="portfolio-proof"><SlidersHorizontal/><span><strong>Lifecycle clarity</strong><small>Production, operational, developed and active-development states stay explicit.</small></span></div><div className="portfolio-proof"><BookOpenCheck/><span><strong>Engineering context</strong><small>Products are tied to real operational, training, data or integration problems.</small></span></div></div>
    </div>
  </section>;
};