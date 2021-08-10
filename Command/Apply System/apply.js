const Discord = require('discord.js');

module.exports = {
    name: 'apply',
    description: 'Application Form',
    async execute(message, args){
        if(message.channel.id === '790163139060039680') {
            message.delete()
            const disbut = require('discord-buttons');
            const { MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');

            let applicationButton = new disbut.MessageButton()
              .setLabel('Application')
              .setStyle('url')
              .setURL('https://docs.google.com/forms/d/e/1FAIpQLSd0kbzSwG3HEunBNkIurzOcDHHSxZYdXwZa0z1V7lw7ZVj8ng/viewform')
            
            let TOSButton = new disbut.MessageButton()
              .setLabel('Download TOS file')
              .setStyle('url')
              .setURL('https://cdn.discordapp.com/attachments/793621864118222879/814570466000765018/The_Scrim_House_TOS.txt')

            let row = new MessageActionRow()
            .addComponents(applicationButton, TOSButton);

            message.channel.send("Click on the 'Application' to start your application or 'Download TOS File' to download our Terms of Service file.", row).then(msg => {
                msg.delete({ timeout: 30000 })})
              
            
            } else {
            message.channel.send("Error: **Wrong channel usage**, please use **<#790163139060039680>** for this command.").then(msg => {
                msg.delete({ timeout: 5000 })
            })
        }
    }
}
