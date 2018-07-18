const util = require('../util.js');
module.exports = function (client, oldMember, newMember) {
    if (util.isAdmin(oldMember) || util.isAdmin(newMember)) {
        echoAccessLogAdmin(client, oldMember, newMember);
    }
    else {
        if (oldMember.voiceChannel && newMember.voiceChannel) echoMoveLog(client, oldMember, newMember);
        else if (newMember.voiceChannel) echoJoinLog(client, newMember);
        else echoLeaveLog(client, oldMember);
    }
}

const echoAccessLogAdmin = function (client, oldMember, newMember) {
    if (!oldMember.voiceChannel || !newMember.voiceChannel) return;
    if (util.isAdmin(oldMember) && util.isAdmin(newMember)) return;

    if (util.isAdmin(oldMember)) echoJoinLog(client, newMember);
    else echoLeaveLog(client, oldMember);
};

const echoLog = function (client, text) {
    const time = util.getTime();
    client.channels.get(util.channel['log']).send(
        '【VC】' +
        text + 
        time.format('【MM/DD - hh:mm:ss】')
    );
};

const echoJoinLog = function (client, member) {
    const text = member.displayName  + 'さんが' + member.voiceChannel.name + 'に入室しました。';
    echoLog(client, text);
};

const echoLeaveLog = function (client, member) {
    const text = member.displayName  + 'さんが' + member.voiceChannel.name + 'から退室しました。';
    echoLog(client, text);
};

const echoMoveLog = function (client, oldMember, newmember) {
    const text = newmember.displayName  + 'さんが' + oldMember.voiceChannel.name + 'から' + newmember.voiceChannel.name + 'に移動しました。';
    echoLog(client, text);
};