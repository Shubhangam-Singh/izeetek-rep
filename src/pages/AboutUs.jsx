import { Link } from 'react-router-dom';
import CTABanner from '../components/CTABanner/CTABanner.jsx';
import { aboutBlurb, stats } from '../constants/data.js';

const pillars = [
  {
    title: 'Talent that fits',
    body: 'We screen for skill, intent and team chemistry — so the engineers who land at your office stay long enough to ship.',
  },
  {
    title: 'Delivery that owns outcomes',
    body: 'Our practice leads embed alongside your team and own the metric that matters, not just the standup.',
  },
  {
    title: 'Partnership over transactions',
    body: 'We treat retention, ramp-up time and customer love as part of the deliverable — long after the contract closes.',
  },
];

export default function AboutUs() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-container px-4 py-14 md:py-20">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
            About Us
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold leading-tight md:text-4xl">
            People-first. Engineering-led. Built to last.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/85 md:text-base">
            We help growing companies scale teams and ship complex software — without the
            common pitfalls of remote hiring or under-supervised delivery.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-container gap-10 px-4 py-16 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="section-heading">Our story</h2>
            <p className="mt-6 text-[15px] leading-7 text-neutral-text">{aboutBlurb.body}</p>
            <p className="mt-4 text-[15px] leading-7 text-neutral-text">
              Founded in Bengaluru, Izeetek partners with startups and Fortune 500 enterprises
              across India, the Middle East and Europe. Whether you need a single senior
              consultant or a 30-person delivery pod, we bring the same operating system to every
              engagement: clear scope, weekly demos, and an honest read-out on what's working.
            </p>
            <Link to="/contact-us" className="btn-secondary mt-8">
              Start a conversation
            </Link>
          </div>
          <ul className="grid gap-4 self-start">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="flex items-center gap-4 rounded-lg border border-slate-200 bg-neutral-light px-5 py-4"
              >
                <span className="font-heading text-3xl font-extrabold text-brand-accent">
                  {stat.value}
                </span>
                <span className="font-heading text-sm font-semibold uppercase tracking-wide text-neutral-dark">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-neutral-light py-16">
        <div className="mx-auto max-w-container px-4">
          <h2 className="section-heading">What we stand for</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="rounded-lg border-b-4 border-transparent bg-white p-6 shadow-sm transition hover:border-brand-blue hover:shadow-card"
              >
                <h3 className="font-heading text-lg font-bold text-neutral-dark">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-text">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
