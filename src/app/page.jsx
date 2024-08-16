"use client"

import Features from "@/components/features"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-screen">
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </>
  )
}
