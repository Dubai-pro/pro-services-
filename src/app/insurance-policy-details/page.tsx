import { ArrowLeft, Shield, Heart, Building, Car, Plane, Users, CheckCircle, Clock, Phone, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function InsurancePolicyDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insurance Policy in Dubai
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive and Reliable Insurance Solutions for Individuals and Businesses
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At <strong>MR MUJAHID Services</strong>, we provide a wide range of insurance solutions designed to protect what matters most – your health, your business, and your assets. Our team partners with top insurance providers in the UAE to offer coverage tailored to your needs, ensuring peace of mind and compliance with UAE regulations.
          </p>
        </div>

        {/* Types of Insurance */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-blue-600" />
            Types of Insurance We Offer
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-100">
              <Heart className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Insurance</h3>
              <p className="text-gray-600">Affordable individual and group medical coverage that meets DHA/MOH requirements.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <Building className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Insurance</h3>
              <p className="text-gray-600">Protect your company from operational risks, liability, and financial loss.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
              <Building className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Insurance</h3>
              <p className="text-gray-600">Coverage for commercial and residential properties, including fire, theft, and damage.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100">
              <Car className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vehicle Insurance</h3>
              <p className="text-gray-600">Comprehensive and third-party car insurance with competitive premiums.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100">
              <Plane className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Travel Insurance</h3>
              <p className="text-gray-600">Full protection for trips inside and outside the UAE.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
              <Users className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Life Insurance</h3>
              <p className="text-gray-600">Flexible plans for long-term financial security and family protection.</p>
            </div>
          </div>
        </div>

        {/* Insurance Process */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <CheckCircle className="w-8 h-8 mr-3 text-green-600" />
            Our Insurance Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Free consultation to assess your insurance needs and requirements</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quote Comparison</h3>
              <p className="text-gray-600">Compare quotes from multiple top UAE insurance providers</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600">Assist with all required documents and application forms</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Policy Activation</h3>
              <p className="text-gray-600">Process application and activate your insurance policy</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Continuous support for renewals and claim assistance</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">6</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Claims Processing</h3>
              <p className="text-gray-600">Fast and transparent claims processing when you need it</p>
            </div>
          </div>
        </div>

        {/* Claims and Support */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Clock className="w-8 h-8 mr-3 text-blue-600" />
            Claims and Support
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Claims Processing</h3>
              <p className="text-gray-600 mb-4">
                We handle all documentation and claim processing quickly and transparently. Our team ensures every client receives clear information, easy claim tracking, and continuous support throughout the process.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  24/7 claims support hotline
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Online claim tracking system
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Direct settlement with hospitals
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Fast reimbursement processing
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coverage Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Comprehensive medical coverage
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Emergency evacuation services
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Worldwide coverage options
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  No claim bonus benefits
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Flexible payment options
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-green-600" />
            Why Choose MR MUJAHID Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Partners</h3>
              <p className="text-gray-600">Partnerships with leading UAE insurance providers</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Transparent policies with no hidden costs</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Solutions</h3>
              <p className="text-gray-600">Personalized solutions for individuals and corporates</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Bilingual support team available 24/7</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Insurance Packages</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Basic Coverage</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">Starting AED 300</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Essential health coverage
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Basic vehicle insurance
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Standard support
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Comprehensive</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">Starting AED 800</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Full health & medical coverage
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Business & property insurance
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Travel insurance included
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">Premium</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">Starting AED 1,500</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  All-inclusive coverage
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Life insurance included
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Worldwide coverage
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Need to secure the best insurance plan for your needs? Click below to speak directly with our insurance consultant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971501234567?text=Hello, I'm interested in your Insurance Policy services in Dubai. Can you provide more information?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Contact via WhatsApp
            </a>
            
            <a
              href="mailto:info@mrmujahidservices.com?subject=Insurance Policy Inquiry"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail className="w-6 h-6 mr-2" />
              Send Email
            </a>
            
            <a
              href="tel:+971501234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}