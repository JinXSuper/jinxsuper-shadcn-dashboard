"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import GlassSurface from "@/components/ui/glass-surface"
import { cn } from "@/lib/utils"
import { FolderIcon, PlusIcon, MoreVerticalIcon, LayoutGridIcon, ListIcon } from "lucide-react"

const projects = [
  { name: "E-Commerce Revamp", status: "In Progress", progress: 75, team: 8, client: "Shopify Inc." },
  { name: "Mobile App 2.0", status: "Planning", progress: 20, team: 4, client: "Starbucks" },
  { name: "AI Chatbot Integration", status: "In Progress", progress: 45, team: 12, client: "Google" },
  { name: "Cloud Migration", status: "Done", progress: 100, team: 6, client: "Vercel" },
  { name: "Analytics Dashboard", status: "Testing", progress: 90, team: 5, client: "Netflix" },
  { name: "Security Audit", status: "In Progress", progress: 15, team: 3, client: "Bank of America" },
]

export default function ProjectsPage() {
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
                <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                <p className="text-muted-foreground">You are currently managing {projects.length} active projects.</p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 shadow-lg shadow-orange-500/20">
                <PlusIcon className="mr-2 size-4" />
                New Project
            </Button>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <Button variant="ghost" size="sm" className="bg-muted/40 font-semibold px-4"><LayoutGridIcon className="mr-2 size-4" /> Grid</Button>
            <Button variant="ghost" size="sm" className="font-normal px-4"><ListIcon className="mr-2 size-4" /> List</Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <GlassSurface key={project.name} className="p-6 flex flex-col gap-6 group hover:translate-y-[-4px] transition-all">
                    <div className="flex items-start justify-between">
                        <div className="size-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                            <FolderIcon className="size-6 text-orange-500" />
                        </div>
                        <Button variant="ghost" size="icon" className="size-8 rounded-full">
                            <MoreVerticalIcon className="size-4 opacity-50" />
                        </Button>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg group-hover:text-orange-500 transition-colors">{project.name}</h3>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{project.client}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-xs font-semibold mb-1">
                            <span className={cn(
                                project.status === "Done" ? "text-green-500" : "text-orange-500"
                            )}>{project.status}</span>
                            <span>{project.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-muted/30 rounded-full overflow-hidden">
                            <div 
                                className={cn(
                                    "h-full transition-all",
                                    project.status === "Done" ? "bg-green-500" : "bg-orange-500"
                                )} 
                                style={{ width: `${project.progress}%` }} 
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="size-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">
                                    {String.fromCharCode(64 + project.team + i)}
                                </div>
                            ))}
                            <div className="size-8 rounded-full border-2 border-background bg-orange-500/10 flex items-center justify-center text-[10px] font-bold text-orange-500">
                                +{project.team - 3}
                            </div>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">
                            {project.team} Contributors
                        </span>
                    </div>
                </GlassSurface>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

