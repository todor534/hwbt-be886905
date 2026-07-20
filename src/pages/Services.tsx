import { Link } from "react-router-dom";

type Service = {
  title: string;
  description: string;
  details: string[];
  icon: JSX.Element;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Advanced Diagnostics",
    description:
      "Dealer-level fault tracing, live data analysis, and electrical investigation for modern exotic platforms.",
    details: ["ECU interrogation", "CAN bus analysis", "Sensor validation"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
        <path d="M8 9h3M8 13h8M8 16h5M15 9h1" />
        <path d="M9 5V3M15 5V3M9 21v-2M15 21v-2" />
      </svg>
    ),
  },
  {
    title: "Performance Tuning",
    description:
      "Precision calibration, drivability refinement, and power optimization tailored to your vehicle and use case.",
    details: ["ECU calibration", "Dyno validation", "Track-ready mapping"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
        <path d="M12 19a7 7 0 1 0-7-7" />
        <path d="M12 12 17 7" />
        <path d="M7 17 5 19M17 17l2 2M4 12H2M22 12h-2M7 7 5 5M12 5V2" />
      </svg>
    ),
  },
  {
    title: "Engine & Drivetrain",
    description:
      "Meticulous mechanical repair for high-output engines, transmissions, differentials, and cooling systems.",
    details: ["Engine repair", "Transmission service", "Cooling upgrades"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
        <path d="M3 10h4l2-3h6l2 3h4v7h-2l-1.5 3h-11L5 17H3v-7Z" />
        <path d="M9 11h6M10 15h4M7 7V4h3M14 4h3v3" />
      </svg>
    ),
  },
  {
    title: "Brakes & Suspension",
    description:
      "Carbon ceramic brake service, chassis setup, alignment, and suspension tuning for road and circuit confidence.",
    details: ["Brake inspection", "Geometry setup", "Damper calibration"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
      </svg>
    ),
  },
  {
    title: "Pre-Purchase Inspection",
    description:
      "Comprehensive supercar inspections covering mechanical condition, diagnostics, body evidence, and ownership risk.",
    details: ["Digital report", "Paint readings", "Fault history review"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
        <path d="M9 11 11 13 15.5 8.5" />
        <path d="M5 4h14v16H5V4Z" />
        <path d="M8 17h8" />
      </svg>
    ),
  },
  {
    title: "Concierge Maintenance",
    description:
      "Discreet scheduled servicing, collection coordination, seasonal preparation, and preservation for prestige vehicles.",
    details: ["Annual servicing", "Fluid programs", "Storage preparation"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
        <path d="M12 3 4 7v5c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V7l-8-4Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Private Consultation",
    description:
      "Tell us what you drive, what you feel, and what outcome you want. We define the right diagnostic or tuning path before the car arrives.",
  },
  {
    step: "02",
    title: "Precision Inspection",
    description:
      "Your vehicle is assessed using specialist tooling, live data, road testing, and technician-led mechanical checks.",
  },
  {
    step: "03",
    title: "Transparent Scope",
    description:
      "You receive a clear repair plan with priority levels, performance options, timelines, and approval points.",
  },
  {
    step: "04",
    title: "Expert Execution",
    description:
      "Work is completed with disciplined documentation, quality control, final validation, and a refined handover.",
  },
];

const platforms = [
  "Ferrari",
  "Lamborghini",
  "McLaren",
  "Porsche GT",
  "Aston Martin",
  "Bentley",
  "Maserati",
  "Audi R8",
];

