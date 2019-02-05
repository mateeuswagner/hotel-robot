const axios = require('axios');
const config = require('./config');
const helper = require('./helper');

const queryPLN = async (text) => {
    text = helper.textNormalize(text);

    let data = config.dialogFlow.postParams

    data = Object.assign(
        {
            sessionId: new Date().getTime(),
            query: text,
        },
        data);

    const res = await axios.post(config.dialogFlow.url, data, {
        headers: {
            'Authorization': 'Bearer ' + config.dialogFlow.authID,
            'Content-Type': 'application/json'
        },
        params: config.dialogFlow.defaultParams,
        timeout: config.dialogFlow.requestTimeout
    });

    return res;

}

module.exports = queryPLN;
