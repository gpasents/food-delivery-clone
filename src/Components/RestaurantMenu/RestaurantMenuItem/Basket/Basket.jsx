import React, { useState } from 'react';
import './Basket.css';
import BasketItem from './BasketItem/BasketItem';

const Basket = ({ basket, total }) => {


  return (
    <div id='Basket__container'>
      <h2>Basket</h2>
      <div id='Basket_items'>
        {basket.map((item) => {

          return <BasketItem name={item[0]} price={item[1]} />
        })}
      </div>
      {
        total !== 0 &&
        <div id='Basket__container-pay'>
          <button>Checkout</button>
          <h3>Total: {total} €</h3>
        </div>
      }
    </div>
  )
}

export default Basket