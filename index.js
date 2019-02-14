const Discord = require('discord.js');
const Bot = new Discord.Client();
const TOKEN = process.env.BOT_TOKEN;
const Prefix = ';'

Bot.on('ready', () => {
    console.log('Bot is activated.');
});

Bot.on('message', message => {
    const auth = message.author;
    const user = auth.username;
    const cont = message.content;
    const msg = cont.toLowerCase();
    const chan = message.channel;

    if (msg === Prefix + 'shift') {
        embed = new Discord.RichEmbed()

        .setTitle('Shift')
        .setDescription(`A shift is currently being held by ${user}! Come on down for a nice relaxing drink, or for a potentiol promotion!`)
        .setColor('#007FFF')
        .setAuthor('Maui')

        Bot.channels.find(x => x.name === 'session-announcments')
        message.delete();
    };

});

Bot.login(TOKEN);
