import heroStyles from '../styles/Hero.module.scss'
import Link from 'next/link'

export default function DesktopNavbar() {
    return (
        <>
            {/* <!-- desktop navbar --> */}
            <nav className={heroStyles.desktop__nav}>
                <ul>
                    <li>
                        <Link href='/'>Inicio</Link>
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
        </>
    )
}