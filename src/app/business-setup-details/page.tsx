'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, MessageCircle, Clock, Shield, Users, Award, Building, FileText, Globe, Briefcase, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export default function BusinessSetupDetails() {
  const licenseTypes = [
    {
      title: "Free Zone License",
      description: "Perfect for international businesses seeking 100% foreign ownership and tax benefits",
      benefits: [
        "100% foreign ownership",
        "No corporate tax for 15 years",
        "Full profit repatriation",
        "No currency restrictions",
        "Streamlined setup process"
      ],
      timeframe: "7-14 days",
      startingPrice: "AED 15,000"
    },
    {
      title: "Mainland License",
      description: "Ideal for businesses wanting to trade directly in the UAE market",
      benefits: [
        "Trade anywhere in UAE",
        "Direct access to local market",
        "Government contracts eligibility",
        "Multiple business activities",
        "Local sponsorship available"
      ],
      timeframe: "14-21 days",
      startingPrice: "AED 20,000"
    },
    {
      title: "Offshore License",
      description: "Best for holding companies and international investments",
      benefits: [
        "Asset protection",
        "Tax optimization",
        "International banking",
        "Privacy and confidentiality",
        "Minimal reporting requirements"
      ],
      timeframe: "5-10 days",
      startingPrice: "AED 12,000"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We discuss your business needs and recommend the best license type",
      duration: "1 day"
    },
    {
      step: 2,
      title: "Documentation Preparation",
      description: "Gather and prepare all required documents and applications",
      duration: "2-3 days"
    },
    {
      step: 3,
      title: "License Application",
      description: "Submit applications to relevant authorities and follow up",
      duration: "5-15 days"
    },
    {
      step: 4,
      title: "Approvals & Permits",
      description: "Obtain all necessary approvals and government permits",
      duration: "3-7 days"
    },
    {
      step: 5,
      title: "Bank Account Setup",
      description: "Assist with corporate bank account opening",
      duration: "1-2 days"
    },
    {
      step: 6,
      title: "Final Handover",
      description: "Complete setup with all documents and ongoing support",
      duration: "1 day"
    }
  ];

  const benefits = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Strategic Location",
      description: "Dubai's prime location connects East and West markets"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Political Stability",
      description: "Secure and stable business environment"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Connectivity",
      description: "World-class infrastructure and logistics"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Business-Friendly",
      description: "Supportive government policies and regulations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0E2040] to-[#1B2A4B] dark:from-[#0B1220] dark:to-[#1B2A4B] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight">
              Free Zone Business Setup
              <span className="block text-[#D4AF37]">in Dubai</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              by Mr. Mujahid
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Launch your company in one of Dubai's premier Free Zones with confidence and ease through Mr. Mujahid's expert business setup services. Whether you're a start-up, entrepreneur, or international investor, we provide an end-to-end solution designed to streamline incorporation, licensing, and compliance so you can focus on your vision, not bureaucracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={COMPANY_INFO.whatsapp.primary}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-[#25D366] hover:bg-[#20B858] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Get Started on WhatsApp</span>
              </a>
              <Link
                href="/quote"
                className="flex items-center space-x-3 bg-[#D4AF37] hover:bg-[#C9A23A] text-[#0E2040] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white dark:bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive business setup services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F7FAFC] dark:bg-[#0B1220] rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                <FileText className="w-12 h-12 text-[#00A3E0] mb-4" />
                <h3 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-4">
                  Company Registration & Trade License
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Assistance with selecting the right Free Zone for your business, handling registration, trade license application, renewals, and amendments — all in accordance with UAE regulations.
                </p>
              </div>
            </div>

            <div className="bg-[#F7FAFC] dark:bg-[#0B1220] rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                <Users className="w-12 h-12 text-[#D4AF37] mb-4" />
                <h3 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-4">
                  Local Support Through Every Step
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  From quota and municipality approvals to RTA (Roads & Transport Authority) as well as other related government permits, our behind-the-scenes experts will handle all paperwork for you and manage communications with relevant bodies.
                </p>
              </div>
            </div>

            <div className="bg-[#F7FAFC] dark:bg-[#0B1220] rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                <Briefcase className="w-12 h-12 text-[#25D366] mb-4" />
                <h3 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-4">
                  Corporate Structure & Compliance Advice
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Understanding requirements The team should advise you on shareholding and ownership, what business activities are allowed under Free Zone law, as well as any other regulation that must be adhered to when setting up your Free Zone entity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License Types Section */}
      <section className="py-20 bg-[#F7FAFC] dark:bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
              Types of Business Licenses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the right license type for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {licenseTypes.map((license, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#111827] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-3">
                    {license.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {license.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {license.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="flex items-center text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {license.timeframe}
                      </span>
                      <span className="font-semibold text-[#D4AF37]">
                        Starting from {license.startingPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-white dark:bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
              Our Setup Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A streamlined 6-step process to get your business up and running
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-[#F7FAFC] dark:bg-[#0B1220] rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="absolute -top-4 -left-4 bg-[#00A3E0] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {step.description}
                  </p>
                  <div className="flex items-center text-sm text-[#D4AF37] font-semibold">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F7FAFC] dark:bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
              Why Dubai for Business
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover the advantages of setting up your business in Dubai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white dark:bg-[#111827] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-[#00A3E0]">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0E2040] to-[#00A3E0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Ready to Start Your Business in Dubai?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and let us help you navigate the business setup process with ease
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={COMPANY_INFO.whatsapp.primary}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-[#25D366] hover:bg-[#20B858] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp: +971 54 773 8266</span>
            </a>
            <a
              href={COMPANY_INFO.whatsapp.secondary}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-[#25D366] hover:bg-[#20B858] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>WhatsApp: +971 54 525 2078</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.emails.info}`}
              className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Mail className="w-6 h-6" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}