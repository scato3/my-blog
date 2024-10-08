import type { Metadata } from "next";
import "./style/globals.css";
import { suit } from "./style/fonts/suit";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "./components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={suit.className} suppressHydrationWarning>
      <body className="max-w-screen-md min-w-[320px] mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col">
            <Header />
            {children}
          </main>
        </ThemeProvider>
        <Footer />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string}
        />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "HyunSu | Frontend Engineer",
  description: "hyunsu.dev, 프론트엔드 개발자의 블로그",
  openGraph: {
    type: "website",
    url: "https://hyunsu-dev.vercel.app",
    title: "HyunSu | Frontend Engineer",
    description: "hyunsu.dev, 프론트엔드 개발자의 블로그",
    images: [
      {
        url: "https://hyunsu-dev.vercel.app/main.jpg",
        width: 800,
        height: 800,
        alt: "블로그 메인 이미지",
      },
    ],
  },
};
