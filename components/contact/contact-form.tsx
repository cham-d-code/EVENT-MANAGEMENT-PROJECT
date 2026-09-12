"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  eventType: string;
  eventDate: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  eventType: "",
  eventDate: "",
  message: "",
};

const eventTypes = ["Hackathon", "Exposition", "Corporate", "University", "Other"];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.eventType) next.eventType = "Please select an event type.";
    if (!values.eventDate) next.eventDate = "Please choose an event date.";
    if (!values.message.trim()) next.message = "Tell us a little about your event.";
    return next;
  }

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: wire to email service (Resend / Formspree / API route) for v2.
    console.log("Contact form submission:", form);

    setSubmitted(true);
    setForm(initialState);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-ember/30 bg-ember/5 p-12 text-center"
      >
        <CheckCircle2 size={40} className="text-ember-2" />
        <h3 className="font-display text-xl font-bold text-paper">Message sent</h3>
        <p className="max-w-sm text-sm text-fog">
          Thanks for reaching out — we&apos;ll get back to you within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-ember-2 underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={inputClass(!!errors.name)}
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={inputClass(!!errors.email)}
            placeholder="jane@company.com"
          />
        </Field>
        <Field label="Event type" error={errors.eventType}>
          <select
            value={form.eventType}
            onChange={(e) => handleChange("eventType", e.target.value)}
            className={inputClass(!!errors.eventType)}
          >
            <option value="">Select an option</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Event date" error={errors.eventDate}>
          <input
            type="date"
            value={form.eventDate}
            onChange={(e) => handleChange("eventDate", e.target.value)}
            className={inputClass(!!errors.eventDate)}
          />
        </Field>
      </div>

      <Field label="Message" error={errors.message}>
        <textarea
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={5}
          className={inputClass(!!errors.message)}
          placeholder="Tell us about your event — scale, dates, and what you need help with."
        />
      </Field>

      <motion.button
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-ember-2 via-ember to-ember-deep px-6 py-3.5 text-sm font-semibold text-ink transition-shadow duration-300 hover:shadow-[0_10px_30px_-8px_rgba(255,106,31,0.55)] sm:w-auto"
      >
        Send message
      </motion.button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-fog-dim">{label}</span>
      <div className="mt-2">{children}</div>
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 block text-xs text-ember-2"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-ink-soft px-4 py-3 text-sm text-paper outline-none transition-colors duration-200 placeholder:text-fog-dim focus:border-ember ${
    hasError ? "border-ember" : "border-line"
  }`;
}
