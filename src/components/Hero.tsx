import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  showStats?: boolean;
}

export default function Hero({
  title = "Transform Your Digital Presence",
  subtitle = "with BoldMark Agency",
  description = "We help businesses grow through innovative digital marketing strategies, cutting-edge web development, and data-driven solutions that deliver real results.",
  ctaText = "Start Your Journey",
  ctaLink = "/contact",
  backgroundImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
  showStats = true
}: HeroProps) {
  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Team Members" },
    { value: "5", label: "Years Experience" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-navy/90 via-royal-blue/70 to-dark-navy/90" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-accent-yellow/10 to-transparent rounded-full animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-royal-blue/20 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="block">{title}</span>
            <span className="block bg-gradient-to-r from-accent-yellow to-yellow-300 bg-clip-text text-transparent animate-fade-in delay-200">
              {subtitle}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-400">
            <Link
              href={ctaLink}
              className="bg-accent-yellow text-dark-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {ctaText}
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-dark-navy transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up delay-500">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up delay-100">
                  <div className="text-3xl md:text-4xl font-bold text-accent-yellow mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-fade-in delay-700">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}