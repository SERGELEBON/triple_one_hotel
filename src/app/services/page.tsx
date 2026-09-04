import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { PageBanner } from "@/components/site/page-banner";
import { SectionHeading } from "@/components/site/section-heading";
import { SERVICES } from "@/components/site/site-data";
import { FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Services | Triple One Hotel",
  description:
    "Triple One Hotel services — Event Garden, Conference Hall, high-speed internet, dining, laundry and airport shuttle in Ghana.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageBanner
        title="Services"
        image="/images/event-garden.png"
        crumb="Services"
      />

      {/* Intro */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
            What We Offer
          </span>
          <h2 className="section-title text-ink text-3xl md:text-[2.4rem] mt-3">
            Triple One Hotel Services
          </h2>
          <p className="mt-5 text-textgray leading-relaxed">
            Beyond cozy rooms, Triple One Hotel offers a range of services to
            make every stay effortless — from celebrations in our Event Garden
            to productive meetings in our Conference Hall.
          </p>
        </div>
      </section>

      {/* Service tiles with caption overlay */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.slug} className="group relative overflow-hidden bg-ink">
              <img
                src={s.image}
                alt={s.name}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
                <h3 className="text-lg font-bold uppercase tracking-[0.06em] text-white">
                  {s.name}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="section-title text-2xl md:text-3xl">
              Planning an event or a longer stay?
            </h3>
            <p className="text-white/70">
              Our team will help tailor a package that fits your needs.
            </p>
          </div>
          <Link href="/contact-us" className="btn-cta btn-cta--red shrink-0">
            Get in Touch
            <FaArrowRight className="text-[0.7rem]" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
