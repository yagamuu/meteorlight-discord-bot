const playSound = require('./message/playSound.js');

module.exports = function(client, message) {
    // reply
    if(message.isMemberMentioned(client.user) && !message.mentions.everyone)
    {
        message.reply( '事案ですか？' );
        return;
    }

    if (message.member.voiceChannel && (message.member.roles.exists('name', '団長') || message.member.roles.exists('name', '副団長'))) {
        playSound(message);
    }
};