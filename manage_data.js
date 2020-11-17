const fs = require('fs');
const data = require('./user_data.json');

const default_description = [
    "A pretty neat individual!", 
    "Best in the west!", 
    "The one who knocks", 
    "The best around!", 
    "rat rat rat rat rat", 
    "[input whitty phrase here]", 
]

function getDefaultDescription() {
    return default_description[Math.floor(Math.random() * default_description.length)];
}


module.exports = {

    writeToData(new_data) {
        // Formatting JSON
        fs.writeFileSync('./user_data.json',
            JSON.stringify(new_data, null, ' ')
                .replace(/^ +/gm, '')
                .replace(/: "(?:[^"]+|\\")*",?$/gm, ' $&'));
    }, 

    createBotProfile(msg) {
        let current_bot = {
            "username": msg.author.username,
            "message_count": 1,
            "nickname": msg.author.username, 
            "pronouns": "BOT", 
            "description": getDefaultDescription(),
        }
        data.bot_data[msg.author.id] = current_bot;
        this.writeToData(data);
    }, 

    createUserProfile(msg) {
        let current_user = {
            "username": msg.author.username,
            "message_count": 1,
            "nickname": msg.author.username, 
            "pronouns": "Not Displayed", 
            "description": getDefaultDescription(),
        }
        data.user_data[msg.author.id] = current_user;
        this.writeToData(data);
    }, 

    get_data() {
        return data;
    }, 
}