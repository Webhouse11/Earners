import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us – Earners Hub</title>
        <meta name="description" content="Have questions about online income opportunities? Get in touch with the Earners Hub team." />
      </Helmet>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4 block">Get In Touch</span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">Let's Discuss Your Digital Future.</h1>
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                Have a question about a specific income method? Want to partner with us? Or just want to say hello? Fill out the form and our team will get back to you within 24-48 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">contact@earnershub.com</p>
                    <p className="text-gray-400 text-sm">For general inquiries and support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 000-0000</p>
                    <p className="text-gray-400 text-sm">Mon-Fri from 9am to 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Our Headquarters</h3>
                    <p className="text-gray-600">123 Digital Nomad Way, Suite 100</p>
                    <p className="text-gray-400 text-sm">Austin, TX 78701, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-6">Follow Our Journey</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-400 hover:text-blue-600 transition-all"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-400 hover:text-blue-400 transition-all"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-400 hover:text-pink-600 transition-all"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-400 hover:text-blue-700 transition-all"><Linkedin className="w-5 h-5" /></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">First Name</label>
                    <input 
                      type="text" 
                      placeholder="John"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Content Contribution</option>
                    <option>Advertising</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                  <textarea 
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-gray-400">
                  By sending this message, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
