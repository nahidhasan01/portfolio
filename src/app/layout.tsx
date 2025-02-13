import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { banner } from "@/data/myInfo";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: banner.name,
  description: `It's a portfolio website of ${banner.name}`,
  icons: {
    icon: "/portfolio.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-[#111]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
