const echoAccessLog = require('./voiceStateUpdate/echoAccessLog.js');

module.exports = function(client, oldMember, newMember) {
    echoAccessLog(client, oldMember, newMember);
};