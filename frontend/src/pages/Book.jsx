import Navbar from "../components/Navbar/Navbar"
import Bookdetail from '../components/Bookdetail/Bookdetail'
import Footer from '../components/Footer/Footer'


export default function Book() {

    const book = {
        isbn: 9781259001567,
        title: "Computer Networks: A Top - Down Approach",
        author: "FOROUZAN",
        desc: "This new networking text follows a top-down approach. The presentation begins with anexplanation of the application layer, which makes it easier for students to understand how network devices work, and then moves on to discuss the other layers, ending withthe physical layer.",
        img: "https://images-na.ssl-images-amazon.com/images/I/51LA27H+70L._SX368_BO1,204,203,200_.jpg",
        categories: [],
        rating: 5,
    };


    return (
        <div>
            <Navbar />
            <Bookdetail book={book} />
            <Footer />
        </div>
    )
}