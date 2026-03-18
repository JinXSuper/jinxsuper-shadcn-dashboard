"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronLeftIcon, ChevronRightIcon, HistoryIcon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Documents</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-0.5 border rounded-md p-0.5 bg-muted/20">
            <Button 
                variant="ghost" 
                size="icon" 
                className="size-7"
                onClick={() => toast.info("Navigating to previous sibling: Sprint 23")}
                title="Previous Sibling"
            >
              <ChevronLeftIcon className="size-4" />
            </Button>
            <Separator orientation="vertical" className="h-4" />
            <Button 
                variant="ghost" 
                size="icon" 
                className="size-7"
                onClick={() => toast.info("Navigating to next sibling: Sprint 25")}
                title="Next Sibling"
            >
              <ChevronRightIcon className="size-4" />
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="size-8" title="Recent History">
                <HistoryIcon className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => toast.info("History: Sprint 24 Overview")}>
                Sprint 24 Overview
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.info("History: Team Analytics")}>
                Team Analytics
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.info("History: Billing Settings")}>
                Billing Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
