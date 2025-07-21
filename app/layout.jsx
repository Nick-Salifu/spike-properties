import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { GlobalProvider } from "@/context/GlobalContext";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap'
})

export const metadata = {
  title: "Spike Properties",
  keywords: "rentals, property, real estate",
  description: "Find the perfect rental property",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html lang="en">
          <body className={poppins.className}>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
}
