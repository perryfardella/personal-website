import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { getBlogPosts } from '../../helpers';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const posts = getBlogPosts();
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const content = marked(post.content);

  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} className="prose" />
    </article>
  );
}