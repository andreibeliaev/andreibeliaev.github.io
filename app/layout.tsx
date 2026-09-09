import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], display: "swap", variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Andrei Beliaev",
  description:
    "Andrei Beliaev. Machine learning at Epivara, HistoForge, and research interests in vision, energy-based models, and video.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4V1J22GRMH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4V1J22GRMH');
          `}
        </Script>
      </head>
      <body className={`${lora.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
