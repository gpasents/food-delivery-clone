import React from "react";
import Switch from '@mui/material/Switch';
import './Sidebar.css';


const Sidebar = () => {
    return (
        <div id='sidebar__container'>
            <div id="sidebar__open-now" className="Sidebar__switch-box">
                <h3>Open Now</h3>
                <div id="switch__open-now" className="switch">
                    <Switch />
                </div>
            </div>

            <div id="sidebar__free-delivery" className="Sidebar__switch-box">
                <h3> Free Delivery</h3>
                <div id="switch__free-delivery" className="switch">
                    <Switch />
                </div>
            </div>

            <div id="Sidebar__minimun-price">
                <h3>Minimun order amount</h3>
                <div id="Sidebar__minimun-price-choices">
                    <div className="mininmun-prices-radio-button">
                        <input type="radio" value="all" name="group" />
                        <p>All</p>
                    </div>
                    <div className="mininmun-prices-radio-button">
                        <input type="radio" value="all" name="group" />
                        <p >10$ or less</p>
                    </div>
                    <div className="mininmun-prices-radio-button">
                        <input type="radio" value="all" name="group" />
                        <p >15$ or less</p>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Sidebar;