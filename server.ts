import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Parser from "rss-parser";

const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'application/rss+xml, application/xml, text/xml, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://www.google.com/',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache'
  }
});
const RSS_FEEDS = [
  "https://www.entrepreneur.com/latest.rss",
  "https://techcrunch.com/feed/",
  "https://thepennyhoarder.com/feed/",
  "https://www.smartpassiveincome.com/feed/",
  "https://www.sidehustlenation.com/feed/"
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route to fetch RSS feeds
  app.get("/api/news", async (req, res) => {
    try {
      const feedPromises = RSS_FEEDS.map(async (url) => {
        try {
          return await parser.parseURL(url);
        } catch (err) {
          console.error(`Failed to fetch RSS from ${url}:`, err.message);
          return null;
        }
      });
      
      const feeds = (await Promise.all(feedPromises)).filter(f => f !== null);
      
      // Flatten and sort by date
      const allItems = feeds.flatMap(feed => 
        feed.items.map(item => ({
          ...item,
          source: feed.title,
          sourceUrl: feed.link
        }))
      ).sort((a, b) => {
        const dateA = new Date(a.pubDate || 0).getTime();
        const dateB = new Date(b.pubDate || 0).getTime();
        return dateB - dateA;
      }).slice(0, 20); // Limit to top 20 latest

      res.json(allItems);
    } catch (error) {
      console.error("Error fetching RSS feeds:", error);
      res.status(500).json({ error: "Failed to fetch news" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
