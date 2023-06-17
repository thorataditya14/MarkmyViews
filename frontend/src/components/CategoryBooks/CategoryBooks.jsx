import './Categorybooks.css';
import Categorybook from './Categorybook'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from '../../requestMethods';

export default function Categorybooks({ category }) {
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        const getBooksData = async () => {
            try {
                const res = category
                    ? await publicRequest.get(`/books/get-books?categories=${category}`)
                    : await publicRequest.get(`/books/get-books`)
                console.log(res.data)
                setBooksData(res.data);
            } catch (err) { }
        };
        getBooksData();
    }, [category]);



    return (
        <div className="categorybooks">
            {booksData.map((book, index) => (
                <Link to={"/books/" + book._id}>
                    <Categorybook
                        key={book._id}
                        isbn={book.isbn}
                        title={book.title}
                        authors={book.authors}
                        desc={book.desc}
                        imgurl={book.imgurl}
                        categories={book.categories}
                    />
                </Link>
            ))}
        </div>
    )
}