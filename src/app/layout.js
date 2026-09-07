import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./commoncomopents/Header";
import Sidebar from "./commoncomopents/Sidebar";
import Breadcrumb from "./commoncomopents/Breadcrumb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HRMS Admin Panel",
  description: "HRMS Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-gray-100">
        <div className="flex max-w-[1400px] mx-auto min-h-screen">
          {/* Sidebar */}
          <aside className="w-[20%] border-r">
            <Sidebar />
          </aside>
          {/* Right Section */}
          <main className="w-[80%]">
            <Header />
            {/* Page Content */}
            <section className="p-5">
              <Breadcrumb />
              {children}
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}