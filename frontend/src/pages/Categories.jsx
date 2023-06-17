import Navbar from '../components/Navbar/Navbar'
import Subheading from '../components/Subheading/Subheading'
import Bookcategories from '../components/Bookcategories/Bookcategories'
import Footer from '../components/Footer/Footer'


export default function Categories() {
    return (
        <div>
            <Navbar/>
            <Subheading text={"Categories"}/>
            <Bookcategories/>
            <Footer/>
        </div>
    )
}