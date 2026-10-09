import { useEffect, useState } from "react";
import { Menu, X, Compass, GraduationCap } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { cn } from "../utils/cn";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-white/70 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="focus-ring flex shrink-0 items-center gap-2.5 rounded-lg"
          aria-label="LDTA home"
        >
          <img
            src={siteConfig.logo}
            alt="LDTA — Leisure Delite Travel Academy logo"
            className="h-12 w-12 rounded-full bg-white object-contain shadow-sm ring-1 ring-ldta-purple-100 sm:h-14 sm:w-14"
            width={56}
            height={56}
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg font-extrabold tracking-tight text-ldta-purple-800">
              LDTA
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ldta-gold-600">
              Explore &bull; Learn &bull; Lead
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-1 py-1 text-sm font-semibold text-ldta-purple-900/80 transition-colors hover:text-ldta-purple-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#programs"
            className="focus-ring inline-flex items-center gap-1.5 rounded-full border-2 border-ldta-purple-800 px-4 py-2 text-sm font-bold text-ldta-purple-800 transition-colors hover:bg-ldta-purple-800 hover:text-white"
          >
            <Compass className="h-4 w-4" aria-hidden="true" />
            Explore Programs
          </a>
          <a
            href="#enrollment"
            className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-ldta-gold-500 px-4 py-2 text-sm font-bold text-ldta-purple-950 shadow-sm transition-colors hover:bg-ldta-gold-400"
          >
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            Enrollment Info
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-lg p-2 text-ldta-purple-900 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden bg-white shadow-lg transition-[max-height] duration-300 ease-in-out lg:hidden",
          isMenuOpen ? "max-h-[32rem]" : "max-h-0"
        )}
      >
        <nav
          className="flex flex-col gap-1 px-4 pb-4 pt-2"
          aria-label="Mobile primary"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="focus-ring rounded-lg px-3 py-3 text-base font-semibold text-ldta-purple-900 transition-colors hover:bg-ldta-purple-50"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <a
              href="#programs"
              onClick={handleNavClick}
              className="focus-ring inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-ldta-purple-800 px-4 py-2.5 text-sm font-bold text-ldta-purple-800"
            >
              <Compass className="h-4 w-4" aria-hidden="true" />
              Explore Programs
            </a>
            <a
              href="#enrollment"
              onClick={handleNavClick}
              className="focus-ring inline-flex items-center justify-center gap-1.5 rounded-full bg-ldta-gold-500 px-4 py-2.5 text-sm font-bold text-ldta-purple-950"
            >
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Enrollment Info
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
