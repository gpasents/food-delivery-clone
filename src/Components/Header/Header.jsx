import React from "react";
import { MdFastfood } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
    let navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    return (
        <div id="header__container" >
            <h2 id="header__logo" onClick={goHome}><MdFastfood size={30} /> GeorgeBezorgd</h2>
        </div>
    )
}

export default Header;