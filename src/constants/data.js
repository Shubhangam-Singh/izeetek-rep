// Single source of truth for site copy, navigation, and content blocks.
// Components stay presentational and read everything they render from here.

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services', hasDropdown: true },
  { label: 'Career', to: '/career' },
  { label: 'Contact Us', to: '/contact-us' },
];

export const serviceDropdown = [
  { label: 'SAP Services', to: '/services#sap' },
  { label: 'Artificial Intelligence', to: '/services#ai' },
  { label: 'Embedded Software', to: '/services#embedded' },
  { label: 'Staffing Solutions', to: '/services#staffing' },
  { label: 'Semiconductor Design', to: '/services#semiconductor' },
  { label: 'Software Engineering', to: '/services#software' },
];

export const socialLinks = [
  { label: 'Facebook', icon: 'FaFacebookF', href: 'https://facebook.com/izeetek' },
  { label: 'Twitter', icon: 'FaTwitter', href: 'https://twitter.com/izeetek' },
  { label: 'Instagram', icon: 'FaInstagram', href: 'https://instagram.com/izeetek' },
  { label: 'LinkedIn', icon: 'FaLinkedinIn', href: 'https://linkedin.com/company/izeetek' },
];

export const heroSlides = [
  {
    id: 'talent',
    label: 'Talent Acquisition',
    headingLead: 'We will find the best',
    headingAccent: 'TALENT',
    headingTrail: 'for you',
    cta: { label: 'Get in touch', to: '/contact-us' },
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=70',
    alt: 'Recruiters reviewing candidate profiles around a table',
  },
  {
    id: 'cost',
    label: 'Recruitment That Scales',
    headingLead: 'Helping companies CUT',
    headingAccent: 'recruitment cost',
    headingTrail: 'without cutting quality',
    cta: { label: 'Talk to us', to: '/contact-us' },
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=70',
    alt: 'Financial dashboards showing trending hiring costs',
  },
  {
    id: 'reach',
    label: 'Wider Reach',
    headingLead: 'Advertise your vacancy across',
    headingAccent: 'ALL MAJOR JOB SITES',
    headingTrail: 'in one click',
    cta: { label: 'Start hiring', to: '/contact-us' },
    image:
      'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1600&q=70',
    alt: 'Open laptop showing a careers website',
  },
];
export const tickerItems = [
  { label: 'Our Current Openings', to: '/career' },
  { label: 'Staffing Solutions', to: '/services#staffing' },
  { label: 'SAP Services', to: '/services#sap' },
  { label: 'Embedded Software', to: '/services#embedded' },
  { label: 'Semiconductor Design', to: '/services#semiconductor' },
];
export const services = [];
export const stats = [];
export const contact = {};
export const quickLinks = [];
export const usefulLinks = [];
export const jobs = [];
