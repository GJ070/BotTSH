const picture = {files: ['./Division Banners/Space Division Banner.png']}

const Discord = require('discord.js');



module.exports = {
    name: 'divisions',
    description: 'gives FAQ',
    async execute (message, args){

        const spaceEmbed = new Discord.MessageEmbed()
          .setColor('#ffffff')
          .setTitle("Space Division")
          .setDescription('Information about the "Space" Division!')
          .setImage("https://media.discordapp.net/attachments/854642398344773642/855591604667940874/Space_Division_Banner.png?width=1025&height=342")
          .addFields(
            {name: "MMR Range:", value: "1200-1400"}
        )

        message.delete()

        message.channel.send(spaceEmbed)
    }
}