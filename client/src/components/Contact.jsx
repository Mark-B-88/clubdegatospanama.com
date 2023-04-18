import React from "react";
import "../styles/Contact.scss";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [recaptchaVerified, setRecaptchaVerified] = React.useState(false);
    const recaptchaRef = React.useRef(null);

    const handleRecaptchaChange = () => setRecaptchaVerified(true);

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!recaptchaVerified) {
            alert("Por favor, verifique el ReCAPTCHA");
            return;
        };

        const body = { name, email, message };

        if (!body.name || !body.email || !body.message) {
            alert("Por favor complete todos los campos");
            return;
        };

        if (message.length < 10) {
            alert("El mensaje debe tener al menos 10 caracteres");
            return;
        };

        if (message.includes("<script>")) {
            alert("El mensaje no puede contener etiquetas de script");
            setMessage("");
            return;
        };

        if (message.includes("<")) {
            body.message = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        };

        axios.post("/api/v1/contact", body, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            alert("Email enviado")
            return res;
        }).catch((err) => {
            alert("Error al enviar correo electrónico")
        });

        if (!name || !email || !message) {
            alert("Por favor complete todos los campos");
            return;
        } else {
            setName("");
            setEmail("");
            setMessage("");
            setRecaptchaVerified(false);
            recaptchaRef.current.reset();
            return;
        };
    }

    return (
        <section className="contact" id="contact">
            <div className="row">
                <div className="col">
                    <div className="contact__text">
                        <h1>Contáctame</h1>
                        <p>
                            Recibo mensajes diario y les pido amablemente su paciencia.<br />Te responderé lo antes posible.<br />Gracias
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="contact__form">
                        <form>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre y Apellido"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo Electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                type="text"
                                name="message"
                                placeholder="Mensaje"
                                className="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                            <div className="recaptcha">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    className="g-recaptcha"
                                    sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY}
                                    onChange={handleRecaptchaChange}
                                />
                            </div>
                            <input
                                type="submit"
                                onClick={(e) => handleSubmit(e)}
                                className="contact__btn"
                                value="Enviar Mensaje"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;