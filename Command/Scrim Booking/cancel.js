const { datacancel } = require("./book")

module.exports = {
    name: 'cancel',
    description: 'cancels a timer for a scrim',
    execute(message, args) {

        

        if(!message.author) {
            message.channel.send("Wrong user input! Try again with the right user!").then(msg => {
                msg.delete({ timeout: 5000 })})
        }
        if(datacancel) {
            message.channel.send("test")
        }
       
    
    }
}

