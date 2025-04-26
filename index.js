
const readline = require('readline');
const Player = require('./src/player');
const Race = require('./src/race');
const characters = require('./src/characters');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bem-vindo ao Mario Kart Node.js Simulator!");

rl.question('Digite seu nome: ', (name) => {
    console.log('Escolha seu personagem:');
    const characterNames = Object.keys(characters);
    characterNames.forEach((c, i) => console.log(`${i + 1} - ${c}`));

    rl.question('Digite o número do personagem escolhido: ', (charIndex) => {
        const chosenCharacter = characters[characterNames[charIndex - 1]];
        const player = new Player(name, chosenCharacter);
        const bot1 = new Player('Yoshi (Bot)', characters.Yoshi);
        const bot2 = new Player('Bowser (Bot)', characters.Bowser);

        const race = new Race([player, bot1, bot2], 100);
        race.start();

        rl.close();
    });
});
