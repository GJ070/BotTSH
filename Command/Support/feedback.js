const Discord = require("discord.js")

module.exports = {
    name: "feedback",
    description: "Suggest something!",
    async execute(message, args) {

        if(message.channel.id === '813683695570649098') {

        message.delete()


        if(message.content.includes("!feedback")) {
            message.channel.send("Please give your feedback")
        

            var feedbackfilter = m => m.author.id == message.author.id;
            try {
            var collectedMessages1 = await message.channel.awaitMessages(feedbackfilter, {time: 120000, max: 1, errors: ['time']});
            } catch (err) {return message.channel.send(`**Whoops**, something went wrong.`);};
            var feedbackresponse = collectedMessages1.first().content
            var feedbackString = feedbackresponse.toString()

            if(feedbackresponse) {
                message.channel.send(`${message.author} done!`).then(msg => {
                msg.delete({ timeout: 3000 })}
                )}
        }
        

        const feedbackEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Suggested by: ${message.author.username}`)
        .setTitle("New feedback has been given:")
        .setDescription(feedbackString)
        .setTimestamp()
        .setFooter("Submitted at:")
        

        message.delete()

        if(feedbackresponse){
            message.guild.channels.cache.get("813683577132023828").send("<@&789990506338713640> new feedback has been given").then(
            message.guild.channels.cache.get("813683577132023828").send(feedbackEmbed))
        }
    }  
}}