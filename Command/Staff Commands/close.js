const endMessagesTicket = [
    "Thanks for using our ticket system, hopefully we helped you with your problem(s)! :wave:", 
    "Ticket has been ended! We thank you for using our ticket system! :smile:", 
    "Farewell, everyone! This ticket will be closed any second! 🚀",

];

const endMessagesReport = [
    "Thank you for reporting! We will be busy with your report :slight_smile:", 

];

module.exports = {
    name: 'close',
    description: 'Closes the ticket',
    async execute(message, args){

    const ticketEndings = endMessagesTicket[Math.floor(Math.random() * endMessagesTicket.length)];

    const reportEndings = endMessagesReport[Math.floor(Math.random() * endMessagesReport.length)];

    const user = message.author.username;

    const nameTicket = "ticket" + "-" + user;

    const nameReport = "report" + "-" + user;

    if(message.member.roles.cache.has('789990506338713640')){
        if(message.guild.channels.cache.find(ch => ch.name === nameTicket)){
            message.channel.send(ticketEndings);
                setInterval(() =>{
                    message.channel.delete()
                }, 3000)  
        } 

    if(message.member.roles.cache.has('789990506338713640')){
        if(message.guild.channels.cache.find(ch => ch.name === nameReport)){
            message.channel.send(reportEndings);
                setInterval(() =>{
                    message.channel.delete()
                }, 3000)  
    
    if(!message.guild.channels.cache.find(ch => ch.name === nameTicket && !message.guild.channels.cache.find(ch => ch.name === nameReport))) {
            return message.channel.send("This channel cannot be closed!") 
        }}
    }}
}}

