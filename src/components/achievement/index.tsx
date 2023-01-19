const Achievement = () => {
    return (
        <section className="our-achievement section" id="achievement">
            <div className="container">
                <div className="row" data-aos="fade-right">
                    <div className="col-lg-3 col-md-3 col-12">
                        <div
                            className="single-achievement wow fadeInUp"
                            data-wow-delay=".2s"
                            // style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
                        >
                            <div className="achievement-icon">
                                <i className="lni lni-thumbs-up"></i>
                            </div>
                            <h3 className="counter">
                                <span
                                    id="secondo1"
                                    className="countup"
                                    cup-end="100"
                                >
                                    100{" "}
                                </span>
                                %
                            </h3>
                            <p>Entregas</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div
                            className="single-achievement wow fadeInUp"
                            data-wow-delay=".4s"
                            // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                        >
                            <div className="achievement-icon">
                                <i className="lni lni-users"></i>
                            </div>
                            <h3 className="counter">
                                <span
                                    id="secondo2"
                                    className="countup"
                                    cup-end="120"
                                >
                                    +15 anos{" "}
                                </span>
                                
                            </h3>
                            <p>Atuando no comércio</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div
                            className="single-achievement wow fadeInUp"
                            data-wow-delay=".6s"
                            // style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"
                        >
                            <div className="achievement-icon">
                                <i className="lni lni-code"></i>
                            </div>
                            <h3 className="counter">
                                <span
                                    id="secondo3"
                                    className="countup"
                                    cup-end="500"
                                >
                                    +5 anos{" "}
                                </span>
                                
                            </h3>
                            <p>Atuando no Desenvoldendo</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div
                            className="single-achievement wow fadeInUp"
                            data-wow-delay=".6s"
                            // style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"
                        >
                            <div className="achievement-icon">
                                <i className="lni lni-cup"></i>
                            </div>
                            <h3 className="counter">
                                <span
                                    id="secondo3"
                                    className="countup"
                                    cup-end="50"
                                >
                                    +500K{" "}
                                </span>
                                
                            </h3>
                            <p>Linhas de código</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievement;
