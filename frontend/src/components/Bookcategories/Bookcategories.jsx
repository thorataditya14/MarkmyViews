import './Bookcategories.css';
import Bookcategory from './Bookcategory'
import { topbooks } from '../../data';


export default function Bookcategories() {
    return (
        <div className="bookcategories">



            {topbooks.map((item, index) => (
                <Bookcategory
                    key={item.id}
                    img={item.img}
                    title={item.title}
                />
            ))}

            {/* <Subheading text={"Features"}/> */}
            {/* <Subheading text={"Fiction"}/> */}
            {/* <Subheading text={"Adventure"}/> */}
            {/* <Subheading text={"Non Fiction"}/> */}
            
        </div>
    )
}