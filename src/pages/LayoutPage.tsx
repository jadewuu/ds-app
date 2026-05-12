

export function LayoutPage() {
  return (
    <div className="space-y-0">
      {/* ── Hero ── */}
      <section className="mb-28 lg:mb-40 border-b border-border pb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-primary mb-4 block">03 / Foundations</span>
            <h1 className="text-[56px] lg:text-[72px] font-semibold leading-[1.1] tracking-[-0.04em] mb-6">Layout & Spatial Systems</h1>
            <p className="text-[16px] lg:text-[18px] text-muted-foreground leading-[1.6]">DesignCore utilizes a rigid editorial grid to ensure precision and clarity across all digital touchpoints. Our 12-column system is the heartbeat of our visual language.</p>
          </div>
          <div className="w-full md:w-1/3 border border-border p-8 lg:p-12 bg-card">
            <div className="text-[14px] font-semibold tabular-nums text-muted-foreground mb-2">Last Updated</div>
            <div className="text-[32px] lg:text-[36px] font-bold leading-none">Oct 2024</div>
          </div>
        </div>
      </section>

      {/* ── 12-Column Grid ── */}
      <section className="mb-28 lg:mb-40">
        <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
          <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em]">12-Column Grid</h2>
          <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground">View Specifications →</span>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-12 gap-px h-64 border border-border bg-border">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`bg-card flex items-end p-4 ${i >= 4 ? "hidden md:flex" : ""}`}>
              <span className="text-[14px] font-semibold tabular-nums">{(i + 1).toString().padStart(2, "0")}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase text-primary mb-2">Column Width</h4>
            <p className="text-[16px] text-muted-foreground leading-[1.6]">Fluid columns that adapt to viewport width, maintaining a consistent gutter ratio.</p>
          </div>
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase text-primary mb-2">Gutter</h4>
            <p className="text-[16px] text-muted-foreground leading-[1.6]">A fixed 1px hairline divider replaces traditional whitespace gutters for a tighter, editorial feel.</p>
          </div>
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase text-primary mb-2">Margins</h4>
            <p className="text-[16px] text-muted-foreground leading-[1.6]">Global margins of 4rem (desktop) ensure content never touches the browser edges.</p>
          </div>
        </div>
      </section>

      {/* ── Bento Layout Patterns ── */}
      <section className="mb-28 lg:mb-40">
        <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
          <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em]">Bento Layout Patterns</h2>
          <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground">Structural Anchors</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Large Feature — The Content Anchor */}
          <div className="md:col-span-2 md:row-span-2 border border-border p-8 lg:p-12 flex flex-col justify-between bg-primary-container relative overflow-hidden">
            <div className="z-10">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-foreground">Pattern 01</span>
              <h3 className="text-[40px] lg:text-[48px] font-semibold leading-[1.15] tracking-[-0.03em] mt-4">The Content Anchor</h3>
            </div>
            <div className="z-10 mt-8">
              <p className="text-[16px] text-foreground/70 max-w-xs mb-6 leading-[1.5]">A dominant container used for high-impact hero images or primary navigation clusters.</p>
              <button className="flex items-center gap-2 font-bold text-foreground text-sm">Explore →</button>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 w-1/2 h-full hairline-grid" />
          </div>
          {/* Information Dense */}
          <div className="md:col-span-2 border border-border p-8 lg:p-12 bg-card flex flex-col justify-center">
            <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-primary">Pattern 02</span>
            <h3 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] mt-2">Information Dense</h3>
            <p className="text-[16px] text-muted-foreground mt-4 leading-[1.6]">Multi-layered data visualization or nested component lists.</p>
          </div>
          {/* Small Stat 1 */}
          <div className="border border-border p-8 lg:p-12 bg-muted flex flex-col justify-end">
            <div className="text-[14px] font-semibold tabular-nums text-primary mb-4">03.1</div>
            <div className="text-[32px] lg:text-[36px] font-bold">1px</div>
            <div className="text-[12px] font-bold tracking-[0.15em] uppercase mt-2 text-muted-foreground">Hairline Weight</div>
          </div>
          {/* Small Stat 2 */}
          <div className="border border-border p-8 lg:p-12 bg-secondary text-secondary-foreground flex flex-col justify-end">
            <div className="text-[14px] font-semibold tabular-nums opacity-60 mb-4">03.2</div>
            <div className="text-[32px] lg:text-[36px] font-bold">100%</div>
            <div className="text-[12px] font-bold tracking-[0.15em] uppercase mt-2 opacity-80">Fluid Width</div>
          </div>
        </div>
      </section>

      {/* ── Responsive Breakpoints ── */}
      <section className="mb-28 lg:mb-40">
        <div className="mb-8">
          <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] border-b border-border pb-4 mb-4">Responsive Breakpoints</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b border-border">
                <th className="py-4 text-[12px] font-bold tracking-[0.15em] uppercase">Token</th>
                <th className="py-4 text-[12px] font-bold tracking-[0.15em] uppercase">Viewport</th>
                <th className="py-4 text-[12px] font-bold tracking-[0.15em] uppercase">Columns</th>
                <th className="py-4 text-[12px] font-bold tracking-[0.15em] uppercase">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { token: "SM", viewport: "640px", cols: "4 Columns", desc: "Standard mobile portrait orientation." },
                { token: "MD", viewport: "768px", cols: "8 Columns", desc: "Tablets and large-format mobile devices." },
                { token: "LG", viewport: "1024px", cols: "12 Columns", desc: "Standard desktop and laptop viewports." },
                { token: "XL", viewport: "1280px", cols: "12 Columns", desc: "Enhanced spacing for widescreen monitors." },
              ].map((row) => (
                <tr key={row.token}>
                  <td className="py-6 text-[14px] font-semibold tabular-nums">{row.token}</td>
                  <td className="py-6 text-[16px]">{row.viewport}</td>
                  <td className="py-6 text-[16px]">{row.cols}</td>
                  <td className="py-6 text-[16px] text-muted-foreground">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Image Callout ── */}
      <section className="mb-28 lg:mb-40">
        <div className="relative w-full aspect-[21/9] overflow-hidden">
          <div className="absolute inset-0 bg-foreground flex items-center justify-center">
            <div className="absolute inset-0 hairline-grid opacity-[0.04]" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-12 bg-foreground/40">
            <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-primary-container mb-4">Visual Guidance</span>
            <h2 className="text-[56px] lg:text-[72px] font-semibold leading-[1.1] tracking-[-0.04em] text-white mb-6">Asymmetric Balance</h2>
            <p className="text-[16px] lg:text-[18px] text-white/70 max-w-xl leading-[1.6]">Leveraging empty grid space is as important as filling it. Use whitespace to guide the user's eye through the editorial narrative.</p>
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
