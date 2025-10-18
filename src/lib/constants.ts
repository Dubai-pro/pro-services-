import { Service, Testimonial, TeamMember, FAQ } from './types';

// Company Information
export const COMPANY_INFO = {
  name: 'PRO Services',
  tagline: 'Professional solutions in Dubai',
  address: 'Dubai, United Arab Emirates',
  phones: ['+971547738266', '+971545252078'],
  emails: {
    info: 'info@mrmujahid.com',
    sales: 'sales@mrmujahid.com',
    admin: 'admin@mrmujahid.com'
  },
  whatsapp: {
    primary: 'https://wa.me/971547738266',
    secondary: 'https://wa.me/971545252078'
  },
  social: {
    linkedin: '#',
    instagram: '#',
    facebook: '#'
  }
};

// Color Palettes
export const COLORS = {
  light: {
    primary: '#0E2040',
    secondary: '#D4AF37',
    accent: '#00A3E0',
    text: {
      primary: '#0B1220',
      secondary: '#475569'
    },
    background: '#F7FAFC',
    surface: '#FFFFFF',
    border: '#E2E8F0'
  },
  dark: {
    primary: '#1B2A4B',
    secondary: '#C9A23A',
    accent: '#1FB6FF',
    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8'
    },
    background: '#0B1220',
    surface: '#111827',
    border: '#243042'
  }
};

