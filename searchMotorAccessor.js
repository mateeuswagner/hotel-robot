const axios = require('axios');
const config = require('./config');

const queryRooms = async (checkin, checkout) => {
    const data = {
        checkin,
        checkout
    }

    try{
        const res = await axios.post(config.searchMotor.url, data);
        return res.data;
    } catch(e){
        console.log(e);
    }
    
   return;

}

module.exports = queryRooms;
