const { CardFactory } = require('botbuilder');
const searchMotorAccessor = require('../searchMotorAccessor');
const helper = require('../helper');

const cotacao_com_datas = async (data, session) => {
    await session.sendActivity('Aguarde enquanto verifico os quartos disponíveis...')
    let checkin;
    let checkout;

    const date_period = helper.getDates(data.result.parameters);
    if (date_period) {
        const dates = helper.dateParser(date_period);
        checkin = dates[0];
        checkout = dates[1]; 
    }
    const rooms = await searchMotorAccessor(checkin, checkout);
    
    if(!rooms || rooms.available.length === 0){
        await session.sendActivity('Sem quartos disponíveis no período fornecido!');
        return;
    }

    let attachments = []
    for (room of rooms.available){
        const heroCard = CardFactory.heroCard(
            room.name,
            room.price + '\n' + room.description,
            CardFactory.images([room.imageURL]),            
            CardFactory.actions([
                {
                    type: 'openUrl',
                    title: 'Reservar Agora',
                    value: 'https://docs.microsoft.com/en-us/azure/bot-service/'
                }
            ])
        );

        attachments.push(heroCard);
    }
    
    const card = {
        "text": "Encontrei esses quartos para você escolher!",
        "attachmentLayout": "carousel",
        "attachments": attachments
    };
    await session.sendActivity(card);
    return;
}

module.exports = cotacao_com_datas;