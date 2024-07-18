import { Montserrat } from 'next/font/google'
import "./globals.css";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "DIMA AL UROUBA TURNERY",
  description: "The website showcases machine parts such as CNC, lathes, drills, and offers gearbox maintenance services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
