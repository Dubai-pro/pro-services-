'use client';

import Link from 'next/link';
import { ArrowLeft, MessageCircle, Mail, Phone, Plane, MapPin, Users, Clock, Star, CheckCircle, Calendar, Globe, Camera, Heart, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export default function TravelTourismDetails() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Visa & Travel Assistance",
      description: "Full guidance on tourist and business visas"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Flight & Hotel Bookings",
      description: "Competitive rates with top airlines and luxury hotels"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Desert Safari Adventures",
      description: "Enjoy dune bashing, camel rides, and traditional Arabic BBQ dinners"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "City Tours & Excursions",
      description: "Explore Dubai, Abu Dhabi, Sharjah, and other Emirates with licensed guides"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Honeymoon & Family Packages",
      description: "Custom itineraries for romantic and family getaways"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Corporate & Group Travel",
      description: "Seamless planning for team trips, exhibitions, and conferences"
    }
  ];

  const benefits = [
    "Partnerships with top UAE tour operators and airlines",
    "Personalized and flexible travel solutions",
    "24/7 multilingual support (English, Arabic, Hindi, Portuguese)",
    "Affordable rates with premium service quality"
  ];

  const packages = [
    {
      name: "Essential Travel",
      price: "AED 500",
      features: [
        "Visa assistance",
        "Flight booking support",
        "Basic hotel recommendations",
        "Travel insurance guidance",
        "24/7 emergency support"
      ]
    },
    {
      name: "Premium Experience",
      price: "AED 1,200",
      features: [
        "Complete visa processing",
        "Flight & luxury hotel bookings",
        "Desert safari experience",
        "City tour with guide",
        "Airport transfers",
        "Dedicated travel consultant"
      ]
    },
    {
      name: "Luxury Package",
      price: "AED 2,500",
      features: [
        "VIP visa processing",
        "Premium flight & 5-star hotels",
        "Private desert safari",
        "Exclusive city tours",
        "Luxury transfers",
        "Personal concierge service",
        "Honeymoon planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1220]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0E2040] to-[#1B2A4B] dark:from-[#0B1220] dark:to-[#1B2A4B] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#D4AF37] hover:text-[#C9A23A] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Travel & Tourism in Dubai
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Experience Dubai and Beyond with Tailored Travel Solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <div className="bg-[#F7FAFC] dark:bg-[#111827] rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              At MR MUJAHID Services, we create unforgettable travel experiences for individuals, families, and corporate clients. From visa assistance to luxury vacations, our team handles every detail of your journey with professionalism and care ensuring comfort, safety, and satisfaction from arrival to departure.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-8 flex items-center">
            <Plane className="w-8 h-8 mr-3 text-[#00A3E0]" />
            Our Tourism Services Include
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#111827] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-[#00A3E0] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0E2040] dark:text-[#F1F5F9] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#00A3E0]/10 to-[#D4AF37]/10 dark:from-[#00A3E0]/20 dark:to-[#D4AF37]/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-3 text-[#D4AF37]" />
              Timeline
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Most travel arrangements and bookings are completed within 1–2 weeks, depending on availability and destination.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-8 flex items-center">
            <Star className="w-8 h-8 mr-3 text-[#D4AF37]" />
            Why Choose MR MUJAHID Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white dark:bg-[#111827] p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
              >
                <CheckCircle className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-gray-300 text-lg">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-8 text-center">
            Travel Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-[#111827] rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  index === 1 
                    ? 'border-[#00A3E0] ring-2 ring-[#00A3E0]/20' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {index === 1 && (
                  <div className="bg-[#00A3E0] text-white text-sm font-bold px-4 py-2 rounded-full text-center mb-4">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#0E2040] dark:text-[#F1F5F9] mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-[#00A3E0] mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">per person</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={COMPANY_INFO.whatsapp.primary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                    index === 1
                      ? 'bg-[#00A3E0] hover:bg-[#0082B8] text-white'
                      : 'bg-[#F7FAFC] hover:bg-[#E2E8F0] dark:bg-[#1F2937] dark:hover:bg-[#374151] text-[#0E2040] dark:text-[#F1F5F9]'
                  }`}
                >
                  Choose Package
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-[#0E2040] to-[#1B2A4B] dark:from-[#0B1220] dark:to-[#1B2A4B] text-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to explore Dubai and the world with us?<br />
              Click below to speak directly with our travel specialist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={COMPANY_INFO.whatsapp.primary}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-[#25D366] hover:bg-[#20B858] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Contact via WhatsApp</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.emails.info}`}
              className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Mail className="w-6 h-6" />
              <span>Email Us</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phones.primary}`}
              className="flex items-center space-x-3 bg-[#D4AF37] hover:bg-[#C9A23A] text-[#0E2040] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}