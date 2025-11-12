import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";
import { StructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://mugio.studio"
      : "http://localhost:3000"
  ),
  title: {
    default: "走走小日 moments - 一頁式官網",
    template: "%s | 走走小日 moments",
  },
  description:
    "走走小日 moments 是一款療癒系日常遊戲（尚未推出）。追蹤我們以獲得最新消息與釋出時間。",
  keywords: ["走走小日", "moments", "Mugio Studio", "療癒", "日常遊戲"],
  authors: [{ name: "Mugio Studio" }],
  creator: "Mugio Studio",
  publisher: "Mugio Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mugio.studio",
    siteName: "走走小日 moments",
    title: "走走小日 moments - 一頁式官網",
    description:
      "走走小日 moments 是一款療癒系日常遊戲（尚未推出）。追蹤我們以獲得最新消息。",
    images: [
      {
        url: "/ogImage.png",
        width: 1200,
        height: 630,
        alt: "走走小日 moments",
      },
      {
        url: "/ogImage_sm.png",
        width: 600,
        height: 315,
        alt: "走走小日 moments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "走走小日 moments - 一頁式官網",
    description:
      "走走小日 moments 是一款療癒系日常遊戲（尚未推出）。追蹤我們以獲得最新消息。",
    images: ["/ogImage.png", "/ogImage_sm.png"],
    creator: "@mugio_studio",
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body>
        <Provider>
          <>
            <Toaster />
            {children}
          </>
        </Provider>
      </body>
    </html>
  );
}
