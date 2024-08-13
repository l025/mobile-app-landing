import CloudDownloadIcon from "@mui/icons-material/CloudDownload"
import ManageSearchIcon from "@mui/icons-material/ManageSearch"
import StarIcon from "@mui/icons-material/Star"
import LineWeightIcon from "@mui/icons-material/LineWeight"
import gsap from "gsap"
import { useEffect, useLayoutEffect } from "react"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FEATURES } from "../features"

export default function HeroSection() {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

  //   ScrollTrigger.config({
  //     autoRefreshEvents: "visibilitychange,DOMContentLoaded,load, resize",
  //   })

  useLayoutEffect(() => {
    gsap.to("#sec-hero", {
      scrollTrigger: {
        trigger: "#sec-features",
        start: "top 98%",
        end: "top top",
        scrub: 1,
      },
      scaleX: 0.95,
      y: 150,
      borderRadius: "100px",
      ease: "power4.out",
    })
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
    gsap.to(window, {
      duration: 2,
      scrollTo: "#features-wrapper",
      autoKill: true,
      ease: "power2",
    })
  }

  return (
    <>
      <section id="sec-hero" className="relative z-30 bg-[#F4F5F9]">
        <div className="container relative flex min-h-screen flex-1 flex-col justify-center gap-20 pl-8 pr-[400px] pt-24">
          <div className="mb-16 flex max-w-[50dvw] flex-col gap-4">
            <h1 className="slide-up text-[3rem] font-semibold text-neutral-900">
              Lorem ipsum dolor
            </h1>
            <p className="slide-up text-lg font-light text-neutral-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              voluptates ipsam recusandae perspiciatis tempore animi similique,
              eum maiores mollitia eius omnis eveniet quae, culpa atque, illo
              magni temporibus enim. Error.
            </p>
          </div>

          <div className="slide-up flex items-center justify-center self-start rounded-xl border border-dashed border-gray-400 text-sm opacity-60">
            <div className="flex min-w-36 flex-1 flex-col items-center justify-center px-8 py-3">
              <CloudDownloadIcon fontSize="large" className="mb-0.5" />
              <strong>1M+</strong>
              <span>Downloads</span>
            </div>
            <div className="flex min-w-36 flex-1 flex-col items-center justify-center border-l border-dashed border-gray-400 px-8 py-3">
              <StarIcon fontSize="large" className="mb-0.5" />
              <strong>4.7 *</strong>
              <span className="text-nowrap">3K reviews</span>
            </div>

            <div className="flex min-w-36 flex-1 flex-col items-center justify-center border-l border-dashed border-gray-400 px-8 py-3">
              <LineWeightIcon fontSize="large" className="mb-0.5" />
              <strong>6.4 MB</strong>
              <span>Size</span>
            </div>
          </div>

          <div className="flex items-center justify-start gap-6">
            <a href="#" className="slide-up btn">
              Google Play
            </a>
            <a href="#" className="slide-up btn">
              Apple Store
            </a>
          </div>
        </div>
      </section>

      <section
        id="mobile-container"
        className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-30"
      >
        <div className="container relative mx-auto min-h-screen">
          <div className="screen -mb-[100dvh]">
            <div id="mobile-wrapper" onClick={handleMobileClick}>
              <img src="/assets/iphone.png" alt="" className="max-h-[75dvh]" />
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
    </>
  )
}
