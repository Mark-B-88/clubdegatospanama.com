import { useState } from 'react'
import contactStyles from '../styles/Contact.module.scss'
import axios from 'axios'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const body = { name, email, message }

        if (!body.name || !body.email || !body.message) {
            alert('Por favor complete todos los campos')
            return
        }

        if (message.length < 10) {
            alert('El mensaje debe tener al menos 10 caracteres')
            return
        }

        // disable script tags
        if (message.includes('<script>')) {
            alert('El mensaje no puede contener etiquetas de script')
            setMessage('')
            return
        }

        // if message contains html, convert to text
        if (message.includes('<')) {
            body.message = message.replace(/</g, '&lt;').replace(/>/g, '&gt;')
        }

        axios.post('/api/contact', body, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                alert('Email enviado')
            })
            .catch((err) => {
                alert('Error al enviar correo electrónico')
            })

        if (!name || !email || !message) {
            alert('Por favor complete todos los campos')
            return
        } else {
            setName('')
            setEmail('')
            setMessage('')
            return
        }
    }

    return (
        <section className={contactStyles.contact} id='contact'>
            <div className={contactStyles.row}>
                <div className={contactStyles.col}>
                    <div className={contactStyles.contact__text}>
                        <h1>Contáctame</h1>
                        <p>
                            Recibo mensajes diario y les pido amablemente su paciencia.<br />Te responderé lo antes posible.<br />Gracias
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