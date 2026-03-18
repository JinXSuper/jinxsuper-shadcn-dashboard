"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker({ className }: { className?: string }) {
  const [date, setDate] = React.useState<Date>(new Date())

  const formattedDate = React.useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }, [date])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? formattedDate : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4 border-b">
           <h4 className="font-medium leading-none mb-1">Select Date</h4>
           <p className="text-sm text-muted-foreground">Choose a date for the dashboard reports.</p>
        </div>
        <div className="p-2">
            <input 
              type="date" 
              className="w-full bg-transparent border rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              value={date.toISOString().split('T')[0]}
              onChange={(e) => setDate(new Date(e.target.value))}
            />
        </div>
        <div className="p-2 bg-muted/20 border-t flex flex-col gap-1">
            <Button variant="ghost" size="sm" className="justify-start font-normal" onClick={() => setDate(new Date())}>Today</Button>
            <Button variant="ghost" size="sm" className="justify-start font-normal" onClick={() => {
                const d = new Date();
                d.setDate(d.getDate() - 7);
                setDate(d);
            }}>Last 7 days</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
