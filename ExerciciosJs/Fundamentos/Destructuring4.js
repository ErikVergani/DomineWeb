function rand([min = 0, max = 0]) {
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 48]));
console.log(rand([992]));
console.log(rand([, 10]));
console.log(rand([]));
