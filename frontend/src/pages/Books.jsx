import Navbar from "../components/Navbar/Navbar"
import Subheading from '../components/Subheading/Subheading'
import CategoryBooks from '../components/CategoryBooks/CategoryBooks'
import Footer from '../components/Footer/Footer'
import { useLocation } from "react-router-dom";


export default function Books({cat, title}) {
    

    const location = useLocation();
    const category = location.pathname.split('/')[2];

    return (
        <div>
            <Navbar/>
            <Subheading text={title || "All Books"}/>
            <CategoryBooks category={category}/>
            <Footer/>
        </div>
    )
}