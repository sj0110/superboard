/**
 * Leaderboard Section - Shows locked state, countdown timer, and placeholder for leaderboard
 */

'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Lock } from 'lucide-react'
import Image from 'next/image'
import { mockCampaignData } from '@/lib/mockData'
import { useEffect, useState } from 'react'

export function LeaderboardSection() {
  const [countdown, setCountdown] = useState({
    days: mockCampaignData.countdown.days,
    hours: mockCampaignData.countdown.hours,
    minutes: mockCampaignData.countdown.minutes,
    seconds: mockCampaignData.countdown.seconds,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="flex flex-col md:flex-row items-start md:items-center md:justify-between p-5 lg:p-7 w-full gap-6">

      {/* ========== SECTION 1 — LEFT BLOCK ========== */}
      <div className="flex gap-4 items-center w-full md:w-auto">
        <div className="bg-red-100 border border-red-100 rounded-[9.6px] w-12 h-12 flex items-center justify-center shrink-0">
          <Lock className="w-6 h-6 text-red-600" />
        </div>

        <div className="flex flex-col items-start justify-center">
          <h3 className="text-2xl font-bold text-neutral-700">Leaderboard locked</h3>
          <p className="text-sm font-medium text-neutral-500">
            Get started by Minting the Campaign Pass
          </p>
        </div>
      </div>

      {/* DESKTOP SEPARATOR */}
      {/* <div className="hidden md:flex h-[60px] items-center">
        <div className="border-l border-neutral-200 h-full" />
      </div> */}

      <div className="w-full md:w-auto lg:flex lg:gap-10">
        {/* ========== SECTION 2 — READ RULES BUTTON ========== */}
        <div className="w-full md:w-auto flex justify-start mb-6 lg:mb-0">
          <Button
            variant="outline"
            size="default"
            className="rounded-full bg-neutral-100 hover:bg-neutral-200 hover:border-neutral-300 flex items-center gap-[3.307px]"
          >
            <span className="text-sm font-medium text-neutral-900">
              Read Campaign Rules
            </span>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-180 scale-y-[-100%]">
                <div className="relative w-[18px] h-[18px]">
                  <Image src="/assets/icon-rules-arrow.svg" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>
          </Button>
        </div>
        {/* ========== SECTION 3 — TIMER ========== */}
        <div className="flex gap-6 md:gap-[27px] md:justify-end">
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-neutral-700">{countdown.days}</span>
            <span className="text-xs font-medium text-neutral-500">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-neutral-700">{countdown.hours}</span>
            <span className="text-xs font-medium text-neutral-500">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-neutral-700">{countdown.minutes}</span>
            <span className="text-xs font-medium text-neutral-500">Mins</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-neutral-700">{countdown.seconds}</span>
            <span className="text-xs font-medium text-neutral-500">Sec</span>
          </div>
        </div>
      </div>

    </Card>


  )
}

