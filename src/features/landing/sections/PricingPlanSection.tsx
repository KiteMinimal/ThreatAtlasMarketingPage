"use client";

import React from "react";
import { motion } from "framer-motion";

type Plan = {
  name: string;
  price: string;
  frequency: string;
  description: string;
  features: string[];
  popular: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$29",
    frequency: "per month",
    description: "Ideal for small teams and startups.",
    features: [
      "Up to 5 users",
      "Basic threat detection",
      "Email support",
      "Standard integrations",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    frequency: "per month",
    description: "Perfect for growing security teams.",
    features: [
      "Up to 25 users",
      "Real-time threat intelligence",
      "Priority email & chat support",
      "All integrations included",
      "Customizable dashboards",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    frequency: "",
    description: "Tailored solutions for large organizations.",
    features: [
      "Unlimited users",
      "Dedicated account manager",
      "Custom integrations & SLAs",
      "Advanced analytics & reporting",
      "On-site training & support",
    ],
    popular: false,
  },
];

// Motion variants (distinct from your other sections)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const cardVar = {
  hidden: { opacity: 0, y: 16, rotateX: -6, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 110, damping: 16 },
  },
};

export default function PricingPlanSection() {
  return (
    <section
      id="pricing"
      className="relative py-28 px-6 md:px-10 lg:px-16 scroll-mt-20"
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

      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Transparent Pricing & Plans
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-300 max-w-3xl mx-auto text-center mt-3 mb-14"
        >
          Choose the plan that fits your organization’s needs — scalable,
          flexible, and transparent pricing to maximize your security ROI.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {plans.map(
            ({ name, price, frequency, description, features, popular }) => {
              const Card = (
                <motion.div
                  variants={cardVar}
                  whileHover={{
                    y: -6,
                    rotateX: 0.6,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className={[
                    "relative rounded-2xl p-8",
                    "border border-white/10 bg-white/[0.04] backdrop-blur-md",
                    "shadow-xl transform-gpu",
                    "min-h-[560px]", // ✅ consistent card height
                    popular ? "ring-1 ring-transparent" : "",
                  ].join(" ")}
                >
                  {/* gradient ring for popular */}
                  {popular && (
                    <div className="pointer-events-none absolute inset-0 rounded-2xl z-0">
                      <div className="absolute -inset-[1px] rounded-2xl opacity-80  blur-[2px]" />
                    </div>
                  )}

                  {popular && (
                    <div className="absolute top-4 right-4 z-20 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0b1020] bg-gradient-to-r from-blue-400 to-purple-400 shadow">
                      Popular
                    </div>
                  )}

                  {/* Content (extra bottom padding so button footer has space) */}
                  <div className="relative z-10 pb-24">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {name}
                    </h3>
                    <p className="text-gray-400 mb-6">{description}</p>

                    <div className="flex items-baseline gap-2">
                      <div className="text-white text-4xl font-extrabold">
                        {price}
                      </div>
                      {frequency && (
                        <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {frequency}
                        </span>
                      )}
                    </div>

                    <ul className="mt-6 space-y-3">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-gray-300"
                        >
                          <svg
                            className="mr-2 h-5 w-5 flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id="g-check" x1="0" x2="1">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="50%" stopColor="#6366F1" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M5 13l4 4L19 7"
                              stroke="url(#g-check)"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ✅ Button fixed at bottom (aligned across cards) */}
                  <div className="absolute bottom-6 left-0 right-0 px-8 z-10">
                    <button
                      className={[
                        "w-full rounded-full py-3 font-semibold text-white",
                        "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500",
                        "shadow-lg transition-transform duration-300",
                        "hover:scale-[1.03] active:scale-[0.99]",
                        "focus:outline-none focus:ring-2 focus:ring-purple-500/40",
                      ].join(" ")}
                    >
                      {price === "Contact Us" ? "Contact Sales" : "Choose Plan"}
                    </button>
                  </div>
                </motion.div>
              );

              return (
                <div
                  key={name}
                  className={popular ? "md:scale-[1.02] md:-translate-y-1" : ""}
                >
                  {Card}
                </div>
              );
            }
          )}
        </motion.div>
      </div>
    </section>
  );
}
