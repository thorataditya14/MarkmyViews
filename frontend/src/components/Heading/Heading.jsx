import './Heading.css';


export default function Heading({text}) {
    return (
        <div className="heading">
            <div className="left-line"></div>
            <h1 className='heading-text'>
                {text}
            </h1>
            <div className="right-line"></div>
        </div>
    )
}