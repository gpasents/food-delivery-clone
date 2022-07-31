import React, { useState, useRef } from 'react';
import './RestaurantMenu.css';
import RestaurantMenuItem from './RestaurantMenuItem/RestaurantMenuItem';
import Basket from './RestaurantMenuItem/Basket/Basket';
import { Rating } from '@mui/material';
import food from '../../images/food.jpg';
import menu from '../../assets/menu';

const RestaurantMenu = () => {
  let itemsRef = useRef([]);
  const [total,setTotal] = useState(0);
  const [ratingValue, setRatingValue] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [basket,setBasket] = useState([]);
  const categories = ['Burgers', 'Shotels', 'Gyros', 'Souvlaki', 'Sushi', 'Pasta', 'Soft Drinks', 'Beer'];

  let restaurantName = window.location.href.split('/')[window.location.href.split('/').length - 1];
  if (restaurantName.includes('%20')) {
    restaurantName = restaurantName.split('%20').join(' ');
  }

  const addItemButton = (name,price) =>{
    setTotal(Number(total)+Number(price));
    console.log(total)
    setBasket((basket=>[...basket,[name,price]]));
  }

  const executeScroll = (index) => {
    itemsRef.current[index].scrollIntoView({ behavior: "smooth" })
  }


  const selectCategory = (e, index) => {
    setSelectedCategory(e.target.innerText);
    executeScroll(index);
  }

  return (
    <div id='restaurantMenu__container'>
      <div id='restaurantMenu__info-container'>

        <div id='restaurantMenu__header'>
          <div id='restaurantMenu__header-image' style={{ backgroundImage: `url(${food})` }}>
          </div>
          <div id='restaurantMenu__header-details'>
            <h2>{restaurantName}</h2>
            <Rating
              name="simple-controlled"
              value={ratingValue}
              onChange={(event, newValue) => {
                setRatingValue(newValue);
              }}
            />
          </div>
        </div>
        <nav id='restaurantMenu__header-categories'>
          <ul id='restaurantMenu__header-categories-list'>
            {categories.map((category, index) => {
              if (category === selectedCategory) {
                return <li key={index} className='selectedCategory' onClick={(e) => selectCategory(e, index)} >{category}</li>
              } else {
                return <li key={index} onClick={(e) => selectCategory(e, index)} >{category}</li>
              }
            })}
          </ul>
        </nav>

        <div id='restaurantMenu__menu'>
          {
            categories.map((category, idx) => {
              return (
                <section key={idx} id={`restaurantMenu__menu-${category}`} ref={el => itemsRef.current[idx] = el} className="restaurantMenu__menu-section">
                  <div className='restaurantMenu__menu-section-title'>
                    <h2>{category}</h2>
                  </div>
                  {menu[category].map((item, idx) => {
                    let itemObj = {...item,"category":category}
                    return <RestaurantMenuItem {...itemObj} addItemButton={addItemButton}/>

                  })}

                </section>)
            })
          }


        </div>
      </div>
      <aside id='restaurantMenu__basket'>
        <Basket basket={basket} total={total}/>
      </aside>
    </div>

  )
}

export default RestaurantMenu