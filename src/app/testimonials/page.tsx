import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Client Testimonials - BoldMark Agency',
  description: 'See what our satisfied clients say about our digital marketing services and results.',
};

export default function TestimonialsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-dark-navy to-royal-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Client <span className="text-accent-yellow">Testimonials</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
            Don't just take our word for it. Hear from businesses that have transformed their digital presence with our help.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up delay-100">
              <div className="text-3xl md:text-4xl font-bold text-royal-blue mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center animate-fade-in-up delay-200">
              <div className="text-3xl md:text-4xl font-bold text-royal-blue mb-2">1000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center animate-fade-in-up delay-300">
              <div className="text-3xl md:text-4xl font-bold text-royal-blue mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center animate-fade-in-up delay-400">
              <div className="text-3xl md:text-4xl font-bold text-royal-blue mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-dark-navy mb-4">
              What Our <span className="text-royal-blue">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real businesses that have achieved remarkable growth with our digital marketing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`animate-fade-in-up ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : 'delay-400'}`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-dark-navy mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600">We've helped businesses across various industries achieve digital success.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((id, index) => (
              <div 
                key={id} 
                className={`flex justify-center animate-fade-in-up ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : index === 3 ? 'delay-400' : index === 4 ? 'delay-500' : 'delay-600'}`}
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-16 flex items-center justify-center text-gray-400">
                  Client {id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <a
            href="/contact"
            className="bg-accent-yellow text-dark-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 inline-block animate-fade-in-up delay-200"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}