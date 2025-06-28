import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import ContactForm from '@/components/ContactForm'

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      value: '(267) 632-3162',
      description: 'Call us for immediate assistance'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'info@ggappraisals.com',
      description: 'Send us your questions anytime'
    },
    {
      icon: '⏱️',
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'We respond to all inquiries promptly'
    }
  ]

  const officeLocations = [
    {
      city: 'Philadelphia',
      state: 'Pennsylvania',
      address: '888 N 26th Street',
      fullAddress: '888 N 26th Street, Philadelphia, PA 19130',
      phone: '(267) 632-3162',
      serviceArea: 'Serving all of Pennsylvania including Philadelphia, Pittsburgh, Allentown, Erie, and surrounding areas.'
    },
    {
      city: 'Phoenix',
      state: 'Arizona',
      address: '1302 W Monroe Street',
      fullAddress: '1302 W Monroe Street, Phoenix, AZ 85007',
      phone: '(267) 632-3162',
      serviceArea: 'Serving all of Arizona including Phoenix, Tucson, Mesa, Chandler, Scottsdale, and surrounding areas.'
    }
  ]

  return (
    <>
      <Head>
        <title>Contact Us | GG Appraisals | Philadelphia PA & Phoenix AZ</title>
        <meta name="description" content="Contact GG Appraisals for professional real estate appraisal, lending, and sales support services. Offices in Philadelphia PA and Phoenix AZ. Call (267) 632-3162." />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-slate-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-display text-5xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to get started? Contact our team of licensed professionals for expert real estate appraisal, lending, and sales support services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="font-body font-semibold text-slate-blue mb-2">{info.title}</h3>
                  <p className="font-body text-xl text-gray-800 mb-2">{info.value}</p>
                  <p className="font-body text-gray-600 text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-slate-blue mb-4">
                Our Locations
              </h2>
              <p className="font-body text-xl text-gray-600">
                Professional real estate services across Pennsylvania and Arizona
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {officeLocations.map((location, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-antique-gold rounded-lg flex items-center justify-center mr-4">
                      <span className="text-slate-blue text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-slate-blue">
                        {location.city}, {location.state}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <span className="text-antique-gold mt-1">🏢</span>
                      <div>
                        <h4 className="font-body font-semibold text-slate-blue">Address</h4>
                        <p className="font-body text-gray-600">{location.fullAddress}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-antique-gold mt-1">📞</span>
                      <div>
                        <h4 className="font-body font-semibold text-slate-blue">Phone</h4>
                        <p className="font-body text-gray-600">{location.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-antique-gold mt-1">🗺️</span>
                      <div>
                        <h4 className="font-body font-semibold text-slate-blue">Service Area</h4>
                        <p className="font-body text-gray-600">{location.serviceArea}</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-antique-gold hover:bg-antique-gold/90 text-slate-blue font-semibold py-3 px-6 rounded-md transition-all duration-200 hover:scale-105">
                    Get Directions
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-slate-blue mb-4">
                Request Your Appraisal
              </h2>
              <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-slate-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="font-body text-xl text-gray-300 mb-8">
              For urgent appraisal needs or time-sensitive projects, call us directly.
            </p>
            <a
              href="tel:(267) 632-3162"
              className="inline-flex items-center bg-antique-gold hover:bg-antique-gold/90 text-slate-blue font-semibold px-8 py-4 rounded-md transition-all duration-200 hover:scale-105"
            >
              <span className="mr-2">📞</span>
              Call (267) 632-3162
            </a>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Contact
