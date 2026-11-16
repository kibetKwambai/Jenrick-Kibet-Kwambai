import React, { useMemo, useState } from 'react';
import {
  Activity, BarChart3, Blocks, CalendarDays, Database, Gauge, GraduationCap, Home,
  Network, Plane, PlugZap, RadioTower, Rocket, UsersRound, Workflow, ArrowUpRight
} from 'lucide-react';

type SoftwareCategory = 'Aviation' | 'WordPress & SaaS' | 'Engineering' | 'Platforms';
type SoftwareStatus = 'Production' | 'Operational' | 'Developed' | 'Active Development';

interface SoftwareProduct {
  id: string;
  name: string;
  category: SoftwareCategory;
  status: SoftwareStatus;
  descriptor: string;
  summary: string;
  technologies: string[];
  capabilities: string[];
  visual: 'cockpit' | 'flight' | 'wordpress' | 'calendar' | 'analytics' | 'learning' | 'performance' | 'talent' | 'qtg' | 'bridge' | 'property' | 'xapi' | 'simulator' | 'database' | 'elementor';
}

const PRODUCTS: SoftwareProduct[] = [
  {id:'jicheki-cockpit-recorder',name:'Jicheki Cockpit Recorder',category:'Aviation',status:'Production',descriptor:'Flight telemetry and diagnostics',summary:'Cockpit, simulator and flight-training telemetry capture, playback and diagnostics built around embedded data acquisition and operational analysis.',technologies:['Python','Raspberry Pi','Arduino','SQL'],capabilities:['Telemetry capture','Playback diagnostics','Sensor acquisition','Reporting'],visual:'cockpit'},
  {id:'skylink-xplane',name:'SkyLink X-Plane Plugin',category:'Aviation',status:'Developed',descriptor:'Simulator connectivity',summary:'Connects X-Plane with ForeFlight, Garmin and other pilot platforms for simulator data exchange, navigation and training workflows.',technologies:['X-Plane','ForeFlight','Garmin','Plugin API'],capabilities:['Simulator integration','Pilot tools','Navigation data','Real-time connectivity'],visual:'flight'},
  {id:'jenvibe-mcp',name:'JenVibe MCP',category:'WordPress & SaaS',status:'Production',descriptor:'AI-to-website connectivity',summary:'WordPress MCP integration for authorised AI assistants with approvals, diagnostics, site operations, OAuth/PKCE flows and audit-oriented controls.',technologies:['WordPress','MCP','OAuth / PKCE','REST'],capabilities:['AI connectivity','Approvals','Diagnostics','Site controls'],visual:'wordpress'},
  {id:'jenlink-timetable',name:'Jenlink Timetable Universal',category:'WordPress & SaaS',status:'Production',descriptor:'Scheduling and bookings',summary:'Full-featured class and timetable system with registrations, bookings, reminders, imports, user workflows and Elementor/Gutenberg integration.',technologies:['WordPress','Elementor','CSV','Cron'],capabilities:['Timetables','Bookings','Reminders','User import'],visual:'calendar'},
  {id:'testimonial-bridge',name:'Testimonial Bridge',category:'WordPress & SaaS',status:'Developed',descriptor:'Training quality intelligence',summary:'Review, testimonial and course-critique platform with moderation, evaluation dashboards, course catalogues and export-ready quality analytics.',technologies:['WordPress','Elementor','Analytics','PDF / CSV'],capabilities:['Course critique','Review moderation','QA dashboards','Exports'],visual:'analytics'},
  {id:'educore-lms',name:'Educore LMS',category:'WordPress & SaaS',status:'Developed',descriptor:'Learning management system',summary:'WordPress LMS with course migration, SCORM/xAPI/iSpring workflows, quizzes, certificates and interoperability with established LMS platforms.',technologies:['WordPress','SCORM','xAPI','iSpring'],capabilities:['Course delivery','LMS migration','Assessments','Learning standards'],visual:'learning'},
  {id:'optipress',name:'Optipress',category:'WordPress & SaaS',status:'Developed',descriptor:'Performance optimisation',summary:'WordPress performance tooling focused on page and image optimisation for leaner, faster and more maintainable websites.',technologies:['WordPress','PHP','Images','Performance'],capabilities:['Page optimisation','Image optimisation','Performance','Web operations'],visual:'performance'},
  {id:'verifiedhire',name:'VerifiedHire',category:'Platforms',status:'Active Development',descriptor:'Recruitment and credential platform',summary:'Full-stack candidate and employer platform combining professional verification, job workflows, credentials, privacy controls and AI-assisted matching.',technologies:['React','Firebase','Express','Drizzle'],capabilities:['Candidate verification','Employer ATS','Credentials','AI matching'],visual:'talent'},
  {id:'verifiedhire-elementor',name:'VerifiedHire Elementor Addon',category:'WordPress & SaaS',status:'Developed',descriptor:'Native Elementor integration',summary:'Editable Elementor components that bring VerifiedHire profile and recruitment experiences into WordPress without static embeds.',technologies:['WordPress','Elementor','PHP','REST'],capabilities:['Native widgets','Editable layouts','Profile UI','Recruitment flows'],visual:'elementor'},
  {id:'simqtg-studio',name:'SimQTG Studio',category:'Engineering',status:'Active Development',descriptor:'FSTD qualification engineering',summary:'QTG campaign and evidence workspace for simulator fidelity profiles, telemetry capture, individual or full-suite tests and engineering validation workflows.',technologies:['X-Plane','Telemetry','QTG','Windows'],capabilities:['QTG campaigns','Fidelity profiles','Evidence capture','Test execution'],visual:'qtg'},
  {id:'echomorans',name:'EchoMorans',category:'Engineering',status:'Active Development',descriptor:'Simulator telemetry bridge',summary:'Windows engineering application for robust X-Plane telemetry transport, QTG protocol handling, watchdog monitoring and evidence-oriented simulator analysis.',technologies:['C# / .NET','UDP','X-Plane','Telemetry'],capabilities:['UDP transport','Heartbeat monitoring','Data integrity','QTG bridge'],visual:'bridge'},
  {id:'kikwetu-property-platform',name:'Kikwetu Property Platform',category:'WordPress & SaaS',status:'Active Development',descriptor:'Real-estate and Airbnb operations',summary:'Integrated WordPress property platform for units, hosts, agents, users and bookings with pricing, custom login and native Elementor controls.',technologies:['WordPress','Elementor','Bookings','Maps'],capabilities:['Property units','Hosts & agents','Bookings','Custom login'],visual:'property'},
  {id:'custom-xapi-injector',name:'Custom xAPI Injector',category:'WordPress & SaaS',status:'Developed',descriptor:'Learning telemetry integration',summary:'Custom WordPress integration for injecting xAPI tracking into embedded Articulate learning content and capturing launch-level learning events.',technologies:['WordPress','xAPI','JavaScript','Articulate'],capabilities:['xAPI injection','Learning events','Embedded content','LMS integration'],visual:'xapi'},
  {id:'do228-integration-suite',name:'DO228 Simulator Integration Suite',category:'Aviation',status:'Operational',descriptor:'Native simulator modules',summary:'Integrated X-Plane tooling for the Dornier 228 simulator, grouping aircraft plugin, sound, data-mirroring and UDP gauge interfaces into one engineering suite.',technologies:['X-Plane 11','SASL','UDP','DataRefs'],capabilities:['Aircraft plugin','Sound module','Data mirroring','Gauge interfaces'],visual:'simulator'},
  {id:'estatik-data-loader',name:'Estatik Real Estate Data Loader',category:'WordPress & SaaS',status:'Active Development',descriptor:'Property data operations',summary:'Backend data-loader architecture for bulk real-estate ingestion with CSV/XLSX mapping, duplicate handling, media import, validation and scalable batch processing.',technologies:['WordPress','Estatik','CSV / XLSX','Batch Jobs'],capabilities:['Bulk import','Field mapping','Deduplication','Import logs'],visual:'database'}
];

