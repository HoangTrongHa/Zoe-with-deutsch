import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/organisms';
import { Typography } from '@/components/atoms';
import { getPostBySlug, getAllPostSlugs, formatDate } from '@/lib/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Bài viết không tồn tại',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Dynamically import MDX content
  let MDXContent;
  try {
    const mdxModule = await import(`@/content/blog/${slug}.mdx`);
    MDXContent = mdxModule.default;
  } catch (error) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <section className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground max-w-4xl mx-auto">
            <Link href="/" className="hover:text-foreground">Trang chủ</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground">Blog</Link>
            <span>/</span>
            <span className="text-foreground truncate">{post.title}</span>
          </div>
        </section>

        {/* Article Header */}
        <article className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>

            {/* Title */}
            <Typography variant="h1" className="mb-6 font-bold">
              {post.title}
            </Typography>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✍️</span>
                <span>{post.author}</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <MDXContent />
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <Typography variant="h3" className="mb-4 font-semibold">
                  Thẻ bài viết
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1.5 bg-muted rounded-lg text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link 
                href="/blog"
                className="inline-block px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                ← Quay lại Blog
              </Link>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <Typography variant="h2" className="mb-4 font-bold">
              Bắt đầu học tiếng Đức ngay hôm nay!
            </Typography>
            <Typography variant="p" className="text-xl text-muted-foreground mb-8">
              Tham gia khóa học tại Muối Deutsch Center
            </Typography>
            <Link 
              href="/lien-he"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
            >
              Đăng ký tư vấn miễn phí
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
