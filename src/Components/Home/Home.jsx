import React from 'react'
import {useNavigate} from 'react-router-dom';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div id='home__container'>
            <div id='home__banner'>
                <h1> Order your food by adding your address</h1>
            </div>
            <div id='home__search-bar'>
                <input type='text' name='userAddress' placeholder='Enter your address' ></input>
                <button onClick={()=>navigate('/restaurants')}>Search</button>
            </div>
        </div>
    )
}

export default Home;