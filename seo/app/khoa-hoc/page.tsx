import { Metadata } from 'next';
import { Header } from '@/components/organisms';
import { Typography } from '@/components/atoms';
import { CourseCard } from '@/components/molecules';
import { COURSES } from '@/lib/constants/courses';

export const metadata: Metadata = {
  title: 'Khóa học tiếng Đức',
  description: 'Khóa học tiếng Đức từ A1 đến C2 tại Muối Deutsch Center. Giáo viên bản ngữ, cam kết đầu ra, học lại miễn phí.',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <Typography variant="h1" className="mb-4 font-bold">
              Khóa học tiếng Đức
            </Typography>
            <Typography variant="p" className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chọn khóa học phù hợp với trình độ của bạn. Từ A1 đến C2, 
              chúng tôi cam kết đồng hành cùng bạn đến thành công.
            </Typography>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <CourseCard key={course.level} course={course} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <Typography variant="h2" className="mb-4 font-bold">
              Không chắc nên bắt đầu từ cấp độ nào?
            </Typography>
            <Typography variant="p" className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Liên hệ với chúng tôi để được tư vấn và kiểm tra trình độ miễn phí
            </Typography>
            <a 
              href="/lien-he"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
            >
              Liên hệ tư vấn miễn phí
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
