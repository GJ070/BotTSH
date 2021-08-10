const Discord = require('discord.js');

module.exports = {
    name: "scrims",
    description: "Open scrims",
    execute(message, args) {

        

        
        message.delete()
    
        

        const scrimsEmbed = new Discord.MessageEmbed()
        .setColor("#6FF6FF")
        .setTitle("Open scrims:")
        .addFields(
            { obj }
        )
        .setFooter("")
        message.channel.send(scrimsEmbed)

    }
}

