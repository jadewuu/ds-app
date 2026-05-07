import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HeroIllustration } from "@/components/HeroIllustration"
import {
  Sun,
  Moon,
  Menu,
  User,
  Heart,
  Copy,
  Info,
  Search,
  Palette,
  Sparkles,
  ExternalLink,
  LayoutGrid,
  Layers,
  Blocks,
  ArrowRight,
  MousePointerClick,
  BarChart3,
  Pencil,
  LayoutPanelTop,
  TrendingUp,
  Rss,
  Tag,
  CreditCard,
  ToggleLeft,
  Box,
  SlidersHorizontal,
} from "lucide-react"

/* ─── SIDEBAR DATA ─── */

interface SidebarItem {
  label: string
  href: string
  icon: React.ElementType
}

const sidebarItems: SidebarItem[] = [
  { label: "Overview", href: "/overview", icon: Info },
  { label: "Foundations", href: "/colors", icon: Palette },
  { label: "Layout", href: "/typography", icon: LayoutGrid },
  { label: "Components", href: "/button", icon: Layers },
  { label: "Patterns", href: "/chat", icon: Blocks },
]

/* ─── DATA ─── */

const colorTokens = [
  { name: "Primary", variable: "--primary", light: "#000000", dark: "#ccff00", desc: "Ink black — primary action color" },
  { name: "Primary Container", variable: "--primary-container", light: "#ccff00", dark: "#1a1a1a", desc: "Neon green — accent container" },
  { name: "Secondary", variable: "--secondary", light: "#000000", dark: "#ffffff", desc: "Black — secondary actions" },
  { name: "Background", variable: "--background", light: "#ffffff", dark: "#000000", desc: "Pure white page background" },
  { name: "Foreground", variable: "--foreground", light: "#000000", dark: "#ffffff", desc: "Absolute black text" },
  { name: "Card", variable: "--card", light: "#ffffff", dark: "#0d0d0d", desc: "Card / elevated surface" },
  { name: "Muted", variable: "--muted", light: "#f3f3f3", dark: "#1a1a1a", desc: "Light gray muted surface" },
  { name: "Muted Foreground", variable: "--muted-foreground", light: "#444933", dark: "#949a80", desc: "Subtle olive-gray label text" },
  { name: "Border", variable: "--border", light: "#e2e2e2", dark: "#333333", desc: "1px hairline structural borders" },
  { name: "Ring", variable: "--ring", light: "#000000", dark: "#ccff00", desc: "Black focus ring" },
  { name: "Destructive", variable: "--destructive", light: "#ba1a1a", dark: "#ffb4ab", desc: "Error / destructive state" },
  { name: "Outline Variant", variable: "--border", light: "#e2e2e2", dark: "#333333", desc: "Input borders & dividers" },
]

/* ═══════════════════════════════════════
   SIDEBAR
   ═══════════════════════════════════════ */

