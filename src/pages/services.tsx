import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'

const Services: React.FC = () => {
  const services = [
    {
      title: 'Estate Appraisal',
      description: 'Professional valuations for estate planning and settlement purposes, ensuring accurate asset distribution and tax compliance.',
      features: ['IRS compliant valuations', 'Estate planning support', 'Probate court accepted reports', 'Tax assessment appeals'],
      pricing: 'Starting at $450',
      turnaround: '3-5 business days'
    },
    {
      title: 'Divorce Appraisal',
      description: 'Accurate property valuations for divorce proceedings and equitable asset division with court-accepted documentation.',
      features: ['Court-accepted reports', 'Neutral third-party valuation', 'Detailed market analysis', 'Expert testimony available'],
      pricing: 'Starting at $425',
      turnaround: '2-4 business days'
    },
    {
      title: 'Investor Rehab Support',
      description: 'Comprehensive support for real estate investors including pre-purchase analysis, renovation value assessment, and after-repair value estimates.',
      features: ['Pre-purchase investment analysis', 'Renovation value assessment', 'After-repair value (ARV) estimates', 'Market trend analysis'],
      pricing: 'Starting at $375',
      turnaround: '1-3 business days'
    },
    {
      title: 'Pre-Listing Valuation',
      description: 'Strategic pricing analysis to help sellers maximize their property value and reduce time on market.',
      features: ['Competitive market analysis', 'Pricing strategy recommendations', 'Market positioning advice', 'Quick turnaround'],
      pricing: 'Starting at $350',
      turnaround: '1-2 business days'
    },
    {
      title: 'Tax Appeal Support',
      description: 'Professional appraisals and expert testimony to support property tax assessment appeals and reduce tax burden.',
      features: ['Assessment challenge documentation', 'Expert testimony', 'Market value analysis', 'Tax savings calculation'],
      pricing: 'Starting at $500',
      turnaround: '3-5 business days'
    },
    {
      title: 'PMI Removal',
      description: 'Accurate current market valuations to help homeowners eliminate private mortgage insurance payments.',
      features: ['Current market value assessment', 'Loan-to-value calculation', 'PMI removal documentation', 'Lender-accepted reports'],
      pricing: 'Starting at $400',
      turnaround: '2-3 business days'
    },
    {
      title: 'Investor Lending Services',
      description: 'Comprehensive lending solutions for real estate investors, including fix-and-flip loans, rental property financing, and portfolio lending.',
      features: ['Fix-and-flip financing', 'Rental property loans', 'Portfolio lending solutions', 'Fast approval process'],
      pricing: 'Competitive rates',
      turnaround: '48-72 hours approval'
    },
    {
      title: 'Sales Support Services',
      description: 'Professional real estate sales support with licensed expertise in Pennsylvania, helping clients navigate complex transactions.',
      features: ['Licensed PA real estate professional', 'Transaction coordination', 'Market analysis and pricing', 'Negotiation support'],
      pricing: 'Commission-based',
      turnaround: 'Ongoing support'
    }
  ]

  return (
    <>
      <Head>
        <title>Services | GG Appraisals | Real Estate Appraisal, Lending & Sales Support</title>
        <meta name="description" content="Comprehensive real estate services including appraisals, investor lending, and sales support in Philadelphia PA and Phoenix AZ. Licensed professionals with fast turnaround." />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-slate-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-display text-5xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive real estate solutions including professional appraisals, investor lending services, and sales support across Pennsylvania and Arizona.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-display text-2xl font-bold text-slate-blue mb-4">
                    {service.title}
                  </h3>
                  <p className="font-body text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-body font-semibold text-slate-blue mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                          <span className="font-body text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h5 className="font-body font-semibold text-slate-blue text-sm">Pricing</h5>
                      <p className="font-body text-gray-600">{service.pricing}</p>
                    </div>
                    <div>
                      <h5 className="font-body font-semibold text-slate-blue text-sm">Turnaround</h5>
                      <p className="font-body text-gray-600">{service.turnaround}</p>
                    </div>
                  </div>

                  <button className="w-full bg-antique-gold hover:bg-antique-gold/90 text-slate-blue font-semibold py-3 px-6 rounded-md transition-all duration-200 hover:scale-105">
                    Request Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-slate-blue mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-body text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today for a consultation and receive your professional quote. Fast, accurate, and reliable service you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-antique-gold hover:bg-antique-gold/90 text-slate-blue font-semibold px-8 py-3 rounded-md transition-all duration-200 hover:scale-105"
              >
                Request Consultation
              </a>
              <a
                href="tel:(267) 632-3162"
                className="border-2 border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white font-semibold px-8 py-3 rounded-md transition-all duration-200"
              >
                Call (267) 632-3162
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Services
