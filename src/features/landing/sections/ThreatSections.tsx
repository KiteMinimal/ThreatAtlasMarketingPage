"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Section = {
  id: string; // hash id (used in URL and anchor)
  title: string;
  subtitle: string; // short subtitle in medium weight
  description: string; // paragraph between heading and image
  imageSrc: string; // path from public/
  imageAlt?: string;
};

const sections: Section[] = [
  {
    id: "threat-intel",
    title: "Threat Intelligence",
    subtitle: "Augmented intelligence with ML-powered analysis",
    description:
      "Search domains, IPs, URLs and hashes for deep analysis. View aggregated analysis results and AI-powered recommendations for rapid triage.",
    imageSrc: "/images/threat-dashboard.png",
    imageAlt: "Threat Intelligence Dashboard screenshot",
  },
  {
    id: "password-intel",
    title: "Password Intelligence",
    subtitle: "Advanced password security & AI recommendations",
    description:
      "Analyze password strength locally, generate secure credentials, and get tailored AI recommendations to improve password hygiene across your organization.",
    imageSrc: "/images/password-intel.png",
    imageAlt: "Password Intelligence screenshot",
  },
  {
    id: "attack-matrix",
    title: "ATT&CK Matrix",
    subtitle: "MITRE ATT&CK exploration and technique search",
    description:
      "Search for techniques, groups and software to understand threat actor behavior. Visualize techniques and generate prioritized defense actions.",
    imageSrc: "/images/attack-matrix.png",
    imageAlt: "ATT&CK Matrix screenshot",
  },
  {
    id: "global-maps",
    title: "Global Maps",
    subtitle: "Real-time global threat origin visualizations",
    description:
      "Explore live global attack maps, examine origin patterns, and export regional reports. Useful for SOC situational awareness and threat hunting.",
    imageSrc: "/images/global-maps.png",
    imageAlt: "Global Threat Maps screenshot",
  },
];

/* Framer Motion Variants */
const navItemVar = {
  initial: { opacity: 0.9, y: 0 },
  hover: { y: -4, scale: 1.01 },
};

const imageVariants = {
  hidden: { opacity: 0, x: "30vw", scale: 0.98 },
  enter: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 18 } },
  exit: { opacity: 0, x: "20vw", transition: { duration: 0.28 } },
};

