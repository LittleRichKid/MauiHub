const Discrod = require('discord.js');
const Bot = new Discrod.Client();
const TOKEN = process.env.BOT_TOKEN;

Bot.on('ready', () => {
    console.log('Bot is activated.');
});

Bot.login(TOKEN);