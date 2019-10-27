const axios = require('axios');

const getClima = async (lat,lng)=>{

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7f111e8d46f19dbb791ee5dee06b06af`)

    return res.data.main.temp;

}

module.exports = {
    getClima
}