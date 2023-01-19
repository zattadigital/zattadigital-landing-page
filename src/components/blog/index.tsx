import Image from "next/image";
import imageBlogGrid from "../../assets/images/blog-grid2.jpg";

const Blog = () => {
    return (
        <section id="blog" className="blog-section section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3
                                className="wow zoomIn"
                                data-wow-delay=".2s"
                                // style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;"
                            >
                                Blogs
                            </h3>
                            <h2
                                className="wow fadeInUp"
                                data-wow-delay=".4s"
                                // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                            >
                                Our Latest News
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
                            className="single-blog wow fadeInUp"
                            data-wow-delay=".2s"
                            // style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
                        >
                            <div className="blog-img">
                                <a href="blog-single-sidebar.html">
                                    <Image
                                        src={imageBlogGrid}
                                        alt="Blog Image"
                                    />
                                </a>
                            </div>
                            <div className="blog-content">
                                <span className="date">Mar 12, 2023</span>
                                <h4 className="title">
                                    <a href="blog-single-sidebar.html">
                                        Bring to the table win-win survival
                                        strategies.
                                    </a>
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the standard.
                                </p>
                                <div className="meta-details">
                                    <a href="javascript:void(0)">
                                        <Image
                                            src={imageBlogGrid}
                                            alt="Blog Image"
                                        />
                                        <span>By Jonson deco</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="single-blog wow fadeInUp"
                            data-wow-delay=".4s"
                            // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                        >
                            <div className="blog-img">
                                <a href="blog-single-sidebar.html">
                                    <Image
                                        src={imageBlogGrid}
                                        alt="Blog Image"
                                    />
                                </a>
                            </div>
                            <div className="blog-content">
                                <span className="date">Feb 25, 2023</span>
                                <h4 className="title">
                                    <a href="blog-single-sidebar.html">
                                        How To Blow Through Capital At An
                                        Incredible Rate.
                                    </a>
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the standard.
                                </p>
                                <div className="meta-details">
                                    <a href="javascript:void(0)">
                                        <Image
                                            src={imageBlogGrid}
                                            alt="Blog Image"
                                        />
                                        <span>By Jonson deco</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="single-blog wow fadeInUp"
                            data-wow-delay=".6s"
                            // style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"
                        >
                            <div className="blog-img">
                                <a href="blog-single-sidebar.html">
                                    <Image
                                        src={imageBlogGrid}
                                        alt="Blog Image"
                                    />
                                </a>
                            </div>
                            <div className="blog-content">
                                <span className="date">Jan 12, 2023</span>
                                <h4 className="title">
                                    <a href="blog-single-sidebar.html">
                                        Bring to the table win-win survival
                                        strategies.
                                    </a>
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the standard.
                                </p>
                                <div className="meta-details">
                                    <a href="javascript:void(0)">
                                        <Image
                                            src={imageBlogGrid}
                                            alt="Blog Image"
                                        />
                                        <span>By Jonson deco</span>
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

export default Blog;
