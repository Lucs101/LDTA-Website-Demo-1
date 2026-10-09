import { Compass, BookOpenCheck, Users, Globe2, HeartHandshake } from "lucide-react";
import { Reveal } from "../components/Reveal";

const values = [
  { icon: Compass, label: "Exploration" },
  { icon: BookOpenCheck, label: "Learning" },
  { icon: Globe2, label: "Leadership" },
  { icon: Users, label: "Discovery" },
  { icon: HeartHandshake, label: "Community" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-ldta-purple-600">
            About LDTA
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ldta-purple-950 sm:text-4xl">
            Explore More. Learn More. Become More.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            At Leisure Delite Travel Academy, learning can extend beyond the traditional
            classroom. Our goal is to help families discover enriching opportunities where
            young people can explore new experiences, connect with others, and develop a
            lasting curiosity about the world.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {values.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-2 rounded-xl border border-ldta-purple-100 bg-ldta-purple-50/60 px-3 py-4 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ldta-purple-700 shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-bold text-ldta-purple-900">{label}</span>
              </li>
            ))}
          </ul>

          <a
            href="#why-ldta"
            className="focus-ring mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ldta-purple-800 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-ldta-purple-700"
          >
            Learn About LDTA
          </a>
        </Reveal>

        <Reveal delay={150} className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[1.75rem] border-4 border-ldta-purple-50 shadow-xl">
            <img
              src="https://images.pexels.com/photos/8617510/pexels-photo-8617510.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=900"
              alt="A group of smiling students standing together during an educational outing"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
              width={900}
              height={1125}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
