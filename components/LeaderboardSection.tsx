/**
 * Leaderboard Section - Shows locked state, countdown timer, and placeholder for leaderboard
 */

'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@/components/icons'
import { Lock, FileText } from 'lucide-react'
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
    <div className="flex flex-col gap-6 w-full">
      {/* Locked State Card */}
      <Card className="flex flex-col md:flex-row items-start md:items-center justify-between p-7 w-full gap-4">
        <div className="flex gap-4 items-center">
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

        <div className="flex items-center gap-0 flex-wrap md:flex-nowrap">
          <div className="hidden md:flex h-full items-center justify-center w-0">
            <div className="h-full w-[52px] rotate-90">
              <div className="h-full w-full border-l border-neutral-200" />
            </div>
          </div>

          <Button variant="outline" size="default" className="rounded-full bg-neutral-100 hover:bg-neutral-200 hover:border-neutral-300">
            <span className="text-sm font-medium text-neutral-900">Read Campaign Rules</span>
            <ArrowRightIcon className="w-[18px] h-[18px] rotate-180 scale-y-[-100%]" />
          </Button>

          <div className="hidden md:flex h-full items-center justify-center w-0">
            <div className="h-full w-[52px] rotate-90">
              <div className="h-full w-full border-l border-neutral-200" />
            </div>
          </div>

          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center">
              <div className="flex gap-[27px] h-[45px] items-center justify-center w-full md:w-[298.67px]">
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
          </div>
        </div>
      </Card>

      {/* Leaderboard Placeholder */}
      <div className="bg-[#f1f1f1] flex gap-2.5 h-[700px] items-center justify-center rounded-2xl w-full">
        <h2 className="text-2xl font-bold text-neutral-700 text-center">Leaderboard</h2>
      </div>
    </div>
  )
}

