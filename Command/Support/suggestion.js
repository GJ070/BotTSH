const Discord = require("discord.js")

module.exports = {
    name: "suggestion",
    description: "Suggest something!",
    async execute(message, args) {

        if(message.channel.id === '814250382216790016') {

        message.delete()
        if(message.content.includes("!suggestion")) {
            message.channel.send("Please give your suggestion")
        

            var suggestionfilter = m => m.author.id == message.author.id;
            try {
            var collectedMessages1 = await message.channel.awaitMessages(suggestionfilter, {time: 120000, max: 1, errors: ['time']});
            } catch (err) {return message.channel.send(`**Whoops**, something went wrong.`);};
            var suggestionresponse = collectedMessages1.first().content
            var suggestionString = suggestionresponse.toString()

            if(suggestionresponse) {
                message.channel.send(`${message.author} done!`).then(msg => {
                msg.delete({ timeout: 3000 })}
                )}
        }
        

        const suggestionEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Suggested by: ${message.author.username}`)
        .setTitle("New suggestion has been given:")
        .setDescription(suggestionString)
            

        message.delete()

        if(suggestionresponse){
            message.guild.channels.cache.get("813683577132023828").send("<@&789990506338713640> new suggestion has been given").then(
            message.guild.channels.cache.get("813683577132023828").send(suggestionEmbed))
        }
    }  
}}