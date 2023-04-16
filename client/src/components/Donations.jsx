import React from "react";
import "../styles/Donations.scss";
import Computer_Cat from "../assets/images/cats/computer_cat.jpg";
import Yappy_Logo from "../assets/images/logos/yappy-logo.png";

const DonationsComponent = () => {
    return (
        <section className="donations" id="donations">
            <div className="row">
                <div className="col">
                    <div className="donations__text">
                        <h1>Donaciones</h1>
                        <p>
                            Estamos muy agradecidos por su apoyo. Puedes apoyarnos con tu donación a través de Yappy.<br /><br />Una pequeña donación contribuye en gran medida a la salud y el bienestar de un gatito, y agradeceríamos mucho cualquier donación que puedas hacer.
                        </p>
                        <img
                            src={Yappy_Logo}
                            alt="yappy-logo"
                            className="logo_img"
                        />
                        <p>Veronica | +507-6025-7919</p>
                    </div>
                </div>
                <div className="col">
                    <div className="donations__image">
                        <img
                            src={Computer_Cat}
                            alt="computer-cat"
                            className="computer_img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonationsComponent;