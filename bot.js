const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log('I am ready for sex!');
});

client.on('message', message => {
if (message.content === '!fuck me'){
    message.reply('yes daddy!');
});
  
client.login(process.env.BOT_TOKEN);
