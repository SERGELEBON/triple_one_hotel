import Link from "next/link";
import { SectionHeading } from "../section-heading";
import { CULINARY } from "../site-data";
import { FaChevronRight } from "react-icons/fa";

export function KitchenSection() {
  return (
    <section className="bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Taste the Difference"
          title="Triple One Kitchen"
          variant="light"
          align="center"
        />
        <p className="mx-auto mt-5 max-w-2xl text-center text-white/70 leading-relaxed">
          Our on-site restaurant serves a blend of authentic Ghanaian flavours
          and continental favourites, prepared fresh daily by our chef.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CULINARY.map((c) => (
            <article key={c.name} className="bg-ink/40 border border-white/10 overflow-hidden">
              <img
                src={c.image}
                alt={c.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-base font-bold uppercase tracking-[0.06em] text-white">
                  {c.name}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {c.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/restaurant"
            className="inline-flex items-center gap-2 text-[0.8rem] font-bold uppercase tracking-[0.16em] text-white hover:text-cta transition-colors"
          >
            Explore Dining
            <FaChevronRight className="text-[0.7rem]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
