const {Client, Attachment} = require('discord.js');
const bot = new DiscordClient();

const token = "Njk2MjE1ODExMzE1OTkwNjA5.Xolfqg.gUMmJK3UnLqqxsfdacbUvAEmSuI";

const PREFIX = '!';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('OceanRP');

})

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send('welcome to our sever${member}, please read rules in the rules channel')
})
