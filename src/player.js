
class Player {
    constructor(name, character) {
        this.name = name;
        this.character = character;
        this.position = 0;
        this.speed = character.baseSpeed;
        this.items = [];
    }

    move() {
        this.position += this.speed;
    }

    useItem(target) {
        if (this.items.length === 0) {
            console.log(`${this.name} não tem itens para usar.`);
            return;
        }
        const item = this.items.shift();
        console.log(`${this.name} usa ${item.name}!`);
        item.effect(this, target);
    }
}

module.exports = Player;
