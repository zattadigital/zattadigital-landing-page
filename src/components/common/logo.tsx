import Image from "next/image";
import logoSVG from "../../assets/images/logo.svg";

export const Logo = () => {
    return (
        <div className="icon d-flex">
            <i className="lni lni-angle-double-up logo-icon"></i>
            <h2
                className="logo-text ms-2"
                data-wow-delay=".4s"
                // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
            >
                ZattaDigital2
            </h2>
        </div>
    );
};

export const LogoWhite = () => {
    return (
        <div className="icon d-flex">
            <i className="lni lni-angle-double-up logo-icon logo-white"></i>
            <h2
                className="logo-text ms-2"
                data-wow-delay=".4s"
                // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
                style={{ color: "white" }}
            >
                ZattaDigital2
            </h2>
        </div>
    );
};
