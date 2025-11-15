import { useState, useEffect, useRef } from 'react'

export function useCountUp(end, start = 0, duration = 2000, suffix = '') {
    const [count, setCount] = useState(start)
    const requestRef = useRef()
    const startTimeRef = useRef()

    useEffect(() => {
        // Reset animation when end value changes
        startTimeRef.current = null

        const animate = (currentTime) => {
            if (!startTimeRef.current) {
                startTimeRef.current = currentTime
            }
            const elapsed = currentTime - startTimeRef.current
            const progress = Math.min(elapsed / duration, 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentCount = Math.floor(start + (end - start) * easeOutQuart)

            setCount(currentCount)

            if (progress < 1) {
                requestRef.current = requestAnimationFrame(animate)
            } else {
                setCount(end)
            }
        }

        if (end > 0) {
            requestRef.current = requestAnimationFrame(animate)
        }

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current)
            }
        }
    }, [end, start, duration])

    return count
}


