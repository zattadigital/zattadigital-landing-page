import Link from "next/link";
import { LogoWhite } from "../common/logo";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="single-footer f-about">
                                <div className="logo">
                                    <a href="index.html">
                                        <LogoWhite />
                                    </a>
                                </div>
                                <p>
                                    Com 15 anos de experiência em comércio, e 5
                                    anos com desenvolvimento de software
                                </p>
                                {/* <ul className="social">
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="lni lni-facebook-filled"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="lni lni-twitter-original"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="lni lni-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="lni lni-linkedin-original"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="lni lni-youtube"></i>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="single-footer f-link">
                                        <h3>Soluções</h3>
                                        <ul>
                                            <li>
                                                <Link
                                                    href="#services"
                                                    scroll={false}
                                                >
                                                    Landing Pages
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#services"
                                                    scroll={false}
                                                >
                                                    Ecommerce
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#services"
                                                    scroll={false}
                                                >
                                                    Aplicativos
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#services"
                                                    scroll={false}
                                                >
                                                    Institucionais
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#services"
                                                    scroll={false}
                                                >
                                                    Blogs
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="single-footer f-link">
                                        <h3>Contato</h3>
                                        <ul>
                                            <li>
                                                <a
                                                    href={`https://wa.me/5551980453922?text=Olá, gostaria de solicitar um orçamento`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i className="lni lni-whatsapp" />
                                                    <span className="ms-2">
                                                        51980453922
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#contact-us"
                                                    scroll={false}
                                                >
                                                    Entrar em contato
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="mailto:contato.zattadigital@gmail.com">
                                                    contato.zattadigital@gmail.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="single-footer f-link">
                                        <h3>Legal</h3>
                                        <ul>
                                            <li>
                                                <Link
                                                    href="#technologies"
                                                    scroll={false}
                                                >
                                                    Tecnologias
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#services"
                                                    scroll={false}
                                                >
                                                    Serviços
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#newsletter"
                                                    scroll={false}
                                                >
                                                    Newsletter
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="copyright-text">
                                Developed by{" "}
                                <a
                                    href="https://wpthemesgrid.com/"
                                    rel="nofollow"
                                    target="_blank"
                                >
                                    ZattaDigital
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
