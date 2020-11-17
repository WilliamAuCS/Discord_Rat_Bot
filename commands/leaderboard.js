const { bot_name } = require("../index.js")

var sorted_json = [];

module.exports = {
    name: 'leaderboard',
    description: "This command returns the leaderboard of message_count",

    execute(data, message, Discord) {

        for (var key in data.user_data) {
            let d = {
                nickname: data.user_data[key].nickname,
                message_count: data.user_data[key].message_count
            }
            sorted_json.push(d);
        }

        sorted_json.sort((a, b) => {
            return b.message_count - a.message_count;
        });

        // If array is too small to display, add content
        if(sorted_json.length < 5) {
            while(sorted_json.length < 5) {
                sorted_json.push(
                    {
                        nickname: null, 
                        message_count: null
                    }
                )
            }
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("Leaderboard")
            .setDescription("The current message leaderboard")
            .addFields( 
                { name: '1. ' + sorted_json[0].nickname + ' - ' + sorted_json[0].message_count , value: '\u200B' },
                { name: '2. ' + sorted_json[1].nickname + ' - ' + sorted_json[1].message_count, value: '\u200B' },
                { name: '3. ' + sorted_json[2].nickname + ' - ' + sorted_json[2].message_count, value: '\u200B' },
                { name: '4. ' + sorted_json[3].nickname + ' - ' + sorted_json[3].message_count, value: '\u200B' },
                { name: '5. ' + sorted_json[4].nickname + ' - ' + sorted_json[4].message_count, value: '\u200B' },
            )
            .setTimestamp()
            .setFooter(bot_name, 'https://i.imgur.com/R72P7Sa.png?2');

        message.channel.send(embed);
        sorted_json = [];
    }
}