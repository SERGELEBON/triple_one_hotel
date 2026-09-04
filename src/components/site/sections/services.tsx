import Link from "next/link";
import { SectionHeading } from "../section-heading";
import { SERVICES } from "../site-data";
import { Icon } from "../icon";
import { FaChevronRight } from "react-icons/fa";

export function ServicesSection() {
  return (
    <section className="bg-white">
      {/* Full-width captioned photo */}
      <div className="relative h-[44vh] min-h-[320px] w-full overflow-hidden">
        <img
          src="/images/about-building.png"
          alt="Triple One Hotel building"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative h-full mx-auto max-w-7xl px-6 flex items-end pb-10">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
              What We Offer
            </span>
            <h2 className="section-title text-white text-3xl md:text-[2.6rem] mt-2">
              Triple One Hotel Services
            </h2>
          </div>
        </div>
      </div>

      {/* Icon list */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.slug} className="flex gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-frame text-brand bg-cream">
                <Icon name={s.icon} className="text-lg" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[0.95rem] font-bold uppercase tracking-[0.06em] text-ink">
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed text-textgray">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/services" className="btn-cta">
            All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
