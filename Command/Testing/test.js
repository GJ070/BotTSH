const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const d = new Date();

module.exports = {
    name: 'test',
    description: 'gives FAQ',
    async execute (message, args){
        message.delete();
        d.toDateString()
    }
}