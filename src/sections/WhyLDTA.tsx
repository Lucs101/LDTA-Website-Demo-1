import { Telescope, Route, Handshake, TrendingUp } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const reasons = [
  {
    icon: Telescope,
    title: "Experiences Beyond the Classroom",
    description:
      "LDTA encourages curiosity through real-world discovery, helping young learners see their education in a new light.",
  },
  {
    icon: Route,
    title: "Learning Through Exploration",
    description:
      "Programs are designed to help young people connect classroom learning with engaging, hands-on experiences.",
  },
  {
    icon: Handshake,
    title: "Opportunities to Connect",
    description:
      "Families gain ways to discover activities, build relationships, and share experiences within their community.",
  },
  {
    icon: TrendingUp,
    title: "A Journey of Growth",
    description:
      "LDTA celebrates exploration, confidence, and personal development as part of every learning journey.",
  },
];

export function WhyLDTA() {
  return (
    <section id="why-ldta" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Why Families Choose LDTA"
            description="LDTA's educational philosophy centers on exploration, connection, and growth — not unsupported promises."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-ldta-purple-100 bg-ldta-purple-50/50 p-6 transition-shadow hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ldta-purple-800 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ldta-purple-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
