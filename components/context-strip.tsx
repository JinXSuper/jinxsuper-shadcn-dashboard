"use client"

import * as React from "react"
import { ZapIcon, ClockIcon, AlertCircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function ContextStrip() {
  return (
    <div className="mx-2 my-2 flex items-center gap-2 rounded-md bg-muted/40 p-2 text-[10px] font-medium transition-colors hover:bg-muted/60">
      <div className="flex items-center gap-1.5 border-r pr-2">
        <ZapIcon className="size-3 text-orange-400" />
        <span className="whitespace-nowrap uppercase tracking-wider text-muted-foreground">Sprint 24</span>
      </div>
      <div className="flex flex-1 items-center gap-1.5 overflow-hidden">
        <ClockIcon className="size-3 shrink-0 text-blue-400" />
        <span className="truncate text-muted-foreground">Deadline: 2 days left</span>
      </div>
      <div className="flex items-center gap-1 animate-pulse">
        <div className="size-1.5 rounded-full bg-green-500" />
        <span className="text-green-500 uppercase tracking-tighter">Live</span>
      </div>
    </div>
  )
}
