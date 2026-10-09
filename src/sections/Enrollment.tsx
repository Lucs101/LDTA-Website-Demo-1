import { Compass, ClipboardList, PhoneCall, ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { siteConfig } from "../data/siteConfig";

const steps = [
  {
    icon: Compass,
    step: "Step 1",
    title: "Explore Programs",
    description:
      "Browse the available programs, activities, and camp opportunities to find the right experience for your family.",
  },
  {
    icon: ClipboardList,
    step: "Step 2",
    title: "Review the Details",
    description:
      "Check the program information, dates, eligibility, pricing, and any requirements provided by LDTA.",
  },
  {
    icon: PhoneCall,
    step: "Step 3",
    title: "Connect With LDTA",
    description:
      "Follow the official enrollment instructions or contact the organization for guidance on the next steps.",
  },
];

export function Enrollment() {
  return (
    <section id="enrollment" className="scroll-mt-24 bg-ldta-purple-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How Enrollment Works"
            title="Three Simple Steps to Get Started"
            description="LDTA's website is designed to inform families and guide you toward enrollment — here's how the process works."
            className="[&_p]:text-ldta-purple-100/80 [&_h2]:text-white"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, step, title, description }, i) => (
            <Reveal key={step} delay={i * 120}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-sm">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ldta-gold-500 text-ldta-purple-950">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-ldta-gold-400">
                  {step}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold text-white">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ldta-purple-100/75">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <a
              href={siteConfig.enrollmentUrl}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-ldta-gold-500 px-7 py-4 text-sm font-bold text-ldta-purple-950 shadow-lg transition-colors hover:bg-ldta-gold-400"
            >
              Get Enrollment Information
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="max-w-xl text-xs text-ldta-purple-100/60">
              This button currently connects you with LDTA directly. Once an official
              registration link is confirmed, it will route to that destination instead.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
