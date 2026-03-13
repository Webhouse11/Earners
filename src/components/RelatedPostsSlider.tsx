import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { Clock } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface RelatedPostsSliderProps {
  posts: Post[];
}

export default function RelatedPostsSlider({ posts }: RelatedPostsSliderProps) {
  if (posts.length === 0) return null;

  return (
    <div className="relative group">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="pb-12"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <Link to={`/post/${post.slug}`} className="block group/card">
              <div className="aspect-video rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-blue-600 text-white text-[8px] font-black rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 group-hover/card:text-blue-600 transition-colors line-clamp-2 leading-tight mb-2">
                {post.title}
              </h4>
              <div className="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <Clock className="w-3 h-3 mr-1" />
                {post.readTime}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #2563eb !important;
          background: white;
          width: 35px !important;
          height: 35px !important;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          opacity: 0;
          transition: all 0.3s ease;
        }
        .group:hover .swiper-button-next, .group:hover .swiper-button-prev {
          opacity: 1;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 14px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
        }
      `}</style>
    </div>
  );
}
