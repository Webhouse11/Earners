import { useParams, Link } from 'react-router-dom';
import { POSTS, CATEGORIES } from '../data/posts';
import BlogCard from '../components/BlogCard';
import Sidebar from '../components/Sidebar';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home } from 'lucide-react';

export default function CategoryPage() {
  const { slug } = useParams();
  const categoryName = CATEGORIES.find(c => c.toLowerCase().replace(/ /g, '-') === slug);
  const filteredPosts = POSTS.filter(p => p.category.toLowerCase().replace(/ /g, '-') === slug);

  if (!categoryName) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">Category Not Found</h1>
        <Link to="/" className="text-blue-600 mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{categoryName} – Earners Hub</title>
        <meta name="description" content={`Expert guides and resources for ${categoryName}. Learn how to maximize your income in this niche.`} />
      </Helmet>

      <div className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-blue-600 flex items-center"><Home className="w-3 h-3 mr-1" /> Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900">{categoryName}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">{categoryName}</h1>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Discover the latest trends, tools, and strategies for {categoryName.toLowerCase()}. Our expert-curated content helps you stay ahead in the digital economy.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map(post => (
                    <BlogCard key={post.id} post={post} />
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center bg-gray-50 rounded-2xl">
                    <p className="text-gray-500">No articles found in this category yet. Check back soon!</p>
                  </div>
                )}
              </div>
              
              {/* Pagination Placeholder */}
              {filteredPosts.length > 0 && (
                <div className="mt-16 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50">Previous</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold">1</button>
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50">2</button>
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50">Next</button>
                  </nav>
                </div>
              )}
            </div>
            
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}
