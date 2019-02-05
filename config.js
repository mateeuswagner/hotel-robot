module.exports = {
    server: {
        port: 3000
    },
    dialogFlow: {
        defaultRequestMethod: 'post',
        url: 'https://api.dialogflow.com/v1/query',
        defaultParams: {
            v: '20150910'
        },
        authID: process.env.AUTH_ID || 'abcdef',
        postParams: {
            lang: 'pt-BR',
            timezone: 'America/Sao_Paulo'
        },
        requestTimeout: 30000
    },
    intents: {
        defaultResponse: 'Não entendi, tente pedir de outra maneira!'
    },
    searchMotor: {
        url: 'http://localhost:3000/buscar'
    }
}