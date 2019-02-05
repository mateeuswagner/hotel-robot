const textNormalize = (text) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

const intentFromValue = (value) => {
    if (value.intent) {
        return value.intent;
    } else if (value.checkin || value.checkout) {
        return 'Cotação de ' + (value.checkin || '') + ' até ' + (value.checkout || '');
    }
    return;
}

const dateParser = (date_period) => {
    if (!date_period) {
        return;
    }
    
    const dates = date_period.split('/');
    const formatted_dates = [];
    for (date of dates) {
        const date_splitted = date.split('-');
        let day = date_splitted[2];
        let month = date_splitted[1];
        const year = date_splitted[0]; 

        if(day <= 12){
            const aux = day;
            day = month;
            month = aux;
        }
        
        formatted_dates.push(day + '/' + month + '/' + year);
    }
    
    return formatted_dates;
}

const getDates = (data) => {
    for (key of Object.keys(data)) {
        if (key.indexOf('date-period') > -1) {
            return data[key];
        }
    }
    return;
}

module.exports = {
    textNormalize,
    intentFromValue,
    dateParser,
    getDates
}

