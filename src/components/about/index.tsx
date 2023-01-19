import Image from "next/image";
import aboutImage from '../../assets/images/about-image.png'

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div
                            className="image wow fadeInLeft"
                            data-wow-delay=".3s"
                            // style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;"
                        >
                            <Image src={aboutImage} alt="Imagem sobre"/>
                            <div className="img2"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div
                            className="content wow fadeInRight"
                            data-wow-delay=".5s"
                            // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInRight;"
                        >
                            <div className="heading">
                                <h2>People choose us because of our service</h2>
                                <p>
                                    McKinsey research has shown that 70% of
                                    buying experiences are based on how the
                                    customer feels they have been treated.
                                </p>
                            </div>
                            <div className="list">
                                <div className="single-list">
                                    <i className="lni lni-bolt"></i>
                                    <h4>Infinite Features</h4>
                                    <p>
                                        We work on diverse projects for top
                                        brands as well as for cool startups.
                                    </p>
                                </div>

                                <div className="single-list">
                                    <i className="lni lni-grid-alt"></i>
                                    <h4>Stunning Design</h4>
                                    <p>
                                        We work on diverse projects for top
                                        brands as well as for cool startups.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
