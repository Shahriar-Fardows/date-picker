'use client'

import { useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default function DateRangePicker() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [showCalendars, setShowCalendars] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const quickSelections = [
    { label: 'Today', days: 0 },
    { label: 'Yesterday', days: 1 },
    { label: 'Last 7 Days', days: 7 },
    { label: 'Last 30 Days', days: 30 },
    { label: 'This Month', days: 'thisMonth' },
    { label: 'Last Month', days: 'lastMonth' },
    { label: 'Custom Range', days: 'custom' }
  ]

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const generateCalendarDays = (year, month) => {
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const days = []
    
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null)
    }
    
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i))
    }
    
    return days
  }

  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date)
      setEndDate(null)
    } else {
      if (date < startDate) {
        setEndDate(startDate)
        setStartDate(date)
      } else {
        setEndDate(date)
      }
    }
  }

  const handleQuickSelection = (days) => {
    const end = new Date()
    const start = new Date()
    
    if (typeof days === 'number') {
      start.setDate(end.getDate() - days)
    } else if (days === 'thisMonth') {
      start.setDate(1)
    } else if (days === 'lastMonth') {
      start.setMonth(start.getMonth() - 1)
      start.setDate(1)
      end.setDate(0)
    } else if (days === 'custom') {
      setStartDate(null)
      setEndDate(null)
      return
    }
    
    setStartDate(start)
    setEndDate(end)
    setShowCalendars(false)
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const renderCalendar = (month) => {
    const calendarDays = generateCalendarDays(month.getFullYear(), month.getMonth())
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="font-semibold">
            {months[month.getMonth()]} {month.getFullYear()}
          </div>
          <Button variant="ghost" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-7 text-center text-sm">
          {days.map((day) => (
            <div key={day} className="p-2 text-muted-foreground">
              {day}
            </div>
          ))}
          {calendarDays.map((date, i) => (
            <Button
              key={i}
              variant="ghost"
              className={cn(
                "h-9 w-9 p-0 font-normal",
                !date && "invisible",
                date &&
                  ((startDate && date.toDateString() === startDate.toDateString()) ||
                   (endDate && date.toDateString() === endDate.toDateString())) &&
                  "bg-primary text-primary-foreground",
                date &&
                  startDate &&
                  endDate &&
                  date > startDate &&
                  date < endDate &&
                  "bg-secondary"
              )}
              onClick={() => date && handleDateClick(date)}
            >
              {date?.getDate()}
            </Button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setShowCalendars(!showCalendars)}
        className="w-full justify-start text-left font-normal"
      >
        <Calendar className="mr-2 h-4 w-4" />
        {startDate ? startDate.toLocaleDateString() : 'Select start date'} - {endDate ? endDate.toLocaleDateString() : 'Select end date'}
      </Button>
      
      {showCalendars && (
        <Card className="absolute mt-2 p-4 top-full left-0 w-full max-w-[900px] z-50"> {/* Increased max-width from 800px to 900px for a wider calendar dropdown */}
          <div className="grid gap-4 sm:grid-cols-[200px_1fr]">
            <div className="space-y-2">
              {quickSelections.map((selection) => (
                <Button
                  key={selection.label}
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => handleQuickSelection(selection.days)}
                >
                  {selection.label}
                </Button>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {renderCalendar(currentMonth)}
              {renderCalendar(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setShowCalendars(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => setShowCalendars(false)}
            >
              Apply
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}

