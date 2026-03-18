"use client"

import * as React from "react"
import { TrendingUpIcon, BarChart3Icon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const forecastData = [
  { label: "Quota", value: "85%", trend: [20, 35, 45, 40, 60, 75, 85], color: "text-orange-500" },
  { label: "Traffic", value: "1.2M", trend: [60, 50, 70, 90, 80, 100, 120], color: "text-white" },
  { label: "Revenue", value: "$4.2k", trend: [10, 20, 15, 30, 45, 50, 42], color: "text-green-500" },
]

export function NavForecast() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="flex items-center gap-2">
        <TrendingUpIcon className="size-3 text-green-500" />
        <span>7-Day Forecast</span>
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="px-2 pt-2 flex flex-col gap-3">
          {forecastData.map((item) => (
            <SidebarMenuItem key={item.label} className="flex flex-col gap-1">
              <div className="flex items-center justify-between text-xs px-1">
                <span className="text-muted-foreground font-medium backdrop-blur-sm px-1 rounded">{item.label}</span>
                <span className={item.color + " font-bold backdrop-blur-sm px-1 rounded"}>{item.value}</span>
              </div>
              <div className="flex items-end gap-[2px] h-8 px-1">
                {item.trend.map((point, i) => (
                  <div 
                    key={i} 
                    className={cn(
                        "flex-1 rounded-t-sm transition-colors backdrop-blur-md",
                        item.color.replace("text-", "bg-") + "/40",
                        "hover:" + item.color.replace("text-", "bg-") + "/60"
                    )}
                    style={{ height: `${(point / 120) * 100}%` }}
                  />
                ))}
              </div>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
