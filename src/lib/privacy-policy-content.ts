import { SITE_EMAIL, SITE_OWNER } from '@/lib/site-contact';

export type PrivacyPolicySection = {
  title: string;
  content: string;
};

export type PrivacyPolicyContent = {
  title: string;
  description: string;
  sections: PrivacyPolicySection[];
};

export const privacyPolicyContent: Record<'ru' | 'en', PrivacyPolicyContent> = {
  ru: {
    title: 'Политика конфиденциальности',
    description:
      'Порядок обработки персональных данных в соответствии с законодательством Российской Федерации',
    sections: [
      {
        title: 'Оператор персональных данных',
        content: `Оператором персональных данных является ${SITE_OWNER.ru}. По вопросам обработки персональных данных: ${SITE_EMAIL}.`,
      },
      {
        title: 'Обработка данных консультантом',
        content:
          'Данные анкеты обрабатываются консультантом только для анализа состояния здоровья и подготовки рекомендаций. Консультант получает доступ к сведениям, которые вы добровольно указали в форме: ответы на вопросы, прикреплённые файлы и контакт для связи.',
      },
      {
        title: 'Связь с вами',
        content:
          'Консультант свяжется с вами после проверки указанного способа связи (Telegram, Instagram или телефон). Сообщение направляется по каналу, который вы указали в анкете.',
      },
      {
        title: 'Правовые основания',
        content:
          'Обработка персональных данных осуществляется на основании вашего согласия (ст. 9 Федерального закона № 152-ФЗ «О персональных данных»). Согласие можно отозвать, направив запрос на электронную почту оператора.',
      },
      {
        title: 'Какие данные обрабатываются',
        content:
          'В анкете могут указываться: имя, возраст, вес, сведения о здоровье, симптомы, жалобы, аллергии, история болезней и контакт для связи. Предоставление данных добровольное и необходимо для консультации.',
      },
      {
        title: 'Передача данных',
        content:
          'Анкета передаётся через Telegram API в защищённый чат для обработки консультантом. Данные не продаются и не передаются третьим лицам в маркетинговых целях.',
      },
      {
        title: 'Срок хранения',
        content:
          'Данные хранятся до завершения консультации или до отзыва согласия. После этого по вашему запросу данные удаляются в разумный срок.',
      },
      {
        title: 'Ваши права',
        content: `Вы вправе получить сведения об обработке, потребовать уточнения, блокирования или уничтожения персональных данных, отозвать согласие. Для этого напишите на ${SITE_EMAIL} с темой «Персональные данные». Ответ — в сроки, установленные законом РФ.`,
      },
      {
        title: 'Контакты',
        content: `Обращения по персональным данным: ${SITE_EMAIL}.`,
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    description:
      'Personal data processing under the laws of the Russian Federation',
    sections: [
      {
        title: 'Data Operator',
        content: `The data operator is ${SITE_OWNER.en}. For personal data inquiries: ${SITE_EMAIL}.`,
      },
      {
        title: 'Processing by the Consultant',
        content:
          'Questionnaire data is processed only to analyze health information and prepare recommendations. The consultant accesses only what you voluntarily provide: answers, attachments, and contact details.',
      },
      {
        title: 'Contacting You',
        content:
          'The consultant will contact you after verifying the contact method you provided (Telegram, Instagram, or phone), using the channel specified in the questionnaire.',
      },
      {
        title: 'Legal Basis',
        content:
          'Processing is based on your consent (Federal Law No. 152-FZ on Personal Data). You may withdraw consent by emailing the operator.',
      },
      {
        title: 'Data We Process',
        content:
          'The questionnaire may include name, age, weight, health information, symptoms, allergies, medical history, and contact details. Providing data is voluntary and required for the consultation.',
      },
      {
        title: 'Data Transfer',
        content:
          'The questionnaire is sent via the Telegram API to a secure chat for the consultant. Data is not sold or shared with third parties for marketing.',
      },
      {
        title: 'Retention',
        content:
          'Data is retained until the consultation ends or you withdraw consent. Upon request, data is deleted within a reasonable time.',
      },
      {
        title: 'Your Rights',
        content: `You may request information about processing, correction, blocking, or deletion of data, and withdraw consent. Email ${SITE_EMAIL} with the subject "Personal data". We respond within timeframes required by Russian law.`,
      },
      {
        title: 'Contact',
        content: `Personal data requests: ${SITE_EMAIL}.`,
      },
    ],
  },
};
