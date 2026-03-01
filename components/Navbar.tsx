"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(26,26,46,0.95)] backdrop-blur-md border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] flex items-center justify-center">
            <span className="text-[var(--color-navy)] font-extrabold text-sm">
              LC
            </span>
          </div>
          <span className="font-bold text-lg tracking-tight">
            LeCoin
            <span className="text-[var(--color-gold)]">USA</span>
          </span>
        </a>

        {/* CTA */}
        <a
          href="mailto:hello@lecoinusa.com?subject=Early%20Access%20Request&body=I%27d%20like%20early%20access%20to%20LeCoinUSA.%20My%20country%3A%20"
          className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] text-[var(--color-gold)] text-sm font-semibold hover:bg-[rgba(212,175,55,0.15)] transition-colors"
        >
          Get Early Access
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </nav>
  );
}
