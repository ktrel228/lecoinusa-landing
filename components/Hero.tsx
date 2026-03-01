"use client";

import { ShoppingBag, ArrowRight } from "lucide-react";

const countries = [
  "Togo",
  "Ivory Coast",
  "Senegal",
  "Cameroon",
  "Ghana",
  "Benin",
  "Mali",
  "Burkina Faso",
  "Niger",
  "Guinea",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-navy)] to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(212,175,55,0.25)] bg-[rgba(212,175,55,0.06)] mb-8">
          <ShoppingBag className="w-4 h-4 text-[var(--color-gold)]" />
          <span className="text-sm font-medium text-[var(--color-gold)]">
            64,000+ products from US retailers
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up animate-delay-100 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
          Shop the USA.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)]">
            Pick Up at Home.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up animate-delay-200 text-lg sm:text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Browse thousands of products from top US retailers, pay with mobile
          money, and collect from your nearest warehouse in West Africa.
        </p>

        {/* CTA */}
        <div className="animate-fade-up animate-delay-300">
          <a
            href="mailto:hello@lecoinusa.com?subject=Early%20Access%20Request&body=I%27d%20like%20early%20access%20to%20LeCoinUSA.%20My%20country%3A%20"
            className="btn-gold inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-[var(--color-navy)] font-bold text-lg"
          >
            Get Early Access
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Payment methods */}
        <p className="animate-fade-up animate-delay-400 mt-8 text-sm text-[var(--color-muted)]">
          Pay with{" "}
          <span className="text-white/80 font-medium">T-Money</span>
          {" \u00B7 "}
          <span className="text-white/80 font-medium">Orange Money</span>
          {" \u00B7 "}
          <span className="text-white/80 font-medium">MTN MoMo</span>
          {" \u00B7 "}
          <span className="text-white/80 font-medium">Wave</span>
          {" \u00B7 "}
          <span className="text-white/80 font-medium">Moov</span>
        </p>

        {/* Country pills */}
        <div className="animate-fade-up animate-delay-500 mt-10 flex flex-wrap justify-center gap-2">
          {countries.map((country) => (
            <span
              key={country}
              className="px-3 py-1.5 text-xs font-medium rounded-full border border-white/10 bg-white/[0.03] text-white/60"
            >
              {country}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
