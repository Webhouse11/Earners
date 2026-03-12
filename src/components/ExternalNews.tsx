import { useState, useEffect } from 'react';
import { ExternalLink, Rss, Clock } from 'lucide-react';

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  source: string;
}

export default function ExternalNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setNews(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="space-y-4 animate-pulse">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-20 bg-gray-100 rounded-xl"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Rss className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-bold text-gray-900">Global Income News</h3>
      </div>
      <div className="space-y-4">
        {news.map((item, idx) => (
          <a 
            key={idx} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all group"
          >
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 block">
              {item.source}
            </span>
            <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-2">
              {item.title}
            </h4>
            <div className="flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {new Date(item.pubDate).toLocaleDateString()}</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
