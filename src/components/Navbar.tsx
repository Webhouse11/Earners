import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, Menu, X, TrendingUp, DollarSign, Cpu, Briefcase, Share2, PenTool, Lightbulb, Wallet } from 'lucide-react';
import { cn } from '../lib/utils';
import { CATEGORIES } from '../data/posts';

const categoryIcons: Record<string, React.ReactNode> = {
  "Make Money Online": <DollarSign className="w-4 h-4" />,
  "AI Tools for Income": <Cpu className="w-4 h-4" />,
  "Freelancing": <Briefcase className="w-4 h-4" />,
  "Affiliate Marketing": <Share2 className="w-4 h-4" />,
  "Blogging & SEO": <PenTool className="w-4 h-4" />,
  "Online Business Ideas": <Lightbulb className="w-4 h-4" />,
  "Passive Income": <Wallet className="w-4 h-4" />
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                Earners<span className="text-blue-600">Hub</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {CATEGORIES.slice(0, 4).map((cat) => (
              <NavLink
                key={cat}
                to={`/category/${cat.toLowerCase().replace(/ /g, '-')}`}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-blue-600",
                    isActive ? "text-blue-600" : "text-gray-600"
                  )
                }
              >
                {cat}
              </NavLink>
            ))}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-600 hover:text-blue-600 flex items-center">
                More Categories
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {CATEGORIES.slice(4).map((cat) => (
                    <Link
                      key={cat}
                      to={`/category/${cat.toLowerCase().replace(/ /g, '-')}`}
                      className="flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    >
                      {categoryIcons[cat]}
                      <span>{cat}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 animate-in slide-in-from-top duration-200">
          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for online income guides, AI tools..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                to={`/category/${cat.toLowerCase().replace(/ /g, '-')}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl"
              >
                {categoryIcons[cat]}
                <span>{cat}</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-4">
              <Link to="/about" className="block px-4 py-3 text-base font-medium text-gray-600">About Us</Link>
              <Link to="/contact" className="block px-4 py-3 text-base font-medium text-gray-600">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
