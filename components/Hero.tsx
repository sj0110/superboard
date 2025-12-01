/**
 * Hero section - Campaign header with title, description, and CTA
 */

'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { mockCampaignData } from '@/lib/mockData'

interface HeroProps {
  sidebarMinimized?: boolean
}

export function Hero({ sidebarMinimized = false }: HeroProps) {
  return (
    <section className="relative h-[280px] md:h-[360px] lg:h-[398px] overflow-hidden rounded-none bg-[#4847ae] backdrop-blur-[60px] w-full">
      {/* Background Image - hidden on mobile, visible on desktop */}
      <div className={`hidden lg:block absolute top-[20.6%] bottom-[20.6%] rounded-[14px] overflow-hidden z-0 transition-all duration-300 ${
        sidebarMinimized
          ? 'left-[calc(24.33%-160px)] right-[calc(56.17%+160px)]'
          : 'left-[24.33%] right-[56.17%]'
      }`}>
        <Image
          src="/assets/hero-image.png"
          alt="Campaign illustration"
          fill
          sizes="(max-width: 1024px) 90vw, 40vw"
          className="object-cover rounded-[14px] pointer-events-none"
          priority
        />
      </div>

      {/* Back Button - responsive positioning: adjusts when sidebar toggles */}
      <Button
        variant="outline"
        size="sm"
        className={`absolute top-3 md:top-4 lg:top-[9.42%] bg-white/10 border border-white/5 backdrop-blur-sm text-white hover:bg-white/30 hover:border-white/20 rounded-full px-2 md:px-3 py-1.5 md:py-2 h-auto min-h-[36px] md:min-h-[40px] transition-all duration-300 z-20 flex items-center gap-[5px] ${
          sidebarMinimized
            ? 'left-3 md:left-4 lg:left-[calc(194px-160px)]'
            : 'left-3 md:left-4 lg:left-[94px]'
        }`}
      >
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div className="relative w-3 h-3 md:w-[15.273px] md:h-[15.273px]">
              <Image
                src="/assets/icon-back-arrow-figma.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <span className="text-[10px] md:text-xs font-bold">Back</span>
      </Button>

      {/* Share Button - exact Figma positioning: inset-[9.42%_4.89%_82.29%_90.44%] */}
      <Button
        variant="outline"
        size="sm"
        className="absolute top-3 md:top-4 lg:top-[9.42%] right-3 md:right-4 lg:right-[58px] bg-white/10 border border-white/5 backdrop-blur-sm text-white hover:bg-white/30 hover:border-white/20 rounded-full px-2 md:px-3 py-1.5 md:py-2 h-auto min-h-[36px] md:min-h-[40px] transition-all duration-200 z-20 flex items-center gap-[5px]"
      >
        <span className="text-[10px] md:text-xs font-bold">Share</span>
        <div className="relative shrink-0 w-3 h-3 md:w-[15.273px] md:h-[15.273px]">
          <Image
            src="/assets/icon-share.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </Button>

      {/* Content - responsive positioning: adjusts when sidebar toggles (160px difference: 240px - 80px) */}
      <div className={`absolute left-1/2 top-14 md:top-16 lg:top-[84px] -translate-x-1/2 lg:translate-x-0 w-[90%] md:w-[90%] max-w-[346px] lg:w-[346px] flex flex-col gap-3 md:gap-4 lg:gap-[21px] items-start justify-start z-10 transition-all duration-300 px-4 md:px-6 lg:px-0 ${
        sidebarMinimized 
          ? 'lg:left-[calc(762.67px-160px)]' 
          : 'lg:left-[712.67px]'
      }`}>
        {/* Rewards Badge */}
        <div className="bg-white/10 border border-black/5 rounded-full flex items-center justify-center px-2.5 md:px-3 py-1.5 md:py-2 gap-[3.307px] shrink-0">
          <div className="relative shrink-0 w-5 h-5 md:w-6 md:h-6">
            <Image
              src="/assets/icon-rewards-badge.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <span className="text-[10px] md:text-xs font-bold text-white whitespace-nowrap">
            Rewards: {mockCampaignData.rewards}
          </span>
          <div className="relative shrink-0 w-[13px] h-[13px] md:w-[15.273px] md:h-[15.273px]">
            <Image
              src="/assets/icon-arrow-right.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Title and Description - exact Figma gap: gap-[20px], items-start */}
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 items-start justify-start w-full shrink-0">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight md:leading-7 lg:leading-8 w-full">{mockCampaignData.title}</h1>
          <p className="text-xs md:text-sm font-medium text-white leading-relaxed md:leading-normal w-full">
            {mockCampaignData.description}
          </p>

          {/* Stats - exact Figma gap: gap-[8px] */}
          <div className="flex gap-1.5 md:gap-2 items-center shrink-0 flex-wrap">
            <div className="flex gap-[3.307px] items-center justify-center px-0 py-[3.307px] rounded-[13.23px]">
              <div className="relative shrink-0 w-4 h-4 md:w-5 md:h-5">
                <Image
                  src="/assets/icon-users.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs md:text-sm font-bold text-white whitespace-nowrap">{mockCampaignData.participants}</span>
            </div>
            <span className="text-[10px] md:text-xs font-bold text-white">·</span>
            <div className="flex gap-[3.307px] items-center justify-center px-0 py-[3.307px] rounded-[13.23px]">
              <div className="relative shrink-0 w-4 h-4 md:w-5 md:h-5">
                <Image
                  src="/assets/icon-network.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs md:text-sm font-bold text-white whitespace-nowrap">{mockCampaignData.network}</span>
            </div>
          </div>
        </div> 
      </div>
    </section>
  )
}