function SidebarNav() {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname

  return (
    <nav className="space-y-1 px-3 py-2">
      {sidebarItems.map((item) => {
        const isActive = path === item.href
        const Icon = item.icon
        return (
          <button
            key={item.href}
            onClick={() => navigate(item.href)}
            className={`flex w-full items-center gap-3 px-3 py-2.5 text-sm transition-all ${
              isActive
                ? "bg-primary-container text-foreground font-bold"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <Icon className={`h-4 w-4 ${isActive ? "" : ""}`} />
            <span>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

/* ═══════════════════════════════════════
   SHARED
   ═══════════════════════════════════════ */

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"))
  return (
    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => {
      const next = !dark; setDark(next); document.documentElement.classList.toggle("dark", next)
    }}>
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}

function PageTitle({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="space-y-1.5">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {desc && <p className="text-sm text-muted-foreground">{desc}</p>}
      <Separator className="mt-3" />
    </div>
  )
}

function DemoBox({ title, desc, children }: { title?: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2.5">
      {(title || desc) && (
        <div>
          {title && <h3 className="text-sm font-medium">{title}</h3>}
          {desc && <p className="text-xs text-muted-foreground">{desc}</p>}
        </div>
      )}
      <div className="rounded-md border bg-card p-4">{children}</div>
    </div>
  )
}

/* ═══════════════════════════════════════
   PAGES
   ═══════════════════════════════════════ */

function OverviewPage() {
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

function FoundationsPage() {
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

function LayoutPage() {
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

function ComponentsPage() {
  const navigate = useNavigate()

  const componentGroups = [
    {
      category: "Atoms",
      items: [
        { name: "Button", desc: "6 variants · 3 sizes · icon support", icon: MousePointerClick, route: "/button-demo" },
        { name: "Input", desc: "Text field · label · placeholder · disabled", icon: Pencil, route: "/input" },
        { name: "Badge", desc: "Status indicators · 4 variants", icon: Tag, route: "/badge" },
        { name: "Avatar", desc: "User representation · image · fallback", icon: User, route: "/avatar" },
      ],
    },
    {
      category: "Molecules",
      items: [
        { name: "Select", desc: "Dropdown choice from a list", icon: Layers, route: "/select" },
        { name: "Switch", desc: "Toggle between two states", icon: ToggleLeft, route: "/switch" },
        { name: "Slider", desc: "Numeric value from a range", icon: SlidersHorizontal, route: "/slider" },
        { name: "Progress", desc: "Completion status indicator", icon: BarChart3, route: "/progress" },
      ],
    },
    {
      category: "Organisms",
      items: [
        { name: "Card", desc: "Container · header · content · footer", icon: CreditCard, route: "/card" },
        { name: "Tabs", desc: "Switch between views in same context", icon: LayoutPanelTop, route: "/tabs" },
        { name: "Tooltip", desc: "Extra info on hover or focus", icon: Info, route: "/tooltip" },
        { name: "Skeleton", desc: "Loading placeholder for content areas", icon: Box, route: "/skeleton" },
      ],
    },
  ]

  return (
    <div className="space-y-0">
      {/* ── Hero ── */}
      <section className="mb-28 lg:mb-40 border-b border-border pb-16">
        <div className="max-w-4xl">
          <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            Building Blocks
          </span>
          <h1 className="text-[48px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.04em] mb-8">
            Components
          </h1>
          <p className="text-[18px] lg:text-[20px] text-muted-foreground max-w-2xl leading-[1.6]">
            A complete library of interface primitives. Atomic design principles scaled for
            the enterprise — from simple buttons to complex data visualizations. Every
            component is built on Base UI primitives with full keyboard navigation and
            screen reader support.
          </p>
        </div>
      </section>

      {/* ── Component Categories ── */}
      {componentGroups.map((group) => (
        <section key={group.category} className="mb-28 lg:mb-40">
          <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
            <h2 className="text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em]">
              {group.category}
            </h2>
            <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted-foreground">
              {group.items.length} components
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-border bg-border">
            {group.items.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.route)}
                className="bg-card p-8 lg:p-10 flex flex-col gap-4 text-left hover:bg-muted transition-colors group cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <item.icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
                  <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                </div>
                <div>
                  <h3 className="text-[24px] font-bold mb-2">{item.name}</h3>
                  <p className="text-[16px] text-muted-foreground leading-[1.6]">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      ))}

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

function ButtonPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Button 按钮" desc="Trigger an action. 6 variants, 3 sizes, icon support." />
      <HeroIllustration type="button" className="mt-4" />
      <DemoBox title="Variants">
        <div className="flex flex-wrap items-end gap-2">
          {(["default", "secondary", "outline", "ghost", "destructive", "link"] as const).map((v) => (
            <Button key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Button>
          ))}
        </div>
      </DemoBox>
      <DemoBox title="Sizes">
        <div className="flex flex-wrap items-end gap-2">
          {(["sm", "default", "lg"] as const).map((s) => (<Button key={s} size={s}>{s}</Button>))}
        </div>
      </DemoBox>
      <DemoBox title="States">
        <div className="flex flex-wrap items-center gap-2">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" size="icon"><Heart className="h-4 w-4" /></Button>
          <Button variant="outline"><Search className="mr-1.5 h-4 w-4" />With Icon</Button>
        </div>
      </DemoBox>
    </div>
  )
}

function AvatarPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Avatar 头像" desc="User or entity representation. Image, fallback, size variants." />
      <HeroIllustration type="avatar" className="mt-4" />
      <DemoBox>
        <div className="flex flex-wrap items-center gap-3">
          <Avatar size="sm"><AvatarFallback className="bg-secondary text-xs">CN</AvatarFallback></Avatar>
          <Avatar><AvatarFallback className="bg-primary text-primary-foreground text-sm">AI</AvatarFallback></Avatar>
          <Avatar size="lg"><AvatarFallback className="bg-secondary text-lg">JD</AvatarFallback></Avatar>
        </div>
      </DemoBox>
    </div>
  )
}

function BadgePage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Badge 徽标" desc="Status indicators and labels. 4 variants." />
      <HeroIllustration type="badge" className="mt-4" />
      <DemoBox>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </DemoBox>
    </div>
  )
}

function CardPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Card 卡片" desc="Container with header, content, and footer." />
      <HeroIllustration type="card" className="mt-4" />
      <DemoBox>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader><CardTitle className="text-base">Basic Card</CardTitle><CardDescription>With description</CardDescription></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Body content.</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base">Metrics</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {[{ k: "Response", v: "124ms" }, { k: "Accuracy", v: "97.3%" }, { k: "Tokens/s", v: "42.1" }].map((r) => (
                <div key={r.k} className="flex items-center justify-between text-sm"><span className="text-muted-foreground">{r.k}</span><span className="font-mono font-medium">{r.v}</span></div>
              ))}
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-center py-6 text-center">
            <Info className="mb-2 h-5 w-5 text-muted-foreground" />
            <p className="text-sm font-medium">Upgrade</p>
            <p className="text-xs text-muted-foreground">Get more features</p>
            <Button size="sm" className="mt-3">Upgrade</Button>
          </Card>
        </div>
      </DemoBox>
    </div>
  )
}

function TabsPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Tabs 标签页" desc="Switch between views in the same context." />
      <HeroIllustration type="tabs" className="mt-4" />
      <DemoBox>
        <Tabs defaultValue="a">
          <TabsList><TabsTrigger value="a">Overview</TabsTrigger><TabsTrigger value="b">Settings</TabsTrigger><TabsTrigger value="c">Info</TabsTrigger></TabsList>
          <TabsContent value="a" className="mt-3 rounded-md border p-3 text-sm text-muted-foreground">Overview content.</TabsContent>
          <TabsContent value="b" className="mt-3 rounded-md border p-3 text-sm text-muted-foreground">Settings content.</TabsContent>
          <TabsContent value="c" className="mt-3 rounded-md border p-3 text-sm text-muted-foreground">Info content.</TabsContent>
        </Tabs>
      </DemoBox>
    </div>
  )
}

function TooltipPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Tooltip 文字提示" desc="Show extra info on hover or focus." />
      <HeroIllustration type="tooltip" className="mt-4" />
      <DemoBox>
        <div className="flex gap-1">
          <TooltipProvider>
            {[Info, Heart, Copy].map((Ic, i) => (
              <Tooltip key={i}>
                <TooltipTrigger render={<Button variant="outline" size="icon"><Ic className="h-4 w-4" /></Button>} />
                <TooltipContent><p>Tooltip {i + 1}</p></TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </DemoBox>
    </div>
  )
}

function SkeletonPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Skeleton 骨架屏" desc="Loading placeholder for content areas." />
      <HeroIllustration type="skeleton" className="mt-4" />
      <DemoBox>
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-1.5"><Skeleton className="h-4 w-36" /><Skeleton className="h-3 w-52" /></div>
        </div>
      </DemoBox>
    </div>
  )
}

function InputPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Input 输入框" desc="Text field. Label, placeholder, disabled, icon slots." />
      <HeroIllustration type="input" className="mt-4" />
      <DemoBox>
        <div className="grid max-w-sm gap-4">
          <div className="space-y-1.5"><Label htmlFor="inp-label">Label</Label><Input id="inp-label" placeholder="Placeholder..." /></div>
          <div className="space-y-1.5"><Label htmlFor="inp-disabled">Disabled</Label><Input id="inp-disabled" placeholder="Disabled" disabled /></div>
          <div className="space-y-1.5">
            <Label htmlFor="inp-icon">With Icon</Label>
            <div className="relative"><Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" /><Input id="inp-icon" placeholder="Search..." className="pl-9" /></div>
          </div>
          <div className="space-y-1.5"><Label htmlFor="inp-textarea">Textarea</Label><Textarea id="inp-textarea" placeholder="Write something..." /></div>
        </div>
      </DemoBox>
    </div>
  )
}

function SelectPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Select 选择器" desc="Choose from a dropdown list." />
      <HeroIllustration type="select" className="mt-4" />
      <DemoBox>
        <div className="space-y-1.5">
          <Label>Select</Label>
          <Select>
            <SelectTrigger className="w-44"><SelectValue placeholder="Choose..." /></SelectTrigger>
            <SelectContent><SelectItem value="a">Option A</SelectItem><SelectItem value="b">Option B</SelectItem><SelectItem value="c">Option C</SelectItem></SelectContent>
          </Select>
        </div>
      </DemoBox>
    </div>
  )
}

function SwitchPage() {
  const [on, setOn] = useState(false)
  return (
    <div className="space-y-6">
      <PageTitle title="Switch 开关" desc="Toggle between two states." />
      <HeroIllustration type="switch" className="mt-4" />
      <DemoBox>
        <div className="flex items-center gap-2"><Label htmlFor="sw-demo">Airplane Mode</Label><Switch id="sw-demo" checked={on} onCheckedChange={setOn} /></div>
      </DemoBox>
    </div>
  )
}

function SliderPage() {
  const [val, setVal] = useState([40])
  return (
    <div className="space-y-6">
      <PageTitle title="Slider 滑动输入条" desc="Select a numeric value from a range." />
      <HeroIllustration type="slider" className="mt-4" />
      <DemoBox>
        <div className="max-w-sm space-y-1.5"><Label>Value: {val[0]}</Label><Slider value={val} onValueChange={(v) => setVal(Array.isArray(v) ? [...v] : [v])} max={100} step={1} /></div>
      </DemoBox>
    </div>
  )
}

function ProgressPage() {
  const [val, setVal] = useState(0)
  useEffect(() => { const t = setInterval(() => setVal((v) => (v >= 100 ? 0 : v + 2)), 300); return () => clearInterval(t) }, [])
  return (
    <div className="space-y-6">
      <PageTitle title="Progress 进度条" desc="Show completion status of an operation." />
      <HeroIllustration type="progress" className="mt-4" />
      <DemoBox><div className="max-w-sm space-y-1.5"><Label>Progress ({val}%)</Label><Progress value={val} /></div></DemoBox>
    </div>
  )
}

function PatternsPage() {
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

/* ═══════════════════════════════════════
   TOPBAR
   ═══════════════════════════════════════ */

function TopBar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/90 backdrop-blur-xl px-4 lg:px-8 h-20">
      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger render={<Button variant="ghost" size="icon" className="h-8 w-8 lg:hidden"><Menu className="h-4 w-4" /></Button>} />
        <SheetContent side="left" className="w-72 p-0">
          <div className="flex items-center gap-2 border-b border-border px-5 py-4">
            <Sparkles className="h-4 w-4 text-primary/60" />
            <span className="text-sm font-semibold tracking-tight">Vivid Editorial</span>
          </div>
          <SidebarNav />
        </SheetContent>
      </Sheet>

      {/* Brand */}
      <div className="flex items-center gap-3">
        <Sparkles className="hidden h-4 w-4 text-primary/60 lg:block" />
        <span className="text-sm font-bold tracking-tight lg:text-base">Vivid Editorial</span>
        <span className="hidden text-[10px] font-medium tracking-[0.05em] uppercase text-muted-foreground/60 lg:inline">Design System</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            className="w-56 border border-border bg-muted py-2 pl-9 pr-4 text-sm text-foreground outline-none transition-all focus:border-foreground focus:ring-1 focus:ring-foreground"
            placeholder="Search the system..."
          />
        </div>
        <Button size="sm" className="bg-primary-container text-foreground hover:brightness-90 h-9 rounded-none px-5 text-[11px] font-semibold tracking-[0.05em] uppercase">
          Get Started
        </Button>
        <ThemeToggle />
      </div>
    </header>
  )
}

/* ═══════════════════════════════════════
   LAYOUT (always visible: sidebar + header)
   ═══════════════════════════════════════ */

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />

      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <aside className="hidden w-72 shrink-0 border-r border-border bg-background lg:flex lg:flex-col">
          <div className="px-5 pt-7 pb-5 space-y-1">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">Documentation</p>
            <p className="text-xs text-muted-foreground/50 font-medium tabular-nums">v1.0.0</p>
          </div>
          <SidebarNav />
          <div className="mt-auto border-t border-border px-4 py-3 flex items-center justify-between">
            <ThemeToggle />
            <a href="https://github.com/jadewuu/ds-app" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><ExternalLink className="h-4 w-4" /></a>
          </div>
        </aside>

        {/* Main content — routed pages */}
        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-12">
            <Routes>
              <Route path="/" element={<OverviewPage />} />
              <Route path="/overview" element={<OverviewPage />} />
              <Route path="/colors" element={<FoundationsPage />} />
              <Route path="/typography" element={<LayoutPage />} />
              <Route path="/button" element={<ComponentsPage />} />
              <Route path="/button-demo" element={<ButtonPage />} />
              <Route path="/avatar" element={<AvatarPage />} />
              <Route path="/badge" element={<BadgePage />} />
              <Route path="/card" element={<CardPage />} />
              <Route path="/tabs" element={<TabsPage />} />
              <Route path="/tooltip" element={<TooltipPage />} />
              <Route path="/skeleton" element={<SkeletonPage />} />
              <Route path="/input" element={<InputPage />} />
              <Route path="/select" element={<SelectPage />} />
              <Route path="/switch" element={<SwitchPage />} />
              <Route path="/slider" element={<SliderPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/chat" element={<PatternsPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/ds-app">
      <AppLayout />
    </BrowserRouter>
  )
}
