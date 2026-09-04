import { SiteHeader } from "./header";
import { SiteFooter } from "./footer";
import { ScrollToTop } from "./scroll-to-top";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
