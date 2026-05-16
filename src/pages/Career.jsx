import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';
import { jobs, contact } from '../constants/data.js';

const applyEmail = contact.emails?.[0] || 'careers@izeetek.com';

export default function Career() {
  return (
    <>
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-container px-4 py-14 md:py-20">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Careers
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold leading-tight md:text-4xl">
            Build the work you'll be proud of.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/85 md:text-base">
            Engineering-first culture, real ownership from week one, and a clear path to senior
            roles. We hire across SAP, embedded, semiconductor and software engineering.
          </p>
        </div>
      </section>

      <section className="bg-neutral-light py-16">
        <div className="mx-auto max-w-container space-y-6 px-4">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="rounded-lg border-l-4 border-brand-navy bg-white p-6 shadow-sm transition hover:shadow-card md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="font-heading text-xl font-bold text-neutral-dark md:text-2xl">
                    {job.title}
                  </h2>
                  <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-neutral-text">
                    <li className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-brand-blue" /> {job.location}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <FaBriefcase className="text-brand-blue" /> {job.type}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <FaClock className="text-brand-blue" /> {job.experience}
                    </li>
                  </ul>
                </div>
                <a
                  href={`mailto:${applyEmail}?subject=${encodeURIComponent(
                    `Application: ${job.title}`,
                  )}`}
                  className="btn-primary"
                >
                  Apply Now
                </a>
              </div>

              <p className="mt-5 text-[15px] leading-7 text-neutral-text">{job.summary}</p>

              <p className="mt-5 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                What you'll bring
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-neutral-text">
                {job.requirements.map((req) => (
                  <li key={req}>{req}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
