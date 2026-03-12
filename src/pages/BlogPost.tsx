import { useParams, Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { POSTS } from '../data/posts';
import Sidebar from '../components/Sidebar';
import { Helmet } from 'react-helmet-async';
import Markdown from 'react-markdown';
import { Clock, Calendar, User, Share2, MessageCircle, Bookmark, ChevronRight, Home, Facebook, Twitter, Linkedin, Send, Link as LinkIcon, Check } from 'lucide-react';
import { useState } from 'react';

export default function BlogPost() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const post = POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <Link to="/" className="text-blue-600 mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const shareHandlers = {
    facebook: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank'),
    twitter: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, '_blank'),
    linkedin: () => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`, '_blank'),
    whatsapp: () => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`, '_blank'),
    copy: () => {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const relatedPosts = POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} – Earners Hub</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
      </Helmet>

      <article className="bg-white">
        {/* Breadcrumbs & Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center space-x-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">
            <Link to="/" className="hover:text-blue-600 flex items-center"><Home className="w-3 h-3 mr-1" /> Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to={`/category/${post.category.toLowerCase().replace(/ /g, '-')}`} className="hover:text-blue-600">{post.category}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-black rounded-full mb-6 uppercase tracking-widest">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-12 pb-8 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border-2 border-blue-50" referrerPolicy="no-referrer" />
                <div>
                  <span className="block text-sm font-bold text-gray-900">{post.author.name}</span>
                  <span className="block text-xs text-gray-500">{post.author.role}</span>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              {/* Social Share Sticky */}
              <div className="flex lg:block lg:sticky lg:top-32 lg:-ml-20 mb-8 lg:mb-0 space-x-4 lg:space-x-0 lg:space-y-4 float-left lg:float-none">
                <button 
                  onClick={shareHandlers.facebook}
                  className="p-3 bg-gray-50 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                  title="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button 
                  onClick={shareHandlers.twitter}
                  className="p-3 bg-gray-50 text-gray-400 hover:text-blue-400 hover:bg-blue-50 rounded-xl transition-all"
                  title="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button 
                  onClick={shareHandlers.linkedin}
                  className="p-3 bg-gray-50 text-gray-400 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
                <button 
                  onClick={shareHandlers.whatsapp}
                  className="p-3 bg-gray-50 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                  title="Share on WhatsApp"
                >
                  <Send className="w-5 h-5" />
                </button>
                <button 
                  onClick={shareHandlers.copy}
                  className={cn(
                    "p-3 rounded-xl transition-all",
                    copied ? "bg-green-600 text-white" : "bg-gray-50 text-gray-400 hover:text-gray-900 hover:bg-gray-100"
                  )}
                  title="Copy Link"
                >
                  {copied ? <Check className="w-5 h-5" /> : <LinkIcon className="w-5 h-5" />}
                </button>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-600 prose-img:rounded-3xl">
                <Markdown>{post.content}</Markdown>
              </div>

              {/* Author Bio */}
              <div className="mt-20 p-8 bg-gray-50 rounded-3xl flex flex-col md:flex-row items-center md:items-start gap-8">
                <img src={post.author.avatar} alt={post.author.name} className="w-24 h-24 rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                <div className="text-center md:text-left">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">About the Author</span>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{post.author.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.author.name} is a seasoned {post.author.role.toLowerCase()} with over a decade of experience in the digital economy. They specialize in helping individuals build sustainable income streams through modern technology.
                  </p>
                  <div className="flex justify-center md:justify-start space-x-4">
                    <a href="#" className="text-sm font-bold text-blue-600 hover:underline">Follow on Twitter</a>
                    <a href="#" className="text-sm font-bold text-blue-600 hover:underline">View Portfolio</a>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-20">
                <h3 className="text-2xl font-black text-gray-900 mb-8">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map(p => (
                    <div key={p.id} className="group cursor-pointer">
                      <Link to={`/post/${p.slug}`}>
                        <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">{p.title}</h4>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comments Section Placeholder */}
              <div className="mt-20 border-t border-gray-100 pt-12">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black text-gray-900">Discussion</h3>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">0 Comments</span>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl text-center">
                  <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium mb-6">Join the conversation. Share your thoughts on this guide.</p>
                  <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                    Post a Comment
                  </button>
                </div>
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </article>
    </>
  );
}
