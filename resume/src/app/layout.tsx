import type { Metadata } from "next";
import { Geist, Geist_Mono, Black_Han_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const blackHanSans = Black_Han_Sans({
  variable: "--font-black-han-sans",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "hyemyn2",
  description: "프론트엔드 개발자 포트폴리오 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // TODO : 다른 폰트 쓰려면 globals.css에서 import 후 클래스 변경 (아래 코드 삭제)
        className={`dark ${blackHanSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Nav/>
          <div
            className="ml-12 min-h-screen flex flex-col"
          >
            <Header/>
            <main
              className="flex-1 w-full mx-auto max-w-screen-xl px-20 pb-30 sm:px-6"
            >
              {children}
            </main>
            <Footer/>
          </div>
        <ScrollToTopButton/>
      </body>
    </html>
  );
}
