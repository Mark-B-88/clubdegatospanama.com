import footerStyles from '../styles/Footer.module.scss'

export default function FooterComponent(){
    return (
        <footer className={footerStyles.footer} id='footer'>
            <p>Copyright &copy; 2022 | <span>Club De Gatos Panama</span></p>
        </footer>
    )
}