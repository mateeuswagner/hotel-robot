const CheckinCheckoutForm = require('../resources/CheckinCheckoutForm.json');
const { CardFactory } = require('botbuilder');

const cotacao = () => {
    const card = {
        text: 'Menu',
        attachments: [CardFactory.adaptiveCard(CheckinCheckoutForm)]
    }
    return card;
}

module.exports = cotacao;