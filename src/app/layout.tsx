'use client'
import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { usePathname } from 'next/navigation';
import ToTopButton from "./components/ToTopButton";
import SideBar from "./components/SideBar";
import { useState } from "react";


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

  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(true);
  };

  return (
    <html lang="en">
      <body className={`${getBackgroundImage()} ${sidebar ? 'overflow-hidden' : ''}`}>

        <Header
          sidebarview={handleSidebar}
        />
        {children}
        <Footer />
        <ToTopButton />
        <SideBar
          viewstate={sidebar}
          sidebarclose={() => setSidebar(false)}
        />
      </body>
    </html>
  );
}
