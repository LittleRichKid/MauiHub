const Discord = require('discord.js');
const Bot = new Discord.Client;
const TOKEN = process.env.BOT_TOKEN;

Bot.on('ready', () => {
    console.log('Bot is activated.');
});

Bot.login(TOKEN);
