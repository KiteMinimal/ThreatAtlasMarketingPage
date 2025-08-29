"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// --------------------
// Types
// --------------------
type ResourceType = "Guide" | "Documentation" | "Forum";

type Resource = {
  title: string;
  description: string;
  link: string;
  type: ResourceType;
};

// --------------------
// On-brand gradient + helpers
// --------------------
const brandText =
  "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent";

const tagClass: Record<ResourceType, string> = {
  Guide:
    "text-xs font-semibold px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 ring-1 ring-blue-500/20",
  Documentation:
    "text-xs font-semibold px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/20",
  Forum:
    "text-xs font-semibold px-2 py-1 rounded-full bg-purple-500/10 text-purple-300 ring-1 ring-purple-500/20",
};

// Treat external links (forums / absolute URLs) as external
const isExternal = (r: Resource) =>
  r.type === "Forum" || /^https?:\/\//i.test(r.link);

// --------------------
// Inline SVG icons (blue→violet)
// --------------------
const Grad = ({ id }: { id: string }) => (
  <linearGradient id={id} x1="0" x2="1">
    <stop offset="0%" stopColor="#3B82F6" />
    <stop offset="50%" stopColor="#6366F1" />
    <stop offset="100%" stopColor="#8B5CF6" />
  </linearGradient>
);

const GuideIcon: React.FC<{ className?: string }> = ({
  className = "h-5 w-5",
}) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <defs>
      <Grad id="g-guide" />
    </defs>
    <path
      d="M10 10h20a6 6 0 0 1 6 6v22H16a6 6 0 0 0-6 6V10z"
      fill="none"
      stroke="url(#g-guide)"
      strokeWidth="2"
    />
    <path
      d="M16 10v26a6 6 0 0 1 6-6h20V16a6 6 0 0 0-6-6H16z"
      fill="none"
      stroke="url(#g-guide)"
      strokeWidth="2"
    />
  </svg>
);

const DocIcon: React.FC<{ className?: string }> = ({
  className = "h-5 w-5",
}) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <defs>
      <Grad id="g-doc" />
    </defs>
    <path
      d="M14 6h16l8 8v28H14z"
      fill="none"
      stroke="url(#g-doc)"
      strokeWidth="2"
    />
    <path d="M30 6v8h8" fill="none" stroke="url(#g-doc)" strokeWidth="2" />
    <path
      d="M18 24h16M18 30h16M18 36h12"
      stroke="url(#g-doc)"
      strokeWidth="2"
    />
  </svg>
);

const ForumIcon: React.FC<{ className?: string }> = ({
  className = "h-5 w-5",
}) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <defs>
      <Grad id="g-forum" />
    </defs>
    <path
      d="M8 10h22v16H8l-4 6v-22a6 6 0 0 1 6-6z"
      fill="none"
      stroke="url(#g-forum)"
      strokeWidth="2"
    />
    <path
      d="M18 18h22a4 4 0 0 1 4 4v18l-6-6H18z"
      fill="none"
      stroke="url(#g-forum)"
      strokeWidth="2"
    />
  </svg>
);

const typeIcon: Record<ResourceType, React.FC<{ className?: string }>> = {
  Guide: GuideIcon,
  Documentation: DocIcon,
  Forum: ForumIcon,
};

// --------------------
// Data
// --------------------
const resources: Resource[] = [
  {
    title: "Getting Started Guide",
    description:
      "A step-by-step walkthrough to help you set up and use our platform.",
    link: "/guides/getting-started",
    type: "Guide",
  },
  {
    title: "API Documentation",
    description:
      "Comprehensive details on all available API endpoints and usage examples.",
    link: "/docs/api",
    type: "Documentation",
  },
  {
    title: "Best Practices",
    description: "Recommended patterns, security tips, and code examples.",
    link: "/guides/best-practices",
    type: "Guide",
  },
  {
    title: "Developer Forum",
    description:
      "Join the community: ask questions, share knowledge, and get help.",
    link: "https://community.yoursite.com",
    type: "Forum",
  },
];

// --------------------
// Motion variants
// --------------------
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};
const card = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
};
const heading = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

// --------------------
// Component
// --------------------
export default function DevelopResourcesSection() {
  return (
    <section
      id="developer-resources"
      className="relative overflow-hidden py-24 px-6 md:px-10 lg:px-16"
    >
      {/* Background: Spotlight Glow (toggle others if you prefer) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-r from-blue-600/25 via-indigo-600/25 to-purple-600/25" />
        <div className="absolute -bottom-24 right-0 h-72 w-[40rem] rounded-full blur-3xl bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20" />
      </div>

      {/* Subtle Grid (enable by removing 'hidden') */}
      {/* <div aria-hidden className="hidden absolute inset-0 -z-10 bg-[radial-gradient(transparent_1px,rgba(0,0,0,0.65)_1px)] [background-size:16px_16px]" /> */}

      {/* Mesh Gradient (enable by removing 'hidden') */}
      {/* <div aria-hidden className="hidden absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(50%_50%_at_80%_30%,rgba(99,102,241,0.15),transparent),radial-gradient(60%_60%_at_50%_80%,rgba(139,92,246,0.12),transparent)]" /> */}

      {/* Content wrapper */}
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-xl">
        <div className="px-6 md:px-10 lg:px-12 py-12">
          <motion.h2
            variants={heading}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className={`text-3xl md:text-4xl font-extrabold text-center ${brandText}`}
          >
            Developer Resources
          </motion.h2>

          <motion.p
            variants={heading}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-3 text-center text-gray-300/90 max-w-2xl mx-auto"
          >
            Access guides, API docs, and our developer forum to build securely
            and efficiently.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid gap-6 md:grid-cols-2"
          >
            {resources.map((r) => {
              const Icon = typeIcon[r.type];
              const external = isExternal(r);

              const CardInner = (
                <motion.div
                  variants={card}
                  className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors p-6 sm:p-7 shadow-lg"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <Icon className="h-8 w-8 opacity-90 transform transition-transform duration-300 group-hover:scale-110" />

                    <span className={tagClass[r.type]}>{r.type}</span>
                  </div>

                  <h3
                    className="text-lg md:text-xl font-bold text-white
                               group-hover:text-transparent group-hover:bg-clip-text
                               group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-indigo-400 group-hover:to-purple-400
                               transition-colors"
                  >
                    {r.title}
                  </h3>

                  <p className="mt-2 text-gray-400 leading-relaxed">
                    {r.description}
                  </p>

                  <div className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
                </motion.div>
              );

              // Use Next Link for internal, <a> for external
              return external ? (
                <a
                  key={r.title}
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {CardInner}
                </a>
              ) : (
                <Link key={r.title} href={r.link} className="block h-full">
                  {CardInner}
                </Link>
              );
            })}
          </motion.div>

          <div className="mt-10 flex justify-center">
            <div className="h-px w-24 bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
