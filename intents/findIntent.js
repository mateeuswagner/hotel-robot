const cotacao = require('./cotacao');
const cotacao_com_datas = require('./cotacao_com_datas');
const naoentendi = require('./naoentendi');
const welcome = require('./welcome');
const config = require('../config');

module.exports = (intentName, data) => {
    switch(intentName){
        case 'welcome':
            return welcome();
        case 'cotacao':
            return cotacao(data);
        case 'cotacao_com_datas':
            return cotacao_com_datas(data);
        case 'saudacao':
        case 'naoentendi':
            return naoentendi(data);
        default:
            return config.intents.defaultResponse;
    }   
}