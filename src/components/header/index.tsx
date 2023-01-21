import Link from "next/link";
import { useState } from "react";
import { Logo } from "../common/logo";

const Header = () => {

    const [activeMobileMenu, setActiveMobileMenu] = useState(false);

    function toggleMobileMenu() {
        setActiveMobileMenu(!activeMobileMenu);
    }

    return (
        <header className="header navbar-area sticky" id="header" style={{width: '100%'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="nav-inner">
                            <nav className="navbar navbar-expand-lg">
                                {/* <a
                                    className="navbar-brand style3"
                                    href="index.html"
                                > */}
                                {/* <img
                                        src="assets/images/logo/logo.svg"
                                        alt="Logo"
                                    /> */}
                                <Logo />
                                {/* </a> */}
                                <button
                                    className={`navbar-toggler mobile-menu-btn ${activeMobileMenu ? 'active' : ''}`}
                                    onClick={() => toggleMobileMenu()}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded={activeMobileMenu}
                                    aria-label="Toggle navigation"

                                >
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <div
                                    className={`collapse navbar-collapse sub-menu-bar ${activeMobileMenu ? 'show' : ''}`}
                                    id="navbarSupportedContent"
                                >
                                    <ul id="nav" className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link
                                                href={"#body"}
                                                scroll={false}
                                                onClick={() => toggleMobileMenu()}
                                                // className="scroll-top"
                                                aria-label="Toggle navigation"
                                            >
                                                Início
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href={"#technologies"}
                                                scroll={false}
                                                onClick={() => toggleMobileMenu()}
                                                data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-1"
                                                aria-controls="navbarSupportedContent"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                Tecnologias
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href={"#services"}
                                                scroll={false}
                                                onClick={() => toggleMobileMenu()}
                                                data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-1"
                                                aria-controls="navbarSupportedContent"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                Serviços
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link
                                                href={"#service-details"}
                                                scroll={false}
                                                onClick={() => toggleMobileMenu()}
                                                data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-1"
                                                aria-controls="navbarSupportedContent"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                Detalhes
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href={"#newsletter"}
                                                scroll={false}
                                                onClick={() => toggleMobileMenu()}
                                                data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-1"
                                                aria-controls="navbarSupportedContent"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                Newsletter
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href={"#contact-us"}
                                                scroll={false}
                                                onClick={() => toggleMobileMenu()}
                                                data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-1"
                                                aria-controls="navbarSupportedContent"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                Contato
                                            </Link>
                                        </li>

                                        {/* <li className="nav-item">
                                            <a
                                                className=" dd-menu collapsed"
                                                href="#blog"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-4"
                                                aria-controls="navbarSupportedContent"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                Blog
                                            </a>
                                            <ul
                                                className="sub-menu collapse"
                                                id="submenu-1-4"
                                            >
                                                <li className="nav-item">
                                                    <a href="blog-grid-sidebar.html">
                                                        Blog Grid
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="blog-single.html">
                                                        Blog Post
                                                    </a>
                                                </li>
                                            </ul>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="button add-list-button">
                                    <Link
                                        href={"#contact-us"}
                                        scroll={false}
                                        className="btn"
                                    >
                                        Começar a vender
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
