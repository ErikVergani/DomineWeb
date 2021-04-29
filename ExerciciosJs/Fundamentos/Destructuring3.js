function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

const limite = { min: 100, max: 200 }
console.log(rand(limite));

console.log(rand({ min:500,max:600 })); //com limite
console.log(rand({}));// limite conforme estabelecido dentro da função.
