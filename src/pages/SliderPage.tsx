import { useState } from "react"
import { DemoBox } from "@/components/layout/DemoBox"
import { HeroIllustration } from "@/components/HeroIllustration"
import { Label } from "@/components/ui/label"
import { PageTitle } from "@/components/layout/PageTitle"
import { Select } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function SliderPage() {
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
