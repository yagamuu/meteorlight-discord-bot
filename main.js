// Response for Uptime Robot
const http = require('http');
http.createServer(function(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Discord bot is active now \n');
}).listen(3000);

// Discord bot implements
const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', message =>
{
	console.log('bot is ready!');
  const timeZoneOffset = -9;
  let pu_loop = new Date(Date.now() - (timeZoneOffset * 60 - new Date().getTimezoneOffset()) * 60000).getHours() + 1;
  if (pu_loop > 23) pu_loop = 0;
  const emoji = {
    'silfa' : client.emojis.find("name", "silfa"),
    'pu' : client.emojis.find("name", "pu"),
  };
  const pu = setInterval (() => {
    var time = new Date(Date.now() - (timeZoneOffset * 60 - new Date().getTimezoneOffset()) * 60000);
    var text = '【時報：' + pu_loop + '時】';
    if (time.getMinutes() == 0 && time.getHours() == pu_loop) {
        text += emoji.pu;
        for (var i = 1; i < pu_loop; i++) {
          text += emoji.pu;
        }
        client.channels.get("448126984925741066").sendMessage(text);
        pu_loop++;
        if (pu_loop > 23) pu_loop = 0;
    }
  }, 1 * 1000);
  /*
  const interval = setInterval (() => {
    const silfa = client.emojis.find("name", "silfa");
    client.channels.get("463745366643310592").sendMessage(`テスト中であります${silfa}`);
  }, 10 * 1000);
   const pu = setInterval (() => {
    var time = new Date();
    var text = '';
    if (time.getMinutes() == 0 && time.getHours() == pu_loop) {
        for (var i = 0; i <= pu_loop; i++) {
          text += emoji.pu;
        }
        client.channels.get("463745366643310592").sendMessage(text);
        pu_loop++;
        if (pu_loop > 12) pu_loop = 0;
    }
  }, 1 * 1000);
  */
});
          
client.on('message', message =>
{
	if(message.isMemberMentioned(client.user))
	{
		message.reply( '事案ですか？' );
		return;
	}
});

if(process.env.DISCORD_BOT_TOKEN == undefined)
{
	console.log('please set ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );