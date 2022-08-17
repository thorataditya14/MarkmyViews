import Navbar from '../components/Navbar/Navbar'
import Title from '../components/Title/Title'
import Slider from '../components/Slider/Slider'
import Features from '../components/Features/Features'
import Topbooks from '../components/Topbooks/Topbooks'
import Footer from '../components/Footer/Footer'


export default function Home() {
    return (
        <div>
            <Navbar/>
            <Title/>
            <Slider/>
            <Features/>
            <Topbooks/>
            <Footer/>
        </div>
    )
}