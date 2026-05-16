import { Link } from 'react-router-dom';
import { services } from '../../constants/data.js';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className="bg-neutral-light py-16 md:py-20" id="services">
      <div className="mx-auto max-w-container px-4">
        <div className="text-center">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            What we do
          </p>
          <h2 className="section-heading mx-auto mt-2 inline-block">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-neutral-text">
            From SAP enterprise stacks to silicon design, Izeetek runs delivery teams that
            blend in with yours and ship outcomes — not just hours.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id} id={service.id}>
              <Link to={`/services#${service.id}`} className={styles.card}>
                <img src={service.icon} alt="" className={styles.icon} aria-hidden="true" />
                <h3 className="font-heading text-lg font-bold text-neutral-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-text">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 font-heading text-xs font-bold uppercase tracking-wider text-brand-blue">
                  Read more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
