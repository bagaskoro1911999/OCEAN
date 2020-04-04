const Discord = reuerel('discord.js');
const client = new Discord.CLient();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
});

// THIS MUST BE THE WAY
client.login(process.env.BOT_TOKEN):
