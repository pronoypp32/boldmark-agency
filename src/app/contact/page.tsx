import ContactForm from '@/components/ContactForm';
import { contactInfo } from '@/data';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us - BoldMark Agency',
  description: 'Get in touch with our digital marketing experts. We\'re here to help transform your business.',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-dark-navy to-royal-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Get In <span className="text-accent-yellow">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
            Ready to transform your digital presence? Let's discuss your project and create a customized strategy that drives results.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-right">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                <h2 className="text-3xl font-bold text-dark-navy mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start animate-fade-in-up delay-100">
                    <div className="bg-royal-blue text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark-navy mb-2">Our Location</h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start animate-fade-in-up delay-200">
                    <div className="bg-royal-blue text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark-navy mb-2">Phone Number</h3>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start animate-fade-in-up delay-300">
                    <div className="bg-royal-blue text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark-navy mb-2">Email Address</h3>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start animate-fade-in-up delay-400">
                    <div className="bg-royal-blue text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark-navy mb-2">Working Hours</h3>
                      <p className="text-gray-600">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-dark-navy mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { name: 'Facebook', icon: 'facebook' },
                      { name: 'Twitter', icon: 'twitter' },
                      { name: 'LinkedIn', icon: 'linkedin' },
                      { name: 'Instagram', icon: 'instagram' }
                    ].map((social, index) => (
                      <a
                        key={social.name}
                        href="#"
                        className="bg-gray-100 hover:bg-royal-blue hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 animate-fade-in-up delay-100"
                        aria-label={social.name}
                      >
                        <span className="font-semibold">{social.icon.charAt(0).toUpperCase()}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-xl animate-fade-in-up delay-500">
            <div className="bg-gray-200 border-2 border-dashed w-full h-96 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Google Maps Integration</p>
                <p className="text-sm mt-2">(Placeholder for actual map)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
            Let's schedule a free consultation to discuss your goals and how we can help you achieve them.
          </p>
          <a
            href="#contact-form"
            className="bg-accent-yellow text-dark-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 inline-block animate-fade-in-up delay-200"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}