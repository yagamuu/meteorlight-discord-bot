const util = require('../util.js');

module.exports = function(message) {
    for (let key of Object.keys(util.sound)) {
        if (message.content !== key) continue;
        message.member.voiceChannel.join().then( connection => {
            const dispatcher = connection.playFile(`${util.resourceDir}${util.sound[key]}`);
            dispatcher.on('end', reason => {
                connection.disconnect();
            });
        })
        .catch(console.log);
        message.delete();
        return;
    }
    return;
};