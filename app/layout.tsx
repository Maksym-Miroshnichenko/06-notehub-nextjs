import type { Metadata } from "next";
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import './globals.css';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'Simple and efficient application for managing personal notes',
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
        <Header />
        {children}
        <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
