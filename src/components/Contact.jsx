import React from 'react'
import { useScrollProgress } from '../hooks/useScrollAnimation'

export default function Contact(){
  const [ref, progress, inView] = useScrollProgress()
  const active = inView ? progress : 0
  const opacity = 0.45 + active * 0.55
  const translateY = (1 - active) * 16
  const scale = 0.985 + active * 0.015
  const blur = (1 - active) * 2

  return (
    <div ref={ref} style={{opacity, transform: `translateY(${translateY}px) scale(${scale})`, filter: `blur(${blur}px)`}} className="transition-transform duration-500 ease-out">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">Contact Us</h2>

      <div className="bg-gray-50 rounded-lg p-6 sm:p-8 border border-gray-200">
        <div className="space-y-4 text-sm sm:text-base text-gray-700">
          <div>
            <div className="text-gray-500 text-xs sm:text-sm">위치 Position</div>
            <div className="font-medium">호서대학교 아산캠퍼스 제 2공학관 4층 420-1호</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs sm:text-sm">E-mail</div>
            <a href="mailto:XXXX@gmail.com" className="font-medium text-blue-600 hover:underline">XXXX@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}


