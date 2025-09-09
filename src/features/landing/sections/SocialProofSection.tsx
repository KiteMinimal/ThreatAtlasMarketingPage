// components/CustomerReviewsCarousel.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

type Review = {
  id: string;
  name: string;
  role: string;
  location?: string;
  date: string;
  quote: string;
  rating: number;
  company?: string;
};

/* -------------------------
   Your testimonials data
   ------------------------- */
const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Shubhang Gupta",
    role: "Senior Executive, Deloitte",
    location: "Mumbai",
    date: "April 8, 2025",
    quote:
      "Been using ThreatShield for about 6 months now and honestly, it's changed my workflow completely. The threat intel dashboard just makes sense - I can quickly check if a domain or IP is sketchy without jumping between 5 different tools. My team's been asking what I switched to because my IoC analysis got so much faster.",
    rating: 5.0,
    company: "Deloitte",
  },
  {
    id: "r2",
    name: "Reet Chauhan",
    role: "Security Analyst, TATA Advanced Systems Limited",
    location: "Hyderabad",
    date: "June 12, 2025",
    quote:
      "The dark web monitoring caught something that would've blindsided me completely. Got an alert about leaked employee data from a breach I hadn't even heard about yet. Having that visibility into the dark web isn't just nice to have - it's become essential for my job.",
    rating: 5.0,
    company: "TATA Advanced Systems",
  },
  {
    id: "r3",
    name: "Piyush Jain",
    role: "Senior Executive, Deloitte",
    location: "Gurgaon",
    date: "March 3, 2025",
    quote:
      "When you're overseeing multiple client projects, you need tools that deliver results fast. The password security intelligence helped us identify compromised credentials across three different client environments in one sweep. The actionable remediation steps made it easy to brief clients on exactly what needed fixing.",
    rating: 4.0,
    company: "Deloitte",
  },
  {
    id: "r4",
    name: "Vivek Kiroula",
    role: "Cybersecurity Analyst, CDAC",
    location: "Hyderabad",
    date: "January 20, 2025",
    quote:
      "The MITRE mapping combined with those global threat maps? That's where this tool really shines. Finally have something that shows me what's happening in real-time AND connects it to actual attack techniques. Makes my threat analysis reports so much more comprehensive when I can correlate live threats with known TTPs.",
    rating: 4.5,
    company: "CDAC",
  },
];

/* -------------------------
   Small helper components
   ------------------------- */
