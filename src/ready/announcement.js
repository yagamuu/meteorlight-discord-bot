const util = require('../util.js');

module.exports = function (client) {
    let beforeAnnouncementTime = null;
    // announcement AT time
    const announcement_hours = setInterval (() => {
        const time = util.getTime();
        if (checkTimeHour(time, 21, beforeAnnouncementTime)) {
            client.channels.get(util.channel['talk']).send(`【時報】AT開始であります${util.emoji(client, 'silfa')}`);
            beforeAnnouncementTime = 21;
        }
        else if (checkTimeHour(time, 23, beforeAnnouncementTime)) {
            client.channels.get(util.channel['talk']).send(`【時報】AT終了であります${util.emoji(client, 'dead')}`);
            beforeAnnouncementTime = 23;
        }
    }, 1 * 1000);
};

const checkTimeHour = (date, time, beforeTime) => {
    return date.hour() == time && beforeTime != time && date.minute() == 0;
};