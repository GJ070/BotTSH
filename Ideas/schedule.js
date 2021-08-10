const momentTimezone = require("moment-timezone")
const { MessageCollector } = require('discord.js')

const scheduledSchema = require('../Command/Schedule/scheduled-schema')

module.exports = {
    name: 'schedule',
    description: 'schedule your message',
    requiredPermissions: ['ADMINISTRATOR'],
    expectedArgs: '<Channel tag> <YYYY/MM/DD> <HH:MM> <"AM" or "PM"> <Timezone>',
    minArgs: 5,
    maxArgs: 5,
    init: (client) => {
        const checkForPosts = async () => {
            const query = {
                date: {
                    $lte: new Date.now()
                }
            }

            const results = await scheduledSchema.find(query)

            for (const post of results) {
                const { guildId, channelId, content } = post

                const guild = await client.guilds.fetch(guildId)
                if(!guild) {
                    continue
                }
                const Channel = guilds.channels.cache.get(channelId)
                if(!Channel) {
                    continue
                }

                message.author.send(content)
            } 

            await scheduledSchema.deleteMany(query)

            setTimeout(checkForPosts, 1000 * 10)
        }

        checkForPosts()
    },
    callback: async ({ args }) => {
        
        const [date, time, clocktype, timeZone] = args

        if(clocktype !== "AM" && clocktype !== "PM") {
            message.reply(`You must provide either "AM" or "PM". You provided: "${clocktype}"`).then(msg => {
                msg.delete({ timeout: 5000 })}
            )
            return;
        }

        const validTimeZones = momentTimezone.tz.names()
        if(!validTimeZones.includes(timeZone)) {
            message.reply('Unknown timezone!').then(msg => {
                msg.delete({ timeout: 5000 })}
            )
            return;
        }

        const targetDate = momentTimezone.tz(
            `${date} ${time} ${clocktype}`,
            'YYYY-MM-DD HH:mm A',
            timeZone
        )

        message.reply('No valid timezone').then(msg => {
            msg.delete({ timeout: 10000 })}
        )

        const filter = (newMessage) => {
            return newMessage.author.id === message.author.id
        }

        const collector = new MessageCollector(channel, filter, {
            max: 1, 
            time: 1000 * 60 // 60 seconds
        })

        collector.on('end', async (collected) => {
            const collectedMessage = collected.first()

            if(!collectedMessage) {
                message.reply('You did not reply in time!').then(msg => {
                    msg.delete({ timeout: 5000 })}
                )
                return;
            }

            message.reply('Your message has been scheduled.').then(msg => {
                msg.delete({ timeout: 5000 })}
            )

            await new scheduledSchema({
                date: targetDate.valueOf(),
                content: collectedMessage.content,
                guildId: guild.id,
                channelId: targetChannel.id
            }).save()
        })
    },
}