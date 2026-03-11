import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand and About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Earners<span className="text-blue-600">Hub</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Earners Hub is your premier destination for discovering legitimate online income opportunities. We provide expert guides on AI tools, freelancing, and digital business strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Earners Hub</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
              <li><Link to="/advertise" className="hover:text-blue-500 transition-colors">Advertise with Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-6">Popular Categories</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/category/make-money-online" className="hover:text-blue-500 transition-colors">Make Money Online</Link></li>
              <li><Link to="/category/ai-tools-for-income" className="hover:text-blue-500 transition-colors">AI Tools for Income</Link></li>
              <li><Link to="/category/affiliate-marketing" className="hover:text-blue-500 transition-colors">Affiliate Marketing</Link></li>
              <li><Link to="/category/passive-income" className="hover:text-blue-500 transition-colors">Passive Income</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Get the latest income opportunities delivered to your inbox.</p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Earners Hub. All rights reserved. Professional online income education platform.</p>
        </div>
      </div>
    </footer>
  );
}
