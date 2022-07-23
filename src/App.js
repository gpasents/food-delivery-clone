import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import DisplayRestaurants from './Components/DisplayRestaurants/DisplayRestaurants';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/restaurants' element={<DisplayRestaurants />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
