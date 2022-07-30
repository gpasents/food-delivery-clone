import React from "react";
import Switch from '@mui/material/Switch';
import './Sidebar.css';


const Sidebar = ({ setFilters }) => {
    const changeOpenNow = () => {
        setFilters((filters) => {
            return { ...filters, 'openNow': !filters.openNow }
        })

    }
    const changeFreeDelivery = () => {
        setFilters((filters) => {
            return { ...filters, 'freeDelivery': !filters.freeDelivery }
        })

    }
    const handleRadioChange = (e) =>{
        setFilters((filters) => {
            return { ...filters, 'minimumOrder': e.target.value }
        })
    };


    return (
        <div id='sidebar__container'>
            <div id="sidebar__open-now" className="Sidebar__switch-box">
                <h3>Open Now</h3>
                <div id="switch__open-now" className="switch">
                    <Switch defaultChecked onChange={changeOpenNow} />
                </div>
            </div>

            <div id="sidebar__free-delivery" className="Sidebar__switch-box">
                <h3> Free Delivery</h3>
                <div id="switch__free-delivery" className="switch">
                    <Switch defaultChecked onChange={changeFreeDelivery} />
                </div>
            </div>

            <div id="Sidebar__minimun-price">
                <h3>Minimun order amount</h3>
                <div id="Sidebar__minimun-price-choices">
                    <div className="mininmun-prices-radio-button">
                        <input type="radio" value="All" name="group" defaultChecked onChange={(e) => handleRadioChange(e)} />
                        <p>All</p>
                    </div>
                    <div className="mininmun-prices-radio-button">
                        <input type="radio" value="Ten" name="group" onChange={(e) => handleRadioChange(e)} />
                        <p >10$ or less</p>
                    </div>
                    <div className="mininmun-prices-radio-button">
                        <input type="radio" value="Fifteen" name="group" onChange={(e) => handleRadioChange(e)} />
                        <p >15$ or less</p>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Sidebar;