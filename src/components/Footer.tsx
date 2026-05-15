'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  return (
    <footer className="border-t border-border bg-card/50 mt-auto shrink-0">
      <div className="container mx-auto px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="shrink-0">
            © {new Date().getFullYear()} {isRu ? 'Анкета по здоровью' : 'Health Questionnaire'}
          </p>
          <Link
            href="/privacy"
            className="hover:text-foreground transition-colors whitespace-nowrap"
          >
            {isRu ? 'Политика конфиденциальности' : 'Privacy Policy'}
          </Link>
        </div>
      </div>
    </footer>
  );
};
