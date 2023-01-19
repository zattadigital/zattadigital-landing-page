import type { AppProps } from "next/app";

import "../assets/styles/bootstrap.min.css";
import "../assets/styles/LineIcons.2.0.css";
import "../assets/styles/animate.css";
import "../assets/styles/tiny-slider.css";
import "../assets/styles/glightbox.min.css";
import "../assets/styles/main.css";
import { GlobalProvider } from "../contexts/global-context";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo-config";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <GlobalProvider>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </GlobalProvider>
    );
    // return ;
}
