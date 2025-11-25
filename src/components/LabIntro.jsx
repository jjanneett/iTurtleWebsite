import React from 'react'
import { useScrollProgress } from '../hooks/useScrollAnimation'

export default function LabIntro(){
  const [ref, progress, inView] = useScrollProgress()
  const active = inView ? progress : 0
  const translateY = (1 - active) * 18
  const opacity = 0.45 + active * 0.55
  const scale = 0.985 + active * 0.015
  const blur = (1 - active) * 2

  return (
    <div
      ref={ref}
      style={{ transform: `translateY(${translateY}px) scale(${scale})`, opacity, filter: `blur(${blur}px)` }}
      className="transition-transform duration-500 ease-out">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-2 space-y-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">About the Lab</h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              I-Turtle Lab은 복잡하고 현실적인 환경에서도 살아남는 응용 AI를 탐구합니다.
              빠른 실험과 엄격한 검증을 통해 새로운 아이디어가
              사용자에게 신뢰할 수 있는 시스템이 될 수 있도록 합니다.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-indigo-800 text-white rounded-xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -left-8 bottom-0 w-28 h-28 bg-indigo-400/30 rounded-full blur-2xl" />
          <div className="relative space-y-4">
            <div className="text-sm uppercase tracking-widest text-white/70">Research Snapshot</div>
            <div className="text-2xl sm:text-3xl font-bold leading-tight">
                사람, 제품, 파트너십을 위한 신뢰할 수 있는 AI를 구축합니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

