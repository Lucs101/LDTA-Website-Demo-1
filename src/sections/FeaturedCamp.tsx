import {
  CalendarDays,
  MapPin,
  Tag,
  MessageCircleQuestion,
  Sparkle,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "../components/Reveal";
import { featuredCamp } from "../data/featuredCamp";

export function FeaturedCamp() {
  if (!featuredCamp.isActive) return null;

  return (
    <section
      id="fall-camp"
      className="scroll-mt-24 bg-gradient-to-b from-ldta-autumn-100 via-ldta-autumn-100/60 to-ldta-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="order-2 overflow-hidden rounded-[1.75rem] shadow-xl lg:order-1">
            <img
              src={featuredCamp.image}
              alt={featuredCamp.imageAlt}
              loading="lazy"
              className="h-full max-h-[32rem] w-full object-cover"
              width={1200}
              height={1000}
            />
          </Reveal>

          <Reveal delay={120} className="order-1 flex flex-col justify-center lg:order-2">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-ldta-autumn-500 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <Sparkle className="h-3.5 w-3.5" aria-hidden="true" />
              {featuredCamp.eyebrow}
            </p>

            <h2 className="mt-4 font-display text-3xl font-extrabold text-ldta-purple-950 sm:text-4xl">
              {featuredCamp.name}
            </h2>
            <p className="mt-2 font-display text-lg font-semibold text-ldta-autumn-700">
              {featuredCamp.headline}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {featuredCamp.description}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <InfoPill icon={CalendarDays} label="Dates" value={featuredCamp.dateRange} />
              <InfoPill icon={MapPin} label="Location" value={featuredCamp.location} />
              <InfoPill icon={Tag} label="Promotional Price" value={featuredCamp.price} />
              <InfoPill
                icon={MessageCircleQuestion}
                label="Enrollment"
                value="Ask LDTA directly"
              />
            </div>

            <div className="mt-6 rounded-xl border border-ldta-autumn-400/40 bg-white/70 p-4">
              <p className="text-sm font-bold text-ldta-purple-900">Program Highlights</p>
              <ul className="mt-2 space-y-1.5">
                {featuredCamp.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ldta-autumn-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              {featuredCamp.priceNote} {featuredCamp.disclaimer}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#fall-camp-details"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ldta-purple-800 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-ldta-purple-700"
              >
                View Camp Details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border-2 border-ldta-autumn-600 bg-white px-6 py-3.5 text-sm font-bold text-ldta-autumn-700 transition-colors hover:bg-ldta-autumn-100"
              >
                Ask About Enrollment
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div
            id="fall-camp-details"
            className="mt-14 scroll-mt-24 rounded-2xl border border-ldta-autumn-400/30 bg-white p-6 shadow-sm sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-ldta-purple-900">
              Camp Information At a Glance
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredCamp.details.map((d) => (
                <div key={d.label} className="rounded-xl bg-ldta-purple-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-ldta-purple-500">
                    {d.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ldta-purple-900">
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              {featuredCamp.disclaimer} This featured-program section is kept separate from
              the rest of the website so it can be easily replaced with the next seasonal
              program once this camp has concluded.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoPill({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CalendarDays;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-white/80 p-3.5 shadow-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ldta-autumn-100 text-ldta-autumn-600">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-ldta-autumn-700">
          {label}
        </p>
        <p className="text-sm font-semibold text-ldta-purple-950">{value}</p>
      </div>
    </div>
  );
}
