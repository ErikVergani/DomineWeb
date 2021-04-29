// armazenando uma funcao em uma var

const imprimirSoma = function(a, b ){
    console.log(a + b);
}
imprimirSoma(2, 3);

// armazenando uma funcao arrow em uma var

const soma = (a, b) =>{
    return a+b;
}
console.log(soma(2, 3));

//retorno implicito

const subtracao =(a, b) => a - b;
console.log(subtracao(2,3));

const imprimir = a => console.log(a);
imprimir('Legal')