module.exports = {
    name: 'purge',
    description: 'will delete the amount of messages that given up to the bot',
    async execute(message, args){
        if(message.member.roles.cache.has('789990506338713640')){
            if(!args[0]) return message.reply("Please enter a amount of messages you want to clear");
            if(isNaN(args[0])) return message.reply("Enter a valid number please");
            
            if(args[0] > 100) return message.reply("Enter a number less than 100");
            if(args[0] < 1) return message.reply("Enter a number more than 1");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages)
        });
    }
}};