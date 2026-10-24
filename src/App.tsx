
import {
  Activity,
  Beaker,
  BookOpen,
  Calculator,
  ChevronRight,
  ClipboardCheck,
  FlaskConical,
  Gauge,
  Layers3,
  Settings,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

const tools = [
  {
    title: 'Alloying Calculator',
    description: 'Calculate alloy additions and metal charge weights.',
    url: 'https://triumphmotorcycle.github.io/tj-alloying-calculator/',
    icon: Calculator,
    category: 'METAL & ALLOYS',
  },
  {
    title: 'Investment Powder Calculator',
    description: 'Calculate investment powder requirements.',
    url: 'https://triumphmotorcycle.github.io/Investment-powder-calc/',
    icon: Beaker,
    category: 'INVESTMENT',
  },
  {
    title: 'Sprue Diameter Calculator',
    description: 'Access your sprue sizing calculator.',
    url: 'https://triumphmotorcycle.github.io/Sprue-diameter-calculator/',
    icon: Gauge,
    category: 'CASTING DESIGN',
  },
];

const modules = [
  {
    title: 'Casting Diagnostics',
    description: 'Record casting defects, investigate causes and document corrective actions.',
    icon: Activity,
    status: 'PLANNED',
  },
  {
    title: 'Trial & Evidence Register',
    description: 'Record controlled trials, outcomes and follow-up evidence.',
    icon: FlaskConical,
    status: 'PLANNED',
  },
  {
    title: 'Shared Technical Knowledge',
    description: 'Share useful cases and trial results across workshop sites.',
    icon: BookOpen,
    status: 'PLANNED',
  },
  {
    title: 'Workshop Administration',
    description: 'Manage sites, permissions and case history.',
    icon: ShieldCheck,
    status: 'PLANNED',
  },
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#home">
          <div className="brand-mark">
            <Layers3 size={24} />
          </div>
          <div>
            <strong>WORKSHOP</strong>
            <span>HUB</span>
          </div>
        </a>

        <div className="sidebar-label">WORKSPACE</div>
        <a className="nav-item active" href="#home">
          <Activity size={18} />
          <span>Overview</span>
        </a>
        <a className="nav-item" href="#diagnostics">
          <ClipboardCheck size={18} />
          <span>Casting diagnostics</span>
        </a>
        <a className="nav-item" href="#trials">
          <FlaskConical size={18} />
          <span>Trials & evidence</span>
        </a>
        <a className="nav-item" href="#knowledge">
          <BookOpen size={18} />
          <span>Shared knowledge</span>
        </a>

        <div className="sidebar-label tools-label">WORKSHOP TOOLS</div>
        {tools.map((tool) => (
          <a
            className="nav-item"
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            key={tool.title}
          >
            <tool.icon size={18} />
            <span>{tool.title}</span>
            <ChevronRight className="nav-chevron" size={15} />
          </a>
        ))}

        <div className="sidebar-bottom">
          <div className="sidebar-label">SYSTEM</div>
          <a className="nav-item" href="#admin">
            <Settings size={18} />
            <span>Administration</span>
          </a>
          <div className="system-note">
            <span className="status-dot" />
            <span>Workshop platform</span>
          </div>
        </div>
      </aside>

      <main className="main-content" id="home">
        <header className="topbar">
          <div>
            <div className="breadcrumb">WORKSPACE / OVERVIEW</div>
            <h1>Workshop Hub</h1>
          </div>
          <div className="topbar-right">
            <span className="environment-label">FOUNDATION BUILD</span>
            <div className="user-mark"><Wrench size={18} /></div>
          </div>
        </header>

        <section className="welcome-panel">
          <div className="welcome-copy">
            <div className="eyebrow">CENTRAL WORKSHOP PLATFORM</div>
            <h2>Technical knowledge.<br />Connected.</h2>
            <p>
              A central workspace for casting diagnostics, controlled trials
              and the technical tools used across your workshops.
            </p>
            <a className="primary-link" href="#tools">
              Explore workshop tools <ChevronRight size={17} />
            </a>
          </div>
          <div className="welcome-art" aria-hidden="true">
            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />
            <div className="art-core"><Layers3 size={54} /></div>
            <div className="art-tag tag-one">PROCESS</div>
            <div className="art-tag tag-two">PRECISION</div>
            <div className="art-tag tag-three">EVIDENCE</div>
          </div>
        </section>

        <section className="section" id="tools">
          <div className="section-heading">
            <div>
              <div className="eyebrow">READY TO USE</div>
              <h2>Workshop tools</h2>
              <p>Your existing calculators, available from one place.</p>
            </div>
            <span className="section-count">03 TOOLS</span>
          </div>

          <div className="tool-grid">
            {tools.map((tool, index) => (
              <a
                className="tool-card"
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                key={tool.title}
              >
                <div className="card-topline">
                  <span>{tool.category}</span>
                  <span className="card-index">0{index + 1}</span>
                </div>
                <div className="tool-icon"><tool.icon size={24} /></div>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <div className="card-action">
                  Open calculator <ChevronRight size={16} />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="diagnostics">
          <div className="section-heading">
            <div>
              <div className="eyebrow">PLATFORM MODULES</div>
              <h2>Workshop operations</h2>
              <p>The next areas to build into the central platform.</p>
            </div>
          </div>

          <div className="module-grid">
            {modules.map((module) => (
              <article className="module-card" key={module.title}>
                <div className="module-icon"><module.icon size={21} /></div>
                <div className="module-copy">
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                  <span className="planned-label">{module.status}</span>
                </div>
                <ChevronRight className="module-chevron" size={18} />
              </article>
            ))}
          </div>
        </section>

        <footer className="footer">
          <span>WORKSHOP HUB <span className="footer-divider">/</span> FOUNDATION</span>
          <span>Built for practical workshop knowledge</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
