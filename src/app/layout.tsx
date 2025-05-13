// src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';


export const metadata: Metadata = {
  title: 'Intere – Interiérový dizajnér',
  description: 'Tvorím krásne a funkčné interiéry.',
icons: {
    icon: '/logo intere.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
