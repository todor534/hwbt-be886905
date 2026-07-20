import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="section cta-section" aria-labelledby="cta-heading">
      <div className="container">
        <div className="card cta-card">
          <div className="cta-content">
            <span className="badge">Concierge Workshop Access</span>
            <h2 id="cta-heading">Precision care for exceptional machines.</h2>
            <p>
              Book a private consultation with HWBT for advanced diagnostics, high-end repairs,
              performance tuning, and meticulous supercar maintenance.
            </p>

            <div className="cta-actions" aria-label="Primary actions">
              <Link className="btn btn-primary" to="/contact" aria-label="Book a supercar service consultation">
                <span>Book Consultation</span>
                <svg
                  className="btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M5 12h14m0 0-6-6m6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <a className="btn btn-secondary" href="tel:+18005550197" aria-label="Call HWBT now">
                <svg
                  className="btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Click to Call</span>
              </a>
            </div>
          </div>

          <div className="cta-highlights" aria-label="HWBT service highlights">
            <article className="cta-highlight">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.36-6.36-2.12 2.12M7.76 16.24l-2.12 2.12m12.72 0-2.12-2.12M7.76 7.76 5.64 5.64"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
              <div>
                <h3>Factory-Level Diagnostics</h3>
                <p>Deep electronic fault tracing and calibration for elite performance vehicles.</p>
              </div>
            </article>

            <article className="cta-highlight">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M4 17h16M6 17l2.25-7.5A3 3 0 0 1 11.13 7h1.74a3 3 0 0 1 2.88 2.5L18 17M8 17v2m8-2v2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12h6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <h3>Performance Tuning</h3>
                <p>Refined power delivery, drivability, and reliability for road or track use.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}