const Star = ({ filled = true }: { filled?: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-indigo-300" : "text-white/20"}`}
    viewBox="0 0 20 20"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
  >
    <path d="M10 1.7l2.37 4.8 5.29.77-3.82 3.72.9 5.27L10 14.9 4.36 16.9l.9-5.27L1.44 7.9l5.29-.77L10 1.7z" />
  </svg>
);

/* -------------------------
   Component
   ------------------------- */
export default function CustomerReviewsCarousel(): JSX.Element {
  const total = REVIEWS.length;

  // Responsive visible cards: 1 mobile, 2 tablet, 3 desktop
  const [visible, setVisible] = useState<number>(() => {
    if (typeof window === "undefined") return 3;
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 1024) return 2;
    return 3;
  });

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w < 640) setVisible(1);
      else if (w < 1024) setVisible(2);
      else setVisible(3);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // motion x in px (we animate x directly)
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dimsRef = useRef({
    viewportWidth: 0,
    cardWidthPx: 0,
    trackWidthPx: 0,
    minX: 0,
    maxX: 0,
  });

  // Active index (where the "center" or highlighted card is)
  const [index, setIndex] = useState<number>(0);

  // modal state for full testimonial
  const [modalOpen, setModalOpen] = useState(false);
  const [modalReview, setModalReview] = useState<Review | null>(null);

  // Autoplay control
  const pausedRef = useRef(false);

  // Update dims and snap target
  const updateDims = () => {
    const viewport = containerRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const viewportWidth = viewport.getBoundingClientRect().width;
    const cardWidthPx = (viewportWidth * (100 / visible)) / 100; // viewport * percentPerCard
    const trackWidthPx = cardWidthPx * total;
    const minX = Math.min(0, viewportWidth - trackWidthPx);
    const maxX = 0;
    dimsRef.current = { viewportWidth, cardWidthPx, trackWidthPx, minX, maxX };

    // Snap to index on update
    const centerOffset = ((visible - 1) / 2) * cardWidthPx;
    let target = -(index * cardWidthPx) + centerOffset;
    if (target > maxX) target = maxX;
    if (target < minX) target = minX;
    animate(x, target, { type: "spring", stiffness: 90, damping: 18 });
  };

  // initialize and on resize
  useEffect(() => {
    updateDims();
    const onResize = () => updateDims();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, index, total]);

  // autoplay timer with visibility handling
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pausedRef.current && document.visibilityState === "visible") {
        setIndex((i) => (i + 1) % total);
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [total]);

  // react to index changes (animate to snapped position)
  useEffect(() => {
    const { cardWidthPx, minX, maxX } = dimsRef.current;
    const centerOffset = ((visible - 1) / 2) * cardWidthPx;
    if (!cardWidthPx) return;
    let target = -(index * cardWidthPx) + centerOffset;
    if (target > maxX) target = maxX;
    if (target < minX) target = minX;
    animate(x, target, { type: "spring", stiffness: 90, damping: 18 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // prev/next helpers with clamp
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(total - 1, i + 1));
  const goTo = (i: number) => setIndex(Math.max(0, Math.min(total - 1, i)));

  // when user starts dragging, pause autoplay
  const handleDragStart = () => {
    pausedRef.current = true;
  };

  // handle drag end: determine swipe offset and snap to nearest
  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;
    const { cardWidthPx } = dimsRef.current;
    if (!cardWidthPx) {
      pausedRef.current = false;
      return;
    }

    // thresholds (tuned)
    const distanceThreshold = cardWidthPx * 0.28; // ~28% of card width
    const velocityThreshold = 600; // px/sec

    // if significant swipe left (more negative offset) -> move right (next)
    if (offsetX < -distanceThreshold || velocityX < -velocityThreshold) {
      // calculate how many slides moved (rounded)
      const move = Math.max(1, Math.round(Math.abs(offsetX) / cardWidthPx));
      setIndex((i) => Math.min(total - 1, i + move));
    } else if (offsetX > distanceThreshold || velocityX > velocityThreshold) {
      const move = Math.max(1, Math.round(Math.abs(offsetX) / cardWidthPx));
      setIndex((i) => Math.max(0, i - move));
    } else {
      // snap to nearest based on current x
      const currentX = x.get();
      const centerOffset = ((visible - 1) / 2) * cardWidthPx;
      // compute the exact floating index from position: idxFloat = (centerOffset - currentX)/cardWidthPx
      const idxFloat = (centerOffset - currentX) / cardWidthPx;
      const nearest = Math.round(idxFloat);
      setIndex(Math.max(0, Math.min(total - 1, nearest)));
    }

    // resume autoplay shortly after drag ends
    setTimeout(() => {
      pausedRef.current = false;
    }, 350);
  };

  // pause/resume on hover
  const handleMouseEnter = () => (pausedRef.current = true);
  const handleMouseLeave = () => (pausedRef.current = false);

  // pause on visibility change (tab hidden)
  useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === "hidden") pausedRef.current = true;
      else pausedRef.current = false;
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        pausedRef.current = true;
        prev();
        setTimeout(() => (pausedRef.current = false), 700);
      }
      if (e.key === "ArrowRight") {
        pausedRef.current = true;
        next();
        setTimeout(() => (pausedRef.current = false), 700);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // click card to open modal
  const openModal = (r: Review) => {
    setModalReview(r);
    setModalOpen(true);
    pausedRef.current = true;
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalReview(null);
    setTimeout(() => (pausedRef.current = false), 300);
  };

  // compute button disabled states for bounding
  const leftDisabled = index <= 0;
  const rightDisabled = index >= total - 1;

  // percent per card
  const percentPerCard = 100 / visible;

  return (
    <>
      <section className="w-full py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-medium text-white">Customer Reviews</h2>
          </div>

          {/* carousel wrapper */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* chevrons always visible */}
            <div className="absolute inset-y-0 left-3 flex items-center z-20">
              <button
                aria-label="Previous"
                onClick={() => {
                  pausedRef.current = true;
                  prev();
                  setTimeout(() => (pausedRef.current = false), 800);
                }}
                className={`p-2 rounded-full bg-white/[0.03] text-white/90 border border-white/6 hover:bg-white/[0.04] transition ${leftDisabled ? "opacity-40 cursor-not-allowed" : ""}`}
                disabled={leftDisabled}
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d="M12 16L6 10l6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-y-0 right-3 flex items-center z-20">
              <button
                aria-label="Next"
                onClick={() => {
                  pausedRef.current = true;
                  next();
                  setTimeout(() => (pausedRef.current = false), 800);
                }}
                className={`p-2 rounded-full bg-white/[0.03] text-white/90 border border-white/6 hover:bg-white/[0.04] transition ${rightDisabled ? "opacity-40 cursor-not-allowed" : ""}`}
                disabled={rightDisabled}
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d="M8 16l6-6-6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* viewport */}
            <div
              ref={containerRef}
              className="overflow-hidden"
              role="region"
              aria-roledescription="carousel"
              aria-label="Customer reviews carousel"
            >
              {/* track - draggable */}
              <motion.div
                ref={trackRef}
                drag="x"
                dragConstraints={{ left: dimsRef.current.minX, right: dimsRef.current.maxX }}
                dragElastic={0.12}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{ x }}
                className="flex gap-6 will-change-transform"
                aria-live="polite"
              >
                {REVIEWS.map((r, i) => {
                  const cardWidth = `${percentPerCard}%`;
                  const isActive = i === index;
                  return (
                    <div key={r.id} style={{ flex: `0 0 ${cardWidth}` }} className="py-2">
                      <motion.article
                        layout
                        initial={{ opacity: 0.95 }}
                        animate={{ opacity: isActive ? 1 : 0.94, scale: isActive ? 1 : 0.985 }}
                        transition={{ type: "spring", stiffness: 120, damping: 16 }}
                        className="mx-auto max-w-[380px] rounded-2xl p-6 md:p-8 border border-white/6 bg-gradient-to-br from-black/60 to-black/70 shadow-xl cursor-pointer"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(15,23,55,0.85) 0%, rgba(5,9,18,0.78) 60%)",
                          boxShadow: isActive
                            ? "0 22px 48px rgba(11,20,55,0.68), inset 0 1px 0 rgba(255,255,255,0.02)"
                            : "0 10px 28px rgba(2,6,23,0.6)",
                        }}
                        onClick={() => openModal(r)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") openModal(r);
                        }}
                        aria-label={`Open testimonial by ${r.name}`}
                      >
                        {/* top row */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-900 to-indigo-900 border border-white/6 flex items-center justify-center text-white font-semibold text-sm">
                              {r.company ? r.company.charAt(0) : r.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-sm text-gray-300">{r.company ?? r.name}</div>
                              <div className="text-xs text-gray-400">{r.date}</div>
                            </div>
                          </div>

                          <div className="text-white/80 text-2xl leading-none">“</div>
                        </div>

                        {/* quote */}
                        <blockquote className="mt-6 text-gray-200 text-base leading-relaxed min-h-[120px]">
                          {r.quote.length > 220 ? r.quote.slice(0, 220) + "…" : r.quote}
                        </blockquote>

                        {/* rating & read more */}
                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-indigo-200 font-semibold text-lg">{r.rating.toFixed(1)}</div>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, idx) => {
                                const filled = idx < Math.round(r.rating);
                                return <Star key={idx} filled={filled} />;
                              })}
                            </div>
                          </div>

                          <div className="text-sm text-gray-300 flex items-center gap-2">
                            <span>Read more</span>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12h14M13 5l7 7-7 7" stroke="#d1d5ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </motion.article>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* dots */}
            <div className="mt-6 flex items-center justify-center gap-3">
              {REVIEWS.map((_, i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => {
                      pausedRef.current = true;
                      goTo(i);
                      setTimeout(() => (pausedRef.current = false), 700);
                    }}
                    className={`w-12 md:w-14 h-1.5 rounded-full transition-all ${active ? "bg-white" : "bg-white/10"}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Full testimonial modal */}
      <AnimateModal open={modalOpen} onClose={closeModal} review={modalReview} />
    </>
  );
}

/* -------------------------
   Modal (small, accessible)
   ------------------------- */
function AnimateModal({
  open,
  onClose,
  review,
}: {
  open: boolean;
  onClose: () => void;
  review: Review | null;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <>
      {open && review ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Full testimonial by ${review.name}`}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 100, damping: 16 }}
            className="relative z-10 max-w-3xl w-full rounded-2xl p-6 md:p-10 bg-gradient-to-br from-black/80 to-black/70 border border-white/6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold text-white">{review.name}</div>
                <div className="text-sm text-gray-300">{review.role} {review.location ? `• ${review.location}` : ""}</div>
                <div className="text-xs text-gray-400 mt-1">{review.date}</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-indigo-200 font-semibold text-lg">{review.rating.toFixed(1)}</div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => {
                    const filled = idx < Math.round(review.rating);
                    return <Star key={idx} filled={filled} />;
                  })}
                </div>
                <button
                  aria-label="Close testimonial"
                  onClick={onClose}
                  className="ml-4 p-2 rounded-full bg-white/[0.03] border border-white/6 text-white/90 hover:bg-white/[0.04]"
                >
                  ✕
                </button>
              </div>
            </div>

            <hr className="my-4 border-t border-white/6" />

            <div className="text-gray-200 leading-relaxed text-base md:text-lg">
              {review.quote}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  );
}
