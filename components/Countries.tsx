"use client";

import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const countries = [
  { name: "Togo", warehouse: "Lom\u00E9" },
  { name: "Ivory Coast", warehouse: "Abidjan" },
  { name: "Senegal", warehouse: "Dakar" },
  { name: "Cameroon", warehouse: "Douala \u00B7 Yaound\u00E9" },
  { name: "Ghana", warehouse: "Accra" },
  { name: "Benin", warehouse: "Cotonou" },
  { name: "Mali", warehouse: "Bamako" },
  { name: "Burkina Faso", warehouse: "Ouagadougou" },
  { name: "Niger", warehouse: "Niamey" },
  { name: "Guinea", warehouse: "Conakry" },
];

export default function Countries() {
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
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-3">
            Coverage
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Countries We Serve
          </h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto">
            Warehouses across West Africa so your order is always close.
            More cities coming soon.
          </p>
        </div>

        {/* Country grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className={`country-card rounded-xl bg-[var(--color-navy-light)] border border-white/[0.04] p-5 text-center ${
                isVisible
                  ? `animate-fade-up`
                  : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 60}ms` : undefined,
              }}
            >
              <MapPin className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-3 opacity-70" />
              <p className="font-semibold text-sm mb-1">{country.name}</p>
              <p className="text-xs text-[var(--color-muted)]">
                {country.warehouse}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
