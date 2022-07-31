import React from 'react';
import './RestaurantMenuItem.css'
import burger from '../../../images/burger.jpg';
import beer from '../../../images/beer.jpg';
import coca from '../../../images/coca.jpg';
import gyros from '../../../images/gyros.jpg';
import pasta from '../../../images/pasta.jpg';
import shotel from '../../../images/shotel.jpg';
import souvlaki from '../../../images/souvlaki.jpg';
import sushi from '../../../images/sushi.jpg';

const RestaurantMenuItem = ({ name, desc, price,category }) => {
    console.log(category)
    let imageDict = {
        "Burgers":burger,
        "Beer":beer,
        "Soft Drinks":coca,
        "Gyros":gyros,
        "Pasta":pasta,
        "Shotels":shotel,
        "Souvlaki":souvlaki,
        "Sushi":sushi
    }
    return (
        <div className='RestaurantMenuItem-card'>
            <div className='RestaurantMenuItem-card-info'>
                <h1>{name}</h1>
                <p>{desc}</p>
                <h4>€ {price}</h4>
            </div>
            <img src={imageDict[category]}></img>
        </div>
    )
}

export default RestaurantMenuItem