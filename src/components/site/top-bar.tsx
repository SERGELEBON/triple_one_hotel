import { HOTEL } from "./site-data";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export function TopBar() {
  return (
    <div className="hidden md:block bg-white border-b border-pearl">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-9 text-[0.8rem]">
        <p className="text-textgray">
          Welcome to <span className="text-brand font-semibold">Triple One Hotel</span> — Cozy rooms for long &amp; short stays
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`tel:${HOTEL.phoneHref}`}
            className="flex items-center gap-2 text-ink hover:text-brand transition-colors"
          >
            <FaPhone className="text-[0.7rem] text-brand" />
            <span>{HOTEL.phone}</span>
          </a>
          <a
            href={`mailto:${HOTEL.email}`}
            className="flex items-center gap-2 text-ink hover:text-brand transition-colors"
          >
            <FaEnvelope className="text-[0.7rem] text-brand" />
            <span>{HOTEL.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
