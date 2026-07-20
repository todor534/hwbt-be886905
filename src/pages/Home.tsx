import { Link } from "react-router-dom";

type Feature = {
  title: string;
  description: string;
  iconPath: string;
};

type Service = {
  title: string;
  description: string;
  detail: string;
};

type Testimonial = {
  quote: string;
  name: string;
  vehicle: string;
};

const features: Feature[] = [
  {
    title: "Factory-Level Diagnostics",
    description:
      "Advanced scanning, fault tracing, calibration, and electronic systems analysis for modern exotic platforms.",
    iconPath:
      "M9.75 3.75h4.5m-8.25 3h12m-13.5 0A2.25 2.25 0 0 0 2.25 9v6A2.25 2.25 0 0 0 4.5 17.25h15A2.25 2.25 0 0 0 21.75 15V9a2.25 2.25 0 0 0-2.25-2.25m-15 0v10.5m15-10.5v10.5M8.25 12h.008v.008H8.25V12Zm3.75 0h.008v.008H12V12Zm3.75 0h.008v.008h-.008V12Z",
  },
  {
    title: "Performance Tuning",
    description:
      "Power delivery refinement, ECU optimization, cooling improvements, exhaust upgrades, and track-focused setup.",
    iconPath:
      "M3.75 13.5 9 8.25l3.75 3.75L20.25 4.5m0 0h-5.25m5.25 0v5.25M4.5 19.5h15",
  },
  {
    title: "Luxury Repair Standards",
    description:
      "Meticulous mechanical repair and restoration processes built for rare, high-value, and collector-grade vehicles.",
    iconPath:
      "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766m-3.704 3.796L6.75 20.25A2.652 2.652 0 0 1 3 16.5l5.08-4.67m3.34 3.34-3.34-3.34m0 0a5.25 5.25 0 0 1 6.806-7.889l-3.092 3.092 3.182 3.182 3.092-3.092a5.25 5.25 0 0 1-6.648 8.047Z",
  },
];

const services: Service[] = [
  {
    title: "Supercar Servicing",
    description:
      "Scheduled maintenance, fluid systems, brake service, suspension setup, and precision inspections.",
    detail: "Ferrari, Lamborghini, McLaren, Porsche, Aston Martin, Bentley, AMG, and more.",
  },
  {
    title: "Diagnostics & Electrical",
    description:
      "CAN network investigation, warning light resolution, sensor testing, coding, adaptations, and module support.",
    detail: "Built for complex luxury platforms where accuracy matters.",
  },
  {
    title: "Performance Builds",
    description:
      "Bespoke tuning packages, exhaust systems, intake upgrades, cooling enhancements, and drivability refinement.",
    detail: "Engineered for fast road confidence and track-day reliability.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "HWBT treated my car with the same care I would expect from a private race team. Clear communication and flawless execution.",
    name: "Marcus R.",
    vehicle: "Ferrari 488 GTB",
  },
  {
    quote:
      "The diagnostic process was incredibly thorough. They found what two other specialists missed and had the car perfect again.",
    name: "Elena V.",
    vehicle: "McLaren 720S",
  },
  {
    quote:
      "Professional, discreet, and exacting. The tuning package transformed the car without compromising its luxury feel.",
    name: "James K.",
    vehicle: "Porsche 911 Turbo S",
  },
];

function Home() {
  return (
    <main className="home-page">
      <section className="hero hero--luxury" aria-labelledby="home-hero-title">
        <div className="container hero__container">
          <div className="hero__content">
            <p className="badge">Premium supercar mechanics</p>
            <h1 id="home-hero-title">Luxury care for high-performance machines.</h1>
            <p className="hero__subtitle">
              HWBT delivers specialist diagnostics, high-end repairs, and performance tuning for exotic
              vehicles that demand precision, discretion, and uncompromising standards.
            </p>
            <div className="hero__actions" aria-label="Primary actions">
              <Link className="btn btn--primary" to="/contact">
                Book an inspection
              </Link>
              <a className="btn btn--secondary" href="tel:+15550197000">
                Call now
              </a>
            </div>
          </div>

          <aside className="hero__panel card" aria-label="Workshop highlights">
            <div className="hero__metric">
              <span className="hero__metric-value">24h</span>
              <span className="hero__metric-label">Priority diagnostics available</span>
            </div>
            <div className="hero__metric">
              <span className="hero__metric-value">OEM+</span>
              <span className="hero__metric-label">Repair and tuning philosophy</span>
            </div>
            <div className="hero__metric">
              <span className="hero__metric-value">Elite</span>
              <span className="hero__metric-label">Service for prestige marques</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="home-features-title">
        <div className="container">
          <div className="section__header">
            <p className="badge">Why HWBT</p>
            <h2 id="home-features-title">Precision service for vehicles that cannot be average.</h2>
            <p>
              From fault diagnosis to performance refinement, every HWBT service is designed around
              controlled process, premium parts, and meticulous attention to detail.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="card feature-card" key={feature.title}>
                <div className="feature-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" role="img">
                    <path
                      d={feature.iconPath}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="home-services-title">
        <div className="container">
          <div className="section__header">
            <p className="badge">Service showcase</p>
            <h2 id="home-services-title">High-end repairs, diagnostics, and tuning under one roof.</h2>
          </div>

          <div className="service-showcase">
            {services.map((service) => (
              <article className="card service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span>{service.detail}</span>
              </article>
            ))}
          </div>

          <div className="section__actions">
            <Link className="btn btn--primary" to="/services">
              Explore services
            </Link>
            <Link className="btn btn--ghost" to="/gallery">
              View workshop gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="home-gallery-title">
        <div className="container">
          <div className="section__header">
            <p className="badge">Inside the workshop</p>
            <h2 id="home-gallery-title">A clean, controlled environment for exceptional vehicles.</h2>
          </div>

          <div className="gallery-preview">
            <article className="card gallery-preview__item">
              <img src="" alt="Luxury supercar in a diagnostic bay at HWBT" />
            </article>
            <article className="card gallery-preview__item">
              <img src="" alt="Technician performing precision engine work" />
            </article>
            <article className="card gallery-preview__item">
              <img src="" alt="High-end supercar workshop with premium lighting" />
            </article>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="home-testimonials-title">
        <div className="container">
          <div className="section__header">
            <p className="badge">Client confidence</p>
            <h2 id="home-testimonials-title">Trusted by owners who expect discretion and excellence.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="card testimonial-card" key={testimonial.name}>
                <p>“{testimonial.quote}”</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.vehicle}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section" aria-labelledby="home-cta-title">
        <div className="container">
          <div className="card cta-card">
            <div>
              <p className="badge">Book with HWBT</p>
              <h2 id="home-cta-title">Ready to give your supercar the specialist attention it deserves?</h2>
              <p>
                Schedule diagnostics, repair consultation, performance tuning, or a private vehicle
                assessment with the HWBT team.
              </p>
            </div>
            <div className="cta-card__actions">
              <Link className="btn btn--primary" to="/contact">
                Request booking
              </Link>
              <a className="btn btn--secondary" href="tel:+15550197000">
                Click to call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;