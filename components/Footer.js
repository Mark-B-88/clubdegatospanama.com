import footerStyles from '../styles/Footer.module.scss'

export default function FooterComponent() {
    const getFullYear = () => new Date().getFullYear()

    return (
        <footer className={footerStyles.footer} id='footer'>
            <div className={footerStyles.row}>
                <div className={footerStyles.col}>
                    <p>Copyright &copy; {getFullYear()} | <span>Club De Gatos Panama</span></p>
                    <img src='/images/logos/site_logo.svg' />
                </div>
            </div>
        </footer>
    )
}