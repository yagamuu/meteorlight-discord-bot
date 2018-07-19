const util = require('../util.js');
module.exports = function (client, oldMember, newMember) {
    if (oldMember.user.bot || newMember.user.bot) return;
    if (util.isAdmin(oldMember) || util.isAdmin(newMember)) {
        echoAccessLogAdmin(client, oldMember, newMember);
    }
    else {
        if (oldMember.voiceChannel && newMember.voiceChannel) echoMoveLog(client, oldMember, newMember);
        else if (newMember.voiceChannel) echoJoinLog(client, newMember);
        else echoLeaveLog(client, oldMember);
    }
}

const echoAccessLogAdmin = (client, oldMember, newMember) => {
    if (!oldMember.voiceChannel || !newMember.voiceChannel) return;
    if (util.isAdmin(oldMember) && util.isAdmin(newMember)) return;

    if (util.isAdmin(oldMember)) echoJoinLog(client, newMember);
    else echoLeaveLog(client, oldMember);
};

const echoLog = (client, content) => {
    const time = util.getTime();
    const message = `【VC】${content}${time.format('【MM/DD - HH:mm:ss】')}`;
    client.channels.get(util.channel['log']).send(message);
};

const echoJoinLog = (client, member) => {
    const content = `${member.displayName}さんが${member.voiceChannel.name}に入室しました。`;
    echoLog(client, content);
};

const echoLeaveLog = (client, member) => {
    const content = `${member.displayName}さんが${member.voiceChannel.name}から退室しました。`;
    echoLog(client, content);
};

const echoMoveLog = (client, oldMember, newmember) => {
    const content = `${newmember.displayName}さんが${oldMember.voiceChannel.name}から${newmember.voiceChannel.name}に移動しました。`
    echoLog(client, content);
};