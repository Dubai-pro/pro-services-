'use client';

import Link from 'next/link';
import { ArrowRight, Star, CheckCircle, MapPin, MessageCircle, Mail, Users, Award, Clock, Shield } from 'lucide-react';
import { COMPANY_INFO, SERVICES, TESTIMONIALS } from '@/lib/constants';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0E2040] to-[#1B2A4B] dark:from-[#0B1220] dark:to-[#1B2A4B] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight">
              Professional Solutions
              <span className="block text-[#D4AF37]">in Dubai</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive business services to help your company grow and succeed in the competitive Dubai market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={COMPANY_INFO.whatsapp.primary}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-[#25D366] hover:bg-[#20B858] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp</span>
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

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0E2040] dark:text-[#00A3E0] mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0E2040] dark:text-[#00A3E0] mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0E2040] dark:text-[#00A3E0] mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0E2040] dark:text-[#00A3E0] mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F7FAFC] dark:bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive business solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className={`bg-white dark:bg-[#111827] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 ${
                  service.title === 'Social Media Marketing' || service.title === 'Travel & Tourism' 
                    ? 'ring-2 ring-[#D4AF37] ring-opacity-50' 
                    : ''
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-3">
                    {service.title}
                    {(service.title === 'Social Media Marketing' || service.title === 'Travel & Tourism') && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D4AF37] text-[#0E2040]">
                        Featured
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.time}
                    </span>
                    <span className="font-semibold text-[#D4AF37]">
                      {service.basePrice}
                    </span>
                  </div>
                </div>
                <Link
                  href={
                    service.title === 'Business Setup' ? '/business-setup-details' :
                    service.title === 'Visa Services' ? '/visa-services-details' :
                    service.title === 'Corporate Services' ? '/corporate-services-details' :
                    service.title === 'Insurance Policy' ? '/insurance-policy-details' :
                    service.title === 'Social Media Marketing' ? '/social-media-marketing-details' :
                    service.title === 'Travel & Tourism' ? '/travel-tourism-details' :
                    `/services/${service.id}`
                  }
                  className="inline-flex items-center text-[#00A3E0] hover:text-[#0082B8] font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center bg-[#0E2040] hover:bg-[#1B2A4B] dark:bg-[#00A3E0] dark:hover:bg-[#0082B8] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              View All Services
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We deliver exceptional results through expertise, dedication, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#00A3E0]/10 dark:bg-[#00A3E0]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-[#00A3E0]" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experienced professionals with deep industry knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#D4AF37]/10 dark:bg-[#D4AF37]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-3">
                Proven Results
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track record of successful projects and satisfied clients
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#25D366]/10 dark:bg-[#25D366]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-3">
                Timely Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We respect deadlines and deliver projects on time
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#FF6B6B]/10 dark:bg-[#FF6B6B]/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-[#FF6B6B]" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-3">
                Quality Assurance
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Rigorous quality control ensures exceptional outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F7FAFC] dark:bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-[#111827] rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-[#0E2040] dark:text-[#F1F5F9]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white dark:bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-4">
              Trusted by Leading Companies
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-lg h-16 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 font-semibold">Partner {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0E2040] to-[#00A3E0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Open 24/7 | Offices in Dubai & Abu Dhabi | English • Arabic • Portuguese • Spanish
          </p>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project and discover how we can help your business succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={COMPANY_INFO.whatsapp.primary}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-[#25D366] hover:bg-[#20B858] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp Now</span>
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

      {/* Map Section - Optimized for better loading */}
      <section className="py-16 bg-[#F7FAFC] dark:bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-4">
              Find Us in Dubai
            </h2>
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>Dubai, United Arab Emirates</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-4 shadow-lg">
            <div className="relative w-full h-96 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828264243!2d54.89782!3d25.0762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1703000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dubai Location Map"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E2040] dark:bg-[#0B1220] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                  <span className="text-[#0E2040] font-bold text-lg">P</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">PRO Services</h3>
                  <p className="text-sm text-gray-300">Business Excellence & Corporate Solutions Across the UAE</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Your trusted partner for comprehensive business solutions in Dubai and across the UAE. 
                We provide professional services to help your business grow and succeed in the competitive market.
              </p>
              <div className="flex space-x-4">
                <a
                  href={COMPANY_INFO.whatsapp.primary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20B858] p-3 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.emails.info}`}
                  className="bg-[#00A3E0] hover:bg-[#0082B8] p-3 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex justify-center">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-center">Quick Links</h4>
                <ul className="space-y-3 text-sm text-center">
                  <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/quote" className="text-gray-300 hover:text-white transition-colors">Get Quote</Link></li>
                  <li><Link href="/social-media-marketing" className="text-gray-300 hover:text-white transition-colors font-medium">Social Media Marketing</Link></li>
                  <li><Link href="/travel-tourism" className="text-gray-300 hover:text-white transition-colors font-medium">Travel & Tourism</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-gray-300">Dubai, United Arab Emirates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <div className="text-gray-300">
                    <a href="https://wa.me/971547738266" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      +971547738266
                    </a>
                    <br />
                    <a href="https://wa.me/971545252078" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      +971545252078
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#00A3E0] flex-shrink-0" />
                  <div className="text-gray-300">
                    <a href="mailto:info@mrmujahid.com" className="hover:text-white transition-colors">
                      info@mrmujahid.com
                    </a>
                    <br />
                    <a href="mailto:sales@mrmujahid.com" className="hover:text-white transition-colors">
                      sales@mrmujahid.com
                    </a>
                    <br />
                    <a href="mailto:admin@mrmujahid.com" className="hover:text-white transition-colors">
                      admin@mrmujahid.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2024 PRO Services. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}