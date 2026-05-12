import { Badge } from "@/components/ui/badge"
import { DemoBox } from "@/components/layout/DemoBox"
import { HeroIllustration } from "@/components/HeroIllustration"
import { PageTitle } from "@/components/layout/PageTitle"

export function BadgePage() {
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
