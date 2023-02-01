const domain = "https://www.zattadigital.com";
const ogImageUrl = `${domain}/images/zatta-digital-og.png`;

const config = {
    global: {
        domain,
        meta: {
            title: "ZattaDigital - Desenvolvimento de Landing Pages e Ecommerce",
            description:
                "Criamos sua Landing Page de alta conversão, aumentando a geração de leeds com ferramentas de alta perfomance e técnicas avançadas de otimização. Também oferecemos desenvolvimento de e-commerce e aplicativos mobile personalizados.",
            ogImageUrl,
        },
    },
    sections: [
        {
            name: "Header",
            id: "header",
            menu: [
                { name: "Início", linkTo: "#body" },
                { name: "Tecnologias", linkTo: "#technologies" },
                { name: "Serviços", linkTo: "#services" },
                { name: "Detalhes", linkTo: "#service-details" },
                { name: "NewsLetter", linkTo: "#newletter" },
                { name: "Contato", linkTo: "#contact-us" },
            ],
            actionButton: {
                name: 'Começar a Vender',
                linkTo: '#contact-us'
            }
        },
        {
            name: 'Hero',
            id: 'hero',
            title: 'Gere Leeds De Qualidade Com Nossas Landing Pages De Alta Conversão',
            subTitle: 'Alcance novos patamares de sucesso com nossas soluções de software de última geração. Aumente suas vendas e sua presença online agora mesmo',
            actionButton: {
                name: 'Quero começar agora',
                linkTo: '#contact-us'
            },
            image: '/images/happy-business-people.png',
            imageAlt: 'Imagem do banner principal'
        }
    ],
};

export default config;
