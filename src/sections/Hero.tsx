import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "../components/Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-ldta-purple-50 via-white to-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36"
    >
      {/* Decorative accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-ldta-gold-300/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-40 h-80 w-80 rounded-full bg-ldta-purple-500/15 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <p className="inline-flex items-center gap-2 rounded-full bg-ldta-purple-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-ldta-purple-700">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Learn &bull; Explore &bull; Grow
          </p>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ldta-purple-950 sm:text-5xl lg:text-[3.2rem]">
            Big Adventures.{" "}
            <span className="text-ldta-purple-700">Meaningful Learning.</span>{" "}
            <span className="text-ldta-gold-600">Brighter Futures.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Discover engaging programs, enriching activities, and memorable learning
            experiences designed to help young learners explore their interests, build
            confidence, and grow.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#programs"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ldta-purple-800 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-ldta-purple-800/20 transition-all hover:bg-ldta-purple-700 hover:shadow-xl"
            >
              Explore Our Programs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#enrollment"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border-2 border-ldta-purple-800 bg-white px-6 py-3.5 text-sm font-bold text-ldta-purple-800 transition-colors hover:bg-ldta-purple-50"
            >
              How Enrollment Works
            </a>
          </div>

          <p className="mt-6 text-sm font-medium text-slate-500">
            Helping families discover opportunities to learn, explore, and lead.
          </p>
        </Reveal>

        <Reveal
          delay={150}
          className="relative order-1 mx-auto w-full max-w-lg lg:order-2 lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl ring-1 ring-ldta-purple-900/10">
            <img
              src="https://images.pexels.com/photos/8813498/pexels-photo-8813498.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000"
              alt="A diverse group of school-age children smiling and engaged in a supervised outdoor learning activity"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
              width={1000}
              height={1200}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ldta-purple-950/30 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl border border-ldta-purple-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:left-auto sm:right-0 sm:w-64 sm:translate-x-0">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ldta-gold-100 text-ldta-gold-700">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-ldta-purple-900">
                  New Adventures Await
                </p>
                <p className="text-xs text-slate-500">Discover. Learn. Experience.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <p className="mx-auto mt-14 max-w-7xl px-4 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
        Photo is representative stock imagery used for demonstration purposes and does not
        depict actual LDTA students or program sites.
      </p>
    </section>
  );
}
