import { LogoMark } from "../logo";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export function IntroSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
            Welcome to
          </span>
          <h2 className="section-title text-ink text-3xl md:text-[2.6rem] leading-tight">
            Triple One Hotel
          </h2>
          <div className="flex flex-col gap-4 text-textgray leading-relaxed">
            <p>
              Nestled in Ghana, Triple One Hotel is a charming boutique hotel
              offering cozy rooms designed for both long and short stays.
              Whether you are visiting for business or leisure, our warm
              hospitality and restful spaces make every stay feel like home.
            </p>
            <p>
              Our property brings together comfort and convenience — an Event
              Garden for celebrations, a Conference Hall for productive
              gatherings, and complimentary high-speed internet throughout.
              Thoughtful touches, elegant finishes and genuine care define the
              Triple One experience.
            </p>
          </div>
        </div>

        {/* Dark quote card */}
        <div className="relative bg-ink text-white p-10 md:p-12 flex flex-col gap-6">
          <div className="absolute -top-6 left-8 bg-brand h-12 w-12 rounded-full flex items-center justify-center shadow-lg">
            <FaQuoteLeft className="text-white" />
          </div>
          <div className="flex flex-col gap-5 pt-2">
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-14" />
              <div className="flex items-center gap-1 text-cta">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
            </div>
            <p className="section-title text-2xl md:text-[1.7rem] leading-snug">
              &ldquo;A tranquil retreat blending comfort, charm and modern
              amenities — your home away from home in Ghana.&rdquo;
            </p>
            <div className="h-px w-16 bg-white/20" />
            <p className="text-white/70 text-sm">
              The Triple One Hotel Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
