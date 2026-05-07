import {
  Sparkles,
  Palette,
  Type,
  MousePointerClick,
  User,
  Tag,
  CreditCard,
  LayoutPanelTop,
  Info,
  Box,
  Pencil,
  List,
  ToggleLeft,
  SlidersHorizontal,
  BarChart3,
  MessageCircle,
} from "lucide-react"

export type HeroType =
  | "overview"
  | "colors"
  | "typography"
  | "button"
  | "avatar"
  | "badge"
  | "card"
  | "tabs"
  | "tooltip"
  | "skeleton"
  | "input"
  | "select"
  | "switch"
  | "slider"
  | "progress"
  | "chat"

interface Props {
  type: HeroType
  className?: string
}

const LABEL_MAP: Record<HeroType, string> = {
  overview: "Overview",
  colors: "Color Palette",
  typography: "Typography",
  button: "Button",
  avatar: "Avatar",
  badge: "Badge",
  card: "Card",
  tabs: "Tabs",
  tooltip: "Tooltip",
  skeleton: "Skeleton",
  input: "Input",
  select: "Select",
  switch: "Switch",
  slider: "Slider",
  progress: "Progress",
  chat: "AI Chat",
}

const ICON_MAP: Record<HeroType, React.ElementType> = {
  overview: Sparkles,
  colors: Palette,
  typography: Type,
  button: MousePointerClick,
  avatar: User,
  badge: Tag,
  card: CreditCard,
  tabs: LayoutPanelTop,
  tooltip: Info,
  skeleton: Box,
  input: Pencil,
  select: List,
  switch: ToggleLeft,
  slider: SlidersHorizontal,
  progress: BarChart3,
  chat: MessageCircle,
}

export function HeroIllustration({ type, className }: Props) {
  const Icon = ICON_MAP[type]
  const label = LABEL_MAP[type]

  return (
    <div className={`flex flex-col items-center justify-center gap-3 py-8 border-b border-border bg-muted/30 ${className ?? ""}`}>
      <Icon className="h-12 w-12 text-primary/30" strokeWidth={1} />
      <span className="text-[11px] font-semibold tracking-[0.05em] uppercase text-muted-foreground">{label}</span>
    </div>
  )
}
