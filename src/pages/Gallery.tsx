import { Link } from "react-router-dom";

type GalleryItem = {
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
};

type ProcessHighlight = {
  title: string;
  description: string;
  iconPath: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: "Ferrari 488 GTB Precision Diagnostic",
    category: "Diagnostics",
    description:
      "Factory-level analysis for a twin-turbo V8 platform with telemetry-led fault isolation.",
    image: "",
    alt: "Ferrari 488 GTB undergoing premium diagnostic inspection inside HWBT workshop",
  },
  {
    title: "Lamborghini Huracán Performance Calibration",
    category: "Performance",
    description:
      "ECU refinement, drivability mapping, and temperature-stable performance validation.",
    image: "",
    alt: "Lamborghini Huracan prepared for performance tuning in a luxury service bay",
  },
  {
    title: "McLaren 720S Carbon Service Bay",
    category: "Repairs",
    description:
      "Carbon-intensive supercar maintenance with torque-controlled assembly procedures.",
    image: "",
    alt: "McLaren 720S receiving specialist supercar repair at HWBT",
  },
  {
    title: "Porsche GT3 Track Setup",
    category: "Track Prep",
    description:
      "Suspension geometry, braking readiness, and track-focused inspection for GT platforms.",
    image: "",
    alt: "Porsche GT3 on alignment equipment for track preparation",
  },
  {
    title: "Aston Martin Vantage Grand Touring Care",
    category: "Maintenance",
    description:
      "Discreet luxury maintenance for high-performance grand tourers and collector vehicles.",
    image: "",
    alt: "Aston Martin Vantage receiving luxury maintenance service",
  },
  {
    title: "Audi R8 V10 Engine Bay Detail",
    category: "Inspection",
    description:
      "Detailed mechanical review and pre-delivery inspection for naturally aspirated platforms.",
    image: "",
    alt: "Audi R8 V10 engine bay being inspected by HWBT technician",
  },
];

const processHighlights: ProcessHighlight[] = [
  {
    title: "Concierge Intake",
    description:
      "Every vehicle receives a private intake review, condition documentation, and priority plan.",
    iconPath:
      "M8 7V3m8 4V3M7 11h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z",
  },
  {
    title: "Data-Led Diagnosis",
    description:
      "We combine OEM-grade scanning, live telemetry, and technician expertise before any repair.",
    iconPath:
      "M9 17v-6m4 6V7m4 10v-4M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z",
  },
  {
    title: "Road-Proven Finish",
    description:
      "Completed work is validated through controlled testing, final inspection, and client handover.",
    iconPath:
      "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
];

function GalleryIcon({ path }: { path: string }) {
  return (
    <svg
      className="feature-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Gallery() {
  return (
    <main className="page gallery-page">
      <section className="hero gallery-hero" aria-labelledby="gallery-title">
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="badge">HWBT Workshop Gallery</span>
            <h1 id="gallery-title">
              Supercar craft, documented with precision.
            </h1>
            <p className="hero-subtitle">
              Explore a curated look inside HWBT: high-end diagnostics,
              performance tuning, exotic vehicle repair, and private workshop
              care for the world&apos;s most demanding machines.
            </p>
            <div className="hero-actions" aria-label="Gallery actions">
              <Link className="btn btn-primary" to="/contact">
                Book a private inspection
              </Link>
              <a className="btn btn-secondary" href="tel:+15550198300">
                Call HWBT now
              </a>
            </div>
          </div>

          <article className="card hero-feature-card" aria-label="Featured gallery statistic">
            <span className="stat-value">150+</span>
            <p>
              Premium performance, repair, and diagnostic projects completed for
              exotic and luxury vehicles.
            </p>
          </article>
        </div>
      </section>

      <section className="section gallery-showcase" aria-labelledby="showcase-title">
        <div className="container">
          <div className="section-header">
            <span className="badge">Selected Work</span>
            <h2 id="showcase-title">Inside the HWBT standard</h2>
            <p>
              A visual record of detail-led mechanical work across supercar
              diagnostics, drivetrain repairs, tuning, and track preparation.
            </p>
          </div>

          <div className="gallery-grid" aria-label="HWBT service gallery">
            {galleryItems.map((item, index) => (
              <article className="card gallery-card" key={item.title}>
                <div className="gallery-image-wrap">
                  <img src={item.image} alt={item.alt} />
                  <span className="gallery-category">{item.category}</span>
                </div>
                <div className="gallery-card-content">
                  <span className="gallery-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-process" aria-labelledby="process-title">
        <div className="container">
          <div className="section-header">
            <span className="badge">Process</span>
            <h2 id="process-title">Every image reflects a controlled method</h2>
            <p>
              HWBT blends luxury client care with measurable engineering
              discipline, so every project is handled with clarity from arrival
              to handover.
            </p>
          </div>

          <div className="feature-grid">
            {processHighlights.map((highlight) => (
              <article className="card feature-card" key={highlight.title}>
                <GalleryIcon path={highlight.iconPath} />
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section" aria-labelledby="gallery-cta-title">
        <div className="container">
          <div className="card cta-card">
            <div className="cta-copy">
              <span className="badge">Private Booking</span>
              <h2 id="gallery-cta-title">
                Ready to place your supercar in expert hands?
              </h2>
              <p>
                Request a confidential appointment for diagnostics, repair,
                performance tuning, or pre-purchase inspection.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn-primary" to="/contact">
                Schedule service
              </Link>
              <Link className="btn btn-secondary" to="/services">
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}