import './Navbar.css';
import Search from '@mui/icons-material/Search';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Navbar() {

    const [position, setPosition] = useState(0);

    const handleClick = () => {
        setPosition(++position);
        console.log(position);
    };

    return (
        <div className="navbar">
            <div className="nav-left">
                <div className="nav-logo">MarkMyViews</div>
            </div>
            <div className="nav-center">
                <div className="nav-list">
                    <div className="nav-item">Home</div>
                    <div className="nav-item">Favorites</div>
                    <div className="nav-item">Categories</div>
                    <div className="nav-item">About</div>
                </div>
                <div className="nav-search">
                    <input className="nav-search-input" placeholder="Search Books"></input>
                    <Search style={{color: 'black', fontSize: 20, backgroundColor: 'white', padding: '5px'}}/>
                </div>
            </div>
            <div className="nav-right">
                <div className="nav-sign">Sign In</div>
                <div className="nav-sign">Sign Up</div>
                <div className="nav-theme-toggle">
                    <div className={"nav-theme-circle " + ((position % 2) ? 'left' : 'right')} onClick={handleClick}></div>
                </div>
            </div>
        </div>
    )
}
