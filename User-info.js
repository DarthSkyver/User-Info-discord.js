const Discord = require('discord.js');
const moment = require('moment');  //pour installer moment => npm i moment

module.exports.run = async (Client, message, args) => {    

    const user = Client.users.cache.get(args[0]) || message.mentions.users.first() || message.author


    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor({name: Client.user.tag ,iconURL: Client.user.avatarURL()})
    .setTitle("User-Info")
    .setDescription(`Voici les infos de ${user.username}`)
    .addField("Pseudo : ", `${user.tag}`)
    .addField("Identifiant : ", `${user.id}`)
    .addField("Création du compte : ", `${moment(user.createdAt).format("Do MMMM YYYY à hh:mm")}`)
    .addField("Membre de ce serveur : ", `${moment(message.guild.members.cache.get(user.id).joinedAt).format("Do MMMM YYYY à hh:mm")}`)
    .setThumbnail(user.avatarURL({ dynamic: true, size: 1024}))
    .setTimestamp()
    .setFooter({text: "Demandé par " + message.author.username, iconURL: message.author.avatarURL()});
                message.channel.send({ embeds : [embed]});
}

module.exports.config = {
    name: 'user-info'
}

// si vous avez le moindre probème, ajoutez moi en amis sur discord : DarthSkyver__#0008
