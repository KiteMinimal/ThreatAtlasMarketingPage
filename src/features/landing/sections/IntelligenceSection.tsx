"use client";

import React, { useState } from "react";

export default function IntelligenceSection() {
  // State to track which popup is open
  const [activePopup, setActivePopup] = useState<number | null>(null);

  // Dummy content for each popup (you can replace with real info)
  const popupContent: { [key: number]: string } = {
    1: "Info about Icon 1: This represents detection of threats.",
    2: "Info about Icon 2: This represents analysis of malicious actors.",
    3: "Info about Icon 3: This represents intelligence sharing.",
    4: "Info about Icon 4: This represents defensive countermeasures.",
    5: "Info about Icon 5: This represents proactive hunting.",
    6: "Info about Icon 6: This represents continuous monitoring.",
  };

  return (
    <>
      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4">
        {/* Heading */}
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

        {/* Paragraph */}
        <div>
          <p className="text-lg my-auto md:text-xl font-medium">
            Threat Intelligence
          </p>
        </div>
      </div>
      <section className=" w-full flex items-center justify-center px-4 pb-20">
        {/* Fixed-aspect wrapper equals the image’s native ratio */}
        <div className="relative mx-auto w-full max-w-6xl aspect-[1725/768]">
          {/* The image fills the wrapper without cropping */}
          <img
            src="/images/productImage.jpg"
            alt="Intelligence Background"
            className=" inset-0 object-contain"
            draggable={false}
          />

          {/* Plus icons overlay (always aligned to the same % of the image) */}
          <button
            onClick={() => setActivePopup(1)}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-3xl top-[63%] left-[11%] w-8 h-8 rounded-full bg-black text-white border flex items-center justify-center shadow-lg"
          >
            +
          </button>
          <button
            onClick={() => setActivePopup(2)}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-3xl top-[73%] left-[21%] w-8 h-8 rounded-full bg-black text-white border flex items-center justify-center shadow-lg"
          >
            +
          </button>
          <button
            onClick={() => setActivePopup(3)}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-3xl top-[83%] left-[31%] w-8 h-8 rounded-full bg-black text-white border flex items-center justify-center shadow-lg"
          >
            +
          </button>
          <button
            onClick={() => setActivePopup(4)}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-3xl top-[83%] right-[28%] w-8 h-8 rounded-full bg-black text-white border flex items-center justify-center shadow-lg"
          >
            +
          </button>
          <button
            onClick={() => setActivePopup(5)}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-3xl top-[73%] right-[18%] w-8 h-8 rounded-full bg-black text-white border flex items-center justify-center shadow-lg"
          >
            +
          </button>
          <button
            onClick={() => setActivePopup(6)}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-3xl top-[63%] right-[8%] w-8 h-8 rounded-full bg-black text-white border flex items-center justify-center shadow-lg"
          >
            +
          </button>

          {/* Popup lives on top of the same wrapper */}
          {activePopup && (
            <div className="absolute inset-0 z-30 flex items-center justify-center">
              <div className="bg-black/90 border border-[#292929] rounded-lg shadow-lg max-w-md w-full p-6 text-gray-900 relative">
                <button
                  onClick={() => setActivePopup(null)}
                  className="absolute top-2 right-2 text-white hover:text-gray-200"
                >
                  ✕
                </button>
                <h3 className="text-white text-lg font-semibold mb-4">
                  Details
                </h3>
                <p className="text-white">{popupContent[activePopup]}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
