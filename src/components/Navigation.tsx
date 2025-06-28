import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavItem } from '@/types'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ]

  const isActive = (path: string): boolean => router.pathname === path

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold text-slate-blue">
              GG Appraisals
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.name}
                href={item.path}
                className={`font-body font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-antique-gold'
                    : 'text-gray-700 hover:text-antique-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-antique-gold hover:bg-antique-gold/90 text-slate-blue font-semibold px-6 py-2 rounded-md transition-all duration-200 hover:scale-105"
            >
              Request Appraisal
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-antique-gold focus:outline-none focus:text-antique-gold"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-antique-gold bg-gray-50'
                    : 'text-gray-700 hover:text-antique-gold hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="/contact"
                className="block w-full text-center bg-antique-gold hover:bg-antique-gold/90 text-slate-blue font-semibold px-6 py-2 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Request Appraisal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

