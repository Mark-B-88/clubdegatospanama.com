import React from "react";
import "../styles/Footer.scss";
import FooterLogo from "../assets/images/logos/site_logo.svg";

const FooterComponent = () => {
    const getFullYear = () => new Date().getFullYear()

    return (
        <footer className="footer" id="footer">
            <div className="row">
                <div className="col">
                    <p>Copyright &copy; {getFullYear()} | <span>Club De Gatos Panama</span></p>
                    <img src={FooterLogo} alt="footer-logo" />
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;