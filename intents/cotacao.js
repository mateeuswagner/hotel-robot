const CheckinCheckoutForm = require('../resources/CheckinCheckoutForm.json');
const { CardFactory } = require('botbuilder');

const cotacao = (session) => {
    const card = {
        attachments: [CardFactory.adaptiveCard(CheckinCheckoutForm)]
    }
    session.sendActivity(card);
    return;
}

module.exports = cotacao;