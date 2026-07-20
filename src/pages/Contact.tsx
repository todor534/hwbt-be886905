import BookingForm from "../components/BookingForm";
import ClickToCall from "../components/ClickToCall";

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="page-hero contact-hero" aria-labelledby="contact-title">
        <div className="container page-hero__inner">
          <span className="badge">Private client intake</span>
          <h1 id="contact-title">Book elite care for your supercar.</h1>
          <p className="page-hero__text">
            Connect with HWBT for precision diagnostics, high-end repairs, and
            performance tuning delivered with discretion, expertise, and
            uncompromising attention to detail.
          </p>
          <div className="hero-actions" aria-label="Contact actions">
            <a className="btn btn-primary" href="#booking">
              Request appointment
            </a>
            <a className="btn btn-secondary" href="tel:+15550197000">
              Call specialist
            </a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-options-title">
        <div className="container">
          <div className="section-heading">
            <span className="badge">Concierge access</span>
            <h2 id="contact-options-title">Designed around your vehicle schedule.</h2>
            <p>
              Whether your Ferrari, Lamborghini, McLaren, Porsche, Aston Martin,
              or Bentley requires urgent diagnostics or a planned performance
              build, our team responds with clarity and precision.
            </p>
          </div>

          <div className="feature-grid contact-grid">
            <article className="card contact-card">
              <div className="icon-shell" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h15c1.243 0 2.25 1.007 2.25 2.25v10.5c0 1.243-1.007 2.25-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="m4.5 7.5 7.5 5.25 7.5-5.25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Email intake</h3>
              <p>
                Send service history, symptoms, inspection goals, or upgrade
                plans for a guided response from our specialist team.
              </p>
              <a className="text-link" href="mailto:concierge@hwbt.co">
                concierge@hwbt.co
              </a>
            </article>

            <article className="card contact-card">
              <div className="icon-shell" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M7.5 4.5h9A1.5 1.5 0 0 1 18 6v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18V6a1.5 1.5 0 0 1 1.5-1.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M10.5 17.25h3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Click-to-call</h3>
              <p>
                Speak directly with a technician for urgent faults, transport
                coordination, pre-purchase inspections, or dyno scheduling.
              </p>
              <ClickToCall />
            </article>

            <article className="card contact-card">
              <div className="icon-shell" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M12 21s7.5-5.25 7.5-11.25a7.5 7.5 0 0 0-15 0C4.5 15.75 12 21 12 21Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <h3>Workshop visits</h3>
              <p>
                Private appointments are available for vehicle drop-off,
                diagnostic reviews, tuning consultations, and completion
                walkthroughs.
              </p>
              <address>
                HWBT Performance Atelier
                <br />
                Private workshop access by appointment
              </address>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-split" id="booking" aria-labelledby="booking-title">
        <div className="container split-layout">
          <div className="split-content">
            <span className="badge">Booking form</span>
            <h2 id="booking-title">Tell us what your vehicle needs.</h2>
            <p>
              Share the model, service concern, and preferred timing. HWBT will
              review your request and confirm the next step with a tailored plan.
            </p>

            <div className="contact-list" aria-label="Service priorities">
              <div className="contact-list__item">
                <span className="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path
                      d="m5 12.5 4.25 4.25L19 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Dealer-level diagnostics for exotic platforms</span>
              </div>
              <div className="contact-list__item">
                <span className="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path
                      d="m5 12.5 4.25 4.25L19 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Performance tuning, calibration, and dyno validation</span>
              </div>
              <div className="contact-list__item">
                <span className="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path
                      d="m5 12.5 4.25 4.25L19 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Confidential transport and appointment coordination</span>
              </div>
            </div>
          </div>

          <article className="card booking-card" aria-label="Appointment request form">
            <BookingForm />
          </article>
        </div>
      </section>

      <section className="section contact-cta" aria-labelledby="contact-cta-title">
        <div className="container">
          <article className="card cta-card">
            <span className="badge">Ready when you are</span>
            <h2 id="contact-cta-title">Protect the performance, value, and character of your car.</h2>
            <p>
              From precision repair to elevated tuning, HWBT delivers luxury
              mechanical care for owners who expect the details to matter.
            </p>
            <div className="cta-actions">
              <a className="btn btn-primary" href="#booking">
                Start booking
              </a>
              <a className="btn btn-secondary" href="tel:+15550197000">
                Call now
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Contact;