export default function ThreatSections() {
  // activeId holds the currently active section id (hash)
  const [activeId, setActiveId] = useState<string>(sections[0].id);
  // Refs for each section content to scroll to
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // On mount, read location.hash to set default active section
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
    if (hash && sections.some((s) => s.id === hash)) {
      setActiveId(hash);
      // Wait a tick then scroll to that section
      setTimeout(() => scrollToSection(hash, true), 50);
    } else {
      // ensure root default is visible
      setActiveId(sections[0].id);
    }

    // Listen to hashchange (back/forward)
    const onHash = () => {
      const newHash = window.location.hash.replace("#", "");
      if (newHash && sections.some((s) => s.id === newHash)) {
        setActiveId(newHash);
        scrollToSection(newHash, true);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // helper: scroll into view smoothly and set active class
  const scrollToSection = (id: string, instant = false) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const topOffset = 20; // small spacing
    const top = el.getBoundingClientRect().top + window.scrollY - topOffset;
    window.history.replaceState(null, "", `#${id}`); // update hash (no jump)
    window.scrollTo({
      top,
      behavior: instant ? "auto" : "smooth",
    });
    setActiveId(id);
  };

  // click handler for nav buttons
  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  // keyboard accessibility
  const handleKey = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavClick(id);
    }
  };

  return (
    <div className="w-full">
      {/* NAV section (transparent background) */}
      <nav
        aria-label="Threat sections"
        className="sticky top-6 z-30 backdrop-blur-sm bg-transparent px-6 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-6 md:gap-8 lg:gap-12">
            {/* left: subtle brand / title for context */}
            <div className="flex items-center gap-3 pr-4 border-r border-white/6">
              <div className="w-9 h-9 flex items-center justify-center rounded-md bg-gradient-to-br from-[#0f1b3a] to-[#07102a] border border-white/6">
                {/* small shield icon (inline SVG) */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/90">
                  <path d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z" stroke="#cfe0ff" strokeWidth="0.8" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-white">ThreatShield</div>
                <div className="text-xs text-gray-300">Intelligence Console</div>
              </div>
            </div>

            {/* dynamic nav items */}
            <div className="flex gap-2 md:gap-4 overflow-x-auto py-3">
              {sections.map((s) => {
                const active = s.id === activeId;
                return (
                  <motion.button
                    key={s.id}
                    onClick={() => handleNavClick(s.id)}
                    onKeyDown={(e) => handleKey(e, s.id)}
                    whileHover={{ scale: 1.02 }}
                    variants={navItemVar}
                    initial="initial"
                    aria-current={active ? "true" : "false"}
                    className={`flex-shrink-0 px-4 md:px-5 py-2 rounded-xl transition-all duration-180 text-sm md:text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500
                      ${active ? "bg-gradient-to-br from-[#0b2a66] to-[#0d2d5a] text-white border border-white/8 shadow-lg" : "bg-white/[0.02] text-gray-200 border border-white/6 hover:bg-white/[0.03]"}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`inline-block w-2.5 h-2.5 rounded-full ${active ? "bg-blue-400" : "bg-transparent border border-white/12"}`} />
                      <span>{s.title}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* spacer to right */}
            <div className="ml-auto hidden md:flex items-center text-sm text-gray-300">
              <span className="mr-3">View</span>
              <button
                className="px-3 py-1 rounded-md bg-white/[0.02] border border-white/6 text-gray-200 text-sm"
                onClick={() => {
                  // example: reset to first section
                  handleNavClick(sections[0].id);
                }}
                title="Reset view"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections content */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 mt-8 space-y-20">
        {sections.map((s) => {
          const isActive = s.id === activeId;
          return (
            <section
              key={s.id}
              id={s.id}
              ref={(el) => (sectionRefs.current[s.id] = el)}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              {/* text column */}
              <div className="lg:col-span-5">
                <div className="sticky top-28">
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-2">{s.title}</h3>
                  <h4 className="text-sm text-blue-300 mb-4">{s.subtitle}</h4>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">{s.description}</p>

                  <ul className="text-xs md:text-sm text-gray-400 space-y-3">
                    <li>• Deep-dive analysis and visual dashboards</li>
                    <li>• AI-assisted recommendations & reporting</li>
                    <li>• Exportable reports and interactive search</li>
                  </ul>
                </div>
              </div>

              {/* image / visual column */}
              <div className="lg:col-span-7">
                {/* animated image container */}
                <div className="w-full h-[380px] md:h-[420px] lg:h-[480px] bg-gradient-to-br from-[#07102a] to-[#08122b] rounded-xl border border-white/6 shadow-inner overflow-hidden relative">
                  {/* small header inside image box */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-md bg-white/[0.03] text-xs font-medium text-white/90">
                      {s.title}
                    </span>
                  </div>

                  {/* animate image on active */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={s.id}
                          initial="hidden"
                          animate="enter"
                          exit="exit"
                          variants={imageVariants}
                          className="w-full h-full flex items-center justify-center px-6 py-6"
                        >
                          {/* Use Next/Image for optimized loading. Container must be relative. */}
                          <div className="relative w-full h-full rounded-lg overflow-hidden">
                            <Image
                              src={s.imageSrc}
                              alt={s.imageAlt ?? s.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 720px"
                              style={{ objectFit: "cover", objectPosition: "center" }}
                              priority={isActive} // prioritize active image
                            />
                            {/* subtle overlay / gloss */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/10 to-black/40 mix-blend-overlay" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* small caption / actions under the image */}
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="text-xs text-gray-400">
                    Last updated: <span className="text-gray-300">9/4/2025</span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => alert("Refresh: implement real handler")}
                      className="px-3 py-2 rounded-md text-sm bg-white/[0.03] border border-white/6 text-gray-200"
                    >
                      Refresh
                    </button>
                    <button
                      onClick={() => alert("Export: implement export logic")}
                      className="px-3 py-2 rounded-md text-sm bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
                    >
                      Export Report
                    </button>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
