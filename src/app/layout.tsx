
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'حروف مع عبدو',
  description: 'لعبة الحروف العربية - خلية الحروف مع عبدو',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-arabic antialiased">{children}</body>
    </html>
  );
}
