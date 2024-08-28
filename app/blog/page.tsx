import Link from 'next/link';
import { getBlogPosts } from './helpers';

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug} className="border-b pb-4">
            <Link href={`/blog/posts/${post.slug}`} className="text-xl font-semibold hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}