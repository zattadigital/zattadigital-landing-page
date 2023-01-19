import { NextSeo } from "next-seo";
import Head from "next/head";
import { Children, ReactNode } from "react";
import config from "../../../config";

type TProps = {
    title: string;
    description: string;
    path: string;
    children: ReactNode;
};

const DefaultSEOTags = (props: TProps) => {
    const { title, description, path, children } = props;
    const {
        global: { domain = "" },
    } = config;
    const url = `${domain}${path}`;

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                }}
            />
            {children}
        </>
    );
};

export default DefaultSEOTags;
