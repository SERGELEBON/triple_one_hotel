import Link from "next/link";
import { FaHome, FaAngleRight } from "react-icons/fa";

export function PageBanner({
  title,
  image,
  crumb,
}: {
  title: string;
  image: string;
  crumb: string;
}) {
  return (
    <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/80" />
      <div className="relative h-full mx-auto max-w-7xl px-6 flex flex-col items-center justify-center text-center gap-4">
        <h1 className="banner-title text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <nav className="flex items-center gap-2 text-white/80 text-sm">
          <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaHome className="text-[0.7rem]" />
            <span>Home</span>
          </Link>
          <FaAngleRight className="text-[0.6rem] text-white/60" />
          <span className="text-white font-semibold">{crumb}</span>
        </nav>
      </div>
    </section>
  );
}
