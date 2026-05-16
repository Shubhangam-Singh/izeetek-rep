import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-container px-4 text-center">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
          404
        </p>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-neutral-dark md:text-4xl">
          We couldn't find that page.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-neutral-text">
          The link may be broken or the page may have moved. Use the navigation above or head
          back to the home page.
        </p>
        <Link to="/" className="btn-secondary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
