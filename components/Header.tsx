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
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white border-b border-neutral-200 h-[76px] flex items-center justify-between px-4 lg:px-5 gap-4 lg:gap-[35px] w-full">
      <div className="flex-1 flex items-center gap-4 lg:gap-6 min-w-0">
        <div className="relative w-full max-w-[375px]">
          <div className="absolute left-[18px] top-1/2 -translate-y-1/2 pointer-events-none z-10">
            <SearchIcon className="w-[14px] h-[14px] text-stone-400" />
          </div>
          <Input
            type="search"
            placeholder="Search Quests"
            className="pl-[40px] pr-5 w-full"
            aria-label="Search Quests"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 lg:gap-3 shrink-0">
        <Button
          variant="outline"
          size="default"
          className="rounded-full border-neutral-300 hidden sm:flex"
        >
          <Gift className="w-4 h-4 mr-1.5" />
          <span className="text-sm text-neutral-500">Unlock Daily Treats</span>
        </Button>
        <Button variant="brand" size="default" className="rounded-full">
          <span className="text-sm">Sign In</span>
        </Button>
      </div>
    </header>
  )
}

