// emoji list
module.exports.emoji = function (client, name) {
    return client.emojis.find("name", name);
};

// channel list alias
module.exports.channel = {
    talk : '448126984925741066'
}

module.exports.getTime = () => {
    const timeZoneOffset = -9;
    return new Date(Date.now() - (timeZoneOffset * 60 - new Date().getTimezoneOffset()) * 60000);
};

module.exports.checkTimeHour = (date, time, beforeTime) => {
    return date.getHours() == time && beforeTime != time && date.getMinutes() == 0;
};