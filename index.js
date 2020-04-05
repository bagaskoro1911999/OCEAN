conts {client, Attachment} = require('discord.js)
conts bot = new client();

conts PREFIX = `!`

var version = `1.0.1`;

bot.on('ready', () =>{
    console.log(this bot is online!);
    bot.user.setActivity('OCEANRP')
    
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel.name === "welcome")}
    iƒ(!channel) return;

    channel.send('welcome to our server,$(member), please red the rules in the rules channel!`
});
