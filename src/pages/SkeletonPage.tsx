import { DemoBox } from "@/components/layout/DemoBox"
import { HeroIllustration } from "@/components/HeroIllustration"
import { PageTitle } from "@/components/layout/PageTitle"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Skeleton 骨架屏" desc="Loading placeholder for content areas." />
      <HeroIllustration type="skeleton" className="mt-4" />
      <DemoBox>
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-1.5"><Skeleton className="h-4 w-36" /><Skeleton className="h-3 w-52" /></div>
        </div>
      </DemoBox>
    </div>
  )
}
