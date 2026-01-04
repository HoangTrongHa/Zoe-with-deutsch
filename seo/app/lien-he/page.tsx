import { Metadata } from 'next';
import { Header } from '@/components/organisms';
import { Typography } from '@/components/atoms';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Liên hệ với Muối Deutsch Center để được tư vấn khóa học tiếng Đức miễn phí.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <Typography variant="h1" className="mb-4 font-bold">
              Liên hệ với chúng tôi
            </Typography>
            <Typography variant="p" className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi luôn sẵn sàng tư vấn và giải đáp mọi thắc mắc của bạn
            </Typography>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <Typography variant="h2" className="mb-6 font-bold">
                  Thông tin liên hệ
                </Typography>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                    <span className="text-2xl">📞</span>
                    <div>
                      <Typography variant="h3" className="mb-1 font-semibold text-sm">
                        Hotline
                      </Typography>
                      <Typography variant="p" className="text-primary font-semibold">
                        {CONTACT_INFO.hotline}
                      </Typography>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <Typography variant="h3" className="mb-1 font-semibold text-sm">
                        Email
                      </Typography>
                      <Typography variant="p" className="text-primary font-semibold">
                        {CONTACT_INFO.email}
                      </Typography>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                    <span className="text-2xl">📍</span>
                    <div>
                      <Typography variant="h3" className="mb-1 font-semibold text-sm">
                        Địa chỉ
                      </Typography>
                      <Typography variant="p">
                        {CONTACT_INFO.address}
                      </Typography>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                    <span className="text-2xl">💬</span>
                    <div>
                      <Typography variant="h3" className="mb-1 font-semibold text-sm">
                        Zalo
                      </Typography>
                      <Typography variant="p" className="text-primary font-semibold">
                        {CONTACT_INFO.zalo}
                      </Typography>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <Typography variant="h3" className="mb-4 font-semibold">
                    Theo dõi chúng tôi
                  </Typography>
                  <div className="flex gap-4">
                    <a 
                      href={`https://facebook.com${CONTACT_INFO.facebook}`}
                      className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border hover:bg-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-xl">📘</span>
                      <Typography variant="span" className="text-sm">Facebook</Typography>
                    </a>
                    <a 
                      href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                      className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border hover:bg-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-xl">📷</span>
                      <Typography variant="span" className="text-sm">Instagram</Typography>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Typography variant="h2" className="mb-6 font-bold">
                  Gửi tin nhắn cho chúng tôi
                </Typography>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium mb-2">
                      Khóa học quan tâm
                    </label>
                    <select
                      id="course"
                      name="course"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">-- Chọn khóa học --</option>
                      <option value="A1">A1 - Cơ bản</option>
                      <option value="A2">A2 - Sơ cấp</option>
                      <option value="B1">B1 - Trung cấp</option>
                      <option value="B2">B2 - Trung cấp cao</option>
                      <option value="C1">C1 - Cao cấp</option>
                      <option value="C2">C2 - Bậc thầy</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Nội dung *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
                  >
                    Gửi tin nhắn
                  </button>
                </form>

                <Typography variant="p" className="text-sm text-muted-foreground mt-4">
                  * Thông tin của bạn sẽ được bảo mật tuyệt đối
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Typography variant="h2" className="mb-6 font-bold text-center">
                Vị trí của chúng tôi
              </Typography>
              <div className="aspect-video bg-card rounded-xl border border-border flex items-center justify-center">
                <Typography variant="p" className="text-muted-foreground">
                  🗺️ Bản đồ sẽ được cập nhật sau
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
