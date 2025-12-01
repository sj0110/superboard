/**
 * Hero section - Campaign header with title, description, and CTA
 */

'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/icons'
import { Share2, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import { mockCampaignData } from '@/lib/mockData'

export function Hero() {
  return (
    <section className="relative h-[398px] overflow-hidden rounded-none lg:rounded-2xl bg-[#4847ae] backdrop-blur-[60px] w-full">
      {/* Background Image - responsive positioning */}
      <div className="absolute left-[5%] lg:left-[24.33%] top-[20.6%] right-[5%] lg:right-[56.17%] bottom-[20.6%] rounded-[14px] overflow-hidden">
        <Image
          src="/assets/hero-image.png"
          alt="Campaign illustration"
          fill
          className="object-cover rounded-[14px] pointer-events-none"
          priority
        />
      </div>

      {/* Back Button */}
      <Button
        variant="outline"
        size="sm"
        className="absolute top-[37.5px] left-4 lg:left-[84px] bg-white/10 border border-white/5 backdrop-blur-sm text-white hover:bg-white/30 hover:border-white/20 rounded-full px-3 py-2 h-auto transition-all duration-200"
      >
        <ArrowLeftIcon className="w-[15px] h-[15px] mr-1.5" />
        <span className="text-xs font-bold">Back</span>
      </Button>

      {/* Share Button */}
      <Button
        variant="outline"
        size="sm"
        className="absolute top-[37.5px] right-4 lg:right-[58px] bg-white/10 border border-white/5 backdrop-blur-sm text-white hover:bg-white/30 hover:border-white/20 rounded-full px-3 py-2 h-auto transition-all duration-200"
      >
        <span className="text-xs font-bold">Share</span>
      </Button>

      {/* Content - responsive positioning */}
      <div className="absolute left-1/2 lg:left-[562.67px] top-[84px] -translate-x-1/2 lg:translate-x-0 w-[90%] max-w-[346px] lg:w-[346px] flex flex-col gap-[21px]">
        {/* Rewards Badge */}
        <div className="bg-white/10 border border-black/5 rounded-full flex items-center justify-center px-3 py-2 gap-[3.3px]">
          <Zap className="w-6 h-6 text-white shrink-0" />
          <span className="text-xs font-bold text-white whitespace-nowrap">
            Rewards: {mockCampaignData.rewards}
          </span>
          <ArrowRightIcon className="w-[15px] h-[15px] text-white shrink-0" />
        </div>

        {/* Title and Description */}
        <div className="flex flex-col gap-5 items-start justify-center">
          <h1 className="text-3xl font-bold text-white leading-8 w-full">{mockCampaignData.title}</h1>
          <p className="text-sm font-medium text-white leading-normal w-full">
            {mockCampaignData.description}
          </p>

          {/* Stats */}
          <div className="flex gap-2 items-center">
            <div className="flex gap-[3.3px] items-center justify-center px-0 py-[3.3px] rounded-[13.23px]">
              <Users className="w-5 h-5 text-white shrink-0" />
              <span className="text-sm font-bold text-white whitespace-nowrap">{mockCampaignData.participants}</span>
            </div>
            <span className="text-xs font-bold text-white">·</span>
            <div className="flex gap-[3.3px] items-center justify-center px-0 py-[3.3px] rounded-[13.23px]">
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
              <span className="text-sm font-bold text-white whitespace-nowrap">{mockCampaignData.network}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

