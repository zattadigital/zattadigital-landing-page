import Image from 'next/image';
import imageTestimonial from '../../assets/images/testi5.jpg'

const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3
                                className="wow zoomIn"
                                data-wow-delay=".2s"
                                // style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;"
                            >
                                Testimonials
                            </h3>
                            <h2
                                className="wow fadeInUp"
                                data-wow-delay=".4s"
                                // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                            >
                                What people says about us
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
                <div className="slider-head">
                    <div className="tns-outer" id="tns2-ow">
                        <div
                            className="tns-nav"
                            aria-label="Carousel Pagination"
                        >
                            <button
                                type="button"
                                data-nav="0"
                                aria-controls="tns2"
                                aria-label="Carousel Page 1"
                                className=""
                                tabindex="-1"
                            ></button>
                            <button
                                type="button"
                                data-nav="1"
                                aria-controls="tns2"
                                aria-label="Carousel Page 2 (Current Slide)"
                                className="tns-nav-active"
                            ></button>
                            <button
                                type="button"
                                data-nav="2"
                                tabindex="-1"
                                aria-controls="tns2"
                                style={{display:'none'}}
                                aria-label="Carousel Page 3"
                            ></button>
                            <button
                                type="button"
                                data-nav="3"
                                tabindex="-1"
                                aria-controls="tns2"
                                style={{display:'none'}}
                                aria-label="Carousel Page 4"
                            ></button>
                            <button
                                type="button"
                                data-nav="4"
                                tabindex="-1"
                                aria-controls="tns2"
                                style={{display:'none'}}
                                aria-label="Carousel Page 5"
                            ></button>
                            <button
                                type="button"
                                data-nav="5"
                                tabindex="-1"
                                aria-controls="tns2"
                                style={{display:'none'}}
                                aria-label="Carousel Page 6"
                            ></button>
                        </div>
                        <div
                            className="tns-liveregion tns-visually-hidden"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            slide <span className="current">9 to 11</span> of 6
                        </div>
                        <div id="tns2-mw" className="tns-ovh">
                            <div className="tns-inner" id="tns2-iw">
                                <div
                                    className="row testimonial-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                                    id="tns2"
                                    // style="transform: translate3d(-50%, 0px, 0px);"
                                >
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item tns-slide-cloned"
                                        aria-hidden="true"
                                        tabindex="-1"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                                
                                                <Image src={imageTestimonial} alt="Testimonial image"/>
                                                <h3>
                                                    Marleah Eagleston
                                                    <span>
                                                        Founder at Spicenet
                                                    </span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can't take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item tns-slide-cloned"
                                        aria-hidden="true"
                                        tabindex="-1"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                            <Image src={imageTestimonial} alt="Testimonial image"/>
                                                <h3>
                                                    Phet Putrie
                                                    <span>Freelancer</span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can't take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item tns-slide-cloned"
                                        aria-hidden="true"
                                        tabindex="-1"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                            <Image src={imageTestimonial} alt="Testimonial image"/>
                                                <h3>
                                                    Prescott MacCaffery
                                                    <span>Writer</span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can't take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div
                                        className="col-lg-4 col-md-6 col-12 tns-item tns-slide-cloned"
                                        aria-hidden="true"
                                        tabindex="-1"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                            <Image src={imageTestimonial} alt="Testimonial image"/>
                                                <h3>
                                                    Lara Madrigal
                                                    <span>
                                                        Marketing Specialist
                                                    </span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can't take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item tns-slide-cloned"
                                        aria-hidden="true"
                                        tabindex="-1"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                            <Image src={imageTestimonial} alt="Testimonial image"/>
                                                <h3>
                                                    Waiapi Karaka
                                                    <span>
                                                        Designer, Freelancer
                                                    </span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can't take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item"
                                        id="tns2-item0"
                                        aria-hidden="true"
                                        tabindex="-1"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                            <Image src={imageTestimonial} alt="Testimonial image"/>
                                                <h3>
                                                    Aaron Almaraz
                                                    <span>
                                                        CEO &amp; Founder at
                                                        Gearat
                                                    </span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can't take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item"
                                        id="tns2-item1"
                                        aria-hidden="true"
                                        tabindex="-1"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                                <img
                                                    src="assets/images/testimonial/testi5.jpg"
                                                    alt="#"
                                                />
                                                <h3>
                                                    Marleah Eagleston
                                                    <span>
                                                        Founder at Spicenet
                                                    </span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can't take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item"
                                        id="tns2-item2"
                                        aria-hidden="true"
                                        tabindex="-1"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                                <img
                                                    src="assets/images/testimonial/testi3.jpg"
                                                    alt="#"
                                                />
                                                <h3>
                                                    Phet Putrie
                                                    <span>Freelancer</span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can't take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item tns-slide-active"
                                        id="tns2-item3"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                                <img
                                                    src="assets/images/testimonial/testi2.jpg"
                                                    alt="#"
                                                />
                                                <h3>
                                                    Prescott MacCaffery
                                                    <span>Writer</span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can't take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item tns-slide-active"
                                        id="tns2-item4"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                                <img
                                                    src="assets/images/testimonial/testi4.jpg"
                                                    alt="#"
                                                />
                                                <h3>
                                                    Lara Madrigal
                                                    <span>
                                                        Marketing Specialist
                                                    </span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can't take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item tns-slide-active"
                                        id="tns2-item5"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                                <img
                                                    src="assets/images/testimonial/testi3.jpg"
                                                    alt="#"
                                                />
                                                <h3>
                                                    Waiapi Karaka
                                                    <span>
                                                        Designer, Freelancer
                                                    </span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can't take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item tns-slide-cloned"
                                        aria-hidden="true"
                                        tabindex="-1"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                                <img
                                                    src="assets/images/testimonial/testi2.jpg"
                                                    alt="#"
                                                />
                                                <h3>
                                                    Aaron Almaraz
                                                    <span>
                                                        CEO &amp; Founder at
                                                        Gearat
                                                    </span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can't take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item tns-slide-cloned"
                                        aria-hidden="true"
                                        tabindex="-1"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                                <img
                                                    src="assets/images/testimonial/testi5.jpg"
                                                    alt="#"
                                                />
                                                <h3>
                                                    Marleah Eagleston
                                                    <span>
                                                        Founder at Spicenet
                                                    </span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can't take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item tns-slide-cloned"
                                        aria-hidden="true"
                                        tabindex="-1"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                                <img
                                                    src="assets/images/testimonial/testi3.jpg"
                                                    alt="#"
                                                />
                                                <h3>
                                                    Phet Putrie
                                                    <span>Freelancer</span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                cant take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item tns-slide-cloned"
                                        aria-hidden="true"
                                        tabindex="-1"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                                <img
                                                    src="assets/images/testimonial/testi2.jpg"
                                                    alt="#"
                                                />
                                                <h3>
                                                    Prescott MacCaffery
                                                    <span>Writer</span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                can take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6 col-12 tns-item tns-slide-cloned"
                                        aria-hidden="true"
                                        tabindex="-1"
                                    >
                                        <div className="single-testimonial">
                                            <div className="top-section">
                                                <img
                                                    src="assets/images/testimonial/testi4.jpg"
                                                    alt="#"
                                                />
                                                <h3>
                                                    Lara Madrigal
                                                    <span>
                                                        Marketing Specialist
                                                    </span>
                                                </h3>
                                                <ul className="rating">
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                    <li>
                                                        <i className="lni lni-star-filled"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Time is the most precious thing
                                                you have when bootstrapping. You
                                                ca take time to ponder on
                                                design…
                                            </p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
