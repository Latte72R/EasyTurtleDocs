import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Sans_Mono } from 'next/font/google'
import "@/app/styles/globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: true,
  variable: '--font-noto-sans-jp',
  display: 'swap',
  fallback: [
    "Noto Sans JP", "游ゴシック", "YuGothic",
    "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
    "メイリオ", "Meiryo",
    "Arial", "Helvetica", "sans-serif"],
})

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: true,
  variable: '--font-noto-sans-mono',
  display: 'swap',
  fallback: [
    "ＭＳ ゴシック", "MS Gothic",
    "Osaka-Mono",
    "Menlo", "Courier New", "monospace"
  ],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://easyturtle.latte72.net"),
  title: {
    default: "EasyTurtle",
    template: `%s | EasyTurtle`,
  },
  description: "Easily handle Turtle module using GUI",
  keywords: ["Python", "Turtle", "プログラミング", "GUI", "教育", "初心者", "EasyTurtle"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: {
      default: "EasyTurtle",
      template: `%s | EasyTurtle`,
    },
    description: "Easily handle Turtle module using GUI",
    url: "https://easyturtle.latte72.net",
    siteName: "EasyTurtle",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://easyturtle.latte72.net/og-image.png",
        width: 1200,
        height: 630,
        alt: "EasyTurtle OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyTurtle",
    description: "Easily handle Turtle module using GUI",
    site: "@Latte72R",
    creator: "@Latte72R",
    images: ["https://easyturtle.latte72.net/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  viewportFit: 'cover',
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSansJp.variable} ${notoSansMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
