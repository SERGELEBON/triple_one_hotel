import { SectionHeading } from "../section-heading";
import { SocialIcons } from "../social-icons";

export function FollowUsSection() {
  return (
    <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
      <img
        src="/images/gallery-courtyard.png"
        alt="Triple One Hotel courtyard"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative h-full mx-auto max-w-7xl px-6 flex flex-col items-center justify-center text-center gap-6">
        <SectionHeading
          eyebrow="Stay Connected"
          title="Follow Us"
          variant="light"
          align="center"
        />
        <p className="max-w-xl text-white/75 leading-relaxed">
          Follow Triple One Hotel on social media for the latest updates,
          offers and a peek into life at our hotel.
        </p>
        <SocialIcons variant="light" />
      </div>
    </section>
  );
}
