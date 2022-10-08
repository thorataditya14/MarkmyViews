import './Bookcategory.css';


export default function Bookcategory({ img, title, desc }) {
    return (
        <div className="bookcategory">
            <img className="bookcategory-img" src={img} alt={title} />
            <h4 className="bookcategory-title">
                {title}
            </h4>
        </div>
    )
}