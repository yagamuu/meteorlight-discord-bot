module.exports = function (client, oldMember, newMember) {
    if (!newMember.voiceChannel) {
        if (oldMember.voiceChannel.parentID == util.parentId.admin) return;
        client.channels.get(util.channel['log']).send(
            '【VC】' +
            newMember.nickname + 'さんが' + 
            oldMember.voiceChannel.name + 
            'から退出しました。'
        );
    }
    else {
        if (newMember.voiceChannel.parentID == util.parentId.admin) return;
        if (!oldMember.voiceChannel) {
            client.channels.get(util.channel['log']).send(
                '【VC】' +
                newMember.nickname + 'さんが' + 
                newMember.voiceChannel.name + 
                'に入出しました。'
            );
        }
        else {
            client.channels.get(util.channel['log']).send(
                '【VC】' +
                newMember.nickname + 'さんが' + 
                oldMember.voiceChannel.name + 'から' + 
                newMember.voiceChannel.name + 
                'に移動しました。'
            );
        }
    }
};