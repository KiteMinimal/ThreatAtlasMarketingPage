// socialProof.tsx (or SocialProof.tsx)

import React from "react";

// ✅ Define types
interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

interface Stat {
  label: string;
  value: string;
}

interface Recognition {
  img: string;
  label: string;
}

// ✅ Typed data
const testimonials: Testimonial[] = [
  {
    name: "Mariela Ferbo",
    title: "CISO, TechStart Ltd.",
    quote:
      "ThreatIntel Pro cut our incident response time by 60% and gave us the proactive visibility we needed to stay ahead of advanced cyber threats.",
    avatar: "https://plus.unsplash.com/premium_photo-1741413963511-b46714133ffc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mostafa KordZangeneh",
    title: "Head of Security, CloudCore",
    quote:
      "The platform’s dark web monitoring uncovered exposed credentials within hours, preventing a major account compromise.",
    avatar: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const stats: Stat[] = [
  { label: "Companies Protected", value: "400+" },
  { label: "Threats Neutralized", value: "30,000+" },
  { label: "Credentials Breaches Detected", value: "2M+" },
];

const recognitions: Recognition[] = [
  { img: "/svg/award-reward.svg", label: "Cybersecurity Excellence Award" },
  { img: "/svg/community.svg", label: "Top 50 InfoSec Tools" },
  { img: "/svg/tools.svg", label: "Security Community Pick" },
];

// ✅ Functional Component with TS
export default function SocialProof() {
  return (
    <section
      id="social-proof"
      className="py-20 px-6 max-w-6xl mx-auto rounded-3xl shadow-lg mt-16"
    >
      <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
        Trusted by Security Leaders Worldwide
      </h2>

      {/* Testimonials */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-16">
        {testimonials.map(({ name, title, quote, avatar }) => (
          <div
            key={name}
            className="bg-[#161B22] rounded-2xl shadow p-8 border border-[#232b36] flex-1 max-w-lg mx-auto flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={avatar}
                alt={name}
                className="w-22 h-22 rounded-full bg-[#232b36]"
              />
              <div>
                <div className="text-blue-400 font-bold text-xl">{name}</div>
                <div className="text-gray-400 text-sm">{title}</div>
              </div>
            </div>
            <blockquote className="italic text-gray-200 text-lg flex-1">
              “{quote}”
            </blockquote>
          </div>
        ))}
      </div>

      {/* Statistics Bar */}
      <div className="flex flex-wrap justify-center gap-10 mb-16">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center px-8 py-6 bg-[#161B22] rounded-xl border border-[#00F078]/10 min-w-[170px]"
          >
            <span className="text-3xl font-extrabold text-blue-400 mb-2">
              {value}
            </span>
            <span className="text-gray-300 text-md font-medium text-center">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Awards & Community Recognition Bar */}
      <div className="flex flex-wrap justify-center gap-8 items-center">
        {recognitions.map(({ img, label }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <img
              src={img}
              alt={label}
              className="h-12 w-auto grayscale opacity-70 hover:opacity-100 transition"
            />
            <span className="text-blue-400 text-sm text-center">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
