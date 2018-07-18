const echoAccessLog = require('./voiceStateUpdate/echoAccessLog.js');

module.exports = function(client, oldMember, newMember) {
    if (oldMember.voiceChannel != newMember.voiceChannel) echoAccessLog(client, oldMember, newMember);
};