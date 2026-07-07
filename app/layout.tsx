import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Covantum | Healthcare Advisory & Communication",
  description: "Covantum is where healthcare companies, brands and medical professionals come to build lasting credibility, communicate more effectively and grow with purpose.",
};

// Declares this site as dark-only via <meta name="color-scheme">, so browsers
// render native UI (scrollbars, autofill, form controls) in the dark variant
// and skip any "auto-darken/lighten this page" heuristic instead of guessing
// from an unset value. themeColor matches the design's dark navy background,
// used by mobile browsers to color the address/status bar.
export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#00152b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
