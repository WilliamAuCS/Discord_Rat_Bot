module.exports = {
    name: 'avatar',
    description: "This command returns the select user's avatar.",

    execute(message, args, client) {

        var user_id = args.shift().toLowerCase();
        var is_id = false;

        if(user_id[0] === '<') {
            user_id = user_id.slice(3, user_id.length - 1);
            is_id = true;
        }
        if(!is_id) {
            try {
                user_id = client.users.cache.find(usr => usr.username.toLowerCase() == user_id).id;
            }
            // If the user
            catch {
                message.channel.send("User not found");
                return;
            }
        }
        
        message.channel.send("Here is the user's avatar");
        message.channel.send(client.users.resolve(user_id).displayAvatarURL());
    }
}