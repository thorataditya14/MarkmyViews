import './Topbook.css';


export default function Topbook({ img, title, desc }) {
    return (
        <div className="topbook">
            <img className="topbook-img" src={img} alt={title} />
            <h4 className="topbook-title">
                {title}
            </h4>
            <p className="topbook-desc">
                {desc}
            </p>
        </div>
    )
}