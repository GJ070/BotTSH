module.exports = {
    name: 'button',
    description: 'Creates a button',
    async execute(message, args){
        message.delete();

        const Discord = require("discord.js")
        const { MessageButton, MessageActionRow } = require("discord-buttons")
            let button = new MessageButton()
            .setStyle("green")
            .setLabel("Confirm")
            .setID("Confirm")

            let button2 = new MessageButton()
            .setStyle("red")
            .setLabel("Cancel")
            .setID("Cancel")

            let buttonRow = new MessageActionRow()
            .addComponent(button)
            .addComponent(button2)

        message.channel.send("Testing....", { component: buttonRow });
    }
}
