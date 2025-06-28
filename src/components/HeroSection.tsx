import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { HeroSlide } from '@/types'

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [scrollY, setScrollY] = useState<number>(0)

  const slides: HeroSlide[] = [
    {
      image: '/images/philadelphia-luxury.webp',
      location: 'Philadelphia, PA',
      title: 'Professional Real Estate Appraisals',
      subtitle: 'Trusted valuation expertise for lenders, attorneys, estate planners, and investors with deep local market knowledge across Pennsylvania and Arizona'
    },
    {
      image: '/images/phoenix-luxury.jpg',
      location: 'Phoenix, AZ',
      title: 'Expert Property Valuations',
      subtitle: 'Comprehensive appraisal, lending, and sales support services backed by 15+ years of experience and local market expertise'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    return () => {
      clearInterval(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [slides.length])

  const handleSlideChange = (index: number): void => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide: HeroSlide, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Location Badge */}
            <div className="inline-block bg-antique-gold/20 backdrop-blur-sm border border-antique-gold/30 rounded-full px-6 py-2 mb-6">
              <span className="text-antique-gold font-body font-medium">
                SERVING {slides[currentSlide].location.toUpperCase()}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p className="font-body text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-antique-gold hover:bg-antique-gold/90 text-slate-blue font-semibold px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 group"
              >
                Request Appraisal
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-slate-blue font-semibold px-8 py-4 rounded-md transition-all duration-200 group"
              >
                Our Services
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index: number) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-antique-gold' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center space-y-2 text-white">
          <span className="font-body text-sm">Scroll</span>
          <div className="w-px h-8 bg-white/50"></div>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

