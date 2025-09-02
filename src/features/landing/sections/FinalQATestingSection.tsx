"use client";

import React, { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------------------
   Gradient + tiny helpers
---------------------------- */
const brandText =
  "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent";

const glowBg = `
  absolute inset-0 -z-10 pointer-events-none
  [background:
    radial-gradient(60%_60%_at_20%_20%,rgba(59,130,246,0.15),transparent),
    radial-gradient(50%_50%_at_80%_30%,rgba(99,102,241,0.15),transparent),
    radial-gradient(60%_60%_at_50%_80%,rgba(139,92,246,0.12),transparent)
  ]
`;

/* ---------------------------
   On-brand inline SVG icons
---------------------------- */
const Grad = ({ id }: { id: string }) => (
  <linearGradient id={id} x1="0" x2="1">
    <stop offset="0%" stopColor="#3B82F6" />
    <stop offset="50%" stopColor="#6366F1" />
    <stop offset="100%" stopColor="#8B5CF6" />
  </linearGradient>
);

const UXIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <defs><Grad id="g-ux" /></defs>
    <rect x="8" y="10" width="32" height="24" rx="3" stroke="url(#g-ux)" strokeWidth="2" fill="none" />
    <path d="M12 16h10M12 22h6M12 28h8" stroke="url(#g-ux)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="34" cy="22" r="5" stroke="url(#g-ux)" strokeWidth="2" fill="none" />
  </svg>
);

const SpeedIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <defs><Grad id="g-speed" /></defs>
    <circle cx="24" cy="28" r="12" stroke="url(#g-speed)" strokeWidth="2" fill="none" />
    <path d="M24 28l7-7" stroke="url(#g-speed)" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 14h28" stroke="url(#g-speed)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AnalyticsIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <defs><Grad id="g-ana" /></defs>
    <path d="M10 36V20M22 36V12M34 36V24" stroke="url(#g-ana)" strokeWidth="3" strokeLinecap="round" />
    <path d="M8 38h32" stroke="url(#g-ana)" strokeWidth="2" />
  </svg>
);

/* ---------------------------
   Types + Data
---------------------------- */
type Highlight = {
  title: string;
  desc: string;
  Icon: React.FC<{ className?: string }>;
};

const highlights: Highlight[] = [
  {
    title: "UX Review",
    desc:
      "Manual walkthroughs, accessibility checks, and user feedback ensure seamless navigation and clarity.",
    Icon: UXIcon,
  },
  {
    title: "Loading Speed",
    desc:
      "Lighthouse audits + real-device tests; optimized images, scripts, and caching for snappy performance.",
    Icon: SpeedIcon,
  },
  {
    title: "Analytics Integration",
    desc:
      "Plug-and-play GA4 / Segment / privacy-first analytics with event tracking verified pre-launch.",
    Icon: AnalyticsIcon,
  },
];

type FAQItem = { question: string; answer: string };

const faqData: FAQItem[] = [
  {
    question: "What is included in the final QA testing process?",
    answer:
      "Final QA spans usability reviews, loading speed checks, and analytics verification to ensure a flawless go-live.",
  },
  {
    question: "How do you review the user experience (UX)?",
    answer:
      "We perform guided walkthroughs, a11y checks (keyboard/contrast), and lightweight user tests to refine flows.",
  },
  {
    question: "How is loading speed ensured?",
    answer:
      "We profile bottlenecks via Lighthouse + Web Vitals, optimize assets, and validate on throttled real devices.",
  },
  {
    question: "What analytics integrations are supported?",
    answer:
      "Google Analytics (GA4), Segment, and privacy-friendly options. We verify events, consent, and pageview accuracy.",
  },
];

/* ---------------------------
   Motion Variants
---------------------------- */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45 } },
};

/* ---------------------------
   Component
---------------------------- */
export default function FinalQATestingSection() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId(); // unique ids for a11y

  return (
    <section id="final-qa" className="relative scroll-mt-20 py-24 px-6 md:px-10 lg:px-16">
      {/* Background */}
      <div aria-hidden className={glowBg} />

      {/* Wrapper (glass) */}
      <div className="mx-auto max-w-6xl rounded-3xl   backdrop-blur-md shadow-xl">
        <div className="px-6 md:px-10 lg:px-12 py-12">
          {/* Heading */}
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className={`text-3xl md:text-4xl font-extrabold text-center ${brandText}`}
          >
            Final QA Testing
          </motion.h2>

          {/* Highlights */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {highlights.map(({ title, desc, Icon }) => (
              <motion.article
                key={title}
                variants={itemUp}
                className="rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors p-6 shadow-lg group"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-8 w-8 opacity-90 transform transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="mt-3 text-gray-400 leading-relaxed">{desc}</p>
                <div className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              </motion.article>
            ))}
          </motion.div>

          {/* FAQ */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mt-14"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-white/90">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 divide-y divide-white/10 rounded-2xl">
              {faqData.map((item, i) => {
                const isOpen = open === i;
                const qId = `${baseId}-q-${i}`;
                const aId = `${baseId}-a-${i}`;
                return (
                  <div key={i} className="px-5 sm:px-6 py-4">
                    <button
                      id={qId}
                      aria-controls={aId}
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between text-left gap-4 focus:outline-none"
                    >
                      <span
                        className={`
                          text-base sm:text-lg font-medium
                          bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent
                        `}
                      >
                        {item.question}
                      </span>

                      <span
                        className={`
                          inline-flex h-7 w-7 items-center justify-center rounded-full
                          border border-white/10 bg-white/[0.04]
                          transition-transform ${isOpen ? "rotate-180" : ""}
                        `}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4">
                          <path
                            d="M6 9l6 6 6-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-white/80"
                          />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={aId}
                          role="region"
                          aria-labelledby={qId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 pb-2 pr-1 text-gray-300/90">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
