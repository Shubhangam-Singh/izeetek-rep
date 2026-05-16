import { Link } from 'react-router-dom';
import { tickerItems } from '../../constants/data.js';
import styles from './Ticker.module.css';

function TickerRow({ ariaHidden = false }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {tickerItems.map((item, index) => (
        <li key={`${item.label}-${index}`} className="flex items-center">
          <Link
            to={item.to}
            className="font-heading text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:text-brand-accent"
          >
            {item.label}
          </Link>
          {index < tickerItems.length - 1 && <span className={styles.separator}>||</span>}
        </li>
      ))}
      {/* Trailing separator so the loop seam never butts two labels together */}
      <li>
        <span className={styles.separator}>||</span>
      </li>
    </ul>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden bg-brand-navy py-3">
      <div className={styles.track}>
        <TickerRow />
        <TickerRow ariaHidden />
      </div>
    </div>
  );
}
