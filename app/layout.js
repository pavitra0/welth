import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


import { Toaster } from "@/components/ui/sonner";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";
import Header from "../components/header";



const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Welth",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    

    <ClerkProvider>
      <html lang="en">
        <body className={`${josefin.className}`}>
       
          <Header />
          <PageTransitionWrapper>
          <main className="min-h-screen">{children}</main>
          </PageTransitionWrapper>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto text-center text-gray-600 py-4">
              <p>Made with ❤️ shadcn</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
