import Image from "next/image";
import Link from "next/link";
import heroImage from "../../assets/images/happy-business-people.png";
const Hero = () => {
    return (
        <section id="home" className="hero-area style1" data-aos="fade-up">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div
                            className="hero-content wow fadeInLeft"
                            data-wow-delay=".3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInLeft",
                            }}
                            data-aos="fade-right"
                        >
                            <h1>
                                Comece a vender seu produto ou serviço agora
                                mesmo!
                            </h1>
                            <p>
                                Alcance novos patamares de sucesso com nossas
                                soluções de software de última geração. Aumente
                                suas vendas e sua presença online agora mesmo
                            </p>
                            {/* <form
                                action="#"
                                method="get"
                                target="_blank"
                                className="trial-form"
                            >
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Your email address"
                                />
                                <div className="button">
                                    <button type="submit" className="btn">
                                        Get Started
                                    </button>
                                </div>
                            </form>
                            <a
                                href="https://www.youtube.com/watch?v=r44RKWyfcFw&amp;fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                                className="glightbox video-button"
                            >
                                <i className="lni lni-play"></i>
                                <span className="text">
                                    Watch our intro video.
                                </span>
                            </a> */}
                            <div className="button mt-50 text-center">
                                <Link
                                    href={"#contact-us"}
                                    scroll={false}
                                    className="btn w-100"
                                >
                                    Quero começar agora
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div
                            className="hero-image wow fadeInRight"
                            data-wow-delay=".4s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <Image src={heroImage} alt="" />
                            {/* <img src={'http://localhost:3000/src/assets/images/happy-business-people.png'} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
