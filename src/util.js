const moment = require("moment-timezone");

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
const parentId = {
    multi : '462654684293890049',
    movie : '414461950911840256',
    admin : '462663522661302282',
};
module.exports.parentId = parentId;

module.exports.isAdmin = member => {
    return member.voiceChannel && member.voiceChannel.parentID == parentId.admin;
};

module.exports.getTime = () => {
    return moment().locale('ja').tz('Asia/Tokyo');
};

module.exports.checkTimeHour = (date, time, beforeTime) => {
    return date.hour() == time && beforeTime != time && date.minute() == 0;
};