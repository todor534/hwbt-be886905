import { Link } from "react-router-dom";

type ClickToCallProps = {
  className?: string;
  compact?: boolean;
  phoneNumber?: string;
  displayPhone?: string;
};

const ClickToCall = ({
  className = "",
  compact = false,
  phoneNumber = "+15550191862",
  displayPhone = "+1 (555) 019-1862",
}: ClickToCallProps) => {
  const telHref = `tel:${phoneNumber.replace(/[^\d+]/g, "")}`;
  const sectionClassName = ["click-to-call", "section", compact ? "click-to-call--compact" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName} aria-labelledby="click-to-call-title">
      <div className="container">
        <div className="click-to-call__panel card">
          <div className="click-to-call__icon" aria-hidden="true">
            <svg className="icon icon--lg" viewBox="0 0 24 24" fill="none" focusable="false">
              <path
                d="M2.75 6.75C2.75 5.231 3.981 4 5.5 4h1.016c.865 0 1.65.51 2.002 1.3l.823 1.852a2.25 2.25 0 0 1-.488 2.522l-.776.776a12.27 12.27 0 0 0 5.473 5.473l.776-.776a2.25 2.25 0 0 1 2.522-.488l1.852.823A2.188 2.188 0 0 1 20 17.484V18.5A2.75 2.75 0 0 1 17.25 21h-.75C8.906 21 2.75 14.844 2.75 7.25v-.5Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.25 4.75c2.761 0 5 2.239 5 5M14.25 8.25c.828 0 1.5.672 1.5 1.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="click-to-call__content">
            <span className="badge">Priority technician line</span>
            <h2 id="click-to-call-title">Speak with a supercar specialist now</h2>
            <p>
              For urgent diagnostics, transport coordination, or discreet performance consultations, HWBT connects you
              directly with a senior technician.
            </p>

            <ul className="click-to-call__highlights" aria-label="Call benefits">
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <path
                    d="m5 12 4.25 4.25L19 6.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Rapid fault triage
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <path
                    d="m5 12 4.25 4.25L19 6.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Secure collection options
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <path
                    d="m5 12 4.25 4.25L19 6.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Confidential tuning advice
              </li>
            </ul>
          </div>

          <div className="click-to-call__actions" aria-label="Contact actions">
            <a className="btn btn--primary" href={telHref} aria-label={`Call HWBT at ${displayPhone}`}>
              <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path
                  d="M7.25 4.75h2.041c.524 0 .992.328 1.17.821l.738 2.046a1.25 1.25 0 0 1-.31 1.31l-1.11 1.11a8.25 8.25 0 0 0 4.184 4.184l1.11-1.11a1.25 1.25 0 0 1 1.31-.31l2.046.738c.493.178.821.646.821 1.17v2.041a2.5 2.5 0 0 1-2.5 2.5H16C9.787 19.25 4.75 14.213 4.75 8V7.25a2.5 2.5 0 0 1 2.5-2.5Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {displayPhone}
            </a>
            <Link className="btn btn--secondary" to="/contact">
              Book a consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClickToCall;