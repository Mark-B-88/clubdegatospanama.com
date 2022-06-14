import donationsStyles from '../styles/Donations.module.scss'

export default function DonationsComponent(){
    return (
        <section className={donationsStyles.donations} id='donations'>
            <div className={donationsStyles.row}>
                <div className={donationsStyles.col}>
                    <div className={donationsStyles.donations__text}>
                        <h1>Donaciones</h1>
                        <h3>
                            Una pequeña donación contribuye en gran medida a la salud y el bienestar de un gatito, y agradeceríamos mucho cualquier donación que puedas hacer.
                        </h3>
                        <p>
                            Estamos muy agradecidos por su apoyo. Puedes apoyarnos con tu donación a través de Yappy.
                        </p>
                        <img
                            src='/images/logos/yappy-logo.png' 
                            alt='yappy' 
                            className={donationsStyles.logo_img}
                        />
                        <p>Veronica | +507-6025-7919</p>
                    </div>
                </div>
                <div className={donationsStyles.col}>
                    <div className={donationsStyles.donations__image}>
                        <img
                            src='/images/cats/computer_cat.jpg' 
                            alt='computer-cat' 
                            className={donationsStyles.computer_img}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}