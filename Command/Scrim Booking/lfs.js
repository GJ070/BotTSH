const Discord = require("discord.js")

module.exports = {
    name: "lfs",
    description: "Looking for scrim",
    expectedArgs: '<DD/MM/YYYY> <HH:MM> <"AM" or "PM"> <Timezone>',
    async execute(message, args) {

        const [date, time, clockType, Timezone] = args

      

        message.delete()
        message.channel.send("Please specify your team").then(msg => {
            msg.delete({ timeout: 10000 })});

        var teamfilter = m => m.author.id == message.author.id;
            try {
            var collectedMessages1 = await message.channel.awaitMessages(teamfilter, {time: 20000, max: 1, errors: ['time']});
            } catch (err) {return message.channel.send(`**Whoops**, something went wrong.`);};
            var teamresponse = collectedMessages1.first().content
            
            var teamString = teamresponse.toString()
            

            if(teamresponse) {
                
                message.channel.send(`${message.author} done!`).then(msg => {
                msg.delete({ timeout: 3000 })}
                )}

        message.channel.send("Please specify your time **in GMT**").then(msg => {
            msg.delete({ timeout: 10000 })});

        var timefilter = m => m.author.id == message.author.id;
            try {
            var collectedMessages1 = await message.channel.awaitMessages(timefilter, {time: 20000, max: 1, errors: ['time']});
            } catch (err) {return message.channel.send(`**Whoops**, something went wrong.`);};
            var timeresponse = collectedMessages1.first().content
            
            var timeString = timeresponse.toString()
            

            if(timeresponse) {
                if(clockType !== 'AM' && clockType !== 'PM'){
                    message.channel.send(`${message.author} something went wrong!`).then(msg => {
                    msg.delete({ timeout: 3000 })});
                    } else {
                message.channel.send(`${message.author} done!`).then(msg => {
                msg.delete({ timeout: 3000 })}
                )}

        message.channel.send("Please specify your MMR/rank range").then(msg => {
            msg.delete({ timeout: 10000 })});

        var MMRfilter = m => m.author.id == message.author.id;
            try {
            var collectedMessages1 = await message.channel.awaitMessages(MMRfilter, {time: 20000, max: 1, errors: ['time']});
            } catch (err) {return message.channel.send(`**Whoops**, something went wrong.`);};
            var MMRresponse = collectedMessages1.first().content
            
            var MMRString = MMRresponse.toString()
            

            if(MMRresponse) {
                message.channel.send(`${message.author} done!`).then(msg => {
                msg.delete({ timeout: 3000 })}
                )}    
        
        
        message.channel.send("Please react with '👍' if the current information is **correct** and '👎' if it's **incorrect**!")
        
        const informationEmbed = new Discord.MessageEmbed()
        .setColor("#6FF6FF")
        .setTitle("Given information:")
        .addFields(
        { name: "Given Team name:", value: teamString }, 
        { name: "Given Time:", value: timeString }, 
        { name: "Given MMR/rank range:", value: MMRString }, 
        )
        message.channel.send(informationEmbed)

            const filter = (reaction, user) => {
                return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
            };

            message.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();

                    if (reaction.emoji.name === '👍') {
                        message.reply('you reacted with a thumbs up.');
                    }
                    else {
                        message.reply('you reacted with a thumbs down.');
                    }
                })

                
            }
        }
}
