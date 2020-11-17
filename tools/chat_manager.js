module.exports = {

    checkMessage(message) {
        checkForBadLanguage(message);
    }
}

const bad_language = ['stinky', 'gross', 'ugly', 'yucky', 'bad', 'monsters', 'mean', 'yummy'];
function checkForBadLanguage(message) {
    for (let i = 0; i < bad_language.length; i++) {
        if(message.content.includes("rats are " + bad_language[i])) {
            message.channel.send("Say sike right now");
        }
    }
    
}