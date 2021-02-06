const Discord = require("discord.js");

const help = async (msg) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("Renacín")
    .setDescription("Un simple bot que te entrega herramientas enseguida, tales como conocer el clima, conocer estados de COVID-19, buscar noticias, conocer tu ping, etc.")
    .setColor("#F7D122")
    .addField("Comandos", "Puedes encontrar la lista entera de los comandos haciendo [click aqui](https://github.com/AUbillaOliva/DiscordBot)")
    .addField("Contribuir", "Puedes sugerir tus ideas y trabajar en el projecto haciendo [click aqui](https://github.com/AUbillaOliva/DiscordBot)")
    .addField("Invitar a un servidor", "Quieres este bot en tu server? Haz [click aqui](https://discord.com/oauth2/authorize?client_id=710308841190850621&scope=bot&permissions=19457&redirect_uri=https%3A%2F%2Fgithub.com%2FAUbillaOliva%2FDiscordBot)");
    msg.channel.send(embed);
};

module.exports = help;
