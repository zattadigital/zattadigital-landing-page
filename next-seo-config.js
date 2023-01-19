const title = "ZattaDigital - Desenvolvimento de softwares";
const description = "ZattaDigital - Desenvolvimento de softwares";
const domain = "https://www.zattadigital.com";
const ogImageUrl = `${domain}/images/zatta-digital-og.png`;

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
