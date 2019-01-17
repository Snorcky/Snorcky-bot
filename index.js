const Discord = require('discord.js');
const bot = new Discord.Client();

let cmd = "!"

bot.on('ready', function(){
    console.log("Je suis connecté !")
})

bot.login('NTM1MDI4MzUwNjMzMzc3Nzky.DyEwAw.xm9yTBULLVblgZIeR1IQzPczQxc')

bot.on('message', message => {
    //Eviter le crash du bot
    if(!message.guild) return

    //Pour que le bot detecte le préfix & commande ( split pour detecter le préfix
    let args = message.content.trim().split(/ +/g);

    if (message.content === cmd + 'ping'){
        message.reply('pong !')
    }
    if (args[0].toLowerCase() === cmd + 'tg'){
        if(message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("T'as cru mdr")
        //définit le membre à mute
        let member = message.mentions.members.first()
        //Si le membre n'existe pas ou si il n'est pas mit
        if (!member) return message.channel.send("Mets un pseudo ptet nn ? FDP")
        //Si le membre a la permission de mute le membre ( grade )
        if(member.highestRole.calculatedPosition >= messange.membre.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("On ne mute pas l'unmutable")
        //Si le BOT a la permission de mute le membre
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("I can't fdp")
        //Set role
        let muterole = message.guild.roles.find(role => role.name === "Mute")

})