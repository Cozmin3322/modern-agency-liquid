import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist_Mono, Playfair_Display, Roboto_Slab, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { organizationSchema } from "@/lib/schema"
import { SplashScreen } from "@/components/splash-screen"
import { CookieBanner } from "@/components/cookie-banner"
import Chatbot from "@/components/chatbot"
import "./globals.css"

const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"], variable: "--font-lato" })
const _playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const _robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-roboto-slab" })

export const metadata: Metadata = {
  title: "IsoThermLux | Termoizolare și Hidroizolare Profesională Moldova",
  description:
    "IsoThermLux - Specialist în termoizolare și hidroizolare. 12 ani experiență. Garanție 25 ani. Economia 40-50% la gaz. Consultație gratuită.",
  keywords: "termoizolare, hidroizolare, izolare termică, Moldova, protecție umiditate",
  canonical: "https://www.isothermlux.md",
  alternates: {
    languages: {
      ro: "https://www.isothermlux.md",
    },
  },
  openGraph: {
    title: "IsoThermLux | Termoizolare și Hidroizolare Profesională",
    description: "Servicii profesionale de termoizolare și hidroizolare. Economia 40-50% la gaz. Garanție 25 ani.",
    type: "website",
    locale: "ro_RO",
    url: "https://www.isothermlux.md",
    images: [
      {
        url: "https://www.isothermlux.md/images/logo-isotherm-lux.png",
        width: 1200,
        height: 630,
        alt: "IsoThermLux",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "IsoThermLux | Termoizolare și Hidroizolare",
    description: "Servicii profesionale de termoizolare și hidroizolare.",
    images: ["https://www.isothermlux.md/images/logo-isotherm-lux.png"],
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
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DDP86YY4HF"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
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
          strategy="afterInteractive"
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
        {/* Optimize fonts loading */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Do not prefetch non-critical hero images */}
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
        <Chatbot />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
