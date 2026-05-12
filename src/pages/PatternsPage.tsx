import { ArrowRight, Rss, SlidersHorizontal, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export function PatternsPage() {
  return (
    <div className="space-y-0">
      {/* ── Hero with gradient mesh ── */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(at 0% 0%, #ccff00 0%, transparent 50%), radial-gradient(at 100% 100%, #00ccf9 0%, transparent 50%)",
            opacity: 0.15,
          }}
        />
        <div className="relative z-10 px-6 py-24 lg:px-16 lg:py-32 max-w-7xl">
          <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-4 block">
            Core Systems
          </span>
          <h1 className="text-[72px] sm:text-[96px] lg:text-[120px] font-extrabold leading-[0.95] tracking-[-0.05em] mb-8 max-w-4xl">
            Interface{" "}
            <span className="italic font-light tracking-tight text-primary-container">
              Patterns
            </span>{" "}
            &amp; Behaviors.
          </h1>
          <p className="text-[18px] lg:text-[20px] text-muted-foreground max-w-2xl leading-[1.6]">
            Standardized solutions for common user problems. From seamless authentication
            to complex data visualization, explore how DesignCore handles the flow.
          </p>
        </div>
      </section>

      {/* ── Pattern 1 & 2 Row ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-border">
        {/* Pattern 1: Authentication Flows */}
        <div className="md:col-span-8 p-8 lg:p-12 border-r border-border flex flex-col justify-between">
          <div>
            <span className="text-[14px] font-semibold tabular-nums text-muted-foreground mb-6 block">
              01 / SECURITY
            </span>
            <h2 className="text-[48px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.04em] mb-6">
              Authentication Flows
            </h2>
            <p className="text-[16px] text-muted-foreground max-w-xl mb-12 leading-[1.6]">
              Designed for friction-less entry. Our patterns prioritize security without
              compromising the human experience. Features adaptive multi-factor UI and
              passwordless transitions.
            </p>
          </div>
          <div className="border border-border p-8 bg-card">
            <div className="max-w-sm mx-auto">
              <div className="mb-8">
                <h3 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] mb-2">
                  Welcome back.
                </h3>
                <p className="text-muted-foreground text-[16px] leading-[1.6]">
                  Sign in to your DesignCore account.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-[12px] font-bold tracking-[0.15em] uppercase mb-2 block">
                    Email Address
                  </label>
                  <input
                    className="w-full border-b border-foreground bg-transparent py-2 focus:ring-0 focus:border-primary-container px-0 text-xl font-medium outline-none"
                    placeholder="jane@studio.com"
                    type="text"
                  />
                </div>
                <button className="w-full bg-foreground text-background py-4 font-bold flex justify-between items-center px-6 hover:bg-primary-container hover:text-foreground transition-all">
                  CONTINUE <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pattern 2: Data Dashboards */}
        <div className="md:col-span-4 p-8 lg:p-12 flex flex-col justify-between bg-primary-container/5">
          <div>
            <span className="text-[14px] font-semibold tabular-nums text-muted-foreground mb-6 block">
              02 / ANALYTICS
            </span>
            <h3 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] mb-4">
              Data Dashboards
            </h3>
            <p className="text-[16px] text-muted-foreground mb-8 leading-[1.6]">
              Information density meets visual clarity. Minimalist charts and high-contrast
              tables.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border border-border p-6 bg-card">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground">
                Real-Time Usage
              </span>
              <div className="flex items-end justify-between mt-4">
                <span className="text-4xl font-bold">94.2%</span>
                <span className="text-primary-container font-bold flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" /> +2.4%
                </span>
              </div>
            </div>
            <div className="border border-border p-6 bg-card">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground">
                Active Nodes
              </span>
              <div className="flex items-end justify-between mt-4">
                <span className="text-4xl font-bold">1,024</span>
                <span className="text-foreground font-bold">STABLE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pattern 3: Dynamic Feed Systems ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-border">
        <div className="md:col-span-4 p-8 lg:p-12 border-r border-border bg-foreground text-background">
          <span className="text-[14px] font-semibold tabular-nums text-primary-container mb-6 block">
            03 / CONTENT
          </span>
          <h2 className="text-[48px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.04em] mb-6">
            Dynamic Feed Systems
          </h2>
          <p className="text-[16px] text-white/70 mb-12 leading-[1.6]">
            Infinite scalability for content-heavy applications. The feed pattern adapts to
            media types from text snippets to high-resolution imagery.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center shrink-0">
                <Rss className="h-5 w-5 text-primary-container" />
              </div>
              <div>
                <p className="font-bold">Fluid Layouts</p>
                <p className="text-sm text-white/60">Auto-adjusting grid units</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center shrink-0">
                <SlidersHorizontal className="h-5 w-5 text-primary-container" />
              </div>
              <div>
                <p className="font-bold">Smart Filtering</p>
                <p className="text-sm text-white/60">Context-aware navigation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 relative">
          <div className="absolute inset-0 bg-foreground/5 hairline-grid opacity-[0.04]" />
          <div className="relative z-10 p-8 lg:p-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Feed Card 1 */}
            <div className="border border-border bg-card p-6">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-primary-container mb-4 block">
                Latest Case Study
              </span>
              <h4 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] mb-4">
                Scaling Global Systems
              </h4>
              <p className="text-[16px] text-muted-foreground mb-6 leading-[1.6]">
                How we handled 100M+ requests per second with DesignCore architecture.
              </p>
              <a
                href="#"
                className="font-bold flex items-center gap-2 hover:translate-x-2 transition-transform"
              >
                READ MORE <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            {/* Feed Card 2 */}
            <div className="border border-border bg-card p-6">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-4 block">
                Resource Updated
              </span>
              <h4 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] mb-4">
                Bento Grid Patterns
              </h4>
              <p className="text-[16px] text-muted-foreground mb-6 leading-[1.6]">
                Explore the updated spacing logic for responsive bento-style layouts.
              </p>
              <a
                href="#"
                className="font-bold flex items-center gap-2 hover:translate-x-2 transition-transform"
              >
                EXPLORE <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            {/* Feed Card 3 */}
            <div className="border border-border bg-card p-6 sm:col-span-2">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-primary-container mb-4 block">
                Design Tip
              </span>
              <h4 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] mb-4">
                Micro-interactions
              </h4>
              <p className="text-[16px] text-muted-foreground mb-6 leading-[1.6]">
                Subtle motion rules for button hover states and active indicators.
              </p>
              <a
                href="#"
                className="font-bold flex items-center gap-2 hover:translate-x-2 transition-transform"
              >
                VIEW RULES <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter / CTA ── */}
      <section className="p-12 lg:p-24 flex flex-col items-center text-center">
        <h2 className="text-[72px] sm:text-[96px] lg:text-[120px] font-extrabold leading-[0.95] tracking-[-0.05em] mb-8">
          Ready to{" "}
          <span className="italic font-light tracking-tight text-primary-container">
            Build?
          </span>
        </h2>
        <p className="text-[18px] lg:text-[20px] text-muted-foreground max-w-2xl mb-12 leading-[1.6]">
          Download the complete pattern library for Figma and start building world-class
          interfaces today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <input
            className="flex-1 bg-transparent border-b border-foreground focus:border-primary-container focus:ring-0 py-3 text-lg outline-none"
            placeholder="email@example.com"
            type="email"
          />
          <button className="bg-foreground text-background px-8 py-4 font-bold hover:bg-primary-container hover:text-foreground transition-all">
            GET ACCESS
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full py-20 px-6 lg:px-16 mt-auto flex flex-col md:flex-row justify-between items-center gap-12 bg-foreground text-background border-t border-white/10">
        <div className="flex flex-col items-center md:items-start gap-6">
          <span className="text-[24px] font-black text-primary-container">DesignCore</span>
          <p className="text-base text-white/40 text-center md:text-left">
            © 2024 DesignCore Systems. All rights reserved. Built for the future of
            editorial products.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {["Privacy Policy", "Terms of Service", "GitHub", "Support"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[12px] font-bold tracking-[0.15em] uppercase hover:text-primary-container transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
