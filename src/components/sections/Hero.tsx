"use client"
import { Button } from "@/components/ui/button"
import { content } from "@/lib/content"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300) 
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="hero-section" className="container relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
      {/* Decorative Elements */}
      <div className="absolute left-1/4 top-1/4 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute right-1/4 bottom-1/4 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />

      <div className="absolute left-10 top-1/2 w-8 h-8 bg-orange-400 rounded-full animate-bounce" />
      <div className="absolute right-10 bottom-1/4 w-8 h-8 bg-emerald-400 rounded animate-bounce" />
    
      {/* Main Content */}
      <div className="relative space-y-8 max-w-3xl text-center">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          <span
            className={`inline-block opacity-0 transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100 delay-0" : "opacity-0"
            }`}
          >
            {content.hero.title.line1}
          </span>
          <div className="flex items-center justify-center gap-2 my-2">
            <span
              className={`inline-block opacity-0 transition-opacity duration-1000 ease-in-out ${
                isVisible ? "opacity-100 delay-300" : "opacity-0"
              }`}
            >
              {content.hero.title.line2}
            </span>
            <div className="w-3 h-3 rounded-full bg-red-500" />
          </div>
          <span
            className={`relative inline-block opacity-0 transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100 delay-1000" : "opacity-0"
            }`}
          >
            <span className="relative z-10">{content.hero.title.line3}</span>
            <span className="absolute inset-0 bg-emerald-200 rounded-lg rotate-2 pb-10 px-30 top-5 z-0" />
          </span>
        
        </h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          {content.hero.description}
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button className="bg-black text-white hover:bg-black/90 px-8 transition duration-300 transform rounded-3xl hover:scale-105">
            Join Community
          </Button>
          <Link
            href="#"
            className="text-sm underline underline-offset-4 hover:text-blue-500 transition-colors duration-300"
          >
            See more details about us
          </Link>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute right-10 top-1/2 bottom-0 w-1 flex flex-col gap-2">
        <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
        <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
        <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
        <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
      </div>
    </div>
  )
}
