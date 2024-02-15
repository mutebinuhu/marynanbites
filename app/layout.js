import { Montserrat } from "next/font/google";
import Head from 'next/head';

import "./globals.css";
import Nav from "@/components/Nav";

export const dynamic = "force-dynamic";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Marynan bites",
  description: "Explore the delightful world of Marynan Bites - a culinary journey of flavors and tastes that will leave you wanting more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
      <Head>
        <title>Marynan Bites</title>

        {/* Meta Description */}
        <meta name="description" content="Explore the delightful world of Marynan Bites - a culinary journey of flavors and tastes that will leave you wanting more." />
        
      </Head>
      <div className="bg-[#FFF8EE]">
      <Nav/>
      </div>
        {children}
      </body>
    </html>
  );
}
