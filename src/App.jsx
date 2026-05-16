import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ServicesPage from './pages/Services.jsx';
import Career from './pages/Career.jsx';
import ContactUs from './pages/ContactUs.jsx';
import NotFound from './pages/NotFound.jsx';
import useScrollTop from './hooks/useScrollTop.js';

export default function App() {
  useScrollTop();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
