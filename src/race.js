
class Race {
    constructor(players, trackLength) {
        this.players = players;
        this.trackLength = trackLength;
        this.finished = false;
    }

    start() {
        console.log("Corrida iniciada! Boa sorte!");
        while (!this.finished) {
            this.players.forEach(player => {
                player.move();
                if (Math.random() < 0.3) {
                    const itemNames = Object.keys(require('./item'));
                    const randomItem = require('./item')[itemNames[Math.floor(Math.random() * itemNames.length)]];
                    player.items.push(randomItem);
                    console.log(`${player.name} pegou o item ${randomItem.name}!`);
                }
            });
            this.players.sort((a, b) => b.position - a.position);
            console.log("Posições:");
            this.players.forEach((p, i) => console.log(`${i + 1}º ${p.name} - Posição: ${p.position}`));

            if (this.players.some(p => p.position >= this.trackLength)) {
                console.log(`\n${this.players[0].name} venceu a corrida!`);
                this.finished = true;
            }
        }
    }
}

module.exports = Race;
