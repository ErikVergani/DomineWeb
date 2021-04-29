function aleatorio(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

do {
    opcao = aleatorio(-1, 10);
    console.log(`Valor escolhido ${opcao}`);
} while (opcao != -1);