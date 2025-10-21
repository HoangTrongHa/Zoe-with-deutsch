import { getTranslations } from 'next-intl/server';
import { Typography } from '@/components/atoms';
import { Header } from '@/components/organisms';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <Typography variant="h1" className="mb-6 text-4xl md:text-6xl font-marker font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {t('common.hello_world')} 👋
            </Typography>
            
            <Typography variant="p" className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-marker">
              Welcome to our Othello-inspired multilingual application. Experience the elegant contrast of light and dark themes.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-marker">
                Get Started
              </button>
              <button className="px-8 py-3 border border-border hover:bg-accent transition-colors duration-200 rounded-lg font-marker">
                Learn More
              </button>
            </div>
          </div>
        </section>
        
        {/* Content Cards */}
        <section className="grid md:grid-cols-3 gap-8 py-16">
          <div className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <Typography variant="h3" className="mb-2 font-marker">Fast Performance</Typography>
            <Typography variant="p" className="text-muted-foreground font-marker">
              Built with Next.js for optimal performance and user experience.
            </Typography>
          </div>
          
          <div className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <Typography variant="h3" className="mb-2 font-marker">Multilingual</Typography>
            <Typography variant="p" className="text-muted-foreground font-marker">
              Support for multiple languages with seamless switching.
            </Typography>
          </div>
          
          <div className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <Typography variant="h3" className="mb-2 font-marker">Dark Mode</Typography>
            <Typography variant="p" className="text-muted-foreground font-marker">
              Beautiful dark and light themes inspired by Othello.
            </Typography>
          </div>
        </section>

        {/* Language Demo Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4 font-marker">
              Language Support
            </Typography>
            <Typography variant="p" className="text-muted-foreground font-marker">
              Experience our content in multiple languages
            </Typography>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3 text-center">🇻🇳</div>
              <Typography variant="h3" className="mb-2 text-center text-primary font-marker">
                Tiếng Việt
              </Typography>
              <Typography variant="p" className="text-center text-muted-foreground font-marker">
                Xin chào thế giới
              </Typography>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3 text-center">��</div>
              <Typography variant="h3" className="mb-2 text-center text-primary font-marker">
                Deutsch
              </Typography>
              <Typography variant="p" className="text-center text-muted-foreground font-marker">
                Hallo Welt
              </Typography>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3 text-center">�🇧</div>
              <Typography variant="h3" className="mb-2 text-center text-primary font-marker">
                English
              </Typography>
              <Typography variant="p" className="text-center text-muted-foreground font-marker">
                Hello World
              </Typography>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}