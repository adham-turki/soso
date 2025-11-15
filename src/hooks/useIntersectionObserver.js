import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsIntersecting(true)
        setHasAnimated(true)
      }
    }, { threshold: 0.1, ...options })

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [hasAnimated, options])

  return [ref, isIntersecting]
}

