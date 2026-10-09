import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface FormState {
  name: string;
  email: string;
  topic: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  topic: "Program information",
  message: "",
};

const topics = [
  "Program information",
  "Camp details",
  "Enrollment guidance",
  "General question",
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Please enter a short message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setStatus("error");
      return;
    }

    try {
      const subject = encodeURIComponent(`LDTA Inquiry: ${form.topic}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <form
      id="inquiry-form"
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ldta-purple-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <h3 className="font-display text-lg font-bold text-ldta-purple-900">
        Ask a Question
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        This demo form opens a pre-filled email to LDTA using your device's email app. No
        information is stored or sent anywhere else.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="block text-sm font-semibold text-ldta-purple-900">
            Parent / Guardian Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="focus-ring mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-ldta-charcoal placeholder:text-slate-400"
            placeholder="Jane Smith"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="block text-sm font-semibold text-ldta-purple-900">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="focus-ring mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-ldta-charcoal placeholder:text-slate-400"
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="topic" className="block text-sm font-semibold text-ldta-purple-900">
            General Inquiry Topic
          </label>
          <select
            id="topic"
            value={form.topic}
            onChange={handleChange("topic")}
            className="focus-ring mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-ldta-charcoal"
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-ldta-purple-900">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={handleChange("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="focus-ring mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-ldta-charcoal placeholder:text-slate-400"
            placeholder="Tell us a bit about what you're looking for..."
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-400">
        Please do not include your child's full name, birth date, or other sensitive
        information in this form.
      </p>

      <button
        type="submit"
        className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ldta-purple-800 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-ldta-purple-700"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send Inquiry
      </button>

      {status === "success" && (
        <div
          role="status"
          className="mt-5 flex items-start gap-2.5 rounded-lg bg-green-50 p-4 text-sm text-green-800"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p>
            Your email app should now open with your message ready to send to LDTA. If it
            doesn't open automatically, please email{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold underline">
              {siteConfig.contact.email}
            </a>{" "}
            directly.
          </p>
        </div>
      )}

      {status === "error" && Object.keys(errors).length > 0 && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-lg bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p>Please correct the highlighted fields above and try again.</p>
        </div>
      )}
    </form>
  );
}
