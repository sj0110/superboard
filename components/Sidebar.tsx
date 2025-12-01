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
  X,
  ChevronRight,
} from 'lucide-react'
import Image from 'next/image'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
  isMinimized?: boolean
  onMinimizeChange?: (minimized: boolean) => void
}

export function Sidebar({ isOpen = true, onClose, isMinimized: externalIsMinimized, onMinimizeChange }: SidebarProps) {
  const isMobile = useMedia('(max-width: 1024px)')
  const [isProfileExpanded, setIsProfileExpanded] = useState(true)
  const [internalMinimized, setInternalMinimized] = useState(false)
  const isMinimized = externalIsMinimized !== undefined ? externalIsMinimized : internalMinimized

  const setIsMinimized = (minimized: boolean) => {
    if (onMinimizeChange) {
      onMinimizeChange(minimized)
    } else {
      setInternalMinimized(minimized)
    }
  }

  const navItems = [
    { icon: LayoutDashboard, label: 'Quests', active: true },
    { icon: Trophy, label: 'Leaderboard' },
    { icon: FileText, label: 'Your activity' },
    { icon: Gamepad2, label: 'Mini Games' },
  ]

  const handleSidebarClick = () => {
    if (isMinimized) {
      setIsMinimized(false)
    }
  }

  const sidebarContent = (
    <aside
      className="bg-zinc-100 border-r border-neutral-200 min-h-screen h-full flex flex-col justify-between sticky top-0 transition-all duration-300 p-3"
      onClick={handleSidebarClick}
    >
      <div className="flex flex-col gap-12 items-end w-full">
        <div className={`flex items-center ${isMinimized ? 'justify-center' : 'justify-between'} w-full ${isMinimized ? '' : 'min-w-[184px]'} px-0 py-0.5 rounded-xl relative group`}>
          {/* Logo - always visible, but hidden when expand button is hovered */}
          <div className={`flex items-center justify-center transition-opacity duration-200 opacity-100 w-12 h-[30px] ${
            isMinimized ? 'group-hover:opacity-0' : ''
          }`}>
            <Image
              src="/assets/logo.svg"
              alt="Superboard"
              width={48}
              height={31}
              className="object-contain"
              priority
            />
          </div>
          {!isMobile && (
            <>
              {/* Expand button - only visible when minimized and hovered */}
              {isMinimized && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsMinimized(false)
                  }}
                  className="absolute inset-0 flex items-center justify-center p-2 hover:bg-neutral-200 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                  aria-label="Expand sidebar"
                  title="Expand sidebar"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
              {/* Minimize button - only visible when expanded */}
              {!isMinimized && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsMinimized(true)
                  }}
                  className="p-2 hover:bg-neutral-200 rounded-lg transition-colors shrink-0 cursor-pointer"
                  aria-label="Minimize sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </>
          )}
          {isMobile && !isMinimized && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
              aria-label="Close sidebar"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          )}
        </div>

        <div className={`flex flex-col gap-12 w-full ${isMinimized ? 'items-center' : 'items-start'}`}>
          <div className={`flex flex-col gap-12 w-full ${isMinimized ? 'items-center' : 'items-start'}`}>
            <nav className={`flex flex-col gap-1 w-full ${isMinimized ? 'items-center' : 'items-start'}`}>
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.label}
                    onClick={(e) => {
                      e.stopPropagation()
                      if (isMinimized) {
                        setIsMinimized(false)
                      }
                    }}
                    className={`${isMinimized ? 'w-10 h-10' : 'w-full'} flex items-center ${isMinimized ? 'justify-center' : 'gap-2'} p-2 rounded-lg transition-all duration-300 ${
                      item.active
                        ? 'bg-[#e7e7e9] text-zinc-950'
                        : 'text-zinc-950 hover:bg-neutral-200'
                    }`}
                    aria-current={item.active ? 'page' : undefined}
                    title={isMinimized ? item.label : undefined}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className={`text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      isMinimized ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'
                    }`}>
                      {item.label}
                    </span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>
      </div>

      <div className={`flex flex-col gap-2.5 w-full ${isMinimized ? 'items-center' : 'items-start'}`}>
        <button
          onClick={(e) => {
            e.stopPropagation()
            if (isMinimized) {
              setIsMinimized(false)
            }
          }}
          className={`${isMinimized ? 'w-10 h-10' : 'w-full'} flex items-center ${isMinimized ? 'justify-center' : 'gap-2'} p-2 rounded-lg text-zinc-950 hover:bg-neutral-200 transition-all duration-300`}
          title={isMinimized ? 'Support' : undefined}
        >
          <HelpCircle className="w-5 h-5 shrink-0" />
          <span className={`text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            isMinimized ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'
          }`}>
            Support
          </span>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            if (isMinimized) {
              setIsMinimized(false)
            }
          }}
          className={`${isMinimized ? 'w-10 h-10' : 'w-full'} flex items-center ${isMinimized ? 'justify-center' : 'gap-2'} p-2 rounded-lg text-zinc-950 hover:bg-neutral-200 transition-all duration-300`}
          title={isMinimized ? 'Light Mode' : undefined}
        >
          <Sun className="w-5 h-5 shrink-0" />
          <span className={`text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            isMinimized ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'
          }`}>
            Light Mode
          </span>
        </button>

        <div className={`w-full flex items-center justify-center my-2 ${isMinimized ? 'w-auto' : ''}`}>
          <div className={`${isMinimized ? 'w-8' : 'w-full'} h-px bg-neutral-200`} />
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation()
            if (isMinimized) {
              setIsMinimized(false)
            } else {
              setIsProfileExpanded(!isProfileExpanded)
            }
          }}
          className={`${isMinimized ? 'w-10 h-10' : 'w-full'} flex items-center ${isMinimized ? 'justify-center' : 'gap-2.5'} p-2 rounded-lg hover:bg-neutral-200 transition-all duration-300`}
          aria-expanded={isProfileExpanded}
          title={isMinimized ? 'Profile' : undefined}
        >
          <div className='rounded-full bg-zinc-100 border border-neutral-300 flex items-center justify-center shrink-0 transition-all duration-300 w-[30px] h-[30px]'>
            <User className={`text-neutral-600 shrink-0 ${
              isMinimized ? 'w-3.5 h-3.5' : 'w-4 h-4'
            }`} />
          </div>
          {!isMinimized && (
            <>
              <div className="flex-1 flex flex-col items-start">
                <span className="text-sm font-medium text-zinc-950">Profile</span>
                <span className="text-xs text-neutral-400 truncate">0x81D...886C7</span>
              </div>
              <ChevronUpIcon
                className={`w-6 h-6 shrink-0 transition-transform duration-300 ${
                  isProfileExpanded ? '' : 'rotate-180'
                }`}
              />
            </>
          )}
        </button>
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

  return (
    <div
      className={`shrink-0 h-screen sticky top-0 transition-all duration-300 ${
        isMinimized ? 'w-[80px]' : 'w-[240px]'
      }`}
    >
      {sidebarContent}
    </div>
  )
}

