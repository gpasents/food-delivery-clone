import React from 'react';
import './BasketItem.css';

const BasketItem = ({name,price}) => {
  return (
    <div className='BasketItem'>
        <strong>{name}</strong>
        <p>€{price}</p>
    </div>
  )
}

export default BasketItem