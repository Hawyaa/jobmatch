import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chat/ChatWidget";


export const metadata: Metadata = {
  title: "JobMatch",
  description: "AI powered job search platform",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>

        <Navbar />

        {children}

        <Footer />

        <ChatWidget />

      </body>

    </html>
  );
}