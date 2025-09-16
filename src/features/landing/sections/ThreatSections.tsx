// app/page.tsx - ParityBit Hero (Vertical Layout)
// -----------------------------------------------

"use client"

import React, { useState } from "react";

const tabs = [
  "Platform overview",
  "Graph",
  "Dark web",
  "Attribution",
  "Threat landscape",
  "Data leaks",
  "Phishing",
  "Malware",
  "Integrations",
];

const tabImages: Record<string, string> = {
  "Platform overview": "/Images/attack-matrix.png",
  Graph: "/Images/global-maps.png",
  "Dark web": "/Images/password-intel.png",
  Attribution: "/Images/threat-dashboard.png",
  "Threat landscape": "/Images/threat-dashboard.png",
  "Data leaks": "/Images/password-intel.png",
  Phishing: "/Images/attack-matrix.png",
  Malware: "/Images/global-maps.png",
  Integrations: "/Images/threat-dashboard.png",
};

const fallbackImage = "/Images/attack-matrix.png";

export default function Page() {
  const [active, setActive] = useState<string>("Dark web");
  const activeImage = tabImages[active] ?? fallbackImage;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Hero Header */}
      <header className="w-full max-w-7xl px-6 pt-16 text-center mt-28">
        <h1 className="mx-auto max-w-6xl leading-tight font-extralight tracking-widest">
          <span className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
              digital threat intelligence{" "}
            </span>
            in a
          </span>
          <span className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
            single platform tailored to your unique risk profile
          </span>
        </h1>
        <p
          className="mt-10 text-gray-400 text-sm sm:text-base md:text-lg"
          style={{ fontFamily: "'Inter', system-ui" }}
        >
          Key features of Group-IB’s threat intelligence solution
        </p>
      </header>

      {/* Tabs */}
      <nav className="w-full px-6 mt-10">
        <div className="mx-auto bg-[#191919] rounded-xl max-w-fit">
          <div className="flex items-center overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`flex-shrink-0 text-sm md:text-base px-4 md:px-5 py-2 md:py-3 whitespace-nowrap font-medium focus:outline-none shadow-sm mr-1
                  ${
                    t === active
                      ? "bg-[#2a2a2a] rounded text-white shadow-lg"
                      : "text-gray-300 hover:bg-[#2a2a2a] rounded"
                  }`}
                aria-pressed={t === active}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content + Image stacked vertically */}
      <main className="w-full flex-1 flex flex-col items-center justify-start mt-12 px-6 pb-20">
        {/* Text content */}
        <div className="max-w-3xl text-center mb-10">
          {active === "Dark web" ? (
            <p className="text-gray-200 text-base sm:text-lg md:text-base leading-relaxed">
              <strong className="text-violet-900">
                Group-IB’s <u>Unified Risk Platform</u>
              </strong>{" "}
              boasts the industry’s largest library of <u>dark web data</u>{" "}
              sources and access to digital threat intelligence, enabling you to
              uncover illicit activities and monitor the dark web to determine
              if your organization is mentioned there. You can create rules to
              be informed when a topic of interest is discussed.
            </p>
          ) : (
            <p className="text-gray-200 text-base  sm:text-lg md:text-base leading-relaxed">
              <strong className="text-violet-900">{active}</strong> — short
              placeholder content for the{" "}
              <em className="text-violet-900">{active}</em> tab. Replace with
              the real module or component for each tab. The active tab controls
              which content block is shown here.
            </p>
          )}
        </div>

        {/* Full-width image */}
        <div className="w-full rounded-xl p-1 bg-gray-500 max-w-5xl">
          <img
            key={activeImage}
            src={activeImage}
            alt={`${active} preview`}
            className="w-full h-[500px] object-fit rounded-lg shadow-lg transition-opacity duration-500 ease-in-out"
            draggable={false}
          />
        </div>
      </main>

      <div className="w-full border-t border-gray-800"></div>

      <div className="fixed bottom-4 right-4 text-xs text-gray-400 sm:hidden">
        Tap a pill to switch tabs
      </div>
    </div>
  );
}
