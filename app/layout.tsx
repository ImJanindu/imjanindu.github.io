import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "../styles/index.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Janindu Malshan | Portfolio",
  description: "Software Developer & UI Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${vt323.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-vt323 bg-background text-foreground relative">
        <div className="noise pointer-events-none fixed inset-0 z-50 opacity-[0.03]"></div>
        {children}
      </body>
    </html>
  );
}
