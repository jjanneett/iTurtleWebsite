import React from 'react'
import { useScrollProgress } from '../hooks/useScrollAnimation'

const byYear = {
  2022: [
    {title: '아두이노와 센서감지 및 인공지능을 활용한 킥보드 충격 알림 시스템 설계', sub: 'The Development of a Crash Alarm System on Electric Scooters using AI Embedded Micro-computer'},
    {title: '산업용 GPS 기반 NOx/O2 센서를 이용한 빅데이터 분석/모니터링 알고리즘 설계', sub: 'The Design of Big-data Analysis/Monitoring Algorithms using industrial GPS based NOx/O2 Sensor'}
  ],
  2023: [
    {title: '충격량을 통한 킥보드의 사고 원인 파악', sub: 'Determine the cause of the kickboard accident by using the impact amount'},
    {title: '반려동물의 헬스케어 향상을 위한 마이크로바이옴 데이터 유사도 분석 시스템 개발', sub: 'Development of a microbiome data similarity analysis system to improve healthcare for pets'}
  ]
}

export default function Publications(){
  const [ref, progress, inView] = useScrollProgress()
  const active = inView ? progress : 0
  const containerOpacity = 0.4 + active * 0.6
  const containerY = (1 - active) * 16
  const containerScale = 0.985 + active * 0.015
  const containerBlur = (1 - active) * 2
  return (
    <div ref={ref} style={{opacity: containerOpacity, transform: `translateY(${containerY}px) scale(${containerScale})`, filter: `blur(${containerBlur}px)`}} className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 transition-transform duration-500 ease-out">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
          Publications
        </h2>
        
        <div>
          {Object.entries(byYear).map(([year, items], yi)=> (
            <div key={year} className="mb-8" style={{
              transform: `translateY(${(1 - active) * (10 + yi*4)}px)`,
              opacity: 0.4 + active * 0.6
            }}>
              <div className="text-2xl sm:text-3xl font-light mb-4 text-center md:text-left hover:text-blue-600 transition-colors">
                {year}
              </div>
              {items.map((it,i)=> (
                <div 
                  key={`${year}-${i}`}
                  className="mb-6 p-4 bg-gray-50 rounded-lg transition-transform duration-500"
                  style={{
                    transform: `translateY(${(1 - active) * (8 + i*6)}px)`,
                    opacity: 0.45 + active * 0.55
                  }}
                >
                  <div className="font-semibold text-sm sm:text-base leading-relaxed mb-2">
                    {it.title}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {it.sub}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <aside className="text-center md:text-right text-gray-500 bg-gray-50 md:bg-transparent p-6 md:p-0 rounded-lg relative">
        <div className="text-xl sm:text-2xl font-medium mb-4 md:mb-6 hover:text-blue-600 transition-colors">
          2024
        </div>
        <div className="space-y-4 md:space-y-6">
          <div className="text-sm sm:text-base leading-relaxed hover:text-gray-700 transition-colors cursor-pointer">
            반려동물의 헬스케어 향상을 위한 마이크로바이옴 데이터...
          </div>
          <div className="text-sm sm:text-base leading-relaxed hover:text-gray-700 transition-colors cursor-pointer">
            딥러닝 기반 텍스트 스타일 변환 연구
          </div>
          <div className="text-sm sm:text-base leading-relaxed hover:text-gray-700 transition-colors cursor-pointer">
            기타 최근 연구들
          </div>
        </div>
      </aside>
    </div>
  )
}