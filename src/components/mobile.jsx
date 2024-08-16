import gsap from "gsap"
import { useLayoutEffect } from "react"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FEATURES } from "@/features"

export default function Mobile() {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

  useLayoutEffect(() => {
    gsap.to("#mobile-container", {
      scrollTrigger: {
        trigger: "#sec-features",
        start: "top 70%",
        end: "top top",
        scrub: 1,
      },
      y: "20dvh",
      ease: "power1.out",
      yoyo: 1,
      repeat: 1,
    })
    gsap.to("#mobile-container", {
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
      },
      y: "10dvh",
      ease: "power1",
      yoyo: 1,
      repeat: 1,
    })
  }, [])

  function handleMobileClick() {
    // gsap.to(window, {
    //   duration: 2,
    //   scrollTo: "#features-wrapper",
    //   autoKill: true,
    //   ease: "power2",
    // })
  }

  return (
    <section
      id="mobile-container"
      className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-30"
    >
      <div className="relative flex h-screen w-screen items-center justify-center bg-gray-600">
        <div className="h-[600px] w-96 overflow-hidden bg-gray-100">
          <div className="screen">
            <div className="screen-wrapper">
              <img src="/assets/s1.png" alt="" />
            </div>
          </div>
          {FEATURES.map((f) => (
            <div key={f.key} className="screen">
              <div className="screen-wrapper">
                <img src={f.screen} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container relative mx-auto hidden min-h-screen">
        <div className="screen -mb-[100dvh]">
          <div id="mobile-wrapper" onClick={handleMobileClick}>
            <div class="mask3 h-screen max-h-[75dvh] w-full">
              <img
                src="/assets/iphone.png"
                alt=""
                className="h-screen max-h-[75dvh]"
              />
            </div>
            <div className="hidden h-screen max-h-[75dvh] rounded-3xl bg-gray-500 opacity-50 ring-8 ring-gray-500 backdrop-blur-md"></div>
          </div>
        </div>
        <div className="relative">
          <div className="screen">
            <div className="screen-wrapper">
              <img src="/assets/s1.png" alt="" />
            </div>
          </div>
          {FEATURES.map((f) => (
            <div key={f.key} className="screen">
              <div className="screen-wrapper">
                <img src={f.screen} />
              </div>
            </div>
          ))}
          <div className="h-[20dvh]"></div>
          <div className="screen">
            <div className="screen-wrapper">
              <img src="/assets/s1.png" alt="" />
            </div>
          </div>
          <div className="h-[40dvh]"></div>
        </div>
      </div>
    </section>
  )
}