// Services Data
export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Business Setup',
    shortDescription: 'Free Zone Business Setup in Dubai by Mr. Mujahid',
    longDescription: `Free Zone Business Setup in Dubai
by Mr. Mujahid

Launch your company in one of Dubai's premier Free Zones with confidence and ease through Mr. Mujahid's expert business setup services. Whether you're a start-up, entrepreneur, or international investor, we provide an end-to-end solution designed to streamline incorporation, licensing, and compliance so you can focus on your vision, not bureaucracy.

What You Get

Company Registration & Trade License
Assistance with selecting the right Free Zone for your business, handling registration, trade license application, renewals, and amendments — all in accordance with UAE regulations.

Local Support Through Every Step
From quota and municipality approvals to RTA (Roads & Transport Authority) as well as other related government permits, our behind-the-scenes experts will handle all paperwork for you and manage communications with relevant bodies.

Corporate Structure & Compliance Advice
Understanding requirements The team should advise you on shareholding and ownership, what business activities are allowed under Free Zone law, as well as any other regulation that must be adhered to when setting up your Free Zone entity.`,
    category: 'Consulting',
    time: '2-4 weeks',
    basePrice: 'Starting from AED 5,000',
    benefits: [
      'Free Zone selection and registration',
      'Trade license application and renewals',
      'Government permits and approvals',
      'Corporate structure advisory',
      'Compliance guidance',
      'End-to-end setup solution'
    ],
    faqs: [
      {
        question: 'What does Free Zone business setup include?',
        answer: 'Our Free Zone business setup covers company registration, trade license application, government permits, corporate structure advice, and full compliance guidance for UAE Free Zone regulations.'
      },
      {
        question: 'Which Free Zones do you work with?',
        answer: 'We work with all major Dubai Free Zones including DIFC, DMCC, JAFZA, Dubai South, and others. We help you select the best Free Zone based on your business activities and requirements.'
      }
    ]
  },
  {
    id: '2',
    title: 'Visa Services',
    shortDescription: 'Comprehensive visa and immigration solutions',
    longDescription: 'Professional visa services for UAE residence, employment, investor, and tourist visas with expert guidance through the entire process.',
    category: 'Immigration',
    time: '2-6 weeks',
    basePrice: 'Starting from AED 2,500',
    benefits: [
      'Residence visa processing',
      'Employment visa assistance',
      'Investor visa guidance',
      'Family visa services',
      'Visa renewal support',
      'Document preparation'
    ],
    faqs: [
      {
        question: 'What types of visas do you handle?',
        answer: 'We handle all types of UAE visas including residence, employment, investor, family, and tourist visas with complete documentation support.'
      },
      {
        question: 'How long does visa processing take?',
        answer: 'Visa processing typically takes 2-6 weeks depending on the type of visa and completeness of documentation.'
      }
    ]
  },
  {
    id: '3',
    title: 'Corporate Services',
    shortDescription: 'Complete corporate management solutions',
    longDescription: 'Comprehensive corporate services including company formation, corporate governance, compliance management, and ongoing administrative support.',
    category: 'Corporate',
    time: '1-4 weeks',
    basePrice: 'Starting from AED 1,500',
    benefits: [
      'Company formation',
      'Corporate governance',
      'Compliance management',
      'Board meeting support',
      'Annual filing services',
      'Corporate restructuring'
    ],
    faqs: [
      {
        question: 'What corporate services do you provide?',
        answer: 'We provide complete corporate services including formation, governance, compliance, board support, and ongoing administrative services.'
      },
      {
        question: 'Do you handle ongoing compliance?',
        answer: 'Yes, we provide ongoing compliance management including annual filings, regulatory updates, and corporate governance support.'
      }
    ]
  },
  {
    id: '4',
    title: 'Insurance Policy',
    shortDescription: 'Comprehensive insurance solutions',
    longDescription: 'Professional insurance services covering business, health, property, and liability insurance with competitive rates and comprehensive coverage.',
    category: 'Insurance',
    time: '1-2 weeks',
    basePrice: 'Starting from AED 300',
    benefits: [
      'Business insurance',
      'Health insurance',
      'Property coverage',
      'Liability protection',
      'Claims assistance',
      'Policy management'
    ],
    faqs: [
      {
        question: 'What types of insurance do you offer?',
        answer: 'We offer comprehensive insurance solutions including business, health, property, liability, and specialized coverage options.'
      },
      {
        question: 'How do you help with claims?',
        answer: 'We provide full claims assistance including documentation, liaison with insurance companies, and follow-up until resolution.'
      }
    ]
  },
  {
    id: '5',
    title: 'Social Media Marketing',
    shortDescription: 'Strategic social media management',
    longDescription: 'Professional social media marketing services to build your brand presence, engage audiences, and drive business growth across all major platforms.',
    category: 'Marketing',
    time: '1-3 months',
    basePrice: 'Starting from AED 500',
    benefits: [
      'Content creation',
      'Platform management',
      'Audience engagement',
      'Analytics and reporting',
      'Paid advertising',
      'Brand building'
    ],
    faqs: [
      {
        question: 'Which platforms do you manage?',
        answer: 'We manage all major social media platforms including Instagram, Facebook, LinkedIn, Twitter, TikTok, and YouTube based on your target audience.'
      },
      {
        question: 'How do you measure success?',
        answer: 'We track key metrics including engagement rates, follower growth, reach, conversions, and ROI with detailed monthly reports.'
      }
    ]
  },
  {
    id: '6',
    title: 'Travel & Tourism',
    shortDescription: 'Complete travel and tourism services',
    longDescription: 'Professional travel and tourism services including tour packages, hotel bookings, visa assistance, and customized travel solutions for business and leisure.',
    category: 'Travel',
    time: '1-2 weeks',
    basePrice: 'Starting from AED 1,000',
    benefits: [
      'Tour package design',
      'Hotel reservations',
      'Flight bookings',
      'Visa assistance',
      'Travel insurance',
      'Custom itineraries'
    ],
    faqs: [
      {
        question: 'What travel services do you provide?',
        answer: 'We provide comprehensive travel services including tour packages, bookings, visa assistance, and customized travel solutions for individuals and groups.'
      },
      {
        question: 'Do you handle business travel?',
        answer: 'Yes, we specialize in both leisure and business travel with corporate packages, group bookings, and executive travel management.'
      }
    ]
  }
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Al-Rashid',
    company: 'Dubai Enterprises',
    text: 'PRO Services transformed our business operations. Their consulting expertise helped us achieve 40% growth in just 6 months.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    company: 'Tech Innovations LLC',
    text: 'Outstanding web development services. They delivered a modern, responsive website that perfectly represents our brand.',
    rating: 5
  },
  {
    id: '3',
    name: 'Mohammed Hassan',
    company: 'Gulf Trading Co.',
    text: 'Professional, reliable, and results-driven. Their digital marketing strategies significantly improved our online presence.',
    rating: 5
  }
];

// Team Members
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Mr. Mujahid',
    role: 'Founder & CEO',
    linkedin: '#'
  },
  {
    id: '2',
    name: 'Sarah Al-Zahra',
    role: 'Business Consultant',
    linkedin: '#'
  },
  {
    id: '3',
    name: 'Ahmed Khalil',
    role: 'Digital Marketing Manager',
    linkedin: '#'
  },
  {
    id: '4',
    name: 'Fatima Rahman',
    role: 'Legal Advisor',
    linkedin: '#'
  }
];

