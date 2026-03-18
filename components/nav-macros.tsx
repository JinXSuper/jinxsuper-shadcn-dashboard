"use client"

import * as React from "react"
import { ZapIcon, ArchiveIcon, UserPlusIcon, Trash2Icon, FileOutputIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { toast } from "sonner"

const macros = [
  { title: "Archive Finished", icon: <ArchiveIcon className="size-4" />, action: "Archive" },
  { title: "Assign to Me", icon: <UserPlusIcon className="size-4" />, action: "Assign" },
  { title: "Export Weekly", icon: <FileOutputIcon className="size-4" />, action: "Export" },
]

export function NavMacros() {
  const handleTrigger = (name: string) => {
    toast.success(`Macro triggered: ${name}`)
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="flex items-center gap-2">
        <ZapIcon className="size-3 text-orange-400" />
        <span>Macro Actions</span>
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {macros.map((macro) => (
            <SidebarMenuItem key={macro.title}>
              <SidebarMenuButton 
                onClick={() => handleTrigger(macro.title)}
                tooltip={`Run ${macro.title}`}
              >
                {macro.icon}
                <span>{macro.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
