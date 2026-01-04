import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/organisms';
import { Typography } from '@/components/atoms';
import { getAllPosts, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog về học tiếng Đức, luyện thi Goethe, du học Đức và văn hóa Đức. Chia sẻ kinh nghiệm học tập từ Muối Deutsch Center.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <Typography variant="h1" className="mb-4 font-bold">
              Blog tiếng Đức
            </Typography>
            <Typography variant="p" className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chia sẻ kiến thức, kinh nghiệm học tiếng Đức và văn hóa Đức
            </Typography>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <Typography variant="p" className="text-muted-foreground">
                  Chưa có bài viết nào. Vui lòng quay lại sau!
                </Typography>
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article 
                    key={post.slug}
                    className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="p-6">
                        {/* Category Badge */}
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                          {post.category}
                        </span>

                        {/* Title */}
                        <Typography variant="h2" className="mb-3 font-bold hover:text-primary transition-colors">
                          {post.title}
                        </Typography>

                        {/* Description */}
                        <Typography variant="p" className="text-muted-foreground mb-4">
                          {post.description}
                        </Typography>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <span>📅</span>
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>✍️</span>
                            <span>{post.author}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.map((tag) => (
                              <span 
                                key={tag}
                                className="px-2 py-1 bg-muted rounded text-xs"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <Typography variant="h2" className="mb-4 font-bold">
              Muốn học tiếng Đức hiệu quả?
            </Typography>
            <Typography variant="p" className="text-xl text-muted-foreground mb-8">
              Tham gia khóa học tại Muối Deutsch Center ngay hôm nay!
            </Typography>
            <Link 
              href="/khoa-hoc"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
            >
              Xem khóa học
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
