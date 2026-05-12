import { useState } from "react"
import { DemoBox } from "@/components/layout/DemoBox"
import { HeroIllustration } from "@/components/HeroIllustration"
import { Label } from "@/components/ui/label"
import { PageTitle } from "@/components/layout/PageTitle"
import { Switch } from "@/components/ui/switch"

export function SwitchPage() {
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
