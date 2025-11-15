import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export function Counter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, isIntersecting] = useIntersectionObserver()

  useEffect(() => {
    if (!isIntersecting) return

    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(animate)
  }, [isIntersecting, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

