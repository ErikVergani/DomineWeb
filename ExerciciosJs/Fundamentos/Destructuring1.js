//novo recurso Es2015

const pessoa = {
    nome: "Erik",
    idade: 19,
    endereco:{
        rua: "Avenida",
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome,idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);