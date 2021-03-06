// estrategia para gerar um valor padrao 1
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(" Estrategia 1: " + soma1(3), soma1(2, 2, 2));

// estrategia 2, 3 e 4

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // o 1 antes do in arguments significa o index
    c = isNaN(c) ? 1 : c // caso c is NaN, deifna como 1 else get c
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

// valor padrao es2015 < melhor 

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(1, 2, 3), soma3(0, 0, 0));
