import { FaWhatsapp } from 'react-icons/fa';
import { contact } from '../../constants/data.js';

export default function WhatsAppFloat() {
  const number = (contact.whatsapp || '+917406272111').replace(/\s/g, '');

  return (
    <a
      href={`https://wa.me/${number.replace(/^\+/, '')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-7 right-7 z-[9999] inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 ease-out hover:scale-110 animate-pulse"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
