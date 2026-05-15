'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ShieldCheck } from 'lucide-react';
import { privacyPolicyContent } from '@/lib/privacy-policy-content';
import { PrivacyPolicyView } from '@/components/PrivacyPolicyView';

interface PrivacyPolicyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PrivacyPolicyDialog: React.FC<PrivacyPolicyDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const { language } = useLanguage();
  const lang = language === 'en' ? 'en' : 'ru';
  const policy = privacyPolicyContent[lang];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            {policy.title}
          </DialogTitle>
          <DialogDescription>{policy.description}</DialogDescription>
        </DialogHeader>

        <PrivacyPolicyView policy={policy} showHeader={false} />
      </DialogContent>
    </Dialog>
  );
};
