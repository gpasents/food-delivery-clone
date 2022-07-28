import axios from 'axios';


const getRestaurants = async () =>{
    return axios.get('https://foodbukka.herokuapp.com/api/v1/restaurant')
    .then((res)=>{
        return res.data.Result;
    })
    .catch((err)=>{
        return {error:'ERROR RETRIEVING RESTAURANTS'};
    })
}

export default getRestaurants;