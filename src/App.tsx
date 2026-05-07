import { useState, useRef, useEffect, type FormEvent } from "react"
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
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HeroIllustration } from "@/components/HeroIllustration"
import {
  Sun,
  Moon,
  Menu,
  Send,
  Bot,
  User,
  Heart,
  Copy,
  Info,
  Search,
  ChevronDown,
  Palette,
  Monitor,
  MousePointerClick,
  Sparkles,
  ExternalLink,
} from "lucide-react"

/* ─── SIDEBAR DATA (Arco Design structure) ─── */

interface NavGroup {
  label: string
  icon?: React.ElementType
  defaultOpen?: boolean
  children: (NavGroup | NavItem)[]
}
interface NavItem {
  label: string
  href: string
}

function isGroup(e: NavGroup | NavItem): e is NavGroup {
  return "children" in e
}

const sidebarGroups: NavGroup[] = [
  {
    label: "Getting Started",
    defaultOpen: true,
    children: [
      { label: "Overview", href: "/overview" },
    ],
  },
  {
    label: "Design Tokens",
    icon: Palette,
    defaultOpen: true,
    children: [
      { label: "Colors", href: "/colors" },
      { label: "Typography", href: "/typography" },
    ],
  },
  {
    label: "通用 General",
    icon: Monitor,
    defaultOpen: true,
    children: [
      { label: "Button 按钮", href: "/button" },
    ],
  },
  {
    label: "数据展示 Data Display",
    icon: Monitor,
    defaultOpen: false,
    children: [
      { label: "Avatar 头像", href: "/avatar" },
      { label: "Badge 徽标", href: "/badge" },
      { label: "Card 卡片", href: "/card" },
      { label: "Tabs 标签页", href: "/tabs" },
      { label: "Tooltip 文字提示", href: "/tooltip" },
      { label: "Skeleton 骨架屏", href: "/skeleton" },
    ],
  },
  {
    label: "数据录入 Data Entry",
    icon: MousePointerClick,
    defaultOpen: false,
    children: [
      { label: "Input 输入框", href: "/input" },
      { label: "Select 选择器", href: "/select" },
      { label: "Switch 开关", href: "/switch" },
      { label: "Slider 滑动输入条", href: "/slider" },
    ],
  },
  {
    label: "反馈 Feedback",
    defaultOpen: false,
    children: [
      { label: "Progress 进度条", href: "/progress" },
    ],
  },
]

/* ─── DATA ─── */

const colorTokens = [
  { name: "Primary", variable: "--primary", light: "oklch(0 0 0)", dark: "oklch(0.9 0 0)", desc: "#000000 — primary action / emphasis" },
  { name: "Background", variable: "--background", light: "oklch(1 0 0)", dark: "oklch(0.12 0 0)", desc: "Page background" },
  { name: "Foreground", variable: "--foreground", light: "oklch(0.12 0 0)", dark: "oklch(0.95 0 0)", desc: "Primary text color" },
  { name: "Card", variable: "--card", light: "oklch(1 0 0)", dark: "oklch(0.16 0 0)", desc: "Card / elevated surface" },
  { name: "Secondary", variable: "--secondary", light: "oklch(0.96 0 0)", dark: "oklch(0.2 0 0)", desc: "Secondary surface" },
  { name: "Muted", variable: "--muted", light: "oklch(0.97 0 0)", dark: "oklch(0.2 0 0)", desc: "Muted background" },
  { name: "Border", variable: "--border", light: "oklch(0.88 0 0)", dark: "oklch(0.25 0 0)", desc: "Default border" },
  { name: "Input", variable: "--input", light: "oklch(0.88 0 0)", dark: "oklch(0.25 0 0)", desc: "Input border" },
  { name: "Destructive", variable: "--destructive", light: "oklch(0.58 0.24 27)", dark: "oklch(0.7 0.19 27)", desc: "Error / destructive" },
  { name: "Ring", variable: "--ring", light: "oklch(0 0 0)", dark: "oklch(0.9 0 0)", desc: "Focus ring" },
  { name: "Accent", variable: "--accent", light: "oklch(0.97 0 0)", dark: "oklch(0.2 0 0)", desc: "Accent surface" },
  { name: "Popover", variable: "--popover", light: "oklch(1 0 0)", dark: "oklch(0.16 0 0)", desc: "Popover / dropdown bg" },
]

interface ChatMessage { id: string; role: "user" | "assistant"; content: string }

/* ═══════════════════════════════════════
   SIDEBAR
   ═══════════════════════════════════════ */

