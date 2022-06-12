import HeaderComponent from '../components/Header'
import AboutComponent from '../components/About'
import QuestionsComponent from '../components/Questions'
import DonationsComponent from '../components/Donations'
// import BlogComponent from '../components/Blog'
import ContactComponent from '../components/Contact'
import FooterComponent from '../components/Footer'

export default function HomePage() {
    return (
    <>
    <div className='container'>
        <HeaderComponent />
        <AboutComponent />
        <QuestionsComponent />
        <DonationsComponent />
        {/* <BlogComponent /> */}
        <ContactComponent />
        <FooterComponent />
    </div>
    </>
    )
}