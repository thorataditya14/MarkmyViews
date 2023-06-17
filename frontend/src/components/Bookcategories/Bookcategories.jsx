import './Bookcategories.css';
import Bookcategory from './Bookcategory'
import { categoriesData } from '../../data';
import { Link } from 'react-router-dom';

export default function Bookcategories() {
    return (
        <div className="bookcategories">
            {categoriesData.map((item) => (
                <Link to={"/categories/" + item.categorycode}>
                    <Bookcategory
                        key={item.id}
                        img={item.img}
                        categorycode={item.categorycode}
                        title={item.title}
                    />
                </Link>
            ))}
        </div>
    )
}