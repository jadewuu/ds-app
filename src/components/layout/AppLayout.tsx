import { Routes, Route } from "react-router-dom"
import { TopBar } from "./TopBar"
import { SidebarNav } from "./SidebarNav"
import { OverviewPage } from "@/pages/OverviewPage"
import { FoundationsPage } from "@/pages/FoundationsPage"
import { LayoutPage } from "@/pages/LayoutPage"
import { ComponentsPage } from "@/pages/ComponentsPage"
import { ButtonPage } from "@/pages/ButtonPage"
import { AvatarPage } from "@/pages/AvatarPage"
import { BadgePage } from "@/pages/BadgePage"
import { CardPage } from "@/pages/CardPage"
import { TabsPage } from "@/pages/TabsPage"
import { TooltipPage } from "@/pages/TooltipPage"
import { SkeletonPage } from "@/pages/SkeletonPage"
import { InputPage } from "@/pages/InputPage"
import { SelectPage } from "@/pages/SelectPage"
import { SwitchPage } from "@/pages/SwitchPage"
import { SliderPage } from "@/pages/SliderPage"
import { ProgressPage } from "@/pages/ProgressPage"
import { PatternsPage } from "@/pages/PatternsPage"

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />

      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <aside className="hidden w-72 shrink-0 border-r border-border bg-background lg:flex lg:flex-col sticky top-20 h-[calc(100vh-5rem)]">
          <SidebarNav />
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
