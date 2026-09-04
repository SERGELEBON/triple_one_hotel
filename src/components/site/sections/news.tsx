import { SectionHeading } from "../section-heading";
import { NEWS } from "../site-data";
import { FaCalendarAlt, FaChevronRight } from "react-icons/fa";

export function NewsSection() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="What's Happening"
          title="Latest News"
          align="center"
        />
        <p className="mx-auto mt-5 max-w-2xl text-center text-textgray leading-relaxed">
          Updates, events and stories from Triple One Hotel.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {NEWS.map((n) => (
            <article key={n.title} className="flex flex-col bg-white border border-pearl">
              <div className="relative overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="h-52 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-brand text-white px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider">
                  {n.category}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.14em] text-textgray font-semibold">
                  <FaCalendarAlt className="text-brand text-[0.7rem]" />
                  <span>{n.date}</span>
                </div>
                <h3 className="text-base font-bold text-ink leading-snug">
                  {n.title}
                </h3>
                <p className="text-sm leading-relaxed text-textgray flex-1">
                  {n.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[0.76rem] font-bold uppercase tracking-[0.14em] text-brand hover:text-brand-dark transition-colors mt-2"
                >
                  Read More
                  <FaChevronRight className="text-[0.7rem]" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
