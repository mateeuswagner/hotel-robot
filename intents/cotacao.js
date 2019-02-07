const CheckinCheckoutForm = require('../resources/CheckinCheckoutForm.json');
const { CardFactory } = require('botbuilder');

const cotacao = async (session) => {
    const card = {
        attachments: [CardFactory.adaptiveCard(CheckinCheckoutForm)]
    }
    await session.sendActivity(card);
    return;
}

module.exports = cotacao;