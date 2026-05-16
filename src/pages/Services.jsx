import { Link } from 'react-router-dom';
import CTABanner from '../components/CTABanner/CTABanner.jsx';
import { services } from '../constants/data.js';

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-container px-4 py-14 md:py-20">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Our Services
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold leading-tight md:text-4xl">
            Five practices. One delivery standard.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/85 md:text-base">
            Pick a practice or combine them — we run cross-functional teams every day.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-container space-y-10 px-4">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`grid items-center gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[120px_minmax(0,1fr)_auto] md:p-8 ${
                index % 2 === 1 ? 'border-l-4 border-l-brand-blue' : 'border-l-4 border-l-brand-accent'
              }`}
            >
              <img src={service.icon} alt="" className="h-24 w-24 self-start" aria-hidden="true" />
              <div>
                <h2 className="font-heading text-xl font-bold text-neutral-dark md:text-2xl">
                  {service.title}
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-neutral-text">
                  {service.description}
                </p>
              </div>
              <Link to="/contact-us" className="btn-secondary md:self-start">
                Discuss this
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
