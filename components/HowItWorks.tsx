"use client";

import { Search, Wallet, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Browse Products",
    description:
      "Explore 64,000+ products from US retailers like Walmart. Real prices, real deals, updated daily.",
    icon: Search,
  },
  {
    number: "2",
    title: "Pay Your Way",
    description:
      "Fund your wallet with T-Money, Orange Money, MTN MoMo, Wave, or Moov. Convert to USD instantly.",
    icon: Wallet,
  },
  {
    number: "3",
    title: "Pick Up Locally",
    description:
      "Your order ships to the US warehouse, then straight to a pickup point near you in West Africa.",
    icon: MapPin,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 sm:py-36">
      {/* Top divider */}
      <div className="divider-gold mb-28" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-3">
            Simple process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative flex flex-col items-center text-center ${
                  isVisible
                    ? `animate-fade-up animate-delay-${(index + 1) * 200}`
                    : "opacity-0"
                }`}
              >
                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-[rgba(212,175,55,0.3)] to-[rgba(212,175,55,0.1)]" />
                )}

                {/* Step number */}
                <div className="step-number mb-6">{step.number}</div>

                {/* Icon */}
                <div className="mb-5 p-4 rounded-2xl bg-[var(--color-navy-lighter)]">
                  <Icon className="w-7 h-7 text-[var(--color-gold)]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
