import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight, Share2 } from 'lucide-react';
import { Post } from '../types';
import { cn } from '../lib/utils';

interface BlogCardProps {
  post: Post;
  variant?: 'horizontal' | 'vertical' | 'compact';
}

export default function BlogCard({ post, variant = 'vertical' }: BlogCardProps) {
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `${window.location.origin}/post/${post.slug}`,
      });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/post/${post.slug}`);
      alert('Link copied to clipboard!');
    }
  };
  if (variant === 'horizontal') {
    return (
      <Link to={`/post/${post.slug}`} className="group flex flex-col md:flex-row gap-6 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:w-3/5 p-6 flex flex-col justify-center">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            {post.category}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm mb-6 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center space-x-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
              <span className="text-xs font-medium text-gray-700">{post.author.name}</span>
            </div>
            <div className="flex items-center text-gray-400 text-xs space-x-4">
              <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
              <button 
                onClick={handleShare}
                className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Share Post"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/post/${post.slug}`} className="group flex gap-4 items-center py-4 border-b border-gray-100 last:border-0">
        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
        </div>
        <div className="flex-1">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-1">{post.category}</span>
          <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h4>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/post/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-center space-x-2">
            <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
            <span className="text-[11px] font-semibold text-gray-600">{post.author.name}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[11px] text-gray-400 font-medium">{post.date}</span>
            <button 
              onClick={handleShare}
              className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="Share Post"
            >
              <Share2 className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
