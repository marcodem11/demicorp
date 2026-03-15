import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Demicorp — Innovation Beyond Limits',
  description:
    'Demicorp — Pionieri nell\'automazione AI, nello sviluppo di videogiochi 3D e nella creazione di software che ridefinisce il possibile.',
  keywords: [
    'Demicorp',
    'AI Automation',
    'Game Development',
    'Software Development',
    '3D',
    'Machine Learning',
    'Web Development',
  ],
  authors: [{ name: 'Demicorp' }],
  openGraph: {
    title: 'Demicorp — Innovation Beyond Limits',
    description:
      'Pionieri nell\'automazione AI, nello sviluppo di videogiochi 3D e nella creazione di software che ridefinisce il possibile.',
    type: 'website',
    locale: 'it_IT',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-demicorp-black`}
      >
        {children}
      </body>
    </html>
  );
}
