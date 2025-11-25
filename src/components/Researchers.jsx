import React from 'react'
import { useScrollProgress } from '../hooks/useScrollAnimation'

const students = new Array(7).fill(0).map((_,i)=>({
  name: `김학생 ${i+1}`,
  major: '컴퓨터공학부',
  role: '백엔드 개발',
  image: `/src/assets/animal${(i%10)+1}.jpg`
}))

const graduates = new Array(5).fill(0).map((_,i)=>({
  name: `졸업생 ${i+1}`,
  major: '컴퓨터공학부',
  image: `/src/assets/animal${((i+3)%6)+1}.jpg`
}))

function Card({p, index}){
  return (
    <div 
      className="w-48 sm:w-52 md:w-56 bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 cursor-pointer group transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="h-32 sm:h-36 md:h-40 w-full overflow-hidden relative">
        <img 
          src={p.image} 
          alt={p.name} 
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="text-xs sm:text-sm text-gray-500">{p.major}</div>
        <div className="font-semibold mt-1 text-sm sm:text-base">{p.name}</div>
        <div className="text-xs text-gray-400 mt-2">{p.role || '연구원'}</div>
      </div>
    </div>
  )
}

export default function Researchers(){
  const [ref, progress, inView] = useScrollProgress()
  const active = inView ? progress : 0
  const opacity = 0.45 + active * 0.55
  const translateY = (1 - active) * 16
  const scale = 0.985 + active * 0.015
  const blur = (1 - active) * 2
  return (
    <div ref={ref} style={{opacity, transform: `translateY(${translateY}px) scale(${scale})`, filter: `blur(${blur}px)`}} className="transition-transform duration-500 ease-out">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
        Researchers
      </h2>

      <div className="mb-8 md:mb-12">
        <h3 className="font-semibold mb-4 text-lg sm:text-xl hover:text-blue-600 transition-colors">Student</h3>
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-2 md:px-0 scrollbar-hide">
          {students.map((s,i)=> 
            <div key={`student-${i}`} style={{
              transform: `translateY(${(1 - active) * (8 + i*2)}px)`,
              opacity: 0.45 + active * 0.55
            }} className="transition-transform duration-500">
              <Card p={s} index={i} />
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-lg sm:text-xl hover:text-blue-600 transition-colors">Graduate</h3>
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-2 md:px-0 scrollbar-hide">
          {graduates.map((s,i)=> 
            <div key={`graduate-${i}`} style={{
              transform: `translateY(${(1 - active) * (6 + i*2)}px)`,
              opacity: 0.45 + active * 0.55
            }} className="transition-transform duration-500">
              <Card p={s} index={i} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}