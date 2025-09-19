"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {};

/**
 * ContactSection
 *
 * - Replaces the earlier pricing cards — only the contact/overview section remains.
 * - Keeps original visual styling: angled shimmer, gradient corner glows, motion.
 * - Overview text + features list + bottom CTA(s).
 *
 * Customize:
 * - Replace sales@paritybit.com with your real support/sales address.
 * - Change the /purchase route if you have a different purchase flow.
 */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 16 } },
};

export default function PricingPlanSection(_: Props) {
  const router = useRouter();

  const handleRequestDemo = () => {
    // opens user's default mail client — change email as required
    window.location.href = "mailto:sales@paritybit.com?subject=ParityBit%20Demo%20Request";
  };

  const handlePurchase = () => {
    // Navigate to purchase page — change route as necessary
    router.push("/purchase");
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-10 lg:px-16 scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      {/* Background: angled shimmer stripes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "repeating-linear-gradient( -30deg, rgba(99,102,241,0.04) 0px, rgba(99,102,241,0.04) 8px, transparent 8px, transparent 26px )",
        }}
      />

      {/* soft gradient corners */}
      <div
        aria-hidden
        className="absolute -top-24 left-0 h-64 w-64 rounded-full blur-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 -z-10"
      />
      <div
        aria-hidden
        className="absolute -bottom-28 right-0 h-72 w-72 rounded-full blur-3xl bg-gradient-to-tr from-purple-600/20 to-blue-600/20 -z-10"
      />

      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-4xl md:text-5xl leading-tight font-semibold text-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Contact Sales & Request a Demo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-300 max-w-3xl mx-auto text-center mt-3 mb-10 py-6"
        >
          Learn how ParityBit’s AI-driven cybersecurity platform can scale your security operations, reduce manual effort, and increase detection fidelity. Below is a concise overview of what this offering covers — if it looks like a fit, request a demo or reach out to discuss licensing and enterprise options.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Overview — What the platform does</h3>
            <p className="text-gray-300 leading-relaxed">
              ParityBit is an AI-first cybersecurity orchestration platform that combines automated threat
              detection, contextualized alert triage, and simulated phishing & training capabilities.
              Its goal is to multiply analyst productivity by automating low-value tasks and surfacing
              high-confidence incidents with recommended remediation steps.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-200 mb-3">Core Capabilities</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• AI-driven detection & correlation (reduce alert noise)</li>
                <li>• Phishing simulation & user risk scoring</li>
                <li>• Automated playbooks & incident enrichment</li>
                <li>• Integrations with SIEM, EDR, and cloud APIs</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-200 mb-3">Who benefits most</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• SOC teams seeking higher throughput</li>
                <li>• Security leaders needing measurable ROI</li>
                <li>• Enterprises requiring custom SLAs & integrations</li>
                <li>• SMBs wanting managed detection capabilities</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="text-gray-300 mb-10">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-200 mb-3">What a demo includes</h4>
            <p className="leading-relaxed">
              A demo will include a walkthrough of the detection pipelines, live example incidents,
              the phishing simulation dashboard, and a discussion around integration and deployment options.
              For enterprise customers we also surface a roadmap alignment and SLA discussion.
            </p>
          </motion.div>

          {/* Button footer (aligned and fixed inside this card) */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            <button
              onClick={handleRequestDemo}
              className="w-full rounded-full py-3 font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              aria-label="Request a demo via email"
            >
              Request a Demo / Contact Sales
            </button>

            <button
              onClick={handlePurchase}
              className="w-full rounded-full py-3 font-semibold text-[#0b1020] bg-white/90 shadow-lg transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              aria-label="Go to purchase page"
            >
              Purchase / Licensing
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Prefer a custom SZ/POC? Reply to the demo email with your preferred date & team size and we'll set it up.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
