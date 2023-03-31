import React from 'react'
import heroStyles from '../styles/Hero.module.scss'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function MobileNavbar() {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)

    return (
        <>
            <div className={heroStyles.menu_btn} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className={heroStyles.icon} />
            </div>
            <nav
                className={heroStyles.mobile__nav}
                style={{
                    clipPath: menuOpen
                        ? 'circle(100%)'
                        : 'circle(25px at calc(100% - 45px) 45px)',
                    background: menuOpen ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
                }}
            >
                <ul className={heroStyles.menu}>
                    <li onClick={closeMenu}>
                        <Link href='/'><a>Inicio</a></Link>
                    </li>

                    <li onClick={closeMenu}>
                        <a href='#about'>Sobre Nosotros</a>
                    </li>

                    <li onClick={closeMenu}>
                        <a href='#questions'>¿Preguntas?</a>
                    </li>

                    <li onClick={closeMenu}>
                        <a href='#donations'>Donaciones</a>
                    </li>

                    <li onClick={closeMenu}>
                        <a href='#contact'>Contáctame</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}