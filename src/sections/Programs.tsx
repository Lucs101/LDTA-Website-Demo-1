import { SectionHeading } from "../components/SectionHeading";
import { ProgramCard } from "../components/ProgramCard";
import { Reveal } from "../components/Reveal";
import { programs } from "../data/programs";

export function Programs() {
  return (
    <section id="programs" className="scroll-mt-24 bg-ldta-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What LDTA Offers"
            title="Learning Beyond the Classroom"
            description="Explore opportunities that bring learning to life through discovery, creativity, cultural experiences, and meaningful activities."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <Reveal key={program.id} delay={i * 80}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-slate-400">
            These categories are proposed groupings based on LDTA's branding and promotional
            materials. Program names, descriptions, and availability are subject to
            confirmation — please contact LDTA for the most current offerings.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
