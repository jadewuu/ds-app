import { Button } from "@/components/ui/button"
import { DemoBox } from "@/components/layout/DemoBox"
import { Heart, Search } from "lucide-react"
import { HeroIllustration } from "@/components/HeroIllustration"
import { PageTitle } from "@/components/layout/PageTitle"

export function ButtonPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Button 按钮" desc="Trigger an action. 6 variants, 3 sizes, icon support." />
      <HeroIllustration type="button" className="mt-4" />
      <DemoBox title="Variants">
        <div className="flex flex-wrap items-end gap-2">
          {(["default", "secondary", "outline", "ghost", "destructive", "link"] as const).map((v) => (
            <Button key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Button>
          ))}
        </div>
      </DemoBox>
      <DemoBox title="Sizes">
        <div className="flex flex-wrap items-end gap-2">
          {(["sm", "default", "lg"] as const).map((s) => (<Button key={s} size={s}>{s}</Button>))}
        </div>
      </DemoBox>
      <DemoBox title="States">
        <div className="flex flex-wrap items-center gap-2">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" size="icon"><Heart className="h-4 w-4" /></Button>
          <Button variant="outline"><Search className="mr-1.5 h-4 w-4" />With Icon</Button>
        </div>
      </DemoBox>
    </div>
  )
}
