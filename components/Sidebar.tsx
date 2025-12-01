/**
 * Sidebar component - Left navigation sidebar with menu items and profile
 */

'use client'

import { useState } from 'react'
import { useMedia } from '@/hooks/useMedia'
import { ChevronUpIcon } from '@/components/icons'
import {
  LayoutDashboard,
  Trophy,
  FileText,
  Gamepad2,
  HelpCircle,
  Sun,
  User,
  ChevronDown,
} from 'lucide-react'
import Image from 'next/image'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const isMobile = useMedia('(max-width: 1024px)')
  const [isProfileExpanded, setIsProfileExpanded] = useState(true)

  const navItems = [
    { icon: LayoutDashboard, label: 'Quests', active: true },
    { icon: Trophy, label: 'Leaderboard' },
    { icon: FileText, label: 'Your activity' },
    { icon: Gamepad2, label: 'Mini Games' },
  ]

  const sidebarContent = (
    <aside className="bg-zinc-100 border-r border-neutral-200 min-h-screen h-full flex flex-col justify-between p-5 sticky top-0">
      <div className="flex flex-col gap-[54px] items-end w-full">
        <div className="flex items-center justify-between w-full min-w-[184px] px-0 py-0.5 rounded-xl">
          <div className="relative w-12 h-[30px] flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="Superboard"
              fill
              className="object-contain"
              priority
            />
          </div>
          {isMobile && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-200 rounded-lg transition-colors"
              aria-label="Close sidebar"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-[60px] items-start w-full">
          <div className="flex flex-col gap-[56px] items-start w-full">
            <nav className="flex flex-col gap-1 items-start w-full">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.label}
                    className={`w-full flex gap-2 items-center p-2 rounded-lg transition-colors ${
                      item.active
                        ? 'bg-[#e7e7e9] text-zinc-950'
                        : 'text-zinc-950 hover:bg-neutral-200'
                    }`}
                    aria-current={item.active ? 'page' : undefined}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 items-start w-full">
        <button className="w-full flex gap-2 items-center p-2 rounded-lg text-zinc-950 hover:bg-neutral-200 transition-colors">
          <HelpCircle className="w-5 h-5 shrink-0" />
          <span className="text-sm font-medium">Support</span>
        </button>
        <button className="w-full flex gap-2 items-center p-2 rounded-lg text-zinc-950 hover:bg-neutral-200 transition-colors">
          <Sun className="w-5 h-5 shrink-0" />
          <span className="text-sm font-medium">Light Mode</span>
        </button>

        <div className="w-full flex items-center justify-center my-2">
          <div className="w-full h-px bg-neutral-200" />
        </div>

        <div className="flex flex-col gap-[56px] items-start w-full">
          <div className="flex flex-col gap-1 items-start w-full">
            <button
              onClick={() => setIsProfileExpanded(!isProfileExpanded)}
              className="w-full flex gap-2.5 items-center px-2 py-2.5 rounded-md hover:bg-neutral-200 transition-colors"
              aria-expanded={isProfileExpanded}
            >
              <div className="relative w-[30px] h-[30px] rounded-full bg-zinc-100 border border-neutral-300 flex items-center justify-center shrink-0">
                <User className="w-4 h-4 text-neutral-600" />
              </div>
              <div className="flex-1 flex flex-col items-start">
                <span className="text-sm font-medium text-zinc-950">Profile</span>
                <span className="text-xs text-neutral-400 truncate">0x81D...886C7</span>
              </div>
              <ChevronUpIcon
                className={`w-6 h-6 shrink-0 transition-transform ${
                  isProfileExpanded ? '' : 'rotate-180'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </aside>
  )

  if (isMobile) {
    return (
      <>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={onClose}
              aria-hidden="true"
            />
            <div className="fixed left-0 top-0 h-screen w-[240px] z-50 lg:hidden overflow-y-auto">
              {sidebarContent}
            </div>
          </>
        )}
      </>
    )
  }

  return <div className="w-[240px] shrink-0 h-screen sticky top-0">{sidebarContent}</div>
}

