import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { contact } from '../constants/data.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please tell us your name.';
  if (!values.email.trim()) errors.email = 'An email helps us reply.';
  else if (!EMAIL_RE.test(values.email)) errors.email = 'That email doesn\'t look quite right.';
  if (values.phone && !/^[+\d][\d\s-]{6,}$/.test(values.phone))
    errors.phone = 'Use digits only, with an optional leading +.';
  if (values.message.trim().length < 10)
    errors.message = 'A short message (10+ characters) helps us route the request.';
  return errors;
}

export default function ContactUs() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <>
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-container px-4 py-14 md:py-20">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Contact Us
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold leading-tight md:text-4xl">
            Tell us about the team or product you're building.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/85 md:text-base">
            Drop a line — most enquiries hear back within a working day.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-container gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Form */}
          <form noValidate onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-heading text-sm font-semibold text-neutral-dark">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={onChange}
                  autoComplete="name"
                  className="mt-1 w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="font-heading text-sm font-semibold text-neutral-dark">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  autoComplete="email"
                  className="mt-1 w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="font-heading text-sm font-semibold text-neutral-dark">
                Phone <span className="text-xs font-normal text-neutral-text">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={onChange}
                autoComplete="tel"
                className="mt-1 w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30"
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="message" className="font-heading text-sm font-semibold text-neutral-dark">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={values.message}
                onChange={onChange}
                className="mt-1 w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>

            {submitted && (
              <p
                role="status"
                className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
              >
                Thanks — we received your message and will get back to you shortly.
              </p>
            )}
          </form>

          {/* Side info */}
          <aside className="space-y-6 rounded-lg border border-slate-200 bg-neutral-light p-6">
            <h2 className="section-heading">Reach us directly</h2>
            <div className="space-y-4 text-sm leading-6 text-neutral-text">
              <p className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-brand-blue" />
                <span>
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  {contact.address.line3}
                </span>
              </p>
              <p className="flex gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-brand-blue" />
                <span>
                  {contact.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block hover:text-brand-blue">
                      {phone}
                    </a>
                  ))}
                </span>
              </p>
              <p className="flex gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-brand-blue" />
                <span>
                  {contact.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="block hover:text-brand-blue">
                      {email}
                    </a>
                  ))}
                </span>
              </p>
            </div>
            <div className="overflow-hidden rounded-md border border-slate-200">
              <iframe
                src={contact.mapsEmbed}
                title="Izeetek location"
                height="220"
                width="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
