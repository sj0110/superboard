/**
 * Stats Cards - Display total volume, rewards, and participation instructions
 */

'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@/components/icons'
import { TrendingUp, DollarSign } from 'lucide-react'
import Image from 'next/image'
import { mockCampaignData } from '@/lib/mockData'

export function StatsCards() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex gap-4 lg:gap-7 h-auto lg:h-[216px] items-start w-full flex-col lg:flex-row">
        {/* Total Volume Card */}
        <div className="flex gap-[130px] h-full items-end w-full lg:w-[259px] shrink-0">
          <Card className="flex-1 h-full min-h-[216px] flex flex-col items-start justify-between p-7 min-w-0">
            <div className="border-b border-black/8 pb-3.5 w-full">
              <h3 className="text-lg font-bold text-neutral-700 text-center">Total Volume</h3>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <button className="bg-green-200 hover:bg-green-300 active:bg-green-400 rounded-full flex gap-0.5 items-center pl-[7px] pr-3 py-1.5 transition-all duration-200">
                <TrendingUp className="w-[18px] h-[18px] text-green-600 rotate-90" />
                <span className="text-sm font-medium text-green-600 text-center">
                  User stats
                </span>
              </button>
              <p className="text-4xl font-bold text-neutral-700 text-center">
                {mockCampaignData.totalVolume}
              </p>
            </div>
          </Card>
        </div>

        {/* Rewards Card */}
        <div className="bg-white flex flex-col h-full items-end justify-between relative w-full lg:w-[354.67px] shrink-0">
          <Card className="flex-1 flex flex-col items-start justify-between w-full relative min-h-[216px]">
            <CardContent className="flex-1 flex flex-col items-start justify-between p-7 w-full">
              <div className="border-b border-black/8 pb-3.5 w-full">
                <h3 className="text-lg font-bold text-neutral-700 text-center">Rewards</h3>
              </div>
              <div className="flex gap-[27px] items-center justify-center w-full">
                <div className="flex-1 flex items-end gap-1">
                  <span className="text-4xl font-bold text-neutral-700 text-right">
                    {mockCampaignData.rewardsAmount}
                  </span>
                  <span className="text-xs text-center w-[34px] h-[23px] flex items-center justify-center">
                    {mockCampaignData.rewardsCurrency}
                  </span>
                </div>
              </div>
            </CardContent>
            {/* Decorative Image */}
            <div className="absolute left-[calc(50%+129.3px)] top-[calc(50%+65.82px)] -translate-x-1/2 -translate-y-1/2 rotate-[15deg] pointer-events-none">
              <div className="relative w-[167px] h-[168px]">
                <img
                  src="/assets/rewards-icon.svg"
                  alt="Rewards"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* How to Participate Card */}
        <div className="flex-1 flex flex-col h-full items-start justify-between min-w-0">
          <Card className="flex-1 flex flex-col items-end justify-between p-7 w-full">
            <div className="flex-1 flex flex-col items-end justify-between w-full">
              <div className="border-b border-black/8 pb-3.5 w-full">
                <h3 className="text-lg font-bold text-neutral-700 text-center">
                  How to participate?
                </h3>
              </div>
              <p className="text-sm font-medium text-neutral-500 leading-5 min-w-full">
                {mockCampaignData.instructions}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 items-start w-full">
                <Button variant="purple" size="default" className="rounded-full w-full sm:w-auto">
                  <span className="text-sm">Mint Campaign Pass</span>
                  <ArrowRightIcon className="w-[18px] h-[18px] rotate-180 scale-y-[-100%]" />
                </Button>
                <Button variant="purple" size="default" className="rounded-full opacity-50 hover:opacity-70 w-full sm:w-auto">
                  <DollarSign className="w-[15px] h-[18.75px]" />
                  <span className="text-sm">Bridge Assets</span>
                  <ArrowRightIcon className="w-[18px] h-[18px] rotate-180 scale-y-[-100%]" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

