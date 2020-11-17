// Rat facts gained from https://www.automatictrap.com/pages/101-rat-facts
var rat_facts = [
    "The fancy rat, also known as rattus norvegicus domestica, is the most common rat kept as a pet. It is a domesticated relative of the Norway rat.", 
    "Rats can lift almost 1 pound which is more than their average body weight.", 
    "There are over 51 species of rats that have been discovered.", 
    "Rats’ jaws are built like an alligator and can exert as much as 7000 pounds per square inch.", 
    "Rats don't sweat, but they regulate their temperature by constricting or expanding blood vessels in their tails.", 
    "Rats are color blind and have very poor eyesight.", 
    "Two compatable brown rats can produce 15,000 rats in only 1 year.", 
    "Small rats can fit through a hole 0.96 inches in diameter -- the size of a quarter.", 
    "Rats can jump 2 feet in the air from a standing position and add an additional foot with a running start. That's equivalent to a human jumping onto a garage roof.", 
    "The maturity of rats can be shown by their yellow teeth. Baby rats initially have white teeth.", 
    "Some rats are great swimmers and can hold their breath for up to 3 minutes.",
    "Rats teeth never stop growing. Their front teeth grow 4.5 to 5.5 inches every year.", 
    "Rats can be trained to do several tricks and they will also learn their name.", 
    "Rats are very clean animals -- even cleaner than cats!", 
    "Rats are masters of communication. Like humans they can communicate through body language, touch, smell, and sound.", 
    "Rats learn what food that they like from smelling the breath of other rats.", 
    "Rats take care of injured and sick members of their group.", 
    "Scientists have identified that rats have dreams.", 
    "Like deer, male rats are called bucks and females does.", 
    "Rat tastebuds are sensitive enough to detect a teaspoon of chocolate in 1302 gallons of milk.", 
    "Rats use their whiskers in the dark to determine an objects size, shape, orientation and texture. This is called 'whisking.'", 
    "Rats have an excellent sense of taste and will frequently test new foods to see if it will make them sick or if they can digest it properly.", 
    "Not all species of rats enjoy living in close proximity to humans, some seek out remote areas. The largest rat species, found deep in the Papua New Guinea jungle, wasn't discovered until 2009!",
];

module.exports = {
    name: 'rat-facts', 
    description: "This command returns a random rat fact.", 

    execute(message, args) {
        let rat_message = rat_facts[Math.floor(Math.random() * rat_facts.length)];
        message.channel.send(rat_message);
    }
}