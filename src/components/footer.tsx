import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Linkedin, Instagram, Facebook } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '@/lib/constants';

export default function Footer() {
  // Filter and organize navigation items for footer
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Get Quote', href: '/quote' },
    { label: 'Social Media Marketing', href: '/social-media-marketing-details' },
    { label: 'Travel & Tourism', href: '/travel-tourism-details' }
  ];

  return (
    <footer className="bg-[#0E2040] dark:bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/39b1baac-b494-4b4d-a8f4-bb8e52c31f50.jpg" 
                alt="PRO Services Dubai" 
                className="h-8 w-auto"
              />
              <h3 className="text-lg font-bold">PRO Services</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Business Excellence & Corporate Solutions Across the UAE
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#00A3E0] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00A3E0] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00A3E0] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Centered */}
          <div className="flex justify-center">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-[#00A3E0] transition-colors text-sm text-center"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="text-gray-300 text-sm">Dubai, United Arab Emirates</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href="https://wa.me/971545252078"
                  className="text-gray-300 hover:text-[#00A3E0] transition-colors text-sm"
                >
                  +971 54 525 2078
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href="mailto:info@mrmujahid.com"
                  className="text-gray-300 hover:text-[#00A3E0] transition-colors text-sm"
                >
                  info@mrmujahid.com
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Actions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/971545252078"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-[#25D366] hover:bg-[#20B858] text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a
                href="mailto:info@mrmujahid.com"
                className="flex items-center space-x-3 bg-[#00A3E0] hover:bg-[#0082B8] text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 PRO Services. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#00A3E0] transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#00A3E0] transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}