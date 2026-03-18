"use client"

import React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import GlassSurface from "@/components/ui/glass-surface"
import { cn } from "@/lib/utils"
import { UsersIcon, UserPlusIcon, SearchIcon, MoreHorizontalIcon, ShieldIcon } from "lucide-react"
import { Input } from "@/components/ui/input"

const teamMembers = [
  { name: "JinXSuper", email: "jinxsuperdev@gmail.com", role: "Owner", status: "Active", lastActive: "Just now" },
  { name: "Rina Sari", email: "rina@example.com", role: "Manager", status: "Active", lastActive: "3m ago" },
  { name: "Budi Pratama", email: "budi@example.com", role: "Developer", status: "Away", lastActive: "15m ago" },
  { name: "Alice Johnson", email: "alice@example.com", role: "Designer", status: "Offline", lastActive: "2h ago" },
  { name: "Charlie Smith", email: "charlie@example.com", role: "Developer", status: "Active", lastActive: "10m ago" },
]

export default function TeamPage() {
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
        <div className="flex flex-1 flex-col p-4 lg:p-6 gap-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Team Management</h2>
                <p className="text-muted-foreground font-medium">Manage your team members and their access levels.</p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 shadow-lg shadow-orange-500/20">
                <UserPlusIcon className="mr-2 size-4" />
                Invite Member
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             <GlassSurface className="p-4 flex items-center gap-4">
                <div className="size-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <UsersIcon className="size-5 text-orange-500" />
                </div>
                <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-tighter">Total Seats</p>
                    <p className="text-xl font-bold">12 / 20</p>
                </div>
             </GlassSurface>
             <GlassSurface className="p-4 flex items-center gap-4">
                <div className="size-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <ShieldIcon className="size-5 text-green-500" />
                </div>
                <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-tighter">Admins</p>
                    <p className="text-xl font-bold">2</p>
                </div>
             </GlassSurface>
          </div>

          <GlassSurface className="flex flex-col overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between bg-white/5">
                <div className="relative w-64">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input placeholder="Search team members..." className="pl-9 h-9 bg-transparent border-none ring-1 ring-border/50 focus:ring-orange-500/50" />
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Filter</Button>
                    <Button variant="outline" size="sm">Export</Button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest border-b bg-muted/10">
                        <tr>
                            <th className="px-6 py-4">Member</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Last Active</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/10">
                        {teamMembers.map((member) => (
                            <tr key={member.email} className="hover:bg-muted/5 group transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-muted/40 flex items-center justify-center font-bold text-xs ring-2 ring-background">
                                            {member.name.substring(0, 2).toUpperCase()}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-foreground group-hover:text-orange-500 transition-colors">{member.name}</span>
                                            <span className="text-xs text-muted-foreground">{member.email}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={cn(
                                        "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter",
                                        member.role === "Owner" ? "bg-orange-500/10 text-orange-500" : "bg-muted/30 text-muted-foreground"
                                    )}>
                                        {member.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className={cn(
                                            "size-1.5 rounded-full",
                                            member.status === "Active" ? "bg-green-500" : member.status === "Away" ? "bg-orange-400" : "bg-muted-foreground/40"
                                        )} />
                                        <span className="text-xs font-medium">{member.status}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-muted-foreground text-xs uppercase font-medium tracking-tighter">{member.lastActive}</td>
                                <td className="px-6 py-4 text-right">
                                    <Button variant="ghost" size="icon" className="size-8 rounded-full opacity-50 group-hover:opacity-100 transition-opacity">
                                        <MoreHorizontalIcon className="size-4" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </GlassSurface>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

