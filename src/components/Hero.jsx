import React from 'react'
import { useScrollProgress } from '../hooks/useScrollAnimation'

export default function Hero(){
  const [ref, progress, inView] = useScrollProgress()
  const active = inView ? progress : 0
  const translateY = (1 - active) * 24 // px
  const opacity = 0.4 + active * 0.6
  const scale = 0.98 + active * 0.02
  const blur = (1 - active) * 3
  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 py-16 md:py-0">
      <div className="flex-grow flex flex-col items-center justify-center max-w-4xl mx-auto transition-transform duration-500 ease-out" style={{transform: `translateY(${translateY}px) scale(${scale})`, opacity, filter: `blur(${blur}px)`}}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 leading-tight">
          Welcome to the<br className="sm:hidden" /> I-Turtle Lab
        </h1>
        
        <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-12 max-w-2xl">
          안녕하세요. 아이터틀 연구실에 오신 것을 환영합니다.
        </p>

        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6" />
      </div>

      <div className="w-full text-center md:text-left mb-12 md:mb-48 transition-transform duration-500 ease-out" style={{transform: `translateY(${translateY * 0.6}px)`, opacity: 0.5 + active * 0.5}}>
        <p className="text-lg sm:text-xl md:text-2xl font-normal container-wide px-4 md:px-0">
          I-Turtle Lab은 AI 서비스 연구 및 개발를 진행하고 있습니다.
        </p>
      </div>
    </section>
  )
}