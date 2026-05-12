import { ArrowRight, BarChart3, Copy, LayoutGrid, LayoutPanelTop, MousePointerClick, Palette, Pencil, Sparkles, Type } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function OverviewPage() {
  const navigate = useNavigate()

  return (
    <div className="space-y-0">
      {/* ── Hero Section ── */}
      <section className="relative px-6 pt-24 pb-20 lg:px-16 lg:pt-32 lg:pb-24 border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05] pointer-events-none hairline-grid" />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary-container/10 blur-[160px] rounded-full" />
        <div className="relative z-10 max-w-6xl">
          <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-muted-foreground mb-8 block">The New Standard</span>
          <h1 className="text-[72px] sm:text-[96px] lg:text-[120px] font-extrabold leading-[0.95] tracking-[-0.05em] mb-12">
            DesignCore Systems
          </h1>
          <p className="text-[18px] lg:text-[20px] text-muted-foreground max-w-3xl border-l-[8px] border-primary-container pl-12 py-4 italic leading-[1.6]">
            A comprehensive editorial design system built for high-performance product teams.
            Merging Swiss precision with digital vibrancy to create expansive, accessible, and futuristic user experiences.
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <Button
              onClick={() => navigate("/button")}
              className="bg-foreground text-background hover:bg-primary-container hover:text-foreground rounded-none px-10 py-5 text-sm font-bold gap-3"
            >
              Explore Components <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => navigate("/colors")}
              variant="outline"
              className="border-2 border-foreground text-foreground rounded-none px-10 py-5 text-sm font-bold hover:bg-muted"
            >
              View Foundations
            </Button>
          </div>
        </div>
      </section>

      {/* ── Image Banner ── */}
      <section className="w-full border-b border-border bg-foreground">
        <div className="h-[400px] lg:h-[500px] w-full relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 hairline-grid opacity-[0.06]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-primary-container/15 blur-[160px] rounded-full" />
          <div className="relative z-10 text-center">
            <Sparkles className="h-16 w-16 text-primary-container mx-auto mb-6 opacity-50" strokeWidth={1} />
            <p className="text-[12px] font-bold tracking-[0.3em] uppercase text-primary-container/50">DesignCore Ecosystem</p>
          </div>
        </div>
      </section>

      {/* ── Core Foundations Bento Grid ── */}
      <section className="px-6 py-28 lg:px-16 lg:py-40">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-[48px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.04em]">Core Foundations</h2>
          <span className="text-[14px] font-semibold tracking-widest uppercase text-muted-foreground">01 / Foundations</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-border bg-border">
          {/* Color */}
          <div className="bg-card p-12 flex flex-col justify-between aspect-square">
            <div>
              <Palette className="h-10 w-10 text-foreground mb-6" />
              <h3 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] mb-4">Color</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our signature neon green <span className="bg-primary-container px-1 font-bold text-foreground">#CCFF00</span> anchors a high-contrast palette designed for accessibility and impact.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-primary-container border border-border" />
              <div className="w-10 h-10 bg-foreground border border-border" />
              <div className="w-10 h-10 bg-muted border border-border" />
              <div className="w-10 h-10 bg-white border border-border" />
            </div>
          </div>
          {/* Typography */}
          <div className="bg-card p-12 flex flex-col justify-between aspect-square">
            <div>
              <span className="text-[40px] leading-none mb-6 block select-none font-extrabold tracking-[-0.04em]">Aa</span>
              <h3 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] mb-4">Type</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Inter is our workhorse. Utilizing variable weights to define a clear, authoritative typographic hierarchy.
              </p>
            </div>
            <div className="text-[100px] lg:text-[140px] font-extrabold leading-none select-none tracking-[-0.05em] opacity-[0.03]">Aa</div>
          </div>
          {/* Grid */}
          <div className="bg-card p-12 flex flex-col justify-between aspect-square">
            <div>
              <LayoutGrid className="h-10 w-10 text-foreground mb-6" />
              <h3 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] mb-4">Grid</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                A strict 12-column hairline system ensures geometric precision across all viewports and devices.
              </p>
            </div>
            <div className="w-full h-24 hairline-grid opacity-20 border border-border" />
          </div>
        </div>
      </section>

      {/* ── Component Ecosystem ── */}
      <section className="px-6 py-28 lg:px-16 lg:py-40 bg-foreground text-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-primary-container/10 blur-[160px] rounded-full" />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3">
            <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-primary-container mb-6 block">Modular Architecture</span>
            <h2 className="text-[48px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.04em] mb-10">Component Ecosystem</h2>
            <p className="text-[18px] lg:text-[20px] text-white/50 mb-16 max-w-md leading-[1.6]">
              Atomic design principles scaled for the enterprise. From primitive buttons to complex data visualizations.
            </p>
            <ul className="space-y-0">
              {[
                ["01", "Atoms"],
                ["02", "Molecules"],
                ["03", "Organisms"],
              ].map(([num, label]) => (
                <li
                  key={num}
                  className="flex items-center gap-6 py-6 border-b border-white/10 group cursor-pointer hover:bg-white/5 px-4 -mx-4 transition-all"
                >
                  <span className="text-[14px] font-semibold tabular-nums text-primary-container">{num}</span>
                  <span className="text-[28px] font-bold">{label}</span>
                  <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0" />
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[
              { icon: MousePointerClick, title: "Interactive", desc: "Unified hover, active, and focus states across all interactive surfaces for predictable UX.", version: "v2.1", filled: true },
              { icon: BarChart3, title: "Data Viz", desc: "Chart primitives and complex dashboards built with high-density editorial layouts.", version: "v1.8", filled: false },
              { icon: Pencil, title: "Forms", desc: "Clean, minimalist input structures with robust validation states and clear hierarchy.", version: "v3.0", filled: false },
              { icon: LayoutPanelTop, title: "Layouts", desc: "Bento grids, editorial spreads, and task-focused shells for diverse application needs.", version: "v1.2", filled: false },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 p-10 flex flex-col gap-8 hover:border-primary-container transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                  <div className={`w-16 h-16 flex items-center justify-center ${item.filled ? "bg-primary-container text-foreground" : "bg-white/10 text-white"}`}>
                    <item.icon className="h-7 w-7" />
                  </div>
                  <span className="text-[14px] font-semibold tabular-nums text-white/30">{item.version}</span>
                </div>
                <div>
                  <h4 className="text-[28px] font-bold mb-3">{item.title}</h4>
                  <p className="text-base text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting Started ── */}
      <section className="px-6 py-28 lg:px-16 lg:py-40 bg-background">
        <div className="max-w-5xl">
          <h2 className="text-[48px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.04em] mb-20">Getting Started</h2>
          <div className="space-y-24">
            {/* For Designers */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-32 border-t-2 border-foreground pt-16">
              <div className="md:w-1/3">
                <h3 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] mb-4">For Designers</h3>
                <p className="text-base text-muted-foreground leading-relaxed">Access the Figma library, visual tokens, and editorial style guides.</p>
              </div>
              <div className="md:w-2/3 flex flex-col gap-6">
                <div className="p-8 bg-muted border-l-[8px] border-primary-container flex justify-between items-center group cursor-pointer hover:bg-foreground hover:text-background transition-all">
                  <div>
                    <p className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground/60 mb-1">Figma Community</p>
                    <p className="text-[20px] font-bold">DesignCore Library v2.0</p>
                  </div>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-3 transition-transform" />
                </div>
                <div className="p-8 bg-muted border-l-[8px] border-foreground flex justify-between items-center group cursor-pointer hover:bg-foreground hover:text-background transition-all">
                  <div>
                    <p className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground/60 mb-1">Token Specifications</p>
                    <p className="text-[20px] font-bold">Typography & Color Specs</p>
                  </div>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-3 transition-transform" />
                </div>
              </div>
            </div>
            {/* For Developers */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-32 border-t-2 border-foreground pt-16">
              <div className="md:w-1/3">
                <h3 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] mb-4">For Developers</h3>
                <p className="text-base text-muted-foreground leading-relaxed">NPM packages, API references, and implementation guides.</p>
              </div>
              <div className="md:w-2/3 flex flex-col gap-6">
                <div className="p-8 bg-foreground text-background flex justify-between items-center group cursor-pointer hover:bg-primary-container hover:text-foreground transition-all">
                  <code className="text-[16px] font-bold font-mono">npm install @designcore/systems</code>
                  <Copy className="h-5 w-5" />
                </div>
                <div className="p-8 bg-muted border-l-[8px] border-foreground flex justify-between items-center group cursor-pointer hover:bg-foreground hover:text-background transition-all">
                  <div>
                    <p className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground/60 mb-1">React SDK</p>
                    <p className="text-[20px] font-bold">Component API Documentation</p>
                  </div>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-3 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full py-20 px-6 lg:px-16 mt-auto flex flex-col md:flex-row justify-between items-center gap-12 bg-foreground text-background border-t border-white/10">
        <div className="flex flex-col items-center md:items-start gap-6">
          <span className="text-[24px] font-black text-primary-container">DesignCore</span>
          <p className="text-base text-white/40 text-center md:text-left">
            © 2024 DesignCore Systems. All rights reserved. Built for the future of editorial products.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {["Privacy Policy", "Terms of Service", "GitHub", "Support"].map((link) => (
            <a key={link} href="#" className="text-[12px] font-bold tracking-[0.15em] uppercase hover:text-primary-container transition-colors">{link}</a>
          ))}
        </div>
      </footer>
    </div>
  )
}
