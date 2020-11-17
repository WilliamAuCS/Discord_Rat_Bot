const help_dictionary = { 
    avatar: "#avatar <username> : This command displays the given user's avatar. If there is no avatar,\
 the default avatar will be displayed.", 
    ping: "#ping : This command returns a 'pong' message to determine if the bot is online.", 
}

module.exports = {
    name: 'help', 
    description: "This command displays the help page, explaing all of the bot's commands", 
    
    execute(message, args) {
        let help_message = "---Help Message---";

        // Listing requested help commands
        if(args.length > 0) {
            for (let index = 0; index < args.length; index++) {
                const element = args[index].toLowerCase();
                help_message += ("\n" + help_dictionary[element]);
            }
        }
        // Listing all help commands
        else {
            for(const [key, value] of Object.entries(help_dictionary)) {
                help_message += ("\n" + value);
            }
        }
        message.channel.send(help_message);
    }
}