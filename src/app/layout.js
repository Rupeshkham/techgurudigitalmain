import './globals.css' // ← हवं असेल तर ठेवा, नाहीतर काढून टाका
import Script from 'next/script'

export const metadata = {
  title: 'Hostiko',
  description: 'Premium Web Hosting Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Font Awesome 5 (only if really needed) */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
        <link rel="stylesheet" href="/assets/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <link rel="stylesheet" href="/assets/css/mobile.css" />
         
      </head>
      <body>
        {children}
        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/owl.carousel.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />
        <Script src="/assets/js/contact-form.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
