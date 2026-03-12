import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Zap } from 'lucide-react';
import { POSTS } from '../data/posts';

export default function TrendingTicker() {
  // Get the 5 most recent posts
  const trendingPosts = [...POSTS].slice(0, 5);

  return (
    <div className="bg-gray-900 text-white py-2 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        {/* Label */}
        <div className="flex items-center space-x-2 bg-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest z-10 mr-4 shrink-0 shadow-lg shadow-blue-900/20">
          <Zap className="w-3 h-3 fill-current" />
          <span>Trending Now</span>
        </div>

        {/* Ticker Content */}
        <div className="relative flex-1 overflow-hidden h-6">
          <div className="absolute whitespace-nowrap animate-ticker flex items-center space-x-12">
            {trendingPosts.map((post, idx) => (
              <Link
                key={`${post.id}-${idx}`}
                to={`/post/${post.slug}`}
                className="inline-flex items-center space-x-2 hover:text-blue-400 transition-colors group"
              >
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-blue-500 transition-colors">
                  {post.category}
                </span>
                <span className="text-xs font-medium tracking-tight">
                  {post.title}
                </span>
                <TrendingUp className="w-3 h-3 text-emerald-400 opacity-50" />
              </Link>
            ))}
            {/* Duplicate for seamless loop */}
            {trendingPosts.map((post, idx) => (
              <Link
                key={`${post.id}-dup-${idx}`}
                to={`/post/${post.slug}`}
                className="inline-flex items-center space-x-2 hover:text-blue-400 transition-colors group"
              >
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-blue-500 transition-colors">
                  {post.category}
                </span>
                <span className="text-xs font-medium tracking-tight">
                  {post.title}
                </span>
                <TrendingUp className="w-3 h-3 text-emerald-400 opacity-50" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
