import React from "react";
import { MdFastfood } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = ({ address }) => {
    let navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    return (
        <div id="header__container" >
            <div className="header__container-logo" onClick={goHome}>
                <MdFastfood color="white" size={30}/>
                <h2 >GeorgeBezorgd</h2>
            </div>
            {(window.location.href === 'http://localhost:3000/restaurants' || window.location.href.includes('http://localhost:3000/restaurants/')) && <div id="header__address">
                <h3>{address}</h3>
            </div>}
        </div>
    )
}

export default Header;