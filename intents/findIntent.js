const cotacao = require('./cotacao');
const cotacao_com_datas = require('./cotacao_com_datas');
const naoentendi = require('./naoentendi');
const welcome = require('./welcome');
const config = require('../config');

module.exports = (intentName, data, session) => {
    switch(intentName){
        case 'welcome':
            return welcome(session);
        case 'cotacao':
            return cotacao(session);
        case 'cotacao_com_datas':
            return cotacao_com_datas(data, session);
        case 'saudacao':
        case 'naoentendi':
            return naoentendi(data, session);
        default:
            return config.intents.defaultResponse;
    }   
}