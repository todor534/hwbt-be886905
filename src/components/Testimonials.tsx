type Testimonial = {
  quote: string;
  name: string;
  role: string;
  vehicle: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "HWBT diagnosed an intermittent ECU fault that two specialist shops missed. The car came back sharper, cleaner, and genuinely faster.",
    name: "Marcus Ellery",
    role: "Owner",
    vehicle: "Ferrari 488 GTB",
  },
  {
    quote:
      "The attention to detail is exceptional. From the inspection report to the final road test, every stage felt precise and discreet.",
    name: "Amara Voss",
    role: "Collector",
    vehicle: "Lamborghini Huracán Evo",
  },
  {
    quote:
      "Their performance calibration transformed the car without compromising refinement. It feels factory-perfect, only more alive.",
    name: "Theo Harrington",
    role: "Track Client",
    vehicle: "McLaren 720S",
  },
];

function QuoteIcon() {
  return (
    <svg
      className="testimonial-quote-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8.75 5.5C5.98 7.12 4.5 9.33 4.5 12.09V18.5h6.4v-6.45H7.76c.05-1.36.78-2.54 2.2-3.55L8.75 5.5Zm10.2 0c-2.77 1.62-4.25 3.83-4.25 6.59V18.5h6.4v-6.45h-3.14c.05-1.36.78-2.54 2.2-3.55L18.95 5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="testimonial-rating" aria-label="Five out of five stars">
      {[0, 1, 2, 3, 4].map((star) => (
        <svg
          key={star}
          className="testimonial-star"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="m12 3.5 2.54 5.15 5.69.83-4.12 4.01.97 5.66L12 16.48l-5.08 2.67.97-5.66-4.12-4.01 5.69-.83L12 3.5Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="section-header testimonials-header">
          <span className="badge">Client confidence</span>
          <h2 id="testimonials-heading">Trusted by supercar owners who expect absolute precision.</h2>
          <p>
            From advanced diagnostics to performance tuning, HWBT delivers refined engineering for the
            world&apos;s most demanding vehicles.
          </p>
        </div>

        <div className="testimonials-grid" role="list">
          {testimonials.map((testimonial, index) => (
            <article
              className={`card testimonial-card testimonial-card--${index + 1}`}
              key={testimonial.name}
              role="listitem"
            >
              <div className="testimonial-card-top">
                <QuoteIcon />
                <StarRating />
              </div>

              <blockquote className="testimonial-quote">
                <p>{testimonial.quote}</p>
              </blockquote>

              <footer className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>
                    {testimonial.role} · {testimonial.vehicle}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}