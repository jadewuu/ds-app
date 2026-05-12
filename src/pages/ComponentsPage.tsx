import { ArrowRight, BarChart3, Blocks, Box, CreditCard, Info, Layers, LayoutPanelTop, MousePointerClick, Pencil, SlidersHorizontal, Tag, ToggleLeft, User } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Select } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs } from "@/components/ui/tabs"
import { Tooltip } from "@/components/ui/tooltip"
import { useNavigate } from "react-router-dom"

export function ComponentsPage() {
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
