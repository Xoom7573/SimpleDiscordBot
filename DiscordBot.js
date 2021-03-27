const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

const prefix = '!';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ban'){
        client.commands.get('ban').execute(message,args);
    }
});
 
client.login('NTkzNzc5Mjc5NzgzNzg4NTQ0.XRS2DA.apkLHLC47sUDX2PG_QN6gGxWNAo');