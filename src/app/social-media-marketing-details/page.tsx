import { ArrowLeft, MessageCircle, Mail, Phone, Users, TrendingUp, Target, BarChart3, Camera, Megaphone, Star } from 'lucide-react'
import Link from 'next/link'

export default function SocialMediaMarketingDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:info@mrmujahid.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+971545252078"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <TrendingUp className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Social Media Marketing in Dubai
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Strategic Digital Growth for Modern Brands
            </p>
            <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
              At MR MUJAHID Services, we help businesses elevate their digital presence through smart, data-driven social media strategies. Our marketing team creates personalized campaigns that connect brands to their audience, increase visibility, and drive measurable results across all major platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🚀 Our Social Media Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored for the UAE market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Content Creation</h3>
              <p className="text-gray-600">
                Professional posts, videos, and reels that align with your brand's identity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Paid Advertising</h3>
              <p className="text-gray-600">
                High-conversion ad campaigns with measurable ROI on Meta, Google, and TikTok.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Influencer Marketing</h3>
              <p className="text-gray-600">
                Collaboration with trusted local and international influencers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Strategy & Positioning</h3>
              <p className="text-gray-600">
                Build strong brand recognition across the UAE market.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Management</h3>
              <p className="text-gray-600">
                Active engagement with your followers for better retention.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600">
                Detailed performance tracking and optimization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Marketing Process
            </h2>
            <p className="text-xl text-gray-600">
              From strategy to execution - your success journey in 6 steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Brand Analysis", desc: "Deep dive into your brand, competitors, and target audience" },
              { step: "02", title: "Strategy Development", desc: "Create customized social media strategy and content calendar" },
              { step: "03", title: "Content Creation", desc: "Design engaging posts, videos, and campaigns" },
              { step: "04", title: "Campaign Launch", desc: "Execute campaigns across selected platforms" },
              { step: "05", title: "Community Engagement", desc: "Active management and audience interaction" },
              { step: "06", title: "Analytics & Optimization", desc: "Track performance and optimize for better results" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">⏱️ Timeline</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Typical project durations range from 1–3 months, depending on campaign size and goals.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🌟 Why Choose MR MUJAHID Services
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for digital marketing success in the UAE
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">UAE Market Experts</h3>
              <p className="text-gray-600">Expert digital strategists specialized in UAE and GCC markets</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Multilingual Team</h3>
              <p className="text-gray-600">Creative content team fluent in English, Arabic & Portuguese</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Transparent Results</h3>
              <p className="text-gray-600">Transparent pricing and measurable growth</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">End-to-End Service</h3>
              <p className="text-gray-600">End-to-end digital management (from design to reporting)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">AED 500<span className="text-lg text-gray-500">/month</span></div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>15 posts per month</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>2 platforms management</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>Basic analytics</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>Community management</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-8 transform scale-105 shadow-2xl">
              <div className="text-center">
                <div className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">MOST POPULAR</div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold mb-6">AED 1,500<span className="text-lg text-blue-200">/month</span></div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center"><div className="w-2 h-2 bg-white rounded-full mr-3"></div>30 posts per month</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-white rounded-full mr-3"></div>4 platforms management</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-white rounded-full mr-3"></div>Advanced analytics</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-white rounded-full mr-3"></div>Paid advertising</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-white rounded-full mr-3"></div>Influencer outreach</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">AED 2,500<span className="text-lg text-gray-500">/month</span></div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>50+ posts per month</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>All platforms</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>Custom analytics</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>Premium advertising</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>Dedicated manager</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            💬 Contact Us
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to boost your brand visibility and engagement?<br />
            Click below to start your social media success journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/971545252078?text=Hi, I'm interested in your Social Media Marketing services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              📲 Contact via WhatsApp
            </a>
            
            <a
              href="mailto:info@mrmujahid.com?subject=Social Media Marketing Inquiry"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold flex items-center transition-all duration-300 border border-white/20"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
            
            <a
              href="tel:+971545252078"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold flex items-center transition-all duration-300 border border-white/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}