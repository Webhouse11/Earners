import { Link } from 'react-router-dom';
import { Newspaper, Clock, ChevronRight } from 'lucide-react';
import { POSTS } from '../data/posts';

export default function LatestArticles() {
  // Get the 6 most recent posts
  const latestPosts = [...POSTS].slice(0, 6);

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Newspaper className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-bold text-gray-900">Latest from Earners Hub</h3>
      </div>
      <div className="space-y-4">
        {latestPosts.map((post) => (
          <Link 
            key={post.id} 
            to={`/post/${post.slug}`}
            className="block p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all group"
          >
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 block">
              {post.category}
            </span>
            <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-2">
              {post.title}
            </h4>
            <div className="flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.date}</span>
              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
      <Link 
        to="/" 
        className="block text-center py-3 text-xs font-bold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
      >
        View All Articles
      </Link>
    </div>
  );
}
