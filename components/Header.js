import heroStyles from '../styles/Hero.module.scss'
import MobileNavbar from './Mobile-Navbar'
import DesktopNavbar from './Desktop-Navbar'

export default function HeaderComponent() {
    return (
        <section className={heroStyles.hero} id='hero'>
            <div className={heroStyles.row}>
                <div className={heroStyles.col}>
                    <MobileNavbar />
                    <DesktopNavbar />
                    <div className={heroStyles.hero__text}>
                        <div className={heroStyles.hero__box}>
                            <div className={heroStyles.hero__title}>
                                <h1>Club De Gatos Panama</h1>
                            </div>
                            <div className={heroStyles.hero_sub__title}>
                                <p>
                                    Somos un pequeño grupo dedicado a rescatar gatitos dentro de Panamá. Comenzamos este grupo con la intención de rescatar gatitos y adoptarlos en una familia amorosa.
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
    )
}