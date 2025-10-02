'use client';

import { Testimonial } from '@/types';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-accent-yellow' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden group animate-fade-in-up">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-royal-blue/10 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500 animate-fade-in" />
      
      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-royal-blue/20 group-hover:text-royal-blue/30 transition-colors duration-300 animate-fade-in">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4 animate-fade-in delay-100">
        {renderStars(testimonial.rating)}
      </div>

      {/* Content */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 italic animate-fade-in delay-200">
        {testimonial.content}
      </p> 

      {/* Author */}
      <div className="flex items-center animate-fade-in delay-300">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-dark-navy">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">
            {testimonial.position} at {testimonial.company}
          </p>
        </div>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-royal-blue/20 rounded-2xl transition-colors duration-300" />
    </div>
  );
}