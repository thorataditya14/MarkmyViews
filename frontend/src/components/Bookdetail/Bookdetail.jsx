import './Bookdetail.css';
import Reviews from '../Reviews/Reviews'
import { useState, useEffect } from "react";
import { publicRequest } from "../../requestMethods";


export default function Bookdetail({ bookid }) {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        const getBookData = async () => {
            try {
                const res = await publicRequest.get(`/books/get-book/${bookid}`)
                setBookData(res.data);
            } catch (err) { }
        };

        getBookData();
    }, [bookid]);


    return (
        <div className="bookdetail">
            <div className="book-container-img">
                <img className="book-img" src={bookData.imgurl} alt={bookData.title} />
            </div>
            <div className="book-container-details">
                <div className="right-top">
                    <h1 className="bookdetail-title">
                        {bookData.title}
                    </h1>
                </div>
                <div className="right-mid">
                    <div className="bookdetail-isbn">
                        ISBN: {bookData.isbn}
                    </div>
                    <div className="bookdetail-authors">
                        Authors: {bookData.authors}
                    </div>
                    <div className="bookdetail-desc">
                        <h3 className='bookdetail-desc-head'>
                            Description
                        </h3>
                        <p className='bookdetail-desc-body'>
                            {bookData.desc}
                        </p>
                    </div>
                </div>
                <div className="right-bottom">
                    <h3 className='bookdetail-reviews-head'>
                        Reviews
                    </h3>
                    <Reviews bookid={bookid} />
                </div>
            </div>
        </div>
    )
}


// isbn
// title
// authors
// desc
// imgurl
// categories