'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyView } from '@/components/PrivacyPolicyView';
import { useLanguage } from '@/contexts/LanguageContext';
import { privacyPolicyContent } from '@/lib/privacy-policy-content';

const pageLabels = {
  ru: { backToHome: 'Вернуться на главную' },
  en: { backToHome: 'Back to home' },
};

export default function PrivacyPage() {
  const { language } = useLanguage();
  const lang = language === 'en' ? 'en' : 'ru';
  const labels = pageLabels[lang];
  const policy = privacyPolicyContent[lang];

  return (
    <div className="min-h-screen min-h-[100dvh] flex flex-col bg-background overflow-x-hidden">
      <Header />

      <main className="container mx-auto px-4 py-6 sm:py-8 max-w-3xl w-full min-w-0 flex-1">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Home className="w-4 h-4" />
            {labels.backToHome}
          </Link>
        </div>

        <div className="card-wellness">
          <PrivacyPolicyView policy={policy} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
