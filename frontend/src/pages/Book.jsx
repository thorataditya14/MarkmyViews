import Navbar from "../components/Navbar/Navbar"
import Bookdetail from '../components/Bookdetail/Bookdetail'
import Footer from '../components/Footer/Footer'
import { useLocation } from "react-router-dom";


export default function Book() {
    const location = useLocation();
    const bookid = location.pathname.split('/')[2];

    return (
        <div>
            <Navbar />
            <Bookdetail bookid={bookid} />
            <Footer />
        </div>
    )
}