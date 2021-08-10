const Discord = require('discord.js');

module.exports = {
    name: 'faq',
    description: 'gives FAQ',
    async execute (message, args){

        message.delete()
        const FAQEmbed1 = new Discord.MessageEmbed()
        .setColor("#6FF6FF")
        .setTitle("1 // FAQ (Information Server)")
        .setDescription("All the information you need to know about our server!")
        .addFields(
            { name: "1.1 // The verification isn't working, what can I do?", value: "If you got any problems within our server, you can head over to <#795842013660446721> to create a ticket for support." },
            { name: "1.2 // How can I apply for being staff?", value: "Go to <#826384026544898058> __(if this channel isn't visible it means we got rid of it on purpose)__ and click on the Google Form link to get started. Once the Form has been filled out completely (all obligated questions) it can be sent over. This can take up to one week until the eventual result will be made." },
            { name: "1.3 // How can I turn off pings?", value: "You can go to '__Notification Settings__' > '__Suppress all role-@mentions__' and or '__Suppress @everyone and @here__'. *(Only 'Suppress @everyone and @here' is recommended!)*" },
            { name: "1.4 // What is the text-channel #general for?", value: "This channel is made to have a litte talk and talk off-topic from our server. Keep in mind tho that this channel is not ment to ask questions. Please if you have any question(s)/problem(s) and or issue(s), you can head over to <#823860712447279109> to see if your question is in the list. If the question __does not__ happen to be in the list, you can go to <#795842013660446721> to make a ticket for your question(s), problem(s) and or issue(s)." },
            { name: "1.5 // How can I be updated with the latest announcements?", value: "To follow our latest news, you can head over to <#809095309858439218> and use the '__Follow__' button to select a channel you want to keep up to date of our latest announcements!" },
            { name: "1.6 // I got problems with the ticket/report command, what can I do?", value: "Please contact our <@&793561599566413834> in DMs. Describe your problem as detailed as possible and follow the given instructions." },
        )
        

        const FAQEmbed2 = new Discord.MessageEmbed()
        .setColor("#6FF6FF")
        .setTitle("2 // FAQ (Information Apply Form)")
        .setDescription("All the information you need to know about our apply form!")
        .addFields(
            { name: "2.1 // Are there any fuctions I can do without signing up?", value: "If you are a player for a team, you'll get permission to the same things then when you are signing up! Although, some commands are really just are for the manager!" },
            { name: "2.2 // What will happen after I filled in my application?", value: "The staff team will look through your application as soon as possible! You'll get contacted with the eventual end result." },
            { name: "2.3 // How do I signup for the scrim program?", value: "You can head over to <#790163139060039680> and type '**!apply**' to fill-in our application." },
            { name: "2.4 // Is it necessary to upload a .png file?", value: "In the applying form it's not obligated, but it's always better to do so. Your team will have a more professional look!" },
            { name: "2.5 // After one of my teams got muted, can I re-sign them up?", value: "The staff team will look more serious into the request of the team and will decide if the team will get accepted again or not, if the request will be made!." },
            { name: "2.6 // Can I start another team/organisation after my other team/organisation got banned?", value: "People that got banned from our Scrim Program have no chance of turning back into the Scrim program, but people that didn't got banned are able to make another team (by permission from manager of the organisation) or another organisation if they want to. All new teams have to be registered, so all teams are obligated to fill in our form." },
            { name: "2.7 // Why do I need to read through the TOS before my application?", value: "This is a important step since the TOS file contains important rules and information about working in our scrim schema. It also contains information about several useful commands and tools you can use to setup and plan a scrim more easily." },
        )

        const FAQEmbed3 = new Discord.MessageEmbed()
        .setColor("#6FF6FF")
        .setTitle("3 // FAQ (Information Discord Bot)")
        .setDescription("All the information you need to know about our Discord bot!")
        .addFields(
            { name: "3.1 // Are there any fuctions I can do without signing up?", value: "If you are a player for a team, you'll get permission to the same things then when you are signing up! Although, some commands are really just are for the manager!" },
            { name: "3.2 // Are there any commands/tools I can use to make things easier?", value: "Please check our TOS where you can find a commands section. In that section you can find all necessary information about all of our commands." },
            { name: "3.3 // Why did I got muted/banned on the Discord bot?", value: "There are several reason why you got muted and eventually got banned on the bot. We suggest looking through the TOS Server rules to check out which rules will affect the usage of our bot." },
            { name: "3.4 // I found a bug/issue/problem with the Discord bot, what can I do?", value: "Contact our Staff by __creating a ticket__. You can <#795842013660446721> with '**!ticket**'" },
            { name: "3.5 // Can I cancel a planned Scrim?", value: "If you want to cancel a planned scrim, you can type '**!cancel**' with the unique code you got with signing up for the planned scrim. All the mentioned people will get a DM from the bot that the scrim is cancelled." },
            { name: "3.6 // Why am I blocked out from other commands that my manager can execute?", value: "The reasons we're doing this is because: The server may be overwhelmed if everyone will spam with several commands + A Owner/Manager is higher in rank and is responsible for anything within their organisation/team(s)." },
            { name: "3.7 // Are button commands also executable in DMs?", value: "Button commands are only executable in the server because the bot can't detect any other channels if a button command is been executed in DMs." },
        )

        const FAQEmbed4 = new Discord.MessageEmbed()
        .setColor("#6FF6FF")
        .setTitle("4 // FAQ (Information Scrim Schema)")
        .setDescription("All the information you need to know about our Scrim Schema!")
        .addFields(
            { name: "4.1 // Why do I need a team that has 3 players minimal?", value: "This is from experience the best option to have. This makes sure that you don't have to cancel last second, but that you can use your sub instead." },
            { name: "4.2 // Is it possible to switch (a) player(s) during a scrim match?", value: "You can only switch __between__ matches and **not in** matches. Most leagues and or tournaments apply this rule and this is best way to play it fair for everyone!" },
            { name: "4.3 // How is the matchmaking gonna be?", value: "Matchmaking will be made with a special unique code consisting of a 5-character name and a 5-character password. With that you can setup or join a lobby so you are able to scrim against each other." },
            { name: "4.4 // How do I setup a match __within__ the game?", value: "From the Main Menu, you go to '__Play__' > '__Custom Matches__' > '__Private Match__' > '__Create a Private Match__'. Then make sure to check in '__Mutual Settings__' that every setting is on the '__Standard__' Match settings (You can do this with the triangle knob on your controller) and that the '__Team Settings__' are normal or team colours. Don't forget to set the private match on '__Name/Password__' so the other team can join with the same name and password code." },
            { name: "4.5 // What if my opponent(s) are breaking (one of) the TOS rules?", value: "You can create a thread to report a situation within or outside the game. **Screenshots are required** and ensure you're **100% sure** about your decision __before__ reporting." },
        )   

        const FAQEmbed5 = new Discord.MessageEmbed()
        .setColor("#6FF6FF")
        .setTitle("5 // FAQ (Information Beta Tester(s))")
        .setDescription("All the information you need to know about our Beta testers!")
        .addFields(
            { name: "5.1 // Is the Beta testers role accessible for everyone?", value: "Only several persons will personally will be invited by __one of us__ after applying on the form!! If you get invited by non-staff members and or bots please ignore the invite due to scamming activities." },
            { name: "5.2 // What features does the Beta tester's role support?", value: "Our Beta tester(s) get early access to our future plans, testing commands for our projects and many more! We wanna ensure everything is working well and that people like our ideas. Because of that we can plan better future features upon that feedback." },
            { name: "5.3 // Will Beta testers be having access to Premium Subscription tools?", value: "Beta tester(s) will be capable of testing __all__ of our ideas, commands and all our other ideas, including Premium subscription features." },
        )

        
        
        const pictureFAQTop = message.channel.send({files: ['./Designs/FAQ.jpg'] });


        if(message.member.roles.cache.has('789990506338713640') && message.channel.id === '823860712447279109') {
            pictureFAQTop
            await (pictureFAQTop)
            message.channel.send(FAQEmbed1)
            await (FAQEmbed1)
            message.channel.send(FAQEmbed2)
            await (FAQEmbed2)
            message.channel.send(FAQEmbed3)
            await (FAQEmbed3)
            message.channel.send(FAQEmbed4)
            await (FAQEmbed4)
            message.channel.send(FAQEmbed5)
            
        } else {
            message.reply("This command is not available for you!").then(msg => {
                msg.delete({ timeout: 5000 });
            
        })}
    }
}