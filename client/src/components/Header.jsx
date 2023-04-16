import React from "react";
import "../styles/Hero.scss";
import MobileNavbar from "./Mobile-Navbar";
import DesktopNavbar from "./Desktop-Navbar";

const HeaderComponent = () => {
    return (
        <section className="hero" id="hero">
            <div className="row">
                <div className="col">
                    <MobileNavbar />
                    <DesktopNavbar />
                    <div className="hero__text">
                        <div className="hero__box">
                            <div className="hero__title">
                                <h1>Club De Gatos Panama</h1>
                            </div>
                            <div className="hero_sub__title">
                                <p>
                                    Somos un pequeño grupo dedicado a rescatar gatitos dentro de Panamá. Comenzamos este grupo con la intención de rescatar gatitos y adoptarlos en una familia amorosa.
                                </p>
                            </div>
                            <button className="hero__btn">
                                <a href="#about">Lee mas</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderComponent;