import { Link } from 'react-router-dom';

const serviceLinks = [
  { label: 'Supercar Diagnostics', to: '/services' },
  { label: 'Performance Tuning', to: '/services' },
  { label: 'Carbon Ceramic Brakes', to: '/services' },
  { label: 'Engine & Drivetrain', to: '/services' },
];

const companyLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__container">
        <section className="site-footer__brand" aria-labelledby="footer-brand-heading">
          <Link className="site-footer__logo" to="/" aria-label="HWBT home">
            <span className="site-footer__logo-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" role="img" focusable="false">
                <path d="M7 30.5 15.8 13h6.7l-4.1 9.2h11.2L33.7 13h6.6l-8.8 17.5h-6.6l4.3-9.6H18l-4.3 9.6H7Z" />
                <path d="M9 35h30.5c2.5 0 4.5-2 4.5-4.5v-.2h-6.2c-.7 0-1.3.3-1.8.8l-.9.9H13.4c-1.8 0-3.4 1.2-3.9 3Z" />
              </svg>
            </span>
            <span className="site-footer__logo-text">HWBT</span>
          </Link>

          <h2 id="footer-brand-heading" className="site-footer__headline">
            Precision care for exceptional machines.
          </h2>
          <p className="site-footer__copy">
            Luxury supercar repairs, advanced diagnostics, performance calibration, and meticulous maintenance for owners who expect the highest standard.
          </p>

          <div className="site-footer__contact-card card">
            <span className="site-footer__eyebrow">Priority booking</span>
            <a className="site-footer__phone" href="tel:+441234567890" aria-label="Call HWBT on +44 1234 567 890">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.3-.3.74-.4 1.13-.27 1.24.41 2.53.62 3.86.62.62 0 1.1.48 1.1 1.1v3.49c0 .62-.48 1.1-1.1 1.1C10.52 21.22 2.78 13.48 2.78 3.6c0-.62.48-1.1 1.1-1.1h3.5c.61 0 1.1.48 1.1 1.1 0 1.33.2 2.62.61 3.86.13.39.03.83-.27 1.13l-2.2 2.2Z" />
              </svg>
              +44 1234 567 890
            </a>
            <p>Speak with a specialist advisor for diagnostics, recovery, or workshop availability.</p>
          </div>
        </section>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <div className="site-footer__column">
            <h2 className="site-footer__title">Services</h2>
            <ul className="site-footer__list">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link className="site-footer__link" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <h2 className="site-footer__title">Company</h2>
            <ul className="site-footer__list">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link className="site-footer__link" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <h2 className="site-footer__title">Workshop</h2>
            <address className="site-footer__address">
              <a className="site-footer__link" href="https://maps.google.com" target="_blank" rel="noreferrer">
                HWBT Performance Atelier
                <span>Mayfair, London</span>
              </a>
              <a className="site-footer__link" href="mailto:concierge@hwbt.co.uk">
                concierge@hwbt.co.uk
              </a>
            </address>
          </div>
        </nav>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} HWBT. Luxury supercar mechanics and performance tuning.</p>

        <div className="site-footer__social" aria-label="Social links">
          <a className="site-footer__social-link" href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="HWBT on Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M7.8 2.75h8.4a5.05 5.05 0 0 1 5.05 5.05v8.4a5.05 5.05 0 0 1-5.05 5.05H7.8a5.05 5.05 0 0 1-5.05-5.05V7.8A5.05 5.05 0 0 1 7.8 2.75Zm0 1.8A3.25 3.25 0 0 0 4.55 7.8v8.4a3.25 3.25 0 0 0 3.25 3.25h8.4a3.25 3.25 0 0 0 3.25-3.25V7.8a3.25 3.25 0 0 0-3.25-3.25H7.8Zm4.2 3.2a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm0 1.8a2.45 2.45 0 1 0 0 4.9 2.45 2.45 0 0 0 0-4.9Zm4.48-2.47a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
            </svg>
          </a>
          <a className="site-footer__social-link" href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="HWBT on YouTube">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M21.58 7.18a2.75 2.75 0 0 0-1.94-1.95C17.93 4.77 12 4.77 12 4.77s-5.93 0-7.64.46a2.75 2.75 0 0 0-1.94 1.95C1.96 8.9 1.96 12.5 1.96 12.5s0 3.6.46 5.32a2.75 2.75 0 0 0 1.94 1.95c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 0 0 1.94-1.95c.46-1.72.46-5.32.46-5.32s0-3.6-.46-5.32ZM10 15.78V9.22l5.45 3.28L10 15.78Z" />
            </svg>
          </a>
          <a className="site-footer__social-link" href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="HWBT on LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M5.34 8.84H2.75v12.41h2.59V8.84ZM4.04 2.75a1.5 1.5 0 1 0 0 3.01 1.5 1.5 0 0 0 0-3.01Zm7.04 6.09H8.6v12.41h2.59v-6.52c0-1.72.79-3.02 2.46-3.02 1.36 0 2.02.91 2.02 2.66v6.88h2.59v-7.3c0-3.46-1.85-5.32-4.43-5.32-1.52 0-2.49.68-3.06 1.53h-.05l.36-1.32Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}