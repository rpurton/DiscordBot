const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS);

const bot = new Client({ intents: myIntents });

bot.once('ready', () => {
    console.log('Ready!');
});

bot.on("messageCreate", (message) => {
    if (message.content === "yo") {
        message.channel.send(`I like spaghetti`);
    } else;
});

bot.on("messageReactionAdd", (msg) => {
    if (msg.content === "happy") {
        msg.react(`😄`);
    } else;
});
//ask for a type of pasta, it sends a recipe with that pasta

bot.login(token);