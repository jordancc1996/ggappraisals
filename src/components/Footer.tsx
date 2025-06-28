import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-2xl font-bold text-antique-gold mb-4">
              GG Appraisals
            </h3>
            <p className="font-body text-gray-300 mb-4 max-w-md">
              Professional real estate appraisal, lending, and sales support services across Pennsylvania and Arizona. Licensed, certified, and trusted by clients since 2010.
            </p>
            <div className="flex space-x-4">
              <span className="font-body text-gray-300">
                📞 (267) 632-3162
              </span>
              <span className="font-body text-gray-300">
                ✉️ info@ggappraisals.com
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-semibold text-antique-gold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="font-body text-gray-300 hover:text-white transition-colors cursor-pointer">Estate Appraisal</span></li>
              <li><span className="font-body text-gray-300 hover:text-white transition-colors cursor-pointer">Divorce Appraisal</span></li>
              <li><span className="font-body text-gray-300 hover:text-white transition-colors cursor-pointer">Investor Services</span></li>
              <li><span className="font-body text-gray-300 hover:text-white transition-colors cursor-pointer">Lending Solutions</span></li>
              <li><span className="font-body text-gray-300 hover:text-white transition-colors cursor-pointer">Sales Support</span></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-body font-semibold text-antique-gold mb-4">Locations</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-body font-medium text-white">Philadelphia</h5>
                <p className="font-body text-gray-300 text-sm">
                  888 N 26th Street<br />
                  Philadelphia, PA 19130
                </p>
              </div>
              <div>
                <h5 className="font-body font-medium text-white">Phoenix</h5>
                <p className="font-body text-gray-300 text-sm">
                  1302 W Monroe Street<br />
                  Phoenix, AZ 85007
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-gray-300 text-sm">
            © 2024 GG Appraisals. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/about" className="font-body text-gray-300 hover:text-white text-sm transition-colors">
              About
            </Link>
            <Link href="/services" className="font-body text-gray-300 hover:text-white text-sm transition-colors">
              Services
            </Link>
            <Link href="/contact" className="font-body text-gray-300 hover:text-white text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

