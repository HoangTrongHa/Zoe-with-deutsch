import { Metadata } from 'next';
import { Header } from '@/components/organisms';
import { Typography } from '@/components/atoms';

export const metadata: Metadata = {
  title: 'Về chúng tôi',
  description: 'Muối Deutsch Center - Trung tâm tiếng Đức uy tín tại Hà Nội với đội ngũ giáo viên bản ngữ chuyên nghiệp.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <Typography variant="h1" className="mb-4 font-bold">
              Về Muối Deutsch Center
            </Typography>
            <Typography variant="p" className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hành trình lan tỏa niềm đam mê tiếng Đức
            </Typography>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Typography variant="h2" className="mb-6 font-bold text-center">
              Câu chuyện của chúng tôi
            </Typography>
            <div className="space-y-4 text-lg leading-relaxed">
              <Typography variant="p">
                <strong>Muối Deutsch Center</strong> được thành lập với niềm tin rằng học tiếng Đức 
                có thể trở nên dễ dàng và thú vị như "muối bỏ bể" - một thành ngữ quen thuộc 
                của người Việt Nam về sự đơn giản và tự nhiên.
              </Typography>
              <Typography variant="p">
                Chúng tôi tự hào là một trong những trung tâm tiếng Đức uy tín tại Hà Nội, 
                với đội ngũ giáo viên bản ngữ đến từ Đức, có trình độ chuyên môn cao và 
                kinh nghiệm giảng dạy phong phú.
              </Typography>
              <Typography variant="p">
                Phương pháp giảng dạy của chúng tôi kết hợp giữa giáo trình chuẩn quốc tế 
                với văn hóa Việt Nam, giúp học viên không chỉ nắm vững kiến thức mà còn 
                hiểu sâu về văn hóa và con người Đức.
              </Typography>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <Typography variant="h2" className="mb-12 font-bold text-center">
              Giá trị cốt lõi
            </Typography>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🎯</div>
                <Typography variant="h3" className="mb-3 font-semibold">
                  Cam kết chất lượng
                </Typography>
                <Typography variant="p" className="text-muted-foreground">
                  Đảm bảo đầu ra, học lại miễn phí nếu không đạt kết quả
                </Typography>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">❤️</div>
                <Typography variant="h3" className="mb-3 font-semibold">
                  Tận tâm
                </Typography>
                <Typography variant="p" className="text-muted-foreground">
                  Đồng hành cùng học viên từ những bước đầu tiên
                </Typography>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">💡</div>
                <Typography variant="h3" className="mb-3 font-semibold">
                  Đổi mới
                </Typography>
                <Typography variant="p" className="text-muted-foreground">
                  Ứng dụng công nghệ và phương pháp giảng dạy hiện đại
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Typography variant="h2" className="mb-12 font-bold text-center">
              Đội ngũ giảng viên
            </Typography>
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <Typography variant="h3" className="mb-2 font-semibold">
                  👨‍🏫 Giáo viên bản ngữ
                </Typography>
                <Typography variant="p" className="text-muted-foreground">
                  100% giáo viên đến từ Đức, có bằng cấp sư phạm và chứng chỉ giảng dạy tiếng Đức như ngoại ngữ (DaF)
                </Typography>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <Typography variant="h3" className="mb-2 font-semibold">
                  📚 Trợ giảng Việt Nam
                </Typography>
                <Typography variant="p" className="text-muted-foreground">
                  Đội ngũ trợ giảng người Việt am hiểu tâm lý học viên, hỗ trợ giải đáp thắc mắc
                </Typography>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <Typography variant="h3" className="mb-2 font-semibold">
                  🎓 Tư vấn viên du học
                </Typography>
                <Typography variant="p" className="text-muted-foreground">
                  Chuyên gia tư vấn du học Đức, hỗ trợ hồ sơ và định hướng nghề nghiệp
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <Typography variant="h2" className="mb-4 font-bold">
              Hãy cùng chúng tôi bắt đầu hành trình tiếng Đức!
            </Typography>
            <Typography variant="p" className="text-xl text-muted-foreground mb-8">
              Liên hệ ngay để được tư vấn miễn phí
            </Typography>
            <a 
              href="/lien-he"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
            >
              Liên hệ ngay
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
