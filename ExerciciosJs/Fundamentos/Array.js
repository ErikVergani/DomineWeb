const valores = [7.7 , 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push ({id:3}, false, null, 'teste');
console.log(valores);
// um array com cada tipo de dados homogeneos. evite ficar misturando dados.

console.log(valores.pop());//saca fora a ultima coisa dentro do array
delete valores[0];// remove de  dentro do array conforme a posição informada pelo usuário.
console.log(valores);

console.log(typeof valores);