import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-12">
      <div className="divider-gold mb-20" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Final CTA */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
          Ready to Shop Differently?
        </h2>
        <p className="text-[var(--color-muted)] mb-8 max-w-lg mx-auto">
          Join the waitlist and be the first to access US products with local
          pickup across West Africa.
        </p>
        <a
          href="mailto:hello@lecoinusa.com?subject=Early%20Access%20Request&body=I%27d%20like%20early%20access%20to%20LeCoinUSA.%20My%20country%3A%20"
          className="btn-gold inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-[var(--color-navy)] font-bold text-lg mb-16"
        >
          Get Early Access
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Tech stack */}
        <div className="mb-8">
          <p className="text-sm text-[var(--color-muted)]">
            Built with{" "}
            <span className="text-white/70">Flutter</span>,{" "}
            <span className="text-white/70">Node.js</span>,{" "}
            <span className="text-white/70">MongoDB</span>,{" "}
            <span className="text-white/70">Redis</span>,{" "}
            <span className="text-white/70">Next.js</span>, and{" "}
            <span className="text-white/70">WebSocket</span>
            {" \u2014 "}by{" "}
            <span className="text-[var(--color-gold)] font-medium">Kouami</span>
          </p>
        </div>

        {/* Coming soon + copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-[var(--color-muted)]">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.05)] text-[var(--color-gold)] font-medium text-xs">
            Coming 2026
          </span>
          <span className="hidden sm:inline text-white/20">\u00B7</span>
          <span>
            &copy; {new Date().getFullYear()} LeCoinUSA. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
