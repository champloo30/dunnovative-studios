import type { Metadata } from "next";
import { Architects_Daughter, Taviraj } from 'next/font/google'
import { ThemeProvider } from "next-themes";
import "./globals.css";

const taviraj = Taviraj({ 
  subsets: ['latin'],
  variable: '--font-taviraj',
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: "--font-daughter",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dunnovative Studios",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${taviraj.variable} ${daughter.variable} antialiased min-h-screen bg-whiteCrest dark:bg-oxford font-taviraj scroll-smooth`}>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
