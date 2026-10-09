import { ArrowRight } from "lucide-react";
import type { Program } from "../data/programs";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ldta-purple-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={program.image}
          alt={program.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={400}
          height={300}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ldta-purple-950/40 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-ldta-purple-900">
          {program.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
          {program.description}
        </p>
        <a
          href={program.anchor}
          className="focus-ring mt-5 inline-flex items-center gap-1.5 self-start rounded-full bg-ldta-purple-50 px-4 py-2 text-sm font-bold text-ldta-purple-700 transition-colors hover:bg-ldta-purple-800 hover:text-white"
        >
          {program.buttonLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
