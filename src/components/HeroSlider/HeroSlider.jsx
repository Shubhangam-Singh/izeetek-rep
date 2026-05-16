import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { heroSlides } from '../../constants/data.js';
import styles from './HeroSlider.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSlider() {
  return (
    <section className={styles.wrap} aria-label="Featured highlights">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide}>
              <img
                src={slide.image}
                alt={slide.alt}
                className={styles.image}
                loading="eager"
              />
              <div className={styles.overlay} aria-hidden="true" />
              <div className={styles.content}>
                <div className={styles.inner}>
                  <span className={styles.label}>{slide.label}</span>
                  <h2 className={styles.heading}>
                    {slide.headingLead}{' '}
                    <span className={styles.accent}>{slide.headingAccent}</span>{' '}
                    {slide.headingTrail}
                  </h2>
                  <Link to={slide.cta.to} className="btn-primary">
                    {slide.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
