bot.on('ready', () => {
    console.log('I am ready!');
    bot.user.setStatus('Online')
    bot.user.setGame('#OCEANROLEPLAY')
});
