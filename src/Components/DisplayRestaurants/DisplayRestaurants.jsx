import React, { useState, useEffect } from 'react'
import getRestaurants from '../../API/get';
import './DisplayRestaurants.css';
import RestaurantCard from './RestaurantCard/RestaurantCard';
import Sidebar from './Sidebar/Sidebar';

const DisplayRestaurants = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const getAndSetRestaurantData = async () => {
    let res = await getRestaurants();
    setRestaurantData(res);

  }

  const detectSize = () => {
    if (window.innerWidth<1023){
      setIsMobile(true);
    }else{
      setIsMobile(false);
    }
  }

  useEffect(()=>{
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
          <li>pizza</li>
          <li>gyros</li>
          <li>shit</li>
          <li>weed</li>
          <li>shoarma</li>
          <li>junk</li>
          <li>lena</li>
        </ul>
      </nav>
      <div id='display-restaurants__container'>
        {
          !isMobile && (<aside id='display-restaurants__sidebar'>
            <Sidebar />
          </aside>
          )
        }

        <div id='display-restaurants__mainbar'>
          <ul id='display-restaurants__list'>
            {restaurantData.slice(0, 10).map((res, index) => {
              let { businessname, restauranttype, image, address } = res;
              return (
                <li key={index} className='display-restaurants__card'><RestaurantCard name={businessname} type={restauranttype} image={image} address={address} /></li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default DisplayRestaurants