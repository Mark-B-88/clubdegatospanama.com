import React from "react";
import "../styles/Hero.scss";
import { Link } from "react-router-dom";

const DesktopNavbar = () => {
    const [showScrollToTop, setShowScrollToTop] = React.useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        currentScrollY > windowHeight ? setShowScrollToTop(true) : setShowScrollToTop(false);
    }

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            <nav className="desktop__nav">
                <ul>
                    <li>
                        <Link to="/" onClick={scrollToTop}>Inicio</Link>
                    </li>

                    <li>
                        <a href="#about">Sobre Nosotros</a>
                    </li>

                    <li>
                        <a href="#questions">¿Preguntas?</a>
                    </li>

                    <li>
                        <a href="#donations">Donaciones</a>
                    </li>

                    <li>
                        <a href="#contact">Contáctame</a>
                    </li>
                </ul>
            </nav>
            {showScrollToTop && (
                <button className="scrollToTop" onClick={scrollToTop} title="Scroll to top">
                    &#8593;
                </button>
            )}
        </>
    );
};

export default DesktopNavbar;