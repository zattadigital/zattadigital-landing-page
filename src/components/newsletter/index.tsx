import Image from "next/image";
// import imageNewsletter from "../../assets/images/newsletter-img.png";
import imageNewsletter from "../../assets/images/woman-at-phone.png";

const Newsletter = () => {
    return (
        <section className="section newsletter" id="newsletter">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12" data-aos="fade-right">
                        <div className="image">
                            <Image
                                src={imageNewsletter}
                                alt="newsletter image"
                                className="newsletter-image-1"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12" data-aos="fade-left">
                        <div className="content">
                            <h3>
                                Receba atualizações sobre nossos produtos e serviços
                            </h3>
                            <form
                                action="#"
                                method="get"
                                className="newsletter-form"
                            >
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Melhor email"
                                />
                                <div className="button">
                                    <button type="submit" className="btn">
                                        Inscrever-se
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
