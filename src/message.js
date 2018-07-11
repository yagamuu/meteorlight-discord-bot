module.exports = function(client, message) {
    // reply
    if(message.isMemberMentioned(client.user) && !message.mentions.everyone)
	{
		message.reply( '事案ですか？' );
		return;
	}
};