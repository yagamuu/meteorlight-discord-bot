const announcement = require('./ready/announcement.js');

module.exports = function (client) {
    console.log('bot is ready!');

    announcement(client);
};