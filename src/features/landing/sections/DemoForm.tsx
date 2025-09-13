// components/DemoForm.tsx
import React, { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  phone: string;
  country: string;
  email: string;
  agreePrivacy: boolean;
  subscribe: boolean;
};

export default function DemoForm() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    phone: "",
    country: "",
    email: "",
    agreePrivacy: false,
    subscribe: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreePrivacy) {
      alert("Please agree to the Privacy Policy to continue.");
      return;
    }
    setSubmitting(true);
    try {
      // Put your submit logic here (fetch to API, etc.)
      await new Promise((r) => setTimeout(r, 800));
      alert("Form submitted (dummy).");
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full min-h-[70vh] flex items-start justify-center py-16 px-6 sm:px-8">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Request your demo of
          </h1>

          {/* Purple gradient subtitle */}
          <h2
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#c5a6ff 0%, #7c3aed 50%, #4b1ad6 100%)",
            }}
          >
            Threat-Atlas Intelligence Platform
          </h2>
        </header>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgba(10,7,20,0.6)]"
        >
          {/* Inputs grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First name*"
              aria-label="First name"
              required
              className="w-full bg-[#0b0710] placeholder:text-[#8b8793] text-white rounded-xl px-4 py-3 border border-[rgba(255,255,255,0.03)] focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last name*"
              aria-label="Last name"
              required
              className="w-full bg-[#0b0710] placeholder:text-[#8b8793] text-white rounded-xl px-4 py-3 border border-[rgba(255,255,255,0.03)] focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company*"
              aria-label="Company"
              required
              className="w-full bg-[#0b0710] placeholder:text-[#8b8793] text-white rounded-xl px-4 py-3 border border-[rgba(255,255,255,0.03)] focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            <input
              name="jobTitle"
              value={form.jobTitle}
              onChange={handleChange}
              placeholder="Job Title*"
              aria-label="Job Title"
              required
              className="w-full bg-[#0b0710] placeholder:text-[#8b8793] text-white rounded-xl px-4 py-3 border border-[rgba(255,255,255,0.03)] focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              aria-label="Phone number"
              className="w-full bg-[#0b0710] placeholder:text-[#8b8793] text-white rounded-xl px-4 py-3 border border-[rgba(255,255,255,0.03)] focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country*"
              aria-label="Country"
              required
              className="w-full bg-[#0b0710] placeholder:text-[#8b8793] text-white rounded-xl px-4 py-3 border border-[rgba(255,255,255,0.03)] focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            {/* Business email full width on next row */}
            <div className="md:col-span-2">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Business Email*"
                aria-label="Business Email"
                type="email"
                required
                className="w-full bg-[#0b0710] placeholder:text-[#8b8793] text-white rounded-xl px-4 py-3 border border-[rgba(255,255,255,0.03)] focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          {/* instructions / checkboxes */}
          <div className="mt-6 space-y-4 text-sm text-[#cfc9d8]">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agreePrivacy"
                checked={form.agreePrivacy}
                onChange={handleChange}
                className="mt-1 rounded-sm accent-purple-500"
                aria-required="true"
              />
              <span>
                I understand and agree that my personal data will be collected
                and processed according to the{" "}
                <a
                  href="/privacy"
                  className="text-purple-300 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                *
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="subscribe"
                checked={form.subscribe}
                onChange={handleChange}
                className="mt-1 rounded-sm accent-purple-500"
              />
              <span>
                Please keep me updated about emerging threats, new adversary
                techniques, and key customer stories. I understand that I can
                unsubscribe at any point by clicking the relevant link in any
                email from Group-IB.
              </span>
            </label>
          </div>

          {/* Submit area */}
          <div className="mt-8 flex items-center justify-between gap-4">
            {/* left: empty placeholder for alignment like screenshot */}
            <div className="text-sm text-[#8b8793]"></div>

            {/* right: submit button */}
            <div className="flex-shrink-0">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center px-12 py-3 bg-[#5515D4] rounded-full text-white font-medium shadow-[0_10px_30px_rgba(124,58,237,0.25)] transition-transform active:scale-[0.99] disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>

        {/* small footer spacing */}
        <div className="mt-6 text-center text-xs text-[#6f6a76]">
          {/* replicate any small caption if needed */}
        </div>
      </div>
    </section>
  );
}
