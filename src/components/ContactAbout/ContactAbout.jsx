import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { aboutBlurb, contact, socialLinks } from '../../constants/data.js';
import styles from './ContactAbout.module.css';

const socialIconMap = {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
};

function ContactRow({ icon: Icon, title, children }) {
  return (
    <div className={`${styles.row} flex items-start gap-4 py-3`}>
      <span className={styles.iconBubble} aria-hidden="true">
        <Icon size={18} />
      </span>
      <div>
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-neutral-dark">
          {title}
        </p>
        <div className="mt-1 text-sm leading-relaxed text-neutral-text">{children}</div>
      </div>
    </div>
  );
}

export default function ContactAbout() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-container gap-12 px-4 md:grid-cols-2 md:gap-16">
        {/* Left — Contact details */}
        <div>
          <h2 className="section-heading">Contact Details</h2>
          <div className="mt-8 divide-y divide-slate-100">
            <ContactRow icon={FaMapMarkerAlt} title="Visit us">
              {contact.address.line1}
              <br />
              {contact.address.line2}
              <br />
              {contact.address.line3}
            </ContactRow>

            <ContactRow icon={FaPhoneAlt} title="Call us">
              {contact.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block hover:text-brand-blue">
                  {phone}
                </a>
              ))}
            </ContactRow>

            <ContactRow icon={FaEnvelope} title="Email us">
              {contact.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className="block hover:text-brand-blue">
                  {email}
                </a>
              ))}
            </ContactRow>

            <div className="flex items-center gap-4 py-4">
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-neutral-dark">
                Follow
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, icon, href }) => {
                  const Icon = socialIconMap[icon];
                  if (!Icon) return null;
                  return (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.socialBtn}
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right — About */}
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            {aboutBlurb.eyebrow}
          </p>
          <h2 className="section-heading mt-2">{aboutBlurb.title}</h2>
          <p className="mt-6 text-[15px] leading-7 text-neutral-text">{aboutBlurb.body}</p>
          <Link to="/about-us" className="btn-secondary mt-8">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
