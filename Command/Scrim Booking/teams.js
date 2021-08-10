const Discord = require("discord.js");
const client = new Discord.Client(); 
const SQLite = require("better-sqlite3")
const db = ('../teams.sqlite')

module.exports = {
    name: 'teams',
    description: 'Teams showing up',
    async execute(message, args){
        message.delete()

        let team = client.getTeams.get(team);
        if (!team) {
        team = {
            owner: null,
            org_name: null,
            mmr: null,
        }
    }

    team.team = args
    client.setTeams.run(team)
    
    }
}
