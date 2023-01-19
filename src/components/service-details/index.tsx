import Link from "next/link";

const ServiceDetails = () => {
    return (
        <section id="service-details" className="pricing-table section">
            <div className="container">
                <div className="row" data-aos="zoom-in">
                    <div className="col-12">
                        <div className="section-title">
                            <h3
                                className="wow zoomIn"
                                data-wow-delay=".2s"
                                // style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;"
                            >
                                Detalhes
                            </h3>
                            <h2
                                className="wow fadeInUp"
                                data-wow-delay=".4s"
                                // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                            >
                                Detalhes dos serviços
                            </h2>
                            <p
                                className="wow fadeInUp"
                                data-wow-delay=".6s"
                                // style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"
                            >
                                Usamos ferramentas de alta performance utilizadas em grandes empresas
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="single-table wow fadeInUp"
                            data-wow-delay=".4s"
                            // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                        >
                            <div className="table-head">
                                <h4 className="title">Landing Pages</h4>
                                {/* <p>
                                    All the basics for starting a new business
                                </p> */}
                            </div>

                            <div className="table-content">
                                <ul className="table-list">
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Landing Page de alta conversão
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Servidores escaláveis, você poderá fazer grandes lançamentos sem medo
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        SEO integrado, sua sua Landing Page nos melhores resultados do Google
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Design responsivo para telefones, tablets e computadores
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Customização de textos e imagens
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Integração com pixel do Facebook e Tag Manager do Google
                                    </li>
                                </ul>

                                <div className="button">
                                    <Link href="#contact-us" scroll={false} className="btn">
                                        Solicitar orçamento
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="single-table wow fadeInUp"
                            data-wow-delay=".4s"
                            // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                        >
                            <div className="table-head">
                                <h4 className="title">Ecommerce</h4>
                                {/* <p>
                                    All the basics for starting a new business
                                </p> */}
                            </div>

                            <div className="table-content">
                                <ul className="table-list">
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Painel Administrativo para cadastro de produtos
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Cálculo de Frete (Correios, Transportadoras, etc)
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Cupons de Desconto e Vale Presentes
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Sistema de pagamento com Cartão de Crédito, Débito e Pix
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Controle de Estoque e Relatório de vendas
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Gestão de pedidos e clientes
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Site responsivo e com PWA
                                    </li>
                                </ul>

                                <div className="button">
                                    <Link href="#contact-us" scroll={false} className="btn">
                                        Solicitar orçamento
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="single-table wow fadeInUp"
                            data-wow-delay=".4s"
                            // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                        >
                            <div className="table-head">
                                <h4 className="title">Aplicativos</h4>
                                {/* <p>
                                    All the basics for starting a new business
                                </p> */}
                            </div>

                            <div className="table-content">
                                <ul className="table-list">
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Aplicativos Nativos ou Híbridos
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Aplicativos compatíveis com Android e iOS
                                    </li>
                                </ul>

                                <div className="button">
                                    <Link href="#contact-us" scroll={false} className="btn">
                                        Solicitar orçamento
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
