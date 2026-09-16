import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'K-Runway & Predictive Auto-Saving | K PLUS Innovation Concept',
  description: 'นวัตกรรมพยากรณ์กระแสเงินสดล่วงหน้าและระบบออมเงินกึ่งอัตโนมัติสำหรับ K PLUS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen selection:bg-[#00A950] selection:text-white font-['Prompt',sans-serif]">
        {children}
      </body>
    </html>
  );
}
