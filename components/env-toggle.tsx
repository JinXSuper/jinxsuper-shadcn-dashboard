"use client"

import * as React from "react"
import { MonitorIcon, ShieldCheckIcon, TerminalIcon, ChevronDownIcon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const environments = [
  { name: "Production", icon: <ShieldCheckIcon className="size-4 text-green-500" />, color: "border-green-500/20" },
  { name: "Staging", icon: <MonitorIcon className="size-4 text-orange-500" />, color: "border-orange-500/20" },
  { name: "Development", icon: <TerminalIcon className="size-4 text-blue-500" />, color: "border-blue-500/20" },
]

export function EnvToggle() {
  const [activeEnv, setActiveEnv] = React.useState(environments[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className={activeEnv.color}>
              {activeEnv.icon}
              <span className="font-medium">{activeEnv.name}</span>
              <ChevronDownIcon className="ml-auto size-4 opacity-50" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48 rounded-lg">
            {environments.map((env) => (
              <DropdownMenuItem key={env.name} onClick={() => setActiveEnv(env)}>
                {env.icon}
                <span>{env.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
