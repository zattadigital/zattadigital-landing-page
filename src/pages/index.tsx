import { Inter } from "@next/font/google";
import { useContext, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import BackToTop from "../components/common/back-to-top";
import Loader from "../components/common/loding";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { GlobalContext } from "../contexts/global-context";
import SectionAbout from "../sections/about";
import SectionAchievement from "../sections/achievement";
import SectionBlog from "../sections/blog";
import SectionClientLogo from "../sections/clientLogo";
import SectionHeader from "../sections/header";
import SectionHero from "../sections/hero";
import SectionNewsletter from "../sections/newslettes";
import SectionPortifolio from "../sections/portifolio";
import SectionPricing from "../sections/pricing";
import SectionServices from "../sections/services";
import SectionTeam from "../sections/team";
import SectionTestimonials from "../sections/testimonials";
import SectionServiceDetails from "../sections/service-details";
import WhatsappButton from "../components/common/whatsapp-button";
import DefaultSEOTags from "../components/common/seo";
import config from "../../config";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const {
        global: { meta },
    } = config;

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <DefaultSEOTags
            path="/"
            title={meta.title}
            description={meta.description}
        >
            <SectionHeader />
            <SectionHero />
            <SectionClientLogo />
            <SectionServices />
            {/* <SectionAbout /> */}
            <SectionAchievement />
            {/* <SectionPortifolio /> */}
            {/* <SectionPricing /> */}
            <SectionServiceDetails />
            {/* <SectionTeam /> */}
            {/* <SectionTestimonials /> */}
            <SectionNewsletter />
            {/* <SectionBlog /> */}
            <Contact />
            <Footer />
            <BackToTop />
            {/* <Loader /> */}
            <WhatsappButton />
        </DefaultSEOTags>
    );
}
