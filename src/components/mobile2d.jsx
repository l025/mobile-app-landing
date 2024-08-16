import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef } from "react"
import data from "@/../data/app.json"

export default function Mobile2D({}) {
  const mobileContainerRef = useRef(null)
  const SCREENS = [data.hero, ...data.features, data.footer]

  useLayoutEffect(() => {
    gsap.set(`.screen-wrapper:nth-child(1)`, { y: 0 })
    SCREENS.forEach((s, i) => {
      gsap.to(`.screen-wrapper:nth-child(${i + 1})`, {
        scrollTrigger: {
          trigger: `[data-screen='screen-${s.key}']`,
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        },
        y: 0,
        ease: "power3.inOut",
      })
    })
  }, [])

  useLayoutEffect(() => {
    const mobileContainer = mobileContainerRef.current
    if (!mobileContainer) return

    gsap.fromTo(
      mobileContainer,
      { opacity: 0, x: -50 },
      { x: 0, opacity: 1, delay: 0.5 },
    )

    gsap.to(mobileContainer, {
      scrollTrigger: {
        trigger: "#sec-features",
        start: "top 70%",
        end: "top top",
        scrub: 1,
      },
      y: "20dvh",
      ease: "power1.out",
      duration: 2,
      repeat: 1,
      yoyo: true,
    })

    gsap.to(mobileContainer, {
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
      },
      y: "10dvh",
      ease: "power1",
      duration: 2,
      repeat: 1,
      yoyo: true,
    })
  }, [])

  return (
    <section
      id="mobile-container"
      className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-30 w-screen"
      ref={mobileContainerRef}
    >
      <div className="container relative h-screen">
        <div className="mobile-frame">
          <img
            src={data.app.iphoneModelUrl}
            alt="iphone"
            className="drop-shadow-lg"
          />
        </div>
        <div
          id="screens-wrapper"
          className="mobile-frame !bottom-[37px] scale-[99.5%] scale-x-[94.5%] overflow-hidden rounded-[20px] lg:mt-2 lg:rounded-[50px]"
        >
          {SCREENS.map((f) => (
            <div key={`screen-${f.key}`} className="screen-wrapper">
              <img src={f.screen} alt={f.name} />
            </div>
          ))}
        </div>
        <div className="mobile-frame">
          <img
            src={data.app.iphoneCameraUrl}
            alt=""
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 scale-[40%] transform lg:top-3 lg:scale-100"
          />
        </div>
      </div>
    </section>
  )
}
