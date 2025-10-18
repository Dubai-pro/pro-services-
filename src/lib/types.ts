export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  time: string;
  basePrice: string;
  image?: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface QuoteRequest {
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  budgetRange: string;
  urgency: string;
  attachments?: File[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}