import { Mail, Phone, ArrowUp } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-ldta-purple-950 text-ldta-purple-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={siteConfig.logo}
                alt="LDTA — Leisure Delite Travel Academy logo"
                className="h-16 w-16 rounded-full bg-white object-contain p-1 shadow-md"
                width={64}
                height={64}
                loading="lazy"
              />
              <div>
                <p className="font-display text-lg font-extrabold text-white">LDTA</p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ldta-gold-400">
                  Explore &bull; Learn &bull; Lead
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ldta-purple-100/80">
              Leisure Delite Travel Academy helps families discover educational travel,
              school break camps, and enrichment experiences that help young learners
              explore, build confidence, and grow.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ldta-gold-400">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="focus-ring rounded text-ldta-purple-100/85 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ldta-gold-400">
              Programs
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#programs" className="focus-ring rounded text-ldta-purple-100/85 transition-colors hover:text-white">
                  Educational Travel &amp; Field Trips
                </a>
              </li>
              <li>
                <a href="#fall-camp" className="focus-ring rounded text-ldta-purple-100/85 transition-colors hover:text-white">
                  School Break Camps
                </a>
              </li>
              <li>
                <a href="#gallery" className="focus-ring rounded text-ldta-purple-100/85 transition-colors hover:text-white">
                  Arts, Music &amp; Culture
                </a>
              </li>
              <li>
                <a href="#why-ldta" className="focus-ring rounded text-ldta-purple-100/85 transition-colors hover:text-white">
                  Enrichment &amp; Youth Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ldta-gold-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="focus-ring flex items-center gap-2 rounded text-ldta-purple-100/85 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-ldta-gold-400" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="focus-ring flex items-center gap-2 rounded text-ldta-purple-100/85 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-ldta-gold-400" aria-hidden="true" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ldta-purple-100/70 sm:flex-row">
          <p>
            &copy; {year} Leisure Delite Travel Academy (LDTA). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a href="#" className="focus-ring rounded hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="focus-ring rounded hover:text-white">
              Accessibility Statement
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
