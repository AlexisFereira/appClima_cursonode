
const axios = require('axios');


const getLugarLatLng = async (direccion)=>{

    const encondeUrl = encodeURI(direccion)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondeUrl}`,
        headers: {'X-RapidAPI-Key': '0e02aadc1amshac23edd2f6d97ebp1a8ff5jsnfc8a0ba3989c'},
    });

    const resp = await instance.get()

    if(resp.data.Results.length === 0){
        throw new Error(`No se enconraron resultados para ${direcion}`)
    }else{
        let data = resp.data.Results[0];
        return {
            direccion:data.name,
            lat:data.lat,
            lng:data.lon,
        }
    }
}


module.exports = {
    getLugarLatLng
}

