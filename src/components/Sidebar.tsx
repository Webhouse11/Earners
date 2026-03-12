import { POSTS } from '../data/posts';
import BlogCard from './BlogCard';
import ExternalNews from './ExternalNews';
import { TrendingUp, Award, ExternalLink } from 'lucide-react';

export default function Sidebar() {
  const trendingPosts = POSTS.filter(p => p.trending).slice(0, 4);
  const popularPosts = POSTS.slice(0, 5);

  return (
    <aside className="space-y-10">
      {/* External News Feed */}
      <ExternalNews />

      {/* Ad Space */}
      <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-6 text-center">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 block">Advertisement</span>
        <div className="aspect-[300/250] bg-gray-200 rounded-lg flex items-center justify-center mb-4">
          <p className="text-gray-500 text-sm font-medium">Your Ad Here</p>
        </div>
        <button className="text-xs text-blue-600 font-bold flex items-center justify-center w-full hover:underline">
          Advertise with us <ExternalLink className="w-3 h-3 ml-1" />
        </button>
      </div>

      {/* Trending Section */}
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Trending Now</h3>
        </div>
        <div className="space-y-2">
          {trendingPosts.map(post => (
            <BlogCard key={post.id} post={post} variant="compact" />
          ))}
        </div>
      </div>

      {/* Affiliate Banner */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group">
        <div className="relative z-10">
          <Award className="w-8 h-8 mb-4 text-blue-200" />
          <h4 className="text-xl font-bold mb-2">Master AI Income</h4>
          <p className="text-blue-100 text-sm mb-6">Get our exclusive guide on 50+ AI tools to automate your online business.</p>
          <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-md">
            Get Access Now
          </button>
        </div>
        <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      </div>

      {/* Popular Guides */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">Popular Guides</h3>
        <div className="space-y-4">
          {popularPosts.map((post, idx) => (
            <div key={post.id} className="flex items-start space-x-4 group cursor-pointer">
              <span className="text-3xl font-black text-gray-100 group-hover:text-blue-100 transition-colors">0{idx + 1}</span>
              <div>
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{post.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
