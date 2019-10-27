const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion:{
        alias:"d",
        desc:"Direccion de la ciudad para obtener el clima",
        demand:true
    }
}).argv

const getinfo = async (direccion)=>{

    try{
        const coord = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(coord.lat,coord.lng)
        return `El clima actual de ${direccion} es de ${temp}`
    }catch (e) {
        return `No se pudo consultar el clima puto.`
    }
}

getinfo(argv.direccion)
    .then(res =>  console.log(res))
    .catch(err =>  console.log(err))

