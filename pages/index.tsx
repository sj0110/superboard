/**
 * Home page - Main campaign page with all sections
 */

'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Hero } from '@/components/Hero'
import { StatsCards } from '@/components/StatsCards'
import { LeaderboardSection } from '@/components/LeaderboardSection'
import { AboutSection } from '@/components/AboutSection'
import { useMedia } from '@/hooks/useMedia'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  const isMobile = useMedia('(max-width: 1024px)')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarMinimized, setSidebarMinimized] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Menu Button */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 lg:hidden"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </Button>
      )}

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          isMinimized={sidebarMinimized}
          onMinimizeChange={setSidebarMinimized}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 lg:ml-0">
          {/* Header */}
          <Header />

          {/* Page Content */}
          <main className="flex-1 flex flex-col items-start w-full">
            {/* Hero Section - Full width from sidebar to screen edge */}
            <div className="w-full">
              <Hero sidebarMinimized={sidebarMinimized} />
            </div>

            {/* Stats and Leaderboard - matching AboutSection padding */}
            <div className="box-border flex flex-col gap-[28px] items-start px-4 lg:px-10 py-7 w-full">
              <StatsCards />
              <LeaderboardSection />
            </div>

            {/* About Section */}
            <div className="w-full">
              <AboutSection />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

