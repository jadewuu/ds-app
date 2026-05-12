import { Button } from "@/components/ui/button"
import { Copy, Heart, Info } from "lucide-react"
import { DemoBox } from "@/components/layout/DemoBox"
import { HeroIllustration } from "@/components/HeroIllustration"
import { PageTitle } from "@/components/layout/PageTitle"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function TooltipPage() {
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
