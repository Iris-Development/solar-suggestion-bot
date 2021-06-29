const { Intents } = require('discord.js');
const Solar = require('./Utils/solar');
const client = new Solar({ intents: [Intents.ALL] }, { allowedMentions: { parse: ['users', 'roles'], repliedUser: false } });
client.start();