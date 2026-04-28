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
  title: 'Marco De Michele — Full Stack Developer',
  description:
    'Portfolio di Marco De Michele — Full Stack Developer con oltre 5 anni di esperienza in applicazioni web e mobile, AI automation e prodotti digitali moderni.',
  keywords: [
    'Marco De Michele',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Laravel',
    'Flutter',
    'AI Automation',
    'Portfolio',
  ],
  authors: [{ name: 'Marco De Michele' }],
  openGraph: {
    title: 'Marco De Michele — Full Stack Developer',
    description:
      'Full Stack Developer specializzato in soluzioni AI, automazione e prodotti digitali scalabili.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.demicorp.it/',
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-ink`}
      >
        {children}
      </body>
    </html>
  );
}
