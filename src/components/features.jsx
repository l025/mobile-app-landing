import gsap from "gsap"
import { useEffect } from "react"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FEATURES } from "../features"
import { AnimateBtn } from "./animate-btn"
import useSize from "../hooks/useSize"

export default function Features() {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

  const windowSize = useSize()

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

      // animate
      // gsap.set(s, { x: -20, opacity: 0 })
      // gsap.to(s, {
      //   scrollTrigger: {
      //     trigger: s,
      //     scrub: 1,
      //     start: "top 90%",
      //     end: "top 20%",
      //     markers: 1,
      //   },
      //   x: 0,
      //   opacity: 1,
      // })
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
    gsap.to(window, {
      duration: 1,
      scrollTo: windowSize.height * (i + 1) + 200,
      ease: "power1.out",
    })
  }

  return (
    <>
      <section
        id="sec-features"
        className="relative z-20 bg-[#242629] py-[20dvh] text-white"
      >
        <div className="container relative z-10 flex">
          <div className="relative min-h-full">
            <nav
              id="nav-features"
              className="sticky left-5 top-0 z-10 flex w-[230px] flex-col gap-4 pt-[20dvh]"
            >
              {FEATURES.map((f, i) => (
                <a
                  key={f.key}
                  id={`feature-nav-${f.key}`}
                  href={`#${f.key}`}
                  onClick={() => handleFeatureClick(f.key, i)}
                >
                  <AnimateBtn>{f.name}</AnimateBtn>
                </a>
              ))}
            </nav>
          </div>
          <div id="features-wrapper">
            {FEATURES.map((f) => (
              <section
                key={f.key}
                id={`feature-${f.key}`}
                className="feature-wrapper"
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
