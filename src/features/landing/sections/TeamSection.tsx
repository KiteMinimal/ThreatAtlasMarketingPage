"use client";

import React from "react";
import { motion } from "framer-motion";

type Member = {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  skills: string[];
  // keep color if you want future theming, but we won't use it for classes to avoid purge issues
  color?: "blue" | "purple";
};

const team: Member[] = [
  {
    name: "Liam Carter",
    role: "Senior Software Engineer",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Over 12 years of experience in backend development and scalable cloud infrastructure.",
    skills: ["Node.js", "AWS", "Microservices", "DevOps"],
    color: "blue",
  },
  {
    name: "Sophia Bennett",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=35",
    bio: "Strategic thinker with a strong UX background, aligning product vision with business goals.",
    skills: ["Product Management", "UX", "Strategy", "Agile"],
    color: "purple",
  },
];

// Animations (distinct from other sections: gentle zoom-in + vertical float on hover)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const cardVar = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative bg-gradient-to-b from-black to-gray-950 px-6 py-28 scroll-mt-20"
    >
      {/* Distinct background: soft dots + gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(transparent_1px,rgba(255,255,255,0.05)_1px)] [background-size:18px_18px]"
      />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[48rem] rounded-full blur-3xl bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 -z-10" />
      <div className="absolute -bottom-28 right-0 h-64 w-64 rounded-full blur-3xl bg-gradient-to-tr from-purple-600/20 to-blue-600/20 -z-10" />

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
      >
        Meet Our Team
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center text-gray-300/90 max-w-3xl mx-auto mt-3 mb-14"
      >
        A team of dedicated professionals with expertise in software
        development, product strategy, and technical leadership.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2"
      >
        {team.map((member) => (
          <motion.article
            key={member.name}
            variants={cardVar}
            whileHover={{ y: -6 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-7 shadow-xl"
          >
            {/* Avatar with animated gradient ring */}
            <div className="flex justify-center mb-5">
              <div className="relative h-36 w-36">
                {/* ring */}
                <div className="absolute inset-0 rounded-full p-[2px]">
                  <div className="absolute inset-0 rounded-full opacity-80 blur-[2px] transition-transform duration-500 group-hover:rotate-180" />
                  <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#3B82F6,#6366F1,#8B5CF6,#3B82F6)] animate-[spin_12s_linear_infinite] opacity-30" />
                  <div className="absolute inset-[3px] rounded-full bg-black/40" />
                </div>
                {/* photo */}
                <img
                  src={member.avatar}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-[6px] h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-full object-cover ring-2 ring-white/10"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white text-center">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-center bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent mt-1">
              {member.role}
            </p>

            <p className="text-gray-300/90 text-sm leading-relaxed max-w-md mx-auto text-center mt-4">
              {member.bio}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {member.skills.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-xs font-medium text-white bg-white/[0.06] border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* subtle gradient underline */}
            <div className="mt-6 h-0.5 w-24 mx-auto bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
