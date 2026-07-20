import { type FormEvent, useState } from "react";

type BookingStatus = "idle" | "sent";

const serviceOptions = [
  "Factory diagnostics",
  "Performance tuning",
  "Carbon ceramic brake service",
  "Suspension calibration",
  "Engine repair",
  "Pre-purchase inspection",
  "Track preparation",
  "Concierge maintenance",
];

export default function BookingForm() {
  const [status, setStatus] = useState<BookingStatus>("idle");
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setStatus("sent");
  };

  return (
    <section className="section booking-section" aria-labelledby="booking-title">
      <div className="container booking-section__container">
        <article className="card booking-panel">
          <div className="booking-panel__content">
            <span className="badge booking-panel__badge">Private workshop access</span>
            <h2 id="booking-title" className="booking-panel__title">
              Schedule a precision appointment
            </h2>
            <p className="booking-panel__text">
              Tell us about your supercar and the level of support required. The HWBT team will review
              your request and coordinate a discreet service window for diagnostics, repair, or tuning.
            </p>

            <div className="booking-panel__highlights" aria-label="Booking benefits">
              <div className="booking-panel__highlight">
                <svg
                  className="booking-panel__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>OEM-grade diagnostics</span>
              </div>

              <div className="booking-panel__highlight">
                <svg
                  className="booking-panel__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Rapid consultation response</span>
              </div>

              <div className="booking-panel__highlight">
                <svg
                  className="booking-panel__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M8.25 18.75h7.5M12 15.75v3M6.75 3.75h10.5A2.25 2.25 0 0 1 19.5 6v7.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 13.5V6a2.25 2.25 0 0 1 2.25-2.25Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Digital inspection notes</span>
              </div>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-form__grid">
              <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="booking-name">
                  Full name
                </label>
                <input
                  className="input booking-form__input"
                  id="booking-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="booking-phone">
                  Phone number
                </label>
                <input
                  className="input booking-form__input"
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+44 7000 000000"
                  required
                />
              </div>

              <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="booking-email">
                  Email address
                </label>
                <input
                  className="input booking-form__input"
                  id="booking-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="booking-vehicle">
                  Vehicle
                </label>
                <input
                  className="input booking-form__input"
                  id="booking-vehicle"
                  name="vehicle"
                  type="text"
                  placeholder="Ferrari 488 GTB"
                  required
                />
              </div>

              <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="booking-service">
                  Service required
                </label>
                <select
                  className="input booking-form__input booking-form__select"
                  id="booking-service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="booking-date">
                  Preferred date
                </label>
                <input
                  className="input booking-form__input"
                  id="booking-date"
                  name="preferredDate"
                  type="date"
                  min={today}
                  required
                />
              </div>
            </div>

            <div className="booking-form__field booking-form__field--full">
              <label className="booking-form__label" htmlFor="booking-notes">
                Project details
              </label>
              <textarea
                className="input booking-form__input booking-form__textarea"
                id="booking-notes"
                name="notes"
                rows={5}
                placeholder="Describe symptoms, desired upgrades, deadlines, or transport requirements."
              />
            </div>

            <div className="booking-form__footer">
              <p className="booking-form__privacy">
                Your request is handled confidentially by the HWBT workshop team.
              </p>
              <button className="btn btn--primary booking-form__submit" type="submit">
                Request booking
                <svg
                  className="btn__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <p className="booking-form__status" role="status" aria-live="polite">
              {status === "sent"
                ? "Thank you. Your booking request has been received and our concierge team will contact you shortly."
                : ""}
            </p>
          </form>
        </article>
      </div>
    </section>
  );
}
