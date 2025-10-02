import { blogPosts } from '@/data';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - BoldMark Agency Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Find related posts (same category)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-dark-navy to-royal-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-accent-yellow hover:text-yellow-300 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-300">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span>{post.author}</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            
            <div className="bg-royal-blue text-white px-3 py-1 rounded-full text-sm">
              {post.category}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl mb-12"
            />
            
            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <p className="text-xl text-gray-700 italic leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <h2 className="text-2xl font-bold text-dark-navy mt-12 mb-6">Key Takeaways</h2>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-royal-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                    ✓
                  </div>
                  <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-royal-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                    ✓
                  </div>
                  <span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-royal-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                    ✓
                  </div>
                  <span>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</span>
                </li>
              </ul>
              
              <p className="mt-8">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
              
              <blockquote className="border-l-4 border-royal-blue pl-6 py-2 my-8 text-gray-600 italic">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
              </blockquote>
              
              <p>
                Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-navy mb-12 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-royal-blue text-white px-2 py-1 rounded text-xs font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-dark-navy mb-3 line-clamp-2">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-royal-blue transition-colors duration-200">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${relatedPost.slug}`} 
                      className="text-royal-blue font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get the latest digital marketing insights delivered straight to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg text-dark-navy focus:outline-none focus:ring-2 focus:ring-accent-yellow"
            />
            <button className="bg-accent-yellow text-dark-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}