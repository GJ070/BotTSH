module.exports = async (client) =>{
    const guild = client.guilds.cache.get('789990406803816459');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('797916338596610069');
        channel.setName(`Members: ${memberCount.toString()}`);
        
    }, 30000);
}
