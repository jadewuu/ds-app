import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CardContent } from "@/components/ui/cardcontent"
import { CardDescription } from "@/components/ui/carddescription"
import { CardHeader } from "@/components/ui/cardheader"
import { CardTitle } from "@/components/ui/cardtitle"
import { DemoBox } from "@/components/layout/DemoBox"
import { HeroIllustration } from "@/components/HeroIllustration"
import { Info } from "lucide-react"
import { PageTitle } from "@/components/layout/PageTitle"

export function CardPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Card 卡片" desc="Container with header, content, and footer." />
      <HeroIllustration type="card" className="mt-4" />
      <DemoBox>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader><CardTitle className="text-base">Basic Card</CardTitle><CardDescription>With description</CardDescription></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Body content.</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base">Metrics</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {[{ k: "Response", v: "124ms" }, { k: "Accuracy", v: "97.3%" }, { k: "Tokens/s", v: "42.1" }].map((r) => (
                <div key={r.k} className="flex items-center justify-between text-sm"><span className="text-muted-foreground">{r.k}</span><span className="font-mono font-medium">{r.v}</span></div>
              ))}
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-center py-6 text-center">
            <Info className="mb-2 h-5 w-5 text-muted-foreground" />
            <p className="text-sm font-medium">Upgrade</p>
            <p className="text-xs text-muted-foreground">Get more features</p>
            <Button size="sm" className="mt-3">Upgrade</Button>
          </Card>
        </div>
      </DemoBox>
    </div>
  )
}
