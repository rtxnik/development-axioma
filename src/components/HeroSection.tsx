"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#0a0a0b]">
      {/* Loading Animation */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative w-24 h-24">
          <Image
            src="https://ext.same-assets.com/2648034400/937743739.svg"
            alt="Loading"
            fill
            className="animate-spin-slow opacity-80"
          />
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/50 to-[#0a0a0b]" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="relative w-6 h-10">
          <Image
            src="https://ext.same-assets.com/2648034400/649176101.svg"
            alt="Scroll down"
            fill
            className="animate-bounce"
          />
        </div>
      </div>
    </section>
  )
}
