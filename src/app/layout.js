import { Inter } from "next/font/google";
import "./reset.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecenur Kaya",
  description: "Ecenur Kaya Portfolio",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={`${inter.className} dark:bg-dark dark:text-black`}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
