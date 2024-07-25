import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/components/Header";
import Navbar from "../components/Navbar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Binge Worthy",
  description: "This is a movie database app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Navbar/>
        <SearchBox/>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