const FEATURED_IDS = new Set(['jicheki-cockpit-recorder','skylink-xplane','jenvibe-mcp','simqtg-studio']);
const categories: Array<'All' | SoftwareCategory> = ['All','Aviation','WordPress & SaaS','Engineering','Platforms'];

const iconFor = (visual: SoftwareProduct['visual']) => {
  const cls = 'h-6 w-6';
  switch (visual) {
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
    default: return <Activity className={cls}/>;
  }
};

export const SoftwarePortfolio: React.FC = () => {
  const [active, setActive] = useState<'All' | SoftwareCategory>('All');
  const visible = useMemo(() => active === 'All' ? PRODUCTS : PRODUCTS.filter(product => product.category === active), [active]);
  const featured = visible.filter(product => FEATURED_IDS.has(product.id));
  const catalogue = visible.filter(product => !FEATURED_IDS.has(product.id));

  const countFor = (category: 'All' | SoftwareCategory) => category === 'All' ? PRODUCTS.length : PRODUCTS.filter(product => product.category === category).length;

  return (
    <section id="software" className="profile-section software-section border-y border-slate-200 bg-white">
      <div className="profile-section__inner">
        <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-7">
          <div className="max-w-3xl">
            <p className="section-kicker">Software and engineering tools</p>
            <h2 className="section-title mt-3">Products built around real operational problems.</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Aviation software, WordPress products, data platforms and engineering tools—shown with their actual lifecycle state rather than presented as one undifferentiated project list.
            </p>
          </div>

          <div className="filter-bar" role="tablist" aria-label="Software categories">
            {categories.map(category => (
              <button
                key={category}
                role="tab"
                aria-selected={active === category}
                onClick={() => setActive(category)}
                className={active === category ? 'filter-pill filter-pill--active' : 'filter-pill'}
              >
                {category}<span>{countFor(category)}</span>
              </button>
            ))}
          </div>
        </div>

        {featured.length > 0 && (
          <div className="featured-product-grid mt-10">
            {featured.map(product => (
              <article key={product.id} className="featured-product">
                <div className="featured-product__visual">
                  <div className="featured-product__icon">{iconFor(product.visual)}</div>
                  <div className="featured-product__telemetry" aria-hidden="true">
                    <span/><span/><span/><span/><span/><span/><span/>
                  </div>
                </div>
                <div className="featured-product__body">
                  <div className="flex items-center justify-between gap-3">
                    <span className="product-category">{product.category}</span>
                    <span className="product-status">{product.status}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="product-descriptor">{product.descriptor}</p>
                  <p className="product-summary">{product.summary}</p>
                  <div className="product-capabilities">
                    {product.capabilities.slice(0, 3).map(capability => <span key={capability}>{capability}</span>)}
                  </div>
                  <div className="product-stack">
                    {product.technologies.map(technology => <span key={technology}>{technology}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {catalogue.length > 0 && (
          <div className="product-catalogue mt-10">
            <div className="product-catalogue__header">
              <h3>Product catalogue</h3>
              <span>{catalogue.length} additional products</span>
            </div>
            {catalogue.map(product => (
              <article key={product.id} className="catalogue-row">
                <div className="catalogue-row__icon">{iconFor(product.visual)}</div>
                <div className="catalogue-row__identity">
                  <span>{product.category}</span>
                  <h4>{product.name}</h4>
                </div>
                <p className="catalogue-row__summary">{product.summary}</p>
                <div className="catalogue-row__meta">
                  <span>{product.status}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};