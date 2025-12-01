/**
 * Header component - Top navigation bar with search and action buttons
 */

'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SearchIcon } from '@/components/icons'
import { Gift } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white border-b border-neutral-200 h-[60px] md:h-[72px] lg:h-[76px] flex items-center justify-between px-3 md:px-4 lg:px-5 gap-2 md:gap-4 lg:gap-[35px] w-full">
      <div className="flex-1 flex items-center gap-2 md:gap-4 lg:gap-6 min-w-0 pl-12 md:pl-0">
        <div className="relative w-full max-w-[200px] md:max-w-[320px] lg:max-w-[375px]">
          <div className="absolute left-3 md:left-[18px] top-1/2 -translate-y-1/2 pointer-events-none z-10">
            <SearchIcon className="w-3.5 h-3.5 md:w-[14px] md:h-[14px] text-stone-400" />
          </div>
          <Input
            type="search"
            placeholder="Search Quests"
            className="pl-9 md:pl-[40px] pr-3 md:pr-5 w-full h-8 md:h-10 text-xs md:text-sm"
            aria-label="Search Quests"
          />
        </div>
      </div>
      <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3 shrink-0">
        <Button
          variant="outline"
          size="default"
          className="rounded-full border-neutral-300 hidden md:flex h-8 md:h-10 px-2 md:px-4"
        >
          <Gift className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1 md:mr-1.5" />
          <span className="text-xs md:text-sm text-neutral-500">Unlock Daily Treats</span>
        </Button>
        <Button variant="brand" size="default" className="rounded-full h-8 md:h-10 px-3 md:px-4 min-w-[70px] md:min-w-[100px]">
          <span className="text-xs md:text-sm font-medium">Sign In</span>
        </Button>
      </div>
    </header>
  )
}

