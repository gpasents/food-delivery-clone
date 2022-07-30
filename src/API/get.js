import axios from 'axios';

const categories = ['Pizza', 'Gyros', 'Shoarma', 'Kapsalon', 'Pasta', 'Patisserie', 'Asian', 'Indian'];
const getRestaurants = async () => {
    return axios.get('https://foodbukka.herokuapp.com/api/v1/restaurant')
        .then((res) => {
            let data = res.data.Result;
            let updatedData = data.map((restaurant) => {
                let obj = {
                    ...restaurant,
                    'category': categories[Math.floor(Math.random() * categories.length)],
                    'openNow': [true, false][Math.floor(Math.random() * 2)],
                    'freeDelivery':[true, false][Math.floor(Math.random() * 2)],
                    'minimumOrder':[5, 10, 15][Math.floor(Math.random() * 3)]
                }
                return obj;
            });
            return updatedData;
        })
        .catch((err) => {
            return { error: 'ERROR RETRIEVING RESTAURANTS' };
        })
}

export default getRestaurants;