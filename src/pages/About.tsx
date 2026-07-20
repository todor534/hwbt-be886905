import { Link } from "react-router-dom";

const pillars = [
  {
    title: "Dealer-level diagnostics",
    description:
      "Precision fault tracing, calibration checks, and electronic system analysis for modern exotic platforms.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 7h16M7 7v10m10-10v10M6 17h12a2 2 0 0 1 2 2v1H4v-1a2 2 0 0 1 2-2Z" />
        <path d="M9 11h6M9 14h6" />
      </svg>
    ),
  },
  {
    title: "Performance calibration",
    description:
      "Measured tuning, cooling, exhaust, braking, and drivability upgrades engineered for road and track confidence.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 14a8 8 0 0 1 16 0" />
        <path d="M12 14l5-5" />
        <path d="M7 18h10" />
        <path d="M5 18a10 10 0 1 1 14 0" />
      </svg>
    ),
  },
  {
    title: "Concierge ownership care",
    description:
      "Transparent scheduling, collection support, detailed reporting, and a workshop experience designed around discretion.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    ),
  },
];

const values = [
  "Factory-informed repair methods",
  "Documented inspections and estimates",
  "High-performance parts guidance",
  "Protective handling for premium finishes",
];

export default function About() {
  return (
    <main className="about-page">
      <section className="section page-hero about-hero" aria-labelledby="about-title">
        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <p className="badge">About HWBT</p>
            <h1 id="about-title">Luxury supercar care with engineering discipline.</h1>
            <p className="page-hero__lead">
              HWBT is built for owners who expect more than routine servicing. We deliver high-end diagnostics,
              specialist repairs, and performance tuning for prestige and exotic vehicles with exacting attention
              to detail.
            </p>
            <div className="hero-actions" aria-label="About page actions">
              <Link className="btn btn--primary" to="/contact">
                Book a consultation
              </Link>
              <Link className="btn btn--secondary" to="/services">
                Explore services
              </Link>
            </div>
          </div>

          <aside className="card about-hero__panel" aria-label="Workshop highlights">
            <p className="about-hero__eyebrow">Specialist focus</p>
            <ul className="feature-list">
              <li>Exotic diagnostics and electrical tracing</li>
              <li>Performance tuning and upgrade planning</li>
              <li>Brake, suspension, drivetrain, and cooling systems</li>
              <li>Pre-purchase inspections and ownership reporting</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="about-mission-title">
        <div className="container split-section">
          <div className="split-section__content">
            <p className="badge">Our standard</p>
            <h2 id="about-mission-title">Built for precision, trust, and high-value machines.</h2>
            <p>
              Every vehicle entering HWBT is treated as a performance asset. Our approach combines structured
              diagnostic methodology, premium workshop presentation, and clear communication so owners understand
              exactly what their car needs and why.
            </p>
            <p>
              From refined road cars to track-focused builds, we prioritise reliability, repeatable performance,
              and long-term ownership confidence.
            </p>
          </div>

          <div className="stats-grid" aria-label="HWBT service standards">
            <article className="card stat-card">
              <strong>01</strong>
              <span>Inspect thoroughly before recommending work</span>
            </article>
            <article className="card stat-card">
              <strong>02</strong>
              <span>Specify parts and upgrades with purpose</span>
            </article>
            <article className="card stat-card">
              <strong>03</strong>
              <span>Validate repairs through road-ready testing</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="about-pillars-title">
        <div className="container">
          <div className="section-heading">
            <p className="badge">What defines us</p>
            <h2 id="about-pillars-title">A specialist workshop experience.</h2>
            <p>
              HWBT brings together technical depth and a luxury service mindset for owners of modern performance
              and supercar platforms.
            </p>
          </div>

          <div className="features-grid">
            {pillars.map((pillar) => (
              <article className="card feature-card" key={pillar.title}>
                <div className="icon-shell">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="about-values-title">
        <div className="container">
          <div className="card values-card">
            <div className="values-card__content">
              <p className="badge">Owner confidence</p>
              <h2 id="about-values-title">Transparent care for extraordinary vehicles.</h2>
              <p>
                We keep the process calm, clear, and precise. Whether you need an urgent diagnostic appointment,
                a scheduled service, or a staged performance plan, our team provides the insight needed to make
                confident decisions.
              </p>
            </div>

            <ul className="check-list">
              {values.map((value) => (
                <li key={value}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section cta-section" aria-labelledby="about-cta-title">
        <div className="container">
          <div className="card cta-card">
            <div>
              <p className="badge">Speak with HWBT</p>
              <h2 id="about-cta-title">Ready to discuss your supercar?</h2>
              <p>
                Book a private consultation for diagnostics, servicing, repairs, or a tailored performance upgrade
                plan.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn--primary" to="/contact">
                Request booking
              </Link>
              <a className="btn btn--secondary" href="tel:+440000000000">
                Click to call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}