import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services - BoldMark Agency',
  description: 'Comprehensive digital marketing services including SEO, social media marketing, PPC, branding, and web development.',
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-dark-navy to-royal-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-accent-yellow">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
            Comprehensive digital marketing solutions designed to elevate your business and drive measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-dark-navy mb-4">
              What We <span className="text-royal-blue">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end digital marketing services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`animate-fade-in-up ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : index === 3 ? 'delay-400' : 'delay-500'}`}
              >
                <ServiceCard 
                  service={service}
                  featured={index === 1} // Make the second service featured
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-dark-navy mb-4">
              Our <span className="text-royal-blue">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group animate-fade-in-up delay-100">
              <div className="bg-gradient-to-br from-royal-blue to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-xl font-bold text-dark-navy mb-4">Discovery</h3>
              <p className="text-gray-600">
                We start by understanding your business, goals, target audience, and current challenges.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up delay-200">
              <div className="bg-gradient-to-br from-accent-yellow to-yellow-400 text-dark-navy w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-xl font-bold text-dark-navy mb-4">Strategy</h3>
              <p className="text-gray-600">
                We develop a comprehensive strategy tailored to your specific needs and objectives.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up delay-300">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-xl font-bold text-dark-navy mb-4">Execution</h3>
              <p className="text-gray-600">
                Our expert team implements the strategy with precision and attention to detail.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up delay-400">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <h3 className="text-xl font-bold text-dark-navy mb-4">Optimization</h3>
              <p className="text-gray-600">
                We continuously monitor, analyze, and optimize to maximize your return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-dark-navy mb-6">
                Why Choose <span className="text-royal-blue">BoldMark Agency?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start animate-fade-in-up delay-100">
                  <div className="bg-royal-blue text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-navy mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">500+ successful projects and 98% client satisfaction rate speak for our expertise.</p>
                  </div>
                </div>
                
                <div className="flex items-start animate-fade-in-up delay-200">
                  <div className="bg-royal-blue text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-navy mb-2">Data-Driven Approach</h3>
                    <p className="text-gray-600">Every decision is backed by comprehensive analytics and performance metrics.</p>
                  </div>
                </div>
                
                <div className="flex items-start animate-fade-in-up delay-300">
                  <div className="bg-royal-blue text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-navy mb-2">Dedicated Team</h3>
                    <p className="text-gray-600">Our experienced professionals are committed to your success and growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start animate-fade-in-up delay-400">
                  <div className="bg-royal-blue text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-navy mb-2">Transparent Reporting</h3>
                    <p className="text-gray-600">Regular updates and detailed reports keep you informed of progress and results.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Digital marketing analytics"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent-yellow text-dark-navy p-6 rounded-xl shadow-lg animate-fade-in-up delay-500">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
            Let's discuss your project and create a customized digital marketing strategy that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link
              href="/contact"
              className="bg-accent-yellow text-dark-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-dark-navy transition-colors duration-300 transform hover:scale-105"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}