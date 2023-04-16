import React from "react";
import "../styles/Hero.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <div className="menu_btn" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className="icon" />
            </div>
            <nav
                className="mobile__nav"
                style={{
                    clipPath: menuOpen
                        ? "circle(100%)"
                        : "circle(25px at calc(100% - 45px) 45px)",
                    background: menuOpen ? "rgba(0, 0, 0, 0.9)" : "transparent",
                }}
            >
                <ul className="menu">
                    <li onClick={closeMenu}>
                        <Link href="/">Inicio</Link>
                    </li>

                    <li onClick={closeMenu}>
                        <a href="#about">Sobre Nosotros</a>
                    </li>

                    <li onClick={closeMenu}>
                        <a href="#questions">¿Preguntas?</a>
                    </li>

                    <li onClick={closeMenu}>
                        <a href="#donations">Donaciones</a>
                    </li>

                    <li onClick={closeMenu}>
                        <a href="#contact">Contáctame</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default MobileNavbar;