import './Subheading.css';


export default function Subheading({text}) {
    return (
        <div className="subheading">
            <h1 className='subheading-text'>
                {text}
            </h1>
        </div>
    )
}