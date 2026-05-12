import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, Sparkles } from "lucide-react"
import { SidebarNav } from "./SidebarNav"
import { ThemeToggle } from "./ThemeToggle"

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/90 backdrop-blur-xl px-4 lg:px-8 h-20">
      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger render={<Button variant="ghost" size="icon" className="h-8 w-8 lg:hidden"><Menu className="h-4 w-4" /></Button>} />
        <SheetContent side="left" className="w-72 p-0">
          <div className="flex items-center gap-2 border-b border-border px-5 py-4">
            <Sparkles className="h-4 w-4 text-primary/60" />
            <span className="text-sm font-semibold tracking-tight">Proton design</span>
            <span className="ml-auto text-[10px] font-bold tracking-[0.05em] uppercase bg-primary-container text-foreground px-2 py-0.5">V1.0</span>
          </div>
          <SidebarNav />
        </SheetContent>
      </Sheet>

      {/* Brand */}
      <div className="flex items-center gap-3">
        <Sparkles className="hidden h-4 w-4 text-primary/60 lg:block" />
        <span className="text-sm font-bold tracking-tight lg:text-base">Proton design</span>
        <span className="text-[10px] font-bold tracking-[0.05em] uppercase bg-primary-container text-foreground px-2 py-0.5">V1.0</span>
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
