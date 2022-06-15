import aboutStyles from '../styles/About.module.scss'

export default function AboutComponent(){
    return (
        <section className={aboutStyles.about} id='about'>
            <div className={aboutStyles.row}>
                <div className={aboutStyles.col}>
                    <div className={aboutStyles.about__text}>
                        <h1>
                            Mi nombre es Verónica y aquí les contaré un poco sobre mi historia y cómo surgió el Club De Gatos De Panamá.
                        </h1>
                        <p>
                            En febrero de 2016, <strong>Bigo</strong> entró en mi vida, tomó nuestra casa como suya y se adoptó a sí misma, poco a poco fuimos &apos;gatificando&lsquo; nuestra casa por su seguridad y comodidad. A veces le gustaba callejear pero poco a poco se acostumbró a su vida hogareña. A pesar de haber crecido en la calle, <strong>Bigo</strong> tenía las cualidades de una estrella y creamos un Instagram para compartir su día a día.
                        </p>
                        
                        <p>
                            <strong>Bigo</strong> fue la reina de la casa durante un año y luego llegó <strong>Colita</strong> para obligarla a compartir el trono. <strong>Colita</strong> llegó a nuestra casa en 2017. Decidimos esterilizarla para darla en adopción, pero el destino decidió que Colita sería parte de nuestra familia, ¡y te podemos asegurar que dos gatos son mejor que uno!
                        </p>

                        <p>
                            <strong><em>En 2018</em></strong>, luego de haber pasado por muchos momentos difíciles, tratando de crear conciencia por la seguridad y rescate de gatitos en nuestro país, decidimos crear el Club De Gatos De Panamá, con la idea de realizar charlas y compartir conocimientos con la comunidad para el bienestar de los gatitos. A través de nuestras redes sociales también compartimos casos vulnerables, rifas para recaudar fondos para cubrir esterilizaciones.
                        </p>
                    </div>
                </div>

                <div className={aboutStyles.col}>
                    <div className={aboutStyles.about__image}>
                        <div className={aboutStyles.about__image__container}>
                            <div className={aboutStyles.image__container__image}>
                                <img 
                                    src='/images/cats/bigo.jpg'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={aboutStyles.row}>
                <div className={aboutStyles.col}>
                    <div className={aboutStyles.about__image__2}>
                        <div className={aboutStyles.about__image__container}>
                            <div className={aboutStyles.image__container__image}>
                                <img 
                                    src='/images/cats/colita.jpg'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={aboutStyles.col}>
                    <div className={aboutStyles.about__text}>
                        <p>
                            <strong><em>En 2020</em></strong>, con el inicio de la pandemia, los casos de abandono y maltrato superaron las tasas que vimos anteriormente y por mucho esfuerzo que se hiciera, no pudimos ver la luz al final del túnel. Fueron meses difíciles, con poca comida para los gatitos y sin aportes pero nunca perdimos las ganas de ayudar, por eso en agosto de 2020 se abrió un nuevo capítulo en la historia del club. Recibimos a Mia y Cami en nuestra casa, dos gatitas de un mes rescatadas de las tristes calles de Panamá Viejo.
                        </p>
                        <p>
                            Su estadía sería temporal por una semana hasta que su familia adoptiva estuviera lista para recibirlos, pero nuevamente el destino tenía otros planes y la adopción no pudo concretarse. Aunque no teníamos un lugar ideal para ellas en nuestra casa, decidimos que se quedarían con nosotros hasta que encontraran su hogar. Unos días después, una mami con un gran corazón las recibió. Quedamos tan contentos con esta adopción que decidimos seguir recibiendo gatitos para darles terapia de amor, comida deliciosa y llevarlos a esterilizar y además unirlos con su familia, y para lograrlo tuvimos que construir sus propias suites. Son pequeñas, pero llenos de amor, juguetes y calidez.
                        </p>
                        <p>
                            <strong><em>En febrero de 2021</em></strong>, creamos el <strong>Bigotel</strong>, con el paso del tiempo hemos logrado adecuar un espacio especial para brindar alojamiento a los gatitos de las familias y amigos de la <strong>Bigo</strong>, para que tengan una segunda vivienda mientras sus familiares están de vacaciones. Tenemos muchos planes para el futuro que compartiremos con ustedes más adelante, pero una cosa es cierta, nuestro futuro seguirá lleno de gatitos y seguiremos creando conciencia para prevenir el abandono y el abuso y lograr más rescates de gatitos en Panamá.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}