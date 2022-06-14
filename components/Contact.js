import { useState } from 'react'
import contactStyles from '../styles/Contact.module.scss'

export default function ContactComponent(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault()
        let data = {
            name,
            email,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(data)
            }).then((res) => {

            if(res.status === 200){
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
                alert('¡Mensaje enviado!')
            }
        })
    }

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
                            <input 
                                type='text'
                                name='name'
                                placeholder='Nombre y Apellido'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                            />
                            <input 
                                type='email'
                                name='email'
                                placeholder='Correo Electrónico'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                type='text'
                                name='message'
                                placeholder='Mensaje'
                                className={contactStyles.message} 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                ></textarea>
                            <input 
                                type='submit'
                                onClick={(e) => handleSubmit(e)} 
                                className={contactStyles.contact__btn} 
                                value='Enviar Mensaje' 
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}