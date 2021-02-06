const Discord = require("discord.js");
require('dotenv').config();
const config = require('config');
const client_key = config.get('discordtoken');

const getWeather = require("./modules/weather/weather.js");
const ping = require('./modules/ping/ping.js');
const covid = require('./modules/covid/covid.js');
const news = require('./modules/news/news.js');
const help = require('./modules/help/help.js');
const fday = require('./modules/freeday/fday.js');

const client = new Discord.Client();

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("|help");
});

client.on("message", async (msg) => {
  let content = msg.content;
  if (content.startsWith('|ping')) {
    ping(msg);
  } else if (content.startsWith('|tiempo')) {
    getWeather(msg);
  } else if (content.startsWith('|covid')){
    covid(msg);
  } else if (content.startsWith('|news')){
    news(msg); 
  } else if(content === '|help'){
    help(msg);
  } else if(content === '|viernes'){
    const connection = await msg.member.voice.channel.join();
    const dispatcher = connection.play('./assets/viernes.mp3',  { volume: 0.5 });
    dispatcher.on('start', () => {
      msg.channel.send('🎉 Que es viernes!')
    });
    dispatcher.on('finish', () => {
      dispatcher.destroy();
      msg.member.voice.channel.leave();  
    });
    dispatcher.on('error', console.error);
  } else if(content === "|e") {
    msg.member.voice.channel.leave();
  } else if(content === "|wow"){
    const connection = await msg.member.voice.channel.join();
    const dispatcher = connection.play('./assets/wow.mp3',  { volume: 1 });
    dispatcher.on('start', () => {
      msg.channel.send('Wow! 👀')
    });
    dispatcher.on('finish', () => {
      dispatcher.destroy();
      msg.member.voice.channel.leave();  
    });
    dispatcher.on('error', (err) => {
      console.error
      msg.channel.send('Must be connected to voice channel');
    });
  }
});

client.login(client_key);
