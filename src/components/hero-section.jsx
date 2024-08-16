"use client"
import CloudDownloadIcon from "@mui/icons-material/CloudDownload"
import StarIcon from "@mui/icons-material/Star"
import LineWeightIcon from "@mui/icons-material/LineWeight"
import gsap from "gsap"
import { useLayoutEffect } from "react"
import Mobile2D from "./mobile2d"
// import useScreenType from "react-screentype-hook"

export default function HeroSection() {
  // const screenType = useScreenType()

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
      // borderRadius: screenType.isMobile ? "50px" : "100px",
      borderRadius: "50px",
      ease: "power4.out",
    })
  }, [])

  return (
    <>
      <section
        id="sec-hero"
        data-screen={`screen-header`}
        className="relative z-30 bg-[#F4F5F9]"
      >
        <div className="container relative flex min-h-screen flex-1 flex-col justify-start gap-4 px-4 pb-6 pt-24 lg:justify-center lg:gap-20 lg:pl-8 lg:pr-[400px] rtl:lg:pl-[400px] rtl:lg:pr-8">
          <div className="flex flex-col gap-4 lg:mb-16 lg:max-w-[50dvw]">
            <h1 className="slide-up text-[2rem] font-semibold text-neutral-900 lg:text-[3rem]">
              Lorem ipsum dolor
            </h1>
            <p className="slide-up text-base font-light text-neutral-500 lg:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              voluptates ipsam recusandae perspiciatis tempore animi similique,
              eum maiores mollitia eius omnis eveniet quae, culpa atque, illo
              magni temporibus enim. Error.
            </p>
          </div>

          <div className="slide-up flex scale-75 items-center justify-center self-start rounded-xl border border-dashed border-gray-400 text-sm opacity-60 lg:scale-100">
            <div className="flex min-w-28 flex-1 flex-col items-center justify-center px-5 py-3 lg:min-w-36 lg:px-8">
              <CloudDownloadIcon fontSize="large" className="mb-0.5" />
              <strong>1M+</strong>
              <span>Downloads</span>
            </div>
            <div className="flex min-w-28 flex-1 flex-col items-center justify-center border-dashed border-gray-400 px-5 py-3 lg:min-w-36 lg:px-8 ltr:border-l rtl:border-r">
              <StarIcon fontSize="large" className="mb-0.5" />
              <strong>4.7 *</strong>
              <span className="text-nowrap">3K reviews</span>
            </div>

            <div className="flex min-w-28 flex-1 flex-col items-center justify-center border-dashed border-gray-400 px-5 py-3 lg:min-w-36 lg:px-8 ltr:border-l rtl:border-r">
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

      <Mobile2D screenIndex={1} />
    </>
  )
}
