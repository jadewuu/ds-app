import { Avatar } from "@/components/ui/avatar"
import { AvatarFallback } from "@/components/ui/avatarfallback"
import { DemoBox } from "@/components/layout/DemoBox"
import { HeroIllustration } from "@/components/HeroIllustration"
import { PageTitle } from "@/components/layout/PageTitle"
import { User } from "lucide-react"

export function AvatarPage() {
  return (
    <div className="space-y-6">
      <PageTitle title="Avatar 头像" desc="User or entity representation. Image, fallback, size variants." />
      <HeroIllustration type="avatar" className="mt-4" />
      <DemoBox>
        <div className="flex flex-wrap items-center gap-3">
          <Avatar size="sm"><AvatarFallback className="bg-secondary text-xs">CN</AvatarFallback></Avatar>
          <Avatar><AvatarFallback className="bg-primary text-primary-foreground text-sm">AI</AvatarFallback></Avatar>
          <Avatar size="lg"><AvatarFallback className="bg-secondary text-lg">JD</AvatarFallback></Avatar>
        </div>
      </DemoBox>
    </div>
  )
}
