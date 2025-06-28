import React, { useState } from 'react'
import { ContactFormData, SubmitStatus, FormSubmitHandler, InputChangeHandler } from '@/types'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    timeline: '',
    propertyAddress: '',
    propertyType: '',
    additionalInfo: ''
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)

  const handleChange: InputChangeHandler = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit: FormSubmitHandler = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formcarry.com/s/mjPAInh7tM7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceType: '',
          timeline: '',
          propertyAddress: '',
          propertyType: '',
          additionalInfo: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="font-display text-2xl font-bold text-slate-blue mb-6">
        Request Your Appraisal
      </h3>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 font-medium">
            Thank you! Your request has been submitted successfully. We'll contact you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 font-medium">
            There was an error submitting your request. Please try again or call us directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-floating-label">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder=" "
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all duration-200"
            />
            <label htmlFor="fullName" className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none">
              Full Name *
            </label>
          </div>

          <div className="form-floating-label">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all duration-200"
            />
            <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none">
              Email Address *
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-floating-label">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=" "
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all duration-200"
            />
            <label htmlFor="phone" className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none">
              Phone Number
            </label>
          </div>

          <div>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all duration-200"
            >
              <option value="">Select Service Type *</option>
              <option value="estate-appraisal">Estate Appraisal</option>
              <option value="divorce-appraisal">Divorce Appraisal</option>
              <option value="investor-rehab">Investor Rehab Support</option>
              <option value="pre-listing">Pre-Listing Valuation</option>
              <option value="tax-appeal">Tax Appeal Support</option>
              <option value="pmi-removal">PMI Removal</option>
              <option value="lending-services">Lending Services</option>
              <option value="sales-support">Sales Support</option>
              <option value="custom">Custom Valuation</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all duration-200"
            >
              <option value="">Timeline Needed</option>
              <option value="rush-1-2-days">Rush (1-2 days)</option>
              <option value="standard-3-5-days">Standard (3-5 days)</option>
              <option value="flexible-1-week">Flexible (1 week+)</option>
            </select>
          </div>

          <div>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all duration-200"
            >
              <option value="">Property Type</option>
              <option value="single-family">Single Family Home</option>
              <option value="multi-family">Multi-Family</option>
              <option value="condo">Condominium</option>
              <option value="townhouse">Townhouse</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land/Vacant Lot</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-floating-label">
          <input
            type="text"
            id="propertyAddress"
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleChange}
            required
            placeholder=" "
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all duration-200"
          />
          <label htmlFor="propertyAddress" className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none">
            Property Address *
          </label>
        </div>

        <div className="form-floating-label">
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={4}
            placeholder=" "
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all duration-200 resize-vertical"
          />
          <label htmlFor="additionalInfo" className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none">
            Additional Information
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-antique-gold hover:bg-antique-gold/90 disabled:bg-gray-400 text-slate-blue font-semibold py-3 px-6 rounded-md transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-200 text-center">
        <p className="font-body text-gray-600 text-sm">
          Need immediate assistance? Call us at{' '}
          <a href="tel:(267) 632-3162" className="text-antique-gold hover:underline font-medium">
            (267) 632-3162
          </a>
        </p>
      </div>
    </div>
  )
}

export default ContactForm

