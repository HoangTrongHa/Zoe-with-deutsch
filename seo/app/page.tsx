import { Metadata } from 'next';
import { Header } from '@/components/organisms';
import { Typography, Button } from '@/components/atoms';

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Muối Deutsch Center - Trung tâm tiếng Đức uy tín tại Hà Nội. Học tiếng Đức dễ như muối bỏ bể!',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <Typography variant="h1" className="mb-6 font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Muối Deutsch Center 🧂
          </Typography>
          
          <Typography variant="h2" className="mb-8 text-2xl md:text-3xl text-muted-foreground">
            Học tiếng Đức - Dễ như muối bỏ bể
          </Typography>
          
          <Typography variant="p" className="text-xl mb-12 max-w-3xl mx-auto">
            Trung tâm tiếng Đức uy tín tại Hà Nội với phương pháp giảng dạy hiện đại, 
            giáo viên bản ngữ, cam kết đầu ra chứng chỉ quốc tế Goethe.
          </Typography>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              Đăng ký học thử miễn phí
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              Xem khóa học
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <Typography variant="h2" className="text-center mb-12 font-bold">
              Tại sao chọn Muối Deutsch?
            </Typography>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">👨‍🏫</div>
                <Typography variant="h3" className="mb-3 font-semibold">
                  Giáo viên bản ngữ
                </Typography>
                <Typography variant="p" className="text-muted-foreground">
                  100% giáo viên người Đức, kinh nghiệm 5+ năm
                </Typography>
              </div>
              
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🎓</div>
                <Typography variant="h3" className="mb-3 font-semibold">
                  Cam kết đầu ra
                </Typography>
                <Typography variant="p" className="text-muted-foreground">
                  Đảm bảo đạt chứng chỉ Goethe hoặc học lại miễn phí
                </Typography>
              </div>
              
              <div className="text-center p-6">
                <div className="text-5xl mb-4">💻</div>
                <Typography variant="h3" className="mb-3 font-semibold">
                  Phương pháp hiện đại
                </Typography>
                <Typography variant="p" className="text-muted-foreground">
                  Kết hợp offline & online, ứng dụng AI trong học tập
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <Typography variant="h2" className="mb-6 font-bold">
            Bắt đầu hành trình tiếng Đức của bạn ngay hôm nay!
          </Typography>
          <Typography variant="p" className="text-xl mb-8 text-muted-foreground">
            Nhận tư vấn miễn phí và ưu đãi 20% cho khóa đầu tiên
          </Typography>
          <Button size="lg" className="px-12 py-4 text-lg">
            Liên hệ ngay: 0123 456 789
          </Button>
        </section>
      </main>
    </div>
  );
}