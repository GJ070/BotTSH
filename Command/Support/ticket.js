module.exports = {
    name: 'ticket',
    description: "A ticket system",
    async execute (message, args){

        let roleVerified = message.guild.roles.cache.get("813692750146568233");

        let roleOwner = message.guild.roles.cache.get("789990506338713640");

        let roleStaff = message.guild.roles.cache.get("827192516083580928");

        message.delete();
        
        if(message.channel.id === '795842013660446721') {
        const user = message.author.username;

        const usr = message.author.id

        const name = "ticket" + "-" + user;

        if(message.guild.channels.cache.get(ch => ch.name === name)){
            message.channel.send("You already created a ticket!").then(msg => {
                msg.delete({ timeout: 5000 })})
            return;
        } else {
            message.guild.channels.create(name).then((chan) =>{

                chan.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false,
                });
                

                chan.updateOverwrite(usr, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                });

                
                chan.updateOverwrite(roleVerified, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false,
                });


                chan.updateOverwrite(roleOwner, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                });


                chan.updateOverwrite(roleStaff, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                });
                

                message.reply("I have created a ticket-channel for you!").then(msg => {
                    msg.delete({ timeout: 3000 }
                )

                chan.send(`Hey **${user}**! Support will arrive soon. Please tell us your problem!`)
                    })
                })
            }
        }
    }
}