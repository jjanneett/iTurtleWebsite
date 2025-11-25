import React from 'react'
import { useScrollProgress } from '../hooks/useScrollAnimation'

const publications = [
  { title: '딥러닝 기반 공적인 글 작성을 위한 텍스트 스타일 변환 지원 시스템', meta: '한국정보통신학회논문지, 28권, 11호, pp.1330-1335, 2024.11' },
  { title: '반려동물의 건강 기능성 식품 추천을 위한 마이크로바이옴데이터 기계독해 시스템', meta: '한국차세대컴퓨팅학회 논문지, 20권, 1호, pp.7-16, 2024.02' },
  { title: '이미지 데이터와 1차원 배열 옵티마이저에 따른 정확도 변화', meta: '한국지식정보기술학회 논문지, 18권, 5호, pp.1082-1089, 2023.10' }
]

export default function Professor(){
  const [ref, progress, inView] = useScrollProgress()
  const active = inView ? progress : 0
  const translateY = (1 - active) * 20
  const opacity = 0.4 + active * 0.6
  const scale = 0.985 + active * 0.015
  const blur = (1 - active) * 2
  return (
    <div ref={ref} style={{transform: `translateY(${translateY}px) scale(${scale})`, opacity, filter: `blur(${blur}px)`}} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start transition-transform duration-500 ease-out">
      <div className="col-span-1 flex flex-col items-center lg:items-start">
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden ring-4 ring-gray-50 shadow-lg">
          <img src="/src/assets/prof-avatar.jpg" alt="prof" className="w-full h-full object-cover" />
        </div>

        <div className="mt-6 text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold">
            방진숙 
            <span className="block sm:inline font-semibold text-sm sm:text-base sm:ml-2 mt-1 sm:mt-0">
                Jinsuk Bang
            </span>
          </h3>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">AI공과대학 컴퓨터공학부</p>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">Email: bluegony@hoseo.edu</p>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Publications</h2>
        
        <div className="space-y-6">
          {publications.map((p,i)=> (
            <div key={i} className="border-l-2 border-gray-100 pl-4">
              <h4 className="font-semibold text-sm sm:text-base leading-relaxed">{p.title}</h4>
              <div className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">{p.meta}</div>
            </div>
          ))}

          <hr className="mt-8 border-gray-200" />

          <div className="mt-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Book</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="text-sm sm:text-base">• 인공지능과 데이터 분석 (2023.01)</li>
              <li className="text-sm sm:text-base">• 소프트웨어공학 3단계 (2022.09)</li>
              <li className="text-sm sm:text-base">• 파이썬을 이용한 웹크롤링과 데이터 분석 (2021.09)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}