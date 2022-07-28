import React from 'react'
import {useNavigate} from 'react-router-dom';
import './Home.css'

const Home = ({setAddress}) => {
    const navigate = useNavigate();

    const handleChange = event => {
        setAddress(event.target.value);
      };

    const handleClick = ()=>{
        navigate('/restaurants')
    };

    return (
        <div id='home__container'>
            <div id='home__banner'>
                <h1> Order your food by adding your address</h1>
            </div>
            <div id='home__search-bar'>
                <input type='text' name='userAddress' placeholder='Enter your address' onChange={handleChange} ></input>
                <button onClick={handleClick}>Search</button>
            </div>
        </div>
    )
}

export default Home;