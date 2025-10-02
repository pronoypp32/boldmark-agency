import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const services = [
    { href: '/services#seo', label: 'SEO Optimization' },
    { href: '/services#social', label: 'Social Media' },
    { href: '/services#ppc', label: 'PPC Advertising' },
    { href: '/services#branding', label: 'Branding' },
    { href: '/services#web', label: 'Web Development' },
  ];

  const socialLinks = [
    { 
      href: 'https://facebook.com', 
      label: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      href: 'https://twitter.com', 
      label: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      href: 'https://linkedin.com', 
      label: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      href: 'https://instagram.com', 
      label: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.876.875 1.416 2.026 1.416 3.323s-.54 2.448-1.416 3.323c-.875.807-2.026 1.218-3.323 1.218zm7.718-9.092c-.876 0-1.577-.701-1.577-1.577s.701-1.577 1.577-1.577 1.577.701 1.577 1.577-.701 1.577-1.577 1.577zM12.017 8.707c-2.079 0-3.74 1.661-3.74 3.74s1.661 3.74 3.74 3.74 3.74-1.661 3.74-3.74-1.661-3.74-3.74-3.74z"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-dark-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="bg-royal-blue text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold">
                B
              </div>
              <span className="text-xl font-bold">BoldMark Agency</span>
            </div>
            <p className="text-gray-300">
              Transforming businesses through innovative digital marketing strategies 
              and cutting-edge web solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-yellow transition-colors duration-200 animate-fade-in-up delay-100"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in delay-100">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.href} className="animate-fade-in-up delay-100">
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-yellow transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in delay-200">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={service.href} className="animate-fade-in-up delay-100">
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-accent-yellow transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in delay-300">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p className="animate-fade-in-up delay-100">📍 Khulna, Bangladesh</p>
              <p className="animate-fade-in-up delay-200">📧 boldmarkagency9900@gmail.com</p>
              <p className="animate-fade-in-up delay-300">📞 +8801642707802</p>
              <p className="animate-fade-in-up delay-400">🕒 Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in delay-400">
          <p className="text-gray-400 text-sm">
            © {currentYear} BoldMark Agency. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-accent-yellow text-sm transition-colors duration-200 animate-fade-in delay-100"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-accent-yellow text-sm transition-colors duration-200 animate-fade-in delay-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}