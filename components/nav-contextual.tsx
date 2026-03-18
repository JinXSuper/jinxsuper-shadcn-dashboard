"use client"

import * as React from "react"
import { SparklesIcon, ZapIcon, ClockIcon, LayoutDashboardIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

export function NavContextual() {
  const [mounted, setMounted] = React.useState(false)
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <SidebarGroup>
        <SidebarGroupLabel className="flex items-center gap-2">
          <SparklesIcon className="size-3 text-purple-500" />
          <span>Contextual Home</span>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="h-20 animate-pulse bg-muted/20 rounded-md mx-2" />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    )
  }

  const hour = time.getHours()
  
  const getContextItems = () => {
    if (hour < 12) {
      return [
        { title: "Daily Briefing", icon: <SparklesIcon className="size-4" />, url: "#", badge: "New" },
        { title: "Morning Analytics", icon: <ZapIcon className="size-4" />, url: "#" },
      ]
    } else if (hour < 18) {
      return [
        { title: "Mid-day Report", icon: <LayoutDashboardIcon className="size-4" />, url: "#" },
        { title: "Focus Mode", icon: <ZapIcon className="size-4" />, url: "#", badge: "Active" },
      ]
    } else {
      return [
        { title: "Day Summary", icon: <ClockIcon className="size-4" />, url: "#" },
        { title: "Evening Review", icon: <SparklesIcon className="size-4" />, url: "#" },
      ]
    }
  }

  const items = getContextItems()

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="flex items-center gap-2">
        <SparklesIcon className="size-3 text-purple-500" />
        <span>Contextual Home</span>
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <a href={item.url}>
                  {item.icon}
                  <span className="flex-1">{item.title}</span>
                  {item.badge && (
                    <Badge variant="outline" className="ml-auto h-5 px-1.5 text-[10px] bg-purple-500/10 text-purple-500 border-purple-500/20">
                      {item.badge}
                    </Badge>
                  )}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
