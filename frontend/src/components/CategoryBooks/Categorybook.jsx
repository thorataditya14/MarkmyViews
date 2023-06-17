import './Categorybook.css';


export default function Categorybook({ imgurl, title, authors, desc }) {
    return (
        <div className="categorybook">
            <img className="categorybook-img" src={imgurl} alt={title} />
            <h4 className="categorybook-title">
                {title}
            </h4>
            <h5 className="categorybook-authors">
                {authors}
            </h5>
        </div>
    )
}