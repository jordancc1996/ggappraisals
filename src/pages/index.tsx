import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import ContactForm from '@/components/ContactForm'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>GG Appraisals | Professional Real Estate Appraisal Services | Philadelphia & Phoenix</title>
        <meta name="description" content="Professional real estate appraisal, lending, and sales support services in Philadelphia PA and Phoenix AZ. Licensed appraisers with 15+ years experience. Fast turnaround, competitive rates." />
        <meta name="keywords" content="real estate appraisal, property valuation, estate appraisal, divorce appraisal, Philadelphia appraiser, Phoenix appraiser, lending services, sales support" />
        <meta property="og:title" content="GG Appraisals | Professional Real Estate Appraisal Services" />
        <meta property="og:description" content="Professional real estate appraisal, lending, and sales support services in Philadelphia PA and Phoenix AZ." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://your-domain.com" />
      </Head>

      <Layout>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        
        {/* Investor Support Section */}
        <section className="py-20 bg-slate-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl font-bold text-white mb-6">
                  Comprehensive Investor Services
                </h2>
                <p className="font-body text-xl text-gray-300 mb-8">
                  Whether you're flipping properties, building a rental portfolio, or developing commercial projects, our comprehensive investor services provide appraisals, lending solutions, and the insights you need to make informed decisions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                    <span className="font-body text-gray-300">Pre-purchase investment analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                    <span className="font-body text-gray-300">Fix-and-flip financing solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                    <span className="font-body text-gray-300">Renovation value assessments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                    <span className="font-body text-gray-300">Portfolio valuation and lending services</span>
                  </div>
                </div>
                <button className="bg-antique-gold hover:bg-antique-gold/90 text-slate-blue font-semibold px-8 py-3 rounded-md transition-all duration-200 hover:scale-105">
                  Schedule Investor Consultation
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-antique-gold/20 to-transparent p-8 rounded-lg">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-antique-gold mb-2">500+</div>
                      <div className="text-sm text-gray-300">Properties Financed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-antique-gold mb-2">$50M+</div>
                      <div className="text-sm text-gray-300">Total Loan Volume</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-antique-gold mb-2">48hr</div>
                      <div className="text-sm text-gray-300">Average Approval</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-antique-gold mb-2">15+</div>
                      <div className="text-sm text-gray-300">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-slate-blue mb-4">
                Get Started Today
              </h2>
              <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                Contact us for a consultation and receive your professional appraisal quote. Fast, accurate, and reliable service you can trust.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-antique-gold rounded-lg flex items-center justify-center">
                    <span className="text-slate-blue text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-slate-blue">Phone</h4>
                    <p className="font-body text-gray-600">(267) 632-3162</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-antique-gold rounded-lg flex items-center justify-center">
                    <span className="text-slate-blue text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-slate-blue">Email</h4>
                    <p className="font-body text-gray-600">info@ggappraisals.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-antique-gold rounded-lg flex items-center justify-center">
                    <span className="text-slate-blue text-xl">⏱️</span>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-slate-blue">Response Time</h4>
                    <p className="font-body text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home

