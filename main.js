// Response for Uptime Robot
const http = require('http');
http.createServer(function(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Discord bot is active now \n');
}).listen(3000);

// Discord bot implements
const discord = require('discord.js');
client = new discord.Client();
const event = {
    ready : require('./src/ready.js'),
    message : require('./src/message.js')
};
require('dotenv').config();
util = require('./src/util.js');

client.on('ready', () =>
{
    event.ready(client);
});
          
client.on('message', message =>
{
	event.message(client, message);
});

if(process.env.DISCORD_BOT_TOKEN == undefined)
{
	console.log('please set ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}
client.login( process.env.DISCORD_BOT_TOKEN );