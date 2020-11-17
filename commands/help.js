const help_dictionary = {
    avatar: "`Avatar`: This command displays the given user's avatar. If there is no avatar,\
the default avatar will be displayed.\n\
Syntax:\n\
`!avatar <username>` or `!avatar @<username>` - Displays the avatar of given user.",
    ping: "`Ping`: This command returns a 'pong' message to determine if the bot is online.\n" +
"Syntax:\n\
`!ping` - Returns 'pong' if server is online.",
    profile: "`Profile`: This command displays your profile. Additional arguments listed below.\n" +
"Syntax:\n\
`!profile` - Displays your own profile\n\
`!profile <username>` or `!profile !<username>` - Displays given user's profile\n\
`!profile set <category> <string>` - Changes the given category to a new given value. *Note* You may \
not have permissions to alter all values.", 
    leaderboard: "`Leaderboard`: This command displays the leaderboard of the users with the highest message count.\n\
Syntax:\n\
`!leaderboard` - Displays top 5 current members of leaderboard"
}

module.exports = {
    name: 'help',
    description: "This command displays the help page, explaing all of the bot's commands",

    execute(message, args) {
        let help_message = "---------------------------------------------------------------------------Help Message---------------------------------------------------------------------------";

        // Listing requested help commands
        if (args.length > 0) {
            for (let index = 0; index < args.length; index++) {
                const element = args[index].toLowerCase();
                help_message += ("\n" + help_dictionary[element]);
            }
        }
        // Listing all help commands
        else {
            for (const [key, value] of Object.entries(help_dictionary)) {
                help_message += ("\n\n" + value);
            }
        }
        help_message += "\n-----------------------------------------------------------------------------------------------------------------------------------------------------------------------";
        message.channel.send(help_message);
    }
}