import Image from "next/image";
import imageAws from "../../assets/images/tecnologies/aws-svgrepo-com.svg";
import imageDocker from "../../assets/images/tecnologies/docker-svgrepo-com.svg";
import imageNext from "../../assets/images/tecnologies/nextjs-svgrepo-com.svg";
import imageKafka from "../../assets/images/tecnologies/kafka-svgrepo-com.svg";
import imageMongo from "../../assets/images/tecnologies/mongo-svgrepo-com.svg";
import imageMysql from "../../assets/images/tecnologies/mysql-logo-svgrepo-com.svg";
import imageNode from "../../assets/images/tecnologies/node-js-svgrepo-com.svg";
import imageReact from "../../assets/images/tecnologies/reactjs-svgrepo-com.svg";

import Carousel from "react-elastic-carousel";
import { ReactNode, useRef } from "react";

const ClientLogo = () => {
    const slides = [
        imageAws,
        imageDocker,
        imageNext,
        imageKafka,
        imageMongo,
        imageMysql,
        imageNode,
        imageReact,
    ];
    const carouselBreakpoints = [
        { width: 360, itemsToShow: 2, itemsToScroll: 2 },
        { width: 780, itemsToShow: 3, itemsToScroll: 2 },
    ];

    const carouselRef = useRef();

    const renderSlide = () => {
        let resetTimeout;
        return (
            <>
                <Carousel
                    showArrows={false}
                    showEmptySlots={false}
                    itemsToShow={3}
                    enableAutoPlay={true}
                    autoPlaySpeed={2000}
                    pagination={false}
                    disableArrowsOnEnd={false}
                    enableTilt={false}
                    breakPoints={carouselBreakpoints}
                    onNextEnd={({ index }) => {
                        clearTimeout(resetTimeout);
                        resetTimeout = setTimeout(() => {
                            if (carouselRef && carouselRef.current && carouselRef.current.goTo) {
                                carouselRef?.current?.goTo(0);
                            }
                        }, 2000); // same time
                    }}
                    ref={carouselRef}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="client-logo tns-item tns-slide-cloned"
                            aria-hidden="true"
                        >
                            <Image src={slide} width={130} height={0} alt="" />
                        </div>
                    ))}
                </Carousel>
            </>
        );
    };

    return (
        <div className="client-logo-section" id="technologies">
            <div className="container">
                <div className="client-logo-wrapper">
                    <div className="tns-outer" id="tns1-ow" data-aos="fade-right">
                        <div
                            className="tns-liveregion tns-visually-hidden"
                            aria-live="polite"
                            aria-atomic="true"
                        ></div>
                        <div id="tns1-mw" className="tns-ovh">
                            <div className="tns-inner" id="tns1-iw">
                                <div
                                    className="client-logo-carousel d-flex align-items-center justify-content-between  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                                    id="tns1"
                                    // style="transform: translate3d(-61.5385%, 0px, 0px);"
                                >
                                    {renderSlide()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientLogo;
