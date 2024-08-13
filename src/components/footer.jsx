export default function Footer() {
  return (
    <>
      <footer className="absolute bottom-0 left-0 right-0 z-20 min-h-screen bg-[#F4F5F9] text-gray-900">
        <div className="container mx-auto flex h-[100dvh] flex-col justify-center gap-2">
          <div className="bg-gray-50 p-20">Testimonials</div>
          <div className="bg-gray-50 p-20">Socials</div>
          <div className="bg-gray-50 p-20">CTA</div>
          <div className="bg-gray-50 p-20">Contact us</div>
        </div>
      </footer>
    </>
  )
}
