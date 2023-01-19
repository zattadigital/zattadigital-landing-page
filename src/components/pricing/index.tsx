const Pricing = () => {
    return (
        <section id="pricing" className="pricing-table section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3
                                className="wow zoomIn"
                                data-wow-delay=".2s"
                                // style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;"
                            >
                                pricing
                            </h3>
                            <h2
                                className="wow fadeInUp"
                                data-wow-delay=".4s"
                                // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                            >
                                Pricing Plan
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
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="single-table wow fadeInUp"
                            data-wow-delay=".4s"
                            // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                        >
                            <div className="table-head">
                                <h4 className="title">Freelancer</h4>
                                <p>
                                    All the basics for starting a new business
                                </p>
                                <div className="price">
                                    <h2 className="amount">
                                        $24<span className="duration">/mo</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="table-content">
                                <ul className="table-list">
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Cras justo odio.
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Dapibus ac facilisis in.
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Morbi leo risus.
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Potenti felis, in cras ligula.
                                    </li>
                                </ul>

                                <div className="button">
                                    <a href="javascript:void(0)" className="btn">
                                        Buy Freelancer
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="single-table wow fadeInUp"
                            data-wow-delay=".6s"
                            // style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"
                        >
                            <div className="table-head">
                                <h4 className="title">Startup</h4>
                                <p>
                                    All the basics for starting a new business
                                </p>
                                <div className="price">
                                    <h2 className="amount">
                                        $32<span className="duration">/mo</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="table-content">
                                <ul className="table-list">
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Cras justo odio.
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Dapibus ac facilisis in.
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Morbi leo risus.
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Potenti felis, in cras ligula.
                                    </li>
                                </ul>

                                <div className="button">
                                    <a href="javascript:void(0)" className="btn">
                                        Buy Startup
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="single-table wow fadeInUp"
                            data-wow-delay=".8s"
                            // style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInUp;"
                        >
                            <div className="table-head">
                                <h4 className="title">Enterprise</h4>
                                <p>
                                    All the basics for starting a new business
                                </p>
                                <div className="price">
                                    <h2 className="amount">
                                        $48<span className="duration">/mo</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="table-content">
                                <ul className="table-list">
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Cras justo odio.
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Dapibus ac facilisis in.
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Morbi leo risus.
                                    </li>
                                    <li>
                                        <i className="lni lni-checkmark-circle"></i>{" "}
                                        Potenti felis, in cras ligula.
                                    </li>
                                </ul>

                                <div className="button">
                                    <a href="javascript:void(0)" className="btn">
                                        Buy Enterprise
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
