// emoji list
module.exports.emoji = function (client, name) {
    return client.emojis.find("name", name);
};

// channel list alias
module.exports.channel = {
    log : '463745366643310592',
    talk : '448126984925741066',
}

// VC channel list alias
module.exports.vcChannel = {
    talk : '399951453848076304',
    admin : '462664164410916874',
}

// parent Id list alias
module.exports.parentId = {
    multi : '462654684293890049',
    movie : '414461950911840256',
    admin : '462663522661302282',
}

module.exports.getTime = () => {
    const timeZoneOffset = -9;
    return new Date(Date.now() - (timeZoneOffset * 60 - new Date().getTimezoneOffset()) * 60000);
};

module.exports.checkTimeHour = (date, time, beforeTime) => {
    return date.getHours() == time && beforeTime != time && date.getMinutes() == 0;
};