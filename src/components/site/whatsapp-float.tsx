import { FaWhatsapp } from "react-icons/fa";
import { HOTEL } from "./site-data";

const MESSAGE = encodeURIComponent(
  "Hello Triple One Hotel, I would like to make a reservation."
);

export function WhatsAppFloat() {
  return (
    <a
      href={`${HOTEL.social.whatsapp}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
      />
      <FaWhatsapp className="relative h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-sm font-medium text-gray-800 shadow-md opacity-0 transition-opacity group-hover:opacity-100 md:block">
        Chat with us
      </span>
    </a>
  );
}
