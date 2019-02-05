const RoomOptionsCarousel = require('../resources/RoomOptionsCarousel.json');
const { CardFactory } = require('botbuilder');
const searchMotorAccessor = require('../searchMotorAccessor');
const helper = require('../helper');

const cotacao_com_datas = async (data) => {
    let checkin;
    let checkout;

    const date_period = helper.getDates(data.result.parameters);
    if (date_period) {
        const dates = helper.dateParser(date_period);
        checkin = dates[0];
        checkout = dates[1]; 
    }
    const rooms = await searchMotorAccessor(checkin, checkout);
    
    if(!rooms || !rooms.available){
        return 'Sem quartos disponíveis no período fornecido!';
    }

    console.log(rooms.available)
    return {
        text: 'Quartos',
        attachments: [CardFactory.adaptiveCard(RoomOptionsCarousel)]
    };
}

module.exports = cotacao_com_datas;