function SidebarNav() {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname

  return (
    <ScrollArea className="flex-1">
      <nav className="flex flex-col gap-0 p-2">
        {sidebarGroups.map((group) => (
          <SidebarGroup key={group.label} group={group} level={0} active={path} navigate={navigate} />
        ))}
      </nav>
    </ScrollArea>
  )
}

function SidebarGroup({
  group,
  level,
  active,
  navigate,
}: {
  group: NavGroup
  level: number
  active: string
  navigate: ReturnType<typeof useNavigate>
}) {
  const [open, setOpen] = useState(group.defaultOpen ?? false)
  const Icon = group.icon

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center gap-1.5 rounded px-2 py-1 text-sm transition-colors ${
          level === 0 ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {Icon && level === 0 && <Icon className="h-3.5 w-3.5 text-muted-foreground" />}
        <span className="flex-1 truncate text-left">{group.label}</span>
        <ChevronDown className={`h-3 w-3 shrink-0 text-muted-foreground transition-transform ${open ? "" : "-rotate-90"}`} />
      </button>
      {open && (
        <div className={level === 0 ? "ml-3.5 border-l pl-2" : "ml-3"}>
          {group.children.map((child) =>
            isGroup(child) ? (
              <SidebarGroup key={child.label} group={child} level={level + 1} active={active} navigate={navigate} />
            ) : (
              <button
                key={child.label}
                onClick={() => navigate(child.href)}
                className={`block w-full truncate rounded px-2 py-1 text-left text-sm transition-colors ${
                  active === child.href
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {child.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
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
  return (
    <div className="space-y-8">
      <PageTitle title="Overview" desc="A minimal, high-contrast design system for AI chat interfaces — black primary, clean typography, shadcn/ui components." />
      <HeroIllustration type="overview" className="mt-4" />
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["12 Color Tokens", "OKLCH palette, light & dark variants"],
          ["20+ Components", "Base UI primitives, fully accessible"],
          ["AI Chat Ready", "Bubbles, avatars, streaming indicators"],
        ].map(([t, d]) => (
          <Card key={t}><CardHeader className="pb-2"><CardTitle className="text-base font-medium">{t}</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">{d}</p></CardContent></Card>
        ))}
      </div>
      <div className="rounded-md border bg-muted/20 p-4">
        <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Stack:</span> Tailwind CSS v4 &middot; shadcn/ui &middot; Lucide React &middot; Base UI &middot; OKLCH</p>
      </div>
    </div>
  )
}

function ColorsPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Colors" desc="Semantic tokens. Primary: #000000. All values in OKLCH." />
      <HeroIllustration type="colors" className="mt-4" />
      <div className="space-y-1">
        {colorTokens.map((t) => (
          <div key={t.name} className="flex items-center gap-3 rounded-md border p-2.5">
            <div className="h-10 w-10 shrink-0 rounded border" style={{ background: `var(${t.variable})` }} />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium">{t.name}</span>
                <code className="text-xs text-muted-foreground">{t.variable}</code>
              </div>
              <p className="text-xs text-muted-foreground">{t.desc}</p>
            </div>
            <code className="hidden shrink-0 text-right text-xs text-muted-foreground leading-relaxed sm:block">{t.light}<br />{t.dark}</code>
          </div>
        ))}
      </div>
    </div>
  )
}

function TypographyPage() {
  const samples = [
    { label: "text-xl / font-semibold", cls: "text-xl font-semibold tracking-tight", text: "Heading 1 — The quick brown fox" },
    { label: "text-lg / font-medium", cls: "text-lg font-medium", text: "Heading 2 — The quick brown fox" },
    { label: "text-base / font-medium", cls: "text-base font-medium", text: "Heading 3 — The quick brown fox" },
    { label: "text-base (body)", cls: "text-base", text: "Body — The quick brown fox jumps over the lazy dog." },
    { label: "text-sm / muted", cls: "text-sm text-muted-foreground", text: "Caption — Secondary labels and metadata." },
    { label: "text-xs", cls: "text-xs text-muted-foreground", text: "Extra small — Auxiliary text and footnotes." },
  ]
  return (
    <div className="space-y-6">
      <PageTitle title="Typography" desc="Geist Variable + system font stack. Weight and size only." />
      <HeroIllustration type="typography" className="mt-4" />
      {samples.map((s) => (
        <div key={s.label}><p className="mb-1 text-xs text-muted-foreground">{s.label}</p><p className={s.cls}>{s.text}</p></div>
      ))}
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

function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "1", role: "assistant", content: "Hi! I'm your AI assistant. How can I help you today?" },
    { id: "2", role: "user", content: "Show me the design system color tokens." },
    { id: "3", role: "assistant", content: "Primary is #000000. 12 semantic tokens — all in OKLCH. Light & dark mode supported." },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)
  useEffect(() => { listRef.current?.scrollTo(0, listRef.current.scrollHeight) }, [messages, typing])

  function send(e: FormEvent) {
    e.preventDefault()
    if (!input.trim() || typing) return
    setMessages((p) => [...p, { id: crypto.randomUUID(), role: "user", content: input.trim() }])
    setInput("")
    setTyping(true)
    setTimeout(() => {
      const replies = ["The design system uses 12 semantic color tokens.", "All components are Base UI primitives.", "Black primary = max contrast in both modes.", "Customize via CSS variables — no config files."]
      setMessages((p) => [...p, { id: crypto.randomUUID(), role: "assistant", content: replies[Math.floor(Math.random() * replies.length)] }])
      setTyping(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <PageTitle title="AI Chat 演示" desc="Live chat demo. Components: Card, Avatar, Input, Button, ScrollArea, Tooltip." />
      <HeroIllustration type="chat" className="mt-4" />
      <Card className="overflow-hidden">
        <div className="flex items-center gap-3 border-b bg-muted/20 px-4 py-2.5">
          <Avatar size="sm"><AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-3.5 w-3.5" /></AvatarFallback></Avatar>
          <div><p className="text-sm font-medium">AI Assistant</p><p className="text-xs text-muted-foreground">Online &middot; Claude</p></div>
        </div>
        <ScrollArea ref={listRef} className="h-72 px-4 py-4">
          <div className="space-y-4">
            {messages.map((m) => {
              const isUser = m.role === "user"
              return (
                <div key={m.id} className={`flex gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}>
                  <Avatar size="sm"><AvatarFallback className={isUser ? "bg-primary text-primary-foreground" : "bg-secondary"}>{isUser ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}</AvatarFallback></Avatar>
                  <div className={`max-w-[80%] rounded-md px-3 py-2 text-sm leading-relaxed ${isUser ? "bg-primary text-primary-foreground" : "bg-muted"}`}>{m.content}</div>
                </div>
              )
            })}
            {typing && (
              <div className="flex gap-2.5">
                <Avatar size="sm"><AvatarFallback className="bg-secondary"><Bot className="h-3.5 w-3.5" /></AvatarFallback></Avatar>
                <div className="flex items-center gap-1 rounded-md bg-muted px-3 py-2.5">
                  {[0, 150, 300].map((ms) => (<span key={ms} className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/30" style={{ animationDelay: `${ms}ms` }} />))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <form onSubmit={send} className="flex gap-2 border-t px-4 py-3">
          <Input placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} disabled={typing} className="flex-1" />
          <TooltipProvider><Tooltip><TooltipTrigger render={<Button type="submit" size="icon" disabled={!input.trim() || typing}><Send className="h-4 w-4" /></Button>} /><TooltipContent><p>Send</p></TooltipContent></Tooltip></TooltipProvider>
        </form>
      </Card>
    </div>
  )
}

/* ═══════════════════════════════════════
   MOBILE HEADER
   ═══════════════════════════════════════ */

function MobileHeader() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b bg-background px-3 py-2.5 lg:hidden">
      <Sheet>
        <SheetTrigger render={<Button variant="ghost" size="icon" className="h-8 w-8"><Menu className="h-4 w-4" /></Button>} />
        <SheetContent side="left" className="w-60 p-0">
          <div className="flex items-center gap-2 border-b px-4 py-3 text-sm font-semibold"><Sparkles className="h-4 w-4" />Design System</div>
          <SidebarNav />
        </SheetContent>
      </Sheet>
      <span className="text-sm font-semibold">DS</span>
      <ThemeToggle />
    </header>
  )
}

/* ═══════════════════════════════════════
   LAYOUT (always visible: sidebar + header)
   ═══════════════════════════════════════ */

function AppLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden w-56 shrink-0 border-r bg-card lg:flex lg:flex-col">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-semibold tracking-tight">Design System</span>
          <span className="ml-auto text-xs text-muted-foreground">v1.0</span>
        </div>
        <SidebarNav />
        <div className="border-t px-3 py-2.5 flex items-center justify-between">
          <ThemeToggle />
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground"><ExternalLink className="h-4 w-4" /></a>
        </div>
      </aside>

      {/* Mobile header */}
      <MobileHeader />

      {/* Main content — routed pages */}
      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-4xl px-5 py-8 lg:px-10 lg:py-10">
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/colors" element={<ColorsPage />} />
            <Route path="/typography" element={<TypographyPage />} />
            <Route path="/button" element={<ButtonPage />} />
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
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
