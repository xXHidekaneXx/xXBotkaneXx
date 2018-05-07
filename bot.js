const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log('hi');
});

function coinToss() {
    return (Math.floor(Math.random() * 2) === 0);
}
client.on('message', (message) => {
if(message.content.toLowerCase() == 'good morning' || message.content.toLowerCase() == 'i\'m so tired') {
if (coinToss()) {
message.reply('Good morning to you too!');
} else {
 message.reply('Good morning, how are you?');
		}
	}
});
  
client.login(process.env.BOT_TOKEN);
