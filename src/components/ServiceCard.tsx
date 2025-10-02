import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
        featured ? 'border-2 border-royal-blue' : 'border border-gray-100'
      } animate-fade-in-up`}
    >
      {featured && (
        <div className="absolute top-0 left-0 bg-royal-blue text-white px-4 py-1 text-sm font-semibold animate-fade-in">
          Popular
        </div>
      )}
      
      <div className="p-8">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-royal-blue to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-fade-in">
          <span className="text-3xl text-white">{service.icon}</span>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-dark-navy mb-4 group-hover:text-royal-blue transition-colors duration-300 animate-fade-in delay-100">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed animate-fade-in delay-200">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700 animate-fade-in-up delay-100">
              <svg 
                className="w-5 h-5 text-royal-blue mr-3 flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-royal-blue to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform group-hover:scale-105 animate-fade-in delay-300">
          Learn More
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-yellow/10 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500 animate-fade-in" />
    </div>
  );
}