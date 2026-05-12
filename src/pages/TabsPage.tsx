import { DemoBox } from "@/components/layout/DemoBox"
import { HeroIllustration } from "@/components/HeroIllustration"
import { Info } from "lucide-react"
import { PageTitle } from "@/components/layout/PageTitle"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Tabs 标签页" desc="Switch between views in the same context." />
      <HeroIllustration type="tabs" className="mt-4" />
      <DemoBox>
        <Tabs defaultValue="a">
          <TabsList><TabsTrigger value="a">Overview</TabsTrigger><TabsTrigger value="b">Settings</TabsTrigger><TabsTrigger value="c">Info</TabsTrigger></TabsList>
          <TabsContent value="a" className="mt-3 rounded-md border p-3 text-sm text-muted-foreground">Overview content.</TabsContent>
          <TabsContent value="b" className="mt-3 rounded-md border p-3 text-sm text-muted-foreground">Settings content.</TabsContent>
          <TabsContent value="c" className="mt-3 rounded-md border p-3 text-sm text-muted-foreground">Info content.</TabsContent>
        </Tabs>
      </DemoBox>
    </div>
  )
}
