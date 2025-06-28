import React from 'react'
import Link from 'next/link'

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-slate-blue mb-6">
              Trusted Expertise Since 2010
            </h2>
            <p className="font-body text-xl text-gray-600 mb-6">
              GG Appraisals combines deep local market knowledge with comprehensive real estate services, offering professional appraisals, investor lending solutions, and sales support across Pennsylvania and Arizona.
            </p>
            <p className="font-body text-gray-600 mb-8">
              Our licensed team brings over 15 years of experience in property valuation, real estate financing, and market analysis. We serve lenders, attorneys, estate planners, real estate investors, and individual property owners with accurate, timely, and reliable services.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-antique-gold mb-2">2,500+</div>
                <div className="text-sm text-gray-600">Appraisals Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-antique-gold mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            <Link
              href="/about"
              className="bg-antique-gold hover:bg-antique-gold/90 text-slate-blue font-semibold px-8 py-3 rounded-md transition-all duration-200 hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-antique-gold/10 to-slate-blue/10 p-8 rounded-lg">
              <h3 className="font-display text-2xl font-bold text-slate-blue mb-6">
                Our Credentials
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                  <span className="font-body text-gray-600">Licensed Real Estate Appraiser</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                  <span className="font-body text-gray-600">PA Real Estate Salesperson License</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                  <span className="font-body text-gray-600">Certified Residential Appraiser</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                  <span className="font-body text-gray-600">FHA Approved Appraiser</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

