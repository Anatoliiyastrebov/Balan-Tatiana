'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { type PrivacyPolicyContent } from '@/lib/privacy-policy-content';

interface PrivacyPolicyViewProps {
  policy: PrivacyPolicyContent;
  showHeader?: boolean;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({
  policy,
  showHeader = true,
}) => {
  return (
    <div className="space-y-6">
      {showHeader && (
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
            {policy.title}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">{policy.description}</p>
        </div>
      )}

      <div className="space-y-6">
        {policy.sections.map((section, index) => (
          <section key={index} className="space-y-2">
            <h2 className="font-semibold text-foreground text-base">{section.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed break-anywhere">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};
