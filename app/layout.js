import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "WSS Secutiry",
  description: "Not only making hard to hack...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} w-screen overflow-y-scroll overflow-x-hidden bg-gradient-to-b from-black to-[#423A33]`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
