"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import GlassSurface from "@/components/ui/glass-surface"
import { CreditCardIcon, ZapIcon, ReceiptIcon } from "lucide-react"

export default function BillingPage() {
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
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Billing & Usage</h2>
            <p className="text-muted-foreground">Manage your subscription, payment methods and view your usage metrics.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             <GlassSurface className="p-6 flex flex-col gap-4 border-orange-500/20">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Pro Plan</h3>
                    <ZapIcon className="size-5 text-orange-500" />
                </div>
                <div className="text-3xl font-bold">$49<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                <p className="text-sm text-muted-foreground">Next billing date: April 18, 2026</p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white border-none shadow-lg shadow-orange-500/20 font-medium">Upgrade Plan</Button>
             </GlassSurface>

             <GlassSurface className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Current Usage</h3>
                    <CreditCardIcon className="size-5 text-muted-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm">
                        <span>API Calls</span>
                        <span>85,000 / 100,000</span>
                    </div>
                    <div className="h-2 w-full bg-muted/30 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 transition-all" style={{ width: '85%' }} />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm">
                        <span>Storage</span>
                        <span>12.4 GB / 20 GB</span>
                    </div>
                    <div className="h-2 w-full bg-muted/30 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 transition-all" style={{ width: '62%' }} />
                    </div>
                </div>
             </GlassSurface>

             <GlassSurface className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Default Payment</h3>
                    <CreditCardIcon className="size-5 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-md bg-muted/40 flex items-center justify-center font-bold">VISA</div>
                    <div>
                        <p className="font-medium inline-flex items-center gap-1.5">•••• 4242</p>
                        <p className="text-xs text-muted-foreground">Expires 12/28</p>
                    </div>
                </div>
                <Button variant="outline" className="w-full">Edit Payment</Button>
             </GlassSurface>
          </div>

          <GlassSurface className="overflow-hidden">
            <div className="p-6 border-b">
                <div className="flex items-center gap-2">
                    <ReceiptIcon className="size-5 text-muted-foreground" />
                    <h3 className="font-semibold">Recent Invoices</h3>
                </div>
            </div>
            <div className="p-0">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase border-b bg-muted/10">
                        <tr>
                            <th className="px-6 py-3 font-medium">Invoice ID</th>
                            <th className="px-6 py-3 font-medium">Date</th>
                            <th className="px-6 py-3 font-medium">Amount</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/20">
                        {[
                            { id: "INV-001", date: "Mar 18, 2026", amount: "$49.00", status: "Paid" },
                            { id: "INV-002", date: "Feb 18, 2026", amount: "$49.00", status: "Paid" },
                            { id: "INV-003", date: "Jan 18, 2026", amount: "$49.00", status: "Paid" },
                        ].map((invoice) => (
                            <tr key={invoice.id} className="hover:bg-muted/5">
                                <td className="px-6 py-4 font-medium">{invoice.id}</td>
                                <td className="px-6 py-4">{invoice.date}</td>
                                <td className="px-6 py-4">{invoice.amount}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider">
                                        {invoice.status}
                                    </span>
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
