"use client"

import React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import data from "./data.json"

import { ChartPieInteractive } from "@/components/chart-pie-interactive"
import { ChartBarInteractive } from "@/components/chart-bar-interactive"
import { DatePicker } from "@/components/ui/date-picker"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-6 py-6 md:gap-8 md:py-8">
              <div className="flex flex-col gap-4 px-4 lg:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">Main Dashboard</h2>
                    <p className="text-muted-foreground">Welcome back! Here&apos;s what&apos;s happening today.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center space-x-2">
                       <Switch id="realtime-mode" />
                       <Label htmlFor="realtime-mode" className="text-sm font-medium">Real-time</Label>
                    </div>
                    <DatePicker />
                  </div>
                </div>
              </div>
              <SectionCards />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-6">
                <div className="lg:col-span-2">
                  <ChartAreaInteractive />
                </div>
                <div className="lg:col-span-1">
                  <ChartPieInteractive />
                </div>
              </div>
              <div className="px-4 lg:px-6">
                <ChartBarInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
