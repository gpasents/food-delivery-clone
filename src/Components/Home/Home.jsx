import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
import PlacesAutocomplete from '../PlacesAutocomplete/PlacesAutocomplete';
import burger from '../../images/Burger-Background.png';

const Home = ({ setAddress }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/restaurants')
    };

    return (
        <div id='home__container'>
            <div id='home__banner'>
                <h1> Order your food by adding your address</h1>
            </div>
            <PlacesAutocomplete setAddress={setAddress} />
            <div id='home__bottom-image'>
                <img src={burger} alt="burger"></img>
            </div>
        </div>
    )
}

export default Home;