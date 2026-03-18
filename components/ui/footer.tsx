"use client"

import React from "react"
import Link from "next/link"
import { ExternalLinkIcon, ShieldCheckIcon, HeartIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import GlassSurface from "@/components/ui/glass-surface"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto px-4 lg:px-6 pb-8 pt-4">
      <GlassSurface
        blur={12}
        borderRadius={16}
        className="border border-foreground/5 p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
      >
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            Built By <span className="text-orange-500">JinXSuper Developer</span>
          </div>
          <Separator className="hidden md:block h-3 w-px bg-muted-foreground/20" />
          <Link
            href="https://jinxsuperdev.vercel.app"
            target="_blank"
            className="flex items-center gap-1 transition-colors hover:text-foreground"
          >
            jinxsuper.vercel.app <ExternalLinkIcon className="size-3" />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider">
            <ShieldCheckIcon className="size-3" />
            All Systems Operational
          </div>
          <div className="flex items-center gap-1">
            Made with Shadcn and Radix in 2026
          </div>
          <div className="hidden sm:block opacity-50">
            © {currentYear} JinXSuper
          </div>
        </div>
      </GlassSurface>
    </footer>
  )
}

function Separator({ className }: { className?: string }) {
  return <div className={cn(className)} />
}
