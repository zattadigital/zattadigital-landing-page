import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head></Head>
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
