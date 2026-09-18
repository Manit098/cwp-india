import { LINKS } from "@/lib/links";

const HERO_STATS = [
  { value: "2,000+", label: "Students Reached" },
  { value: "14+", label: "States & UTs" },
  { value: "50+", label: "Workshops Held" },
  { value: "10+", label: "Cities Active" },
  { value: "₹0", label: "What Students Pay" },
];

/* Three copies so the home-marquee keyframe (−33.333%) loops seamlessly. */
const MARQUEE_STATS = [...HERO_STATS, ...HERO_STATS, ...HERO_STATS];

export function HeroSection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    /* overflow-x-clip: the stats marquee track is wider than the viewport by
       design; clip here so a transform never widens the page on phones. */
    <section className="overflow-x-clip pt-8 md:pt-[3.69rem]">
      <div className="mx-auto w-full max-w-[85rem] px-5 md:px-10">
        <h1 className="home-display text-center text-[2rem] leading-[1.05] tracking-[-0.02em] md:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem]">
          {title ?? (
            <>
              India has no shortage of talent.{" "}
              <br className="hidden sm:block" />
              Just of on-ramps.
            </>
          )}
        </h1>
        <p className="mx-auto mt-5 max-w-[44rem] text-center text-base text-[var(--home-ink-soft)] sm:text-lg">
          {description ??
            "CWP India is the India chapter of CodeWithPurpose — students running free coding workshops, hackathons, and school chapters across the country. Taught by students, open to every student, priced at nothing."}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <a href={LINKS.courses} className="home-btn home-btn-fill">
            Explore courses
          </a>
          <a href={LINKS.about} className="home-btn home-btn-outline">
            Our Story
          </a>
        </div>
      </div>

      <div
        className="home-marquee home-hero-stats mt-10 md:mt-14"
        role="group"
        aria-label="Impact statistics"
      >
        <div className="home-marquee-track">
          {MARQUEE_STATS.map((stat, index) => (
            <div
              key={`${stat.label}-${index}`}
              className="home-card flex w-[8.75rem] shrink-0 flex-col justify-center rounded-xl px-3 py-5 text-center sm:w-[11rem] sm:px-4 md:w-[13rem] md:px-6 md:py-6"
              aria-hidden={index >= HERO_STATS.length ? true : undefined}
            >
              <p className="home-serif text-[1.375rem] leading-none text-[#3e7f5c] sm:text-[1.5rem] md:text-[2rem]">
                {stat.value}
              </p>
              <p className="mt-2 text-[12px] leading-snug text-balance text-[var(--home-ink-soft)] sm:text-[13px] md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