// FAQ Data
export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'What services do you offer?',
    answer: 'We offer comprehensive business solutions including business setup, visa services, corporate services, insurance policies, social media marketing, and travel & tourism.',
    category: 'General'
  },
  {
    id: '2',
    question: 'How do I request a quote?',
    answer: 'You can request a quote by filling out our quote form, contacting us via WhatsApp at +971547738266, or sending an email to info@mrmujahid.com.',
    category: 'Pricing'
  },
  {
    id: '3',
    question: 'What is your response time?',
    answer: 'We typically respond to all inquiries within 24-48 hours. For urgent matters, please contact us via WhatsApp at +971547738266 for immediate assistance.',
    category: 'Support'
  },
  {
    id: '4',
    question: 'Do you work with international clients?',
    answer: 'Yes, while we are based in Dubai, we work with clients across the UAE and internationally, offering remote consultation and services.',
    category: 'General'
  },
  {
    id: '5',
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including bank transfers, credit cards, and digital payment platforms. Payment terms are discussed during project initiation.',
    category: 'Pricing'
  },
  {
    id: '6',
    question: 'How do you ensure project quality?',
    answer: 'We follow strict quality assurance processes, regular client communication, milestone reviews, and provide detailed project documentation.',
    category: 'Quality'
  },
  {
    id: '7',
    question: 'Can you handle urgent projects?',
    answer: 'Yes, we can accommodate urgent projects. Please contact us directly at +971547738266 to discuss timeline requirements and priority scheduling.',
    category: 'Timeline'
  },
  {
    id: '8',
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer various support packages for ongoing maintenance, updates, and consultation based on your needs. Contact us at info@mrmujahid.com for details.',
    category: 'Support'
  },
  {
    id: '9',
    question: 'What industries do you serve?',
    answer: 'We serve various industries including technology, healthcare, finance, retail, real estate, and manufacturing across the UAE.',
    category: 'General'
  },
  {
    id: '10',
    question: 'How do you handle confidentiality?',
    answer: 'We maintain strict confidentiality agreements and follow industry best practices to protect all client information and business data.',
    category: 'Security'
  }
];

// Navigation Items
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Business Setup', href: '/business-setup-details' },
  { label: 'Visa Services', href: '/visa-services-details' },
  { label: 'Corporate Services', href: '/corporate-services-details' },
  { label: 'Insurance Policy', href: '/insurance-policy-details' },
  { label: 'Social Media Marketing', href: '/social-media-marketing-details' },
  { label: 'Travel & Tourism', href: '/travel-tourism-details' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Quote', href: '/quote' },
  { label: 'FAQ', href: '/faq' }
];

// Service Categories
export const SERVICE_CATEGORIES = [
  'All',
  'Consulting',
  'Immigration',
  'Corporate',
  'Insurance',
  'Marketing',
  'Travel'
];

// Budget Ranges
export const BUDGET_RANGES = [
  'Under AED 5,000',
  'AED 5,000 - 10,000',
  'AED 10,000 - 25,000',
  'AED 25,000 - 50,000',
  'AED 50,000+',
  'To be discussed'
];

// Urgency Options
export const URGENCY_OPTIONS = [
  'Not urgent (1+ months)',
  'Moderate (2-4 weeks)',
  'Urgent (1-2 weeks)',
  'Very urgent (within 1 week)',
  'Emergency (ASAP)'
];

// Company Timeline
export const COMPANY_TIMELINE = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'PRO Services was established in Dubai with a vision to provide comprehensive business solutions.'
  },
  {
    year: '2019',
    title: 'Service Expansion',
    description: 'Expanded our services to include digital marketing and web development, serving 50+ clients.'
  },
  {
    year: '2021',
    title: 'Legal Division',
    description: 'Added legal services division, becoming a one-stop solution for business needs.'
  },
  {
    year: '2022',
    title: 'Regional Growth',
    description: 'Expanded operations across the UAE, serving clients in Abu Dhabi, Sharjah, and other emirates.'
  },
  {
    year: '2024',
    title: 'Digital Innovation',
    description: 'Launched advanced digital solutions and AI-powered business consulting services.'
  }
];