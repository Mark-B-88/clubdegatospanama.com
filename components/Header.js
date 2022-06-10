import heroStyles from '../styles/Hero.module.scss'
import Link from 'next/link'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function HeaderComponent(){
    return (
        <section className={heroStyles.hero} id='hero'>
            <div className={heroStyles.row}>
                <div className={heroStyles.col}>
            {/* <!-- mobile navbar --> */}
            <input type='checkbox' id='active' />
            <label htmlFor='active' className={heroStyles.menu_btn}>
                {/* <FontAwesomeIcon icon={solid('fa-solid fa-bars')} /> */}
                {/* <i className='fas fa-bars'></i> */}
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

                    <li>
                        <Link href='blog'>
                            <a>Blog</a>
                        </Link>
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
    )
}