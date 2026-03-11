export type Category = 
  | "Make Money Online" 
  | "AI Tools for Income" 
  | "Freelancing" 
  | "Affiliate Marketing" 
  | "Blogging & SEO" 
  | "Online Business Ideas" 
  | "Passive Income";

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  trending?: boolean;
}
