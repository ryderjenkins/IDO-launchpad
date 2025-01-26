'use client'
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const current = usePathname();
  const getBackgroundImage = () => {
    switch (current) {
      case '/':
        return 'bg-home';
      case '/launchpad':
        return 'bg-launchpad';
      default:
        return 'bg-default';
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${getBackgroundImage()}`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          style={{ display: isVisible ? 'block' : 'none' }}
          title="Scroll to Top"
        >
          ↑
        </button>
      </body>
    </html>
  );
}
