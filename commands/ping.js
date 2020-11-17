module.exports = {
    name: 'ping', 
    description: "This command returns 'pong' to test the bot's online status.", 

    execute(message, args) {
        message.channel.send('pong!');
    }
}