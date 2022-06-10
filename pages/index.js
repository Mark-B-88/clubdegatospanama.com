import Image from 'next/image'

import heroStyles from '../styles/Hero.module.scss'
import aboutStyles from '../styles/About.module.scss'
import questionsStyles from '../styles/Questions.module.scss'
import donationsStyles from '../styles/Donations.module.scss'
import contactStyles from '../styles/Contact.module.scss'
import footerStyles from '../styles/Footer.module.scss'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Home() {
    return (
    <>
    <div className='container'>
    {/* <!-- header section --> */}
    <section className={heroStyles.hero} id='hero'>
        <div className={heroStyles.row}>
            <div className={heroStyles.col}>
        {/* <!-- mobile navbar --> */}
        <input type='checkbox' id='active' />
        <label for='active' className={heroStyles.menu_btn}>
            {/* <FontAwesomeIcon icon={solid('fa-solid fa-bars')} /> */}
            {/* <i className='fas fa-bars'></i> */}
        </label>
        <nav className={heroStyles.mobile__nav}>
            <ul className={heroStyles.menu}>
                <li>
                    <a href='./index.html'>Inicio</a>
                </li>

                <li>
                    <a href='#about'>Sobre Nosotros</a>
                </li>

                <li>
                    <a href='#questions'>¿Preguntas?</a>
                </li>

                <li>
                    <a href='#donations'>Donaciones</a>
                </li>

                <li>
                    <a href='#contact'>Contáctame</a>
                </li>

                <li>
                    <a href='./blog.html'>Blog</a>
                </li>
            </ul>
        </nav>
        {/* <!-- end mobile navbar --> */}

        {/* <!-- desktop navbar --> */}
        <nav className={heroStyles.desktop__nav}>
            <ul>
                <li>
                    <a href='./index.html'>Inicio</a>
                </li>

                <li>
                    <a href='#about'>Sobre Nosotros</a>
                </li>

                <li>
                    <a href='#questions'>¿Preguntas?</a>
                </li>

                <li>
                    <a href='#donations'>Donaciones</a>
                </li>

                <li>
                    <a href='#contact'>Contáctame</a>
                </li>

                <li>
                    <a href='./blog.html'>Blog</a>
                </li>
            </ul>
        </nav>
        {/* <!-- end desktop navbar --> */}
                <div className={heroStyles.hero__text}>
                    <div className={heroStyles.hero__box}>
                        <div className={heroStyles.hero__title}>
                            <h1>Club De Gatos Panama</h1>
                        </div>
                        <div className={heroStyles.hero_sub__title}>
                            <p>
                                Somos un pequeño grupo dedicado a rescatar gatitos dentro de Panamá. Comenzamos este grupo con la intención de rescatar gatitos y adoptarlos en una familia amorosa. Una pequeña donación contribuye en gran medida a la salud y el bienestar de un gatito, y agradeceríamos mucho cualquier donación que puedas hacer.
                            </p>
                        </div>
                        <button className={heroStyles.hero__btn}>
                            <a href='#about'>Lee mas</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- about us section --> */}
    <section className={aboutStyles.about} id='about'>
        <div className={aboutStyles.row}>
            <div className={aboutStyles.col}>
                <div className={aboutStyles.about__text}>
                    <h1>
                        Mi nombre es Verónica y aquí les contaré un poco sobre mi historia y cómo surgió el Club De Gatos De Panamá.
                    </h1>
                    <p>
                        En febrero de 2016, <strong>Bigo</strong> entró en mi vida, tomó nuestra casa como suya y se adoptó a sí misma, poco a poco fuimos &apos;gatificando&lsquo; nuestra casa por su seguridad y comodidad. A veces le gustaba la callejear pero se acostumbró a su vida hogareña. A pesar de haber crecido en la calle, <strong>Bigo</strong> tenía los ingredientes de una estrella y creamos un Instagram para compartir su día a día.
                    </p>
                    <p>
                        <strong>Bigo</strong> fue la reina de la casa durante un año y luego llegó <strong>Colita</strong> para obligarla a compartir el trono. <strong>Colita</strong> llegó a nuestra casa en 2017. Decidimos esterilizarla de ella para darla en adopción, pero el destino decidió que Colita sería parte de nuestra familia, ¡y te podemos asegurar que dos gatos son mejor que uno!
                    </p>
                </div>
            </div>

            <div className={aboutStyles.col}>
                <div className={aboutStyles.about__image}>
                    <Image 
                        src='/images/cats/bigo.jpg' 
                        alt='about-cat'
                        width={540}
                        height={360}
                        className={aboutStyles.about__image__img}
                    />
                </div>
            </div>
        </div>
        <div className={aboutStyles.row}>
            <div className={aboutStyles.col}>
                <div className={aboutStyles.about__image}>
                    <Image 
                        src='/images/cats/colita.jpg' 
                        alt='about-cat-2' 
                        width={540}
                        height={360}
                        className={aboutStyles.about__image__img}
                    />
                </div>
            </div>

            <div className={aboutStyles.col}>
                <div className={aboutStyles.about__text}>
                    <p>
                        <strong><em>En 2018</em></strong>, luego de haber pasado por muchos momentos difíciles, tratando de crear conciencia por la seguridad y rescate de gatitos en nuestro país, decidimos crear el Club De Gatos De Panamá, con la idea de realizar charlas y compartir conocimientos con la comunidad para el bienestar de los gatitos. A través de nuestras redes sociales también compartimos casos vulnerables, rifas para recaudar fondos para cubrir esterilizaciones.
                    </p>
                    <p>
                        <strong><em>En 2020</em></strong>, con el inicio de la pandemia, los casos de abandono y maltrato superaron las tasas que vimos anteriormente y por mucho esfuerzo que se hiciera, no pudimos ver la luz al final del túnel. Fueron meses difíciles, con poca comida para los gatitos y sin aportes pero nunca perdimos las ganas de ayudar, por eso en agosto de 2020 se abrió un nuevo capítulo en la historia del club. Recibimos a Mia y Cami en nuestra casa, dos gatitos de un mes rescatados de las tristes calles de Panamá Viejo.
                    </p>
                    <p>
                        Su estadía sería temporal por una semana hasta que su familia adoptiva estuviera lista para recibirlos, pero nuevamente el destino tenía otros planes y la adopción no pudo concretarse. Aunque no teníamos un lugar ideal para ellos en nuestra casa, decidimos que se quedarían con nosotros hasta que encontraran su hogar. Unos días después, una mami con un gran corazón los recibió. Quedamos tan contentos con esta adopción que decidimos seguir recibiendo gatitos para darles terapia de amor, comida deliciosa y llevarlos a esterilizar y además unirlos con su familia, y para lograrlo tuvimos que construir sus propias suites. Son pequeños, pero llenos de amor, juguetes y calidez.
                    </p>
                    <p>
                        <strong><em>En febrero de 2021</em></strong>, creamos el Bigotel, con el paso del tiempo hemos logrado adecuar un espacio especial para brindar alojamiento a los gatitos de las familias y amigos del BIgo, para que tengan una segunda vivienda mientras sus familiares están de vacaciones. Tenemos muchos planes para el futuro que compartiremos contigo más adelante, pero una cosa es cierta, nuestro futuro seguirá lleno de gatitos y seguiremos creando conciencia para prevenir el abandono y el abuso y lograr más rescates de gatitos.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- frequent questions --> */}
    <section className={questionsStyles.questions} id='questions'>
        <div className={questionsStyles.row}>
            <div className={questionsStyles.col}>
                <div className={questionsStyles.questions__text}>
                    <h1>Preguntas frecuentes</h1>
                    <div className={questionsStyles.questions__underline}></div>
                    <h3>¿Cobramos por adopciones? Vendemos gatos?</h3>
                    <p>
                        No vendemos gatos. La recuperación de un gatito sin hogar genera gastos, por lo que se solicita una donación simbólica de $15. Este se destina a los costos de una esterilización si el adoptante desea vacunar al gatito debe aportar $10 que es el costo de la vacuna.
                    </p>
                    <div className={questionsStyles.questions__underline}></div>

                    <h3>¿Le pagan por lo que hace?</h3>
                    <p>
                        Por supuesto no. En la mayoría de los casos tenemos que pagar muchos gastos nosotros mismos y luego pedimos ayuda. No recibimos ayuda de ninguna entidad gubernamental. Nuestros seguidores nos apoyan con donaciones en forma de comida o dinero en efectivo. Tenemos muchos gastos, que incluyen transporte, alimentación, esterilizaciones, emergencias veterinarias, artículos de limpieza, medicinas, leche para bebés, etc. Por eso intentamos hacer un sorteo para cubrir gastos o pedimos la ayuda de nuestros seguidores.
                    </p>
                    <div className={questionsStyles.questions__underline}></div>

                    <h3>¿Se esterilizan los machos o solo las hembras?</h3>
                    <p>
                        Esterilizamos a ambos, sin embargo, las hembras tienen prioridad sobre los machos para evitar peleas o enfermedades entre ellos.
                    </p>
                    <div className={questionsStyles.questions__underline}></div>

                    <h3>¿Dónde puedo llevar un gato que encontré?</h3>
                    <p>
                        Desafortunadamente, no hay ningún lugar donde puedas llevarlos. Recomendamos ayudarlos si puede, hasta que puedan encontrar un hogar. Aunque puedes llevarlos a un veterinario, no hay muchos grupos en Panamá que rescaten gatitos. Esta es parte de la razón por la que comenzamos este grupo.
                    </p>
                    <div className={questionsStyles.questions__underline}></div>

                    <h3>¿Por qué se les marca la oreja cuando se esterilizan?</h3>
                    <p>
                        Para saber que han sido esterilizados.
                    </p>
                    <div className={questionsStyles.questions__underline}></div>

                    <h3>¿Los gatitos están esterilizados?</h3>
                    <p>
                        Sí, todos nuestros gatitos que están en adopción están esterilizados y desparasitados. La vacuna depende de si tenemos un patrocinador que puede pagarla o el adoptante.
                    </p>
                    <div className={questionsStyles.questions__underline}></div>

                    <h3>¿Qué hago en caso de una emergencia médica?</h3>
                    <p>
                        A la hora de adoptar un gatito debes tener en cuenta las responsabilidades que esto genera, en definitiva, debes tener un veterinario cerca o el número de teléfono de uno que esté a tu alcance.
                    </p>
                    <div className={questionsStyles.questions__underline}></div>

                    <h3>¿Cuánto tiempo hasta que reciba a mi gatito?</h3>
                    <p>
                        Una vez que tenga sus suministros principales, arena, caja de arena, comida, paté, etc. y el gatito esté esterilizado, lo llevamos a su casa.
                    </p>
                    <div className={questionsStyles.questions__underline}></div>

                    <h3>¿Me pueden “guardar” el gatito un mes ?</h3>
                    <p>
                        No, las adopciones son a corto plazo, no &apos;guardamos ni reservamos gatitos &lsquo;.
                    </p>
                    <div className={questionsStyles.questions__underline}></div>

                </div>
            </div>
        </div>
    </section>

    {/* <!-- donations --> */}
    <section className={donationsStyles.donations} id='donations'>
        <div className={donationsStyles.row}>
            <div className={donationsStyles.col}>
                <div className={donationsStyles.donations__text}>
                    <h1>Donaciónes</h1>
                    <h3>
                        Estamos muy agradecidos por su apoyo. Puedes apoyarnos con tu donación a través de Yappy.
                    </h3>
                    <Image 
                        src='/images/logos/yappy-logo.png' 
                        alt='yappy' 
                        width={540}
                        height={180}
                        className={donationsStyles.logo_img}
                    />
                    <p>Veronica | +507-6030-3455</p>
                </div>
            </div>
            <div className='col'>
                <div className={donationsStyles.donations__image}>
                    <Image 
                        src='/images/cats/computer_cat.jpg' 
                        alt='computer-cat' 
                        width={720}
                        height={540}
                        className={donationsStyles.computer_img}
                    />
                </div>
            </div>
        </div>
    </section>

    {/* <!-- contact section --> */}
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

    {/* <!-- footer --> */}
    <footer className={footerStyles.footer} id='footer'>
        <p>Copyright &copy; 2022 | <span>Club De Gatos Panama</span></p>
    </footer>

    </div>
    </>
    )
}