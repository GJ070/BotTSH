module.exports = {
    name: 'done',
    description: 'Uploads a file for a new player',
    async execute(message, args){
        if(message.channel.id === '790163139060039680') {
            

        message.guild.channels.cache.get("790162038714138634").send("<@&789990506338713640> incoming application. Please take a look at here: https://docs.google.com/spreadsheets/d/1yWs3-_rXjAtyltvDOUE3dPhnGafig__oW0Oy3YuFMCQ/edit#gid=173617140")
        } else {
            message.channel.send("Error: **Wrong channel usage**, please use **<#790163139060039680>** for this command.").then(msg => {
                msg.delete({ timeout: 5000 });
        })
    }}
};