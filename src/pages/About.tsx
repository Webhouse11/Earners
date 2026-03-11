import { Helmet } from 'react-helmet-async';
import { Target, Users, Shield, Lightbulb, TrendingUp, Cpu } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Earners Hub – Our Mission to Empower Digital Earners</title>
        <meta name="description" content="Learn about Earners Hub and how we help people discover legitimate ways to make money online using modern digital tools and AI." />
      </Helmet>

      <section className="bg-gray-900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
            Empowering the Next Generation of <span className="text-blue-500">Digital Entrepreneurs</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Earners Hub was founded with a single mission: to cut through the noise and provide legitimate, actionable strategies for making money in the modern digital economy.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4 block">Our Story</span>
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Why We Built Earners Hub</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  The internet is full of "get rich quick" schemes and misleading information. We saw a need for a professional, high-authority platform that treats online income as a serious business endeavor.
                </p>
                <p>
                  Whether you're looking to leverage AI tools for automation, build a high-ticket freelancing career, or create a scalable affiliate marketing business, Earners Hub provides the expert guidance you need to succeed.
                </p>
                <p>
                  We believe that with the right tools and knowledge, anyone can achieve financial independence through the digital economy.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img src="https://picsum.photos/seed/office1/600/600" alt="Office" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl mt-8">
                <img src="https://picsum.photos/seed/office2/600/600" alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Shield className="w-8 h-8 text-blue-600" />, title: "Integrity First", desc: "We only recommend methods and tools that we have verified or used ourselves." },
              { icon: <Lightbulb className="w-8 h-8 text-blue-600" />, title: "Innovation Driven", desc: "We stay at the forefront of AI and digital trends to give you a competitive edge." },
              { icon: <Users className="w-8 h-8 text-blue-600" />, title: "Community Focused", desc: "Our goal is to build a supportive community of successful digital earners." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
