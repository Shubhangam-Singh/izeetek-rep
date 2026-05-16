import HeroSlider from '../components/HeroSlider/HeroSlider.jsx';
import Ticker from '../components/Ticker/Ticker.jsx';
import ContactAbout from '../components/ContactAbout/ContactAbout.jsx';
import Services from '../components/Services/Services.jsx';
import CTABanner from '../components/CTABanner/CTABanner.jsx';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Ticker />
      <ContactAbout />
      <Services />
      <CTABanner />
    </>
  );
}
