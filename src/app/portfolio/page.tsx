import { portfolioItems } from '@/data';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Portfolio - BoldMark Agency',
  description: 'Explore our successful digital marketing projects and case studies that showcase our expertise and results.',
};

export default function PortfolioPage() {
  const categories = ['All', 'E-commerce', 'Healthcare', 'Restaurant', 'Technology'];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-dark-navy to-royal-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-accent-yellow">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-lg border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white transition-colors duration-300 font-medium animate-fade-in-up ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : index === 3 ? 'delay-400' : 'delay-500'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group animate-fade-in-up ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-royal-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dark-navy mb-3 group-hover:text-royal-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {item.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center animate-fade-in-up delay-100">
                        <div className="text-xl font-bold text-royal-blue">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm animate-fade-in delay-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Stats */}
      <section className="py-20 bg-royal-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Success by the Numbers</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our portfolio speaks for itself with measurable results across all industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up delay-100">
              <div className="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">500+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div className="text-center animate-fade-in-up delay-200">
              <div className="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">250%</div>
              <div className="text-lg">Average Growth</div>
            </div>
            <div className="text-center animate-fade-in-up delay-300">
              <div className="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">98%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
            <div className="text-center animate-fade-in-up delay-400">
              <div className="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">50+</div>
              <div className="text-lg">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 animate-fade-in">
            <div className="text-royal-blue/20 mb-6">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
              "Working with BoldMark Agency transformed our online presence completely. Our website traffic increased by 300% and sales doubled within 6 months."
            </p>
            <div className="flex items-center justify-center animate-fade-in-up delay-100">
              <Image
                src="https://ui-avatars.com/api/?name=John+Smith&background=1e40af&color=ffffff&size=64"
                alt="John Smith"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="text-left">
                <h4 className="font-semibold text-dark-navy">John Smith</h4>
                <p className="text-gray-600">CEO, TechStart Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-navy to-royal-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
            Let's work together to create a digital marketing strategy that delivers exceptional results for your business.
          </p>
          <Link
            href="/contact"
            className="bg-accent-yellow text-dark-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 inline-block animate-fade-in-up delay-200"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
}