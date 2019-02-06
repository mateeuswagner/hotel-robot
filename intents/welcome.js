const welcome = (session) => {
    session.sendActivity('Seja bem vindo ao Hotel Bla bla. Em que posso te ajudar?')
    return;
}

module.exports = welcome;