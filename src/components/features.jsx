import gsap from "gsap"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import data from "@/../data/app.json"
import { AnimateBtn } from "./animate-btn"
import useSize from "../hooks/useSize"

export default function Features() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const FEATURES = data.features

  useEffect(() => {
    const links = gsap.utils.toArray("#nav-features a")
    const features = gsap.utils.toArray(".feature-content")

    features.forEach((s, i) => {
      //nav
      const link = links[i]
      ScrollTrigger.create({
        trigger: s,
        start: "top center",
        end: "center top",
        onEnter: () => link.classList.add("active"),
        onEnterBack: () => link.classList.add("active"),
        onLeave: () => link.classList.remove("active"),
        onLeaveBack: () => link.classList.remove("active"),
      })

      // content
      gsap.to(s, {
        scrollTrigger: {
          trigger: s,
          start: "center -10%",
          end: "center -25%",
          scrub: 1,
        },
        x: -50,
        opacity: 0,
      })
    })
  }, [])

  function handleFeatureClick(key, i) {
    // const windowSize = window.innerHeight
    // const targetPosition = windowSize * (i + 1) + 200
    // const currentPosition = window.scrollY
    // const scrollGap = Math.abs(targetPosition - currentPosition)
    // const duration = scrollGap / (windowSize * FEATURES.length - 2)
    // gsap.to(window, {
    //   duration: duration,
    //   scrollTo: targetPosition,
    //   ease: "power1.out",
    // })
  }

  return (
    <>
      <section
        id="sec-features"
        className="relative z-20 bg-[#242629] py-[20dvh] text-white"
      >
        <div className="container relative z-10 flex flex-col px-4 lg:flex-row">
          <div className="relative min-h-full">
            <nav
              id="nav-features"
              className="sticky top-0 z-10 hidden flex-row flex-wrap gap-2 pt-8 md:flex lg:left-5 lg:w-[230px] lg:flex-col lg:gap-4 lg:pt-[20dvh]"
            >
              {FEATURES.map((f, i) => (
                <a
                  key={`feature-nav-${f.key}`}
                  id={`feature-nav-${f.key}`}
                  href={`#${f.key}`}
                  onClick={() => handleFeatureClick(f.key, i)}
                >
                  <AnimateBtn>{f.name}</AnimateBtn>
                </a>
              ))}
            </nav>
          </div>
          <div id="features-wrapper" className="relative w-full">
            {FEATURES.map((f) => (
              <section
                key={`feature-${f.key}`}
                id={`feature-${f.key}`}
                className="feature-wrapper"
                data-screen={`screen-${f.key}`}
              >
                <div className="feature-content">
                  <h2>{f.title}</h2>
                  <p>{f.desc}</p>
                </div>
              </section>
            ))}
            <section className="h-[20dvh]"></section>
          </div>
          <div className="w-[350px]"></div>
        </div>
      </section>
    </>
  )
}
