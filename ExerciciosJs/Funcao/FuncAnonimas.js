const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, op = soma) {
    console.log(op(a, b));
}

imprimirResultado(3, 4) // 3 parametro pego como padrao a funcao soma
imprimirResultado(3, 4, function (x, y) {
    return x - y
}) // o terceiro parametro é uma funcao com multiplas linhas, isso acontece com frequencia no mundo da programação de js

imprimirResultado(3,4,(x,y) => x*y) // funcoes Arrow sempre sao anonimas pois nao conseguimos dar nome a elas

// em obj tb...

const pessoa = {
    falar: function () {
        console.log("salve!");
    }
}
// tambem pode ser escrito assim
/*const pessoa = {
falar() {
        console.log("salve!");
    }
}*/ 

pessoa.falar()