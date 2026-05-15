'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, Copy, Check } from 'lucide-react';

interface MarkdownPreviewProps {
  markdown: string;
  onClose: () => void;
}

export const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown, onClose }) => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-foreground/20 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-card rounded-2xl shadow-hover w-full max-w-2xl max-h-[min(90dvh,100%)] flex flex-col min-h-0">
        <div className="flex items-center justify-between gap-3 p-4 border-b border-border shrink-0">
          <h3 className="font-semibold text-base sm:text-lg min-w-0">{t('previewMarkdown')}</h3>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 shrink-0 rounded-lg bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
            aria-label={t('close')}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-auto p-4">
          <pre className="whitespace-pre-wrap break-words text-sm font-mono bg-secondary rounded-xl p-4 text-foreground">
            {markdown}
          </pre>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 p-4 border-t border-border shrink-0">
          <button type="button" onClick={onClose} className="btn-primary w-full sm:w-auto">
            {t('close')}
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? (language === 'ru' ? 'Скопировано' : 'Copied!') : (language === 'ru' ? 'Копировать' : 'Copy')}
          </button>
        </div>
      </div>
    </div>
  );
};
