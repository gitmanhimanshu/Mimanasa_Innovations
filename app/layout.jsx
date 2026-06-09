import "./globals.css";
import Providers from "./providers";

const SITE = "https://www.mimanasa.online";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Mimanasa Innovations — AI-Driven Software, Education & Automation",
    template: "%s · Mimanasa Innovations",
  },
  description:
    "Mimanasa Innovations builds AI-powered software, school management systems, learning platforms, business automation and data intelligence products that help organizations scale faster and operate smarter.",
  keywords: [
    "Mimanasa Innovations", "AI software", "School ERP", "education technology",
    "business automation", "data analytics", "SaaS", "AI content studio",
  ],
  openGraph: {
    title: "Mimanasa Innovations — Where Intelligence Meets Innovation",
    description: "AI-powered software, education platforms and business automation systems.",
    url: SITE,
    siteName: "Mimanasa Innovations",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Mimanasa Innovations" },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
