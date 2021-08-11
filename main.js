const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const config = require("./config.json");
require('discord-buttons')(client);
const SQLite = require("better-sqlite3");
const db = new SQLite('./teams.sqlite');


const prefix = "!"

const d = new Date();

const memberCounter = require('./Command/Staff Commands/member-count')

const fs = require('fs')


client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./Command');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./Command/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./Command/${folder}/${file}`);
		client.commands.set(command.name, command);
  }
}

client.once('ready' , () => {
	console.log('Scrim Bot online! Version:', Discord.version);

  client.api.applications(client.user.id).guilds("789990406803816459").commands.post({
    data:{
      name: 'test',
      description: "gives an answer",
    }
  })

  client.ws.on('INTERACTION_CREATE', async interaction => {

    const slashCommand = interaction.data.name.toLowerCase();

    if(slashCommand == "test"){
      client.api.interactions(interaction.id, interaction.token).callback.post({
        data:{
          type: 4,
          data:{
            content: "This is a test!"
          }
        }
      })
    }

  })
});


client.on('message' , message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(client.commands.has(command)) client.commands.get(command).execute(message, args);

});

client.on('guildMemberAdd', member => {
  member.guild.channels.get('811361137802084353').send('@' + member.user.username + ' has joined the server! :smile:' + {files: ['./Welcome.jpg  ']});
});

client.on('guildMemberRemove', member => {
  member.guild.channels.get('812516394326556742').send('@' + member.user.username + ' has left the server! :cry:');
});


client.on("ready", () => {
  memberCounter(client);
});


client.on('clickButton', async (button) => {
    if (button.id === 'Thread') {
      await button.reply.defer()
  }
})

client.on('ready', () => {
    // Check if the table "relationship" exists.
    const table = db.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'teams';").get();
    if (!table['count(*)']) {
        // If the table isn't there, create it and setup the database correctly.
        db.prepare("CREATE TABLE teams (owner TEXT PRIMARY KEY, org_name TEXT, mmr TEXT);").run();

        db.prepare("CREATE UNIQUE INDEX idx_teams_owner ON teams (owner);").run();
        db.pragma("synchronous = 1");
        db.pragma("journal_mode = wal");
    }
    client.getTeams = db.prepare("SELECT * FROM teams WHERE owner = ?");
    client.setTeams = db.prepare("INSERT OR REPLACE INTO teams (owner, org_name, mmr) VALUES (@owner, @org_name, @mmr);");
});

client.on("ready", () => {
const guild = client.guilds.cache.get('789990406803816459');
const memberCount = guild.memberCount
client.user.setActivity(`${memberCount.toString()} users`, { type: 'LISTENING' })
})


console.log(client.commands)

client.login(process.env.token)