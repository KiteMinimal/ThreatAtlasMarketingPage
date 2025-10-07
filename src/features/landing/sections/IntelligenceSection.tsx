"use client";

import React, { useState, useRef, useEffect } from "react";

export default function IntelligenceSection() {
  const [activePopup, setActivePopup] = useState<number | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const popupContent: { [key: number]: string } = {
    1: "Info about Icon 1: This represents detection of threats.",
    2: "Info about Icon 2: This represents analysis of malicious actors.",
    3: "Info about Icon 3: This represents intelligence sharing.",
    4: "Info about Icon 4: This represents defensive countermeasures.",
    5: "Info about Icon 5: This represents proactive hunting.",
    6: "Info about Icon 6: This represents continuous monitoring.",
  };

  // ✅ Detect outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setActivePopup(null);
      }
    }

    if (activePopup !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePopup]);

  return (
    <>
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4">
        <div>
          <h2 className="text-4xl leading-normal my-16 md:text-5xl max-w-5xl">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ThreatAtlas {}
            </span>
            intelligence solution is powered by
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {} ParityBit Security
            </span>
          </h2>
        </div>

        <div>
          <p className="text-lg my-auto md:text-xl font-medium">
            Threat Intelligence
          </p>
        </div>
      </div>

      <section className="w-full flex items-center justify-center px-4 pb-20">
        <div className="relative mx-auto w-full max-w-6xl aspect-[1725/768]">
          <img
            src="/images/productImage.jpg"
            alt="Intelligence Background"
            className="inset-0 object-contain"
            draggable={false}
          />

          {/* Popup buttons */}
          {[1, 2, 3, 4, 5, 6].map((id, i) => (
            <button
              key={id}
              onClick={() => setActivePopup(id)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 text-3xl w-8 h-8 rounded-full bg-black text-white border flex items-center justify-center shadow-lg
                ${[
                  "top-[63%] left-[11%]",
                  "top-[73%] left-[21%]",
                  "top-[83%] left-[31%]",
                  "top-[83%] right-[28%]",
                  "top-[73%] right-[18%]",
                  "top-[63%] right-[8%]",
                ][i]}`}
            >
              +
            </button>
          ))}

          {/* Popup */}
          {activePopup && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/40">
              <div
                ref={popupRef}
                className="bg-black/90 border border-[#292929] rounded-lg shadow-lg max-w-md w-full p-6 text-gray-900 relative"
              >
                <button
                  onClick={() => setActivePopup(null)}
                  className="absolute top-2 right-2 text-white hover:text-gray-200"
                >
                  ✕
                </button>
                <h3 className="text-white text-lg mb-4">Details</h3>
                <p className="text-white">{popupContent[activePopup]}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
