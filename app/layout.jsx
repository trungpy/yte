import { Roboto } from "next/font/google";
import "./globals.css";

// compoenents
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: {
    template: "%s | Khởi Lộc Phát",
    default: "Khởi Lộc Phát",
  },
  description: "Chuyên cung cấp các thiết bị phòng thí nghiệm",
  icons: {
    icon: "./favicon.ico",
  },
};
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
