import { ChapterNetwork } from "@/components/home/ChapterNetwork";
import { LINKS } from "@/lib/links";

export function ChaptersSection() {
  return (
    <section id="chapters" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-[85rem] px-5 md:px-10">
        <div className="overflow-hidden rounded-xl bg-[var(--home-grey-450)]">
          <figure className="grid md:grid-cols-[2fr_3fr]">
            <div className="p-5 sm:p-6 md:p-8">
              <div className="flex h-full items-center justify-center overflow-hidden rounded-lg border-[0.5px] border-[var(--home-hairline)] bg-[var(--home-page)] p-6">
                <ChapterNetwork />
              </div>
            </div>
            <figcaption className="flex flex-col justify-center p-5 sm:p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--home-ink-quiet)]">
                Chapters, not audiences
              </p>
              <h2 className="mt-3 text-lg leading-[1.15] md:text-[1.375rem]">
                There&apos;s probably a chapter near you — and if there
                isn&apos;t, you can start it
              </h2>
              <p className="mt-3 max-w-[40rem] text-sm leading-[1.5] text-[var(--home-ink-soft)]">
                Most chapters began with one student asking a teacher for a
                classroom on Saturdays. We send the material, the mentors, and
                whatever else you need — you bring the students.
              </p>
              <a href={LINKS.join} className="home-arrow-link mt-5 self-start">
                Start a chapter <span className="home-arrow">→</span>
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
