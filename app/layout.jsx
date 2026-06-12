import "./globals.css";
import Providers from "./providers";
import { JsonLd } from "@/components/JsonLd";

const SITE = "https://launch.mimanasa.online";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Mimanasa Innovations — AI-Driven Software, School ERP & Business Automation",
    template: "%s · Mimanasa Innovations",
  },
  description:
    "Mimanasa Innovations builds AI-powered software, school management systems, learning platforms, business automation and data-intelligence products that help organizations scale faster and operate smarter.",
  applicationName: "Mimanasa Innovations",
  authors: [{ name: "Mimanasa Innovations", url: SITE }],
  creator: "Mimanasa Innovations",
  publisher: "Mimanasa Innovations",
  keywords: [
    "Mimanasa Innovations", "AI software company", "School ERP", "school management system",
    "education technology", "business automation", "data analytics", "SaaS development",
    "AI content studio", "workflow automation", "Lucknow software company", "India SaaS",
  ],
  alternates: { canonical: SITE },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE,
    siteName: "Mimanasa Innovations",
    title: "Mimanasa Innovations — Where Intelligence Meets Innovation",
    description:
      "AI-powered software, school management systems, learning platforms and business automation — engineered to help organizations scale faster and operate smarter.",
    images: [{ url: "/logo.png", width: 640, height: 640, alt: "Mimanasa Innovations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mimanasa Innovations — Where Intelligence Meets Innovation",
    description: "AI-powered software, education platforms and business automation systems.",
    images: ["/logo.png"],
  },
  icons: { icon: "/logo.png", apple: "/logo.png", shortcut: "/logo.png" },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
