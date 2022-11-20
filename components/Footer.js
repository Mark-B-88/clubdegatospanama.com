import footerStyles from '../styles/Footer.module.scss'

export default function FooterComponent(){
    return (
        <footer className={footerStyles.footer} id='footer'>
            <div className={footerStyles.row}>
                <div className={footerStyles.col}>
                    <p>Copyright &copy; 2022 | <span>Club De Gatos Panama</span></p>
                    <img src='/images/logos/site_logo.svg' />
                </div>
            </div>
        </footer>
    )
}