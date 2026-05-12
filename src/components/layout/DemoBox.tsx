export function DemoBox({ title, desc, children }: { title?: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2.5">
      {(title || desc) && (
        <div>
          {title && <h3 className="text-sm font-medium">{title}</h3>}
          {desc && <p className="text-xs text-muted-foreground">{desc}</p>}
        </div>
      )}
      <div className="rounded-md border bg-card p-4">{children}</div>
    </div>
  )
}
