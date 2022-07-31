import React, { useState, useEffect } from 'react'
import getRestaurants from '../../API/get';
import './DisplayRestaurants.css';
import RestaurantCard from './RestaurantCard/RestaurantCard';
import Sidebar from './Sidebar/Sidebar';
import {useNavigate} from 'react-router-dom'

const DisplayRestaurants = () => {
  const navigate = useNavigate();

  const [restaurantData, setRestaurantData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filters, setFilters] = useState({ 'category': 'All', 'openNow': true, 'freeDelivery': true, 'minimumOrder': 'All' })
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);

  const categories = ['All', 'Pizza', 'Gyros', 'Shoarma', 'Kapsalon', 'Pasta', 'Patisserie', 'Asian', 'Indian'];

  const getAndSetRestaurantData = async () => {
    let res = await getRestaurants();
    setRestaurantData(res);

    let filtered = res.filter((restaurant) => {
      return restaurant.openNow === filters.openNow &&
        restaurant.freeDelivery === filters.freeDelivery
    });
    setFilteredRestaurantData(filtered);

  }

  const selectCategory = (e) => {
    setSelectedCategory(e.target.innerText);
  }

  const detectSize = () => {
    if (window.innerWidth < 1023) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }
  //filters implementation
  useEffect(() => {
    let filtered = restaurantData.filter((restaurant) => {
      let minimumOrderBoolean;
      if (filters.minimumOrder === 'All' || filters.minimumOrder === 'Fifteen') {
        minimumOrderBoolean = restaurant.minimumOrder === 5 || restaurant.minimumOrder === 10 || restaurant.minimumOrder === 15
      } else {
        minimumOrderBoolean = restaurant.minimumOrder === 5 || restaurant.minimumOrder === 10
      }
      return restaurant.openNow === filters.openNow &&
        restaurant.freeDelivery === filters.freeDelivery && minimumOrderBoolean
    });
    setFilteredRestaurantData(filtered);
  }, [filters])
  //category implementation
  useEffect(() => {
    let filtered = restaurantData.filter((restaurant) => {
      if (selectedCategory === 'All') {
        return restaurant.openNow === filters.openNow &&
          restaurant.freeDelivery === filters.freeDelivery;
      }
      return restaurant.category === selectedCategory && restaurant.openNow === filters.openNow &&
        restaurant.freeDelivery === filters.freeDelivery
    })
    setFilteredRestaurantData(filtered);
  }, [selectedCategory])



  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  })

  useEffect(() => {
    getAndSetRestaurantData();
    detectSize();
  }, [])



  return (
    <>
      <nav id='display-restaurants__header'>
        <ul id='display-restaurants__header-list'>
          {categories.map((category, index) => {
            if (category === selectedCategory) {
              return <li key={index} className='selectedCategory' onClick={(e) => selectCategory(e)} >{category}</li>
            } else {
              return <li key={index} onClick={(e) => selectCategory(e)} >{category}</li>
            }
          })}
        </ul>
      </nav>
      <div id='display-restaurants__container'>
        {
          !isMobile && (<aside id='display-restaurants__sidebar'>
            <Sidebar setFilters={setFilters} />
          </aside>
          )
        }

        <div id='display-restaurants__mainbar'>
          <h1 id='restaurant-count'>Restaurants: {filteredRestaurantData.length}</h1>
          <ul id='display-restaurants__list'>
            {filteredRestaurantData.map((res, index) => {
              let { businessname, category, image, address, openNow, freeDelivery, minimumOrder } = res;
              return (
                <li key={index} onClick={()=>navigate(`${businessname}`)} className='display-restaurants__card'><RestaurantCard
                  name={businessname}
                  category={category}
                  image={image}
                  address={address}
                  openNow={openNow}
                  freeDelivery={freeDelivery}
                  minimumOrder={minimumOrder}
                /></li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default DisplayRestaurants