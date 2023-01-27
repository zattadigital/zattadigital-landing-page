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
import React, { useEffect, useMemo } from "react";
import TagManager, { TagManagerArgs } from "react-gtm-module";

export default function App({ Component, pageProps }: AppProps) {
    // const tagManagerArgs: TagManagerArgs = useMemo(
    //     () => ({ gtmId: "GTM-KN3XQ7C" }),
    //     []
    // );

    useEffect(() => {
        TagManager.initialize({
            gtmId: "GTM-KN3XQ7C"
        });
    }, []);

    return (
        <GlobalProvider>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=UTF-8"
                />
            </Head>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </GlobalProvider>
    );
    // return ;
}
