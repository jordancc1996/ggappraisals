import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us | GG Appraisals | Professional Real Estate Appraisal Services</title>
        <meta name="description" content="Learn about GG Appraisals - professional real estate appraisal, lending, and sales support services with 15+ years experience in Philadelphia PA and Phoenix AZ." />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-slate-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-display text-5xl font-bold text-white mb-6">
                About GG Appraisals
              </h1>
              <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto">
                Professional real estate appraisal, lending, and sales support services with deep local market knowledge and comprehensive expertise across Pennsylvania and Arizona.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl font-bold text-slate-blue mb-6">
                  Our Story
                </h2>
                <p className="font-body text-lg text-gray-600 mb-6">
                  Founded in 2010, GG Appraisals has grown from a local appraisal service to a comprehensive real estate solutions provider. We combine traditional appraisal expertise with modern lending services and sales support to serve the complete spectrum of real estate needs.
                </p>
                <p className="font-body text-lg text-gray-600 mb-6">
                  Our expansion into lending services and sales support reflects our commitment to providing clients with end-to-end real estate solutions. Whether you're an investor seeking financing, an attorney requiring expert valuation, or a homeowner navigating a complex transaction, we have the expertise and credentials to help.
                </p>
                <p className="font-body text-lg text-gray-600">
                  With our Pennsylvania real estate salesperson license and extensive lending network, we offer a unique combination of valuation accuracy, financing solutions, and transaction support that sets us apart in the industry.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-antique-gold/10 to-slate-blue/10 p-8 rounded-lg">
                  <h3 className="font-display text-2xl font-bold text-slate-blue mb-6">
                    Our Mission
                  </h3>
                  <p className="font-body text-gray-600 mb-6">
                    To provide accurate, reliable, and comprehensive real estate services that empower our clients to make informed decisions with confidence.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                      <span className="font-body text-gray-600">Accuracy and reliability in every appraisal</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                      <span className="font-body text-gray-600">Comprehensive lending solutions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                      <span className="font-body text-gray-600">Professional sales support services</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                      <span className="font-body text-gray-600">Exceptional client service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-slate-blue mb-4">
                Our Track Record
              </h2>
              <p className="font-body text-xl text-gray-600">
                Numbers that reflect our commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-antique-gold mb-2">2,500+</div>
                <div className="font-body text-gray-600">Appraisals Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-antique-gold mb-2">$50M+</div>
                <div className="font-body text-gray-600">Total Loan Volume</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-antique-gold mb-2">15+</div>
                <div className="font-body text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-antique-gold mb-2">500+</div>
                <div className="font-body text-gray-600">Properties Financed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-slate-blue mb-4">
                Credentials & Certifications
              </h2>
              <p className="font-body text-xl text-gray-600">
                Licensed and certified to serve your real estate needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="font-body font-semibold text-slate-blue mb-2">Licensed Real Estate Appraiser</h3>
                <p className="font-body text-gray-600 text-sm">Certified in Pennsylvania and Arizona</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-4">🏠</div>
                <h3 className="font-body font-semibold text-slate-blue mb-2">PA Real Estate Salesperson</h3>
                <p className="font-body text-gray-600 text-sm">Licensed for sales support services</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-4">✅</div>
                <h3 className="font-body font-semibold text-slate-blue mb-2">FHA Approved Appraiser</h3>
                <p className="font-body text-gray-600 text-sm">Authorized for government-backed loans</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About
