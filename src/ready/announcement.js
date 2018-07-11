module.exports = function (client) {
    // announcement AT time
    const announcement_hours = setInterval (() => {
        const time = util.getTime();
        if (time.getHours() == 21) {
            client.channels.get(util.channel['talk']).send('AT開始であります' + util.emoji(client, 'silfa'));
        }
        else if (time.getHours() == 23) {
            client.channels.get(util.channel['talk']).send('AT終了であります' + util.emoji(client, 'dead'));
        }
    }, 1 * 1000 * 60 * 60);
};