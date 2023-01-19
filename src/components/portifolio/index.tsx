import Image from "next/image";
import portifolioImage from "../../assets/images/pf3.png";

const Portifolio = () => {
    return (
        <section className="portfolio-section section">
            <div id="container" className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3
                                className="wow zoomIn"
                                data-wow-delay=".2s"
                                // style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;"
                            >
                                Latest Cases
                            </h3>
                            <h2
                                className="wow fadeInUp"
                                data-wow-delay=".4s"
                                // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                            >
                                Our Latest works
                            </h2>
                            <p
                                className="wow fadeInUp"
                                data-wow-delay=".6s"
                                // style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"
                            >
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="portfolio-button-head">
                            <div
                                className="portfolio-btn-wrapper wow fadeInUp"
                                data-wow-delay=".4s"
                                // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                            >
                                <button
                                    className="portfolio-btn active"
                                    data-filter="*"
                                >
                                    All
                                </button>
                                <button
                                    className="portfolio-btn"
                                    data-filter=".branding"
                                >
                                    Branding
                                </button>
                                <button
                                    className="portfolio-btn"
                                    data-filter=".marketing"
                                >
                                    Marketing
                                </button>
                                <button
                                    className="portfolio-btn"
                                    data-filter=".web"
                                >
                                    Web Design
                                </button>
                                <button
                                    className="portfolio-btn"
                                    data-filter=".graphic"
                                >
                                    Graphic Design
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="row grid"
                    // style="position: relative; height: 857.65px;"
                >
                    <div
                        className="col-lg-4 col-md-6 grid-item marketing"
                        // style="position: absolute; left: 0px; top: 0px;"
                    >
                        <div className="portfolio-item-wrapper">
                            <div className="portfolio-img">
                                <a href="portfolio-details.html">
                                    <Image
                                        src={portifolioImage}
                                        alt="portifolio image"
                                    />
                                </a>
                            </div>
                            <div className="portfolio-overlay">
                                <div className="pf-content">
                                    <span className="category">
                                        Graphic Design
                                    </span>
                                    <h4>
                                        <a href="portfolio-details.html">
                                            Aura Branding Design
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 grid-item graphic"
                        // style="position: absolute; left: 439.987px; top: 0px;"
                    >
                        <div className="portfolio-item-wrapper">
                            <div className="portfolio-img">
                                <a href="portfolio-details.html">
                                    <Image
                                        src={portifolioImage}
                                        alt="portifolio image"
                                    />
                                </a>
                            </div>
                            <div className="portfolio-overlay">
                                <div className="pf-content">
                                    <span className="category">
                                        Graphic Design
                                    </span>
                                    <h4>
                                        <a href="portfolio-details.html">
                                            Best Graphic Design in 2023
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 grid-item marketing"
                        // style="position: absolute; left: 879.974px; top: 0px;"
                    >
                        <div className="portfolio-item-wrapper">
                            <div className="portfolio-img">
                                <a href="portfolio-details.html">
                                    <Image
                                        src={portifolioImage}
                                        alt="portifolio image"
                                    />
                                </a>
                            </div>
                            <div className="portfolio-overlay">
                                <div className="pf-content">
                                    <span className="category">Marketing</span>
                                    <h4>
                                        <a href="portfolio-details.html">
                                            Unique Marketing tips &amp; tricks
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 grid-item web"
                        // style="position: absolute; left: 0px; top: 425.288px;"
                    >
                        <div className="portfolio-item-wrapper">
                            <div className="portfolio-img">
                                <a href="portfolio-details.html">
                                    <Image
                                        src={portifolioImage}
                                        alt="portifolio image"
                                    />
                                </a>
                            </div>
                            <div className="portfolio-overlay">
                                <div className="pf-content">
                                    <span className="category">Web Design</span>
                                    <h4>
                                        <a href="portfolio-details.html">
                                            Best Web Design in 2023
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 grid-item branding"
                        // style="position: absolute; left: 439.987px; top: 425.288px;"
                    >
                        <div className="portfolio-item-wrapper">
                            <div className="portfolio-img">
                                <a href="portfolio-details.html">
                                    <Image
                                        src={portifolioImage}
                                        alt="portifolio image"
                                    />
                                </a>
                            </div>
                            <div className="portfolio-overlay">
                                <div className="pf-content">
                                    <span className="category">Branding</span>
                                    <h4>
                                        <a href="portfolio-details.html">
                                            Best Branding Solutions{" "}
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 grid-item web"
                        // style="position: absolute; left: 879.974px; top: 432.362px;"
                    >
                        <div className="portfolio-item-wrapper">
                            <div className="portfolio-img">
                                <a href="portfolio-details.html">
                                    <Image
                                        src={portifolioImage}
                                        alt="portifolio image"
                                    />
                                </a>
                            </div>
                            <div className="portfolio-overlay">
                                <div className="pf-content">
                                    <span className="category">Web Design</span>
                                    <h4>
                                        <a href="portfolio-details.html">
                                            Best Web Design in 2023
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="button see-all">
                            <a href="portfolio.html" className="btn">
                                See all works
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portifolio;
