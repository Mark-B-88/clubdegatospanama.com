import donationsStyles from '../styles/Donations.module.scss'
import Image from 'next/image'

export default function DonationsComponent(){
    return (
        <section className={donationsStyles.donations} id='donations'>
            <div className={donationsStyles.row}>
                <div className={donationsStyles.col}>
                    <div className={donationsStyles.donations__text}>
                        <h1>Donaciónes</h1>
                        <h3>
                            Estamos muy agradecidos por su apoyo. Puedes apoyarnos con tu donación a través de Yappy.
                        </h3>
                        {/* <Image 
                            src='/images/logos/yappy-logo.png' 
                            alt='yappy' 
                            width={540}
                            height={180}
                            className={donationsStyles.logo_img}
                        /> */}
                        <p>Veronica | +507-6030-3455</p>
                    </div>
                </div>
                <div className='col'>
                    <div className={donationsStyles.donations__image}>
                        {/* <Image 
                            src='/images/cats/computer_cat.jpg' 
                            alt='computer-cat' 
                            width={720}
                            height={540}
                            className={donationsStyles.computer_img}
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}