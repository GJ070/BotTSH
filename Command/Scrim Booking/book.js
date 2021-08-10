const Discord = require('discord.js');

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function cancel(length) {
  var result           = '';
  var characters       = '0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const name = makeid(5).toString()

const password = makeid(5).toString()

const cancelcode = cancel(4).toString()

module.exports = {
    name: "book",
    description: "A command for planning scrims",
    async execute(message, args) {
      
      

      message.delete();     

      
      
      setTimeout(function() {
        
        const bookEmbed = new Discord.MessageEmbed()
          .setColor('#66F6FF')
          .setTitle(`${message.author.username}, It's time to prepare....`)
          .addFields(
            { name: 'Booked Scrim:', value: `${teamString}` },
            { name: "Want to cancel the scrim?", value: `Type "__!cancel${cancelcode}__"` },
            { name: 'Details of the lobby:', value: `Name: ${name} / Password: ${password}`}
          )
          .setImage("https://media.discordapp.net/attachments/810847777075888149/826750721113587712/Scrimming_Time_.jpg")
          .setFooter('Having issues/problems? Please contact support by creating a ticket')
        message.author.send(bookEmbed)
      }, response * 60000 )

      console.log(`Scrim cancel code: ${cancelcode} `)
  }
}