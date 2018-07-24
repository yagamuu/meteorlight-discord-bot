const util = require('../util.js');

module.exports = function (client) {
    let beforeAnnouncementTime = null;
    const atStart = 21;
    const atEnd   = 23;
    // announcement AT time
    const announcement_hours = setInterval (() => {
        const time = util.getTime();
        if (checkTimeHour(time, atStart, beforeAnnouncementTime)) {
            const message = `【時報】AT開始であります${util.emoji(client, 'silfa')}`;
            client.channels.get(util.channel['talk']).send(message);
            client.channels.get(util.channel['vc']).send(message);
            beforeAnnouncementTime = atStart;
        }
        else if (checkTimeHour(time, atEnd, beforeAnnouncementTime)) {
            const message = `【時報】AT終了であります${util.emoji(client, 'dead')}`;
            client.channels.get(util.channel['talk']).send(message);
            client.channels.get(util.channel['vc']).send(message);
            beforeAnnouncementTime = atEnd;
        }
    }, 1 * 1000);
};

const checkTimeHour = (date, time, beforeTime) => {
    return date.hour() == time && beforeTime != time && date.minute() == 0;
};