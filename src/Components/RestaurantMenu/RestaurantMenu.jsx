import React, { useState, useRef, useEffect } from 'react';
import './RestaurantMenu.css';
import RestaurantMenuItem from './RestaurantMenuItem/RestaurantMenuItem';
import Basket from './RestaurantMenuItem/Basket/Basket';
import { Rating } from '@mui/material';
import food from '../../images/food.jpg';
import menu from '../../assets/menu';
import { MdCancel } from "react-icons/md";

const RestaurantMenu = () => {
  let itemsRef = useRef([]);
  const [goToBasket, setGoToBasket] = useState(false);
  const [total, setTotal] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [ratingValue, setRatingValue] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [basket, setBasket] = useState([]);
  const categories = ['Burgers', 'Shotels', 'Gyros', 'Souvlaki', 'Sushi', 'Pasta', 'Soft Drinks', 'Beer'];

  let restaurantName = window.location.href.split('/')[window.location.href.split('/').length - 1];
  if (restaurantName.includes('%20')) {
    restaurantName = restaurantName.split('%20').join(' ');
  }

  const addItemButton = (name, price) => {
    setTotal(Number(total) + Number(price));
    console.log(total)
    setBasket((basket => [...basket, [name, price]]));
  }

  const checkout = () => {
    setGoToBasket(!goToBasket);
  };

  const executeScroll = (index) => {
    itemsRef.current[index].scrollIntoView({ behavior: "smooth" })
  }


  const selectCategory = (e, index) => {
    setSelectedCategory(e.target.innerText);
    executeScroll(index);
  }
  const detectSize = () => {
    if (window.innerWidth < 1023) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  });
  useEffect(() => {
    detectSize();
  }, [])

  return (
    !goToBasket ? 

    

      
  
  


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
                let itemObj = { ...item, "category": category }
                return <RestaurantMenuItem {...itemObj} addItemButton={addItemButton} />

              })}

            </section>)
        })
      }


    </div>
  </div>

  {
    !isMobile ? (

      <aside id='restaurantMenu__basket'>
        <Basket basket={basket} total={total} />
      </aside>
    ) : (basket.length !== 0 && (

      <div id='basket_nav' onClick={checkout}> Proceed to payment: Eur {total}
      </div>
    )
    )
  }
</div>
:

<div>
  <span className='button-go-back' onClick={checkout}><MdCancel size={"2em"}/></span>
  <Basket basket={basket} total={total}/>
</div>

  )
}

export default RestaurantMenu