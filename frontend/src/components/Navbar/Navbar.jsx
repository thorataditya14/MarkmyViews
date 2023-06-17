import { Link } from "react-router-dom";
import './Navbar.css';
import Search from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from 'react';
// import { useEffect } from 'react';


export default function Navbar() {

    const [position, setPosition] = useState(0);

    const handleClick = () => {
        setPosition(position + 1);
        console.log(position);
    };

    return (
        <div className="navbar">
            <div className="nav-left">
                <Link to="/">
                    <div className="nav-logo">MarkMyViews</div>
                </Link>
            </div>
            <div className="nav-center">
                <div className="nav-list">
                    <Link to="/">
                        <div className="nav-item">Home</div>
                    </Link>
                    <Link to="/books">
                        <div className="nav-item">Books</div>
                    </Link>
                    <Link to="/categories">
                        <div className="nav-item">Categories</div>
                    </Link>
                    <Link to="/about">
                        <div className="nav-item">About</div>
                    </Link>
                </div>
                <div className="nav-search">
                    <input className="nav-search-input" placeholder="Search Books"></input>
                    <Search style={{ color: 'black', fontSize: 20, backgroundColor: 'white', padding: '5px' }} />
                </div>
            </div>
            <div className="nav-right">
                <Link to="login">
                    <div className="nav-sign">Sign In</div>
                </Link>
                <Link to="/register">
                    <div className="nav-sign">Sign Up</div>
                </Link>
                <div className="theme">
                    <div className="nav-theme-toggle">
                        <DarkModeIcon fontSize='small' />
                        <div className={"nav-theme-circle " + ((position % 2) ? 'right' : 'left')} onClick={handleClick}></div>
                        {/* <div className={"nav-theme-circle " + ((position % 2) ? 'left' : 'right')} onClick={handleClick}></div> */}
                        <LightModeIcon fontSize='small' />
                    </div>
                </div>
            </div>
        </div>
    )
}