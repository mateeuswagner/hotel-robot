const naoentendi = (data, session) => {
    session.sendActivity(data.result.fulfillment.speech)
    return;
}

module.exports = naoentendi;