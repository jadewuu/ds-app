import { Blocks, Copy, ExternalLink, Heart, Info, Layers, LayoutGrid, MousePointerClick, Palette, Pencil, Search, Sparkles, Type } from "lucide-react"
import { Label } from "@/components/ui/label"

export function FoundationsPage() {
  return (
    <div className="space-y-0">
      {/* ── Hero ── */}
      <section className="mb-28 lg:mb-40 border-b border-foreground pb-16">
        <div className="max-w-4xl">
          <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4 block">System Core</span>
          <h1 className="text-[48px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.04em] mb-8">Foundations</h1>
          <p className="text-[18px] lg:text-[20px] text-muted-foreground max-w-2xl leading-[1.6]">
            The bedrock of the DesignCore visual language. These core principles—Color, Type, Spacing, and Grid—ensure every interface we build is consistent, accessible, and high-performance.
          </p>
        </div>
      </section>

      {/* ── 01 Grid & Spacing ── */}
      <section className="mb-28 lg:mb-40">
        <div className="flex flex-col md:flex-row gap-12 border-b border-border pb-20">
          <div className="md:w-1/3">
            <span className="text-[14px] font-semibold tabular-nums text-muted-foreground mb-2 block">01</span>
            <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] mb-6">Grid & Spacing</h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6]">
              Our layout philosophy relies on a strict 12-column hairline grid. Spacing is handled through a set of numeric tokens that create rhythm and airy editorial breathing room.
            </p>
          </div>
          <div className="md:w-2/3">
            <div className="relative h-80 w-full border border-border hairline-grid flex items-center justify-center bg-background">
              <div className="absolute inset-0 grid grid-cols-12 gap-0 opacity-10">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-r border-foreground h-full" />
                ))}
              </div>
              <div className="z-10 bg-primary-container p-12 border border-foreground">
                <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-foreground">Spacing Token: Stack-Section</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 Color Palette ── */}
      <section className="mb-28 lg:mb-40">
        <div className="flex flex-col md:flex-row gap-12 border-b border-border pb-20">
          <div className="md:w-1/3">
            <span className="text-[14px] font-semibold tabular-nums text-muted-foreground mb-2 block">02</span>
            <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] mb-6">Color Palette</h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6]">
              High contrast vibrancy. We leverage a deep charcoal foundation paired with a high-energy neon green accent to create immediate hierarchy and visual focus.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-primary-container p-12 border border-foreground h-48 flex flex-col justify-end">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-foreground mb-1">Primary Accent</span>
              <span className="text-[32px] lg:text-[36px] font-bold">#CCFF00</span>
            </div>
            <div className="bg-foreground p-12 border border-foreground h-48 flex flex-col justify-end text-background">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-white/60 mb-1">Deep Charcoal</span>
              <span className="text-[32px] lg:text-[36px] font-bold">#1B1B1B</span>
            </div>
            <div className="bg-muted p-12 border border-foreground h-48 flex flex-col justify-end">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-1">Surface Neutral</span>
              <span className="text-[32px] lg:text-[36px] font-bold">#E8E8E8</span>
            </div>
            <div className="bg-white p-12 border border-foreground h-48 flex flex-col justify-end">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-1">Canvas White</span>
              <span className="text-[32px] lg:text-[36px] font-bold">#FFFFFF</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 Typography ── */}
      <section className="mb-28 lg:mb-40">
        <div className="flex flex-col md:flex-row gap-12 border-b border-border pb-20">
          <div className="md:w-1/3">
            <span className="text-[14px] font-semibold tabular-nums text-muted-foreground mb-2 block">03</span>
            <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] mb-6">Typography</h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6]">
              Inter is our universal typeface. We utilize a bold, editorial scale that prioritizes clarity and a structured information hierarchy.
            </p>
          </div>
          <div className="md:w-2/3 space-y-12">
            <div className="border-b border-border pb-4">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground/50 block mb-2">Headline XL (72px)</span>
              <p className="text-[56px] lg:text-[72px] font-extrabold leading-[1.1] tracking-tight">Precision at Scale.</p>
            </div>
            <div className="border-b border-border pb-4">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground/50 block mb-2">Headline LG (48px)</span>
              <p className="text-[36px] lg:text-[48px] font-bold leading-[1.15]">Structured Hierarchy.</p>
            </div>
            <div className="border-b border-border pb-4">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground/50 block mb-2">Body LG (18px)</span>
              <p className="text-[16px] lg:text-[18px] leading-[1.6]">The quick brown fox jumps over the lazy dog. Editorial reading experience designed for legibility and digital surfaces.</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground/50 block mb-2">Label Numeric</span>
                <p className="text-[14px] font-semibold leading-none tabular-nums">0123456789</p>
              </div>
              <div>
                <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground/50 block mb-2">Label Caps</span>
                <p className="text-[12px] font-bold tracking-[0.15em] uppercase">Navigation Element</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 Iconography ── */}
      <section className="mb-28 lg:mb-40">
        <div className="flex flex-col md:flex-row gap-12 pb-20">
          <div className="md:w-1/3">
            <span className="text-[14px] font-semibold tabular-nums text-muted-foreground mb-2 block">04</span>
            <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] mb-6">Iconography</h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6]">
              Our iconography system is built on a 24px grid with 1.5px strokes. Minimalist, geometric, and designed to disappear into the interface until needed.
            </p>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-4 md:grid-cols-6 gap-px border border-border bg-border">
              {[Palette, LayoutGrid, Layers, Blocks, Sparkles, MousePointerClick, Info, Search, ExternalLink, Copy, Heart, Pencil].map((Icon, i) => (
                <div key={i} className="bg-card p-8 flex items-center justify-center aspect-square">
                  <Icon className="h-9 w-9 text-foreground" strokeWidth={1.5} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Visual Asset ── */}
      <section className="mb-28 lg:mb-40">
        <div className="relative overflow-hidden border border-foreground">
          <div className="h-[400px] lg:h-[600px] w-full relative flex items-end bg-foreground">
            <div className="absolute inset-0 hairline-grid opacity-[0.05]" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent opacity-40" />
            <div className="absolute bottom-12 left-12 z-10">
              <span className="text-[48px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-0.04em]">Visual Cohesion.</span>
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
