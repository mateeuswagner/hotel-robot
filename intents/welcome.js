const welcome = async (session) => {
    await session.sendActivity('Seja bem vindo ao Hotel Bla bla. Em que posso te ajudar?')
    return;
}

module.exports = welcome;