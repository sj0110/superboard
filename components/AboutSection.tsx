/**
 * About Section - Campaign information, curator, timeline, and tutorial
 */

'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertCircle, Play } from 'lucide-react'
import Image from 'next/image'
import { mockCampaignData } from '@/lib/mockData'

export function AboutSection() {
  return (
    <section className="backdrop-blur-[60px] flex flex-col gap-5 items-center justify-center overflow-clip px-4 lg:px-8 py-16 w-full">
      <Card className="bg-neutral-50 border border-neutral-100 flex flex-col gap-7 items-start pb-10 pt-2.5 px-4 lg:px-8 rounded-tl-4xl rounded-tr-4xl w-full">
        {/* Header */}
        <div className="border-b border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-0 py-5 w-full">
          <div className="flex items-center w-full sm:w-auto">
            <h2 className="text-2xl lg:text-[29.53px] font-bold text-neutral-700">About</h2>
          </div>
          <Button variant="outline" size="default" className="rounded-full border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300">
            <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
            <span className="text-sm font-medium text-neutral-500">Report a problem</span>
          </Button>
        </div>

        {/* Description */}
        <p className="text-base font-medium text-neutral-600 leading-6 w-full">
          {mockCampaignData.about}
        </p>

        {/* Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-5 items-stretch w-full">
          {/* Curator Card */}
          <div className="flex-1 flex items-center justify-center w-full lg:w-auto">
            <Card className="flex-1 flex flex-col items-center justify-center p-7 w-full min-h-[216px]">
              <div className="flex flex-col gap-2 items-center justify-center w-full">
                <div className="box-border flex flex-col items-center pb-4 pt-0 px-0">
                  <div className="mb-[-16px] relative w-[100px] h-[100px]">
                    <Image
                      src="/assets/curator-avatar.png"
                      alt={mockCampaignData.curator.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-700 text-center">
                  {mockCampaignData.curator.name}
                </h3>
                <p className="text-xs font-medium text-neutral-500 text-center">
                  {mockCampaignData.curator.role}
                </p>
              </div>
            </Card>
          </div>

          {/* Timeline Card */}
          <div className="flex-1 flex flex-col min-h-[216px] items-start justify-between w-full lg:w-auto">
            <Card className="flex-1 flex flex-col items-start justify-between p-7 w-full h-full">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col gap-2 items-start justify-center">
                  <h3 className="text-lg font-bold text-neutral-700">Timeline</h3>
                  <p className="text-xs font-medium text-neutral-500">Duration</p>
                </div>
                <div className="flex gap-1 items-center justify-center px-0 py-1 rounded-[13px] shrink-0">
                  <div className="relative w-3.5 h-3.5">
                    <div className="w-full h-full rounded-full bg-blue-500" />
                  </div>
                  <span className="text-xs font-bold text-[rgba(0,0,255,0.53)] whitespace-nowrap">
                    {mockCampaignData.timeline.status}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 items-start w-full">
                <div className="border-b border-black/8 flex flex-col h-[45px] items-start justify-end pb-2 pt-0 px-0 w-full">
                  <span className="text-lg font-bold text-neutral-700">
                    {mockCampaignData.timeline.start}
                  </span>
                  <span className="text-xs font-medium text-neutral-500">Start</span>
                </div>
                <div className="flex flex-col h-[45px] items-start justify-end w-full">
                  <span className="text-lg font-bold text-neutral-700">
                    {mockCampaignData.timeline.end}
                  </span>
                  <span className="text-xs font-medium text-neutral-500">End</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Tutorial Card */}
          <div className="flex-1 flex flex-col min-h-[216px] items-start justify-between w-full lg:w-auto">
            <Card className="flex-1 flex flex-col items-start justify-between p-7 w-full h-full">
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                <h3 className="text-lg font-bold text-neutral-700">How to perform this quest?</h3>
                <p className="text-xs font-medium text-neutral-500">Watch a tutorial.</p>
              </div>
              <Button
                variant="outline"
                size="default"
                className="rounded-full border-blue-200 hover:bg-blue-50 hover:border-blue-300"
              >
                <Play className="w-5 h-5 mr-1.5 text-blue-500" />
                <span className="text-sm font-medium text-blue-500">Play Video</span>
              </Button>
            </Card>
          </div>
        </div>
      </Card>
    </section>
  )
}

