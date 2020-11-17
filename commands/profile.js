const { createUserProfile, writeToData } = require('../manage_data');
const { bot_name } = require('../index.js')

// Keys the user is able to manage with commands
const json_keys_standard = [
    "nickname", "pronouns", "description"
];
// Keys for privileged users
const json_keys_privileged = [
    "username", "message_count", "nickname", "pronouns", "description"
];
// Privileged roles and their names
const privileged_roles = {
    lesser_god: "777715211632508950",
}

module.exports = {
    name: 'profile',
    description: "This command manages a user's profile.",

    execute(message, args, data, Discord) {
        let current_user;
        let privileged = false;

        if (!!data.user_data[message.author.id]) {
            current_user = data.user_data[message.author.id];
        }
        else {
            // Should never run, however if user is still not in system, create profile
            console.log("not in system")
            createUserProfile(message);
        }

        // Checks if current member has privileges
        if (message.member.roles.cache.some((r) => {
            for (var key in privileged_roles) {
                if (r.id === privileged_roles[key]) {
                    privileged = true;
                    break;
                }
            }
        }));

        // If there are arguments: 
        if (args.length > 0) {
            // If there are arguments but not three, print error message
            if (args.length != 3) {
                message.channel.send("Invalid syntax");
                message.channel.send("Enter `!help profile` for more information");
                return;
            }
            else {
                if (args[0].toLowerCase() === 'set') {
                    // If user has privilege
                    if (privileged) {
                        // Parse json_keys_privileged array
                        for (let i = 0; i < json_keys_privileged.length; i++) {
                            // If key is correct, make changes
                            if (args[1].toLowerCase() === json_keys_privileged[i]) {
                                current_user[json_keys_privileged[i]] = args[2];
                            }
                        }
                    }
                    // If user does not have privilege
                    else {
                        // Parse json_keys_standard array
                        for (let i = 0; i < json_keys_standard.length; i++) {
                            // If key is correct, make changes
                            if (args[1].toLowerCase() === json_keys_standard[i]) {
                                current_user[json_keys_standard[i][args[2]]];
                            }
                        }
                    }
                    writeToData(current_user);
                }
                else {
                    message.channel.send("Invalid arguments");
                    message.channel.send("Enter `!help profile` for more information");
                    return;
                }
            }
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Your Profile')
            .setAuthor(current_user.username)
            .setThumbnail(message.author.displayAvatarURL())
            .addFields(
                { name: "-------------------------------------------------------------------------------", value: "\u200b" },
                { name: 'Nickname', value: current_user.nickname, inline: true },
                { name: 'Message Count', value: current_user.message_count, inline: true },
                { name: "Pronouns", value: current_user.pronouns, inline: true },
                { name: 'ID', value: message.author.id, inline: true },
                { name: 'Description', value: current_user.description },
                { name: "-------------------------------------------------------------------------------", value: "\u200b" },
            )
            .setTimestamp()
            .setFooter(bot_name, 'https://i.imgur.com/R72P7Sa.png?2');

        message.channel.send(embed);
    }
}


// Reaction code for later use
// message.channel.send(embed).then( (m) => {
//     // Reacting to embed with options for user to click
//     m.react(client.emojis.cache.get('751487507644022857'));

//     // Creating filter for collector
//     const filter = (msg, user) => {
//         return msg.emoji.id === '751487507644022857' && user.id === message.author.id;
//     }
//     // Creating collector to search for filter
//     const collector = m.createReactionCollector(filter, {time: 10000});
//     // On collector success: 
//     collector.on('collect', ( r ) => {
//         if(r.emoji.id === '751487507644022857') {
//             console.log("worked!");
//         }
//     });
// });