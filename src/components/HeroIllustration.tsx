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

  return (
    <div className={`flex h-28 items-center justify-center rounded-lg bg-primary/5 ${className ?? ""}`}>
      <Icon className="h-10 w-10 text-primary/35" strokeWidth={1.5} />
    </div>
  )
}
