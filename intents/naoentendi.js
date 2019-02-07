const naoentendi = async (data, session) => {
    await session.sendActivity(data.result.fulfillment.speech)
    return;
}

module.exports = naoentendi;