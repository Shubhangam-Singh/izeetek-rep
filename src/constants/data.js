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
export const services = [
  {
    id: 'sap',
    title: 'SAP Services',
    icon: '/images/services/sap.svg',
    description:
      'End-to-end SAP implementation, S/4HANA migrations and managed support — delivered by certified consultants who understand both the technology and your business processes.',
  },
  {
    id: 'embedded',
    title: 'Embedded Software',
    icon: '/images/services/embedded.svg',
    description:
      'Firmware, drivers and board bring-up for IoT, automotive and industrial platforms. We work from architecture through validation, with a focus on real-time reliability.',
  },
  {
    id: 'staffing',
    title: 'Staffing Solutions',
    icon: '/images/services/staffing.svg',
    description:
      'Contract, contract-to-hire and permanent placements across IT and engineering. Our recruiters pre-screen for skill, fit and intent so your interviews stay productive.',
  },
  {
    id: 'semiconductor',
    title: 'Semiconductor Design',
    icon: '/images/services/semiconductor.svg',
    description:
      'RTL design, verification, physical implementation and DFT support for ASIC and SoC programs. Senior engineers integrated into your team or operating as a delivery pod.',
  },
  {
    id: 'software',
    title: 'Software Engineering',
    icon: '/images/services/software.svg',
    description:
      'Web, mobile and cloud product development with modern stacks. From discovery and design to CI/CD and observability, we build software that your customers actually love.',
  },
];
export const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '50+', label: 'Expert Consultants' },
  { value: '10+', label: 'Years of Experience' },
];

export const ctaCopy = {
  eyebrow: 'Why Izeetek',
  heading: 'Enterprise services that scale with your ambitions',
  body: 'From day-one staffing support to multi-year engineering programs, our teams plug in fast and stay accountable to outcomes.',
  cta: { label: 'Contact Us', to: '/contact-us' },
};
export const contact = {
  address: {
    line1: '86/80, 4th Floor, SGR Plaza',
    line2: 'Old Airport Road, Marathahalli',
    line3: 'BENGALURU – 560 037',
  },
  phones: ['+91 7406272111'],
  emails: ['info@izeetek.com', 'contact@izeetek.com'],
  whatsapp: '+917406272111',
  mapsEmbed:
    'https://maps.google.com/maps?q=Marathahalli%20Old%20Airport%20Road%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

export const aboutBlurb = {
  eyebrow: 'About Us',
  title: 'A people-first technology partner.',
  body: `Izeetek is a Bengaluru-based talent and technology partner that helps growing
companies build high-performing engineering teams and ship complex products on time.
We combine deep recruitment expertise with hands-on delivery teams across SAP, embedded
systems, semiconductor design and modern software engineering — so you can scale skills,
shrink hiring costs, and stay focused on what your business does best.`,
};
export const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Career', to: '/career' },
  { label: 'Contact Us', to: '/contact-us' },
];

export const usefulLinks = [
  { label: 'SAP Services', to: '/services#sap' },
  { label: 'Embedded Software', to: '/services#embedded' },
  { label: 'Staffing Solutions', to: '/services#staffing' },
  { label: 'Semiconductor Design', to: '/services#semiconductor' },
  { label: 'Software Engineering', to: '/services#software' },
];

export const partnerBadges = [
  { label: 'GreytHR' },
  { label: 'Monster India' },
  { label: 'Naukri' },
  { label: 'LinkedIn Talent' },
];
export const jobs = [
  {
    id: 'sap-fico-consultant',
    title: 'SAP FICO Consultant',
    location: 'Bengaluru / Hybrid',
    type: 'Full-time',
    experience: '5–8 years',
    summary:
      'Lead FICO module rollouts and S/4HANA migrations for enterprise clients across BFSI and manufacturing.',
    requirements: [
      'Strong hands-on with FI, CO, AA and product costing',
      'Two or more end-to-end implementations',
      'Excellent stakeholder communication',
    ],
  },
  {
    id: 'embedded-firmware-engineer',
    title: 'Embedded Firmware Engineer',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: '3–6 years',
    summary:
      'Build firmware for ARM Cortex-M based IoT and industrial controllers, from drivers up to OTA.',
    requirements: [
      'Embedded C, RTOS (FreeRTOS / Zephyr)',
      'Comfortable with oscilloscopes, logic analyzers, and JTAG',
      'Bonus: low-power BLE / Wi-Fi stacks',
    ],
  },
  {
    id: 'technical-recruiter',
    title: 'Technical Recruiter',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    experience: '2–5 years',
    summary:
      'Own the full hiring lifecycle for niche engineering roles — from sourcing and screening to offer negotiation.',
    requirements: [
      'Strong sourcing on LinkedIn, Naukri and GitHub',
      'Ability to assess technical fit for IT / embedded / semicon roles',
      'A high-trust, high-empathy approach to candidates',
    ],
  },
];
