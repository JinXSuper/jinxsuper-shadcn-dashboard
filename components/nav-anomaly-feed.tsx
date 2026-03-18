"use client"

import * as React from "react"
import { ActivityIcon, AlertTriangleIcon, InfoIcon, ShieldAlertIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

const initialAnomalies = [
  { id: 1, type: "spike", label: "Traffic Spike", value: "+45%", time: "2m ago", level: "warning" },
  { id: 2, type: "error", label: "Error Rate", value: "2.4%", time: "5m ago", level: "critical" },
  { id: 3, type: "latency", label: "Latency", value: "450ms", time: "12m ago", level: "info" },
]

export function NavAnomalyFeed() {
  const [anomalies, setAnomalies] = React.useState(initialAnomalies)

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="flex items-center gap-2">
        <ActivityIcon className="size-3 text-orange-500" />
        <span>Anomaly Detection</span>
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {anomalies.map((anomaly) => (
            <SidebarMenuItem key={anomaly.id}>
              <div className="px-2 py-1.5 flex flex-col gap-1 hover:bg-muted/40 rounded-lg transition-colors cursor-default group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {anomaly.level === "critical" ? (
                      <ShieldAlertIcon className="size-3.5 text-red-500" />
                    ) : anomaly.level === "warning" ? (
                      <AlertTriangleIcon className="size-3.5 text-orange-500" />
                    ) : (
                      <InfoIcon className="size-3.5 text-blue-500" />
                    )}
                    <span className="text-xs font-semibold">{anomaly.label}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">{anomaly.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "text-[11px] font-mono font-bold px-1.5 py-0.5 rounded",
                    anomaly.level === "critical" ? "bg-red-500/10 text-red-500" :
                    anomaly.level === "warning" ? "bg-orange-500/10 text-orange-500" :
                    "bg-blue-500/10 text-blue-500"
                  )}>
                    {anomaly.value}
                  </span>
                  <div className="h-1 w-12 bg-muted/30 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full animate-pulse",
                        anomaly.level === "critical" ? "bg-red-500" :
                        anomaly.level === "warning" ? "bg-orange-500" :
                        "bg-blue-500"
                      )} 
                      style={{ width: '70%' }} 
                    />
                  </div>
                </div>
              </div>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
