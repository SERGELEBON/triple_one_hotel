import { SiteShell } from "@/components/site/site-shell";
import { PageBanner } from "@/components/site/page-banner";
import { SectionHeading } from "@/components/site/section-heading";
import { LogoMark } from "@/components/site/logo";
import { Icon } from "@/components/site/icon";
import { STATS, FEATURES, SERVICES } from "@/components/site/site-data";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export const metadata = {
  title: "About Us | Triple One Hotel",
  description:
    "Triple One Hotel — a charming boutique hotel in Ghana offering cozy rooms, an Event Garden, Conference Hall and warm hospitality.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageBanner
        title="About Us"
        image="/images/about-building.png"
        crumb="About Us"
      />

      {/* Presentation + dark quote */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="photo-frame">
            <div className="photo-frame__inner">
              <img
                src="/images/about-building.png"
                alt="Triple One Hotel building"
                className="h-[460px] w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
              Our Story
            </span>
            <h2 className="section-title text-ink text-3xl md:text-[2.6rem] leading-tight">
              A charming retreat in the heart of Ghana
            </h2>
            <div className="flex flex-col gap-4 text-textgray leading-relaxed">
              <p>
                Triple One Hotel was born from a simple idea — that every
                traveller deserves a warm, restful place to call home, whether
                for a single night or an extended stay. Our mint-green facade
                and colonial-style architecture welcome guests into a space
                where comfort meets character.
              </p>
              <p>
                With six room categories, a lush Event Garden, a modern
                Conference Hall and complimentary high-speed internet, we cater
                to leisure and business travellers alike. Our team takes pride
                in genuine Ghanaian hospitality — attentive, unhurried and
                always personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark quote card */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="bg-ink text-white p-10 md:p-14 flex flex-col gap-6 text-center items-center">
            <div className="flex items-center gap-3">
              <LogoMark className="h-9 w-14" />
              <div className="flex items-center gap-1 text-cta">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
            </div>
            <FaQuoteLeft className="text-brand text-2xl" />
            <p className="section-title text-2xl md:text-[1.9rem] leading-snug max-w-3xl">
              &ldquo;We blend comfort, charm and modern amenities to create a
              tranquil retreat — your home away from home in Ghana.&rdquo;
            </p>
            <p className="text-white/60 text-sm uppercase tracking-[0.2em]">
              The Triple One Hotel Philosophy
            </p>
          </div>
        </div>
      </section>

      {/* Features / stats */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionHeading
            eyebrow="By the Numbers"
            title="Our Features"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-cream border border-pearl p-8 text-center flex flex-col gap-2"
              >
                <span className="text-4xl font-extrabold text-brand">
                  {s.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 border border-pearl p-6 bg-ivory"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand border border-frame">
                  <Icon name={f.icon} className="text-lg" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold uppercase tracking-[0.06em] text-ink">
                    {f.title}
                  </h3>
                  <p className="text-sm text-textgray">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services photo block */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionHeading
            eyebrow="Spaces & Amenities"
            title="What Awaits You"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <div key={s.slug} className="group relative overflow-hidden bg-ink">
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-base font-bold uppercase tracking-[0.06em] text-white">
                    {s.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="section-title text-ink text-2xl md:text-3xl leading-snug">
            A reputation built on warmth and care
          </h2>
          <p className="mt-5 text-textgray leading-relaxed">
            Guests return to Triple One Hotel for the feeling — the ease of a
            place that anticipates your needs, the calm of well-appointed rooms,
            and the genuine welcome of a team that treats every guest like
            family. We look forward to hosting you.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
