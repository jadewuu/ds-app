import { DemoBox } from "@/components/layout/DemoBox"
import { HeroIllustration } from "@/components/HeroIllustration"
import { Label } from "@/components/ui/label"
import { PageTitle } from "@/components/layout/PageTitle"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SelectPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Select 选择器" desc="Choose from a dropdown list." />
      <HeroIllustration type="select" className="mt-4" />
      <DemoBox>
        <div className="space-y-1.5">
          <Label>Select</Label>
          <Select>
            <SelectTrigger className="w-44"><SelectValue placeholder="Choose..." /></SelectTrigger>
            <SelectContent><SelectItem value="a">Option A</SelectItem><SelectItem value="b">Option B</SelectItem><SelectItem value="c">Option C</SelectItem></SelectContent>
          </Select>
        </div>
      </DemoBox>
    </div>
  )
}
