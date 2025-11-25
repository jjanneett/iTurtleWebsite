import React from 'react'
import { useScrollProgress } from '../hooks/useScrollAnimation'

export default function Projects(){
  const [ref, progress, inView] = useScrollProgress()
  const active = inView ? progress : 0
  const translateY = (1 - active) * 16
  const opacity = 0.4 + active * 0.6
  const scale = 0.985 + active * 0.015
  const blur = (1 - active) * 2
  return (
    <div ref={ref} style={{transform: `translateY(${translateY}px) scale(${scale})`, opacity, filter: `blur(${blur}px)`}} className="transition-transform duration-500 ease-out">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
        Projects
      </h2>
      
      <div className="border-4 sm:border-6 md:border-8 border-gray-200 bg-gray-50 rounded-lg md:rounded px-4 sm:px-6 py-8 sm:py-12 relative overflow-hidden transition-transform duration-500 ease-out" style={{transform: `translateY(${translateY * 0.5}px)`}}>
        <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed px-2">
          2025년 현재 저희 아이터틀 연구실<br className="sm:hidden" /> 프로젝트는 미정입니다.
        </div>
        
        <img 
          src="/src/assets/cat-computer.png" 
          alt="cat" 
          className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-48 opacity-90"
        />
      </div>
    </div>
  )
}