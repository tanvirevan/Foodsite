import Header from "@/components/Header";
import "./globals.css";
import "./style.css";
import Footer from "@/components/Footer";

export const metadata = 
  {
    title: "FoodSite",
    description: "This is the food blog Website",
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
