import { SiteShell } from "@/components/site/site-shell";
import { PageBanner } from "@/components/site/page-banner";
import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "@/components/site/contact-form";
import { SocialIcons } from "@/components/site/social-icons";
import { HOTEL } from "@/components/site/site-data";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const metadata = {
  title: "Contact Us | Triple One Hotel",
  description:
    "Contact Triple One Hotel to book a room, reserve a table or plan an event. Call +233 (0)540 231 074 or send us a message.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageBanner
        title="Contact Us"
        image="/images/gallery-lobby.png"
        crumb="Contact Us"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Form */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Get in Touch"
              title="Send Us a Message"
              align="left"
            />
            <p className="text-textgray leading-relaxed -mt-4">
              Have a question about rooms, events or your stay? Fill in the form
              below and our team will get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>

          {/* Contact info sidebar */}
          <aside className="flex flex-col gap-6">
            <div className="bg-ink text-white p-8 flex flex-col gap-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
                Contact Information
              </h3>
              <ul className="flex flex-col gap-5 text-sm">
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white">
                    <FaMapMarkerAlt />
                  </span>
                  <span className="text-white/80 leading-relaxed">
                    {HOTEL.address}
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white">
                    <FaPhone />
                  </span>
                  <a
                    href={`tel:${HOTEL.phoneHref}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {HOTEL.phone}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white">
                    <FaEnvelope />
                  </span>
                  <a
                    href={`mailto:${HOTEL.email}`}
                    className="text-white/80 hover:text-white transition-colors break-all"
                  >
                    {HOTEL.email}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white">
                    <FaClock />
                  </span>
                  <span className="text-white/80">Front Desk: 24 / 7</span>
                </li>
              </ul>
              <div className="h-px w-full bg-white/15" />
              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Follow Us
                </span>
                <SocialIcons variant="light" />
              </div>
            </div>

            {/* Mini map placeholder */}
            <div className="relative h-56 bg-cream border border-pearl overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center p-6">
                <FaMapMarkerAlt className="text-brand text-3xl" />
                <p className="text-sm font-semibold text-ink">
                  Triple One Hotel
                </p>
                <p className="text-xs text-textgray">
                  {HOTEL.addressLine} — exact map to be provided
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
