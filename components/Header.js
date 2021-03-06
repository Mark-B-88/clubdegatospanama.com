import heroStyles from '../styles/Hero.module.scss'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function HeaderComponent(){
    return (
        <section className={heroStyles.hero} id='hero'>
            <div className={heroStyles.row}>
                <div className={heroStyles.col}>
            {/* <!-- mobile navbar --> */}
            <input type='checkbox' id={heroStyles.active} />
            <label htmlFor={heroStyles.active} className={heroStyles.menu_btn}>
                <FontAwesomeIcon icon={faBars} className={heroStyles.icon} />
            </label>
            <nav className={heroStyles.mobile__nav}>
                <ul className={heroStyles.menu}>
                    <li>
                        <Link href='home'>
                            <a>Inicio</a>
                        </Link>
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
                </ul>
            </nav>
            {/* <!-- end mobile navbar --> */}

            {/* <!-- desktop navbar --> */}
            <nav className={heroStyles.desktop__nav}>
                <ul>
                    <li>
                        <Link href='home'>Inicio</Link>
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