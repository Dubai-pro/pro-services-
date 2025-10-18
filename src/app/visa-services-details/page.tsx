'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, MessageCircle, Clock, Shield, Users, Award, Building, FileText, Globe, Briefcase, Phone, Mail, User, Heart, Banknote, Star, Camera } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export default function VisaServicesDetails() {
  const visaTypes = [
    {
      title: "Investor Visa",
      description: "For entrepreneurs or shareholders starting a business in the UAE",
      icon: <Banknote className="w-8 h-8" />,
      benefits: [
        "Long-term residency",
        "Business ownership rights",
        "Family sponsorship eligibility",
        "Multiple entry privileges",
        "Renewable visa status"
      ],
      timeframe: "3-4 weeks",
      startingPrice: "AED 8,000"
    },
    {
      title: "Employment Visa",
      description: "For professionals joining companies across all Emirates",
      icon: <Briefcase className="w-8 h-8" />,
      benefits: [
        "Work authorization",
        "Healthcare benefits",
        "Family sponsorship",
        "Career advancement",
        "Social security access"
      ],
      timeframe: "2-3 weeks",
      startingPrice: "AED 3,500"
    },
    {
      title: "Family Visa",
      description: "For sponsoring spouse, children, or parents legally",
      icon: <Heart className="w-8 h-8" />,
      benefits: [
        "Family reunification",
        "Education access",
        "Healthcare coverage",
        "Long-term stability",
        "Work permit eligibility"
      ],
      timeframe: "3-5 weeks",
      startingPrice: "AED 4,200"
    },
    {
      title: "Golden Visa",
      description: "For investors, property owners, and exceptional talents",
      icon: <Star className="w-8 h-8" />,
      benefits: [
        "10-year validity",
        "Multiple entry",
        "No sponsor required",
        "Family inclusion",
        "Investment protection"
      ],
      timeframe: "4-6 weeks",
      startingPrice: "AED 15,000"
    },
    {
      title: "Freelancer Permit",
      description: "Ideal for independent professionals working remotely",
      icon: <User className="w-8 h-8" />,
      benefits: [
        "Work flexibility",
        "Multiple clients",
        "Visa sponsorship",
        "Bank account access",
        "Professional licensing"
      ],
      timeframe: "2-4 weeks",
      startingPrice: "AED 7,500"
    },
    {
      title: "Tourist Visa Extensions",
      description: "Quick and easy renewals for visitors",
      icon: <Camera className="w-8 h-8" />,
      benefits: [
        "Extended stay",
        "Multiple entries",
        "Quick processing",
        "Flexible duration",
        "Easy renewal"
      ],
      timeframe: "3-7 days",
      startingPrice: "AED 1,200"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We assess your visa requirements and recommend the best option",
      duration: "1 day"
    },
    {
      step: 2,
      title: "Document Collection",
      description: "Gather and verify all required documents and certificates",
      duration: "2-3 days"
    },
    {
      step: 3,
      title: "Application Submission",
      description: "Submit your visa application to UAE immigration authorities",
      duration: "1 day"
    },
    {
      step: 4,
      title: "Processing & Follow-up",
      description: "Monitor application status and handle any additional requirements",
      duration: "2-6 weeks"
    },
    {
      step: 5,
      title: "Approval & Collection",
      description: "Receive visa approval and collect your Emirates ID",
      duration: "1-2 days"
    },
    {
      step: 6,
      title: "Post-Visa Support",
      description: "Ongoing assistance with renewals and family sponsorship",
      duration: "Ongoing"
    }
  ];

  const requiredDocuments = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Passport Copy",
      description: "Valid for at least 6 months"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Emirates ID",
      description: "If applicable"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Business License",
      description: "Or offer letter"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Proof of Income",
      description: "Or tenancy agreement"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Passport Photo",
      description: "White background"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Compliant",
      description: "Fully compliant with UAE immigration laws"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "PRO & legal support team"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast-Track Options",
      description: "Expedited processing available"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multilingual Service",
      description: "English, Arabic, Hindi & Portuguese"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0E2040] to-[#1B2A4B] dark:from-[#0B1220] dark:to-[#1B2A4B] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="text-6xl mb-4">🇦🇪</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight">
              Visa Services
              <span className="block text-[#D4AF37]">in Dubai</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive Visa and Immigration Solutions for Entrepreneurs, Investors & Families
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At MR MUJAHID Services, we specialize in guiding clients through every step of the UAE visa and immigration process. Whether you're starting a business, moving your family, or expanding your career in the Emirates, our experts ensure a fast, transparent, and stress-free experience.
            </p>
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

      {/* Types of Visas Section */}
      <section className="py-20 bg-white dark:bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
              🏢 Types of Visas We Handle
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive visa solutions for every need and situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <div
                key={index}
                className="bg-[#F7FAFC] dark:bg-[#0B1220] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-6">
                  <div className="bg-white dark:bg-[#111827] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="text-[#00A3E0]">
                      {visa.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-3 text-center">
                    {visa.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                    {visa.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {visa.benefits.map((benefit, idx) => (
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
                        {visa.timeframe}
                      </span>
                      <span className="font-semibold text-[#D4AF37]">
                        Starting from {visa.startingPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 bg-[#F7FAFC] dark:bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
              📄 Required Documents
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Essential documents needed for your visa application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {requiredDocuments.map((doc, index) => (
              <div key={index} className="text-center">
                <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#00A3E0]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#00A3E0]">
                      {doc.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {doc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Time Section */}
      <section className="py-20 bg-white dark:bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
              ⏱️ Processing Time
            </h2>
            <div className="bg-[#F7FAFC] dark:bg-[#0B1220] rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                Depending on the visa type, processing takes between <span className="font-bold text-[#D4AF37]">2 to 6 weeks</span>.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We keep you informed at every stage, from document submission to final approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-[#F7FAFC] dark:bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
              Our Visa Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A streamlined 6-step process to secure your UAE visa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-[#111827] rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
              🌟 Why Choose MR MUJAHID Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Your trusted partner for UAE visa and immigration services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#F7FAFC] dark:bg-[#0B1220] rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="bg-white dark:bg-[#111827] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="text-[#00A3E0]">
                      {reason.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-[#0E2040] to-[#00A3E0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            💬 Contact Our Team
          </h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto">
            Need help with your visa?
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Click below to speak directly with our visa consultant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={COMPANY_INFO.whatsapp.primary}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-[#25D366] hover:bg-[#20B858] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>📲 Contact via WhatsApp</span>
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