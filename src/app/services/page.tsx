'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Clock, ArrowRight } from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '@/lib/constants';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive business solutions designed to help your company grow and succeed
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#111827] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#00A3E0] focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#111827] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#00A3E0] focus:border-transparent appearance-none cursor-pointer"
            >
              {SERVICE_CATEGORIES.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-[#111827] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[#00A3E0] bg-[#00A3E0]/10 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-poppins text-[#0E2040] dark:text-[#F1F5F9] mb-3">
                  {service.title}
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
                href={`/services/${service.id}`}
                className="inline-flex items-center text-[#00A3E0] hover:text-[#0082B8] font-semibold transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No services found matching your criteria.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#0E2040] to-[#00A3E0] rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold font-poppins mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We create custom solutions tailored to your specific needs.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center bg-[#D4AF37] hover:bg-[#C9A23A] text-[#0E2040] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Request Custom Quote
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}