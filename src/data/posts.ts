import { Post } from "./types";

export const CATEGORIES = [
  "Make Money Online",
  "AI Tools for Income",
  "Freelancing",
  "Affiliate Marketing",
  "Blogging & SEO",
  "Online Business Ideas",
  "Passive Income"
] as const;

export const POSTS: Post[] = [
  {
    id: "1",
    slug: "best-ai-tools-for-passive-income-2024",
    title: "10 Best AI Tools for Generating Passive Income in 2024",
    excerpt: "Discover how artificial intelligence is revolutionizing the way we create wealth with these powerful automated tools.",
    content: `
# 10 Best AI Tools for Generating Passive Income in 2024

Artificial Intelligence is no longer just a buzzword; it's a powerful engine for wealth creation. In this guide, we'll explore the top tools that can help you build sustainable passive income streams.

## 1. Midjourney for Digital Art
Create stunning visuals and sell them as stock photos or print-on-demand products.

## 2. ChatGPT for Content Automation
Leverage large language models to build niche blogs that rank on Google.

## 3. Jasper for Marketing Copy
Scale your affiliate marketing efforts with high-converting copy generated in seconds.

... (more content)
    `,
    category: "AI Tools for Income",
    author: {
      name: "Alex Rivera",
      avatar: "https://picsum.photos/seed/alex/100/100",
      role: "AI Strategy Expert"
    },
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/ai-income/1200/630",
    featured: true,
    trending: true
  },
  {
    id: "2",
    slug: "affiliate-marketing-for-beginners-guide",
    title: "The Ultimate Guide to Affiliate Marketing for Beginners",
    excerpt: "Everything you need to know to start your first affiliate marketing business from scratch and earn your first commission.",
    content: "Full guide content here...",
    category: "Affiliate Marketing",
    author: {
      name: "Sarah Chen",
      avatar: "https://picsum.photos/seed/sarah/100/100",
      role: "Digital Marketer"
    },
    date: "March 8, 2024",
    readTime: "12 min read",
    image: "https://picsum.photos/seed/affiliate/1200/630",
    featured: true
  },
  {
    id: "3",
    slug: "freelancing-on-upwork-tips",
    title: "How to Land Your First $1,000 Project on Upwork",
    excerpt: "Stop competing on price and start winning high-ticket clients with these proven freelancing strategies.",
    content: "Freelancing tips content...",
    category: "Freelancing",
    author: {
      name: "Michael Scott",
      avatar: "https://picsum.photos/seed/michael/100/100",
      role: "Freelance Consultant"
    },
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/freelance/1200/630",
    trending: true
  },
  {
    id: "4",
    slug: "blogging-seo-strategy-2024",
    title: "Blogging SEO: How to Rank #1 on Google in 2024",
    excerpt: "The SEO landscape is changing. Learn the new rules of search engine optimization for bloggers.",
    content: "SEO strategy content...",
    category: "Blogging & SEO",
    author: {
      name: "Emma Wilson",
      avatar: "https://picsum.photos/seed/emma/100/100",
      role: "SEO Specialist"
    },
    date: "March 1, 2024",
    readTime: "10 min read",
    image: "https://picsum.photos/seed/seo/1200/630"
  },
  {
    id: "5",
    slug: "online-business-ideas-low-investment",
    title: "5 Online Business Ideas with Zero Upfront Investment",
    excerpt: "You don't need a fortune to start a business. Here are 5 models you can launch today for free.",
    content: "Business ideas content...",
    category: "Online Business Ideas",
    author: {
      name: "David Miller",
      avatar: "https://picsum.photos/seed/david/100/100",
      role: "Entrepreneur"
    },
    date: "Feb 28, 2024",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/business/1200/630"
  },
  {
    id: "6",
    slug: "passive-income-real-estate-vs-digital",
    title: "Passive Income: Real Estate vs. Digital Assets",
    excerpt: "Which one is better for long-term wealth? We compare the pros and cons of both investment types.",
    content: "Comparison content...",
    category: "Passive Income",
    author: {
      name: "Jessica Taylor",
      avatar: "https://picsum.photos/seed/jessica/100/100",
      role: "Financial Advisor"
    },
    date: "Feb 25, 2024",
    readTime: "9 min read",
    image: "https://picsum.photos/seed/wealth/1200/630"
  }
];
