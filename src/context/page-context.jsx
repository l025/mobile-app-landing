"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useLayoutEffect,
  useRef,
} from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const PageContext = createContext({
  lenis: null,
})

export const PageProvider = ({ children }) => {
  const [lenis, setLenis] = useState()
  const reqIdRef = useRef()

  useEffect(() => {
    const animate = (time) => {
      lenis?.raf(time)
      reqIdRef.current = requestAnimationFrame(animate)
    }
    reqIdRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(reqIdRef.current)
  }, [lenis])

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    gsap.registerPlugin(ScrollTrigger)

    setLenis(lenis)

    document.querySelectorAll(".slide-up").forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2",
          delay: index * 0.05,
        },
      )
    })

    document
      .querySelectorAll(".slide-down")
      .forEach((item) =>
        gsap.fromTo(
          item,
          { opacity: 0, y: -50 },
          { y: 0, opacity: 1, delay: 0.3 },
        ),
      )

    return () => {
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  const memoedValue = useMemo(
    () => ({
      lenis,
    }),
    [],
  )

  return (
    <PageContext.Provider value={memoedValue}>{children}</PageContext.Provider>
  )
}
export default function usePage() {
  return useContext(PageContext)
}
