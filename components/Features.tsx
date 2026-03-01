"use client";

import { Tag, CreditCard, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Tag,
    title: "Real Products, Real Prices",
    description:
      "Every product is sourced directly from US retailers with live pricing. See the real cost upfront \u2014 product price, shipping, and fees \u2014 no surprises at checkout.",
    highlights: ["Live pricing", "Transparent fees", "Daily deal updates"],
  },
  {
    icon: CreditCard,
    title: "Your Wallet, Your Way",
    description:
      "Top up your LeCoinUSA wallet using the payment method you already trust. We handle the currency conversion so you can shop in dollars without the hassle.",
    highlights: ["Built-in wallet", "Instant conversion", "5 payment methods"],
  },
  {
    icon: Globe,
    title: "10 Countries, One Platform",
    description:
      "With warehouses across West Africa, your order is never far away. Track every step from the US shelf to your local pickup point with real-time updates.",
    highlights: [
      "11 warehouse cities",
      "Order tracking",
      "Local pickup",
    ],
  },
];

export default function Features() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 sm:py-36">
      <div className="divider-gold mb-28" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-3">
            Why LeCoinUSA
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Built for the Way You Shop
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`feature-card rounded-2xl bg-[var(--color-navy-light)] p-8 ${
                  isVisible
                    ? `animate-fade-up animate-delay-${(index + 1) * 200}`
                    : "opacity-0"
                }`}
              >
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[rgba(212,175,55,0.15)] to-[rgba(212,175,55,0.05)] mb-6">
                  <Icon className="w-6 h-6 text-[var(--color-gold)]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Highlight tags */}
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[rgba(212,175,55,0.08)] text-[var(--color-gold)] border border-[rgba(212,175,55,0.15)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
