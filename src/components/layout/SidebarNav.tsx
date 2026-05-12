import { useNavigate, useLocation } from "react-router-dom"
import { Blocks, Info, Layers, LayoutGrid, Palette } from "lucide-react"

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

export function SidebarNav() {
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
