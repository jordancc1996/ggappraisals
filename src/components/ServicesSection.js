import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      title: 'Estate Appraisal',
      description: 'Professional valuations for estate planning and settlement purposes, ensuring accurate asset distribution and tax compliance.',
      features: ['IRS compliant valuations', 'Estate planning support', 'Probate court accepted reports', 'Tax assessment appeals']
    },
    {
      title: 'Divorce Appraisal',
      description: 'Accurate property valuations for divorce proceedings and equitable asset division with court-accepted documentation.',
      features: ['Court-accepted reports', 'Neutral third-party valuation', 'Detailed market analysis', 'Expert testimony available']
    },
    {
      title: 'Investor Lending Services',
      description: 'Comprehensive lending solutions for real estate investors, including fix-and-flip loans, rental property financing, and portfolio lending.',
      features: ['Fix-and-flip financing', 'Rental property loans', 'Portfolio lending solutions', 'Fast approval process']
    },
    {
      title: 'Sales Support Services',
      description: 'Professional real estate sales support with licensed expertise in Pennsylvania, helping clients navigate complex transactions.',
      features: ['Licensed PA real estate professional', 'Transaction coordination', 'Market analysis and pricing', 'Negotiation support']
    }
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-slate-blue mb-4">
            Our Services
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Professional valuation services tailored to meet the unique needs of lenders, attorneys, estate planners, and real estate investors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-display text-2xl font-bold text-slate-blue mb-4">
                {service.title}
              </h3>
              <p className="font-body text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-antique-gold rounded-full"></div>
                    <span className="font-body text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center text-antique-gold hover:text-antique-gold/80 font-semibold transition-colors"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-antique-gold hover:bg-antique-gold/90 text-slate-blue font-semibold px-8 py-3 rounded-md transition-all duration-200 hover:scale-105"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

