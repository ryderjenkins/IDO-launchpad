'use client'
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { usePathname } from 'next/navigation';
import ToTopButton from "./components/ToTopButton";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const current = usePathname();
  // const getBackgroundImage = () => {
  //   switch (current) {
  //     case '/':
  //       return 'true';
  //     case '/launchpad':
  //       return 'false';
  //     default:
  //       return 'true';
  //   }
  // };
  const [pathhandle, setPathhandle] = useState(true);

  useEffect(() => {
    handlePath();
  }, [current]);

  const handlePath = () => {
    if (current === '/') {
      setPathhandle(true);
    } else if (current === '/launchpad') {
      setPathhandle(false);
    }
    else {
      setPathhandle(true);
    }
  };

  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(true);
  };

  return (
    <html lang="en">
      <body className={`${sidebar ? 'overflow-hidden' : ''}`}>
        <Header
          sidebarview={handleSidebar}
        />


        <div className="bg-[#030409] h-[100vh] w-[100vw] fixed left-0 top-0 z-[-10]">
          <div className={`mix-blend-screen bg-center opacity-35 absolute inset-0 bg-no-repeat bg-home ${pathhandle ? 'block' : 'hidden'}`} style={{ backgroundSize: '1440px 100%', backgroundPosition: 'center center' }}></div>
          <div className={`mix-blend-soft-light bg-[#2e9778] h-full w-full inset-32 ${pathhandle ? 'block' : 'hidden'}`}></div>
          <div className={`bg-launchpad bg-no-repeat h-full w-full ${pathhandle ? 'hidden' : 'block'}`} style={{ backgroundSize: '1440px 100%', backgroundPosition: 'center center' }}></div>
        </div>



        <div className="z-50">
          {children}
        </div>
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
