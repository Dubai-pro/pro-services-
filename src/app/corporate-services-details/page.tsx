'use client';

import { ArrowLeft, CheckCircle, Clock, Users, Shield, FileText, Building, Phone, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function CorporateServicesDetails() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hello! I'm interested in your Corporate Services. Can you provide more information?");
    window.open(`https://wa.me/971545252078?text=${message}`, '_blank');
  };

  const handleEmailContact = () => {
    window.open('mailto:info@mrmujahid.com?subject=Corporate Services Inquiry', '_blank');
  };

  const corporateServices = [
    {
      title: "Company Restructuring",
      description: "Guidance on mergers, acquisitions, and share transfers",
      icon: Building
    },
    {
      title: "Trade License Renewal",
      description: "Fast and hassle-free renewals for all Emirates",
      icon: FileText
    },
    {
      title: "Corporate Bank Account Opening",
      description: "Assistance with major UAE banks and KYC documentation",
      icon: Shield
    },
    {
      title: "PRO & Government Liaison",
      description: "Efficient processing of all approvals, visas, and legal formalities",
      icon: Users
    },
    {
      title: "Document Attestation & Legalization",
      description: "Certified processing for MoA, PoA, and contracts",
      icon: CheckCircle
    },
    {
      title: "Compliance & Audit Support",
      description: "Ensure your business meets all regulatory requirements",
      icon: Shield
    },
    {
      title: "Corporate Sponsorship Services",
      description: "Trusted UAE national partners for mainland businesses",
      icon: Users
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We assess your corporate needs and recommend the best solutions"
    },
    {
      step: 2,
      title: "Document Preparation",
      description: "Our team prepares all necessary documentation and paperwork"
    },
    {
      step: 3,
      title: "Government Processing",
      description: "We handle all government liaisons and authority approvals"
    },
    {
      step: 4,
      title: "Implementation",
      description: "Execute the corporate services as per your requirements"
    },
    {
      step: 5,
      title: "Compliance Check",
      description: "Ensure all services meet UAE regulatory standards"
    },
    {
      step: 6,
      title: "Ongoing Support",
      description: "Continuous support and maintenance for your corporate needs"
    }
  ];

  const benefits = [
    "Experienced corporate consultants with UAE-wide expertise",
    "Transparent pricing and timelines",
    "Dedicated account manager for each client",
    "Multilingual support team (English, Arabic, Hindi, Portuguese)",
    "100% compliant with UAE corporate regulations",
    "Fast-track processing options available",
    "End-to-end corporate management solutions",
    "Trusted partnerships with major UAE banks"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Corporate Services in Dubai
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive Business Support for Companies and Entrepreneurs
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At MR MUJAHID Services, we provide end-to-end corporate management solutions that empower companies to operate seamlessly and stay compliant with UAE regulations. Whether you are starting, expanding, or restructuring your business, our dedicated PRO and legal team ensures smooth operations from day one.
          </p>
        </div>

        {/* Corporate Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ⚙️ Our Corporate Services Include
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="flex items-center mb-6">
            <Clock className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">⏱️ Timeline</h2>
          </div>
          <p className="text-lg text-gray-700">
            Most services are completed within <span className="font-semibold text-blue-600">1–4 weeks</span>, depending on document type and authority.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🌟 Why Choose MR MUJAHID Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-300 mr-3 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Investment</h2>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">Starting from AED 1,500</div>
            <p className="text-gray-600">Pricing varies based on service complexity and requirements</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">💬 Contact Us</h2>
          <p className="text-xl mb-8">
            Ready to optimize your business operations?<br />
            Click below to connect directly with our corporate consultant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppContact}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              📲 Contact via WhatsApp
            </button>
            
            <button
              onClick={handleEmailContact}
              className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </button>
          </div>
          
          <div className="mt-6 text-white/90">
            <p className="flex items-center justify-center mb-2">
              <Phone className="w-4 h-4 mr-2" />
              +971 54 525 2078
            </p>
            <p className="flex items-center justify-center">
              <Mail className="w-4 h-4 mr-2" />
              info@mrmujahid.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}