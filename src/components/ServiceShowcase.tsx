import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ServiceItem = {
  title: string;
  description: string;
  highlights: string[];
  icon: ReactNode;
};

const services: ServiceItem[] = [
  {
    title: "Supercar Diagnostics",
    description:
      "Factory-grade fault tracing for complex drivetrains, electronics, telemetry systems, and performance control modules.",
    highlights: ["ECU analysis", "Electrical fault tracing", "Pre-track inspection"],
    icon: (
      <svg className="service-showcase__icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v7A2.5 2.5 0 0 1 17.5 17H16l-2 3h-4l-2-3H6.5A2.5 2.5 0 0 1 4 14.5v-7Z" />
        <path d="M8 10h2.25L12 7l2 7 1.75-4H18" />
      </svg>
    ),
  },
  {
    title: "Performance Tuning",
    description:
      "Measured calibration and hardware upgrades designed to unlock power while preserving refinement, reliability, and control.",
    highlights: ["ECU calibration", "Exhaust upgrades", "Dyno-led optimisation"],
    icon: (
      <svg className="service-showcase__icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 21a8 8 0 0 0 8-8c0-3.7-2.5-7.1-5.8-8.1.4 2.2-.3 3.8-1.5 4.9-.4-2.5-1.8-4.6-4-6.3.2 3.1-1.2 4.9-2.6 6.6A7 7 0 0 0 4 14a8 8 0 0 0 8 7Z" />
        <path d="M10 17.5c-1.1-1.4-.7-3 .8-4.6.2 1.2.9 2.1 1.9 2.8.7-.9 1-2 .8-3.3 1.6 1.1 2.5 2.6 2.5 4.1a4 4 0 0 1-6 3Z" />
      </svg>
    ),
  },
  {
    title: "Luxury Repairs",
    description:
      "Precision mechanical work for exotic vehicles, completed with meticulous care, premium components, and clear communication.",
    highlights: ["Engine repairs", "Brake systems", "Suspension setup"],
    icon: (
      <svg className="service-showcase__icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="m14.7 6.3 3-3a4.2 4.2 0 0 1 1.2 4.4 4.2 4.2 0 0 1-5.2 2.8L7.6 16.6a2.4 2.4 0 1 1-2.2-2.2l6.1-6.1a4.2 4.2 0 0 1 5.2-5.2l-3 3 1 1Z" />
        <path d="M15 14.5 19.5 19a1.8 1.8 0 0 1-2.5 2.5L12.5 17" />
      </svg>
    ),
  },
];

function ServiceShowcase() {
  return (
    <section className="section service-showcase" id="services" aria-labelledby="service-showcase-title">
      <div className="container">
        <div className="section__header service-showcase__header">
          <span className="badge">Signature Services</span>
          <h2 id="service-showcase-title">Specialist care for elite performance machines.</h2>
          <p>
            HWBT delivers high-end diagnostics, repairs, and tuning for luxury supercars with the discretion,
            accuracy, and finish expected by demanding owners.
          </p>
        </div>

        <div className="service-showcase__grid" aria-label="Featured mechanical services">
          {services.map((service, index) => (
            <article className="card service-showcase__card" key={service.title}>
              <div className="service-showcase__icon">{service.icon}</div>
              <div className="service-showcase__content">
                <span className="service-showcase__number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-showcase__list" aria-label={`${service.title} highlights`}>
                  {service.highlights.map((highlight) => (
                    <li key={highlight}>
                      <svg className="service-showcase__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="m5 12.5 4.2 4.2L19.5 6.5" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="service-showcase__cta">
          <Link className="btn btn--primary" to="/contact" aria-label="Book a consultation with HWBT">
            Book a consultation
          </Link>
          <Link className="btn btn--secondary" to="/services" aria-label="View all HWBT services">
            Explore all services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceShowcase;