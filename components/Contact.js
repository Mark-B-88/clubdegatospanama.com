import contactStyles from '../styles/Contact.module.scss'

export default function ContactComponent(){
    return (
        <section className={contactStyles.contact} id='contact'>
            <div className={contactStyles.row}>
                <div className={contactStyles.col}>
                    <div className={contactStyles.contact__text}>
                        <h1>Contáctame</h1>
                        <p>
                            Recibo mensajes diario y les pido amablemente su paciencia.
                        </p>
                        <p>
                            Te responderé lo antes posible
                        </p>
                        <p>
                            Gracias
                        </p>
                    </div>
                </div>
                <div className={contactStyles.col}>
                    <div className={contactStyles.contact__form}>
                        <form>
                            <input type='text' placeholder='Nombre y Apellido' />
                            <input type='email' placeholder='Correo Electrónico' />
                            <textarea className={contactStyles.message} placeholder='Mensaje'></textarea>
                            <input className={contactStyles.contact__btn} type='button' value='Enviar Mensaje' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}