import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ name, category, image, address, openNow, freeDelivery, minimumOrder }) => {
  return (
    <div className='restaurant-card__card'>
      <img src={image} alt=''></img>
      <div className='restaurant-card__card-info'>
        <h1>{name}</h1>
        <p>{category}</p>
        <div className='restaurant-card__card-info-details'>
          <p>{openNow ? 'Open' : 'Closed'}</p>
          <p>{freeDelivery ? 'Free Delivery' : 'No Free Delivery'}</p>
          <p>Minimum order: € {minimumOrder} </p>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard