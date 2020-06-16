const Discord = require("discord.js");
const client_key = require("./config/config.js");

const getWeather = require("./modules/weather/weather.js");
const ping = require('./modules/ping/ping.js');
const covid = require('./modules/covid/covid.js');
const news = require('./modules/news/news.js');

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("BRIGIDOOO", {
    type: "STREAMING",
    url: "https://www.twitch.tv/argrinus",
  });
});

client.on("message", (msg) => {
  let content = msg.content;
  if (content === "ping") {
    ping(msg);
  } else if (content.startsWith("tiempo")) {
    getWeather(msg);
  } else if (content.startsWith("covid")){
    covid(msg);
  } else if (content.startsWith('news')){
    news(msg);
  }
});

client.login(client_key);
