import { Link } from 'react-router-dom';

const performanceMetrics = [
  { value: '24h', label: 'Priority diagnostics' },
  { value: '900+', label: 'Exotic vehicles serviced' },
  { value: 'OEM+', label: 'Factory-grade tooling' },
];

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-orb hero-orb-primary" aria-hidden="true" />
      <div className="hero-orb hero-orb-accent" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge hero-badge">
            <svg
              className="badge-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 3l2.35 5.18 5.65.61-4.2 3.82 1.16 5.56L12 15.31l-4.96 2.86 1.16-5.56L4 8.79l5.65-.61L12 3z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            Luxury supercar repair, diagnostics, and tuning
          </span>

          <h1 id="hero-title" className="hero-title">
            Precision care for the world’s most demanding performance cars.
          </h1>

          <p className="hero-subtitle">
            HWBT delivers white-glove mechanical service for exotic, luxury, and
            track-focused vehicles — from advanced fault tracing to performance
            calibration and concours-level maintenance.
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <Link className="btn btn-primary" to="/contact">
              Book a private inspection
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14m0 0l-6-6m6 6l-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <a className="btn btn-secondary" href="tel:+15550194828">
              Click to call
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <dl className="hero-metrics" aria-label="Workshop highlights">
            {performanceMetrics.map((metric) => (
              <div className="hero-metric" key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual" aria-label="Supercar service dashboard">
          <div className="hero-visual-card hero-visual-card-main">
            <div className="hero-visual-header">
              <span className="hero-status-dot" aria-hidden="true" />
              <span>HWBT diagnostic suite</span>
            </div>

            <svg
              className="hero-car-outline"
              viewBox="0 0 520 260"
              fill="none"
              role="img"
              aria-labelledby="hero-car-title"
            >
              <title id="hero-car-title">Luxury supercar diagnostic outline</title>
              <path
                d="M61 157c13-39 38-67 75-83 31-14 72-19 124-19 56 0 102 7 139 21 31 12 52 38 63 78"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M128 139l42-46h154l60 47"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M81 156h71l39 33h139l38-33h73c24 0 43 19 43 43v9H36v-9c0-24 20-43 45-43z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              <path
                d="M203 94l-21 45M324 94l33 45M218 139h92"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="145" cy="208" r="34" stroke="currentColor" strokeWidth="5" />
              <circle cx="145" cy="208" r="12" stroke="currentColor" strokeWidth="4" />
              <circle cx="377" cy="208" r="34" stroke="currentColor" strokeWidth="5" />
              <circle cx="377" cy="208" r="12" stroke="currentColor" strokeWidth="4" />
            </svg>

            <div className="hero-diagnostic-grid">
              <div className="hero-diagnostic-item">
                <span>ECU health</span>
                <strong>99.8%</strong>
              </div>
              <div className="hero-diagnostic-item">
                <span>Boost target</span>
                <strong>Calibrated</strong>
              </div>
              <div className="hero-diagnostic-item">
                <span>Brake temps</span>
                <strong>Optimal</strong>
              </div>
            </div>
          </div>

          <div className="card hero-floating-card hero-floating-card-top">
            <svg
              className="hero-floating-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 12l2 2 4-5M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <strong>Concierge intake</strong>
              <span>Secure collection available</span>
            </div>
          </div>

          <div className="card hero-floating-card hero-floating-card-bottom">
            <svg
              className="hero-floating-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <strong>Performance tuning</strong>
              <span>Power, response, reliability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}