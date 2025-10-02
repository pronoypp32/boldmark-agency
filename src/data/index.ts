import { Service, TeamMember, Testimonial, BlogPost, PortfolioItem, ContactInfo } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'SEO Optimization',
    description: 'Boost your search engine rankings and drive organic traffic with our comprehensive SEO strategies.',
    icon: '🔍',
    features: [
      'Keyword Research & Analysis',
      'On-Page Optimization',
      'Technical SEO Audit',
      'Link Building Strategy',
      'Performance Monitoring'
    ]
  },
  {
    id: '2',
    title: 'Social Media Marketing',
    description: 'Build your brand presence and engage with your audience across all social media platforms.',
    icon: '📱',
    features: [
      'Content Strategy Development',
      'Social Media Management',
      'Paid Social Advertising',
      'Community Building',
      'Analytics & Reporting'
    ]
  },
  {
    id: '3',
    title: 'PPC Advertising',
    description: 'Get instant visibility and drive qualified leads with our data-driven pay-per-click campaigns.',
    icon: '💰',
    features: [
      'Google Ads Management',
      'Facebook & Instagram Ads',
      'Campaign Optimization',
      'Conversion Tracking',
      'ROI Maximization'
    ]
  },
  {
    id: '4',
    title: 'Branding & Design',
    description: 'Create a memorable brand identity that resonates with your target audience and stands out.',
    icon: '🎨',
    features: [
      'Logo & Brand Identity',
      'Brand Guidelines',
      'Marketing Materials',
      'Website Design',
      'Brand Strategy'
    ]
  },
  {
    id: '5',
    title: 'Web Development',
    description: 'Build fast, responsive, and user-friendly websites that convert visitors into customers.',
    icon: '💻',
    features: [
      'Responsive Web Design',
      'E-commerce Development',
      'CMS Implementation',
      'Performance Optimization',
      'Maintenance & Support'
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=128&h=128&fit=crop',
    bio: 'With over 10 years of experience in digital marketing, Sarah leads our team with passion and vision.',
    social: {
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      twitter: 'https://twitter.com/sarah_johnson'
    }
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'Head of Development',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=128&h=128&fit=crop',
    bio: 'Michael brings technical excellence and innovation to every project with his full-stack expertise.',
    social: {
      linkedin: 'https://linkedin.com/in/michael-chen'
    }
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    position: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=128&h=128&fit=crop',
    bio: 'Emily crafts compelling marketing strategies that drive results and build lasting customer relationships.',
    social: {
      linkedin: 'https://linkedin.com/in/emily-rodriguez',
      twitter: 'https://twitter.com/emily_marketing'
    }
  },
  {
    id: '4',
    name: 'David Kim',
    position: 'Design Lead',
    image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=128&h=128&fit=crop',
    bio: 'David creates stunning visual experiences that capture brand essence and engage audiences.',
    social: {
      linkedin: 'https://linkedin.com/in/david-kim-design'
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    company: 'TechStart Inc.',
    position: 'CEO',
    content: 'BoldMark Agency transformed our online presence completely. Our website traffic increased by 300% and sales doubled within 6 months.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'Lisa Thompson',
    company: 'Green Earth Co.',
    position: 'Marketing Manager',
    content: 'The team at BoldMark is incredibly professional and results-driven. They delivered exactly what we needed and more.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop'
  },
  {
    id: '3',
    name: 'Robert Wilson',
    company: 'Local Restaurant Group',
    position: 'Owner',
    content: 'Our social media presence has never been stronger. Customer engagement is through the roof thanks to their amazing campaigns.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop'
  },
  {
    id: '4',
    name: 'Amanda Davis',
    company: 'Fashion Forward',
    position: 'Brand Director',
    content: 'Working with BoldMark was a game-changer for our brand. Their creative approach and attention to detail is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Digital Marketing Trends to Watch in 2024',
    excerpt: 'Stay ahead of the curve with these emerging digital marketing trends that will shape the industry.',
    content: 'Digital marketing is constantly evolving, and 2024 promises to bring exciting new opportunities and challenges...',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Digital Marketing',
    slug: 'digital-marketing-trends-2024'
  },
  {
    id: '2',
    title: 'The Complete Guide to SEO in 2024',
    excerpt: 'Everything you need to know about modern SEO strategies and best practices.',
    content: 'Search engine optimization has become more sophisticated than ever. In this comprehensive guide...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    author: 'Michael Chen',
    date: '2024-01-10',
    category: 'SEO',
    slug: 'complete-seo-guide-2024'
  },
  {
    id: '3',
    title: 'Social Media ROI: How to Measure Success',
    excerpt: 'Learn how to track and measure the return on investment of your social media efforts.',
    content: 'Measuring social media ROI can be challenging, but with the right metrics and tools...',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop',
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    category: 'Social Media',
    slug: 'social-media-roi-measurement'
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-commerce Revolution',
    description: 'Complete digital transformation for a growing retail company, including website redesign and marketing automation.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    category: 'E-commerce',
    stats: [
      { label: 'Traffic Increase', value: '250%' },
      { label: 'Conversion Rate', value: '12%' },
      { label: 'Revenue Growth', value: '180%' }
    ],
    technologies: ['React', 'Shopify', 'Google Analytics', 'Facebook Ads']
  },
  {
    id: '2',
    title: 'Healthcare Digital Presence',
    description: 'Modern website and digital marketing strategy for a healthcare provider to improve patient engagement.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
    category: 'Healthcare',
    stats: [
      { label: 'Patient Inquiries', value: '+200%' },
      { label: 'Online Bookings', value: '85%' },
      { label: 'Website Speed', value: '95/100' }
    ],
    technologies: ['WordPress', 'SEO', 'Google Ads', 'HIPAA Compliance']
  },
  {
    id: '3',
    title: 'Restaurant Chain Expansion',
    description: 'Brand refresh and multi-location marketing campaign for a growing restaurant chain.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
    category: 'Restaurant',
    stats: [
      { label: 'New Locations', value: '15' },
      { label: 'Social Followers', value: '+500%' },
      { label: 'Online Orders', value: '300%' }
    ],
    technologies: ['Branding', 'Social Media', 'Local SEO', 'UberEats Integration']
  }
];

export const contactInfo: ContactInfo = {
  address: '123 Business Street, Digital City, DC 12345',
  phone: '+1 (555) 123-4567',
  email: 'hello@boldmarkagency.com',
  hours: 'Monday - Friday: 9:00 AM - 6:00 PM'
};