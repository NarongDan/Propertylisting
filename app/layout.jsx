import "@/assets/styles/global.css";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import "@/components/Navbar";
import Navbar from "@/components/Navbar";
import { GlobalProvider } from "@/context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "photoswipe/dist/photoswipe.css";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental ",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

export default function MainLayout({ children }) {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
}
