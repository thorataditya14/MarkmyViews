import Navbar from '../components/Navbar/Navbar'
import Title from '../components/Title/Title'
import Slider from '../components/Slider/Slider'
import Features from '../components/Features/Features'
import Heading from '../components/Heading/Heading'
import Subheading from '../components/Subheading/Subheading'
import Topbooks from '../components/Topbooks/Topbooks'
import Footer from '../components/Footer/Footer'


export default function Home() {
    return (
        <div>
            <Navbar/>
            <Title/>
            <Slider/>
            <Heading text={"Features"}/>
            <Features/>
            <Heading text={"Top Books"}/>
            <Subheading text={"Fiction"}/>
            <Topbooks/>
            <Subheading text={"Adventure"}/>
            <Topbooks/>
            <Subheading text={"Non Fiction"}/>
            <Topbooks/>
            <Footer/>
        </div>
    )
}