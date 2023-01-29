import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect } from "react";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=AW-11078796620"
                ></Script>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11078796620');`}
                </Script>
            </Head>
            <body id="body">
                <Script id="google-analytics" strategy="afterInteractive">
                    {`gtag('event', 'conversion', {'send_to': 'AW-11078796620/22ccCKqB04kYEMyK5KIp'});`}
                </Script>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
