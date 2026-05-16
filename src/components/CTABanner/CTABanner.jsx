import { Link } from 'react-router-dom';
import { ctaCopy, stats } from '../../constants/data.js';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={`${styles.banner} text-white`}>
      <div className="mx-auto max-w-container px-4 py-16 text-center md:py-20">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
          {ctaCopy.eyebrow}
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
          {ctaCopy.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 md:text-base">
          {ctaCopy.body}
        </p>

        <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <li key={stat.label} className="rounded-lg bg-white/5 px-4 py-6 ring-1 ring-white/10">
              <p className={styles.statNumber}>{stat.value}</p>
              <p className="mt-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>

        <Link to={ctaCopy.cta.to} className="btn-primary mt-10">
          {ctaCopy.cta.label}
        </Link>
      </div>
    </section>
  );
}
