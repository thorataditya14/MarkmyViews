import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Slider from '../components/Slider'
import Features from '../components/Features'
import Topbooks from '../components/Topbooks'
import Footer from '../components/Footer'


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