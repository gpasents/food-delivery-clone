import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import DisplayRestaurants from './Components/DisplayRestaurants/DisplayRestaurants';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import RestaurantMenu from './Components/RestaurantMenu/RestaurantMenu';

function App() {
  let [address,setAddress] = useState(null);

  return (
    <div className="App">
      <Router>
        <Header address ={address}/>
        <Routes>
          <Route path='/' element={<Home setAddress={setAddress}/>}></Route>
          <Route path='/restaurants' element={<DisplayRestaurants />}></Route>
          <Route path='/restaurants/:id' element={<RestaurantMenu/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