export default function Services() {
  return (
    <main className="services-page">
      <section className="section hero services-hero" aria-labelledby="services-title">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="badge">HWBT Specialist Services</span>
            <h1 id="services-title">Supercar repair, diagnostics, and tuning without compromise.</h1>
            <p className="hero-subtitle">
              High-end mechanical care for performance vehicles that demand exacting standards,
              discreet handling, and engineering-led decisions.
            </p>
            <div className="hero-actions" aria-label="Service actions">
              <a className="btn btn-primary" href="#booking">
                Request a Booking
              </a>
              <a className="btn btn-secondary" href="tel:+440000000000" aria-label="Call HWBT now">
                Call the Workshop
              </a>
            </div>
          </div>

          <aside className="card hero-panel" aria-label="Workshop highlights">
            <p className="eyebrow">Luxury Performance Care</p>
            <ul className="feature-list">
              <li>Dealer-level diagnostic workflows</li>
              <li>Performance tuning and calibration</li>
              <li>Carbon ceramic and chassis expertise</li>
              <li>Secure appointment-only handling</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="service-showcase-title">
        <div className="container">
          <div className="section-header">
            <span className="badge">Service Showcase</span>
            <h2 id="service-showcase-title">Built for elite machines and discerning owners.</h2>
            <p>
              From subtle drivability faults to full performance transformations, HWBT delivers
              specialist care with luxury-level attention to detail.
            </p>
          </div>

          <div className="card-grid services-grid">
            {services.map((service, index) => (
              <article className="card service-card" key={service.title}>
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="compact-list" aria-label={`${service.title} includes`}>
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <span className="card-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-section" aria-labelledby="diagnostics-title">
        <div className="container split-grid">
          <div className="section-content">
            <span className="badge">Diagnostics First</span>
            <h2 id="diagnostics-title">We find the cause before replacing the part.</h2>
            <p>
              Luxury performance cars rely on complex electronics, tightly packaged mechanical
              systems, and highly sensitive calibrations. Our diagnostic process is designed to
              isolate root causes, protect your investment, and prevent expensive guesswork.
            </p>
            <div className="metric-row" aria-label="Service standards">
              <div className="metric card">
                <strong>360°</strong>
                <span>Vehicle assessment</span>
              </div>
              <div className="metric card">
                <strong>1:1</strong>
                <span>Technician consultation</span>
              </div>
              <div className="metric card">
                <strong>QC</strong>
                <span>Final validation</span>
              </div>
            </div>
          </div>

          <div className="card luxury-panel">
            <h3>Common issues we resolve</h3>
            <ul className="feature-list">
              <li>Intermittent warning lights and limp mode events</li>
              <li>Misfires, boost control faults, and fueling irregularities</li>
              <li>Transmission hesitation, clutch adaptation, and shift quality</li>
              <li>Brake vibration, suspension noise, and handling instability</li>
              <li>Battery drain, module communication, and sensor network faults</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <div className="section-header">
            <span className="badge">Our Process</span>
            <h2 id="process-title">A refined workflow from first call to final handover.</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((item) => (
              <article className="card process-card" key={item.step}>
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="platforms-title">
        <div className="container">
          <div className="card platform-card">
            <div>
              <span className="badge">Supported Marques</span>
              <h2 id="platforms-title">Specialist attention for the world’s most demanding platforms.</h2>
              <p>
                Whether your vehicle is a weekend collector piece, a track-focused machine, or a
                daily-driven performance car, HWBT applies the same disciplined standard.
              </p>
            </div>

            <div className="brand-cloud" aria-label="Example marques serviced">
              {platforms.map((platform) => (
                <span className="brand-pill" key={platform}>
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section booking-section" id="booking" aria-labelledby="booking-title">
        <div className="container split-grid">
          <div className="section-content">
            <span className="badge">Book Your Service</span>
            <h2 id="booking-title">Secure a private workshop appointment.</h2>
            <p>
              Share the essentials and our team will confirm availability, recommended next steps,
              and any preparation required before your visit.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href="tel:+440000000000" aria-label="Click to call HWBT">
                Click to Call
              </a>
              <Link className="btn btn-secondary" to="/contact">
                Contact Page
              </Link>
            </div>
          </div>

          <form className="card booking-form" aria-label="Service booking form">
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input className="input" id="name" name="name" type="text" autoComplete="name" required />
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone</label>
              <input className="input" id="phone" name="phone" type="tel" autoComplete="tel" required />
            </div>

            <div className="form-row">
              <label htmlFor="vehicle">Vehicle</label>
              <input
                className="input"
                id="vehicle"
                name="vehicle"
                type="text"
                placeholder="Make, model, year"
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="service">Service Required</label>
              <select className="input" id="service" name="service" required defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option value="diagnostics">Advanced diagnostics</option>
                <option value="repair">High-end repair</option>
                <option value="tuning">Performance tuning</option>
                <option value="inspection">Pre-purchase inspection</option>
                <option value="maintenance">Concierge maintenance</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="message">Brief Description</label>
              <textarea
                className="input"
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about the issue, upgrade, or appointment you need."
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <section className="section cta-section" aria-labelledby="services-cta-title">
        <div className="container">
          <div className="card cta-card">
            <span className="badge">HWBT</span>
            <h2 id="services-cta-title">Ready to give your supercar specialist attention?</h2>
            <p>
              Speak with HWBT about diagnostics, repairs, tuning, or a tailored maintenance plan.
            </p>
            <div className="cta-actions">
              <a className="btn btn-primary" href="tel:+440000000000">
                Call Now
              </a>
              <Link className="btn btn-secondary" to="/gallery">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}