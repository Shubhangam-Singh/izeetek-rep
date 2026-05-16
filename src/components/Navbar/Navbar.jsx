import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaChevronDown,
} from 'react-icons/fa';
import { navLinks, serviceDropdown, socialLinks } from '../../constants/data.js';
import styles from './Navbar.module.css';

const socialIconMap = {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
};

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  };

  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

  return (
    <header className="sticky top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-brand-accent focus:px-4 focus:py-2 focus:font-heading focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      {/* Top strip */}
      <div className="bg-brand-navy text-white">
        <div className="mx-auto flex max-w-container items-center justify-end gap-4 px-4 py-2 text-xs">
          <span className="hidden text-white/80 sm:inline">Follow us</span>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, icon, href }) => {
              const Icon = socialIconMap[icon];
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition-colors hover:text-brand-accent"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav className="bg-white shadow-nav" aria-label="Primary">
        <div className="mx-auto flex max-w-container items-center justify-between px-4 py-3 md:py-4">
          <Link to="/" onClick={closeMobile} className="flex items-center gap-2">
            <img src="/images/logo.svg" alt="Izeetek" className="h-10 w-auto" />
            <span className="sr-only">Izeetek home</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center md:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  <Link
                    to={link.to}
                    aria-current={isActive(link.to) ? 'page' : undefined}
                    className={`flex items-center gap-1 px-4 py-3 font-heading text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                      isActive(link.to)
                        ? 'bg-brand-navy text-white'
                        : 'text-neutral-dark hover:bg-brand-navy hover:text-white'
                    }`}
                  >
                    {link.label}
                    <FaChevronDown size={10} />
                  </Link>

                  {desktopDropdownOpen && (
                    <ul
                      className={`absolute left-0 top-full bg-white py-2 ${styles.dropdown} ${styles.dropdownEnter}`}
                    >
                      {serviceDropdown.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.to}
                            className="block px-5 py-2.5 font-heading text-[13px] font-medium text-neutral-text transition-colors hover:bg-brand-navy hover:text-white"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    aria-current={isActive(link.to) ? 'page' : undefined}
                    className={`block px-4 py-3 font-heading text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                      isActive(link.to)
                        ? 'bg-brand-navy text-white'
                        : 'text-neutral-dark hover:bg-brand-navy hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className={`border-t border-slate-200 bg-white md:hidden ${styles.mobilePanel}`}>
            <ul>
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <li key={link.label}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-5 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-neutral-dark"
                      onClick={() => setMobileDropdownOpen((open) => !open)}
                      aria-expanded={mobileDropdownOpen}
                    >
                      {link.label}
                      <FaChevronDown
                        size={12}
                        className={`transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileDropdownOpen && (
                      <ul className="bg-neutral-light">
                        {serviceDropdown.map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.to}
                              onClick={closeMobile}
                              className="block px-8 py-2.5 font-heading text-[13px] font-medium text-neutral-text hover:text-brand-navy"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      onClick={closeMobile}
                      className={`block px-5 py-3 font-heading text-sm font-semibold uppercase tracking-wide transition-colors ${
                        isActive(link.to)
                          ? 'bg-brand-navy text-white'
                          : 'text-neutral-dark hover:bg-brand-navy hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
