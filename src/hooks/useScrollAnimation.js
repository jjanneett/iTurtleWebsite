import { useEffect, useRef, useState } from 'react'

// Returns ref and continuous progress (0..1) based on element center vs viewport center
export const useScrollProgress = () => {
  const ref = useRef(null)
  const frameRef = useRef(0)
  const [progress, setProgress] = useState(0)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      frameRef.current = 0
      if (!el) return
      const rect = el.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      const elementCenter = rect.top + rect.height / 2
      const screenCenter = windowHeight / 2
      const maxDistance = windowHeight / 2 + rect.height / 2
      let p = 1 - Math.abs(elementCenter - screenCenter) / maxDistance
      p = Math.max(0, Math.min(1, p))
      setProgress(p)
    }

    const onScroll = () => {
      if (frameRef.current) return
      frameRef.current = requestAnimationFrame(update)
    }

    const io = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
      if (entry.isIntersecting) {
        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
      } else {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      }
    })

    io.observe(el)

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return [ref, progress, inView]
}

export {}