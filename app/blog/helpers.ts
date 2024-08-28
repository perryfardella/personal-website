import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './types';

export function getBlogPosts() {
    const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
    const fileNames = fs.readdirSync(postsDirectory);
  
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
  
        return {
          slug: fileName.replace(/\.md$/, ''),
          title: data.title,
          date: data.date,
          content: content
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }