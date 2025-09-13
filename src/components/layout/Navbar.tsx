"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#subscription plans", label: "Subscription plans" },
  { href: "#resources", label: "Resources" },
  { href: "#blog", label: "Blog" },
  { href: "#company", label: "Company" },
  { href: "#partner", label: "Partner" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-3 focus:py-1 focus:rounded"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/90">
        <div className="mx-6 flex h-16 items-center justify-start">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 font-bold text-white"
            aria-label="ThreatIntel Pro - Home"
          >
            {/* Use your logo.svg if available */}
            <img src="/svg/logo.svg" alt="logo" className="w-52 h-auto mr-10"/>
            {/* <span className="text-lg tracking-tight">ThreatIntel&nbsp;Pro</span> */}
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex mr-36">
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

          <div className="secondSection text-white flex items-center justify-center gap-6 text-sm">
            <p>Report an incedent</p>
            <p>Talk to sales</p>
            <p className="text-2xl"><Search /></p>
          </div>

          {/* CTA (desktop) */}
          <div className="hidden md:block ml-10">
            <a
              href="#cta"
              className="rounded bg-[#5E17EB] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 transition"
            >
              Sign In
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-white/10 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              key="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "tween", duration: 0.25 }}
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
                <li className="pt-2">
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
