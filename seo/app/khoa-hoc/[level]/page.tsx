import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/organisms';
import { Typography, Button } from '@/components/atoms';
import { getCourseByLevel, formatPrice } from '@/lib/constants/courses';

interface CourseDetailPageProps {
  params: Promise<{ level: string }>;
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { level } = await params;
  const course = getCourseByLevel(level.toUpperCase());
  
  if (!course) {
    return {
      title: 'Khóa học không tồn tại',
    };
  }

  return {
    title: `${course.title} - ${course.level}`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { level } = await params;
  const course = getCourseByLevel(level.toUpperCase());

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <section className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Trang chủ</Link>
            <span>/</span>
            <Link href="/khoa-hoc" className="hover:text-foreground">Khóa học</Link>
            <span>/</span>
            <span className="text-foreground">{course.level}</span>
          </div>
        </section>

        {/* Course Header */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
                {course.level}
              </span>
              <Typography variant="h1" className="mb-4 font-bold">
                {course.title}
              </Typography>
              <Typography variant="p" className="text-xl text-muted-foreground mb-6">
                {course.description}
              </Typography>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg">
                  <span className="text-lg">⏱️</span>
                  <Typography variant="span">
                    <strong>Thời gian:</strong> {course.duration}
                  </Typography>
                </div>
                <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg">
                  <span className="text-lg">📚</span>
                  <Typography variant="span">
                    <strong>Số buổi:</strong> {course.sessions}
                  </Typography>
                </div>
                <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg">
                  <span className="text-lg">💰</span>
                  <Typography variant="span" className="text-primary font-bold">
                    {formatPrice(course.price)}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <Typography variant="h2" className="mb-6 font-bold">
                  Đặc điểm khóa học
                </Typography>
                <div className="space-y-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                      <span className="text-primary text-xl mt-0.5">✓</span>
                      <Typography variant="p">
                        {feature}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You'll Learn */}
              <div>
                <Typography variant="h2" className="mb-6 font-bold">
                  Bạn sẽ học được gì?
                </Typography>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <Typography variant="h3" className="mb-2 font-semibold">
                      🗣️ Giao tiếp tự tin
                    </Typography>
                    <Typography variant="p" className="text-muted-foreground text-sm">
                      Phát triển kỹ năng nói, nghe, đọc, viết một cách toàn diện
                    </Typography>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <Typography variant="h3" className="mb-2 font-semibold">
                      📖 Ngữ pháp vững chắc
                    </Typography>
                    <Typography variant="p" className="text-muted-foreground text-sm">
                      Hiểu và vận dụng các quy tắc ngữ pháp tiếng Đức
                    </Typography>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <Typography variant="h3" className="mb-2 font-semibold">
                      🎯 Luyện thi Goethe
                    </Typography>
                    <Typography variant="p" className="text-muted-foreground text-sm">
                      Chuẩn bị kỹ lưỡng cho kỳ thi chứng chỉ quốc tế
                    </Typography>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <Typography variant="h3" className="mb-2 font-semibold">
                      🌍 Văn hóa Đức
                    </Typography>
                    <Typography variant="p" className="text-muted-foreground text-sm">
                      Tìm hiểu văn hóa, phong tục tập quán của người Đức
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-primary/10 rounded-xl text-center">
              <Typography variant="h2" className="mb-4 font-bold">
                Sẵn sàng bắt đầu?
              </Typography>
              <Typography variant="p" className="text-xl text-muted-foreground mb-6">
                Đăng ký ngay để nhận ưu đãi đặc biệt!
              </Typography>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/lien-he">
                  <Button size="lg" className="px-8">
                    Đăng ký học
                  </Button>
                </Link>
                <Link href="/khoa-hoc">
                  <Button size="lg" variant="outline" className="px-8">
                    Xem khóa khác
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
