module.exports = {
    name: 'report',
    description: "A report system",
    execute (message, args, Discord){

        let roleVerified = message.guild.roles.cache.get("813692750146568233");

        let roleDispute = message.guild.roles.cache.get("827190073706545212");

        let roleStaff = message.guild.roles.cache.get("827192516083580928");

        let roleOwner = message.guild.roles.cache.get("789990506338713640");

        message.delete();

        if(message.channel.id === '827181073490247680') {
        const user = message.author.username;

        const usr = message.author.id

        const name = "report" + "-" + user;

            
        if(message.guild.channels.cache.get(ch => ch.name === name)){
            message.channel.send("You already created a report!").then(msg => {
                msg.delete({ timeout: 5000 })})
            return;
        } else { 
            message.guild.channels.create(name).then((chan) =>{

                chan.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false,
                })
                

                chan.updateOverwrite(usr, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                });


                chan.updateOverwrite(roleVerified, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false,
                });       

                    
                chan.updateOverwrite(roleDispute, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                });


                chan.updateOverwrite(roleStaff, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                    });
                    

                chan.updateOverwrite(roleOwner, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                });
                

                message.reply("I have created a report-channel for you!").then(msg => {
                    msg.delete({ timeout: 3000 }
                )
                
                chan.send(`Hey **${user}**! Welcome to the report system. Before you will begin the report: ensure to keep it gentle, describe in detail as much as possible and be sure who broke (one of) the rules!`)
            })
        });
    }}
}}
