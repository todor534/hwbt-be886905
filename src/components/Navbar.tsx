import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

type NavItem = {
  label: string;
  to: string;
  end?: boolean;
};

const navItems: NavItem[] = [
  { label: 'Home', to: '/', end: true },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleNavigate = (to: string) => {
    setIsOpen(false);

    window.setTimeout(() => {
      if (to.includes('#')) {
        const targetId = to.split('#')[1];
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 80);
  };

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <Link className="navbar__brand" to="/" onClick={() => handleNavigate('/')}>
          <span className="navbar__brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" role="img" focusable="false">
              <path d="M20 3L34.7 11.5V28.5L20 37L5.3 28.5V11.5L20 3Z" />
              <path d="M13 25.5V14.5H16V18.6H24V14.5H27V25.5H24V21.4H16V25.5H13Z" />
            </svg>
          </span>
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">HWBT</span>
            <span className="navbar__brand-tagline">Supercar Performance</span>
          </span>
        </Link>

        <button
          className={`navbar__toggle${isOpen ? ' navbar__toggle--open' : ''}`}
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="navbar__toggle-line" aria-hidden="true" />
          <span className="navbar__toggle-line" aria-hidden="true" />
          <span className="navbar__toggle-line" aria-hidden="true" />
        </button>

        <div
          id="primary-navigation"
          className={`navbar__menu${isOpen ? ' navbar__menu--open' : ''}`}
        >
          <ul className="navbar__links">
            {navItems.map((item) => (
              <li className="navbar__item" key={item.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
                  }
                  to={item.to}
                  end={item.end}
                  onClick={() => handleNavigate(item.to)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <a className="navbar__phone" href="tel:+15550148288" aria-label="Call HWBT now">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.69 6.45 9.06 7.57C9.17 7.92 9.09 8.31 8.81 8.59L6.62 10.79Z" />
              </svg>
              <span>Call Now</span>
            </a>

            <Link
              className="btn btn--primary navbar__cta"
              to="/contact#booking"
              onClick={() => handleNavigate('/contact#booking')}
            >
              Book Service
            </Link>
          </div>
        </div>
      </nav>

      {isOpen && (
        <button
          className="navbar__backdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}