import { Separator } from "@/components/ui/separator"

export function PageTitle({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="space-y-1.5">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {desc && <p className="text-sm text-muted-foreground">{desc}</p>}
      <Separator className="mt-3" />
    </div>
  )
}
