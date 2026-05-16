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

export const heroSlides = [];
export const tickerItems = [];
export const services = [];
export const stats = [];
export const contact = {};
export const quickLinks = [];
export const usefulLinks = [];
export const jobs = [];
