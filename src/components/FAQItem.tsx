import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "../data/faqs";
import { cn } from "../utils/cn";

export function FAQItem({ faq }: { faq: Faq }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="overflow-hidden rounded-xl border border-ldta-purple-100 bg-white">
      <h3>
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <span className="font-display text-sm font-bold text-ldta-purple-900 sm:text-base">
            {faq.question}
          </span>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-ldta-purple-600 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
