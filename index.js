const {Client, Attachment} = require('discord.js')
const bot = new Client();

const prefix = '!';

var version ='1.0.1';

bot.on('ready', () =>{
    console.log('this bos is Online!');
    bot.user.setActivity('OCEANRP');

})

bot.on('guildMemberAdd', member =>{
    
    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    iƒ(!channel)  

    channel.send(`Welcome to our server, ${member}, please read rules in the rules channel!`)
});

// bot.on
    const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
