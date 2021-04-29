let valor // nao vou inicializar

console.log(valor);

valor = null; // ausecia de valor
console.log(valor);

const produto = {}
console.log(produto.preco);
produto.preco = 3.50;
console.log(produto);

console.log(!!produto.preco);
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);
console.log(produto);