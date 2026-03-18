"use client"

import * as React from "react"
import { FilterIcon, HashIcon, StarIcon, BookmarkIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const filters = [
  { title: "High Priority", icon: <StarIcon className="size-4 text-orange-400" />, url: "#" },
  { title: "Needs Review", icon: <BookmarkIcon className="size-4 text-blue-400" />, url: "#" },
  { title: "By Region", icon: <HashIcon className="size-4 text-green-400" />, url: "#" },
]

export function NavFilters() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="flex items-center gap-2">
        <FilterIcon className="size-3 text-blue-500" />
        <span>Saved Filters</span>
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {filters.map((filter) => (
            <SidebarMenuItem key={filter.title}>
              <SidebarMenuButton asChild tooltip={filter.title}>
                <a href={filter.url}>
                  {filter.icon}
                  <span>{filter.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
