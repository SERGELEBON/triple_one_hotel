import Link from "next/link";
import { HOTEL } from "../site-data";
import { FaChevronRight } from "react-icons/fa";

export function HeroSection() {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      <img
        src="/images/hero-facade.png"
        alt="Triple One Hotel facade at dusk"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/70" />
      <div className="relative h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl flex flex-col gap-6 animate-fade-up">
          <span className="inline-flex w-fit items-center gap-2 bg-brand/90 text-white px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.24em]">
            Triple One Hotel &middot; Ghana
          </span>
          <h1 className="banner-title text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
            Cozy Rooms for
            <br />
            Long &amp; Short Stays
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-xl leading-relaxed">
            A tranquil retreat blending comfort, charm and modern amenities —
            with an Event Garden, Conference Hall and high-speed internet.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/accommodation" className="btn-cta">
              View Rooms
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-white text-[0.8rem] font-bold uppercase tracking-[0.14em] hover:text-white/80 transition-colors"
            >
              Book Online
              <FaChevronRight className="text-[0.7rem]" />
            </Link>
          </div>
          <p className="text-white/70 text-sm pt-3">
            Call us:{" "}
            <a href={`tel:${HOTEL.phoneHref}`} className="text-white font-semibold underline-offset-4 hover:underline">
              {HOTEL.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
