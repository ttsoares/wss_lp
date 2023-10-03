import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WSS Secutiry",
  description: "Not only making hard to hack...",
};

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen bg-gradient-to-b from-black to-[#423A33]`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
