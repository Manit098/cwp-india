import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { LINKS } from "@/lib/links";
import { CONTACT_REASONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CodeWithPurpose India. Start a chapter, host a workshop, or just say hello.",
};

const inputClass =
  "w-full rounded-lg border border-[var(--home-hairline-strong)] bg-[var(--home-white)] px-3.5 py-2.5 text-sm text-[var(--home-ink)] placeholder:text-[var(--home-ink-quiet)] focus:border-[var(--home-fern)] focus:outline-none focus:ring-2 focus:ring-[var(--home-fern)]/30";

const labelClass =
  "mb-1.5 block text-sm font-medium text-[var(--home-ink-soft)]";

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact us"
        title="Let's build something."
        description="Want to start a chapter, host a workshop, partner with us, or just ask a question? We'd love to hear from you."
      />

      {/* pb matches the landing's final-CTA spacing so the form never sits
          flush against the footer. */}
              <section className="mx-auto w-full max-w-[85rem] px-5 pb-16 pt-12 md:px-10 md:pb-32 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="home-card home-card-accent rounded-2xl p-7">
              <h2 className="home-serif text-xl">
                What are you reaching out about?
              </h2>
              <ul className="mt-4 space-y-3">
                {CONTACT_REASONS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[var(--home-ink-soft)]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--home-fern)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 h-4 w-4 flex-none"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="home-card rounded-2xl p-7">
              <p className="home-mono text-xs text-[var(--home-ink-quiet)]">
                Direct channels
              </p>
              <div className="mt-3 space-y-3 text-[var(--home-ink-soft)]">
                <p>
                  Email us at{" "}
                  <a
                    href={LINKS.email}
                    className="text-[var(--home-link-green)] underline underline-offset-2"
                  >
                    hello@codewithpurpose.org
                  </a>
                </p>
                <p>
                  Join the global community on{" "}
                  <a
                    href={LINKS.discord}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--home-link-green)] underline underline-offset-2"
                  >
                    Discord
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="home-card home-card-accent rounded-2xl p-8 md:p-10">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className={labelClass}>City / State</span>
                <input
                  type="text"
                  name="location"
                  className={inputClass}
                  placeholder="e.g. Bengaluru, Karnataka"
                />
              </label>
              <label className="block">
                <span className={labelClass}>Reason</span>
                <select name="reason" className={inputClass}>
                  {CONTACT_REASONS.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className={labelClass}>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us what you have in mind..."
                />
              </label>
              <button
                type="submit"
                className="home-btn home-btn-fill w-full sm:w-auto"
              >
                Send Message
                <span className="home-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
