import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroSection } from "@/components/home/HeroSection";
import { CoreFocusSection } from "@/components/home/CoreFocusSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { ChaptersSection } from "@/components/home/ChaptersSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function Home() {
  return (
    <>
      <a id="main-content" className="sr-only">
        Main content
      </a>
      <SiteHeader />
      {/* Five sections, no filler: hero → core focus → impact → chapters →
          CTA. Courses live on the global site (linked everywhere), and the
          FAQ has its own page, so nothing here repeats itself. */}
      <main className="home-flow">
        <HeroSection />
        <CoreFocusSection />
        <div className="home-flow-attach">
          <ImpactSection />
        </div>
        <ChaptersSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
