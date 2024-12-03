'use client'

import { Menu, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from './theme-provider'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="border-b bg-background">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 py-4">
                <Button variant="ghost" className="justify-start">Home</Button>
                <Button variant="ghost" className="justify-start">About</Button>
                <Button variant="ghost" className="justify-start">Contact</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="mx-6">
          <h1 className="text-xl font-bold">Logo</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
        </div>
        
        <div className="ml-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? (
              <Moon className="h-6 w-6" />
            ) : (
              <Sun className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  )
}

