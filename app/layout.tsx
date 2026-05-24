import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import { COMPANY } from "@/lib/constants";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas"
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://walsh-demo.vercel.app"),
  title: `${COMPANY.name} | Demolition & Debris Removal`,
  description:
    "Professional demolition and debris removal services in Central New York. Fast turnaround, safe crews, and spotless cleanup.",
  openGraph: {
    title: `${COMPANY.name} | Demolition & Debris Removal`,
    description:
      "Heavy-duty demo services with reliable cleanup and hauling. Request a free quote today.",
    type: "website",
    images: [{ url: "/images/Excavator.png", width: 1200, height: 630, alt: "Walsh's Demo & Debris Removal" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Demolition & Debris Removal`,
    description: "Powerful demolition. Reliable cleanup. Fast response across Central New York.",
    images: ["/images/Excavator.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    telephone: "+1-315-920-5857",
    email: COMPANY.email,
    areaServed: COMPANY.area,
    description:
      "Residential and light commercial demolition, debris hauling, cleanup, and site prep services.",
    serviceType: ["Demolition", "Debris Removal", "Site Cleanup"],
    url: "https://walsh-demo.vercel.app",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "NY",
      addressCountry: "US"
    }
  };

  return (
    <html lang="en" className={`${bebas.variable} ${barlow.variable}`}>
      <body className="bg-matte text-chalk antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <ScrollProgress />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}