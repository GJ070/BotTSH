const Discord = require('discord.js'); 
const client = new Discord.Client(); 

module.exports = {
    name: 'test',
    description: 'gives FAQ',
    async execute (message, args){
        message.delete();

    }
}