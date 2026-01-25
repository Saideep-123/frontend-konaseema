import "./globals.css";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-greatvibes" });

export const metadata = {
  title: "Konaseema Foods | Authentic Sweets",
  description: "Traditional Konaseema sweets made with pure ingredients",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} bg-cream text-brown`}>
        {children}
      </body>
    </html>
  );
}
