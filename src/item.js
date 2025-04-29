
class Item {
    constructor(name, effect) {
        this.name = name;
        this.effect = effect;
    }
}

const items = {
    casco: new Item('Casco', (user, target) => {
        if (target) {
            target.speed = Math.max(target.speed - 2, 1);
            console.log(`${target.name} foi atingido e sua velocidade caiu para ${target.speed}!`);
        }
    }),
    banana: new Item('Banana', (user, target) => {
        if (target) {
            target.speed = Math.max(target.speed - 1, 1);
            console.log(`${target.name} escorregou e perdeu velocidade! Agora velocidade: ${target.speed}`);
        }
    }),
    turbo: new Item('Turbo', (user) => {
        user.speed += 2;
        console.log(`${user.name} usou turbo! Velocidade agora: ${user.speed}`);
    }),
    estrela: new Item('Estrela', (user) => {
        user.speed += 3;
        console.log(`${user.name} ficou invencível! Velocidade agora: ${user.speed}`);
    })
};

module.exports = items;
