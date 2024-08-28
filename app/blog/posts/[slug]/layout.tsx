export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <nav className="mb-6">
          <a href="/blog" className="text-blue-500 hover:underline">← Back to Blog</a>
        </nav>
        {children}
      </div>
    );
  }