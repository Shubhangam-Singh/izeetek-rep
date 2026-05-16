import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import {
  contact,
  partnerBadges,
  quickLinks,
  socialLinks,
  usefulLinks,
} from '../../constants/data.js';
import styles from './Footer.module.css';

const socialIconMap = {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-slate-300">
      {/* Partner row */}
      <div className="border-b border-white/5 bg-footer">
        <div className="mx-auto flex max-w-container flex-wrap items-center justify-center gap-3 px-4 py-6 md:justify-between">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Trusted partners
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {partnerBadges.map((p) => (
              <li key={p.label}>
                <span className={styles.partnerChip}>{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto grid max-w-container gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className={styles.columnHeading}>Quick Links</p>
          <ul className="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.columnHeading}>Useful Links</p>
          <ul className="space-y-1">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.columnHeading}>Quick Connect</p>
          <ul className="space-y-3 text-[13px] leading-6">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-brand-accent" />
              <span>
                {contact.address.line1}
                <br />
                {contact.address.line2}
                <br />
                {contact.address.line3}
              </span>
            </li>
            <li className="flex gap-3">
              <FaPhoneAlt className="mt-1 shrink-0 text-brand-accent" />
              <div className="flex flex-col">
                {contact.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-white">
                    {p}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex gap-3">
              <FaEnvelope className="mt-1 shrink-0 text-brand-accent" />
              <div className="flex flex-col">
                {contact.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="hover:text-white">
                    {e}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.columnHeading}>Navigate Us</p>
          <div className="overflow-hidden rounded-md border border-white/10">
            <iframe
              src={contact.mapsEmbed}
              title="Izeetek location on map"
              height="160"
              width="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-footer-deep">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 px-4 py-5 md:flex-row">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.svg" alt="Izeetek" className="h-7 w-auto brightness-200" />
          </Link>
          <p className="text-center text-[12px] text-slate-400">
            © {year} Izeetek. All rights reserved.
          </p>
          <ul className="flex items-center gap-3">
            {socialLinks.map(({ label, icon, href }) => {
              const Icon = socialIconMap[icon];
              if (!Icon) return null;
              return (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-accent"
                  >
                    <Icon size={12} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
