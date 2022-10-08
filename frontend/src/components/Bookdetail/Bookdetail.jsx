import './Bookdetail.css';


export default function Bookdetail({ book }) {
    return (
        <div className="bookdetail">
            <div className="book-container-img">
                <img className="book-img" src={book.img} alt={book.title} />
            </div>

            <div className="book-container-details">
                <h1 className="bookdetail-title">
                    {book.title}
                </h1>
                <p className="bookdetail-desc">
                    {book.desc}
                </p>
            </div>

        </div>
    )
}