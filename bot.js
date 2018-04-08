const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!);
});

 client.on('message', message => {
     if(message.content === '#!ping'){
         message.reply('Fuck you, I refuse to respond to your gay ass!');
     }
 });     
client.login(process.env.BOT_TOKEN);
