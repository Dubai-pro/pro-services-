'use client';

import { useState } from 'react';
import { Send, CheckCircle, MessageCircle, Upload, X } from 'lucide-react';
import { COMPANY_INFO, SERVICES, BUDGET_RANGES, URGENCY_OPTIONS } from '@/lib/constants';
import { QuoteRequest } from '@/lib/types';

export default function QuotePage() {
  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    description: '',
    budgetRange: '',
    urgency: '',
    attachments: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate ticket number
    const ticket = `MR${Date.now().toString().slice(-6)}`;
    setTicketNumber(ticket);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      attachments: [...(prev.attachments || []), ...files]
    }));
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments?.filter((_, i) => i !== index) || []
    }));
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      description: '',
      budgetRange: '',
      urgency: '',
      attachments: []
    });
    setTicketNumber('');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="bg-green-100 dark:bg-green-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-[#0E2040] dark:text-[#F1F5F9] mb-4">
            Quote Request Submitted!
          </h2>
          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl p-6 mb-6">
            <p className="text-lg font-semibold text-[#0E2040] dark:text-[#F1F5F9] mb-2">
              Your Ticket Number: <span className="text-[#D4AF37]">#{ticketNumber}</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We'll review your request and get back to you within 24-48 hours with a detailed quote.
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold text-[#0E2040] dark:text-[#F1F5F9]">
              Need to discuss urgently? Choose your preferred WhatsApp:
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={COMPANY_INFO.whatsapp.primary}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20B858] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp {COMPANY_INFO.phones[0]}</span>
              </a>
              <a
                href={COMPANY_INFO.whatsapp.secondary}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20B858] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp {COMPANY_INFO.phones[1]}</span>
              </a>
            </div>
          </div>

          <button
            onClick={resetForm}
            className="text-[#00A3E0] hover:text-[#0082B8] font-medium transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
            Request a Quote
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tell us about your project and we'll provide you with a detailed quote within 24-48 hours
          </p>
        </div>

        {/* Quote Form */}
        <div className="bg-white dark:bg-[#111827] rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0B1220] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#00A3E0] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0B1220] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#00A3E0] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0B1220] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#00A3E0] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0B1220] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#00A3E0] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div>
              <h2 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
                Project Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Desired Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0B1220] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#00A3E0] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map(service => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="custom">Custom Solution</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Please describe your project in detail, including objectives, requirements, and any specific needs..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0B1220] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#00A3E0] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Budget Range *
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      required
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0B1220] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#00A3E0] focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {BUDGET_RANGES.map(range => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Urgency *
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      required
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0B1220] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#00A3E0] focus:border-transparent"
                    >
                      <option value="">Select urgency</option>
                      {URGENCY_OPTIONS.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* File Attachments */}
            <div>
              <h2 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
                Attachments (Optional)
              </h2>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Upload any relevant files (documents, images, specifications)
                  </p>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-flex items-center space-x-2 bg-[#00A3E0] hover:bg-[#0082B8] text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Choose Files</span>
                  </label>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Max 10MB per file. Supported: PDF, DOC, DOCX, JPG, PNG, TXT
                  </p>
                </div>

                {formData.attachments && formData.attachments.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Attached Files:</h3>
                    {formData.attachments.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-3 bg-[#0E2040] hover:bg-[#1B2A4B] dark:bg-[#00A3E0] dark:hover:bg-[#0082B8] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Quote Request</span>
                  </>
                )}
              </button>
              
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                By submitting this form, you agree to our terms of service and privacy policy.
                We'll respond within 24-48 hours with a detailed quote.
              </p>
            </div>
          </form>
        </div>

        {/* Quick Contact */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need immediate assistance? Contact us directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={COMPANY_INFO.whatsapp.primary}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20B858] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp {COMPANY_INFO.phones[0]}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.emails.sales}`}
              className="flex items-center justify-center space-x-2 bg-[#00A3E0] hover:bg-[#0082B8] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Send className="w-5 h-5" />
              <span>Email Sales Team</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}