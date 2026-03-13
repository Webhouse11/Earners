import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';
import { Clock, User, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
  // Get the 5 latest posts
  const sliderPosts = [...POSTS].slice(0, 5);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] mb-12 rounded-[2rem] overflow-hidden group shadow-2xl">
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-full w-full"
      >
        {sliderPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24">
                <div className="max-w-3xl">
                  <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-xs font-black rounded-full mb-6 uppercase tracking-widest animate-fade-in">
                    {post.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                    {post.title}
                  </h2>
                  <p className="text-gray-200 text-lg md:text-xl mb-8 line-clamp-2 max-w-2xl font-medium leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 mb-10 text-gray-300 text-sm font-semibold">
                    <div className="flex items-center">
                      <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border-2 border-white/20 mr-3" referrerPolicy="no-referrer" />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link
                    to={`/post/${post.slug}`}
                    className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl group/btn"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          transition: all 0.3s ease;
          opacity: 0;
        }
        .group:hover .swiper-button-next, .group:hover .swiper-button-prev {
          opacity: 1;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: bold;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: white;
          color: black !important;
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
