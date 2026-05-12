import { useEffect, useState } from "react"
import { DemoBox } from "@/components/layout/DemoBox"
import { HeroIllustration } from "@/components/HeroIllustration"
import { Label } from "@/components/ui/label"
import { PageTitle } from "@/components/layout/PageTitle"
import { Progress } from "@/components/ui/progress"

export function ProgressPage() {
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
