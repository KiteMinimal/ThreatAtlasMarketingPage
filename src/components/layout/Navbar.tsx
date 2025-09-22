"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#subscription-plans", label: "Subscription plans" },
  { href: "#resources", label: "Resources" },
  { href: "#blog", label: "Blog" },
  { href: "#company", label: "Company" },
  { href: "#partner", label: "Partner" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // Close on hash change (when user clicks a link)
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  // Smooth scroll listener (rAF throttled)
  useEffect(() => {
    let ticking = false;
    const threshold = 16; // px scrolled before blur kicks in (adjust as needed)
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // run once to set initial state (useful when reloading not at top)
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Inline style for smooth backdrop-filter transition (works even if Tailwind backdrop utilities aren't active)
  const backdropStyle: React.CSSProperties = {
    backdropFilter: scrolled ? "blur(8px) saturate(130%)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(8px) saturate(130%)" : "none",
    transition:
      "background-color 260ms ease, backdrop-filter 260ms ease, -webkit-backdrop-filter 260ms ease",
  };

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-3 focus:py-1 focus:rounded"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-40 w-full border-b ${scrolled ? "border-white/10" : "border-transparent"}`}
        style={{
          ...backdropStyle,
          // background: change opacity based on scroll
          backgroundColor: scrolled ? "rgba(0,0,0,0.62)" : "transparent",
          // optional subtle fallback shadow when scrolled
          boxShadow: scrolled ? "0 6px 18px rgba(2,6,23,0.25)" : "none",
        }}
      >
        {/* Optional textured overlay to add "smooth texture" feel */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 select-none`}
          style={{
            backgroundImage:
              scrolled
                ? // a very subtle noise/texture using svg-data-url (helps that "texture" feel)
                  `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='1' stitchTiles='stitch' /></filter><rect width='60' height='60' filter='url(%23n)' opacity='0.02' /></svg>")`
                : "none",
            opacity: scrolled ? 1 : 0,
            transition: "opacity 260ms ease",
            mixBlendMode: "overlay",
          }}
        />

        {/* Parent row: each major group is its own flex item. Desktop layout visible at md: */}
        <div className="relative mx-6 flex h-16 items-center justify-between">
          {/* ----------------- Logo Section ----------------- */}
          <div className="flex items-center flex-shrink-0">
            <a href="#home" className="flex items-center gap-2 font-semibold text-white" aria-label="ThreatIntel Pro - Home">
              <img src="/svg/logo.png" alt="logo" className="w-40 h-16" />
            </a>
          </div>

          {/* ----------------- Nav Links Section (desktop only) ----------------- */}
          <nav className="hidden md:flex md:items-center md:gap-6 md:ml-6" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Use a spacer so the utility section and CTA can be placed to the right while nav stays centered-ish.
              On smaller screens this is invisible because nav is hidden. */}
          <div className="hidden md:block md:flex-1" />

          {/* ----------------- Utility Actions Section (desktop only) ----------------- */}
          <div className="hidden md:flex md:items-center md:gap-6 md:mr-4 text-white text-sm">
            <button
              type="button"
              className="text-sm text-gray-200 hover:text-white transition px-2 py-1 rounded"
              aria-label="Report an incident"
              onClick={() => {
                // optionally handle client-side navigation or analytics
                const el = document.querySelector("#report");
                if (el instanceof HTMLElement) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Report an incident
            </button>

            <button
              type="button"
              className="text-sm text-gray-200 hover:text-white transition px-2 py-1 rounded"
              aria-label="Talk to sales"
              onClick={() => {
                const el = document.querySelector("#sales");
                if (el instanceof HTMLElement) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Talk to sales
            </button>

            <button
              type="button"
              className="rounded p-1 hover:bg-white/10 transition"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-200" />
            </button>
          </div>

          {/* ----------------- Sign In CTA Section (desktop only) ----------------- */}
          <div className="hidden md:flex md:items-center md:ml-4">
            <a
              href="#cta"
              className="rounded bg-[#5E17EB] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 transition"
            >
              Sign In
            </a>
          </div>

          {/* ----------------- Mobile: hamburger toggle (always visible on small) ----------------- */}
          <div className="ml-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-white/10"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu (hamburger) */}
        <AnimatePresence>
          {open && (
            <motion.nav
              key="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "tween", duration: 0.22 }}
              className="md:hidden border-t border-white/10"
            >
              <ul className="flex flex-col gap-2 px-4 py-4">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ x: -12, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.03 * idx }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded px-3 py-2 text-base text-gray-200 hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}

                {/* Mobile utility actions */}
                <li className="pt-2 border-t border-white/5 mt-2">
                  <div className="flex flex-col gap-2">
                    <a
                      href="#report"
                      onClick={() => setOpen(false)}
                      className="block rounded px-3 py-2 text-base text-gray-200 hover:bg-white/10 hover:text-white"
                    >
                      Report an incident
                    </a>
                    <a
                      href="#sales"
                      onClick={() => setOpen(false)}
                      className="block rounded px-3 py-2 text-base text-gray-200 hover:bg-white/10 hover:text-white"
                    >
                      Talk to sales
                    </a>
                    <button
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 rounded px-3 py-2 text-base text-gray-200 hover:bg-white/10 hover:text-white"
                      aria-label="Search"
                    >
                      <Search className="h-5 w-5" />
                      Search
                    </button>
                  </div>
                </li>

                <li className="pt-4">
                  <a
                    href="#cta"
                    onClick={() => setOpen(false)}
                    className="block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-center text-sm font-semibold text-white shadow hover:opacity-90"
                  >
                    Request Demo
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
