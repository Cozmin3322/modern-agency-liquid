import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist_Mono, Playfair_Display, Roboto_Slab, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { organizationSchema } from "@/lib/schema"
import { SplashScreen } from "@/components/splash-screen"
import { CookieBanner } from "@/components/cookie-banner"
import Chatbot from "@/components/chatbot"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const _geistMono = Geist_Mono({ subsets: ["latin"], display: "swap" })
const _lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-lato", display: "swap" })
const _playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], display: "swap" })
const _robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto-slab", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.isothermlux.md"),
  title: {
    default: "IsoThermLux | Termoizolare și Hidroizolare Profesională Moldova",
    template: "%s | IsoThermLux",
  },
  description:
    "IsoThermLux - specialist în termoizolare, hidroizolare și fonoizolare în Moldova. 12 ani experiență, garanție până la 25 ani și consultație gratuită.",
  keywords: [
    "termoizolare",
    "hidroizolare",
    "izolare termică",
    "spumă poliuretanică",
    "Moldova",
    "Chișinău",
  ],
  alternates: {
    canonical: "/",
    languages: {
      ro: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "IsoThermLux | Termoizolare și Hidroizolare Profesională",
    description: "Servicii profesionale de termoizolare, hidroizolare și fonoizolare în Moldova. Consultație gratuită și garanție până la 25 ani.",
    type: "website",
    locale: "ro_MD",
    siteName: "IsoThermLux",
    url: "/",
    images: [
      {
        url: "/images/hero-spray-foam.webp",
        width: 1200,
        height: 630,
        alt: "Aplicare profesională de spumă poliuretanică IsoThermLux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IsoThermLux | Termoizolare și Hidroizolare Profesională",
    description: "Servicii profesionale de termoizolare, hidroizolare și fonoizolare în Moldova.",
    images: ["/images/hero-spray-foam.webp"],
  },
  icons: {
    icon: "/images/logo-isotherm-lux.png",
    apple: "/images/logo-isotherm-lux.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={`bg-background ${_lato.variable} ${_robotoSlab.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DDP86YY4HF"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DDP86YY4HF');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '757944050710626');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=757944050710626&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="IDXInvKVwWPJ7p5b8BGsmITILsWx8iJ66Nvn0rnL8W8" />
        {/* Bing Webmaster Tools Verification */}
        <meta name="msvalidate.01" content="E2F8B6656FDBDAE0F8240089BB16CEFA" />
        <meta name="theme-color" content="#9B5F12" />
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <SplashScreen />
        {children}
        <WhatsAppButton />
        <Chatbot />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}

