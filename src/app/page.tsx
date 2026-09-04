import { SiteShell } from "@/components/site/site-shell";
import { HeroSection } from "@/components/site/sections/hero";
import { IntroSection } from "@/components/site/sections/intro";
import { RoomsSection } from "@/components/site/sections/rooms";
import { ServicesSection } from "@/components/site/sections/services";
import { GalleryPreviewSection } from "@/components/site/sections/gallery-preview";
import { KitchenSection } from "@/components/site/sections/kitchen";
import { VideoSection } from "@/components/site/sections/video";
import { NewsSection } from "@/components/site/sections/news";
import { FollowUsSection } from "@/components/site/sections/follow-us";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <IntroSection />
      <RoomsSection />
      <ServicesSection />
      <GalleryPreviewSection />
      <KitchenSection />
      <VideoSection />
      <NewsSection />
      <FollowUsSection />
    </SiteShell>
  );
}
