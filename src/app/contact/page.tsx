'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { ContactForm } from '@/lib/types';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-green-100 dark:bg-green-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-[#0E2040] dark:text-[#F1F5F9] mb-4">
            Message Sent Successfully!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Thank you for contacting us. We'll get back to you within 24-48 hours.
          </p>
          <div className="space-y-3">
            <a
              href={COMPANY_INFO.whatsapp.primary}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20B858] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp for Urgent Matters</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get in touch with us to discuss your project or ask any questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0B1220] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#00A3E0] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0B1220] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#00A3E0] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="quote">Request Quote</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0B1220] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#00A3E0] focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-3 bg-[#0E2040] hover:bg-[#1B2A4B] dark:bg-[#00A3E0] dark:hover:bg-[#0082B8] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
                Quick Actions
              </h2>
              
              <div className="space-y-4">
                <a
                  href={COMPANY_INFO.whatsapp.primary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-xl transition-colors group"
                >
                  <div className="bg-[#25D366] rounded-lg p-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0E2040] dark:text-[#F1F5F9] group-hover:text-[#25D366]">
                      WhatsApp 1
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {COMPANY_INFO.phones[0]}
                    </p>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.whatsapp.secondary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-xl transition-colors group"
                >
                  <div className="bg-[#25D366] rounded-lg p-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0E2040] dark:text-[#F1F5F9] group-hover:text-[#25D366]">
                      WhatsApp 2
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {COMPANY_INFO.phones[1]}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.emails.info}`}
                  className="flex items-center space-x-4 p-4 bg-[#00A3E0]/10 hover:bg-[#00A3E0]/20 rounded-xl transition-colors group"
                >
                  <div className="bg-[#00A3E0] rounded-lg p-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0E2040] dark:text-[#F1F5F9] group-hover:text-[#00A3E0]">
                      Email Us
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {COMPANY_INFO.emails.info}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
                Contact Details
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37]/10 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0E2040] dark:text-[#F1F5F9] mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#00A3E0]/10 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-[#00A3E0]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0E2040] dark:text-[#F1F5F9] mb-1">
                      Phone Numbers
                    </h3>
                    <div className="space-y-1">
                      {COMPANY_INFO.phones.map((phone) => (
                        <p key={phone} className="text-gray-600 dark:text-gray-400">
                          {phone}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#25D366]/10 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0E2040] dark:text-[#F1F5F9] mb-1">
                      Email Addresses
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-600 dark:text-gray-400">
                        {COMPANY_INFO.emails.info}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {COMPANY_INFO.emails.sales}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {COMPANY_INFO.emails.admin}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
                Business Hours
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Sunday - Thursday</span>
                  <span className="font-medium text-[#0E2040] dark:text-[#F1F5F9]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Friday</span>
                  <span className="font-medium text-[#0E2040] dark:text-[#F1F5F9]">2:00 PM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                  <span className="font-medium text-[#0E2040] dark:text-[#F1F5F9]">Closed</span>
                </div>
                <div className="mt-4 p-3 bg-[#00A3E0]/10 rounded-lg">
                  <p className="text-sm text-[#00A3E0] font-medium">
                    💬 WhatsApp available 24/7 for urgent matters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}