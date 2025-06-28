import Link from 'next/link'

export default function AboutSection() {
  const stats = [
    { number: '500+', label: 'Trusted by clients across Pennsylvania and Arizona' },
    { number: '15+', label: 'Deep expertise in residential and commercial markets' },
    { number: '24hr', label: 'Quick turnaround for urgent appraisal needs' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-slate-blue mb-6">
              About GG Appraisals
            </h2>
            <p className="font-body text-xl text-gray-600 mb-8">
              With extensive experience in both Philadelphia and Phoenix markets, GG Appraisals provides accurate, reliable valuations backed by deep local market knowledge and professional expertise.
            </p>
            <p className="font-body text-lg text-gray-600 mb-8">
              Our team of certified appraisers serves lenders, attorneys, estate planners, and real estate investors with professional, timely, and comprehensive appraisal services that meet the highest industry standards.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-antique-gold rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-slate-blue text-2xl">🏆</span>
                </div>
                <h4 className="font-body font-semibold text-slate-blue">Certified Appraisers</h4>
                <p className="font-body text-gray-600 text-sm">Licensed and certified in PA and AZ</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-antique-gold rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-slate-blue text-2xl">⚡</span>
                </div>
                <h4 className="font-body font-semibold text-slate-blue">Fast Turnaround</h4>
                <p className="font-body text-gray-600 text-sm">Average 3-5 business days</p>
              </div>
            </div>

            <Link
              href="/about"
              className="bg-antique-gold hover:bg-antique-gold/90 text-slate-blue font-semibold px-8 py-3 rounded-md transition-all duration-200 hover:scale-105"
            >
              Learn About Our Team
            </Link>
          </div>

          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-antique-gold mb-2">{stat.number}</div>
                </div>
                <div className="flex-1">
                  <p className="font-body text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

