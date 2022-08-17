import './Topbooks.css';
import Topbook from './Topbook'
import { topbooks } from '../data';


export default function Topbooks() {
    return (
        <div className="topbooks">
            {topbooks.map((item, index) => (
                <Topbook
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    )
}