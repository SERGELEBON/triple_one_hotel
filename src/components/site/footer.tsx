import Link from "next/link";
import { Logo } from "./logo";
import { SocialIcons } from "./social-icons";
import { HOTEL, NAV_LINKS } from "./site-data";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto">
      <div className="bg-graybg border-t border-pearl">
        <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3">
          {/* Column 1 — logo + about */}
          <div className="flex flex-col gap-4">
            <Logo variant="dark" />
            <p className="text-sm text-textgray leading-relaxed max-w-xs">
              A tranquil retreat in Ghana blending comfort, charm and modern
              amenities — cozy rooms for long and short stays, with an Event
              Garden, Conference Hall and high-speed internet.
            </p>
            <SocialIcons variant="dark" size="sm" />
          </div>

          {/* Column 2 — useful links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-ink">
              Useful Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-textgray hover:text-brand transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — contact info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-ink">
              Contact Info
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm text-textgray">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-brand shrink-0" />
                <span>{HOTEL.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-brand shrink-0" />
                <a href={`tel:${HOTEL.phoneHref}`} className="hover:text-brand transition-colors">
                  {HOTEL.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-brand shrink-0" />
                <a href={`mailto:${HOTEL.email}`} className="hover:text-brand transition-colors break-all">
                  {HOTEL.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Legal bar */}
      <div className="bg-white border-t border-pearl">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-textgray">
          <p>
            &copy; {year} Triple One Hotel. All rights reserved.
          </p>
          <p>
            Designed &amp; developed for Triple One Hotel.
          </p>
        </div>
      </div>
    </footer>
  );
}
