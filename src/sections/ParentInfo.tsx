import { Mail } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { FAQItem } from "../components/FAQItem";
import { faqs } from "../data/faqs";
import { siteConfig } from "../data/siteConfig";

export function ParentInfo() {
  return (
    <section id="parents" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="For Parents & Guardians"
            title="What to Know Before Enrolling"
            description="A few common questions families ask when exploring LDTA programs."
          />
        </Reveal>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 60}>
              <FAQItem faq={faq} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-ldta-purple-50 p-6 text-center">
            <p className="text-sm text-slate-600">
              Have a question that isn't answered here? LDTA is happy to help.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-ldta-purple-800 px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-ldta-purple-700"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email LDTA a Question
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
