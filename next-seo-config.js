import config from "./config";

const {
    global: {
        meta: { title = "", description = "", ogImageUrl = "", domain = "" },
    },
} = config;

const SEO = {
    title,
    description,
    canonical: domain,
    openGraph: {
        type: "website",
        url: domain,
        locale: "pt_BR",
        title,
        description,
        images: [
            {
                url: ogImageUrl,
                width: 800,
                height: 600,
                alt: title,
                type: "image/png",
            },
            {
                url: ogImageUrl,
                width: 900,
                height: 800,
                alt: title,
                type: "image/png",
            },
            { url: ogImageUrl },
            { url: ogImageUrl },
        ],
        siteName: "ZattaDigital",
    },
    // twitter: {
    //     handle: "@handle",
    //     site: "@site",
    //     cardType: "summary_large_image",
    // },
};

export default SEO;
