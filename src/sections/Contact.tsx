import { Mail, Phone, MessageSquareText } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { ContactForm } from "../components/ContactForm";
import { siteConfig } from "../data/siteConfig";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-ldta-purple-50/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-ldta-purple-600">
              Contact &amp; Enrollment Inquiry
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ldta-purple-950 sm:text-4xl">
              Let's Plan Their Next Learning Adventure
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Have questions about programs, upcoming camps, or enrollment? Get in touch
              with LDTA for more information.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="focus-ring flex items-center gap-4 rounded-xl border border-ldta-purple-100 bg-white p-4 transition-shadow hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ldta-purple-800 text-white">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-ldta-purple-500">
                    Email LDTA
                  </span>
                  <span className="block text-sm font-semibold text-ldta-purple-950">
                    {siteConfig.contact.email}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="focus-ring flex items-center gap-4 rounded-xl border border-ldta-purple-100 bg-white p-4 transition-shadow hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ldta-gold-500 text-ldta-purple-950">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-ldta-purple-500">
                    Call LDTA
                  </span>
                  <span className="block text-sm font-semibold text-ldta-purple-950">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href="#inquiry-form"
                className="focus-ring flex items-center gap-4 rounded-xl border border-ldta-purple-100 bg-white p-4 transition-shadow hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ldta-autumn-500 text-white">
                  <MessageSquareText className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-ldta-purple-500">
                    Prefer to write it out?
                  </span>
                  <span className="block text-sm font-semibold text-ldta-purple-950">
                    Ask a Question Below
                  </span>
                </span>
              </a>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-slate-400">
              Contact: {siteConfig.contact.name}. Please verify the phone number above
              against LDTA's current contact information before launch.
            </p>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
