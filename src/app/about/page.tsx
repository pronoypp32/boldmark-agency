import { teamMembers } from '@/data';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - BoldMark Agency',
  description: "Learn about BoldMark Agency's mission, vision, and the talented team behind our digital marketing success.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="text-accent-yellow">BoldMark Agency</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
            We're a passionate team of digital marketing experts dedicated to transforming businesses through innovative strategies.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-dark-navy mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2019, BoldMark Agency began with a simple mission: to help businesses thrive in the digital age. What started as a small team has grown into a full-service digital agency.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center animate-fade-in-up delay-100">
                  <div className="text-3xl font-bold text-royal-blue">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center animate-fade-in-up delay-200">
                  <div className="text-3xl font-bold text-royal-blue">98%</div>
                  <div className="text-sm text-gray-600">Client Retention</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-dark-navy mb-4">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up delay-100">
              <div className="flex items-center mb-6">
                <div className="bg-royal-blue text-white w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4">🎯</div>
                <h3 className="text-2xl font-bold text-dark-navy">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative digital marketing solutions that drive measurable growth and create lasting connections.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up delay-200">
              <div className="flex items-center mb-6">
                <div className="bg-accent-yellow text-dark-navy w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4">🌟</div>
                <h3 className="text-2xl font-bold text-dark-navy">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading digital marketing agency that transforms how businesses connect with customers in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-dark-navy mb-4">
              Meet Our <span className="text-royal-blue">Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in-up ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : 'delay-400'}`}
              >
                <Image
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1e40af&color=ffffff&size=128`}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-dark-navy mb-1">{member.name}</h3>
                <p className="text-royal-blue font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}