import { DemoBox } from "@/components/layout/DemoBox"
import { HeroIllustration } from "@/components/HeroIllustration"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PageTitle } from "@/components/layout/PageTitle"
import { Search } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export function InputPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Input 输入框" desc="Text field. Label, placeholder, disabled, icon slots." />
      <HeroIllustration type="input" className="mt-4" />
      <DemoBox>
        <div className="grid max-w-sm gap-4">
          <div className="space-y-1.5"><Label htmlFor="inp-label">Label</Label><Input id="inp-label" placeholder="Placeholder..." /></div>
          <div className="space-y-1.5"><Label htmlFor="inp-disabled">Disabled</Label><Input id="inp-disabled" placeholder="Disabled" disabled /></div>
          <div className="space-y-1.5">
            <Label htmlFor="inp-icon">With Icon</Label>
            <div className="relative"><Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" /><Input id="inp-icon" placeholder="Search..." className="pl-9" /></div>
          </div>
          <div className="space-y-1.5"><Label htmlFor="inp-textarea">Textarea</Label><Textarea id="inp-textarea" placeholder="Write something..." /></div>
        </div>
      </DemoBox>
    </div>
  )
}
