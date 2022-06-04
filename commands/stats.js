const Discord = require('discord.js');
const ms = require('parse-ms');
const config = require('../config.json');
module.exports = {
  name: "stats",
  aliases: ["stats", "botinfo"],
  description: "",
  execute: async(client, message, args, data, db, ping) => {

    let uptime = []

    Object.entries(ms(client.uptime)).map((x, y) => {
      if (x[1] > 0 && y < 4) uptime.push(`${x[1]} ${x[0]}`)
    })


    const embed = new Discord.MessageEmbed()
    .setColor("#2f3136")

    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setDescription(`<:info:929201887511719946> __Informations :__\n> RAM: \``+(process.memoryUsage().rss / 1024 / 1024).toFixed(2)+`MB\`\n> Uptime: \``+uptime.join(", ")+`\`\n> Ping: \``+Math.round(client.ws.ping)+`ms\`\n> Discord.js: \``+Discord.version+`\`\n> Node.js: \``+process.versions.node+`\`\n<:info:929201887511719946> __Statistics :__\n> Serveur(s): \``+client.guilds.cache.size+`\`\n> Membre(s): \`` +client.users.cache.size+`\`\n❤️ Merci à Ceed d'avoir partager le code.`)
     .setImage("https://images-ext-1.discordapp.net/external/4DeaYQcsYoMmeYyfLXcXJU4ClNDBUxKNha2JOIqHn1c/https/share.creavite.co/f5GvKKVgvhoLj7Uf.gif")
    message.channel.send(embed)
  }

}
