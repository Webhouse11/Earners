import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, ShieldCheck, Globe } from 'lucide-react';
import { POSTS, CATEGORIES } from '../data/posts';
import BlogCard from '../components/BlogCard';
import Sidebar from '../components/Sidebar';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const featuredPost = POSTS.find(p => p.featured) || POSTS[0];
  const latestPosts = POSTS.slice(0, 6);
  const trendingPosts = POSTS.filter(p => p.trending).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Earners Hub – Your Gateway to Online Income Opportunities</title>
        <meta name="description" content="Discover legitimate ways to make money online with AI tools, freelancing, affiliate marketing, and passive income strategies." />
        <meta name="22b6e0c7b12e6e66c75a59257ee9c424b3b7a2cb" content="22b6e0c7b12e6e66c75a59257ee9c424b3b7a2cb" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.4),transparent_70%)]"></div>
          <div className="grid grid-cols-8 h-full">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border-r border-white/5 h-full"></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Zap className="w-3 h-3" />
              <span>New Income Guides for 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Earners Hub – Your Gateway to <span className="text-blue-500">Online Income</span> Opportunities.
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
              Master the digital economy. We provide professional insights into AI income tools, high-ticket freelancing, and scalable online business models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/category/make-money-online" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center">
                Start Learning Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10 flex items-center justify-center">
                About Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale">
            <div className="flex items-center space-x-2"><Globe className="w-6 h-6" /><span className="font-bold">Global Insights</span></div>
            <div className="flex items-center space-x-2"><ShieldCheck className="w-6 h-6" /><span className="font-bold">Verified Methods</span></div>
            <div className="flex items-center space-x-2"><TrendingUp className="w-6 h-6" /><span className="font-bold">Growth Focused</span></div>
            <div className="flex items-center space-x-2 font-black text-xl">FINANCE INSIDER</div>
            <div className="flex items-center space-x-2 font-black text-xl">TECH DAILY</div>
          </div>
        </div>
      </div>

      {/* Featured & Trending Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Featured Story</h2>
                <div className="h-1 flex-1 bg-gray-200 mx-6 hidden md:block"></div>
              </div>
              <BlogCard post={featuredPost} variant="horizontal" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {latestPosts.slice(1, 5).map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            
            <Sidebar />
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Explore Income Streams</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose a category to discover specialized guides and tools tailored to your financial goals.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CATEGORIES.map(cat => (
              <Link 
                key={cat}
                to={`/category/${cat.toLowerCase().replace(/ /g, '-')}`}
                className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group text-center"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{cat}</h3>
                <span className="text-xs text-gray-400 mt-2 block">20+ Articles</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Join 50,000+ Digital Earners</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Get weekly updates on new AI tools, side hustles, and online business opportunities directly in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 text-gray-900 font-medium"
            />
            <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors shadow-xl">
              Subscribe Free
            </button>
          </form>
          <p className="text-blue-200 text-xs mt-6">No spam. Unsubscribe at any time. Professional insights only.</p>
        </div>
      </section>
    </>
  );
}
