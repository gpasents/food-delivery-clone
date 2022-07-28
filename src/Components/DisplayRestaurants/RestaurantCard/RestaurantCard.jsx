import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ name, type, image, address }) => {
  return (
    <div className='restaurant-card__card'>
      <img src={image} alt=''></img>
      <div className='restaurant-card__card-info'>
        <h1>{name}</h1>
        <p>{type}</p>
        <p>{address}</p>
      </div>
    </div>
  )
}

export default RestaurantCard