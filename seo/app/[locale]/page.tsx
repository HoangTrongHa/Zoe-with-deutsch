import { getTranslations } from 'next-intl/server';
import { Typography } from '@/components/atoms';
import { ThemeToggle, LanguageSwitcher } from '@/components/molecules';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <Typography variant="h2" weight="bold">
            SEO App
          </Typography>
          
          {/* Current Hello World Display */}
          <div className="hidden md:block bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 px-4 py-2 rounded-full">
            <Typography variant="span" weight="medium" className="text-green-700 dark:text-green-300">
              {t('common.hello_world')} 👋
            </Typography>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher currentLocale={locale as any} />
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        {/* Hello World Section */}
        <div className="mb-12">
          <Typography 
            variant="h1" 
            weight="bold" 
            className="mb-4 text-6xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
          >
            {t('common.hello_world')}
          </Typography>
          
          <Typography 
            variant="p" 
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            {t('common.welcome_message')}
          </Typography>

          {/* Language Demo */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-green-200 dark:border-green-700">
              <div className="text-2xl mb-2">🇻🇳</div>
              <Typography variant="h3" weight="semibold" className="mb-2 text-green-600 dark:text-green-400">
                Tiếng Việt
              </Typography>
              <Typography variant="p" className="text-gray-600 dark:text-gray-300">
                Xin chào thế giới
              </Typography>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="text-2xl mb-2">🇩🇪</div>
              <Typography variant="h3" weight="semibold" className="mb-2 text-blue-600 dark:text-blue-400">
                Deutsch
              </Typography>
              <Typography variant="p" className="text-gray-600 dark:text-gray-300">
                Hallo Welt
              </Typography>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="text-2xl mb-2">🇬🇧</div>
              <Typography variant="h3" weight="semibold" className="mb-2 text-purple-600 dark:text-purple-400">
                English
              </Typography>
              <Typography variant="p" className="text-gray-600 dark:text-gray-300">
                Hello World
              </Typography>
            </div>
          </div>
        </div>

        <Typography 
          variant="h1" 
          weight="bold" 
          className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          {t('pages.home.hero.title')}
        </Typography>
        
        <Typography 
          variant="p" 
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
        >
          {t('pages.home.hero.subtitle')}
        </Typography>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
            {t('pages.home.hero.cta')}
          </button>
          
          <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors duration-200">
            {t('common.actions.loading')}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <Typography variant="h2" weight="semibold" align="center" className="mb-12">
          Tính năng chính
        </Typography>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              🌙
            </div>
            <Typography variant="h4" weight="semibold" className="mb-2">
              {t('common.theme.dark')} Mode
            </Typography>
            <Typography variant="p" className="text-gray-600 dark:text-gray-300">
              Giao diện dark mode hiện đại với chuyển đổi mượt mà
            </Typography>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              🌍
            </div>
            <Typography variant="h4" weight="semibold" className="mb-2">
              Đa ngôn ngữ
            </Typography>
            <Typography variant="p" className="text-gray-600 dark:text-gray-300">
              Hỗ trợ 3 ngôn ngữ: Việt Nam, Đức, Anh
            </Typography>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              ⚛️
            </div>
            <Typography variant="h4" weight="semibold" className="mb-2">
              Atomic Design
            </Typography>
            <Typography variant="p" className="text-gray-600 dark:text-gray-300">
              Kiến trúc component theo mô hình atomic design
            </Typography>
          </div>
        </div>
      </section>
    </main>
  );
}