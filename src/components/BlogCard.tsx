'use client';

import Link from 'next/link';
import { BlogPost } from '@/types';
import Image from 'next/image';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in-up">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-royal-blue text-white px-3 py-1 rounded-full text-sm font-medium animate-fade-in">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center text-gray-500 text-sm mb-3 animate-fade-in delay-100">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span>{formatDate(post.date)}</span>
          <span className="mx-2">•</span>
          <span>By {post.author}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-dark-navy mb-3 group-hover:text-royal-blue transition-colors duration-300 line-clamp-2 animate-fade-in delay-200">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed animate-fade-in delay-300">
          {post.excerpt}
        </p>

        {/* Read More */}
        <div className="flex items-center justify-between animate-fade-in delay-400">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-royal-blue font-semibold hover:text-blue-700 transition-colors duration-200"
          >
            Read More
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          {/* Reading time estimate */}
          <span className="text-gray-400 text-sm">
            {Math.ceil(post.content.split(' ').length / 200)} min read
          </span>
        </div>
      </div>
    </article>
  );
}