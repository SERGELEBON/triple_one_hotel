"use client";

import { useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FaPaperPlane } from "react-icons/fa";

export function ContactForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const { a, b, expected } = useMemo(() => {
    const r = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const a = r(11, 49);
    const b = r(11, 39);
    return { a, b, expected: a + b };
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    answer: "",
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, expected }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast({
          title: "Could not send",
          description: data?.error || "Please check your details and try again.",
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Message sent",
        description: data?.message || "Thank you! We'll be in touch shortly.",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        answer: "",
      });
    } catch {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const field =
    "w-full border border-frame bg-white px-4 py-3 text-sm text-ink placeholder:text-textgray/70 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">
            Name <span className="text-cta">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            className={field}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">
            Email <span className="text-cta">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+233 ..."
            className={field}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">
            Subject <span className="text-cta">*</span>
          </label>
          <input
            id="subject"
            type="text"
            required
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            placeholder="How can we help?"
            className={field}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">
          Message <span className="text-cta">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your stay or enquiry..."
          className={`${field} resize-none`}
        />
      </div>

      {/* Anti-spam */}
      <div className="flex flex-col gap-2">
        <label htmlFor="answer" className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">
          Security Question: How much is {a} + {b}? <span className="text-cta">*</span>
        </label>
        <input
          id="answer"
          type="number"
          required
          value={form.answer}
          onChange={(e) => update("answer", e.target.value)}
          placeholder="Your answer"
          className={`${field} sm:max-w-xs`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-cta self-start disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Message"}
        {!submitting && <FaPaperPlane className="text-[0.75rem]" />}
      </button>
    </form>
  );
}
