import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog - BoldMark Agency',
  description: 'Latest insights, tips, and trends in digital marketing, SEO, social media, and web development.',
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-dark-navy to-royal-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-accent-yellow">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
            Stay updated with the latest digital marketing trends, SEO tips, and industry insights.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {['All', 'Digital Marketing', 'SEO', 'Social Media', 'Web Development', 'Branding'].map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-royal-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-royal-blue hover:text-white'
                } animate-fade-in-up ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : index === 3 ? 'delay-400' : index === 4 ? 'delay-500' : 'delay-600'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id} 
                className={`animate-fade-in-up ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'}`}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12 animate-fade-in-up delay-400">
            <button className="bg-royal-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
            Get the latest digital marketing insights delivered straight to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg text-dark-navy focus:outline-none focus:ring-2 focus:ring-accent-yellow"
            />
            <button className="bg-accent-yellow text-dark-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          
          <p className="text-gray-200 text-sm mt-4 animate-fade-in delay-300">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}