import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Triple One Hotel | Cozy Rooms for Long & Short Stays in Ghana",
  description:
    "Triple One Hotel offers cozy rooms for long and short stays in Ghana. Enjoy our Event Garden, Conference Hall, high-speed internet and warm hospitality.",
  keywords: [
    "Triple One Hotel",
    "hotel Ghana",
    "accommodation Ghana",
    "event garden",
    "conference hall",
    "long stay hotel",
    "short stay hotel",
  ],
  authors: [{ name: "Triple One Hotel" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Triple One Hotel | Cozy Rooms for Long & Short Stays",
    description:
      "A tranquil retreat in Ghana blending comfort, charm and modern amenities — Event Garden, Conference Hall and high-speed internet.",
    siteName: "Triple One Hotel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triple One Hotel",
    description: "Cozy rooms for long and short stays in Ghana.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
