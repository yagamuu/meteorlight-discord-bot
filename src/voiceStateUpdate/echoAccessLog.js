module.exports = function (client, oldMember, newMember) {
    if (!newMember.voiceChannel) {
        if (oldMember.voiceChannel.parentID == util.parentId.admin) return;
        client.channels.get(util.channel['log']).send(
            '【VC】' +
            newMember.displayName  + 'さんが' + 
            oldMember.voiceChannel.name + 
            'から退出しました。'
        );
    }
    else {
        if (!oldMember.voiceChannel) {
            if (newMember.voiceChannel.parentID == util.parentId.admin) return;
            client.channels.get(util.channel['log']).send(
                '【VC】' +
                newMember.displayName  + 'さんが' + 
                newMember.voiceChannel.name + 
                'に入出しました。'
            );
        }
        else {
            if (oldMember.voiceChannel.parentID == util.parentId.admin) {
                client.channels.get(util.channel['log']).send(
                    '【VC】' +
                    newMember.displayName  + 'さんが' + 
                    newMember.voiceChannel.name + 
                    'に入出しました。'
                );
            }
            else {
                if (newMember.voiceChannel.parentID == util.parentId.admin) {
                    client.channels.get(util.channel['log']).send(
                        '【VC】' +
                        oldMember.displayName  + 'さんが' + 
                        oldMember.voiceChannel.name + 
                        'から退出しました。'
                    );
                }
                else {
                    client.channels.get(util.channel['log']).send(
                        '【VC】' +
                        newMember.displayName + 'さんが' + 
                        oldMember.voiceChannel.name + 'から' + 
                        newMember.voiceChannel.name + 
                        'に移動しました。'
                    );
                }
            }
        }
    }
};