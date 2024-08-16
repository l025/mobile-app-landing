import gsap from "gsap"
import { useLayoutEffect } from "react"

export default function Footer() {
  useLayoutEffect(() => {
    // gsap.set("footer", { scaleX: 0.95, y: -150, borderRadius: "100px" })
    gsap.to("footer", {
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
      scaleX: 1,
      y: 0,
      borderRadius: "0px",
      ease: "power4.out",
    })
  }, [])
  return (
    <>
      <footer
        data-screen={`screen-footer`}
        className="relative z-20 min-h-screen bg-[#F4F5F9] text-gray-900"
      >
        <div className="container mx-auto flex min-h-[100dvh] flex-col justify-center gap-2">
          <div className="bg-gray-50 p-20">Testimonials</div>
          <div className="bg-gray-50 p-20">Socials</div>
          <div className="bg-gray-50 p-20">CTA</div>
          <div className="bg-gray-50 p-20">Contact us</div>
        </div>
      </footer>
    </>
  )
}
