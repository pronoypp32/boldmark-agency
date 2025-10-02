import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { services, testimonials } from '@/data';
import Link from 'next/link';

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-dark-navy mb-4">
              Our <span className="text-royal-blue">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital marketing solutions to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <div 
                key={service.id} 
                className={`animate-fade-in-up ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'}`}
              >
                <ServiceCard 
                  service={service} 
                  featured={index === 1}
                />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up delay-400">
            <Link
              href="/services"
              className="inline-flex items-center bg-royal-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-royal-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white animate-fade-in-up delay-100">
              <div className="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">500+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div className="text-center text-white animate-fade-in-up delay-200">
              <div className="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">98%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
            <div className="text-center text-white animate-fade-in-up delay-300">
              <div className="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">50+</div>
              <div className="text-lg">Team Members</div>
            </div>
            <div className="text-center text-white animate-fade-in-up delay-400">
              <div className="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">5</div>
              <div className="text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-dark-navy mb-4">
              What Our <span className="text-royal-blue">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`animate-fade-in-up ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'}`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up delay-400">
            <Link
              href="/testimonials"
              className="inline-flex items-center border-2 border-royal-blue text-royal-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-royal-blue hover:text-white transition-colors duration-300"
            >
              Read More Reviews
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-navy to-royal-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
            Let's discuss how we can help you achieve your digital marketing goals and grow your business online.
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
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}